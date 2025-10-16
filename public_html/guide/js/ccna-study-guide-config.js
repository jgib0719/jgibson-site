/**
 * CCNA Study Guide Global Configuration
 * SINGLE SOURCE OF TRUTH - All styling, sizing, and layout definitions
 */

const CCNAConfig = {
    // Modal sizing configuration - ALL MODAL DIMENSIONS HERE
    modal: {
        // Modal container classes
        containerClasses: "flex flex-col bg-slate-800 border-2 border-indigo-500/50 rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden transform scale-95 transition-all duration-300 opacity-0",

        // Visual area configuration  
        visualAreaClasses: "w-full flex-shrink-0 flex items-center justify-center p-6",

        // SVG container classes - FORCED STYLING
        svgContainerClasses: "w-full flex items-center justify-center",

        // SVG element classes - FORCED STYLING
        svgClasses: "w-full h-auto max-w-xl block mx-auto",

        // Modal overlay classes
        overlayClasses: "fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4 transition-opacity duration-300 opacity-0 z-50",

        // Modal main area classes
        mainAreaClasses: "p-4 md:p-6 relative bg-slate-800",

        // Modal button classes
        closeButtonClasses: "absolute top-3 right-3 text-slate-400 hover:text-white font-semibold py-1 px-3 rounded-lg text-2xl transition-colors",
        titleClasses: "text-2xl font-bold text-slate-100 title-font",
        descriptionClasses: "text-slate-300 mt-3 leading-relaxed",
        markButtonClasses: "flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
    },

    // Details modal configuration
    detailsModal: {
        // Details modal overlay classes
        overlayClasses: "fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4 transition-opacity duration-300 opacity-0 z-50",

        // Details modal container classes
        containerClasses: "flex flex-col bg-slate-800 border-2 border-indigo-500/50 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden transform scale-95 transition-all duration-300 opacity-0",

        // Details modal main area classes
        mainAreaClasses: "p-4 md:p-6 relative bg-slate-800 overflow-y-auto flex-1",

        // Details modal button classes
        closeButtonClasses: "absolute top-3 right-3 text-slate-400 hover:text-white font-semibold py-1 px-3 rounded-lg text-2xl transition-colors",
        titleClasses: "text-2xl font-bold text-slate-100 title-font mb-4",
        bodyClasses: "text-slate-300 leading-relaxed"
    },

    // Quiz history modal configuration
    quizHistoryModal: {
        // Quiz history modal overlay classes
        overlayClasses: "fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4 transition-opacity duration-300 opacity-0 z-50",

        // Quiz history modal container classes
        containerClasses: "flex flex-col bg-slate-800 border-2 border-indigo-500/50 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden transform scale-95 transition-all duration-300 opacity-0",

        // Quiz history modal header classes
        headerClasses: "flex justify-between items-center p-4 md:p-6 border-b border-slate-700",

        // Quiz history modal content classes
        contentClasses: "p-4 md:p-6 overflow-y-auto flex-1",

        // Quiz history modal button classes
        closeButtonClasses: "text-slate-400 hover:text-white font-semibold py-1 px-3 rounded-lg text-2xl transition-colors",
        titleClasses: "text-2xl font-bold text-slate-100 title-font",

        // History list classes
        listClasses: "space-y-4",
        sectionClasses: "bg-slate-700/50 rounded-lg p-4",
        sectionTitleClasses: "text-lg font-semibold text-slate-200 mb-3 border-b border-slate-600 pb-2",
        attemptClasses: "flex justify-between items-center py-2 px-3 bg-slate-800/50 rounded text-sm",
        attemptDateClasses: "text-slate-300",
        attemptScoreClasses: "text-slate-200 font-medium",
        attemptPercentageClasses: "text-indigo-400 font-semibold",
        noAttemptsClasses: "text-slate-400 italic text-center py-4"
    },

    // Topic card configuration
    cards: {
        // Card container classes
        containerClasses: "topic-card relative p-6 flex flex-col justify-center items-center text-center cursor-pointer",

        // Icon classes
        iconClasses: "fas text-5xl text-indigo-400 mb-4",

        // Title classes  
        titleClasses: "text-xl font-semibold text-slate-200 title-font"
    },

    // Layout configuration - CSS handles all classes, JS only handles dynamic inline styles
    layout: {
        // Body styling
        body: {
            textColor: "text-slate-300"
        },

        // Master progress bar (top of page) - only dynamic styles
        masterProgress: {
            barStyles: {
                width: "0%"
            }
        },

        // Page header - keep essential icon and button classes for functionality
        header: {
            iconClasses: "fas fa-gamepad mr-3 text-indigo-500",
            backButtonClasses: "btn btn-secondary btn-sm mt-4",
            backIconClasses: "fas fa-arrow-left mr-2"
        },

        // Section progress bar - only dynamic styles
        sectionProgress: {
            barStyles: {
                width: "0%",
                transition: "width 0.5s ease-in-out"
            }
        },

        // Main content sections - keep grid class for dynamic layout
        section: {
            gridClasses: "topic-grid-container"
        }
    },

    // Progress tracking configuration
    progress: {
        // Total topics will be calculated dynamically from section data files
        // via the section registry system
        dynamicTotals: true
    },

    // UI styling configuration
    ui: {
        // Color scheme
        colors: {
            primary: "#6366f1", // indigo-500
            secondary: "#8b5cf6", // violet-500
            success: "#10b981", // emerald-500
            warning: "#f59e0b", // amber-500
            danger: "#ef4444", // red-500
            background: "#0f172a", // slate-900
            surface: "#1e293b", // slate-800
            border: "#334155" // slate-600
        },

        // Animation settings
        animations: {
            duration: "300ms",
            easing: "cubic-bezier(0.4, 0, 0.2, 1)"
        },

        // Timing configuration - ALL HARDCODED DELAYS
        timing: {
            progressSync: 100, // Progress visual sync delay (ms)
            modalCleanup: 300, // Modal cleanup delay (ms)
            modalOpen: 10, // Modal opening delay (ms)
            modalClose: 300 // Modal closing animation (ms)
        },

        // Text content configuration - ALL HARDCODED TEXT
        text: {
            defaultProgress: "0%", // Default progress percentage display
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
    // Section data moved to CCNA_SECTION_REGISTRY for single source of truth
    // Dynamic topic counts calculated from actual section data files

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

    // Apply details modal configuration to page elements
    applyDetailsModalConfig: function() {
        const detailsModal = document.getElementById('detailsModal');
        const detailsModalContent = document.getElementById('detailsModalContent');
        const detailsModalMain = document.getElementById('detailsModalMain');
        const closeDetails = document.getElementById('closeDetails');
        const detailsModalTitle = document.getElementById('detailsModalTitle');
        const detailsModalBody = document.getElementById('detailsModalBody');

        if (detailsModal) detailsModal.className = this.detailsModal.overlayClasses;
        if (detailsModalContent) detailsModalContent.className = this.detailsModal.containerClasses;
        if (detailsModalMain) detailsModalMain.className = this.detailsModal.mainAreaClasses;
        if (closeDetails) closeDetails.className = this.detailsModal.closeButtonClasses;
        if (detailsModalTitle) detailsModalTitle.className = this.detailsModal.titleClasses;
        if (detailsModalBody) detailsModalBody.className = this.detailsModal.bodyClasses;
    },

    // Apply layout configuration to page elements
    applyLayoutConfig: function() {
        // Only apply essential functional classes and dynamic inline styles
        // CSS file now controls all layout and styling

        // Apply essential icon and button classes for functionality
        const pageIcon = document.getElementById('page-icon');
        const backButton = document.getElementById('back-button');
        const backIcon = document.getElementById('back-icon');

        if (pageIcon) pageIcon.className = this.layout.header.iconClasses;
        if (backButton) backButton.className = this.layout.header.backButtonClasses;
        if (backIcon) backIcon.className = this.layout.header.backIconClasses;

        // Apply dynamic progress bar styles (width must be controlled by JS)
        const masterProgressBar = document.getElementById('progressBar');
        if (masterProgressBar) {
            Object.assign(masterProgressBar.style, this.layout.masterProgress.barStyles);
        }

        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            Object.assign(progressBar.style, this.layout.sectionProgress.barStyles);
        }

        // Apply grid classes for dynamic layout
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => {
            const grid = section.querySelector('[id$="Grid"]');
            if (grid) grid.className = this.layout.section.gridClasses;
        });
    },

    // Function to create topic cards using global config
    createTopicCard: function(topic) {
        const card = document.createElement('div');
        card.className = this.cards.containerClasses + ' cursor-pointer';
        card.setAttribute('data-study-topic', topic.title);
        
        // Use textContent for safety instead of innerHTML for user data
        const iconElement = document.createElement('i');
        iconElement.className = `${topic.icon} ${this.cards.iconClasses}`;
        
        const titleElement = document.createElement('h3');
        titleElement.className = this.cards.titleClasses;
        titleElement.textContent = topic.title; // Safe text content
        
        card.appendChild(iconElement);
        card.appendChild(titleElement);
        
        return card;
    },

    // Apply button state styling programmatically
    applyButtonState: function(button, isCompleted) {
        if (!button) return;
        
        const state = isCompleted ? this.styles.buttonStates.completed : this.styles.buttonStates.incomplete;
        const oppositeState = isCompleted ? this.styles.buttonStates.incomplete : this.styles.buttonStates.completed;

        // Remove opposite state classes
        button.classList.remove(...oppositeState.classes);

        // Add current state classes (avoid duplicates)
        state.classes.forEach(cls => {
            if (!button.classList.contains(cls)) {
                button.classList.add(cls);
            }
        });

        // Update button text safely using DOM manipulation
        button.innerHTML = ''; // Clear existing content
        const icon = document.createElement('i');
        icon.className = isCompleted ? 'fas fa-undo mr-2' : 'fas fa-check mr-2';
        const text = document.createTextNode(isCompleted ? 'Mark as Not Studied' : 'Mark as Studied');
        button.appendChild(icon);
        button.appendChild(text);
    },

    // Initialize button with default state
    initializeButton: function(button, isCompleted = false) {
        if (!button) return;
        
        // Start with base button classes (without background colors)
        const baseClasses = "flex-1 text-white py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-105";
        
        const state = isCompleted ? this.styles.buttonStates.completed : this.styles.buttonStates.incomplete;
        
        // Set all classes at once
        button.className = baseClasses + ' ' + state.classes.join(' ');
        
        // Set button content safely using DOM manipulation
        button.innerHTML = ''; // Clear existing content
        const icon = document.createElement('i');
        icon.className = isCompleted ? 'fas fa-undo mr-2' : 'fas fa-check mr-2';
        const text = document.createTextNode(isCompleted ? 'Mark as Not Studied' : 'Mark as Studied');
        button.appendChild(icon);
        button.appendChild(text);
    },

    // Initialize all styling (call this after DOM is loaded)
    initializeGlobalStyling: function() {
        this.applyModalConfig();
        this.applyDetailsModalConfig();
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
            console.log('Found', svgElements.length, 'SVG elements to style');
            svgElements.forEach((svg, index) => {
                console.log('Styling SVG', index, svg);
                // Apply CSS class for styling instead of inline styles (CSP compliance)
                svg.className = this.modal.svgClasses + ' modal-svg-styled';
            });
        } else {
            console.log('modalSvg container not found');
        }
    },

    closeModal: function(modal, content) {
        modal.classList.remove(this.styles.cssClasses.modal.visible);
        content.classList.remove(this.styles.cssClasses.modal.visible);
        setTimeout(() => {
            modal.classList.add(this.styles.cssClasses.modal.hidden);
        }, this.ui.timing.modalClose);
    },

    // Details modal functions
    openDetailsModal: function(modal, content) {
        modal.classList.remove(this.styles.cssClasses.modal.hidden);
        setTimeout(() => {
            modal.classList.add(this.styles.cssClasses.modal.visible);
            content.classList.add(this.styles.cssClasses.modal.visible);
        }, this.ui.timing.modalOpen);
    },

    closeDetailsModal: function(modal, content) {
        modal.classList.remove(this.styles.cssClasses.modal.visible);
        content.classList.remove(this.styles.cssClasses.modal.visible);
        setTimeout(() => {
            modal.classList.add(this.styles.cssClasses.modal.hidden);
        }, this.ui.timing.modalClose);
    },

    loadDetailsContent: function(sectionNumber, topicTitle) {
        // Get the details data for the current section
        const detailsData = window[`SECTION${sectionNumber}_DETAILS`];
        if (detailsData && detailsData[topicTitle]) {
            return detailsData[topicTitle];
        }
        return `<p>Details not available for this topic yet.</p>`;
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
    },

    // CENTRALIZED QUIZ CONFIGURATION
    quiz: {
        // Element IDs - centralize all DOM element selectors
        elementIds: {
            quizContainer: 'quiz-container',
            resultsContainer: 'results-container',
            setupContainer: 'setup-container',
            loadingContainer: 'loading-container',
            questionArea: 'question-area',
            feedbackArea: 'feedback-area',
            scoreEl: 'score',
            finalScoreEl: 'final-score',
            progressBar: 'progress-bar',
            nextBtn: 'next-btn',
            restartBtn: 'restart-btn',
            homeBtn: 'home-btn',
            bestScore: 'best-score',
            history: 'history',
            beginBtn: 'begin-btn',
            resumeBtn: 'resume-btn',
            ciscoEntryBtn: 'cisco-entry-btn',
            wileyEntryBtn: 'wiley-entry-btn',
            enterContainer: 'enter-container',
            optionsContainer: 'options-container',
            submitMultiBtn: 'submit-multi-btn',
            resultBest: 'result-best',
            historyBtn: 'history-btn',
            quizHistoryModal: 'quiz-history-modal',
            quizHistoryCloseBtn: 'quiz-history-close-btn',
            quizHistoryContent: 'quiz-history-content',
            backToSetupBtn: 'back-to-setup-btn',
            backToCategoryBtn: 'back-to-category-btn'
        },

        // CSS Classes - centralize all class names used in JavaScript
        cssClasses: {
            // State classes
            states: {
                hidden: 'hidden',
                visible: 'visible'
            },

            // Feedback classes
            feedback: {
                correct: {
                    background: 'bg-green-100',
                    border: 'border-green-300',
                    text: 'text-green-800'
                },
                incorrect: {
                    background: 'bg-red-100',
                    border: 'border-red-300',
                    text: 'text-red-800'
                }
            },

            // Button classes
            buttons: {
                option: 'option-btn',
                optionLabel: 'option-label',
                submit: 'submit-btn-ready',
                submitDisabled: 'submit-btn-disabled',
                submitReady: 'submit-btn-ready',
                sizeSelected: 'size-selected',
                selectedMultiple: 'option-btn selected'
            },

            // Text classes
            text: {
                questionNumber: 'text-sm text-gray-600 mb-2',
                questionTitle: 'text-xl font-semibold text-gray-900 mb-4'
            },

            // Legacy classes for backward compatibility
            hidden: 'hidden',
            correct: 'correct',
            incorrect: 'incorrect',
            visible: 'visible',
            optionBtn: 'option-btn',
            sizeBtn: 'size-btn',

            // State classes (legacy)
            selected: 'bg-blue-100 border-blue-500',
            unselected: 'bg-white border-gray-300',

            // Feedback classes (legacy)
            correctFeedback: 'bg-green-100 border-green-300 text-green-800',
            incorrectFeedback: 'bg-red-100 border-red-300 text-red-800',
            neutralFeedback: 'bg-slate-100 border-slate-300 text-slate-800',

            // Button classes (legacy)
            primaryBtn: 'primary-btn',
            secondaryBtn: 'secondary-btn',
            successBtn: 'success-btn',
            submitBtn: 'bg-green-500 text-white font-bold py-2 px-4 rounded-lg mt-4 shadow hover:bg-green-600 transition',

            // Layout classes (legacy)
            loading: 'loading-container',
            questionContainer: 'question-area'
        },

        // Colors - centralize all color values
        colors: {
            primary: '#4f46e5',
            secondary: '#6366f1',
            success: '#10b981',
            danger: '#ef4444',
            warning: '#f59e0b',

            // Background colors
            slate900: '#0f172a',
            slate800: '#1e293b',
            slate700: '#334155',
            slate600: '#475569',
            slate500: '#64748b',
            slate400: '#94a3b8',
            slate300: '#cbd5e1',
            slate200: '#e2e8f0',

            // Text colors
            white: '#ffffff',
            textPrimary: '#e2e8f0',
            textSecondary: '#94a3b8',
            textMuted: '#64748b',

            // Quiz specific colors
            correctGreen: '#10B981',
            incorrectRed: '#EF4444',
            loadingSpinner: '#4f46e5'
        },

        // Animation and timing constants
        animations: {
            // Durations in milliseconds
            fastTransition: 150,
            normalTransition: 300,
            slowTransition: 500,

            // Specific animation timings
            spinDuration: '1s',
            fadeInDuration: '300ms',
            slideInDuration: '200ms',

            // Animation types
            spinAnimation: 'spin 1s linear infinite',
            fadeInAnimation: 'fadeIn 300ms ease-in-out',
            slideInAnimation: 'slideIn 200ms ease-out',

            // Transition styles
            allTransition: 'all 0.15s ease-in-out',
            opacityTransition: 'opacity 0.15s ease-in-out',
            colorTransition: 'background-color 0.15s ease-in-out',
            scaleTransition: 'transform 0.2s ease-in-out'
        },

        // Quiz behavior constants
        behavior: {
            defaultQuizSize: 20,
            maxHistoryEntries: 50,
            maxRecentAttempts: 10,
            loadingDelay: 250, // milliseconds
            feedbackDisplayTime: 500, // milliseconds before showing results

            // Storage keys
            storageKeys: {
                history: 'history',
                best: 'best',
                save: 'save'
            },

            // API endpoints
            endpoints: {
                ciscoQuestions: '/v1/questions?category=cisco',
                wileyQuestions: '/v1/questions?category=wiley'
            }
        },

        // Text content constants for UI elements
        textContent: {
            feedback: {
                correct: 'Correct!',
                incorrect: 'Incorrect.'
            },
            buttons: {
                submitAnswer: 'Submit Answer',
                nextQuestion: 'Next Question',
                startQuiz: 'Start Quiz',
                restartQuiz: 'Restart Quiz',
                resumeQuiz: 'Resume Saved Quiz',
                home: 'Home'
            },
            messages: {
                noHighScores: 'No high scores yet. Take a quiz!',
                noPastAttempts: 'No past attempts recorded.',
                loadingQuiz: 'Loading Quiz...',
                quizComplete: 'Quiz Complete!',
                failedToLoad: 'Failed to load quiz questions. Please try again later.',
                savedQuizMissing: 'Saved quiz could not be restored. Questions missing.'
            }
        },

        // Text content constants
        text: {
            // Messages
            noHighScores: 'No high scores yet. Take a quiz!',
            noPastAttempts: 'No past attempts recorded.',
            loadingQuiz: 'Loading Quiz...',
            quizComplete: 'Quiz Complete!',
            yourFinalScore: 'Your final score is:',
            correctHeading: 'Correct!',
            incorrectHeading: 'Incorrect.',
            partialCreditHeading: 'Partially Correct ({pct}% credit)',

            // Labels  
            questionLabel: 'Question {current} of {total}',
            questionIdLabel: 'ID: {id}',
            scoreLabel: 'Score: {score} / {total}',
            bestForSizeLabel: 'Best for this size: {score}/{total} ({pct}%) — {date}',
            allTimeBestLabel: 'All-time best: {score}/{total} ({pct}%) — {date} (size: {size})',
            pastAttemptsLabel: 'Past Attempts',

            // Button text
            nextQuestion: 'Next Question',
            submitAnswer: 'Submit Answer',
            startQuiz: 'Start Quiz',
            restartQuiz: 'Restart Quiz',
            resumeQuiz: 'Resume Saved Quiz',
            home: 'Home',

            // Error messages
            failedToLoad: 'Failed to load quiz questions. Please try again later.',
            savedQuizMissing: 'Saved quiz could not be restored. Questions missing.',

            // Accessibility
            explanationLabel: 'Explanation:',
            questionImageAlt: 'Question Image'
        },

        // Image handling
        images: {
            // Fallback logic for images
            fallbackExtensions: ['png', 'svg', 'jpeg', 'jpg'],
            errorHandler: "if(this.dataset.altAttempt==='1'){this.onerror=null;this.replaceWith(document.createElement('div'));}else{this.dataset.altAttempt='1';if(this.src.endsWith('.png')){this.src=this.src.replace('.png','.svg');}else if(this.src.endsWith('.svg')){this.src=this.src.replace('.svg','.png');} }",

            // Image styling
            containerClass: 'mb-4',
            imageClass: 'max-w-full rounded shadow'
        }
    },

    // SITE-WIDE CONSTANTS
    site: {
        // Brand colors that appear throughout the site
        brandColors: {
            cisco: 'linear-gradient(90deg, #0097D6 0%, #007CBF 100%)',
            wiley: 'linear-gradient(90deg, #FF8C00 0%, #D36B00 100%)',
            primary: 'linear-gradient(to bottom right, #6366f1, #8b5cf6)',
            secondary: 'linear-gradient(135deg, #667eea, #764ba2)'
        },

        // Font families
        fonts: {
            primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            heading: "'Orbitron', monospace",
            mono: "'Fira Code', 'Courier New', monospace"
        },

        // Breakpoints (matching CSS media queries)
        breakpoints: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },

        // Common spacing values
        spacing: {
            xs: '0.25rem',
            sm: '0.5rem',
            md: '1rem',
            lg: '1.5rem',
            xl: '2rem',
            xxl: '3rem'
        }
    }
}; // End of CCNAConfig object

// Utility functions for using the configuration
const Config = {
    // Get element by configured ID
    getElement: (key) => document.getElementById(CCNAConfig.quiz.elementIds[key]),

    // Get multiple elements by configured selectors
    getElements: (selector) => document.querySelectorAll(selector),

    // Apply CSS classes from config
    addClass: (element, classKey) => {
        const className = CCNAConfig.quiz.cssClasses[classKey];
        if (className) element.classList.add(...className.split(" "));
    },

    removeClass: (element, classKey) => {
        const className = CCNAConfig.quiz.cssClasses[classKey];
        if (className) element.classList.remove(...className.split(" "));
    },

    toggleClass: (element, classKey) => {
        const className = CCNAConfig.quiz.cssClasses[classKey];
        if (className) {
            className.split(" ").forEach(cls => element.classList.toggle(cls));
        }
    },

    // Get color values
    getColor: (colorKey) => CCNAConfig.quiz.colors[colorKey] || CCNAConfig.site.brandColors[colorKey],

    // Get text with placeholder replacement
    getText: (textKey, placeholders = {}) => {
        let text = CCNAConfig.quiz.text[textKey] || textKey;
        Object.keys(placeholders).forEach(key => {
            text = text.replace(new RegExp(`\\{${key}\\}`, "g"), placeholders[key]);
        });
        return text;
    },

    // Get animation styles
    getAnimation: (animKey) => CCNAConfig.quiz.animations[animKey],

    // Get behavior constants
    getBehavior: (behaviorKey) => CCNAConfig.quiz.behavior[behaviorKey]
};

// Export for global use
if (typeof window !== 'undefined') {
    window.CCNAConfig = CCNAConfig;
    window.Config = Config;
}