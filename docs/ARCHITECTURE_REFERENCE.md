# ARCHITECTURE REFERENCE - CCNA Quiz Application

**Last Updated:** October 16, 2025 (Phase 2 Complete)  
**Purpose:** Comprehensive architectural map of all callable objects, methods, functions, and system hierarchy for AI assistant reference.

---

## 🏗️ SYSTEM HIERARCHY OVERVIEW

```text
1. Configuration Layer   → CCNAConfig (Constants, Classes, Endpoints)
2. CSS Styling Layer     → site.css (Visual Styling, Semantic Classes)  
3. Security Layer        → security-utils.js (Sanitization, XSS Prevention)
4. Frontend Layer        → Loaders, Progress Trackers, UI Components
5. Backend Layer         → Controllers → Services → Models
6. Database Layer        → Sequelize ORM (Pure ORM Architecture)
7. DOM/Browser Layer     → Native APIs, Event Handling
```

### **PHASE 2 ARCHITECTURAL CONSOLIDATION (October 2025)**
- **Unified Section Template:** Single `section.html` replaces 6 duplicate files
- **Dynamic Loading:** URL parameters control section content via `section-dynamic-loader.js`
- **Build System:** Simplified concatenation (bundle.min.js) instead of Vite ES6 modules
- **Progress Tracking:** Event bridge between internal notifications and window events
- **CSP Compliance:** All scripts external, no inline JavaScript allowed

---

## 🎯 LAYER 1: CONFIGURATION LAYER

### File: `/public_html/guide/js/ccna-study-guide-config.js`

**Primary Object:** `CCNAConfig`

#### Configuration Namespaces
```javascript
CCNAConfig.modal                    // Modal sizing & styling
CCNAConfig.detailsModal            // Details modal configuration
CCNAConfig.layout                  // Page layout settings
CCNAConfig.progress                // Progress tracking config
CCNAConfig.ui                      // UI styling configuration
CCNAConfig.quiz                    // Quiz-specific settings
```

#### Core Methods
```javascript
CCNAConfig.createTopicCard(topic)           // Creates standardized topic cards
CCNAConfig.initializeGlobalStyling()        // Applies global CSS classes
CCNAConfig.stripInlineStylesForCSP(html)    // CSP compliance helper
```

#### CSS Class Definitions
```javascript
// Modal Classes
CCNAConfig.modal.containerClasses           // Modal container styling
CCNAConfig.modal.overlayClasses            // Modal overlay styling
CCNAConfig.modal.closeButtonClasses        // Close button styling

// Quiz Classes  
CCNAConfig.quiz.cssClasses.buttons.option  // Quiz option buttons
CCNAConfig.quiz.cssClasses.buttons.submit  // Submit button styling
CCNAConfig.quiz.cssClasses.text.questionNumber // Question numbering
```

---

## 🎨 LAYER 2: CSS STYLING LAYER

### File: `/public_html/site.css`

#### Semantic Color Classes
```css
/* H3 - Major Topics */
.topic-primary                 /* Blue - Core concepts */
.topic-implementation         /* Green - Topologies, architectures */
.topic-workflow              /* Orange - Physical interfaces */

/* H4 - Subsections */
.section-overview            /* Light Blue - Benefits, concepts */
.section-technical           /* Light Green - Technical details */
.section-process             /* Light Orange - Process steps */
.section-default             /* Cyan - Miscellaneous */

/* H5 - Meta Information */
.meta-info                   /* Cyan - Study resources */
.meta-technical              /* Light Green - Tool names */
```

#### Layout Classes
```css
.topic-grid-container        /* Dynamic grid layout */
.topic-card                  /* Individual topic styling */
.topic-card.studied          /* Completed topic state */
```

---

## 🔒 LAYER 3: SECURITY LAYER

### File: `/public_html/guide/js/security-utils.js`

#### Security Functions
```javascript
securityUtils.sanitizeHTML(html)                    // XSS prevention
securityUtils.stripInlineStylesForModal(content)    // CSP compliance + semantic preservation
securityUtils.escapeHTML(text)                      // HTML entity escaping
```

---

## 🎯 LAYER 4: FRONTEND LAYER

### Section Loading System

#### File: `/public_html/guide/js/section-loader.js`
**Primary Class:** `SectionLoader`

##### Constructor & Initialization
```javascript
constructor(sectionNumber, sectionData = null)
init()                               // Main initialization
validateSectionData(data)            // Data structure validation
```

##### Core Methods
```javascript
populateGrids()                      // Populate topic grids
createTopicCards(topics, gridElement) // Create individual cards
provideTopicsToProgressTracker()     // Topic extraction for progress
syncVisualState()                    // Sync UI with progress state
```

##### Modal & Event Handling
```javascript
openStudyModal(topic, cardElement)   // Open topic study modal
setupEventListeners()               // Event binding
handleInitError(error)              // Error handling
showErrorMessage(message, isPersistent) // Error display
```

### Progress Tracking System

#### File: `/public_html/guide/js/progress-tracker.js`
**Primary Class:** `ProgressTracker`

##### Constructor & Setup
```javascript
constructor(options = {})               // Initialize with sectionNumber, storageMode, apiBase
initializeStorage()                     // Initialize storage adapter via StorageFactory
```

##### Storage Adapters
```javascript
LocalStorageAdapter                     // localStorage-only operations
APIStorageAdapter                       // API-only operations  
HybridStorageAdapter                    // Combined local + API sync
StorageFactory.create(mode, config)     // Factory for adapter creation
```

##### Progress Management
```javascript
markTopicCompleted(topicTitle)          // Mark topic as complete (legacy compatibility)
setChapterTopics(topics)                // Set topics for chapter (legacy compatibility)
markCompleted(topicTitle)               // Core completion method
getProgress()                           // Get current progress state
syncProgress()                          // Sync with server (hybrid mode)
```

##### Event System
```javascript
notifySubscribers(eventType, data)      // Internal subscriber notifications
// Also dispatches window 'progressUpdated' events for UI components
subscribe(callback)                     // Subscribe to progress events
unsubscribe(callback)                   // Unsubscribe from events
```

### Dynamic Section Loading (Phase 2)

#### File: `/public_html/guide/js/section-dynamic-loader.js`
**Purpose:** URL-based section loading for unified template

##### Core Functions
```javascript
loadSectionDynamically()                // Parse URL, load section data
loadScript(src)                         // Dynamic script injection
initializePage(sectionNumber, data)     // Initialize SectionLoader with data
```

##### URL Pattern
```text
/guide/section.html?section=1          // Loads Section 1
/guide/section.html?section=2          // Loads Section 2
// Single template serves all 6 sections
```

### Quiz System

#### File: `/public_html/quiz/js/quiz-api.js`
**Primary Class:** `QuizAPI`

##### Constructor & Core
```javascript
constructor()
makeRequest(endpoint, options = {})   // HTTP request wrapper
```

##### Question Management
```javascript
fetchQuestions(category = 'cisco', count = null) // Fetch quiz questions
normalizeQuestions(questions)         // Normalize question format
getAPIStats()                        // Fetch API statistics
```

#### File: `/public_html/quiz/js/quiz-ui.js`
**Primary Class:** `QuizUI`

##### Constructor & Setup
```javascript
constructor(quizState, quizAPI)
```

##### Quiz Flow
```javascript
startNewQuiz()                       // Start new quiz session
resumeQuiz()                         // Resume existing quiz
displayQuestion(question)            // Render current question
handleOptionClick(event)             // Handle answer selection
```

##### State Management
```javascript
updateProgress()                     // Update progress display
showResults()                        // Display quiz results
saveQuizState()                      // Persist quiz state
```

#### File: `/public_html/quiz/js/quiz-state.js`
**Primary Class:** `QuizState`

##### State Management
```javascript
constructor()
getCurrentQuestion()                 // Get current question
setCurrentQuestion(question)         // Set current question
addAnswer(questionId, answer)        // Record user answer
getScore()                          // Calculate current score
isQuizComplete()                    // Check completion status
```

---

## 🖥️ LAYER 5: BACKEND LAYER

### Controllers (HTTP Request Handling)

#### File: `/api/controllers/questionsController.js`
**Primary Class:** `QuestionsController`

##### Constructor & Binding
```javascript
constructor()                        // Initialize with QuestionsService
// Bound methods for 'this' context preservation
```

##### HTTP Endpoints
```javascript
getQuestions(req, res, next)         // GET /api/v1/questions
getQuestionById(req, res, next)      // GET /api/v1/questions/:id
getQuestionsCount(req, res, next)    // GET /api/v1/questions/count
getCategories(req, res, next)        // GET /api/v1/questions/categories
checkAnswer(req, res, next)          // POST /api/v1/questions/check-answer
```

#### File: `/api/controllers/progressController.js`
**Primary Class:** `ProgressController`

##### HTTP Endpoints
```javascript
saveProgress(req, res, next)         // POST /api/v1/progress
getUserProgress(req, res, next)      // GET /api/v1/progress/:userId
deleteUserProgress(req, res, next)   // DELETE /api/v1/progress/:userId
getProgressStats(req, res, next)     // GET /api/v1/progress/stats
```

#### File: `/api/controllers/quizController.js`
**Primary Class:** `QuizController`

##### HTTP Endpoints
```javascript
saveQuizCompletion(req, res, next)   // POST /api/v1/quiz-completions
getUserQuizCompletions(req, res, next) // GET /api/v1/quiz-completions/:userId
getQuizStats(req, res, next)         // GET /api/v1/quiz-completions/stats
getUserBestScores(req, res, next)    // GET /api/v1/quiz-completions/:userId/best-scores
```

### Services (Business Logic Layer)

#### File: `/api/services/questionsService.js`
**Primary Class:** `QuestionsService`

##### Question Operations
```javascript
getQuestions(options)                // Get filtered questions
getQuestionById(id)                  // Get single question
getQuestionsCount(category)          // Count questions by category
getCategories()                      // Get available categories
validateAnswer(questionId, answer)   // Validate user answer
```

#### File: `/api/services/progressService.js`
**Primary Class:** `ProgressService`

##### Progress Operations
```javascript
saveProgress(data)                   // Save/update progress
getUserProgress(userId)              // Retrieve user progress
deleteProgress(userId)               // Delete user progress
getProgressStats()                   // Generate progress statistics
```

#### File: `/api/services/quizService.js`
**Primary Class:** `QuizService`

##### Quiz Operations
```javascript
recordCompletion(data)               // Record quiz completion
getUserCompletions(userId)           // Get user quiz history
getQuizStats()                       // Generate quiz statistics
getBestScores(userId)                // Get user's best scores
```

---

## 🗄️ LAYER 6: DATABASE LAYER (Sequelize ORM)

### Models & Database Operations

#### File: `/api/models/index.js`
**Exports:**
```javascript
sequelize                           // Sequelize instance
testConnection()                    // Test database connection
initializeDatabase()                // Initialize database schema
closeConnection()                   // Close database connection
Progress                            // Progress model
Questions                           // Questions model
ApiStats                           // API statistics model
QuizCompletion                     // Quiz completion model
```

#### File: `/api/models/Questions.js`
**Primary Model:** `Questions`

##### Model Definition
```javascript
// Sequelize model with schema definition
id, category, question_text, option_a, option_b, option_c, option_d, 
correct_answer, explanation, created_at, updated_at
```

#### File: `/api/models/Progress.js`
**Primary Model:** `Progress`

##### Model Definition
```javascript
// Sequelize model with schema definition
id, user_id, section_number, topic_title, completed, 
progress_data, created_at, updated_at
```

#### File: `/api/models/QuizCompletion.js`
**Primary Model:** `QuizCompletion`

##### Model Definition
```javascript
// Sequelize model with schema definition
id, user_id, score, total_questions, category, completion_time,
questions_data, created_at, updated_at
```

#### File: `/api/models/ApiStats.js`
**Primary Model:** `ApiStats`

##### Model Definition & Methods
```javascript
// Sequelize model with schema definition
id, endpoint, method, status_code, response_time_ms, user_agent, 
ip_hash, created_at, updated_at

// Class methods
ApiStats.logRequest(requestData)     // Log API request
ApiStats.getStats(options)           // Get statistics
ApiStats.getAggregatedStats(options) // Get aggregated stats
```

---

## 🌐 LAYER 7: DOM/BROWSER LAYER

### Native Browser APIs Used

#### DOM Manipulation
```javascript
document.getElementById()            // Element selection
document.querySelector()             // CSS selector queries
document.createElement()             // Element creation
element.classList.add/remove()      // Class manipulation
element.innerHTML                    // Content injection (sanitized)
```

#### Event Handling
```javascript
addEventListener()                   // Event binding
removeEventListener()              // Event cleanup
DOMContentLoaded                   // DOM ready state
```

#### Storage APIs
```javascript
localStorage.getItem()              // Local data retrieval
localStorage.setItem()              // Local data storage
sessionStorage                     // Session-based storage
```

#### Network APIs
```javascript
fetch()                            // HTTP requests
Response.json()                    // JSON parsing
Response.status                    // HTTP status codes
```

---

## 🔗 API ENDPOINTS REFERENCE

### Questions API
```text
GET    /api/v1/questions                    # Get filtered questions
GET    /api/v1/questions/:id               # Get specific question
GET    /api/v1/questions/count             # Get questions count
GET    /api/v1/questions/categories        # Get available categories
POST   /api/v1/questions/check-answer      # Validate answer
```

### Progress API
```text
POST   /api/v1/progress                    # Save/update progress
GET    /api/v1/progress/:userId            # Get user progress
DELETE /api/v1/progress/:userId            # Delete user progress
GET    /api/v1/progress/stats              # Get progress statistics
```

### Quiz Completion API
```text
POST   /api/v1/quiz-completions            # Record completion
GET    /api/v1/quiz-completions/:userId    # Get user completions
GET    /api/v1/quiz-completions/stats      # Get quiz statistics
GET    /api/v1/quiz-completions/:userId/best-scores # Get best scores
```

### System Health
```text
GET    /health                             # Health check endpoint
```

---

## 📊 DATA FLOW PATTERNS

### Frontend to Backend Flow
```text
User Action → UI Component → QuizAPI/ProgressTracker → 
HTTP Request → Controller → Service → Model → Database
```

### Configuration Flow
```text
CCNAConfig → CSS Classes → DOM Elements → Visual Rendering
```

### Progress Tracking Flow (Phase 2 Fixed)
```text
User Completes Topic → ProgressTracker.markCompleted() → 
Internal Subscribers + Window Event Dispatch → 
Progress Bars Update → Visual State Sync
```

### Section Loading Flow (Phase 2)
```text
URL Request → section-dynamic-loader.js → Parse Parameters → 
Load Section Data → Initialize SectionLoader → Populate Grids
```

---

## 🛠️ INITIALIZATION SEQUENCES

### Section Page Initialization (Phase 2 Unified)
```text
1. URL parsed by section-dynamic-loader.js
2. Section data loaded dynamically
3. CCNAConfig applies styling
4. SectionLoader instantiates with section data
5. ProgressTracker initializes with storage mode
6. Topic grids populate via SectionLoader.populateGrids()
7. Event listeners attach (with window event bridge)
8. Progress state syncs and visual updates
```

### Progress Event System (Phase 2 Fixed)
```text
1. Topic marked complete → ProgressTracker.markCompleted()
2. Internal subscribers notified
3. Window 'progressUpdated' event dispatched
4. Progress bars listen for window events
5. UI updates immediately with new percentages
```

### Quiz Initialization
```text
1. CCNAConfig loads
2. QuizAPI instantiates
3. QuizState initializes
4. QuizUI connects to state/API
5. Questions fetch from API
6. UI renders first question
7. Event handlers attach
```

### Server Startup
```text
1. Express app initializes
2. Sequelize connects to database
3. Models sync (non-destructive)
4. Middleware attaches
5. Routes register
6. Server listens on port 3000
7. Health endpoint available
```

---

## 🎯 CRITICAL ARCHITECTURAL PATTERNS

### Error Handling Pattern
```javascript
// Controllers
try {
    const result = await this.service.method();
    res.json(result);
} catch (error) {
    next(error);  // Pass to error middleware
}
```

### Service Pattern
```javascript
// Services handle business logic, return structured responses
return {
    success: true,
    data: result,
    message: 'Operation completed'
};
```

### Model Pattern
```javascript
// Pure Sequelize ORM - no direct SQL
await ModelName.findAll({ where: conditions });
await ModelName.create(data);
```

### Frontend Error Handling
```javascript
// Graceful degradation with console warnings
if (!dependency) {
    console.warn('Feature unavailable: dependency missing');
    return fallbackBehavior();
}
```

### Progress Tracker Pattern (Phase 2 Event Bridge)
```javascript
// Strategy pattern for storage operations
const tracker = new ProgressTracker({
    sectionNumber: 1,
    storageMode: 'hybrid', // 'local', 'api', or 'hybrid'
    apiBase: '/api/progress'
});

// Legacy compatibility built into main class
await tracker.markTopicCompleted(topicTitle);  // Legacy method name
await tracker.setChapterTopics(topics);        // Legacy method name

// Event bridge for UI updates (Phase 2 fix)
notifySubscribers(eventType, data) {
    // Internal subscriber notifications
    this.subscribers.forEach(callback => callback(eventType, data));
    
    // Window event dispatch for progress bars
    if (eventType === 'progress-updated') {
        window.dispatchEvent(new CustomEvent('progressUpdated', {
            detail: { topicTitle: data.topicTitle, completed: data.completed }
        }));
    }
}
```

### Storage Adapter Pattern
```javascript
// Factory creates appropriate adapter
const adapter = StorageFactory.create('hybrid', config);

// All adapters implement same interface
await adapter.markCompleted(topicTitle);
await adapter.getProgress();
await adapter.syncProgress();
```

---

## 📝 MAINTENANCE NOTES

### Phase 2 Build System (October 2025)
- **Simplified Build:** File concatenation instead of Vite ES6 modules
- **Bundle Creation:** `cat file1.js file2.js > bundle.min.js` 
- **Bundle Size:** ~70KB (core functionality only)
- **CSP Compliance:** No inline scripts, external files only

### Progress Tracker Event System
- **Internal Subscribers:** For component-to-component communication
- **Window Events:** For global progress bar updates
- **Event Bridge:** `notifySubscribers()` dispatches both types
- **Legacy Methods:** Preserved for backward compatibility

### Section Template System
- **Single Template:** `/public_html/guide/section.html`
- **Dynamic Loading:** URL parameters control content
- **Script Injection:** External scripts loaded per section
- **File Reduction:** 6 files → 1 unified template

### Adding New Questions
1. Use `QuestionsService.createQuestion()`
2. Follow Sequelize model validation
3. Update question count via API

### Adding New Progress Features
1. Extend `ProgressTracker` class or create new StorageAdapter
2. Update API endpoints in `ProgressController` if needed
3. Maintain backward compatibility with legacy method names
4. Follow strategy pattern for storage operations

### Adding New UI Components
1. Define CSS classes in `CCNAConfig`
2. Follow CSP compliance patterns
3. Use semantic color preservation

### Database Changes
1. Use Sequelize migrations
2. Never use `{ force: true }` in production
3. Test with `sequelize.sync({ force: false })`

### Progress Tracker Consolidation Notes
- **Legacy Files Removed (October 2025):** 
  - `shared-progress.js` (overlapping functionality)
  - `anonymous-progress-tracker.js` (merged into unified system)
  - `hybrid-progress-tracker.js` (replaced by ProgressTracker)
  - `progress-compatibility.js` (compatibility built into main class)
  - `progress-system-validator.js` (validation integrated)
- **Architecture Change:** Single `ProgressTracker` class with strategy pattern
- **Legacy Compatibility:** Method names preserved in main class
- **Storage Modes:** Local, API, and Hybrid via adapter pattern

---

**Architecture Principle:** Every callable object has a single responsibility within its layer, follows the established hierarchy, and maintains clean separation of concerns. No function duplication across layers, all styling through CSS classes, and all database operations through Sequelize ORM.
