/**
 * Security Utilities for CCNA Quiz Application
 * Provides XSS protection, input sanitization, and security helpers
 */

class CCNASecurityUtils {
    static instance = null;

    constructor() {
        if (CCNASecurityUtils.instance) {
            return CCNASecurityUtils.instance;
        }

        // Initialize DOMPurify if available, otherwise use fallback
        this.domPurify = window.DOMPurify || null;
        this.initializeFallbackSanitizer();

        CCNASecurityUtils.instance = this;
    }

    /**
     * Initialize fallback HTML sanitizer for environments without DOMPurify
     */
    initializeFallbackSanitizer() {
        if (!this.domPurify) {
            this.fallbackSanitizer = {
                // Basic HTML entities that need escaping
                htmlEntities: {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#x27;',
                    '/': '&#x2F;'
                },

                // Allowed HTML tags for content (very restrictive)
                allowedTags: new Set(['b', 'i', 'em', 'strong', 'code', 'pre', 'br']),

                // Allowed attributes (minimal set)
                allowedAttributes: new Set(['class'])
            };
        }
    }

    /**
     * Sanitize HTML content to prevent XSS attacks
     * @param {string} html - HTML content to sanitize
     * @param {object} options - Sanitization options
     * @returns {string} Sanitized HTML content
     */
    sanitizeHTML(html, options = {}) {
        if (typeof html !== 'string') {
            return '';
        }

        const config = {
            ALLOWED_TAGS: options.allowedTags || ['b', 'i', 'em', 'strong', 'code', 'pre', 'br', 'p', 'div', 'span', 'button', 'h1', 'h2', 'h3'],
            ALLOWED_ATTR: options.allowedAttributes || ['class', 'id', 'data-answer', 'data-question-image'],
            ALLOW_DATA_ATTR: false,
            FORBID_SCRIPT: true,
            FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input', 'textarea'],
            FORBID_ATTR: ['onclick', 'onload', 'onerror', 'onfocus', 'onblur', 'style'],
            ...options
        };

        if (this.domPurify) {
            return this.domPurify.sanitize(html, config);
        } else {
            return this.fallbackSanitize(html, config);
        }
    }

    /**
     * Fallback HTML sanitization when DOMPurify is not available
     * @param {string} html - HTML to sanitize
     * @param {object} config - Sanitization configuration
     * @returns {string} Sanitized HTML
     */
    fallbackSanitize(html, config) {
        // For quiz content, we need to be less aggressive to allow UI elements
        // First, remove dangerous scripts and handlers
        let sanitized = html
            .replace(/<script[^>]*>.*?<\/script>/gi, '')
            .replace(/\son\w+\s*=/gi, '') // More specific: space + on + word + equals (event handlers)
            .replace(/javascript:/gi, '')
            .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
            .replace(/<object[^>]*>.*?<\/object>/gi, '')
            .replace(/<embed[^>]*>.*?<\/embed>/gi, '');

        // For quiz UI, we need to allow more tags but still be security-conscious
        const allowedTags = config.ALLOWED_TAGS || ['p', 'div', 'span', 'button', 'h1', 'h2', 'h3', 'b', 'i', 'em', 'strong', 'code', 'pre', 'br'];
        const allowedAttributes = config.ALLOWED_ATTR || ['class', 'id', 'data-answer', 'data-question-image'];

        // More specific validation: check for remaining script injection attempts
        if (sanitized.includes('<script') || sanitized.includes('javascript:') || /\son\w+\s*=/.test(sanitized)) {
            console.warn('SECURITY DEBUG: Potentially dangerous HTML detected after initial cleanup, applying aggressive sanitization');
            // Fall back to aggressive escaping if dangerous patterns persist
            return html.replace(/[&<>"'\/]/g, (char) => {
                return this.fallbackSanitizer.htmlEntities[char] || char;
            });
        }

        return sanitized;
    }

    /**
     * Escape HTML entities in text content
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    escapeHTML(text) {
        if (typeof text !== 'string') {
            return '';
        }

        return text.replace(/[&<>"'\/]/g, (char) => {
            const entities = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                '/': '&#x2F;'
            };
            return entities[char] || char;
        });
    }

    /**
     * Safely set innerHTML with automatic sanitization
     * @param {HTMLElement} element - Element to set content on
     * @param {string} html - HTML content to set
     * @param {object} options - Sanitization options
     */
    safeSetHTML(element, html, options = {}) {
            if (!element || typeof element.innerHTML === 'undefined') {
                console.warn('Invalid element provided to safeSetHTML');
                return;
            }

            const sanitizedHTML = this.sanitizeHTML(html, options);
            element.innerHTML = sanitizedHTML;
        }
        /**
         * Safely set text content (always escaped)
         * @param {HTMLElement} element - Element to set content on
         * @param {string} text - Text content to set
         */
    safeSetText(element, text) {
        if (!element) {
            console.warn('Invalid element provided to safeSetText');
            return;
        }

        if (element.textContent !== undefined) {
            element.textContent = text || '';
        } else {
            // Fallback for older browsers
            element.innerText = text || '';
        }
    }

    /**
     * Create a safe DOM element with sanitized content
     * @param {string} tagName - HTML tag name
     * @param {object} attributes - Element attributes
     * @param {string} content - Element content (will be sanitized)
     * @param {boolean} isHTML - Whether content should be treated as HTML or text
     * @returns {HTMLElement} Created element
     */
    createElement(tagName, attributes = {}, content = '', isHTML = false) {
        const element = document.createElement(tagName);

        // Set attributes safely
        Object.entries(attributes).forEach(([key, value]) => {
            // Only allow safe attributes
            const safeAttributes = ['class', 'id', 'data-*', 'aria-*', 'role', 'tabindex'];
            const isSafe = safeAttributes.some(safe =>
                safe.endsWith('*') ? key.startsWith(safe.slice(0, -1)) : key === safe
            );

            if (isSafe && typeof value === 'string') {
                element.setAttribute(key, value);
            }
        });

        // Set content safely
        if (content) {
            if (isHTML) {
                this.safeSetHTML(element, content);
            } else {
                this.safeSetText(element, content);
            }
        }

        return element;
    }

    /**
     * Validate and sanitize URL for safe usage
     * @param {string} url - URL to validate
     * @param {array} allowedProtocols - Allowed URL protocols
     * @returns {string|null} Sanitized URL or null if invalid
     */
    sanitizeURL(url, allowedProtocols = ['http:', 'https:', 'mailto:']) {
        if (typeof url !== 'string' || !url.trim()) {
            return null;
        }

        try {
            const urlObj = new URL(url);

            if (allowedProtocols.includes(urlObj.protocol)) {
                return urlObj.toString();
            } else {
                console.warn(`Blocked URL with disallowed protocol: ${urlObj.protocol}`);
                return null;
            }
        } catch (e) {
            // Invalid URL
            console.warn('Invalid URL provided:', url);
            return null;
        }
    }

    /**
     * Generate Content Security Policy nonce for inline scripts
     * @returns {string} CSP nonce value
     */
    generateCSPNonce() {
        if (crypto && crypto.getRandomValues) {
            const array = new Uint8Array(16);
            crypto.getRandomValues(array);
            return btoa(String.fromCharCode.apply(null, array));
        } else {
            // Fallback for environments without crypto
            return btoa(Math.random().toString(36).substr(2, 16));
        }
    }

    /**
     * Check if content contains potential XSS patterns
     * @param {string} content - Content to check
     * @returns {object} Analysis result with warnings
     */
    analyzeForXSS(content) {
        const analysis = {
            isSafe: true,
            warnings: [],
            blocked: []
        };

        if (typeof content !== 'string') {
            return analysis;
        }

        // Common XSS patterns to detect
        const xssPatterns = [
            { pattern: /<script[^>]*>/i, description: 'Script tag detected' },
            { pattern: /javascript:/i, description: 'JavaScript protocol detected' },
            { pattern: /on\w+\s*=/i, description: 'Inline event handler detected' },
            { pattern: /<iframe[^>]*>/i, description: 'Iframe tag detected' },
            { pattern: /<object[^>]*>/i, description: 'Object tag detected' },
            { pattern: /<embed[^>]*>/i, description: 'Embed tag detected' },
            { pattern: /data:text\/html/i, description: 'Data URL with HTML detected' },
            { pattern: /vbscript:/i, description: 'VBScript protocol detected' }
        ];

        xssPatterns.forEach(({ pattern, description }) => {
            if (pattern.test(content)) {
                analysis.isSafe = false;
                analysis.warnings.push(description);
                analysis.blocked.push(pattern.toString());
            }
        });

        return analysis;
    }

    /**
     * Strip inline styles from HTML and replace with CSS classes for CSP compliance
     * @param {string} html - HTML content with inline styles
     * @returns {string} HTML content with CSS classes instead of inline styles
     */
    stripInlineStylesForModal(html) {
        if (typeof html !== 'string') {
            return '';
        }

        let cleanedHtml = html;

        // Replace div with inline styles with modal-content wrapper
        cleanedHtml = cleanedHtml.replace(
            /<div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">/g,
            '<div class="modal-content">'
        );

        // Replace h3 with inline styles - preserve semantic color coding
        cleanedHtml = cleanedHtml.replace(
            /<h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">/g,
            '<h3 class="topic-primary">'
        ).replace(
            /<h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">/g,
            '<h3 class="topic-implementation">'
        ).replace(
            /<h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">/g,
            '<h3 class="topic-workflow">'
        );

        // Replace h4 with inline styles - preserve semantic color coding
        cleanedHtml = cleanedHtml.replace(
            /<h4 style="color: #58D4FF;">/g,
            '<h4 class="section-overview">'
        ).replace(
            /<h4 style="color: #58D68D;">/g,
            '<h4 class="section-technical">'
        ).replace(
            /<h4 style="color: #F5B041;">/g,
            '<h4 class="section-process">'
        ).replace(
            /<h4 style="color: #00CFFF;">/g,
            '<h4 class="section-default">'
        );

        // Replace h5 with inline styles - preserve semantic meaning
        cleanedHtml = cleanedHtml.replace(
            /<h5 style="color: #00CFFF; margin-bottom: 5px;">/g,
            '<h5 class="meta-info">'
        ).replace(
            /<h5 style="color: #58D68D; margin-top: 0;">/g,
            '<h5 class="meta-technical-alt">'
        ).replace(
            /<h5 style="color: #58D68D; margin-bottom: 8px;">/g,
            '<h5 class="meta-technical">'
        ).replace(
            /<h5 style="color: #58D68D; margin-bottom: 5px;">/g,
            '<h5 class="meta-technical">'
        );

        // Fallback: Remove any remaining header styles that don't match known patterns
        cleanedHtml = cleanedHtml.replace(
            /<(h[3-5]) style="[^"]*">/g,
            '<$1>'
        );

        // Replace ol with inline styles
        cleanedHtml = cleanedHtml.replace(
            /<ol style="margin-left: 20px;">/g,
            '<ol>'
        );

        // Replace ul with inline styles
        cleanedHtml = cleanedHtml.replace(
            /<ul style="list-style-type: square; margin-left: 20px;">/g,
            '<ul>'
        );

        // Replace study resources div
        cleanedHtml = cleanedHtml.replace(
            /<div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">/g,
            '<div class="study-resources">'
        );

        // Replace em with font-size
        cleanedHtml = cleanedHtml.replace(
            /<em style="font-size: 0\.9em;">/g,
            '<em>'
        );

        // Replace links with color
        cleanedHtml = cleanedHtml.replace(
            /<a href="([^"]*)" target="_blank" style="color: #66B2FF;">/g,
            '<a href="$1" target="_blank">'
        );

        // Replace pre and code elements for command examples
        cleanedHtml = cleanedHtml.replace(
            /<pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0\.9em;">/g,
            '<pre class="command-pre">'
        );

        cleanedHtml = cleanedHtml.replace(
            /<code style="color: #9CDCFE;">/g,
            '<code class="command-code">'
        );

        // Replace table styles
        cleanedHtml = cleanedHtml.replace(
            /<table style="border-collapse: collapse; width: 100%; margin: 10px 0;">/g,
            '<table>'
        );

        // Replace th styles
        cleanedHtml = cleanedHtml.replace(
            /<th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">/g,
            '<th>'
        );

        // Replace tr with background colors
        cleanedHtml = cleanedHtml.replace(
            /<tr style="background-color: #374151;">/g,
            '<tr class="table-row-medium">'
        ).replace(
            /<tr style="background-color: #1F2937;">/g,
            '<tr class="table-row-dark">'
        ).replace(
            /<tr style="background-color: #2a2a2a;">/g,
            '<tr class="table-row-alt">'
        ).replace(
            /<tr style="background-color: #1e1e1e;">/g,
            '<tr class="table-row-darker">'
        );

        // Replace special content boxes
        cleanedHtml = cleanedHtml.replace(
            /<div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">/g,
            '<div class="info-box">'
        ).replace(
            /<div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">/g,
            '<div class="success-box">'
        ).replace(
            /<div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">/g,
            '<div class="warning-box-alt">'
        ).replace(
            /<div style="background-color: #2d2d2d; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">/g,
            '<div class="code-block">'
        );

        // Replace additional pre elements
        cleanedHtml = cleanedHtml.replace(
            /<pre style="background-color: #1a1a1a; padding: 10px; border-radius: 5px; font-size: 0\.9em;">/g,
            '<pre class="code-block-dark">'
        );

        // Replace td styles with various combinations
        cleanedHtml = cleanedHtml.replace(
            /<td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">/g,
            '<td class="table-cell-bold">'
        ).replace(
            /<td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">/g,
            '<td class="table-cell-success">'
        ).replace(
            /<td style="border: 1px solid #4B5563; padding: 8px; color: #fbbf24;">/g,
            '<td class="table-cell-warning">'
        ).replace(
            /<td style="border: 1px solid #4B5563; padding: 8px; color: #60a5fa;">/g,
            '<td class="table-cell-info">'
        ).replace(
            /<td style="border: 1px solid #4B5563; padding: 8px[^"]*">/g,
            '<td>'
        );

        // Remove any remaining style attributes
        cleanedHtml = cleanedHtml.replace(/\s+style="[^"]*"/g, '');

        return cleanedHtml;
    }
}

// Create singleton instance and expose globally
window.CCNASecurityUtils = CCNASecurityUtils;
window.securityUtils = new CCNASecurityUtils();

// Export for module systems if available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CCNASecurityUtils;
}