#!/usr/bin/env python3
"""
Efficient Section Data Extractor
Extracts embedded topic data from section HTML files and creates modular architecture
"""

import re
import json
import os
from pathlib import Path

def extract_topic_arrays(html_content):
    """Extract all topic arrays from JavaScript in HTML"""
    
    # Pattern to match topic arrays like 'const componentsTopics = [...];'
    topic_pattern = r'const\s+(\w+Topics)\s*=\s*(\[[\s\S]*?\]);'
    
    topics = {}
    matches = re.finditer(topic_pattern, html_content)
    
    for match in matches:
        array_name = match.group(1)
        array_content = match.group(2)
        
        # Parse individual topic objects
        topic_objects = []
        
        # Pattern to match individual topic objects
        object_pattern = r'\{\s*title:\s*"([^"]+)"[\s\S]*?\}'
        
        # Find all topic objects in this array
        object_matches = re.finditer(object_pattern, array_content)
        
        for obj_match in object_matches:
            # Extract the full object
            start = obj_match.start()
            
            # Find matching closing brace
            brace_count = 0
            end_pos = start
            
            for i, char in enumerate(array_content[start:], start):
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        end_pos = i + 1
                        break
            
            full_object = array_content[start:end_pos]
            topic_objects.append(full_object)
        
        topics[array_name] = topic_objects
    
    return topics

def create_complete_data_file(topics_dict):
    """Create a complete section data file"""
    
    # Map topic arrays to sections
    section_mapping = {
        'componentsTopics': 'components',
        'topologyTopics': 'topology', 
        'cablingTopics': 'cabling',
        'issuesTopics': 'issues',
        'tcpUdpTopics': 'tcpUdp',
        'ipv4Topics': 'ipv4',
        'privateIpv4Topics': 'privateIpv4',
        'ipv6Topics': 'ipv6',
        'ipv6TypesTopics': 'ipv6Types',
        'clientOsTopics': 'clientOs',
        'wirelessTopics': 'wireless',
        'virtualizationTopics': 'virtualization',
        'switchingTopics': 'switching'
    }
    
    data_file_content = '''/**
 * CCNA Section 1: Network Fundamentals - Complete Topic Data
 * Auto-extracted from section1.html for modular architecture
 */

const SECTION1_DATA = {
'''
    
    # Add each topic section
    for js_name, section_key in section_mapping.items():
        if js_name in topics_dict:
            data_file_content += f"    // {section_key.upper()}\n"
            data_file_content += f"    {section_key}: [\n"
            
            for topic_obj in topics_dict[js_name]:
                # Clean and format the topic object
                cleaned_obj = topic_obj.strip()
                if not cleaned_obj.endswith(','):
                    cleaned_obj += ','
                
                # Indent properly
                lines = cleaned_obj.split('\n')
                indented_lines = ['        ' + line for line in lines]
                data_file_content += '\n'.join(indented_lines) + '\n'
            
            data_file_content += "    ],\n\n"
    
    # Add metadata
    data_file_content += '''    // Section metadata
    metadata: {
        sectionNumber: 1,
        title: "Network Fundamentals",
        totalTopics: 35,
        subsections: {
            components: { title: "1.1 Network Components", count: 8 },
            topology: { title: "1.2 Network Topology Architectures", count: 6 },
            cabling: { title: "1.3 Physical Interface and Cabling", count: 6 },
            issues: { title: "1.4 Interface and Cable Issues", count: 1 },
            tcpUdp: { title: "1.5 Compare TCP to UDP", count: 1 },
            ipv4: { title: "1.6 Configure and verify IPv4", count: 1 },
            privateIpv4: { title: "1.7 Private IPv4 addressing", count: 1 },
            ipv6: { title: "1.8 Configure and verify IPv6", count: 1 },
            ipv6Types: { title: "1.9 Describe IPv6 address types", count: 2 },
            clientOs: { title: "1.10 Verify IP parameters", count: 1 },
            wireless: { title: "1.11 Describe wireless principles", count: 2 },
            virtualization: { title: "1.12 Virtualization fundamentals", count: 1 },
            switching: { title: "1.13 Describe switching concepts", count: 4 }
        }
    }
};

// Export for use in section1.html
if (typeof window !== 'undefined') {
    window.SECTION1_DATA = SECTION1_DATA;
}'''

    return data_file_content

def create_minimal_section_html(original_html, topics_dict):
    """Remove embedded topic data and replace with external imports"""
    
    # Remove all topic array definitions
    topic_pattern = r'const\s+\w+Topics\s*=\s*\[[\s\S]*?\];'
    cleaned_html = re.sub(topic_pattern, '', original_html)
    
    # Remove the createTopicCards calls and replace with new implementation
    create_cards_pattern = r'createTopicCards\([^;]+\);'
    cleaned_html = re.sub(create_cards_pattern, '', cleaned_html)
    
    # Add script import and new initialization
    script_import = '''<script src="js/section1-data.js"></script>
    <script>
        // Initialize with external data
        document.addEventListener('DOMContentLoaded', function() {
            const data = window.SECTION1_DATA;
            
            // Create topic cards for each section using external data
            Object.keys(data.metadata.subsections).forEach(key => {
                const gridElement = document.getElementById(key + 'Grid');
                if (gridElement && data[key]) {
                    createTopicCards(data[key], gridElement);
                }
            });
            
            // Auto-visual sync
            setTimeout(() => progressTracker.syncVisualState(), 100);
        });
    </script>'''
    
    # Insert before closing body tag
    cleaned_html = cleaned_html.replace('</body>', script_import + '\n</body>')
    
    return cleaned_html

def main():
    """Main extraction process"""
    
    print("🔧 Starting efficient section data extraction...")
    
    # Read section1.html
    section_file = Path('/var/www/jgibson.site/public_html/section1.html')
    
    if not section_file.exists():
        print("❌ section1.html not found!")
        return
        
    html_content = section_file.read_text()
    original_size = len(html_content)
    
    print(f"📊 Original file size: {original_size:,} characters")
    
    # Extract topic data
    print("⚡ Extracting topic arrays...")
    topics_dict = extract_topic_arrays(html_content)
    
    topics_found = sum(len(topics) for topics in topics_dict.values())
    print(f"✅ Found {len(topics_dict)} topic arrays with {topics_found} total topics")
    
    # Create external data file
    print("📝 Creating external data file...")
    data_content = create_complete_data_file(topics_dict)
    
    data_file = Path('/var/www/jgibson.site/public_html/js/section1-data.js')
    data_file.write_text(data_content)
    
    print(f"✅ Created: {data_file} ({len(data_content):,} characters)")
    
    # Create minimal HTML
    print("🔥 Creating minimal section HTML...")
    minimal_html = create_minimal_section_html(html_content, topics_dict)
    
    # Backup original
    backup_file = section_file.with_suffix('.backup.html')
    section_file.rename(backup_file)
    print(f"💾 Backed up original to: {backup_file}")
    
    # Write new minimal version
    section_file.write_text(minimal_html)
    new_size = len(minimal_html)
    
    # Calculate savings
    savings = original_size - new_size
    savings_percent = (savings / original_size) * 100
    
    print(f"🎉 SUCCESS!")
    print(f"📊 New file size: {new_size:,} characters")
    print(f"💰 Size reduction: {savings:,} characters ({savings_percent:.1f}%)")
    print(f"📁 Files created:")
    print(f"   - {data_file}")
    print(f"   - {section_file} (modular)")
    print(f"   - {backup_file} (backup)")

if __name__ == "__main__":
    main()