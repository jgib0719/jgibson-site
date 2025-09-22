# CCNA Formatting Tools Usage Guide

## Overview

This directory contains two Python scripts for maintaining consistent formatting across CCNA study sections:

- **`format_standardizer.py`** - Automatically standardizes topic array formatting
- **`format_analyzer.py`** - Analyzes and reports formatting differences

## Quick Start

### 1. Analyze Current Formatting
```bash
# Compare two sections
python3 format_analyzer.py public_html/section1.html public_html/section2.html

# Get summary report
python3 format_analyzer.py --report=summary public_html/section*.html

# Export analysis to JSON
python3 format_analyzer.py --report=json public_html/section1.html > analysis.json
```

### 2. Standardize Formatting
```bash
# Dry run (see what would change)
python3 format_standardizer.py --dry-run public_html/section1.html

# Apply changes with backup
python3 format_standardizer.py --backup public_html/section1.html

# Process multiple files
python3 format_standardizer.py --backup public_html/section*.html
```

## Formatting Standards Applied

### SVG Standardization
- **ViewBox**: `200x100` → `400x200` for better scaling
- **CSS Classes**: `w-full h-full` → `w-full h-auto` for responsive design
- **Structure**: Single-line → Multi-line indented for readability

### Quote Standardization
- **Property Names**: Single quotes → Double quotes
- **String Values**: Consistent double quote usage
- **Eliminates**: Mixed quote patterns

### Code Structure
- **Indentation**: Proper spacing and alignment
- **Line Breaks**: Readable multi-line format
- **Consistency**: Uniform formatting across all topic arrays

## Example Transformation

### Before (Compact Format)
```javascript
{
    title: 'Routers', 
    icon: 'fa-route',
    description: 'Forward packets between networks using routing tables.',
    visual: `<svg viewBox="0 0 200 100" class="w-full h-full"><rect x="20" y="30" width="60" height="40" rx="8" fill="#4f46e5"/><text x="50" y="55" text-anchor="middle" font-size="12" fill="white">Router</text></svg>`
}
```

### After (Standardized Format)
```javascript
{
    title: "Routers",
    icon: "fa-route", 
    description: "Forward packets between networks using routing tables.",
    visual: `
        <svg viewBox="0 0 400 200" class="w-full h-auto">
            <rect x="20" y="30" width="60" height="40" rx="8" fill="#4f46e5"/>
            <text x="50" y="55" text-anchor="middle" font-size="12" fill="white">Router</text>
        </svg>
    `
}
```

## Script Options

### format_standardizer.py
- `--dry-run` - Preview changes without modifying files
- `--backup` - Create timestamped backup files before changes
- `--verbose` - Show detailed processing information

### format_analyzer.py  
- `--report=summary|detailed|json` - Choose output format
- `--output=FILE` - Save report to file instead of stdout

## Safety Features

1. **Backup Creation**: Automatic timestamped backups when requested
2. **Dry Run Mode**: Preview all changes before applying
3. **Error Handling**: Graceful handling of file read/write issues
4. **Validation**: Analysis tools to verify formatting consistency

## Workflow Recommendations

1. **Before Changes**: Run analyzer to understand current state
2. **Preview**: Use `--dry-run` to see what will change
3. **Apply**: Run with `--backup` for safety
4. **Verify**: Re-run analyzer to confirm consistency
5. **Commit**: Add formatted files to version control

## Maintenance

- Run formatter when adding new sections
- Use analyzer to catch formatting drift
- Keep backups for critical changes
- Document any custom formatting needs

## Troubleshooting

**Issue**: Script reports no changes needed
- **Solution**: File may already be properly formatted

**Issue**: Backup files accumulating
- **Solution**: Clean old backups periodically: `rm *.backup.*.html`

**Issue**: Formatting not applied correctly
- **Solution**: Check file permissions, run with `--verbose` for details

## Integration

These tools can be integrated into:
- **Pre-commit hooks**: Ensure formatting before commits
- **CI/CD pipelines**: Validate formatting in builds  
- **Development workflow**: Regular formatting maintenance
- **Code reviews**: Automated formatting checks