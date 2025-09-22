#!/usr/bin/env python3
"""
CCNA Section 5 Modal Data Extractor and Remover
Extracts topicDetails JavaScript object from section5.html and removes it from the original file.
"""

import re
import json
import datetime
import os
import shutil

def extract_and_remove_section5_modal_data():
    """Extract topicDetails from section5.html and remove from original file"""
    
    # File paths
    input_file = '/var/www/jgibson.site/public_html/section5.html'
    output_dir = '/var/www/jgibson.site/public_html/quarantine'
    
    # Create timestamp for backups
    timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
    
    # Backup original file
    backup_file = f'{output_dir}/section5_original_backup_{timestamp}.html'
    
    print("=== CCNA Section 5 Modal Data Extraction ===")
    print(f"Processing: {input_file}")
    print(f"Backup: {backup_file}")
    
    # Read original file
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create backup
    shutil.copy2(input_file, backup_file)
    print(f"✓ Backup created: {os.path.basename(backup_file)}")
    
    # Find topicDetails object
    pattern = r'const\s+topicDetails\s*=\s*\{(.*?)\}\s*;?\s*(?=\n\s*(?:Object\.assign|function|const|var|let|\</script\>))'
    
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print("❌ No topicDetails object found!")
        return
    
    # Extract the complete object content
    full_match = match.group(0)
    object_content = match.group(1)
    
    print(f"✓ Found topicDetails object ({len(full_match)} characters)")
    
    # Parse topics from the content
    topics = {}
    current_topic = None
    brace_count = 0
    in_topic = False
    topic_content = ""
    
    lines = object_content.split('\n')
    
    for line in lines:
        stripped = line.strip()
        
        # Look for topic names (quoted keys at the start of lines)
        topic_match = re.match(r"['\"]([^'\"]+)['\"]:\s*\{", stripped)
        if topic_match and brace_count == 0:
            # Save previous topic if exists
            if current_topic and topic_content:
                topics[current_topic] = parse_topic_content(topic_content)
            
            current_topic = topic_match.group(1)
            topic_content = ""
            in_topic = True
            brace_count = 1
            continue
        
        if in_topic:
            # Count braces to track nesting
            brace_count += stripped.count('{') - stripped.count('}')
            topic_content += line + '\n'
            
            if brace_count == 0:
                # Topic ended
                if current_topic:
                    topics[current_topic] = parse_topic_content(topic_content)
                in_topic = False
                current_topic = None
                topic_content = ""
    
    # Handle last topic if file doesn't end cleanly
    if current_topic and topic_content:
        topics[current_topic] = parse_topic_content(topic_content)
    
    print(f"✓ Extracted {len(topics)} topics")
    
    # Categorize topics
    categories = categorize_section5_topics(topics)
    
    # Generate output files
    output_files = {
        'json': f'{output_dir}/section5_extracted_modal_data.json',
        'markdown': f'{output_dir}/section5_extracted_modal_content.md',
        'analysis': f'{output_dir}/section5_extraction_analysis_report.md'
    }
    
    # Save JSON data
    json_data = {
        'extraction_info': {
            'source_file': 'section5.html',
            'extraction_date': datetime.datetime.now().isoformat(),
            'total_topics': len(topics),
            'categories': {cat: len(topic_list) for cat, topic_list in categories.items()}
        },
        'topics': topics,
        'categories': categories
    }
    
    with open(output_files['json'], 'w', encoding='utf-8') as f:
        json.dump(json_data, f, indent=2, ensure_ascii=False)
    
    # Generate Markdown
    generate_section5_markdown(topics, categories, output_files['markdown'])
    
    # Generate analysis report
    generate_section5_analysis(topics, categories, len(full_match), output_files['analysis'])
    
    # Remove topicDetails from original file and add placeholder
    placeholder = """            // EXTRACTED: Modal data moved to quarantine folder
            // Original topicDetails object contained """ + str(len(topics)) + """ CCNA Section 5 topics
            // To restore: Run 'python3 /var/www/jgibson.site/public_html/quarantine/reinsert_section5_modal_data.py'
            // Extraction date: """ + datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S') + """
            const topicDetails = {
                // Modal content extracted and moved to quarantine folder
                // See: /var/www/jgibson.site/public_html/quarantine/section5_extracted_modal_data.json
            };"""
    
    # Replace the topicDetails object with placeholder
    new_content = content.replace(full_match, placeholder, 1)
    
    # Write modified file
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    # Calculate size reduction
    original_lines = len(content.split('\n'))
    new_lines = len(new_content.split('\n'))
    reduction = ((original_lines - new_lines) / original_lines) * 100
    
    print(f"\n✅ EXTRACTION COMPLETE!")
    print(f"📁 Output files created:")
    for file_type, file_path in output_files.items():
        print(f"   - {os.path.basename(file_path)} ({file_type})")
    
    print(f"\n📊 File Statistics:")
    print(f"   - Original: {original_lines:,} lines")
    print(f"   - Modified: {new_lines:,} lines") 
    print(f"   - Reduction: {reduction:.1f}%")
    print(f"   - Topics: {len(topics)}")
    print(f"   - Categories: {len(categories)}")
    
    print(f"\n💾 Backup: {os.path.basename(backup_file)}")
    print(f"🔄 Restore: python3 {output_dir}/reinsert_section5_modal_data.py")

def parse_topic_content(content):
    """Parse topic content to extract title and content"""
    topic_data = {'title': '', 'content': ''}
    
    # Extract title
    title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", content)
    if title_match:
        topic_data['title'] = title_match.group(1)
    
    # Extract content - look for content field
    content_match = re.search(r"content:\s*`([^`]*(?:`(?!`)[^`]*)*)`", content, re.DOTALL)
    if content_match:
        topic_data['content'] = content_match.group(1).strip()
    
    return topic_data

def categorize_section5_topics(topics):
    """Categorize Section 5 topics (Network Management and Automation)"""
    categories = {
        'Network Automation': [],
        'Configuration Management': [],
        'Programming and APIs': [],
        'Monitoring and Troubleshooting': [],
        'DevOps and CI/CD': [],
        'General Management': []
    }
    
    # Categorization keywords
    category_keywords = {
        'Network Automation': ['automation', 'puppet', 'chef', 'ansible', 'orchestration', 'benefits'],
        'Configuration Management': ['configuration', 'management', 'version control', 'backup', 'template'],
        'Programming and APIs': ['api', 'rest', 'python', 'json', 'xml', 'programming', 'sdk'],
        'Monitoring and Troubleshooting': ['monitoring', 'snmp', 'syslog', 'troubleshooting', 'analytics'],
        'DevOps and CI/CD': ['devops', 'ci/cd', 'pipeline', 'deployment', 'integration'],
        'General Management': ['management', 'network', 'tools', 'platform']
    }
    
    for topic_name, topic_data in topics.items():
        categorized = False
        topic_lower = topic_name.lower()
        content_lower = topic_data.get('content', '').lower()
        
        for category, keywords in category_keywords.items():
            if any(keyword in topic_lower or keyword in content_lower for keyword in keywords):
                categories[category].append(topic_name)
                categorized = True
                break
        
        if not categorized:
            categories['General Management'].append(topic_name)
    
    # Remove empty categories
    return {k: v for k, v in categories.items() if v}

def generate_section5_markdown(topics, categories, output_file):
    """Generate human-readable Markdown file"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("# CCNA Section 5 - Extracted Modal Content\n\n")
        f.write(f"**Extraction Date:** {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"**Total Topics:** {len(topics)}\n")
        f.write(f"**Categories:** {len(categories)}\n\n")
        
        f.write("## 📋 Topic Categories\n\n")
        for category, topic_list in categories.items():
            f.write(f"### {category} ({len(topic_list)} topics)\n")
            for topic in topic_list:
                f.write(f"- {topic}\n")
            f.write("\n")
        
        f.write("---\n\n## 📖 Full Topic Content\n\n")
        
        for category, topic_list in categories.items():
            f.write(f"## {category}\n\n")
            for topic_name in topic_list:
                topic_data = topics[topic_name]
                f.write(f"### {topic_name}\n\n")
                f.write(f"**Title:** {topic_data.get('title', 'N/A')}\n\n")
                if topic_data.get('content'):
                    f.write("**Content:**\n")
                    f.write(topic_data['content'])
                    f.write("\n\n")
                f.write("---\n\n")

def generate_section5_analysis(topics, categories, content_size, output_file):
    """Generate detailed analysis report"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("# CCNA Section 5 - Extraction Analysis Report\n\n")
        f.write(f"**Generated:** {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"**Source:** section5.html\n\n")
        
        f.write("## 📊 Overview Statistics\n\n")
        f.write(f"- **Total Topics Extracted:** {len(topics)}\n")
        f.write(f"- **Total Categories:** {len(categories)}\n")
        f.write(f"- **Content Size:** {content_size:,} characters\n")
        f.write(f"- **Average Content per Topic:** {content_size // len(topics):,} characters\n\n")
        
        f.write("## 📋 Category Breakdown\n\n")
        for category, topic_list in categories.items():
            f.write(f"### {category}\n")
            f.write(f"**Count:** {len(topic_list)} topics\n")
            f.write("**Topics:**\n")
            for topic in topic_list:
                content_length = len(topics[topic].get('content', ''))
                f.write(f"- {topic} ({content_length:,} chars)\n")
            f.write("\n")
        
        f.write("## 🔍 Content Analysis\n\n")
        total_chars = sum(len(topic.get('content', '')) for topic in topics.values())
        f.write(f"- **Total Content Characters:** {total_chars:,}\n")
        f.write(f"- **Average per Topic:** {total_chars // len(topics):,} characters\n")
        
        # Find longest and shortest topics
        topic_lengths = [(name, len(data.get('content', ''))) for name, data in topics.items()]
        topic_lengths.sort(key=lambda x: x[1], reverse=True)
        
        f.write(f"- **Longest Topic:** {topic_lengths[0][0]} ({topic_lengths[0][1]:,} chars)\n")
        f.write(f"- **Shortest Topic:** {topic_lengths[-1][0]} ({topic_lengths[-1][1]:,} chars)\n\n")

if __name__ == "__main__":
    extract_and_remove_section5_modal_data()