#!/usr/bin/env python3
"""
Final verification of the modular architecture
"""

import os
import re

def verify_modular_setup():
    files_to_check = {
        'section1.html': '/var/www/jgibson.site/public_html/section1.html',
        'section1-data.js': '/var/www/jgibson.site/public_html/js/section1-data.js',
        'ccna-config.js': '/var/www/jgibson.site/public_html/js/ccna-config.js',
        'shared-progress.js': '/var/www/jgibson.site/public_html/js/shared-progress.js'
    }
    
    print("🔍 FINAL VERIFICATION OF MODULAR ARCHITECTURE")
    print("=" * 60)
    
    all_good = True
    
    for name, path in files_to_check.items():
        if os.path.exists(path):
            size = os.path.getsize(path)
            print(f"✅ {name:<20} {size:>7,} bytes ({size/1024:>6.1f} KB)")
        else:
            print(f"❌ {name:<20} MISSING!")
            all_good = False
    
    print("-" * 60)
    
    # Check section1.html structure
    with open('/var/www/jgibson.site/public_html/section1.html', 'r') as f:
        html_content = f.read()
    
    # Verify key components
    checks = [
        ('External data import', 'js/section1-data.js'),
        ('Progress tracker import', 'js/shared-progress.js'),
        ('Config import', 'js/ccna-config.js'),
        ('Data initialization', 'window.SECTION1_DATA'),
        ('Grid population', 'createTopicCards'),
        ('Modal functionality', 'openStudyModal'),
        ('No embedded topics', not re.search(r'componentsTopics\s*=\s*\[', html_content))
    ]
    
    print("🔬 STRUCTURE VERIFICATION:")
    for check_name, pattern in checks:
        if isinstance(pattern, bool):
            status = "✅" if pattern else "❌"
        else:
            status = "✅" if pattern in html_content else "❌"
        print(f"   {status} {check_name}")
        if not (pattern if isinstance(pattern, bool) else pattern in html_content):
            all_good = False
    
    print("-" * 60)
    
    # Check data file structure
    with open('/var/www/jgibson.site/public_html/js/section1-data.js', 'r') as f:
        data_content = f.read()
    
    # Count topics in data file
    topic_matches = re.findall(r'title:\s*"([^"]+)"', data_content)
    print(f"📊 TOPICS FOUND: {len(topic_matches)} topics in data file")
    
    # Check for all expected sections
    expected_sections = ['components', 'topology', 'cabling', 'issues', 'tcpUdp', 
                        'ipv4', 'privateIpv4', 'ipv6', 'ipv6Types', 'clientOs', 
                        'wireless', 'virtualization', 'switching']
    
    missing_sections = []
    for section in expected_sections:
        if f"{section}:" not in data_content:
            missing_sections.append(section)
    
    if missing_sections:
        print(f"❌ MISSING SECTIONS: {', '.join(missing_sections)}")
        all_good = False
    else:
        print("✅ ALL SECTIONS PRESENT")
    
    print("-" * 60)
    
    if all_good:
        print("🎉 VERIFICATION PASSED!")
        print("✨ Modular architecture is properly set up")
        print("🚀 Ready for production use")
        
        # Calculate total improvement
        original_size = 77379  # From our earlier measurements
        current_html = os.path.getsize('/var/www/jgibson.site/public_html/section1.html')
        data_file = os.path.getsize('/var/www/jgibson.site/public_html/js/section1-data.js')
        
        print(f"\n📈 FINAL METRICS:")
        print(f"   Original monolithic file: {original_size:,} bytes")
        print(f"   New HTML (clean):         {current_html:,} bytes")
        print(f"   External data file:       {data_file:,} bytes")
        print(f"   HTML size reduction:      {((original_size - current_html) / original_size * 100):.1f}%")
        
    else:
        print("❌ VERIFICATION FAILED!")
        print("🔧 Some issues need to be fixed")
    
    return all_good

if __name__ == "__main__":
    verify_modular_setup()