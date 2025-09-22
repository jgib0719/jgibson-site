#!/usr/bin/env python3
"""
CCNA Topic Array Formatting Standardizer
========================================

This script standardizes the formatting of JavaScript topic arrays across CCNA sections.
It converts compact, single-line SVG formatting to clean multi-line indented structure.

Key transformations:
- Single-line SVGs → Multi-line indented SVGs
- viewBox="0 0 200 100" → viewBox="0 0 400 200"  
- class="w-full h-full" → class="w-full h-auto"
- Single quotes → Double quotes for consistency
- Proper indentation and spacing

Usage:
    python3 format_standardizer.py section1.html
    python3 format_standardizer.py --dry-run section1.html
    python3 format_standardizer.py --backup section1.html
"""

import re
import argparse
import shutil
import sys
from pathlib import Path
from datetime import datetime

class CCNAFormatter:
    def __init__(self):
        self.changes_made = []
        
    def standardize_svg_formatting(self, content):
        """Convert compact SVG formatting to multi-line indented structure"""
        
        # Pattern to match topic objects with compact SVGs
        topic_pattern = r'(\{\s*title:\s*[\'"][^\'\"]+[\'"],\s*icon:\s*[\'"][^\'\"]+[\'"],\s*description:\s*[\'"][^\'\"]*[\'"],\s*visual:\s*`)<svg[^`]*>`(\s*\})'
        
        def format_svg_match(match):
            prefix = match.group(1)
            suffix = match.group(2)
            
            # Extract the SVG content
            svg_content = match.group(0)[len(prefix):-len(suffix)]
            
            # Remove the backticks around the SVG
            svg_content = svg_content.strip('`')
            
            # Parse and format the SVG
            formatted_svg = self.format_svg_content(svg_content)
            
            return f"{prefix}\n                        {formatted_svg}\n                    `{suffix}"
        
        # Apply the transformation
        new_content = re.sub(topic_pattern, format_svg_match, content, flags=re.DOTALL)
        
        if new_content != content:
            self.changes_made.append("Converted compact SVG formatting to multi-line structure")
            
        return new_content
    
    def format_svg_content(self, svg_text):
        """Format individual SVG content with proper indentation"""
        
        # Update viewBox dimensions
        svg_text = re.sub(r'viewBox="0 0 200 100"', 'viewBox="0 0 400 200"', svg_text)
        
        # Update CSS classes
        svg_text = re.sub(r'class="w-full h-full"', 'class="w-full h-auto"', svg_text)
        
        # Convert single quotes to double quotes in attributes
        svg_text = re.sub(r"(\w+)='([^']*)'", r'\1="\2"', svg_text)
        
        # Parse SVG elements and format with proper indentation
        formatted_lines = ['<svg viewBox="0 0 400 200" class="w-full h-auto">']
        
        # Extract title if present
        title_match = re.search(r'<title>([^<]*)</title>', svg_text)
        if title_match:
            formatted_lines.append(f'                            <title>{title_match.group(1)}</title>')
        
        # Extract and format other elements
        elements = re.findall(r'<(?!title|/title|svg|/svg)[^>]+/?>', svg_text)
        for element in elements:
            # Clean up the element
            element = element.strip()
            if element and not element.startswith('</'):
                formatted_lines.append(f'                            {element}')
        
        formatted_lines.append('                        </svg>')
        
        return '\n'.join(formatted_lines)
    
    def standardize_quotes(self, content):
        """Convert single quotes to double quotes in JavaScript object properties"""
        
        # Convert property names and string values to double quotes
        patterns = [
            (r"(\s+)title:\s*'([^']*)'", r'\1title: "\2"'),
            (r"(\s+)icon:\s*'([^']*)'", r'\1icon: "\2"'),
            (r"(\s+)description:\s*'([^']*)'", r'\1description: "\2"'),
        ]
        
        original_content = content
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        
        if content != original_content:
            self.changes_made.append("Standardized quotes from single to double")
            
        return content
    
    def format_topic_arrays(self, content):
        """Ensure proper spacing and indentation in topic arrays"""
        
        # Add proper spacing around object braces
        content = re.sub(r'\{\s*title:', r'{\n                    title:', content)
        content = re.sub(r'`\s*\}', r'`\n                }', content)
        
        # Ensure proper comma spacing
        content = re.sub(r'",(\w)', r'", \1', content)
        
        return content
    
    def process_file(self, file_path, dry_run=False, create_backup=False):
        """Process a single HTML file"""
        
        file_path = Path(file_path)
        
        if not file_path.exists():
            print(f"Error: File {file_path} not found")
            return False
        
        print(f"Processing: {file_path}")
        
        # Read the file
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"Error reading file: {e}")
            return False
        
        # Store original content for comparison
        original_content = content
        
        # Apply transformations
        content = self.standardize_quotes(content)
        content = self.standardize_svg_formatting(content)
        content = self.format_topic_arrays(content)
        
        # Check if any changes were made
        if content == original_content:
            print("No formatting changes needed")
            return True
        
        # Show changes summary
        print(f"Changes to be made:")
        for change in self.changes_made:
            print(f"  - {change}")
        
        if dry_run:
            print("DRY RUN: No files were modified")
            print(f"Would update {len(self.changes_made)} formatting aspects")
            return True
        
        # Create backup if requested
        if create_backup:
            backup_path = file_path.with_suffix(f'.backup.{datetime.now().strftime("%Y%m%d_%H%M%S")}.html')
            shutil.copy2(file_path, backup_path)
            print(f"Backup created: {backup_path}")
        
        # Write the updated content
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Successfully updated: {file_path}")
            print(f"Applied {len(self.changes_made)} formatting improvements")
            return True
        except Exception as e:
            print(f"Error writing file: {e}")
            return False

def main():
    parser = argparse.ArgumentParser(
        description="Standardize CCNA topic array formatting",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 format_standardizer.py section1.html
  python3 format_standardizer.py --dry-run section1.html  
  python3 format_standardizer.py --backup section1.html
  python3 format_standardizer.py --dry-run --backup section*.html
        """
    )
    
    parser.add_argument('files', nargs='+', help='HTML files to process')
    parser.add_argument('--dry-run', action='store_true', 
                       help='Show what would be changed without modifying files')
    parser.add_argument('--backup', action='store_true',
                       help='Create backup files before making changes')
    parser.add_argument('--verbose', '-v', action='store_true',
                       help='Show detailed processing information')
    
    args = parser.parse_args()
    
    formatter = CCNAFormatter()
    success_count = 0
    total_files = len(args.files)
    
    print(f"CCNA Formatting Standardizer")
    print(f"Processing {total_files} file(s)...")
    print("=" * 50)
    
    for file_path in args.files:
        formatter.changes_made = []  # Reset for each file
        
        if formatter.process_file(file_path, args.dry_run, args.backup):
            success_count += 1
        
        print("-" * 30)
    
    print(f"\nCompleted: {success_count}/{total_files} files processed successfully")
    
    if args.dry_run:
        print("\nTo apply changes, run without --dry-run flag")
    
    return 0 if success_count == total_files else 1

if __name__ == "__main__":
    sys.exit(main())