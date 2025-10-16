/**
 * Progress Routes
 * RESTful API endpoints for progress management
 * Version: v1
 */

const express = require('express');
const ProgressController = require('../controllers/progressController');

function createProgressRoutes() {
    const router = express.Router();
    const progressController = new ProgressController();

    // POST /api/v1/progress - Save or update progress
    router.post('/', progressController.saveProgress);

    // GET /api/v1/progress/stats - Get progress statistics
    router.get('/stats', progressController.getProgressStats);

    // GET /api/v1/progress/:userId - Get user progress
    router.get('/:userId', progressController.getUserProgress);

    // DELETE /api/v1/progress/:userId - Delete user progress
    router.delete('/:userId', progressController.deleteUserProgress);

    return router;
}

module.exports = createProgressRoutes;