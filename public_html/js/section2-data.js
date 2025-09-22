/**
 * CCNA Section 2: Layer 3 Technologies - Complete Topic Data
 * Restructured to match section1-data.js format
 */

const SECTION2_DATA = {
    // 2.1 Routing Table Components
    routingTable: [
        {
            title: "Route Source",
            icon: "fa-map-signs",
            description: "Identifies how the route was learned: Connected (C), Static (S), Dynamic protocols like RIP (R), OSPF (O), EIGRP (D). Each source has different administrative distance values.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <rect x="120" y="30" width="60" height="30" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="150" y="50" text-anchor="middle" fill="white" font-size="12">C - 0</text>
                    <rect x="200" y="30" width="60" height="30" fill="#f97316" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="230" y="50" text-anchor="middle" fill="white" font-size="12">S - 1</text>
                    <rect x="120" y="80" width="60" height="30" fill="#eab308" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="150" y="100" text-anchor="middle" fill="white" font-size="12">O - 110</text>
                    <rect x="200" y="80" width="60" height="30" fill="#22c55e" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="230" y="100" text-anchor="middle" fill="white" font-size="12">R - 120</text>
                    <text x="200" y="140" text-anchor="middle" fill="#4f46e5" font-size="14">Administrative Distance</text>
                    <text x="200" y="160" text-anchor="middle" fill="#94a3b8" font-size="12">Lower = More Trusted</text>
                </svg>
            `
        },
        {
            title: "Destination Network",
            icon: "fa-bullseye",
            description: "The network address and subnet mask (prefix length) that defines the range of IP addresses reachable through this route entry.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <rect x="150" y="60" width="150" height="80" fill="#1e293b" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="225" y="85" text-anchor="middle" fill="#e2e8f0" font-size="14">192.168.1.0/24</text>
                    <text x="225" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">Network: 192.168.1.0</text>
                    <text x="225" y="120" text-anchor="middle" fill="#94a3b8" font-size="10">Mask: 255.255.255.0</text>
                    <text x="225" y="135" text-anchor="middle" fill="#94a3b8" font-size="10">Hosts: 192.168.1.1-254</text>
                    <text x="200" y="40" text-anchor="middle" fill="#4f46e5" font-size="14">Destination Range</text>
                </svg>
            `
        },
        {
            title: "Administrative Distance",
            icon: "fa-star",
            description: "A trustworthiness rating (0-255) used to select the best route when multiple routing protocols provide paths to the same destination.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <rect x="50" y="60" width="80" height="40" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="90" y="80" text-anchor="middle" fill="white" font-size="11">Connected</text>
                    <text x="90" y="95" text-anchor="middle" fill="white" font-size="9">AD: 0</text>
                    <rect x="160" y="60" width="80" height="40" fill="#f97316" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="200" y="80" text-anchor="middle" fill="white" font-size="11">Static</text>
                    <text x="200" y="95" text-anchor="middle" fill="white" font-size="9">AD: 1</text>
                    <rect x="270" y="60" width="80" height="40" fill="#eab308" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="310" y="80" text-anchor="middle" fill="white" font-size="11">OSPF</text>
                    <text x="310" y="95" text-anchor="middle" fill="white" font-size="9">AD: 110</text>
                    <text x="200" y="140" text-anchor="middle" fill="#4f46e5" font-size="14">Route Selection Priority</text>
                    <text x="200" y="160" text-anchor="middle" fill="#94a3b8" font-size="12">Lower Values Win</text>
                </svg>
            `
        },
        {
            title: "Metric",
            icon: "fa-tachometer-alt",
            description: "Used by routing protocols to determine the best path when multiple routes to the same destination exist with the same administrative distance.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <circle cx="200" cy="100" r="70" fill="#1e293b" stroke="#4f46e5" stroke-width="3"/>
                    <circle cx="200" cy="100" r="50" fill="none" stroke="#10b981" stroke-width="2"/>
                    <line x1="200" y1="100" x2="200" y2="60" stroke="#10b981" stroke-width="3"/>
                    <circle cx="200" cy="60" r="3" fill="#10b981"/>
                    <text x="200" y="140" text-anchor="middle" fill="#e2e8f0" font-size="12">Lower Metric</text>
                    <text x="200" y="155" text-anchor="middle" fill="#94a3b8" font-size="10">Better Path</text>
                    <text x="200" y="30" text-anchor="middle" fill="#4f46e5" font-size="14">Route Metric</text>
                </svg>
            `
        },
        {
            title: "Next Hop",
            icon: "fa-arrow-right",
            description: "The IP address of the next router in the path to reach the destination network. For directly connected networks, this shows the exit interface.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <circle cx="100" cy="100" r="25" fill="#6366f1" stroke="#4f46e5" stroke-width="2"/>
                    <text x="100" y="105" text-anchor="middle" fill="white" font-size="10">R1</text>
                    <circle cx="200" cy="100" r="25" fill="#10b981" stroke="#4f46e5" stroke-width="2"/>
                    <text x="200" y="105" text-anchor="middle" fill="white" font-size="10">R2</text>
                    <circle cx="300" cy="100" r="25" fill="#f59e0b" stroke="#4f46e5" stroke-width="2"/>
                    <text x="300" y="105" text-anchor="middle" fill="white" font-size="10">R3</text>
                    <path d="M 125 100 L 175 100" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow)"/>
                    <path d="M 225 100 L 275 100" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow)"/>
                    <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#4f46e5"/>
                        </marker>
                    </defs>
                    <text x="200" y="50" text-anchor="middle" fill="#4f46e5" font-size="14">Next Hop Path</text>
                    <text x="200" y="150" text-anchor="middle" fill="#94a3b8" font-size="12">R2 is Next Hop to reach R3</text>
                </svg>
            `
        }
    ],

    // 2.2 Router Forwarding Decision
    forwarding: [
        {
            title: "Longest Prefix Match",
            icon: "fa-search",
            description: "Router selects the route with the most specific (longest) subnet mask that matches the destination IP address.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <rect x="60" y="40" width="120" height="30" fill="#ef4444" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="120" y="60" text-anchor="middle" fill="white" font-size="10">10.0.0.0/8</text>
                    <rect x="60" y="90" width="120" height="30" fill="#f97316" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="120" y="110" text-anchor="middle" fill="white" font-size="10">10.1.0.0/16</text>
                    <rect x="60" y="140" width="120" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="120" y="160" text-anchor="middle" fill="white" font-size="10">10.1.1.0/24</text>
                    <circle cx="300" cy="100" r="30" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
                    <text x="300" y="105" text-anchor="middle" fill="#fbbf24" font-size="9">10.1.1.50</text>
                    <path d="M 180 155 L 270 110" stroke="#10b981" stroke-width="3"/>
                    <text x="225" y="140" text-anchor="middle" fill="#10b981" font-size="10">BEST MATCH</text>
                </svg>
            `
        }
    ],

    // 2.3 IPv4 and IPv6 Static Routing
    staticRouting: [
        {
            title: "IPv4 Static Routes",
            icon: "fa-route",
            description: "Manually configured routes that don't change unless administratively modified. Provides precise control over routing decisions.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <circle cx="100" cy="100" r="30" fill="#6366f1" stroke="#4f46e5" stroke-width="2"/>
                    <text x="100" y="105" text-anchor="middle" fill="white" font-size="12">R1</text>
                    <circle cx="300" cy="100" r="30" fill="#10b981" stroke="#4f46e5" stroke-width="2"/>
                    <text x="300" y="105" text-anchor="middle" fill="white" font-size="12">R2</text>
                    <path d="M 130 100 L 270 100" stroke="#4f46e5" stroke-width="3"/>
                    <text x="200" y="90" text-anchor="middle" fill="#4f46e5" font-size="10">Static Route</text>
                    <text x="200" y="40" text-anchor="middle" fill="#4f46e5" font-size="14">ip route 192.168.2.0 255.255.255.0 10.0.0.2</text>
                    <text x="200" y="150" text-anchor="middle" fill="#94a3b8" font-size="12">Manual Configuration Required</text>
                </svg>
            `
        },
        {
            title: "IPv6 Static Routes",
            icon: "fa-route",
            description: "IPv6 static routing using 128-bit addresses and prefix notation. Similar concepts to IPv4 but with expanded address space.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <rect x="100" y="80" width="200" height="40" fill="#1e293b" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="200" y="100" text-anchor="middle" fill="#e2e8f0" font-size="12">2001:db8::/32</text>
                    <text x="200" y="115" text-anchor="middle" fill="#94a3b8" font-size="10">IPv6 Network</text>
                    <text x="200" y="50" text-anchor="middle" fill="#4f46e5" font-size="14">ipv6 route 2001:db8::/32 2001:db8::1</text>
                    <text x="200" y="150" text-anchor="middle" fill="#94a3b8" font-size="12">128-bit Addressing</text>
                </svg>
            `
        }
    ],

    // 2.4 Single Area OSPFv2
    ospf: [
        {
            title: "OSPF Neighbors",
            icon: "fa-handshake",
            description: "OSPF routers form neighbor relationships through Hello packets. Neighbors must agree on Hello/Dead intervals, area ID, and authentication.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <circle cx="120" cy="100" r="30" fill="#10b981" stroke="#4f46e5" stroke-width="2"/>
                    <text x="120" y="105" text-anchor="middle" fill="white" font-size="12">R1</text>
                    <circle cx="280" cy="100" r="30" fill="#10b981" stroke="#4f46e5" stroke-width="2"/>
                    <text x="280" y="105" text-anchor="middle" fill="white" font-size="12">R2</text>
                    <path d="M 150 90 L 250 90" stroke="#10b981" stroke-width="2"/>
                    <path d="M 250 110 L 150 110" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="85" text-anchor="middle" fill="#10b981" font-size="9">Hello</text>
                    <text x="200" y="125" text-anchor="middle" fill="#10b981" font-size="9">Hello</text>
                    <text x="200" y="50" text-anchor="middle" fill="#4f46e5" font-size="14">OSPF Neighbor Formation</text>
                    <text x="200" y="150" text-anchor="middle" fill="#94a3b8" font-size="12">Hello Packets Every 10s</text>
                </svg>
            `
        },
        {
            title: "LSA and LSDB",
            icon: "fa-database",
            description: "Link State Advertisements (LSAs) contain topology information. All routers in an area maintain identical Link State Databases (LSDB).",
            visual: `
                <svg viewBox="0 0 400 200">
                    <rect x="150" y="60" width="100" height="80" fill="#1e293b" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="200" y="85" text-anchor="middle" fill="#e2e8f0" font-size="12">LSDB</text>
                    <text x="200" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">LSA Type 1</text>
                    <text x="200" y="120" text-anchor="middle" fill="#94a3b8" font-size="10">LSA Type 2</text>
                    <text x="200" y="135" text-anchor="middle" fill="#94a3b8" font-size="10">LSA Type 3</text>
                    <text x="200" y="40" text-anchor="middle" fill="#4f46e5" font-size="14">Link State Database</text>
                    <text x="200" y="160" text-anchor="middle" fill="#94a3b8" font-size="12">Synchronized Across Area</text>
                </svg>
            `
        }
    ],

    // 2.5 EIGRP Fundamentals  
    eigrp: [
        {
            title: "EIGRP Metrics",
            icon: "fa-calculator",
            description: "EIGRP uses composite metric based on bandwidth, delay, reliability, load, and MTU. By default, only bandwidth and delay are used.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <rect x="100" y="60" width="80" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="140" y="80" text-anchor="middle" fill="white" font-size="10">Bandwidth</text>
                    <rect x="220" y="60" width="80" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="260" y="80" text-anchor="middle" fill="white" font-size="10">Delay</text>
                    <rect x="160" y="120" width="80" height="30" fill="#64748b" stroke="#64748b" stroke-width="2" rx="5"/>
                    <text x="200" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">Composite</text>
                    <path d="M 140 90 L 180 120" stroke="#10b981" stroke-width="2"/>
                    <path d="M 260 90 L 220 120" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="30" text-anchor="middle" fill="#4f46e5" font-size="14">EIGRP Metric Calculation</text>
                </svg>
            `
        }
    ],

    // 2.6 Multi-Area OSPF
    multiOspf: [
        {
            title: "OSPF Areas",
            icon: "fa-layer-group",
            description: "OSPF uses hierarchical design with Area 0 (backbone) connecting to other areas. Reduces LSA flooding and improves scalability.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <circle cx="200" cy="100" r="40" fill="#ef4444" stroke="#4f46e5" stroke-width="2"/>
                    <text x="200" y="105" text-anchor="middle" fill="white" font-size="12">Area 0</text>
                    <circle cx="120" cy="60" r="25" fill="#10b981" stroke="#4f46e5" stroke-width="2"/>
                    <text x="120" y="65" text-anchor="middle" fill="white" font-size="10">Area 1</text>
                    <circle cx="280" cy="60" r="25" fill="#10b981" stroke="#4f46e5" stroke-width="2"/>
                    <text x="280" y="65" text-anchor="middle" fill="white" font-size="10">Area 2</text>
                    <circle cx="200" cy="160" r="25" fill="#10b981" stroke="#4f46e5" stroke-width="2"/>
                    <text x="200" y="165" text-anchor="middle" fill="white" font-size="10">Area 3</text>
                    <line x1="145" y1="70" x2="175" y2="85" stroke="#4f46e5" stroke-width="2"/>
                    <line x1="255" y1="70" x2="225" y2="85" stroke="#4f46e5" stroke-width="2"/>
                    <line x1="200" y1="140" x2="200" y2="135" stroke="#4f46e5" stroke-width="2"/>
                    <text x="200" y="20" text-anchor="middle" fill="#4f46e5" font-size="14">Multi-Area OSPF</text>
                </svg>
            `
        }
    ],

    // 2.7 Route Redistribution
    redistribution: [
        {
            title: "Route Redistribution",
            icon: "fa-exchange-alt",
            description: "Process of taking routes from one routing protocol and advertising them into another. Requires metric conversion between protocols.",
            visual: `
                <svg viewBox="0 0 400 200">
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
                    <text x="200" y="40" text-anchor="middle" fill="#4f46e5" font-size="14">Route Redistribution</text>
                    <text x="200" y="140" text-anchor="middle" fill="#94a3b8" font-size="12">Metric Conversion Required</text>
                </svg>
            `
        }
    ],

    // 2.8 First Hop Redundancy Protocols
    fhrp: [
        {
            title: "HSRP (Hot Standby Router Protocol)",
            icon: "fa-shield",
            description: "Cisco proprietary FHRP providing gateway redundancy. One router is Active, others are Standby. Uses virtual IP and MAC addresses.",
            visual: `
                <svg viewBox="0 0 400 200">
                    <rect x="150" y="60" width="80" height="40" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="5"/>
                    <text x="190" y="80" text-anchor="middle" fill="white" font-size="11">Active</text>
                    <text x="190" y="95" text-anchor="middle" fill="white" font-size="9">Priority 110</text>
                    <rect x="260" y="60" width="80" height="40" fill="#64748b" stroke="#64748b" stroke-width="2" rx="5"/>
                    <text x="300" y="80" text-anchor="middle" fill="#94a3b8" font-size="11">Standby</text>
                    <text x="300" y="95" text-anchor="middle" fill="#94a3b8" font-size="9">Priority 100</text>
                    <rect x="150" y="120" width="190" height="40" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                    <text x="245" y="140" text-anchor="middle" fill="#fbbf24" font-size="11">Virtual Gateway</text>
                    <text x="245" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">192.168.1.1</text>
                    <path d="M 190 100 L 220 120" stroke="#10b981" stroke-width="2"/>
                    <text x="200" y="30" text-anchor="middle" fill="#10b981" font-size="12">HSRP Group</text>
                </svg>
            `
        },
        {
            title: "VRRP (Virtual Router Redundancy Protocol)",
            icon: "fa-users",
            description: "Open standard FHRP similar to HSRP. Uses Master/Backup terminology and can load balance with multiple VRRP groups.",
            visual: `
                <svg viewBox="0 0 400 200">
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
                <svg viewBox="0 0 400 200">
                    <rect x="150" y="50" width="60" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                    <text x="180" y="70" text-anchor="middle" fill="white" font-size="9">AVG</text>
                    <rect x="230" y="50" width="60" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                    <text x="260" y="70" text-anchor="middle" fill="white" font-size="9">AVF 1</text>
                    <rect x="310" y="50" width="60" height="30" fill="#10b981" stroke="#4f46e5" stroke-width="2" rx="3"/>
                    <text x="340" y="70" text-anchor="middle" fill="white" font-size="9">AVF 2</text>
                    <rect x="180" y="120" width="160" height="30" fill="#1e293b" stroke="#fbbf24" stroke-width="2" rx="5"/>
                    <text x="260" y="140" text-anchor="middle" fill="#fbbf24" font-size="11">Load Balancing</text>
                    <path d="M 180 80 L 220 120" stroke="#10b981" stroke-width="2"/>
                    <path d="M 260 80 L 250 120" stroke="#10b981" stroke-width="2"/>
                    <path d="M 340 80 L 300 120" stroke="#10b981" stroke-width="2"/>
                    <text x="260" y="25" text-anchor="middle" fill="#10b981" font-size="12">GLBP Group</text>
                </svg>
            `
        }
    ],

    // Section metadata
    metadata: {
        sectionNumber: 2,
        title: "Layer 3 Technologies",
        totalTopics: 15,
        subsections: {
            routingTable: { title: "2.1 Routing Table Components", count: 5 },
            forwarding: { title: "2.2 Router Forwarding Decision", count: 1 },
            staticRouting: { title: "2.3 IPv4 and IPv6 Static Routing", count: 2 },
            ospf: { title: "2.4 Single Area OSPFv2", count: 2 },
            eigrp: { title: "2.5 EIGRP Fundamentals", count: 1 },
            multiOspf: { title: "2.6 Multi-Area OSPF", count: 1 },
            redistribution: { title: "2.7 Route Redistribution", count: 1 },
            fhrp: { title: "2.8 First Hop Redundancy Protocols", count: 3 }
        }
    }
};

// Export for use in section2.html
if (typeof window !== 'undefined') {
    window.SECTION2_DATA = SECTION2_DATA;
}