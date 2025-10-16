/**
 * API Statistics Tracking Middleware
 * Tracks API usage statistics while maintaining user privacy
 */

const { ApiStats } = require('../models');
const crypto = require('crypto');

/**
 * API usage tracking middleware
 */
const trackApiUsage = (req, res, next) => {
    const startTime = Date.now();
    
    // Capture original end method to track when response finishes
    const originalEnd = res.end;
    
    res.end = function(chunk, encoding) {
        // Restore original end method
        res.end = originalEnd;
        
        // Calculate response time
        const responseTime = Date.now() - startTime;
        
        // Get endpoint path (remove query parameters and use route pattern if available)
        const endpoint = req.route ? req.route.path : req.path.split('?')[0];
        
        // Prepare stats data
        const statsData = {
            endpoint: endpoint,
            method: req.method,
            statusCode: res.statusCode,
            responseTime: responseTime,
            userAgent: req.sanitizedUserAgent || null,
            ipHash: req.ipHash || null
        };
        
        // Log stats asynchronously (don't block response)
        setImmediate(async () => {
            try {
                await ApiStats.logRequest(statsData);
            } catch (error) {
                // Don't let stats logging break the application
                console.warn('Failed to log API stats:', error.message);
            }
        });
        
        // Call original end method
        originalEnd.call(this, chunk, encoding);
    };
    
    next();
};

/**
 * Middleware to add timing information to requests
 */
const addTimingHeader = (req, res, next) => {
    req.startTime = Date.now();
    
    res.on('finish', () => {
        const duration = Date.now() - req.startTime;
        res.set('X-Response-Time', `${duration}ms`);
    });
    
    next();
};

/**
 * Health check endpoint with enhanced monitoring
 */
const enhancedHealthCheck = async (req, res) => {
    const startTime = Date.now();
    
    try {
        // Test database connectivity
        const { testConnection } = require('../models');
        const dbHealthy = await testConnection();
        
        // Get system information
        const memoryUsage = process.memoryUsage();
        const uptime = process.uptime();
        
        // Get recent API stats (last 5 minutes)
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        const recentStats = await ApiStats.getAggregatedStats({ 
            startDate: fiveMinutesAgo 
        });
        
        const responseTime = Date.now() - startTime;
        
        const healthData = {
            status: dbHealthy ? 'healthy' : 'degraded',
            timestamp: new Date().toISOString(),
            database: {
                connected: dbHealthy,
                responseTime: responseTime
            },
            system: {
                uptime: Math.floor(uptime),
                memory: {
                    used: Math.round(memoryUsage.heapUsed / 1024 / 1024),
                    total: Math.round(memoryUsage.heapTotal / 1024 / 1024),
                    external: Math.round(memoryUsage.external / 1024 / 1024),
                    unit: 'MB'
                },
                nodeVersion: process.version,
                platform: process.platform
            },
            api: {
                version: process.env.API_VERSION || 'v1',
                environment: process.env.NODE_ENV || 'production',
                recentActivity: recentStats.length
            }
        };
        
        const statusCode = dbHealthy ? 200 : 503;
        res.status(statusCode).json(healthData);
        
    } catch (error) {
        console.error('Health check failed:', error);
        res.status(503).json({
            status: 'error',
            timestamp: new Date().toISOString(),
            error: 'Health check failed',
            database: { connected: false }
        });
    }
};

/**
 * Get API statistics endpoint
 */
const getApiStatistics = async (req, res, next) => {
    try {
        const { startDate, endDate, detailed } = req.query;
        
        let start = null;
        let end = null;
        
        // Parse date parameters
        if (startDate) {
            start = new Date(startDate);
            if (isNaN(start.getTime())) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid start date format'
                });
            }
        }
        
        if (endDate) {
            end = new Date(endDate);
            if (isNaN(end.getTime())) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid end date format'
                });
            }
        }
        
        // Default to last 24 hours if no dates provided
        if (!start && !end) {
            start = new Date(Date.now() - 24 * 60 * 60 * 1000);
        }
        
        const stats = await ApiStats.getAggregatedStats({ 
            startDate: start, 
            endDate: end 
        });
        
        const response = {
            success: true,
            timestamp: new Date().toISOString(),
            period: {
                start: start ? start.toISOString() : null,
                end: end ? end.toISOString() : null
            },
            summary: {
                totalRequests: stats.reduce((sum, stat) => sum + parseInt(stat.request_count), 0),
                uniqueEndpoints: stats.length,
                avgResponseTime: stats.length > 0 
                    ? Math.round(stats.reduce((sum, stat) => sum + parseFloat(stat.avg_response_time || 0), 0) / stats.length)
                    : 0
            },
            endpoints: stats.map(stat => ({
                endpoint: stat.endpoint,
                method: stat.method,
                requestCount: parseInt(stat.request_count),
                avgResponseTime: Math.round(parseFloat(stat.avg_response_time || 0)),
                minResponseTime: parseInt(stat.min_response_time || 0),
                maxResponseTime: parseInt(stat.max_response_time || 0),
                successCount: parseInt(stat.success_count || 0),
                errorCount: parseInt(stat.error_count || 0),
                successRate: stat.request_count > 0 
                    ? Math.round((parseInt(stat.success_count || 0) / parseInt(stat.request_count)) * 100)
                    : 0
            }))
        };
        
        res.json(response);
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    trackApiUsage,
    addTimingHeader,
    enhancedHealthCheck,
    getApiStatistics
};