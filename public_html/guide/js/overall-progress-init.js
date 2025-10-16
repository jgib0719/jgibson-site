/**
 * Overall Progress Initialization - CCNA Study Guide
 * Initializes global progress tracking system on sections.html
 * Following Golden Rules hierarchy - Frontend Application Layer
 */

class OverallProgressInitializer {
    constructor() {
        this.totalTopics = 0;
        this.globalProgressTracker = null;
        this.isInitialized = false;
        this.listeners = []; // Track event listeners for cleanup
        
        console.log('OverallProgressInitializer starting...');
        this.initialize();
    }

    /**
     * Initialize overall progress tracking system
     */
    async initialize() {
        try {
            // Wait for all section data to be loaded and registered
            await this.waitForSectionData();
            
            // Calculate total topics across all sections
            this.totalTopics = CCNA_SECTION_REGISTRY.getTotalTopics();
            console.log(`Total topics across all sections: ${this.totalTopics}`);
            
            // Initialize global progress tracker with new unified system
            this.globalProgressTracker = new ProgressTracker({
                sectionNumber: null, // null = all sections
                storageMode: 'hybrid' // Use hybrid mode for immediate server sync
            });
            console.log('Using unified ProgressTracker for overall progress');
            
            // Give tracker time to initialize and load data
            await new Promise(resolve => setTimeout(resolve, 200));
            
            // Update the progress bar on sections.html page
            await this.updateSectionsProgressBar();
            
            // Store global progress data for individual section pages
            this.storeGlobalProgressData();
            
            // Set up event listeners for progress updates
            this.setupEventListeners();
            
            this.isInitialized = true;
            console.log('Overall progress tracking system initialized successfully');
            
            // Dispatch event for other components
            window.dispatchEvent(new CustomEvent('overallProgressInitialized', {
                detail: { 
                    totalTopics: this.totalTopics,
                    progressTracker: this.globalProgressTracker
                }
            }));
            
            // Force initial progress bar update after a small delay
            setTimeout(async () => {
                console.log('Triggering delayed progress bar update...');
                await this.updateSectionsProgressBar();
            }, 300);
        } catch (error) {
            console.error('Failed to initialize overall progress tracking:', error);
        }
    }

    /**
     * Wait for all section data files to load and register their topic counts
     */
    async waitForSectionData() {
        const maxAttempts = 50; // 5 seconds max wait
        let attempts = 0;
        
        return new Promise((resolve, reject) => {
            const checkInterval = setInterval(() => {
                attempts++;
                
                // Check if all 6 sections have been registered
                const registeredSections = Object.keys(CCNA_SECTION_REGISTRY.topicTotals).length;
                
                if (registeredSections === 6) {
                    clearInterval(checkInterval);
                    console.log('All section data loaded and registered');
                    resolve();
                } else if (attempts >= maxAttempts) {
                    clearInterval(checkInterval);
                    console.warn(`Only ${registeredSections} of 6 sections registered after ${maxAttempts} attempts`);
                    resolve(); // Continue anyway
                } else {
                    console.log(`Waiting for section data... (${registeredSections}/6 sections registered)`);
                }
            }, 100);
        });
    }

    /**
     * Store global progress data in sessionStorage for individual section pages
     */
    storeGlobalProgressData() {
        const globalProgressData = {
            totalTopics: this.totalTopics,
            sectionTotals: CCNA_SECTION_REGISTRY.topicTotals,
            sectionInfo: CCNA_SECTION_REGISTRY.sectionInfo,
            initTimestamp: Date.now(),
            initPage: 'sections.html'
        };
        
        try {
            sessionStorage.setItem('ccna_global_progress_data', JSON.stringify(globalProgressData));
            console.log('Global progress data stored in sessionStorage');
        } catch (error) {
            console.warn('Failed to store global progress data:', error);
        }
    }

    /**
     * Set up event listeners for progress updates
     */
    setupEventListeners() {
        // Helper function to add and track listeners
        const addListener = (element, event, handler) => {
            element.addEventListener(event, handler);
            this.listeners.push({ element, event, handler });
        };

        // Listen for topic count updates
        const topicCountsHandler = async (event) => {
            this.totalTopics = CCNA_SECTION_REGISTRY.getTotalTopics();
            this.storeGlobalProgressData();
            await this.updateSectionsProgressBar();
        };
        addListener(window, 'topicCountsUpdated', topicCountsHandler);
        
        // Listen for progress updates
        const progressHandler = async (event) => {
            this.storeGlobalProgressData();
            await this.updateSectionsProgressBar();
        };
        addListener(window, 'progressUpdated', progressHandler);
    }

    /**
     * Update the progress bar on sections.html page
     */
    async updateSectionsProgressBar() {
        // Wait for DOM to be ready if needed
        if (document.readyState !== 'complete') {
            document.addEventListener('DOMContentLoaded', async () => {
                await this.updateSectionsProgressBar();
            });
            return;
        }
        
        const progressText = document.getElementById('progressText');
        const progressBar = document.getElementById('progressBar');
        const progressDetails = document.getElementById('progressDetails');
        
        if (!progressBar) {
            console.log('Progress bar elements not found - may not be on sections.html page');
            return;
        }
        
        if (!this.globalProgressTracker) {
            console.log('Progress tracker not initialized yet');
            return;
        }

        try {
            // Get overall progress from tracker (handle both sync and async)
            let overallProgress;
            if (this.globalProgressTracker.getOverallProgress) {
                const result = this.globalProgressTracker.getOverallProgress();
                // Handle both sync and async responses
                overallProgress = result && typeof result.then === 'function' ? await result : result;
            } else {
                overallProgress = { completed: 0, total: 0, percentage: 0 };
            }
            
            const totalTopics = this.totalTopics;
            const completedTopics = overallProgress.completed || 0;
            const progressPercentage = overallProgress.percentage || 0;
            
            console.log('Sections page progress update:', { totalTopics, completedTopics, progressPercentage });
            
            // Update progress text
            if (progressText) {
                progressText.textContent = `${progressPercentage}%`;
            }
            
            // Update progress bar
            if (progressBar) {
                progressBar.style.width = `${progressPercentage}%`;
                progressBar.style.backgroundColor = this.getProgressColor(progressPercentage);
            }
            
            // Update progress details
            if (progressDetails) {
                progressDetails.textContent = `${completedTopics} of ${totalTopics} topics completed`;
            }
            
            console.log(`Sections progress updated: ${completedTopics}/${totalTopics} (${progressPercentage}%)`);
            
        } catch (error) {
            console.error('Failed to update sections progress bar:', error);
        }
    }

    /**
     * Get color for progress bar based on percentage
     */
    getProgressColor(percentage) {
        if (percentage >= 80) return '#10b981'; // green
        if (percentage >= 60) return '#f59e0b'; // yellow
        if (percentage >= 40) return '#f97316'; // orange
        return '#ef4444'; // red
    }

    /**
     * Get total topics across all sections
     */
    getTotalTopics() {
        return this.totalTopics;
    }

    /**
     * Get global progress tracker instance
     */
    getProgressTracker() {
        return this.globalProgressTracker;
    }

    /**
     * Cleanup method to prevent memory leaks
     * Removes all event listeners and clears references
     */
    destroy() {
        // Remove all tracked event listeners
        this.listeners.forEach(({ element, event, handler }) => {
            if (element && element.removeEventListener) {
                element.removeEventListener(event, handler);
            }
        });
        this.listeners = [];

        // Clear references
        this.globalProgressTracker = null;
        this.isInitialized = false;
        
        console.log('OverallProgressInitializer destroyed and cleaned up');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize on sections.html
    if (window.location.pathname.includes('sections.html') || 
        window.location.pathname.endsWith('/guide/') ||
        window.location.pathname.endsWith('/guide')) {
        
        window.overallProgressInitializer = new OverallProgressInitializer();
    }
});