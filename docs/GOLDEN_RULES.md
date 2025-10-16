# GOLDEN RULES - CCNA Quiz Application

We should only have the new unified template, no backward compatibility or multiple versions.

**Last Updated:** October 16, 2025 (Phase 2 Complete)  
**Purpose:** Prevent code duplication, maintain hierarchical structure, enforce CSP compliance, preserve educational value, and ensure integrated build optimization.

---

## 🏛️ HIERARCHICAL ARCHITECTURE

**Functions MUST exist at exactly ONE level:**

```text
1. Configuration (ccna-study-guide-config.js) → Constants, classes, endpoints
2. CSS Styling (site.css) → Visual styling, semantic classes
3. Security (security-utils.js) → HTML sanitization, XSS prevention  
4. Frontend (section-loader.js, progress trackers) → DOM manipulation, UI state
5. Backend (controllers → services → models) → HTTP, business logic, data
6. DOM/Browser → Native APIs
```

### Core Rules
✅ **DO:** Use higher-level functions, external CSS classes, security utilities, DOM readiness checks, graceful 404 handling, semantic color preservation, unified templates with dynamic loading

❌ **NEVER:** Inline styles/scripts (CSP violations), function duplication, hardcoded initialization, unsafe HTML insertion, semantic meaning loss, multiple template versions

---

## 📁 FILE OWNERSHIP

| Layer | File | Owns | Pattern |
|-------|------|------|---------|
| Config | ccna-study-guide-config.js | Constants, classes, endpoints | `CCNAConfig.{area}.{type}.{name}` |
| CSS | site.css | Styling, semantic classes | `.{component}-{element}.{state}` |
| Security | security-utils.js | Sanitization, XSS prevention | `sanitizeHTML()`, `stripInlineStylesForModal()` |
| Frontend | section-loader.js, *-progress-*.js | DOM, UI, cross-page data | Classes, sessionStorage |
| Backend | controllers/services/models | HTTP, business logic, data | `{Entity}Controller/Service` |
| Database | Sequelize models | Data structure, validation, ORM | `{Entity}.js` (models) |
| Templates | section.html + dynamic loader | Single template, URL-based routing | `section.html?section=N` |
| Build | File concatenation | Bundle creation without complexity | `cat *.js > bundle.min.js` |

---

## 🔒 CSP COMPLIANCE & SEMANTIC PRESERVATION

### CSP Violations Prevention
```javascript
❌ element.style.color = '#00A8FF';           // Direct style manipulation
❌ innerHTML = '<div style="color:red;">';    // Unsanitized HTML with styles
❌ <script>window.data = {...}</script>       // Inline scripts

✅ element.className = 'topic-primary';       // CSS classes
✅ securityUtils.stripInlineStylesForModal(content);  // Strip + preserve semantics
✅ securityUtils.sanitizeHTML(cleanedHTML);   // Sanitize before insertion
```

### API Error Handling Best Practices
```javascript
❌ // Showing expected 404s as errors
fetch('/api/progress/user123').catch(err => console.error(err));

✅ // Graceful handling of expected API responses
if (response.status === 404) {
    console.log('ℹ️ Expected: New user with no saved progress yet');
    return {};
} else if (response.status === 403) {
    console.log('🔒 API access restricted - using local storage only');
    return {};
}
```

### Semantic Color System
Educational content uses color coding for learning - preserve when removing inline styles:

```css
/* H3 - Major Topics */
.topic-primary         /* Blue - Core concepts, fundamentals */
.topic-implementation  /* Green - Topologies, architectures */  
.topic-workflow        /* Orange - Physical interfaces, processes */

/* H4 - Subsections */
.section-overview      /* Light Blue - Benefits, concepts */
.section-technical     /* Light Green - Technical details */
.section-process       /* Light Orange - Process steps */
.section-default       /* Cyan - Miscellaneous */

/* H5 - Meta */
.meta-info            /* Cyan - Study resources */
.meta-technical       /* Light Green - Tool names */
```

**Implementation Pattern:**
```javascript
const cleanHTML = securityUtils.stripInlineStylesForModal(content);
const safeHTML = securityUtils.sanitizeHTML(cleanHTML);
element.innerHTML = safeHTML;
```

---

## 🎯 NAMING CONVENTIONS

### JavaScript
```javascript
const MAX_QUESTIONS = 50;                     // Constants
const CCNAConfig = { quiz: { cssClasses: {} }}; // Configuration
class SectionLoader {}                        // Classes
async startNewQuiz()                          // Public methods
_validateInput()                              // Private methods
handleOptionClick()                           // Event handlers
```

### Database (Sequelize)
```javascript
// Model definitions
const QuizCompletion = sequelize.define('quiz_completion', {...});

// Service layer operations  
await QuizService.recordCompletion(data);
await ProgressService.saveProgress(data);

// Proper initialization
await sequelize.sync({ force: false });      // Don't force in production
await initializeDatabase();                  // Use Sequelize initialization
```

### CSS & Files
```css
.quiz-container           /* Block */
.quiz-container__header   /* Element */
.quiz-container--loading  /* Modifier */
```

```text
section{N}-init.js        /* Section initialization */
{feature}-{type}.js       /* Feature-based naming */
```

---

## ✅ IMPLEMENTATION PATTERNS

### Initialization
```javascript
// section{N}-init.js
window.SECTION_NUMBER = N;

// DOM readiness
if (document.readyState !== 'complete') {
    document.addEventListener('DOMContentLoaded', callback);
    return;
}

// Expected 404s for new users
if (response.status === 404) {
    console.log('ℹ️ Expected 404: New user with no saved progress');
    return {};
}
```

### Unified Progress Tracking
```javascript
// Single class with direct instantiation (NO compatibility layers)
this.progressTracker = new ProgressTracker({
    sectionNumber: this.sectionNumber,
    storageMode: 'local' // Start simple, upgrade when needed
});

// Legacy method names built directly into class
await this.progressTracker.markTopicCompleted(title, true);  // Legacy name
await this.progressTracker.markTopicComplete(title, true);   // New name
this.progressTracker.setChapterTopics(section, topics);     // Legacy name
this.progressTracker.setSectionTopics(section, topics);     // New name
```

### Event System Bridge (Phase 2 Critical Fix)
```javascript
// Internal + Window Event Dispatch Pattern
notifySubscribers(eventType, data) {
    // 1. Notify internal subscribers
    this.subscribers.forEach(callback => callback(eventType, data));
    
    // 2. Bridge to window events for UI components
    if (eventType === 'progress-updated') {
        window.dispatchEvent(new CustomEvent('progressUpdated', {
            detail: { topicTitle: data.topicTitle, completed: data.completed }
        }));
    }
}

// UI components listen for window events
window.addEventListener('progressUpdated', (event) => {
    // Progress bars update immediately
    updateProgressBars(event.detail);
});
```

### Unified Template System (Phase 2)
```javascript
// Single template with dynamic loading
// URL: /guide/section.html?section=1
// URL: /guide/section.html?section=2

// section-dynamic-loader.js
function loadSectionDynamically() {
    const params = new URLSearchParams(window.location.search);
    const sectionNumber = params.get('section');
    
    // Load section data dynamically
    loadScript(`js/section${sectionNumber}-data.js`);
    initializePage(sectionNumber, window[`section${sectionNumber}Data`]);
}

// Result: 6 files → 1 unified template
```

### System Consolidation Approach  
```javascript
✅ // Phase 2: Eliminate overlapping systems
// OLD: 3 separate classes with complex inheritance
// NEW: 1 unified class with strategy pattern

class ProgressTracker {
    constructor(config) {
        this.storage = StorageFactory.create(config.storageMode);
        this.state = new ProgressStateMachine();
    }
    
    // Both old and new method names for zero-disruption migration
    async markTopicCompleted(title, completed) { /* legacy */ }
    async markTopicComplete(title, completed) { /* new */ }
}
```

### Progress Bars
```html
<div id="master-progress">
    <div id="master-progress-card">
        <div id="master-progress-header">
            <span id="master-progress-title">Progress Title</span>
            <span id="progressText">0%</span>
        </div>
        <div id="master-progress-bar-container">
            <div id="progressBar"></div>
        </div>
    </div>
</div>
```

### Section Pages
```html
<!-- Simple concatenated bundle (Phase 2) -->
<script src="js/bundle.min.js"></script>

<!-- Dynamic section loading -->
<script src="js/section-dynamic-loader.js"></script>

<!-- URL-based content: section.html?section=1 -->
<!-- No multiple template files needed -->
```

---

## 🚫 CRITICAL ANTI-PATTERNS

```javascript
❌ <div style="display: flex;">                    // Inline styles
❌ element.style.color = '#FF0000';                // Direct manipulation
❌ innerHTML = unsanitizedHTML;                    // Security risk
❌ html.replace(/<h3 style="[^"]*">/g, '<h3>');   // Semantic loss
❌ function duplicateLogic() {}                    // Code duplication
❌ new sqlite3.Database()                          // Direct SQLite usage
❌ db.run('INSERT INTO ...')                      // Raw SQL queries
❌ sequelize.sync({ force: true })                // Data destructive in production
❌ class LegacyAdapter extends NewClass {}         // Compatibility layers
❌ window.createProgressTracker = function() {}   // Global factory functions
❌ if (window.OldClass) { new OldClass() }        // Feature detection fallbacks
❌ outDir: './optimized'                          // Separate build directories
❌ deploy.sh scripts                              // Manual deployment steps
❌ section1.html, section2.html, ...             // Multiple template files
❌ this.subscribers.forEach() // only             // Missing window event bridge
❌ Vite ES6 modules for global variable codebase // Wrong build tool choice
```

### Event System Anti-Patterns (Phase 2 Fix)
```javascript
❌ // Internal notifications only (UI won't update)
notifySubscribers(eventType, data) {
    this.subscribers.forEach(callback => callback(eventType, data));
    // Missing: window.dispatchEvent for UI components
}

❌ // Separate event systems
const internalEvents = new EventEmitter();       // For components
const windowEvents = window;                     // For UI bars
// Result: Progress data saves but UI doesn't update

✅ // Unified event bridge
notifySubscribers(eventType, data) {
    // Internal subscribers
    this.subscribers.forEach(callback => callback(eventType, data));
    // Window events for UI
    window.dispatchEvent(new CustomEvent('progressUpdated', { detail: data }));
}
```

### Template System Anti-Patterns (Phase 2 Fix)
```javascript
❌ // Multiple duplicate templates
section1.html (duplicate structure)              // File duplication
section2.html (duplicate structure)              // Maintenance nightmare
section3.html (duplicate structure)              // CSP violations in each
// Result: 6x maintenance overhead

✅ // Single unified template
section.html + section-dynamic-loader.js         // One template
URL parameters control content                   // Dynamic loading
External scripts only                           // CSP compliant
```

### Progress Tracking Anti-Patterns
```javascript
❌ // Multiple overlapping progress systems
class UnifiedProgressTracker {}                   // Base class
class AnonymousProgressTracker {}                 // API sync
class HybridProgressTracker extends Unified {}    // Combination

❌ // Compatibility layers during transition  
class LegacyAdapter { markTopicCompleted() {} }   // Method wrapping
const factory = { create(config) {} }             // Factory complexity

✅ // Single unified system with direct integration
class ProgressTracker {                           // One class
  markTopicComplete() {}                          // New methods
  markTopicCompleted() {}                         // Legacy method names (direct)
  setChapterTopics() {}                           // Direct compatibility
}
```

### Build System Anti-Patterns
```javascript
❌ // Separate build output directories requiring deployment
build: { outDir: './optimized' }                  // Creates deployment friction
const deployScript = 'cp optimized/* js/'         // Manual file copying

❌ // Development servers in production builds
server: { port: 3001 }                           // Dev server config
vite --mode development                           // Wrong build mode

❌ // Vite ES6 modules for global variable codebase
export const SectionLoader = class {}            // ES6 modules
import { ProgressTracker } from './progress'     // Module imports
// Result: Complex bundling for simple global variables

✅ // Integrated simple builds
cat file1.js file2.js > bundle.min.js           // File concatenation
// Direct file replacement, global variables preserved
```
### Database Anti-Patterns
```javascript
❌ // Mixed database approaches
const db = new sqlite3.Database(dbPath);          // Old SQLite3
const User = sequelize.define('user', {...});     // New Sequelize

❌ // Manual table creation with existing ORM
db.run(`CREATE TABLE IF NOT EXISTS users ...`);   // Manual SQL
User.sync();                                       // Sequelize sync

✅ // Pure Sequelize approach
await sequelize.sync({ force: false });           // Single ORM
await models.User.create(userData);               // Consistent API
```

---

## ✅ VALIDATION CHECKLIST

- [ ] Function doesn't exist at higher level?
- [ ] No inline styles/scripts?
- [ ] Using security utilities?
- [ ] Semantic color coding preserved?
- [ ] DOM element existence verified?
- [ ] 404 responses handled gracefully?
- [ ] Database operations use Sequelize ORM?
- [ ] No mixed SQLite3/Sequelize approaches?
- [ ] API errors return proper HTTP status codes?
- [ ] No overlapping/duplicate functionality between classes?
- [ ] Legacy method names provided directly (not through adapters)?
- [ ] Storage modes start simple and upgrade when needed?
- [ ] Console output shows helpful info (not confusing errors)?
- [ ] Build system replaces files directly (no deployment needed)?
- [ ] Optimized bundles serve 60%+ smaller files automatically?
- [ ] **Event bridge:** Internal notifications + window events?
- [ ] **Single template:** URL-based dynamic loading instead of duplicates?
- [ ] **Build simplicity:** File concatenation over complex bundling for global variables?

---

## 📚 QUICK REFERENCE

| Type | Location | Example |
|------|----------|---------|
| Config | ccna-study-guide-config.js | `CCNAConfig.quiz.cssClasses.buttons.submit` |
| Styling | site.css | `.topic-primary`, `.section-technical` |
| Security | security-utils.js | `sanitizeHTML()`, `stripInlineStylesForModal()` |
| Progress | sessionStorage | `sessionStorage.getItem('ccna_global_progress_data')` |
| Database | Sequelize models/services | `QuizService.recordCompletion()`, `sequelize.sync()` |
| Unified Systems | Single class with strategy pattern | `new ProgressTracker({ storageMode: 'local' })` |
| Templates | Single unified template | `section.html?section=N` (dynamic loading) |
| Events | Bridge pattern | `notifySubscribers()` → internal + window events |
| Build | Simple concatenation | `cat *.js > bundle.min.js` (global variables) |

**Key Principle:** Follow hierarchy, ensure CSP compliance, preserve semantic meaning, sanitize HTML, eliminate overlapping functionality, use direct integration over compatibility layers, bridge event systems, and choose build tools that match your architecture!

We should only have the new unified template, no backward compatibility or multiple versions.
