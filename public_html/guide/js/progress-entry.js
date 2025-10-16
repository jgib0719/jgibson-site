/**
 * Progress Entry Point - Progress Tracking System
 * Contains all progress-related functionality
 */

// Import progress tracking components (these use global variables)
import './progress-tracker.js';
import './section-overall-progress.js';

// Progress system initialization
console.log('📊 Progress tracking system loaded');

// Since these use global variables, no ES6 exports needed
window.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Progress tracking ready');
});