/**
 * Accessibility Enhancement JavaScript
 * Handles keyboard navigation and ARIA improvements for better UX
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================================================
    // KEYBOARD NAVIGATION FOR SECTION CARDS
    // ============================================================================
    
    const sectionCards = document.querySelectorAll('.section-card[tabindex="0"]');
    
    sectionCards.forEach(card => {
        // Handle Enter and Space key presses
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Find the link within this card and click it
                const link = card.querySelector('.section-button, a');
                if (link) {
                    link.click();
                }
            }
        });
        
        // Add visual feedback for focus
        card.addEventListener('focus', function() {
            card.classList.add('focused');
        });
        
        card.addEventListener('blur', function() {
            card.classList.remove('focused');
        });
    });
    
    // ============================================================================
    // KEYBOARD NAVIGATION FOR FEATURE CARDS
    // ============================================================================
    
    const featureCards = document.querySelectorAll('.feature-card[tabindex="0"]');
    
    featureCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Find the primary button or link within this card
                const button = card.querySelector('.primary-btn, .brand-btn, a');
                if (button) {
                    button.click();
                }
            }
        });
        
        card.addEventListener('focus', function() {
            card.classList.add('focused');
        });
        
        card.addEventListener('blur', function() {
            card.classList.remove('focused');
        });
    });
    
    // ============================================================================
    // MODAL KEYBOARD NAVIGATION
    // ============================================================================
    
    const modals = document.querySelectorAll('#studyModal, #detailsModal');
    
    modals.forEach(modal => {
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                // Find close button and click it
                const closeBtn = modal.querySelector('#closeModal, #closeDetails');
                if (closeBtn) {
                    closeBtn.click();
                }
            }
        });
    });
    
    // ============================================================================
    // FOCUS TRAP FOR MODALS
    // ============================================================================
    
    function trapFocus(modal) {
        const focusableElements = modal.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
    
    // Apply focus trap to modals when they open
    modals.forEach(modal => {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (!modal.classList.contains('hidden')) {
                        trapFocus(modal);
                        // Focus first focusable element
                        setTimeout(() => {
                            const firstFocusable = modal.querySelector('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
                            if (firstFocusable) {
                                firstFocusable.focus();
                            }
                        }, 100);
                    }
                }
            });
        });
        
        observer.observe(modal, { attributes: true });
    });
    
    // ============================================================================
    // ARIA LIVE REGIONS FOR DYNAMIC CONTENT
    // ============================================================================
    
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only'; // Screen reader only
    liveRegion.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    document.body.appendChild(liveRegion);
    
    // Function to announce messages to screen readers
    window.announceToScreenReader = function(message) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    };
    
    // ============================================================================
    // ENHANCED BUTTON INTERACTIONS
    // ============================================================================
    
    const interactiveButtons = document.querySelectorAll('.primary-btn, .secondary-btn, .success-btn, .brand-btn, .size-btn, .nav-btn');
    
    interactiveButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation class
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 200);
        });
    });
    
    // ============================================================================
    // SMOOTH SCROLL FOR SKIP LINKS
    // ============================================================================
    
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Announce to screen readers
                window.announceToScreenReader('Skipped to main content');
            }
        });
    }
    
    // ============================================================================
    // KEYBOARD NAVIGATION INDICATORS
    // ============================================================================
    
    // Add class to body when user is navigating with keyboard
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove class when user clicks (mouse navigation)
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // ============================================================================
    // REDUCED MOTION DETECTION
    // ============================================================================
    
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-motion');
        // Disable staggered animations
        const staggeredElements = document.querySelectorAll('.sections-grid > *');
        staggeredElements.forEach((element, index) => {
            element.style.animationDelay = '0ms';
        });
    }
    
    // ============================================================================
    // HIGH CONTRAST MODE DETECTION
    // ============================================================================
    
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    console.log('Accessibility enhancements loaded successfully');
});