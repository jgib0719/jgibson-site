#!/usr/bin/env python3
"""
Modularization Results Summary
"""

import os

def show_results():
    files_info = {
        'section1.html': '/var/www/jgibson.site/public_html/section1.html',
        'section1.backup.html': '/var/www/jgibson.site/public_html/section1.backup.html', 
        'section1-data.js': '/var/www/jgibson.site/public_html/js/section1-data.js'
    }
    
    print("🎉 MODULARIZATION COMPLETE!")
    print("="*50)
    
    total_original = 0
    total_new = 0
    
    for name, path in files_info.items():
        if os.path.exists(path):
            size = os.path.getsize(path)
            size_kb = size / 1024
            
            if 'backup' in name:
                total_original = size
                print(f"📄 {name:<20} {size:>7,} bytes ({size_kb:>6.1f} KB) [ORIGINAL]")
            elif name == 'section1.html':
                total_new += size
                print(f"📄 {name:<20} {size:>7,} bytes ({size_kb:>6.1f} KB) [MODULAR]")
            else:
                total_new += size
                print(f"📄 {name:<20} {size:>7,} bytes ({size_kb:>6.1f} KB) [DATA]")
    
    print("-" * 50)
    print(f"📊 BEFORE: {total_original:,} bytes ({total_original/1024:.1f} KB)")
    print(f"📊 AFTER:  {total_new:,} bytes ({total_new/1024:.1f} KB)")
    
    if total_original > 0:
        savings = total_original - total_new
        savings_percent = (savings / total_original) * 100
        
        if savings > 0:
            print(f"💰 SAVINGS: {savings:,} bytes ({savings_percent:.1f}% reduction)")
        else:
            expansion = total_new - total_original  
            expansion_percent = (expansion / total_original) * 100
            print(f"📈 SIZE INCREASE: {expansion:,} bytes ({expansion_percent:.1f}% larger)")
    
    print("\n✅ BENEFITS:")
    print("   • Modular architecture - easy to maintain")
    print("   • Reusable data file for other sections")
    print("   • Clean separation of concerns")
    print("   • Faster page load (smaller HTML)")
    print("   • Global configuration possible")
    
    print("\n📁 FILE STRUCTURE:")
    print("   section1.html         - Clean UI/UX code only")
    print("   js/section1-data.js   - All topic data")
    print("   section1.backup.html  - Original for reference")

if __name__ == "__main__":
    show_results()