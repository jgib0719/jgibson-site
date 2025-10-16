/**
 * Models Index
 * Central export for all Sequelize models
 */

const { sequelize, testConnection, initializeDatabase, closeConnection } = require('./database');
const Progress = require('./Progress');
const Questions = require('./Questions');
const ApiStats = require('./ApiStats');
const QuizCompletion = require('./QuizCompletion');

// Export all models and database utilities
module.exports = {
    sequelize,
    testConnection,
    initializeDatabase,
    closeConnection,
    Progress,
    Questions,
    ApiStats,
    QuizCompletion
};