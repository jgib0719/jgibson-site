#!/usr/bin/env node
/**
 * Search Indexer - CCNA Study Guide
 * Builds search index from unified content for fast topic discovery
 * Generates optimized search data for client-side search
 */

const fs = require('fs');
const path = require('path');

class SearchIndexer {
    constructor() {
        this.index = {
            topics: [],
            tags: {},
            sections: {},
            searchTerms: {},
            metadata: {
                totalTopics: 0,
                totalSections: 0,
                buildTime: null,
                version: '1.0'
            }
        };
        this.stopWords = new Set([
            'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'in', 'is', 'it', 'of', 'on', 'that', 'the', 'to', 'was', 'will', 'with'
        ]);
    }

    /**
     * Index a single section content file
     */
    indexSection(jsonPath) {
        const fileName = path.basename(jsonPath, '.json');
        const sectionNumber = parseInt(fileName.replace(/[^0-9]/g, ''));
        
        console.log(`🔍 Indexing section ${sectionNumber}...`);

        try {
            const content = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            const { metadata, subsections } = content;

            // Index section metadata
            this.index.sections[sectionNumber] = {
                title: metadata.title,
                examFocus: metadata.examFocus || [],
                subsections: Object.keys(subsections)
            };

            // Index all topics
            for (const [subsectionKey, subsection] of Object.entries(subsections)) {
                for (const topic of subsection.topics) {
                    const indexedTopic = this.indexTopic(topic, sectionNumber, subsectionKey, subsection.title);
                    this.index.topics.push(indexedTopic);
                }
            }

            this.index.metadata.totalSections++;
            console.log(`✅ Section ${sectionNumber} indexed`);
            return true;

        } catch (error) {
            console.error(`❌ Failed to index ${fileName}:`, error.message);
            return false;
        }
    }

    /**
     * Index individual topic for search
     */
    indexTopic(topic, sectionNumber, subsectionKey, subsectionTitle) {
        // Extract searchable text
        const searchableText = this.extractSearchableText(topic);
        const searchTerms = this.extractSearchTerms(searchableText);

        // Build topic index entry
        const indexedTopic = {
            id: topic.id,
            title: topic.title,
            summary: topic.summary,
            section: sectionNumber,
            subsection: subsectionKey,
            subsectionTitle: subsectionTitle,
            difficulty: topic.difficulty || 'intermediate',
            tags: topic.tags || [],
            searchTerms: searchTerms,
            searchScore: 0, // Will be calculated during search
            url: `/guide/section.html?section=${sectionNumber}#${topic.id}`
        };

        // Index tags
        (topic.tags || []).forEach(tag => {
            if (!this.index.tags[tag]) {
                this.index.tags[tag] = [];
            }
            this.index.tags[tag].push(indexedTopic.id);
        });

        // Index search terms
        searchTerms.forEach(term => {
            if (!this.index.searchTerms[term]) {
                this.index.searchTerms[term] = [];
            }
            this.index.searchTerms[term].push({
                topicId: indexedTopic.id,
                section: sectionNumber,
                weight: this.calculateTermWeight(term, topic)
            });
        });

        this.index.metadata.totalTopics++;
        return indexedTopic;
    }

    /**
     * Extract searchable text from topic content
     */
    extractSearchableText(topic) {
        let text = `${topic.title} ${topic.summary}`;
        
        // Extract text from HTML content
        const htmlContent = topic.content.overview || '';
        const textContent = htmlContent
            .replace(/<[^>]*>/g, ' ') // Remove HTML tags
            .replace(/\s+/g, ' ')     // Normalize whitespace
            .trim();
        
        text += ` ${textContent}`;

        // Add exam tips
        if (topic.content.examTips) {
            text += ` ${topic.content.examTips.join(' ')}`;
        }

        // Add command descriptions
        if (topic.content.commands) {
            const commandText = topic.content.commands
                .map(cmd => `${cmd.command} ${cmd.description}`)
                .join(' ');
            text += ` ${commandText}`;
        }

        return text.toLowerCase();
    }

    /**
     * Extract search terms from text
     */
    extractSearchTerms(text) {
        const terms = text
            .replace(/[^\w\s-]/g, ' ')  // Remove punctuation except hyphens
            .split(/\s+/)               // Split on whitespace
            .filter(term => 
                term.length > 2 &&      // Minimum length
                !this.stopWords.has(term) && // Not a stop word
                !/^\d+$/.test(term)     // Not just numbers
            );

        // Add bigrams for better search
        const bigrams = [];
        for (let i = 0; i < terms.length - 1; i++) {
            bigrams.push(`${terms[i]} ${terms[i + 1]}`);
        }

        return [...new Set([...terms, ...bigrams])]; // Remove duplicates
    }

    /**
     * Calculate term weight for search ranking
     */
    calculateTermWeight(term, topic) {
        let weight = 1;

        // Higher weight for title matches
        if (topic.title.toLowerCase().includes(term)) {
            weight += 3;
        }

        // Higher weight for summary matches
        if (topic.summary.toLowerCase().includes(term)) {
            weight += 2;
        }

        // Higher weight for tags
        if (topic.tags && topic.tags.some(tag => tag.toLowerCase().includes(term))) {
            weight += 2;
        }

        // Higher weight for exact matches
        if (topic.title.toLowerCase() === term || topic.summary.toLowerCase().includes(` ${term} `)) {
            weight += 2;
        }

        return weight;
    }

    /**
     * Index all content files and generate search data
     */
    async buildIndex(contentDir, outputDir) {
        console.log(`🚀 Building search index`);
        console.log(`Source: ${contentDir}`);
        console.log(`Output: ${outputDir}`);

        const files = fs.readdirSync(contentDir)
            .filter(file => file.endsWith('.json') && file.startsWith('section'))
            .sort();

        if (files.length === 0) {
            console.warn('⚠️  No section content files found');
            return false;
        }

        // Index all sections
        let allIndexed = true;
        for (const file of files) {
            const filePath = path.join(contentDir, file);
            const success = this.indexSection(filePath);
            if (!success) allIndexed = false;
        }

        if (!allIndexed) {
            console.error('❌ Failed to index some sections');
            return false;
        }

        // Finalize index
        this.index.metadata.buildTime = new Date().toISOString();

        // Generate search files
        await this.generateSearchFiles(outputDir);
        
        console.log('\n📊 Search Index Summary:');
        console.log(`Topics indexed: ${this.index.metadata.totalTopics}`);
        console.log(`Sections indexed: ${this.index.metadata.totalSections}`);
        console.log(`Unique tags: ${Object.keys(this.index.tags).length}`);
        console.log(`Search terms: ${Object.keys(this.index.searchTerms).length}`);

        return true;
    }

    /**
     * Generate optimized search files for client-side use
     */
    async generateSearchFiles(outputDir) {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Main search index (for search functionality)
        const searchIndexContent = `/**
 * CCNA Study Guide - Search Index
 * Generated on ${new Date().toISOString()}
 * Optimized for fast client-side search
 */

const CCNA_SEARCH_INDEX = ${JSON.stringify(this.index, null, 2)};

// Export for use in search functionality
if (typeof window !== 'undefined') {
    window.CCNA_SEARCH_INDEX = CCNA_SEARCH_INDEX;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CCNA_SEARCH_INDEX;
}`;

        const searchIndexPath = path.join(outputDir, 'search-index.js');
        fs.writeFileSync(searchIndexPath, searchIndexContent);

        // Topic directory (for quick navigation)
        const topicDirectory = {
            sections: this.index.sections,
            topics: this.index.topics.map(topic => ({
                id: topic.id,
                title: topic.title,
                summary: topic.summary,
                section: topic.section,
                subsectionTitle: topic.subsectionTitle,
                difficulty: topic.difficulty,
                url: topic.url
            })),
            tags: Object.keys(this.index.tags).sort(),
            metadata: this.index.metadata
        };

        const directoryContent = `/**
 * CCNA Study Guide - Topic Directory
 * Generated on ${new Date().toISOString()}
 * Lightweight directory for navigation
 */

const CCNA_TOPIC_DIRECTORY = ${JSON.stringify(topicDirectory, null, 2)};

// Export for use in navigation
if (typeof window !== 'undefined') {
    window.CCNA_TOPIC_DIRECTORY = CCNA_TOPIC_DIRECTORY;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CCNA_TOPIC_DIRECTORY;
}`;

        const directoryPath = path.join(outputDir, 'topic-directory.js');
        fs.writeFileSync(directoryPath, directoryContent);

        console.log(`📝 Search files generated:`);
        console.log(`   - ${searchIndexPath} (${(fs.statSync(searchIndexPath).size / 1024).toFixed(1)}KB)`);
        console.log(`   - ${directoryPath} (${(fs.statSync(directoryPath).size / 1024).toFixed(1)}KB)`);
    }
}

// CLI usage
if (require.main === module) {
    const indexer = new SearchIndexer();
    
    const contentDir = process.argv[2] || '../content';
    const outputDir = process.argv[3] || '../js';

    console.log('🔧 CCNA Search Indexer');
    console.log('=======================');

    indexer.buildIndex(contentDir, outputDir)
        .then(success => {
            console.log(success ? '\n✅ Search index built successfully!' : '\n❌ Indexing failed');
            process.exit(success ? 0 : 1);
        })
        .catch(error => {
            console.error('❌ Indexing error:', error);
            process.exit(1);
        });
}

module.exports = SearchIndexer;