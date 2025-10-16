/**
 * Input Validation Middleware
 * Comprehensive validation using express-validator for all API endpoints
 */

const { body, param, query, validationResult } = require('express-validator');
const crypto = require('crypto');

/**
 * Error handler for validation results
 */
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            error: 'Validation failed',
            details: errors.array().map(err => ({
                field: err.path,
                message: err.msg,
                value: err.value
            }))
        });
    }
    next();
};

/**
 * User ID validation rules
 */
const validateUserId = () => [
    param('userId')
    .isString()
    .withMessage('User ID must be a string')
    .isLength({ min: 6, max: 100 })
    .withMessage('User ID must be between 6 and 100 characters')
    .matches(/^user_/)
    .withMessage('User ID must start with "user_"')
    .custom((value) => {
        // Additional security: ensure no path traversal or injection attempts
        if (value.includes('..') || value.includes('/') || value.includes('\\')) {
            throw new Error('User ID contains invalid characters');
        }
        return true;
    })
];

/**
 * Progress data validation rules
 */
const validateProgressData = () => [
    body('userId')
    .isString()
    .withMessage('User ID must be a string')
    .isLength({ min: 6, max: 100 })
    .withMessage('User ID must be between 6 and 100 characters')
    .matches(/^user_/)
    .withMessage('User ID must start with "user_"')
    .custom((value) => {
        if (value.includes('..') || value.includes('/') || value.includes('\\')) {
            throw new Error('User ID contains invalid characters');
        }
        return true;
    }),

    body('sectionNumber')
    .isInt({ min: 1, max: 6 })
    .withMessage('Section number must be an integer between 1 and 6'),

    body('topicTitle')
    .isString()
    .withMessage('Topic title must be a string')
    .isLength({ min: 1, max: 500 })
    .withMessage('Topic title must be between 1 and 500 characters')
    .trim()
    .escape(), // Escape HTML entities

    body('completed')
    .optional()
    .isBoolean()
    .withMessage('Completed status must be a boolean')
];

/**
 * Questions query validation rules
 */
const validateQuestionsQuery = () => [
    query('category')
    .optional()
    .isIn(['cisco', 'wiley'])
    .withMessage('Category must be either "cisco" or "wiley"'),

    query('count')
    .optional()
    .isInt({ min: 1, max: 1000 })
    .withMessage('Count must be an integer between 1 and 1000'),

    query('random')
    .optional()
    .isIn(['true', 'false'])
    .withMessage('Random must be "true" or "false"')
];

/**
 * Question creation/update validation rules
 */
const validateQuestionData = () => [
    body('number')
    .isInt({ min: 1 })
    .withMessage('Question number must be a positive integer'),

    body('category')
    .isIn(['cisco', 'wiley'])
    .withMessage('Category must be either "cisco" or "wiley"'),

    body('question')
    .isString()
    .withMessage('Question must be a string')
    .isLength({ min: 10, max: 10000 })
    .withMessage('Question must be between 10 and 10000 characters')
    .trim(),

    body('options')
    .isArray({ min: 2, max: 10 })
    .withMessage('Options must be an array with 2-10 items')
    .custom((options) => {
        // Validate each option
        for (const option of options) {
            if (typeof option !== 'string' || option.trim().length === 0) {
                throw new Error('Each option must be a non-empty string');
            }
            if (option.length > 1000) {
                throw new Error('Each option must be less than 1000 characters');
            }
        }
        return true;
    }),

    body('answer')
    .isArray({ min: 1, max: 10 })
    .withMessage('Answer must be an array with 1-10 items')
    .custom((answers, { req }) => {
        const options = req.body.options;
        if (!options || !Array.isArray(options)) {
            throw new Error('Options must be provided to validate answers');
        }

        // Validate each answer exists in options
        for (const answer of answers) {
            if (typeof answer !== 'string') {
                throw new Error('Each answer must be a string');
            }
            if (!options.includes(answer)) {
                throw new Error('All answers must exist in the options array');
            }
        }
        return true;
    }),

    body('explanation')
    .isString()
    .withMessage('Explanation must be a string')
    .isLength({ min: 10, max: 10000 })
    .withMessage('Explanation must be between 10 and 10000 characters')
    .trim(),

    body('image')
    .optional()
    .isString()
    .withMessage('Image must be a string')
    .isLength({ max: 255 })
    .withMessage('Image path must be less than 255 characters')
    .custom((value) => {
        // Basic path validation - only allow relative paths and common image extensions
        if (value && (value.includes('..') || !value.match(/\.(jpg|jpeg|png|gif|webp)$/i))) {
            throw new Error('Image must be a valid image file path');
        }
        return true;
    })
];

/**
 * ID parameter validation (for update/delete operations)
 */
const validateIdParam = () => [
    param('id')
    .isInt({ min: 1 })
    .withMessage('ID must be a positive integer')
];

/**
 * Sanitization middleware for request data
 */
const sanitizeInput = (req, res, next) => {
    // Hash IP for privacy while maintaining rate limiting capability
    if (req.ip) {
        req.ipHash = crypto.createHash('sha256').update(req.ip + process.env.SESSION_SECRET || 'default-salt').digest('hex').substring(0, 16);
    }

    // Sanitize user agent
    if (req.get('User-Agent')) {
        req.sanitizedUserAgent = req.get('User-Agent').substring(0, 500); // Limit length
    }

    next();
};

/**
 * Quiz completion data validation rules
 */
const validateQuizCompletionData = () => [
    body('userId')
    .notEmpty()
    .withMessage('User ID is required')
    .isLength({ min: 1, max: 255 })
    .withMessage('User ID must be between 1 and 255 characters')
    .custom((value) => {
        // Allow UUIDs or user- prefixed IDs (more flexible than user_ requirement)
        const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        const userPattern = /^user-/;

        if (!uuidPattern.test(value) && !userPattern.test(value)) {
            throw new Error('User ID must be a UUID or start with "user-"');
        }

        // Security check
        if (value.includes('..') || value.includes('/') || value.includes('\\')) {
            throw new Error('User ID contains invalid characters');
        }

        return true;
    }),

    body('category')
    .notEmpty()
    .withMessage('Category is required')
    .isIn(['cisco', 'wiley'])
    .withMessage('Category must be either "cisco" or "wiley"'),

    body('score')
    .isFloat({ min: 0, max: 999.99 })
    .withMessage('Score must be a number between 0 and 999.99'),

    body('totalQuestions')
    .isInt({ min: 1, max: 1000 })
    .withMessage('Total questions must be an integer between 1 and 1000'),

    body('answeredQuestions')
    .isInt({ min: 0, max: 1000 })
    .withMessage('Answered questions must be an integer between 0 and 1000'),

    body('percentage')
    .isInt({ min: 0, max: 100 })
    .withMessage('Percentage must be an integer between 0 and 100'),

    body('duration')
    .isInt({ min: 0, max: 86400 })
    .withMessage('Duration must be an integer between 0 and 86400 (24 hours in seconds)'),

    body('targetSize')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Target size must be a positive integer'),

    body('completedAt')
    .optional()
    .isISO8601()
    .withMessage('Completed at must be a valid ISO 8601 date string')
];

/**
 * Quiz user ID validation (more flexible than progress user ID)
 */
const validateQuizUserId = () => [
    param('userId')
    .isString()
    .withMessage('User ID must be a string')
    .isLength({ min: 1, max: 255 })
    .withMessage('User ID must be between 1 and 255 characters')
    .custom((value) => {
        // Allow UUIDs or user- prefixed IDs
        const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        const userPattern = /^user-/;

        if (!uuidPattern.test(value) && !userPattern.test(value)) {
            throw new Error('User ID must be a UUID or start with "user-"');
        }

        // Security check
        if (value.includes('..') || value.includes('/') || value.includes('\\')) {
            throw new Error('User ID contains invalid characters');
        }

        return true;
    })
];
/**
 * Rate limiting validation middleware
 */
const validateRateLimit = (req, res, next) => {
    // Add custom rate limiting logic here if needed
    // Current implementation relies on express-rate-limit
    next();
};

module.exports = {
    handleValidationErrors,
    validateUserId,
    validateQuizUserId,
    validateProgressData,
    validateQuestionsQuery,
    validateQuestionData,
    validateIdParam,
    validateQuizCompletionData,
    sanitizeInput,
    validateRateLimit
};