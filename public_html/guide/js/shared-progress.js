/**
 * Unified CCNA Progress Tracking System
 * This replaces all individual CCNAProgressTracker classes in chapter files
 * Prevents topic count mismatches and cross-chapter contamination
 * Now integrates with dynamic section registry for accurate topic totals
 */

class UnifiedCCNAProgressTracker {
    constructor(currentChapter = null) {
        this.userId = this.getOrCreateUserId();
        this.userStatsKey = 'ccna_user_stats';
        this.currentChapter = currentChapter;
        this.storageKey = `ccna_progress_${this.userId}`;
        this.dataVersion = '3.1'; // PROGRESS RESET: Clear all existing user progress data (updated for dynamic totals)
        
        // Cache for topic totals to prevent multiple API calls
        this._cachedTopicTotals = null;
        
        // CRITICAL: Each chapter defines ONLY its own topics
        // This prevents the cross-contamination issue
        this.chapterTopics = this.getChapterTopicsFromDOM();
        
        this.checkDataVersion();
        this.migrateLegacyData();
        this.initializeUserStats();
        this.loadProgress();
        this.updateAllProgressBars();
        this.setupSectionDataListener();
    }

    /**
     * Listen for section data updates and refresh progress bars
     */
    setupSectionDataListener() {
        window.addEventListener('sectionDataLoaded', (event) => {
            console.log('Section data loaded, updating progress tracking:', event.detail);
            // Clear cached topic totals when new section data loads
            this._cachedTopicTotals = null;
            // Refresh progress bars when new section data is available
            setTimeout(() => {
                this.updateAllProgressBars();
            }, 100);
        });
    }

    /**
     * SOLUTION: Dynamically detect topics from DOM instead of hardcoded arrays
     * This ensures each chapter only counts its actual rendered topics
     */
    getChapterTopicsFromDOM() {
        const topics = {};
        
        if (this.currentChapter) {
            // Count actual topic cards on current page
            const topicCards = document.querySelectorAll('.topic-card h3');
            const currentChapterTopics = Array.from(topicCards).map(h3 => h3.textContent.trim());
            topics[this.currentChapter] = currentChapterTopics;
        }
        
        // Load topic counts for other chapters from localStorage cache
        const cachedTopics = this.getCachedChapterTopics();
        Object.assign(topics, cachedTopics);
        
        return topics;
    }

    /**
     * Cache topic counts to prevent having to load all chapters
     */
    /**
     * Get cached chapter topics with dynamic totals from section registry
     */
    getCachedChapterTopics() {
        // Return cached result if already fetched
        if (this._cachedTopicTotals) {
            return this._cachedTopicTotals;
        }
        
        try {
            // First try to get from section registry (dynamic)
            if (window.CCNA_SECTION_REGISTRY) {
                const dynamicTotals = window.CCNA_SECTION_REGISTRY.getAllTopicTotals();
                console.log('Using dynamic topic totals from section registry:', dynamicTotals);
                this._cachedTopicTotals = dynamicTotals;
                return dynamicTotals;
            }
            
            // Fallback to localStorage cache
            const cached = localStorage.getItem('ccna_chapter_topic_counts');
            if (cached) {
                const parsedCache = JSON.parse(cached);
                this._cachedTopicTotals = parsedCache;
                return parsedCache;
            }
            
            // Final fallback to hardcoded defaults
            const defaults = this.getDefaultTopicCounts();
            this._cachedTopicTotals = defaults;
            return defaults;
        } catch (e) {
            console.warn('Error loading topic counts, using defaults:', e);
            return this.getDefaultTopicCounts();
        }
    }

    /**
     * Fallback topic counts - only used when registry is unavailable
     * These should match actual content but are now dynamically updated
     */
    getDefaultTopicCounts() {
        return {
            1: 35, // Network Fundamentals - keeping current value
            2: 13, // Network Access - corrected to match section2-data.js
            3: 11, // IP Connectivity - corrected from subsection counts
            4: 10, // IP Services - corrected from subsection counts
            5: 11, // Security Fundamentals - corrected from subsection counts
            6: 7   // Network Automation - correct value
        };
    }

    /**
     * Update cached topic counts when visiting a chapter
     * Now integrates with section registry for dynamic updates
     */
    updateTopicCountCache() {
        if (!this.currentChapter) return;
        
        try {
            // Update section registry if available
            if (window.CCNA_SECTION_REGISTRY && this.chapterTopics[this.currentChapter]) {
                const currentCount = Array.isArray(this.chapterTopics[this.currentChapter]) 
                    ? this.chapterTopics[this.currentChapter].length 
                    : this.chapterTopics[this.currentChapter];
                
                if (typeof currentCount === 'number' && currentCount > 0) {
                    window.CCNA_SECTION_REGISTRY.updateTopicTotal(this.currentChapter, currentCount);
                }
            }
            
            // Still maintain legacy localStorage cache for backward compatibility
            const cached = this.getCachedChapterTopics();
            const currentCount = this.chapterTopics[this.currentChapter];
            
            // Only update if we have actual topics (not just a number)
            if (Array.isArray(currentCount) && this.currentChapter) {
                cached[this.currentChapter] = currentCount.length;
                localStorage.setItem('ccna_chapter_topic_counts', JSON.stringify(cached));
            }
        } catch (e) {
            console.warn('Could not update topic count cache:', e);
        }
    }

    getOrCreateUserId() {
        let userId = localStorage.getItem('ccna_user_id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('ccna_user_id', userId);
        }
        return userId;
    }

    /**
     * Check data version and clear stale data if needed
     */
    checkDataVersion() {
        const currentVersion = localStorage.getItem('ccna_data_version');
        if (currentVersion !== this.dataVersion) {
            // Clear all progress-related localStorage on version mismatch
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('ccna_progress') || 
                    key === 'ccna_chapter_topic_counts' ||
                    key === 'ccna_progress' // old key
                ) {
                    localStorage.removeItem(key);
                }
            });
            localStorage.setItem('ccna_data_version', this.dataVersion);
            console.log('Cleared stale progress data due to version change');
        }
    }

    initializeUserStats() {
        const stats = this.getUserStats();
        if (!stats.firstVisit) {
            const userStats = {
                userId: this.userId,
                firstVisit: new Date().toISOString(),
                lastVisit: new Date().toISOString(),
                totalSessions: 1,
                totalTopicsCompleted: 0,
                chaptersAccessed: [this.currentChapter].filter(Boolean),
                averageSessionLength: 0,
                streakDays: 1,
                lastStreakDate: new Date().toDateString()
            };
            localStorage.setItem(this.userStatsKey, JSON.stringify(userStats));
        }
        this.updateUserStats();
    }

    getUserStats() {
        const stats = localStorage.getItem(this.userStatsKey);
        return stats ? JSON.parse(stats) : {};
    }

    updateUserStats() {
        const stats = this.getUserStats();
        const today = new Date().toDateString();
        const lastVisit = new Date(stats.lastVisit || new Date()).toDateString();
        
        stats.lastVisit = new Date().toISOString();
        
        if (lastVisit !== today) {
            stats.totalSessions = (stats.totalSessions || 0) + 1;
            
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (stats.lastStreakDate === yesterday.toDateString()) {
                stats.streakDays = (stats.streakDays || 0) + 1;
            } else if (stats.lastStreakDate !== today) {
                stats.streakDays = 1;
            }
            stats.lastStreakDate = today;
        }
        
        if (this.currentChapter && (!stats.chaptersAccessed || !stats.chaptersAccessed.includes(this.currentChapter))) {
            stats.chaptersAccessed = [...(stats.chaptersAccessed || []), this.currentChapter];
        }
        
        localStorage.setItem(this.userStatsKey, JSON.stringify(stats));
    }

    migrateLegacyData() {
        const oldProgress = localStorage.getItem('ccna_progress');
        if (oldProgress && !localStorage.getItem(this.storageKey)) {
            try {
                const parsed = JSON.parse(oldProgress);
                const migratedData = {};
                
                Object.keys(parsed).forEach(chapter => {
                    if (parsed[chapter] && typeof parsed[chapter] === 'object') {
                        migratedData[chapter] = {};
                        Object.keys(parsed[chapter]).forEach(topic => {
                            if (parsed[chapter][topic] === true) {
                                migratedData[chapter][topic] = {
                                    completed: true,
                                    completedAt: new Date().toISOString(),
                                    studyTime: 0
                                };
                            }
                        });
                    }
                });
                
                localStorage.setItem(this.storageKey, JSON.stringify(migratedData));
                localStorage.removeItem('ccna_progress');
            } catch (e) {
                console.warn('Failed to migrate legacy data:', e);
            }
        }
    }

    loadProgress() {
        const saved = localStorage.getItem(this.storageKey);
        this.progress = saved ? JSON.parse(saved) : {};
    }

    saveProgress() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        this.updateTopicCountCache();
    }

    markTopicCompleted(topicTitle, completed = true) {
        if (!this.progress[this.currentChapter]) {
            this.progress[this.currentChapter] = {};
        }
        
        if (completed) {
            this.progress[this.currentChapter][topicTitle] = {
                completed: true,
                completedAt: new Date().toISOString(),
                studyTime: 0
            };
        } else {
            delete this.progress[this.currentChapter][topicTitle];
        }
        
        this.saveProgress();
        this.updateUserStats();
        this.updateAllProgressBars();
    }

    isTopicCompleted(topicTitle, chapter = null) {
        const chapterNum = chapter || this.currentChapter;
        return !!(this.progress[chapterNum] && this.progress[chapterNum][topicTitle] && this.progress[chapterNum][topicTitle].completed);
    }

    getCompletedTopicsForChapter(chapter) {
        return Object.keys(this.progress[chapter] || {}).filter(topic => 
            this.progress[chapter][topic] && this.progress[chapter][topic].completed
        ).length;
    }

    getTotalTopicsForChapter(chapter) {
        if (Array.isArray(this.chapterTopics[chapter]) && this.chapterTopics[chapter].length > 0) {
            return this.chapterTopics[chapter].length;
        }
        // Fallback to cached/default number
        const cachedCounts = this.getCachedChapterTopics();
        return cachedCounts[chapter] || 0;
    }

    /**
     * FIXED: Accurate overall progress calculation
     */
    getOverallProgress() {
        let totalCompleted = 0;
        let totalTopics = 0;
        
        // Use cached topic counts for accurate totals
        const cachedCounts = this.getCachedChapterTopics();
        
        [1, 2, 3, 4, 5, 6].forEach(chapter => {
            const completed = this.getCompletedTopicsForChapter(chapter);
            const total = cachedCounts[chapter] || 0;
            
            totalCompleted += completed;
            totalTopics += total;
        });
        
        return {
            completed: totalCompleted,
            total: totalTopics,
            percentage: totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0
        };
    }

    getChapterCompletedCount(chapterNum) {
        return this.getCompletedTopicsForChapter(chapterNum);
    }

    getChapterProgress(chapterNum) {
        const total = this.getTotalTopicsForChapter(chapterNum);
        const completed = this.getChapterCompletedCount(chapterNum);
        return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
    }

    /**
     * FIXED: Consistent progress bar updates
     */
    updateAllProgressBars() {
        // Update overall progress bar
        const overall = this.getOverallProgress();
        const overallPercentage = overall.percentage;
        
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        const progressDetails = document.getElementById('progressDetails');
        
        if (progressBar) progressBar.style.width = overallPercentage + '%';
        if (progressText) progressText.textContent = overallPercentage + '%';
        if (progressDetails) progressDetails.textContent = `${overall.completed} of ${overall.total} topics completed`;
        
        // Update chapter-specific progress bar
        if (this.currentChapter) {
            const chapterProgress = this.getChapterProgress(this.currentChapter);
            const chapterProgressBar = document.getElementById('progress-bar');
            const chapterProgressText = document.getElementById('progress-text');
            
            if (chapterProgressBar) chapterProgressBar.style.width = chapterProgress.percentage + '%';
            if (chapterProgressText) chapterProgressText.textContent = chapterProgress.percentage + '%';
        }
    }

    syncVisualState() {
        document.querySelectorAll('.topic-card').forEach(card => {
            const title = card.querySelector('h3') ? card.querySelector('h3').textContent : '';
            if (title && this.isTopicCompleted(title)) {
                card.classList.add('studied');
            } else {
                card.classList.remove('studied');
            }
        });
    }
}

// Export for use in chapter files
window.UnifiedCCNAProgressTracker = UnifiedCCNAProgressTracker;