/**
 * Progress Controller
 * Handles HTTP requests and responses for progress-related operations
 * Contains business logic and validation
 */

const ProgressService = require('../services/progressService');

class ProgressController {
    constructor() {
        this.progressService = new ProgressService();

        // Bind methods to preserve 'this' context
        this.saveProgress = this.saveProgress.bind(this);
        this.getUserProgress = this.getUserProgress.bind(this);
        this.deleteUserProgress = this.deleteUserProgress.bind(this);
        this.getProgressStats = this.getProgressStats.bind(this);
    }

    /**
     * Save or update user progress
     * POST /api/v1/progress
     */
    async saveProgress(req, res, next) {
        try {
            const { userId, sectionNumber, topicTitle, completed } = req.body;

            // Validation
            if (!userId || typeof userId !== 'string' || !userId.startsWith('user_')) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid user ID format. Must be anonymous user ID starting with "user_"'
                });
            }

            if (!Number.isInteger(sectionNumber) || sectionNumber < 1 || sectionNumber > 6) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid section number. Must be integer between 1 and 6'
                });
            }

            if (!topicTitle || typeof topicTitle !== 'string' || topicTitle.trim().length === 0) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid topic title. Must be non-empty string'
                });
            }

            if (completed !== undefined && typeof completed !== 'boolean') {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid completed status. Must be boolean or undefined'
                });
            }

            const result = await this.progressService.recordProgress({
                userId,
                sectionNumber,
                topicTitle,
                completed: completed !== undefined ? completed : true
            });

            res.status(201).json(result);

        } catch (error) {
            console.error('Error in saveProgress controller:', error);
            next(error);
        }
    }

    /**
     * Get user progress
     * GET /api/v1/progress/:userId
     */
    async getUserProgress(req, res, next) {
        try {
            const { userId } = req.params;

            // Validate user ID format
            if (!userId || !userId.startsWith('user_')) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid user ID format. Must be anonymous user ID starting with "user_"'
                });
            }

            const result = await this.progressService.getProgress(userId);

            if (result.progress && Object.keys(result.progress).length === 0) {
                return res.status(404).json(result);
            }

            res.json(result);

        } catch (error) {
            console.error('Error in getUserProgress controller:', error);
            next(error);
        }
    }

    /**
     * Delete user progress
     * DELETE /api/v1/progress/:userId
     */
    async deleteUserProgress(req, res, next) {
        try {
            const { userId } = req.params;

            // Validate user ID format
            if (!userId || !userId.startsWith('user_')) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid user ID format. Must be anonymous user ID starting with "user_"'
                });
            }

            const result = await this.progressService.clearProgress(userId);
            res.json(result);

        } catch (error) {
            console.error('Error in deleteUserProgress controller:', error);
            next(error);
        }
    }

    /**
     * Get progress statistics
     * GET /api/v1/progress/stats
     */
    async getProgressStats(req, res, next) {
        try {
            const result = await this.progressService.getProgressStats();
            res.json(result);

        } catch (error) {
            console.error('Error in getProgressStats controller:', error);
            next(error);
        }
    }
}

module.exports = ProgressController;