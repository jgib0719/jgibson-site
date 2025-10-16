#!/usr/bin/env node
/**
 * Content Compiler - CCNA Study Guide
 * Compiles unified JSON content into optimized JavaScript files
 * Generates both data and details files compatible with existing system
 */

const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');

class ContentCompiler {
    constructor() {
        this.outputDir = null;
        this.compiled = [];
        this.minifyOptions = {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        };
    }

    /**
     * Set output directory for compiled files
     */
    setOutputDir(dir) {
        this.outputDir = dir;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    /**
     * Compile a single section content file
     */
    async compileSection(jsonPath) {
        const fileName = path.basename(jsonPath, '.json');
        const sectionNumber = parseInt(fileName.replace(/[^0-9]/g, ''));
        
        console.log(`🔧 Compiling ${fileName}...`);

        try {
            // Load and parse content
            const content = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            
            // Generate data file (section{N}-data.js)
            const dataFile = await this.generateDataFile(content, sectionNumber);
            const dataPath = path.join(this.outputDir, `section${sectionNumber}-data.js`);
            fs.writeFileSync(dataPath, dataFile);

            // Generate details file (section{N}-details.js)
            const detailsFile = await this.generateDetailsFile(content, sectionNumber);
            const detailsPath = path.join(this.outputDir, `section${sectionNumber}-details.js`);
            fs.writeFileSync(detailsPath, detailsFile);

            // Track compilation
            this.compiled.push({
                section: sectionNumber,
                source: jsonPath,
                dataFile: dataPath,
                detailsFile: detailsPath,
                dataSize: Buffer.byteLength(dataFile, 'utf8'),
                detailsSize: Buffer.byteLength(detailsFile, 'utf8')
            });

            console.log(`✅ Section ${sectionNumber} compiled successfully`);
            return true;

        } catch (error) {
            console.error(`❌ Failed to compile ${fileName}:`, error.message);
            return false;
        }
    }

    /**
     * Generate section data file (cards, metadata, visuals)
     */
    async generateDataFile(content, sectionNumber) {
        const { metadata, subsections } = content;
        
        // Build subsection objects for the data file
        const dataStructure = {};
        const metadataSubsections = {};

        for (const [key, subsection] of Object.entries(subsections)) {
            // Transform topics for data structure
            dataStructure[key] = subsection.topics.map(topic => ({
                title: topic.title,
                icon: topic.icon,
                description: topic.summary,
                visual: this.optimizeSVG(topic.visual)
            }));

            // Build metadata subsections
            metadataSubsections[key] = {
                title: subsection.title,
                count: subsection.topics.length
            };
        }

        // Generate JavaScript file
        const jsContent = `/**
 * CCNA Section ${sectionNumber}: ${metadata.title} - Complete Topic Data
 * Generated from unified content on ${new Date().toISOString()}
 * Auto-compiled using content-compiler.js
 */

const SECTION${sectionNumber}_DATA = ${JSON.stringify(dataStructure, null, 4)};

// Add metadata
SECTION${sectionNumber}_DATA.metadata = {
    sectionNumber: ${sectionNumber},
    title: "${metadata.title}",
    version: "${metadata.version}",
    lastModified: "${metadata.lastModified}",
    subsections: ${JSON.stringify(metadataSubsections, null, 8)},
    // Dynamic calculation of total topics from subsections
    get totalTopics() {
        return Object.values(this.subsections).reduce((total, section) => total + section.count, 0);
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.SECTION${sectionNumber}_DATA = SECTION${sectionNumber}_DATA;
    
    // Register with section registry for dynamic topic totals
    document.addEventListener('DOMContentLoaded', () => {
        if (window.CCNA_SECTION_REGISTRY) {
            window.CCNA_SECTION_REGISTRY.registerSectionData(${sectionNumber}, SECTION${sectionNumber}_DATA);
        }
        // Dispatch event for other listeners
        window.dispatchEvent(new CustomEvent('sectionDataLoaded', {
            detail: { sectionNumber: ${sectionNumber}, sectionData: SECTION${sectionNumber}_DATA }
        }));
    });
}

// Node.js export for server-side use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SECTION${sectionNumber}_DATA;
}`;

        return jsContent;
    }

    /**
     * Generate section details file (modal content)
     */
    async generateDetailsFile(content, sectionNumber) {
        const { metadata, subsections } = content;
        
        // Build details object
        const detailsStructure = {};

        for (const subsection of Object.values(subsections)) {
            for (const topic of subsection.topics) {
                // Minify HTML content
                const minifiedContent = await minify(topic.content.overview, this.minifyOptions);
                detailsStructure[topic.title] = minifiedContent;
            }
        }

        // Generate JavaScript file
        const jsContent = `/**
 * CCNA Section ${sectionNumber}: ${metadata.title} - Detailed Content
 * Generated from unified content on ${new Date().toISOString()}
 * Auto-compiled using content-compiler.js - optimized for production
 */

const SECTION${sectionNumber}_DETAILS = ${JSON.stringify(detailsStructure, null, 4)};

// Export for global use
if (typeof window !== 'undefined') {
    window.SECTION${sectionNumber}_DETAILS = SECTION${sectionNumber}_DETAILS;
}

// Node.js export for server-side use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SECTION${sectionNumber}_DETAILS;
}`;

        return jsContent;
    }

    /**
     * Optimize SVG content for production
     */
    optimizeSVG(svgContent) {
        // Basic SVG optimization - remove unnecessary whitespace and comments
        return svgContent
            .replace(/\s+/g, ' ')
            .replace(/>\s+</g, '><')
            .replace(/<!--.*?-->/g, '')
            .trim();
    }

    /**
     * Compile all content files in a directory
     */
    async compileDirectory(contentDir, outputDir) {
        this.setOutputDir(outputDir);
        
        console.log(`🚀 Starting content compilation`);
        console.log(`Source: ${contentDir}`);
        console.log(`Output: ${outputDir}`);

        const files = fs.readdirSync(contentDir)
            .filter(file => file.endsWith('.json') && file.startsWith('section'))
            .sort();

        if (files.length === 0) {
            console.warn('⚠️  No section content files found');
            return false;
        }

        let allCompiled = true;
        for (const file of files) {
            const filePath = path.join(contentDir, file);
            const success = await this.compileSection(filePath);
            if (!success) allCompiled = false;
        }

        // Generate compilation report
        this.generateCompilationReport();

        return allCompiled;
    }

    /**
     * Generate compilation report
     */
    generateCompilationReport() {
        console.log('\n📊 Compilation Summary:');
        console.log(`Sections compiled: ${this.compiled.length}`);

        let totalDataSize = 0;
        let totalDetailsSize = 0;

        this.compiled.forEach(section => {
            totalDataSize += section.dataSize;
            totalDetailsSize += section.detailsSize;
            console.log(`   Section ${section.section}: ${(section.dataSize / 1024).toFixed(1)}KB data + ${(section.detailsSize / 1024).toFixed(1)}KB details`);
        });

        console.log(`Total size: ${((totalDataSize + totalDetailsSize) / 1024).toFixed(1)}KB`);
        console.log(`   Data files: ${(totalDataSize / 1024).toFixed(1)}KB`);
        console.log(`   Details files: ${(totalDetailsSize / 1024).toFixed(1)}KB`);

        // Save report
        const report = {
            timestamp: new Date().toISOString(),
            totalSections: this.compiled.length,
            totalSize: totalDataSize + totalDetailsSize,
            sections: this.compiled
        };

        const reportPath = path.join(this.outputDir, 'compilation-report.json');
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`📝 Report saved to ${reportPath}`);
    }
}

// CLI usage
if (require.main === module) {
    const compiler = new ContentCompiler();
    
    const contentDir = process.argv[2] || '../content';
    const outputDir = process.argv[3] || '../js';

    console.log('🔧 CCNA Content Compiler');
    console.log('=========================');

    compiler.compileDirectory(contentDir, outputDir)
        .then(success => {
            console.log(success ? '\n✅ Compilation completed successfully!' : '\n❌ Compilation failed');
            process.exit(success ? 0 : 1);
        })
        .catch(error => {
            console.error('❌ Compilation error:', error);
            process.exit(1);
        });
}

module.exports = ContentCompiler;