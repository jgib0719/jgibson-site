#!/usr/bin/env node

/**
 * Clean up citation references from question explanations in the database
 * Removes patterns like [cite: 175], [cite_start], [cite: 172, 173, 174], etc.
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'progress.db');

console.log('🧹 Starting citation cleanup...');
console.log(`Database: ${DB_PATH}`);

// Initialize database connection
const db = new sqlite3.Database(DB_PATH);

function cleanCitations(explanation) {
    if (!explanation) return explanation;
    
    // Remove various citation patterns
    return explanation
        // Remove [cite: number] patterns
        .replace(/\[cite:\s*\d+\]/g, '')
        // Remove [cite: number, number, number] patterns  
        .replace(/\[cite:\s*\d+(?:,\s*\d+)*\]/g, '')
        // Remove [cite_start] patterns
        .replace(/\[cite_start\]/g, '')
        // Remove any remaining [cite...] patterns
        .replace(/\[cite[^\]]*\]/g, '')
        // Clean up extra whitespace
        .replace(/\s+/g, ' ')
        .trim();
}

async function cleanupCitations() {
    return new Promise((resolve, reject) => {
        // First, get all questions with explanations
        db.all("SELECT id, number, category, explanation FROM questions WHERE explanation IS NOT NULL", [], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            
            console.log(`Found ${rows.length} questions with explanations to process...`);
            
            let processed = 0;
            let updated = 0;
            
            const updatePromises = rows.map(row => {
                return new Promise((resolveUpdate, rejectUpdate) => {
                    const originalExplanation = row.explanation;
                    const cleanedExplanation = cleanCitations(originalExplanation);
                    
                    processed++;
                    
                    // Only update if changes were made
                    if (cleanedExplanation !== originalExplanation) {
                        updated++;
                        console.log(`📝 Cleaning Q${row.number} (${row.category}): Removing citations...`);
                        
                        db.run(
                            "UPDATE questions SET explanation = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
                            [cleanedExplanation, row.id],
                            function(updateErr) {
                                if (updateErr) {
                                    rejectUpdate(updateErr);
                                } else {
                                    resolveUpdate();
                                }
                            }
                        );
                    } else {
                        resolveUpdate();
                    }
                });
            });
            
            Promise.all(updatePromises)
                .then(() => {
                    console.log(`✅ Citation cleanup completed!`);
                    console.log(`📊 Processed: ${processed} questions`);
                    console.log(`🔧 Updated: ${updated} questions`);
                    resolve({ processed, updated });
                })
                .catch(reject);
        });
    });
}

// Example of before/after for verification
async function showExamples() {
    return new Promise((resolve, reject) => {
        db.all("SELECT id, number, category, explanation FROM questions WHERE explanation LIKE '%cite%' LIMIT 3", [], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            
            if (rows.length > 0) {
                console.log('\n📋 Sample citations still found:');
                rows.forEach(row => {
                    console.log(`Q${row.number} (${row.category}): ${row.explanation.substring(0, 100)}...`);
                });
            } else {
                console.log('\n✅ No remaining citations found in sample check!');
            }
            
            resolve();
        });
    });
}

async function main() {
    try {
        // Show examples before cleanup
        console.log('\n🔍 Checking for citations before cleanup...');
        await showExamples();
        
        // Perform cleanup
        console.log('\n🧹 Starting cleanup process...');
        const results = await cleanupCitations();
        
        // Show examples after cleanup
        console.log('\n🔍 Checking for remaining citations after cleanup...');
        await showExamples();
        
        console.log('\n🎉 Citation cleanup process completed successfully!');
        
    } catch (error) {
        console.error('❌ Error during citation cleanup:', error);
        process.exit(1);
    } finally {
        db.close();
    }
}

if (require.main === module) {
    main();
}

module.exports = { cleanCitations };