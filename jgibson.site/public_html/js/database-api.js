/**
 * CCNA Database API Layer
 * Provides dynamic content loading from SQLite database
 * Maintains Split Horizon card design system and progress tracking
 * Created: September 19, 2025
 */

class CCNADatabaseAPI {
    constructor() {
        this.cache = new Map();
        this.loadingStates = new Set();
    }

    /**
     * Execute SQL query against the database
     * @param {string} query - SQL query to execute
     * @param {Array} params - Query parameters
     * @returns {Promise<Array>} Query results
     */
    async executeQuery(query, params = []) {
        try {
            const response = await fetch('/api/database.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query, params })
            });

            if (!response.ok) {
                throw new Error(`Database query failed: ${response.status}`);
            }

            const result = await response.json();
            return result.data || [];
        } catch (error) {
            console.error('Database query error:', error);
            throw error;
        }
    }

    /**
     * Get all topics for a specific section
     * @param {string} sectionNumber - Section number (e.g., '1.0')
     * @returns {Promise<Array>} Section topics grouped by subsection
     */
    async getSectionTopics(sectionNumber) {
        const cacheKey = `section_${sectionNumber}`;
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        const query = `
            SELECT 
                s.subsection_number,
                s.title as subsection_title,
                t.id,
                t.title,
                t.slug,
                t.description,
                t.visual_diagram,
                t.difficulty_level,
                t.estimated_time_minutes,
                t.order_index
            FROM topics t
            JOIN subsections s ON t.subsection_id = s.id
            JOIN sections sec ON s.section_id = sec.id
            WHERE sec.section_number = ?
            ORDER BY s.order_index, t.order_index
        `;

        const topics = await this.executeQuery(query, [sectionNumber]);
        
        // Group topics by subsection
        const groupedTopics = {};
        topics.forEach(topic => {
            const subsection = topic.subsection_number;
            if (!groupedTopics[subsection]) {
                groupedTopics[subsection] = {
                    title: topic.subsection_title,
                    topics: []
                };
            }
            groupedTopics[subsection].topics.push({
                id: topic.id,
                title: topic.title,
                slug: topic.slug,
                description: topic.description,
                visual: topic.visual_diagram,
                difficulty: topic.difficulty_level,
                estimatedTime: topic.estimated_time_minutes
            });
        });

        this.cache.set(cacheKey, groupedTopics);
        return groupedTopics;
    }

    /**
     * Get detailed content for a specific topic
     * @param {string} slug - Topic slug identifier
     * @returns {Promise<Object>} Topic content with Split Horizon sections
     */
    async getTopicContent(slug) {
        const cacheKey = `topic_${slug}`;
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        const query = `
            SELECT 
                t.title,
                t.description,
                t.principles_content,
                t.examples_content,
                t.configuration_content,
                t.tips_content,
                t.visual_diagram,
                t.difficulty_level,
                t.estimated_time_minutes,
                s.subsection_number,
                s.title as subsection_title
            FROM topics t
            JOIN subsections s ON t.subsection_id = s.id
            WHERE t.slug = ?
        `;

        const results = await this.executeQuery(query, [slug]);
        
        if (results.length === 0) {
            throw new Error(`Topic not found: ${slug}`);
        }

        const topic = results[0];
        const content = {
            title: topic.title,
            description: topic.description,
            subsection: {
                number: topic.subsection_number,
                title: topic.subsection_title
            },
            visual: topic.visual_diagram,
            difficulty: topic.difficulty_level,
            estimatedTime: topic.estimated_time_minutes,
            content: {
                principles: topic.principles_content || '',
                examples: topic.examples_content || '',
                configuration: topic.configuration_content || '',
                tips: topic.tips_content || ''
            }
        };

        this.cache.set(cacheKey, content);
        return content;
    }

    /**
     * Generate Split Horizon card HTML from topic data
     * @param {Object} topic - Topic data object
     * @param {string} subsectionNumber - Subsection number for styling
     * @returns {string} HTML for the topic card
     */
    generateTopicCard(topic, subsectionNumber) {
        // Color mapping for different subsections
        const colorMap = {
            '1.1': 'bg-blue-900/50 border-blue-500/30',
            '1.2': 'bg-purple-900/50 border-purple-500/30',
            '1.3': 'bg-green-900/50 border-green-500/30',
            '1.4': 'bg-yellow-900/50 border-yellow-500/30',
            '1.5': 'bg-red-900/50 border-red-500/30',
            '1.6': 'bg-indigo-900/50 border-indigo-500/30',
            '1.7': 'bg-pink-900/50 border-pink-500/30',
            '1.8': 'bg-cyan-900/50 border-cyan-500/30',
            '1.9': 'bg-orange-900/50 border-orange-500/30',
            '1.10': 'bg-teal-900/50 border-teal-500/30',
            '1.11': 'bg-lime-900/50 border-lime-500/30',
            '1.12': 'bg-rose-900/50 border-rose-500/30',
            '1.13': 'bg-violet-900/50 border-violet-500/30'
        };

        const cardColor = colorMap[subsectionNumber] || 'bg-slate-900/50 border-slate-500/30';

        return `
            <div class="topic-card ${cardColor} border rounded-lg p-4 hover:border-opacity-60 transition-all duration-300 cursor-pointer"
                 data-topic-slug="${topic.slug}"
                 onclick="openTopicModal('${topic.slug}')">
                <div class="flex items-start justify-between mb-3">
                    <h3 class="text-lg font-semibold text-slate-200 leading-tight">${topic.title.replace(' - CCNA 200-301 Guide', '')}</h3>
                    <div class="flex items-center gap-2 ml-3">
                        <span class="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300">${topic.difficulty}</span>
                        <span class="text-xs text-slate-400">${topic.estimatedTime}min</span>
                    </div>
                </div>
                
                <div class="visual-container mb-3 h-20 flex items-center justify-center bg-slate-800/30 rounded">
                    ${topic.visual || '<div class="text-slate-500 text-sm">Visual Diagram</div>'}
                </div>

                <p class="text-sm text-slate-300 leading-relaxed">${topic.description}</p>
                
                <div class="mt-3 pt-3 border-t border-slate-700/50">
                    <div class="flex items-center justify-between text-xs text-slate-400">
                        <span>Section ${subsectionNumber}</span>
                        <span class="flex items-center gap-1">
                            <i class="fas fa-book-open"></i>
                            Study Guide
                        </span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Generate Split Horizon content modal HTML
     * @param {Object} topicContent - Full topic content data
     * @returns {string} HTML for the modal content
     */
    generateTopicModal(topicContent) {
        const { content } = topicContent;
        
        return `
            <div class="modal-header mb-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-100 mb-2">${topicContent.title.replace(' - CCNA 200-301 Guide', '')}</h2>
                        <div class="flex items-center gap-4 text-sm text-slate-400">
                            <span>Section ${topicContent.subsection.number}</span>
                            <span class="flex items-center gap-1">
                                <i class="fas fa-clock"></i>
                                ${topicContent.estimatedTime} minutes
                            </span>
                            <span class="px-2 py-1 rounded bg-slate-700 text-slate-300">${topicContent.difficulty}</span>
                        </div>
                    </div>
                    <button onclick="closeTopicModal()" class="text-slate-400 hover:text-slate-200 text-xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <p class="text-slate-300 mt-3">${topicContent.description}</p>
            </div>

            ${topicContent.visual ? `
                <div class="visual-section mb-6">
                    <div class="bg-slate-800/30 rounded-lg p-4 h-32 flex items-center justify-center">
                        ${topicContent.visual}
                    </div>
                </div>
            ` : ''}

            <div class="split-horizon-content space-y-6">
                ${content.principles ? `
                    <div class="content-section principles">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-3 h-3 rounded bg-blue-500"></div>
                            <h3 class="text-lg font-semibold text-blue-400">Core Principles</h3>
                        </div>
                        <div class="content-body text-slate-300 leading-relaxed">
                            ${content.principles}
                        </div>
                    </div>
                ` : ''}

                ${content.examples ? `
                    <div class="content-section examples">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-3 h-3 rounded bg-green-500"></div>
                            <h3 class="text-lg font-semibold text-green-400">Examples & Scenarios</h3>
                        </div>
                        <div class="content-body text-slate-300 leading-relaxed">
                            ${content.examples}
                        </div>
                    </div>
                ` : ''}

                ${content.configuration ? `
                    <div class="content-section configuration">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-3 h-3 rounded bg-yellow-500"></div>
                            <h3 class="text-lg font-semibold text-yellow-400">Configuration & Commands</h3>
                        </div>
                        <div class="content-body text-slate-300 leading-relaxed">
                            ${content.configuration}
                        </div>
                    </div>
                ` : ''}

                ${content.tips ? `
                    <div class="content-section tips">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-3 h-3 rounded bg-purple-500"></div>
                            <h3 class="text-lg font-semibold text-purple-400">Exam Tips & Best Practices</h3>
                        </div>
                        <div class="content-body text-slate-300 leading-relaxed">
                            ${content.tips}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    /**
     * Load and render all topics for a section
     * @param {string} sectionNumber - Section number to load
     * @param {Object} containerIds - Object mapping subsection numbers to container IDs
     */
    async loadSectionContent(sectionNumber, containerIds) {
        if (this.loadingStates.has(sectionNumber)) {
            return; // Already loading
        }

        this.loadingStates.add(sectionNumber);

        try {
            const sectionData = await this.getSectionTopics(sectionNumber);

            // Render topics for each subsection
            Object.entries(sectionData).forEach(([subsectionNumber, subsectionData]) => {
                const containerId = containerIds[subsectionNumber];
                const container = document.getElementById(containerId);
                
                if (container) {
                    // Clear loading state
                    container.innerHTML = '';
                    
                    // Generate and insert topic cards
                    const cardsHTML = subsectionData.topics
                        .map(topic => this.generateTopicCard(topic, subsectionNumber))
                        .join('');
                    
                    container.innerHTML = cardsHTML;
                }
            });

            console.log(`✅ Loaded ${Object.keys(sectionData).length} subsections for Section ${sectionNumber}`);
            
        } catch (error) {
            console.error(`Failed to load section ${sectionNumber}:`, error);
            // Show error state in containers
            Object.values(containerIds).forEach(containerId => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = `
                        <div class="error-state p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-center">
                            <i class="fas fa-exclamation-triangle text-red-400 text-2xl mb-2"></i>
                            <p class="text-red-300">Failed to load content</p>
                            <button onclick="ccnaAPI.loadSectionContent('${sectionNumber}', ${JSON.stringify(containerIds)})" 
                                    class="mt-2 px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-sm">
                                Retry
                            </button>
                        </div>
                    `;
                }
            });
        } finally {
            this.loadingStates.delete(sectionNumber);
        }
    }

    /**
     * Clear cache for development/testing
     */
    clearCache() {
        this.cache.clear();
        console.log('🗑️ Database API cache cleared');
    }
}

// Global API instance
window.ccnaAPI = new CCNADatabaseAPI();

/**
 * Global modal functions for topic interaction
 */
let currentTopicModal = null;

async function openTopicModal(slug) {
    try {
        // Show loading state
        showModalLoading();
        
        // Get topic content
        const topicContent = await ccnaAPI.getTopicContent(slug);
        
        // Generate and show modal
        const modalHTML = ccnaAPI.generateTopicModal(topicContent);
        showTopicModal(modalHTML);
        
        // Update progress tracking if available
        if (window.progressTracker) {
            progressTracker.markTopicCompleted(topicContent.title.replace(' - CCNA 200-301 Guide', ''));
            progressTracker.updateAllProgressBars();
        }
        
    } catch (error) {
        console.error('Failed to open topic modal:', error);
        showModalError('Failed to load topic content');
    }
}

function showModalLoading() {
    const modal = document.getElementById('topicModal');
    const modalContent = document.getElementById('modalContent');
    
    if (modal && modalContent) {
        modalContent.innerHTML = `
            <div class="loading-state text-center py-12">
                <div class="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p class="text-slate-400">Loading topic content...</p>
            </div>
        `;
        modal.classList.add('visible');
        setTimeout(() => modalContent.classList.add('visible'), 10);
    }
}

function showTopicModal(content) {
    const modal = document.getElementById('topicModal');
    const modalContent = document.getElementById('modalContent');
    
    if (modal && modalContent) {
        modalContent.innerHTML = content;
        modal.classList.add('visible');
        setTimeout(() => modalContent.classList.add('visible'), 10);
        currentTopicModal = modal;
    }
}

function showModalError(message) {
    const modal = document.getElementById('topicModal');
    const modalContent = document.getElementById('modalContent');
    
    if (modal && modalContent) {
        modalContent.innerHTML = `
            <div class="error-state text-center py-12">
                <i class="fas fa-exclamation-triangle text-red-400 text-3xl mb-4"></i>
                <p class="text-red-300 mb-4">${message}</p>
                <button onclick="closeTopicModal()" class="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded">
                    Close
                </button>
            </div>
        `;
        modal.classList.add('visible');
        setTimeout(() => modalContent.classList.add('visible'), 10);
    }
}

function closeTopicModal() {
    if (currentTopicModal) {
        const modalContent = currentTopicModal.querySelector('#modalContent');
        if (modalContent) {
            modalContent.classList.remove('visible');
        }
        
        setTimeout(() => {
            currentTopicModal.classList.remove('visible');
            currentTopicModal = null;
        }, 300);
    }
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentTopicModal) {
        closeTopicModal();
    }
});

console.log('🚀 CCNA Database API loaded successfully');