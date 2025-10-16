/**
 * Progress Service
 * Handles all data operations related to user progress using Sequelize
 */

const { Progress } = require('../models');
const { Op } = require('sequelize');

class ProgressService {
    constructor() {
        // No database connection needed - using Sequelize models
    }

    /**
     * Record progress for a user
     * @param {Object} progressData - Progress data
     * @returns {Promise<Object>} - Operation result
     */
    async recordProgress(progressData) {
        try {
            const { userId, sectionNumber, topicTitle } = progressData;

            if (!userId || !sectionNumber || !topicTitle) {
                throw new Error('Missing required fields: userId, sectionNumber, topicTitle');
            }

            // Use upsert to either create or update
            const [progress, created] = await Progress.upsert({
                user_id: userId,
                section_number: sectionNumber,
                topic_title: topicTitle,
                completed: true
            }, {
                returning: true
            });

            return {
                success: true,
                progress: progress.toJSON(),
                created
            };

        } catch (error) {
            console.error('Error in ProgressService.recordProgress:', error);
            throw error;
        }
    }

    /**
     * Get progress for a user
     * @param {string} userId - User ID
     * @returns {Promise<Object>} - Progress data
     */
    async getProgress(userId) {
        try {
            if (!userId) {
                throw new Error('Missing required field: userId');
            }

            const progress = await Progress.findAll({
                where: { user_id: userId },
                order: [['section_number', 'ASC'], ['created_at', 'ASC']]
            });

            return {
                success: true,
                progress: progress.map(p => p.toJSON()),
                count: progress.length
            };

        } catch (error) {
            console.error('Error in ProgressService.getProgress:', error);
            throw error;
        }
    }

    /**
     * Clear progress for a user
     * @param {string} userId - User ID
     * @returns {Promise<Object>} - Operation result
     */
    async clearProgress(userId) {
        try {
            if (!userId) {
                throw new Error('Missing required field: userId');
            }

            const deletedCount = await Progress.destroy({
                where: { user_id: userId }
            });

            return {
                success: true,
                deletedCount
            };

        } catch (error) {
            console.error('Error in ProgressService.clearProgress:', error);
            throw error;
        }
    }

    /**
     * Get progress summary statistics
     * @returns {Promise<Object>} - Statistics data
     */
    async getProgressStats() {
        try {
            const totalEntries = await Progress.count();
            const uniqueUsers = await Progress.count({
                distinct: true,
                col: 'user_id'
            });

            return {
                success: true,
                stats: {
                    totalEntries,
                    uniqueUsers
                }
            };

        } catch (error) {
            console.error('Error in ProgressService.getProgressStats:', error);
            throw error;
        }
    }
}

module.exports = ProgressService;