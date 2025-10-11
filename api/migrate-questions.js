#!/usr/bin/env node

/**
 * Data Migration Script: JSON Questions to SQLite Database
 * 
 * This script migrates questions from static JSON files to the SQLite database.
 * Run this script once to populate the questions table from existing JSON data.
 * 
 * Usage: node migrate-questions.js
 */

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'progress.db');
// Note: Question files moved to archive after successful migration
const CISCO_QUESTIONS_PATH = path.join(__dirname, '..', '.archive', 'pre-database-migration', 'quiz', 'questions.json');
const WILEY_QUESTIONS_PATH = path.join(__dirname, '..', '.archive', 'pre-database-migration', 'quiz', 'wiley_questions.json');

console.log('🚀 Starting question migration...');
console.log(`Database: ${DB_PATH}`);
console.log(`Cisco Questions: ${CISCO_QUESTIONS_PATH}`);
console.log(`Wiley Questions: ${WILEY_QUESTIONS_PATH}`);

// Initialize database connection
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('❌ Error opening database:', err.message);
        process.exit(1);
    }
    console.log('✅ Connected to SQLite database');
});

// Function to validate question data
function validateQuestion(question, category, index) {
    const required = ['number', 'question', 'options', 'answer', 'explanation'];
    for (const field of required) {
        if (!question[field]) {
            console.warn(`⚠️  Warning: Question ${index + 1} in ${category} missing required field: ${field}`);
            return false;
        }
    }
    
    // Validate options array
    if (!Array.isArray(question.options) || question.options.length === 0) {
        console.warn(`⚠️  Warning: Question ${index + 1} in ${category} has invalid options array`);
        return false;
    }
    
    // Validate answer array
    if (!Array.isArray(question.answer) || question.answer.length === 0) {
        console.warn(`⚠️  Warning: Question ${index + 1} in ${category} has invalid answer array`);
        return false;
    }
    
    return true;
}

// Function to migrate questions from a JSON file
async function migrateQuestions(filePath, category) {
    return new Promise((resolve, reject) => {
        console.log(`\n📂 Processing ${category} questions...`);
        
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.warn(`⚠️  Warning: File not found: ${filePath}`);
            resolve(0);
            return;
        }
        
        // Read and parse JSON file
        let questions;
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            questions = JSON.parse(data);
        } catch (err) {
            console.error(`❌ Error reading ${category} questions:`, err.message);
            reject(err);
            return;
        }
        
        if (!Array.isArray(questions)) {
            console.error(`❌ Error: ${category} questions file is not an array`);
            reject(new Error('Invalid questions format'));
            return;
        }
        
        console.log(`📊 Found ${questions.length} questions in ${category} file`);
        
        // Prepare insert statement
        const insertStmt = db.prepare(`
            INSERT OR REPLACE INTO questions 
            (number, category, question, options, answer, explanation, image, updated_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
        `);
        
        let inserted = 0;
        let skipped = 0;
        
        // Process each question
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            
            // Validate question data
            if (!validateQuestion(question, category, i)) {
                skipped++;
                continue;
            }
            
            try {
                // Convert arrays to JSON strings for database storage
                const optionsJson = JSON.stringify(question.options);
                const answerJson = JSON.stringify(question.answer);
                
                // Insert question into database
                insertStmt.run([
                    question.number,
                    category,
                    question.question,
                    optionsJson,
                    answerJson,
                    question.explanation,
                    question.image || null
                ], function(err) {
                    if (err) {
                        console.error(`❌ Error inserting question ${question.number}:`, err.message);
                        skipped++;
                    } else {
                        inserted++;
                    }
                });
                
            } catch (err) {
                console.error(`❌ Error processing question ${question.number}:`, err.message);
                skipped++;
            }
        }
        
        // Finalize the prepared statement
        insertStmt.finalize((err) => {
            if (err) {
                console.error(`❌ Error finalizing ${category} insert:`, err.message);
                reject(err);
            } else {
                console.log(`✅ ${category} migration complete:`);
                console.log(`   📥 Inserted: ${inserted} questions`);
                console.log(`   ⏭️  Skipped: ${skipped} questions`);
                resolve(inserted);
            }
        });
    });
}

// Main migration function
async function migrate() {
    try {
        // Clear existing questions (for clean migration)
        console.log('\n🧹 Clearing existing questions...');
        await new Promise((resolve, reject) => {
            db.run('DELETE FROM questions', (err) => {
                if (err) {
                    console.error('❌ Error clearing questions:', err.message);
                    reject(err);
                } else {
                    console.log('✅ Existing questions cleared');
                    resolve();
                }
            });
        });
        
        // Migrate Cisco questions
        const ciscoCount = await migrateQuestions(CISCO_QUESTIONS_PATH, 'cisco');
        
        // Migrate Wiley questions
        const wileyCount = await migrateQuestions(WILEY_QUESTIONS_PATH, 'wiley');
        
        // Summary
        console.log('\n🎉 Migration Summary:');
        console.log(`   📚 Cisco questions: ${ciscoCount}`);
        console.log(`   📚 Wiley questions: ${wileyCount}`);
        console.log(`   📚 Total questions: ${ciscoCount + wileyCount}`);
        
        // Verify migration
        console.log('\n🔍 Verifying migration...');
        db.get('SELECT COUNT(*) as count FROM questions', (err, row) => {
            if (err) {
                console.error('❌ Error verifying migration:', err.message);
            } else {
                console.log(`✅ Database contains ${row.count} questions`);
            }
            
            // Close database connection
            db.close((err) => {
                if (err) {
                    console.error('❌ Error closing database:', err.message);
                } else {
                    console.log('✅ Database connection closed');
                    console.log('\n🚀 Migration completed successfully!');
                }
            });
        });
        
    } catch (err) {
        console.error('❌ Migration failed:', err.message);
        process.exit(1);
    }
}

// Run migration
migrate().catch((err) => {
    console.error('❌ Fatal error during migration:', err.message);
    process.exit(1);
});