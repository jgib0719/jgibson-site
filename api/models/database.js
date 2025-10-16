/**
 * Database Configuration and Connection
 * Sequelize ORM setup with SQLite for the CCNA Quiz Application
 */

const { Sequelize } = require('sequelize');
const path = require('path');

// Load environment variables
require('dotenv').config();

const isDevelopment = process.env.NODE_ENV === 'development';
const dbPath = process.env.DB_PATH || path.join(__dirname, '..', 'data', 'progress.db');

// Ensure data directory exists
const fs = require('fs');
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Sequelize configuration
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: isDevelopment ? console.log : false,
    pool: {
        min: parseInt(process.env.DB_POOL_MIN) || 0,
        max: parseInt(process.env.DB_POOL_MAX) || 5,
        idle: parseInt(process.env.DB_POOL_IDLE) || 10000,
    },
    define: {
        // Add timestamps to all models by default
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        // Use snake_case for column names
        underscored: true,
        // Prevent sequelize from pluralizing table names
        freezeTableName: true
    },
    // Additional SQLite optimizations
    dialectOptions: {
        // Enable foreign key constraints
        multipleStatements: false
    },
    // Fix timezone issues
    timezone: '+00:00'
});

// Test database connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection established successfully');
        return true;
    } catch (error) {
        console.error('❌ Unable to connect to database:', error.message);
        return false;
    }
}

// Initialize database (create tables)
async function initializeDatabase() {
    try {
        // For production, use force: false and alter: false to avoid schema conflicts
        // For development with existing data, use alter: false to prevent infinite loops
        const isDev = process.env.NODE_ENV === 'development';
        const syncOptions = isDev ? { force: false, alter: false } : { force: false };
        
        await sequelize.sync(syncOptions);
        console.log('✅ Database tables synchronized');
        return true;
    } catch (error) {
        console.error('❌ Database synchronization failed:', error.message);
        return false;
    }
}

// Graceful shutdown
async function closeConnection() {
    try {
        await sequelize.close();
        console.log('✅ Database connection closed');
    } catch (error) {
        console.error('❌ Error closing database connection:', error.message);
    }
}

module.exports = {
    sequelize,
    testConnection,
    initializeDatabase,
    closeConnection
};