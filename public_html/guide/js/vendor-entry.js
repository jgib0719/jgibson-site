/**
 * Vendor Entry Point - External Dependencies
 * Contains third-party libraries and frameworks
 */

// Font Awesome (CSS loaded via HTML link, this is for any JS interactions)
// Note: We're using the CDN version, so this is mainly for future extensions

// Future vendor dependencies can be added here:
// import 'some-external-library';

// Export vendor utilities that might be needed
export const VENDOR_INFO = {
  fontAwesome: '6.4.0',
  fonts: 'Google Fonts (Orbitron, Rajdhani)',
  buildTime: new Date().toISOString()
};

console.log('📦 Vendor chunk loaded');