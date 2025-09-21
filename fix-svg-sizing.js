#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * SVG Sizing Consistency Fixer
 * Analyzes SVGs and fixes sizing inconsistencies to match Router's optimal scale
 */

const SECTION1_DATA_PATH = './public_html/js/section1-data.js';

// Router SVG characteristics (our reference standard)
const ROUTER_STANDARDS = {
    minX: 20,
    maxX: 380,
    width: 360,
    centerX: 200,
    largeElementWidth: 120,
    largeElementHeight: 80,
    mediumElementRadius: 30,
    viewBoxWidth: 400,
    viewBoxHeight: 200
};

// Minimum standards for good SVG design
const SIZING_STANDARDS = {
    minUtilizedWidth: 280,  // Should use at least 70% of viewBox width
    minElementSize: 40,     // Main elements should be at least 40px
    optimalCenterX: 200,    // Center around x=200
    optimalSpread: 300      // Should span ~300px for good composition
};

function extractSvgElements(svgContent) {
    const elements = [];
    
    // Extract rectangles
    const rectMatches = svgContent.matchAll(/<rect\s+([^>]+)>/g);
    for (const match of rectMatches) {
        const attrs = parseAttributes(match[1]);
        if (attrs.x && attrs.width) {
            elements.push({
                type: 'rect',
                x: parseInt(attrs.x),
                y: parseInt(attrs.y || 0),
                width: parseInt(attrs.width),
                height: parseInt(attrs.height || 20),
                original: match[0]
            });
        }
    }
    
    // Extract circles
    const circleMatches = svgContent.matchAll(/<circle\s+([^>]+)>/g);
    for (const match of circleMatches) {
        const attrs = parseAttributes(match[1]);
        if (attrs.cx && attrs.r) {
            const radius = parseInt(attrs.r);
            elements.push({
                type: 'circle',
                x: parseInt(attrs.cx) - radius,
                y: parseInt(attrs.cy || 0) - radius,
                width: radius * 2,
                height: radius * 2,
                cx: parseInt(attrs.cx),
                cy: parseInt(attrs.cy || 0),
                r: radius,
                original: match[0]
            });
        }
    }
    
    return elements;
}

function parseAttributes(attrString) {
    const attrs = {};
    const matches = attrString.matchAll(/(\w+)="([^"]+)"/g);
    for (const match of matches) {
        attrs[match[1]] = match[2];
    }
    return attrs;
}

function analyzeSvgSizing(svgContent, title) {
    const elements = extractSvgElements(svgContent);
    
    if (elements.length === 0) {
        return { needsFix: false, reason: 'No elements found' };
    }
    
    // Calculate current bounds
    const minX = Math.min(...elements.map(e => e.x));
    const maxX = Math.max(...elements.map(e => e.x + e.width));
    const utilizedWidth = maxX - minX;
    const currentCenterX = (minX + maxX) / 2;
    
    // Calculate largest element size
    const maxElementSize = Math.max(...elements.map(e => Math.max(e.width, e.height)));
    
    const analysis = {
        title,
        minX,
        maxX,
        utilizedWidth,
        currentCenterX,
        maxElementSize,
        elementCount: elements.length,
        needsFix: false,
        issues: []
    };
    
    // Check for sizing issues
    if (utilizedWidth < SIZING_STANDARDS.minUtilizedWidth) {
        analysis.needsFix = true;
        analysis.issues.push(`Underutilized width: ${utilizedWidth}px < ${SIZING_STANDARDS.minUtilizedWidth}px`);
    }
    
    if (maxElementSize < SIZING_STANDARDS.minElementSize) {
        analysis.needsFix = true;
        analysis.issues.push(`Elements too small: ${maxElementSize}px < ${SIZING_STANDARDS.minElementSize}px`);
    }
    
    if (Math.abs(currentCenterX - SIZING_STANDARDS.optimalCenterX) > 20) {
        analysis.needsFix = true;
        analysis.issues.push(`Poor centering: center at ${currentCenterX}px vs optimal ${SIZING_STANDARDS.optimalCenterX}px`);
    }
    
    return analysis;
}

function generateFixedSvg(svgContent, analysis) {
    const elements = extractSvgElements(svgContent);
    
    // Calculate scaling and translation
    const currentWidth = analysis.utilizedWidth;
    const targetWidth = Math.max(SIZING_STANDARDS.minUtilizedWidth, currentWidth);
    const scaleFactor = Math.min(2.5, targetWidth / currentWidth); // Max 2.5x scaling
    
    // Calculate translation to center
    const currentCenterX = analysis.currentCenterX;
    const targetCenterX = SIZING_STANDARDS.optimalCenterX;
    const translateX = targetCenterX - (currentCenterX * scaleFactor);
    
    let fixedSvg = svgContent;
    
    // Apply fixes to each element
    for (const element of elements) {
        let newElement;
        
        if (element.type === 'rect') {
            const newX = Math.round(element.x * scaleFactor + translateX);
            const newWidth = Math.round(element.width * scaleFactor);
            const newHeight = Math.round(element.height * scaleFactor);
            
            newElement = element.original.replace(
                /x="[^"]+"/,
                `x="${newX}"`
            ).replace(
                /width="[^"]+"/,
                `width="${newWidth}"`
            ).replace(
                /height="[^"]+"/,
                `height="${newHeight}"`
            );
        } else if (element.type === 'circle') {
            const newCx = Math.round(element.cx * scaleFactor + translateX);
            const newR = Math.round(element.r * scaleFactor);
            
            newElement = element.original.replace(
                /cx="[^"]+"/,
                `cx="${newCx}"`
            ).replace(
                /r="[^"]+"/,
                `r="${newR}"`
            );
        }
        
        if (newElement) {
            fixedSvg = fixedSvg.replace(element.original, newElement);
        }
    }
    
    // Also fix any text elements and lines
    const textMatches = fixedSvg.matchAll(/<text\s+([^>]*x="[^"]+")[^>]*>/g);
    for (const match of textMatches) {
        const attrs = parseAttributes(match[1]);
        if (attrs.x) {
            const newX = Math.round(parseInt(attrs.x) * scaleFactor + translateX);
            const newText = match[0].replace(/x="[^"]+"/, `x="${newX}"`);
            fixedSvg = fixedSvg.replace(match[0], newText);
        }
    }
    
    const lineMatches = fixedSvg.matchAll(/<line\s+([^>]+)>/g);
    for (const match of lineMatches) {
        const attrs = parseAttributes(match[1]);
        let newLine = match[0];
        
        if (attrs.x1) {
            const newX1 = Math.round(parseInt(attrs.x1) * scaleFactor + translateX);
            newLine = newLine.replace(/x1="[^"]+"/, `x1="${newX1}"`);
        }
        if (attrs.x2) {
            const newX2 = Math.round(parseInt(attrs.x2) * scaleFactor + translateX);
            newLine = newLine.replace(/x2="[^"]+"/, `x2="${newX2}"`);
        }
        
        if (newLine !== match[0]) {
            fixedSvg = fixedSvg.replace(match[0], newLine);
        }
    }
    
    return fixedSvg;
}

function main() {
    console.log('🔍 SVG Sizing Consistency Fixer\n');
    
    // Read the section1-data.js file
    const fileContent = fs.readFileSync(SECTION1_DATA_PATH, 'utf8');
    
    // Extract all visual sections
    const visualMatches = fileContent.matchAll(/visual:\s*`([^`]+)`/g);
    const issues = [];
    const fixes = [];
    
    for (const match of visualMatches) {
        const svgContent = match[1].trim();
        
        // Extract title from context (look backwards for title)
        const beforeMatch = fileContent.substring(0, match.index);
        const titleMatch = beforeMatch.match(/title:\s*"([^"]+)"/g);
        const title = titleMatch ? titleMatch[titleMatch.length - 1].replace(/title:\s*"([^"]+)"/, '$1') : 'Unknown';
        
        const analysis = analyzeSvgSizing(svgContent, title);
        
        if (analysis.needsFix) {
            issues.push(analysis);
            
            console.log(`❌ ${title}:`);
            analysis.issues.forEach(issue => console.log(`   • ${issue}`));
            
            const fixedSvg = generateFixedSvg(svgContent, analysis);
            fixes.push({
                title,
                original: match[0],
                fixed: `visual: \`${fixedSvg}\``
            });
        } else {
            console.log(`✅ ${title}: No issues found`);
        }
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`   • Total SVGs analyzed: ${visualMatches.length}`);
    console.log(`   • Issues found: ${issues.length}`);
    console.log(`   • Fixes generated: ${fixes.length}`);
    
    if (fixes.length > 0) {
        console.log('\n🔧 Applying fixes...');
        
        let fixedContent = fileContent;
        for (const fix of fixes) {
            fixedContent = fixedContent.replace(fix.original, fix.fixed);
            console.log(`   ✓ Fixed: ${fix.title}`);
        }
        
        // Create backup
        const backupPath = SECTION1_DATA_PATH + '.backup.' + Date.now();
        fs.writeFileSync(backupPath, fileContent);
        console.log(`   📋 Backup created: ${backupPath}`);
        
        // Write fixed file
        fs.writeFileSync(SECTION1_DATA_PATH, fixedContent);
        console.log(`   💾 Fixed file written: ${SECTION1_DATA_PATH}`);
        
        console.log('\n🎉 SVG sizing fixes applied successfully!');
    } else {
        console.log('\n✨ All SVGs are already properly sized!');
    }
}

if (require.main === module) {
    main();
}

module.exports = {
    analyzeSvgSizing,
    generateFixedSvg,
    SIZING_STANDARDS,
    ROUTER_STANDARDS
};