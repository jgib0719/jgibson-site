/**
 * Anonymous Progress Tracker for CCNA Study Guide
 * Provides server-side progress storage with anonymous user identification
 * No data expiration - permanent storage for continuous learning
 */

class AnonymousProgressTracker {
    constructor(apiBase = '/api/progress') {
        this.userId = this.getOrCreateAnonymousId();
        this.apiBase = apiBase;
        this.isOnline = navigator.onLine;
        this.syncQueue = [];
        this.maxRetries = 3;
        
        // Setup online/offline event listeners
        this.setupNetworkListeners();
        
        console.log(`AnonymousProgressTracker initialized for user: ${this.userId}`);
    }

    /**
     * Generate browser fingerprint for fallback identification
     */
    generateBrowserFingerprint() {
        const nav = navigator;
        const screen = window.screen;

        // Collect browser characteristics
        const fingerprint = [
            nav.userAgent,
            nav.language,
            screen.colorDepth,
            screen.width + 'x' + screen.height,
            new Date().getTimezoneOffset(),
            !!window.sessionStorage,
            !!window.localStorage
        ].join('|');

        // Simple hash function
        let hash = 0;
        for (let i = 0; i < fingerprint.length; i++) {
            const char = fingerprint.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }

        return 'fp_' + Math.abs(hash).toString(36);
    }

    /**
     * Get cookie value by name
     */
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    /**
     * Set cookie with long expiration
     */
    setCookie(name, value, days = 3650) { // 10 years
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
    }

    /**
     * Generate or retrieve anonymous user ID
     * Priority: 1) Cookie, 2) localStorage, 3) Browser fingerprint, 4) Generate new
     */
    getOrCreateAnonymousId() {
        // Try cookie first (survives cache clears)
        let userId = this.getCookie('anonymous_user_id');

        if (!userId) {
            // Try localStorage second
            userId = localStorage.getItem('anonymous_user_id');
        }

        if (!userId) {
            // Try browser fingerprint as fallback
            const fingerprint = this.generateBrowserFingerprint();
            userId = localStorage.getItem(`anon_id_${fingerprint}`);

            if (userId) {
                console.log('Recovered user ID from browser fingerprint');
            }
        }

        if (!userId) {
            // Generate new UUID v4
            userId = 'user_' + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
            console.log(`Generated new anonymous user ID: ${userId}`);
        }

        // Store in all locations for maximum persistence
        this.setCookie('anonymous_user_id', userId);
        localStorage.setItem('anonymous_user_id', userId);

        // Also store with fingerprint mapping for recovery
        const fingerprint = this.generateBrowserFingerprint();
        localStorage.setItem(`anon_id_${fingerprint}`, userId);

        return userId;
    }

    /**
     * Setup network status monitoring for sync management
     */
    setupNetworkListeners() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            console.log('Network connection restored - processing sync queue');
            this.processSyncQueue();
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            console.log('Network connection lost - queuing operations');
        });
    }

    /**
     * Save progress to server with retry logic
     * @param {number} sectionNumber - CCNA section (1-6)
     * @param {string} topicTitle - Title of the completed topic
     * @param {boolean} completed - Completion status (default: true)
     * @param {number} retries - Current retry attempt
     */
    async saveProgress(sectionNumber, topicTitle, completed = true, retries = 0) {
        const progressData = {
            userId: this.userId,
            sectionNumber,
            topicTitle,
            completed,
            timestamp: new Date().toISOString()
        };

        // If offline or API unavailable, queue for later sync
        if (!this.isOnline) {
            this.queueForSync('save', progressData);
            return false;
        }

        try {
            const response = await fetch(`${this.apiBase}/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(progressData)
            });

            if (response.ok) {
                console.log(`Progress saved for ${topicTitle} in section ${sectionNumber}`);
                return true;
            } else {
                throw new Error(`Server responded with status: ${response.status}`);
            }
        } catch (error) {
            console.warn(`Failed to save progress (attempt ${retries + 1}):`, error.message);
            
            // Retry logic with exponential backoff
            if (retries < this.maxRetries) {
                const delay = Math.pow(2, retries) * 1000; // 1s, 2s, 4s
                setTimeout(() => {
                    this.saveProgress(sectionNumber, topicTitle, completed, retries + 1);
                }, delay);
            } else {
                // Queue for later if all retries failed
                this.queueForSync('save', progressData);
            }
            return false;
        }
    }

    /**
     * Load all progress from server
     * Returns formatted progress object compatible with existing system
     */
    async loadProgress() {
        if (!this.isOnline) {
            console.log('Offline - skipping server progress load');
            return {};
        }

        try {
            const response = await fetch(`${this.apiBase}/${this.userId}`);
            if (response.ok) {
                const progressData = await response.json();
                console.log('Progress loaded from server:', progressData);
                return progressData;
            } else if (response.status === 404) {
                // New user - no progress yet
                console.log('No existing progress found for user');
                return {};
            } else {
                throw new Error(`Server responded with status: ${response.status}`);
            }
        } catch (error) {
            console.warn('Failed to load progress from server:', error.message);
            return {};
        }
    }

    /**
     * Queue operations for later sync when network is unavailable
     */
    queueForSync(operation, data) {
        const syncItem = {
            operation,
            data,
            timestamp: new Date().toISOString(),
            attempts: 0
        };
        
        this.syncQueue.push(syncItem);
        
        // Persist queue to localStorage for recovery after page reload
        try {
            localStorage.setItem(`sync_queue_${this.userId}`, JSON.stringify(this.syncQueue));
        } catch (e) {
            console.warn('Could not persist sync queue:', e);
        }
        
        console.log(`Queued ${operation} operation for later sync`);
    }

    /**
     * Process queued operations when network becomes available
     */
    async processSyncQueue() {
        if (!this.isOnline || this.syncQueue.length === 0) {
            return;
        }

        console.log(`Processing ${this.syncQueue.length} queued operations`);
        
        // Process queue items sequentially to avoid overwhelming server
        for (let i = this.syncQueue.length - 1; i >= 0; i--) {
            const item = this.syncQueue[i];
            item.attempts++;

            let success = false;
            if (item.operation === 'save') {
                const { sectionNumber, topicTitle, completed } = item.data;
                success = await this.saveProgress(sectionNumber, topicTitle, completed, 0);
            }

            if (success || item.attempts >= this.maxRetries) {
                // Remove successfully synced or repeatedly failed items
                this.syncQueue.splice(i, 1);
            }
        }

        // Update localStorage queue
        try {
            if (this.syncQueue.length > 0) {
                localStorage.setItem(`sync_queue_${this.userId}`, JSON.stringify(this.syncQueue));
            } else {
                localStorage.removeItem(`sync_queue_${this.userId}`);
            }
        } catch (e) {
            console.warn('Could not update sync queue:', e);
        }

        if (this.syncQueue.length === 0) {
            console.log('All queued operations successfully synced');
        }
    }

    /**
     * Load sync queue from localStorage on initialization
     * Useful for recovery after page reload
     */
    loadSyncQueue() {
        try {
            const savedQueue = localStorage.getItem(`sync_queue_${this.userId}`);
            if (savedQueue) {
                this.syncQueue = JSON.parse(savedQueue);
                console.log(`Loaded ${this.syncQueue.length} queued operations from storage`);
                
                // Process queue if online
                if (this.isOnline) {
                    setTimeout(() => this.processSyncQueue(), 1000);
                }
            }
        } catch (e) {
            console.warn('Could not load sync queue from storage:', e);
            this.syncQueue = [];
        }
    }

    /**
     * Clear all user data (for privacy/reset functionality)
     */
    async clearAllData() {
        try {
            // Clear server-side data
            if (this.isOnline) {
                const response = await fetch(`${this.apiBase}/${this.userId}`, {
                    method: 'DELETE'
                });
                
                if (!response.ok) {
                    console.warn('Failed to clear server-side data');
                }
            }

            // Clear local data
            localStorage.removeItem('anonymous_user_id');
            localStorage.removeItem(`sync_queue_${this.userId}`);
            
            console.log('All anonymous user data cleared');
            return true;
        } catch (error) {
            console.error('Error clearing user data:', error);
            return false;
        }
    }

    /**
     * Get current user ID for debugging/admin purposes
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Check if the system is ready to sync
     */
    isReadyToSync() {
        return this.isOnline && this.apiBase;
    }

    /**
     * Get sync status information
     */
    getSyncStatus() {
        return {
            isOnline: this.isOnline,
            queueLength: this.syncQueue.length,
            userId: this.userId,
            apiBase: this.apiBase
        };
    }
}

// Initialize sync queue loading when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Auto-load sync queue for any existing AnonymousProgressTracker instances
    if (window.anonymousProgressTracker) {
        window.anonymousProgressTracker.loadSyncQueue();
    }
});