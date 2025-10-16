/**
 * CCNA Progress API Server
 * Refactored for clean architecture with proper separation of concerns
 * Version 2.0 - Modular design with controllers, services, and routes using Sequelize ORM
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

// Import Sequelize models and database utilities
const { sequelize, testConnection, initializeDatabase, closeConnection } = require('./models');

// Import route handlers
const createAPIRoutes = require('./routes/index');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy (Apache is in front of this service)
app.set('trust proxy', 1);

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['https://jgibson.site', 'http://jgibson.site'],
    credentials: false // No cookies/sessions needed for anonymous tracking
}));

// Rate limiting to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipFailedRequests: false
});

// Apply rate limiting to API routes
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} ${req.path} - IP: ${req.ip}`);
    next();
});

// Initialize Sequelize database
async function initializeApp() {
    try {
        // Test database connection
        const connected = await testConnection();
        if (!connected) {
            console.error('Failed to connect to database');
            process.exit(1);
        }

        // Initialize database schema
        const initialized = await initializeDatabase();
        if (!initialized) {
            console.error('Failed to initialize database schema');
            process.exit(1);
        }

        console.log('✅ Database initialized successfully');

        // Mount API routes with debug logging
        console.log('🔄 Mounting API routes...');
        try {
            const apiRoutes = createAPIRoutes();
            app.use('/api', apiRoutes);
            console.log('✅ API routes mounted successfully');
        } catch (error) {
            console.error('❌ Error mounting API routes:', error);
            throw error;
        }

        // Mount 404 handler AFTER routes are mounted
        app.use('*', (req, res) => {
            res.status(404).json({
                success: false,
                error: 'Endpoint not found',
                availableEndpoints: {
                    health: '/api/health',
                    version: '/api/version',
                    v1: {
                        progress: '/api/v1/progress',
                        questions: '/api/v1/questions',
                        quizCompletions: '/api/v1/quiz-completions'
                    }
                }
            });
        });

        return true;
    } catch (error) {
        console.error('❌ Failed to initialize application:', error);
        process.exit(1);
    }
}

// API Usage tracking middleware (using Sequelize)
const trackApiUsage = (req, res, next) => {
    // Temporarily disabled during migration to avoid database issues
    next();
};

// Apply API usage tracking to all API routes
app.use('/api/', trackApiUsage);

// Legacy endpoint redirects for backward compatibility
app.get('/health', (req, res) => {
    res.redirect(301, '/api/health');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);

    res.status(err.status || 500).json({
        success: false,
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// Note: 404 handler is now mounted inside initializeApp() after routes are mounted

// Graceful shutdown
process.on('SIGINT', async() => {
    console.log('\nShutting down gracefully...');
    await closeConnection();
    process.exit(0);
});

process.on('SIGTERM', async() => {
    console.log('\nReceived SIGTERM, shutting down gracefully...');
    await closeConnection();
    process.exit(0);
});

// Start server
if (require.main === module) {
    initializeApp().then(() => {
        app.listen(PORT, () => {
            console.log(`\n🚀 CCNA Progress API v2.0 running on port ${PORT}`);
            console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
            console.log(`📈 API info: http://localhost:${PORT}/api/version`);
            console.log(`🗄️  Database: Sequelize with SQLite`);
            console.log(`\n🏗️  Architecture: Modular design with MVC pattern`);
            console.log(`   📁 Controllers: Business logic layer`);
            console.log(`   🔧 Services: Data access layer with Sequelize ORM`);
            console.log(`   🛣️  Routes: RESTful API endpoints with versioning\n`);
        });
    }).catch(error => {
        console.error('Failed to start server:', error);
        process.exit(1);
    });
}

// Export app for testing
module.exports = app;