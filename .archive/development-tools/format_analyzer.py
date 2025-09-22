#!/usr/bin/env python3
"""
CCNA Section Formatter Analysis Tool
===================================

This script analyzes formatting differences between CCNA sections and provides
detailed reports on inconsistencies. It can be used before and after running
the format_standardizer.py script to validate improvements.

Features:
- Compare formatting patterns between sections
- Identify SVG formatting inconsistencies  
- Report quote usage patterns
- Analyze indentation and spacing
- Generate before/after comparison reports

Usage:
    python3 format_analyzer.py section1.html section2.html
    python3 format_analyzer.py --report=detailed section*.html
    python3 format_analyzer.py --check-svg section1.html
"""

import re
import argparse
import sys
from pathlib import Path
from collections import defaultdict, Counter
import json

class CCNAFormatAnalyzer:
    def __init__(self):
        self.results = {}
        
    def analyze_file(self, file_path):
        """Analyze formatting patterns in a single file"""
        
        file_path = Path(file_path)
        
        if not file_path.exists():
            print(f"Error: File {file_path} not found")
            return None
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            return None
        
        analysis = {
            'file': str(file_path),
            'svg_patterns': self.analyze_svg_patterns(content),
            'quote_patterns': self.analyze_quote_patterns(content),
            'indentation': self.analyze_indentation(content),
            'topic_arrays': self.find_topic_arrays(content),
            'line_count': len(content.splitlines())
        }
        
        self.results[file_path.name] = analysis
        return analysis
    
    def analyze_svg_patterns(self, content):
        """Analyze SVG formatting patterns"""
        
        svg_patterns = {
            'total_svgs': len(re.findall(r'<svg[^>]*>', content)),
            'compact_svgs': 0,
            'multiline_svgs': 0,
            'viewbox_200x100': len(re.findall(r'viewBox="0 0 200 100"', content)),
            'viewbox_400x200': len(re.findall(r'viewBox="0 0 400 200"', content)),
            'w_full_h_full': len(re.findall(r'class="w-full h-full"', content)),
            'w_full_h_auto': len(re.findall(r'class="w-full h-auto"', content)),
            'single_line_svgs': [],
            'multiline_svg_samples': []
        }
        
        # Find compact (single-line) SVGs
        compact_pattern = r'visual:\s*`<svg[^`]*>`'
        compact_matches = re.findall(compact_pattern, content)
        svg_patterns['compact_svgs'] = len(compact_matches)
        
        # Sample first few compact SVGs for analysis
        svg_patterns['single_line_svgs'] = compact_matches[:3]
        
        # Find multi-line SVGs  
        multiline_pattern = r'visual:\s*`\s*<svg[^`]*>\s*<[^`]*>\s*</svg>\s*`'
        multiline_matches = re.findall(multiline_pattern, content, re.DOTALL)
        svg_patterns['multiline_svgs'] = len(multiline_matches)
        
        return svg_patterns
    
    def analyze_quote_patterns(self, content):
        """Analyze quote usage patterns in topic objects"""
        
        patterns = {
            'single_quote_titles': len(re.findall(r"title:\s*'[^']*'", content)),
            'double_quote_titles': len(re.findall(r'title:\s*"[^"]*"', content)),
            'single_quote_icons': len(re.findall(r"icon:\s*'[^']*'", content)),
            'double_quote_icons': len(re.findall(r'icon:\s*"[^"]*"', content)),
            'single_quote_descriptions': len(re.findall(r"description:\s*'[^']*'", content)),
            'double_quote_descriptions': len(re.findall(r'description:\s*"[^"]*"', content)),
            'mixed_quotes': False
        }
        
        # Check for mixed quote usage
        has_single = any(patterns[k] > 0 for k in patterns if 'single_quote' in k)
        has_double = any(patterns[k] > 0 for k in patterns if 'double_quote' in k)
        patterns['mixed_quotes'] = has_single and has_double
        
        return patterns
    
    def analyze_indentation(self, content):
        """Analyze indentation patterns"""
        
        lines = content.splitlines()
        indentation_stats = {
            'spaces_per_level': Counter(),
            'inconsistent_lines': [],
            'topic_object_indentation': [],
            'svg_indentation': []
        }
        
        for i, line in enumerate(lines, 1):
            if line.strip():  # Skip empty lines
                leading_spaces = len(line) - len(line.lstrip())
                
                # Track topic object indentation
                if 'title:' in line or 'icon:' in line or 'description:' in line:
                    indentation_stats['topic_object_indentation'].append(leading_spaces)
                
                # Track SVG element indentation
                if '<svg' in line or '<rect' in line or '<circle' in line or '<path' in line:
                    indentation_stats['svg_indentation'].append(leading_spaces)
        
        return indentation_stats
    
    def find_topic_arrays(self, content):
        """Find and analyze topic array definitions"""
        
        array_pattern = r'const\s+(\w+Topics)\s*=\s*\['
        arrays = re.findall(array_pattern, content)
        
        array_info = {
            'total_arrays': len(arrays),
            'array_names': arrays,
            'topics_per_array': {}
        }
        
        # Count topics in each array
        for array_name in arrays:
            # Count objects in the array (approximate)
            array_section_pattern = f'const\\s+{array_name}\\s*=\\s*\\[([^\\]]+)\\]'
            match = re.search(array_section_pattern, content, re.DOTALL)
            if match:
                array_content = match.group(1)
                topic_count = len(re.findall(r'\{[^}]*title:', array_content))
                array_info['topics_per_array'][array_name] = topic_count
        
        return array_info
    
    def compare_files(self, file_analyses):
        """Compare formatting between multiple files"""
        
        if len(file_analyses) < 2:
            return {"error": "Need at least 2 files to compare"}
        
        comparison = {
            'svg_consistency': {},
            'quote_consistency': {},
            'structural_differences': {},
            'recommendations': []
        }
        
        # Compare SVG patterns
        svg_metrics = ['viewbox_200x100', 'viewbox_400x200', 'w_full_h_full', 'w_full_h_auto', 'compact_svgs', 'multiline_svgs']
        
        for metric in svg_metrics:
            values = [analysis['svg_patterns'][metric] for analysis in file_analyses.values()]
            comparison['svg_consistency'][metric] = {
                'values': dict(zip(file_analyses.keys(), values)),
                'consistent': len(set(values)) == 1,
                'max_difference': max(values) - min(values) if values else 0
            }
        
        # Compare quote patterns
        quote_metrics = ['single_quote_titles', 'double_quote_titles', 'mixed_quotes']
        
        for metric in quote_metrics:
            values = [analysis['quote_patterns'][metric] for analysis in file_analyses.values()]
            comparison['quote_consistency'][metric] = {
                'values': dict(zip(file_analyses.keys(), values)),
                'consistent': len(set(values)) <= 1
            }
        
        # Generate recommendations
        if not comparison['svg_consistency']['multiline_svgs']['consistent']:
            comparison['recommendations'].append(
                "SVG formatting inconsistency detected. Consider standardizing to multi-line format."
            )
        
        if any(analysis['quote_patterns']['mixed_quotes'] for analysis in file_analyses.values()):
            comparison['recommendations'].append(
                "Mixed quote usage detected. Standardize to double quotes for consistency."
            )
        
        return comparison
    
    def generate_report(self, output_format='detailed'):
        """Generate analysis report"""
        
        if output_format == 'summary':
            return self.generate_summary_report()
        elif output_format == 'json':
            return json.dumps(self.results, indent=2)
        else:
            return self.generate_detailed_report()
    
    def generate_summary_report(self):
        """Generate a concise summary report"""
        
        report = ["CCNA Section Formatting Analysis - Summary"]
        report.append("=" * 50)
        
        for filename, analysis in self.results.items():
            report.append(f"\nFile: {filename}")
            report.append(f"  Topic Arrays: {analysis['topic_arrays']['total_arrays']}")
            report.append(f"  Total SVGs: {analysis['svg_patterns']['total_svgs']}")
            report.append(f"  Compact SVGs: {analysis['svg_patterns']['compact_svgs']}")
            report.append(f"  Multi-line SVGs: {analysis['svg_patterns']['multiline_svgs']}")
            report.append(f"  Mixed Quotes: {'Yes' if analysis['quote_patterns']['mixed_quotes'] else 'No'}")
        
        return "\n".join(report)
    
    def generate_detailed_report(self):
        """Generate a comprehensive analysis report"""
        
        report = ["CCNA Section Formatting Analysis - Detailed Report"]
        report.append("=" * 60)
        report.append(f"Generated: {Path(__file__).name}")
        report.append("")
        
        for filename, analysis in self.results.items():
            report.append(f"File: {filename}")
            report.append("-" * 40)
            
            # SVG Analysis
            svg = analysis['svg_patterns']
            report.append("SVG Formatting:")
            report.append(f"  Total SVGs: {svg['total_svgs']}")
            report.append(f"  Compact (single-line): {svg['compact_svgs']}")
            report.append(f"  Multi-line formatted: {svg['multiline_svgs']}")
            report.append(f"  ViewBox 200x100: {svg['viewbox_200x100']}")
            report.append(f"  ViewBox 400x200: {svg['viewbox_400x200']}")
            report.append(f"  w-full h-full: {svg['w_full_h_full']}")
            report.append(f"  w-full h-auto: {svg['w_full_h_auto']}")
            
            # Quote Analysis
            quotes = analysis['quote_patterns']
            report.append("\nQuote Usage:")
            report.append(f"  Single quotes: {quotes['single_quote_titles']} titles, {quotes['single_quote_icons']} icons")
            report.append(f"  Double quotes: {quotes['double_quote_titles']} titles, {quotes['double_quote_icons']} icons")
            report.append(f"  Mixed quotes: {'Yes' if quotes['mixed_quotes'] else 'No'}")
            
            # Topic Arrays
            arrays = analysis['topic_arrays']
            report.append("\nTopic Arrays:")
            report.append(f"  Total arrays: {arrays['total_arrays']}")
            for array_name, count in arrays['topics_per_array'].items():
                report.append(f"  {array_name}: {count} topics")
            
            report.append("")
        
        # Comparison section
        if len(self.results) > 1:
            comparison = self.compare_files(self.results)
            report.append("Cross-File Comparison:")
            report.append("-" * 25)
            
            for rec in comparison.get('recommendations', []):
                report.append(f"⚠️  {rec}")
            
            if not comparison.get('recommendations'):
                report.append("✅ No major formatting inconsistencies detected")
        
        return "\n".join(report)

def main():
    parser = argparse.ArgumentParser(
        description="Analyze CCNA section formatting patterns",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 format_analyzer.py section1.html section2.html
  python3 format_analyzer.py --report=summary section*.html
  python3 format_analyzer.py --report=json section1.html > analysis.json
        """
    )
    
    parser.add_argument('files', nargs='+', help='HTML files to analyze')
    parser.add_argument('--report', choices=['summary', 'detailed', 'json'], 
                       default='detailed', help='Report format')
    parser.add_argument('--output', '-o', help='Output file (default: stdout)')
    
    args = parser.parse_args()
    
    analyzer = CCNAFormatAnalyzer()
    
    # Analyze each file
    for file_path in args.files:
        analysis = analyzer.analyze_file(file_path)
        if not analysis:
            print(f"Failed to analyze {file_path}")
            return 1
    
    # Generate report
    report = analyzer.generate_report(args.report)
    
    # Output report
    if args.output:
        try:
            with open(args.output, 'w', encoding='utf-8') as f:
                f.write(report)
            print(f"Report saved to: {args.output}")
        except Exception as e:
            print(f"Error writing report: {e}")
            return 1
    else:
        print(report)
    
    return 0

if __name__ == "__main__":
    sys.exit(main())