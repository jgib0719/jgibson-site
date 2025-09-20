#!/usr/bin/env python3
"""
Content Duplication Analyzer for CCNA Site
Analyzes HTML files for duplicate content, CSS, and JavaScript blocks
"""

import os
import re
import json
from pathlib import Path
from collections import defaultdict, Counter
import hashlib

class ContentAnalyzer:
    def __init__(self, base_path="/var/www/jgibson.site/public_html"):
        self.base_path = Path(base_path)
        self.chapter_files = [
            "chapter1.html", "chapter2.html", "chapter3.html",
            "chapter4.html", "chapter5.html", "chapter6.html"
        ]
        self.results = {
            "css_duplicates": [],
            "js_duplicates": [],
            "html_patterns": [],
            "content_duplicates": [],
            "file_sizes": {},
            "summary": {}
        }

    def extract_css_blocks(self, html_content):
        """Extract CSS blocks from HTML content"""
        css_blocks = []
        
        # Extract <style> blocks
        style_pattern = r'<style[^>]*>(.*?)</style>'
        style_matches = re.findall(style_pattern, html_content, re.DOTALL | re.IGNORECASE)
        
        for match in style_matches:
            # Clean and normalize CSS
            clean_css = re.sub(r'\s+', ' ', match.strip())
            if len(clean_css) > 50:  # Only significant CSS blocks
                css_hash = hashlib.md5(clean_css.encode()).hexdigest()[:8]
                css_blocks.append({
                    'content': clean_css[:200] + '...' if len(clean_css) > 200 else clean_css,
                    'hash': css_hash,
                    'size': len(clean_css)
                })
        
        return css_blocks

    def extract_js_blocks(self, html_content):
        """Extract JavaScript blocks from HTML content"""
        js_blocks = []
        
        # Extract <script> blocks (excluding external scripts)
        script_pattern = r'<script(?![^>]*src)[^>]*>(.*?)</script>'
        script_matches = re.findall(script_pattern, html_content, re.DOTALL | re.IGNORECASE)
        
        for match in script_matches:
            # Clean and normalize JavaScript
            clean_js = re.sub(r'\s+', ' ', match.strip())
            if len(clean_js) > 50:  # Only significant JS blocks
                js_hash = hashlib.md5(clean_js.encode()).hexdigest()[:8]
                js_blocks.append({
                    'content': clean_js[:200] + '...' if len(clean_js) > 200 else clean_js,
                    'hash': js_hash,
                    'size': len(clean_js)
                })
        
        return js_blocks

    def extract_html_patterns(self, html_content):
        """Extract common HTML patterns (modals, progress bars, etc.)"""
        patterns = []
        
        # Modal patterns
        modal_pattern = r'<div[^>]*modal[^>]*>.*?</div>\s*</div>\s*</div>'
        modal_matches = re.findall(modal_pattern, html_content, re.DOTALL | re.IGNORECASE)
        
        for match in modal_matches:
            clean_html = re.sub(r'\s+', ' ', match.strip())
            html_hash = hashlib.md5(clean_html.encode()).hexdigest()[:8]
            patterns.append({
                'type': 'modal',
                'content': clean_html[:200] + '...' if len(clean_html) > 200 else clean_html,
                'hash': html_hash,
                'size': len(clean_html)
            })
        
        # Progress bar patterns
        progress_pattern = r'<div[^>]*progress[^>]*>.*?</div>'
        progress_matches = re.findall(progress_pattern, html_content, re.DOTALL | re.IGNORECASE)
        
        for match in progress_matches:
            clean_html = re.sub(r'\s+', ' ', match.strip())
            html_hash = hashlib.md5(clean_html.encode()).hexdigest()[:8]
            patterns.append({
                'type': 'progress_bar',
                'content': clean_html[:200] + '...' if len(clean_html) > 200 else clean_html,
                'hash': html_hash,
                'size': len(clean_html)
            })
        
        return patterns

    def analyze_topic_content(self, html_content):
        """Analyze topicDetails content for duplicates"""
        duplicates = []
        
        # Extract topicDetails object
        topic_pattern = r'const topicDetails\s*=\s*({.*?});'
        topic_match = re.search(topic_pattern, html_content, re.DOTALL)
        
        if topic_match:
            topic_content = topic_match.group(1)
            
            # Look for repeated content patterns within topics
            # Extract topic descriptions
            desc_pattern = r'"([^"]{100,})"'  # Long strings likely to be descriptions
            descriptions = re.findall(desc_pattern, topic_content)
            
            # Count similar descriptions
            desc_counter = Counter()
            for desc in descriptions:
                # Create similarity key (first 50 chars)
                similarity_key = desc[:50].lower().strip()
                desc_counter[similarity_key] += 1
            
            # Find potential duplicates
            for key, count in desc_counter.items():
                if count > 1:
                    duplicates.append({
                        'pattern': key,
                        'count': count,
                        'type': 'topic_content'
                    })
        
        return duplicates

    def analyze_file(self, filename):
        """Analyze a single HTML file for duplicates"""
        file_path = self.base_path / filename
        
        if not file_path.exists():
            print(f"Warning: {filename} not found")
            return None
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        file_size = len(content)
        
        return {
            'filename': filename,
            'size': file_size,
            'css_blocks': self.extract_css_blocks(content),
            'js_blocks': self.extract_js_blocks(content),
            'html_patterns': self.extract_html_patterns(content),
            'topic_duplicates': self.analyze_topic_content(content)
        }

    def find_cross_file_duplicates(self, file_analyses):
        """Find duplicates across multiple files"""
        css_hashes = defaultdict(list)
        js_hashes = defaultdict(list)
        html_hashes = defaultdict(list)
        
        # Group by hash to find duplicates
        for analysis in file_analyses:
            if not analysis:
                continue
                
            filename = analysis['filename']
            
            # CSS duplicates
            for css_block in analysis['css_blocks']:
                css_hashes[css_block['hash']].append({
                    'file': filename,
                    'content': css_block['content'],
                    'size': css_block['size']
                })
            
            # JS duplicates
            for js_block in analysis['js_blocks']:
                js_hashes[js_block['hash']].append({
                    'file': filename,
                    'content': js_block['content'],
                    'size': js_block['size']
                })
            
            # HTML pattern duplicates
            for html_pattern in analysis['html_patterns']:
                html_hashes[html_pattern['hash']].append({
                    'file': filename,
                    'type': html_pattern['type'],
                    'content': html_pattern['content'],
                    'size': html_pattern['size']
                })
        
        # Find actual duplicates (hash appears in multiple files)
        css_duplicates = {h: files for h, files in css_hashes.items() if len(files) > 1}
        js_duplicates = {h: files for h, files in js_hashes.items() if len(files) > 1}
        html_duplicates = {h: files for h, files in html_hashes.items() if len(files) > 1}
        
        return css_duplicates, js_duplicates, html_duplicates

    def generate_report(self):
        """Generate comprehensive duplication analysis report"""
        print("Analyzing CCNA site content for duplicates...")
        
        # Analyze each chapter file
        file_analyses = []
        total_size = 0
        
        for filename in self.chapter_files:
            analysis = self.analyze_file(filename)
            if analysis:
                file_analyses.append(analysis)
                total_size += analysis['size']
                self.results['file_sizes'][filename] = analysis['size']
        
        print(f"Analyzed {len(file_analyses)} files, total size: {total_size:,} bytes")
        
        # Find cross-file duplicates
        css_dupes, js_dupes, html_dupes = self.find_cross_file_duplicates(file_analyses)
        
        # Store results
        self.results['css_duplicates'] = css_dupes
        self.results['js_duplicates'] = js_dupes
        self.results['html_patterns'] = html_dupes
        
        # Calculate potential savings
        css_savings = sum(
            sum(file['size'] for file in files[1:])  # All but first occurrence
            for files in css_dupes.values()
        )
        
        js_savings = sum(
            sum(file['size'] for file in files[1:])
            for files in js_dupes.values()
        )
        
        html_savings = sum(
            sum(file['size'] for file in files[1:])
            for files in html_dupes.values()
        )
        
        total_savings = css_savings + js_savings + html_savings
        
        # Generate summary
        self.results['summary'] = {
            'total_files': len(file_analyses),
            'total_size': total_size,
            'css_duplicates_count': len(css_dupes),
            'js_duplicates_count': len(js_dupes),
            'html_duplicates_count': len(html_dupes),
            'potential_savings_bytes': total_savings,
            'potential_savings_percentage': (total_savings / total_size * 100) if total_size > 0 else 0
        }
        
        return self.results

    def print_report(self):
        """Print human-readable analysis report"""
        report = self.generate_report()
        
        print("\n" + "="*60)
        print("CCNA SITE CONTENT DUPLICATION ANALYSIS")
        print("="*60)
        
        # Summary
        summary = report['summary']
        print(f"\nSUMMARY:")
        print(f"Files analyzed: {summary['total_files']}")
        print(f"Total size: {summary['total_size']:,} bytes ({summary['total_size']/1024:.1f} KB)")
        print(f"CSS duplicates: {summary['css_duplicates_count']}")
        print(f"JavaScript duplicates: {summary['js_duplicates_count']}")
        print(f"HTML pattern duplicates: {summary['html_duplicates_count']}")
        print(f"Potential savings: {summary['potential_savings_bytes']:,} bytes ({summary['potential_savings_percentage']:.1f}%)")
        
        # File sizes
        print(f"\nFILE SIZES:")
        for filename, size in report['file_sizes'].items():
            print(f"  {filename}: {size:,} bytes ({size/1024:.1f} KB)")
        
        # CSS duplicates
        if report['css_duplicates']:
            print(f"\nCSS DUPLICATES:")
            for hash_key, files in report['css_duplicates'].items():
                print(f"  Hash {hash_key} found in {len(files)} files:")
                for file_info in files:
                    print(f"    {file_info['file']} ({file_info['size']} bytes)")
                print(f"    Content preview: {files[0]['content'][:100]}...")
                print()
        
        # JavaScript duplicates
        if report['js_duplicates']:
            print(f"\nJAVASCRIPT DUPLICATES:")
            for hash_key, files in report['js_duplicates'].items():
                print(f"  Hash {hash_key} found in {len(files)} files:")
                for file_info in files:
                    print(f"    {file_info['file']} ({file_info['size']} bytes)")
                print(f"    Content preview: {files[0]['content'][:100]}...")
                print()
        
        # HTML pattern duplicates
        if report['html_patterns']:
            print(f"\nHTML PATTERN DUPLICATES:")
            for hash_key, files in report['html_patterns'].items():
                print(f"  {files[0]['type'].title()} pattern found in {len(files)} files:")
                for file_info in files:
                    print(f"    {file_info['file']} ({file_info['size']} bytes)")
                print(f"    Content preview: {files[0]['content'][:100]}...")
                print()
        
        print("\n" + "="*60)
        print("RECOMMENDATIONS:")
        
        if summary['css_duplicates_count'] > 0:
            print("• Extract common CSS to unified-theme.css")
        
        if summary['js_duplicates_count'] > 0:
            print("• Consolidate JavaScript into shared-functions.js")
        
        if summary['html_duplicates_count'] > 0:
            print("• Create reusable HTML templates/components")
        
        if summary['potential_savings_percentage'] > 20:
            print(f"• High duplication detected ({summary['potential_savings_percentage']:.1f}%) - significant optimization opportunity")
        
        print("="*60)

    def save_report(self, output_file="content_analysis_report.json"):
        """Save detailed report to JSON file"""
        report = self.generate_report()
        
        output_path = Path("/var/www/jgibson.site/tools") / output_file
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        print(f"\nDetailed report saved to: {output_path}")

if __name__ == "__main__":
    analyzer = ContentAnalyzer()
    analyzer.print_report()
    analyzer.save_report()