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
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Initialize progress tracking with error handling
            this.initializeProgressTracking();
            
            // Auto-visual sync
            setTimeout(() => {
                try {
                    this.progressTracker.syncVisualState();
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
            
            // Check for required top-level properties
            const requiredProps = ['topics', 'title'];
            for (const prop of requiredProps) {
                if (!(prop in data)) {
                    console.warn(`Missing required property: ${prop}`);
                    return false;
                }
            }
            
            // Validate topics array
            if (!Array.isArray(data.topics) || data.topics.length === 0) {
                console.warn('Topics must be a non-empty array');
                return false;
            }
            
            // Validate each topic structure
            for (const topic of data.topics) {
                if (!topic.id || !topic.title) {
                    console.warn('Each topic must have id and title');
                    return false;
                }
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
    
    openStudyModal(topic, cardElement) {
        this.currentTopic = topic;
        this.currentCardElement = cardElement;
        
        document.getElementById('modalTitle').textContent = topic.title;
        document.getElementById('modalDescription').textContent = topic.description || 'Click to study this topic.';
        
        if (topic.visual) {
            document.getElementById('modalSvg').innerHTML = topic.visual;
        } else {
            document.getElementById('modalSvg').innerHTML = '';
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
    if (typeof window.SECTION_NUMBER !== 'undefined') {
        // Support for new constructor pattern - check if data is available
        const sectionData = window[`SECTION${window.SECTION_NUMBER}_DATA`] || null;
        window.sectionLoader = new SectionLoader(window.SECTION_NUMBER, sectionData);
    } else {
        console.error('Section number not defined. Set window.SECTION_NUMBER before including section-loader.js');
    }
});