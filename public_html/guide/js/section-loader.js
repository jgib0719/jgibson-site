/**
 * Shared Section Loader for CCNA Study Guide
 * Eliminates code duplication across section*.html files
 */

class SectionLoader {
    constructor(sectionNumber, sectionData = null) {
        this.sectionNumber = sectionNumber;
        this.progressTracker = null;
        this.currentTopic = null;
        this.currentCardElement = null;
        this.data = sectionData;
        
        this.init();
    }
    
    init() {
        try {
            // Initialize progress tracker with hybrid mode if available
            if (window.HybridCCNAProgressTracker && window.AnonymousProgressTracker) {
                this.progressTracker = new HybridCCNAProgressTracker(this.sectionNumber);
                console.log('Using HybridCCNAProgressTracker for enhanced progress sync');
            } else {
                this.progressTracker = new UnifiedCCNAProgressTracker(this.sectionNumber);
                console.log('Using standard UnifiedCCNAProgressTracker');
            }
            
            // Initialize ALL global styling (replaces embedded CSS)
            if (typeof CCNAConfig !== 'undefined' && CCNAConfig.initializeGlobalStyling) {
                CCNAConfig.initializeGlobalStyling();
            } else {
                console.warn('CCNAConfig not available - styling may not be applied correctly');
            }
            
            // Get the section data - prioritize passed data, fallback to global variable
            if (!this.data) {
                this.data = window[`SECTION${this.sectionNumber}_DATA`];
            }
            
            if (!this.data) {
                this.handleDataError(`Section ${this.sectionNumber} data not loaded. Pass data directly to constructor or ensure window.SECTION${this.sectionNumber}_DATA exists.`);
                return;
            }
            
            // Validate data structure
            if (!this.validateSectionData(this.data)) {
                this.handleDataError(`Section ${this.sectionNumber} data structure is invalid.`);
                return;
            }
            
            // Populate grids with topic cards
            this.populateGrids();
            
            // Extract and provide topics to progress tracker
            this.provideTopicsToProgressTracker();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Initialize progress tracking with error handling
            this.initializeProgressTracking();
            
            // Auto-visual sync
            setTimeout(() => {
                try {
                    this.syncVisualState();
                } catch (error) {
                    console.warn('Progress sync failed:', error);
                }
            }, CCNAConfig.ui.timing.progressSync);
        } catch (error) {
            this.handleInitError(error);
        }
    }
    
    validateSectionData(data) {
        try {
            // Basic structure validation
            if (!data || typeof data !== 'object') {
                return false;
            }

            // Check for required metadata structure
            if (!data.metadata || typeof data.metadata !== 'object') {
                console.warn('Missing required property: metadata');
                return false;
            }

            // Check for subsections in metadata
            if (!data.metadata.subsections || typeof data.metadata.subsections !== 'object') {
                console.warn('Missing required property: metadata.subsections');
                return false;
            }

            // Validate at least one subsection exists
            const subsectionKeys = Object.keys(data.metadata.subsections);
            if (subsectionKeys.length === 0) {
                console.warn('At least one subsection must be defined');
                return false;
            }

            return true;
        } catch (error) {
            console.error('Error validating section data:', error);
            return false;
        }
    }
    
    handleDataError(message) {
        console.error(message);
        this.showErrorMessage(`Failed to load section data: ${message}`, true);
    }
    
    /**
     * Synchronize visual state of topic cards based on completion status
     * This replaces the DOM-dependent method in UnifiedCCNAProgressTracker
     */
    syncVisualState() {
        if (!this.progressTracker || typeof this.progressTracker.getTopicCompletionStates !== 'function') {
            console.warn('Cannot sync visual state: progress tracker not available or missing method');
            return;
        }
        
        try {
            const completionStates = this.progressTracker.getTopicCompletionStates();
            
            document.querySelectorAll('.topic-card').forEach(card => {
                const titleElement = card.querySelector('h3');
                if (titleElement) {
                    const title = titleElement.textContent.trim();
                    if (completionStates[title]) {
                        card.classList.add('studied');
                    } else {
                        card.classList.remove('studied');
                    }
                }
            });
        } catch (error) {
            console.error('Error syncing visual state:', error);
        }
    }
    
    handleInitError(error) {
        console.error('Section initialization failed:', error);
        this.showErrorMessage(`Section failed to initialize: ${error.message}`, true);
    }
    
    showErrorMessage(message, isPersistent = false) {
        try {
            const errorContainer = document.createElement('div');
            errorContainer.className = 'error-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4';
            errorContainer.innerHTML = `
                <div class="flex justify-between items-center">
                    <span>${message}</span>
                    ${!isPersistent ? '<button class="ml-4 text-red-500 hover:text-red-700">&times;</button>' : ''}
                </div>
            `;
            
            // Insert at the top of the main content
            const mainContent = document.querySelector('main') || document.body;
            mainContent.insertBefore(errorContainer, mainContent.firstChild);
            
            // Add close functionality if not persistent
            if (!isPersistent) {
                const closeBtn = errorContainer.querySelector('button');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => errorContainer.remove());
                }
                
                // Auto-remove after 10 seconds
                setTimeout(() => {
                    if (errorContainer.parentNode) {
                        errorContainer.remove();
                    }
                }, 10000);
            }
        } catch (error) {
            // Fallback to console if UI error display fails
            console.error('Failed to display error message:', error);
            console.error('Original message:', message);
        }
    }
    
    createTopicCards(topics, gridElement) {
        if (!gridElement) return;
        
        topics.forEach(topic => {
            const card = CCNAConfig.createTopicCard(topic);
            card.onclick = () => this.openStudyModal(topic, card);
            gridElement.appendChild(card);
        });
    }
    
    populateGrids() {
        // Populate all grids with external data
        Object.keys(this.data.metadata.subsections).forEach(key => {
            const gridElement = document.getElementById(key + 'Grid');
            if (gridElement && this.data[key]) {
                this.createTopicCards(this.data[key], gridElement);
            }
        });
    }
    
    /**
     * Extract topic titles and provide them to the progress tracker
     * This makes SectionLoader responsible for topic extraction instead of progress tracker
     */
    provideTopicsToProgressTracker() {
        if (!this.progressTracker || !this.data) {
            console.warn('Cannot provide topics: progress tracker or data not available');
            return;
        }
        
        try {
            // Extract all topic titles from the section data
            const topicTitles = [];
            
            Object.keys(this.data.metadata.subsections).forEach(key => {
                if (this.data[key] && Array.isArray(this.data[key])) {
                    this.data[key].forEach(topic => {
                        if (topic && topic.title) {
                            topicTitles.push(topic.title);
                        }
                    });
                }
            });
            
            // Provide topics to progress tracker
            if (typeof this.progressTracker.setChapterTopics === 'function') {
                this.progressTracker.setChapterTopics(this.sectionNumber, topicTitles);
                console.log(`Provided ${topicTitles.length} topics to progress tracker for section ${this.sectionNumber}`);
            } else {
                console.warn('Progress tracker does not support setChapterTopics method');
            }
        } catch (error) {
            console.error('Error providing topics to progress tracker:', error);
        }
    }
    
    openStudyModal(topic, cardElement) {
        this.currentTopic = topic;
        this.currentCardElement = cardElement;
        
        document.getElementById('modalTitle').textContent = topic.title;
        document.getElementById('modalDescription').textContent = topic.description || 'Click to study this topic.';
        
        const modalSvgContainer = document.getElementById('modalSvg');
        
        if (topic.visual) {
            // Clear existing content safely
            modalSvgContainer.textContent = '';
            
            // Create a temporary container to parse SVG safely
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = topic.visual;
            
            // Move SVG elements to the modal container
            while (tempDiv.firstChild) {
                modalSvgContainer.appendChild(tempDiv.firstChild);
            }
        } else {
            modalSvgContainer.textContent = '';
        }
        
        const modal = document.getElementById('studyModal');
        const modalContent = document.getElementById('modalContent');
        
        CCNAConfig.openModal(modal, modalContent);
    }
    
    closeStudyModal() {
        const modal = document.getElementById('studyModal');
        const modalContent = document.getElementById('modalContent');
        
        CCNAConfig.closeModal(modal, modalContent);
        setTimeout(() => {
            this.currentTopic = null;
        }, CCNAConfig.ui.timing.modalCleanup);
    }
    
    openDetailsModal(topic) {
        const detailsContent = CCNAConfig.loadDetailsContent(this.sectionNumber, topic.title);
        
        document.getElementById('detailsModalTitle').textContent = topic.title;
        document.getElementById('detailsModalBody').innerHTML = detailsContent;
        
        const detailsModal = document.getElementById('detailsModal');
        const detailsModalContent = document.getElementById('detailsModalContent');
        
        CCNAConfig.openDetailsModal(detailsModal, detailsModalContent);
    }
    
    closeDetailsModal() {
        const detailsModal = document.getElementById('detailsModal');
        const detailsModalContent = document.getElementById('detailsModalContent');

        CCNAConfig.closeDetailsModal(detailsModal, detailsModalContent);
    }

    initializeProgressTracking() {
        try {
            // Sync visual state with stored progress using SectionLoader's method
            this.syncVisualState();
        } catch (error) {
            console.warn('Failed to initialize progress tracking:', error);
        }
    }

    setupEventListeners() {
        // Study modal close functionality
        document.getElementById('closeModal').addEventListener('click', () => this.closeStudyModal());
        document.getElementById('studyModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.closeStudyModal();
        });

        // Details button functionality
        document.getElementById('viewDetails').addEventListener('click', () => {
            if (this.currentTopic) {
                this.openDetailsModal(this.currentTopic);
            }
        });

        // Details modal close functionality
        document.getElementById('closeDetails').addEventListener('click', () => this.closeDetailsModal());
        document.getElementById('detailsModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.closeDetailsModal();
        });

        // Mark completed functionality
        document.getElementById('markCompleted').addEventListener('click', () => {
            if (this.currentTopic && this.currentCardElement) {
                const isCompleted = this.progressTracker.isTopicCompleted(this.currentTopic.title);
                this.progressTracker.markTopicCompleted(this.currentTopic.title, !isCompleted);
                
                // Update card visual state using global config
                CCNAConfig.markCardAsStudied(this.currentCardElement, !isCompleted);
                
                // Update button state using global config
                CCNAConfig.applyButtonState(document.getElementById('markCompleted'), !isCompleted);
                
                this.closeStudyModal();
            }
        });

        // Add keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const studyModal = document.getElementById('studyModal');
                const detailsModal = document.getElementById('detailsModal');
                
                if (CCNAConfig.isModalVisible(detailsModal)) {
                    this.closeDetailsModal();
                } else if (CCNAConfig.isModalVisible(studyModal)) {
                    this.closeStudyModal();
                }
            }
        });
    }
}

// Initialize section loader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Section number is passed via window.SECTION_NUMBER
    // Only auto-initialize if not already manually initialized
    if (!window.sectionLoader) {
        if (typeof window.SECTION_NUMBER !== 'undefined') {
            // Support for new constructor pattern - check if data is available
            const sectionData = window[`SECTION${window.SECTION_NUMBER}_DATA`] || null;
            window.sectionLoader = new SectionLoader(window.SECTION_NUMBER, sectionData);
        } else {
            console.warn('SectionLoader not manually initialized and window.SECTION_NUMBER not defined. Skipping auto-initialization.');
        }
    }
});