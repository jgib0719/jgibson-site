/**
 * Unified Progress Tracker for CCNA Study Guide
 * Replaces the three overlapping progress systems with a single, clean architecture
 * Uses strategy pattern for storage and state machine for sync management
 * 
 * Phase 2 Consolidation - October 2025
 */

/**
 * Progress State Machine
 * Manages the current state of progress operations
 */
class ProgressStateMachine {
    constructor() {
        this.state = 'idle';
        this.listeners = [];
    }

    /**
     * Valid state transitions
     */
    static TRANSITIONS = {
        'idle': ['syncing', 'error'],
        'syncing': ['synced', 'error', 'idle'],
        'synced': ['syncing', 'idle'],
        'error': ['syncing', 'idle']
    };

    /**
     * Transition to a new state
     * @param {string} newState - Target state
     */
    transition(newState) {
        if (!ProgressStateMachine.TRANSITIONS[this.state]?.includes(newState)) {
            console.warn(`Invalid state transition: ${this.state} -> ${newState}`);
            return false;
        }

        const oldState = this.state;
        this.state = newState;
        
        // Notify listeners
        this.listeners.forEach(callback => {
            try {
                callback(newState, oldState);
            } catch (error) {
                console.warn('Error in state machine listener:', error);
            }
        });

        return true;
    }

    /**
     * Get current state
     */
    getState() {
        return this.state;
    }

    /**
     * Add state change listener
     */
    onStateChange(callback) {
        this.listeners.push(callback);
    }

    /**
     * Remove state change listener
     */
    removeStateListener(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }

    /**
     * Cleanup
     */
    destroy() {
        this.listeners = [];
        this.state = 'idle';
    }
}

/**
 * Storage Factory - Creates appropriate storage adapters
 */
class StorageFactory {
    /**
     * Create storage adapter based on mode
     * @param {string} mode - 'local', 'remote', or 'hybrid'
     * @param {Object} config - Configuration for the adapter
     */
    static create(mode, config = {}) {
        switch (mode) {
            case 'local':
                return new LocalStorageAdapter(config);
            case 'remote':
                return new APIStorageAdapter(config);
            case 'hybrid':
                return new HybridStorageAdapter(config);
            default:
                console.warn(`Unknown storage mode: ${mode}, falling back to local`);
                return new LocalStorageAdapter(config);
        }
    }
}

/**
 * Base Storage Adapter Interface
 */
class StorageAdapter {
    async save(topicData) {
        throw new Error('save() must be implemented by storage adapter');
    }

    async load(sectionNumber = null) {
        throw new Error('load() must be implemented by storage adapter');
    }

    async clear(sectionNumber = null) {
        throw new Error('clear() must be implemented by storage adapter');
    }

    isOnline() {
        return navigator.onLine;
    }

    destroy() {
        // Override in subclasses if cleanup needed
    }
}

/**
 * Local Storage Adapter - localStorage only
 */
class LocalStorageAdapter extends StorageAdapter {
    constructor(config = {}) {
        super();
        this.storageKey = config.storageKey || 'ccna_progress_v4';
        this.dataVersion = config.dataVersion || '4.0';
        this.checkDataVersion();
    }

    checkDataVersion() {
        const currentVersion = localStorage.getItem('ccna_data_version');
        if (currentVersion !== this.dataVersion) {
            // Clear stale data
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('ccna_progress') || key.startsWith('ccna_chapter')) {
                    localStorage.removeItem(key);
                }
            });
            localStorage.setItem('ccna_data_version', this.dataVersion);
            console.log('Cleared stale progress data due to version change');
        }
    }

    async save(topicData) {
        const { sectionNumber, topicTitle, completed, timestamp } = topicData;
        
        try {
            const allProgress = await this.load();
            
            if (!allProgress[sectionNumber]) {
                allProgress[sectionNumber] = {};
            }

            if (completed) {
                allProgress[sectionNumber][topicTitle] = {
                    completed: true,
                    completedAt: timestamp || new Date().toISOString(),
                    studyTime: 0
                };
            } else {
                delete allProgress[sectionNumber][topicTitle];
            }

            localStorage.setItem(this.storageKey, JSON.stringify(allProgress));
            return true;
        } catch (error) {
            console.error('LocalStorage save failed:', error);
            return false;
        }
    }

    async load(sectionNumber = null) {
        try {
            const stored = localStorage.getItem(this.storageKey);
            const allProgress = stored ? JSON.parse(stored) : {};
            
            if (sectionNumber) {
                return allProgress[sectionNumber] || {};
            }
            
            return allProgress;
        } catch (error) {
            console.error('LocalStorage load failed:', error);
            return {};
        }
    }

    async clear(sectionNumber = null) {
        try {
            if (sectionNumber) {
                const allProgress = await this.load();
                delete allProgress[sectionNumber];
                localStorage.setItem(this.storageKey, JSON.stringify(allProgress));
            } else {
                localStorage.removeItem(this.storageKey);
            }
            return true;
        } catch (error) {
            console.error('LocalStorage clear failed:', error);
            return false;
        }
    }
}

/**
 * API Storage Adapter - Server-side storage only
 */
class APIStorageAdapter extends StorageAdapter {
    constructor(config = {}) {
        super();
        this.apiBase = config.apiBase || '/api/v1/progress';
        this.userId = config.userId || this.generateUserId();
        this.maxRetries = config.maxRetries || 3;
    }

    generateUserId() {
        // Use same logic as original anonymous tracker
        if (window.CCNAUserIdentity) {
            const userIdentity = new CCNAUserIdentity();
            return userIdentity.getOrCreateAnonymousUserId();
        }
        // Fallback
        let userId = localStorage.getItem('anonymous_user_id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('anonymous_user_id', userId);
        }
        return userId;
    }

    async save(topicData) {
        if (!this.isOnline()) {
            throw new Error('Network unavailable');
        }

        const { sectionNumber, topicTitle, completed, timestamp } = topicData;
        
        const progressData = {
            userId: this.userId,
            sectionNumber,
            topicTitle,
            completed,
            timestamp: timestamp || new Date().toISOString()
        };

        try {
            const response = await fetch(`${this.apiBase}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(progressData)
            });

            if (response.ok) {
                console.log(`API save successful: ${topicTitle} in section ${sectionNumber}`);
                return true;
            } else {
                throw new Error(`Server responded with status: ${response.status}`);
            }
        } catch (error) {
            console.error('API save failed:', error);
            throw error;
        }
    }

    async load(sectionNumber = null) {
        if (!this.isOnline()) {
            throw new Error('Network unavailable');
        }

        try {
            // Use a more discrete fetch approach for 404s (expected for new users)
            const response = await fetch(`${this.apiBase}/${this.userId}`, {
                headers: {
                    'Accept': 'application/json',
                },
                cache: 'no-cache'
            }).catch(async (fetchError) => {
                // For network errors, just return a mock 404 response
                console.log('🌐 Network issue - using local storage only');
                return { ok: false, status: 404, statusText: 'Network Error' };
            });
            
            if (response.ok) {
                const progressData = await response.json();
                console.log('✓ Progress loaded from server');
                
                if (sectionNumber) {
                    return progressData[sectionNumber] || {};
                }
                
                return progressData;
            } else if (response.status === 404) {
                // New user - no progress yet (this is expected behavior, not an error)
                console.log('ℹ️  Expected: New user with no saved progress yet');
                return {};
            } else {
                throw new Error(`Server responded with status: ${response.status}`);
            }
        } catch (error) {
            console.error('API load failed:', error);
            throw error;
        }
    }

    async clear(sectionNumber = null) {
        if (!this.isOnline()) {
            throw new Error('Network unavailable');
        }

        try {
            const endpoint = sectionNumber 
                ? `${this.apiBase}/${this.userId}/${sectionNumber}`
                : `${this.apiBase}/${this.userId}`;
                
            const response = await fetch(endpoint, {
                method: 'DELETE'
            });
            
            return response.ok;
        } catch (error) {
            console.error('API clear failed:', error);
            throw error;
        }
    }

    getUserId() {
        return this.userId;
    }
}

/**
 * Hybrid Storage Adapter - localStorage + API with offline queue
 */
class HybridStorageAdapter extends StorageAdapter {
    constructor(config = {}) {
        super();
        this.localStorage = new LocalStorageAdapter(config);
        this.apiStorage = new APIStorageAdapter(config);
        this.syncQueue = [];
        this.queueKey = `sync_queue_${this.apiStorage.getUserId()}`;
        this.listeners = [];
        
        this.loadSyncQueue();
        this.setupNetworkListeners();
    }

    setupNetworkListeners() {
        const onlineHandler = () => {
            console.log('Network restored - processing sync queue');
            this.processSyncQueue();
        };

        const offlineHandler = () => {
            console.log('Network lost - queuing operations');
        };

        window.addEventListener('online', onlineHandler);
        window.addEventListener('offline', offlineHandler);
        
        // Track listeners for cleanup
        this.listeners.push(
            { element: window, event: 'online', handler: onlineHandler },
            { element: window, event: 'offline', handler: offlineHandler }
        );
    }

    async save(topicData) {
        // Always save to localStorage immediately
        const localSuccess = await this.localStorage.save(topicData);
        
        if (!localSuccess) {
            console.error('Critical: localStorage save failed');
            return false;
        }

        // Try to sync to API if online
        if (this.isOnline()) {
            try {
                const apiSuccess = await this.apiStorage.save(topicData);
                if (apiSuccess) {
                    console.log('Hybrid save: both local and API successful');
                    return true;
                }
            } catch (error) {
                console.warn('API save failed, queuing for later:', error.message);
            }
        }

        // Queue for later sync if API failed or offline
        this.queueForSync('save', topicData);
        console.log('Hybrid save: local successful, API queued');
        return true;
    }

    async load(sectionNumber = null) {
        // Try API first if online, fallback to localStorage
        if (this.isOnline()) {
            try {
                const apiData = await this.apiStorage.load(sectionNumber);
                
                // Merge with local data if needed
                const localData = await this.localStorage.load(sectionNumber);
                const mergedData = this.mergeProgressData(apiData, localData);
                
                // Update localStorage with merged data
                if (JSON.stringify(mergedData) !== JSON.stringify(localData)) {
                    await this.updateLocalWithMerged(mergedData, sectionNumber);
                }
                
                return mergedData;
            } catch (error) {
                console.warn('API load failed, using localStorage:', error.message);
            }
        }

        // Fallback to localStorage
        return await this.localStorage.load(sectionNumber);
    }

    async clear(sectionNumber = null) {
        // Clear localStorage immediately
        const localSuccess = await this.localStorage.clear(sectionNumber);
        
        // Try to clear API if online
        if (this.isOnline()) {
            try {
                await this.apiStorage.clear(sectionNumber);
            } catch (error) {
                console.warn('API clear failed:', error.message);
            }
        }

        return localSuccess;
    }

    mergeProgressData(apiData, localData) {
        const merged = { ...localData };
        
        // Merge API data, preserving most recent completion
        Object.entries(apiData).forEach(([topic, apiProgress]) => {
            const localProgress = merged[topic];
            
            if (!localProgress && apiProgress.completed) {
                // Topic completed on API but not locally
                merged[topic] = apiProgress;
            } else if (localProgress && !localProgress.completed && apiProgress.completed) {
                // Local topic not completed but API shows completed
                merged[topic] = apiProgress;
            }
            // Keep local if local is more recent or both completed
        });

        return merged;
    }

    async updateLocalWithMerged(mergedData, sectionNumber) {
        if (sectionNumber) {
            // Update specific section
            const allData = await this.localStorage.load();
            allData[sectionNumber] = mergedData;
            localStorage.setItem(this.localStorage.storageKey, JSON.stringify(allData));
        } else {
            // Update all data
            localStorage.setItem(this.localStorage.storageKey, JSON.stringify(mergedData));
        }
    }

    queueForSync(operation, data) {
        const syncItem = {
            operation,
            data,
            timestamp: new Date().toISOString(),
            attempts: 0
        };
        
        this.syncQueue.push(syncItem);
        this.saveSyncQueue();
    }

    saveSyncQueue() {
        try {
            localStorage.setItem(this.queueKey, JSON.stringify(this.syncQueue));
        } catch (error) {
            console.warn('Could not persist sync queue:', error);
        }
    }

    loadSyncQueue() {
        try {
            const saved = localStorage.getItem(this.queueKey);
            if (saved) {
                this.syncQueue = JSON.parse(saved);
                console.log(`Loaded ${this.syncQueue.length} queued operations`);
                
                // Process queue if online
                if (this.isOnline()) {
                    setTimeout(() => this.processSyncQueue(), 1000);
                }
            }
        } catch (error) {
            console.warn('Could not load sync queue:', error);
            this.syncQueue = [];
        }
    }

    async processSyncQueue() {
        if (!this.isOnline() || this.syncQueue.length === 0) {
            return;
        }

        console.log(`Processing ${this.syncQueue.length} queued operations`);
        
        // Process sequentially to avoid overwhelming server
        for (let i = this.syncQueue.length - 1; i >= 0; i--) {
            const item = this.syncQueue[i];
            item.attempts++;

            let success = false;
            try {
                if (item.operation === 'save') {
                    success = await this.apiStorage.save(item.data);
                }
            } catch (error) {
                console.warn(`Sync queue item failed (attempt ${item.attempts}):`, error.message);
            }

            if (success || item.attempts >= 3) {
                // Remove successfully synced or repeatedly failed items
                this.syncQueue.splice(i, 1);
            }
        }

        this.saveSyncQueue();
        
        if (this.syncQueue.length === 0) {
            console.log('All queued operations successfully synced');
        }
    }

    getSyncStatus() {
        return {
            queueLength: this.syncQueue.length,
            isOnline: this.isOnline(),
            userId: this.apiStorage.getUserId()
        };
    }

    destroy() {
        // Remove event listeners
        this.listeners.forEach(({ element, event, handler }) => {
            if (element && element.removeEventListener) {
                element.removeEventListener(event, handler);
            }
        });
        this.listeners = [];

        // Clear references
        if (this.localStorage) this.localStorage.destroy();
        if (this.apiStorage) this.apiStorage.destroy();
        this.syncQueue = [];
    }
}

/**
 * Main Progress Tracker Class
 * Single interface replacing all previous progress trackers
 */
class ProgressTracker {
    constructor(config = {}) {
        // Configuration
        this.sectionNumber = config.sectionNumber || null;
        this.storageMode = config.storageMode || 'hybrid';
        
        // Initialize storage strategy
        this.storage = StorageFactory.create(this.storageMode, {
            storageKey: `ccna_progress_v4_${this.getUserId()}`,
            apiBase: config.apiBase || '/api/v1/progress',
            userId: this.getUserId(),
            dataVersion: '4.0'
        });
        
        // Initialize state machine
        this.state = new ProgressStateMachine();
        
        // Topic management
        this.sectionTopics = {};
        this.cachedTopicTotals = null;
        
        // Event management
        this.subscribers = [];
        this.listeners = [];
        
        console.log(`📊 ProgressTracker initialized with ${this.storageMode} storage for section ${this.sectionNumber}`);
        
        // Show helpful info for new users
        if (this.storageMode === 'local') {
            console.log('💡 Starting in local-only mode. Will upgrade to server sync when you complete topics.');
        }
        
        // Setup section data listener
        this.setupSectionDataListener();
    }

    getUserId() {
        if (window.CCNAUserIdentity) {
            const userIdentity = new CCNAUserIdentity();
            return userIdentity.getOrCreateCCNAUserId();
        }
        // Fallback
        let userId = localStorage.getItem('ccna_user_id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('ccna_user_id', userId);
        }
        return userId;
    }

    setupSectionDataListener() {
        const handler = (event) => {
            console.log('Section data loaded, updating progress tracking:', event.detail);
            this.cachedTopicTotals = null; // Clear cache
            setTimeout(() => {
                this.notifySubscribers('progress-updated');
            }, 100);
        };
        
        window.addEventListener('sectionDataLoaded', handler);
        this.listeners.push({ element: window, event: 'sectionDataLoaded', handler });
    }

    /**
     * Mark a topic as completed or not completed
     * @param {string} topicTitle - Title of the topic
     * @param {boolean} completed - Whether the topic is completed
     */
    async markTopicComplete(topicTitle, completed = true) {
        if (!this.sectionNumber) {
            console.error('Cannot mark topic complete: no section number set');
            return false;
        }

        this.state.transition('syncing');
        
        const topicData = {
            sectionNumber: this.sectionNumber,
            topicTitle,
            completed,
            timestamp: new Date().toISOString()
        };

        try {
            const success = await this.storage.save(topicData);
            
            if (success) {
                this.state.transition('synced');
                this.notifySubscribers('progress-updated', { topicTitle, completed });
                console.log(`Topic ${completed ? 'completed' : 'unchecked'}: ${topicTitle}`);
                
                // Auto-upgrade to hybrid mode on first topic completion for better sync
                if (completed && this.storageMode === 'local' && navigator.onLine) {
                    console.log('🔄 Upgrading to hybrid mode for server sync...');
                    this.upgradeToHybridMode();
                }
                
                return true;
            } else {
                this.state.transition('error');
                return false;
            }
        } catch (error) {
            console.error('Error marking topic complete:', error);
            this.state.transition('error');
            this.queueForRetry(topicData);
            return false;
        }
    }

    /**
     * Check if a topic is completed
     * @param {string} topicTitle - Title of the topic
     * @param {number} sectionNumber - Optional section number (defaults to current)
     */
    async isTopicCompleted(topicTitle, sectionNumber = null) {
        const section = sectionNumber || this.sectionNumber;
        
        try {
            const sectionProgress = await this.storage.load(section);
            return !!(sectionProgress[topicTitle] && sectionProgress[topicTitle].completed);
        } catch (error) {
            console.error('Error checking topic completion:', error);
            return false;
        }
    }

    /**
     * Get all progress data
     */
    async getAllProgress() {
        try {
            return await this.storage.load();
        } catch (error) {
            console.error('Error loading all progress:', error);
            return {};
        }
    }

    /**
     * Get progress for a specific section
     */
    async getSectionProgress(sectionNumber = null) {
        const section = sectionNumber || this.sectionNumber;
        
        try {
            return await this.storage.load(section);
        } catch (error) {
            console.error('Error loading section progress:', error);
            return {};
        }
    }

    /**
     * Set topics for a section (called by SectionLoader)
     */
    setSectionTopics(sectionNumber, topicTitles) {
        if (Array.isArray(topicTitles)) {
            this.sectionTopics[sectionNumber] = topicTitles;
            this.updateTopicTotalsCache();
            console.log(`Set ${topicTitles.length} topics for section ${sectionNumber}`);
        }
    }

    updateTopicTotalsCache() {
        if (window.CCNA_SECTION_REGISTRY && this.sectionNumber && this.sectionTopics[this.sectionNumber]) {
            const count = this.sectionTopics[this.sectionNumber].length;
            window.CCNA_SECTION_REGISTRY.updateTopicTotal(this.sectionNumber, count);
        }
    }

    /**
     * Get overall progress across all sections
     */
    async getOverallProgress() {
        try {
            const allProgress = await this.getAllProgress();
            let totalCompleted = 0;
            let totalTopics = 0;
            
            // Get topic totals from registry
            if (window.CCNA_SECTION_REGISTRY) {
                const totals = window.CCNA_SECTION_REGISTRY.getAllTopicTotals();
                
                [1, 2, 3, 4, 5, 6].forEach(section => {
                    const sectionProgress = allProgress[section] || {};
                    const completed = Object.keys(sectionProgress).filter(topic => 
                        sectionProgress[topic] && sectionProgress[topic].completed
                    ).length;
                    
                    totalCompleted += completed;
                    totalTopics += totals[section] || 0;
                });
            }
            
            return {
                completed: totalCompleted,
                total: totalTopics,
                percentage: totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0
            };
        } catch (error) {
            console.error('Error calculating overall progress:', error);
            return { completed: 0, total: 0, percentage: 0 };
        }
    }

    /**
     * Get progress for a specific section with stats
     */
    async getSectionProgressStats(sectionNumber = null) {
        const section = sectionNumber || this.sectionNumber;
        
        try {
            const sectionProgress = await this.getSectionProgress(section);
            const completed = Object.keys(sectionProgress).filter(topic => 
                sectionProgress[topic] && sectionProgress[topic].completed
            ).length;
            
            let total = 0;
            if (this.sectionTopics[section]) {
                total = this.sectionTopics[section].length;
            } else if (window.CCNA_SECTION_REGISTRY) {
                const totals = window.CCNA_SECTION_REGISTRY.getAllTopicTotals();
                total = totals[section] || 0;
            }
            
            return {
                completed,
                total,
                percentage: total > 0 ? Math.round((completed / total) * 100) : 0
            };
        } catch (error) {
            console.error('Error calculating section progress:', error);
            return { completed: 0, total: 0, percentage: 0 };
        }
    }

    /**
     * Get topic completion states for UI synchronization
     */
    async getTopicCompletionStates() {
        if (!this.sectionNumber) {
            return {};
        }

        try {
            const sectionProgress = await this.getSectionProgress();
            const completionStates = {};
            
            if (this.sectionTopics[this.sectionNumber]) {
                this.sectionTopics[this.sectionNumber].forEach(title => {
                    completionStates[title] = !!(sectionProgress[title] && sectionProgress[title].completed);
                });
            }
            
            return completionStates;
        } catch (error) {
            console.error('Error getting topic completion states:', error);
            return {};
        }
    }

    /**
     * Clear progress data
     */
    async clearProgress(sectionNumber = null) {
        try {
            const success = await this.storage.clear(sectionNumber);
            if (success) {
                this.notifySubscribers('progress-cleared', { sectionNumber });
                console.log('Progress data cleared');
            }
            return success;
        } catch (error) {
            console.error('Error clearing progress:', error);
            return false;
        }
    }

    /**
     * Subscribe to progress events
     */
    subscribe(callback) {
        this.subscribers.push(callback);
    }

    /**
     * Unsubscribe from progress events
     */
    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(cb => cb !== callback);
    }

    /**
     * Notify subscribers of progress changes
     */
    notifySubscribers(eventType, data = {}) {
        console.log(`🔔 Notifying ${this.subscribers.length} subscribers of event: ${eventType}`, data);
        this.subscribers.forEach((callback, index) => {
            try {
                console.log(`📢 Calling subscriber ${index + 1}/${this.subscribers.length}`);
                callback(eventType, data);
            } catch (error) {
                console.warn('Error in progress tracker subscriber:', error);
            }
        });
        
        // Also dispatch window events for global progress bars
        if (eventType === 'progress-updated') {
            console.log('📡 Dispatching window progressUpdated event');
            window.dispatchEvent(new CustomEvent('progressUpdated', {
                detail: { topicTitle: data.topicTitle, completed: data.completed, sectionNumber: this.sectionNumber }
            }));
        }
        
        console.log(`✅ Finished notifying subscribers for event: ${eventType}`);
    }

    /**
     * Get current sync status
     */
    getSyncStatus() {
        const baseStatus = {
            state: this.state.getState(),
            sectionNumber: this.sectionNumber,
            storageMode: this.storageMode
        };

        if (this.storage.getSyncStatus) {
            return { ...baseStatus, ...this.storage.getSyncStatus() };
        }

        return baseStatus;
    }

    /**
     * Force full synchronization (for hybrid mode)
     */
    async forceSync() {
        if (this.storage.processSyncQueue) {
            await this.storage.processSyncQueue();
        }
    }

    queueForRetry(topicData) {
        if (this.storage.queueForSync) {
            this.storage.queueForSync('save', topicData);
        }
    }

    /**
     * Upgrade from local-only to hybrid mode when user starts making progress
     */
    async upgradeToHybridMode() {
        if (this.storageMode === 'hybrid') {
            return; // Already hybrid
        }

        try {
            console.log('📡 Upgrading storage to hybrid mode...');
            
            // Get current local data
            const localData = await this.storage.load();
            
            // Create new hybrid storage
            const hybridStorage = StorageFactory.create('hybrid', {
                storageKey: `ccna_progress_v4_${this.getUserId()}`,
                apiBase: '/api/v1/progress',
                userId: this.getUserId(),
                dataVersion: '4.0'
            });
            
            // Migrate existing data to new storage with rate limiting
            const completedTopics = [];
            for (const [section, topics] of Object.entries(localData)) {
                for (const [topic, data] of Object.entries(topics)) {
                    if (data && data.completed) {
                        completedTopics.push({
                            sectionNumber: parseInt(section),
                            topicTitle: topic,
                            completed: true,
                            timestamp: data.completedAt || new Date().toISOString()
                        });
                    }
                }
            }
            
            // Save with delays to avoid rate limiting (max 2 per second)
            console.log(`📦 Migrating ${completedTopics.length} completed topics to hybrid mode...`);
            for (let i = 0; i < completedTopics.length; i++) {
                await hybridStorage.save(completedTopics[i]);
                
                // Add 500ms delay between saves to avoid triggering DoS protection
                if (i < completedTopics.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }
            
            // Cleanup old storage
            if (this.storage.destroy) {
                this.storage.destroy();
            }
            
            // Switch to hybrid storage
            this.storage = hybridStorage;
            this.storageMode = 'hybrid';
            
            // Update user preference
            localStorage.setItem('progress_tracker_mode', 'hybrid');
            
            console.log('✅ Successfully upgraded to hybrid mode');
            
        } catch (error) {
            console.warn('Failed to upgrade to hybrid mode:', error);
            // Continue with local storage if upgrade fails
        }
    }

    // ============================================================================
    // Legacy Method Names for Backward Compatibility
    // ============================================================================

    /**
     * Legacy method: markTopicCompleted - maps to markTopicComplete
     */
    async markTopicCompleted(topicTitle, completed = true) {
        return await this.markTopicComplete(topicTitle, completed);
    }

    /**
     * Legacy method: setChapterTopics - maps to setSectionTopics
     */
    setChapterTopics(chapterNumber, topicTitles) {
        this.setSectionTopics(chapterNumber, topicTitles);
    }

    /**
     * Legacy method: getOverallProgress - already exists but ensure sync compatibility
     */
    // (method already exists)

    /**
     * Legacy method: getTopicCompletionStates - already exists but ensure sync compatibility  
     */
    // (method already exists)

    /**
     * Cleanup method to prevent memory leaks
     */
    destroy() {
        // Remove event listeners
        this.listeners.forEach(({ element, event, handler }) => {
            if (element && element.removeEventListener) {
                element.removeEventListener(event, handler);
            }
        });
        this.listeners = [];

        // Clear subscribers
        this.subscribers = [];

        // Cleanup storage
        if (this.storage && this.storage.destroy) {
            this.storage.destroy();
        }

        // Cleanup state machine
        if (this.state) {
            this.state.destroy();
        }

        console.log('ProgressTracker destroyed and cleaned up');
    }
}

// Export classes for global use
window.ProgressTracker = ProgressTracker;
window.StorageFactory = StorageFactory;
window.LocalStorageAdapter = LocalStorageAdapter;
window.APIStorageAdapter = APIStorageAdapter;
window.HybridStorageAdapter = HybridStorageAdapter;

console.log('Unified ProgressTracker system loaded');