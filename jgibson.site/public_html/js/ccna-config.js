/**
 * CCNA Study Guide Global Configuration
 * SINGLE SOURCE OF TRUTH - All styling, sizing, and layout definitions
 */

const CCNAConfig = {
    // Modal sizing configuration - ALL MODAL DIMENSIONS HERE
    modal: {
        // Modal container classes
        containerClasses: "bg-slate-800 border-2 border-indigo-500/50 rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden transform scale-95 transition-all duration-300 opacity-0",
        
        // Visual area configuration  
        visualAreaClasses: "p-8 h-80 flex-shrink-0 flex items-center justify-center",
        
        // SVG container classes
        svgContainerClasses: "w-full h-full",
        
        // SVG element classes
        svgClasses: "w-full h-full",
        
        // Modal overlay classes
        overlayClasses: "fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4 transition-opacity duration-300 opacity-0 z-50",
        
        // Modal main area classes
        mainAreaClasses: "p-4 md:p-6 relative",
        
        // Modal button classes
        closeButtonClasses: "absolute top-3 right-3 text-slate-400 hover:text-white font-semibold py-1 px-3 rounded-lg text-2xl transition-colors",
        titleClasses: "text-2xl font-bold text-slate-100 title-font",
        descriptionClasses: "text-slate-300 mt-3 leading-relaxed",
        markButtonClasses: "mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
    },
    
    // Topic card configuration
    cards: {
        // Card container classes
        containerClasses: "topic-card p-6 flex flex-col justify-center items-center text-center cursor-pointer h-56 w-60",
        
        // Icon classes
        iconClasses: "fas text-5xl text-indigo-400 mb-4",
        
        // Title classes  
        titleClasses: "text-xl font-semibold text-slate-200 title-font"
    },
    
    // Layout configuration - ALL PAGE LAYOUT ELEMENTS
    layout: {
        // Main container
        containerClasses: "container mx-auto p-4 md:p-8",
        
        // Body styling
        body: {
            textColor: "text-slate-300"
        },
        
        // Master progress bar (top of page)
        masterProgress: {
            containerClasses: "mb-6",
            cardClasses: "bg-slate-800 rounded-lg p-4 border border-slate-700",
            headerClasses: "flex justify-between items-center mb-2",
            titleClasses: "text-sm font-semibold text-slate-300",
            percentClasses: "text-sm text-indigo-400 font-semibold",
            barContainerClasses: "w-full bg-slate-700 rounded-full h-2",
            barClasses: "bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500",
            barStyles: {
                width: "0%"
            },
            footerClasses: "flex justify-between text-xs text-slate-400 mt-2"
        },
        
        // Page header
        header: {
            containerClasses: "text-center mb-10",
            titleClasses: "text-4xl md:text-5xl font-bold text-indigo-400 title-font tracking-wider",
            iconClasses: "fas fa-gamepad mr-3 text-indigo-500",
            subtitleClasses: "text-lg text-slate-400 mt-2",
            descriptionClasses: "text-sm text-slate-500 mt-1",
            backButtonClasses: "inline-block mt-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-indigo-600 transition-colors",
            backIconClasses: "fas fa-arrow-left mr-2"
        },
        
        // Section progress bar
        sectionProgress: {
            containerClasses: "w-full max-w-4xl mx-auto mb-10",
            headerClasses: "flex justify-center items-center space-x-4 mb-2",
            labelClasses: "text-sm font-semibold text-indigo-300",
            percentClasses: "text-sm font-bold text-white",
            barContainerClasses: "w-full bg-slate-700 rounded-full h-2.5",
            barClasses: "bg-indigo-500 h-2.5 rounded-full",
            barStyles: {
                width: "0%",
                transition: "width 0.5s ease-in-out"
            }
        },
        
        // Main content sections
        section: {
            containerClasses: "mb-12 text-center",
            headerClasses: "text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-500/30 title-font inline-block",
            gridClasses: "flex flex-wrap justify-center gap-6"
        }
    },
    
    // Progress tracking configuration
    progress: {
        sectionCounts: {
            1: 35, // Section 1 topics
            2: 22, // Section 2 topics
            3: 25, // Section 3 topics (placeholder)
            4: 30, // Section 4 topics (placeholder)
            5: 28, // Section 5 topics (placeholder)
            6: 32  // Section 6 topics (placeholder)
        },
        
        // Total topics across all sections
        totalTopics: 172
    },
    
    // UI styling configuration
    ui: {
        // Color scheme
        colors: {
            primary: "#6366f1",      // indigo-500
            secondary: "#8b5cf6",    // violet-500
            success: "#10b981",      // emerald-500
            warning: "#f59e0b",      // amber-500
            danger: "#ef4444",       // red-500
            background: "#0f172a",   // slate-900
            surface: "#1e293b",      // slate-800
            border: "#334155"        // slate-600
        },
        
        // Animation settings
        animations: {
            duration: "300ms",
            easing: "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        
        // Timing configuration - ALL HARDCODED DELAYS
        timing: {
            progressSync: 100,        // Progress visual sync delay (ms)
            modalCleanup: 300,        // Modal cleanup delay (ms)
            modalOpen: 10,           // Modal opening delay (ms)
            modalClose: 300          // Modal closing animation (ms)
        },
        
        // Text content configuration - ALL HARDCODED TEXT
        text: {
            defaultProgress: "0%",    // Default progress percentage display
            defaultProgressDetails: "0 of 30 topics completed",
            sectionLabels: {
                1: "Section 1 Progress"
            }
        },
        
        // Font configuration
        fonts: {
            primary: "'Rajdhani', sans-serif",
            title: "'Orbitron', sans-serif"
        }
    },
    
    // CSS styles configuration - ALL EMBEDDED STYLES
    styles: {
        // Body and base styles
        body: {
            fontFamily: "'Rajdhani', sans-serif",
            backgroundColor: "#0f172a",
            color: "#cbd5e1" // text-slate-300
        },
        
        // Topic card styles
        topicCard: {
            base: {
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2), inset 0 0 10px rgba(79,70,229,0.2)"
            },
            hover: {
                transform: "translateY(-5px) scale(1.02)",
                boxShadow: "0 10px 15px rgba(0,0,0,0.3), 0 0 25px rgba(129,140,248,0.4), inset 0 0 15px rgba(79,70,229,0.3)",
                borderColor: "#4f46e5"
            }
        },
        
        // Modal animation states
        modal: {
            hidden: {
                display: "none",
                opacity: "0"
            },
            visible: {
                display: "flex",
                opacity: "1"
            },
            content: {
                base: {
                    transform: "scale(0.95)",
                    opacity: "0"
                },
                visible: {
                    transform: "scale(1)",
                    opacity: "1"
                }
            },
            visual: {
                background: "radial-gradient(circle, #1e293b, #0f172a)",
                borderBottom: "1px solid #334155"
            }
        },
        
        // Studied state styles
        studied: {
            position: "relative",
            after: {
                content: "'\\f058'",
                fontFamily: "'Font Awesome 6 Free'",
                fontWeight: "900",
                position: "absolute",
                top: "8px",
                right: "8px",
                color: "#22c55e",
                fontSize: "18px",
                zIndex: "10"
            }
        },
        
        // Button states for mark completed functionality
        buttonStates: {
            completed: {
                classes: ["bg-slate-600", "hover:bg-slate-700"],
                removeClasses: ["bg-gradient-to-r", "from-indigo-500", "to-purple-600", "hover:from-indigo-600", "hover:to-purple-700"],
                text: '<i class="fas fa-undo mr-2"></i>Mark as Not Studied'
            },
            incomplete: {
                classes: ["bg-gradient-to-r", "from-indigo-500", "to-purple-600", "hover:from-indigo-600", "hover:to-purple-700"],
                removeClasses: ["bg-slate-600", "hover:bg-slate-700"],
                text: '<i class="fas fa-check mr-2"></i>Mark as Studied'
            }
        },
        
        // Button icon classes
        buttonIcons: {
            check: "fas fa-check mr-2",
            undo: "fas fa-undo mr-2"
        },
        
        // CSS class constants - ALL HARDCODED CLASSES
        cssClasses: {
            // Modal state classes
            modal: {
                hidden: "hidden",
                visible: "visible"
            },
            
            // Card state classes
            card: {
                studied: "studied"
            }
        }
    },
    
    // Section metadata
    sections: {
        1: {
            title: "Network Fundamentals",
            topics: 35,
            subsections: [
                "Network Components",
                "Network Topology Architectures", 
                "Physical Interface and Cabling",
                "Interface and Cable Issues",
                "Compare TCP to UDP",
                "Configure and verify IPv4",
                "Private IPv4 addressing",
                "Configure and verify IPv6",
                "Describe IPv6 address types",
                "Verify IP parameters",
                "Describe wireless principles",
                "Virtualization fundamentals",
                "Describe switching concepts"
            ]
        }
        // Additional sections will be added here
    },
    
    // Helper functions to apply config
    applyModalConfig: function() {
        const modal = document.getElementById('studyModal');
        const modalContent = document.getElementById('modalContent');
        const modalVisual = document.getElementById('modalVisual');
        const modalSvg = document.getElementById('modalSvg');
        const modalMainArea = document.getElementById('modalMainArea');
        const closeModal = document.getElementById('closeModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const markCompleted = document.getElementById('markCompleted');
        
        if (modal) modal.className = this.modal.overlayClasses;
        if (modalContent) modalContent.className = this.modal.containerClasses;
        if (modalVisual) modalVisual.className = this.modal.visualAreaClasses;
        if (modalSvg) modalSvg.className = this.modal.svgContainerClasses;
        if (modalMainArea) modalMainArea.className = this.modal.mainAreaClasses;
        if (closeModal) closeModal.className = this.modal.closeButtonClasses;
        if (modalTitle) modalTitle.className = this.modal.titleClasses;
        if (modalDescription) modalDescription.className = this.modal.descriptionClasses;
        if (markCompleted) markCompleted.className = this.modal.markButtonClasses;
    },
    
    // Apply layout configuration to page elements
    applyLayoutConfig: function() {
        // Apply body styling
        const body = document.body;
        if (body) body.className = this.layout.body.textColor;
        
        // Apply main container styling
        const mainContainer = document.getElementById('main-container');
        if (mainContainer) mainContainer.className = this.layout.containerClasses;
        
        // Apply master progress bar styling
        const masterProgress = document.getElementById('master-progress');
        const masterProgressCard = document.getElementById('master-progress-card');
        const masterProgressHeader = document.getElementById('master-progress-header');
        const masterProgressTitle = document.getElementById('master-progress-title');
        const masterProgressBarContainer = document.getElementById('master-progress-bar-container');
        const masterProgressBar = document.getElementById('progressBar');
        const masterProgressFooter = document.getElementById('master-progress-footer');
        
        if (masterProgress) masterProgress.className = this.layout.masterProgress.containerClasses;
        if (masterProgressCard) masterProgressCard.className = this.layout.masterProgress.cardClasses;
        if (masterProgressHeader) masterProgressHeader.className = this.layout.masterProgress.headerClasses;
        if (masterProgressTitle) masterProgressTitle.className = this.layout.masterProgress.titleClasses;
        if (masterProgressBarContainer) masterProgressBarContainer.className = this.layout.masterProgress.barContainerClasses;
        if (masterProgressBar) {
            masterProgressBar.className = this.layout.masterProgress.barClasses;
            // Apply inline styles
            Object.assign(masterProgressBar.style, this.layout.masterProgress.barStyles);
        }
        if (masterProgressFooter) masterProgressFooter.className = this.layout.masterProgress.footerClasses;
        
        // Apply page header styling
        const pageHeader = document.getElementById('page-header');
        const pageTitle = document.getElementById('page-title');
        const pageIcon = document.getElementById('page-icon');
        const pageSubtitle = document.getElementById('page-subtitle');
        const pageDescription = document.getElementById('page-description');
        const backButton = document.getElementById('back-button');
        const backIcon = document.getElementById('back-icon');
        
        if (pageHeader) pageHeader.className = this.layout.header.containerClasses;
        if (pageTitle) pageTitle.className = this.layout.header.titleClasses;
        if (pageIcon) pageIcon.className = this.layout.header.iconClasses;
        if (pageSubtitle) pageSubtitle.className = this.layout.header.subtitleClasses;
        if (pageDescription) pageDescription.className = this.layout.header.descriptionClasses;
        if (backButton) backButton.className = this.layout.header.backButtonClasses;
        if (backIcon) backIcon.className = this.layout.header.backIconClasses;
        
        // Apply section progress styling
        const progressContainer = document.getElementById('progress-container');
        const progressHeader = document.getElementById('progress-header');
        const progressLabel = document.getElementById('progress-label');
        const progressText = document.getElementById('progress-text');
        const progressBarContainer = document.getElementById('progress-bar-container');
        const progressBar = document.getElementById('progress-bar');
        
        if (progressContainer) progressContainer.className = this.layout.sectionProgress.containerClasses;
        if (progressHeader) progressHeader.className = this.layout.sectionProgress.headerClasses;
        if (progressLabel) progressLabel.className = this.layout.sectionProgress.labelClasses;
        if (progressText) progressText.className = this.layout.sectionProgress.percentClasses;
        if (progressBarContainer) progressBarContainer.className = this.layout.sectionProgress.barContainerClasses;
        if (progressBar) {
            progressBar.className = this.layout.sectionProgress.barClasses;
            // Apply inline styles
            Object.assign(progressBar.style, this.layout.sectionProgress.barStyles);
        }
        
        // Apply section styling
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => {
            section.className = this.layout.section.containerClasses;
            
            const header = section.querySelector('h2');
            if (header) header.className = this.layout.section.headerClasses;
            
            const grid = section.querySelector('[id$="Grid"]');
            if (grid) grid.className = this.layout.section.gridClasses;
        });
    },
    
    // Function to create topic cards using global config
    createTopicCard: function(topic) {
        const card = document.createElement('div');
        card.className = this.cards.containerClasses;
        card.innerHTML = `
            <i class="${topic.icon} ${this.cards.iconClasses}"></i>
            <h3 class="${this.cards.titleClasses}">${topic.title}</h3>
        `;
        return card;
    },
    
    // Apply all embedded CSS styles programmatically
    applyEmbeddedStyles: function() {
        // Create and inject CSS styles
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            body {
                font-family: ${this.styles.body.fontFamily};
                background-color: ${this.styles.body.backgroundColor};
            }
            
            .title-font {
                font-family: ${this.ui.fonts.title};
            }
            
            .topic-card {
                background-color: ${this.styles.topicCard.base.backgroundColor};
                border: ${this.styles.topicCard.base.border};
                transition: ${this.styles.topicCard.base.transition};
                box-shadow: ${this.styles.topicCard.base.boxShadow};
            }
            
            .topic-card:hover {
                transform: ${this.styles.topicCard.hover.transform};
                box-shadow: ${this.styles.topicCard.hover.boxShadow};
                border-color: ${this.styles.topicCard.hover.borderColor};
            }
            
            #studyModal {
                display: ${this.styles.modal.hidden.display};
                opacity: ${this.styles.modal.hidden.opacity};
            }
            
            #studyModal.visible {
                display: ${this.styles.modal.visible.display};
                opacity: ${this.styles.modal.visible.opacity};
            }
            
            #modalContent {
                transform: ${this.styles.modal.content.base.transform};
                opacity: ${this.styles.modal.content.base.opacity};
            }
            
            #modalContent.visible {
                transform: ${this.styles.modal.content.visible.transform};
                opacity: ${this.styles.modal.content.visible.opacity};
            }
            
            #modalVisual {
                background: ${this.styles.modal.visual.background};
                border-bottom: ${this.styles.modal.visual.borderBottom};
            }
            
            .studied {
                position: ${this.styles.studied.position};
            }
            
            .studied::after {
                content: ${this.styles.studied.after.content};
                font-family: ${this.styles.studied.after.fontFamily};
                font-weight: ${this.styles.studied.after.fontWeight};
                position: ${this.styles.studied.after.position};
                top: ${this.styles.studied.after.top};
                right: ${this.styles.studied.after.right};
                color: ${this.styles.studied.after.color};
                font-size: ${this.styles.studied.after.fontSize};
                z-index: ${this.styles.studied.after.zIndex};
            }
        `;
        
        // Remove any existing embedded styles
        const existingStyles = document.querySelectorAll('style');
        existingStyles.forEach(style => {
            if (style.textContent.includes('topic-card') || style.textContent.includes('studyModal')) {
                style.remove();
            }
        });
        
        // Inject the new global styles
        document.head.appendChild(styleSheet);
    },
    
    // Apply button state styling programmatically
    applyButtonState: function(button, isCompleted) {
        const state = isCompleted ? this.styles.buttonStates.completed : this.styles.buttonStates.incomplete;
        
        // Remove opposite state classes
        button.classList.remove(...state.removeClasses);
        
        // Add current state classes
        button.classList.add(...state.classes);
        
        // Update button text with proper icon
        button.innerHTML = state.text;
    },
    
    // Initialize button with default state
    initializeButton: function(button, isCompleted = false) {
        const state = isCompleted ? this.styles.buttonStates.completed : this.styles.buttonStates.incomplete;
        button.className = this.modal.markButtonClasses + ' ' + state.classes.join(' ');
        button.innerHTML = state.text;
    },
    
    // Initialize all styling (call this after DOM is loaded)
    initializeGlobalStyling: function() {
        this.applyEmbeddedStyles();
        this.applyModalConfig();
        this.applyLayoutConfig();
        this.initializeTextContent();
        
        // Initialize mark completed button with default state
        const markButton = document.getElementById('markCompleted');
        if (markButton) {
            this.initializeButton(markButton, false);
        }
    },
    
    // Initialize default text content from global config
    initializeTextContent: function() {
        // Initialize progress text elements
        const progressText = document.getElementById('progressText');
        const sectionProgressText = document.getElementById('progress-text');
        
        if (progressText) progressText.textContent = this.ui.text.defaultProgress;
        if (sectionProgressText) sectionProgressText.textContent = this.ui.text.defaultProgress;
    },
    
    // Modal state management functions
    openModal: function(modal, content) {
        modal.classList.remove(this.styles.cssClasses.modal.hidden);
        setTimeout(() => {
            modal.classList.add(this.styles.cssClasses.modal.visible);
            content.classList.add(this.styles.cssClasses.modal.visible);
            
            // Apply SVG styling after content is inserted
            this.applySvgStyling();
        }, this.ui.timing.modalOpen);
    },
    
    applySvgStyling: function() {
        // Apply styling to all SVG elements in the modal
        const modalSvg = document.getElementById('modalSvg');
        if (modalSvg) {
            const svgElements = modalSvg.querySelectorAll('svg');
            svgElements.forEach(svg => {
                svg.className = this.modal.svgClasses;
            });
        }
    },
    
    closeModal: function(modal, content) {
        modal.classList.remove(this.styles.cssClasses.modal.visible);
        content.classList.remove(this.styles.cssClasses.modal.visible);
        setTimeout(() => {
            modal.classList.add(this.styles.cssClasses.modal.hidden);
        }, this.ui.timing.modalClose);
    },
    
    isModalVisible: function(modal) {
        return modal.classList.contains(this.styles.cssClasses.modal.visible);
    },
    
    // Card state management functions
    markCardAsStudied: function(cardElement, isStudied) {
        if (isStudied) {
            cardElement.classList.add(this.styles.cssClasses.card.studied);
        } else {
            cardElement.classList.remove(this.styles.cssClasses.card.studied);
        }
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.CCNAConfig = CCNAConfig;
}