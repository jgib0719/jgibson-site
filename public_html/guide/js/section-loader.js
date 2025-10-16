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
        this.listeners = []; // Track event listeners for cleanup
        this.cardListeners = []; // Track card click listeners
        this.dom = {}; // Cache DOM elements
        
        this.init();
    }
    
    /**
     * Cache frequently used DOM elements to reduce query overhead
     */
    cacheDOMElements() {
        // Modal elements
        this.dom.studyModal = document.getElementById('studyModal');
        this.dom.modalContent = document.getElementById('modalContent');
        this.dom.modalTitle = document.getElementById('modalTitle');
        this.dom.modalDescription = document.getElementById('modalDescription');
        this.dom.modalSvg = document.getElementById('modalSvg');
        this.dom.markCompleted = document.getElementById('markCompleted');
        
        // Details modal elements
        this.dom.detailsModal = document.getElementById('detailsModal');
        this.dom.detailsModalContent = document.getElementById('detailsModalContent');
        this.dom.detailsModalTitle = document.getElementById('detailsModalTitle');
        this.dom.detailsModalBody = document.getElementById('detailsModalBody');
        
        // Button elements (for event listeners)
        this.dom.closeModal = document.getElementById('closeModal');
        this.dom.viewDetails = document.getElementById('viewDetails');
        this.dom.closeDetails = document.getElementById('closeDetails');
        
        console.log('DOM elements cached for SectionLoader');
    }
    
    async init() {
        try {
            // Initialize progress tracker with new unified system
            this.progressTracker = new ProgressTracker({
                sectionNumber: this.sectionNumber,
                storageMode: 'hybrid' // Use hybrid mode for immediate server sync
            });
            console.log('Using unified ProgressTracker system');
            
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
            
            // Cache DOM elements for performance
            this.cacheDOMElements();
            
            // Populate grids with topic cards
            this.populateGrids();
            
            // Extract and provide topics to progress tracker
            this.provideTopicsToProgressTracker();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Initialize progress tracking with error handling
            await this.initializeProgressTracking();
            
            // Auto-visual sync
            setTimeout(async () => {
                try {
                    await this.syncVisualState();
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
    async syncVisualState() {
        if (!this.progressTracker || typeof this.progressTracker.getTopicCompletionStates !== 'function') {
            console.warn('Cannot sync visual state: progress tracker not available or missing method');
            return;
        }
        
        try {
            const completionStates = await this.progressTracker.getTopicCompletionStates();
            const completedCount = Object.values(completionStates).filter(Boolean).length;
            console.log(`🎨 Syncing visual state: ${completedCount} completed topics`);
            
            let cardsUpdated = 0;
            document.querySelectorAll('.topic-card').forEach(card => {
                const titleElement = card.querySelector('h3');
                if (titleElement) {
                    const title = titleElement.textContent.trim();
                    if (completionStates[title]) {
                        card.classList.add('studied');
                        cardsUpdated++;
                    } else {
                        card.classList.remove('studied');
                    }
                }
            });
            
            console.log(`✅ Visual state synced: ${cardsUpdated} cards marked as completed`);
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
            
            // Create safe DOM structure instead of innerHTML
            const flexDiv = document.createElement('div');
            flexDiv.className = 'flex justify-between items-center';
            
            const messageSpan = document.createElement('span');
            messageSpan.textContent = message; // Safe text content
            flexDiv.appendChild(messageSpan);
            
            if (!isPersistent) {
                const closeBtn = document.createElement('button');
                closeBtn.className = 'ml-4 text-red-500 hover:text-red-700';
                closeBtn.textContent = '×';
                closeBtn.addEventListener('click', () => errorContainer.remove());
                flexDiv.appendChild(closeBtn);
            }
            
            errorContainer.appendChild(flexDiv);
            
            // Insert at the top of the main content
            const mainContent = document.querySelector('main') || document.body;
            mainContent.insertBefore(errorContainer, mainContent.firstChild);
            
            if (!isPersistent) {
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
            const clickHandler = () => this.openStudyModal(topic, card);
            card.onclick = clickHandler;
            // Track for cleanup
            this.cardListeners.push({ element: card, handler: clickHandler });
            gridElement.appendChild(card);
        });
    }
    
    populateGrids() {
        const mainElement = document.querySelector('main');
        if (!mainElement) {
            console.error('Main element not found for populating grids');
            return;
        }

        // Clear existing content
        mainElement.innerHTML = '';

        // Create grids dynamically for each subsection
        Object.keys(this.data.metadata.subsections).forEach(key => {
            if (!this.data[key]) return;

            const subsectionInfo = this.data.metadata.subsections[key];
            
            // Create subsection container
            const sectionContainer = document.createElement('section');
            sectionContainer.className = 'subsection-container';
            
            // Create subsection header
            const header = document.createElement('h2');
            header.className = 'subsection-title';
            header.textContent = subsectionInfo.title;
            sectionContainer.appendChild(header);
            
            // Create grid container
            const gridElement = document.createElement('div');
            gridElement.id = key + 'Grid';
            gridElement.className = 'topic-grid';
            sectionContainer.appendChild(gridElement);
            
            // Add to main element
            mainElement.appendChild(sectionContainer);
            
            // Populate the grid with topic cards
            this.createTopicCards(this.data[key], gridElement);
            
            console.log(`Created and populated ${key}Grid with ${this.data[key].length} topics`);
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
    
    async openStudyModal(topic, cardElement) {
        this.currentTopic = topic;
        this.currentCardElement = cardElement;
        
        // Use cached DOM elements
        this.dom.modalTitle.textContent = topic.title;
        this.dom.modalDescription.textContent = topic.description || 'Click to study this topic.';
        
        if (topic.visual) {
            // Clear existing content safely
            this.dom.modalSvg.textContent = '';
            
            // Sanitize SVG content before injection (Golden Rules compliance)
            const sanitizedVisual = window.securityUtils.sanitizeHTML(topic.visual, {
                ALLOWED_TAGS: ['svg', 'g', 'rect', 'circle', 'line', 'path', 'text', 'title', 'polygon', 'polyline', 'ellipse'],
                ALLOWED_ATTR: ['viewBox', 'x', 'y', 'width', 'height', 'rx', 'ry', 'cx', 'cy', 'r', 'x1', 'y1', 'x2', 'y2', 
                              'fill', 'stroke', 'stroke-width', 'font-size', 'font-family', 'font-weight', 'text-anchor', 'd', 'points']
            });
            
            // Create a temporary container to parse sanitized SVG
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = sanitizedVisual;
            
            // Move SVG elements to the modal container
            while (tempDiv.firstChild) {
                this.dom.modalSvg.appendChild(tempDiv.firstChild);
            }
        } else {
            this.dom.modalSvg.textContent = '';
        }
        
        // Initialize button state based on completion status
        if (this.progressTracker && this.dom.markCompleted) {
            const isCompleted = cardElement && cardElement.classList.contains('studied');
            CCNAConfig.initializeButton(this.dom.markCompleted, isCompleted);
        }
        
        // Use cached elements for modal operations
        CCNAConfig.openModal(this.dom.studyModal, this.dom.modalContent);
    }
    
    closeStudyModal() {
        // Use cached DOM elements
        CCNAConfig.closeModal(this.dom.studyModal, this.dom.modalContent);
        setTimeout(() => {
            this.currentTopic = null;
        }, CCNAConfig.ui.timing.modalCleanup);
    }
    
    openDetailsModal(topic) {
        const detailsContent = CCNAConfig.loadDetailsContent(this.sectionNumber, topic.title);
        
        // Use cached DOM elements
        this.dom.detailsModalTitle.textContent = topic.title;
        
        // Strip inline styles and sanitize content for CSP compliance
        const cleanedContent = window.securityUtils.stripInlineStylesForModal(detailsContent);
        const sanitizedContent = window.securityUtils.sanitizeHTML(cleanedContent, {
            ALLOWED_TAGS: ['div', 'h3', 'h4', 'h5', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'table', 'tr', 'th', 'td', 'br'],
            ALLOWED_ATTR: ['class', 'href', 'target']
        });
        
        this.dom.detailsModalBody.innerHTML = sanitizedContent;
        
        // Use cached elements for modal operations
        CCNAConfig.openDetailsModal(this.dom.detailsModal, this.dom.detailsModalContent);
    }
    
    closeDetailsModal() {
        // Use cached DOM elements
        CCNAConfig.closeDetailsModal(this.dom.detailsModal, this.dom.detailsModalContent);
    }

    async initializeProgressTracking() {
        try {
            // Wait for progress data to load from server/storage
            if (this.progressTracker && this.sectionNumber) {
                await this.progressTracker.getSectionProgress(this.sectionNumber);
                console.log('✅ Progress data loaded for section', this.sectionNumber);
            }
            
            // Subscribe to progress updates to refresh the UI
            if (this.progressTracker) {
                this.progressTracker.subscribe((eventType, data) => {
                    if (eventType === 'progress-updated') {
                        this.updateSectionProgressBar();
                        this.syncVisualState();
                    }
                });
            }
            
            // Initial update of section progress bar
            await this.updateSectionProgressBar();
            
            // Sync visual state with stored progress using SectionLoader's method
            await this.syncVisualState();
        } catch (error) {
            console.warn('Failed to initialize progress tracking:', error);
        }
    }
    
    async updateSectionProgressBar() {
        try {
            if (!this.progressTracker || !this.sectionNumber) {
                return;
            }
            
            const stats = await this.progressTracker.getSectionProgressStats(this.sectionNumber);
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            
            if (progressBar) {
                progressBar.style.width = `${stats.percentage}%`;
            }
            
            if (progressText) {
                progressText.textContent = `${stats.completed}/${stats.total} (${stats.percentage}%)`;
            }
            
            console.log(`📊 Section ${this.sectionNumber} progress: ${stats.completed}/${stats.total} (${stats.percentage}%)`);
        } catch (error) {
            console.error('Failed to update section progress bar:', error);
        }
    }

    setupEventListeners() {
        // Helper function to add and track listeners
        const addListener = (element, event, handler) => {
            if (typeof element === 'string') {
                const elementId = element;
                element = document.getElementById(element);
                console.log(`🎯 Adding ${event} listener to element "${elementId}":`, element);
            }
            if (element) {
                element.addEventListener(event, handler);
                this.listeners.push({ element, event, handler });
                console.log(`✅ Successfully added ${event} listener to:`, element);
            } else {
                console.error(`❌ Failed to add ${event} listener - element not found:`, element);
            }
        };

        // Study modal close functionality
        addListener('closeModal', 'click', () => this.closeStudyModal());
        addListener('studyModal', 'click', (e) => {
            if (e.target === e.currentTarget) this.closeStudyModal();
        });

        // Details button functionality
        addListener('viewDetails', 'click', () => {
            if (this.currentTopic) {
                this.openDetailsModal(this.currentTopic);
            }
        });

        // Details modal close functionality
        addListener('closeDetails', 'click', () => this.closeDetailsModal());
        addListener('detailsModal', 'click', (e) => {
            if (e.target === e.currentTarget) this.closeDetailsModal();
        });

        // Mark completed functionality
        addListener('markCompleted', 'click', async (event) => {
            console.log('🔥 MARK COMPLETED BUTTON CLICKED - EVENT HANDLER STARTED');
            console.log('Event:', event);
            console.log('Current topic:', this.currentTopic);
            console.log('Current card element:', this.currentCardElement);
            
            if (this.currentTopic && this.currentCardElement) {
                console.log('✅ Topic and card element exist, proceeding...');
                
                try {
                    const isCompleted = await this.progressTracker.isTopicCompleted(this.currentTopic.title);
                    console.log(`🔍 Topic "${this.currentTopic.title}" current state: ${isCompleted ? 'COMPLETED' : 'UNCOMPLETED'}`);
                    
                    const newState = !isCompleted;
                    console.log(`🎯 Setting topic "${this.currentTopic.title}" to: ${newState ? 'COMPLETED' : 'UNCOMPLETED'}`);
                    
                    // Call the progress tracker method
                    console.log('📞 Calling progressTracker.markTopicCompleted...');
                    await this.progressTracker.markTopicCompleted(this.currentTopic.title, newState);
                    console.log('✅ progressTracker.markTopicCompleted completed');
                    
                    // Update card visual state using global config
                    console.log('🎨 Updating card visual state...');
                    CCNAConfig.markCardAsStudied(this.currentCardElement, newState);
                    console.log('✅ Card visual state updated');
                    
                    // Update button state using cached element
                    console.log('🔘 Updating button state...');
                    CCNAConfig.applyButtonState(this.dom.markCompleted, newState);
                    console.log('✅ Button state updated');
                    
                    console.log('🚪 Closing study modal...');
                    this.closeStudyModal();
                    console.log('✅ Study modal closed');
                    
                } catch (error) {
                    console.error('❌ ERROR in mark completed handler:', error);
                }
            } else {
                console.warn('⚠️ Missing current topic or card element');
                console.log('Current topic:', this.currentTopic);
                console.log('Current card element:', this.currentCardElement);
            }
            
            console.log('🔥 MARK COMPLETED EVENT HANDLER FINISHED');
        });

        // Add keyboard support with cached elements
        const keydownHandler = (e) => {
            if (e.key === 'Escape') {
                if (CCNAConfig.isModalVisible(this.dom.detailsModal)) {
                    this.closeDetailsModal();
                } else if (CCNAConfig.isModalVisible(this.dom.studyModal)) {
                    this.closeStudyModal();
                }
            }
        };
        document.addEventListener('keydown', keydownHandler);
        this.listeners.push({ element: document, event: 'keydown', handler: keydownHandler });
    }

    /**
     * Cleanup method to prevent memory leaks
     * Removes all event listeners tracked by this instance
     */
    destroy() {
        // Remove all tracked event listeners
        this.listeners.forEach(({ element, event, handler }) => {
            if (element && element.removeEventListener) {
                element.removeEventListener(event, handler);
            }
        });
        this.listeners = [];

        // Remove card click listeners
        this.cardListeners.forEach(({ element, handler }) => {
            if (element) {
                element.onclick = null;
            }
        });
        this.cardListeners = [];

        // Clear references
        this.progressTracker = null;
        this.currentTopic = null;
        this.currentCardElement = null;
        this.data = null;
        this.dom = {}; // Clear DOM cache

        console.log(`SectionLoader ${this.sectionNumber} destroyed and cleaned up`);
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