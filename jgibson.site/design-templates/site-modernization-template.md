# CCNA Site Modernization Template Prompt

## Copy this entire template into a new chat to convert your CCNA site to match the Split Horizon card design

---

## Context & Objective

I'm working on a CCNA 200-301 exam preparation platform with interactive quiz and chapter study systems. I want to convert the entire site to match the modern, professional dark card-based design format shown in the attached screenshot (Split Horizon topic card).

## Current Architecture

- **Technology Stack**: HTML5 + Tailwind CSS + Vanilla JavaScript ES6+
- **Data Layer**: Static JSON files, localStorage for progress tracking  
- **Structure**: Quiz app (`index.html`) + Chapter study system (`chapter1-6.html`) + Chapter list (`chapters.html`)
- **Progress System**: `UnifiedCCNAProgressTracker` class in `shared-progress.js`
- **File Organization**: Backup files (`.backup`), Python tools for content management

## Target Design Style (Reference Implementation)

Based on the Split Horizon topic card screenshot, the desired format includes:

### Visual Design Standards

- **Background**: Deep dark slate (`#0f172a` / `#1e293b`) with subtle gradients
- **Typography**:
  - Headers: 'Orbitron' font with cyan/blue accent colors (`#22d3ee`, `#0ea5e9`)
  - Body: 'Rajdhani' font with light slate text (`#cbd5e1`, `#94a3b8`)
  - Code: Monospace with syntax highlighting (green `#22c55e` for keywords)
- **Layout**: Card-based design with rounded corners (`rounded-lg`) and subtle shadows
- **Color Scheme**:
  - Primary cards: `bg-slate-800` with `border-slate-700`
  - Secondary sections: `bg-slate-700`
  - Accent colors: Yellow (`#fbbf24`), Green (`#22c55e`), Blue (`#3b82f6`), Red (`#ef4444`)
  - Text hierarchy: White headers, cyan subheaders, light gray body text

### Card Structure Pattern

```html
<div class="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-lg">
    <!-- Header with accent color -->
    <h3 class="text-xl font-bold text-cyan-400 mb-4">Topic Title</h3>
    
    <!-- Content sections with color coding -->
    <div class="bg-slate-700 p-4 rounded-lg mb-4">
        <h5 class="font-semibold text-yellow-300 mb-2">Core Principle</h5>
        <div class="bg-red-900/30 border border-red-600 p-3 rounded">
            <p class="text-red-200">Critical information or quotes</p>
        </div>
    </div>
    
    <!-- Example sections -->
    <div class="bg-slate-700 p-4 rounded-lg mb-4">
        <h5 class="font-semibold text-green-400 mb-2">Example Section</h5>
        <div class="bg-slate-800 p-3 rounded">
            <p class="text-slate-300">Detailed explanations...</p>
            <ul class="list-disc list-inside space-y-1 text-sm text-slate-400">
                <li>Structured list items</li>
                <li>Technical details</li>
            </ul>
        </div>
    </div>
    
    <!-- Configuration/Code sections -->
    <div class="bg-slate-700 p-4 rounded-lg mb-4">
        <h5 class="font-semibold text-yellow-300 mb-2">Configuration</h5>
        <div class="bg-slate-900 p-3 rounded border border-slate-600">
            <pre class="text-green-400 text-sm font-mono">
# Configuration examples
interface Serial0/0/0
no ip split-horizon
            </pre>
        </div>
    </div>
    
    <!-- Special considerations -->
    <div class="bg-slate-700 p-4 rounded-lg mb-4">
        <h5 class="font-semibold text-blue-400 mb-2">Special Considerations</h5>
        <ul class="space-y-2">
            <li class="flex items-start gap-2">
                <span class="text-yellow-400">•</span>
                <span class="text-slate-300">NBMA networks: May need to disable on hub routers</span>
            </li>
        </ul>
    </div>
    
    <!-- Exam tips -->
    <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
        <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-lightbulb text-blue-400"></i>
            <span class="font-semibold text-blue-300">Exam Tip</span>
        </div>
        <p class="text-blue-200">Important exam-focused information...</p>
    </div>
</div>
```

### Interactive Elements

- **Hover Effects**: Cards lift slightly with enhanced shadows and border glow
- **Progress Indicators**: Gradient progress bars (indigo to purple)
- **Buttons**: Consistent styling with hover states and disabled states
- **Modals**: Dark overlay with centered cards using same styling system
- **Navigation**: Dark theme with accent colors for active states

## Files to Convert

### Priority Order

1. **index.html** - Quiz interface (currently light theme)
2. **chapters.html** - Chapter selection page (currently light theme)  
3. **chapter1-6.html** - Individual chapter pages (already have dark theme but need card structure updates)

### Current State

- Chapter pages use dark theme but inconsistent card structures
- Index and chapters pages use light theme (gray backgrounds)
- Mixed typography (Inter vs Rajdhani/Orbitron)

## Conversion Requirements

### CSS Framework

- Continue using Tailwind CSS
- Add custom fonts: Rajdhani (body), Orbitron (headings)
- Implement consistent color variables
- Create reusable component classes

### JavaScript Compatibility

- Preserve all existing functionality
- Maintain `UnifiedCCNAProgressTracker` integration
- Keep modal systems and progress tracking
- Ensure mobile responsiveness

### Content Structure

- Convert topic cards to match Split Horizon format
- Implement color-coded sections (principle, examples, configuration, tips)
- Add proper syntax highlighting for code blocks
- Include exam tip callouts with icons

## Design System Colors

```css
/* Primary Background Colors */
--bg-primary: #0f172a;      /* slate-900 */
--bg-secondary: #1e293b;    /* slate-800 */
--bg-tertiary: #334155;     /* slate-700 */

/* Text Colors */
--text-primary: #f1f5f9;    /* slate-100 */
--text-secondary: #cbd5e1;  /* slate-300 */
--text-muted: #94a3b8;      /* slate-400 */

/* Accent Colors */
--accent-cyan: #22d3ee;     /* cyan-400 */
--accent-yellow: #fbbf24;   /* yellow-400 */  
--accent-green: #22c55e;    /* green-500 */
--accent-blue: #3b82f6;     /* blue-500 */
--accent-red: #ef4444;      /* red-500 */

/* Interactive States */
--border-default: #475569;  /* slate-600 */
--border-focus: #4f46e5;    /* indigo-600 */
--shadow-glow: rgba(79, 70, 229, 0.4);
```

## Typography System

```css
/* Headings */
.title-font { font-family: 'Orbitron', sans-serif; }
.body-font { font-family: 'Rajdhani', sans-serif; }

/* Text Sizes */
.text-hero { font-size: 2.5rem; font-weight: 900; }
.text-title { font-size: 1.5rem; font-weight: 700; }
.text-subtitle { font-size: 1.125rem; font-weight: 600; }
.text-body { font-size: 1rem; font-weight: 400; }
.text-small { font-size: 0.875rem; font-weight: 400; }
```

## Implementation Instructions

When converting pages:

1. **Replace light backgrounds** with dark slate colors
2. **Update typography** to use Rajdhani/Orbitron fonts
3. **Convert content cards** to use the Split Horizon structure
4. **Add color coding** for different content types
5. **Implement hover effects** and interactive states
6. **Include exam tip callouts** with proper styling
7. **Test responsiveness** on mobile devices
8. **Preserve all existing JavaScript functionality**

## Expected Results

- **Visual Consistency**: All pages match the Split Horizon card design
- **Professional Appearance**: Dark theme with proper visual hierarchy
- **Enhanced UX**: Clear content organization with color coding
- **Mobile Friendly**: Responsive design that works on all devices
- **Preserved Functionality**: All existing features continue to work

## Usage Instructions

1. **Copy this entire template** into a new AI chat session
2. **Attach screenshot** of the Split Horizon card design as reference
3. **Specify which file** you want to convert (index.html, chapters.html, etc.)
4. **Request conversion** with the exact styling shown in the reference
5. **Test and iterate** until the design matches perfectly

---

**Template Ready**: Use this prompt in any new chat session to convert your CCNA site pages to match the beautiful Split Horizon card design!
