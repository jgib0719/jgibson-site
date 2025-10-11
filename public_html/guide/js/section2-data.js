/**
 * CCNA Section 2: Network Access - Complete Topic Data
 */

const SECTION2_DATA = {
    vlans: [
        {
            title: "Access Ports",
            icon: "fa-network-wired",
            description: "Access ports connect to end devices like PCs and IP phones. A port can be a member of one data VLAN. An additional voice VLAN can be configured to carry voice traffic from an IP phone.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Access Port for Data and Voice VLANs</title>
                <!-- Switch -->
                <rect x="150" y="40" width="100" height="40" rx="5" fill="#334155" stroke="#475569" />
                <text x="200" y="65" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle">Switch</text>
                <!-- Port -->
                <line x1="200" y1="80" x2="200" y2="100" stroke="#6366f1" stroke-width="2"/>
                <text x="210" y="95" font-family="monospace" font-size="10" fill="#94a3b8">Fa0/1</text>
                <!-- IP Phone -->
                <rect x="175" y="140" width="50" height="30" rx="3" fill="#0ea5e9"/>
                <text x="200" y="160" font-family="sans-serif" font-size="10" fill="white" text-anchor="middle">VoIP</text>
                <!-- PC -->
                <rect x="80" y="140" width="60" height="40" rx="3" fill="#10b981"/>
                <text x="110" y="165" font-family="sans-serif" font-size="10" fill="white" text-anchor="middle">PC</text>
                <!-- Connections -->
                <line x1="200" y1="100" x2="200" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
                <line x1="140" y1="155" x2="175" y2="155" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="220" y="120" font-family="monospace" font-size="10" fill="#0ea5e9">VLAN 20 (Voice)</text>
                <text x="130" y="120" font-family="monospace" font-size="10" fill="#10b981">VLAN 10 (Data)</text>
            </svg>`
        },
        {
            title: "Default VLAN",
            icon: "fa-layer-group",
            description: "By default, all ports on a Cisco switch are in VLAN 1. It is a security best practice to change the default VLAN from 1 to another number and not use VLAN 1 for any data traffic.",
            visual: `<svg viewBox="0 0 400 200">
                 <title>Default VLAN Concept</title>
                 <rect x="50" y="50" width="300" height="100" rx="10" fill="#334155" stroke="#475569"/>
                 <text x="200" y="35" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">Switch Ports in Default VLAN 1</text>
                 <circle cx="100" cy="100" r="15" fill="#f87171"/><text x="100" y="105" fill="white" font-size="10" text-anchor="middle">P1</text>
                 <circle cx="150" cy="100" r="15" fill="#f87171"/><text x="150" y="105" fill="white" font-size="10" text-anchor="middle">P2</text>
                 <circle cx="200" cy="100" r="15" fill="#f87171"/><text x="200" y="105" fill="white" font-size="10" text-anchor="middle">P3</text>
                 <circle cx="250" cy="100" r="15" fill="#f87171"/><text x="250" y="105" fill="white" font-size="10" text-anchor="middle">P4</text>
                 <circle cx="300" cy="100" r="15" fill="#f87171"/><text x="300" y="105" fill="white" font-size="10" text-anchor="middle">P5</text>
                 <path d="M 60 160 Q 200 180 340 160" stroke="#f87171" stroke-dasharray="5,5" fill="none"/>
                 <text x="200" y="175" font-family="sans-serif" font-size="12" fill="#f87171" text-anchor="middle">Best Practice: Move ports to other VLANs</text>
            </svg>`
        },
        {
            title: "Connectivity",
            icon: "fa-check-circle",
            description: "Use `show vlan brief` to see VLAN assignments. To test connectivity, ensure devices in the same VLAN can ping each other, while devices in different VLANs cannot (without a Layer 3 device).",
            visual: `<svg viewBox="0 0 400 200">
                <title>VLAN Connectivity Verification</title>
                <rect x="20" y="80" width="60" height="40" rx="5" fill="#10b981"/><text x="50" y="105" font-size="10" fill="white" text-anchor="middle">PC-A</text><text x="50" y="75" font-size="10" fill="#e2e8f0" text-anchor="middle">VLAN 10</text>
                <rect x="120" y="80" width="60" height="40" rx="5" fill="#10b981"/><text x="150" y="105" font-size="10" fill="white" text-anchor="middle">PC-B</text><text x="150" y="75" font-size="10" fill="#e2e8f0" text-anchor="middle">VLAN 10</text>
                <rect x="220" y="80" width="60" height="40" rx="5" fill="#0ea5e9"/><text x="250" y="105" font-size="10" fill="white" text-anchor="middle">PC-C</text><text x="250" y="75" font-size="10" fill="#e2e8f0" text-anchor="middle">VLAN 20</text>
                <!-- PING OK -->
                <path d="M 85 90 C 100 70, 130 70, 145 90" stroke="#10b981" stroke-width="2" fill="none" stroke-dasharray="4"/>
                <text x="115" y="65" font-size="12" fill="#10b981" text-anchor="middle">PING OK</text>
                <!-- PING FAIL -->
                <line x1="185" x2="215" y1="100" y2="100" stroke="#f87171" stroke-width="2"/>
                <text x="200" y="90" font-size="18" fill="#f87171" text-anchor="middle">✗</text>
                <text x="200" y="120" font-size="12" fill="#f87171" text-anchor="middle">PING FAIL</text>
            </svg>`
        },
    ],
    trunks: [
        {
            title: "Trunk Ports",
            icon: "fa-project-diagram",
            description: "Trunk ports carry traffic from multiple VLANs between switches. They are essential for extending VLANs across a network infrastructure. A trunk port is not assigned to a specific VLAN.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Trunk Port between Switches</title>
                <!-- Switch 1 -->
                <rect x="50" y="80" width="100" height="40" rx="5" fill="#334155"/><text x="100" y="105" font-size="12" fill="#e2e8f0" text-anchor="middle">Switch A</text>
                <!-- Switch 2 -->
                <rect x="250" y="80" width="100" height="40" rx="5" fill="#334155"/><text x="300" y="105" font-size="12" fill="#e2e8f0" text-anchor="middle">Switch B</text>
                <!-- Trunk Link -->
                <line x1="150" y1="100" x2="250" y2="100" stroke="#6366f1" stroke-width="4"/>
                <text x="200" y="90" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle">Trunk Link</text>
                <!-- VLAN tags -->
                <rect x="170" y="110" width="20" height="15" fill="#10b981"/><text x="180" y="122" fill="white" font-size="8">10</text>
                <rect x="195" y="110" width="20" height="15" fill="#0ea5e9"/><text x="205" y="122" fill="white" font-size="8">20</text>
                <rect x="220" y="110" width="20" height="15" fill="#f59e0b"/><text x="230" y="122" fill="white" font-size="8">30</text>
            </svg>`
        },
        {
            title: "802.1Q",
            icon: "fa-tag",
            description: "The IEEE 802.1Q standard defines a system of VLAN tagging for Ethernet frames. It inserts a 4-byte tag into the frame header to identify the VLAN the frame belongs to as it traverses trunk links.",
            visual: `<svg viewBox="0 0 400 150">
                <title>802.1Q Frame Tag</title>
                <text x="200" y="30" font-size="14" fill="#e2e8f0" text-anchor="middle">Ethernet Frame with 802.1Q Tag</text>
                <rect x="20" y="60" width="80" height="30" fill="#475569"/><text x="60" y="80" fill="white" font-size="10">DA/SA</text>
                <rect x="100" y="60" width="60" height="30" fill="#6366f1"/><text x="130" y="80" fill="white" font-size="10">802.1Q Tag</text>
                <rect x="160" y="60" width="80" height="30" fill="#475569"/><text x="200" y="80" fill="white" font-size="10">Type/Len</text>
                <rect x="240" y="60" width="100" height="30" fill="#475569"/><text x="290" y="80" fill="white" font-size="10">Data + Padding</text>
                <rect x="340" y="60" width="40" height="30" fill="#475569"/><text x="360" y="80" fill="white" font-size="10">FCS</text>
                <text x="130" y="110" font-size="10" fill="#94a3b8" text-anchor="middle">Contains VLAN ID (12 bits)</text>
            </svg>`
        },
        {
            title: "Native VLAN",
            icon: "fa-house-user",
            description: "The Native VLAN is the one VLAN on an 802.1Q trunk that is not tagged. Frames in the native VLAN are sent unmodified. For security, the native VLAN should be an unused VLAN, not VLAN 1.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Native VLAN Traffic on a Trunk</title>
                <!-- Switches and Trunk -->
                <rect x="50" y="80" width="80" height="40" rx="5" fill="#334155"/><text x="90" y="105" font-size="10" text-anchor="middle" fill="white">SW1</text>
                <rect x="270" y="80" width="80" height="40" rx="5" fill="#334155"/><text x="310" y="105" font-size="10" text-anchor="middle" fill="white">SW2</text>
                <line x1="130" y1="100" x2="270" y2="100" stroke="#6366f1" stroke-width="4"/>
                <text x="200" y="90" fill="#e2e8f0" font-size="10" text-anchor="middle">Trunk</text>
                <!-- Tagged Traffic -->
                <text x="200" y="60" fill="#10b981" font-size="10" text-anchor="middle">VLAN 10 Traffic (Tagged)</text>
                <path d="M140,75 C170,60 230,60 260,75" stroke="#10b981" fill="none" stroke-dasharray="3,3"/>
                <!-- Untagged Native Traffic -->
                <text x="200" y="140" fill="#f59e0b" font-size="10" text-anchor="middle">VLAN 99 Traffic (Native - Untagged)</text>
                <line x1="140" y1="125" x2="260" y2="125" stroke="#f59e0b" stroke-width="2"/>
            </svg>`
        },
        {
            title: "VTP Modes",
            icon: "fa-server",
            description: "VLAN Trunking Protocol (VTP) synchronizes VLAN information across switches in a domain. Server mode creates/modifies VLANs, Client mode receives updates, Transparent mode forwards advertisements without participating.",
            visual: `<svg viewBox="0 0 400 200">
                <title>VTP Domain Operation</title>
                <!-- VTP Server -->
                <rect x="50" y="80" width="80" height="40" rx="5" fill="#10b981" stroke="#059669" stroke-width="2"/>
                <text x="90" y="95" font-size="10" fill="white" text-anchor="middle" font-weight="bold">VTP Server</text>
                <text x="90" y="108" font-size="8" fill="white" text-anchor="middle">Create/Modify</text>
                <text x="90" y="118" font-size="8" fill="white" text-anchor="middle">VLANs</text>
                
                <!-- VTP Client -->
                <rect x="270" y="40" width="80" height="40" rx="5" fill="#6366f1" stroke="#4f46e5" stroke-width="2"/>
                <text x="310" y="55" font-size="10" fill="white" text-anchor="middle" font-weight="bold">VTP Client</text>
                <text x="310" y="68" font-size="8" fill="white" text-anchor="middle">Receive Only</text>
                <text x="310" y="78" font-size="8" fill="white" text-anchor="middle">No Modify</text>
                
                <!-- VTP Transparent -->
                <rect x="270" y="120" width="80" height="40" rx="5" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
                <text x="310" y="135" font-size="10" fill="white" text-anchor="middle" font-weight="bold">Transparent</text>
                <text x="310" y="148" font-size="8" fill="white" text-anchor="middle">Forward Only</text>
                <text x="310" y="158" font-size="8" fill="white" text-anchor="middle">No Sync</text>
                
                <!-- VTP Advertisements -->
                <path d="M 130 100 Q 200 70 270 60" stroke="#10b981" stroke-width="2" fill="none"/>
                <text x="200" y="65" font-size="9" fill="#10b981" text-anchor="middle">VTP Advertisements</text>
                
                <path d="M 130 100 Q 200 130 270 140" stroke="#10b981" stroke-width="2" fill="none"/>
                <text x="200" y="125" font-size="9" fill="#10b981" text-anchor="middle">Forward Through</text>
                
                <!-- Domain Information -->
                <ellipse cx="200" cy="170" rx="120" ry="20" fill="none" stroke="#94a3b8" stroke-dasharray="3,3"/>
                <text x="200" y="175" font-size="10" fill="#94a3b8" text-anchor="middle">VTP Domain: COMPANY</text>
                
                <!-- Security Warning -->
                <rect x="100" y="25" width="200" height="15" rx="3" fill="#f87171" fill-opacity="0.2" stroke="#f87171"/>
                <text x="200" y="35" font-size="9" fill="#f87171" text-anchor="middle">⚠ Server mode can delete all VLANs</text>
            </svg>`
        },
        {
            title: "VTP Pruning",
            icon: "fa-cut",
            description: "VTP Pruning optimizes bandwidth by restricting VLAN traffic on trunk links. Only sends VLAN traffic on trunks where the VLAN has active ports, reducing unnecessary broadcasts and improving performance.",
            visual: `<svg viewBox="0 0 400 200">
                <title>VTP Pruning Operation</title>
                <!-- Switch Network -->
                <rect x="50" y="80" width="60" height="40" rx="5" fill="#334155"/>
                <text x="80" y="105" font-size="10" fill="white" text-anchor="middle">SW1</text>
                
                <rect x="170" y="80" width="60" height="40" rx="5" fill="#334155"/>
                <text x="200" y="105" font-size="10" fill="white" text-anchor="middle">SW2</text>
                
                <rect x="290" y="80" width="60" height="40" rx="5" fill="#334155"/>
                <text x="320" y="105" font-size="10" fill="white" text-anchor="middle">SW3</text>
                
                <!-- Trunk Links -->
                <line x1="110" y1="100" x2="170" y2="100" stroke="#6366f1" stroke-width="3"/>
                <line x1="230" y1="100" x2="290" y2="100" stroke="#6366f1" stroke-width="3"/>
                
                <!-- VLAN 10 Active (Green) -->
                <circle cx="80" cy="140" r="12" fill="#10b981"/>
                <text x="80" y="144" font-size="8" fill="white" text-anchor="middle">V10</text>
                <text x="80" y="160" font-size="8" fill="#10b981" text-anchor="middle">Active</text>
                
                <circle cx="200" cy="140" r="12" fill="#10b981"/>
                <text x="200" y="144" font-size="8" fill="white" text-anchor="middle">V10</text>
                <text x="200" y="160" font-size="8" fill="#10b981" text-anchor="middle">Active</text>
                
                <!-- VLAN 20 Pruned (Red) -->
                <circle cx="320" cy="140" r="12" fill="#f87171" stroke="#f87171" stroke-dasharray="2,2" fill-opacity="0.3"/>
                <text x="320" y="144" font-size="8" fill="#f87171" text-anchor="middle">V20</text>
                <text x="320" y="160" font-size="8" fill="#f87171" text-anchor="middle">Pruned</text>
                
                <!-- Traffic Flow Visualization -->
                <path d="M 125 90 L 155 90" stroke="#10b981" stroke-width="2" fill="none"/>
                <text x="140" y="85" font-size="8" fill="#10b981" text-anchor="middle">VLAN 10</text>
                
                <path d="M 245 90 L 275 90" stroke="#f87171" stroke-width="2" fill="none" stroke-dasharray="3,3"/>
                <text x="260" y="85" font-size="8" fill="#f87171" text-anchor="middle">VLAN 20</text>
                <text x="260" y="75" font-size="7" fill="#f87171" text-anchor="middle">Blocked</text>
                
                <!-- Pruning Benefits -->
                <text x="200" y="40" font-size="12" fill="#e2e8f0" text-anchor="middle" font-weight="bold">VTP Pruning Benefits</text>
                <text x="100" y="185" font-size="9" fill="#94a3b8" text-anchor="middle">Reduced bandwidth usage</text>
                <text x="300" y="185" font-size="9" fill="#94a3b8" text-anchor="middle">Optimized trunk utilization</text>
            </svg>`
        }
    ],
    discovery: [
        {
            title: "CDP",
            icon: "fa-search-location",
            description: "Cisco proprietary Layer 2 protocol that shares information about directly connected Cisco equipment. Enabled by default, it exchanges device ID, port ID, platform info, and IP addresses. Essential for network documentation and troubleshooting.",
            visual: `<svg viewBox="0 0 400 200">
                <title>CDP Information Exchange</title>
                <!-- Router -->
                <circle cx="80" cy="100" r="30" fill="#6366f1"/>
                <text x="80" y="108" fill="white" font-size="14" text-anchor="middle">R1</text>
                <text x="80" y="140" fill="#e2e8f0" font-size="10" text-anchor="middle">Cisco 2911</text>
                
                <!-- Switch -->
                <rect x="290" y="75" width="60" height="50" rx="5" fill="#334155"/>
                <text x="320" y="105" fill="white" font-size="14" text-anchor="middle">SW1</text>
                <text x="320" y="140" fill="#e2e8f0" font-size="10" text-anchor="middle">C3560-24P</text>
                
                <!-- Connection -->
                <line x1="110" y1="100" x2="290" y2="100" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- CDP Information Bubbles -->
                <ellipse cx="200" cy="60" rx="70" ry="20" fill="#10b981" fill-opacity="0.2" stroke="#10b981"/>
                <text x="200" y="55" font-size="10" fill="#10b981" text-anchor="middle">Device ID: R1</text>
                <text x="200" y="68" font-size="10" fill="#10b981" text-anchor="middle">Platform: Cisco 2911</text>
                
                <ellipse cx="200" cy="140" rx="70" ry="20" fill="#0ea5e9" fill-opacity="0.2" stroke="#0ea5e9"/>
                <text x="200" y="135" font-size="10" fill="#0ea5e9" text-anchor="middle">Local Port: Gi0/0</text>
                <text x="200" y="148" font-size="10" fill="#0ea5e9" text-anchor="middle">IP: 192.168.1.1</text>
                
                <!-- CDP Label -->
                <text x="200" y="30" font-size="16" fill="#6366f1" text-anchor="middle" font-weight="bold">CDP Advertisements</text>
                <text x="200" y="180" font-size="12" fill="#94a3b8" text-anchor="middle">Every 60 seconds (default)</text>
            </svg>`
        },
        {
            title: "LLDP",
            icon: "fa-network-wired",
            description: "IEEE 802.1AB industry standard protocol for device discovery. Vendor-neutral alternative to CDP, allowing multi-vendor network discovery. Must be manually enabled on Cisco devices but works with any LLDP-capable device.",
            visual: `<svg viewBox="0 0 400 200">
                <title>LLDP Multi-Vendor Discovery</title>
                <!-- Cisco Switch -->
                <rect x="50" y="75" width="60" height="50" rx="5" fill="#334155"/>
                <text x="80" y="105" fill="white" font-size="12" text-anchor="middle">Cisco</text>
                <text x="80" y="140" fill="#e2e8f0" font-size="9" text-anchor="middle">C3560</text>
                
                <!-- HP/Aruba Switch -->
                <rect x="290" y="75" width="60" height="50" rx="5" fill="#f59e0b"/>
                <text x="320" y="105" fill="white" font-size="12" text-anchor="middle">HPE</text>
                <text x="320" y="140" fill="white" font-size="9" text-anchor="middle">2530-24G</text>
                
                <!-- Connection -->
                <line x1="110" y1="100" x2="290" y2="100" stroke="#10b981" stroke-width="3"/>
                
                <!-- LLDP Frame Visualization -->
                <rect x="170" y="85" width="60" height="30" rx="3" fill="#10b981" fill-opacity="0.3" stroke="#10b981"/>
                <text x="200" y="105" font-size="10" fill="#10b981" text-anchor="middle">LLDP Frame</text>
                
                <!-- Information Exchange -->
                <text x="200" y="50" font-size="14" fill="#10b981" text-anchor="middle" font-weight="bold">IEEE 802.1AB Standard</text>
                <text x="200" y="70" font-size="10" fill="#94a3b8" text-anchor="middle">Vendor-Neutral Discovery</text>
                
                <!-- Protocol Details -->
                <text x="200" y="140" font-size="10" fill="#e2e8f0" text-anchor="middle">System Name • Port Description</text>
                <text x="200" y="155" font-size="10" fill="#e2e8f0" text-anchor="middle">Management Address • Capabilities</text>
                
                <!-- Standards Compliance -->
                <circle cx="150" cy="170" r="8" fill="#10b981"/>
                <text x="150" y="175" font-size="8" fill="white" text-anchor="middle">✓</text>
                <text x="170" y="175" font-size="10" fill="#10b981">Multi-Vendor Compatible</text>
                
                <circle cx="250" cy="170" r="8" fill="#0ea5e9"/>
                <text x="250" y="175" font-size="8" fill="white" text-anchor="middle">!</text>
                <text x="270" y="175" font-size="10" fill="#0ea5e9">Must Enable</text>
            </svg>`
        },
        {
            title: "Network Documentation & Best Practices",
            icon: "fa-clipboard-list",
            description: "Systematic approach to network documentation using discovery protocols. Includes topology mapping, inventory management, baseline documentation, and best practices for maintaining accurate network records.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Network Documentation Best Practices</title>
                <!-- Central Documentation Hub -->
                <rect x="160" y="75" width="80" height="50" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                <text x="200" y="95" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Network</text>
                <text x="200" y="108" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Documentation</text>
                <text x="200" y="118" font-size="7" fill="#e2e8f0" text-anchor="middle">Central Repository</text>
                
                <!-- CDP/LLDP Sources -->
                <circle cx="80" cy="60" r="20" fill="#6366f1"/>
                <text x="80" y="65" font-size="9" fill="white" text-anchor="middle">CDP</text>
                <line x1="100" y1="70" x2="160" y2="85" stroke="#6366f1" stroke-width="2"/>
                
                <circle cx="80" cy="140" r="20" fill="#10b981"/>
                <text x="80" y="145" font-size="9" fill="white" text-anchor="middle">LLDP</text>
                <line x1="100" y1="130" x2="160" y2="115" stroke="#10b981" stroke-width="2"/>
                
                <!-- Documentation Types -->
                <rect x="280" y="30" width="100" height="25" rx="3" fill="#0f172a" stroke="#f59e0b"/>
                <text x="330" y="47" font-size="8" fill="#f59e0b" text-anchor="middle">Topology Maps</text>
                <line x1="240" y1="90" x2="280" y2="42" stroke="#f59e0b" stroke-width="1.5"/>
                
                <rect x="280" y="65" width="100" height="25" rx="3" fill="#0f172a" stroke="#e11d48"/>
                <text x="330" y="82" font-size="8" fill="#e11d48" text-anchor="middle">Device Inventory</text>
                <line x1="240" y1="100" x2="280" y2="77" stroke="#e11d48" stroke-width="1.5"/>
                
                <rect x="280" y="100" width="100" height="25" rx="3" fill="#0f172a" stroke="#8b5cf6"/>
                <text x="330" y="117" font-size="8" fill="#8b5cf6" text-anchor="middle">IP Address Management</text>
                <line x1="240" y1="110" x2="280" y2="112" stroke="#8b5cf6" stroke-width="1.5"/>
                
                <rect x="280" y="135" width="100" height="25" rx="3" fill="#0f172a" stroke="#06b6d4"/>
                <text x="330" y="152" font-size="8" fill="#06b6d4" text-anchor="middle">Configuration Baselines</text>
                <line x1="240" y1="115" x2="280" y2="147" stroke="#06b6d4" stroke-width="1.5"/>
                
                <!-- Best Practices Box -->
                <rect x="20" y="170" width="360" height="25" rx="5" fill="#0f172a" stroke="#94a3b8"/>
                <text x="200" y="185" font-size="9" fill="#94a3b8" text-anchor="middle" font-weight="bold">Best Practices: Regular Updates • Version Control • Access Control • Backup Procedures</text>
                
                <!-- Data Flow Arrows -->
                <path d="M 80 40 Q 120 30 160 75" stroke="#94a3b8" stroke-width="1" fill="none" stroke-dasharray="2,2"/>
                <text x="120" y="25" font-size="7" fill="#94a3b8" text-anchor="middle">Automated Collection</text>
                
                <!-- Tools Integration -->
                <circle cx="30" cy="100" r="12" fill="#374151"/>
                <text x="30" y="104" font-size="6" fill="#e2e8f0" text-anchor="middle">Scripts</text>
                <line x1="42" y1="100" x2="68" y2="100" stroke="#94a3b8" stroke-width="1"/>
            </svg>`
        }
    ],
    
    etherchannel: [
        {
            title: "LACP Configuration",
            icon: "fa-link",
            description: "Link Aggregation Control Protocol (LACP) is an IEEE standard (802.3ad) used to bundle multiple physical ports into a single logical channel (EtherChannel). This increases bandwidth and provides redundancy.",
            visual: `<svg viewBox="0 0 400 200">
                <title>LACP EtherChannel</title>
                <rect x="50" y="80" width="80" height="40" rx="5" fill="#334155"/><text x="90" y="105" font-size="10" text-anchor="middle" fill="white">SW1</text>
                <rect x="270" y="80" width="80" height="40" rx="5" fill="#334155"/><text x="310" y="105" font-size="10" text-anchor="middle" fill="white">SW2</text>
                
                <line x1="130" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
                <line x1="130" y1="110" x2="270" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
                
                <ellipse cx="200" cy="100" rx="150" ry="30" fill="none" stroke="#6366f1" stroke-dasharray="5,5"/>
                <text x="200" y="65" font-size="12" fill="#6366f1" text-anchor="middle">Logical EtherChannel</text>
            </svg>`
        },
        {
            title: "PAgP Configuration",
            icon: "fa-network-wired",
            description: "Port Aggregation Protocol (PAgP) is Cisco's proprietary protocol for EtherChannel negotiation. PAgP provides automatic detection and configuration of EtherChannel bundles with desirable and auto modes.",
            visual: `<svg viewBox="0 0 400 200">
                <title>PAgP EtherChannel</title>
                <!-- Switches -->
                <rect x="50" y="80" width="80" height="40" rx="5" fill="#334155"/><text x="90" y="105" font-size="10" text-anchor="middle" fill="white">SW1</text>
                <rect x="270" y="80" width="80" height="40" rx="5" fill="#334155"/><text x="310" y="105" font-size="10" text-anchor="middle" fill="white">SW2</text>
                
                <!-- Physical Links -->
                <line x1="130" y1="90" x2="270" y2="90" stroke="#10b981" stroke-width="3"/>
                <line x1="130" y1="110" x2="270" y2="110" stroke="#10b981" stroke-width="3"/>
                
                <!-- PAgP Labels -->
                <text x="160" y="85" font-size="10" fill="#10b981">Desirable</text>
                <text x="220" y="125" font-size="10" fill="#10b981">Auto</text>
                
                <!-- Channel Group -->
                <rect x="180" y="140" width="40" height="20" rx="3" fill="#0ea5e9"/>
                <text x="200" y="155" font-size="10" fill="white" text-anchor="middle">Po1</text>
                <text x="200" y="50" font-size="12" fill="#0ea5e9" text-anchor="middle">PAgP Channel</text>
            </svg>`
        },
        {
            title: "Load Balancing",
            icon: "fa-balance-scale",
            description: "EtherChannel load balancing distributes traffic across member links using various algorithms. Methods include source MAC, destination MAC, source/destination IP, and port-based distribution for optimal bandwidth utilization.",
            visual: `<svg viewBox="0 0 400 200">
                <title>EtherChannel Load Balancing</title>
                <!-- Source Device -->
                <rect x="20" y="80" width="60" height="40" rx="5" fill="#6366f1"/>
                <text x="50" y="105" font-size="10" fill="white" text-anchor="middle">Server</text>
                
                <!-- Destination Device -->
                <rect x="320" y="80" width="60" height="40" rx="5" fill="#6366f1"/>
                <text x="350" y="105" font-size="10" fill="white" text-anchor="middle">Client</text>
                
                <!-- EtherChannel Bundle -->
                <rect x="150" y="60" width="100" height="80" rx="5" fill="none" stroke="#10b981" stroke-dasharray="3,3"/>
                <text x="200" y="50" font-size="12" fill="#10b981" text-anchor="middle">EtherChannel</text>
                
                <!-- Traffic Distribution -->
                <line x1="80" y1="85" x2="150" y2="75" stroke="#f59e0b" stroke-width="2"/>
                <line x1="80" y1="100" x2="150" y2="100" stroke="#f59e0b" stroke-width="2"/>
                <line x1="80" y1="115" x2="150" y2="125" stroke="#f59e0b" stroke-width="2"/>
                
                <line x1="250" y1="75" x2="320" y2="85" stroke="#f59e0b" stroke-width="2"/>
                <line x1="250" y1="100" x2="320" y2="100" stroke="#f59e0b" stroke-width="2"/>
                <line x1="250" y1="125" x2="320" y2="115" stroke="#f59e0b" stroke-width="2"/>
                
                <!-- Load Balancing Algorithm -->
                <text x="200" y="170" font-size="10" fill="#94a3b8" text-anchor="middle">src-dst-ip algorithm</text>
            </svg>`
        }
    ],
    spanningTree: [
        {
            title: "Root Bridge & Port Roles",
            icon: "fa-tree",
            description: "Root Bridge election process and port role assignments. Root Bridge is the switch with lowest Bridge ID. Other switches determine Root Port (best path to root), Designated Ports (forward traffic), and Blocking Ports (prevent loops).",
            visual: `<svg viewBox="0 0 400 200">
                <title>Root Bridge Election and Port Roles</title>
                <!-- Root Bridge -->
                <rect x="175" y="20" width="60" height="35" rx="5" fill="#6366f1"/>
                <text x="205" y="35" font-size="10" fill="white" text-anchor="middle">Root Bridge</text>
                <text x="205" y="48" font-size="8" fill="#e2e8f0" text-anchor="middle">Priority: 32768</text>
                
                <!-- Non-Root Switches -->
                <rect x="50" y="140" width="60" height="35" rx="5" fill="#334155"/>
                <text x="80" y="155" font-size="10" fill="white" text-anchor="middle">SW-A</text>
                <text x="80" y="168" font-size="8" fill="#94a3b8" text-anchor="middle">Non-Root</text>
                
                <rect x="290" y="140" width="60" height="35" rx="5" fill="#334155"/>
                <text x="320" y="155" font-size="10" fill="white" text-anchor="middle">SW-B</text>
                <text x="320" y="168" font-size="8" fill="#94a3b8" text-anchor="middle">Non-Root</text>
                
                <!-- Root Ports (Green) -->
                <line x1="190" y1="55" x2="95" y2="140" stroke="#10b981" stroke-width="3"/>
                <circle cx="190" cy="55" r="4" fill="#10b981"/>
                <circle cx="95" cy="140" r="4" fill="#10b981"/>
                <text x="135" y="85" font-size="10" fill="#10b981" font-weight="bold">RP</text>
                
                <line x1="220" y1="55" x2="305" y2="140" stroke="#10b981" stroke-width="3"/>
                <circle cx="220" cy="55" r="4" fill="#10b981"/>
                <circle cx="305" cy="140" r="4" fill="#10b981"/>
                <text x="270" y="85" font-size="10" fill="#10b981" font-weight="bold">RP</text>
                
                <!-- Blocking Port (Red) -->
                <line x1="110" y1="157" x2="290" y2="157" stroke="#f87171" stroke-width="3" stroke-dasharray="5,5"/>
                <circle cx="110" cy="157" r="4" fill="#f87171"/>
                <circle cx="290" cy="157" r="4" fill="#f87171"/>
                <text x="200" y="175" font-size="10" fill="#f87171" text-anchor="middle" font-weight="bold">BLOCKING</text>
                
                <!-- Legend -->
                <text x="50" y="15" font-size="12" fill="#e2e8f0" font-weight="bold">Port Roles:</text>
                <circle cx="120" cy="12" r="3" fill="#10b981"/>
                <text x="130" y="17" font-size="10" fill="#10b981">Root Port (RP)</text>
                <circle cx="220" cy="12" r="3" fill="#f87171"/>
                <text x="230" y="17" font-size="10" fill="#f87171">Blocking Port</text>
            </svg>`
        },
        {
            title: "Port States & Roles",
            icon: "fa-exchange-alt",
            description: "STP port states progression and role assignments. Ports transition through Disabled, Blocking, Listening, Learning, and Forwarding states. Roles include Root, Designated, Alternate, and Backup ports.",
            visual: `<svg viewBox="0 0 400 200">
                <title>STP Port States and Roles</title>
                <!-- Port States Flow -->
                <rect x="20" y="40" width="60" height="25" rx="3" fill="#64748b"/>
                <text x="50" y="57" font-size="10" fill="white" text-anchor="middle">Disabled</text>
                
                <rect x="100" y="40" width="60" height="25" rx="3" fill="#f87171"/>
                <text x="130" y="57" font-size="10" fill="white" text-anchor="middle">Blocking</text>
                
                <rect x="180" y="40" width="60" height="25" rx="3" fill="#f59e0b"/>
                <text x="210" y="57" font-size="10" fill="white" text-anchor="middle">Listening</text>
                
                <rect x="260" y="40" width="60" height="25" rx="3" fill="#0ea5e9"/>
                <text x="290" y="57" font-size="10" fill="white" text-anchor="middle">Learning</text>
                
                <rect x="340" y="40" width="60" height="25" rx="3" fill="#10b981"/>
                <text x="370" y="57" font-size="10" fill="white" text-anchor="middle">Forwarding</text>
                
                <!-- Arrows -->
                <path d="M 85 52 L 95 52" stroke="#94a3b8" fill="none" marker-end="url(#arrow)"/>
                <path d="M 165 52 L 175 52" stroke="#94a3b8" fill="none" marker-end="url(#arrow)"/>
                <path d="M 245 52 L 255 52" stroke="#94a3b8" fill="none" marker-end="url(#arrow)"/>
                <path d="M 325 52 L 335 52" stroke="#94a3b8" fill="none" marker-end="url(#arrow)"/>
                
                <!-- Timers -->
                <text x="130" y="80" font-size="9" fill="#94a3b8" text-anchor="middle">20s</text>
                <text x="210" y="80" font-size="9" fill="#94a3b8" text-anchor="middle">15s</text>
                <text x="290" y="80" font-size="9" fill="#94a3b8" text-anchor="middle">15s</text>
                
                <!-- Port Roles -->
                <text x="200" y="110" font-size="14" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Port Roles</text>
                
                <circle cx="80" cy="140" r="25" fill="#10b981"/>
                <text x="80" y="135" font-size="10" fill="white" text-anchor="middle">Root</text>
                <text x="80" y="148" font-size="10" fill="white" text-anchor="middle">Port</text>
                
                <circle cx="160" cy="140" r="25" fill="#6366f1"/>
                <text x="160" y="135" font-size="9" fill="white" text-anchor="middle">Designated</text>
                <text x="160" y="148" font-size="9" fill="white" text-anchor="middle">Port</text>
                
                <circle cx="240" cy="140" r="25" fill="#f59e0b"/>
                <text x="240" y="135" font-size="9" fill="white" text-anchor="middle">Alternate</text>
                <text x="240" y="148" font-size="9" fill="white" text-anchor="middle">Port</text>
                
                <circle cx="320" cy="140" r="25" fill="#f87171"/>
                <text x="320" y="135" font-size="9" fill="white" text-anchor="middle">Backup</text>
                <text x="320" y="148" font-size="9" fill="white" text-anchor="middle">Port</text>
                
                <!-- Arrow marker definition -->
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "PortFast",
            icon: "fa-bolt",
            description: "PortFast bypasses STP listening and learning states on access ports connected to end devices. Enables immediate forwarding for devices like PCs and servers, reducing connection time from 30+ seconds to immediate.",
            visual: `<svg viewBox="0 0 400 200">
                <title>PortFast Configuration</title>
                <!-- Switch -->
                <rect x="150" y="80" width="100" height="40" rx="5" fill="#334155"/>
                <text x="200" y="105" font-size="12" fill="white" text-anchor="middle">Switch</text>
                
                <!-- Normal Port (Left) -->
                <rect x="50" y="40" width="60" height="30" rx="3" fill="#475569"/>
                <text x="80" y="60" font-size="10" fill="white" text-anchor="middle">PC-1</text>
                <line x1="110" y1="55" x2="150" y2="90" stroke="#94a3b8" stroke-width="2"/>
                <text x="120" y="75" font-size="9" fill="#f87171">30+ seconds</text>
                <text x="80" y="25" font-size="10" fill="#f87171" text-anchor="middle">Normal Port</text>
                
                <!-- PortFast Port (Right) -->
                <rect x="290" y="40" width="60" height="30" rx="3" fill="#475569"/>
                <text x="320" y="60" font-size="10" fill="white" text-anchor="middle">PC-2</text>
                <line x1="290" y1="55" x2="250" y2="90" stroke="#10b981" stroke-width="3"/>
                <text x="280" y="75" font-size="9" fill="#10b981">Immediate</text>
                <text x="320" y="25" font-size="10" fill="#10b981" text-anchor="middle">PortFast</text>
                
                <!-- Lightning bolt for PortFast -->
                <path d="M 310 75 L 315 85 L 320 80 L 325 90 L 320 95 L 315 85" fill="#fbbf24" stroke="#f59e0b"/>
                
                <!-- STP States Comparison -->
                <text x="200" y="140" font-size="12" fill="#e2e8f0" text-anchor="middle" font-weight="bold">STP State Transition</text>
                
                <!-- Normal progression -->
                <text x="80" y="160" font-size="10" fill="#f87171" text-anchor="middle">Block → Listen → Learn → Forward</text>
                <text x="80" y="175" font-size="9" fill="#94a3b8" text-anchor="middle">(20s + 15s + 15s = 50s)</text>
                
                <!-- PortFast progression -->
                <text x="320" y="160" font-size="10" fill="#10b981" text-anchor="middle">Direct to Forward</text>
                <text x="320" y="175" font-size="9" fill="#94a3b8" text-anchor="middle">(Immediate)</text>
                
                <!-- Warning -->
                <rect x="120" y="185" width="160" height="12" rx="2" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b"/>
                <text x="200" y="194" font-size="8" fill="#f59e0b" text-anchor="middle">⚠ Only use on access ports to end devices</text>
            </svg>`
        },
        {
            title: "STP Protection Features",
            icon: "fa-shield-alt",
            description: "Root Guard prevents inferior BPDUs from making a port become root. Loop Guard prevents alternate ports from becoming designated when BPDUs stop. BPDU Guard disables ports receiving BPDUs. BPDU Filter stops BPDU processing.",
            visual: `<svg viewBox="0 0 400 200">
                <title>STP Protection Mechanisms</title>
                <!-- Root Guard -->
                <rect x="20" y="20" width="80" height="60" rx="5" fill="#334155" stroke="#10b981" stroke-width="2"/>
                <text x="60" y="35" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Root Guard</text>
                <text x="60" y="50" font-size="8" fill="#e2e8f0" text-anchor="middle">Prevents inferior</text>
                <text x="60" y="62" font-size="8" fill="#e2e8f0" text-anchor="middle">BPDUs from</text>
                <text x="60" y="74" font-size="8" fill="#e2e8f0" text-anchor="middle">changing root</text>
                
                <!-- Loop Guard -->
                <rect x="120" y="20" width="80" height="60" rx="5" fill="#334155" stroke="#0ea5e9" stroke-width="2"/>
                <text x="160" y="35" font-size="10" fill="#0ea5e9" text-anchor="middle" font-weight="bold">Loop Guard</text>
                <text x="160" y="50" font-size="8" fill="#e2e8f0" text-anchor="middle">Prevents loops</text>
                <text x="160" y="62" font-size="8" fill="#e2e8f0" text-anchor="middle">when BPDUs</text>
                <text x="160" y="74" font-size="8" fill="#e2e8f0" text-anchor="middle">stop arriving</text>
                
                <!-- BPDU Guard -->
                <rect x="220" y="20" width="80" height="60" rx="5" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
                <text x="260" y="35" font-size="10" fill="#f59e0b" text-anchor="middle" font-weight="bold">BPDU Guard</text>
                <text x="260" y="50" font-size="8" fill="#e2e8f0" text-anchor="middle">Disables port</text>
                <text x="260" y="62" font-size="8" fill="#e2e8f0" text-anchor="middle">if BPDU</text>
                <text x="260" y="74" font-size="8" fill="#e2e8f0" text-anchor="middle">received</text>
                
                <!-- BPDU Filter -->
                <rect x="320" y="20" width="80" height="60" rx="5" fill="#334155" stroke="#f87171" stroke-width="2"/>
                <text x="360" y="35" font-size="10" fill="#f87171" text-anchor="middle" font-weight="bold">BPDU Filter</text>
                <text x="360" y="50" font-size="8" fill="#e2e8f0" text-anchor="middle">Stops BPDU</text>
                <text x="360" y="62" font-size="8" fill="#e2e8f0" text-anchor="middle">transmission</text>
                <text x="360" y="74" font-size="8" fill="#e2e8f0" text-anchor="middle">& reception</text>
                
                <!-- Protection Scenarios -->
                <text x="200" y="110" font-size="12" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Common Use Cases</text>
                
                <!-- Root Guard scenario -->
                <circle cx="60" cy="130" r="15" fill="#10b981" fill-opacity="0.2" stroke="#10b981"/>
                <text x="60" y="135" font-size="8" fill="#10b981" text-anchor="middle">Uplink</text>
                <text x="60" y="155" font-size="8" fill="#94a3b8" text-anchor="middle">Protect root</text>
                
                <!-- Loop Guard scenario -->
                <circle cx="160" cy="130" r="15" fill="#0ea5e9" fill-opacity="0.2" stroke="#0ea5e9"/>
                <text x="160" y="135" font-size="8" fill="#0ea5e9" text-anchor="middle">Backup</text>
                <text x="160" y="155" font-size="8" fill="#94a3b8" text-anchor="middle">Alt/Root ports</text>
                
                <!-- BPDU Guard scenario -->
                <circle cx="260" cy="130" r="15" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b"/>
                <text x="260" y="135" font-size="8" fill="#f59e0b" text-anchor="middle">Access</text>
                <text x="260" y="155" font-size="8" fill="#94a3b8" text-anchor="middle">PortFast ports</text>
                
                <!-- BPDU Filter scenario -->
                <circle cx="360" cy="130" r="15" fill="#f87171" fill-opacity="0.2" stroke="#f87171"/>
                <text x="360" y="135" font-size="8" fill="#f87171" text-anchor="middle">Edge</text>
                <text x="360" y="155" font-size="8" fill="#94a3b8" text-anchor="middle">Special cases</text>
                
                <!-- Security Note -->
                <rect x="50" y="175" width="300" height="15" rx="3" fill="#1e293b" stroke="#475569"/>
                <text x="200" y="186" font-size="9" fill="#e2e8f0" text-anchor="middle">🛡️ Essential for preventing STP manipulation attacks</text>
            </svg>`
        },
        {
            title: "MST (Multiple Spanning Tree)",
            icon: "fa-sitemap",
            description: "Multiple Spanning Tree (MST) maps multiple VLANs to a single spanning tree instance, reducing CPU overhead. Uses regions and instances for scalability in large networks, offering better load balancing than Rapid PVST+.",
            visual: `<svg viewBox="0 0 400 200">
                <title>MST Instances and VLAN Mapping</title>
                <!-- MST Region -->
                <rect x="50" y="30" width="300" height="140" rx="10" fill="none" stroke="#9b59b6" stroke-width="2" stroke-dasharray="5,5"/>
                <text x="200" y="25" font-size="12" fill="#9b59b6" text-anchor="middle" font-weight="bold">MST Region: ENTERPRISE</text>
                
                <!-- MST Instance 1 -->
                <rect x="70" y="50" width="120" height="50" rx="5" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="2"/>
                <text x="130" y="65" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">MST Instance 1</text>
                <text x="130" y="78" font-size="8" fill="#10b981" text-anchor="middle">VLANs: 10, 20, 30</text>
                <text x="130" y="90" font-size="8" fill="#10b981" text-anchor="middle">Root: Switch A</text>
                
                <!-- MST Instance 2 -->
                <rect x="210" y="50" width="120" height="50" rx="5" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1" stroke-width="2"/>
                <text x="270" y="65" font-size="10" fill="#6366f1" text-anchor="middle" font-weight="bold">MST Instance 2</text>
                <text x="270" y="78" font-size="8" fill="#6366f1" text-anchor="middle">VLANs: 40, 50, 60</text>
                <text x="270" y="90" font-size="8" fill="#6366f1" text-anchor="middle">Root: Switch B</text>
                
                <!-- Load Balancing Arrows -->
                <path d="M 130 110 Q 150 125 170 110" stroke="#10b981" stroke-width="2" fill="none"/>
                <path d="M 270 110 Q 250 125 230 110" stroke="#6366f1" stroke-width="2" fill="none"/>
                <text x="200" y="130" font-size="9" fill="#94a3b8" text-anchor="middle">Load Balancing</text>
                
                <!-- Switches in Region -->
                <circle cx="100" cy="140" r="15" fill="#334155"/>
                <text x="100" y="145" font-size="8" fill="white" text-anchor="middle">SW-A</text>
                
                <circle cx="150" cy="140" r="15" fill="#334155"/>
                <text x="150" y="145" font-size="8" fill="white" text-anchor="middle">SW-B</text>
                
                <circle cx="250" cy="140" r="15" fill="#334155"/>
                <text x="250" y="145" font-size="8" fill="white" text-anchor="middle">SW-C</text>
                
                <circle cx="300" cy="140" r="15" fill="#334155"/>
                <text x="300" y="145" font-size="8" fill="white" text-anchor="middle">SW-D</text>
                
                <!-- Benefits Text -->
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Reduced CPU • Better Convergence • VLAN Load Balancing</text>
            </svg>`
        }
    ],
    // 2.6 Wireless Architectures
    wirelessArchitecture: [
        {
            title: "Autonomous vs Controller-Based",
            icon: "fa-wifi",
            description: "Autonomous APs operate independently with full 802.11 functionality. Controller-based uses lightweight APs managed by a WLC in Split-MAC architecture where real-time functions stay on AP, management on WLC.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Wireless Architecture Comparison</title>
                <!-- Autonomous Section -->
                <text x="100" y="25" font-size="14" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Autonomous AP</text>
                <rect x="50" y="40" width="100" height="60" rx="8" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                <text x="100" y="60" font-size="10" fill="#10b981" text-anchor="middle">Full 802.11</text>
                <text x="100" y="75" font-size="10" fill="#10b981" text-anchor="middle">Functions</text>
                <text x="100" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">Independent</text>
                
                <!-- Controller-Based Section -->
                <text x="300" y="25" font-size="14" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Controller-Based</text>
                
                <!-- WLC -->
                <rect x="275" y="40" width="50" height="30" rx="5" fill="#6366f1"/>
                <text x="300" y="58" font-size="10" fill="white" text-anchor="middle">WLC</text>
                <text x="300" y="35" font-size="9" fill="#6366f1" text-anchor="middle">Management</text>
                
                <!-- Lightweight APs -->
                <circle cx="260" cy="120" r="18" fill="#334155" stroke="#6366f1"/>
                <text x="260" y="115" font-size="8" fill="white" text-anchor="middle">LWAPP</text>
                <text x="260" y="125" font-size="8" fill="white" text-anchor="middle">AP1</text>
                
                <circle cx="300" cy="120" r="18" fill="#334155" stroke="#6366f1"/>
                <text x="300" y="115" font-size="8" fill="white" text-anchor="middle">LWAPP</text>
                <text x="300" y="125" font-size="8" fill="white" text-anchor="middle">AP2</text>
                
                <circle cx="340" cy="120" r="18" fill="#334155" stroke="#6366f1"/>
                <text x="340" y="115" font-size="8" fill="white" text-anchor="middle">LWAPP</text>
                <text x="340" y="125" font-size="8" fill="white" text-anchor="middle">AP3</text>
                
                <!-- Control connections -->
                <path d="M 300 70 L 260 102" stroke="#6366f1" stroke-dasharray="2,2" fill="none"/>
                <path d="M 300 70 L 300 102" stroke="#6366f1" stroke-dasharray="2,2" fill="none"/>
                <path d="M 300 70 L 340 102" stroke="#6366f1" stroke-dasharray="2,2" fill="none"/>
                
                <!-- Split-MAC indicator -->
                <text x="300" y="155" font-size="9" fill="#94a3b8" text-anchor="middle">Split-MAC Architecture</text>
                
                <!-- Benefits comparison -->
                <text x="100" y="125" font-size="9" fill="#f59e0b" text-anchor="middle">SOHO/Small</text>
                <text x="300" y="175" font-size="9" fill="#10b981" text-anchor="middle">Enterprise Scale</text>
            </svg>`
        },
        {
            title: "AP Operating Modes",
            icon: "fa-cogs",
            description: "Access Point modes define functionality: Local (default client access), FlexConnect (remote sites with local switching), Monitor (IDS/security), Rogue Detector (wired rogue detection), Bridge/Mesh (wireless backhaul).",
            visual: `<svg viewBox="0 0 400 200">
                <title>AP Operating Modes</title>
                <!-- Local Mode -->
                <rect x="20" y="20" width="80" height="50" rx="5" fill="#10b981" stroke="#059669"/>
                <text x="60" y="35" font-size="10" fill="white" text-anchor="middle" font-weight="bold">Local Mode</text>
                <text x="60" y="48" font-size="8" fill="white" text-anchor="middle">Default</text>
                <text x="60" y="58" font-size="8" fill="white" text-anchor="middle">Client Access</text>
                
                <!-- FlexConnect -->
                <rect x="120" y="20" width="80" height="50" rx="5" fill="#6366f1" stroke="#4f46e5"/>
                <text x="160" y="35" font-size="10" fill="white" text-anchor="middle" font-weight="bold">FlexConnect</text>
                <text x="160" y="48" font-size="8" fill="white" text-anchor="middle">Remote Sites</text>
                <text x="160" y="58" font-size="8" fill="white" text-anchor="middle">Local Switch</text>
                
                <!-- Monitor Mode -->
                <rect x="220" y="20" width="80" height="50" rx="5" fill="#f59e0b" stroke="#d97706"/>
                <text x="260" y="35" font-size="10" fill="white" text-anchor="middle" font-weight="bold">Monitor</text>
                <text x="260" y="48" font-size="8" fill="white" text-anchor="middle">IDS/Security</text>
                <text x="260" y="58" font-size="8" fill="white" text-anchor="middle">No Clients</text>
                
                <!-- Rogue Detector -->
                <rect x="320" y="20" width="80" height="50" rx="5" fill="#f87171" stroke="#dc2626"/>
                <text x="360" y="35" font-size="9" fill="white" text-anchor="middle" font-weight="bold">Rogue Detect</text>
                <text x="360" y="48" font-size="8" fill="white" text-anchor="middle">Wired Only</text>
                <text x="360" y="58" font-size="8" fill="white" text-anchor="middle">Security</text>
                
                <!-- Mode Details -->
                <text x="200" y="100" font-size="12" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Mode Characteristics</text>
                
                <!-- Local details -->
                <circle cx="60" cy="120" r="3" fill="#10b981"/>
                <text x="70" y="125" font-size="9" fill="#94a3b8">Serves wireless clients</text>
                <text x="70" y="138" font-size="9" fill="#94a3b8">Central switching (WLC)</text>
                
                <!-- FlexConnect details -->
                <circle cx="60" cy="155" r="3" fill="#6366f1"/>
                <text x="70" y="160" font-size="9" fill="#94a3b8">Local switching capability</text>
                <text x="70" y="173" font-size="9" fill="#94a3b8">WAN failure resilience</text>
                
                <!-- Monitor details -->
                <circle cx="260" cy="120" r="3" fill="#f59e0b"/>
                <text x="270" y="125" font-size="9" fill="#94a3b8">Security monitoring</text>
                <text x="270" y="138" font-size="9" fill="#94a3b8">No client traffic</text>
                
                <!-- Rogue details -->
                <circle cx="260" cy="155" r="3" fill="#f87171"/>
                <text x="270" y="160" font-size="9" fill="#94a3b8">Detects wired rogues</text>
                <text x="270" y="173" font-size="9" fill="#94a3b8">No RF transmission</text>
            </svg>`
        }
    ],
    
    // 2.7 WLAN Infrastructure
    wlanInfrastructure: [
        {
            title: "AP Connections",
            icon: "fa-ethernet",
            description: "APs connect to switch access ports for power (PoE) and data. Requires access VLAN for management and optionally voice VLAN. Switch provides 802.3af/at/bt PoE based on AP power requirements.",
            visual: `<svg viewBox="0 0 400 200">
                <title>AP Switch Connection</title>
                <!-- Switch -->
                <rect x="150" y="80" width="100" height="40" rx="5" fill="#334155"/>
                <text x="200" y="105" font-size="12" fill="white" text-anchor="middle">Switch</text>
                
                <!-- Access Port -->
                <line x1="200" y1="120" x2="200" y2="140" stroke="#10b981" stroke-width="3"/>
                <text x="220" y="135" font-size="10" fill="#10b981">Access Port</text>
                
                <!-- PoE Indicator -->
                <circle cx="200" cy="130" r="5" fill="#fbbf24"/>
                <text x="200" y="135" font-size="8" fill="#000" text-anchor="middle">PoE</text>
                
                <!-- AP -->
                <circle cx="200" cy="160" r="20" fill="#6366f1"/>
                <text x="200" y="165" font-size="10" fill="white" text-anchor="middle">AP</text>
                
                <!-- VLAN Information -->
                <rect x="60" y="40" width="120" height="60" rx="5" fill="#1e293b" stroke="#475569"/>
                <text x="120" y="55" font-size="10" fill="#e2e8f0" text-anchor="middle" font-weight="bold">VLAN Config</text>
                <text x="70" y="75" font-size="9" fill="#10b981">Data VLAN: 10</text>
                <text x="70" y="88" font-size="9" fill="#0ea5e9">Voice VLAN: 20</text>
                
                <!-- PoE Standards -->
                <rect x="260" y="40" width="120" height="80" rx="5" fill="#1e293b" stroke="#475569"/>
                <text x="320" y="55" font-size="10" fill="#e2e8f0" text-anchor="middle" font-weight="bold">PoE Standards</text>
                <text x="270" y="72" font-size="8" fill="#fbbf24">802.3af: 15.4W</text>
                <text x="270" y="85" font-size="8" fill="#fbbf24">802.3at: 30W</text>
                <text x="270" y="98" font-size="8" fill="#fbbf24">802.3bt: 60W/100W</text>
                <text x="270" y="111" font-size="8" fill="#94a3b8">Modern APs need 30W+</text>
                
                <!-- Wireless Clients -->
                <ellipse cx="200" cy="160" rx="60" ry="25" fill="none" stroke="#6366f1" stroke-dasharray="3,3"/>
                <circle cx="160" cy="140" r="8" fill="#94a3b8"/>
                <text x="160" y="145" font-size="6" fill="white" text-anchor="middle">PC</text>
                <circle cx="240" cy="140" r="8" fill="#94a3b8"/>
                <text x="240" y="145" font-size="6" fill="white" text-anchor="middle">PH</text>
            </svg>`
        },
        {
            title: "WLC Connections",
            icon: "fa-project-diagram",
            description: "WLCs connect via trunk ports to carry multiple VLANs. Link Aggregation Groups (LAG) bundle multiple ports for redundancy and bandwidth. Management, AP-Manager, and Virtual interfaces required for operation.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WLC Switch Connection</title>
                <!-- Core Switch -->
                <rect x="50" y="80" width="100" height="40" rx="5" fill="#334155"/>
                <text x="100" y="105" font-size="12" fill="white" text-anchor="middle">Core Switch</text>
                
                <!-- LAG Trunk -->
                <line x1="150" y1="90" x2="200" y2="90" stroke="#6366f1" stroke-width="4"/>
                <line x1="150" y1="100" x2="200" y2="100" stroke="#6366f1" stroke-width="4"/>
                <line x1="150" y1="110" x2="200" y2="110" stroke="#6366f1" stroke-width="4"/>
                <text x="175" y="80" font-size="10" fill="#6366f1" text-anchor="middle">LAG Trunk</text>
                
                <!-- WLC -->
                <rect x="200" y="75" width="80" height="50" rx="5" fill="#6366f1"/>
                <text x="240" y="105" font-size="12" fill="white" text-anchor="middle">WLC</text>
                
                <!-- VLAN Tags -->
                <rect x="160" y="130" width="15" height="12" fill="#10b981"/>
                <text x="167" y="139" font-size="8" fill="white" text-anchor="middle">10</text>
                <rect x="180" y="130" width="15" height="12" fill="#0ea5e9"/>
                <text x="187" y="139" font-size="8" fill="white" text-anchor="middle">20</text>
                <rect x="200" y="130" width="15" height="12" fill="#f59e0b"/>
                <text x="207" y="139" font-size="8" fill="white" text-anchor="middle">30</text>
                <text x="187" y="155" font-size="9" fill="#94a3b8" text-anchor="middle">Multiple VLANs</text>
                
                <!-- WLC Interfaces -->
                <rect x="300" y="20" width="90" height="160" rx="5" fill="#1e293b" stroke="#475569"/>
                <text x="345" y="35" font-size="10" fill="#e2e8f0" text-anchor="middle" font-weight="bold">WLC Interfaces</text>
                
                <text x="310" y="55" font-size="9" fill="#10b981">Management:</text>
                <text x="310" y="68" font-size="8" fill="#94a3b8">In-band mgmt</text>
                
                <text x="310" y="85" font-size="9" fill="#6366f1">AP-Manager:</text>
                <text x="310" y="98" font-size="8" fill="#94a3b8">AP communication</text>
                
                <text x="310" y="115" font-size="9" fill="#f59e0b">Virtual:</text>
                <text x="310" y="128" font-size="8" fill="#94a3b8">DHCP relay</text>
                
                <text x="310" y="145" font-size="9" fill="#0ea5e9">Dynamic:</text>
                <text x="310" y="158" font-size="8" fill="#94a3b8">Client VLANs</text>
                
                <text x="310" y="175" font-size="8" fill="#f87171">Service Port:</text>
                <text x="310" y="185" font-size="7" fill="#94a3b8">Out-of-band</text>
            </svg>`
        }
    ],
    
    // 2.8 AP Management
    apManagement: [
        {
            title: "Management Methods",
            icon: "fa-user-cog",
            description: "AP management through Telnet/SSH (CLI), HTTP/HTTPS (GUI), Console port (local), and centralized via WLC. RADIUS/TACACS+ for authentication. SNMPv3 for monitoring. Modern preference for HTTPS and SSH.",
            visual: `<svg viewBox="0 0 400 200">
                <title>AP Management Access Methods</title>
                <!-- AP/WLC in center -->
                <rect x="160" y="80" width="80" height="40" rx="5" fill="#6366f1"/>
                <text x="200" y="105" font-size="12" fill="white" text-anchor="middle">WLC/AP</text>
                
                <!-- Console Access -->
                <rect x="20" y="20" width="60" height="30" rx="3" fill="#94a3b8"/>
                <text x="50" y="40" font-size="9" fill="white" text-anchor="middle">Console</text>
                <line x1="80" y1="35" x2="160" y2="85" stroke="#94a3b8" stroke-width="2"/>
                <text x="110" y="55" font-size="8" fill="#94a3b8">Local CLI</text>
                
                <!-- SSH Access -->
                <rect x="20" y="80" width="60" height="30" rx="3" fill="#10b981"/>
                <text x="50" y="100" font-size="9" fill="white" text-anchor="middle">SSH</text>
                <line x1="80" y1="95" x2="160" y2="95" stroke="#10b981" stroke-width="2"/>
                <text x="110" y="88" font-size="8" fill="#10b981">Secure CLI</text>
                
                <!-- HTTPS GUI -->
                <rect x="20" y="140" width="60" height="30" rx="3" fill="#0ea5e9"/>
                <text x="50" y="160" font-size="9" fill="white" text-anchor="middle">HTTPS</text>
                <line x1="80" y1="155" x2="160" y2="115" stroke="#0ea5e9" stroke-width="2"/>
                <text x="110" y="140" font-size="8" fill="#0ea5e9">Web GUI</text>
                
                <!-- RADIUS/TACACS+ -->
                <rect x="320" y="20" width="60" height="30" rx="3" fill="#f59e0b"/>
                <text x="350" y="35" font-size="8" fill="white" text-anchor="middle">RADIUS</text>
                <text x="350" y="45" font-size="8" fill="white" text-anchor="middle">TACACS+</text>
                <line x1="320" y1="35" x2="240" y2="85" stroke="#f59e0b" stroke-width="2"/>
                <text x="290" y="55" font-size="8" fill="#f59e0b">AAA</text>
                
                <!-- SNMP -->
                <rect x="320" y="80" width="60" height="30" rx="3" fill="#f87171"/>
                <text x="350" y="100" font-size="9" fill="white" text-anchor="middle">SNMPv3</text>
                <line x1="320" y1="95" x2="240" y2="95" stroke="#f87171" stroke-width="2"/>
                <text x="290" y="88" font-size="8" fill="#f87171">Monitor</text>
                
                <!-- Cloud Management -->
                <rect x="320" y="140" width="60" height="30" rx="3" fill="#8b5cf6"/>
                <text x="350" y="160" font-size="9" fill="white" text-anchor="middle">Cloud</text>
                <line x1="320" y1="155" x2="240" y2="115" stroke="#8b5cf6" stroke-width="2"/>
                <text x="290" y="140" font-size="8" fill="#8b5cf6">Meraki</text>
                
                <!-- Security Note -->
                <rect x="100" y="180" width="200" height="15" rx="3" fill="#1e293b" stroke="#475569"/>
                <text x="200" y="191" font-size="8" fill="#e2e8f0" text-anchor="middle">🔒 Use HTTPS/SSH - Avoid Telnet/HTTP</text>
            </svg>`
        },
        {
            title: "Web GUI Management",
            icon: "fa-desktop",
            description: "WLC and AP web interfaces provide graphical configuration through HTTP/HTTPS. Features dashboard monitoring, configuration wizards, and file management. HTTPS strongly recommended for security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WLC Web Interface</title>
                <!-- Browser Window -->
                <rect x="50" y="40" width="300" height="120" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2"/>
                <rect x="50" y="40" width="300" height="25" rx="8" fill="#334155"/>
                <circle cx="65" cy="52" r="4" fill="#ef4444"/>
                <circle cx="78" cy="52" r="4" fill="#f59e0b"/>
                <circle cx="91" cy="52" r="4" fill="#10b981"/>
                <text x="200" y="58" font-size="10" fill="#e2e8f0" text-anchor="middle">🔒 https://wlc.company.com</text>
                
                <!-- Dashboard Elements -->
                <text x="60" y="85" font-size="12" fill="#2ECC71" font-weight="bold">Cisco WLC Dashboard</text>
                
                <!-- Status Indicators -->
                <rect x="60" y="95" width="80" height="20" rx="3" fill="#0f172a" stroke="#10b981"/>
                <text x="70" y="107" font-size="8" fill="#10b981">APs: 24 Up</text>
                
                <rect x="150" y="95" width="80" height="20" rx="3" fill="#0f172a" stroke="#0ea5e9"/>
                <text x="160" y="107" font-size="8" fill="#0ea5e9">Clients: 156</text>
                
                <rect x="240" y="95" width="80" height="20" rx="3" fill="#0f172a" stroke="#f59e0b"/>
                <text x="250" y="107" font-size="8" fill="#f59e0b">Alarms: 2</text>
                
                <!-- Navigation Menu -->
                <rect x="60" y="125" width="260" height="25" rx="3" fill="#374151"/>
                <text x="70" y="140" font-size="9" fill="#e2e8f0">WLANs | Security | Management | Monitoring | Commands</text>
                
                <!-- Security Note -->
                <rect x="100" y="170" width="200" height="15" rx="3" fill="#1e293b" stroke="#ef4444"/>
                <text x="200" y="181" font-size="8" fill="#ef4444" text-anchor="middle">⚠️ Default login: admin/admin - Change immediately!</text>
            </svg>`
        },
        {
            title: "AAA & Monitoring",
            icon: "fa-shield-alt",
            description: "Authentication, Authorization, Accounting via RADIUS/TACACS+. SNMP monitoring for performance metrics, alerts, and network management integration. Syslog for centralized logging and troubleshooting.",
            visual: `<svg viewBox="0 0 400 200">
                <title>AAA and Monitoring Architecture</title>
                <!-- WLC in center -->
                <rect x="160" y="80" width="80" height="40" rx="5" fill="#6366f1"/>
                <text x="200" y="105" font-size="12" fill="white" text-anchor="middle">WLC</text>
                
                <!-- RADIUS Server -->
                <rect x="20" y="20" width="80" height="40" rx="5" fill="#10b981"/>
                <text x="60" y="40" font-size="10" fill="white" text-anchor="middle">RADIUS</text>
                <text x="60" y="52" font-size="8" fill="white" text-anchor="middle">Server</text>
                <line x1="100" y1="40" x2="160" y2="85" stroke="#10b981" stroke-width="2"/>
                <text x="120" y="55" font-size="8" fill="#10b981">AAA</text>
                
                <!-- TACACS+ Server -->
                <rect x="20" y="80" width="80" height="40" rx="5" fill="#0ea5e9"/>
                <text x="60" y="100" font-size="10" fill="white" text-anchor="middle">TACACS+</text>
                <text x="60" y="112" font-size="8" fill="white" text-anchor="middle">Server</text>
                <line x1="100" y1="100" x2="160" y2="100" stroke="#0ea5e9" stroke-width="2"/>
                <text x="120" y="93" font-size="8" fill="#0ea5e9">Device Admin</text>
                
                <!-- SNMP Manager -->
                <rect x="300" y="20" width="80" height="40" rx="5" fill="#f59e0b"/>
                <text x="340" y="40" font-size="10" fill="white" text-anchor="middle">SNMP</text>
                <text x="340" y="52" font-size="8" fill="white" text-anchor="middle">Manager</text>
                <line x1="300" y1="40" x2="240" y2="85" stroke="#f59e0b" stroke-width="2"/>
                <text x="280" y="55" font-size="8" fill="#f59e0b">Monitor</text>
                
                <!-- Syslog Server -->
                <rect x="300" y="80" width="80" height="40" rx="5" fill="#8b5cf6"/>
                <text x="340" y="100" font-size="10" fill="white" text-anchor="middle">Syslog</text>
                <text x="340" y="112" font-size="8" fill="white" text-anchor="middle">Server</text>
                <line x1="300" y1="100" x2="240" y2="100" stroke="#8b5cf6" stroke-width="2"/>
                <text x="280" y="93" font-size="8" fill="#8b5cf6">Logging</text>
                
                <!-- Protocol Labels -->
                <rect x="50" y="150" width="300" height="30" rx="5" fill="#0f172a" stroke="#374151"/>
                <text x="70" y="167" font-size="8" fill="#10b981">RADIUS: 1812/1813</text>
                <text x="170" y="167" font-size="8" fill="#0ea5e9">TACACS+: 49</text>
                <text x="270" y="167" font-size="8" fill="#f59e0b">SNMP: 161/162</text>
                <text x="120" y="177" font-size="8" fill="#8b5cf6">Syslog: 514</text>
            </svg>`
        },
        {
            title: "AP Discovery & Provisioning",
            icon: "fa-search-location",
            description: "Lightweight APs discover WLCs through DHCP Option 43, DNS resolution, or broadcast. AP provisioning includes image download, configuration sync, and certificate exchange for secure CAPWAP tunnels.",
            visual: `<svg viewBox="0 0 400 200">
                <title>AP Discovery Process</title>
                <!-- AP on left -->
                <circle cx="60" cy="100" r="25" fill="#94a3b8"/>
                <text x="60" y="105" font-size="10" fill="white" text-anchor="middle">New AP</text>
                
                <!-- Discovery Steps -->
                <text x="200" y="30" font-size="14" fill="#e2e8f0" text-anchor="middle" font-weight="bold">AP Discovery Process</text>
                
                <!-- Step 1: DHCP -->
                <rect x="120" y="50" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="160" y="67" font-size="9" fill="white" text-anchor="middle">1. DHCP Option 43</text>
                <path d="M 85 85 Q 130 60 120 62" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                
                <!-- Step 2: DNS -->
                <rect x="220" y="50" width="80" height="25" rx="3" fill="#0ea5e9"/>
                <text x="260" y="67" font-size="9" fill="white" text-anchor="middle">2. DNS Lookup</text>
                <path d="M 85 85 Q 180 60 220 62" stroke="#0ea5e9" stroke-width="2" fill="none"/>
                
                <!-- Step 3: Broadcast -->
                <rect x="320" y="50" width="60" height="25" rx="3" fill="#f59e0b"/>
                <text x="350" y="67" font-size="8" fill="white" text-anchor="middle">3. Broadcast</text>
                <path d="M 85 85 Q 280 60 320 62" stroke="#f59e0b" stroke-width="2" fill="none"/>
                
                <!-- WLC on right -->
                <rect x="300" y="110" width="80" height="40" rx="5" fill="#6366f1"/>
                <text x="340" y="135" font-size="12" fill="white" text-anchor="middle">WLC</text>
                
                <!-- CAPWAP Tunnel -->
                <line x1="85" y1="100" x2="300" y2="130" stroke="#6366f1" stroke-width="4" stroke-dasharray="5,5"/>
                <text x="190" y="110" font-size="10" fill="#6366f1" text-anchor="middle">CAPWAP Tunnel</text>
                
                <!-- Discovery Methods -->
                <rect x="50" y="160" width="300" height="30" rx="3" fill="#1e293b" stroke="#475569"/>
                <text x="60" y="175" font-size="8" fill="#10b981">Option 43: WLC IP addresses</text>
                <text x="60" y="185" font-size="8" fill="#0ea5e9">DNS: CISCO-LWAPP-CONTROLLER.domain.com</text>
                <text x="240" y="180" font-size="8" fill="#f59e0b">Broadcast: 255.255.255.255</text>
            </svg>`
        }
    ],
    
    // 2.9 WLAN Configuration
    wlanConfiguration: [
        {
            title: "WLAN Creation Wizard",
            icon: "fa-magic",
            description: "Step-by-step WLAN creation through WLC GUI with configuration of SSID, type (Guest/Employee), security methods, and interface assignments for proper network segmentation.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WLAN Creation Wizard Flow</title>
                <!-- Wizard Steps Header -->
                <rect x="20" y="10" width="360" height="25" rx="5" fill="#1e293b" stroke="#475569"/>
                <text x="200" y="27" font-size="12" fill="#e2e8f0" text-anchor="middle" font-weight="bold">WLAN Creation Wizard</text>
                
                <!-- Step 1: General -->
                <rect x="20" y="50" width="80" height="70" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
                <text x="60" y="65" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Step 1</text>
                <text x="60" y="80" font-size="8" fill="#e2e8f0" text-anchor="middle">General</text>
                <text x="60" y="92" font-size="7" fill="#94a3b8" text-anchor="middle">Profile Name</text>
                <text x="60" y="104" font-size="7" fill="#94a3b8" text-anchor="middle">SSID</text>
                <text x="60" y="116" font-size="7" fill="#94a3b8" text-anchor="middle">Type</text>
                
                <!-- Step 2: Security -->
                <rect x="115" y="50" width="80" height="70" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
                <text x="155" y="65" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Step 2</text>
                <text x="155" y="80" font-size="8" fill="#e2e8f0" text-anchor="middle">Security</text>
                <text x="155" y="92" font-size="7" fill="#94a3b8" text-anchor="middle">WPA2/WPA3</text>
                <text x="155" y="104" font-size="7" fill="#94a3b8" text-anchor="middle">PSK/Enterprise</text>
                
                <!-- Step 3: QoS -->
                <rect x="210" y="50" width="80" height="70" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
                <text x="250" y="65" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Step 3</text>
                <text x="250" y="80" font-size="8" fill="#e2e8f0" text-anchor="middle">QoS</text>
                <text x="250" y="92" font-size="7" fill="#94a3b8" text-anchor="middle">Profile</text>
                <text x="250" y="104" font-size="7" fill="#94a3b8" text-anchor="middle">DSCP Marking</text>
                
                <!-- Step 4: Advanced -->
                <rect x="305" y="50" width="80" height="70" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
                <text x="345" y="65" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Step 4</text>
                <text x="345" y="80" font-size="8" fill="#e2e8f0" text-anchor="middle">Advanced</text>
                <text x="345" y="92" font-size="7" fill="#94a3b8" text-anchor="middle">Interface</text>
                <text x="345" y="104" font-size="7" fill="#94a3b8" text-anchor="middle">VLAN</text>
                
                <!-- Flow Arrows -->
                <path d="M100,85 L115,85" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                <path d="M195,85 L210,85" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                <path d="M290,85 L305,85" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                
                <!-- Progress Indicators -->
                <circle cx="60" cy="140" r="8" fill="#10b981"/>
                <text x="60" y="144" font-size="8" fill="white" text-anchor="middle">1</text>
                <circle cx="155" cy="140" r="8" fill="#10b981"/>
                <text x="155" y="144" font-size="8" fill="white" text-anchor="middle">2</text>
                <circle cx="250" cy="140" r="8" fill="#10b981"/>
                <text x="250" y="144" font-size="8" fill="white" text-anchor="middle">3</text>
                <circle cx="345" cy="140" r="8" fill="#10b981"/>
                <text x="345" y="144" font-size="8" fill="white" text-anchor="middle">4</text>
                
                <!-- Status Bar -->
                <rect x="60" y="160" width="285" height="8" rx="4" fill="#374151"/>
                <rect x="60" y="160" width="213" height="8" rx="4" fill="#10b981"/>
                <text x="202" y="180" font-size="9" fill="#10b981" text-anchor="middle">75% Complete</text>
                
                <!-- Arrow marker definition -->
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#10b981"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Security Configuration",
            icon: "fa-shield-alt",
            description: "Comprehensive WLAN security setup including WPA2/WPA3 Personal and Enterprise modes, 802.1X authentication, MAC filtering, and guest access configuration with proper isolation.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WLAN Security Configuration Options</title>
                <!-- Security Shield Icon -->
                <path d="M200,15 L220,25 L220,65 Q220,85 200,95 Q180,85 180,65 L180,25 Z" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                <text x="200" y="60" font-size="12" fill="#10b981" text-anchor="middle" font-weight="bold">WPA3</text>
                
                <!-- Personal Security -->
                <rect x="20" y="110" width="120" height="70" rx="5" fill="#0f172a" stroke="#10b981"/>
                <text x="80" y="125" font-size="11" fill="#10b981" text-anchor="middle" font-weight="bold">Personal Security</text>
                <circle cx="35" cy="140" r="4" fill="#10b981"/>
                <text x="45" y="145" font-size="8" fill="#e2e8f0">WPA2-PSK (AES)</text>
                <circle cx="35" cy="155" r="4" fill="#10b981"/>
                <text x="45" y="160" font-size="8" fill="#e2e8f0">WPA3-PSK (SAE)</text>
                <text x="80" y="175" font-size="7" fill="#94a3b8" text-anchor="middle">Pre-Shared Key</text>
                
                <!-- Enterprise Security -->
                <rect x="160" y="110" width="120" height="70" rx="5" fill="#0f172a" stroke="#f59e0b"/>
                <text x="220" y="125" font-size="11" fill="#f59e0b" text-anchor="middle" font-weight="bold">Enterprise Security</text>
                <circle cx="175" cy="140" r="4" fill="#f59e0b"/>
                <text x="185" y="145" font-size="8" fill="#e2e8f0">WPA2-Enterprise</text>
                <circle cx="175" cy="155" r="4" fill="#f59e0b"/>
                <text x="185" y="160" font-size="8" fill="#e2e8f0">WPA3-Enterprise</text>
                <text x="220" y="175" font-size="7" fill="#94a3b8" text-anchor="middle">802.1X + RADIUS</text>
                
                <!-- Additional Security Features -->
                <rect x="300" y="110" width="80" height="70" rx="5" fill="#0f172a" stroke="#94a3b8"/>
                <text x="340" y="125" font-size="9" fill="#94a3b8" text-anchor="middle" font-weight="bold">Additional</text>
                <text x="340" y="140" font-size="7" fill="#e2e8f0" text-anchor="middle">MAC Filtering</text>
                <text x="340" y="155" font-size="7" fill="#e2e8f0" text-anchor="middle">Guest Portal</text>
                <text x="340" y="170" font-size="7" fill="#e2e8f0" text-anchor="middle">Web Auth</text>
                
                <!-- Connection Lines -->
                <line x1="200" y1="95" x2="80" y2="110" stroke="#10b981" stroke-width="2" opacity="0.7"/>
                <line x1="200" y1="95" x2="220" y2="110" stroke="#f59e0b" stroke-width="2" opacity="0.7"/>
                <line x1="200" y1="95" x2="340" y2="110" stroke="#94a3b8" stroke-width="2" opacity="0.7"/>
                
                <!-- Security Level Indicators -->
                <rect x="75" y="190" width="10" height="5" fill="#10b981"/>
                <text x="90" y="194" font-size="7" fill="#10b981">High</text>
                <rect x="215" y="190" width="10" height="5" fill="#f59e0b"/>
                <text x="230" y="194" font-size="7" fill="#f59e0b">Highest</text>
                <rect x="335" y="190" width="10" height="5" fill="#94a3b8"/>
                <text x="350" y="194" font-size="7" fill="#94a3b8">Medium</text>
            </svg>`
        },
        {
            title: "Guest Access & Captive Portal",
            icon: "fa-wifi",
            description: "Configure guest networks with captive portal authentication, web redirection, time-based access, bandwidth limitations, and proper VLAN isolation for secure visitor access.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Guest Access and Captive Portal Configuration</title>
                <!-- Guest User Icon -->
                <circle cx="60" cy="50" r="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
                <circle cx="60" cy="45" r="6" fill="#10b981"/>
                <path d="M48,65 Q60,72 72,65" stroke="#10b981" stroke-width="2" fill="none"/>
                <text x="60" y="85" font-size="9" fill="#10b981" text-anchor="middle">Guest User</text>
                
                <!-- Captive Portal Window -->
                <rect x="140" y="20" width="120" height="80" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                <rect x="140" y="20" width="120" height="15" rx="8" fill="#374151"/>
                <text x="200" y="32" font-size="9" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Guest Portal</text>
                
                <!-- Login Form -->
                <text x="155" y="50" font-size="8" fill="#94a3b8">Welcome Guest!</text>
                <rect x="155" y="55" width="90" height="12" rx="2" fill="#374151"/>
                <text x="160" y="64" font-size="7" fill="#e2e8f0">Enter Email</text>
                
                <rect x="155" y="70" width="90" height="12" rx="2" fill="#374151"/>
                <text x="160" y="79" font-size="7" fill="#e2e8f0">Accept Terms</text>
                
                <rect x="180" y="85" width="40" height="12" rx="6" fill="#10b981"/>
                <text x="200" y="93" font-size="7" fill="white" text-anchor="middle">Connect</text>
                
                <!-- Internet Cloud -->
                <ellipse cx="320" cy="60" rx="25" ry="15" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
                <text x="320" y="65" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Internet</text>
                
                <!-- Guest VLAN -->
                <rect x="100" y="130" width="200" height="50" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
                <text x="200" y="145" font-size="11" fill="#f59e0b" text-anchor="middle" font-weight="bold">Guest VLAN (VLAN 200)</text>
                <text x="200" y="160" font-size="8" fill="#e2e8f0" text-anchor="middle">Isolated Network Segment</text>
                <text x="200" y="172" font-size="7" fill="#94a3b8" text-anchor="middle">• Limited Bandwidth • Time Restrictions • No Internal Access</text>
                
                <!-- Flow Arrows -->
                <path d="M80,60 L140,60" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
                <text x="110" y="55" font-size="7" fill="#10b981" text-anchor="middle">1. Connect</text>
                
                <path d="M260,60 L295,60" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
                <text x="277" y="55" font-size="7" fill="#10b981" text-anchor="middle">2. Authenticate</text>
                
                <path d="M200,100 L200,130" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
                <text x="180" y="120" font-size="7" fill="#f59e0b">3. Assign VLAN</text>
                
                <!-- Arrow marker definition -->
                <defs>
                    <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#10b981"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Advanced WLAN Features",
            icon: "fa-cogs",
            description: "Configure advanced WLAN features including band steering for optimal client distribution, load balancing, client limits, airtime fairness, and troubleshooting with debug commands.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Advanced WLAN Features and Configuration</title>
                <!-- Central WLC -->
                <rect x="170" y="30" width="60" height="40" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                <text x="200" y="50" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">WLC</text>
                <text x="200" y="60" font-size="7" fill="#e2e8f0" text-anchor="middle">Advanced</text>
                
                <!-- Band Steering -->
                <rect x="20" y="90" width="80" height="50" rx="5" fill="#0f172a" stroke="#10b981"/>
                <text x="60" y="105" font-size="9" fill="#10b981" text-anchor="middle" font-weight="bold">Band Steering</text>
                <text x="60" y="118" font-size="7" fill="#e2e8f0" text-anchor="middle">2.4GHz → 5GHz</text>
                <text x="60" y="130" font-size="6" fill="#94a3b8" text-anchor="middle">Optimal Band Selection</text>
                
                <!-- Load Balancing -->
                <rect x="120" y="90" width="80" height="50" rx="5" fill="#0f172a" stroke="#f59e0b"/>
                <text x="160" y="105" font-size="9" fill="#f59e0b" text-anchor="middle" font-weight="bold">Load Balancing</text>
                <text x="160" y="118" font-size="7" fill="#e2e8f0" text-anchor="middle">Client Distribution</text>
                <text x="160" y="130" font-size="6" fill="#94a3b8" text-anchor="middle">Between APs</text>
                
                <!-- Client Limits -->
                <rect x="220" y="90" width="80" height="50" rx="5" fill="#0f172a" stroke="#e11d48"/>
                <text x="260" y="105" font-size="9" fill="#e11d48" text-anchor="middle" font-weight="bold">Client Limits</text>
                <text x="260" y="118" font-size="7" fill="#e2e8f0" text-anchor="middle">Max: 200/AP</text>
                <text x="260" y="130" font-size="6" fill="#94a3b8" text-anchor="middle">Performance Control</text>
                
                <!-- Airtime Fairness -->
                <rect x="320" y="90" width="80" height="50" rx="5" fill="#0f172a" stroke="#8b5cf6"/>
                <text x="360" y="105" font-size="9" fill="#8b5cf6" text-anchor="middle" font-weight="bold">Airtime</text>
                <text x="360" y="115" font-size="9" fill="#8b5cf6" text-anchor="middle" font-weight="bold">Fairness</text>
                <text x="360" y="130" font-size="6" fill="#94a3b8" text-anchor="middle">Equal Access Time</text>
                
                <!-- RF Management -->
                <rect x="120" y="160" width="160" height="30" rx="5" fill="#0f172a" stroke="#06b6d4"/>
                <text x="200" y="175" font-size="10" fill="#06b6d4" text-anchor="middle" font-weight="bold">RF Management</text>
                <text x="200" y="185" font-size="7" fill="#e2e8f0" text-anchor="middle">Power Control • Channel Assignment • Coverage</text>
                
                <!-- Connection Lines -->
                <line x1="200" y1="70" x2="60" y2="90" stroke="#10b981" stroke-width="1.5" opacity="0.7"/>
                <line x1="200" y1="70" x2="160" y2="90" stroke="#f59e0b" stroke-width="1.5" opacity="0.7"/>
                <line x1="200" y1="70" x2="260" y2="90" stroke="#e11d48" stroke-width="1.5" opacity="0.7"/>
                <line x1="200" y1="70" x2="360" y2="90" stroke="#8b5cf6" stroke-width="1.5" opacity="0.7"/>
                <line x1="200" y1="70" x2="200" y2="160" stroke="#06b6d4" stroke-width="1.5" opacity="0.7"/>
                
                <!-- Feature Status Indicators -->
                <circle cx="60" cy="75" r="4" fill="#10b981"/>
                <text x="60" y="78" font-size="5" fill="white" text-anchor="middle">✓</text>
                
                <circle cx="160" cy="75" r="4" fill="#f59e0b"/>
                <text x="160" y="78" font-size="5" fill="white" text-anchor="middle">!</text>
                
                <circle cx="260" cy="75" r="4" fill="#e11d48"/>
                <text x="260" y="78" font-size="5" fill="white" text-anchor="middle">●</text>
                
                <circle cx="360" cy="75" r="4" fill="#8b5cf6"/>
                <text x="360" y="78" font-size="5" fill="white" text-anchor="middle">◆</text>
            </svg>`
        }
    ],

    // Section metadata
    metadata: {
        sectionNumber: 2,
        title: "Network Access",
        subsections: {
            vlans: { title: "2.1 VLANs", count: 3 },
            trunks: { title: "2.2 Interswitch Connectivity", count: 5 },
            discovery: { title: "2.3 Layer 2 Discovery Protocols", count: 3 },
            etherchannel: { title: "2.4 EtherChannel", count: 3 },
            spanningTree: { title: "2.5 Rapid PVST+", count: 5 },
            wirelessArchitecture: { title: "2.6 Wireless Architecture", count: 2 },
            wlanInfrastructure: { title: "2.7 WLAN Infrastructure", count: 2 },
            apManagement: { title: "2.8 AP Management", count: 4 },
            wlanConfiguration: { title: "2.9 WLAN Configuration", count: 4 }
        },
        // Dynamic calculation of total topics from subsections
        get totalTopics() {
            return Object.values(this.subsections).reduce((total, section) => total + section.count, 0);
        }
    }
};

// Export for global use
window.SECTION2_DATA = SECTION2_DATA;

// Register with section registry for dynamic topic totals
document.addEventListener('DOMContentLoaded', () => {
    if (window.CCNA_SECTION_REGISTRY) {
        window.CCNA_SECTION_REGISTRY.registerSectionData(2, SECTION2_DATA);
    }
    // Dispatch event for other listeners
    window.dispatchEvent(new CustomEvent('sectionDataLoaded', {
        detail: { sectionNumber: 2, sectionData: SECTION2_DATA }
    }));
});
