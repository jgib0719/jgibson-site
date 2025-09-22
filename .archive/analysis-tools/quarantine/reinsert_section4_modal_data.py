#!/usr/bin/env python3
"""
CCNA Section 4 Modal Data Reinsertion Tool
Restores extracted topicDetails data back to section4.html
"""

import json
import datetime
import shutil
import os

def reinsert_section4_modal_data():
    """Restore extracted modal data back to section4.html"""
    
    # File paths
    html_file = '/var/www/jgibson.site/public_html/section4.html'
    data_file = '/var/www/jgibson.site/public_html/quarantine/section4_extracted_modal_data.json'
    backup_dir = '/var/www/jgibson.site/public_html/quarantine'
    
    print("=== CCNA Section 4 Modal Data Reinsertion ===")
    
    # Check if data file exists
    if not os.path.exists(data_file):
        print(f"❌ Data file not found: {data_file}")
        return False
    
    # Create backup of current file
    timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
    backup_file = f'{backup_dir}/section4_pre_reinsertion_{timestamp}.html'
    shutil.copy2(html_file, backup_file)
    print(f"✓ Backup created: {os.path.basename(backup_file)}")
    
    # Load extracted data
    with open(data_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    topics = data['topics']
    print(f"✓ Loaded {len(topics)} topics from quarantine")
    
    # Read current HTML file
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Generate the complete topicDetails JavaScript object
    js_object = generate_section4_topicdetails_js(topics)
    
    # Find and replace the placeholder
    placeholder_pattern = r'// EXTRACTED:.*?const topicDetails = \{[^}]*\};'
    
    if 'EXTRACTED: Modal data moved to quarantine folder' in content:
        # Replace placeholder with full object
        import re
        new_content = re.sub(placeholder_pattern, js_object, content, flags=re.DOTALL)
        
        # Write restored file
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        # Calculate statistics
        original_lines = len(content.split('\n'))
        new_lines = len(new_content.split('\n'))
        increase = ((new_lines - original_lines) / original_lines) * 100
        
        print(f"\n✅ REINSERTION COMPLETE!")
        print(f"📊 File Statistics:")
        print(f"   - Before: {original_lines:,} lines")
        print(f"   - After: {new_lines:,} lines")
        print(f"   - Increase: {increase:.1f}%")
        print(f"   - Topics restored: {len(topics)}")
        print(f"\n💾 Backup: {os.path.basename(backup_file)}")
        print(f"🎯 Modal content fully restored to section4.html")
        
        return True
    else:
        print("❌ Placeholder not found - data may already be restored")
        return False

def generate_section4_topicdetails_js(topics):
    """Generate the complete JavaScript topicDetails object"""
    
    js_lines = ["            const topicDetails = {"]
    
    topic_names = list(topics.keys())
    for i, (topic_name, topic_data) in enumerate(topics.items()):
        # Start topic entry
        js_lines.append(f"                '{topic_name}': {{")
        
        # Add title
        title = topic_data.get('title', '').replace("'", "\\'")
        js_lines.append(f"                    title: '{title}',")
        
        # Add content - handle multi-line content with template literals
        content = topic_data.get('content', '').replace('`', '\\`')
        js_lines.append("                    content: `")
        js_lines.append(content)
        js_lines.append("                    `")
        
        # Close topic entry
        if i < len(topic_names) - 1:
            js_lines.append("                },")
        else:
            js_lines.append("                }")
    
    js_lines.append("            };")
    
    return '\n'.join(js_lines)

if __name__ == "__main__":
    success = reinsert_section4_modal_data()
    if success:
        print("\n🚀 Section 4 modal data successfully restored!")
        print("   You can now test the modals on your CCNA site.")
    else:
        print("\n⚠️  Reinsertion failed. Check the error messages above.")