#!/usr/bin/env python3
"""
Test script to validate CCNAConfig structure matches quiz engine expectations
"""

import json
import re

def test_config_structure():
    """Test that the configuration has the expected structure."""
    config_file = "/var/www/jgibson.site/public_html/guide/js/ccna-study-guide-config.js"
    
    try:
        with open(config_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print("❌ Configuration file not found")
        return False
    
    # Check for required configuration paths that cause errors
    required_paths = [
        r'cssClasses:\s*{[^}]*states:\s*{[^}]*hidden:',
        r'textContent:\s*{[^}]*feedback:\s*{[^}]*correct:',
        r'textContent:\s*{[^}]*feedback:\s*{[^}]*incorrect:',
        r'textContent:\s*{[^}]*buttons:\s*{[^}]*submitAnswer:'
    ]
    
    print("=== Testing Configuration Structure ===")
    print()
    
    passed = 0
    total = len(required_paths)
    
    for i, pattern in enumerate(required_paths):
        test_name = [
            "states.hidden class",
            "feedback.correct text",
            "feedback.incorrect text", 
            "buttons.submitAnswer text"
        ][i]
        
        if re.search(pattern, content, re.DOTALL):
            print(f"✅ {test_name}: Found")
            passed += 1
        else:
            print(f"❌ {test_name}: Missing")
    
    print()
    print(f"=== Summary: {passed}/{total} tests passed ===")
    
    return passed == total

def test_script_loading_order():
    """Test that scripts are loaded in correct order."""
    html_file = "/var/www/jgibson.site/public_html/index.html"
    
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print("❌ HTML file not found")
        return False
    
    print("=== Testing Script Loading Order ===")
    print()
    
    # Find script tags
    config_match = re.search(r'<script src="[^"]*ccna-study-guide-config\.js"', content)
    quiz_match = re.search(r'<script src="[^"]*ccna-quiz-engine\.js"', content)
    
    if not config_match:
        print("❌ Configuration script not found")
        return False
    
    if not quiz_match:
        print("❌ Quiz engine script not found")
        return False
    
    if config_match.start() < quiz_match.start():
        print("✅ Script loading order: Configuration loads before quiz engine")
        return True
    else:
        print("❌ Script loading order: Quiz engine loads before configuration")
        return False

def main():
    """Run all tests."""
    print("CCNAConfig Structure Validation")
    print("=" * 40)
    
    test1 = test_config_structure()
    test2 = test_script_loading_order()
    
    print()
    if test1 and test2:
        print("✅ All tests passed! Configuration should work properly.")
        return True
    else:
        print("❌ Some tests failed. Check configuration.")
        return False

if __name__ == "__main__":
    import sys
    success = main()
    sys.exit(0 if success else 1)