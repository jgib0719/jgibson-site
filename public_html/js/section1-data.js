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
            title: "Cable Issues", 
            icon: "fa-triangle-exclamation",
            description: "Collisions occur in half-duplex, shared media. Errors from corrupted frames due to faulty cables. Duplex/Speed mismatches cause poor performance.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Duplex Mismatch causing errors</title>
                <rect x="40" y="80" width="100" height="40" rx="3" fill="#4f46e5"/>
                <text x="90" y="105" text-anchor="middle" font-size="12" fill="white">Device A</text>
                <text x="90" y="70" text-anchor="middle" font-size="12" fill="#16a34a">Full-Duplex</text>
                <rect x="260" y="80" width="100" height="40" rx="3" fill="#4f46e5"/>
                <text x="310" y="105" text-anchor="middle" font-size="12" fill="white">Device B</text>
                <text x="310" y="70" text-anchor="middle" font-size="12" fill="#dc2626">Half-Duplex</text>
                <line x1="140" y1="100" x2="260" y2="100" stroke="#64748b" stroke-width="2"/>
                <path d="M 190 90 L 210 110 M 210 90 L 190 110" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
                <text x="200" y="130" text-anchor="middle" font-size="12" fill="#ef4444">Collisions & Errors</text>
            </svg>`
        },
    ],

    // TCPUDP
    tcpUdp: [
        {
            title: "TCP vs. UDP", 
            icon: "fa-right-left",
            description: "TCP: Connection-oriented, reliable, ordered delivery with handshake (web, email). UDP: Connectionless, fast, best-effort (VoIP, DNS).",
            visual: `
                <svg viewBox="0 0 400 200">
                    <title>TCP Handshake vs UDP Fire-and-Forget</title>
                    <defs>
                        <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
                        </marker>
                        <marker id="arrow-blue-rev" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                           <path d="M 10 0 L 0 5 L 10 10 z" fill="#2563eb" />
                        </marker>
                        <marker id="arrow-pink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#db2777" />
                        </marker>
                    </defs>
                    <text x="100" y="40" text-anchor="middle" font-size="14" font-weight="bold">TCP (Reliable)</text>
                    <path d="M50 60 H 150" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
                    <text x="100" y="55" text-anchor="middle" font-size="10">SYN</text>
                    <path d="M150 80 H 50" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue-rev)"/>
                    <text x="100" y="88" text-anchor="middle" font-size="10">SYN-ACK</text>
                    <path d="M50 100 H 150" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
                    <text x="100" y="112" text-anchor="middle" font-size="10">ACK</text>
                    
                    <text x="300" y="40" text-anchor="middle" font-size="14" font-weight="bold">UDP (Fast)</text>
                    <path d="M250 60 H 350" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/>
                    <text x="300" y="55" text-anchor="middle" font-size="10">Data</text>
                    <path d="M250 80 H 350" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/>
                    <text x="300" y="75" text-anchor="middle" font-size="10">Data</text>
                    <path d="M250 100 H 350" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/>
                    <text x="300" y="95" text-anchor="middle" font-size="10">Data</text>
                </svg>
            `
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
    ],

    // PRIVATEIPV4
    privateIpv4: [
        {
            title: "Private IPv4", 
            icon: "fa-lock",
            description: "RFC 1918 ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Not internet routable. NAT translates private to public IPs.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Private LAN using NAT to access Internet</title>
                <rect x="20" y="50" width="180" height="100" rx="5" fill="#14532d"/>
                <text x="110" y="105" text-anchor="middle" font-size="12" fill="#dcfce7">Private LAN (192.168.1.0/24)</text>
                <path d="M 320 100 C 310 80, 370 80, 360 100 C 380 110, 350 130, 340 120 C 330 130, 300 110, 320 100 Z" fill="#4a4a0f"/>
                <text x="340" y="105" text-anchor="middle" font-size="12">Internet</text>
                <rect x="210" y="80" width="80" height="40" rx="2" fill="#991b1b"/>
                <text x="250" y="105" text-anchor="middle" font-size="10" fill="#fecaca">NAT Router</text>
                <line x1="200" y1="100" x2="210" y2="100" stroke="#64748b" stroke-width="2"/>
                <line x1="290" y1="100" x2="310" y2="100" stroke="#64748b" stroke-width="2"/>
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
    ],

    // IPV6TYPES
    ipv6Types: [
        {
            title: "IPv6 Types", 
            icon: "fa-share-nodes",
            description: "Unicast: One-to-one (Global, Unique Local, Link-Local). Anycast: One-to-nearest. Multicast: One-to-many group communication.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPv6 Address Types</title>
                <defs>
                    <marker id="arrow-sm-ipv6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                </defs>
                
                <!-- Source Node -->
                <circle cx="50" cy="100" r="12" fill="#be123c"/>
                <text x="50" y="130" text-anchor="middle" font-size="12" fill="#f8fafc">Source</text>

                <!-- Unicast -->
                <text x="180" y="40" text-anchor="middle" font-size="12" fill="#94a3b8">Unicast (One-to-One)</text>
                <circle cx="180" cy="65" r="10" fill="#475569"/>
                <path d="M62 95 L 170 70" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-sm-ipv6)"/>

                <!-- Anycast -->
                <text x="310" y="40" text-anchor="middle" font-size="12" fill="#94a3b8">Anycast (One-to-Nearest)</text>
                <circle cx="290" cy="65" r="10" fill="#475569"/>
                <circle cx="330" cy="65" r="10" fill="#475569"/>
                <path d="M62 100 L 280 70" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-sm-ipv6)"/>
                
                <!-- Multicast -->
                <text x="250" y="125" text-anchor="middle" font-size="12" fill="#94a3b8">Multicast (One-to-Many)</text>
                <circle cx="230" cy="150" r="10" fill="#475569"/>
                <circle cx="270" cy="150" r="10" fill="#475569"/>
                <path d="M62 105 L 220 145" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-sm-ipv6)"/>
                <path d="M62 105 L 260 145" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-sm-ipv6)"/>
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
    ],

    // CLIENTOS
    clientOs: [
        {
            title: "Verify IP Parameters", 
            icon: "fa-terminal",
            description: "Commands to view IP configuration: Windows: ipconfig /all, macOS/Linux: ifconfig or ip addr show. Shows IP, subnet mask, gateway, DNS.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Terminal showing ipconfig</title>
                <rect x="20" y="20" width="360" height="160" rx="5" fill="#1e293b"/>
                <rect x="20" y="20" width="360" height="25" rx="3" ry="0" fill="#475569"/>
                <circle cx="35" cy="32.5" r="6" fill="#ef4444"/>
                <circle cx="55" cy="32.5" r="6" fill="#fbbd23"/>
                <circle cx="75" cy="32.5" r="6" fill="#4ade80"/>
                <text x="35" y="65" font-family="monospace" fill="#e2e8f0" font-size="10">C:\\Users\\User> ipconfig</text>
                <text x="35" y="90" font-family="monospace" fill="white" font-size="10">IPv4 Address. . . . . . . . . . . : 192.168.1.10</text>
                <text x="35" y="110" font-family="monospace" fill="white" font-size="10">Subnet Mask . . . . . . . . . . . : 255.255.255.0</text>
                <text x="35" y="130" font-family="monospace" fill="white" font-size="10">Default Gateway . . . . . . . . . : 192.168.1.1</text>
            </svg>`
        },
    ],

    // WIRELESS
    wireless: [
        {
            title: "Wi-Fi Channels", 
            icon: "fa-tower-broadcast",
            description: "Wi-Fi operates on specific channels. Non-overlapping channels avoid interference: 2.4 GHz (1, 6, 11), 5 GHz has many more.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <title>Non-overlapping Wi-Fi channels 1, 6, 11</title>
                    <path d="M50 150 C 90 30, 130 30, 170 150" stroke="#3b82f6" stroke-width="3" fill="#3b82f644"/>
                    <text x="110" y="165" text-anchor="middle" font-size="12">Channel 1</text>
                    <path d="M150 150 C 190 30, 230 30, 270 150" stroke="#10b981" stroke-width="3" fill="#10b98144"/>
                    <text x="210" y="165" text-anchor="middle" font-size="12">Channel 6</text>
                    <path d="M250 150 C 290 30, 330 30, 370 150" stroke="#f97316" stroke-width="3" fill="#f9731644"/>
                    <text x="310" y="165" text-anchor="middle" font-size="12">Channel 11</text>
                    <path d="M120 150 C 150 80, 190 80, 220 150" stroke="#ef4444" stroke-width="2" stroke-dasharray="3" fill="none"/>
                    <text x="170" y="120" text-anchor="middle" font-size="10" fill="#ef4444">Interference</text>
                </svg>
            `
        },
        {
            title: "Wireless Concepts", 
            icon: "fa-key",
            description: "SSID: Public name of wireless network. RF: Radio Frequency medium. Encryption: WPA3 (modern) secures wireless communication.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Wireless concepts</title>
                <circle cx="100" cy="100" r="25" fill="#2563eb"/>
                <text x="100" y="105" text-anchor="middle" font-size="16" fill="white">AP</text>
                <path d="M115 90 A 30 30 0 0 1 135 60" stroke="#3b82f6" fill="none" stroke-linecap="round" stroke-width="3"/>
                <path d="M125 90 A 50 50 0 0 1 170 45" stroke="#3b82f6" fill="none" stroke-linecap="round" stroke-width="3"/>
                <rect x="200" y="80" width="180" height="40" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="290" y="105" text-anchor="middle" font-size="12" fill="#e2e8f0">SSID: MySecureWiFi</text>
                <path d="M 140 60 L 150 70 L 140 80" stroke="#f59e0b" stroke-width="3" fill="none"/>
                <path d="M 150 60 L 160 70 L 150 80" stroke="#f59e0b" stroke-width="3" fill="none"/>
                <text x="175" y="55" fill="#f59e0b">WPA3 Encrypted</text>
            </svg>`
        },
    ],

    // VIRTUALIZATION
    virtualization: [
        {
            title: "Virtualization", 
            icon: "fa-display",
            description: "Creating virtual versions of resources. Server virtualization: Hypervisor runs multiple VMs. Containers: Lightweight alternative. VRFs: Virtual routing tables.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Server Virtualization</title>
                <rect x="60" y="150" width="280" height="30" rx="3" fill="#334155"/>
                <text x="200" y="170" text-anchor="middle" font-size="12" fill="white">Hardware</text>
                <rect x="70" y="120" width="260" height="30" rx="3" fill="#4f46e5"/>
                <text x="200" y="140" text-anchor="middle" font-size="12" fill="white">Hypervisor</text>
                <rect x="80" y="40" width="70" height="80" rx="3" fill="#166534"/>
                <text x="115" y="85" text-anchor="middle" font-size="12" fill="#d1fae5">VM 1</text>
                <rect x="165" y="40" width="70" height="80" rx="3" fill="#166534"/>
                <text x="200" y="85" text-anchor="middle" font-size="12" fill="#d1fae5">VM 2</text>
                <rect x="250" y="40" width="70" height="80" rx="3" fill="#166534"/>
                <text x="285" y="85" text-anchor="middle" font-size="12" fill="#d1fae5">VM 3</text>
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
        totalTopics: 35,
        subsections: {
            components: { title: "1.1 Network Components", count: 8 },
            topology: { title: "1.2 Network Topology Architectures", count: 6 },
            cabling: { title: "1.3 Physical Interface and Cabling", count: 6 },
            issues: { title: "1.4 Interface and Cable Issues", count: 1 },
            tcpUdp: { title: "1.5 Compare TCP to UDP", count: 1 },
            ipv4: { title: "1.6 Configure and verify IPv4", count: 1 },
            privateIpv4: { title: "1.7 Private IPv4 addressing", count: 1 },
            ipv6: { title: "1.8 Configure and verify IPv6", count: 1 },
            ipv6Types: { title: "1.9 Describe IPv6 address types", count: 2 },
            clientOs: { title: "1.10 Verify IP parameters", count: 1 },
            wireless: { title: "1.11 Describe wireless principles", count: 2 },
            virtualization: { title: "1.12 Virtualization fundamentals", count: 1 },
            switching: { title: "1.13 Describe switching concepts", count: 4 }
        }
    }
};

// Export for use in section1.html
if (typeof window !== 'undefined') {
    window.SECTION1_DATA = SECTION1_DATA;
}

// Create simplified topics array for enterprise modal system
const SECTION1_TOPICS = [
    { title: "1.1 Network Components", subtitle: "Routers, switches, firewalls, and more", description: "Learn about network infrastructure components" },
    { title: "1.2 Network Topology Architectures", subtitle: "Star, mesh, hybrid topologies", description: "Understand different network topologies" },
    { title: "1.3 Physical Interface and Cabling", subtitle: "Ethernet, fiber, copper cables", description: "Physical layer connectivity options" },
    { title: "1.4 Interface and Cable Issues", subtitle: "Troubleshooting connectivity", description: "Common physical layer problems" },
    { title: "1.5 Compare TCP to UDP", subtitle: "Transport layer protocols", description: "Connection-oriented vs connectionless protocols" },
    { title: "1.6 Configure and verify IPv4 addressing and subnetting", subtitle: "IPv4 fundamentals", description: "IP addressing and subnetting concepts" },
    { title: "1.7 Describe the need for private IPv4 addressing", subtitle: "RFC 1918 addresses", description: "Private IP address ranges and NAT" },
    { title: "1.8 Configure and verify IPv6 addressing and prefix", subtitle: "IPv6 fundamentals", description: "Next-generation IP protocol" },
    { title: "1.9 Describe IPv6 address types", subtitle: "Unicast, multicast, anycast", description: "Different IPv6 address categories" },
    { title: "1.10 Verify IP parameters for Client OS", subtitle: "Windows, Mac, Linux", description: "Operating system IP configuration" },
    { title: "1.11 Describe wireless principles", subtitle: "WiFi standards and security", description: "Wireless networking fundamentals" },
    { title: "1.12 Explain virtualization fundamentals", subtitle: "VMs, containers, VRFs", description: "Network virtualization concepts" },
    { title: "1.13 Describe switching concepts", subtitle: "VLANs, trunking, STP", description: "Layer 2 switching operations" }
];

if (typeof window !== 'undefined') {
    window.SECTION1_TOPICS = SECTION1_TOPICS;
}

