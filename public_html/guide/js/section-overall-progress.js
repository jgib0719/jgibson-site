/**
 * Section Overall Progress Display - CCNA Study Guide
 * Handles display of overall progress across all sections on individual section pages
 * Following Golden Rules hierarchy - Frontend Application Layer
 */

class SectionOverallProgressDisplay {
    constructor() {
        this.globalProgressData = null;
        this.progressTracker = null;
        this.isInitialized = false;
        
        console.log('SectionOverallProgressDisplay initializing...');
        this.initialize();
    }

    /**
     * Initialize overall progress display for section pages
     */
    async initialize() {
        try {
            // Load global progress data from sessionStorage
            this.loadGlobalProgressData();
            
            // Initialize progress tracker if needed
            await this.initializeProgressTracker();
            
            // Update master progress bar if it exists
            await this.updateMasterProgressBar();
            
            // Ensure the standard progress tracker also updates its bars
            if (this.progressTracker && this.progressTracker.updateAllProgressBars) {
                this.progressTracker.updateAllProgressBars();
            }
            
            // Set up event listeners
            this.setupEventListeners();
            
            this.isInitialized = true;
            console.log('Section overall progress display initialized');
            
        } catch (error) {
            console.error('Failed to initialize section overall progress display:', error);
        }
    }

    /**
     * Load global progress data from sessionStorage
     */
    loadGlobalProgressData() {
        try {
            const data = sessionStorage.getItem('ccna_global_progress_data');
            if (data) {
                this.globalProgressData = JSON.parse(data);
                console.log('Loaded global progress data:', this.globalProgressData);
            } else {
                console.warn('No global progress data found in sessionStorage');
            }
        } catch (error) {
            console.error('Failed to load global progress data:', error);
        }
    }

    /**
     * Initialize progress tracker for this section
     */
    async initializeProgressTracker() {
        if (!this.progressTracker) {
            // Use new unified progress tracking system
            this.progressTracker = new ProgressTracker({
                sectionNumber: null, // null = all sections
                storageMode: 'hybrid' // Use hybrid mode for immediate server sync
            });
            console.log('Using unified ProgressTracker for section overall progress');
            
            // Give the tracker a moment to initialize and load data
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    /**
     * Update the master progress bar with overall progress
     */
    async updateMasterProgressBar() {
        const masterProgressCard = document.getElementById('master-progress-card');
        const progressText = document.getElementById('progressText');
        const progressBar = document.getElementById('progressBar');
        const progressDetails = document.getElementById('progressDetails');
        
        if (!masterProgressCard) {
            console.log('Master progress bar not found on this page');
            return;
        }

        try {
            // Get overall progress from tracker (handle both sync and async)
            let overallProgress;
            if (this.progressTracker.getOverallProgress) {
                const result = this.progressTracker.getOverallProgress();
                // Handle both sync and async responses
                overallProgress = result && typeof result.then === 'function' ? await result : result;
            } else {
                overallProgress = { completed: 0, total: 0, percentage: 0 };
            }
            
            const totalTopics = this.globalProgressData?.totalTopics || overallProgress.total || 0;
            const completedTopics = overallProgress.completed || 0;
            const progressPercentage = overallProgress.percentage || 0;
            
            console.log('Progress data:', { totalTopics, completedTopics, progressPercentage });
            
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
            
            console.log(`Master progress updated: ${completedTopics}/${totalTopics} (${progressPercentage}%)`);
            
        } catch (error) {
            console.error('Failed to update master progress bar:', error);
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
     * Set up event listeners for progress updates
     */
    setupEventListeners() {
        // Listen for progress updates
        window.addEventListener('progressUpdated', () => {
            this.updateMasterProgressBar();
        });
        
        // Listen for overall progress initialization
        window.addEventListener('overallProgressInitialized', () => {
            this.loadGlobalProgressData();
            this.updateMasterProgressBar();
        });
    }

    /**
     * Force refresh of progress display
     */
    async refresh() {
        this.loadGlobalProgressData();
        await this.updateMasterProgressBar();
    }
}

// Initialize when DOM is ready, but only on section pages (not sections.html)
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is a section page (section.html?section=N or section1.html, section2.html, etc.)
    const isUnifiedSectionPage = window.location.pathname.includes('section.html') && 
                                new URLSearchParams(window.location.search).has('section');
    const isLegacySectionPage = window.location.pathname.includes('section') && 
                               !window.location.pathname.includes('sections.html') &&
                               !window.location.pathname.includes('section.html');
    
    if (isUnifiedSectionPage || isLegacySectionPage) {
        window.sectionOverallProgressDisplay = new SectionOverallProgressDisplay();
    }
});