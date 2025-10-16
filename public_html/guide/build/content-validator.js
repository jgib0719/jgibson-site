#!/usr/bin/env node
/**
 * Content Validator - CCNA Study Guide
 * Validates unified JSON content files against schema
 * Ensures content integrity before compilation
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

class ContentValidator {
    constructor() {
        this.ajv = new Ajv({ allErrors: true, verbose: true });
        addFormats(this.ajv);
        this.schema = null;
        this.errors = [];
        this.warnings = [];
    }

    /**
     * Load and compile the JSON schema
     */
    loadSchema(schemaPath) {
        try {
            const schemaContent = fs.readFileSync(schemaPath, 'utf8');
            this.schema = JSON.parse(schemaContent);
            this.validateSchema = this.ajv.compile(this.schema);
            console.log('✅ Schema loaded and compiled successfully');
            return true;
        } catch (error) {
            console.error('❌ Failed to load schema:', error.message);
            return false;
        }
    }

    /**
     * Validate a single content file
     */
    validateFile(filePath) {
        const fileName = path.basename(filePath);
        console.log(`🔍 Validating ${fileName}...`);

        try {
            // Read and parse JSON
            const content = fs.readFileSync(filePath, 'utf8');
            const data = JSON.parse(content);

            // Schema validation
            const isValid = this.validateSchema(data);
            
            if (!isValid) {
                this.errors.push({
                    file: fileName,
                    type: 'schema',
                    errors: this.validateSchema.errors
                });
                console.error(`❌ Schema validation failed for ${fileName}`);
                this.validateSchema.errors.forEach(error => {
                    console.error(`   - ${error.instancePath}: ${error.message}`);
                });
                return false;
            }

            // Content-specific validations
            const contentErrors = this.validateContent(data, fileName);
            if (contentErrors.length > 0) {
                this.errors.push({
                    file: fileName,
                    type: 'content',
                    errors: contentErrors
                });
                return false;
            }

            console.log(`✅ ${fileName} is valid`);
            return true;

        } catch (error) {
            this.errors.push({
                file: fileName,
                type: 'parse',
                error: error.message
            });
            console.error(`❌ Failed to parse ${fileName}:`, error.message);
            return false;
        }
    }

    /**
     * Perform content-specific validations beyond schema
     */
    validateContent(data, fileName) {
        const errors = [];

        // Check if section number matches filename
        const expectedSection = parseInt(fileName.replace(/[^0-9]/g, ''));
        if (data.metadata.sectionNumber !== expectedSection) {
            errors.push(`Section number ${data.metadata.sectionNumber} doesn't match filename (expected ${expectedSection})`);
        }

        // Validate SVG content
        for (const subsectionKey in data.subsections) {
            const subsection = data.subsections[subsectionKey];
            subsection.topics.forEach((topic, index) => {
                // Check SVG structure
                if (!topic.visual.includes('<svg') || !topic.visual.includes('</svg>')) {
                    errors.push(`Topic "${topic.title}" in ${subsectionKey}: Invalid SVG structure`);
                }

                // Check for accessibility
                if (!topic.visual.includes('<title>')) {
                    this.warnings.push(`Topic "${topic.title}" in ${subsectionKey}: Missing SVG title for accessibility`);
                }

                // Validate content HTML
                if (topic.content.overview.includes('<script')) {
                    errors.push(`Topic "${topic.title}" in ${subsectionKey}: Script tags not allowed in content`);
                }

                // Check for inline styles (CSP compliance)
                if (topic.content.overview.includes('style=')) {
                    this.warnings.push(`Topic "${topic.title}" in ${subsectionKey}: Inline styles found - consider using CSS classes`);
                }
            });
        }

        return errors;
    }

    /**
     * Validate all content files in a directory
     */
    validateDirectory(contentDir) {
        console.log(`🚀 Starting content validation in ${contentDir}`);
        
        const files = fs.readdirSync(contentDir)
            .filter(file => file.endsWith('.json') && file.startsWith('section'))
            .sort();

        if (files.length === 0) {
            console.warn('⚠️  No section content files found');
            return false;
        }

        let allValid = true;
        files.forEach(file => {
            const filePath = path.join(contentDir, file);
            const isValid = this.validateFile(filePath);
            if (!isValid) allValid = false;
        });

        // Report summary
        console.log('\n📊 Validation Summary:');
        console.log(`Files checked: ${files.length}`);
        console.log(`Errors: ${this.errors.length}`);
        console.log(`Warnings: ${this.warnings.length}`);

        if (this.warnings.length > 0) {
            console.log('\n⚠️  Warnings:');
            this.warnings.forEach(warning => console.log(`   - ${warning}`));
        }

        if (allValid) {
            console.log('\n✅ All content files are valid!');
        } else {
            console.log('\n❌ Validation failed - fix errors before proceeding');
        }

        return allValid;
    }

    /**
     * Generate validation report
     */
    generateReport(outputPath) {
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                totalErrors: this.errors.length,
                totalWarnings: this.warnings.length,
                status: this.errors.length === 0 ? 'PASS' : 'FAIL'
            },
            errors: this.errors,
            warnings: this.warnings
        };

        fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
        console.log(`📝 Validation report saved to ${outputPath}`);
    }
}

// CLI usage
if (require.main === module) {
    const validator = new ContentValidator();
    
    const schemaPath = process.argv[2] || '../content/schema.json';
    const contentDir = process.argv[3] || '../content';
    const reportPath = process.argv[4] || './validation-report.json';

    console.log('🔧 CCNA Content Validator');
    console.log('=========================');

    // Load schema
    if (!validator.loadSchema(schemaPath)) {
        process.exit(1);
    }

    // Validate content
    const success = validator.validateDirectory(contentDir);
    
    // Generate report
    validator.generateReport(reportPath);

    // Exit with appropriate code
    process.exit(success ? 0 : 1);
}

module.exports = ContentValidator;