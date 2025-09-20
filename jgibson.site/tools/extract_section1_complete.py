#!/usr/bin/env python3
"""
Improved CCNA Section 1 Topic Data Extractor
Handles Object.assign() patterns and complex JavaScript structure
"""

import re
import json
import html
from pathlib import Path

def extract_all_topic_assignments(file_path):
    """Extract all Object.assign() calls that add topics to topicDetails"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all Object.assign(topicDetails, {...}) patterns
    pattern = r'Object\.assign\s*\(\s*topicDetails\s*,\s*\{(.*?)\}\s*\)\s*;'
    matches = re.findall(pattern, content, re.DOTALL)
    
    all_topics = {}
    
    for match in matches:
        # Parse individual topic definitions within each Object.assign
        topic_pattern = r"['\"]([^'\"]+)['\"]:\s*\{(.*?)\}"
        topic_matches = re.findall(topic_pattern, match, re.DOTALL)
        
        for topic_key, topic_content in topic_matches:
            # Extract title and content
            title_match = re.search(r"title:\s*['\"`]([^'\"`]+)['\"`]", topic_content)
            content_match = re.search(r"content:\s*`(.*?)`\s*$", topic_content, re.DOTALL)
            
            if title_match and content_match:
                all_topics[topic_key] = {
                    'title': title_match.group(1),
                    'content': content_match.group(1)
                }
    
    return all_topics

def extract_visual_from_topic_arrays(file_path, topic_title):
    """Extract visual SVG from topic arrays for a specific topic title"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find topic arrays
    topic_arrays = re.findall(r'const\s+\w+Topics\s*=\s*\[(.*?)\];', content, re.DOTALL)
    
    for array_content in topic_arrays:
        # Look for the specific topic title
        if topic_title in array_content:
            # Extract the visual field - handle both single quotes and template literals
            pattern = rf'title:\s*[\'"`]{re.escape(topic_title)}[\'"`].*?visual:\s*`([^`]+)`'
            match = re.search(pattern, array_content, re.DOTALL)
            if match:
                return match.group(1)
    
    return None

def parse_topic_content(content_html):
    """Parse topic content and categorize into Split Horizon sections"""
    categories = {
        'principles': [],
        'examples': [],
        'configuration': [],
        'tips': []
    }
    
    # Remove outer div wrapper
    content_html = re.sub(r'^\s*<div[^>]*>\s*', '', content_html.strip())
    content_html = re.sub(r'\s*</div>\s*$', '', content_html.strip())
    
    # Split by sections
    sections = re.split(r'<section>', content_html)
    
    for section in sections:
        if not section.strip():
            continue
            
        section = '<section>' + section if not section.startswith('<section>') else section
        
        # Extract section title
        title_match = re.search(r'<h3[^>]*>([^<]+)</h3>', section)
        section_title = title_match.group(1) if title_match else ''
        
        # Categorize based on content patterns
        section_lower = section.lower()
        
        if any(keyword in section_lower for keyword in ['configuration', 'config', 'commands', 'cli', 'configure']):
            categories['configuration'].append(section)
        elif any(keyword in section_lower for keyword in ['example', 'scenario', 'use case', 'application']):
            categories['examples'].append(section)
        elif any(keyword in section_lower for keyword in ['exam focus', 'tips', 'best practice', 'remember']):
            categories['tips'].append(section)
        else:
            # Default to principles for concept explanations
            categories['principles'].append(section)
    
    return categories

def create_database_inserts(all_topics, html_file_path):
    """Create SQL INSERT statements from all extracted topics"""
    
    # Map topics to official Cisco subsections (comprehensive mapping)
    subsection_mapping = {
        # 1.1 Components
        'Routers': '1.1',
        'L2 and L3 Switches': '1.1',
        'Layer 2 and Layer 3 Switches': '1.1', 
        'NGFW & IPS': '1.1',
        'Next-Generation Firewall & Intrusion Prevention System': '1.1',
        'Access Points': '1.1',
        'Wireless Access Points': '1.1',
        'Controllers': '1.1',
        'Controllers (Cisco DNA Center and WLC)': '1.1',
        'Endpoints': '1.1',
        'Network Endpoints': '1.1',
        'Servers': '1.1',
        'Network Servers': '1.1',
        'PoE (Power over Ethernet)': '1.1',
        'Power over Ethernet (PoE)': '1.1',
        
        # 1.2 Topology
        'Two-Tier': '1.2',
        'Two-Tier Architecture': '1.2',
        'Three-Tier': '1.2',
        'Three-Tier Architecture': '1.2',
        'Spine-Leaf': '1.2',
        'Spine-Leaf Architecture': '1.2',
        'WAN': '1.2',
        'Wide Area Network': '1.2',
        'SOHO': '1.2',
        'Small Office/Home Office': '1.2',
        'On-Premises vs. Cloud': '1.2',
        'On-Premises vs Cloud': '1.2',
        
        # 1.3 Cabling
        'Copper - Twisted Pair': '1.3',
        'Fiber Optic - Single Mode': '1.3',
        'Fiber Optic - Multimode': '1.3',
        'Cable Categories': '1.3',
        'Connectors': '1.3',
        'Network Connectors': '1.3',
        'Ethernet Connections': '1.3',
        
        # 1.4 Issues
        'Interface/Cable Issues': '1.4',
        'Interface and Cable Issues': '1.4',
        'Duplex Mismatch': '1.4',
        'Speed Mismatch': '1.4',
        'Collisions': '1.4',
        'Errors': '1.4',
        
        # 1.5 TCP/UDP
        'TCP Protocol': '1.5',
        'UDP Protocol': '1.5',
        'Port Numbers': '1.5',
        'Socket Communication': '1.5',
        'TCP vs UDP': '1.5',
        
        # 1.6 IPv4
        'IPv4 Addressing': '1.6',
        'Subnetting': '1.6',
        'VLSM': '1.6',
        'Supernetting': '1.6',
        
        # 1.7 Private IPv4
        'RFC 1918 Addresses': '1.7',
        'Private IPv4 Addresses': '1.7',
        'NAT': '1.7',
        'Private vs Public': '1.7',
        
        # 1.8 IPv6
        'IPv6 Addressing': '1.8',
        'IPv6 Configuration': '1.8',
        'Neighbor Discovery': '1.8',
        
        # 1.9 IPv6 Types
        'Global Unicast': '1.9',
        'Link-Local': '1.9',
        'Multicast': '1.9',
        'Anycast': '1.9',
        'IPv6 Address Types': '1.9',
        
        # 1.10 Client OS
        'Windows Configuration': '1.10',
        'macOS Configuration': '1.10',
        'Linux Configuration': '1.10',
        'Client OS Configuration': '1.10',
        
        # 1.11 Wireless
        'Wi-Fi Standards': '1.11',
        'Wireless Standards': '1.11',
        'Wireless Topologies': '1.11',
        'AP Types': '1.11',
        'Wi-Fi Channels': '1.11',
        'Wireless Security': '1.11',
        'Wireless Concepts': '1.11',
        
        # 1.12 Virtualization
        'Hypervisors': '1.12',
        'Virtual Switches': '1.12',
        'SDN': '1.12',
        'Virtualization': '1.12',
        'Network Virtualization': '1.12',
        
        # 1.13 Models (combined with switching)
        'OSI Model': '1.13',
        'TCP/IP Stack': '1.13',
        'Ethernet Frame Structure': '1.13',
        'Collision vs Broadcast Domains': '1.13',
        'CSMA/CD': '1.13',
        'Half vs Full Duplex': '1.13',
        'ARP (Address Resolution Protocol)': '1.13',
        'Default Gateway': '1.13',
        'Ping & Traceroute': '1.13',
        'MAC Learning & Aging': '1.13',
        'Frame Forwarding': '1.13',
        'Frame Flooding': '1.13',
        'MAC Address Table': '1.13'
    }
    
    sql_statements = []
    
    # Clear existing Section 1 data first
    sql_statements.append("""
-- Clear existing Section 1 data
DELETE FROM topics WHERE subsection_id IN (
    SELECT s.id FROM subsections s 
    JOIN sections sec ON s.section_id = sec.id 
    WHERE sec.section_number = '1.0'
);
""")
    
    # Process each topic
    topic_id = 1
    for topic_key, topic_data in all_topics.items():
        topic_title = topic_data['title']
        topic_content = topic_data['content']
        
        # Get subsection mapping
        subsection_num = subsection_mapping.get(topic_key, '1.13')  # Default to 1.13
        
        # Parse content into Split Horizon categories
        categories = parse_topic_content(topic_content)
        
        # Get visual from topic arrays
        visual_svg = extract_visual_from_topic_arrays(html_file_path, topic_key)
        
        # Create slug from topic key
        slug = topic_key.lower().replace(' ', '_').replace('(', '').replace(')', '').replace('&', 'and').replace('/', '_').replace('-', '_')
        
        # Create INSERT statement
        sql_statements.append(f"""
INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    {repr(topic_title)},
    {repr(slug)},
    'CCNA 200-301 exam topic covering {topic_key}',
    {repr(''.join(categories['principles']))},
    {repr(''.join(categories['examples']))},
    {repr(''.join(categories['configuration']))},
    {repr(''.join(categories['tips']))},
    {repr(visual_svg or '')},
    'intermediate',
    15,
    {topic_id},
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '{subsection_num}';
""")
        
        topic_id += 1
    
    return '\n'.join(sql_statements)

def main():
    """Main extraction process"""
    html_file = Path('/var/www/jgibson.site/public_html/chapter1.html')
    output_file = Path('/var/www/jgibson.site/tools/section1_database_data_complete.sql')
    
    print("🔍 Extracting all topicDetails from chapter1.html...")
    all_topics = extract_all_topic_assignments(html_file)
    
    print(f"📊 Found {len(all_topics)} topics:")
    for topic_key in all_topics.keys():
        print(f"  - {topic_key}")
    
    print("💾 Converting to database INSERT statements...")
    sql_statements = create_database_inserts(all_topics, html_file)
    
    print("💾 Writing to section1_database_data_complete.sql...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"""-- CCNA Section 1.0 Network Fundamentals Database Data (Complete)
-- Generated from chapter1.html topicDetails with Object.assign() parsing
-- Created: September 19, 2025
-- Split Horizon Design System Format

{sql_statements}

-- Update topic counts
UPDATE sections SET topic_count = (
    SELECT COUNT(*) FROM topics t 
    JOIN subsections s ON t.subsection_id = s.id 
    WHERE s.section_id = sections.id
) WHERE section_number = '1.0';

UPDATE subsections SET topic_count = (
    SELECT COUNT(*) FROM topics t 
    WHERE t.subsection_id = subsections.id
);
""")
    
    print(f"✅ Successfully created {output_file}")
    print(f"📈 Database extraction complete with {len(all_topics)} topics!")

if __name__ == '__main__':
    main()