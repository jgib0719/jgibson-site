#!/usr/bin/env python3
"""
Extract Chapter 2 topic content and generate SQL insertion script
"""

import re
import json
import html

# Topic mapping from our analysis
TOPIC_MAPPING = {
    # 2.1 Routing Table (Subsection ID: 14)
    14: [
        "Route Source",
        "Destination Network", 
        "Administrative Distance",
        "Next Hop Address"
    ],
    # 2.2 Packet Forwarding (Subsection ID: 15)
    15: [
        "Longest Prefix Match",
        "Route Selection Priority"
    ],
    # 2.3 Static Routes (Subsection ID: 16)
    16: [
        "IPv4 Static Routes",
        "IPv6 Static Routes",
        "Default Routes",
        "Floating Static Routes"
    ],
    # 2.4 Dynamic Routing (Subsection ID: 17)
    17: [
        "OSPF Neighbor Formation",
        "LSA Types"
    ],
    # 2.5 RIP Protocol (Subsection ID: 18)
    18: [
        "RIP Fundamentals",
        "RIP Timers",
        "Split Horizon"
    ],
    # 2.6 EIGRP Protocol (Subsection ID: 19)
    19: [
        "DUAL Algorithm",
        "EIGRP Metrics"
    ],
    # 2.7 OSPF Protocol (Subsection ID: 20)
    20: [
        "OSPF Areas",
        "OSPF Network Types",
        "OSPF Area Types"
    ],
    # 2.8 Redistribution (Subsection ID: 21)
    21: [
        "Redistribution Basics",
        "Redistribution Loops"
    ],
    # 2.9 FHRP Protocols (Subsection ID: 22)
    22: [
        "HSRP (Hot Standby Router Protocol)",
        "VRRP (Virtual Router Redundancy Protocol)",
        "GLBP (Gateway Load Balancing Protocol)"
    ]
}

def extract_topic_content(file_path):
    """Extract topicDetails object from chapter2.html"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the topicDetails object start
    start_pattern = r'const topicDetails = {'
    end_pattern = r'};'
    
    start_match = re.search(start_pattern, content)
    if not start_match:
        print("Could not find topicDetails object")
        return {}
    
    start_pos = start_match.end() - 1  # Include the opening brace
    
    # Find the matching closing brace
    brace_count = 0
    end_pos = start_pos
    for i, char in enumerate(content[start_pos:], start_pos):
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_pos = i + 1
                break
    
    # Extract the object content
    obj_content = content[start_pos:end_pos]
    
    # Parse topic entries manually (since it's not valid JSON)
    topics = {}
    
    # Find each topic entry
    topic_pattern = r"'([^']+)':\s*\{\s*title:\s*'([^']*)',\s*content:\s*`([^`]*)`\s*\}"
    
    matches = re.findall(topic_pattern, obj_content, re.DOTALL)
    
    for topic_key, title, content_html in matches:
        topics[topic_key] = {
            'title': title,
            'content': content_html
        }
    
    return topics

def escape_sql_string(text):
    """Escape single quotes for SQL"""
    return text.replace("'", "''")

def create_slug(title):
    """Create URL-friendly slug from title"""
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)  # Remove special chars except spaces and hyphens
    slug = re.sub(r'\s+', '-', slug)  # Replace spaces with hyphens
    slug = re.sub(r'-+', '-', slug)   # Replace multiple hyphens with single
    slug = slug.strip('-')            # Remove leading/trailing hyphens
    return slug

def generate_sql_inserts(topics_data):
    """Generate SQL INSERT statements"""
    sql_parts = []
    
    # Update subsection topic counts
    sql_parts.append("-- Update subsection topic counts to reflect actual counts")
    for subsection_id, topic_list in TOPIC_MAPPING.items():
        sql_parts.append(f"UPDATE subsections SET topic_count = {len(topic_list)} WHERE id = {subsection_id};")
    
    sql_parts.append("")
    sql_parts.append("-- Update section total topic count")
    total_topics = sum(len(topics) for topics in TOPIC_MAPPING.values())
    sql_parts.append(f"UPDATE sections SET topic_count = {total_topics} WHERE id = 2;")
    sql_parts.append("")
    
    # Generate INSERT statements
    sql_parts.append("-- Insert all topics with comprehensive content")
    
    for subsection_id, topic_list in TOPIC_MAPPING.items():
        sql_parts.append(f"")
        sql_parts.append(f"-- Subsection {subsection_id} topics")
        
        for order_index, topic_name in enumerate(topic_list, 1):
            if topic_name in topics_data:
                topic_info = topics_data[topic_name]
                title = escape_sql_string(topic_name)  # Use the topic name as title
                slug = create_slug(topic_name)
                content = escape_sql_string(topic_info['content'])
                
                # For now, put all content in principles_content
                # Later we can split this into the Split Horizon sections
                sql_parts.append(f"INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES")
                sql_parts.append(f"({subsection_id}, '{title}', '{slug}', '{content}', {order_index}, datetime('now'));")
                sql_parts.append("")
            else:
                print(f"Warning: Topic '{topic_name}' not found in topicDetails")
    
    return '\n'.join(sql_parts)

def main():
    chapter_file = '/var/www/jgibson.site/public_html/chapter2.html'
    output_file = '/var/www/jgibson.site/tools/section2_topics_complete.sql'
    
    print("Extracting topic content from chapter2.html...")
    topics_data = extract_topic_content(chapter_file)
    
    print(f"Found {len(topics_data)} topics in topicDetails")
    print("Topics found:", list(topics_data.keys()))
    
    print("Generating SQL INSERT statements...")
    sql_content = generate_sql_inserts(topics_data)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(sql_content)
    
    print(f"SQL script written to {output_file}")
    
    # Verify we have all expected topics
    expected_topics = []
    for topic_list in TOPIC_MAPPING.values():
        expected_topics.extend(topic_list)
    
    missing_topics = [topic for topic in expected_topics if topic not in topics_data]
    if missing_topics:
        print(f"Missing topics: {missing_topics}")
    else:
        print("All expected topics found!")

if __name__ == "__main__":
    main()