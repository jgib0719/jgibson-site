#!/usr/bin/env python3
"""
Clean up section1.html - Remove all leftover broken code from extraction
"""

def clean_section1_html():
    with open('/var/www/jgibson.site/public_html/section1.html', 'r') as f:
        content = f.read()
    
    # Remove all the leftover broken comment sections and empty topic arrays
    patterns_to_remove = [
        r'// 1\.\d+ [^\n]*\n\s*\n',  # Comment headers like "// 1.1 Explain..."
        r'// 1\.\d+ [^\n]*\n',       # Comment headers without extra newline
        r'// Create topic cards for each section\n\s*function\s*\n',  # Broken function declaration
        r'createTopicCards\([^;]+\);\s*',  # Broken createTopicCards calls
        r'// Populate all grids\s*\n',     # Empty populate comment
        r'function\s*\n\s*card\.className[^}]+}\);?\s*}\s*',  # Broken function fragments
        r'card\.className = \'topic-card[^}]+}\);\s*}\);\s*}\s*',  # More broken fragments
        r'\s*\n\s*\n\s*\n',  # Multiple empty lines
    ]
    
    for pattern in patterns_to_remove:
        import re
        content = re.sub(pattern, '\n', content, flags=re.MULTILINE | re.DOTALL)
    
    # Remove duplicate DOMContentLoaded listeners and fix the structure
    # Find the main script section and clean it up
    script_start = content.find('<script src="js/ccna-config.js"></script>')
    script_end = content.find('</body>')
    
    if script_start != -1 and script_end != -1:
        # Replace the entire messy script section with clean version
        clean_script = '''<script src="js/ccna-config.js"></script>
    <script src="js/shared-progress.js"></script>
    <script src="js/section1-data.js"></script>
    <script>
        let progressTracker;
        let currentTopic;
        let currentCardElement;

        document.addEventListener('DOMContentLoaded', function() {
            // Initialize progress tracker
            progressTracker = new UnifiedCCNAProgressTracker(1);
            
            // Get the section data
            const data = window.SECTION1_DATA;
            
            if (!data) {
                console.error('Section data not loaded');
                return;
            }
            
            // Create topic cards function
            function createTopicCards(topics, gridElement) {
                if (!gridElement) return;
                
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
            
            // Populate all grids with external data
            Object.keys(data.metadata.subsections).forEach(key => {
                const gridElement = document.getElementById(key + 'Grid');
                if (gridElement && data[key]) {
                    createTopicCards(data[key], gridElement);
                }
            });
            
            // Auto-visual sync
            setTimeout(() => progressTracker.syncVisualState(), 100);
        });

        function openStudyModal(topic, cardElement) {
            currentTopic = topic;
            currentCardElement = cardElement;
            
            document.getElementById('modalTitle').textContent = topic.title;
            document.getElementById('modalDescription').textContent = topic.description;
            document.getElementById('modalSvg').innerHTML = topic.visual;
            
            const modal = document.getElementById('studyModal');
            const content = document.getElementById('modalContent');
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.add('visible');
                content.classList.add('visible');
            }, 10);
            
            // Update mark completed button
            const markBtn = document.getElementById('markCompleted');
            const isCompleted = progressTracker.isTopicCompleted(topic.title);
            if (isCompleted) {
                markBtn.innerHTML = '<i class="fas fa-undo mr-2"></i>Mark as Not Studied';
                markBtn.classList.remove('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'hover:from-indigo-600', 'hover:to-purple-700');
                markBtn.classList.add('bg-slate-600', 'hover:bg-slate-700');
            } else {
                markBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Mark as Studied';
                markBtn.classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'hover:from-indigo-600', 'hover:to-purple-700');
                markBtn.classList.remove('bg-slate-600', 'hover:bg-slate-700');
            }
        }

        function closeStudyModal() {
            const modal = document.getElementById('studyModal');
            const modalContent = document.getElementById('modalContent');
            
            modal.classList.remove('visible');
            modalContent.classList.remove('visible');
            setTimeout(() => {
                modal.classList.add('hidden');
                currentTopic = null;
            }, 300);
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('closeModal').addEventListener('click', closeStudyModal);
            document.getElementById('studyModal').addEventListener('click', function(e) {
                if (e.target === this) closeStudyModal();
            });

            document.getElementById('markCompleted').addEventListener('click', function() {
                if (currentTopic && currentCardElement) {
                    const isCompleted = progressTracker.isTopicCompleted(currentTopic.title);
                    progressTracker.markTopicCompleted(currentTopic.title, !isCompleted);
                    
                    if (!isCompleted) {
                        currentCardElement.classList.add('studied');
                        this.innerHTML = '<i class="fas fa-undo mr-2"></i>Mark as Not Studied';
                        this.classList.remove('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'hover:from-indigo-600', 'hover:to-purple-700');
                        this.classList.add('bg-slate-600', 'hover:bg-slate-700');
                    } else {
                        currentCardElement.classList.remove('studied');
                        this.innerHTML = '<i class="fas fa-check mr-2"></i>Mark as Studied';
                        this.classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'hover:from-indigo-600', 'hover:to-purple-700');
                        this.classList.remove('bg-slate-600', 'hover:bg-slate-700');
                    }
                    closeStudyModal();
                }
            });

            // Add keyboard support
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    if (document.getElementById('studyModal').classList.contains('visible')) {
                        closeStudyModal();
                    }
                }
            });
        });
    </script>
</body>
</html>'''
        
        # Replace the script section
        new_content = content[:script_start] + clean_script
        
        # Write the cleaned content
        with open('/var/www/jgibson.site/public_html/section1.html', 'w') as f:
            f.write(new_content)
        
        print("✅ Successfully cleaned section1.html!")
        print("🔧 Removed broken code fragments")
        print("🎯 Fixed script structure")
        print("📱 Ensured proper modular architecture")
        
        # Show new file size
        import os
        new_size = os.path.getsize('/var/www/jgibson.site/public_html/section1.html')
        print(f"📊 New file size: {new_size:,} bytes ({new_size/1024:.1f} KB)")
        
        return True
    else:
        print("❌ Could not find script section to clean")
        return False

if __name__ == "__main__":
    clean_section1_html()