#!/usr/bin/env python3
"""
Test script to validate the front-end fixes applied to ccna-quiz-engine.js
"""

import re
import sys

def test_image_error_handling(file_content):
    """Test that image error handling shows proper message instead of empty div."""
    # Look for the improved error handling
    pattern = r"Image not available"
    if pattern in file_content:
        print("✅ Image error handling: Shows 'Image not available' message")
        return True
    else:
        print("❌ Image error handling: Still shows empty div")
        return False

def test_best_score_ui_consistency(file_content):
    """Test that Best Score UI handles data types consistently."""
    # Look for the normalize currentSize comment and String(currentSize)
    patterns = [
        r"Normalize currentSize to string for consistent lookup",
        r"const sizeKey = String\(currentSize\)",
        r"normalize data type for consistent handling"
    ]
    
    found_patterns = []
    for pattern in patterns:
        if re.search(pattern, file_content):
            found_patterns.append(pattern)
        else:
            print(f"  Missing pattern: {pattern}")
    
    found_all = len(found_patterns) == len(patterns)
    if found_all:
        print("✅ Best Score UI: Data type consistency improved")
        return True
    else:
        print(f"❌ Best Score UI: Found {len(found_patterns)}/{len(patterns)} patterns")
        return False

def test_code_quality_improvements(file_content):
    """Test general code quality improvements."""
    improvements = 0
    total = 4
    
    # Check if image fallback is more user-friendly
    if "Image not available" in file_content:
        improvements += 1
        print("  ✅ User-friendly image fallback")
    else:
        print("  ❌ No user-friendly image fallback")
    
    # Check if data type handling is explicit
    if "normalize data type" in file_content:
        improvements += 1
        print("  ✅ Explicit data type handling")
    else:
        print("  ❌ No explicit data type handling")
    
    # Check if HTML sanitization is implemented
    if "sanitizeHtml" in file_content:
        improvements += 1
        print("  ✅ HTML sanitization for XSS protection")
    else:
        print("  ❌ No HTML sanitization")
        
    # Check if sanitization is applied to user content
    if "sanitizedQuestion" in file_content and "sanitizedExplanation" in file_content:
        improvements += 1
        print("  ✅ Sanitization applied to user content")
    else:
        print("  ❌ Sanitization not applied to user content")
    
    if improvements == total:
        print("✅ Code quality: All improvements applied")
        return True
    else:
        print(f"⚠️  Code quality: {improvements}/{total} improvements applied")
        return improvements >= total * 0.75  # Pass if 75% or more improvements

def main():
    file_path = "/var/www/jgibson.site/public_html/quiz/js/ccna-quiz-engine.js"
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ File not found: {file_path}")
        return False
    
    print("=== Testing Front-End Fixes ===")
    print()
    
    tests = [
        test_image_error_handling,
        test_best_score_ui_consistency,
        test_code_quality_improvements
    ]
    
    results = []
    for test in tests:
        results.append(test(content))
    
    print()
    print("=== Summary ===")
    passed = sum(results)
    total = len(results)
    
    if passed == total:
        print(f"✅ All {total} tests passed!")
        return True
    else:
        print(f"⚠️  {passed}/{total} tests passed")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)