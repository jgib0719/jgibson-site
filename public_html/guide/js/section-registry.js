/**
 * CCNA Section Topic Totals Registry
 * Centralized registry for section topic counts
 * Section data files call this when they are loaded independently  
 * This allows the progress tracker to get accurate counts without loading full section data
 */

const CCNA_SECTION_REGISTRY = {
    /**
     * Section topic totals - dynamically calculated from section data files
     * This registry provides a lightweight way to get topic counts
     */
    topicTotals: {},  // Will be populated dynamically as section data loads

    /**
     * Register section data and calculate topic totals dynamically
     * Called by each section data file when it loads
     */
    registerSectionData: function(sectionNumber, sectionData) {
        if (sectionData && sectionData.metadata && typeof sectionData.metadata.totalTopics !== 'undefined') {
            // Use the section's own totalTopics calculation
            if (typeof sectionData.metadata.totalTopics === 'function') {
                this.topicTotals[sectionNumber] = sectionData.metadata.totalTopics();
            } else {
                this.topicTotals[sectionNumber] = sectionData.metadata.totalTopics;
            }
        }
        console.log(`Registered section ${sectionNumber} with ${this.topicTotals[sectionNumber]} topics`);
    },

    /**
     * Get total topics for a specific section
     */
    getTopicTotal: function(sectionNumber) {
        return this.topicTotals[sectionNumber] || 0;
    },

    /**
     * Get total topics across all sections
     */
    getTotalTopics: function() {
        return Object.values(this.topicTotals).reduce((total, count) => total + count, 0);
    },

    /**
     * Update topic total for a specific section (called when section data changes)
     */
    updateTopicTotal: function(sectionNumber, totalTopics) {
        this.topicTotals[sectionNumber] = totalTopics;
        // Dispatch event for progress trackers to update
        window.dispatchEvent(new CustomEvent('topicCountsUpdated', {
            detail: { sectionNumber, totalTopics, allTotals: this.topicTotals }
        }));
    },

    /**
     * Section metadata for display purposes
     */
    sectionInfo: {
        1: {
            title: "Network Fundamentals",
            shortTitle: "Fundamentals",
            color: "#4f46e5",
            icon: "fa-network-wired"
        },
        2: {
            title: "Network Access",
            shortTitle: "Access", 
            color: "#7c3aed",
            icon: "fa-ethernet"
        },
        3: {
            title: "IP Connectivity",
            shortTitle: "Connectivity",
            color: "#2563eb",
            icon: "fa-route"
        },
        4: {
            title: "IP Services",
            shortTitle: "Services",
            color: "#dc2626",
            icon: "fa-server"
        },
        5: {
            title: "Security Fundamentals", 
            shortTitle: "Security",
            color: "#ea580c",
            icon: "fa-shield-alt"
        },
        6: {
            title: "Network Automation & Programmability",
            shortTitle: "Automation",
            color: "#16a34a",
            icon: "fa-code"
        }
    },

    /**
     * Get topic total for a specific section
     */
    getTopicTotal(sectionNumber) {
        return this.topicTotals[sectionNumber] || 0;
    },

    /**
     * Get all topic totals
     */
    getAllTopicTotals() {
        return { ...this.topicTotals };
    },

    /**
     * Get total topics across all sections
     */
    getTotalTopics() {
        return Object.values(this.topicTotals).reduce((total, count) => total + count, 0);
    },

    /**
     * Get section information
     */
    getSectionInfo(sectionNumber) {
        return this.sectionInfo[sectionNumber] || null;
    },

    /**
     * Get all section information
     */
    getAllSectionInfo() {
        return { ...this.sectionInfo };
    },

    /**
     * Update topic total for a specific section
     */
    updateTopicTotal(sectionNumber, totalTopics) {
        if (typeof sectionNumber === 'number' && typeof totalTopics === 'number' && totalTopics > 0) {
            // Only log if this is a new or changed value
            if (this.topicTotals[sectionNumber] !== totalTopics) {
                this.topicTotals[sectionNumber] = totalTopics;
                // Save to localStorage for persistence
                this.saveToStorage();
                console.log(`Updated topic total for Section ${sectionNumber}: ${totalTopics} topics`);
            }
        }
    },

    /**
     * Register section data when a section data file loads
     */
    registerSectionData(sectionNumber, sectionData) {
        if (sectionData && sectionData.metadata) {
            let totalTopics = 0;
            
            // Handle both getter functions and direct values
            if (typeof sectionData.metadata.totalTopics === 'function') {
                totalTopics = sectionData.metadata.totalTopics();
            } else if (typeof sectionData.metadata.totalTopics === 'number') {
                totalTopics = sectionData.metadata.totalTopics;
            } else if (sectionData.metadata.subsections) {
                // Calculate from subsections if totalTopics is not available
                totalTopics = Object.values(sectionData.metadata.subsections)
                    .reduce((total, section) => total + (section.count || 0), 0);
            }
            
            if (totalTopics > 0) {
                this.updateTopicTotal(sectionNumber, totalTopics);
            }
        }
    },

    /**
     * Save registry to localStorage for persistence
     */
    saveToStorage() {
        try {
            const registryData = {
                topicTotals: this.topicTotals,
                version: '1.0',
                timestamp: Date.now()
            };
            localStorage.setItem('ccna_section_registry', JSON.stringify(registryData));
        } catch (e) {
            console.warn('Failed to save section registry to localStorage:', e);
        }
    },

    /**
     * Load registry from localStorage
     */
    loadFromStorage() {
        try {
            const stored = localStorage.getItem('ccna_section_registry');
            if (stored) {
                const data = JSON.parse(stored);
                if (data.topicTotals) {
                    this.topicTotals = { ...this.topicTotals, ...data.topicTotals };
                    console.log('Loaded section registry from storage');
                    return true;
                }
            }
        } catch (e) {
            console.warn('Failed to load section registry from localStorage:', e);
        }
        return false;
    },

    /**
     * Initialize the registry
     */
    init() {
        this.loadFromStorage();
        console.log('CCNA Section Registry initialized');
    }
};

// Auto-initialize when loaded
document.addEventListener('DOMContentLoaded', () => {
    CCNA_SECTION_REGISTRY.init();
});

// Global export for use in other scripts
if (typeof window !== 'undefined') {
    window.CCNA_SECTION_REGISTRY = CCNA_SECTION_REGISTRY;
}

// Node.js export for potential server-side use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CCNA_SECTION_REGISTRY;
}