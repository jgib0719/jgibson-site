/**
 * Shared Section Loader for CCNA Study Guide
 * Eliminates code duplication across section*.html files
 */

class SectionLoader {
    constructor(sectionNumber) {
        this.sectionNumber = sectionNumber;
        this.progressTracker = null;
        this.currentTopic = null;
        this.currentCardElement = null;
        this.data = null;
        
        this.init();
    }
    
    init() {
        // Initialize progress tracker
        this.progressTracker = new UnifiedCCNAProgressTracker(this.sectionNumber);
        
        // Initialize ALL global styling (replaces embedded CSS)
        CCNAConfig.initializeGlobalStyling();
        
        // Get the section data
        this.data = window[`SECTION${this.sectionNumber}_DATA`];
        
        if (!this.data) {
            console.error(`Section ${this.sectionNumber} data not loaded`);
            return;
        }
        
        // Create topic cards and populate grids
        this.populateGrids();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Auto-visual sync
        setTimeout(() => this.progressTracker.syncVisualState(), CCNAConfig.ui.timing.progressSync);
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
        window.sectionLoader = new SectionLoader(window.SECTION_NUMBER);
    } else {
        console.error('Section number not defined. Set window.SECTION_NUMBER before including section-loader.js');
    }
});