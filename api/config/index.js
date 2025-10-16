/**
 * Centralized Configuration Management
 * Single source of truth for all application configuration
 */

const path = require('path');

// Load environment variables from .env file
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

/**
 * Configuration object with defaults and validation
 */
const config = {
    // Environment
    env: process.env.NODE_ENV || 'development',

    // Server configuration
    server: {
        port: parseInt(process.env.PORT, 10) || 3001,
        trustProxy: process.env.TRUST_PROXY === 'true' || false,
        host: process.env.HOST || '0.0.0.0'
    },

    // Database configuration
    database: {
        path: process.env.DB_PATH || './data/progress.db',
        pool: {
            min: parseInt(process.env.DB_POOL_MIN, 10) || 0,
            max: parseInt(process.env.DB_POOL_MAX, 10) || 5,
            idle: parseInt(process.env.DB_POOL_IDLE, 10) || 10000
        }
    },

    // Security configuration
    security: {
        allowedOrigins: process.env.ALLOWED_ORIGINS ?
            process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim()) : ['http://localhost:3001', 'https://localhost:3001'],
        sessionSecret: process.env.SESSION_SECRET || 'dev-secret-change-in-production',
        bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS, 10) || 12
    },

    // Rate limiting configuration
    rateLimit: {
        windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 900000, // 15 minutes
        maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 100
    },

    // Logging configuration
    logging: {
        level: process.env.LOG_LEVEL || 'info',
        file: process.env.LOG_FILE || './logs/api.log'
    },

    // API configuration
    api: {
        version: process.env.API_VERSION || 'v1',
        maxQuestionLimit: parseInt(process.env.MAX_QUESTION_LIMIT, 10) || 1000,
        defaultQuestionLimit: parseInt(process.env.DEFAULT_QUESTION_LIMIT, 10) || 50
    },

    // Cache configuration
    cache: {
        ttl: parseInt(process.env.CACHE_TTL, 10) || 300, // 5 minutes default
        maxSize: parseInt(process.env.CACHE_MAX_SIZE, 10) || 100 // 100 entries default
    }
};

/**
 * Validate critical configuration
 */
function validateConfig() {
    const errors = [];

    // Validate port
    if (config.server.port < 1 || config.server.port > 65535) {
        errors.push(`Invalid port: ${config.server.port}. Must be between 1 and 65535.`);
    }

    // Validate database path
    if (!config.database.path) {
        errors.push('Database path (DB_PATH) is required.');
    }

    // Validate session secret in production
    if (config.env === 'production' && config.security.sessionSecret === 'dev-secret-change-in-production') {
        errors.push('Production environment requires a secure SESSION_SECRET.');
    }

    // Validate allowed origins
    if (!config.security.allowedOrigins || config.security.allowedOrigins.length === 0) {
        errors.push('At least one ALLOWED_ORIGIN must be specified.');
    }

    if (errors.length > 0) {
        console.error('❌ Configuration validation failed:');
        errors.forEach(error => console.error(`  - ${error}`));
        throw new Error(`Configuration validation failed: ${errors.join(', ')}`);
    }

    console.log('✅ Configuration validation passed');
}

/**
 * Get configuration for specific environment
 */
function getConfig() {
    validateConfig();
    return config;
}

/**
 * Helper function to check if running in development
 */
function isDevelopment() {
    return config.env === 'development';
}

/**
 * Helper function to check if running in production
 */
function isProduction() {
    return config.env === 'production';
}

/**
 * Helper function to check if running in test
 */
function isTest() {
    return config.env === 'test';
}

module.exports = {
    config: getConfig(),
    getConfig,
    isDevelopment,
    isProduction,
    isTest,
    validateConfig
};