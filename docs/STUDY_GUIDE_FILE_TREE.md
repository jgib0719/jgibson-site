# Study Guide File Tree
**CCNA Study Guide - File Structure Reference**
*Generated: October 16, 2025*

> This document lists all files used by the Study Guide portion of the site.
> Files marked with `*` are shared between Study Guide and Quiz functionality.

---

## Root Structure
```
jgibson.site/
├── public_html/
│   ├── index.html                          # Main landing page
│   ├── site.css                            # * Shared global styles
│   ├── favicon.ico                         # * Site icon
│   ├── .htaccess                           # * Apache configuration
│   │
│   └── guide/                              # Study Guide root directory
│       ├── sections.html                   # Section overview page
│       ├── section.html                    # Dynamic section page template
│       ├── package.json                    # NPM dependencies & build scripts
│       ├── package-lock.json               # NPM lock file
│       │
│       ├── js/                             # JavaScript files
│       │   ├── bundle.min.js               # Bundled core functionality
│       │   │
│       │   ├── ccna-study-guide-config.js  # Global configuration
│       │   ├── security-utils.js           # * Security utilities (XSS protection)
│       │   ├── user-identity.js            # * User ID generation/management
│       │   ├── progress-tracker.js         # Progress tracking system
│       │   ├── section-registry.js         # Section metadata registry
│       │   ├── section-loader.js           # Section page loader
│       │   ├── section-overall-progress.js # Section progress display
│       │   ├── section-dynamic-loader.js   # Dynamic section initialization
│       │   ├── overall-progress-init.js    # Overall progress initialization
│       │   │
│       │   ├── section1-data.js            # Section 1: Network Fundamentals (data)
│       │   ├── section1-details.js         # Section 1: Detailed content
│       │   ├── section1-init.js            # Section 1: Initialization
│       │   ├── section2-data.js            # Section 2: Network Access (data)
│       │   ├── section2-details.js         # Section 2: Detailed content
│       │   ├── section2-init.js            # Section 2: Initialization
│       │   ├── section3-data.js            # Section 3: IP Connectivity (data)
│       │   ├── section3-details.js         # Section 3: Detailed content
│       │   ├── section3-init.js            # Section 3: Initialization
│       │   ├── section4-data.js            # Section 4: IP Services (data)
│       │   ├── section4-details.js         # Section 4: Detailed content
│       │   ├── section4-init.js            # Section 4: Initialization
│       │   ├── section5-data.js            # Section 5: Security Fundamentals (data)
│       │   ├── section5-details.js         # Section 5: Detailed content
│       │   ├── section5-init.js            # Section 5: Initialization
│       │   ├── section6-data.js            # Section 6: Automation (data)
│       │   ├── section6-details.js         # Section 6: Detailed content
│       │   ├── section6-init.js            # Section 6: Initialization
│       │   │
│       │   ├── accessibility-enhancements.js # Accessibility features
│       │   ├── section-init.js             # Generic section initialization
│       │   ├── common-entry.js             # Common entry point
│       │   ├── progress-entry.js           # Progress entry point
│       │   ├── search-entry.js             # Search entry point
│       │   └── vendor-entry.js             # Vendor libraries entry
│       │
│       ├── content/                        # Content data (future use)
│       │   ├── schema.json                 # Content schema definition
│       │   └── section1-sample.json        # Sample section content
│       │
│       └── build/                          # Build tools (future use)
│           ├── README.md                   # Build system documentation
│           ├── package.json                # Build dependencies
│           ├── build-pipeline.js           # Build pipeline orchestrator
│           ├── content-compiler.js         # Content compilation
│           ├── content-validator.js        # Content validation
│           └── search-indexer.js           # Search index generation
│
├── api/                                    # Backend API server
│   ├── server.js                           # * Express server entry point
│   ├── package.json                        # * NPM dependencies
│   ├── package-lock.json                   # * NPM lock file
│   ├── ccna-api.service                    # * Systemd service file
│   ├── .env                                # * Environment variables
│   ├── .env.example                        # * Environment template
│   ├── .eslintrc.js                        # * ESLint configuration
│   ├── .prettierrc                         # * Prettier configuration
│   │
│   ├── config/
│   │   └── index.js                        # * API configuration
│   │
│   ├── routes/
│   │   ├── index.js                        # * Route aggregator
│   │   ├── progress.js                     # Progress tracking routes
│   │   ├── questions.js                    # Quiz questions routes
│   │   └── quiz-completions.js             # Quiz completion routes
│   │
│   ├── controllers/
│   │   ├── progressController.js           # Progress tracking logic
│   │   ├── questionsController.js          # Quiz questions logic
│   │   └── quizController.js               # Quiz completion logic
│   │
│   ├── services/
│   │   ├── progressService.js              # Progress business logic
│   │   ├── questionsService.js             # Quiz questions business logic
│   │   └── quizService.js                  # Quiz completion business logic
│   │
│   ├── models/
│   │   ├── database.js                     # * Database connection
│   │   ├── index.js                        # * Model aggregator
│   │   ├── Progress.js                     # Progress data model
│   │   ├── Questions.js                    # Quiz questions data model
│   │   ├── QuizCompletion.js               # Quiz completion data model
│   │   └── ApiStats.js                     # * API statistics model
│   │
│   ├── middleware/
│   │   ├── apiStats.js                     # * API statistics tracking
│   │   ├── errorHandler.js                 # * Error handling middleware
│   │   └── validation.js                   # * Request validation
│   │
│   ├── scripts/
│   │   ├── init-database.js                # * Database initialization
│   │   ├── migrate-data.js                 # * Data migration scripts
│   │   ├── migrate-questions.js            # Quiz data migration
│   │   ├── cleanup-citations.js            # Quiz data cleanup
│   │   ├── sequelize-init.js               # * Sequelize setup
│   │   └── validate_questions.py           # Quiz validation (Python)
│   │
│   ├── data/                               # Database files (SQLite)
│   ├── logs/                               # API logs
│   └── tests/
│       ├── setup.js                        # * Test setup
│       └── questions.test.js               # Quiz tests
│
└── docs/                                   # Documentation
    ├── ARCHITECTURE_REFERENCE.md           # * Architecture documentation
    ├── GOLDEN_RULES.md                     # * Development rules
    ├── consolidated-improvement-guide.md   # * Improvement guide
    ├── implementation-roadmap.md           # * Implementation roadmap
    └── STUDY_GUIDE_FILE_TREE.md           # This file
```

---

## File Categories

### Core Study Guide Files (Guide Only)
- `/public_html/guide/sections.html` - Section overview page
- `/public_html/guide/section.html` - Dynamic section template
- `/public_html/guide/js/ccna-study-guide-config.js` - Global config
- `/public_html/guide/js/progress-tracker.js` - Progress tracking
- `/public_html/guide/js/section-loader.js` - Section page logic
- `/public_html/guide/js/section-registry.js` - Section metadata
- `/public_html/guide/js/section-overall-progress.js` - Progress display
- `/public_html/guide/js/section-dynamic-loader.js` - Dynamic loading
- `/public_html/guide/js/overall-progress-init.js` - Progress init
- `/public_html/guide/js/section[1-6]-data.js` - Section content data
- `/public_html/guide/js/section[1-6]-details.js` - Detailed content
- `/public_html/guide/js/section[1-6]-init.js` - Section initialization

### API Files Used by Study Guide
- `/api/routes/progress.js` - Progress tracking API routes
- `/api/controllers/progressController.js` - Progress controller
- `/api/services/progressService.js` - Progress business logic
- `/api/models/Progress.js` - Progress data model

### Shared Files (Used by Both Guide and Quiz)
- `/public_html/index.html` - Landing page
- `/public_html/site.css` - Global styles
- `/public_html/guide/js/security-utils.js` - Security utilities
- `/public_html/guide/js/user-identity.js` - User identification
- `/api/server.js` - Express server
- `/api/config/` - API configuration
- `/api/models/database.js` - Database connection
- `/api/middleware/` - All middleware

### Build & Development Files
- `/public_html/guide/package.json` - Dependencies
- `/public_html/guide/build/` - Build tools (future)
- `/public_html/guide/content/` - Content system (future)

### Documentation
- `/docs/ARCHITECTURE_REFERENCE.md` - System architecture
- `/docs/GOLDEN_RULES.md` - Development guidelines
- `/docs/consolidated-improvement-guide.md` - Improvements
- `/docs/implementation-roadmap.md` - Future plans

---

## Key Architecture Notes

### Frontend Architecture
1. **Bundled Core**: `bundle.min.js` contains:
   - `ccna-study-guide-config.js`
   - `security-utils.js`
   - `section-registry.js`
   - `user-identity.js`
   - `progress-tracker.js`
   - `section-overall-progress.js`
   - `section-loader.js`

2. **Dynamic Loading**: `section-dynamic-loader.js` loads section-specific JS files on demand

3. **Section Files**: Each section has 3 files:
   - `section[N]-data.js` - Topic metadata & content
   - `section[N]-details.js` - Detailed explanations
   - `section[N]-init.js` - Section initialization

### Backend Architecture
1. **Progress Tracking**: Separate from quiz functionality
2. **RESTful API**: `/api/v1/progress` endpoints
3. **Hybrid Storage**: LocalStorage + Server sync
4. **SQLite Database**: Stores progress per user

### Storage Strategy
- **Local First**: Progress saved to localStorage immediately
- **Server Sync**: Background sync to API
- **Offline Queue**: Failed syncs queued for retry
- **User Identity**: UUID stored in localStorage

---

## Total File Count
- **Study Guide Specific**: ~45 files
- **Shared (Guide + Quiz)**: ~25 files
- **Total Study Guide Related**: ~70 files

---

*Last Updated: October 16, 2025*
*Maintained by: Development Team*
