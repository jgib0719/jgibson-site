/**
 * Error Handling Middleware
 * Centralized error handling with consistent HTTP status codes and logging
 */

const fs = require('fs');
const path = require('path');

/**
 * Custom error class for application-specific errors
 */
class AppError extends Error {
    constructor(message, statusCode = 500, code = 'INTERNAL_ERROR') {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.isOperational = true;
        
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Async error wrapper to catch async/await errors
 */
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

/**
 * Development error response (includes stack trace)
 */
const sendErrorDev = (err, res) => {
    res.status(err.statusCode || 500).json({
        success: false,
        error: {
            message: err.message,
            code: err.code || 'INTERNAL_ERROR',
            statusCode: err.statusCode || 500,
            stack: err.stack,
            details: err.details || null
        }
    });
};

/**
 * Production error response (sanitized)
 */
const sendErrorProd = (err, res) => {
    // Only send operational errors to client
    if (err.isOperational) {
        res.status(err.statusCode).json({
            success: false,
            error: {
                message: err.message,
                code: err.code
            }
        });
    } else {
        // Log the error but don't expose details
        console.error('Non-operational error:', err);
        
        res.status(500).json({
            success: false,
            error: {
                message: 'Something went wrong on our end. Please try again later.',
                code: 'INTERNAL_ERROR'
            }
        });
    }
};

/**
 * Handle Sequelize validation errors
 */
const handleSequelizeValidationError = (err) => {
    const errors = err.errors.map(error => ({
        field: error.path,
        message: error.message,
        value: error.value
    }));
    
    return new AppError(
        'Validation failed',
        400,
        'VALIDATION_ERROR'
    );
};

/**
 * Handle Sequelize unique constraint errors
 */
const handleSequelizeUniqueConstraintError = (err) => {
    const field = err.errors[0]?.path || 'field';
    return new AppError(
        `Duplicate value for ${field}. This record already exists.`,
        409,
        'DUPLICATE_ENTRY'
    );
};

/**
 * Handle Sequelize foreign key constraint errors
 */
const handleSequelizeForeignKeyConstraintError = (err) => {
    return new AppError(
        'Referenced record does not exist',
        400,
        'FOREIGN_KEY_CONSTRAINT'
    );
};

/**
 * Handle database connection errors
 */
const handleDatabaseConnectionError = (err) => {
    return new AppError(
        'Database connection failed. Please try again later.',
        503,
        'DATABASE_CONNECTION_ERROR'
    );
};

/**
 * Log errors to file (if LOG_FILE is configured)
 */
const logError = (err, req = null) => {
    const logData = {
        timestamp: new Date().toISOString(),
        error: {
            message: err.message,
            stack: err.stack,
            code: err.code || 'UNKNOWN',
            statusCode: err.statusCode || 500
        }
    };
    
    if (req) {
        logData.request = {
            method: req.method,
            url: req.originalUrl,
            ip: req.ipHash || req.ip,
            userAgent: req.sanitizedUserAgent || req.get('User-Agent')
        };
    }
    
    const logMessage = JSON.stringify(logData, null, 2) + '\n';
    
    // Log to console
    console.error('Application Error:', logMessage);
    
    // Log to file if configured
    const logFile = process.env.LOG_FILE;
    if (logFile) {
        try {
            const logDir = path.dirname(logFile);
            if (!fs.existsSync(logDir)) {
                fs.mkdirSync(logDir, { recursive: true });
            }
            fs.appendFileSync(logFile, logMessage);
        } catch (fileError) {
            console.error('Failed to write to log file:', fileError.message);
        }
    }
};

/**
 * Main error handling middleware
 */
const globalErrorHandler = (err, req, res, next) => {
    // Set default values
    err.statusCode = err.statusCode || 500;
    err.code = err.code || 'INTERNAL_ERROR';
    
    // Log all errors
    logError(err, req);
    
    let error = { ...err };
    error.message = err.message;
    
    // Handle specific error types
    if (err.name === 'SequelizeValidationError') {
        error = handleSequelizeValidationError(err);
    } else if (err.name === 'SequelizeUniqueConstraintError') {
        error = handleSequelizeUniqueConstraintError(err);
    } else if (err.name === 'SequelizeForeignKeyConstraintError') {
        error = handleSequelizeForeignKeyConstraintError(err);
    } else if (err.name === 'SequelizeConnectionError' || err.name === 'SequelizeConnectionRefusedError') {
        error = handleDatabaseConnectionError(err);
    } else if (err.code === 'ENOENT') {
        error = new AppError('Requested resource not found', 404, 'RESOURCE_NOT_FOUND');
    } else if (err.code === 'EMFILE' || err.code === 'ENFILE') {
        error = new AppError('Server temporarily unavailable', 503, 'SERVER_OVERLOAD');
    }
    
    // Send appropriate response based on environment
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(error, res);
    } else {
        sendErrorProd(error, res);
    }
};

/**
 * 404 handler for undefined routes
 */
const notFoundHandler = (req, res, next) => {
    const error = new AppError(
        `Cannot ${req.method} ${req.originalUrl}`,
        404,
        'ROUTE_NOT_FOUND'
    );
    next(error);
};

/**
 * Unhandled promise rejection handler
 */
const unhandledRejectionHandler = () => {
    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Promise Rejection at:', promise, 'reason:', reason);
        // Log but don't crash the process
        logError(new Error(`Unhandled Promise Rejection: ${reason}`));
    });
};

/**
 * Uncaught exception handler
 */
const uncaughtExceptionHandler = () => {
    process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
        logError(err);
        
        // Graceful shutdown
        process.exit(1);
    });
};

module.exports = {
    AppError,
    asyncHandler,
    globalErrorHandler,
    notFoundHandler,
    unhandledRejectionHandler,
    uncaughtExceptionHandler
};