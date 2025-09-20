#!/usr/bin/env python3
"""
Style Comparison Tool
Compares styling between index.html/chapters.html and chapter pages
"""

import re
from pathlib import Path

def extract_styles(html_content):
    """Extract styling information from HTML"""
    styles = {
        'external_css': [],
        'inline_styles': [],
        'body_classes': [],
        'color_scheme': 'light',  # default
        'fonts': []
    }
    
    # External CSS
    css_links = re.findall(r'<link[^>]*href=["\']([^"\']*\.css)["\']', html_content)
    styles['external_css'] = css_links
    
    # Inline styles
    style_blocks = re.findall(r'<style[^>]*>(.*?)</style>', html_content, re.DOTALL)
    for block in style_blocks:
        styles['inline_styles'].append(block.strip()[:200] + '...' if len(block) > 200 else block.strip())
    
    # Body classes and background
    body_match = re.search(r'<body[^>]*class=["\']([^"\']*)["\']', html_content)
    if body_match:
        styles['body_classes'] = body_match.group(1).split()
    
    # Detect color scheme
    if '#0f172a' in html_content or 'slate-900' in html_content or 'bg-black' in html_content:
        styles['color_scheme'] = 'dark'
    
    # Fonts
    font_matches = re.findall(r'font-family:\s*["\']([^"\']*)["\']', html_content)
    styles['fonts'] = list(set(font_matches))
    
    return styles

def compare_styling():
    """Compare styling across different page types"""
    base_path = Path("/var/www/jgibson.site/public_html")
    
    files_to_compare = {
        'index.html': 'Quiz Interface',
        'chapters.html': 'Chapter List', 
        'chapter1.html': 'Chapter Study Page'
    }
    
    print("CCNA SITE STYLING COMPARISON")
    print("="*50)
    
    file_styles = {}
    
    for filename, description in files_to_compare.items():
        file_path = base_path / filename
        if file_path.exists():
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            styles = extract_styles(content)
            file_styles[filename] = styles
            
            print(f"\n{description} ({filename}):")
            print(f"  Color Scheme: {styles['color_scheme']}")
            print(f"  Body Classes: {' '.join(styles['body_classes'])}")
            print(f"  External CSS: {styles['external_css']}")
            print(f"  Fonts: {styles['fonts']}")
            print(f"  Inline Styles: {len(styles['inline_styles'])} blocks")
        else:
            print(f"\n{description} ({filename}): FILE NOT FOUND")
    
    # Compare differences
    print(f"\nSTYLING DIFFERENCES:")
    print("-"*30)
    
    if 'index.html' in file_styles and 'chapter1.html' in file_styles:
        index_scheme = file_styles['index.html']['color_scheme']
        chapter_scheme = file_styles['chapter1.html']['color_scheme']
        
        if index_scheme != chapter_scheme:
            print(f"• Color schemes differ: index.html is {index_scheme}, chapters are {chapter_scheme}")
        
        index_fonts = set(file_styles['index.html']['fonts'])
        chapter_fonts = set(file_styles['chapter1.html']['fonts'])
        
        if index_fonts != chapter_fonts:
            print(f"• Font differences:")
            print(f"  Index fonts: {index_fonts}")
            print(f"  Chapter fonts: {chapter_fonts}")
        
        index_css = file_styles['index.html']['external_css']
        chapter_css = file_styles['chapter1.html']['external_css']
        
        if index_css != chapter_css:
            print(f"• External CSS differences:")
            print(f"  Index CSS: {index_css}")
            print(f"  Chapter CSS: {chapter_css}")
    
    print(f"\nRECOMMENDATIONS:")
    print("-"*20)
    
    chapter_style = file_styles.get('chapter1.html', {})
    if chapter_style.get('color_scheme') == 'dark':
        print("• Apply dark theme to index.html and chapters.html")
        print("• Use chapter fonts (Rajdhani, Orbitron) across all pages")
        print("• Standardize on Tailwind CSS with dark slate colors")
        print("• Extract common styles to unified CSS file")

if __name__ == "__main__":
    compare_styling()