# CCNA Content Build Pipeline

**Phase 2 Task 7: Content Architecture Unification**

This build pipeline transforms unified JSON content files into optimized JavaScript files compatible with the existing CCNA study guide system.

## Overview

**Current Problem**: Split content files (`section{N}-data.js` + `section{N}-details.js`) require manual maintenance and dual editing.

**Solution**: Unified JSON content files with automated build pipeline that generates optimized production files.

## Architecture

```
content/
├── schema.json              # JSON schema for validation
├── section1.json           # Unified content (data + details)
├── section2.json           # ...
└── section6.json

build/
├── content-validator.js     # Validates JSON against schema
├── content-compiler.js      # Generates optimized JS files  
├── search-indexer.js        # Builds search index
├── build-pipeline.js        # Orchestrates full pipeline
└── package.json            # Dependencies and scripts

js/ (generated)
├── section1-data.js         # Generated topic cards
├── section1-details.js      # Generated modal content
├── section2-data.js         # ...
├── search-index.js          # Full search capabilities
└── topic-directory.js       # Navigation structure
```

## Features

### ✅ Content Validation
- **JSON Schema validation** against defined structure
- **Content integrity checks** (SVG structure, accessibility, CSP compliance)
- **Cross-reference validation** (section numbers, topic IDs)
- **Detailed error reporting** with line numbers and descriptions

### ✅ Content Compilation  
- **Optimized JS generation** from unified JSON sources
- **HTML minification** for production efficiency
- **SVG optimization** with preserved accessibility
- **Backward compatibility** with existing section-loader.js

### ✅ Search Indexing
- **Full-text search index** with term weighting
- **Tag-based categorization** for topic discovery
- **Difficulty-based filtering** for learning progression
- **Fast client-side search** with ranking algorithm

### ✅ Build Pipeline
- **Single command build** with comprehensive reporting
- **Watch mode** for development with auto-rebuild
- **Performance metrics** and compression analysis
- **Error handling** with detailed diagnostics

## Usage

### Prerequisites
```bash
cd /var/www/jgibson.site/public_html/guide/build
npm install
```

### Build Commands

```bash
# Full production build
npm run build

# Development with auto-rebuild
npm run watch

# Individual pipeline steps
npm run validate    # Validate content only
npm run compile     # Compile JS files only  
npm run index      # Build search index only

# Clean generated files
npm run clean

# Test pipeline
npm run test
```

### Manual Pipeline Steps

```bash
# Validate content against schema
node content-validator.js ../content/schema.json ../content ./reports

# Compile to optimized JS files
node content-compiler.js ../content ../js

# Build search index
node search-indexer.js ../content ../js

# Full pipeline with custom paths
node build-pipeline.js build /path/to/content /path/to/output
```

## Content Structure

### Unified JSON Schema

Each section content file follows this structure:

```json
{
  "metadata": {
    "sectionNumber": 1,
    "title": "Network Fundamentals", 
    "version": "2.0.0",
    "lastModified": "2025-10-16T03:30:00Z",
    "examFocus": ["key exam topics"]
  },
  "subsections": {
    "components": {
      "title": "1.1 Network Components",
      "topics": [
        {
          "id": "routers",
          "title": "Routers",
          "icon": "fa-route",
          "summary": "Brief description for cards",
          "visual": "<svg>...</svg>",
          "content": {
            "overview": "<div>Detailed HTML content</div>",
            "examTips": ["Tip 1", "Tip 2"],
            "commands": [
              {
                "command": "show ip route",
                "description": "Display routing table",
                "example": "Router# show ip route"
              }
            ]
          },
          "difficulty": "intermediate",
          "tags": ["routing", "layer3"]
        }
      ]
    }
  }
}
```

### Generated Output

The pipeline generates backward-compatible files:

**section{N}-data.js**: Topic cards with visual elements
```javascript
const SECTION1_DATA = {
  components: [
    {
      title: "Routers",
      icon: "fa-route", 
      description: "Brief summary",
      visual: "<svg>optimized</svg>"
    }
  ],
  metadata: {
    sectionNumber: 1,
    totalTopics: 35,
    // ...
  }
};
```

**section{N}-details.js**: Modal content for detailed explanations
```javascript  
const SECTION1_DETAILS = {
  "Routers": "<div>minified HTML content</div>",
  "Switches": "<div>minified HTML content</div>"
  // ...
};
```

## Benefits

### 🎯 Single Source of Truth
- **One file per section** containing all content
- **Unified editing** - no more dual maintenance
- **Version control** with semantic versioning
- **Content validation** prevents inconsistencies

### ⚡ Performance Optimized
- **HTML minification** reduces bundle size
- **SVG optimization** maintains visual quality
- **Search indexing** enables fast topic discovery
- **Lazy loading** compatible with existing system

### 🔧 Developer Experience  
- **Auto-rebuild** during development
- **Comprehensive validation** catches errors early
- **Detailed reporting** for build analysis
- **Hot reload** compatible (future Vite integration)

### 📊 Production Ready
- **CSP compliant** output with no inline styles
- **Accessibility preserved** with SVG titles
- **Semantic color classes** maintained
- **Search capabilities** for enhanced UX

## Migration Path

1. **Phase 2a** (Current): Build pipeline with unified JSON schema ✅
2. **Phase 2b** (Next): Convert existing section1-6 data to unified JSON format
3. **Phase 2c** (Final): Replace manual files with generated files in production

## Development Workflow

```bash
# 1. Edit unified content
vim ../content/section1.json

# 2. Auto-build (if watching)
npm run watch

# 3. Test in browser  
# Generated files automatically loaded by section.html

# 4. Production deployment
npm run build
# Commit generated files or deploy via CI/CD
```

## Error Handling

The pipeline provides detailed error reporting:

- **Validation errors**: Schema violations, missing required fields
- **Content errors**: Invalid SVG, CSP violations, broken references  
- **Compilation errors**: JSON parsing, file I/O issues
- **Build reports**: Performance metrics, file sizes, warnings

## Future Enhancements

- **Vite integration** for hot module replacement
- **TypeScript support** with generated type definitions
- **Content versioning** with rollback capabilities
- **A/B testing** framework for content optimization
- **Analytics integration** for usage tracking

---

**Ready for Phase 2 Task 8**: Modern Build Pipeline (Vite integration) 🚀