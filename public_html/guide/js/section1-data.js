/**
 * CCNA Section 1: Network Fundamentals - Complete Topic Data
 * Auto-extracted from section1.html for modular architecture
 * CORRECTED AND REFINED VERSION
 */

const SECTION1_DATA = {
    // COMPONENTS
    components: [
        {
            title: "Routers",
            icon: "fa-route",
            description: "Forward data packets between different computer networks. Operates at Layer 3 (Network). Makes decisions based on IP addresses.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <title>Router connecting two LANs</title>
                    <rect x="20" y="60" width="120" height="80" rx="10" fill="#334155"/>
                    <text x="80" y="110" text-anchor="middle" font-size="16" fill="#94a3b8" font-family="sans-serif">LAN A</text>
                    <circle cx="200" cy="100" r="30" fill="#6366f1"/>
                    <text x="200" y="108" text-anchor="middle" font-size="24" fill="white" font-family="sans-serif" font-weight="bold">R</text>
                    <rect x="260" y="60" width="120" height="80" rx="10" fill="#334155"/>
                    <text x="320" y="110" text-anchor="middle" font-size="16" fill="#94a3b8" font-family="sans-serif">LAN B</text>
                    <line x1="140" y1="100" x2="170" y2="100" stroke="#64748b" stroke-width="3"/>
                    <line x1="230" y1="100" x2="260" y2="100" stroke="#64748b" stroke-width="3"/>
                </svg>
            `
        },
        {
            title: "L2 and L3 Switches",
            icon: "fa-network-wired",
            description: "L2 Switch: Forwards frames using MAC addresses. L3 Switch: Combines switching with routing capabilities for inter-VLAN communication.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <title>L2 Switch in a LAN vs L3 Switch for VLANs</title>
                    <rect x="40" y="120" width="100" height="30" rx="4" fill="#4f46e5"/>
                    <text x="90" y="140" text-anchor="middle" font-size="14" fill="#c7d2fe" font-family="sans-serif">L2 Switch</text>
                    <line x1="50" y1="70" x2="50" y2="120" stroke="#64748b" stroke-width="3"/>
                    <rect x="40" y="50" width="20" height="20" rx="2" fill="#475569"/>
                    <line x1="90" y1="70" x2="90" y2="120" stroke="#64748b" stroke-width="3"/>
                    <rect x="80" y="50" width="20" height="20" rx="2" fill="#475569"/>
                    <line x1="130" y1="70" x2="130" y2="120" stroke="#64748b" stroke-width="3"/>
                    <rect x="120" y="50" width="20" height="20" rx="2" fill="#475569"/>
                    <rect x="240" y="120" width="100" height="30" rx="4" fill="#818cf8"/>
                    <text x="290" y="140" text-anchor="middle" font-size="14" fill="#1e1b4b" font-family="sans-serif">L3 Switch</text>
                    <rect x="200" y="50" width="80" height="40" rx="6" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
                    <text x="240" y="76" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#f59e0b">VLAN 10</text>
                    <line x1="220" y1="90" x2="270" y2="120" stroke="#64748b" stroke-width="3"/>
                    <rect x="300" y="50" width="80" height="40" rx="6" fill="#334155" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="76" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#10b981">VLAN 20</text>
                    <line x1="320" y1="90" x2="310" y2="120" stroke="#64748b" stroke-width="3"/>
                </svg>
            `
        },
        {
            title: "NGFW & IPS", 
            icon: "fa-shield-halved",
            description: "Next-Generation Firewall provides deep packet inspection and application awareness. IPS monitors and actively blocks malicious traffic.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NGFW protecting a LAN from the Internet</title>
                <!-- LAN -->
                <rect x="20" y="70" width="80" height="60" rx="5" fill="#334155"/>
                <text x="60" y="105" text-anchor="middle" font-size="16" fill="#94a3b8" font-family="sans-serif">LAN</text>
                <line x1="100" y1="100" x2="130" y2="100" stroke="#64748b" stroke-width="3"/>
                <!-- NGFW -->
                <path d="M130 70 V 130 H 135 V 70 Z" fill="#9a3412" stroke="#f97316" stroke-width="1.5" />
                <path d="M135 75 H 155 M135 85 H 155 M135 95 H 155 M135 105 H 155 M135 115 H 155" stroke="#f97316" stroke-width="2"/>
                <text x="142" y="65" text-anchor="middle" font-size="14" fill="white" font-family="sans-serif" font-weight="bold">NGFW</text>
                <line x1="155" y1="100" x2="185" y2="100" stroke="#64748b" stroke-width="3"/>
                <!-- IPS -->
                <rect x="185" y="80" width="50" height="40" rx="5" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
                <path d="M 200 90 L 215 105 M 215 90 L 200 105" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
                <text x="210" y="75" text-anchor="middle" font-size="14" fill="#bbf7d0" font-weight="bold">IPS</text>
                <line x1="235" y1="100" x2="265" y2="100" stroke="#64748b" stroke-width="3"/>
                <!-- WAN -->
                <path d="M335 100 C 345 70, 285 70, 295 100 C 275 110, 315 130, 325 120 C 335 130, 365 110, 335 100 Z" fill="#374151" stroke="#9ca3af" stroke-width="2"/>
                <text x="315" y="105" text-anchor="middle" font-size="14" fill="#9ca3af">WAN</text>
            </svg>`
        },
        {
            title: "Access Points", 
            icon: "fa-wifi",
            description: "Allows wireless devices to connect to a wired network using Wi-Fi. Acts as a bridge between wireless and Ethernet LANs.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Access Point connecting wireless devices to a wired network</title>
                <circle cx="150" cy="100" r="25" fill="#2563eb"/>
                <text x="150" y="105" text-anchor="middle" font-size="16" fill="white" font-family="sans-serif">AP</text>
                <path d="M165 90 A 30 30 0 0 1 185 60" stroke="#3b82f6" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M175 90 A 50 50 0 0 1 220 45" stroke="#3b82f6" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M185 90 A 70 70 0 0 1 250 30" stroke="#3b82f6" stroke-width="3" fill="none" stroke-linecap="round"/>
                <rect x="250" y="20" width="100" height="25" rx="3" fill="#475569"/>
                <text x="300" y="36" text-anchor="middle" font-size="10" fill="#94a3b8">Laptop</text>
                <rect x="220" y="40" width="100" height="25" rx="3" fill="#475569"/>
                <text x="270" y="56" text-anchor="middle" font-size="10" fill="#94a3b8">Phone</text>
                <rect x="185" y="55" width="100" height="25" rx="3" fill="#475569"/>
                <text x="235" y="71" text-anchor="middle" font-size="10" fill="#94a3b8">Tablet</text>
                <line x1="50" y1="100" x2="125" y2="100" stroke="#64748b" stroke-width="3"/>
                <rect x="20" y="90" width="80" height="20" rx="3" fill="#334155"/>
                <text x="60" y="104" text-anchor="middle" font-size="10" fill="#94a3b8">Wired LAN</text>
            </svg>`
        },
        {
            title: "Controllers", 
            icon: "fa-sitemap",
            description: "Wireless LAN Controller centrally manages, configures, and monitors multiple Access Points, simplifying wireless network administration.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Wireless LAN Controller managing multiple Access Points</title>
                <rect x="50" y="80" width="100" height="40" rx="5" fill="#be185d"/>
                <text x="100" y="105" text-anchor="middle" font-size="16" fill="white" font-family="sans-serif">WLC</text>
                <line x1="150" y1="100" x2="200" y2="100" stroke="#64748b" stroke-width="2"/>
                <rect x="200" y="20" width="150" height="160" rx="5" fill="#334155"/>
                <circle cx="275" cy="50" r="15" fill="#2563eb"/>
                <text x="275" y="55" font-size="10" fill="white" text-anchor="middle" font-family="sans-serif">AP</text>
                <circle cx="275" cy="100" r="15" fill="#2563eb"/>
                <text x="275" y="105" font-size="10" fill="white" text-anchor="middle" font-family="sans-serif">AP</text>
                <circle cx="275" cy="150" r="15" fill="#2563eb"/>
                <text x="275" y="155" font-size="10" fill="white" text-anchor="middle" font-family="sans-serif">AP</text>
                <path d="M 150 100 Q 200 40 260 45" stroke="#db2777" stroke-width="2" fill="none" stroke-dasharray="4"/>
                <path d="M 150 100 Q 210 100 260 100" stroke="#db2777" stroke-width="2" fill="none" stroke-dasharray="4"/>
                <path d="M 150 100 Q 200 160 260 155" stroke="#db2777" stroke-width="2" fill="none" stroke-dasharray="4"/>
            </svg>`
        },
        {
            title: "Endpoints", 
            icon: "fa-laptop-code",
            description: "End-user devices that connect to the network: computers, smartphones, tablets, printers, VoIP phones, and IoT devices.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Various endpoints connecting to a network</title>
                <circle cx="200" cy="100" r="30" fill="#334155"/>
                <text x="200" y="105" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#94a3b8">Network</text>
                
                <!-- PC -->
                <rect x="80" y="30" width="60" height="40" rx="3" fill="#475569"/>
                <text x="110" y="55" text-anchor="middle" font-size="12" fill="white">PC</text>
                <line x1="140" y1="50" x2="175" y2="85" stroke="#64748b" stroke-width="2"/>

                <!-- Phone -->
                <rect x="80" y="130" width="40" height="60" rx="3" fill="#475569"/>
                <text x="100" y="165" text-anchor="middle" font-size="12" fill="white">Phone</text>
                <line x1="120" y1="160" x2="170" y2="115" stroke="#64748b" stroke-width="2"/>

                <!-- Printer -->
                <rect x="260" y="30" width="60" height="40" rx="3" fill="#475569"/>
                <text x="290" y="55" text-anchor="middle" font-size="12" fill="white">Printer</text>
                <line x1="260" y1="50" x2="225" y2="85" stroke="#64748b" stroke-width="2"/>

                <!-- IoT -->
                <rect x="280" y="130" width="50" height="50" rx="3" fill="#475569"/>
                <text x="305" y="160" text-anchor="middle" font-size="12" fill="white">IoT</text>
                <line x1="280" y1="155" x2="230" y2="115" stroke="#64748b" stroke-width="2"/>
            </svg>`
        },
        {
            title: "Servers", 
            icon: "fa-server",
            description: "Computers that provide data or services to other devices over a network: web servers, file servers, email servers, DNS servers.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Client-Server network model</title>
                <rect x="170" y="30" width="60" height="80" rx="3" fill="#15803d" stroke="#34d399"/>
                <text x="200" y="75" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#d1fae5">Server</text>
                <line x1="200" y1="110" x2="200" y2="130" stroke="#64748b" stroke-width="2"/>
                <line x1="40" y1="130" x2="360" y2="130" stroke="#64748b" stroke-width="2"/>
                <rect x="60" y="140" width="50" height="40" rx="2" fill="#475569"/>
                <text x="85" y="165" font-size="10" font-family="sans-serif" text-anchor="middle">Client</text>
                <line x1="85" y1="140" x2="85" y2="130" stroke="#64748b" stroke-width="2"/>
                <rect x="175" y="140" width="50" height="40" rx="2" fill="#475569"/>
                <text x="200" y="165" font-size="10" font-family="sans-serif" text-anchor="middle">Client</text>
                <line x1="200" y1="140" x2="200" y2="130" stroke="#64748b" stroke-width="2"/>
                <rect x="290" y="140" width="50" height="40" rx="2" fill="#475569"/>
                <text x="315" y="165" font-size="10" font-family="sans-serif" text-anchor="middle">Client</text>
                <line x1="315" y1="140" x2="315" y2="130" stroke="#64748b" stroke-width="2"/>
            </svg>`
        },
        {
            title: "PoE", 
            icon: "fa-plug-circle-bolt",
            description: "Power over Ethernet allows network cables to carry electrical power along with data, eliminating need for separate power sources.",
            visual: `<svg viewBox="0 0 400 200">
                <title>PoE switch providing power and data</title>
                <rect x="150" y="30" width="100" height="40" rx="4" fill="#5b21b6"/>
                <text x="200" y="55" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#ddd6fe">PoE Switch</text>
                <rect x="50" y="130" width="60" height="40" rx="3" fill="#475569"/>
                <text x="80" y="155" text-anchor="middle" font-size="12" font-family="sans-serif">AP</text>
                <path d="M180 70 V 100 H 80 V 130" stroke="#64748b" stroke-width="2" fill="none"/>
                <path d="M185 80 L 178 92 L 187 92 L 180 104" stroke="#facc15" fill="none" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
                <rect x="290" y="130" width="60" height="40" rx="3" fill="#475569"/>
                <text x="320" y="155" text-anchor="middle" font-size="10" font-family="sans-serif">Camera</text>
                <path d="M220 70 V 100 H 320 V 130" stroke="#64748b" stroke-width="2" fill="none"/>
                <path d="M225 80 L 218 92 L 227 92 L 220 104" stroke="#facc15" fill="none" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>`
        },
    ],

    // TOPOLOGY
    topology: [
        {
            title: "Two-Tier", 
            icon: "fa-layer-group",
            description: "Combines Core and Distribution layers. Suitable for small to medium-sized networks, reducing cost and complexity.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Two-Tier Architecture</title>
                <rect x="130" y="30" width="140" height="40" rx="5" fill="#818cf8"/>
                <text x="200" y="55" text-anchor="middle" font-size="12" fill="white" font-family="sans-serif">Core/Distribution</text>
                <rect x="60" y="130" width="100" height="40" rx="5" fill="#a5b4fc"/>
                <text x="110" y="155" text-anchor="middle" font-size="12" fill="#3730a3" font-family="sans-serif">Access</text>
                <rect x="240" y="130" width="100" height="40" rx="5" fill="#a5b4fc"/>
                <text x="290" y="155" text-anchor="middle" font-size="12" fill="#3730a3" font-family="sans-serif">Access</text>
                <path d="M110 130 V 100 C 110 80, 180 80, 180 70" stroke="#64748b" stroke-width="2" fill="none"/>
                <path d="M290 130 V 100 C 290 80, 220 80, 220 70" stroke="#64748b" stroke-width="2" fill="none"/>
            </svg>`
        },
        {
            title: "Three-Tier", 
            icon: "fa-cubes-stacked",
            description: "Hierarchical model with Core (backbone), Distribution (policy), and Access (end devices) layers. Provides scalability and redundancy.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Three-Tier Architecture</title>
                <rect x="160" y="20" width="80" height="30" rx="3" fill="#6366f1"/>
                <text x="200" y="40" text-anchor="middle" font-size="12" fill="white">Core</text>
                <rect x="80" y="80" width="100" height="30" rx="3" fill="#818cf8"/>
                <text x="130" y="100" text-anchor="middle" font-size="12" fill="white">Distribution</text>
                <rect x="220" y="80" width="100" height="30" rx="3" fill="#818cf8"/>
                <text x="270" y="100" text-anchor="middle" font-size="12" fill="white">Distribution</text>
                <rect x="40" y="140" width="80" height="30" rx="3" fill="#a5b4fc"/>
                <text x="80" y="160" text-anchor="middle" font-size="12" fill="#3730a3">Access</text>
                <rect x="140" y="140" width="80" height="30" rx="3" fill="#a5b4fc"/>
                <text x="180" y="160" text-anchor="middle" font-size="12" fill="#3730a3">Access</text>
                <line x1="200" y1="50" x2="130" y2="80" stroke="#64748b" stroke-width="2"/>
                <line x1="200" y1="50" x2="270" y2="80" stroke="#64748b" stroke-width="2"/>
                <line x1="130" y1="110" x2="80" y2="140" stroke="#64748b" stroke-width="2"/>
                <line x1="130" y1="110" x2="180" y2="140" stroke="#64748b" stroke-width="2"/>
            </svg>`
        },
        {
            title: "Spine-Leaf", 
            icon: "fa-code-branch",
            description: "Modern data center topology where every Leaf switch connects to every Spine switch. Offers high bandwidth and low latency.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Spine-Leaf Architecture</title>
                <rect x="80" y="30" width="80" height="30" rx="3" fill="#166534"/>
                <text x="120" y="50" text-anchor="middle" font-size="12" fill="white">Spine 1</text>
                <rect x="240" y="30" width="80" height="30" rx="3" fill="#166534"/>
                <text x="280" y="50" text-anchor="middle" font-size="12" fill="white">Spine 2</text>
                <rect x="40" y="140" width="80" height="30" rx="3" fill="#34d399"/>
                <text x="80" y="160" text-anchor="middle" font-size="12" fill="#065f46">Leaf 1</text>
                <rect x="160" y="140" width="80" height="30" rx="3" fill="#34d399"/>
                <text x="200" y="160" text-anchor="middle" font-size="12" fill="#065f46">Leaf 2</text>
                <rect x="280" y="140" width="80" height="30" rx="3" fill="#34d399"/>
                <text x="320" y="160" text-anchor="middle" font-size="12" fill="#065f46">Leaf 3</text>
                <line x1="80" y1="140" x2="120" y2="60" stroke="#64748b" stroke-width="2"/>
                <line x1="80" y1="140" x2="280" y2="60" stroke="#64748b" stroke-width="2"/>
                <line x1="200" y1="140" x2="120" y2="60" stroke="#64748b" stroke-width="2"/>
                <line x1="200" y1="140" x2="280" y2="60" stroke="#64748b" stroke-width="2"/>
                <line x1="320" y1="140" x2="120" y2="60" stroke="#64748b" stroke-width="2"/>
                <line x1="320" y1="140" x2="280" y2="60" stroke="#64748b" stroke-width="2"/>
            </svg>`
        },
        {
            title: "WAN", 
            icon: "fa-globe",
            description: "Wide Area Network spans large geographical areas, connecting multiple LANs. Uses technologies like MPLS, Metro Ethernet, and VPNs.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WAN connecting two sites</title>
                <rect x="40" y="70" width="100" height="60" rx="5" fill="#334155"/>
                <text x="90" y="105" text-anchor="middle" font-size="12" fill="#94a3b8">Site A</text>
                <rect x="260" y="70" width="100" height="60" rx="5" fill="#334155"/>
                <text x="310" y="105" text-anchor="middle" font-size="12" fill="#94a3b8">Site B</text>
                <path d="M 180 100 C 170 80, 230 80, 220 100 C 240 110, 210 130, 200 120 C 190 130, 160 110, 180 100 Z" fill="#581c87" stroke="#a855f7"/>
                <text x="200" y="105" text-anchor="middle" font-size="12" fill="#e9d5ff">WAN</text>
                <line x1="140" y1="100" x2="172" y2="100" stroke="#64748b" stroke-width="2"/>
                <line x1="228" y1="100" x2="260" y2="100" stroke="#64748b" stroke-width="2"/>
            </svg>`
        },
        {
            title: "SOHO", 
            icon: "fa-house-laptop",
            description: "Small Office/Home Office network using a single multifunction device from ISP, suitable for small-scale networks.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SOHO Network</title>
                <path d="M 60 100 C 50 80, 110 80, 100 100 C 120 110, 90 130, 80 120 C 70 130, 40 110, 60 100 Z" fill="#4a4a0f"/>
                <text x="80" y="105" text-anchor="middle" font-size="12" font-family="sans-serif">ISP</text>
                <rect x="150" y="80" width="100" height="40" rx="3" fill="#991b1b"/>
                <text x="200" y="105" text-anchor="middle" font-size="10" fill="#fecaca">Gateway</text>
                <line x1="110" y1="100" x2="150" y2="100" stroke="#64748b" stroke-width="2"/>
                <rect x="300" y="40" width="60" height="40" rx="2" fill="#475569"/>
                <text x="330" y="65" font-size="10">PC</text>
                <rect x="300" y="120" width="60" height="40" rx="2" fill="#475569"/>
                <text x="330" y="145" font-size="10">Phone</text>
                <line x1="250" y1="100" x2="300" y2="60" stroke="#64748b" stroke-width="2"/>
                <line x1="250" y1="100" x2="300" y2="140" stroke="#64748b" stroke-width="2"/>
            </svg>`
        },
        {
            title: "On-Premises vs. Cloud", 
            icon: "fa-cloud-arrow-up",
            description: "On-Premises: Infrastructure in organization building. Cloud: Infrastructure hosted by third-party provider, accessed via internet.",
            visual: `<svg viewBox="0 0 400 200">
                <title>On-Premises vs Cloud</title>
                <rect x="40" y="50" width="120" height="100" rx="3" fill="#334155"/>
                <path d="M 95 50 L 120 35 L 145 50" stroke="#94a3b8" fill="none" stroke-width="2"/>
                <rect x="60" y="60" width="80" height="70" rx="1" fill="#94a3b8"/>
                <text x="100" y="110" text-anchor="middle" font-size="12" font-family="sans-serif">On-Prem</text>
                <path d="M260 80 C 250 60, 290 60, 280 80 C 300 80, 300 100, 280 100 L 260 100 C 240 100, 240 80, 260 80 Z" fill="#0c4a6e"/>
                <rect x="300" y="120" width="60" height="40" rx="2" fill="#475569"/>
                <line x1="280" y1="100" x2="330" y2="120" stroke="#64748b" stroke-width="2"/>
                <text x="280" y="130" text-anchor="middle" font-size="12" font-family="sans-serif">Cloud</text>
                <line x1="200" y1="30" x2="200" y2="170" stroke-dasharray="4" stroke="#475569" stroke-width="2"/>
            </svg>`
        },
    ],

    // CABLING
    cabling: [
        {
            title: "Copper - Twisted Pair", 
            icon: "fa-cable-car",
            description: "Common copper cabling with pairs of wires twisted together to reduce electromagnetic interference. Categories include Cat5e, Cat6, Cat6a.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Twisted Pair Copper Cable</title>
                <rect x="60" y="80" width="280" height="40" rx="10" fill="#b45309"/>
                <text x="200" y="105" text-anchor="middle" font-size="12" fill="#fed7aa">Cat6 Cable</text>
                <path d="M 80 80 Q 85 60 90 80 Q 95 100 100 80 T 110 80" stroke="#0ea5e9" stroke-width="4" fill="none"/>
                <path d="M 82 80 Q 87 60 92 80 Q 97 100 102 80 T 112 80" stroke="#10b981" stroke-width="4" fill="none"/>
                <path d="M 120 80 Q 125 60 130 80 Q 135 100 140 80 T 150 80" stroke="#f59e0b" stroke-width="4" fill="none"/>
                <path d="M 122 80 Q 127 60 132 80 Q 137 100 142 80 T 152 80" stroke="#ef4444" stroke-width="4" fill="none"/>
                <text x="200" y="60" text-anchor="middle" font-size="12" fill="#92400e">Twisted Pairs to reduce EMI</text>
            </svg>`
        },
        {
            title: "Single Mode Fiber", 
            icon: "fa-eye-dropper",
            description: "Fiber with small core allowing one mode of light. Used for long distances with high bandwidth. Less modal dispersion.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Single Mode Fiber</title>
                 <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                        <polygon points="0,0 0,6 9,3" fill="#ef4444"/>
                    </marker>
                </defs>
                <rect x="40" y="90" width="320" height="20" rx="10" fill="#fbbf24"/>
                <circle cx="40" cy="100" r="15" fill="#0ea5e9"/>
                <circle cx="360" cy="100" r="15" fill="#0ea5e9"/>
                <path d="M 55 100 L 345 100" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)"/>
                <text x="200" y="80" text-anchor="middle" font-size="12" fill="#f8fafc">Single Mode (Long Distance)</text>
                <text x="200" y="130" text-anchor="middle" font-size="12" fill="#f8fafc">9/125 μm</text>
            </svg>`
        },
        {
            title: "Multimode Fiber", 
            icon: "fa-expand",
            description: "Fiber with larger core allowing multiple modes of light. Used for shorter distances within buildings. Higher modal dispersion.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Multimode Fiber</title>
                <defs>
                    <marker id="arrow1" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                        <polygon points="0,0 0,6 6,4" fill="#ef4444"/>
                    </marker>
                    <marker id="arrow2" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                        <polygon points="0,0 0,6 6,4" fill="#10b981"/>
                    </marker>
                    <marker id="arrow3" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                        <polygon points="0,0 0,6 6,4" fill="#8b5cf6"/>
                    </marker>
                </defs>
                <rect x="40" y="85" width="320" height="30" rx="15" fill="#fbbf24"/>
                <circle cx="40" cy="100" r="20" fill="#0ea5e9"/>
                <circle cx="360" cy="100" r="20" fill="#0ea5e9"/>
                <path d="M 60 95 C 150 85, 250 85, 340 95" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow1)" fill="none"/>
                <path d="M 60 100 H 340" stroke="#10b981" stroke-width="2" marker-end="url(#arrow2)" fill="none"/>
                <path d="M 60 105 C 150 115, 250 115, 340 105" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow3)" fill="none"/>
                <text x="200" y="75" text-anchor="middle" font-size="12" fill="#f8fafc">Multimode (Shorter Distance)</text>
                <text x="200" y="130" text-anchor="middle" font-size="12" fill="#f8fafc">50/125 μm</text>
            </svg>`
        },
        {
            title: "Cable Categories", 
            icon: "fa-list-ol",
            description: "Copper cable performance standards: Cat5e (1 Gigabit), Cat6 (10 Gigabit to 55m), Cat6a (10 Gigabit to 100m).",
            visual: `<svg viewBox="0 0 400 200">
                <title>Cable Categories</title>
                <rect x="40" y="40" width="100" height="120" rx="5" fill="#10b981"/>
                <text x="90" y="60" text-anchor="middle" font-size="14" fill="white">Cat5e</text>
                <text x="90" y="110" text-anchor="middle" font-size="12" fill="white">1 Gbps</text>
                <text x="90" y="130" text-anchor="middle" font-size="12" fill="white">100m</text>
                <rect x="150" y="40" width="100" height="120" rx="5" fill="#3b82f6"/>
                <text x="200" y="60" text-anchor="middle" font-size="14" fill="white">Cat6</text>
                <text x="200" y="110" text-anchor="middle" font-size="12" fill="white">10 Gbps</text>
                <text x="200" y="130" text-anchor="middle" font-size="12" fill="white">55m</text>
                <rect x="260" y="40" width="100" height="120" rx="5" fill="#8b5cf6"/>
                <text x="310" y="60" text-anchor="middle" font-size="14" fill="white">Cat6a</text>
                <text x="310" y="110" text-anchor="middle" font-size="12" fill="white">10 Gbps</text>
                <text x="310" y="130" text-anchor="middle" font-size="12" fill="white">100m</text>
            </svg>`
        },
        {
            title: "Connectors", 
            icon: "fa-plug",
            description: "Physical connectors: RJ45 for copper Ethernet, LC/SC for fiber connections. Proper connector type ensures signal integrity.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Network Connectors</title>
                <rect x="50" y="70" width="120" height="60" rx="5" fill="#475569"/>
                <rect x="55" y="75" width="110" height="30" rx="3" fill="#fbbf24"/>
                <text x="110" y="95" text-anchor="middle" font-size="14" fill="#1e293b">RJ45</text>
                <text x="110" y="120" text-anchor="middle" font-size="12" fill="#cbd5e1">Copper</text>
                <rect x="230" y="70" width="120" height="60" rx="5" fill="#475569"/>
                <rect x="235" y="75" width="50" height="30" rx="5" fill="#0ea5e9"/>
                <rect x="295" y="75" width="50" height="30" rx="5" fill="#0ea5e9"/>
                <text x="290" y="95" text-anchor="middle" font-size="14" fill="white">LC</text>
                <text x="290" y="120" text-anchor="middle" font-size="12" fill="#cbd5e1">Fiber</text>
            </svg>`
        },
        {
            title: "Ethernet Connections", 
            icon: "fa-network-wired",
            description: "Shared Media: Multiple devices compete for access (hubs, CSMA/CD). Point-to-Point: Direct connection between two devices (modern switches).",
            visual: `<svg viewBox="0 0 400 200">
                <title>Shared Media vs Point-to-Point</title>
                <text x="100" y="30" text-anchor="middle" font-size="12" font-weight="bold">Shared Media (Hub)</text>
                <circle cx="100" cy="100" r="25" fill="#dc2626"/>
                <text x="100" y="105" text-anchor="middle" font-size="12" fill="white">Hub</text>
                <rect x="20" y="40" width="40" height="30" rx="2" fill="#475569"/>
                <rect x="140" y="40" width="40" height="30" rx="2" fill="#475569"/>
                <rect x="80" y="150" width="40" height="30" rx="2" fill="#475569"/>
                <line x1="40" y1="70" x2="85" y2="90" stroke="#64748b" stroke-width="2"/>
                <line x1="160" y1="70" x2="115" y2="90" stroke="#64748b" stroke-width="2"/>
                <line x1="100" y1="125" x2="100" y2="150" stroke="#64748b" stroke-width="2"/>
                <text x="300" y="30" text-anchor="middle" font-size="12" font-weight="bold">Point-to-Point (Switch)</text>
                <rect x="230" y="90" width="50" height="40" rx="3" fill="#16a34a"/>
                <text x="255" y="115" text-anchor="middle" font-size="10" fill="white">PC</text>
                <rect x="320" y="90" width="50" height="40" rx="3" fill="#16a34a"/>
                <text x="345" y="115" text-anchor="middle" font-size="10" fill="white">SW</text>
                <line x1="280" y1="110" x2="320" y2="110" stroke="#64748b" stroke-width="3"/>
            </svg>`
        },
    ],

    // ISSUES
    issues: [
        {
            title: "Physical Layer Issues", 
            icon: "fa-exclamation-triangle",
            description: "Identify and troubleshoot physical connectivity problems using show interface commands and error counter analysis.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Physical Layer Troubleshooting</title>
                <rect x="50" y="50" width="100" height="100" rx="5" fill="#334155"/>
                <text x="100" y="105" text-anchor="middle" font-size="12" fill="#94a3b8">Device</text>
                <line x1="150" y1="100" x2="250" y2="100" stroke="#ef4444" stroke-width="6" stroke-dasharray="8,4"/>
                <path d="M 190 90 L 210 110 M 210 90 L 190 110" stroke="#ef4444" stroke-width="6" stroke-linecap="round"/>
                <text x="200" y="130" text-anchor="middle" font-size="12" fill="#ef4444">Cable Fault</text>
                <rect x="250" y="50" width="100" height="100" rx="5" fill="#334155"/>
                <text x="300" y="105" text-anchor="middle" font-size="12" fill="#94a3b8">Device</text>
            </svg>`
        },
        {
            title: "Show Interface Analysis", 
            icon: "fa-chart-line",
            description: "Interpret interface counters and statistics to diagnose network issues. Learn what CRC errors, collisions, and drops indicate.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Interface Statistics Dashboard</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                <rect x="30" y="30" width="340" height="25" rx="3" fill="#475569"/>
                <text x="200" y="47" text-anchor="middle" font-size="12" fill="white">Interface Gi0/1 Statistics</text>
                <text x="40" y="75" font-family="monospace" fill="#ef4444" font-size="10">CRC Errors: 1,247</text>
                <text x="40" y="95" font-family="monospace" fill="#f59e0b" font-size="10">Input Errors: 523</text>
                <text x="40" y="115" font-family="monospace" fill="#10b981" font-size="10">Collisions: 0</text>
                <text x="40" y="135" font-family="monospace" fill="#3b82f6" font-size="10">Late Collisions: 0</text>
                <text x="40" y="155" font-family="monospace" fill="#8b5cf6" font-size="10">Giants: 15</text>
                <rect x="220" y="70" width="150" height="100" rx="3" fill="#374151"/>
                <text x="295" y="90" text-anchor="middle" font-size="10" fill="#9ca3af">Status: UP/DOWN</text>
                <circle cx="295" cy="110" r="15" fill="#ef4444"/>
                <text x="295" y="140" text-anchor="middle" font-size="10" fill="#9ca3af">Cable Issue Detected</text>
            </svg>`
        },
        {
            title: "Duplex & Speed Issues", 
            icon: "fa-arrows-left-right",
            description: "Diagnose and resolve duplex mismatches and speed negotiation problems that cause performance degradation.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Duplex Mismatch Problem</title>
                <rect x="40" y="80" width="100" height="40" rx="3" fill="#4f46e5"/>
                <text x="90" y="105" text-anchor="middle" font-size="12" fill="white">Device A</text>
                <text x="90" y="70" text-anchor="middle" font-size="12" fill="#16a34a">Full-Duplex</text>
                <rect x="260" y="80" width="100" height="40" rx="3" fill="#4f46e5"/>
                <text x="310" y="105" text-anchor="middle" font-size="12" fill="white">Device B</text>
                <text x="310" y="70" text-anchor="middle" font-size="12" fill="#dc2626">Half-Duplex</text>
                <line x1="140" y1="100" x2="260" y2="100" stroke="#64748b" stroke-width="2"/>
                <path d="M 190 90 L 210 110 M 210 90 L 190 110" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
                <text x="200" y="130" text-anchor="middle" font-size="12" fill="#ef4444">Collisions & Late Collisions</text>
                <text x="200" y="150" text-anchor="middle" font-size="10" fill="#f59e0b">Performance Degradation</text>
            </svg>`
        },
        {
            title: "Error Counter Types", 
            icon: "fa-list-check",
            description: "Understand different types of interface errors: CRC, runts, giants, drops, and their root causes for effective troubleshooting.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Interface Error Types</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b"/>
                <rect x="30" y="40" width="100" height="30" rx="3" fill="#ef4444"/>
                <text x="80" y="60" text-anchor="middle" font-size="12" fill="white">CRC Errors</text>
                <text x="80" y="85" text-anchor="middle" font-size="10" fill="#fca5a5">Bad Cables</text>
                <rect x="150" y="40" width="100" height="30" rx="3" fill="#f59e0b"/>
                <text x="200" y="60" text-anchor="middle" font-size="12" fill="white">Runts</text>
                <text x="200" y="85" text-anchor="middle" font-size="10" fill="#fed7aa">< 64 bytes</text>
                <rect x="270" y="40" width="100" height="30" rx="3" fill="#8b5cf6"/>
                <text x="320" y="60" text-anchor="middle" font-size="12" fill="white">Giants</text>
                <text x="320" y="85" text-anchor="middle" font-size="10" fill="#c4b5fd"> > 1518 bytes</text>
                <rect x="90" y="100" width="100" height="30" rx="3" fill="#10b981"/>
                <text x="140" y="120" text-anchor="middle" font-size="12" fill="white">Collisions</text>
                <text x="140" y="145" text-anchor="middle" font-size="10" fill="#86efac">Half-Duplex</text>
                <rect x="210" y="100" width="100" height="30" rx="3" fill="#3b82f6"/>
                <text x="260" y="120" text-anchor="middle" font-size="12" fill="white">Drops</text>
                <text x="260" y="145" text-anchor="middle" font-size="10" fill="#93c5fd">Buffer Full</text>
            </svg>`
        },
        {
            title: "Cable Testing Methods", 
            icon: "fa-stethoscope",
            description: "Physical cable testing techniques and tools to verify continuity, identify breaks, shorts, and performance issues.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Cable Testing Tools</title>
                <rect x="50" y="60" width="120" height="80" rx="5" fill="#475569"/>
                <text x="110" y="105" text-anchor="middle" font-size="12" fill="white">Cable Tester</text>
                <line x1="170" y1="100" x2="230" y2="100" stroke="#f59e0b" stroke-width="4"/>
                <text x="200" y="90" text-anchor="middle" font-size="10" fill="#f59e0b">Testing Cable</text>
                <rect x="230" y="80" width="120" height="40" rx="3" fill="#334155"/>
                <text x="290" y="105" text-anchor="middle" font-size="12" fill="#94a3b8">Remote Unit</text>
                <circle cx="110" cy="140" r="8" fill="#16a34a"/>
                <text x="110" y="160" text-anchor="middle" font-size="10" fill="#16a34a">PASS</text>
                <circle cx="290" cy="140" r="8" fill="#16a34a"/>
                <text x="290" y="160" text-anchor="middle" font-size="10" fill="#16a34a">PASS</text>
            </svg>`
        },
        {
            title: "Common Failure Modes", 
            icon: "fa-circle-xmark",
            description: "Identify typical cable and interface failure patterns: opens, shorts, split pairs, attenuation, and crosstalk issues.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Cable Failure Modes</title>
                <rect x="30" y="40" width="80" height="120" rx="5" fill="#1e293b"/>
                <text x="70" y="60" text-anchor="middle" font-size="12" fill="#ef4444">Open Circuit</text>
                <line x1="40" y1="80" x2="70" y2="80" stroke="#ef4444" stroke-width="3"/>
                <line x1="80" y1="80" x2="100" y2="80" stroke="#ef4444" stroke-width="3"/>
                <circle cx="75" cy="80" r="3" fill="white"/>
                <rect x="130" y="40" width="80" height="120" rx="5" fill="#1e293b"/>
                <text x="170" y="60" text-anchor="middle" font-size="12" fill="#f59e0b">Short Circuit</text>
                <line x1="140" y1="80" x2="200" y2="80" stroke="#f59e0b" stroke-width="3"/>
                <line x1="140" y1="100" x2="200" y2="100" stroke="#f59e0b" stroke-width="3"/>
                <line x1="170" y1="80" x2="170" y2="100" stroke="#f59e0b" stroke-width="3"/>
                <rect x="230" y="40" width="80" height="120" rx="5" fill="#1e293b"/>
                <text x="270" y="60" text-anchor="middle" font-size="12" fill="#8b5cf6">Split Pair</text>
                <path d="M 240 80 Q 260 70 280 80" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <path d="M 240 100 Q 260 110 280 100" stroke="#8b5cf6" stroke-width="3" fill="none"/>
                <text x="270" y="130" text-anchor="middle" font-size="10" fill="#c4b5fd">Wrong Pairing</text>
            </svg>`
        },
    ],

    // TCPUDP
    tcpUdp: [
        {
            title: "TCP Fundamentals", 
            icon: "fa-handshake",
            description: "Connection-oriented transport protocol providing reliable, ordered data delivery with error correction and flow control.",
            visual: `<svg viewBox="0 0 400 200">
                <title>TCP Three-Way Handshake</title>
                <defs>
                    <marker id="arrow-tcp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#9B59B6" />
                    </marker>
                    <marker id="arrow-tcp-rev" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                       <path d="M 10 0 L 0 5 L 10 10 z" fill="#9B59B6" />
                    </marker>
                </defs>
                <rect x="50" y="50" width="80" height="100" rx="5" fill="#374151"/>
                <text x="90" y="105" text-anchor="middle" font-size="12" fill="white">Client</text>
                <rect x="270" y="50" width="80" height="100" rx="5" fill="#374151"/>
                <text x="310" y="105" text-anchor="middle" font-size="12" fill="white">Server</text>
                <path d="M130 70 H 270" stroke="#9B59B6" stroke-width="3" marker-end="url(#arrow-tcp)"/>
                <text x="200" y="65" text-anchor="middle" font-size="12" fill="#9B59B6">1. SYN</text>
                <path d="M270 90 H 130" stroke="#9B59B6" stroke-width="3" marker-end="url(#arrow-tcp-rev)"/>
                <text x="200" y="85" text-anchor="middle" font-size="12" fill="#9B59B6">2. SYN-ACK</text>
                <path d="M130 110 H 270" stroke="#9B59B6" stroke-width="3" marker-end="url(#arrow-tcp)"/>
                <text x="200" y="105" text-anchor="middle" font-size="12" fill="#9B59B6">3. ACK</text>
                <text x="200" y="130" text-anchor="middle" font-size="14" fill="#AF7AC5" font-weight="bold">Connection Established</text>
            </svg>`
        },
        {
            title: "UDP Fundamentals", 
            icon: "fa-paper-plane",
            description: "Connectionless transport protocol providing fast, best-effort delivery without guarantees for time-sensitive applications.",
            visual: `<svg viewBox="0 0 400 200">
                <title>UDP Connectionless Communication</title>
                <defs>
                    <marker id="arrow-udp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#AF7AC5" />
                    </marker>
                </defs>
                <rect x="50" y="50" width="80" height="100" rx="5" fill="#374151"/>
                <text x="90" y="105" text-anchor="middle" font-size="12" fill="white">Client</text>
                <rect x="270" y="50" width="80" height="100" rx="5" fill="#374151"/>
                <text x="310" y="105" text-anchor="middle" font-size="12" fill="white">Server</text>
                <path d="M130 70 H 270" stroke="#AF7AC5" stroke-width="3" marker-end="url(#arrow-udp)"/>
                <text x="200" y="65" text-anchor="middle" font-size="12" fill="#AF7AC5">Data Packet 1</text>
                <path d="M130 90 H 270" stroke="#AF7AC5" stroke-width="3" marker-end="url(#arrow-udp)"/>
                <text x="200" y="85" text-anchor="middle" font-size="12" fill="#AF7AC5">Data Packet 2</text>
                <path d="M130 110 H 270" stroke="#AF7AC5" stroke-width="3" marker-end="url(#arrow-udp)"/>
                <text x="200" y="105" text-anchor="middle" font-size="12" fill="#AF7AC5">Data Packet 3</text>
                <text x="200" y="130" text-anchor="middle" font-size="14" fill="#AF7AC5" font-weight="bold">Fire and Forget</text>
                <text x="200" y="150" text-anchor="middle" font-size="12" fill="#C4B5FD">No Connection Setup</text>
            </svg>`
        },
        {
            title: "TCP Header Analysis", 
            icon: "fa-table-cells",
            description: "Detailed examination of TCP header fields including sequence numbers, acknowledgments, flags, and window size for flow control.",
            visual: `<svg viewBox="0 0 400 200">
                <title>TCP Header Structure</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b" stroke="#9B59B6"/>
                <rect x="30" y="40" width="80" height="30" rx="3" fill="#9B59B6"/>
                <text x="70" y="60" text-anchor="middle" font-size="12" fill="white">Src Port</text>
                <rect x="110" y="40" width="80" height="30" rx="3" fill="#9B59B6"/>
                <text x="150" y="60" text-anchor="middle" font-size="12" fill="white">Dst Port</text>
                <rect x="190" y="40" width="80" height="30" rx="3" fill="#9B59B6"/>
                <text x="230" y="60" text-anchor="middle" font-size="12" fill="white">Seq Num</text>
                <rect x="270" y="40" width="100" height="30" rx="3" fill="#9B59B6"/>
                <text x="320" y="60" text-anchor="middle" font-size="12" fill="white">Ack Num</text>
                <rect x="30" y="80" width="60" height="30" rx="3" fill="#AF7AC5"/>
                <text x="60" y="100" text-anchor="middle" font-size="10" fill="white">Flags</text>
                <rect x="100" y="80" width="80" height="30" rx="3" fill="#AF7AC5"/>
                <text x="140" y="100" text-anchor="middle" font-size="10" fill="white">Window</text>
                <rect x="190" y="80" width="80" height="30" rx="3" fill="#AF7AC5"/>
                <text x="230" y="100" text-anchor="middle" font-size="10" fill="white">Checksum</text>
                <rect x="280" y="80" width="90" height="30" rx="3" fill="#AF7AC5"/>
                <text x="325" y="100" text-anchor="middle" font-size="10" fill="white">Options</text>
                <rect x="30" y="120" width="340" height="40" rx="3" fill="#C4B5FD"/>
                <text x="200" y="145" text-anchor="middle" font-size="14" fill="#581C87">Application Data</text>
            </svg>`
        },
        {
            title: "UDP Header Analysis", 
            icon: "fa-table-cells-large",
            description: "Simple UDP header structure with minimal overhead: source port, destination port, length, and checksum for fast transmission.",
            visual: `<svg viewBox="0 0 400 200">
                <title>UDP Header Structure</title>
                <rect x="50" y="50" width="300" height="100" rx="5" fill="#1e293b" stroke="#AF7AC5"/>
                <rect x="60" y="60" width="130" height="35" rx="3" fill="#AF7AC5"/>
                <text x="125" y="82" text-anchor="middle" font-size="14" fill="white">Source Port</text>
                <rect x="200" y="60" width="130" height="35" rx="3" fill="#AF7AC5"/>
                <text x="265" y="82" text-anchor="middle" font-size="14" fill="white">Dest Port</text>
                <rect x="60" y="105" width="130" height="35" rx="3" fill="#C4B5FD"/>
                <text x="125" y="127" text-anchor="middle" font-size="14" fill="#581C87">Length</text>
                <rect x="200" y="105" width="130" height="35" rx="3" fill="#C4B5FD"/>
                <text x="265" y="127" text-anchor="middle" font-size="14" fill="#581C87">Checksum</text>
                <text x="200" y="180" text-anchor="middle" font-size="12" fill="#9CA3AF">Simple 8-byte header vs TCP's 20+ bytes</text>
            </svg>`
        },
        {
            title: "Protocol Applications", 
            icon: "fa-network-wired",
            description: "Real-world applications: TCP for web browsing, email, file transfer. UDP for VoIP, gaming, DNS, streaming media.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Protocol Usage by Application</title>
                <rect x="20" y="30" width="170" height="140" rx="5" fill="#1e293b" stroke="#9B59B6"/>
                <text x="105" y="50" text-anchor="middle" font-size="14" fill="#9B59B6" font-weight="bold">TCP Applications</text>
                <rect x="30" y="60" width="150" height="25" rx="3" fill="#374151"/>
                <text x="105" y="77" text-anchor="middle" font-size="12" fill="white">HTTP/HTTPS (Port 80/443)</text>
                <rect x="30" y="90" width="150" height="25" rx="3" fill="#374151"/>
                <text x="105" y="107" text-anchor="middle" font-size="12" fill="white">SMTP/POP3 (Port 25/110)</text>
                <rect x="30" y="120" width="150" height="25" rx="3" fill="#374151"/>
                <text x="105" y="137" text-anchor="middle" font-size="12" fill="white">SSH/Telnet (Port 22/23)</text>
                <rect x="30" y="150" width="150" height="15" rx="3" fill="#4B5563"/>
                <text x="105" y="160" text-anchor="middle" font-size="10" fill="#D1D5DB">Reliable & Ordered</text>
                
                <rect x="210" y="30" width="170" height="140" rx="5" fill="#1e293b" stroke="#AF7AC5"/>
                <text x="295" y="50" text-anchor="middle" font-size="14" fill="#AF7AC5" font-weight="bold">UDP Applications</text>
                <rect x="220" y="60" width="150" height="25" rx="3" fill="#374151"/>
                <text x="295" y="77" text-anchor="middle" font-size="12" fill="white">DNS (Port 53)</text>
                <rect x="220" y="90" width="150" height="25" rx="3" fill="#374151"/>
                <text x="295" y="107" text-anchor="middle" font-size="12" fill="white">DHCP (Port 67/68)</text>
                <rect x="220" y="120" width="150" height="25" rx="3" fill="#374151"/>
                <text x="295" y="137" text-anchor="middle" font-size="12" fill="white">VoIP/Gaming</text>
                <rect x="220" y="150" width="150" height="15" rx="3" fill="#4B5563"/>
                <text x="295" y="160" text-anchor="middle" font-size="10" fill="#D1D5DB">Fast & Efficient</text>
            </svg>`
        },
        {
            title: "Performance Comparison", 
            icon: "fa-chart-bar",
            description: "TCP vs UDP performance characteristics: reliability vs speed, overhead comparison, and appropriate use cases for each protocol.",
            visual: `<svg viewBox="0 0 400 200">
                <title>TCP vs UDP Performance Metrics</title>
                <rect x="40" y="40" width="320" height="120" rx="5" fill="#1e293b"/>
                <text x="200" y="30" text-anchor="middle" font-size="14" fill="#9CA3AF" font-weight="bold">Performance Comparison</text>
                
                <!-- Speed Chart -->
                <text x="70" y="65" font-size="12" fill="#9CA3AF">Speed</text>
                <rect x="100" y="55" width="60" height="15" fill="#9B59B6"/>
                <text x="170" y="67" font-size="10" fill="white">TCP</text>
                <rect x="100" y="75" width="120" height="15" fill="#AF7AC5"/>
                <text x="230" y="87" font-size="10" fill="white">UDP</text>
                
                <!-- Reliability Chart -->
                <text x="70" y="110" font-size="12" fill="#9CA3AF">Reliability</text>
                <rect x="100" y="100" width="120" height="15" fill="#9B59B6"/>
                <text x="230" y="112" font-size="10" fill="white">TCP</text>
                <rect x="100" y="120" width="40" height="15" fill="#AF7AC5"/>
                <text x="150" y="132" font-size="10" fill="white">UDP</text>
                
                <!-- Overhead Chart -->
                <text x="250" y="65" font-size="12" fill="#9CA3AF">Overhead</text>
                <rect x="280" y="55" width="60" height="15" fill="#9B59B6"/>
                <text x="280" y="75" font-size="12" fill="#9CA3AF">High</text>
                <rect x="280" y="100" width="20" height="15" fill="#AF7AC5"/>
                <text x="280" y="120" font-size="12" fill="#9CA3AF">Low</text>
            </svg>`
        },
        {
            title: "TCP Sliding Window", 
            icon: "fa-window-maximize",
            description: "Flow control mechanism allowing dynamic adjustment of data transmission rate based on receiver capacity and network conditions.",
            visual: `<svg viewBox="0 0 400 200">
                <title>TCP Sliding Window Mechanism</title>
                <rect x="20" y="20" width="360" height="160" fill="#0f172a" rx="5"/>
                <text x="200" y="40" text-anchor="middle" font-size="14" fill="#e2e8f0" font-weight="bold">TCP Sliding Window</text>
                
                <!-- Sender Buffer -->
                <text x="70" y="65" font-size="12" fill="#22c55e">Sender Buffer</text>
                <rect x="30" y="70" width="30" height="20" fill="#dc2626" rx="2"/>
                <text x="45" y="83" text-anchor="middle" font-size="8" fill="white">Sent</text>
                <rect x="60" y="70" width="30" height="20" fill="#f59e0b" rx="2"/>
                <text x="75" y="83" text-anchor="middle" font-size="8" fill="white">Wait</text>
                <rect x="90" y="70" width="60" height="20" fill="#22c55e" rx="2"/>
                <text x="120" y="83" text-anchor="middle" font-size="8" fill="white">Can Send</text>
                <rect x="150" y="70" width="30" height="20" fill="#6b7280" rx="2"/>
                <text x="165" y="83" text-anchor="middle" font-size="8" fill="white">Future</text>
                
                <!-- Window Size Indicator -->
                <rect x="60" y="65" width="90" height="5" fill="none" stroke="#3b82f6" stroke-width="2"/>
                <text x="105" y="60" text-anchor="middle" font-size="10" fill="#3b82f6">Window Size</text>
                
                <!-- Flow Control -->
                <text x="70" y="115" font-size="12" fill="#22c55e">Flow Control Process</text>
                <rect x="30" y="120" width="150" height="20" fill="#1e293b" stroke="#22c55e" rx="2"/>
                <text x="45" y="133" font-size="9" fill="#22c55e">1. Send data within window</text>
                <rect x="30" y="145" width="150" height="20" fill="#1e293b" stroke="#f59e0b" rx="2"/>
                <text x="45" y="158" font-size="9" fill="#f59e0b">2. Receive ACK & window update</text>
                
                <!-- Receiver Window -->
                <text x="270" y="65" font-size="12" fill="#8b5cf6">Receiver Window</text>
                <rect x="220" y="70" width="40" height="20" fill="#6366f1" rx="2"/>
                <text x="240" y="83" text-anchor="middle" font-size="8" fill="white">Buffer</text>
                <rect x="260" y="70" width="80" height="20" fill="#22c55e" rx="2"/>
                <text x="300" y="83" text-anchor="middle" font-size="8" fill="white">Available</text>
                
                <!-- Window Advertisement -->
                <path d="M 180 140 Q 200 160 220 140" stroke="#8b5cf6" stroke-width="2" fill="none" marker-end="url(#arrow-window)"/>
                <text x="200" y="175" text-anchor="middle" font-size="10" fill="#8b5cf6">Window Advertisement</text>
                
                <defs>
                    <marker id="arrow-window" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6"/>
                    </marker>
                </defs>
            </svg>`
        },
    ],

    // IPV4
    ipv4: [
        {
            title: "IPv4 & Subnetting", 
            icon: "fa-calculator",
            description: "IPv4: 32-bit logical address in dotted-decimal (192.168.1.10). Subnet mask separates network from host portion. Subnetting divides networks.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv4 Address and Subnet Mask</title>
                <text x="200" y="50" text-anchor="middle" font-size="16" font-family="monospace" fill="#f8fafc">192.168.1.10</text>
                <text x="200" y="70" text-anchor="middle" font-size="12">IP Address</text>
                <text x="200" y="120" text-anchor="middle" font-size="16" font-family="monospace" fill="#f8fafc">255.255.255.0</text>
                <text x="200" y="140" text-anchor="middle" font-size="12">Subnet Mask</text>
                
                <rect x="44" y="40" width="220" height="20" fill="rgba(139, 92, 246, 0.2)" rx="2"/>
                <text x="154" y="30" font-size="12" text-anchor="middle">Network Portion</text>
                
                <rect x="265" y="40" width="55" height="20" fill="rgba(236, 72, 153, 0.2)" rx="2"/>
                <text x="292" y="30" font-size="12" text-anchor="middle">Host</text>
            </svg>`
        },
        {
            title: "VLSM", 
            icon: "fa-sliders",
            description: "Variable Length Subnet Masking allows different subnet sizes within the same network. Efficient IP address allocation for different requirements.",
            visual: `<svg viewBox="0 0 400 200">
                <title>VLSM Example - Different Subnet Sizes</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                <text x="200" y="40" text-anchor="middle" font-size="14" fill="#f8fafc" font-weight="bold">192.168.1.0/24 Network</text>
                
                <rect x="30" y="60" width="160" height="40" rx="3" fill="#166534"/>
                <text x="110" y="75" text-anchor="middle" font-size="12" fill="#dcfce7">192.168.1.0/26</text>
                <text x="110" y="90" text-anchor="middle" font-size="10" fill="#bbf7d0">62 hosts</text>
                
                <rect x="210" y="60" width="160" height="40" rx="3" fill="#991b1b"/>
                <text x="290" y="75" text-anchor="middle" font-size="12" fill="#fecaca">192.168.1.64/27</text>
                <text x="290" y="90" text-anchor="middle" font-size="10" fill="#fca5a5">30 hosts</text>
                
                <rect x="30" y="120" width="80" height="40" rx="3" fill="#7c2d12"/>
                <text x="70" y="135" text-anchor="middle" font-size="12" fill="#fed7aa">192.168.1.96/28</text>
                <text x="70" y="150" text-anchor="middle" font-size="10" fill="#fdba74">14 hosts</text>
                
                <rect x="130" y="120" width="80" height="40" rx="3" fill="#581c87"/>
                <text x="170" y="135" text-anchor="middle" font-size="12" fill="#e9d5ff">192.168.1.112/30</text>
                <text x="170" y="150" text-anchor="middle" font-size="10" fill="#ddd6fe">2 hosts</text>
            </svg>`
        },
        {
            title: "CIDR Notation", 
            icon: "fa-compress",
            description: "Classless Inter-Domain Routing uses /prefix notation. /24 = 255.255.255.0. Route summarization combines multiple networks into one route.",
            visual: `<svg viewBox="0 0 400 200">
                <title>CIDR Notation and Route Summarization</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b"/>
                
                <text x="200" y="50" text-anchor="middle" font-size="14" fill="#f8fafc" font-weight="bold">CIDR Examples</text>
                
                <rect x="40" y="70" width="150" height="25" rx="3" fill="#4f46e5"/>
                <text x="115" y="87" text-anchor="middle" font-size="12" fill="white">/24 = 255.255.255.0</text>
                
                <rect x="210" y="70" width="150" height="25" rx="3" fill="#4f46e5"/>
                <text x="285" y="87" text-anchor="middle" font-size="12" fill="white">/25 = 255.255.255.128</text>
                
                <text x="200" y="120" text-anchor="middle" font-size="12" fill="#f59e0b">Route Summarization</text>
                
                <rect x="60" y="135" width="120" height="20" rx="2" fill="#166534"/>
                <text x="120" y="148" text-anchor="middle" font-size="10" fill="white">192.168.1.0/24</text>
                
                <rect x="220" y="135" width="120" height="20" rx="2" fill="#166534"/>
                <text x="280" y="148" text-anchor="middle" font-size="10" fill="white">192.168.2.0/24</text>
                
                <path d="M 120 155 Q 200 175 280 155" stroke="#f59e0b" stroke-width="2" fill="none"/>
                <text x="200" y="170" text-anchor="middle" font-size="10" fill="#f59e0b">Summarized: 192.168.0.0/22</text>
            </svg>`
        },
        {
            title: "IPv4 Address Classes", 
            icon: "fa-layer-group",
            description: "Class A: 1-126 (8-bit network). Class B: 128-191 (16-bit network). Class C: 192-223 (24-bit network). Determines default subnet masks.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv4 Address Classes</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b"/>
                
                <text x="200" y="50" text-anchor="middle" font-size="14" fill="#f8fafc" font-weight="bold">IPv4 Address Classes</text>
                
                <rect x="40" y="70" width="100" height="60" rx="3" fill="#dc2626"/>
                <text x="90" y="85" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Class A</text>
                <text x="90" y="100" text-anchor="middle" font-size="10" fill="#fca5a5">1.0.0.0 - 126.0.0.0</text>
                <text x="90" y="115" text-anchor="middle" font-size="10" fill="#fca5a5">/8 (255.0.0.0)</text>
                
                <rect x="150" y="70" width="100" height="60" rx="3" fill="#2563eb"/>
                <text x="200" y="85" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Class B</text>
                <text x="200" y="100" text-anchor="middle" font-size="10" fill="#93c5fd">128.0.0.0 - 191.255.0.0</text>
                <text x="200" y="115" text-anchor="middle" font-size="10" fill="#93c5fd">/16 (255.255.0.0)</text>
                
                <rect x="260" y="70" width="100" height="60" rx="3" fill="#16a34a"/>
                <text x="310" y="85" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Class C</text>
                <text x="310" y="100" text-anchor="middle" font-size="10" fill="#86efac">192.0.0.0 - 223.255.255.0</text>
                <text x="310" y="115" text-anchor="middle" font-size="10" fill="#86efac">/24 (255.255.255.0)</text>
                
                <text x="200" y="155" text-anchor="middle" font-size="12" fill="#94a3b8">Class D (224-239): Multicast | Class E (240-255): Reserved</text>
            </svg>`
        },
        {
            title: "Subnet Calculations", 
            icon: "fa-calculator",
            description: "Calculate network, broadcast, and valid host ranges. Use binary or decimal methods. Powers of 2 determine host counts and subnet boundaries.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Subnet Calculation Example</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                
                <text x="200" y="40" text-anchor="middle" font-size="14" fill="#f8fafc" font-weight="bold">192.168.1.64/26 Calculation</text>
                
                <rect x="30" y="60" width="340" height="25" rx="3" fill="#374151"/>
                <text x="200" y="77" text-anchor="middle" font-size="12" fill="#e5e7eb">Network: 192.168.1.64 (first address)</text>
                
                <rect x="30" y="90" width="340" height="25" rx="3" fill="#374151"/>
                <text x="200" y="107" text-anchor="middle" font-size="12" fill="#e5e7eb">Broadcast: 192.168.1.127 (last address)</text>
                
                <rect x="30" y="120" width="340" height="25" rx="3" fill="#166534"/>
                <text x="200" y="137" text-anchor="middle" font-size="12" fill="#dcfce7">Valid Hosts: 192.168.1.65 - 192.168.1.126</text>
                
                <text x="80" y="165" font-size="10" fill="#94a3b8">/26 = 64 total IPs</text>
                <text x="200" y="165" font-size="10" fill="#94a3b8">62 usable hosts</text>
                <text x="320" y="165" font-size="10" fill="#94a3b8">2^6 = 64 subnets</text>
            </svg>`
        },
        {
            title: "IPv4 Configuration", 
            icon: "fa-terminal",
            description: "Configure IPv4 on router interfaces using 'ip address' command. Verify with 'show ip interface brief' and 'show running-config interface'.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv4 Interface Configuration</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                <rect x="20" y="20" width="360" height="25" rx="3" ry="0" fill="#475569"/>
                
                <text x="40" y="55" font-family="monospace" fill="#e2e8f0" font-size="10">Router(config)# interface gigabitethernet0/1</text>
                <text x="40" y="75" font-family="monospace" fill="#4ade80" font-size="10">Router(config-if)# ip address 192.168.1.1 255.255.255.0</text>
                <text x="40" y="95" font-family="monospace" fill="#3b82f6" font-size="10">Router(config-if)# no shutdown</text>
                <text x="40" y="115" font-family="monospace" fill="#e2e8f0" font-size="10">Router(config-if)# exit</text>
                
                <line x1="30" y1="130" x2="370" y2="130" stroke="#475569" stroke-width="1"/>
                
                <text x="40" y="150" font-family="monospace" fill="#f59e0b" font-size="10">Router# show ip interface brief</text>
                <text x="40" y="170" font-family="monospace" fill="#e2e8f0" font-size="10">Gi0/1    192.168.1.1    YES manual up    up</text>
            </svg>`
        },
    ],

    // PRIVATEIPV4
    privateIpv4: [
        {
            title: "RFC 1918 Private Ranges", 
            icon: "fa-home",
            description: "Standard private address ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Reserved for internal networks, not internet routable.",
            visual: `<svg viewBox="0 0 400 200">
                <title>RFC 1918 Private Address Ranges</title>
                <rect x="20" y="20" width="100" height="50" rx="5" fill="#14532d"/>
                <text x="70" y="40" text-anchor="middle" font-size="10" fill="#dcfce7">Class A</text>
                <text x="70" y="55" text-anchor="middle" font-size="8" fill="#dcfce7">10.0.0.0/8</text>
                
                <rect x="150" y="20" width="100" height="50" rx="5" fill="#1e3a8a"/>
                <text x="200" y="40" text-anchor="middle" font-size="10" fill="#dbeafe">Class B</text>
                <text x="200" y="55" text-anchor="middle" font-size="8" fill="#dbeafe">172.16.0.0/12</text>
                
                <rect x="280" y="20" width="100" height="50" rx="5" fill="#7c2d12"/>
                <text x="330" y="40" text-anchor="middle" font-size="10" fill="#fed7aa">Class C</text>
                <text x="330" y="55" text-anchor="middle" font-size="8" fill="#fed7aa">192.168.0.0/16</text>
                
                <text x="200" y="100" text-anchor="middle" font-size="12" fill="#e2e8f0">RFC 1918 Private Address Ranges</text>
                <text x="200" y="120" text-anchor="middle" font-size="10" fill="#94a3b8">Not routable on the public internet</text>
                
                <circle cx="200" cy="150" r="8" fill="#ef4444"/>
                <text x="200" y="170" text-anchor="middle" font-size="10" fill="#ef4444">No Internet Access</text>
            </svg>`
        },
        {
            title: "NAT Configuration", 
            icon: "fa-exchange-alt",
            description: "Network Address Translation converts private IPs to public IPs for internet access. PAT allows multiple private IPs to share one public IP.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NAT Translation Process</title>
                <rect x="20" y="60" width="120" height="80" rx="5" fill="#14532d"/>
                <text x="80" y="85" text-anchor="middle" font-size="10" fill="#dcfce7">Private Network</text>
                <text x="80" y="105" text-anchor="middle" font-size="8" fill="#dcfce7">192.168.1.0/24</text>
                <circle cx="60" cy="120" r="6" fill="#22c55e"/>
                <circle cx="100" cy="120" r="6" fill="#22c55e"/>
                
                <rect x="180" y="80" width="80" height="40" rx="2" fill="#991b1b"/>
                <text x="220" y="100" text-anchor="middle" font-size="9" fill="#fecaca">NAT Router</text>
                <text x="220" y="112" text-anchor="middle" font-size="7" fill="#fecaca">Inside/Outside</text>
                
                <path d="M 300 100 C 290 80, 350 80, 340 100 C 360 110, 330 130, 320 120 C 310 130, 280 110, 300 100 Z" fill="#4a4a0f"/>
                <text x="320" y="100" text-anchor="middle" font-size="10">Internet</text>
                <text x="320" y="115" text-anchor="middle" font-size="8">203.0.113.1</text>
                
                <line x1="140" y1="100" x2="180" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
                <line x1="260" y1="100" x2="290" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
                
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "APIPA & Troubleshooting", 
            icon: "fa-tools",
            description: "APIPA assigns 169.254.x.x when DHCP fails. Troubleshoot private networks using show commands and connectivity tests.",
            visual: `<svg viewBox="0 0 400 200">
                <title>APIPA and Network Troubleshooting</title>
                <rect x="20" y="40" width="80" height="60" rx="5" fill="#dc2626"/>
                <text x="60" y="65" text-anchor="middle" font-size="9" fill="#fecaca">DHCP Server</text>
                <text x="60" y="80" text-anchor="middle" font-size="8" fill="#fecaca">Unreachable</text>
                <line x1="50" y1="75" x2="70" y2="85" stroke="#fecaca" stroke-width="2"/>
                <line x1="70" y1="75" x2="50" y2="85" stroke="#fecaca" stroke-width="2"/>
                
                <rect x="160" y="40" width="80" height="60" rx="5" fill="#f59e0b"/>
                <text x="200" y="60" text-anchor="middle" font-size="9" fill="#fffbeb">Client PC</text>
                <text x="200" y="75" text-anchor="middle" font-size="8" fill="#fffbeb">APIPA Mode</text>
                <text x="200" y="90" text-anchor="middle" font-size="7" fill="#fffbeb">169.254.x.x</text>
                
                <rect x="300" y="60" width="80" height="40" rx="3" fill="#64748b"/>
                <text x="340" y="78" text-anchor="middle" font-size="8" fill="#f1f5f9">Debug Tools</text>
                <text x="340" y="88" text-anchor="middle" font-size="7" fill="#f1f5f9">ping, ipconfig</text>
                
                <line x1="100" y1="70" x2="140" y2="70" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
                <text x="120" y="65" text-anchor="middle" font-size="7" fill="#ef4444">Failed</text>
                
                <line x1="240" y1="80" x2="300" y2="80" stroke="#22c55e" stroke-width="2"/>
                <text x="270" y="75" text-anchor="middle" font-size="7" fill="#22c55e">Diagnose</text>
            </svg>`
        },
    ],

    // IPV6
    ipv6: [
        {
            title: "IPv6 Addressing", 
            icon: "fa-hashtag",
            description: "IPv6: 128-bit address in hexadecimal with colons (2001:db8:85a3::8a2e:370:7334). Prefix identifies network, typically /64 for LANs.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Address and Prefix</title>
                <text x="200" y="95" text-anchor="middle" font-size="11" font-family="monospace" fill="#f8fafc">2001:0db8:85a3:0000:0000:8a2e:0370:7334</text>
                
                <rect x="22" y="85" width="184" height="20" fill="rgba(96, 165, 250, 0.2)" rx="2"/>
                <text x="114" y="75" text-anchor="middle" font-size="12">Prefix (/48)</text>
                
                <rect x="207" y="85" width="170" height="20" fill="rgba(244, 114, 182, 0.2)" rx="2"/>
                <text x="292" y="75" text-anchor="middle" font-size="12">Interface ID</text>
            </svg>`
        },
        {
            title: "IPv6 Shortening Rules", 
            icon: "fa-compress-arrows-alt",
            description: "Two rules simplify IPv6 addresses: Remove leading zeros from each group, and use :: once to replace consecutive zero groups.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Address Shortening</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b"/>
                
                <text x="200" y="50" text-anchor="middle" font-size="12" fill="#f8fafc" font-weight="bold">IPv6 Shortening Rules</text>
                
                <text x="40" y="75" font-size="10" fill="#94a3b8">Full Address:</text>
                <text x="40" y="90" font-family="monospace" font-size="10" fill="#e2e8f0">2001:0db8:0000:0000:0000:ff00:0042:8329</text>
                
                <text x="40" y="110" font-size="10" fill="#94a3b8">Remove Leading Zeros:</text>
                <text x="40" y="125" font-family="monospace" font-size="10" fill="#fbbf24">2001:db8:0:0:0:ff00:42:8329</text>
                
                <text x="40" y="145" font-size="10" fill="#94a3b8">Compress Zeros (::):</text>
                <text x="40" y="160" font-family="monospace" font-size="10" fill="#16a34a">2001:db8::ff00:42:8329</text>
            </svg>`
        },
        {
            title: "IPv6 Configuration", 
            icon: "fa-terminal",
            description: "Configure IPv6 on router interfaces using ipv6 address command. Enable IPv6 routing globally with ipv6 unicast-routing.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Interface Configuration</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                <rect x="20" y="20" width="360" height="25" rx="3" ry="0" fill="#475569"/>
                
                <text x="40" y="55" font-family="monospace" fill="#e2e8f0" font-size="10">Router(config)# ipv6 unicast-routing</text>
                <text x="40" y="75" font-family="monospace" fill="#e2e8f0" font-size="10">Router(config)# interface gigabitethernet0/1</text>
                <text x="40" y="95" font-family="monospace" fill="#4ade80" font-size="10">Router(config-if)# ipv6 address 2001:db8:acad:1::1/64</text>
                <text x="40" y="115" font-family="monospace" fill="#3b82f6" font-size="10">Router(config-if)# ipv6 enable</text>
                <text x="40" y="135" font-family="monospace" fill="#e2e8f0" font-size="10">Router(config-if)# no shutdown</text>
                
                <line x1="30" y1="150" x2="370" y2="150" stroke="#475569" stroke-width="1"/>
                
                <text x="40" y="170" font-family="monospace" fill="#f59e0b" font-size="10">Router# show ipv6 interface brief</text>
            </svg>`
        },
        {
            title: "SLAAC Configuration", 
            icon: "fa-magic-wand-sparkles",
            description: "Stateless Address Autoconfiguration allows devices to automatically configure IPv6 addresses using router advertisements and prefix information.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SLAAC Process</title>
                <rect x="50" y="50" width="80" height="100" rx="5" fill="#374151"/>
                <text x="90" y="105" text-anchor="middle" font-size="12" fill="white">Router</text>
                
                <rect x="270" y="50" width="80" height="100" rx="5" fill="#374151"/>
                <text x="310" y="105" text-anchor="middle" font-size="12" fill="white">Client</text>
                
                <path d="M130 80 Q 200 60 270 80" stroke="#3b82f6" stroke-width="2" fill="none"/>
                <text x="200" y="65" text-anchor="middle" font-size="10" fill="#3b82f6">Router Advertisement</text>
                <text x="200" y="75" text-anchor="middle" font-size="8" fill="#93c5fd">Prefix: 2001:db8:1::/64</text>
                
                <path d="M270 120 Q 200 140 130 120" stroke="#16a34a" stroke-width="2" fill="none"/>
                <text x="200" y="135" text-anchor="middle" font-size="10" fill="#16a34a">Auto-configured Address</text>
                <text x="200" y="145" text-anchor="middle" font-size="8" fill="#86efac">2001:db8:1::interface-id</text>
            </svg>`
        },
        {
            title: "IPv6 Verification", 
            icon: "fa-magnifying-glass",
            description: "Verify IPv6 configuration using show ipv6 interface, ping ipv6, and traceroute commands to test connectivity and troubleshoot issues.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Verification Commands</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                
                <text x="40" y="45" font-family="monospace" fill="#f59e0b" font-size="10">Router# show ipv6 interface brief</text>
                <text x="40" y="60" font-family="monospace" fill="#e2e8f0" font-size="10">Gi0/1    [up/up]</text>
                <text x="40" y="75" font-family="monospace" fill="#e2e8f0" font-size="10">    FE80::1</text>
                <text x="40" y="90" font-family="monospace" fill="#e2e8f0" font-size="10">    2001:DB8:ACAD:1::1</text>
                
                <line x1="30" y1="105" x2="370" y2="105" stroke="#475569" stroke-width="1"/>
                
                <text x="40" y="125" font-family="monospace" fill="#3b82f6" font-size="10">Router# ping ipv6 2001:db8:acad:2::1</text>
                <text x="40" y="140" font-family="monospace" fill="#16a34a" font-size="10">Success rate is 100 percent (5/5)</text>
                
                <line x1="30" y1="155" x2="370" y2="155" stroke="#475569" stroke-width="1"/>
                
                <text x="40" y="175" font-family="monospace" fill="#8b5cf6" font-size="10">Router# show ipv6 route</text>
            </svg>`
        },
    ],

    // IPV6TYPES
    ipv6Types: [
        {
            title: "Unicast Addresses", 
            icon: "fa-arrow-right",
            description: "One-to-one communication. Global Unicast (internet routable), Unique Local (private), Link-Local (local segment only).",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Unicast Address Types</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b"/>
                
                <text x="200" y="50" text-anchor="middle" font-size="14" fill="#f8fafc" font-weight="bold">IPv6 Unicast Address Types</text>
                
                <rect x="40" y="70" width="100" height="80" rx="3" fill="#166534"/>
                <text x="90" y="85" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Global</text>
                <text x="90" y="100" text-anchor="middle" font-size="10" fill="#dcfce7">2000::/3</text>
                <text x="90" y="115" text-anchor="middle" font-size="10" fill="#bbf7d0">Internet</text>
                <text x="90" y="130" text-anchor="middle" font-size="10" fill="#bbf7d0">Routable</text>
                
                <rect x="150" y="70" width="100" height="80" rx="3" fill="#be185d"/>
                <text x="200" y="85" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Unique Local</text>
                <text x="200" y="100" text-anchor="middle" font-size="10" fill="#fce7f3">FC00::/7</text>
                <text x="200" y="115" text-anchor="middle" font-size="10" fill="#fbcfe8">Private</text>
                <text x="200" y="130" text-anchor="middle" font-size="10" fill="#fbcfe8">Network</text>
                
                <rect x="260" y="70" width="100" height="80" rx="3" fill="#1d4ed8"/>
                <text x="310" y="85" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Link-Local</text>
                <text x="310" y="100" text-anchor="middle" font-size="10" fill="#dbeafe">FE80::/10</text>
                <text x="310" y="115" text-anchor="middle" font-size="10" fill="#bfdbfe">Local</text>
                <text x="310" y="130" text-anchor="middle" font-size="10" fill="#bfdbfe">Segment</text>
            </svg>`
        },
        {
            title: "Multicast Addresses", 
            icon: "fa-broadcast-tower",
            description: "One-to-many communication using FF00::/8 range. Well-known addresses: FF02::1 (all nodes), FF02::2 (all routers).",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Multicast Communication</title>
                <defs>
                    <marker id="arrow-multi" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
                    </marker>
                </defs>
                
                <circle cx="80" cy="100" r="15" fill="#dc2626"/>
                <text x="80" y="105" text-anchor="middle" font-size="12" fill="white">Source</text>
                
                <circle cx="250" cy="60" r="12" fill="#475569"/>
                <text x="250" y="45" text-anchor="middle" font-size="10">Node 1</text>
                
                <circle cx="320" cy="100" r="12" fill="#475569"/>
                <text x="320" y="125" text-anchor="middle" font-size="10">Node 2</text>
                
                <circle cx="250" cy="140" r="12" fill="#475569"/>
                <text x="250" y="160" text-anchor="middle" font-size="10">Node 3</text>
                
                <path d="M95 95 L 238 65" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-multi)"/>
                <path d="M95 100 L 308 100" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-multi)"/>
                <path d="M95 105 L 238 135" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-multi)"/>
                
                <text x="200" y="30" text-anchor="middle" font-size="12" fill="#f59e0b">FF02::1 (All Nodes)</text>
            </svg>`
        },
        {
            title: "Anycast Addresses", 
            icon: "fa-location-crosshairs",
            description: "One-to-nearest communication. Same address assigned to multiple devices, packets routed to closest instance.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Anycast Communication</title>
                <defs>
                    <marker id="arrow-any" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6"/>
                    </marker>
                </defs>
                
                <circle cx="80" cy="100" r="15" fill="#dc2626"/>
                <text x="80" y="105" text-anchor="middle" font-size="12" fill="white">Client</text>
                
                <circle cx="250" cy="80" r="12" fill="#16a34a"/>
                <text x="250" y="65" text-anchor="middle" font-size="10">Server A</text>
                <text x="250" y="100" text-anchor="middle" font-size="8" fill="#16a34a">CLOSEST</text>
                
                <circle cx="320" cy="120" r="12" fill="#475569"/>
                <text x="320" y="140" text-anchor="middle" font-size="10">Server B</text>
                <text x="320" y="155" text-anchor="middle" font-size="8" fill="#6b7280">FARTHER</text>
                
                <path d="M95 95 L 238 85" stroke="#8b5cf6" stroke-width="3" marker-end="url(#arrow-any)"/>
                <path d="M95 100 L 308 115" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
                
                <text x="200" y="30" text-anchor="middle" font-size="12" fill="#8b5cf6">Same Anycast Address</text>
                <text x="200" y="45" text-anchor="middle" font-size="10" fill="#a855f7">Routed to Nearest</text>
            </svg>`
        },
        {
            title: "Special Addresses", 
            icon: "fa-star",
            description: "Reserved IPv6 addresses: ::1 (loopback), :: (unspecified), ::ffff:0:0/96 (IPv4-mapped), 2002::/16 (6to4).",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Special Addresses</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                
                <rect x="40" y="40" width="150" height="30" rx="3" fill="#dc2626"/>
                <text x="115" y="60" text-anchor="middle" font-size="12" fill="white">::1 - Loopback</text>
                
                <rect x="210" y="40" width="150" height="30" rx="3" fill="#7c3aed"/>
                <text x="285" y="60" text-anchor="middle" font-size="12" fill="white">:: - Unspecified</text>
                
                <rect x="40" y="90" width="150" height="30" rx="3" fill="#059669"/>
                <text x="115" y="110" text-anchor="middle" font-size="12" fill="white">::ffff:0:0/96</text>
                
                <rect x="210" y="90" width="150" height="30" rx="3" fill="#ea580c"/>
                <text x="285" y="110" text-anchor="middle" font-size="12" fill="white">2002::/16 - 6to4</text>
                
                <text x="115" y="140" text-anchor="middle" font-size="10" fill="#6b7280">IPv4-mapped</text>
                <text x="285" y="140" text-anchor="middle" font-size="10" fill="#6b7280">Tunnel mechanism</text>
                
                <text x="200" y="165" text-anchor="middle" font-size="12" fill="#94a3b8">Well-known IPv6 Special Addresses</text>
            </svg>`
        },
        {
            title: "Modified EUI-64", 
            icon: "fa-gears",
            description: "Auto-generates Interface ID from MAC address. MAC is split, FFFE inserted in middle, 7th bit of first byte inverted (0→1).",
            visual: `<svg viewBox="0 0 400 200">
                <title>EUI-64 Process</title>
                <text y="30" x="200" text-anchor="middle" font-family="monospace" font-size="12">MAC: 001A:2B3C:4D5E</text>
                <text y="60" x="200" text-anchor="middle" font-size="12">Split and insert FFFE:</text>
                <text y="80" x="200" text-anchor="middle" font-family="monospace" font-size="12">001A:2B<tspan fill="#facc15">FF:FE</tspan>3C:4D5E</text>
                <text y="110" x="200" text-anchor="middle" font-size="12">Invert 7th Bit (000000<tspan fill="#facc15">0</tspan>0 -> 000000<tspan fill="#facc15">1</tspan>0)</text>
                <text y="130" x="200" text-anchor="middle" font-family="monospace" font-size="12" fill="#4ade80"><tspan text-decoration="line-through">00</tspan>1A...  ->  021A...</text>
                <text y="160" x="200" text-anchor="middle" font-weight="bold" font-family="monospace" font-size="12">EUI-64: 021A:2BFF:FE3C:4D5E</text>
            </svg>`
        },
        {
            title: "ICMPv6 Messages", 
            icon: "fa-comments",
            description: "Internet Control Message Protocol v6 provides essential IPv6 functions: Router Solicitation/Advertisement and Neighbor Solicitation/Advertisement for address resolution.",
            visual: `<svg viewBox="0 0 400 200">
                <title>ICMPv6 Neighbor Discovery Messages</title>
                <rect x="20" y="20" width="360" height="160" fill="#0f172a" rx="5"/>
                <text x="200" y="40" text-anchor="middle" font-size="14" fill="#e2e8f0" font-weight="bold">ICMPv6 Neighbor Discovery</text>
                
                <!-- Router and Host -->
                <rect x="50" y="60" width="80" height="40" fill="#166534" rx="5"/>
                <text x="90" y="85" text-anchor="middle" font-size="12" fill="white">Router</text>
                
                <rect x="270" y="60" width="80" height="40" fill="#1e40af" rx="5"/>
                <text x="310" y="85" text-anchor="middle" font-size="12" fill="white">Host</text>
                
                <!-- Message Arrows -->
                <defs>
                    <marker id="arrow-icmp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
                    </marker>
                    <marker id="arrow-icmp-rev" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 10 0 L 0 5 L 10 10 z" fill="#22c55e"/>
                    </marker>
                </defs>
                
                <!-- Router Solicitation -->
                <path d="M270 115 L130 115" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-icmp-rev)"/>
                <text x="200" y="110" text-anchor="middle" font-size="10" fill="#f59e0b">Router Solicitation (RS)</text>
                <text x="200" y="123" text-anchor="middle" font-size="8" fill="#fbbf24">Type 133 - "Where are routers?"</text>
                
                <!-- Router Advertisement -->
                <path d="M130 135 L270 135" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-icmp)"/>
                <text x="200" y="130" text-anchor="middle" font-size="10" fill="#22c55e">Router Advertisement (RA)</text>
                <text x="200" y="143" text-anchor="middle" font-size="8" fill="#86efac">Type 134 - "I'm here, prefix info"</text>
                
                <!-- Neighbor Solicitation -->
                <path d="M270 155 L130 155" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow-icmp-rev)"/>
                <text x="200" y="150" text-anchor="middle" font-size="10" fill="#8b5cf6">Neighbor Solicitation (NS)</text>
                <text x="200" y="163" text-anchor="middle" font-size="8" fill="#c4b5fd">Type 135 - "What's your MAC?"</text>
                
                <!-- Neighbor Advertisement -->
                <path d="M130 175 L270 175" stroke="#ec4899" stroke-width="2" marker-end="url(#arrow-icmp)"/>
                <text x="200" y="170" text-anchor="middle" font-size="10" fill="#ec4899">Neighbor Advertisement (NA)</text>
                <text x="200" y="183" text-anchor="middle" font-size="8" fill="#f9a8d4">Type 136 - "Here's my MAC"</text>
            </svg>`
        },
    ],

    // CLIENTOS
    clientOs: [
        {
            title: "Windows Client Verification", 
            icon: "fa-desktop",
            description: "Advanced Windows IP verification using ipconfig commands, GUI tools, and PowerShell. Includes DHCP lease info, adapter details, and network troubleshooting.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Windows Network Settings</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                <rect x="20" y="20" width="360" height="25" rx="3" ry="0" fill="#0078d4"/>
                <circle cx="35" cy="32.5" r="6" fill="#ef4444"/>
                <circle cx="55" cy="32.5" r="6" fill="#fbbd23"/>
                <circle cx="75" cy="32.5" r="6" fill="#4ade80"/>
                <text x="35" y="60" font-family="monospace" fill="#e2e8f0" font-size="9">C:\\> ipconfig /all</text>
                <text x="35" y="80" font-family="monospace" fill="white" font-size="9">Ethernet adapter Local Area Connection:</text>
                <text x="45" y="95" font-family="monospace" fill="#60a5fa" font-size="8">IPv4 Address. . . . . . . . . . . : 192.168.1.100</text>
                <text x="45" y="110" font-family="monospace" fill="#60a5fa" font-size="8">Subnet Mask . . . . . . . . . . . : 255.255.255.0</text>
                <text x="45" y="125" font-family="monospace" fill="#60a5fa" font-size="8">Default Gateway . . . . . . . . . : 192.168.1.1</text>
                <text x="45" y="140" font-family="monospace" fill="#60a5fa" font-size="8">DHCP Enabled. . . . . . . . . . . : Yes</text>
                <text x="45" y="155" font-family="monospace" fill="#60a5fa" font-size="8">DNS Servers . . . . . . . . . . . : 8.8.8.8</text>
            </svg>`
        },
        {
            title: "macOS Client Verification", 
            icon: "fa-laptop",
            description: "macOS-specific IP verification using networksetup, scutil, and System Preferences. Native Apple tools for network configuration and diagnostics.",
            visual: `<svg viewBox="0 0 400 200">
                <title>macOS Network System Preferences</title>
                <rect x="20" y="20" width="360" height="160" rx="10" fill="#f5f5f7"/>
                <rect x="20" y="20" width="360" height="30" rx="10" ry="0" fill="#007aff"/>
                <circle cx="35" cy="35" r="5" fill="#ff5f56"/>
                <circle cx="50" cy="35" r="5" fill="#ffbd2e"/>
                <circle cx="65" cy="35" r="5" fill="#27ca3f"/>
                <text x="200" y="40" text-anchor="middle" font-size="12" fill="white">Network Preferences</text>
                <rect x="30" y="60" width="100" height="110" fill="#e5e5e7" rx="5"/>
                <text x="80" y="75" text-anchor="middle" font-size="9" fill="#333">Wi-Fi</text>
                <text x="80" y="90" text-anchor="middle" font-size="9" fill="#333">Ethernet</text>
                <text x="80" y="105" text-anchor="middle" font-size="9" fill="#007aff">Bluetooth PAN</text>
                <rect x="140" y="60" width="240" height="110" fill="white" rx="5"/>
                <text x="150" y="80" font-size="10" fill="#333">Connected to: MyNetwork</text>
                <text x="150" y="100" font-size="9" fill="#666">IP Address: 192.168.1.100</text>
                <text x="150" y="115" font-size="9" fill="#666">Subnet Mask: 255.255.255.0</text>
                <text x="150" y="130" font-size="9" fill="#666">Router: 192.168.1.1</text>
                <text x="150" y="145" font-size="9" fill="#666">DNS Server: 8.8.8.8</text>
            </svg>`
        },
        {
            title: "Linux Client Verification", 
            icon: "fa-terminal",
            description: "Linux network verification using ip commands, nmcli, and distribution-specific tools. Modern iproute2 utilities and legacy ifconfig support.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Linux Terminal Network Commands</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#0d1117"/>
                <rect x="20" y="20" width="360" height="25" rx="3" ry="0" fill="#21262d"/>
                <circle cx="35" cy="32.5" r="6" fill="#f85149"/>
                <circle cx="55" cy="32.5" r="6" fill="#f0883e"/>
                <circle cx="75" cy="32.5" r="6" fill="#56d364"/>
                <text x="35" y="60" font-family="monospace" fill="#7ce38b" font-size="9">user@linux:~$ ip addr show</text>
                <text x="35" y="80" font-family="monospace" fill="#e6edf3" font-size="9">1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536</text>
                <text x="45" y="95" font-family="monospace" fill="#79c0ff" font-size="8">inet 127.0.0.1/8 scope host lo</text>
                <text x="35" y="110" font-family="monospace" fill="#e6edf3" font-size="9">2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt;</text>
                <text x="45" y="125" font-family="monospace" fill="#79c0ff" font-size="8">inet 192.168.1.100/24 brd 192.168.1.255</text>
                <text x="45" y="140" font-family="monospace" fill="#79c0ff" font-size="8">scope global dynamic eth0</text>
                <text x="35" y="160" font-family="monospace" fill="#7ce38b" font-size="9">user@linux:~$ _</text>
            </svg>`
        },
        {
            title: "Client Network Troubleshooting", 
            icon: "fa-stethoscope",
            description: "Systematic client-side network troubleshooting methodology. Layer-by-layer approach from physical connectivity to application layer issues.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Network Troubleshooting Layers</title>
                <rect x="50" y="30" width="300" height="140" rx="5" fill="none" stroke="#64748b" stroke-width="2"/>
                <rect x="60" y="40" width="280" height="20" fill="#ef4444"/>
                <text x="200" y="53" text-anchor="middle" font-size="10" fill="white">7. Application (DNS, HTTP)</text>
                <rect x="60" y="65" width="280" height="15" fill="#f97316"/>
                <text x="200" y="75" text-anchor="middle" font-size="9" fill="white">4. Transport (Port connectivity)</text>
                <rect x="60" y="85" width="280" height="15" fill="#eab308"/>
                <text x="200" y="95" text-anchor="middle" font-size="9" fill="white">3. Network (IP, ping, traceroute)</text>
                <rect x="60" y="105" width="280" height="15" fill="#22c55e"/>
                <text x="200" y="115" text-anchor="middle" font-size="9" fill="white">2. Data Link (ARP, switch connectivity)</text>
                <rect x="60" y="125" width="280" height="15" fill="#3b82f6"/>
                <text x="200" y="135" text-anchor="middle" font-size="9" fill="white">1. Physical (Cable, link lights)</text>
                <path d="M 370 50 L 385 50 L 385 140 L 370 140" stroke="#10b981" stroke-width="3" fill="none"/>
                <text x="380" y="180" text-anchor="middle" font-size="8" fill="#10b981">Bottom-Up</text>
            </svg>`
        },
    ],

    // WIRELESS
    wireless: [
        {
            title: "Wi-Fi Standards & Evolution", 
            icon: "fa-wifi",
            description: "Evolution of Wi-Fi standards from 802.11 to Wi-Fi 6E. Each generation brings faster speeds, better efficiency, and new frequency bands.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Wi-Fi Standards Evolution</title>
                <rect x="20" y="40" width="360" height="120" fill="none" stroke="#64748b" stroke-width="2" rx="5"/>
                <text x="200" y="30" text-anchor="middle" font-size="14" fill="#e2e8f0">Wi-Fi Standards Timeline</text>
                
                <rect x="30" y="50" width="50" height="25" fill="#ef4444" rx="3"/>
                <text x="55" y="67" text-anchor="middle" font-size="9" fill="white">802.11b</text>
                <text x="55" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">11 Mbps</text>
                <text x="55" y="95" text-anchor="middle" font-size="8" fill="#94a3b8">2.4 GHz</text>
                
                <rect x="90" y="50" width="50" height="25" fill="#f97316" rx="3"/>
                <text x="115" y="67" text-anchor="middle" font-size="9" fill="white">802.11a/g</text>
                <text x="115" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">54 Mbps</text>
                <text x="115" y="95" text-anchor="middle" font-size="8" fill="#94a3b8">2.4/5 GHz</text>
                
                <rect x="150" y="50" width="50" height="25" fill="#eab308" rx="3"/>
                <text x="175" y="67" text-anchor="middle" font-size="9" fill="white">802.11n</text>
                <text x="175" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">600 Mbps</text>
                <text x="175" y="95" text-anchor="middle" font-size="8" fill="#94a3b8">MIMO</text>
                
                <rect x="210" y="50" width="50" height="25" fill="#22c55e" rx="3"/>
                <text x="235" y="67" text-anchor="middle" font-size="9" fill="white">802.11ac</text>
                <text x="235" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">6.9 Gbps</text>
                <text x="235" y="95" text-anchor="middle" font-size="8" fill="#94a3b8">5 GHz</text>
                
                <rect x="270" y="50" width="50" height="25" fill="#3b82f6" rx="3"/>
                <text x="295" y="67" text-anchor="middle" font-size="9" fill="white">802.11ax</text>
                <text x="295" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">9.6 Gbps</text>
                <text x="295" y="95" text-anchor="middle" font-size="8" fill="#94a3b8">Wi-Fi 6</text>
                
                <rect x="330" y="50" width="40" height="25" fill="#8b5cf6" rx="3"/>
                <text x="350" y="67" text-anchor="middle" font-size="9" fill="white">6E</text>
                <text x="350" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">6 GHz</text>
                
                <path d="M 30 110 L 370 110" stroke="#16a34a" stroke-width="3" marker-end="url(#arrowhead)"/>
                <text x="200" y="130" text-anchor="middle" font-size="10" fill="#16a34a">Increasing Speed & Efficiency</text>
                <text x="200" y="145" text-anchor="middle" font-size="9" fill="#94a3b8">Better range, lower latency, more devices</text>
                
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Wi-Fi Channels & Frequencies", 
            icon: "fa-tower-broadcast",
            description: "Wi-Fi operates on specific channels within frequency bands. Understanding channel planning prevents interference and optimizes performance.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Wi-Fi Frequency Bands and Channels</title>
                <rect x="20" y="30" width="360" height="50" fill="#1e293b" rx="5"/>
                <text x="200" y="50" text-anchor="middle" font-size="12" fill="#e2e8f0">2.4 GHz Band (11 channels, 3 non-overlapping)</text>
                
                <rect x="30" y="90" width="40" height="20" fill="#3b82f6" rx="2"/>
                <text x="50" y="103" text-anchor="middle" font-size="10" fill="white">Ch 1</text>
                <text x="50" y="120" text-anchor="middle" font-size="8" fill="#94a3b8">2412 MHz</text>
                
                <rect x="130" y="90" width="40" height="20" fill="#10b981" rx="2"/>
                <text x="150" y="103" text-anchor="middle" font-size="10" fill="white">Ch 6</text>
                <text x="150" y="120" text-anchor="middle" font-size="8" fill="#94a3b8">2437 MHz</text>
                
                <rect x="230" y="90" width="40" height="20" fill="#f97316" rx="2"/>
                <text x="250" y="103" text-anchor="middle" font-size="10" fill="white">Ch 11</text>
                <text x="250" y="120" text-anchor="middle" font-size="8" fill="#94a3b8">2462 MHz</text>
                
                <path d="M80 100 Q 115 80 130 100" stroke="#ef4444" stroke-width="2" fill="none" stroke-dasharray="3"/>
                <text x="105" y="75" text-anchor="middle" font-size="8" fill="#ef4444">Overlap</text>
                
                <rect x="300" y="85" width="80" height="30" fill="#374151" rx="3"/>
                <text x="340" y="100" text-anchor="middle" font-size="9" fill="#e2e8f0">Non-overlapping:</text>
                <text x="340" y="112" text-anchor="middle" font-size="9" fill="#4ade80">1, 6, 11 only</text>
                
                <rect x="20" y="140" width="360" height="40" fill="#0f172a" rx="5"/>
                <text x="200" y="155" text-anchor="middle" font-size="12" fill="#e2e8f0">5 GHz Band (Many non-overlapping channels)</text>
                <text x="200" y="170" text-anchor="middle" font-size="10" fill="#94a3b8">Less congested, higher speeds, shorter range</text>
            </svg>`
        },
        {
            title: "RF Fundamentals & Signal Metrics", 
            icon: "fa-signal",
            description: "Radio Frequency principles: signal strength (RSSI), signal-to-noise ratio (SNR), and factors affecting wireless propagation and performance.",
            visual: `<svg viewBox="0 0 400 200">
                <title>RF Signal Metrics</title>
                <circle cx="80" cy="100" r="20" fill="#3b82f6"/>
                <text x="80" y="105" text-anchor="middle" font-size="12" fill="white">AP</text>
                
                <circle cx="80" cy="100" r="40" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
                <circle cx="80" cy="100" r="60" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.4"/>
                <circle cx="80" cy="100" r="80" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.2"/>
                
                <rect x="170" y="30" width="200" height="140" fill="#1e293b" rx="5"/>
                <text x="270" y="50" text-anchor="middle" font-size="12" fill="#e2e8f0">Signal Quality Metrics</text>
                
                <text x="180" y="70" font-size="10" fill="#4ade80">RSSI (Received Signal Strength)</text>
                <text x="180" y="85" font-size="9" fill="#94a3b8">• -30 dBm = Excellent</text>
                <text x="180" y="95" font-size="9" fill="#94a3b8">• -50 dBm = Good</text>
                <text x="180" y="105" font-size="9" fill="#94a3b8">• -70 dBm = Fair</text>
                <text x="180" y="115" font-size="9" fill="#ef4444">• -90 dBm = Poor</text>
                
                <text x="180" y="135" font-size="10" fill="#f59e0b">SNR (Signal-to-Noise Ratio)</text>
                <text x="180" y="150" font-size="9" fill="#94a3b8">• >40 dB = Excellent</text>
                <text x="180" y="160" font-size="9" fill="#94a3b8">• >20 dB = Good for data</text>
                
                <rect x="120" y="120" width="30" height="15" fill="#22c55e" rx="2"/>
                <text x="135" y="131" text-anchor="middle" font-size="8" fill="white">Client</text>
                <text x="135" y="145" text-anchor="middle" font-size="7" fill="#94a3b8">-45 dBm</text>
                
                <path d="M100 100 L120 128" stroke="#16a34a" stroke-width="2"/>
                <text x="110" y="110" font-size="7" fill="#16a34a">Strong Signal</text>
            </svg>`
        },
        {
            title: "CSMA/CA & Wireless Media Access", 
            icon: "fa-share-nodes",
            description: "Carrier Sense Multiple Access with Collision Avoidance. Wireless devices can't detect collisions, so they avoid them using RTS/CTS and wait times.",
            visual: `<svg viewBox="0 0 400 200">
                <title>CSMA/CA Process</title>
                <rect x="20" y="20" width="360" height="160" fill="#0f172a" rx="5"/>
                <text x="200" y="40" text-anchor="middle" font-size="12" fill="#e2e8f0">CSMA/CA Process</text>
                
                <rect x="30" y="50" width="80" height="25" fill="#3b82f6" rx="3"/>
                <text x="70" y="67" text-anchor="middle" font-size="9" fill="white">1. Listen</text>
                <text x="70" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">Channel clear?</text>
                
                <rect x="120" y="50" width="80" height="25" fill="#f59e0b" rx="3"/>
                <text x="160" y="67" text-anchor="middle" font-size="9" fill="white">2. Wait (IFS)</text>
                <text x="160" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">Inter-Frame Space</text>
                
                <rect x="210" y="50" width="80" height="25" fill="#10b981" rx="3"/>
                <text x="250" y="67" text-anchor="middle" font-size="9" fill="white">3. Random Wait</text>
                <text x="250" y="85" text-anchor="middle" font-size="8" fill="#94a3b8">Contention Window</text>
                
                <rect x="300" y="50" width="70" height="25" fill="#ef4444" rx="3"/>
                <text x="335" y="67" text-anchor="middle" font-size="9" fill="white">4. Transmit</text>
                
                <path d="M 110 62 L 120 62" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 200 62 L 210 62" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M 290 62 L 300 62" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                
                <rect x="30" y="100" width="340" height="70" fill="#1e293b" rx="3"/>
                <text x="200" y="120" text-anchor="middle" font-size="11" fill="#e2e8f0">RTS/CTS for Hidden Node Problem</text>
                
                <text x="40" y="140" font-size="9" fill="#3b82f6">RTS (Request to Send)</text>
                <text x="40" y="152" font-size="8" fill="#94a3b8">"May I transmit?"</text>
                
                <text x="200" y="140" font-size="9" fill="#10b981">CTS (Clear to Send)</text>
                <text x="200" y="152" font-size="8" fill="#94a3b8">"Channel reserved"</text>
                
                <text x="300" y="140" font-size="9" fill="#f59e0b">DATA + ACK</text>
                <text x="300" y="152" font-size="8" fill="#94a3b8">"Frame + confirm"</text>
                
                <defs>
                    <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#64748b"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Wireless Security & Authentication", 
            icon: "fa-shield-halved",
            description: "SSID broadcasts network name. Security evolution: WEP (broken) → WPA/WPA2 → WPA3 (current). Enterprise vs Personal authentication methods.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Wireless Security Evolution</title>
                <rect x="20" y="20" width="360" height="160" fill="#0f172a" rx="5"/>
                <text x="200" y="40" text-anchor="middle" font-size="12" fill="#e2e8f0">Wireless Security Evolution</text>
                
                <rect x="30" y="50" width="60" height="30" fill="#ef4444" rx="3"/>
                <text x="60" y="67" text-anchor="middle" font-size="10" fill="white">WEP</text>
                <text x="60" y="90" text-anchor="middle" font-size="8" fill="#ef4444">BROKEN</text>
                <text x="60" y="100" text-anchor="middle" font-size="7" fill="#94a3b8">RC4, 40/104-bit</text>
                
                <rect x="110" y="50" width="60" height="30" fill="#f59e0b" rx="3"/>
                <text x="140" y="67" text-anchor="middle" font-size="10" fill="white">WPA</text>
                <text x="140" y="90" text-anchor="middle" font-size="8" fill="#f59e0b">WEAK</text>
                <text x="140" y="100" text-anchor="middle" font-size="7" fill="#94a3b8">TKIP, RC4</text>
                
                <rect x="190" y="50" width="60" height="30" fill="#22c55e" rx="3"/>
                <text x="220" y="67" text-anchor="middle" font-size="10" fill="white">WPA2</text>
                <text x="220" y="90" text-anchor="middle" font-size="8" fill="#22c55e">GOOD</text>
                <text x="220" y="100" text-anchor="middle" font-size="7" fill="#94a3b8">AES-CCMP</text>
                
                <rect x="270" y="50" width="60" height="30" fill="#3b82f6" rx="3"/>
                <text x="300" y="67" text-anchor="middle" font-size="10" fill="white">WPA3</text>
                <text x="300" y="90" text-anchor="middle" font-size="8" fill="#3b82f6">BEST</text>
                <text x="300" y="100" text-anchor="middle" font-size="7" fill="#94a3b8">SAE, GCMP</text>
                
                <rect x="30" y="120" width="160" height="50" fill="#1e293b" rx="3"/>
                <text x="110" y="135" text-anchor="middle" font-size="10" fill="#e2e8f0">Personal (PSK)</text>
                <text x="110" y="150" text-anchor="middle" font-size="8" fill="#94a3b8">Pre-Shared Key</text>
                <text x="110" y="160" text-anchor="middle" font-size="8" fill="#94a3b8">Same password for all</text>
                
                <rect x="210" y="120" width="160" height="50" fill="#1e293b" rx="3"/>
                <text x="290" y="135" text-anchor="middle" font-size="10" fill="#e2e8f0">Enterprise (802.1X)</text>
                <text x="290" y="150" text-anchor="middle" font-size="8" fill="#94a3b8">RADIUS Authentication</text>
                <text x="290" y="160" text-anchor="middle" font-size="8" fill="#94a3b8">Individual credentials</text>
                
                <circle cx="70" cy="60" r="25" fill="none" stroke="#10b981" stroke-width="2"/>
                <text x="70" y="10" text-anchor="middle" font-size="8" fill="#10b981">SSID: MyWiFi</text>
            </svg>`
        },
        {
            title: "Wireless Encryption Standards", 
            icon: "fa-lock",
            description: "TKIP (Temporal Key Integrity Protocol) uses RC4 with key mixing. AES (Advanced Encryption Standard) uses CCMP mode for superior security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>TKIP vs AES Encryption Comparison</title>
                <rect x="20" y="20" width="360" height="160" fill="#0f172a" rx="5"/>
                <text x="200" y="40" text-anchor="middle" font-size="14" fill="#e2e8f0">Wireless Encryption Standards</text>
                
                <!-- TKIP Section -->
                <rect x="40" y="60" width="150" height="110" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="5"/>
                <text x="115" y="80" text-anchor="middle" font-size="12" fill="#f59e0b" font-weight="bold">TKIP</text>
                <text x="115" y="95" text-anchor="middle" font-size="10" fill="#e2e8f0">Temporal Key Integrity Protocol</text>
                
                <text x="50" y="115" font-size="9" fill="#94a3b8">• RC4 Stream Cipher</text>
                <text x="50" y="125" font-size="9" fill="#94a3b8">• 128-bit Key</text>
                <text x="50" y="135" font-size="9" fill="#94a3b8">• Key Mixing Function</text>
                <text x="50" y="145" font-size="9" fill="#94a3b8">• Message Integrity Check</text>
                <text x="50" y="155" font-size="9" fill="#f59e0b">• Legacy WPA Support</text>
                
                <!-- AES Section -->
                <rect x="210" y="60" width="150" height="110" fill="#1e293b" stroke="#22c55e" stroke-width="2" rx="5"/>
                <text x="285" y="80" text-anchor="middle" font-size="12" fill="#22c55e" font-weight="bold">AES</text>
                <text x="285" y="95" text-anchor="middle" font-size="10" fill="#e2e8f0">Advanced Encryption Standard</text>
                
                <text x="220" y="115" font-size="9" fill="#94a3b8">• Block Cipher (CCMP)</text>
                <text x="220" y="125" font-size="9" fill="#94a3b8">• 128/192/256-bit Key</text>
                <text x="220" y="135" font-size="9" fill="#94a3b8">• Counter Mode</text>
                <text x="220" y="145" font-size="9" fill="#94a3b8">• CBC-MAC Authentication</text>
                <text x="220" y="155" font-size="9" fill="#22c55e">• WPA2/WPA3 Standard</text>
                
                <!-- Performance Comparison -->
                <rect x="60" y="175" width="20" height="15" fill="#f59e0b"/>
                <text x="90" y="185" font-size="8" fill="#f59e0b">TKIP: Slower, Legacy</text>
                <rect x="220" y="175" width="20" height="15" fill="#22c55e"/>
                <text x="250" y="185" font-size="8" fill="#22c55e">AES: Faster, Secure</text>
            </svg>`
        },
    ],

    // VIRTUALIZATION
    virtualization: [
        {
            title: "Virtualization Overview", 
            icon: "fa-layer-group",
            description: "Creating virtual versions of physical resources. Enables better resource utilization, isolation, and flexibility in modern computing environments.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Virtualization Concept</title>
                <rect x="40" y="140" width="320" height="40" rx="3" fill="#334155"/>
                <text x="200" y="165" text-anchor="middle" font-size="12" fill="white">Physical Hardware (CPU, RAM, Storage, Network)</text>
                
                <rect x="50" y="100" width="300" height="30" rx="3" fill="#4f46e5"/>
                <text x="200" y="120" text-anchor="middle" font-size="12" fill="white">Virtualization Layer (Hypervisor)</text>
                
                <rect x="60" y="20" width="80" height="70" rx="3" fill="#166534"/>
                <text x="100" y="35" text-anchor="middle" font-size="10" fill="#d1fae5">Virtual</text>
                <text x="100" y="50" text-anchor="middle" font-size="10" fill="#d1fae5">Machine 1</text>
                <text x="100" y="65" text-anchor="middle" font-size="9" fill="#86efac">Windows</text>
                <text x="100" y="78" text-anchor="middle" font-size="8" fill="#86efac">2 vCPU, 4GB</text>
                
                <rect x="160" y="20" width="80" height="70" rx="3" fill="#166534"/>
                <text x="200" y="35" text-anchor="middle" font-size="10" fill="#d1fae5">Virtual</text>
                <text x="200" y="50" text-anchor="middle" font-size="10" fill="#d1fae5">Machine 2</text>
                <text x="200" y="65" text-anchor="middle" font-size="9" fill="#86efac">Linux</text>
                <text x="200" y="78" text-anchor="middle" font-size="8" fill="#86efac">4 vCPU, 8GB</text>
                
                <rect x="260" y="20" width="80" height="70" rx="3" fill="#166534"/>
                <text x="300" y="35" text-anchor="middle" font-size="10" fill="#d1fae5">Virtual</text>
                <text x="300" y="50" text-anchor="middle" font-size="10" fill="#d1fae5">Machine 3</text>
                <text x="300" y="65" text-anchor="middle" font-size="9" fill="#86efac">Router OS</text>
                <text x="300" y="78" text-anchor="middle" font-size="8" fill="#86efac">1 vCPU, 2GB</text>
                
                <path d="M 100 90 L 100 100" stroke="#64748b" stroke-width="2"/>
                <path d="M 200 90 L 200 100" stroke="#64748b" stroke-width="2"/>
                <path d="M 300 90 L 300 100" stroke="#64748b" stroke-width="2"/>
                
                <text x="380" y="55" text-anchor="middle" font-size="8" fill="#3b82f6" transform="rotate(90, 380, 55)">Resource Sharing</text>
            </svg>`
        },
        {
            title: "Hypervisors & Virtual Machines", 
            icon: "fa-server",
            description: "Type 1 (bare-metal) and Type 2 (hosted) hypervisors manage virtual machines. Each VM runs its own OS with allocated virtual resources.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Hypervisor Types</title>
                <rect x="20" y="20" width="170" height="160" fill="#0f172a" rx="5"/>
                <text x="105" y="40" text-anchor="middle" font-size="12" fill="#e2e8f0">Type 1 (Bare-Metal)</text>
                
                <rect x="30" y="50" width="50" height="20" fill="#22c55e" rx="2"/>
                <text x="55" y="63" text-anchor="middle" font-size="8" fill="white">VM1</text>
                
                <rect x="90" y="50" width="50" height="20" fill="#22c55e" rx="2"/>
                <text x="115" y="63" text-anchor="middle" font-size="8" fill="white">VM2</text>
                
                <rect x="150" y="50" width="30" height="20" fill="#22c55e" rx="2"/>
                <text x="165" y="63" text-anchor="middle" font-size="8" fill="white">VM3</text>
                
                <rect x="30" y="80" width="150" height="25" fill="#3b82f6" rx="2"/>
                <text x="105" y="97" text-anchor="middle" font-size="10" fill="white">Hypervisor (ESXi, Hyper-V)</text>
                
                <rect x="30" y="115" width="150" height="25" fill="#374151" rx="2"/>
                <text x="105" y="132" text-anchor="middle" font-size="10" fill="white">Physical Hardware</text>
                
                <text x="105" y="155" text-anchor="middle" font-size="9" fill="#4ade80">Direct hardware access</text>
                <text x="105" y="168" text-anchor="middle" font-size="9" fill="#4ade80">Better performance</text>
                
                <rect x="210" y="20" width="170" height="160" fill="#0f172a" rx="5"/>
                <text x="295" y="40" text-anchor="middle" font-size="12" fill="#e2e8f0">Type 2 (Hosted)</text>
                
                <rect x="220" y="50" width="40" height="15" fill="#f59e0b" rx="2"/>
                <text x="240" y="61" text-anchor="middle" font-size="7" fill="white">VM1</text>
                
                <rect x="270" y="50" width="40" height="15" fill="#f59e0b" rx="2"/>
                <text x="290" y="61" text-anchor="middle" font-size="7" fill="white">VM2</text>
                
                <rect x="320" y="50" width="50" height="15" fill="#f59e0b" rx="2"/>
                <text x="345" y="61" text-anchor="middle" font-size="7" fill="white">VM3</text>
                
                <rect x="220" y="75" width="150" height="20" fill="#ef4444" rx="2"/>
                <text x="295" y="88" text-anchor="middle" font-size="9" fill="white">Hypervisor (VMware Workstation)</text>
                
                <rect x="220" y="105" width="150" height="20" fill="#7c3aed" rx="2"/>
                <text x="295" y="118" text-anchor="middle" font-size="9" fill="white">Host Operating System</text>
                
                <rect x="220" y="135" width="150" height="20" fill="#374151" rx="2"/>
                <text x="295" y="148" text-anchor="middle" font-size="9" fill="white">Physical Hardware</text>
                
                <text x="295" y="165" text-anchor="middle" font-size="8" fill="#fbbf24">Easier to install</text>
                <text x="295" y="175" text-anchor="middle" font-size="8" fill="#fbbf24">More overhead</text>
            </svg>`
        },
        {
            title: "Containers & Microservices", 
            icon: "fa-cube",
            description: "Lightweight virtualization using containers. Share OS kernel but isolate applications. Docker enables microservices architecture with fast deployment.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Containers vs Virtual Machines</title>
                <rect x="20" y="20" width="170" height="160" fill="#0f172a" rx="5"/>
                <text x="105" y="40" text-anchor="middle" font-size="12" fill="#e2e8f0">Virtual Machines</text>
                
                <rect x="30" y="50" width="40" height="30" fill="#22c55e" rx="2"/>
                <text x="50" y="60" text-anchor="middle" font-size="7" fill="white">App A</text>
                <text x="50" y="70" text-anchor="middle" font-size="6" fill="#dcfce7">Guest OS</text>
                
                <rect x="80" y="50" width="40" height="30" fill="#22c55e" rx="2"/>
                <text x="100" y="60" text-anchor="middle" font-size="7" fill="white">App B</text>
                <text x="100" y="70" text-anchor="middle" font-size="6" fill="#dcfce7">Guest OS</text>
                
                <rect x="130" y="50" width="40" height="30" fill="#22c55e" rx="2"/>
                <text x="150" y="60" text-anchor="middle" font-size="7" fill="white">App C</text>
                <text x="150" y="70" text-anchor="middle" font-size="6" fill="#dcfce7">Guest OS</text>
                
                <rect x="30" y="90" width="140" height="20" fill="#3b82f6" rx="2"/>
                <text x="100" y="103" text-anchor="middle" font-size="9" fill="white">Hypervisor</text>
                
                <rect x="30" y="120" width="140" height="30" fill="#374151" rx="2"/>
                <text x="100" y="140" text-anchor="middle" font-size="10" fill="white">Host Operating System</text>
                
                <text x="105" y="165" text-anchor="middle" font-size="8" fill="#94a3b8">Heavy: Full OS per app</text>
                
                <rect x="210" y="20" width="170" height="160" fill="#0f172a" rx="5"/>
                <text x="295" y="40" text-anchor="middle" font-size="12" fill="#e2e8f0">Containers</text>
                
                <rect x="220" y="50" width="40" height="20" fill="#f59e0b" rx="2"/>
                <text x="240" y="63" text-anchor="middle" font-size="8" fill="white">App A</text>
                
                <rect x="270" y="50" width="40" height="20" fill="#f59e0b" rx="2"/>
                <text x="290" y="63" text-anchor="middle" font-size="8" fill="white">App B</text>
                
                <rect x="320" y="50" width="40" height="20" fill="#f59e0b" rx="2"/>
                <text x="340" y="63" text-anchor="middle" font-size="8" fill="white">App C</text>
                
                <rect x="220" y="80" width="140" height="20" fill="#ef4444" rx="2"/>
                <text x="290" y="93" text-anchor="middle" font-size="9" fill="white">Container Runtime (Docker)</text>
                
                <rect x="220" y="110" width="140" height="40" fill="#7c3aed" rx="2"/>
                <text x="290" y="130" text-anchor="middle" font-size="10" fill="white">Host Operating System</text>
                <text x="290" y="142" text-anchor="middle" font-size="8" fill="#c4b5fd">(Shared Kernel)</text>
                
                <text x="295" y="165" text-anchor="middle" font-size="8" fill="#fbbf24">Lightweight: Shared OS</text>
                <text x="295" y="175" text-anchor="middle" font-size="8" fill="#fbbf24">Fast startup</text>
            </svg>`
        },
        {
            title: "Network Virtualization", 
            icon: "fa-network-wired",
            description: "VRFs create virtual routing tables. VLANs virtualize Layer 2. SDN separates control and data planes. Cloud networking uses virtual networks.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Network Virtualization Types</title>
                <rect x="20" y="20" width="360" height="160" fill="#0f172a" rx="5"/>
                <text x="200" y="40" text-anchor="middle" font-size="12" fill="#e2e8f0">Network Virtualization Technologies</text>
                
                <rect x="30" y="50" width="80" height="60" fill="#1e293b" rx="3"/>
                <text x="70" y="65" text-anchor="middle" font-size="10" fill="#3b82f6">VRF</text>
                <text x="70" y="78" text-anchor="middle" font-size="8" fill="#94a3b8">Virtual Routing</text>
                <text x="70" y="88" text-anchor="middle" font-size="8" fill="#94a3b8">& Forwarding</text>
                <text x="70" y="98" text-anchor="middle" font-size="7" fill="#60a5fa">Separate routing</text>
                <text x="70" y="106" text-anchor="middle" font-size="7" fill="#60a5fa">tables per tenant</text>
                
                <rect x="120" y="50" width="80" height="60" fill="#1e293b" rx="3"/>
                <text x="160" y="65" text-anchor="middle" font-size="10" fill="#10b981">VLAN</text>
                <text x="160" y="78" text-anchor="middle" font-size="8" fill="#94a3b8">Virtual LAN</text>
                <text x="160" y="88" text-anchor="middle" font-size="8" fill="#94a3b8">Layer 2</text>
                <text x="160" y="98" text-anchor="middle" font-size="7" fill="#4ade80">Segment broadcast</text>
                <text x="160" y="106" text-anchor="middle" font-size="7" fill="#4ade80">domains</text>
                
                <rect x="210" y="50" width="80" height="60" fill="#1e293b" rx="3"/>
                <text x="250" y="65" text-anchor="middle" font-size="10" fill="#f59e0b">SDN</text>
                <text x="250" y="78" text-anchor="middle" font-size="8" fill="#94a3b8">Software Defined</text>
                <text x="250" y="88" text-anchor="middle" font-size="8" fill="#94a3b8">Networking</text>
                <text x="250" y="98" text-anchor="middle" font-size="7" fill="#fbbf24">Centralized control</text>
                <text x="250" y="106" text-anchor="middle" font-size="7" fill="#fbbf24">plane</text>
                
                <rect x="300" y="50" width="70" height="60" fill="#1e293b" rx="3"/>
                <text x="335" y="65" text-anchor="middle" font-size="10" fill="#ef4444">Cloud</text>
                <text x="335" y="78" text-anchor="middle" font-size="8" fill="#94a3b8">Virtual Networks</text>
                <text x="335" y="88" text-anchor="middle" font-size="8" fill="#94a3b8">(VPC, VNet)</text>
                <text x="335" y="98" text-anchor="middle" font-size="7" fill="#fca5a5">Isolated network</text>
                <text x="335" y="106" text-anchor="middle" font-size="7" fill="#fca5a5">segments</text>
                
                <rect x="30" y="120" width="340" height="50" fill="#374151" rx="3"/>
                <text x="200" y="135" text-anchor="middle" font-size="10" fill="#e2e8f0">Benefits of Network Virtualization</text>
                
                <text x="70" y="150" text-anchor="middle" font-size="8" fill="#4ade80">• Multi-tenancy</text>
                <text x="70" y="160" text-anchor="middle" font-size="8" fill="#4ade80">• Isolation</text>
                
                <text x="160" y="150" text-anchor="middle" font-size="8" fill="#60a5fa">• Resource sharing</text>
                <text x="160" y="160" text-anchor="middle" font-size="8" fill="#60a5fa">• Flexibility</text>
                
                <text x="250" y="150" text-anchor="middle" font-size="8" fill="#fbbf24">• Centralized mgmt</text>
                <text x="250" y="160" text-anchor="middle" font-size="8" fill="#fbbf24">• Programmability</text>
                
                <text x="330" y="150" text-anchor="middle" font-size="8" fill="#fca5a5">• Scalability</text>
                <text x="330" y="160" text-anchor="middle" font-size="8" fill="#fca5a5">• Automation</text>
            </svg>`
        },
    ],

    // SWITCHING
    switching: [
        {
            title: "MAC Learning", 
            icon: "fa-brain",
            description: "Learning: Switch adds source MAC to table with ingress port. Aging: Entries removed after inactivity (typically 300 seconds).",
            visual: `<svg viewBox="0 0 400 200">
                <title>MAC Address Learning</title>
                <rect x="30" y="80" width="50" height="40" rx="2" fill="#475569"/>
                <text x="55" y="105" font-size="10">PC A</text>
                <rect x="130" y="80" width="140" height="40" rx="3" fill="#4f46e5"/>
                <text x="200" y="105" font-size="12" fill="white">Switch</text>
                <path d="M80 100 H 130" stroke="#64748b" stroke-width="2"/>
                <text x="150" y="70" font-size="10" fill="#60a5fa">Frame from A arrives on Fa0/1</text>
                <rect x="250" y="20" width="140" height="60" rx="3" fill="#1e293b"/>
                <text x="320" y="35" font-size="10" fill="#64748b">MAC Table</text>
                <text x="320" y="55" font-size="10" fill="#4ade80">AA:AA.. -> Fa0/1</text>
                <path d="M200 80 Q 250 60 270 50" stroke="#4ade80" fill="none" stroke-dasharray="3"/>
            </svg>`
        },
        {
            title: "Frame Forwarding", 
            icon: "fa-paper-plane",
            description: "If destination MAC is in table, switch sends frame only out the specific port associated with that MAC. This is switch efficiency.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Frame Forwarding to a known MAC</title>
                <defs>
                    <marker id="arrow-rev-fwd" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 5 L 10 0 L 10 10 Z" fill="#64748b"/>
                    </marker>
                    <marker id="arrow-grn-fwd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/>
                    </marker>
                </defs>
                <rect x="80" y="80" width="240" height="40" rx="3" fill="#4f46e5"/>
                <text x="200" y="105" font-size="12" text-anchor="middle">Switch</text>
                <text x="40" y="40" text-anchor="middle" font-size="10">PC A</text>
                <line x1="120" y1="80" x2="40" y2="50" stroke="#64748b" stroke-width="2"/>
                <text x="200" y="40" text-anchor="middle" font-size="10">PC B</text>
                <line x1="200" y1="80" x2="200" y2="50" stroke="#64748b" stroke-width="2"/>
                <text x="360" y="40" text-anchor="middle" font-size="10">PC C</text>
                <line x1="280" y1="80" x2="360" y2="50" stroke="#64748b" stroke-width="2"/>
                <text x="100" y="150" font-size="10">Frame: SRC A, DST C</text>
                <path d="M40 60 V 80" stroke="#64748b" stroke-width="2" marker-start="url(#arrow-rev-fwd)"/>
                <path d="M 125 100 H 275" stroke="#16a34a" stroke-width="2" />
                <path d="M 275 100 L 355 60" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow-grn-fwd)"/>
            </svg>`
        },
        {
            title: "Frame Flooding", 
            icon: "fa-water",
            description: "If destination MAC is unknown (or broadcast), switch floods frame out all ports except incoming port, hoping destination will see it.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Frame Flooding for an unknown MAC</title>
                <defs>
                    <marker id="arrow-rev-flood" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 5 L 10 0 L 10 10 Z" fill="#64748b"/>
                    </marker>
                    <marker id="arrow-red-flood" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#be123c"/>
                    </marker>
                </defs>
                <rect x="80" y="80" width="240" height="40" rx="3" fill="#4f46e5"/>
                <text x="200" y="105" font-size="12" text-anchor="middle">Switch</text>
                <text x="40" y="40" text-anchor="middle" font-size="10">PC A</text>
                <line x1="120" y1="80" x2="40" y2="50" stroke="#64748b" stroke-width="2"/>
                <text x="200" y="40" text-anchor="middle" font-size="10">PC B</text>
                <line x1="200" y1="80" x2="200" y2="50" stroke="#64748b" stroke-width="2"/>
                <text x="360" y="40" text-anchor="middle" font-size="10">PC C</text>
                <line x1="280" y1="80" x2="360" y2="50" stroke="#64748b" stroke-width="2"/>
                <text x="100" y="150" font-size="10">Frame: SRC A, DST ???</text>
                <path d="M40 60 V 80" stroke="#64748b" stroke-width="2" marker-start="url(#arrow-rev-flood)"/>
                <path d="M125 100 L 195 50" stroke="#be123c" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-red-flood)"/>
                <path d="M125 100 L 355 60" stroke="#be123c" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-red-flood)"/>
            </svg>`
        },
        {
            title: "MAC Address Table", 
            icon: "fa-table-list",
            description: "Table in switch memory mapping MAC addresses to ports. Core component allowing intelligent forwarding instead of flooding like a hub.",
            visual: `<svg viewBox="0 0 400 200">
                <title>MAC Address Table</title>
                <rect x="40" y="30" width="320" height="140" rx="5" fill="#1e293b" stroke="#334155"/>
                <line x1="40" y1="60" x2="360" y2="60" stroke="#334155" stroke-width="2"/>
                <line x1="200" y1="30" x2="200" y2="170" stroke="#334155" stroke-width="2"/>
                <text x="120" y="50" font-size="14" font-weight="bold" fill="#94a3b8" text-anchor="middle">MAC Address</text>
                <text x="280" y="50" font-size="14" font-weight="bold" fill="#94a3b8" text-anchor="middle">Port</text>
                <text x="120" y="80" font-family="monospace" font-size="10" fill="#e2e8f0" text-anchor="middle">AA:BB:CC:11:22:33</text>
                <text x="280" y="80" font-family="monospace" font-size="10" fill="#e2e8f0" text-anchor="middle">Fa0/1</text>
                <text x="120" y="100" font-family="monospace" font-size="10" fill="#e2e8f0" text-anchor="middle">AA:BB:CC:44:55:66</text>
                <text x="280" y="100" font-family="monospace" font-size="10" fill="#e2e8f0" text-anchor="middle">Fa0/2</text>
                <text x="120" y="120" font-family="monospace" font-size="10" fill="#e2e8f0" text-anchor="middle">AA:BB:CC:77:88:99</text>
                <text x="280" y="120" font-family="monospace" font-size="10" fill="#e2e8f0" text-anchor="middle">Fa0/3</text>
            </svg>`
        },
    ],

    // Section metadata
    metadata: {
        sectionNumber: 1,
        title: "Network Fundamentals",
        subsections: {
            components: { title: "1.1 Network Components", count: 8 },
            topology: { title: "1.2 Network Topology Architectures", count: 6 },
            cabling: { title: "1.3 Physical Interface and Cabling", count: 6 },
            issues: { title: "1.4 Interface and Cable Issues", count: 6 },
            tcpUdp: { title: "1.5 Compare TCP to UDP", count: 7 },
            ipv4: { title: "1.6 Configure and verify IPv4", count: 6 },
            privateIpv4: { title: "1.7 Private IPv4 addressing", count: 3 },
            ipv6: { title: "1.8 Configure and verify IPv6", count: 6 },
            ipv6Types: { title: "1.9 Describe IPv6 address types", count: 5 },
            clientOs: { title: "1.10 Verify IP parameters", count: 4 },
            wireless: { title: "1.11 Describe wireless principles", count: 6 },
            virtualization: { title: "1.12 Virtualization fundamentals", count: 4 },
            switching: { title: "1.13 Describe switching concepts", count: 4 }
        },
        // Dynamic calculation of total topics from subsections
        get totalTopics() {
            return Object.values(this.subsections).reduce((total, section) => total + section.count, 0);
        }
    }
};

// Export for use in section1.html
if (typeof window !== 'undefined') {
    window.SECTION1_DATA = SECTION1_DATA;
    
    // Register with section registry for dynamic topic totals
    document.addEventListener('DOMContentLoaded', () => {
        if (window.CCNA_SECTION_REGISTRY) {
            window.CCNA_SECTION_REGISTRY.registerSectionData(1, SECTION1_DATA);
        }
        // Dispatch event for other listeners
        window.dispatchEvent(new CustomEvent('sectionDataLoaded', {
            detail: { sectionNumber: 1, sectionData: SECTION1_DATA }
        }));
    });
}

