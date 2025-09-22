/**
 * CCNA Section 2: Complete Topic Data
 * Auto-extracted from section2.html for modular architecture
 * CORRECTED AND REFINED VERSION
 */

const SECTION2_DATA = {
    "2.1": {
        title: "Routing Table Components",
        elementId: "routingTableGrid",
        topics: [
            {
                title: "Route Source",
                icon: "fa-map-signs",
                description: "Identifies how the route was learned: Connected (C), Static (S), Dynamic protocols like RIP (R), OSPF (O), EIGRP (D). Each source has different administrative distance values.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="20" y="30" width="60" height="30" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="50" y="50" text-anchor="middle" fill="white" font-size="12">C - 0</text>
                        <rect x="100" y="30" width="60" height="30" fill="#f97316" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="130" y="50" text-anchor="middle" fill="white" font-size="12">S - 1</text>
                        <rect x="180" y="30" width="60" height="30" fill="#eab308" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="210" y="50" text-anchor="middle" fill="white" font-size="12">O - 110</text>
                        <rect x="260" y="30" width="60" height="30" fill="#22c55e" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="290" y="50" text-anchor="middle" fill="white" font-size="12">R - 120</text>
                        <text x="200" y="100" text-anchor="middle" fill="#4f46e5" font-size="14">Administrative Distance</text>
                        <text x="200" y="120" text-anchor="middle" fill="#94a3b8" font-size="12">Lower = More Trusted</text>
                    </svg>
                `
            },
            {
                title: "Destination Network",
                icon: "fa-bullseye",
                description: "The network address and subnet mask (prefix length) that defines the range of IP addresses reachable through this route entry.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="60" width="150" height="80" fill="#1e293b" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="125" y="85" text-anchor="middle" fill="#e2e8f0" font-size="14">192.168.1.0/24</text>
                        <text x="125" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">Network: 192.168.1.0</text>
                        <text x="125" y="120" text-anchor="middle" fill="#94a3b8" font-size="10">Mask: 255.255.255.0</text>
                        <text x="125" y="135" text-anchor="middle" fill="#94a3b8" font-size="10">Hosts: 192.168.1.1-254</text>
                        <rect x="220" y="80" width="120" height="40" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="280" y="105" text-anchor="middle" fill="white" font-size="12">Destination Range</text>
                    </svg>
                `
            },
            {
                title: "Administrative Distance",
                icon: "fa-star",
                description: "A trustworthiness rating (0-255) used to select the best route when multiple routing protocols provide paths to the same destination.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="40" width="80" height="30" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="60" text-anchor="middle" fill="white" font-size="11">Connected: 0</text>
                        <rect x="50" y="80" width="80" height="30" fill="#f97316" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="100" text-anchor="middle" fill="white" font-size="11">Static: 1</text>
                        <rect x="50" y="120" width="80" height="30" fill="#eab308" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="140" text-anchor="middle" fill="white" font-size="11">OSPF: 110</text>
                        <rect x="50" y="160" width="80" height="30" fill="#22c55e" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="180" text-anchor="middle" fill="white" font-size="11">RIP: 120</text>
                        <path d="M 150 100 L 220 100" stroke="#4f46e5" stroke-width="3"/>
                        <text x="260" y="90" fill="#4f46e5" font-size="14">Best Path</text>
                        <text x="260" y="110" fill="#94a3b8" font-size="12">Lowest AD Wins</text>
                    </svg>
                `
            },
            {
                title: "Next Hop Address",
                icon: "fa-arrow-right",
                description: "The IP address of the next router in the path to the destination, or the exit interface for directly connected networks.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <circle cx="80" cy="100" r="30" fill="#1e293b" stroke="#4f46e5" stroke-width="2"/>
                        <text x="80" y="105" text-anchor="middle" fill="#e2e8f0" font-size="12">R1</text>
                        <circle cx="200" cy="100" r="30" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                        <text x="200" y="105" text-anchor="middle" fill="#e2e8f0" font-size="12">R2</text>
                        <circle cx="320" cy="100" r="30" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
                        <text x="320" y="105" text-anchor="middle" fill="#e2e8f0" font-size="12">R3</text>
                        <path d="M 110 100 L 170 100" stroke="#4f46e5" stroke-width="3"/>
                        <path d="M 230 100 L 290 100" stroke="#10b981" stroke-width="3"/>
                        <text x="140" y="85" text-anchor="middle" fill="#4f46e5" font-size="10">10.0.1.2</text>
                        <text x="260" y="85" text-anchor="middle" fill="#10b981" font-size="10">10.0.2.3</text>
                        <text x="200" y="40" text-anchor="middle" fill="#fbbf24" font-size="14">Next Hop Chain</text>
                    </svg>
                `
            }
        ]
    },
    "2.2": {
        title: "Router Forwarding Decision",
        elementId: "forwardingGrid",
        topics: [
            {
                title: "Longest Prefix Match",
                icon: "fa-crosshairs",
                description: "When multiple routes match a destination, the router selects the route with the longest subnet mask (most specific route).",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="40" width="150" height="25" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="125" y="57" text-anchor="middle" fill="white" font-size="11">192.168.1.0/24 ✓</text>
                        <rect x="50" y="80" width="150" height="25" fill="#64748b" stroke="#64748b" stroke-width="2" rx="3"/>
                        <text x="125" y="97" text-anchor="middle" fill="#94a3b8" font-size="11">192.168.0.0/16</text>
                        <rect x="50" y="120" width="150" height="25" fill="#64748b" stroke="#64748b" stroke-width="2" rx="3"/>
                        <text x="125" y="137" text-anchor="middle" fill="#94a3b8" font-size="11">0.0.0.0/0</text>
                        <rect x="250" y="70" width="120" height="60" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                        <text x="310" y="90" text-anchor="middle" fill="#fbbf24" font-size="12">Destination:</text>
                        <text x="310" y="110" text-anchor="middle" fill="#fbbf24" font-size="12">192.168.1.100</text>
                        <path d="M 200 52 L 250 90" stroke="#ef4444" stroke-width="3"/>
                    </svg>
                `
            },
            {
                title: "Route Selection Priority",
                icon: "fa-trophy",
                description: "When multiple routing protocols provide the same prefix length, administrative distance determines the preferred route.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="60" width="100" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="100" y="80" text-anchor="middle" fill="white" font-size="11">OSPF: AD 110 ✓</text>
                        <rect x="50" y="110" width="100" height="30" fill="#64748b" stroke="#64748b" stroke-width="2" rx="5"/>
                        <text x="100" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">RIP: AD 120</text>
                        <rect x="200" y="80" width="120" height="40" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                        <text x="260" y="105" text-anchor="middle" fill="#fbbf24" font-size="12">Same Prefix /24</text>
                        <path d="M 150 75 L 200 95" stroke="#10b981" stroke-width="3"/>
                        <text x="100" y="40" text-anchor="middle" fill="#10b981" font-size="14">Lower AD Wins</text>
                    </svg>
                `
            }
        ]
    },
    "2.3": {
        title: "IPv4 and IPv6 Static Routing",
        elementId: "staticRoutingGrid",
        topics: [
            {
                title: "IPv4 Static Routes",
                icon: "fa-route",
                description: "Manually configured routes that define a specific path for IPv4 packets. Command: ip route destination mask next-hop [admin-distance]",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="30" y="80" width="80" height="40" fill="#1e293b" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="70" y="100" text-anchor="middle" fill="#e2e8f0" font-size="11">Router A</text>
                        <text x="70" y="115" text-anchor="middle" fill="#94a3b8" font-size="9">192.168.1.1</text>
                        <rect x="290" y="80" width="80" height="40" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="5"/>
                        <text x="330" y="100" text-anchor="middle" fill="#e2e8f0" font-size="11">Network B</text>
                        <text x="330" y="115" text-anchor="middle" fill="#94a3b8" font-size="9">10.0.0.0/24</text>
                        <path d="M 110 100 L 290 100" stroke="#fbbf24" stroke-width="2"/>
                        <text x="200" y="90" text-anchor="middle" fill="#fbbf24" font-size="10">Static Route</text>
                        <rect x="120" y="140" width="160" height="30" fill="#334155" stroke="#4f46e5" stroke-width="1" rx="3"/>
                        <text x="200" y="160" text-anchor="middle" fill="#e2e8f0" font-size="9">ip route 10.0.0.0 255.255.255.0 192.168.1.2</text>
                    </svg>
                `
            },
            {
                title: "IPv6 Static Routes",
                icon: "fa-hashtag",
                description: "Static routing for IPv6 networks using 128-bit addresses. Command: ipv6 route destination/prefix-length next-hop",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="40" y="60" width="120" height="40" fill="#1e293b" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="100" y="85" text-anchor="middle" fill="#e2e8f0" font-size="10">2001:db8:1::/64</text>
                        <rect x="240" y="60" width="120" height="40" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="5"/>
                        <text x="300" y="85" text-anchor="middle" fill="#e2e8f0" font-size="10">2001:db8:2::/64</text>
                        <path d="M 160 80 L 240 80" stroke="#fbbf24" stroke-width="2"/>
                        <text x="200" y="70" text-anchor="middle" fill="#fbbf24" font-size="10">IPv6 Route</text>
                        <rect x="20" y="130" width="360" height="40" fill="#334155" stroke="#4f46e5" stroke-width="1" rx="3"/>
                        <text x="200" y="145" text-anchor="middle" fill="#e2e8f0" font-size="8">ipv6 route 2001:db8:2::/64 2001:db8:1::2</text>
                        <text x="200" y="160" text-anchor="middle" fill="#94a3b8" font-size="8">ipv6 route 2001:db8:2::/64 serial0/0/0</text>
                    </svg>
                `
            },
            {
                title: "Default Routes",
                icon: "fa-door-open",
                description: "Default routes (0.0.0.0/0 for IPv4, ::/0 for IPv6) handle traffic when no specific route exists. Also called gateway of last resort.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24"/>
                            </marker>
                        </defs>
                        <circle cx="200" cy="100" r="40" fill="#1e293b" stroke="#4f46e5" stroke-width="2"/>
                        <text x="200" y="105" text-anchor="middle" fill="#e2e8f0" font-size="12">Router</text>
                        <path d="M 160 80 L 120 60" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <path d="M 240 80 L 280 60" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <path d="M 240 120 L 280 140" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <path d="M 160 120 L 120 140" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <text x="200" y="30" text-anchor="middle" fill="#fbbf24" font-size="14">Default Gateway</text>
                        <rect x="100" y="170" width="200" height="20" fill="#334155" stroke="#4f46e5" stroke-width="1" rx="3"/>
                        <text x="200" y="185" text-anchor="middle" fill="#e2e8f0" font-size="9">ip route 0.0.0.0 0.0.0.0 ISP_Gateway</text>
                    </svg>
                `
            },
            {
                title: "Floating Static Routes",
                icon: "fa-life-ring",
                description: "Backup static routes with higher administrative distance that become active when the primary route fails.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <defs>
                            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#10b981"/>
                            </marker>
                        </defs>
                        <rect x="50" y="50" width="80" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="70" text-anchor="middle" fill="white" font-size="10">Primary AD 1</text>
                        <rect x="50" y="100" width="80" height="30" fill="#64748b" stroke="#64748b" stroke-width="2" rx="5"/>
                        <text x="90" y="120" text-anchor="middle" fill="#94a3b8" font-size="10">Backup AD 5</text>
                        <rect x="270" y="75" width="100" height="30" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                        <text x="320" y="95" text-anchor="middle" fill="#fbbf24" font-size="11">Destination</text>
                        <path d="M 130 65 L 270 85" stroke="#10b981" stroke-width="3" marker-end="url(#arrowhead2)"/>
                        <path d="M 130 115 L 270 95" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5"/>
                        <text x="200" y="40" text-anchor="middle" fill="#10b981" font-size="12">Active Route</text>
                        <text x="200" y="150" text-anchor="middle" fill="#64748b" font-size="12">Standby Route</text>
                    </svg>
                `
            }
        ]
    },
    "2.4": {
        title: "Single Area OSPFv2",
        elementId: "ospfGrid",
        topics: [
            {
                title: "OSPF Neighbor Formation",
                icon: "fa-handshake",
                description: "OSPF routers discover neighbors through Hello packets and form adjacencies. Process: Down → Init → 2-Way → ExStart → Exchange → Loading → Full.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <circle cx="120" cy="100" r="30" fill="#1e293b" stroke="#4f46e5" stroke-width="2"/>
                        <text x="120" y="105" text-anchor="middle" fill="#e2e8f0" font-size="11">Router 1</text>
                        <circle cx="280" cy="100" r="30" fill="#1e293b" stroke="#4f46e5" stroke-width="2"/>
                        <text x="280" y="105" text-anchor="middle" fill="#e2e8f0" font-size="11">Router 2</text>
                        <path d="M 150 90 Q 200 70 250 90" stroke="#10b981" stroke-width="2" fill="none"/>
                        <text x="200" y="70" text-anchor="middle" fill="#10b981" font-size="10">Hello</text>
                        <path d="M 250 110 Q 200 130 150 110" stroke="#fbbf24" stroke-width="2" fill="none"/>
                        <text x="200" y="140" text-anchor="middle" fill="#fbbf24" font-size="10">Hello Reply</text>
                        <rect x="170" y="40" width="60" height="20" fill="#10b981" stroke="#4f46e5" stroke-width="1" rx="3"/>
                        <text x="200" y="55" text-anchor="middle" fill="white" font-size="9">2-Way State</text>
                    </svg>
                `
            },
            {
                title: "LSA Types",
                icon: "fa-envelope",
                description: "Link State Advertisements carry topology information. Type 1: Router LSA, Type 2: Network LSA, Type 3: Summary LSA for inter-area routes.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="60" width="80" height="30" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="80" text-anchor="middle" fill="white" font-size="10">Type 1 LSA</text>
                        <rect x="160" y="60" width="80" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="200" y="80" text-anchor="middle" fill="white" font-size="10">Type 2 LSA</text>
                        <rect x="270" y="60" width="80" height="30" fill="#fbbf24" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="310" y="80" text-anchor="middle" fill="white" font-size="10">Type 3 LSA</text>
                        <text x="90" y="110" text-anchor="middle" fill="#ef4444" font-size="9">Router Links</text>
                        <text x="200" y="110" text-anchor="middle" fill="#10b981" font-size="9">Network Links</text>
                        <text x="310" y="110" text-anchor="middle" fill="#fbbf24" font-size="9">Summary</text>
                        <text x="200" y="140" text-anchor="middle" fill="#4f46e5" font-size="12">Link State Database (LSDB)</text>
                    </svg>
                `
            }
        ]
    },
    "2.5": {
        title: "EIGRP Fundamentals",
        elementId: "eigrpGrid",
        topics: [
            {
                title: "DUAL Algorithm",
                icon: "fa-brain",
                description: "Diffusing Update Algorithm ensures loop-free routing. Calculates Feasible Distance (FD) and Advertised Distance (AD) to determine successor and feasible successor routes.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <circle cx="200" cy="60" r="25" fill="#1e293b" stroke="#4f46e5" stroke-width="2"/>
                        <text x="200" y="65" text-anchor="middle" fill="#e2e8f0" font-size="10">Source</text>
                        <circle cx="120" cy="140" r="25" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                        <text x="120" y="145" text-anchor="middle" fill="#e2e8f0" font-size="10">R1</text>
                        <circle cx="280" cy="140" r="25" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
                        <text x="280" y="145" text-anchor="middle" fill="#e2e8f0" font-size="10">R2</text>
                        <path d="M 180 80 L 140 120" stroke="#10b981" stroke-width="3"/>
                        <path d="M 220 80 L 260 120" stroke="#fbbf24" stroke-width="2"/>
                        <text x="140" y="100" text-anchor="middle" fill="#10b981" font-size="10">FD: 100</text>
                        <text x="260" y="100" text-anchor="middle" fill="#fbbf24" font-size="10">FD: 150</text>
                        <text x="120" y="175" text-anchor="middle" fill="#10b981" font-size="9">Successor</text>
                        <text x="280" y="175" text-anchor="middle" fill="#fbbf24" font-size="9">Feasible Successor</text>
                        <text x="200" y="25" text-anchor="middle" fill="#4f46e5" font-size="14">DUAL Path Selection</text>
                    </svg>
                `
            },
            {
                title: "EIGRP Metrics",
                icon: "fa-tachometer-alt",
                description: "Composite metric using bandwidth, delay, reliability, load, and MTU. Default calculation: (K1*BW + K3*Delay) * 256. K1=K3=1, others=0 by default.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="40" width="70" height="25" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="85" y="57" text-anchor="middle" fill="white" font-size="9">Bandwidth</text>
                        <rect x="130" y="40" width="70" height="25" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="165" y="57" text-anchor="middle" fill="white" font-size="9">Delay</text>
                        <rect x="210" y="40" width="70" height="25" fill="#64748b" stroke="#64748b" stroke-width="2" rx="3"/>
                        <text x="245" y="57" text-anchor="middle" fill="#94a3b8" font-size="9">Reliability</text>
                        <rect x="290" y="40" width="70" height="25" fill="#64748b" stroke="#64748b" stroke-width="2" rx="3"/>
                        <text x="325" y="57" text-anchor="middle" fill="#94a3b8" font-size="9">Load</text>
                        <text x="85" y="85" text-anchor="middle" fill="#10b981" font-size="8">K1 = 1</text>
                        <text x="165" y="85" text-anchor="middle" fill="#10b981" font-size="8">K3 = 1</text>
                        <text x="245" y="85" text-anchor="middle" fill="#64748b" font-size="8">K2 = 0</text>
                        <text x="325" y="85" text-anchor="middle" fill="#64748b" font-size="8">K4 = 0</text>
                        <rect x="100" y="120" width="200" height="30" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                        <text x="200" y="140" text-anchor="middle" fill="#fbbf24" font-size="10">(K1*BW + K3*Delay) * 256</text>
                        <text x="200" y="20" text-anchor="middle" fill="#4f46e5" font-size="14">EIGRP Composite Metric</text>
                    </svg>
                `
            }
        ]
    },
    "2.6": {
        title: "Multi-Area OSPF",
        elementId: "multiOspfGrid",
        topics: [
            {
                title: "OSPF Areas",
                icon: "fa-sitemap",
                description: "Hierarchical design with Area 0 (backbone) and non-backbone areas. ABRs connect areas, ASBRs connect to external domains. Reduces LSA flooding.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="150" y="30" width="100" height="60" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="200" y="65" text-anchor="middle" fill="white" font-size="12">Area 0</text>
                        <text x="200" y="80" text-anchor="middle" fill="white" font-size="10">Backbone</text>
                        <rect x="50" y="120" width="80" height="50" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="145" text-anchor="middle" fill="white" font-size="11">Area 1</text>
                        <rect x="270" y="120" width="80" height="50" fill="#fbbf24" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="310" y="145" text-anchor="middle" fill="white" font-size="11">Area 2</text>
                        <path d="M 175 90 L 120 120" stroke="#4f46e5" stroke-width="2"/>
                        <path d="M 225 90 L 280 120" stroke="#4f46e5" stroke-width="2"/>
                        <text x="135" y="110" text-anchor="middle" fill="#4f46e5" font-size="9">ABR</text>
                        <text x="265" y="110" text-anchor="middle" fill="#4f46e5" font-size="9">ABR</text>
                        <text x="200" y="15" text-anchor="middle" fill="#4f46e5" font-size="14">OSPF Hierarchy</text>
                    </svg>
                `
            },
            {
                title: "OSPF Network Types",
                icon: "fa-network-wired",
                description: "Point-to-point (no DR election), Broadcast (DR/BDR election), NBMA, Point-to-multipoint. Affects hello timers and neighbor relationships.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="40" width="80" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="90" y="60" text-anchor="middle" fill="white" font-size="10">Point-to-Point</text>
                        <rect x="160" y="40" width="80" height="30" fill="#fbbf24" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="200" y="60" text-anchor="middle" fill="white" font-size="10">Broadcast</text>
                        <rect x="50" y="90" width="80" height="30" fill="#f97316" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="90" y="110" text-anchor="middle" fill="white" font-size="10">NBMA</text>
                        <rect x="160" y="90" width="80" height="30" fill="#8b5cf6" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="200" y="110" text-anchor="middle" fill="white" font-size="10">Point-to-Multi</text>
                        <text x="90" y="140" text-anchor="middle" fill="#10b981" font-size="8">No DR/BDR</text>
                        <text x="200" y="140" text-anchor="middle" fill="#fbbf24" font-size="8">DR/BDR Election</text>
                        <text x="90" y="155" text-anchor="middle" fill="#f97316" font-size="8">Manual Neighbors</text>
                        <text x="200" y="155" text-anchor="middle" fill="#8b5cf6" font-size="8">No DR Election</text>
                        <text x="145" y="20" text-anchor="middle" fill="#4f46e5" font-size="14">OSPF Network Types</text>
                    </svg>
                `
            },
            {
                title: "OSPF Area Types",
                icon: "fa-layer-group",
                description: "Standard areas allow all LSA types. Stub areas block Type 4/5 LSAs. Totally Stubby areas block Type 3/4/5 LSAs. NSSA allows Type 7 LSAs.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="50" width="70" height="25" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="85" y="67" text-anchor="middle" fill="white" font-size="9">Standard</text>
                        <rect x="130" y="50" width="70" height="25" fill="#fbbf24" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="165" y="67" text-anchor="middle" fill="white" font-size="9">Stub</text>
                        <rect x="210" y="50" width="70" height="25" fill="#f97316" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="245" y="67" text-anchor="middle" fill="white" font-size="9">Totally Stub</text>
                        <rect x="290" y="50" width="70" height="25" fill="#8b5cf6" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="325" y="67" text-anchor="middle" fill="white" font-size="9">NSSA</text>
                        <text x="85" y="95" text-anchor="middle" fill="#10b981" font-size="8">All LSAs</text>
                        <text x="165" y="95" text-anchor="middle" fill="#fbbf24" font-size="8">No Type 4/5</text>
                        <text x="245" y="95" text-anchor="middle" fill="#f97316" font-size="8">No Type 3/4/5</text>
                        <text x="325" y="95" text-anchor="middle" fill="#8b5cf6" font-size="8">Allow Type 7</text>
                        <text x="195" y="30" text-anchor="middle" fill="#4f46e5" font-size="14">OSPF Area Types</text>
                        <text x="195" y="130" text-anchor="middle" fill="#94a3b8" font-size="12">LSA Filtering for Scalability</text>
                    </svg>
                `
            }
        ]
    },
    "2.7": {
        title: "Route Redistribution",
        elementId: "redistributionGrid",
        topics: [
            {
                title: "Redistribution Basics",
                icon: "fa-share-nodes",
                description: "Process of sharing routes between different routing protocols. Requires metric conversion and administrative distance consideration.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="70" width="80" height="40" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="90" text-anchor="middle" fill="white" font-size="11">OSPF</text>
                        <text x="90" y="105" text-anchor="middle" fill="white" font-size="9">Cost Metric</text>
                        <rect x="270" y="70" width="80" height="40" fill="#fbbf24" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="310" y="90" text-anchor="middle" fill="white" font-size="11">EIGRP</text>
                        <text x="310" y="105" text-anchor="middle" fill="white" font-size="9">Composite</text>
                        <rect x="160" y="70" width="80" height="40" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="200" y="90" text-anchor="middle" fill="white" font-size="11">Router</text>
                        <text x="200" y="105" text-anchor="middle" fill="white" font-size="9">Redistributes</text>
                        <path d="M 130 85 L 160 85" stroke="#4f46e5" stroke-width="2"/>
                        <path d="M 240 85 L 270 85" stroke="#4f46e5" stroke-width="2"/>
                        <text x="145" y="75" text-anchor="middle" fill="#4f46e5" font-size="8">Routes</text>
                        <text x="255" y="75" text-anchor="middle" fill="#4f46e5" font-size="8">Routes</text>
                        <text x="200" y="40" text-anchor="middle" fill="#4f46e5" font-size="14">Route Redistribution</text>
                        <text x="200" y="140" text-anchor="middle" fill="#94a3b8" font-size="12">Metric Conversion Required</text>
                    </svg>
                `
            },
            {
                title: "Redistribution Loops",
                icon: "fa-sync",
                description: "Routing loops can occur during redistribution. Prevention methods include route tagging, filtering, and careful administrative distance tuning.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <defs>
                            <marker id="arrowloop" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444"/>
                            </marker>
                        </defs>
                        <circle cx="120" cy="80" r="30" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                        <text x="120" y="85" text-anchor="middle" fill="#e2e8f0" font-size="10">OSPF</text>
                        <circle cx="280" cy="80" r="30" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
                        <text x="280" y="85" text-anchor="middle" fill="#e2e8f0" font-size="10">EIGRP</text>
                        <circle cx="200" cy="140" r="30" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
                        <text x="200" y="145" text-anchor="middle" fill="#e2e8f0" font-size="10">RIP</text>
                        <path d="M 145 95 Q 200 120 255 95" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#arrowloop)"/>
                        <path d="M 255 65 Q 200 40 145 65" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#arrowloop)"/>
                        <path d="M 175 125 Q 150 100 150 80" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#arrowloop)"/>
                        <text x="200" y="20" text-anchor="middle" fill="#ef4444" font-size="14">Redistribution Loop</text>
                        <text x="200" y="180" text-anchor="middle" fill="#94a3b8" font-size="12">Use Route Tags to Prevent</text>
                    </svg>
                `
            }
        ]
    },
    "2.8": {
        title: "First Hop Redundancy Protocols",
        elementId: "fhrpGrid",
        topics: [
            {
                title: "HSRP (Hot Standby Router Protocol)",
                icon: "fa-shield",
                description: "Cisco proprietary FHRP providing gateway redundancy. One router is Active, others are Standby. Uses virtual IP and MAC addresses.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="60" width="80" height="40" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                        <text x="90" y="80" text-anchor="middle" fill="white" font-size="11">Active</text>
                        <text x="90" y="95" text-anchor="middle" fill="white" font-size="9">Priority 110</text>
                        <rect x="160" y="60" width="80" height="40" fill="#64748b" stroke="#64748b" stroke-width="2" rx="5"/>
                        <text x="200" y="80" text-anchor="middle" fill="#94a3b8" font-size="11">Standby</text>
                        <text x="200" y="95" text-anchor="middle" fill="#94a3b8" font-size="9">Priority 100</text>
                        <rect x="270" y="120" width="100" height="40" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                        <text x="320" y="140" text-anchor="middle" fill="#fbbf24" font-size="11">Virtual Gateway</text>
                        <text x="320" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">192.168.1.1</text>
                        <path d="M 130 80 L 270 130" stroke="#10b981" stroke-width="2"/>
                        <text x="200" y="30" text-anchor="middle" fill="#10b981" font-size="12">HSRP Group</text>
                    </svg>
                `
            },
            {
                title: "VRRP (Virtual Router Redundancy Protocol)",
                icon: "fa-users",
                description: "Open standard FHRP similar to HSRP. Uses Master/Backup terminology and can load balance with multiple VRRP groups.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <circle cx="120" cy="80" r="30" fill="#10b981" stroke="#4f46e5" stroke-width="2"/>
                        <text x="120" y="85" text-anchor="middle" fill="white" font-size="10">Master</text>
                        <circle cx="200" cy="80" r="30" fill="#64748b" stroke="#64748b" stroke-width="2"/>
                        <text x="200" y="85" text-anchor="middle" fill="#94a3b8" font-size="10">Backup</text>
                        <circle cx="280" cy="80" r="30" fill="#64748b" stroke="#64748b" stroke-width="2"/>
                        <text x="280" y="85" text-anchor="middle" fill="#94a3b8" font-size="10">Backup</text>
                        <rect x="150" y="130" width="100" height="30" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                        <text x="200" y="150" text-anchor="middle" fill="#fbbf24" font-size="11">Virtual Router</text>
                        <text x="200" y="40" text-anchor="middle" fill="#10b981" font-size="12">VRRP Group 1</text>
                    </svg>
                `
            },
            {
                title: "GLBP (Gateway Load Balancing Protocol)",
                icon: "fa-balance-scale",
                description: "Cisco proprietary protocol providing both redundancy and load balancing. All routers can forward traffic simultaneously.",
                visual: `
                    <svg viewBox="0 0 400 200" class="w-full h-auto">
                        <rect x="50" y="50" width="60" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="80" y="70" text-anchor="middle" fill="white" font-size="9">AVG</text>
                        <rect x="130" y="50" width="60" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="160" y="70" text-anchor="middle" fill="white" font-size="9">AVF 1</text>
                        <rect x="210" y="50" width="60" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                        <text x="240" y="70" text-anchor="middle" fill="white" font-size="9">AVF 2</text>
                        <rect x="130" y="120" width="100" height="30" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                        <text x="180" y="140" text-anchor="middle" fill="#fbbf24" font-size="11">Load Balancing</text>
                        <path d="M 80 80 L 160 120" stroke="#10b981" stroke-width="2"/>
                        <path d="M 160 80 L 170 120" stroke="#10b981" stroke-width="2"/>
                        <path d="M 240 80 L 190 120" stroke="#10b981" stroke-width="2"/>
                        <text x="180" y="25" text-anchor="middle" fill="#10b981" font-size="12">GLBP Group</text>
                    </svg>
                `
            }
        ]
    }
};