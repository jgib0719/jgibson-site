/**
 * QuizCompletion Model
 * Sequelize model for tracking completed quizzes and results
 */

const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const QuizCompletion = sequelize.define('quiz_completion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 255]
        },
        index: true // Add index for efficient user lookups
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isIn: [
                ['cisco', 'wiley']
            ]
        }
    },
    score: {
        type: DataTypes.DECIMAL(5, 2), // Allows values like 123.45
        allowNull: false,
        validate: {
            min: 0,
            max: 999.99
        }
    },
    total_questions: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 1000
        }
    },
    answered_questions: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 1000
        }
    },
    percentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 100
        }
    },
    duration_seconds: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 86400 // Max 24 hours
        }
    },
    target_size: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1
        }
    },
    completed_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'quiz_completions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [{
            fields: ['user_id', 'category'] // Composite index for user+category queries
        },
        {
            fields: ['completed_at'] // Index for date-based queries
        },
        {
            fields: ['category', 'percentage'] // Index for leaderboard queries
        }
    ]
});

/**
 * Save a quiz completion record
 * @param {string} userId - User ID
 * @param {string} category - Quiz category ('cisco' or 'wiley')
 * @param {number} score - Raw score achieved
 * @param {number} totalQuestions - Total questions in quiz
 * @param {number} answeredQuestions - Number of questions answered
 * @param {number} percentage - Percentage score
 * @param {number} durationSeconds - Time taken in seconds
 * @param {number} targetSize - Target quiz size
 * @param {Date} completedAt - When quiz was completed
 * @returns {Promise<Object>} Created quiz completion record
 */
QuizCompletion.saveCompletion = async function(
    userId,
    category,
    score,
    totalQuestions,
    answeredQuestions,
    percentage,
    durationSeconds,
    targetSize = null,
    completedAt = new Date()
) {
    try {
        const completion = await this.create({
            user_id: userId,
            category: category,
            score: score,
            total_questions: totalQuestions,
            answered_questions: answeredQuestions,
            percentage: percentage,
            duration_seconds: durationSeconds,
            target_size: targetSize,
            completed_at: completedAt
        });

        return completion;
    } catch (error) {
        console.error('Error saving quiz completion:', error);
        throw error;
    }
};

/**
 * Get quiz history for a user
 * @param {string} userId - User ID
 * @param {string} category - Optional category filter
 * @param {number} limit - Maximum number of records to return
 * @returns {Promise<Array>} Array of quiz completion records
 */
QuizCompletion.getUserHistory = async function(userId, category = null, limit = 50) {
    try {
        const whereClause = { user_id: userId };
        if (category) {
            whereClause.category = category;
        }

        const completions = await this.findAll({
            where: whereClause,
            order: [
                ['completed_at', 'DESC']
            ],
            limit: limit
        });

        return completions;
    } catch (error) {
        console.error('Error getting user quiz history:', error);
        throw error;
    }
};

/**
 * Get user statistics
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User quiz statistics
 */
QuizCompletion.getUserStats = async function(userId) {
    try {
        const stats = await this.findAll({
            where: { user_id: userId },
            attributes: [
                'category', [sequelize.fn('COUNT', sequelize.col('id')), 'total_attempts'],
                [sequelize.fn('AVG', sequelize.col('percentage')), 'avg_percentage'],
                [sequelize.fn('MAX', sequelize.col('percentage')), 'best_percentage'],
                [sequelize.fn('SUM', sequelize.col('answered_questions')), 'total_questions_answered']
            ],
            group: ['category']
        });

        return stats;
    } catch (error) {
        console.error('Error getting user stats:', error);
        throw error;
    }
};

/**
 * Get leaderboard data
 * @param {string} category - Quiz category
 * @param {number} limit - Number of top entries to return
 * @returns {Promise<Array>} Leaderboard entries
 */
QuizCompletion.getLeaderboard = async function(category, limit = 10) {
    try {
        const leaderboard = await this.findAll({
            where: { category: category },
            attributes: [
                'user_id', [sequelize.fn('MAX', sequelize.col('percentage')), 'best_percentage'],
                [sequelize.fn('COUNT', sequelize.col('id')), 'attempts'],
                [sequelize.fn('AVG', sequelize.col('percentage')), 'avg_percentage']
            ],
            group: ['user_id'],
            order: [
                [sequelize.fn('MAX', sequelize.col('percentage')), 'DESC']
            ],
            limit: limit
        });

        return leaderboard;
    } catch (error) {
        console.error('Error getting leaderboard:', error);
        throw error;
    }
};

module.exports = QuizCompletion;