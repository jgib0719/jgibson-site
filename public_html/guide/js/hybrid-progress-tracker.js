/**
 * Hybrid Progress Tracker for CCNA Study Guide
 * Extends UnifiedCCNAProgressTracker to use both localStorage (offline) and database (persistent)
 * Provides seamless offline/online experience with automatic synchronization
 */

class HybridCCNAProgressTracker extends UnifiedCCNAProgressTracker {
    constructor(currentChapter = null, apiBase = '/api/progress') {
        super(currentChapter);
        
        // Initialize anonymous progress tracker
        this.anonymousTracker = new AnonymousProgressTracker(apiBase);
        this.syncInProgress = false;
        this.lastSyncTimestamp = null;
        
        // Enhanced storage key for hybrid mode
        this.hybridStorageKey = `hybrid_ccna_progress_${this.userId}`;
        
        console.log('HybridCCNAProgressTracker initialized - combining localStorage + database');
        
        // Initialize hybrid tracking
        this.initializeHybridSync();
    }

    /**
     * Initialize hybrid synchronization system
     */
    async initializeHybridSync() {
        try {
            // Load server progress and merge with local storage
            await this.loadAndMergeServerProgress();
            
            // Set up periodic sync (every 5 minutes)
            this.setupPeriodicSync();
            
            // Sync any pending local changes
            await this.syncLocalChangesToServer();
            
        } catch (error) {
            console.warn('Failed to initialize hybrid sync:', error.message);
            console.log('Falling back to localStorage-only mode');
        }
    }

    /**
     * Load progress from server and merge with localStorage
     */
    async loadAndMergeServerProgress() {
        if (this.syncInProgress) return;
        
        this.syncInProgress = true;
        console.log('Loading and merging server progress...');
        
        try {
            const serverProgress = await this.anonymousTracker.loadProgress();
            
            if (Object.keys(serverProgress).length > 0) {
                console.log('Server progress found, merging with local storage');
                this.mergeProgressData(serverProgress, 'server');
                this.updateAllProgressBars();
            } else {
                console.log('No server progress found, using local storage only');
            }
            
            this.lastSyncTimestamp = new Date().toISOString();
            
        } catch (error) {
            console.warn('Failed to load server progress:', error.message);
        } finally {
            this.syncInProgress = false;
        }
    }

    /**
     * Merge progress data from server with local storage
     * @param {Object} serverProgress - Progress data from server
     * @param {string} source - Source of the data ('server' or 'local')
     */
    mergeProgressData(serverProgress, source = 'server') {
        let hasUpdates = false;
        
        for (const [sectionNum, topics] of Object.entries(serverProgress)) {
            for (const [topicTitle, completed] of Object.entries(topics)) {
                if (completed && !this.isTopicCompleted(topicTitle)) {
                    // Topic completed on server but not locally - mark as completed
                    super.markTopicCompleted(topicTitle, true);
                    hasUpdates = true;
                    console.log(`Merged ${source} progress: ${topicTitle} (Section ${sectionNum})`);
                }
            }
        }

        if (hasUpdates) {
            this.saveHybridMetadata();
            console.log(`Successfully merged ${source} progress data`);
        }
    }

    /**
     * Override markTopicCompleted to sync with server
     */
    markTopicCompleted(topicTitle, completed = true) {
        // Call parent method for immediate localStorage update and UI refresh
        super.markTopicCompleted(topicTitle, completed);
        
        // Sync to server asynchronously (don't block UI)
        this.syncTopicToServer(topicTitle, completed);
        
        // Save hybrid metadata
        this.saveHybridMetadata();
    }

    /**
     * Sync individual topic to server
     */
    async syncTopicToServer(topicTitle, completed) {
        if (!this.currentChapter) {
            console.warn('Cannot sync - no current chapter defined');
            return;
        }

        try {
            const success = await this.anonymousTracker.saveProgress(
                this.currentChapter, 
                topicTitle, 
                completed
            );
            
            if (success) {
                console.log(`Synced to server: ${topicTitle} = ${completed}`);
            } else {
                console.warn(`Failed to sync to server: ${topicTitle}`);
            }
        } catch (error) {
            console.warn(`Error syncing topic to server:`, error.message);
        }
    }

    /**
     * Sync all local changes to server (useful for offline recovery)
     */
    async syncLocalChangesToServer() {
        if (!this.currentChapter || this.syncInProgress) return;
        
        console.log('Syncing local changes to server...');
        
        try {
            const localProgress = this.getLocalProgress();
            
            for (const [topicTitle, completed] of Object.entries(localProgress)) {
                if (completed) {
                    await this.syncTopicToServer(topicTitle, completed);
                    // Small delay to avoid overwhelming the server
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            }
            
            console.log('Local changes sync completed');
            
        } catch (error) {
            console.warn('Error syncing local changes:', error.message);
        }
    }

    /**
     * Get local progress for current chapter
     */
    getLocalProgress() {
        const allProgress = this.loadProgress();
        return allProgress[this.currentChapter] || {};
    }

    /**
     * Setup periodic sync every 5 minutes
     */
    setupPeriodicSync() {
        setInterval(async () => {
            if (this.anonymousTracker.isReadyToSync()) {
                await this.loadAndMergeServerProgress();
                await this.syncLocalChangesToServer();
            }
        }, 5 * 60 * 1000); // 5 minutes
        
        console.log('Periodic sync scheduled every 5 minutes');
    }

    /**
     * Save hybrid-specific metadata
     */
    saveHybridMetadata() {
        const metadata = {
            lastSyncTimestamp: this.lastSyncTimestamp,
            hybridMode: true,
            userId: this.userId,
            anonymousUserId: this.anonymousTracker.getUserId(),
            version: this.dataVersion
        };
        
        try {
            localStorage.setItem(this.hybridStorageKey, JSON.stringify(metadata));
        } catch (error) {
            console.warn('Failed to save hybrid metadata:', error.message);
        }
    }

    /**
     * Load hybrid-specific metadata
     */
    loadHybridMetadata() {
        try {
            const stored = localStorage.getItem(this.hybridStorageKey);
            return stored ? JSON.parse(stored) : {};
        } catch (error) {
            console.warn('Failed to load hybrid metadata:', error.message);
            return {};
        }
    }

    /**
     * Get sync status for debugging
     */
    getSyncStatus() {
        const anonymousStatus = this.anonymousTracker.getSyncStatus();
        const metadata = this.loadHybridMetadata();
        
        return {
            hybridMode: true,
            lastSyncTimestamp: this.lastSyncTimestamp,
            syncInProgress: this.syncInProgress,
            currentChapter: this.currentChapter,
            anonymous: anonymousStatus,
            metadata: metadata
        };
    }

    /**
     * Force full synchronization (useful for troubleshooting)
     */
    async forceFullSync() {
        console.log('Force full synchronization initiated...');
        
        try {
            // Reset sync state
            this.syncInProgress = false;
            
            // Load and merge server progress
            await this.loadAndMergeServerProgress();
            
            // Sync all local changes
            await this.syncLocalChangesToServer();
            
            console.log('Force full sync completed successfully');
            return true;
            
        } catch (error) {
            console.error('Force full sync failed:', error.message);
            return false;
        }
    }

    /**
     * Clear all hybrid data (for privacy/reset)
     */
    async clearAllHybridData() {
        try {
            // Clear server data
            await this.anonymousTracker.clearAllData();
            
            // Clear local storage data
            super.clearAllProgress();
            
            // Clear hybrid metadata
            localStorage.removeItem(this.hybridStorageKey);
            
            console.log('All hybrid progress data cleared');
            return true;
            
        } catch (error) {
            console.error('Error clearing hybrid data:', error.message);
            return false;
        }
    }

    /**
     * Export progress data for backup/migration
     */
    exportProgressData() {
        const localProgress = this.loadProgress();
        const metadata = this.loadHybridMetadata();
        const syncStatus = this.getSyncStatus();
        
        return {
            exportTimestamp: new Date().toISOString(),
            localProgress: localProgress,
            metadata: metadata,
            syncStatus: syncStatus,
            version: this.dataVersion
        };
    }

    /**
     * Import progress data from backup
     */
    async importProgressData(exportedData) {
        try {
            if (!exportedData || !exportedData.localProgress) {
                throw new Error('Invalid export data format');
            }
            
            // Import local progress
            Object.entries(exportedData.localProgress).forEach(([chapter, topics]) => {
                Object.entries(topics).forEach(([topicTitle, completed]) => {
                    if (completed) {
                        super.markTopicCompleted(topicTitle, true);
                    }
                });
            });
            
            // Sync imported data to server
            await this.syncLocalChangesToServer();
            
            console.log('Progress data imported successfully');
            return true;
            
        } catch (error) {
            console.error('Error importing progress data:', error.message);
            return false;
        }
    }
}

// Auto-upgrade existing UnifiedCCNAProgressTracker instances to hybrid mode
document.addEventListener('DOMContentLoaded', function() {
    // Check if we should enable hybrid mode (could be a user setting)
    const enableHybridMode = localStorage.getItem('enable_hybrid_progress') !== 'false'; // Default to enabled
    
    if (enableHybridMode && window.AnonymousProgressTracker) {
        console.log('Hybrid progress tracking enabled');
        
        // Replace the global progress tracker creation in section-loader.js
        window.createProgressTracker = function(sectionNumber) {
            return new HybridCCNAProgressTracker(sectionNumber);
        };
    } else {
        console.log('Using localStorage-only progress tracking');
    }
});