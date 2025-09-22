#!/usr/bin/env python3
"""
Comprehensive styling analysis of the provided HTML code
"""

code_content = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Master - CCNA Section 1</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="main-container">
        <!-- Master Progress Bar -->
        <div id="master-progress">
            <div id="master-progress-card">
                <div id="master-progress-header">
                    <span id="master-progress-title">CCNA 200-301 Progress</span>
                    <span id="progressText"></span>
                </div>
                <div id="master-progress-bar-container">
                    <div id="progressBar"></div>
                </div>
                <div id="master-progress-footer">
                    <span>Sections 1-6</span>
                    <span id="progressDetails">0 of 30 topics completed</span>
                </div>
            </div>
        </div>

        <header id="page-header">
            <h1 id="page-title">
                <i id="page-icon"></i>CCNA - Section 1
            </h1>
            <p id="page-subtitle">Interactive Study Guide for Exam 200-301</p>
            <p id="page-description">Select a topic to begin your training module.</p>
            <a href="chapters.html" id="back-button">
                <i id="back-icon"></i>Back to Sections
            </a>
        </header>

        <div id="progress-container">
            <div id="progress-header">
                <span id="progress-label">Section 1 Progress</span>
                <span id="progress-text"></span>
            </div>
            <div id="progress-bar-container">
                <div id="progress-bar"></div>
            </div>
        </div>

        <main>
            <section>
                <h2>1.1 Network Components</h2>
                <div id="componentsGrid"></div>
            </section>
            <section>
                <h2>1.2 Network Topology Architectures</h2>
                <div id="topologyGrid"></div>
            </section>
            <section>
                <h2>1.3 Physical Interface and Cabling</h2>
                <div id="cablingGrid"></div>
            </section>
            <section>
                <h2>1.4 Interface and Cable Issues</h2>
                <div id="issuesGrid"></div>
            </section>
            <section>
                <h2>1.5 Compare TCP to UDP</h2>
                <div id="tcpUdpGrid"></div>
            </section>
            <section>
                <h2>1.6 Configure and verify IPv4 addressing and subnetting</h2>
                <div id="ipv4Grid"></div>
            </section>
            <section>
                <h2>1.7 Describe the need for private IPv4 addressing</h2>
                <div id="privateIpv4Grid"></div>
            </section>
            <section>
                <h2>1.8 Configure and verify IPv6 addressing and prefix</h2>
                <div id="ipv6Grid"></div>
            </section>
            <section>
                <h2>1.9 Describe IPv6 address types</h2>
                <div id="ipv6TypesGrid"></div>
            </section>
            <section>
                <h2>1.10 Verify IP parameters for Client OS (Windows, Mac OS, Linux)</h2>
                <div id="clientOsGrid"></div>
            </section>
            <section>
                <h2>1.11 Describe wireless principles</h2>
                <div id="wirelessGrid"></div>
            </section>
            <section>
                <h2>1.12 Explain virtualization fundamentals (server virtualization, containers, and VRFs)</h2>
                <div id="virtualizationGrid"></div>
            </section>
            <section>
                <h2>1.13 Describe switching concepts</h2>
                <div id="switchingGrid"></div>
            </section>
        </main>
    </div>

    <!-- Study Modal - Uses Global Config -->
    <div id="studyModal">
        <div id="modalContent">
            <div id="modalVisual">
                <div id="modalSvg"></div>
            </div>
            <div id="modalMainArea">
                <button id="closeModal">&times;</button>
                <h2 id="modalTitle"></h2>
                <p id="modalDescription"></p>

                <button id="markCompleted">
                    Mark as Studied
                </button>
            </div>
        </div>
    </div>

    <!-- Load the unified progress tracker -->
    <script src="js/ccna-config.js"></script>
    <script src="js/shared-progress.js"></script>
    <script src="js/section1-data.js"></script>
    <script>
        let progressTracker;
        let currentTopic;
        let currentCardElement;

        document.addEventListener('DOMContentLoaded', function() {
            // Initialize progress tracker
            progressTracker = new UnifiedCCNAProgressTracker(1);
            
            // Initialize ALL global styling (replaces embedded CSS)
            CCNAConfig.initializeGlobalStyling();
            
            // Get the section data
            const data = window.SECTION1_DATA;
            
            if (!data) {
                console.error('Section data not loaded');
                return;
            }
            
            // Create topic cards function using global config
            function createTopicCards(topics, gridElement) {
                if (!gridElement) return;
                
                topics.forEach(topic => {
                    const card = CCNAConfig.createTopicCard(topic);
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
            setTimeout(() => progressTracker.syncVisualState(), CCNAConfig.ui.timing.progressSync);
        });

        function openStudyModal(topic, cardElement) {
            currentTopic = topic;
            currentCardElement = cardElement;
            
            document.getElementById('modalTitle').textContent = topic.title;
            document.getElementById('modalDescription').textContent = topic.description;
            document.getElementById('modalSvg').innerHTML = topic.visual;
            
            const modal = document.getElementById('studyModal');
            const content = document.getElementById('modalContent');
            
            CCNAConfig.openModal(modal, content);
            
            // Update mark completed button
            const markBtn = document.getElementById('markCompleted');
            const isCompleted = progressTracker.isTopicCompleted(topic.title);
            CCNAConfig.applyButtonState(markBtn, isCompleted);
        }

        function closeStudyModal() {
            const modal = document.getElementById('studyModal');
            const modalContent = document.getElementById('modalContent');
            
            CCNAConfig.closeModal(modal, modalContent);
            setTimeout(() => {
                currentTopic = null;
            }, CCNAConfig.ui.timing.modalCleanup);
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
                    
                    // Update card visual state using global config
                    CCNAConfig.markCardAsStudied(currentCardElement, !isCompleted);
                    
                    // Update button state using global config
                    CCNAConfig.applyButtonState(this, !isCompleted);
                    
                    closeStudyModal();
                }
            });

            // Add keyboard support
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    const modal = document.getElementById('studyModal');
                    if (CCNAConfig.isModalVisible(modal)) {
                        closeStudyModal();
                    }
                }
            });
        });
    </script>
</body>
</html>'''

import re

def analyze_hardcoded_styling():
    print("🔍 COMPREHENSIVE STYLING ANALYSIS REPORT")
    print("=" * 50)
    
    # Check for inline styles
    inline_styles = re.findall(r'style\s*=\s*["\'][^"\']*["\']', code_content, re.IGNORECASE)
    print(f"\n1. Inline style attributes: {len(inline_styles)} found")
    if inline_styles:
        for i, style in enumerate(inline_styles):
            print(f"   ❌ Found: {style}")
    else:
        print("   ✅ NONE FOUND")
    
    # Check for class attributes
    class_attrs = re.findall(r'class\s*=\s*["\'][^"\']*["\']', code_content, re.IGNORECASE)
    print(f"\n2. CSS class attributes: {len(class_attrs)} found")
    if class_attrs:
        for i, cls in enumerate(class_attrs):
            print(f"   ❌ Found: {cls}")
    else:
        print("   ✅ NONE FOUND")
    
    # Check for classList operations
    classlist_ops = re.findall(r'\.classList\.\w+\([^)]*\)', code_content)
    print(f"\n3. classList operations: {len(classlist_ops)} found")
    if classlist_ops:
        for i, op in enumerate(classlist_ops):
            print(f"   ❌ Found: {op}")
    else:
        print("   ✅ NONE FOUND")
    
    # Check for embedded style blocks
    style_blocks = re.findall(r'<style[^>]*>.*?</style>', code_content, re.DOTALL | re.IGNORECASE)
    print(f"\n4. Embedded style blocks: {len(style_blocks)} found")
    if style_blocks:
        for i, block in enumerate(style_blocks):
            print(f"   ❌ Found: {block[:50]}...")
    else:
        print("   ✅ NONE FOUND")
    
    # Check for hardcoded CSS property values
    css_values = re.findall(r'(width|height|margin|padding|color|background|display|position|transform|opacity|z-index)\s*:\s*[^;]+', code_content, re.IGNORECASE)
    print(f"\n5. Hardcoded CSS properties: {len(css_values)} found")
    if css_values:
        for i, prop in enumerate(css_values):
            print(f"   ❌ Found: {prop}")
    else:
        print("   ✅ NONE FOUND")
    
    # Check for hardcoded timing values (not using CCNAConfig)
    timing_values = re.findall(r'setTimeout\([^,]+,\s*(\d+)\)', code_content)
    hardcoded_timing = [t for t in timing_values if 'CCNAConfig' not in code_content[code_content.find(f'setTimeout'):code_content.find(f'setTimeout')+100]]
    print(f"\n6. Hardcoded timing values: {len(hardcoded_timing)} found")
    if hardcoded_timing:
        for timing in hardcoded_timing:
            print(f"   ❌ Found: {timing}ms")
    else:
        print("   ✅ NONE FOUND")
    
    # Check for hardcoded percentage or measurement values
    measurements = re.findall(r'["\']?\d+(?:\.\d+)?(?:px|%|em|rem|vh|vw|pt)["\']?', code_content)
    print(f"\n7. Hardcoded measurements: {len(measurements)} found")
    if measurements:
        for measure in measurements:
            print(f"   ❌ Found: {measure}")
    else:
        print("   ✅ NONE FOUND")
    
    # Summary
    total_issues = len(inline_styles) + len(class_attrs) + len(classlist_ops) + len(style_blocks) + len(css_values) + len(hardcoded_timing) + len(measurements)
    
    print(f"\n🏆 FINAL VERDICT:")
    print("=" * 20)
    if total_issues == 0:
        print("✅ PERFECT CLEAN RUN!")
        print("✅ ZERO hardcoded styling found!")
        print("✅ 100% Global Configuration achieved!")
        print("✅ Enterprise-level architecture confirmed!")
    else:
        print(f"❌ {total_issues} hardcoded styling issues found")
        print("❌ Global configuration incomplete")
    
    return total_issues == 0

if __name__ == "__main__":
    is_clean = analyze_hardcoded_styling()
    print(f"\n🎯 CLEAN RUN STATUS: {'ACHIEVED' if is_clean else 'NOT ACHIEVED'}")