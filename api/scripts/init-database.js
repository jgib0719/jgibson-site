/**
 * Database Initialization Script for CCNA Progress API
 * Creates the database schema and initial data structure
 */

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const DB_DIR = path.join(__dirname, '..', 'data');
const DB_PATH = path.join(DB_DIR, 'progress.db');

console.log('🗄️  Initializing CCNA Progress Database...');

// Create data directory if it doesn't exist
if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
    console.log(`📁 Created data directory: ${DB_DIR}`);
}

// Initialize database
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('❌ Error creating database:', err.message);
        process.exit(1);
    }
    console.log(`✅ Connected to database: ${DB_PATH}`);
});

db.serialize(() => {
    console.log('📊 Creating database schema...');
    
    // Drop existing tables if they exist (for clean initialization)
    db.run(`DROP TABLE IF EXISTS progress`);
    db.run(`DROP TABLE IF EXISTS api_stats`);
    
    // Create progress table
    db.run(`
        CREATE TABLE progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            section_number INTEGER NOT NULL CHECK(section_number BETWEEN 1 AND 6),
            topic_title TEXT NOT NULL,
            completed BOOLEAN DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, section_number, topic_title)
        )
    `, (err) => {
        if (err) {
            console.error('❌ Error creating progress table:', err.message);
        } else {
            console.log('✅ Created progress table');
        }
    });
    
    // Create API stats table
    db.run(`
        CREATE TABLE api_stats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            endpoint TEXT NOT NULL,
            method TEXT NOT NULL,
            status_code INTEGER NOT NULL,
            response_time_ms INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('❌ Error creating api_stats table:', err.message);
        } else {
            console.log('✅ Created api_stats table');
        }
    });
    
    // Create indexes for performance
    db.run(`CREATE INDEX idx_progress_user_id ON progress(user_id)`, (err) => {
        if (err) console.error('❌ Error creating user_id index:', err.message);
        else console.log('✅ Created user_id index');
    });
    
    db.run(`CREATE INDEX idx_progress_section ON progress(section_number)`, (err) => {
        if (err) console.error('❌ Error creating section index:', err.message);
        else console.log('✅ Created section index');
    });
    
    db.run(`CREATE INDEX idx_progress_created_at ON progress(created_at)`, (err) => {
        if (err) console.error('❌ Error creating created_at index:', err.message);
        else console.log('✅ Created created_at index');
    });
    
    db.run(`CREATE INDEX idx_stats_endpoint ON api_stats(endpoint)`, (err) => {
        if (err) console.error('❌ Error creating endpoint index:', err.message);
        else console.log('✅ Created endpoint index');
    });
    
    // Insert some test data (optional)
    if (process.env.NODE_ENV === 'development') {
        console.log('🧪 Inserting test data...');
        
        const testUserId = 'user_test123456789';
        const testData = [
            [testUserId, 1, 'OSI Model', true],
            [testUserId, 1, 'TCP/IP Protocol Suite', true],
            [testUserId, 2, 'Ethernet Standards', true],
            [testUserId, 2, 'Switching Concepts', false]
        ];
        
        const stmt = db.prepare(`
            INSERT INTO progress (user_id, section_number, topic_title, completed)
            VALUES (?, ?, ?, ?)
        `);
        
        testData.forEach(data => {
            stmt.run(data, (err) => {
                if (err) {
                    console.error('❌ Error inserting test data:', err.message);
                } else {
                    console.log(`✅ Inserted test data: Section ${data[1]} - ${data[2]}`);
                }
            });
        });
        
        stmt.finalize();
    }
});

// Close database connection
db.close((err) => {
    if (err) {
        console.error('❌ Error closing database:', err.message);
        process.exit(1);
    } else {
        console.log('\\n🎉 Database initialization complete!');
        console.log(`📍 Database location: ${DB_PATH}`);
        console.log('🚀 You can now start the server with: npm start');
    }
});