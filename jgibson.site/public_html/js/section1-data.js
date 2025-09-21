/**
 * CCNA Section 1: Network Fundamentals - Complete Topic Data
 * Auto-extracted from section1.html for modular architecture
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
                                    <text x="80" y="110" text-anchor="middle" font-size="16" fill="#94a3b8" font-family="Rajdhani, sans-serif">LAN A</text>
                                    <circle cx="200" cy="100" r="30" fill="#6366f1"/>
                                    <text x="200" y="108" text-anchor="middle" font-size="24" fill="white" font-family="Orbitron, sans-serif" font-weight="bold">R</text>
                                    <rect x="260" y="60" width="120" height="80" rx="10" fill="#334155"/>
                                    <text x="320" y="110" text-anchor="middle" font-size="16" fill="#94a3b8" font-family="Rajdhani, sans-serif">LAN B</text>
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
                                    <text x="90" y="140" text-anchor="middle" font-size="14" fill="#c7d2fe" font-family="Rajdhani, sans-serif">L2 Switch</text>
                                    <line x1="50" y1="70" x2="50" y2="120" stroke="#64748b" stroke-width="3"/>
                                    <rect x="40" y="50" width="20" height="20" rx="2" fill="#475569"/>
                                    <line x1="90" y1="70" x2="90" y2="120" stroke="#64748b" stroke-width="3"/>
                                    <rect x="80" y="50" width="20" height="20" rx="2" fill="#475569"/>
                                    <line x1="130" y1="70" x2="130" y2="120" stroke="#64748b" stroke-width="3"/>
                                    <rect x="120" y="50" width="20" height="20" rx="2" fill="#475569"/>
                                    <rect x="240" y="120" width="100" height="30" rx="4" fill="#818cf8"/>
                                    <text x="290" y="140" text-anchor="middle" font-size="14" fill="#1e1b4b" font-family="Rajdhani, sans-serif">L3 Switch</text>
                                    <rect x="200" y="50" width="80" height="40" rx="6" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
                                    <text x="240" y="76" text-anchor="middle" font-size="12" font-family="Rajdhani, sans-serif" fill="#f59e0b">VLAN 10</text>
                                    <line x1="220" y1="90" x2="270" y2="120" stroke="#64748b" stroke-width="3"/>
                                    <rect x="300" y="50" width="80" height="40" rx="6" fill="#334155" stroke="#10b981" stroke-width="2"/>
                                    <text x="340" y="76" text-anchor="middle" font-size="12" font-family="Rajdhani, sans-serif" fill="#10b981">VLAN 20</text>
                                    <line x1="320" y1="90" x2="310" y2="120" stroke="#64748b" stroke-width="3"/>
                                </svg>
                            `
                        },
        {
                            title: "NGFW & IPS", 
                            icon: "fa-shield-halved",
                            description: "Next-Generation Firewall provides deep packet inspection and application awareness. IPS monitors and actively blocks malicious traffic.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>NGFW protecting a LAN from the Internet</title>
                                    <!-- LAN cloud - scaled up -->
                                    <ellipse cx="60" cy="100" rx="40" ry="30" fill="#4a4a0f" stroke="#eab308" stroke-width="2"/>
                                    <text x="60" y="108" text-anchor="middle" font-size="16" font-family="Rajdhani, sans-serif" fill="#eab308" font-weight="bold">LAN</text>
                                    
                                    <!-- Connection line -->
                                    <line x1="100" y1="100" x2="140" y2="100" stroke="#64748b" stroke-width="3"/>
                                    
                                    <!-- NGFW firewall - scaled up -->
                                    <rect x="140" y="70" width="60" height="60" rx="8" fill="#9a3412" stroke="#f97316" stroke-width="3"/>
                                    <text x="170" y="108" text-anchor="middle" font-size="16" fill="white" font-family="Rajdhani, sans-serif" font-weight="bold">NGFW</text>
                                    
                                    <!-- Connection line -->
                                    <line x1="200" y1="100" x2="240" y2="100" stroke="#64748b" stroke-width="3"/>
                                    
                                    <!-- IPS system - scaled up -->
                                    <rect x="240" y="75" width="80" height="50" rx="8" fill="#14532d" stroke="#4ade80" stroke-width="3"/>
                                    <text x="280" y="108" text-anchor="middle" font-size="16" font-family="Rajdhani, sans-serif" fill="#bbf7d0" font-weight="bold">IPS</text>
                                    
                                    <!-- Connection to Internet -->
                                    <line x1="320" y1="100" x2="360" y2="100" stroke="#64748b" stroke-width="3"/>
                                    <circle cx="370" cy="100" r="15" fill="#374151" stroke="#9ca3af" stroke-width="2"/>
                                    <text x="370" y="108" text-anchor="middle" font-size="12" font-family="Rajdhani, sans-serif" fill="#9ca3af">WAN</text>
                                    
                                    <!-- Threat blocking visualization -->
                                    <path d="M 110 85 L 125 100 M 125 85 L 110 100" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
                                    <path d="M 210 85 L 225 100 M 225 85 L 210 100" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
                                </svg>
                            `
                        },
        {
                            title: "Access Points", 
                            icon: "fa-wifi",
                            description: "Allows wireless devices to connect to a wired network using Wi-Fi. Acts as a bridge between wireless and Ethernet LANs.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Access Point connecting wireless devices to a wired network</title>
                                    <rect x="10" y="42.5" width="50" height="15" rx="2" fill="#4f46e5"/>
                                    <text x="35" y="51.5" text-anchor="middle" font-size="7" fill="#c7d2fe" font-family="Rajdhani, sans-serif">R</text>
                                    <circle cx="100" cy="50" r="10" fill="#2563eb"/>
                                    <text x="100" y="53" text-anchor="middle" font-size="8" fill="white" font-family="Rajdhani, sans-serif">R</text>
                                    <line x1="60" y1="50" x2="90" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                    <rect x="150" y="20" width="20" height="15" rx="2" fill="#475569"/>
                                    <rect x="155" y="70" width="10" height="15" rx="2" fill="#475569"/>
                                    <path d="M 110 50 A 20 20 0 0 1 125 35" stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                                    <path d="M 115 50 A 40 40 0 0 1 150 15" stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                                    <path d="M 110 50 A 30 30 0 0 0 130 75" stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                                </svg>
                            `
                        },
        {
                            title: "Controllers (WLC)", 
                            icon: "fa-sitemap",
                            description: "Wireless LAN Controller centrally manages, configures, and monitors multiple Access Points, simplifying wireless network administration.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Wireless LAN Controller managing multiple Access Points</title>
                                    <rect x="10" y="42.5" width="40" height="15" rx="2" fill="#be185d"/>
                                    <text x="30" y="51.5" text-anchor="middle" font-size="7" fill="white" font-family="Rajdhani, sans-serif">LAN</text>
                                    <rect x="70" y="30" width="60" height="40" rx="5" fill="#334155"/>
                                    <text x="100" y="55" text-anchor="middle" font-size="8" fill="#94a3b8" font-family="Rajdhani, sans-serif">R</text>
                                    <line x1="50" y1="50" x2="70" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                    <circle cx="150" cy="20" r="8" fill="#2563eb"/>
                                    <text x="150" y="23" font-size="6" fill="white" text-anchor="middle" font-family="Rajdhani, sans-serif">R</text>
                                    <circle cx="170" cy="50" r="8" fill="#2563eb"/>
                                    <text x="170" y="53" font-size="6" fill="white" text-anchor="middle" font-family="Rajdhani, sans-serif">R</text>
                                    <circle cx="150" cy="80" r="8" fill="#2563eb"/>
                                    <text x="150" y="83" font-size="6" fill="white" text-anchor="middle" font-family="Rajdhani, sans-serif">R</text>
                                    <path d="M 50 50 Q 100 -10 150 15" stroke="#db2777" stroke-width="1.5" fill="none" stroke-dasharray="3"/>
                                    <path d="M 50 50 Q 110 50 162 50" stroke="#db2777" stroke-width="1.5" fill="none" stroke-dasharray="3"/>
                                    <path d="M 50 50 Q 100 110 150 85" stroke="#db2777" stroke-width="1.5" fill="none" stroke-dasharray="3"/>
                                </svg>
                            `
                        },
        {
                            title: "Endpoints", 
                            icon: "fa-laptop-code",
                            description: "End-user devices that connect to the network: computers, smartphones, tablets, printers, VoIP phones, and IoT devices.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Various endpoints connecting to a network</title>
                                    <path d="M 80 50 C 70 30, 130 30, 120 50 C 140 60, 110 80, 100 70 C 90 80, 60 60, 80 50 Z" fill="#334155"/>
                                    <text x="100" y="55" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif" fill="#94a3b8">Fa</text>
                                    <rect x="30" y="10" width="20" height="15" rx="2" fill="#475569"/>
                                    <line x1="40" y1="25" x2="85" y2="45" stroke="#64748b" stroke-width="1.5"/>
                                    <rect x="20" y="70" width="15" height="20" rx="2" fill="#475569"/>
                                    <line x1="27" y1="70" x2="80" y2="55" stroke="#64748b" stroke-width="1.5"/>
                                    <rect x="150" y="10" width="20" height="15" rx="2" fill="#475569"/>
                                    <line x1="160" y1="25" x2="115" y2="45" stroke="#64748b" stroke-width="1.5"/>
                                    <circle cx="160" cy="80" r="8" fill="#475569"/>
                                    <line x1="155" y1="75" x2="115" y2="60" stroke="#64748b" stroke-width="1.5"/>
                                </svg>
                            `
                        },
        {
                            title: "Servers", 
                            icon: "fa-server",
                            description: "Computers that provide data or services to other devices over a network: web servers, file servers, email servers, DNS servers.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Client-Server network model</title>
                                    <rect x="85" y="10" width="30" height="35" rx="3" fill="#15803d" stroke="#34d399"/>
                                    <text x="100" y="32" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif" fill="#d1fae5">Fa</text>
                                    <line x1="100" y1="45" x2="100" y2="55" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="20" y1="55" x2="180" y2="55" stroke="#64748b" stroke-width="1.5"/>
                                    <rect x="30" y="65" width="20" height="15" rx="2" fill="#475569"/>
                                    <text x="40" y="86" font-size="6" font-family="Rajdhani, sans-serif" text-anchor="middle">Fa</text>
                                    <line x1="40" y1="65" x2="40" y2="55" stroke="#64748b" stroke-width="1.5"/>
                                    <rect x="90" y="65" width="20" height="15" rx="2" fill="#475569"/>
                                    <text x="100" y="86" font-size="6" font-family="Rajdhani, sans-serif" text-anchor="middle">Fa</text>
                                    <line x1="100" y1="65" x2="100" y2="55" stroke="#64748b" stroke-width="1.5"/>
                                    <rect x="150" y="65" width="20" height="15" rx="2" fill="#475569"/>
                                    <text x="160" y="86" font-size="6" font-family="Rajdhani, sans-serif" text-anchor="middle">Fa</text>
                                    <line x1="160" y1="65" x2="160" y2="55" stroke="#64748b" stroke-width="1.5"/>
                                </svg>
                            `
                        },
        {
                            title: "PoE", 
                            icon: "fa-plug-circle-bolt",
                            description: "Power over Ethernet allows network cables to carry electrical power along with data, eliminating need for separate power sources.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>PoE switch providing power and data</title>
                                    <rect x="75" y="10" width="50" height="20" rx="2" fill="#5b21b6"/>
                                    <text x="100" y="23" text-anchor="middle" font-size="7" font-family="Rajdhani, sans-serif" fill="#ddd6fe">SW</text>
                                    <rect x="20" y="70" width="25" height="18" rx="2" fill="#475569"/>
                                    <text x="32.5" y="93" text-anchor="middle" font-size="7" font-family="Rajdhani, sans-serif">Fa</text>
                                    <path d="M 85 30 V 50 H 45 V 70" stroke="#64748b" stroke-width="1.5" fill="none"/>
                                    <rect x="155" y="70" width="25" height="18" rx="2" fill="#475569"/>
                                    <text x="167.5" y="93" text-anchor="middle" font-size="6" font-family="Rajdhani, sans-serif">Fa</text>
                                    <path d="M 115 30 V 50 H 155 V 70" stroke="#64748b" stroke-width="1.5" fill="none"/>
                                    <path d="M 130 40 L 127 47 L 133 47 L 130 54" stroke="#facc15" fill="#facc15" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
                                </svg>
                            `
                        },
    ],

    // TOPOLOGY
    topology: [
        {
                            title: "Two-Tier", 
                            icon: "fa-layer-group",
                            description: "Combines Core and Distribution layers. Suitable for small to medium-sized networks, reducing cost and complexity.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Two-Tier Architecture</title>
                                    <rect x="60" y="15" width="80" height="20" rx="3" fill="#818cf8"/>
                                    <text x="100" y="28" text-anchor="middle" font-size="8" fill="white" font-family="Rajdhani, sans-serif">Fa</text>
                                    <rect x="20" y="70" width="50" height="15" rx="2" fill="#a5b4fc"/>
                                    <text x="45" y="79" text-anchor="middle" font-size="7" fill="#3730a3" font-family="Rajdhani, sans-serif">Fa</text>
                                    <rect x="130" y="70" width="50" height="15" rx="2" fill="#a5b4fc"/>
                                    <text x="155" y="79" text-anchor="middle" font-size="7" fill="#3730a3" font-family="Rajdhani, sans-serif">Fa</text>
                                    <path d="M 45 70 V 50 C 45 40, 80 40, 80 35" stroke="#64748b" stroke-width="1.5" fill="none"/>
                                    <path d="M 155 70 V 50 C 155 40, 120 40, 120 35" stroke="#64748b" stroke-width="1.5" fill="none"/>
                                </svg>
                            `
                        },
        {
                            title: "Three-Tier", 
                            icon: "fa-cubes-stacked",
                            description: "Hierarchical model with Core (backbone), Distribution (policy), and Access (end devices) layers. Provides scalability and redundancy.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Three-Tier Architecture</title>
                                    <rect x="80" y="5" width="40" height="15" rx="2" fill="#6366f1"/>
                                    <text x="100" y="14" text-anchor="middle" font-size="7" fill="white">Label</text>
                                    <rect x="30" y="40" width="50" height="15" rx="2" fill="#818cf8"/>
                                    <text x="55" y="49" text-anchor="middle" font-size="7" fill="white">Label</text>
                                    <rect x="120" y="40" width="50" height="15" rx="2" fill="#818cf8"/>
                                    <text x="145" y="49" text-anchor="middle" font-size="7" fill="white">Label</text>
                                    <rect x="5" y="80" width="40" height="15" rx="2" fill="#a5b4fc"/>
                                    <text x="25" y="89" text-anchor="middle" font-size="7" fill="#3730a3">Label</text>
                                    <rect x="55" y="80" width="40" height="15" rx="2" fill="#a5b4fc"/>
                                    <text x="75" y="89" text-anchor="middle" font-size="7" fill="#3730a3">Label</text>
                                    <line x1="100" y1="20" x2="55" y2="40" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="100" y1="20" x2="145" y2="40" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="55" y1="55" x2="25" y2="80" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="55" y1="55" x2="75" y2="80" stroke="#64748b" stroke-width="1.5"/>
                                </svg>
                            `
                        },
        {
                            title: "Spine-Leaf", 
                            icon: "fa-code-branch",
                            description: "Modern data center topology where every Leaf switch connects to every Spine switch. Offers high bandwidth and low latency.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Spine-Leaf Architecture</title>
                                    <rect x="30" y="15" width="40" height="15" rx="2" fill="#166534"/>
                                    <text x="50" y="24" text-anchor="middle" font-size="7" fill="white">Label</text>
                                    <rect x="130" y="15" width="40" height="15" rx="2" fill="#166534"/>
                                    <text x="150" y="24" text-anchor="middle" font-size="7" fill="white">Label</text>
                                    <rect x="10" y="75" width="40" height="15" rx="2" fill="#34d399"/>
                                    <text x="30" y="84" text-anchor="middle" font-size="7" fill="#065f46">Label</text>
                                    <rect x="80" y="75" width="40" height="15" rx="2" fill="#34d399"/>
                                    <text x="100" y="84" text-anchor="middle" font-size="7" fill="#065f46">Label</text>
                                    <rect x="150" y="75" width="40" height="15" rx="2" fill="#34d399"/>
                                    <text x="170" y="84" text-anchor="middle" font-size="7" fill="#065f46">Label</text>
                                    <line x1="30" y1="75" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="30" y1="75" x2="150" y2="30" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="100" y1="75" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="100" y1="75" x2="150" y2="30" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="170" y1="75" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="170" y1="75" x2="150" y2="30" stroke="#64748b" stroke-width="1.5"/>
                                </svg>
                            `
                        },
        {
                            title: "WAN", 
                            icon: "fa-globe",
                            description: "Wide Area Network spans large geographical areas, connecting multiple LANs. Uses technologies like MPLS, Metro Ethernet, and VPNs.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>WAN connecting two sites</title>
                                    <rect x="10" y="30" width="50" height="40" rx="5" fill="#334155"/>
                                    <text x="35" y="55" text-anchor="middle" font-size="8" fill="#94a3b8">Port</text>
                                    <rect x="140" y="30" width="50" height="40" rx="5" fill="#334155"/>
                                    <text x="165" y="55" text-anchor="middle" font-size="8" fill="#94a3b8">Port</text>
                                    <path d="M 80 50 C 70 30, 130 30, 120 50 C 140 60, 110 80, 100 70 C 90 80, 60 60, 80 50 Z" fill="#581c87" stroke="#a855f7"/>
                                    <text x="100" y="55" text-anchor="middle" font-size="8" fill="#e9d5ff">Port</text>
                                    <line x1="60" y1="50" x2="82" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="118" y1="50" x2="140" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                </svg>
                            `
                        },
        {
                            title: "SOHO", 
                            icon: "fa-house-laptop",
                            description: "Small Office/Home Office network using a single multifunction device from ISP, suitable for small-scale networks.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>SOHO Network</title>
                                    <path d="M 20 50 C 10 30, 50 30, 40 50 C 60 60, 30 80, 20 70 C 10 80, -10 60, 20 50 Z" fill="#4a4a0f"/>
                                    <text x="30" y="55" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif">Fa</text>
                                    <rect x="70" y="40" width="50" height="20" rx="3" fill="#991b1b"/>
                                    <text x="95" y="53" text-anchor="middle" font-size="7" fill="#fecaca">Fa</text>
                                    <line x1="45" y1="50" x2="70" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                    <rect x="150" y="20" width="20" height="15" rx="2" fill="#475569"/>
                                    <rect x="150" y="70" width="20" height="15" rx="2" fill="#475569"/>
                                    <line x1="120" y1="50" x2="150" y2="27.5" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="120" y1="50" x2="150" y2="77.5" stroke="#64748b" stroke-width="1.5"/>
                                </svg>
                            `
                        },
        {
                            title: "On-Premises vs. Cloud", 
                            icon: "fa-cloud-arrow-up",
                            description: "On-Premises: Infrastructure in organization building. Cloud: Infrastructure hosted by third-party provider, accessed via internet.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>On-Premises vs Cloud</title>
                                    <rect x="10" y="25" width="60" height="50" rx="3" fill="#334155"/>
                                    <path d="M 15 25 L 40 10 L 65 25" stroke="#94a3b8" fill="none" stroke-width="2"/>
                                    <rect x="35" y="35" width="10" height="30" rx="1" fill="#94a3b8"/>
                                    <text x="40" y="85" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif">Fa</text>
                                    <path d="M 140 30 C 130 10, 170 10, 160 30 C 180 30, 180 50, 160 50 L 140 50 C 120 50, 120 30, 140 30 Z" fill="#0c4a6e"/>
                                    <rect x="130" y="70" width="20" height="15" rx="2" fill="#475569"/>
                                    <line x1="140" y1="70" x2="150" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                    <text x="150" y="85" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif">Fa</text>
                                    <line x1="95" y1="10" x2="95" y2="90" stroke-dasharray="2" stroke="#475569"/>
                                </svg>
                            `
                        },
    ],

    // CABLING
    cabling: [
        {
                            title: "Copper - Twisted Pair", 
                            icon: "fa-cable-car",
                            description: "Common copper cabling with pairs of wires twisted together to reduce electromagnetic interference. Categories include Cat5e, Cat6, Cat6a.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Twisted Pair Copper Cable</title>
                                    <rect x="20" y="40" width="160" height="20" rx="10" fill="#b45309"/>
                                    <text x="100" y="53" text-anchor="middle" font-size="8" fill="#fed7aa">Port</text>
                                    <path d="M 30 25 Q 35 15 40 25 Q 45 35 50 25 Q 55 15 60 25" stroke="#0ea5e9" stroke-width="2" fill="none"/>
                                    <path d="M 30 75 Q 35 85 40 75 Q 45 65 50 75 Q 55 85 60 75" stroke="#10b981" stroke-width="2" fill="none"/>
                                    <path d="M 140 25 Q 145 15 150 25 Q 155 35 160 25 Q 165 15 170 25" stroke="#f59e0b" stroke-width="2" fill="none"/>
                                    <path d="M 140 75 Q 145 85 150 75 Q 155 65 160 75 Q 165 85 170 75" stroke="#ef4444" stroke-width="2" fill="none"/>
                                    <text x="100" y="90" text-anchor="middle" font-size="7" fill="#92400e">Label</text>
                                </svg>
                            `
                        },
        {
                            title: "Fiber Optic - Single Mode", 
                            icon: "fa-eye-dropper",
                            description: "Fiber with small core allowing one mode of light. Used for long distances with high bandwidth. Less modal dispersion.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Single Mode Fiber</title>
                                    <rect x="20" y="45" width="160" height="10" rx="5" fill="#fbbf24"/>
                                    <circle cx="15" cy="50" r="8" fill="#0ea5e9"/>
                                    <circle cx="185" cy="50" r="8" fill="#0ea5e9"/>
                                    <path d="M 23 50 L 177 50" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
                                    <text x="100" y="35" text-anchor="middle" font-size="8" fill="#0ea5e9">Port</text>
                                    <text x="100" y="75" text-anchor="middle" font-size="7" fill="#0ea5e9">Label</text>
                                    <defs>
                                    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                                    <polygon points="0,0 0,6 6,3" fill="#ef4444"/>
                                </svg>
                            `
                        },
        {
                            title: "Fiber Optic - Multimode", 
                            icon: "fa-expand",
                            description: "Fiber with larger core allowing multiple modes of light. Used for shorter distances within buildings. Higher modal dispersion.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Multimode Fiber</title>
                                    <rect x="20" y="42.5" width="160" height="15" rx="7.5" fill="#fbbf24"/>
                                    <circle cx="15" cy="50" r="10" fill="#0ea5e9"/>
                                    <circle cx="185" cy="50" r="10" fill="#0ea5e9"/>
                                    <path d="M 25 45 L 175 45" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow1)"/>
                                    <path d="M 25 50 L 175 50" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow2)"/>
                                    <path d="M 25 55 L 175 55" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#arrow3)"/>
                                    <text x="100" y="30" text-anchor="middle" font-size="8" fill="#0ea5e9">Port</text>
                                    <text x="100" y="80" text-anchor="middle" font-size="7" fill="#0ea5e9">Label</text>
                                    <defs>
                                    <marker id="arrow1" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                                    <polygon points="0,0 0,4 4,2" fill="#ef4444"/>
                                    <marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                                    <polygon points="0,0 0,4 4,2" fill="#10b981"/>
                                    <marker id="arrow3" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                                    <polygon points="0,0 0,4 4,2" fill="#8b5cf6"/>
                                </svg>
                            `
                        },
        {
                            title: "Cable Categories", 
                            icon: "fa-list-ol",
                            description: "Copper cable performance standards: Cat5e (1 Gigabit), Cat6 (10 Gigabit to 55m), Cat6a (10 Gigabit to 100m).",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Cable Categories</title>
                                    <rect x="10" y="20" width="50" height="15" rx="2" fill="#10b981"/>
                                    <text x="35" y="30" text-anchor="middle" font-size="8" fill="white">Port</text>
                                    <text x="35" y="45" text-anchor="middle" font-size="7" fill="#10b981">Label</text>
                                    <rect x="75" y="20" width="50" height="15" rx="2" fill="#3b82f6"/>
                                    <text x="100" y="30" text-anchor="middle" font-size="8" fill="white">Port</text>
                                    <text x="100" y="45" text-anchor="middle" font-size="7" fill="#3b82f6">Label</text>
                                    <rect x="140" y="20" width="50" height="15" rx="2" fill="#8b5cf6"/>
                                    <text x="165" y="30" text-anchor="middle" font-size="8" fill="white">Port</text>
                                    <text x="165" y="45" text-anchor="middle" font-size="7" fill="#8b5cf6">Label</text>
                                    <rect x="50" y="65" width="100" height="20" rx="3" fill="#ef4444"/>
                                    <text x="100" y="78" text-anchor="middle" font-size="8" fill="white">Port</text>
                                </svg>
                            `
                        },
        {
                            title: "Connectors", 
                            icon: "fa-plug",
                            description: "Physical connectors: RJ45 for copper Ethernet, LC/SC for fiber connections. Proper connector type ensures signal integrity.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Network Connectors</title>
                                    <rect x="30" y="25" width="40" height="20" rx="3" fill="#475569"/>
                                    <rect x="32" y="30" width="36" height="10" rx="2" fill="#fbbf24"/>
                                    <text x="50" y="37" text-anchor="middle" font-size="7" fill="#1e293b">Label</text>
                                    <text x="50" y="55" text-anchor="middle" font-size="7" fill="#475569">Label</text>
                                    <rect x="130" y="25" width="25" height="20" rx="3" fill="#475569"/>
                                    <rect x="132" y="30" width="21" height="10" rx="5" fill="#0ea5e9"/>
                                    <text x="142.5" y="37" text-anchor="middle" font-size="7" fill="white">Label</text>
                                    <text x="142.5" y="55" text-anchor="middle" font-size="7" fill="#475569">Label</text>
                                    <line x1="75" y1="35" x2="125" y2="35" stroke="#64748b" stroke-width="1.5"/>
                                </svg>
                            `
                        },
        {
                            title: "Ethernet Connections", 
                            icon: "fa-network-wired",
                            description: "Shared Media: Multiple devices compete for access (hubs, CSMA/CD). Point-to-Point: Direct connection between two devices (modern switches).",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Shared Media vs Point-to-Point</title>
                                    <text x="50" y="15" text-anchor="middle" font-size="8" font-weight="bold">Port</text>
                                    <circle cx="50" cy="35" r="10" fill="#dc2626"/>
                                    <text x="50" y="39" text-anchor="middle" font-size="6" fill="white">Label</text>
                                    <rect x="20" y="55" width="15" height="10" rx="1" fill="#475569"/>
                                    <rect x="65" y="55" width="15" height="10" rx="1" fill="#475569"/>
                                    <rect x="35" y="70" width="15" height="10" rx="1" fill="#475569"/>
                                    <line x1="30" y1="45" x2="27" y2="55" stroke="#64748b"/>
                                    <line x1="70" y1="45" x2="73" y2="55" stroke="#64748b"/>
                                    <line x1="50" y1="45" x2="42" y2="70" stroke="#64748b"/>
                                    <text x="150" y="15" text-anchor="middle" font-size="8" font-weight="bold">Port</text>
                                    <rect x="125" y="30" width="20" height="15" rx="2" fill="#16a34a"/>
                                    <text x="135" y="40" text-anchor="middle" font-size="6" fill="white">Label</text>
                                    <rect x="155" y="30" width="20" height="15" rx="2" fill="#16a34a"/>
                                    <text x="165" y="40" text-anchor="middle" font-size="6" fill="white">Label</text>
                                    <line x1="145" y1="37" x2="155" y2="37" stroke="#64748b" stroke-width="2"/>
                                </svg>
                            `
                        },
    ],

    // ISSUES
    issues: [
        {
                            title: "Interface/Cable Issues", 
                            icon: "fa-triangle-exclamation",
                            description: "Collisions occur in half-duplex, shared media. Errors from corrupted frames due to faulty cables. Duplex/Speed mismatches cause poor performance.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Duplex Mismatch causing errors</title>
                                    <rect x="10" y="40" width="50" height="20" rx="2" fill="#4f46e5"/>
                                    <text x="35" y="53" text-anchor="middle" font-size="7">Label</text>
                                    <text x="35" y="35" text-anchor="middle" font-size="7" fill="#16a34a">Label</text>
                                    <rect x="140" y="40" width="50" height="20" rx="2" fill="#4f46e5"/>
                                    <text x="165" y="53" text-anchor="middle" font-size="7">Label</text>
                                    <text x="165" y="35" text-anchor="middle" font-size="7" fill="#dc2626">Label</text>
                                    <line x1="60" y1="50" x2="140" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                    <path d="M 95 40 L 105 60 M 105 40 L 95 60" stroke="#ef4444" stroke-width="2.5"/>
                                    <text x="100" y="70" text-anchor="middle" font-size="8" fill="#ef4444">Port</text>
                                </svg>
                            `
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
                                    <text x="45" y="15" text-anchor="middle" font-size="9" font-weight="bold">Port</text>
                                    <path d="M20 30 H 70" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
                                    <text x="45" y="25" text-anchor="middle" font-size="7">Label</text>
                                    <path d="M70 45 H 20" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue-rev)"/>
                                    <text x="45" y="52" text-anchor="middle" font-size="7">Label</text>
                                    <path d="M20 60 H 70" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
                                    <text x="45" y="70" text-anchor="middle" font-size="7">Label</text>
                                    <text x="155" y="15" text-anchor="middle" font-size="9" font-weight="bold">Port</text>
                                    <path d="M130 30 H 180" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/>
                                    <path d="M130 45 H 180" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/>
                                    <path d="M130 60 H 180" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/>
                                    <defs>
                                    <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
                                    <marker id="arrow-blue-rev" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 10 0 L 0 5 L 10 10 z" fill="#2563eb" />
                                    <marker id="arrow-pink" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#db2777" />
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
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>IPv4 Address and Subnet Mask</title>
                                    <text x="100" y="25" text-anchor="middle" font-size="10" font-family="monospace" fill="#f8fafc">Fa</text>
                                    <text x="100" y="35" text-anchor="middle" font-size="8">Fa</text>
                                    <text x="100" y="60" text-anchor="middle" font-size="10" font-family="monospace" fill="#f8fafc">Fa</text>
                                    <text x="100" y="70" text-anchor="middle" font-size="8">Fa</text>
                                    <rect x="34" y="18" width="102" height="10" fill="rgba(139, 92, 246, 0.2)" rx="2"/>
                                    <text x="85" y="12" font-size="7">Fa</text>
                                    <rect x="137" y="18" width="28" height="10" fill="rgba(236, 72, 153, 0.2)" rx="2"/>
                                    <text x="151" y="12" font-size="7">Label</text>
                                </svg>
                            `
                        },
    ],

    // PRIVATEIPV4
    privateIpv4: [
        {
                            title: "Private IPv4 Addressing", 
                            icon: "fa-lock",
                            description: "RFC 1918 ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Not internet routable. NAT translates private to public IPs.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Private LAN using NAT to access Internet</title>
                                    <rect x="10" y="30" width="70" height="40" rx="5" fill="#14532d"/>
                                    <text x="45" y="55" text-anchor="middle" font-size="8" fill="#dcfce7">LAN</text>
                                    <path d="M 140 50 C 130 30, 170 30, 160 50 C 180 60, 150 80, 140 70 C 130 80, 110 60, 140 50 Z" fill="#4a4a0f"/>
                                    <text x="150" y="55" text-anchor="middle" font-size="8">Port</text>
                                    <rect x="90" y="40" width="40" height="20" rx="2" fill="#991b1b"/>
                                    <text x="110" y="53" text-anchor="middle" font-size="7" fill="#fecaca">Label</text>
                                    <line x1="80" y1="50" x2="90" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="130" y1="50" x2="142" y2="50" stroke="#64748b" stroke-width="1.5"/>
                                </svg>
                            `
                        },
    ],

    // IPV6
    ipv6: [
        {
                            title: "IPv6 Addressing", 
                            icon: "fa-hashtag",
                            description: "IPv6: 128-bit address in hexadecimal with colons (2001:db8:85a3::8a2e:370:7334). Prefix identifies network, typically /64 for LANs.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>IPv6 Address and Prefix</title>
                                    <text x="100" y="40" text-anchor="middle" font-size="8" font-family="monospace" fill="#f8fafc">Fa</text>
                                    <rect x="20" y="33" width="86" height="10" fill="rgba(96, 165, 250, 0.2)" rx="2"/>
                                    <text x="63" y="25" font-size="7">Fa</text>
                                    <rect x="107" y="33" width="74" height="10" fill="rgba(244, 114, 182, 0.2)" rx="2"/>
                                    <text x="144" y="25" font-size="7">Label</text>
                                    <text x="100" y="70" font-size="7" text-anchor="middle" fill="#94a3b8">Label</text>
                                </svg>
                            `
                        },
    ],

    // IPV6TYPES
    ipv6Types: [
        {
                            title: "IPv6 Address Types", 
                            icon: "fa-share-nodes",
                            description: "Unicast: One-to-one (Global, Unique Local, Link-Local). Anycast: One-to-nearest. Multicast: One-to-many group communication.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>IPv6 Address Types</title>
                                    <circle cx="20" cy="50" r="5" fill="#be123c"/>
                                    <text x="45" y="20" font-size="7">Label</text>
                                    <circle cx="70" cy="20" r="5" fill="#475569"/>
                                    <path d="M25 48 L 65 22" stroke="#64748b" marker-end="url(#arrow-sm)"/>
                                    <text x="100" y="40" font-size="7">Label</text>
                                    <circle cx="120" cy="20" r="5" fill="#475569"/>
                                    <circle cx="140" cy="60" r="5" fill="#475569"/>
                                    <path d="M25 50 L 116 23" stroke="#64748b" stroke-dasharray="2" marker-end="url(#arrow-sm)"/>
                                    <text x="155" y="20" font-size="7">Label</text>
                                    <circle cx="180" cy="40" r="5" fill="#475569"/>
                                    <circle cx="180" cy="60" r="5" fill="#475569"/>
                                    <circle cx="180" cy="80" r="5" fill="#475569"/>
                                    <path d="M25 52 L 175 42" stroke="#64748b" marker-end="url(#arrow-sm)"/>
                                    <path d="M25 52 L 175 78" stroke="#64748b" marker-end="url(#arrow-sm)"/>
                                    <defs>
                                    <marker id="arrow-sm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
                                </svg>
                            `
                        },
        {
                            title: "Modified EUI-64", 
                            icon: "fa-gears",
                            description: "Auto-generates Interface ID from MAC address. MAC is split, FFFE inserted in middle, 7th bit of first byte inverted (0→1).",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>EUI-64 Process</title>
                                    <text x="100" y="20" text-anchor="middle" font-size="8" font-family="monospace">Fa</text>
                                    <path d="M65 25 L 65 35 L 50 45" stroke="#64748b" fill="none"/>
                                    <path d="M135 25 L 135 35 L 150 45" stroke="#64748b" fill="none"/>
                                    <text x="35" y="52" text-anchor="middle" font-size="8" font-family="monospace">Fa</text>
                                    <text x="165" y="52" text-anchor="middle" font-size="8" font-family="monospace">Fa</text>
                                    <rect x="80" y="45" width="40" height="15" fill="#166534" rx="2"/>
                                    <text x="100" y="55" text-anchor="middle" font-size="8" fill="#6ee7b7">Fa</text>
                                    <text x="100" y="80" text-anchor="middle" font-size="8" font-family="monospace">Fa</text>
                                </svg>
                            `
                        },
    ],

    // CLIENTOS
    clientOs: [
        {
                            title: "Verify IP Parameters", 
                            icon: "fa-terminal",
                            description: "Commands to view IP configuration: Windows: ipconfig /all, macOS/Linux: ifconfig or ip addr show. Shows IP, subnet mask, gateway, DNS.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Terminal showing ipconfig</title>
                                    <rect x="10" y="10" width="180" height="80" rx="3" fill="#1e293b"/>
                                    <rect x="10" y="10" width="180" height="15" rx="3" ry="0" fill="#475569"/>
                                    <circle cx="20" cy="17.5" r="3" fill="#ef4444"/>
                                    <circle cx="30" cy="17.5" r="3" fill="#fbbd23"/>
                                    <circle cx="40" cy="17.5" r="3" fill="#4ade80"/>
                                    <text x="20" y="40" font-family="monospace" fill="#e2e8f0" font-size="7">Fa</text>
                                    <text x="20" y="55" font-family="monospace" fill="white" font-size="7">Fa</text>
                                    <text x="20" y="65" font-family="monospace" fill="white" font-size="7">Fa</text>
                                    <text x="20" y="75" font-family="monospace" fill="white" font-size="7">Fa</text>
                                </svg>
                            `
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
                                    <path d="M10 80 C 30 20, 50 20, 70 80" stroke="#3b82f6" stroke-width="2" fill="#3b82f644"/>
                                    <text x="40" y="85" text-anchor="middle" font-size="8">Port</text>
                                    <path d="M60 80 C 80 20, 100 20, 120 80" stroke="#10b981" stroke-width="2" fill="#10b98144"/>
                                    <text x="90" y="85" text-anchor="middle" font-size="8">Port</text>
                                    <path d="M110 80 C 130 20, 150 20, 170 80" stroke="#f97316" stroke-width="2" fill="#f9731644"/>
                                    <text x="140" y="85" text-anchor="middle" font-size="8">Port</text>
                                    <path d="M35 80 C 55 40, 75 40, 95 80" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2" fill="none"/>
                                    <text x="65" y="75" text-anchor="middle" font-size="7" fill="#ef4444">Label</text>
                                </svg>
                            `
                        },
        {
                            title: "Wireless Concepts", 
                            icon: "fa-key",
                            description: "SSID: Public name of wireless network. RF: Radio Frequency medium. Encryption: WPA3 (modern) secures wireless communication.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Wireless concepts</title>
                                    <circle cx="50" cy="50" r="10" fill="#2563eb"/>
                                    <text x="50" y="53" text-anchor="middle" font-size="8" fill="white">R</text>
                                    <path d="M60 50 A 20 20 0 0 1 75 35" stroke="#3b82f6" fill="none" stroke-linecap="round"/>
                                    <path d="M65 50 A 40 40 0 0 1 100 15" stroke="#3b82f6" fill="none" stroke-linecap="round"/>
                                    <rect x="130" y="40" width="60" height="20" rx="3" fill="#1e293b" stroke="#334155"/>
                                    <text x="160" y="53" text-anchor="middle" font-size="8" fill="#e2e8f0">Port</text>
                                    <path d="M 105 30 L 112 37 L 105 44" stroke="#f59e0b" stroke-width="2" fill="none"/>
                                    <path d="M 112 30 L 119 37 L 112 44" stroke="#f59e0b" stroke-width="2" fill="none"/>
                                </svg>
                            `
                        },
    ],

    // VIRTUALIZATION
    virtualization: [
        {
                            title: "Virtualization", 
                            icon: "fa-display",
                            description: "Creating virtual versions of resources. Server virtualization: Hypervisor runs multiple VMs. Containers: Lightweight alternative. VRFs: Virtual routing tables.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Server Virtualization</title>
                                    <rect x="10" y="70" width="180" height="20" rx="3" fill="#334155"/>
                                    <text x="100" y="83" text-anchor="middle" font-size="8" fill="white">Port</text>
                                    <rect x="20" y="55" width="160" height="10" rx="2" fill="#4f46e5"/>
                                    <text x="100" y="62" text-anchor="middle" font-size="7" fill="white">Fa</text>
                                    <rect x="30" y="20" width="40" height="30" rx="2" fill="#166534"/>
                                    <text x="50" y="40" text-anchor="middle" font-size="8" fill="#d1fae5">Fa</text>
                                    <rect x="80" y="20" width="40" height="30" rx="2" fill="#166534"/>
                                    <text x="100" y="40" text-anchor="middle" font-size="8" fill="#d1fae5">Fa</text>
                                    <rect x="130" y="20" width="40" height="30" rx="2" fill="#166534"/>
                                    <text x="150" y="40" text-anchor="middle" font-size="8" fill="#d1fae5">Fa</text>
                                </svg>
                            `
                        },
    ],

    // SWITCHING
    switching: [
        {
                            title: "MAC Learning & Aging", 
                            icon: "fa-brain",
                            description: "Learning: Switch adds source MAC to table with ingress port. Aging: Entries removed after inactivity (typically 300 seconds).",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>MAC Address Learning</title>
                                    <rect x="10" y="70" width="20" height="15" rx="2" fill="#475569"/>
                                    <text x="20" y="90" font-size="6">Label</text>
                                    <rect x="70" y="40" width="60" height="20" rx="2" fill="#4f46e5"/>
                                    <text x="100" y="53" font-size="7">Fa</text>
                                    <path d="M 20 70 L 80 60" stroke="#64748b" stroke-width="1.5"/>
                                    <text x="45" y="60" font-size="6" fill="#60a5fa">Fa</text>
                                    <rect x="140" y="10" width="55" height="30" rx="2" fill="#1e293b"/>
                                    <text x="167" y="20" font-size="6" fill="#64748b">Fa</text>
                                    <text x="167" y="32" font-size="6" fill="#4ade80">Fa</text>
                                    <path d="M120 45 Q 140 40 140 25" stroke="#4ade80" fill="none" stroke-dasharray="2"/>
                                </svg>
                            `
                        },
        {
                            title: "Frame Forwarding", 
                            icon: "fa-paper-plane",
                            description: "If destination MAC is in table, switch sends frame only out the specific port associated with that MAC. This is switch efficiency.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Frame Forwarding to a known MAC</title>
                                    <rect x="70" y="40" width="60" height="20" rx="2" fill="#4f46e5"/>
                                    <text x="100" y="53" font-size="7">Label</text>
                                    <text x="20" y="10" font-size="6">Label</text>
                                    <line x1="80" y1="40" x2="20" y2="15"/>
                                    <text x="100" y="10" font-size="6">Label</text>
                                    <line x1="100" y1="40" x2="100" y2="15"/>
                                    <text x="180" y="10" font-size="6">Label</text>
                                    <line x1="120" y1="40" x2="180" y2="15"/>
                                    <text x="50" y="80" font-size="7">Label</text>
                                    <path d="M100 80 L 100 60" stroke="#64748b" stroke-width="2" marker-start="url(#arrow-rev)"/>
                                    <path d="M 100 50 L 115 50" stroke="#16a34a" stroke-width="2" />
                                    <path d="M 115 50 L 178 17" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow-grn)"/>
                                    <defs>
                                    <marker id="arrow-rev" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                    <path d="M 0 5 L 10 0 L 10 10 Z" fill="#64748b"/>
                                    <marker id="arrow-grn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/>
                                </svg>
                            `
                        },
        {
                            title: "Frame Flooding", 
                            icon: "fa-water",
                            description: "If destination MAC is unknown (or broadcast), switch floods frame out all ports except incoming port, hoping destination will see it.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>Frame Flooding for an unknown MAC</title>
                                    <rect x="70" y="40" width="60" height="20" rx="2" fill="#4f46e5"/>
                                    <text x="100" y="53" font-size="7">Label</text>
                                    <text x="20" y="10" font-size="6">Label</text>
                                    <line x1="80" y1="40" x2="20" y2="15"/>
                                    <text x="100" y="10" font-size="6">Label</text>
                                    <line x1="100" y1="40" x2="100" y2="15"/>
                                    <text x="180" y="10" font-size="6">Label</text>
                                    <line x1="120" y1="40" x2="180" y2="15"/>
                                    <text x="50" y="80" font-size="7">Label</text>
                                    <path d="M20 20 L 80 42" stroke="#64748b" stroke-width="2" marker-start="url(#arrow-rev)"/>
                                    <path d="M90 40 L 98 17" stroke="#be123c" stroke-dasharray="2" marker-end="url(#arrow-red)"/>
                                    <path d="M110 40 L 178 17" stroke="#be123c" stroke-dasharray="2" marker-end="url(#arrow-red)"/>
                                    <defs>
                                    <marker id="arrow-rev" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                    <path d="M 0 5 L 10 0 L 10 10 Z" fill="#64748b"/>
                                    <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#be123c"/>
                                </svg>
                            `
                        },
        {
                            title: "MAC Address Table", 
                            icon: "fa-table-list",
                            description: "Table in switch memory mapping MAC addresses to ports. Core component allowing intelligent forwarding instead of flooding like a hub.",
                            visual: `
                                <svg viewBox="0 0 400 200">
                                    <title>MAC Address Table</title>
                                    <rect x="40" y="15" width="120" height="70" rx="3" fill="#1e293b" stroke="#334155"/>
                                    <line x1="40" y1="35" x2="160" y2="35" stroke="#334155"/>
                                    <line x1="100" y1="15" x2="100" y2="85" stroke="#334155"/>
                                    <text x="70" y="28" font-size="8" font-weight="bold" fill="#94a3b8">Fa</text>
                                    <text x="130" y="28" font-size="8" font-weight="bold" fill="#94a3b8">Fa</text>
                                    <text x="70" y="48" font-family="monospace" font-size="7" fill="#e2e8f0">Fa</text>
                                    <text x="130" y="48" font-family="monospace" font-size="7" fill="#e2e8f0">Fa</text>
                                    <text x="70" y="60" font-family="monospace" font-size="7" fill="#e2e8f0">Fa</text>
                                    <text x="130" y="60" font-family="monospace" font-size="7" fill="#e2e8f0">Fa</text>
                                    <text x="70" y="72" font-family="monospace" font-size="7" fill="#e2e8f0">Fa</text>
                                    <text x="130" y="72" font-family="monospace" font-size="7" fill="#e2e8f0">Fa</text>
                                </svg>
                            `
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