# JGIBSON.SITE - Complete Codebase Analysis & Documentation

## Project Overview

A CCNA study guide website with interactive topic cards and modal dialogs for studying network fundamentals. The site features 6 sections covering different networking topics with visual diagrams and progress tracking.

## Directory Tree Structure

```
jgibson.site/
├── .git/                          # Git repository files
├── .gitignore
├── center-modals.sh              # Script for centering modal content
└── public_html/
    ├── api/
    │   └── database.php           # Database API endpoint
    ├── css/
    │   ├── site.css              # Main stylesheet
    │   └── site.css.backup.20250924_171304  # Backup CSS
    ├── images/
    │   ├── cisco-logo.svg
    │   ├── wiley-logo.svg
    │   └── questions/             # Question images (PNG, JPEG, GIF)
    ├── js/
    │   ├── ccna-quiz-engine.js    # Quiz functionality
    │   ├── ccna-study-guide-config.js  # Main configuration & modal system
    │   ├── section1-data.js       # Section 1 topic data
    │   ├── section1-details.js    # Section 1 detailed content
    │   ├── section2-data.js       # Section 2 topic data
    │   ├── section2-details.js    # Section 2 detailed content
    │   ├── section3-data.js       # Section 3 topic data
    │   ├── section3-details.js    # Section 3 detailed content
    │   ├── section4-data.js       # Section 4 topic data
    │   ├── section4-details.js    # Section 4 detailed content
    │   ├── section5-data.js       # Section 5 topic data
    │   ├── section5-details.js    # Section 5 detailed content
    │   ├── section6-data.js       # Section 6 topic data
    │   ├── section6-details.js    # Section 6 detailed content
    │   └── shared-progress.js     # Progress tracking system
    ├── ccna_topics.db             # SQLite database
    ├── cisco-exam-topics.txt      # Text file with exam topics
    ├── favicon.ico
    ├── favicon.svg
    ├── index.html                 # Homepage
    ├── questions.json             # Quiz questions data
    ├── section1.html              # Network Fundamentals
    ├── section2.html              # Network Access
    ├── section3.html              # IP Connectivity
    ├── section4.html              # IP Services
    ├── section5.html              # Security Fundamentals
    ├── section6.html              # Automation and Programmability
    ├── sections.html              # Section overview page
    └── wiley_questions.json       # Additional quiz questions
```

## Modal System Architecture

### Current Modal Structure

The website uses a custom modal system with the following HTML structure:

#### Study Modal (Main Modal)

```html
<div id="studyModal">                    <!-- Modal overlay -->
    <div id="modalContent">              <!-- Modal container -->
        <div id="modalVisual">           <!-- SVG diagram area -->
            <div id="modalSvg"></div>    <!-- SVG content container -->
        </div>
        <div id="modalMainArea">         <!-- Content area -->
            <button id="closeModal">&times;</button>
            <h2 id="modalTitle"></h2>
            <p id="modalDescription"></p>
            <button id="markCompleted">Mark as Studied</button>
            <button id="viewDetails">View Details</button>
        </div>
    </div>
</div>
```

#### Details Modal (Secondary Modal)

```html
<div id="detailsModal">                  <!-- Details modal overlay -->
    <div id="detailsModalContent">       <!-- Details modal container -->
        <div id="detailsModalMain">      <!-- Details content area -->
            <button id="closeDetails">&times;</button>
            <h2 id="detailsModalTitle"></h2>
            <div id="detailsModalBody">  <!-- Dynamic details content -->
            </div>
        </div>
    </div>
</div>
```

### CSS Classes Used

- `.modal-backdrop` - Modal overlay background
- `.modal` - Modal container styling
- `.modal .visual` - Visual/SVG area styling
- `.modal .body` - Modal content area
- `.topic-card` - Interactive topic cards
- `.studied` - Completed topic state

## JavaScript Functions & Objects

### CCNAConfig Object (ccna-study-guide-config.js)

The main configuration object that controls all modal behavior:

#### Modal Management Functions

```javascript
CCNAConfig.openModal(modal, content)         // Opens study modal
CCNAConfig.closeModal(modal, content)        // Closes study modal
CCNAConfig.openDetailsModal(modal, content)  // Opens details modal
CCNAConfig.closeDetailsModal(modal, content) // Closes details modal
CCNAConfig.applySvgStyling()                 // Styles SVG elements
CCNAConfig.applyButtonState(button, state)   // Updates button states
```

#### Configuration Properties

```javascript
CCNAConfig.modal                    // Study modal styling config
CCNAConfig.detailsModal             // Details modal styling config  
CCNAConfig.cards                    // Topic card styling config
CCNAConfig.layout                   // Page layout configuration
CCNAConfig.ui.timing                // Animation timing settings
CCNAConfig.styles                   // CSS classes and states
```

### Section-Specific Functions (section1.html, etc.)

Each section HTML file contains:

```javascript
function openStudyModal(topic, cardElement)    // Opens study modal for topic
function openDetailsModal(topic, cardElement)  // Opens details modal
function closeStudyModal()                     // Closes study modal
function closeDetailsModal()                   // Closes details modal
```

### Progress Tracking (shared-progress.js)

```javascript
progressTracker.isTopicCompleted(topicTitle)  // Check if topic is complete
progressTracker.markTopicCompleted(title)     // Mark topic as studied
progressTracker.syncVisualState()             // Update visual indicators
```

### Data Objects

Each section has corresponding data files:
- `SECTION1_TOPICS` - Array of topic objects with title, description, visual (SVG)
- `SECTION1_DETAILS` - Object with detailed explanations for each topic

## Current CSS Selectors

### Layout & Structure

```css
.container              /* Main page container */
.header                 /* Page header */
.grid                   /* Topic card grid */
.back-btn              /* Navigation back button */
```

### Topic Cards

```css
.topic-card            /* Main card styling */
.topic-card:hover      /* Hover effects */
.topic-card .title     /* Card title */
.topic-card .subtitle  /* Card subtitle */
.studied-overlay       /* Completion indicator */
.topic-card.studied    /* Completed state */
```

### Modal System

```css
.modal-backdrop        /* Modal overlay */
.modal                 /* Modal container */
.modal .visual         /* SVG diagram area */
.modal .body          /* Modal content area */
```

### Utility Classes

```css
.p-4, .p-6            /* Padding utilities */
.mb-4, .mt-4          /* Margin utilities */
.hidden, .visible     /* Display utilities */
.icon-sm              /* Small icon sizing */
```

## Modal Centering Issue Analysis

### Problem Identified

The current modal centering CSS was targeting incorrect selectors. The HTML structure uses IDs like `#modalContent`, `#modalMainArea`, etc., but the CSS was targeting generic classes like `.modal-content`, `.modal-header`.

### Current Broken CSS

```css
/* These selectors don't match the actual HTML structure */
.modal-content { text-align: center; }
.modal-header { text-align: center; }
.modal-body { text-align: center; }
.modal-footer { display: flex; justify-content: center; }
```

### Required CSS Fix

```css
/* Target the actual HTML IDs */
#modalContent, #detailsModalContent { text-align: center; }
#modalMainArea, #detailsModalMain { text-align: center; }
#modalTitle, #detailsModalTitle { text-align: center; }
#modalDescription, #detailsModalBody { text-align: center; }
#modalMainArea button { margin: 8px 5px; }
#modalVisual, #modalSvg { text-align: center; }
```

## Event Handling

### Topic Card Clicks

```javascript
// Each topic card has onclick handlers:
onclick="openStudyModal(topics[X], this)"    // Study modal
onclick="openDetailsModal(topics[X], this)"  // Details modal
```

### Button Interactions

```javascript
// Mark as Studied button
document.getElementById('markCompleted').onclick

// View Details button  
document.getElementById('viewDetails').onclick

// Close buttons
document.getElementById('closeModal').onclick
document.getElementById('closeDetails').onclick
```

## Configuration System

The site uses a centralized configuration approach with `CCNAConfig` object containing:
- Modal dimensions and styling
- Animation timings
- CSS class definitions
- Button states and text
- Layout configurations

This makes the system maintainable but complex, as styling is split between:
1. Static CSS file (`site.css`)
2. Dynamic JavaScript configuration (`ccna-study-guide-config.js`)
3. Inline styles applied programmatically

## Files That Need Modal Centering

All section files use the same modal structure:
- `section1.html` - Network Fundamentals
- `section2.html` - Network Access  
- `section3.html` - IP Connectivity
- `section4.html` - IP Services
- `section5.html` - Security Fundamentals
- `section6.html` - Automation and Programmability

## Recommended Solution

The modal centering should target the actual HTML IDs used in the structure, not generic CSS classes. The fix should be applied to `site.css` to center:
1. Modal titles (`#modalTitle`, `#detailsModalTitle`)
2. Modal descriptions (`#modalDescription`, `#detailsModalBody`)
3. Modal buttons (within `#modalMainArea`, `#detailsModalMain`)
4. SVG diagrams (`#modalVisual`, `#modalSvg`)