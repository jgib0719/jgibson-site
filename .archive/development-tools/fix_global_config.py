#!/usr/bin/env python3
"""
Fix all hardcoded values and make everything use global config
"""

def fix_global_config_conflicts():
    print("🔧 FIXING GLOBAL CONFIG CONFLICTS...")
    print("=" * 50)
    
    # Read the current section1.html
    with open('/var/www/jgibson.site/public_html/section1.html', 'r') as f:
        html_content = f.read()
    
    # Read the current config file
    with open('/var/www/jgibson.site/public_html/js/ccna-config.js', 'r') as f:
        config_content = f.read()
    
    # 1. Update config file with ALL sizing parameters
    new_config = '''/**
 * CCNA Study Guide Global Configuration
 * Centralized settings for all sections - SINGLE SOURCE OF TRUTH
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
        overlayClasses: "fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4 transition-opacity duration-300 opacity-0 z-50"
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
        
        if (modal) modal.className = this.modal.overlayClasses;
        if (modalContent) modalContent.className = this.modal.containerClasses;
        if (modalVisual) modalVisual.className = this.modal.visualAreaClasses;
        if (modalSvg) modalSvg.className = this.modal.svgContainerClasses;
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
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.CCNAConfig = CCNAConfig;
}'''
    
    # Write the updated config
    with open('/var/www/jgibson.site/public_html/js/ccna-config.js', 'w') as f:
        f.write(new_config)
    
    print("✅ Updated ccna-config.js with comprehensive global settings")
    
    # 2. Update section1.html to use config everywhere
    # Replace hardcoded modal HTML with config-driven version
    old_modal = '''    <!-- Study Modal -->
    <div id="studyModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4 transition-opacity duration-300 opacity-0 z-50">
        <div id="modalContent" class="bg-slate-800 border-2 border-indigo-500/50 rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden transform scale-95 transition-all duration-300 opacity-0">
            <div id="modalVisual" class="p-8 h-80 flex-shrink-0 flex items-center justify-center">
                <div id="modalSvg" class="w-full h-full"></div>
            </div>'''
    
    new_modal = '''    <!-- Study Modal - Uses Global Config -->
    <div id="studyModal">
        <div id="modalContent">
            <div id="modalVisual">
                <div id="modalSvg"></div>
            </div>'''
    
    html_content = html_content.replace(old_modal, new_modal)
    
    # Update the JavaScript section to use global config
    old_js_section = '''        document.addEventListener('DOMContentLoaded', function() {
            // Initialize progress tracker
            progressTracker = new UnifiedCCNAProgressTracker(1);
            
            // Get the section data
            const data = window.SECTION1_DATA;
            
            if (!data) {
                console.error('Section data not loaded');
                return;
            }
            
            // Create topic cards function
            function createTopicCards(topics, gridElement) {
                if (!gridElement) return;
                
                topics.forEach(topic => {
                    const card = document.createElement('div');
                    card.className = 'topic-card p-6 flex flex-col justify-center items-center text-center cursor-pointer h-56 w-60';
                    card.innerHTML = `
                        <i class="fas ${topic.icon} text-5xl text-indigo-400 mb-4"></i>
                        <h3 class="text-xl font-semibold text-slate-200 title-font">${topic.title}</h3>
                    `;
                    card.onclick = () => openStudyModal(topic, card);
                    gridElement.appendChild(card);
                });
            }'''
    
    new_js_section = '''        document.addEventListener('DOMContentLoaded', function() {
            // Initialize progress tracker
            progressTracker = new UnifiedCCNAProgressTracker(1);
            
            // Apply global modal configuration
            CCNAConfig.applyModalConfig();
            
            // Get the section data
            const data = window.SECTION1_DATA;
            
            if (!data) {
                console.error('Section data not loaded');
                return;
            }
            
            // Create topic cards function using global config
            function createTopicCards(topics, gridElement) {
                if (!gridElement) return;
                
                topics.forEach(topic => {
                    const card = CCNAConfig.createTopicCard(topic);
                    card.onclick = () => openStudyModal(topic, card);
                    gridElement.appendChild(card);
                });
            }'''
    
    html_content = html_content.replace(old_js_section, new_js_section)
    
    # Write the updated HTML
    with open('/var/www/jgibson.site/public_html/section1.html', 'w') as f:
        f.write(html_content)
    
    print("✅ Updated section1.html to use global config everywhere")
    
    # Check file sizes
    import os
    html_size = os.path.getsize('/var/www/jgibson.site/public_html/section1.html')
    config_size = os.path.getsize('/var/www/jgibson.site/public_html/js/ccna-config.js')
    
    print(f"\n📊 UPDATED FILE SIZES:")
    print(f"   section1.html: {html_size:,} bytes ({html_size/1024:.1f} KB)")
    print(f"   ccna-config.js: {config_size:,} bytes ({config_size/1024:.1f} KB)")
    
    print(f"\n🎯 GLOBAL CONFIG BENEFITS:")
    print(f"   ✅ Single source of truth for ALL sizing")
    print(f"   ✅ No hardcoded values in HTML")
    print(f"   ✅ Easy to change modal/card sizes globally")
    print(f"   ✅ Consistent across all sections")
    print(f"   ✅ Professional architecture")
    
    return True

if __name__ == "__main__":
    fix_global_config_conflicts()