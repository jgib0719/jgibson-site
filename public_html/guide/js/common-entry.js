/**
 * Common Entry Point - Shared Utilities
 * Contains utilities used across multiple sections
 */

// Import core configuration and utilities (these use global variables)
import './ccna-study-guide-config.js';
import './security-utils.js';
import './section-registry.js';
import './user-identity.js';

// Common functionality that's used everywhere
console.log('🔧 Common utilities loaded');

// Since these are global variables, we export them after they're defined
// Wait for scripts to load and globals to be available
window.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Common utilities ready');
});