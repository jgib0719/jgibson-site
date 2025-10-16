#!/usr/bin/env node
/**
 * CCNA Content Build Pipeline
 * Validates, compiles, and indexes unified content files
 * Single command to transform JSON content into production-ready JS files
 */

const path = require('path');
const fs = require('fs');
const ContentValidator = require('./content-validator');
const ContentCompiler = require('./content-compiler');
const SearchIndexer = require('./search-indexer');

class ContentBuildPipeline {
    constructor() {
        this.validator = new ContentValidator();
        this.compiler = new ContentCompiler();
        this.indexer = new SearchIndexer();
        this.config = {
            contentDir: path.resolve(__dirname, '../content'),
            outputDir: path.resolve(__dirname, '../js'),
            schemaPath: path.resolve(__dirname, '../content/schema.json'),
            reportDir: path.resolve(__dirname, './reports')
        };
    }

    /**
     * Run complete build pipeline
     */
    async build(options = {}) {
        console.log('🚀 Starting CCNA Content Build Pipeline');
        console.log('==========================================');
        
        // Override config with options
        this.config = { ...this.config, ...options };
        
        // Ensure directories exist
        this.ensureDirectories();
        
        try {
            // Step 1: Validate content
            console.log('\n📋 Step 1: Content Validation');
            console.log('------------------------------');
            
            if (!this.validator.loadSchema(this.config.schemaPath)) {
                throw new Error('Failed to load content schema');
            }
            
            const validationSuccess = this.validator.validateDirectory(this.config.contentDir);
            this.validator.generateReport(path.join(this.config.reportDir, 'validation-report.json'));
            
            if (!validationSuccess) {
                throw new Error('Content validation failed - fix errors before proceeding');
            }
            
            // Step 2: Compile content
            console.log('\n🔧 Step 2: Content Compilation');
            console.log('-------------------------------');
            
            const compilationSuccess = await this.compiler.compileDirectory(
                this.config.contentDir, 
                this.config.outputDir
            );
            
            if (!compilationSuccess) {
                throw new Error('Content compilation failed');
            }
            
            // Step 3: Build search index
            console.log('\n🔍 Step 3: Search Index Generation');
            console.log('-----------------------------------');
            
            const indexingSuccess = await this.indexer.buildIndex(
                this.config.contentDir,
                this.config.outputDir
            );
            
            if (!indexingSuccess) {
                throw new Error('Search indexing failed');
            }
            
            // Step 4: Generate final report
            console.log('\n📊 Step 4: Build Summary');
            console.log('-------------------------');
            
            this.generateBuildReport();
            
            console.log('\n✅ Build pipeline completed successfully!');
            console.log('🎉 Content is ready for production deployment');
            
            return true;
            
        } catch (error) {
            console.error('\n❌ Build pipeline failed:', error.message);
            return false;
        }
    }

    /**
     * Ensure required directories exist
     */
    ensureDirectories() {
        const dirs = [
            this.config.outputDir,
            this.config.reportDir
        ];
        
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
                console.log(`📁 Created directory: ${dir}`);
            }
        });
    }

    /**
     * Generate comprehensive build report
     */
    generateBuildReport() {
        const buildReport = {
            buildTime: new Date().toISOString(),
            pipeline: {
                validation: {
                    errors: this.validator.errors.length,
                    warnings: this.validator.warnings.length,
                    status: this.validator.errors.length === 0 ? 'PASS' : 'FAIL'
                },
                compilation: {
                    sectionsCompiled: this.compiler.compiled.length,
                    totalSize: this.compiler.compiled.reduce((total, section) => 
                        total + section.dataSize + section.detailsSize, 0),
                    status: 'PASS'
                },
                indexing: {
                    topicsIndexed: this.indexer.index.metadata.totalTopics,
                    sectionsIndexed: this.indexer.index.metadata.totalSections,
                    searchTerms: Object.keys(this.indexer.index.searchTerms).length,
                    status: 'PASS'
                }
            },
            files: {
                input: this.getInputFiles(),
                output: this.getOutputFiles()
            },
            performance: this.getPerformanceMetrics()
        };

        const reportPath = path.join(this.config.reportDir, 'build-report.json');
        fs.writeFileSync(reportPath, JSON.stringify(buildReport, null, 2));
        
        console.log(`📝 Build report saved to: ${reportPath}`);
        console.log(`📊 Files processed: ${buildReport.files.input.length} → ${buildReport.files.output.length}`);
        console.log(`💾 Total output size: ${(buildReport.pipeline.compilation.totalSize / 1024).toFixed(1)}KB`);
        console.log(`🔍 Search terms indexed: ${buildReport.pipeline.indexing.searchTerms}`);
    }

    /**
     * Get list of input files
     */
    getInputFiles() {
        try {
            return fs.readdirSync(this.config.contentDir)
                .filter(file => file.endsWith('.json') && file.startsWith('section'))
                .map(file => ({
                    name: file,
                    size: fs.statSync(path.join(this.config.contentDir, file)).size
                }));
        } catch (error) {
            return [];
        }
    }

    /**
     * Get list of output files
     */
    getOutputFiles() {
        try {
            return fs.readdirSync(this.config.outputDir)
                .filter(file => file.endsWith('.js'))
                .map(file => ({
                    name: file,
                    size: fs.statSync(path.join(this.config.outputDir, file)).size
                }));
        } catch (error) {
            return [];
        }
    }

    /**
     * Calculate performance metrics
     */
    getPerformanceMetrics() {
        const inputFiles = this.getInputFiles();
        const outputFiles = this.getOutputFiles();
        
        const inputSize = inputFiles.reduce((total, file) => total + file.size, 0);
        const outputSize = outputFiles.reduce((total, file) => total + file.size, 0);
        
        return {
            inputSize,
            outputSize,
            compressionRatio: inputSize > 0 ? (outputSize / inputSize).toFixed(2) : 0,
            filesGenerated: outputFiles.length
        };
    }

    /**
     * Development mode - watch for changes and rebuild
     */
    async watch() {
        console.log('👀 Starting content watch mode...');
        console.log('Press Ctrl+C to stop watching');
        
        const chokidar = require('chokidar');
        
        const watcher = chokidar.watch(
            path.join(this.config.contentDir, '*.json'),
            { persistent: true }
        );
        
        watcher.on('change', async (filePath) => {
            console.log(`\n🔄 File changed: ${path.basename(filePath)}`);
            console.log('Rebuilding...');
            
            await this.build();
            console.log('✅ Rebuild complete. Watching for changes...\n');
        });

        // Initial build
        await this.build();
        console.log('✅ Initial build complete. Watching for changes...\n');
    }
}

// CLI usage
if (require.main === module) {
    const pipeline = new ContentBuildPipeline();
    
    const command = process.argv[2] || 'build';
    const contentDir = process.argv[3];
    const outputDir = process.argv[4];
    
    const options = {};
    if (contentDir) options.contentDir = path.resolve(contentDir);
    if (outputDir) options.outputDir = path.resolve(outputDir);
    
    console.log('🔧 CCNA Content Build Pipeline v1.0');
    console.log('====================================');
    
    switch (command) {
        case 'build':
            pipeline.build(options)
                .then(success => process.exit(success ? 0 : 1))
                .catch(error => {
                    console.error('Build error:', error);
                    process.exit(1);
                });
            break;
            
        case 'watch':
            pipeline.watch().catch(error => {
                console.error('Watch error:', error);
                process.exit(1);
            });
            break;
            
        default:
            console.log('Usage: node build-pipeline.js [build|watch] [contentDir] [outputDir]');
            process.exit(1);
    }
}

module.exports = ContentBuildPipeline;