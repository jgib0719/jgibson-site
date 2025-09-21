/**
 * CCNA Dynamic Section Loader
 * Converts static sections to database-driven content
 * Maintains exact visual design and functionality
 * Created: September 19, 2025
 */

class CCNADynamicLoader {
    constructor() {
        this.api = window.ccnaAPI;
        this.currentSection = null;
        this.containerMapping = {};
    }

    /**
     * Initialize dynamic loading for Section 1
     */
    async initializeSection1() {
        console.log('🔄 Initializing dynamic Section 1 loading...');

        // Define container mapping for Section 1 subsections
        this.containerMapping = {
            '1.1': 'components-grid',      // Network Components
            '1.2': 'topologies-grid',      // Network Topology Architectures  
            '1.3': 'cabling-grid',         // Physical Interfaces and Cabling Types
            '1.4': 'cable-issues-grid',    // Interface and Cable Issues
            '1.5': 'protocols-grid',       // TCP vs UDP
            '1.6': 'ipv4-grid',           // IPv4 Addressing
            '1.7': 'ipv6-grid',           // IPv6 Addressing (combines 1.7-1.9)
            '1.8': 'ipv6-grid',           // IPv6 Address Types (mapped to same grid)
            '1.9': 'ipv6-grid',           // IPv6 Modified EUI-64 (mapped to same grid)
            '1.10': 'client-os-grid',     // Client OS IP Parameters
            '1.11': 'wireless-grid',      // Wireless Principles
            '1.12': 'virtualization-grid', // Virtualization Fundamentals
            '1.13': 'switching-grid'      // Switch Operations
        };

        try {
            // Show loading states
            this.showLoadingStates();

            // Load content from database
            await this.api.loadSectionContent('1.0', this.containerMapping);

            // Update section metadata
            this.updateSectionMetadata();

            console.log('✅ Section 1 dynamic loading complete');
            
        } catch (error) {
            console.error('❌ Failed to initialize Section 1:', error);
            this.showErrorStates();
        }
    }

    /**
     * Show loading states in all grid containers
     */
    showLoadingStates() {
        Object.values(this.containerMapping).forEach(containerId => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = this.generateLoadingCard();
            }
        });
    }

    /**
     * Show error states in all grid containers
     */
    showErrorStates() {
        Object.values(this.containerMapping).forEach(containerId => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = this.generateErrorCard();
            }
        });
    }

    /**
     * Generate loading card HTML
     */
    generateLoadingCard() {
        return `
            <div class="loading-card bg-slate-900/50 border border-slate-500/30 rounded-lg p-4 animate-pulse">
                <div class="flex items-center justify-between mb-3">
                    <div class="h-5 bg-slate-700 rounded w-3/4"></div>
                    <div class="h-4 bg-slate-700 rounded w-16"></div>
                </div>
                <div class="h-20 bg-slate-800/30 rounded mb-3"></div>
                <div class="space-y-2">
                    <div class="h-3 bg-slate-700 rounded w-full"></div>
                    <div class="h-3 bg-slate-700 rounded w-2/3"></div>
                </div>
                <div class="flex items-center justify-between mt-3 pt-3 border-t border-slate-700/50">
                    <div class="h-3 bg-slate-700 rounded w-20"></div>
                    <div class="h-3 bg-slate-700 rounded w-24"></div>
                </div>
            </div>
        `;
    }

    /**
     * Generate error card HTML
     */
    generateErrorCard() {
        return `
            <div class="error-card bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-center">
                <i class="fas fa-exclamation-triangle text-red-400 text-xl mb-2"></i>
                <p class="text-red-300 text-sm mb-3">Failed to load content</p>
                <button onclick="dynamicLoader.initializeSection1()" 
                        class="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-xs">
                    Retry
                </button>
            </div>
        `;
    }

    /**
     * Update section metadata and progress bars
     */
    async updateSectionMetadata() {
        try {
            // Get section statistics
            const sectionData = await this.api.getSectionTopics('1.0');
            const totalTopics = Object.values(sectionData)
                .reduce((total, subsection) => total + subsection.topics.length, 0);

            // Update any section counters
            const sectionCounter = document.querySelector('.section-topic-count');
            if (sectionCounter) {
                sectionCounter.textContent = `${totalTopics} Topics`;
            }

            // Update subsection counters
            Object.entries(sectionData).forEach(([subsectionNumber, subsectionData]) => {
                const counter = document.querySelector(`[data-subsection="${subsectionNumber}"] .topic-count`);
                if (counter) {
                    counter.textContent = `${subsectionData.topics.length} topics`;
                }
            });

        } catch (error) {
            console.error('Failed to update section metadata:', error);
        }
    }

    /**
     * Convert static section to dynamic loading
     * This method removes static content and replaces with database calls
     */
    convertStaticToDatabase() {
        console.log('🔄 Converting static content to database-driven...');

        // Remove static topic arrays and topicDetails
        if (window.componentsTopics) delete window.componentsTopics;
        if (window.topologyTopics) delete window.topologyTopics;
        if (window.cablingTopics) delete window.cablingTopics;
        if (window.protocolsTopics) delete window.protocolsTopics;
        if (window.ipv4Topics) delete window.ipv4Topics;
        if (window.ipv6Topics) delete window.ipv6Topics;
        if (window.wirelessTopics) delete window.wirelessTopics;
        if (window.virtualizationTopics) delete window.virtualizationTopics;
        if (window.modelsTopics) delete window.modelsTopics;
        if (window.ethernetTopics) delete window.ethernetTopics;
        if (window.routingTopics) delete window.routingTopics;
        if (window.switchingTopics) delete window.switchingTopics;
        if (window.topicDetails) delete window.topicDetails;

        console.log('🗑️ Static content removed');
    }

    /**
     * Get file size reduction statistics
     */
    getFileSizeStats() {
        // Calculate approximate size reduction
        const originalSize = 224 * 1024; // 224KB original
        const staticContentSize = 150 * 1024; // Estimated static content size
        const newSize = originalSize - staticContentSize;
        const reduction = ((staticContentSize / originalSize) * 100).toFixed(1);

        return {
            originalSize: originalSize,
            newSize: newSize,
            reduction: reduction,
            savedBytes: staticContentSize
        };
    }
}

// Global loader instance
window.dynamicLoader = new CCNADynamicLoader();

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 CCNA Dynamic Loader initialized');
    
    // Check if we're on Section 1 page
    if (document.title.includes('Section 1') || window.location.pathname.includes('chapter1')) {
        console.log('📘 Section 1 detected - starting dynamic loading...');
        
        // Small delay to ensure all other scripts are loaded
        setTimeout(() => {
            dynamicLoader.initializeSection1();
        }, 500);
    }
});

console.log('🔄 Dynamic Section Loader ready');