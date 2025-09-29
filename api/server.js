/**
 * Anonymous Progress Tracking API for CCNA Study Guide
 * Provides secure, anonymous progress storage without personal data collection
 * No data expiration - permanent storage for continuous learning
 */

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'progress.db');

// Trust proxy (Apache is in front of this service)
app.set('trust proxy', true);

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: false // No cookies/sessions needed for anonymous tracking
}));

// Rate limiting to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
    trust: true, // Trust proxy headers (Apache proxy)
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} ${req.path} - IP: ${req.ip}`);
    next();
});

// Initialize SQLite database
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
        process.exit(1);
    }
    console.log(`Connected to SQLite database at: ${DB_PATH}`);
});

// Create tables if they don't exist
db.serialize(() => {
    // Main progress table
    db.run(`
        CREATE TABLE IF NOT EXISTS progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            section_number INTEGER NOT NULL,
            topic_title TEXT NOT NULL,
            completed BOOLEAN DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, section_number, topic_title)
        )
    `);

    // Create indexes for better performance
    db.run(`CREATE INDEX IF NOT EXISTS idx_user_id ON progress(user_id)`);
    db.run(`CREATE INDEX IF NOT EXISTS idx_section ON progress(section_number)`);
    db.run(`CREATE INDEX IF NOT EXISTS idx_created_at ON progress(created_at)`);

    // Table for tracking API usage stats (no personal data)
    db.run(`
        CREATE TABLE IF NOT EXISTS api_stats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            endpoint TEXT NOT NULL,
            method TEXT NOT NULL,
            status_code INTEGER NOT NULL,
            response_time_ms INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create index for api_stats table
    db.run(`CREATE INDEX IF NOT EXISTS idx_stats_created_at ON api_stats(created_at)`);

    console.log('Database tables initialized');
});

// Middleware to track API usage
const trackApiUsage = (req, res, next) => {
    const startTime = Date.now();
    
    res.on('finish', () => {
        const responseTime = Date.now() - startTime;
        const endpoint = req.route ? req.route.path : req.path;
        
        db.run(
            `INSERT INTO api_stats (endpoint, method, status_code, response_time_ms) 
             VALUES (?, ?, ?, ?)`,
            [endpoint, req.method, res.statusCode, responseTime],
            (err) => {
                if (err) console.warn('Failed to log API stats:', err.message);
            }
        );
    });
    
    next();
};

app.use('/api/', trackApiUsage);

// Validation middleware
const validateProgressData = (req, res, next) => {
    const { userId, sectionNumber, topicTitle, completed } = req.body;
    
    if (!userId || typeof userId !== 'string' || !userId.startsWith('user_')) {
        return res.status(400).json({ 
            error: 'Invalid user ID format. Must be anonymous user ID starting with "user_"' 
        });
    }
    
    if (!Number.isInteger(sectionNumber) || sectionNumber < 1 || sectionNumber > 6) {
        return res.status(400).json({ 
            error: 'Invalid section number. Must be integer between 1 and 6' 
        });
    }
    
    if (!topicTitle || typeof topicTitle !== 'string' || topicTitle.trim().length === 0) {
        return res.status(400).json({ 
            error: 'Invalid topic title. Must be non-empty string' 
        });
    }
    
    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ 
            error: 'Invalid completed status. Must be boolean or undefined' 
        });
    }
    
    next();
};

// Routes

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        database: 'connected'
    });
});

// Save or update progress
app.post('/api/progress/save', validateProgressData, (req, res) => {
    const { userId, sectionNumber, topicTitle, completed = true } = req.body;
    
    db.run(
        `INSERT OR REPLACE INTO progress 
         (user_id, section_number, topic_title, completed, updated_at) 
         VALUES (?, ?, ?, ?, datetime('now'))`,
        [userId, sectionNumber, topicTitle, completed],
        function(err) {
            if (err) {
                console.error('Database error:', err.message);
                res.status(500).json({ error: 'Failed to save progress' });
                return;
            }
            
            res.json({ 
                success: true, 
                id: this.lastID,
                message: `Progress ${completed ? 'saved' : 'removed'} for topic: ${topicTitle}`
            });
        }
    );
});

// Load all progress for a user
app.get('/api/progress/:userId', (req, res) => {
    const { userId } = req.params;
    
    // Validate user ID format
    if (!userId || !userId.startsWith('user_')) {
        return res.status(400).json({ 
            error: 'Invalid user ID format. Must be anonymous user ID starting with "user_"' 
        });
    }
    
    db.all(
        `SELECT section_number, topic_title, completed, updated_at 
         FROM progress 
         WHERE user_id = ? AND completed = 1
         ORDER BY section_number, topic_title`,
        [userId],
        (err, rows) => {
            if (err) {
                console.error('Database error:', err.message);
                res.status(500).json({ error: 'Failed to load progress' });
                return;
            }
            
            if (rows.length === 0) {
                return res.status(404).json({ 
                    message: 'No progress found for this user',
                    progress: {}
                });
            }
            
            // Format response to match existing progress tracker structure
            const progress = {};
            rows.forEach(row => {
                if (!progress[row.section_number]) {
                    progress[row.section_number] = {};
                }
                progress[row.section_number][row.topic_title] = row.completed;
            });
            
            res.json(progress);
        }
    );
});

// Delete all progress for a user (privacy/reset feature)
app.delete('/api/progress/:userId', (req, res) => {
    const { userId } = req.params;
    
    if (!userId || !userId.startsWith('user_')) {
        return res.status(400).json({ 
            error: 'Invalid user ID format. Must be anonymous user ID starting with "user_"' 
        });
    }
    
    db.run(
        `DELETE FROM progress WHERE user_id = ?`,
        [userId],
        function(err) {
            if (err) {
                console.error('Database error:', err.message);
                res.status(500).json({ error: 'Failed to delete progress' });
                return;
            }
            
            res.json({ 
                success: true, 
                deletedCount: this.changes,
                message: `All progress deleted for user: ${userId}`
            });
        }
    );
});

// Get progress statistics (anonymous aggregate data)
app.get('/api/stats', (req, res) => {
    db.all(`
        SELECT 
            section_number,
            COUNT(DISTINCT user_id) as unique_users,
            COUNT(*) as total_completions,
            AVG(CASE WHEN completed THEN 1.0 ELSE 0.0 END) as completion_rate
        FROM progress 
        GROUP BY section_number
        ORDER BY section_number
    `, (err, rows) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: 'Failed to load statistics' });
            return;
        }
        
        res.json({
            timestamp: new Date().toISOString(),
            sections: rows
        });
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Endpoint not found',
        availableEndpoints: [
            'GET /health',
            'POST /api/progress/save',
            'GET /api/progress/:userId',
            'DELETE /api/progress/:userId',
            'GET /api/stats'
        ]
    });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down gracefully...');
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed.');
        }
        process.exit(0);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\\n🚀 CCNA Progress API running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`📈 Statistics: http://localhost:${PORT}/api/stats`);
    console.log(`🗄️  Database: ${DB_PATH}\\n`);
});