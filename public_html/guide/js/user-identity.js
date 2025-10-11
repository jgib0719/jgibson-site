/**
 * User Identity Management Module for CCNA Study Hub
 * Centralized user identification and persistence across all tracking systems
 * Eliminates code duplication between shared-progress.js and anonymous-progress-tracker.js
 */

class CCNAUserIdentity {
    static instance = null;
    
    constructor() {
        if (CCNAUserIdentity.instance) {
            return CCNAUserIdentity.instance;
        }
        
        this.cachedUserId = null;
        this.cachedAnonymousId = null;
        CCNAUserIdentity.instance = this;
    }

    /**
     * Get cookie value by name
     * @param {string} name - Cookie name
     * @returns {string|null} Cookie value or null if not found
     */
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    /**
     * Set cookie with long expiration
     * @param {string} name - Cookie name
     * @param {string} value - Cookie value
     * @param {number} days - Expiration in days (default: 10 years)
     */
    setCookie(name, value, days = 3650) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
    }

    /**
     * Generate browser fingerprint for fallback identification
     * Creates a consistent identifier based on browser characteristics
     * @returns {string} Browser fingerprint hash
     */
    generateBrowserFingerprint() {
        const nav = navigator;
        const screen = window.screen;

        const fingerprint = [
            nav.userAgent,
            nav.language,
            screen.colorDepth,
            screen.width + 'x' + screen.height,
            new Date().getTimezoneOffset(),
            !!window.sessionStorage,
            !!window.localStorage
        ].join('|');

        let hash = 0;
        for (let i = 0; i < fingerprint.length; i++) {
            const char = fingerprint.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }

        return 'fp_' + Math.abs(hash).toString(36);
    }

    /**
     * Generate new user ID with specified format
     * @param {string} prefix - ID prefix ('user_' or 'anon_')
     * @param {boolean} useUuid - Whether to use UUID format (for anonymous users)
     * @returns {string} Generated user ID
     */
    generateNewUserId(prefix = 'user_', useUuid = false) {
        if (useUuid) {
            // Generate UUID v4 format for anonymous users
            return prefix + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        } else {
            // Generate timestamp-based ID for regular users
            return prefix + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }
    }

    /**
     * Store user ID in all persistence locations
     * @param {string} userId - User ID to store
     * @param {string} type - 'ccna' or 'anonymous'
     */
    storeUserId(userId, type = 'ccna') {
        const cookieName = type === 'anonymous' ? 'anonymous_user_id' : 'ccna_user_id';
        const localStorageKey = type === 'anonymous' ? 'anonymous_user_id' : 'ccna_user_id';
        const fingerprintKey = type === 'anonymous' ? 'anon_id_' : 'ccna_uid_';

        // Store in cookie and localStorage
        this.setCookie(cookieName, userId);
        localStorage.setItem(localStorageKey, userId);

        // Store with fingerprint mapping for recovery
        const fingerprint = this.generateBrowserFingerprint();
        localStorage.setItem(`${fingerprintKey}${fingerprint}`, userId);
    }

    /**
     * Retrieve user ID from all persistence locations
     * Priority: 1) Cookie, 2) localStorage, 3) Browser fingerprint, 4) Generate new
     * @param {string} type - 'ccna' or 'anonymous'
     * @returns {string} User ID
     */
    retrieveUserId(type = 'ccna') {
        const cookieName = type === 'anonymous' ? 'anonymous_user_id' : 'ccna_user_id';
        const localStorageKey = type === 'anonymous' ? 'anonymous_user_id' : 'ccna_user_id';
        const fingerprintKey = type === 'anonymous' ? 'anon_id_' : 'ccna_uid_';
        const prefix = type === 'anonymous' ? 'user_' : 'user_';
        const useUuid = type === 'anonymous';

        // Try cookie first (survives cache clears)
        let userId = this.getCookie(cookieName);

        if (!userId) {
            // Try localStorage second
            userId = localStorage.getItem(localStorageKey);
        }

        if (!userId) {
            // Try browser fingerprint as fallback
            const fingerprint = this.generateBrowserFingerprint();
            userId = localStorage.getItem(`${fingerprintKey}${fingerprint}`);

            if (userId) {
                console.log(`Recovered ${type} user ID from browser fingerprint`);
            }
        }

        if (!userId) {
            // Generate new user ID
            userId = this.generateNewUserId(prefix, useUuid);
            console.log(`Generated new ${type} user ID: ${userId}`);
        }

        // Store in all locations for maximum persistence
        this.storeUserId(userId, type);

        return userId;
    }

    /**
     * Get or create CCNA user ID (for shared progress tracking)
     * @returns {string} CCNA user ID
     */
    getOrCreateCCNAUserId() {
        if (!this.cachedUserId) {
            this.cachedUserId = this.retrieveUserId('ccna');
        }
        return this.cachedUserId;
    }

    /**
     * Get or create anonymous user ID (for API progress tracking)
     * @returns {string} Anonymous user ID
     */
    getOrCreateAnonymousUserId() {
        if (!this.cachedAnonymousId) {
            this.cachedAnonymousId = this.retrieveUserId('anonymous');
        }
        return this.cachedAnonymousId;
    }

    /**
     * Clear all user identification data (for testing or reset)
     * @param {string} type - 'ccna', 'anonymous', or 'all'
     */
    clearUserData(type = 'all') {
        if (type === 'ccna' || type === 'all') {
            // Clear CCNA user data
            document.cookie = 'ccna_user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            localStorage.removeItem('ccna_user_id');
            
            // Clear fingerprint mappings
            const fingerprint = this.generateBrowserFingerprint();
            localStorage.removeItem(`ccna_uid_${fingerprint}`);
            
            this.cachedUserId = null;
        }

        if (type === 'anonymous' || type === 'all') {
            // Clear anonymous user data
            document.cookie = 'anonymous_user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            localStorage.removeItem('anonymous_user_id');
            
            // Clear fingerprint mappings
            const fingerprint = this.generateBrowserFingerprint();
            localStorage.removeItem(`anon_id_${fingerprint}`);
            
            this.cachedAnonymousId = null;
        }
    }

    /**
     * Get current user identity information for debugging
     * @returns {object} Current user identity state
     */
    getIdentityInfo() {
        return {
            ccnaUserId: this.getOrCreateCCNAUserId(),
            anonymousUserId: this.getOrCreateAnonymousUserId(),
            browserFingerprint: this.generateBrowserFingerprint(),
            hasCCNACookie: !!this.getCookie('ccna_user_id'),
            hasAnonymousCookie: !!this.getCookie('anonymous_user_id'),
            hasCCNALocalStorage: !!localStorage.getItem('ccna_user_id'),
            hasAnonymousLocalStorage: !!localStorage.getItem('anonymous_user_id')
        };
    }
}

// Create singleton instance
window.CCNAUserIdentity = CCNAUserIdentity;

// Export for module systems if available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CCNAUserIdentity;
}