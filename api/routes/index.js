/**
 * API Routes Index
 * Central router configuration for all API routes
 * Implements versioning and route organization
 */

const express = require('express');
const createProgressRoutes = require('./progress');
const createQuestionsRoutes = require('./questions');
const createQuizCompletionsRoutes = require('./quiz-completions');

function createAPIRoutes() {
    const router = express.Router();

    console.log('🔧 Creating API routes...');

    // API Version 1 routes
    const v1Router = express.Router();

    // Mount resource-specific routes under v1
    console.log('🔧 Mounting v1 sub-routes...');
    v1Router.use('/progress', createProgressRoutes());
    v1Router.use('/questions', createQuestionsRoutes());
    v1Router.use('/quiz-completions', createQuizCompletionsRoutes());

    // Mount v1 routes under /api/v1
    router.use('/v1', v1Router);
    console.log('✅ V1 routes mounted');

    // Health check endpoint (no versioning needed)
    console.log('🔧 Adding health endpoint...');
    router.get('/health', (req, res) => {
        console.log('🔍 Health endpoint called');
        res.json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            database: 'connected',
            version: '1.0.0'
        });
    });
    console.log('✅ Health endpoint added');

    // API version info endpoint
    router.get('/version', (req, res) => {
        res.json({
            version: '1.0.0',
            availableVersions: ['v1'],
            endpoints: {
                v1: {
                    progress: '/api/v1/progress',
                    questions: '/api/v1/questions',
                    quizCompletions: '/api/v1/quiz-completions'
                }
            }
        });
    });

    return router;
}

module.exports = createAPIRoutes;