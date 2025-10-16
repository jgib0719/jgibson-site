/**
 * Progress Model
 * Sequelize model for user progress tracking
 */

const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const Progress = sequelize.define('progress', {
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
            len: [1, 255],
            isValidUserId(value) {
                if (!value.startsWith('user_')) {
                    throw new Error('User ID must start with "user_"');
                }
            }
        }
    },
    section_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 6,
            isInt: true
        }
    },
    topic_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 500]
        }
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
}, {
    // Table options
    tableName: 'progress',
    indexes: [
        {
            name: 'progress_user_id_idx',
            fields: ['user_id']
        },
        {
            name: 'progress_section_number_idx', 
            fields: ['section_number']
        },
        {
            name: 'progress_created_at_idx',
            fields: ['created_at']
        },
        {
            name: 'progress_unique_entry',
            unique: true,
            fields: ['user_id', 'section_number', 'topic_title']
        }
    ]
});

// Class methods
Progress.findByUserId = async function(userId) {
    return await this.findAll({
        where: { 
            user_id: userId,
            completed: true 
        },
        order: [['section_number', 'ASC'], ['topic_title', 'ASC']]
    });
};

Progress.saveProgress = async function(userId, sectionNumber, topicTitle, completed = true) {
    return await this.upsert({
        user_id: userId,
        section_number: sectionNumber,
        topic_title: topicTitle,
        completed: completed
    });
};

Progress.deleteUserProgress = async function(userId) {
    return await this.destroy({
        where: { user_id: userId }
    });
};

Progress.getStatistics = async function() {
    return await sequelize.query(`
        SELECT 
            section_number,
            COUNT(DISTINCT user_id) as unique_users,
            COUNT(*) as total_completions,
            AVG(CASE WHEN completed THEN 1.0 ELSE 0.0 END) as completion_rate
        FROM progress 
        GROUP BY section_number
        ORDER BY section_number
    `, {
        type: sequelize.QueryTypes.SELECT
    });
};

module.exports = Progress;