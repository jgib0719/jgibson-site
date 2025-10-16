/**
 * Unified Section Template - Dynamic Loading
 * Loads section-specific content based on URL parameters
 * Following Golden Rules: No duplication, hierarchical structure
 */

console.log('🚀 Section Dynamic Loader script started');

// Extract section number from URL
function getSectionNumberFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    
    if (sectionParam) {
        const sectionNum = parseInt(sectionParam, 10);
        if (sectionNum >= 1 && sectionNum <= 6) {
            return sectionNum;
        }
    }
    
    // If no valid section parameter, redirect to sections overview
    console.warn('No valid section parameter found, redirecting to sections overview');
    window.location.href = '/guide/sections.html';
    return null;
}

// Update page metadata based on section
function updatePageMetadata(sectionNumber, sectionInfo) {
    if (!sectionInfo) return;
    
    // Update title and meta description
    const titleElement = document.getElementById('dynamic-title');
    const descriptionElement = document.getElementById('dynamic-description');
    const breadcrumbElement = document.getElementById('dynamic-breadcrumb');
    const sectionTitleElement = document.getElementById('dynamic-section-title');
    
    if (titleElement) {
        titleElement.textContent = `Section ${sectionNumber}: ${sectionInfo.title} | CCNA Study Guide`;
    }
    
    if (descriptionElement) {
        descriptionElement.setAttribute('content', 
            `Study CCNA Section ${sectionNumber}: ${sectionInfo.title}. Interactive lessons with progress tracking.`);
    }
    
    if (breadcrumbElement) {
        breadcrumbElement.textContent = `Section ${sectionNumber}`;
    }
    
    if (sectionTitleElement) {
        sectionTitleElement.textContent = `CCNA - Section ${sectionNumber}`;
    }
    
    // Update progress label
    const progressLabel = document.getElementById('progress-label');
    if (progressLabel) {
        progressLabel.textContent = `Section ${sectionNumber} Progress`;
    }
}

// Dynamically load section-specific scripts
async function loadSectionScripts(sectionNumber) {
    const scripts = [
        `js/section${sectionNumber}-data.js`,
        `js/section${sectionNumber}-details.js`,
        `js/section${sectionNumber}-init.js`
    ];
    
    try {
        for (const scriptSrc of scripts) {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = scriptSrc;
                script.onload = resolve;
                script.onerror = () => reject(new Error(`Failed to load ${scriptSrc}`));
                document.head.appendChild(script);
            });
        }
        console.log(`✅ Section ${sectionNumber} scripts loaded successfully`);
        return true;
    } catch (error) {
        console.error('Failed to load section scripts:', error);
        return false;
    }
}

// Initialize the dynamic section page
async function initializeDynamicSection() {
    const sectionNumber = getSectionNumberFromURL();
    if (!sectionNumber) return;
    
    console.log(`🚀 Initializing dynamic section ${sectionNumber}...`);
    
    // Get section info from registry
    const sectionInfo = CCNA_SECTION_REGISTRY.getSectionInfo(sectionNumber);
    if (sectionInfo) {
        updatePageMetadata(sectionNumber, sectionInfo);
        console.log(`📝 Updated metadata for section ${sectionNumber}: ${sectionInfo.title}`);
    }
    
    // Set the global section number FIRST
    window.SECTION_NUMBER = sectionNumber;
    console.log(`🔧 Set global SECTION_NUMBER to ${sectionNumber}`);
    
    // Load section-specific scripts
    console.log(`📦 Loading scripts for section ${sectionNumber}...`);
    const scriptsLoaded = await loadSectionScripts(sectionNumber);
    if (!scriptsLoaded) {
        console.error(`❌ Failed to load scripts for section ${sectionNumber}`);
        return;
    }
    
    // Wait a moment for the section data to be available, then manually trigger SectionLoader
    setTimeout(() => {
        const sectionDataKey = `SECTION${sectionNumber}_DATA`;
        const sectionData = window[sectionDataKey];
        
        if (sectionData) {
            console.log(`📊 Section data loaded: ${sectionDataKey}`);
            
            // Manually initialize SectionLoader since timing might be off
            if (typeof SectionLoader !== 'undefined') {
                window.sectionLoader = new SectionLoader(sectionNumber, sectionData);
                console.log(`✅ SectionLoader manually initialized for section ${sectionNumber}`);
            } else {
                console.error('❌ SectionLoader class not available');
            }
        } else {
            console.error(`❌ Section data not found: ${sectionDataKey}`);
            console.log('Available window properties:', Object.keys(window).filter(key => key.includes('SECTION')));
        }
        
        console.log(`✅ Dynamic section ${sectionNumber} initialization complete`);
    }, 200);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDynamicSection);
} else {
    initializeDynamicSection();
}