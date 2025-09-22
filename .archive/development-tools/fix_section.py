#!/usr/bin/env python3
"""
Final fix for section1.html - ensure all functions are preserved
"""

def fix_section_html():
    # Read the current minimal version
    with open('/var/www/jgibson.site/public_html/section1.html', 'r') as f:
        content = f.read()
    
    # Find the place to insert the missing createTopicCards function
    # Look for the progress tracker initialization
    progress_init_marker = "progressTracker = new UnifiedCCNAProgressTracker(1);"
    
    if progress_init_marker in content:
        # Insert the createTopicCards function right after progress tracker init
        function_def = '''
            // Create topic cards for each section
            function createTopicCards(topics, gridElement) {
                topics.forEach(topic => {
                    const card = document.createElement('div');
                    card.className = 'topic-card p-6 flex flex-col justify-center items-center text-center cursor-pointer h-56 w-60';
                    card.innerHTML = `
                        <i class="fas ${topic.icon} text-5xl text-indigo-400 mb-4"></i>
                        <h3 class="text-xl font-semibold text-slate-200 title-font">${topic.title}</h3>
                    `;
                    card.onclick = () => openStudyModal(topic, card);
                    gridElement.appendChild(card);
                });
            }
'''
        
        # Insert the function definition
        content = content.replace(
            progress_init_marker,
            progress_init_marker + function_def
        )
        
        # Write back the fixed content
        with open('/var/www/jgibson.site/public_html/section1.html', 'w') as f:
            f.write(content)
        
        print("✅ Fixed section1.html - added missing createTopicCards function")
        return True
    else:
        print("❌ Could not find progress tracker initialization")
        return False

if __name__ == "__main__":
    fix_section_html()