#!/usr/bin/env python3
"""
SVG Text Element Repair Tool
Fixes incomplete text elements in section1.html by analyzing context and positions.
"""

import re
import sys

def analyze_svg_context(content, line_num):
    """Analyze the context around an incomplete text element to determine appropriate content."""
    lines = content.split('\n')
    line_idx = line_num - 1
    
    # Get surrounding context
    context_lines = []
    start_idx = max(0, line_idx - 3)
    end_idx = min(len(lines), line_idx + 4)
    
    for i in range(start_idx, end_idx):
        prefix = "➤ " if i == line_idx else "  "
        context_lines.append(f"{prefix}{i+1:3d}: {lines[i].strip()}")
    
    return '\n'.join(context_lines)

def extract_text_attributes(text_tag):
    """Extract useful attributes from text tag to suggest content."""
    # Extract common attributes
    x_match = re.search(r'x="([^"]*)"', text_tag)
    y_match = re.search(r'y="([^"]*)"', text_tag)
    font_size_match = re.search(r'font-size="([^"]*)"', text_tag)
    fill_match = re.search(r'fill="([^"]*)"', text_tag)
    
    attributes = {}
    if x_match:
        attributes['x'] = x_match.group(1)
    if y_match:
        attributes['y'] = y_match.group(1)
    if font_size_match:
        attributes['font_size'] = font_size_match.group(1)
    if fill_match:
        attributes['fill'] = fill_match.group(1)
    
    return attributes

def suggest_text_content(context, attributes):
    """Suggest appropriate text content based on context and attributes."""
    context_lower = context.lower()
    
    # Look for network components
    if 'router' in context_lower or 'fill="#2563eb"' in context:
        return "R"
    elif 'switch' in context_lower or 'l2' in context_lower:
        return "SW"
    elif 'vlan' in context_lower:
        vlan_match = re.search(r'vlan\s*(\d+)', context_lower)
        if vlan_match:
            return f"VLAN {vlan_match.group(1)}"
        return "VLAN"
    elif 'lan' in context_lower:
        lan_match = re.search(r'lan\s*([ab])', context_lower)
        if lan_match:
            return f"LAN {lan_match.group(1).upper()}"
        return "LAN"
    elif 'port' in context_lower:
        return "Port"
    elif 'eth' in context_lower:
        return "Eth"
    elif 'fa' in context_lower or 'fastethernet' in context_lower:
        return "Fa"
    elif 'gi' in context_lower or 'gigabitethernet' in context_lower:
        return "Gi"
    
    # Check font size for different types of labels
    font_size = int(attributes.get('font_size', '12'))
    if font_size <= 7:
        return "Label"
    elif font_size <= 10:
        return "Port"
    elif font_size <= 14:
        return "Device"
    else:
        return "Network"

def repair_svg_text_elements(file_path):
    """Main repair function."""
    print(f"🔧 Repairing SVG text elements in {file_path}")
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    incomplete_pattern = r'<text[^>]*>\s*$'
    repairs_made = 0
    
    # Find all incomplete text elements
    for i, line in enumerate(lines):
        if re.search(incomplete_pattern, line):
            line_num = i + 1
            
            # Extract attributes and context
            attributes = extract_text_attributes(line)
            context = analyze_svg_context(content, line_num)
            suggested_content = suggest_text_content(context, attributes)
            
            print(f"\n📍 Line {line_num}:")
            print(f"   Original: {line.strip()}")
            print(f"   Context Preview:")
            for ctx_line in context.split('\n')[1:3]:  # Show 2 context lines
                print(f"   {ctx_line}")
            print(f"   Attributes: {attributes}")
            print(f"   Suggested: {suggested_content}")
            
            # Create the repair
            repaired_line = line.rstrip() + suggested_content + "</text>"
            lines[i] = repaired_line
            repairs_made += 1
            
            print(f"   Repaired:  {repaired_line.strip()}")
    
    # Write the repaired content
    repaired_content = '\n'.join(lines)
    
    # Create backup first
    backup_path = file_path + '.backup.pre-svg-repair'
    with open(backup_path, 'w') as f:
        f.write(content)
    
    # Write repaired version
    with open(file_path, 'w') as f:
        f.write(repaired_content)
    
    print(f"\n✅ Repair Summary:")
    print(f"   • Repairs made: {repairs_made}")
    print(f"   • Backup saved: {backup_path}")
    print(f"   • File updated: {file_path}")
    
    return repairs_made

if __name__ == "__main__":
    file_path = "/var/www/jgibson.site/public_html/section1.html"
    repairs = repair_svg_text_elements(file_path)
    print(f"\n🎯 Total repairs completed: {repairs}")