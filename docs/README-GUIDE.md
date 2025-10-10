# CCNA Study Guide - jgibson.site

## Study Guide System Overview

The CCNA Study Hub provides comprehensive study materials organized into 6 sections aligned with the official Cisco CCNA 200-301 exam objectives. The guide features interactive topic cards, progress tracking, and detailed explanations with configuration examples.

## Site Architecture - Study Guide Components

### Core JavaScript Files

- **`ccna-study-guide-config.js`** - Global configuration object and styling
- **`shared-progress.js`** - Unified progress tracking system  
- **`section-registry.js`** - Section metadata and topic counts
- **`section-loader.js`** - Section rendering controller
- **`hybrid-progress-tracker.js`** - Enhanced API sync (if available)
- **`anonymous-progress-tracker.js`** - Database integration
- **`accessibility-enhancements.js`** - Accessibility features

### Page Loading Workflow

#### Initial Page Load (`index.html`)

**Initialization Sequence:**

- `UnifiedCCNAProgressTracker` instantiated
- Overall progress calculated from localStorage
- Progress display updated (percentage, completed/total topics)
- Section navigation configured

#### Section Pages Loading (`sections.html` → `sectionX.html`)

**sections.html workflow:**

- `section-registry.js` - Section metadata loading
- `accessibility-enhancements.js` - Keyboard navigation setup

**Individual section page workflow:**

- `ccna-study-guide-config.js` - Global configuration applied
- `shared-progress.js` - Progress tracking initialized
- `section-loader.js` - Section rendering controller
- `sectionX-data.js` - Topic content and visual data
- `sectionX-details.js` - Detailed explanations
- Progress tracker integration

## CCNA Content Development Standards

### Official CCNA 200-301 Alignment

**Exam Topics:** Must align with /var/www/jgibson.site/docs/200-301-CCNA-v1.1.pdf

**Topic Numbering:** Follow official Cisco numbering (1.1.a, 1.1.b, etc.)

**Exam Weight Distribution:**

- **Section 1:** Network Fundamentals (20%)
- **Section 2:** Network Access (20%)
- **Section 3:** IP Connectivity (25%)
- **Section 4:** IP Services (10%)
- **Section 5:** Security Fundamentals (15%)
- **Section 6:** Automation & Programmability (10%)

### Content Depth Requirements

**For each topic, include:**

1. **Conceptual Overview** - What it is and why it matters
2. **Technical Details** - How it works (protocols, mechanisms)
3. **Configuration Examples** - Practical CLI commands and syntax
4. **Troubleshooting** - Common issues and debug commands
5. **Real-world Applications** - Where/when it's used
6. **Exam Focus Points** - What CCNA candidates must know
7. **Study Resources** - Links to official docs, videos, labs

**Content Quality Standards:**

- **Accuracy:** All technical information verified against Cisco documentation
- **Completeness:** Cover all exam objectives for each topic
- **Clarity:** Written for entry-level network engineers
- **Examples:** Include real device configurations and output
- **Currency:** Keep up-to-date with latest IOS versions and best practices

### ⚠️ **CRITICAL: Content Duplication Prevention**

**Before adding new content, always verify no duplication exists across sections:**

- **Search all section files** for similar topics, keywords, and concepts
- **Check both data and details files** for overlapping content
- **Maintain clear section boundaries** according to CCNA exam objectives:
  - **Section 1:** Fundamental concepts and theory
  - **Section 2:** Layer 2 switching and VLANs  
  - **Section 3:** Layer 3 routing and connectivity
  - **Section 4:** IP services implementation and configuration
  - **Section 5:** Security mechanisms and policies
  - **Section 6:** Automation and programmability tools

**Resolution Strategy for Overlaps:**

- **Conceptual content** belongs in Section 1 (Network Fundamentals)
- **Implementation details** belong in the appropriate technical section
- **Add cross-references** when topics relate (e.g., "For NAT configuration details, see Section 4.1")
- **Remove duplicated content** and replace with section references

**Example Topics with Clear Boundaries:**

- **Private IPv4 (1.7):** RFC 1918 ranges, why private addressing exists, basic NAT concepts
- **NAT Configuration (4.1):** Specific commands, static/dynamic/PAT setup, verification
- **VLAN Concepts (1.x):** What VLANs are, benefits, basic theory
- **VLAN Configuration (2.x):** Commands, trunking, VLAN database management

## Progress Tracking System

### Core Classes

#### `UnifiedCCNAProgressTracker`

**Constructor:** `new UnifiedCCNAProgressTracker(currentChapter)`

**Methods:**

- `markTopicCompleted(topicTitle, completed = true)`
- `isTopicCompleted(topicTitle, chapter = null)`
- `getOverallProgress()` - Returns `{completed, total, percentage}`
- `getChapterProgress(chapterNum)` - Returns chapter-specific progress
- `updateAllProgressBars()` - Refresh all visual progress indicators
- `syncVisualState()` - Update topic card visual states

#### `HybridCCNAProgressTracker` (extends UnifiedCCNAProgressTracker)

**Enhanced Features:**

- Database synchronization with offline fallback
- Automatic conflict resolution
- Cross-device progress sync

#### `AnonymousProgressTracker`

**API Methods:**

- `saveProgress(sectionNumber, topicTitle, completed)`
- `loadProgress()` - Returns all user progress
- `deleteProgress()` - Clear all user data
- `syncWithLocalStorage()` - Merge local/remote data

### Section Registry System

#### `CCNA_SECTION_REGISTRY`

**Methods:**

- `getTopicTotal(sectionNumber)` - Get topic count
- `updateTopicTotal(sectionNumber, totalTopics)` - Update counts
- `getSectionInfo(sectionNumber)` - Get section metadata
- `registerSectionData(sectionNumber, sectionData)` - Register new data

## Section Content Structure

### Data Objects (`sectionX-data.js`)

**`SECTIONX_DATA` Structure:**

- `components[]` - Network components with visuals
- `topologies[]` - Network topology diagrams  
- `cabling[]` - Physical interface specifications
- `protocols[]` - Protocol explanations
- `addressing[]` - IP addressing concepts
- `metadata.totalTopics` - Dynamic topic counting

### Details Objects (`sectionX-details.js`)

**`SECTIONX_DETAILS` Structure:**

- `{topicTitle: "detailed HTML explanation"}` - Key-value pairs
- Rich HTML content with code examples
- Best practices and configuration examples

## Styling Guidelines

### Color Scheme Pattern for `sectionX-details.js`

**❌ Never use Tailwind CSS classes** (e.g., `class="text-xl font-bold"`)

**✅ Always use inline styles** for proper modal rendering

### 5-Color Rotation Pattern

1. **Blue (`#00A8FF`)** - Primary/foundational concepts, basic theory
2. **Green (`#2ECC71`)** - Configuration/implementation, hands-on tasks  
3. **Orange (`#F39C12`)** - Protocols, advanced features, dynamic operations
4. **Red (`#E74C3C`)** - Security, protection mechanisms, troubleshooting
5. **Purple (`#9B59B6`)** - Specialized topics, wireless, advanced services

### Color Application Rules

- **H3 headers**: Use the assigned color with bottom border
- **H4 headers**: Use a lighter shade of the same color family:
  - Blue → `#58D4FF`
  - Green → `#58D68D`
  - Orange → `#F5B041`
  - Red → `#EC7063`
  - Purple → `#AF7AC5`
- **H5 headers** (Study Resources): Always use `#00CFFF` regardless of topic color
- **Body text**: `#E0E0E0`
- **Code backgrounds**: `#2D2D2D`

### Essential Style Templates

```html
<!-- Main Container -->
<div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">

<!-- Primary Headers (H3) -->
<h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">

<!-- Secondary Headers (H4) -->
<h4 style="color: #58D4FF;">

<!-- Code Blocks -->
<pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">command here</span>
</code>

<!-- CCNA Exam Focus Footer -->
<div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
    <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
    <ul style="margin-left: 20px; color: #B0B0B0;">
        <li>Key exam point here</li>
    </ul>
</div>
```

### Code Example Standards

**CLI Configuration Blocks:**

```html
<div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
    <code style="color: #e2e8f0;">
    Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
    Router(config-if)# <span style="color: #9CDCFE;">ip address 192.168.1.1 255.255.255.0</span><br>
    Router(config-if)# <span style="color: #C586C0;">no shutdown</span>
    </code>
</div>
```

**Syntax Highlighting Colors:**

- **Commands:** `#DCDCAA` (yellow-green)
- **Parameters:** `#9CDCFE` (light blue)
- **Keywords:** `#C586C0` (purple)
- **Comments:** `#6A9955` (green)
- **Strings:** `#CE9178` (orange)

## Multi-Topic Card Strategy

### When to Split Topics into Multiple Cards

**Split when topic has:**

- Multiple distinct subtopics (e.g., 6.3.a, 6.3.b, 6.3.c)
- Different technology categories (e.g., routing protocols: OSPF, EIGRP, RIP)
- Contrasting concepts (e.g., Traditional vs SDN networking)
- Progressive difficulty levels (Basic → Intermediate → Advanced)

**Examples of Effective Multi-Card Topics:**

```javascript
// Section 6.4 - AI & Machine Learning
aiMachineLearning: [
  { title: "AI in Network Operations" },      // Overview & applications
  { title: "Machine Learning Applications" }, // Specific ML techniques  
  { title: "Predictive Analytics" }          // Advanced implementations
]

// Section 6.5 - REST API Characteristics  
restApiCharacteristics: [
  { title: "REST API Fundamentals" },        // Basic concepts
  { title: "HTTP Verbs & CRUD" },           // Technical implementation
  { title: "Authentication Types" },        // Security aspects
  { title: "Data Encoding" }                // JSON/XML formats
]
```

### Card Naming Conventions

- **Descriptive:** Clear indication of content focus
- **Concise:** 2-4 words maximum for card titles
- **Hierarchical:** Follow logical progression (Basic → Advanced)
- **Consistent:** Use similar naming patterns within sections

## Section Management Classes

### `SectionLoader`

**Constructor:** `new SectionLoader(sectionNumber, sectionData)`

**Methods:**

- `populateTopicGrid(container, topics, gridClass)` - Render topic cards
- `openModal(topic)` - Display topic details modal
- `closeModal()` - Hide modal
- `showErrorMessage(message)` - Error handling

### `CCNAConfig` (Global Configuration Object)

**Modal Methods:**

- `openModal(modal, content)` - Modal state management
- `applySvgStyling()` - Dynamic SVG rendering
- `applyButtonState(button, isCompleted)` - Button state styling

**Initialization:**

- `initializeGlobalStyling()` - Apply all CSS configurations

## SVG Visual Design Standards

### Network Diagrams

```svg
<!-- Standard network device representations -->
<circle cx="100" cy="100" r="20" fill="#334155"/>  <!-- Router -->
<rect x="80" y="80" width="40" height="40" rx="5" fill="#1e293b"/>  <!-- Switch -->
<rect x="70" y="70" width="60" height="60" rx="8" fill="#6366f1"/>  <!-- Controller -->
```

### Color Coding

- **Devices:** Dark grays (#334155, #1e293b)
- **Data Flow:** Green (#10b981) for active paths
- **Control Plane:** Blue (#6366f1) for management
- **Warnings/Issues:** Orange (#f59e0b) or Red (#ef4444)
- **Success/Up Status:** Green (#10b981)

### Visual Design Principles

- **Simplicity:** Focus on key concepts, avoid clutter
- **Consistency:** Use same symbols across all sections
- **Clarity:** Ensure readability at modal size
- **Accessibility:** Consider color-blind friendly palettes

## Technical Implementation Guidelines

### Detailed Expansion Process

**For Complex Topic Expansions (like NAT or SNMP):**

#### Step 1: Data Structure Updates (`sectionX-data.js`)

```javascript
// Example: Expanding NAT from 2 to 5 cards
natConfiguration: [
  {
    title: "Static NAT",
    icon: "fa-exchange-alt",
    description: "One-to-one permanent IP address mappings",
    visual: '<svg>...</svg>'
  },
  {
    title: "Dynamic NAT Pool", 
    icon: "fa-swimming-pool",
    description: "Pool-based dynamic address assignment",
    visual: '<svg>...</svg>'
  },
  {
    title: "PAT (Overload)",
    icon: "fa-sitemap", 
    description: "Port Address Translation for maximum efficiency",
    visual: '<svg>...</svg>'
  },
  {
    title: "NAT Troubleshooting",
    icon: "fa-bug",
    description: "Debug commands and systematic verification",
    visual: '<svg>...</svg>'
  },
  {
    title: "NAT Security & Port Forwarding",
    icon: "fa-shield-alt",
    description: "Access control and security considerations", 
    visual: '<svg>...</svg>'
  }
]
```

**CRITICAL: Update metadata.totalTopics count:**

```javascript
metadata: {
  totalTopics: 15  // Increment by number of new cards added
}
```

#### Step 2: Content Creation (`sectionX-details.js`)

**Template for Comprehensive Topic Details:**

```javascript
"Topic Title": `
<div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
  <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">
    X.Y.z: Topic Title
  </h3>
  <p>Overview paragraph explaining what this topic covers and why it matters for CCNA.</p>
  
  <h4 style="color: #58D4FF;">Configuration Examples</h4>
  <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Comments in green</span>
Router(config)# <span style="color: #DCDCAA;">commands in yellow-green</span>
Router(config-if)# <span style="color: #9CDCFE;">parameters in light blue</span>
</code>
  </pre>
  
  <h4 style="color: #58D4FF;">Technical Details</h4>
  <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
    <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
      <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Concept</td><td style="padding: 8px; border-bottom: 1px solid #444;">Explanation</td></tr>
    </table>
  </div>
  
  <h4 style="color: #58D4FF;">Verification Commands</h4>
  <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show commands here</span>
Router# <span style="color: #DCDCAA;">debug commands here</span>
</code>
  </pre>
  
  <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
    <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
    <ul style="margin-left: 20px; color: #B0B0B0;">
      <li>Key exam points that students must know</li>
      <li>Common misconceptions to avoid</li>
      <li>Configuration syntax requirements</li>
    </ul>
  </div>
</div>
`,
```

### Content Quality Assurance Checklist

**Before submitting any expansion:**

- [ ] **Technical Accuracy**: All CLI commands tested and verified
- [ ] **Color Consistency**: Proper 5-color rotation pattern applied
- [ ] **Code Highlighting**: Consistent syntax highlighting colors used
- [ ] **CCNA Alignment**: Content directly supports exam objectives
- [ ] **Progressive Depth**: Logical flow from basic to advanced concepts
- [ ] **No Duplication**: Verified no overlapping content across sections
- [ ] **Title Matching**: Exact title consistency between data and details files
- [ ] **Metadata Update**: Topic counts updated in both data file and registry

### SVG Visual Standards

**Consistent Network Element Representations:**

```svg
<!-- Router representation -->
<circle cx="50" cy="50" r="20" fill="#334155" stroke="#64748b" stroke-width="2"/>
<text x="50" y="55" text-anchor="middle" fill="#e2e8f0" font-size="12">R</text>

<!-- Switch representation -->  
<rect x="30" y="30" width="40" height="40" rx="5" fill="#1e293b" stroke="#475569" stroke-width="2"/>
<text x="50" y="55" text-anchor="middle" fill="#e2e8f0" font-size="12">SW</text>

<!-- Data flow arrows -->
<path d="M20 50 L80 50" stroke="#10b981" stroke-width="3" marker-end="url(#arrowhead)"/>

<!-- Port/interface indicators -->
<circle cx="100" cy="50" r="5" fill="#3b82f6"/>
```

### Advanced Content Patterns

**For Troubleshooting Cards:**

- Start with systematic troubleshooting methodology
- Include debug command outputs with explanations
- Cover common failure scenarios with solutions
- Provide verification steps for each fix

**For Security Cards:**

- Begin with security implications and threat landscape
- Detail access control mechanisms and best practices
- Include monitoring and logging configurations
- End with real-world security considerations

**For Configuration Cards:**

- Progress from basic to advanced configuration
- Include multiple implementation scenarios
- Show both GUI and CLI methods where applicable
- Provide configuration validation steps

This documentation ensures any new contributor can replicate the same high-quality expansion methodology that made the NAT and SNMP expansions successful.

### Content Addition Workflow

#### 1. Add New Topics to Section

1. **Edit:** `public_html/guide/js/sectionX-data.js`
   - Add topic object to appropriate category array
   - Include: `title`, `icon`, `description`, `visual` (SVG)
   - Update `metadata.totalTopics` count

2. **Edit:** `public_html/guide/js/sectionX-details.js`  
   - Add detailed explanation with same topic title as key
   - Include HTML content with examples and configurations
   - **IMPORTANT:** When adding multiple detail modals, add them one topic at a time to avoid input length restrictions
   - Post the specific line changes after each topic addition for verification

3. **Registry Update:** (Automatic)
   - Section registry updates topic count automatically
   - Progress tracking recalculates percentages

#### 2. Create New Section

1. **Create:** `public_html/guide/sectionX.html`
   - Copy template from existing section
   - Update section number in title and scripts
   - Load: `sectionX-data.js`, `sectionX-details.js`

2. **Create:** `public_html/guide/js/sectionX-data.js`
   - Define `SECTIONX_DATA` object structure
   - Organize topics by categories (components, protocols, etc.)
   - Set `metadata.totalTopics` accurately

3. **Create:** `public_html/guide/js/sectionX-details.js`
   - Define `SECTIONX_DETAILS` object
   - Map topic titles to detailed explanations

4. **Update:** `public_html/guide/sections.html`
   - Add section card to main grid
   - Include proper section number and navigation

5. **Update:** `public_html/guide/js/section-registry.js`
   - Add section metadata to `sectionInfo` object
   - Set initial topic total estimate

### Content Development Workflow

### Content Development Philosophy

When developing content for the CCNA Study Guide, we follow a **content-driven expansion approach**:

> **"If you can see where content can be expanded, I would always like to do that. Rather than just matching the number of cards that other sections have, expand them into more cards if you see information that can be added without duplicating information."**

This philosophy prioritizes educational value over structural consistency. When analyzing topics:

1. **Identify Knowledge Gaps**: Look for areas where additional depth would benefit exam preparation
2. **Avoid Duplication**: Ensure each new card covers distinct concepts and skills
3. **Maintain Coherence**: Each expanded card should have a clear, focused scope
4. **Add Practical Value**: Include CLI examples, troubleshooting scenarios, and real-world applications

### Expansion Guidelines

- **Break Down Complex Topics**: Large topics like SNMP or NAT benefit from focused sub-topics
- **Add Specialized Skills**: Dedicated cards for troubleshooting, security, and advanced configuration
- **Include Exam-Relevant Details**: Ensure comprehensive coverage of CCNA 200-301 objectives
- **Provide Progressive Depth**: Build from fundamentals to advanced implementation

### Successful Expansion Methodology

**Step-by-Step Process for Quality Expansions:**

1. **Analyze Current Content**: Identify gaps, shallow coverage, or areas lacking practical examples
2. **Research CCNA Objectives**: Ensure expanded content directly supports exam requirements
3. **Create Logical Subtopics**: Break complex subjects into focused, teachable chunks
4. **Develop Comprehensive Details**: Include CLI examples, troubleshooting, and real-world scenarios
5. **Update Both Files**: Modify section-data.js for cards AND section-details.js for content
6. **Verify Consistency**: Ensure topic titles match exactly between data and details files

**Quality Indicators for Successful Expansions:**

- ✅ Each new card covers distinct technical concepts without duplication
- ✅ Progressive complexity from basic concepts to advanced implementation
- ✅ Comprehensive CLI examples with syntax highlighting
- ✅ Troubleshooting scenarios and verification commands
- ✅ Real-world context and practical applications
- ✅ CCNA exam focus sections highlighting key points
- ✅ Proper color scheme rotation and consistent styling

### Recent Expansions

- **SNMP Operations (4.4)**: Expanded from 1 card to 4 cards (Fundamentals, Configuration, MIB & OIDs, Monitoring & Traps)
- **NAT Configuration (4.1)**: Expanded from 2 cards to 5 cards (Static NAT, Dynamic Pool, PAT, Troubleshooting, Security & Port Forwarding)

**NAT Expansion Success Factors:**

- Identified gaps in PAT coverage, troubleshooting guidance, and security considerations
- Created specialized cards for advanced topics (port forwarding, DMZ, security)
- Added comprehensive debug commands and systematic troubleshooting processes
- Included performance monitoring and scalability considerations
- Maintained clear separation between basic concepts and advanced implementation

Each expansion adds substantial technical content without redundancy while maintaining the study guide's educational standards.

#### Phase 1: Content Creation

1. **Data File Updates** (`sectionX-data.js`)
   - Add topic cards with SVG visuals
   - Update metadata topic counts
   - Ensure proper array structure

2. **Details File Creation** (`sectionX-details.js`)
   - Write comprehensive explanations
   - Include configuration examples
   - Add troubleshooting sections
   - Follow styling guidelines

3. **HTML Structure Updates** (`sectionX.html`)
   - Add new section grids
   - Update page titles and descriptions
   - Ensure proper script loading order

#### Phase 2: Quality Assurance

1. **Technical Review**
   - Verify all CLI commands and configurations
   - Test syntax highlighting and formatting
   - Validate external links and resources
   - Check color scheme consistency

2. **Educational Review**
   - Ensure CCNA exam alignment
   - Verify appropriate difficulty level
   - Check logical topic progression
   - Validate learning objectives coverage

## API Integration for Progress Tracking

### Progress Storage

- **Local Storage:** Browser localStorage for offline access
- **Database Storage:** SQLite via REST API for persistence  
- **Hybrid Mode:** Automatic sync between local and remote storage

### API Development Standards

**Endpoint Naming Conventions:**

```javascript
// RESTful URL patterns
GET    /api/v1/progress              // Get all user progress
POST   /api/v1/progress              // Create new progress entry
PUT    /api/v1/progress/{id}         // Update specific progress
DELETE /api/v1/progress/{id}         // Delete progress entry
GET    /api/v1/sections/{id}/topics  // Get topics for section
```

**Response Format Standards:**

```json
{
  "success": true,
  "data": {
    "section": 1,
    "topic": "Routers",
    "completed": true,
    "timestamp": "2024-03-15T10:30:00Z"
  },
  "message": "Progress updated successfully"
}
```

### Database Schema

**progress Table:**

```sql
CREATE TABLE progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,           -- Browser fingerprint
    section_number INTEGER NOT NULL,  -- 1-6 for CCNA sections
    topic_title TEXT NOT NULL,       -- Exact topic name
    completed BOOLEAN DEFAULT FALSE, -- Completion status
    completed_at DATETIME,           -- Completion timestamp
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, section_number, topic_title)
);
```

## CSS and Styling Configuration

### Global Styling Changes

- **Primary:** `public_html/guide/css/site.css` - All visual styling
- **Configuration:** `public_html/guide/js/ccna-study-guide-config.js` - CSS class mappings

### Component-Specific Styling

- **Modal styling:** `CCNAConfig.modal` object
- **Card styling:** `CCNAConfig.cards` object  
- **Progress bars:** `CCNAConfig.layout` object
- **Color scheme:** `CCNAConfig.ui.colors` object

### Utility Functions

#### Config Helper (`Config` object)

- `getElement(key)` - Get DOM element by config ID
- `addClass(element, classKey)` - Apply configured CSS classes
- `getText(textKey, placeholders)` - Get text with placeholder replacement
- `getColor(colorKey)` - Get color from configuration

## Documentation Standards

### JavaScript Function Documentation

```javascript
/**
 * Marks a topic as completed and updates all related UI elements
 * 
 * @param {string} topicTitle - The exact title of the topic to mark
 * @param {boolean} completed - Whether the topic is completed (default: true)
 * @param {number|null} chapter - Optional chapter number for cross-section tracking
 * @returns {boolean} Success status of the operation
 * @throws {Error} When topicTitle is invalid or not found
 * 
 * @example
 * const tracker = new UnifiedCCNAProgressTracker(1);
 * tracker.markTopicCompleted('Routers', true);
 * 
 * @since 2.0.0
 * @author CCNA Study Hub Team
 */
markTopicCompleted(topicTitle, completed = true, chapter = null) {
  // Implementation here
}
```

### CSS Class Documentation

```css
/**
 * Topic card component styling
 * Used for displaying individual CCNA topics in section grids
 * 
 * States:
 * - .topic-card: Default state
 * - .topic-card.completed: Completed topic (green border)
 * - .topic-card:hover: Hover interaction
 * - .topic-card:focus: Keyboard focus styling
 * 
 * Responsive breakpoints:
 * - Mobile: Single column layout
 * - Tablet: 2-column grid
 * - Desktop: 3-column grid
 */
.topic-card {
  /* Styles here */
}
```

### API Endpoint Documentation

```javascript
/**
 * POST /api/v1/progress
 * 
 * Creates or updates a user's progress for a specific topic
 * 
 * Request Body:
 * {
 *   "section": number,    // Section number (1-6)
 *   "topic": string,     // Exact topic title
 *   "completed": boolean // Completion status
 * }
 * 
 * Response (201 Created):
 * {
 *   "success": true,
 *   "data": {
 *     "id": number,
 *     "section": number,
 *     "topic": string,
 *     "completed": boolean,
 *     "timestamp": string
 *   }
 * }
 * 
 * Error Responses:
 * - 400: Invalid request data
 * - 429: Rate limit exceeded
 * - 500: Server error
 */
```

## Dependencies

### Backend

- Node.js, Express, SQLite3, security middleware

### Frontend  

- Font Awesome, Google Fonts, vanilla JavaScript

### Server

- Apache with mod_rewrite, mod_deflate, mod_expires
