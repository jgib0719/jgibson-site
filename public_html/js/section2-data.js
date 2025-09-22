/**
 * CCNA Section 2: Network Access - Complete Topic Data
 */

const SECTION2_DATA = {
    vlans: [
        {
            title: "Access Ports (Data & Voice)",
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
            title: "Verifying VLAN Connectivity",
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
            title: "802.1Q Encapsulation",
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
        }
    ],
    discovery: [
        {
            title: "Cisco Discovery Protocol (CDP)",
            icon: "fa-search-location",
            description: "A Cisco proprietary Layer 2 protocol used to share information about other directly connected Cisco equipment, such as device ID, port ID, and software version. Enabled by default. `show cdp neighbors` is a key verification command.",
            visual: `<svg viewBox="0 0 400 150">
                <title>CDP Message Exchange</title>
                <!-- Router -->
                <circle cx="100" cy="75" r="25" fill="#6366f1"/><text x="100" y="80" fill="white" font-size="12">R1</text>
                <!-- Switch -->
                <rect x="275" y="55" width="50" height="40" rx="5" fill="#334155"/><text x="300" y="80" fill="white" font-size="12">SW1</text>
                <!-- CDP Message Arrows -->
                <text x="188" y="60" text-anchor="middle" font-size="12" fill="#94a3b8">CDP Advertisement</text>
                <path d="M 130 70 L 270 70" stroke="#94a3b8" fill="none" marker-end="url(#arrow)"/>
                <path d="M 270 80 L 130 80" stroke="#94a3b8" fill="none" marker-end="url(#arrow)"/>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "Link Layer Discovery Protocol (LLDP)",
            icon: "fa-sitemap",
            description: "An industry-standard (IEEE 802.1AB) neighbor discovery protocol, similar to CDP but vendor-neutral. It allows network devices to advertise their identity and capabilities to neighboring devices.",
            visual: `<svg viewBox="0 0 400 150">
                <title>LLDP between different vendors</title>
                <!-- Cisco Switch -->
                <rect x="50" y="55" width="80" height="40" rx="5" fill="#334155"/><text x="90" y="80" fill="white" font-size="10">Cisco SW</text>
                <!-- Juniper Router -->
                <circle cx="270" cy="75" r="30" fill="#10b981"/><text x="270" y="80" fill="white" font-size="10">Juniper R</text>
                <!-- LLDP Arrows -->
                <text x="190" y="50" text-anchor="middle" font-size="12" fill="#94a3b8">LLDP (Vendor-Neutral)</text>
                <path d="M 135 70 L 235 70" stroke="#94a3b8" fill="none" marker-end="url(#arrow)"/>
                <path d="M 235 80 L 135 80" stroke="#94a3b8" fill="none" marker-end="url(#arrow)"/>
            </svg>`
        }
    ],
    etherchannel: [
        {
            title: "LACP EtherChannel",
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
        }
    ],
    spanningTree: [
        {
            title: "STP: Root Bridge & Port Roles",
            icon: "fa-tree",
            description: "STP elects a single Root Bridge per broadcast domain. All other switches determine the best path to the root. Ports are assigned roles: Root Port (best path to root), Designated Port (forwards traffic onto a segment), and Blocking Port (prevents loops).",
            visual: `<svg viewBox="0 0 400 200">
                <title>STP Root Bridge and Port Roles</title>
                <rect x="175" y="20" width="50" height="30" rx="3" fill="#6366f1"/><text x="200" y="40" font-size="10" fill="white" text-anchor="middle">Root</text>
                <rect x="50" y="150" width="50" height="30" rx="3" fill="#334155"/><text x="75" y="170" font-size="10" fill="white" text-anchor="middle">SW-A</text>
                <rect x="300" y="150" width="50" height="30" rx="3" fill="#334155"/><text x="325" y="170" font-size="10" fill="white" text-anchor="middle">SW-B</text>
                <line x1="200" y1="50" x2="75" y2="150" stroke="#10b981" stroke-width="2"/><text x="130" y="90" font-size="9" fill="#10b981">RP</text>
                <line x1="200" y1="50" x2="325" y2="150" stroke="#10b981" stroke-width="2"/><text x="270" y="90" font-size="9" fill="#10b981">RP</text>
                <line x1="100" y1="165" x2="300" y2="165" stroke="#f87171" stroke-width="2"/><text x="200" y="180" font-size="9" fill="#f87171">Blocking</text>
                <text x="180" y="15" font-size="10" fill="#e2e8f0">RP=Root Port</text>
            </svg>`
        },
        {
            title: "STP Port States",
            icon: "fa-traffic-light",
            description: "Ports in STP transition through several states: Disabled, Blocking (won't forward frames to prevent loops), Listening, Learning (populates MAC address table), and Forwarding (sends and receives data).",
            visual: `<svg viewBox="0 0 400 200">
                <title>STP Port States</title>
                <text x="200" y="25" text-anchor="middle" font-size="14" fill="#e2e8f0">Port State Transitions</text>
                <circle cx="80" cy="60" r="20" fill="#f87171"/><text x="80" y="65" font-size="10" fill="white" text-anchor="middle">Block</text>
                <circle cx="160" cy="100" r="20" fill="#f59e0b"/><text x="160" y="105" font-size="10" fill="white" text-anchor="middle">Listen</text>
                <circle cx="240" cy="140" r="20" fill="#3b82f6"/><text x="240" y="145" font-size="10" fill="white" text-anchor="middle">Learn</text>
                <circle cx="320" cy="180" r="20" fill="#10b981"/><text x="320" y="185" font-size="10" fill="white" text-anchor="middle">Forward</text>
                <path d="M 98 72 L 142 88" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <path d="M 178 112 L 222 128" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <path d="M 258 152 L 302 168" stroke="#94a3b8" marker-end="url(#arrow)"/>
            </svg>`
        },
        {
            title: "PortFast",
            icon: "fa-fast-forward",
            description: "A Cisco feature that immediately brings an access port into the STP forwarding state, bypassing the Listening and Learning states. This allows clients to connect to the network quickly. It should only be used on ports connected to end devices.",
            visual: `<svg viewBox="0 0 400 200">
                <title>PortFast Benefit</title>
                <text x="200" y="40" font-size="12" fill="#e2e8f0" text-anchor="middle">Without PortFast (30-50s)</text>
                <rect x="50" y="60" width="80" height="20" fill="#f87171"/><text x="90" y="74" font-size="10" fill="white">Blocking</text>
                <rect x="130" y="60" width="80" height="20" fill="#f59e0b"/><text x="170" y="74" font-size="10" fill="white">Listening</text>
                <rect x="210" y="60" width="80" height="20" fill="#3b82f6"/><text x="250" y="74" font-size="10" fill="white">Learning</text>
                <rect x="290" y="60" width="80" height="20" fill="#10b981"/><text x="330" y="74" font-size="10" fill="white">Forwarding</text>
                
                <text x="200" y="130" font-size="12" fill="#e2e8f0" text-anchor="middle">With PortFast (Instant)</text>
                <rect x="50" y="150" width="320" height="20" fill="#10b981"/>
                <text x="210" y="164" font-size="10" fill="white">Straight to Forwarding</text>
            </svg>`
        },
    ],
    wireless: [
        {
            title: "Wireless Architectures & AP Modes",
            icon: "fa-wifi",
            description: "Architectures include Autonomous APs (standalone) and Controller-based (Lightweight APs managed by a WLC). AP modes include Local (default), FlexConnect (for remote sites), Monitor, and Rogue Detector.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Wireless Architectures</title>
                <text x="80" y="40" font-size="12" fill="#e2e8f0" text-anchor="middle">Autonomous</text>
                <circle cx="80" cy="80" r="20" fill="#334155"/><text x="80" y="85" font-size="10" fill="white">AP</text>
                <text x="80" y="120" font-size="10" fill="#94a3b8">Self-Managed</text>

                <text x="300" y="40" font-size="12" fill="#e2e8f0" text-anchor="middle">Controller-Based</text>
                <rect x="275" y="60" width="50" height="25" rx="3" fill="#6366f1"/><text x="300" y="76" font-size="10" fill="white">WLC</text>
                <circle cx="260" cy="130" r="15" fill="#334155"/><text x="260" y="134" font-size="10" fill="white">AP</text>
                <circle cx="340" cy="130" r="15" fill="#334155"/><text x="340" y="134" font-size="10" fill="white">AP</text>
                <path d="M300 85 L 260 115" stroke="#6366f1" stroke-dasharray="3,3" fill="none"/>
                <path d="M300 85 L 340 115" stroke="#6366f1" stroke-dasharray="3,3" fill="none"/>
            </svg>`
        },
        {
            title: "WLAN Component Connections",
            icon: "fa-plug",
            description: "APs connect to switch access ports. Wireless LAN Controllers (WLCs) connect to switch trunk ports to manage APs across multiple VLANs. Link Aggregation (LAG) can bundle multiple ports to connect a WLC for higher throughput and redundancy.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WLAN Component Connections</title>
                <rect x="150" y="20" width="100" height="40" rx="5" fill="#334155"/><text x="200" y="45" font-size="12" fill="white" text-anchor="middle">Switch</text>
                <line x1="180" y1="60" x2="100" y2="120" stroke="#94a3b8"/><text x="130" y="80" fill="#94a3b8" font-size="10">Access Port</text>
                <circle cx="100" cy="130" r="15" fill="#334155"/><text x="100" y="134" fill="white" font-size="10">AP</text>
                
                <line x1="220" y1="60" x2="300" y2="120" stroke="#6366f1" stroke-width="2"/><text x="270" y="80" fill="#6366f1" font-size="10">Trunk Port</text>
                <rect x="275" y="120" width="50" height="25" rx="3" fill="#6366f1"/><text x="300" y="136" font-size="10" fill="white">WLC</text>
            </svg>`
        },
        {
            title: "AP & WLC Management Access",
            icon: "fa-user-cog",
            description: "Management access to APs and WLCs can be achieved through various methods: Telnet (insecure), SSH (secure), HTTP (insecure), HTTPS (secure), a direct console port, and centralized authentication using TACACS+ or RADIUS.",
            visual: `<svg viewBox="0 0 400 150">
                <title>WLC Management Methods</title>
                <rect x="150" y="50" width="100" height="50" rx="5" fill="#6366f1"/><text x="200" y="80" font-size="14" fill="white" text-anchor="middle">WLC</text>
                <text x="50" y="30" font-size="10" fill="#e2e8f0">Console</text><path d="M 60 40 L 150 60" stroke="#94a3b8"/>
                <text x="50" y="80" font-size="10" fill="#e2e8f0">SSH/HTTPS</text><path d="M 70 90 L 150 80" stroke="#10b981"/>
                <text x="50" y="130" font-size="10" fill="#e2e8f0">RADIUS</text><path d="M 60 120 L 150 100" stroke="#94a3b8"/>
                <text x="300" y="30" font-size="10" fill="#e2e8f0">GUI</text><path d="M 320 40 L 250 60" stroke="#94a3b8"/>
                <text x="300" y="130" font-size="10" fill="#e2e8f0">TACACS+</text><path d="M 310 120 L 250 100" stroke="#94a3b8"/>
            </svg>`
        },
        {
            title: "GUI WLAN Configuration",
            icon: "fa-sliders-h",
            description: "Wireless LANs are typically configured via a GUI on the WLC. Key settings include creating the WLAN (SSID), defining security settings (like WPA2 PSK), and setting QoS profiles to prioritize different types of traffic.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WLAN Configuration GUI</title>
                <rect x="20" y="20" width="360" height="160" rx="10" fill="#334155" stroke="#475569"/>
                <rect x="20" y="20" width="360" height="30" rx="10" fill="#1e293b"/>
                <text x="40" y="40" font-size="12" fill="#e2e8f0">WLAN Configuration</text>
                <text x="50" y="80" font-size="12" fill="#94a3b8">SSID:</text><rect x="120" y="70" width="150" height="20" fill="#475569" rx="3"/>
                <text x="50" y="110" font-size="12" fill="#94a3b8">Security:</text><rect x="120" y="100" width="150" height="20" fill="#475569" rx="3"/><text x="130" y="114" fill="#e2e8f0" font-size="10">WPA2-PSK</text>
                <text x="50" y="140" font-size="12" fill="#94a3b8">QoS:</text><rect x="120" y="130" width="150" height="20" fill="#475569" rx="3"/><text x="130" y="144" fill="#e2e8f0" font-size="10">Platinum (Voice)</text>
            </svg>`
        },
    ],

    // Section metadata
    metadata: {
        sectionNumber: 2,
        title: "Network Access",
        totalTopics: 16,
        subsections: {
            vlans: { title: "2.1 VLANs", count: 3 },
            trunks: { title: "2.2 Interswitch Connectivity", count: 3 },
            discovery: { title: "2.3 Layer 2 Discovery Protocols", count: 2 },
            etherchannel: { title: "2.4 EtherChannel", count: 1 },
            spanningTree: { title: "2.5 Rapid PVST+", count: 3 },
            wireless1: { title: "2.6 Wireless Architectures", count: 1 },
            wireless2: { title: "2.7 WLAN Infrastructure", count: 1 },
            wireless3: { title: "2.8 Management Access", count: 1 },
            wireless4: { title: "2.9 GUI Configuration", count: 1 },
        }
    }
};

// Export for global use
window.SECTION2_DATA = SECTION2_DATA;
