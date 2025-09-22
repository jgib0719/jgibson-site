#!/usr/bin/env python3
"""
Verify that all hardcoded sizing has been removed from HTML
"""

import re

def verify_no_hardcoded_sizing():
    print("🔍 VERIFYING NO HARDCODED SIZING IN HTML")
    print("=" * 50)
    
    # Read the HTML file
    with open('/var/www/jgibson.site/public_html/section1.html', 'r') as f:
        html_content = f.read()
    
    # Common Tailwind sizing patterns that should be in config, not HTML
    problematic_patterns = [
        (r'class="[^"]*max-w-\w+', 'Modal width sizing'),
        (r'class="[^"]*h-\d+', 'Height sizing'),
        (r'class="[^"]*w-\d+', 'Width sizing'), 
        (r'class="[^"]*p-\d+', 'Padding sizing'),
        (r'class="[^"]*text-\w+', 'Text sizing'),
        (r'class="[^"]*bg-gradient-to-', 'Background gradients'),
        (r'class="[^"]*from-\w+', 'Gradient colors'),
        (r'class="[^"]*to-\w+', 'Gradient colors'),
        (r'class="[^"]*hover:from-', 'Hover states'),
        (r'class="[^"]*hover:to-', 'Hover states'),
        (r'class="[^"]*transition-', 'Transitions'),
        (r'class="[^"]*transform', 'Transforms'),
        (r'class="[^"]*scale-', 'Scale transforms')
    ]
    
    issues_found = []
    
    # Check for problematic patterns
    for pattern, description in problematic_patterns:
        matches = re.findall(pattern, html_content, re.IGNORECASE)
        if matches:
            for match in matches:
                # Skip certain acceptable cases (like basic layout classes)
                if not any(skip in match for skip in ['container mx-auto', 'flex', 'text-center', 'mb-', 'mt-']):
                    issues_found.append((description, match))
    
    # Specific checks for modal elements that should be clean
    modal_elements = [
        'studyModal',
        'modalContent', 
        'modalVisual',
        'modalSvg',
        'modalMainArea',
        'closeModal',
        'modalTitle',
        'modalDescription',
        'markCompleted'
    ]
    
    print("🔬 CHECKING MODAL ELEMENTS:")
    clean_count = 0
    
    for element in modal_elements:
        # Look for the element definition
        element_pattern = rf'id="{element}"[^>]*class="([^"]*)"'
        match = re.search(element_pattern, html_content)
        
        if match:
            classes = match.group(1)
            if classes and classes.strip():
                print(f"   ❌ {element}: has classes '{classes}'")
            else:
                print(f"   ✅ {element}: clean (no classes)")
                clean_count += 1
        else:
            # Check if element exists without classes
            element_exists = f'id="{element}"' in html_content
            if element_exists:
                print(f"   ✅ {element}: clean (no classes)")
                clean_count += 1
            else:
                print(f"   ⚠️  {element}: not found")
    
    print(f"\n📊 RESULTS:")
    print(f"   Clean modal elements: {clean_count}/{len(modal_elements)}")
    
    if issues_found:
        print(f"   ❌ Hardcoded sizing found: {len(issues_found)} issues")
        for desc, match in issues_found[:5]:  # Show first 5
            print(f"      • {desc}: {match}")
        if len(issues_found) > 5:
            print(f"      ... and {len(issues_found) - 5} more")
    else:
        print(f"   ✅ No hardcoded sizing patterns detected")
    
    # Check config file has the expected classes
    with open('/var/www/jgibson.site/public_html/js/ccna-config.js', 'r') as f:
        config_content = f.read()
    
    expected_config_sections = [
        'overlayClasses',
        'containerClasses', 
        'visualAreaClasses',
        'mainAreaClasses',
        'closeButtonClasses',
        'titleClasses',
        'descriptionClasses',
        'markButtonClasses'
    ]
    
    print(f"\n🔧 CONFIG COMPLETENESS:")
    config_complete = 0
    for section in expected_config_sections:
        if section in config_content:
            print(f"   ✅ {section}")
            config_complete += 1
        else:
            print(f"   ❌ {section} missing")
    
    print(f"\n🎯 FINAL SCORE:")
    total_score = clean_count + config_complete
    max_score = len(modal_elements) + len(expected_config_sections)
    percentage = (total_score / max_score) * 100
    
    print(f"   {total_score}/{max_score} ({percentage:.1f}%)")
    
    if percentage >= 95:
        print(f"   🎉 EXCELLENT - Truly global configuration!")
    elif percentage >= 80:
        print(f"   ✅ GOOD - Minor cleanup needed")
    else:
        print(f"   ❌ NEEDS WORK - Significant hardcoding remains")
    
    return percentage >= 95

if __name__ == "__main__":
    verify_no_hardcoded_sizing()