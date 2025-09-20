#!/usr/bin/env python3
"""
CCNA Section 1 Topic Data Extractor
Extracts topicDetails from chapter1.html and converts to database INSERT statements
Following Split Horizon design system and official Cisco CCNA 200-301 structure
"""

import re
import json
import html
from pathlib import Path

def extract_topic_details_from_html(file_path):
    """Extract the topicDetails JavaScript object from chapter1.html"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the topicDetails object definition
    start_pattern = r'const\s+topicDetails\s*=\s*{'
    start_match = re.search(start_pattern, content)
    if not start_match:
        raise ValueError("Could not find topicDetails object")
    
    start_pos = start_match.start()
    
    # Find the matching closing brace
    brace_count = 0
    current_pos = start_pos
    in_string = False
    escape_next = False
    string_char = None
    
    while current_pos < len(content):
        char = content[current_pos]
        
        if escape_next:
            escape_next = False
        elif char == '\\':
            escape_next = True
        elif not in_string and char in ['"', "'", '`']:
            in_string = True
            string_char = char
        elif in_string and char == string_char:
            in_string = False
            string_char = None
        elif not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = current_pos + 1
                    break
        
        current_pos += 1
    
    if brace_count != 0:
        raise ValueError("Could not find matching closing brace for topicDetails")
    
    # Extract the object definition
    object_def = content[start_pos:end_pos]
    return object_def

def parse_topic_content(content_html):
    """Parse topic content and categorize into Split Horizon sections"""
    # Split Horizon categories with their typical patterns
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

def extract_visual_from_topic_array(file_path, topic_title):
    """Extract visual SVG from topic arrays for a specific topic title"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find topic arrays
    topic_arrays = re.findall(r'const\s+\w+Topics\s*=\s*\[(.*?)\];', content, re.DOTALL)
    
    for array_content in topic_arrays:
        # Look for the specific topic title
        if topic_title in array_content:
            # Extract the visual field
            pattern = rf'title:\s*[\'"`]{re.escape(topic_title)}[\'"`].*?visual:\s*`([^`]+)`'
            match = re.search(pattern, array_content, re.DOTALL)
            if match:
                return match.group(1)
    
    return None

def create_database_inserts(topic_details_str, html_file_path):
    """Create SQL INSERT statements from topicDetails object"""
    
    # Map topics to official Cisco subsections
    subsection_mapping = {
        # 1.1 Components
        'Routers': '1.1',
        'Layer 2 Switches': '1.1', 
        'Layer 3 Switches': '1.1',
        'NGFW & IPS': '1.1',
        'Access Points': '1.1',
        'Controllers': '1.1',
        'Endpoints': '1.1',
        'Servers': '1.1',
        'PoE (Power over Ethernet)': '1.1',
        
        # 1.2 Topology
        'Two-Tier': '1.2',
        'Three-Tier': '1.2',
        'Spine-Leaf': '1.2',
        'WAN': '1.2',
        'SOHO': '1.2',
        'On-Premises vs. Cloud': '1.2',
        
        # 1.3 Cabling
        'Copper - Twisted Pair': '1.3',
        'Fiber Optic - Single Mode': '1.3',
        'Fiber Optic - Multimode': '1.3',
        'Cable Categories': '1.3',
        'Connectors': '1.3',
        'Ethernet Connections': '1.3',
        
        # 1.4 Issues
        'Interface/Cable Issues': '1.4',
        'Duplex Mismatch': '1.4',
        'Speed Mismatch': '1.4',
        'Collisions': '1.4',
        'Errors': '1.4',
        
        # 1.5 TCP/UDP
        'TCP Protocol': '1.5',
        'UDP Protocol': '1.5',
        'Port Numbers': '1.5',
        'Socket Communication': '1.5',
        
        # 1.6 IPv4
        'IPv4 Addressing': '1.6',
        'Subnetting': '1.6',
        'VLSM': '1.6',
        'Supernetting': '1.6',
        
        # 1.7 Private IPv4
        'RFC 1918 Addresses': '1.7',
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
        
        # 1.10 Client OS
        'Windows Configuration': '1.10',
        'macOS Configuration': '1.10',
        'Linux Configuration': '1.10',
        
        # 1.11 Wireless
        'Wi-Fi Standards': '1.11',
        'Wireless Topologies': '1.11',
        'AP Types': '1.11',
        'Wi-Fi Channels': '1.11',
        'Wireless Security': '1.11',
        
        # 1.12 Virtualization
        'Hypervisors': '1.12',
        'Virtual Switches': '1.12',
        'SDN': '1.12',
        'Virtualization': '1.12',
        
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
    
    # Extract topic names and content using improved regex
    # Handle both single and double quotes, and template literals
    topic_pattern = r"['\"]([^'\"]+)['\"]:\s*\{\s*title:\s*['\"]([^'\"]+)['\"].*?content:\s*`(.*?)`\s*\}"
    topics = re.findall(topic_pattern, topic_details_str, re.DOTALL | re.MULTILINE)
    
    sql_statements = []
    
    # Add section and subsection data first
    sql_statements.append("""
-- Insert Section 1.0 Network Fundamentals
INSERT OR IGNORE INTO sections (section_number, title, description, exam_weight_percent, order_index) 
VALUES ('1.0', 'Network Fundamentals', 'Core networking concepts, components, topologies, and protocols', 20, 1);
""")
    
    # Add subsections
    subsections = [
        ('1.1', 'Network Components', 'Routers, switches, firewalls, access points, controllers, endpoints, servers, PoE'),
        ('1.2', 'Network Topologies', 'Two-tier, three-tier, spine-leaf, WAN, SOHO, on-premises and cloud'),
        ('1.3', 'Physical Interfaces and Cabling', 'Fiber, copper, connections (shared media and point-to-point)'),
        ('1.4', 'Interface and Cable Issues', 'Collisions, errors, duplex mismatch, speed mismatch'),
        ('1.5', 'TCP and UDP', 'Transport layer protocols and characteristics'),
        ('1.6', 'IPv4 Addressing and Subnetting', 'IPv4 address structure, subnetting, VLSM'),
        ('1.7', 'Private IPv4 Addressing', 'RFC 1918 address ranges and NAT'),
        ('1.8', 'IPv6 Addressing and Configuration', 'IPv6 structure, configuration methods'),
        ('1.9', 'IPv6 Address Types', 'Global unicast, link-local, multicast, anycast'),
        ('1.10', 'Client Operating System Configuration', 'Windows, macOS, Linux network configuration'),
        ('1.11', 'Wireless Concepts', 'Standards, topologies, AP modes, channels, security'),
        ('1.12', 'Virtualization Concepts', 'Hypervisors, virtual switches, SDN'),
        ('1.13', 'Network Models and Switching', 'OSI/TCP-IP models, Ethernet, switching operations')
    ]
    
    for sub_num, sub_title, sub_desc in subsections:
        sql_statements.append(f"""
INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '{sub_num}', '{sub_title}', '{sub_desc}', {int(sub_num.split('.')[1])}
FROM sections WHERE section_number = '1.0';
""")
    
    # Process each topic
    topic_id = 1
    for topic_key, topic_title, topic_content in topics:
        # Get subsection mapping
        subsection_num = subsection_mapping.get(topic_key, '1.13')  # Default to 1.13
        
        # Parse content into Split Horizon categories
        categories = parse_topic_content(topic_content)
        
        # Get visual from topic arrays
        visual_svg = extract_visual_from_topic_array(html_file_path, topic_key)
        
        # Create INSERT statement
        sql_statements.append(f"""
INSERT OR IGNORE INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    {repr(topic_title)},
    {repr(topic_key.lower().replace(' ', '_').replace('(', '').replace(')', '').replace('&', 'and'))},
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
    output_file = Path('/var/www/jgibson.site/tools/section1_database_data.sql')
    
    print("🔍 Extracting topicDetails from chapter1.html...")
    topic_details_str = extract_topic_details_from_html(html_file)
    
    print("📊 Converting to database INSERT statements...")
    sql_statements = create_database_inserts(topic_details_str, html_file)
    
    print("💾 Writing to section1_database_data.sql...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"""-- CCNA Section 1.0 Network Fundamentals Database Data
-- Generated from chapter1.html topicDetails
-- Created: September 19, 2025
-- Split Horizon Design System Format

{sql_statements}

-- Update topic counts
UPDATE sections SET topic_count = (
    SELECT COUNT(*) FROM topics t 
    JOIN subsections s ON t.subsection_id = s.id 
    WHERE s.section_id = sections.id
) WHERE section_number = '1.0';
""")
    
    print(f"✅ Successfully created {output_file}")
    print(f"📈 Database extraction complete!")

if __name__ == '__main__':
    main()