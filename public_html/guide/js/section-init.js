/**
 * Section Initialization Script
 * Centralizes section loader initialization to avoid inline scripts
 */

// Function to initialize section with specific data
function initializeSection(sectionNumber, sectionData) {
    document.addEventListener('DOMContentLoaded', function() {
        window.sectionLoader = new SectionLoader(sectionNumber, sectionData);
    });
}

// Initialize section when called by lazy loader
window.initializeSection = function(sectionId) {
    console.log(`🚀 Initializing ${sectionId}...`);
    const sectionNumber = parseInt(sectionId.replace('section', ''));
    const sectionDataVar = `SECTION${sectionNumber}_DATA`;

    if (typeof window[sectionDataVar] !== 'undefined') {
        window.sectionLoader = new SectionLoader(sectionNumber, window[sectionDataVar]);
        console.log(`✅ ${sectionId} initialized with SectionLoader`);
    } else {
        console.error(`❌ ${sectionDataVar} not available for ${sectionId}`);
    }
};

// Auto-detect section and initialize if section data is available
document.addEventListener('DOMContentLoaded', function() {
    // Log that the page has loaded (moved from inline script)
    console.log("📄 Page loaded - lazy loading will handle section data");

    // Check for section-specific data variables and initialize accordingly
    if (typeof SECTION1_DATA !== 'undefined') {
        window.sectionLoader = new SectionLoader(1, SECTION1_DATA);
    } else if (typeof SECTION2_DATA !== 'undefined') {
        window.sectionLoader = new SectionLoader(2, SECTION2_DATA);
    } else if (typeof SECTION3_DATA !== 'undefined') {
        window.sectionLoader = new SectionLoader(3, SECTION3_DATA);
    } else if (typeof SECTION4_DATA !== 'undefined') {
        window.sectionLoader = new SectionLoader(4, SECTION4_DATA);
    } else if (typeof SECTION5_DATA !== 'undefined') {
        window.sectionLoader = new SectionLoader(5, SECTION5_DATA);
    } else if (typeof SECTION6_DATA !== 'undefined') {
        window.sectionLoader = new SectionLoader(6, SECTION6_DATA);
    }
});