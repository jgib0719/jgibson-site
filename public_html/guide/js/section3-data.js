/**
 * CCNA Section 3: IP Connectivity - Complete Topic Data
 * This data is structured to be used with section3.html
 */

const SECTION3_DATA = {
    routingTable: [
        {
            title: "Routing Table",
            icon: "fa-table-list",
            description: "A routing table is a data table stored in a router or a networked computer that lists the routes to particular network destinations. Key components include the protocol code, prefix/mask, and the next-hop address.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Routing Table Structure</title>
                <rect x="20" y="20" width="360" height="160" rx="10" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="45" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">show ip route</text>
                <!-- Header -->
                <text x="50" y="70" font-family="monospace" font-size="10" fill="#94a3b8">Code</text>
                <text x="130" y="70" font-family="monospace" font-size="10" fill="#94a3b8">Prefix/Mask</text>
                <text x="260" y="70" font-family="monospace" font-size="10" fill="#94a3b8">Next Hop</text>
                <line x1="30" y1="78" x2="370" y2="78" stroke="#334155"/>
                <!-- Route 1 -->
                <text x="50" y="95" font-family="monospace" font-size="12" fill="#6366f1">O</text>
                <text x="130" y="95" font-family="monospace" font-size="12" fill="white">10.1.1.0/24</text>
                <text x="260" y="95" font-family="monospace" font-size="12" fill="white">[110/10] via 192.168.1.2</text>
                <!-- Route 2 -->
                <text x="50" y="120" font-family="monospace" font-size="12" fill="#6366f1">S</text>
                <text x="130" y="120" font-family="monospace" font-size="12" fill="white">172.16.0.0/16</text>
                <text x="260" y="120" font-family="monospace" font-size="12" fill="white">via 192.168.1.3</text>
                 <!-- Route 3 -->
                <text x="50" y="145" font-family="monospace" font-size="12" fill="#6366f1">C</text>
                <text x="130" y="145" font-family="monospace" font-size="12" fill="white">192.168.1.0/24</text>
                <text x="260" y="145" font-family="monospace" font-size="12" fill="white">is directly connected</text>
            </svg>`
        },
        {
            title: "AD & Metric",
            icon: "fa-ruler-combined",
            description: "Administrative Distance (AD) is the trustworthiness of a route source (lower is better). The Metric is a value used by a routing protocol to determine the best path to a destination (lower is better).",
            visual: `<svg viewBox="0 0 400 200">
                <title>Administrative Distance vs Metric</title>
                <text x="100" y="40" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">Administrative Distance</text>
                <text x="100" y="60" font-family="sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">(Between Protocols)</text>
                <rect x="40" y="80" width="120" height="30" fill="#10b981"/><text x="100" y="100" font-size="10" fill="white">Static (AD 1)</text>
                <rect x="40" y="120" width="120" height="30" fill="#3b82f6"/><text x="100" y="140" font-size="10" fill="white">OSPF (AD 110)</text>
                
                <text x="300" y="40" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">Metric</text>
                <text x="300" y="60" font-family="sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">(Within a Protocol)</text>
                <text x="300" y="90" font-size="10" fill="white">OSPF Cost 10</text><path d="M220,105 h160" stroke="#10b981" stroke-width="2"/>
                <text x="300" y="130" font-size="10" fill="white">OSPF Cost 20</text><path d="M220,145 h160" stroke="#f87171" stroke-width="2"/>
            </svg>`
        },
        {
            title: "Default Gateway",
            icon: "fa-door-open",
            description: "The Gateway of Last Resort is the IP address of the router where packets with no specific route in the routing table are sent. This is typically the path to the internet, represented by a default static route (0.0.0.0/0).",
            visual: `<svg viewBox="0 0 400 200">
                <title>Gateway of Last Resort</title>
                <circle cx="100" cy="100" r="30" fill="#334155"/><text x="100" y="105" fill="white" font-size="12">You</text>
                <circle cx="200" cy="100" r="30" fill="#6366f1"/><text x="200" y="105" fill="white" font-size="12">Router</text>
                <path d="M130,100 h40" stroke="white" marker-end="url(#arrow)"/>
                <text x="200" y="60" fill="#e2e8f0" text-anchor="middle" font-size="10">Routing Table?</text>
                <text x="200" y="150" fill="#f59e0b" text-anchor="middle" font-size="10">No specific route...</text>
                
                <path d="M 230 100 C 280 50, 280 150, 320 100" stroke="#f59e0b" stroke-dasharray="4" fill="none" marker-end="url(#arrow-orange)"/>
                <text x="350" y="105" fill="#f59e0b" font-size="12">Internet</text>
                <text x="280" y="130" fill="#f59e0b" font-size="10">Use Gateway of Last Resort</text>
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="white"/></marker>
                  <marker id="arrow-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/></marker>
                </defs>
            </svg>`
        }
    ],
    routing: [
        {
            title: "Forwarding Logic",
            icon: "fa-project-diagram",
            description: "A router makes a forwarding decision by first finding the longest prefix match. If multiple routes have the same prefix length, it chooses the one with the lowest Administrative Distance (AD). If ADs are also equal, it uses the route with the lowest metric.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Router Forwarding Decision Flowchart</title>
                <rect x="125" y="20" width="150" height="30" rx="5" fill="#1e293b"/><text x="200" y="40" fill="white" text-anchor="middle">Packet Arrives</text>
                <path d="M200,50 v15" stroke="#94a3b8" marker-end="url(#arrow-gray)"/>
                <rect x="100" y="65" width="200" height="30" rx="5" fill="#6366f1"/><text x="200" y="85" fill="white" text-anchor="middle">1. Longest Prefix Match</text>
                <path d="M200,95 v15" stroke="#94a3b8" marker-end="url(#arrow-gray)"/>
                <rect x="100" y="110" width="200" height="30" rx="5" fill="#3b82f6"/><text x="200" y="130" fill="white" text-anchor="middle">2. Lowest Admin Distance</text>
                <path d="M200,140 v15" stroke="#94a3b8" marker-end="url(#arrow-gray)"/>
                <rect x="100" y="155" width="200" height="30" rx="5" fill="#10b981"/><text x="200" y="175" fill="white" text-anchor="middle">3. Lowest Metric</text>
                 <defs><marker id="arrow-gray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "Prefix Matching",
            icon: "fa-search",
            description: "The primary rule for route selection. A router will always prefer a more specific route. For example, a route to 10.1.1.0/25 is more specific and will be chosen over a route to 10.1.1.0/24.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Longest Prefix Match Example</title>
                <text x="200" y="30" font-size="12" fill="#e2e8f0" text-anchor="middle">Destination: 10.1.1.100</text>
                <rect x="50" y="60" width="300" height="40" rx="5" fill="#334155"/>
                <text x="200" y="85" font-family="monospace" fill="white">Route A: 10.1.0.0/16</text>
                <rect x="50" y="120" width="300" height="40" rx="5" fill="#10b981" stroke="#16a34a" stroke-width="2"/>
                <text x="200" y="145" font-family="monospace" fill="white">Route B: 10.1.1.0/24</text>
                <text x="360" y="145" font-size="14" fill="white">✔</text>
                <text x="200" y="180" font-size="12" fill="#10b981" text-anchor="middle">/24 is longer (more specific) than /16</text>
            </svg>`
        },
    ],
    staticRouting: [
        {
            title: "Static Routes",
            icon: "fa-route",
            description: "A static route is a manually configured entry in a router's routing table. Common types include network routes (to a specific network), host routes (to a single device), and default routes (gateway of last resort).",
            visual: `<svg viewBox="0 0 400 200">
                <title>Types of Static Routes</title>
                <circle cx="80" cy="100" r="25" fill="#6366f1"/><text x="80" y="105" fill="white" font-size="12">R1</text>
                <!-- Host Route -->
                <rect x="250" y="40" width="50" height="30" rx="3" fill="#10b981"/><text x="275" y="60" font-size="10" fill="white">Host</text>
                <path d="M105,90 L250,55" stroke="#10b981" stroke-dasharray="3,3"/><text x="160" y="65" font-size="10" fill="#10b981">Host Route</text>
                <!-- Network Route -->
                <rect x="250" y="90" width="100" height="30" rx="3" fill="#3b82f6"/><text x="300" y="110" font-size="10" fill="white">Network</text>
                <path d="M105,100 L250,105" stroke="#3b82f6" stroke-dasharray="3,3"/><text x="160" y="110" font-size="10" fill="#3b82f6">Network Route</text>
                <!-- Default Route -->
                <text x="275" y="160" font-size="12" fill="#f59e0b">Internet</text>
                <path d="M105,110 L250,145" stroke="#f59e0b" stroke-dasharray="3,3"/><text x="160" y="140" font-size="10" fill="#f59e0b">Default Route</text>
            </svg>`
        },
        {
            title: "Floating Static Route",
            icon: "fa-life-ring",
            description: "A floating static route is a backup route that is only used if a primary route fails. It is configured with a higher Administrative Distance than the primary route, so it is not used under normal conditions.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Floating Static Route</title>
                <circle cx="50" cy="100" r="20" fill="#334155"/><text x="50" y="105" font-size="10" fill="white">R1</text>
                <circle cx="350" cy="100" r="20" fill="#334155"/><text x="350" y="105" font-size="10" fill="white">R2</text>
                <!-- Primary Route -->
                <path d="M70,90 C150,40 250,40 330,90" stroke="#10b981" fill="none" stroke-width="2"/>
                <text x="200" y="60" text-anchor="middle" font-size="12" fill="#10b981">Primary Route (AD 1)</text>
                <!-- Backup Route -->
                <path d="M70,110 C150,160 250,160 330,110" stroke="#f59e0b" fill="none" stroke-dasharray="5,5" stroke-width="2"/>
                <text x="200" y="150" text-anchor="middle" font-size="12" fill="#f59e0b">Floating Static (AD 254)</text>
            </svg>`
        }
    ],
    ospf: [
        {
            title: "OSPF Neighbors",
            icon: "fa-users",
            description: "OSPF routers form neighbor relationships by exchanging Hello packets on connected links. For an adjacency to form, parameters like Hello/Dead timers, area ID, and authentication must match.",
            visual: `<svg viewBox="0 0 400 200">
                <title>OSPF Neighbor Adjacency</title>
                <circle cx="100" cy="100" r="30" fill="#3b82f6"/><text x="100" y="105" fill="white" font-size="12">R1</text>
                <circle cx="300" cy="100" r="30" fill="#3b82f6"/><text x="300" y="105" fill="white" font-size="12">R2</text>
                <text x="200" y="70" font-size="12" fill="#94a3b8" text-anchor="middle">Hello!</text>
                <path d="M135,90 L265,90" stroke="#94a3b8" fill="none" marker-end="url(#arrow-gray)"/>
                <path d="M265,110 L135,110" stroke="#94a3b8" fill="none" marker-end="url(#arrow-gray)"/>
                <text x="200" y="140" font-size="12" fill="#10b981" text-anchor="middle">Adjacency Formed</text>
            </svg>`
        },
        {
            title: "DR/BDR Election",
            icon: "fa-crown",
            description: "On multi-access networks like Ethernet, OSPF elects a Designated Router (DR) and a Backup Designated Router (BDR) to reduce the number of adjacencies. The election is based on OSPF priority (highest wins), then the highest Router ID.",
            visual: `<svg viewBox="0 0 400 200">
                <title>OSPF DR/BDR Election</title>
                <rect x="150" y="30" width="100" height="20" rx="3" fill="#334155" /><text x="200" y="44" font-size="10" text-anchor="middle" fill="white">Ethernet</text>
                <circle cx="100" cy="100" r="25" fill="#6366f1"/><text x="100" y="105" fill="white">DR</text>
                <circle cx="200" cy="100" r="25" fill="#3b82f6"/><text x="200" y="105" fill="white">BDR</text>
                <circle cx="300" cy="100" r="25" fill="#1e293b"/><text x="300" y="105" fill="white">DROther</text>
                <path d="M100,75 v-20" stroke="#94a3b8"/> <path d="M200,75 v-20" stroke="#94a3b8"/> <path d="M300,75 v-20" stroke="#94a3b8"/>
                <text x="200" y="150" font-size="10" fill="#94a3b8" text-anchor="middle">All DROthers form adjacencies with DR/BDR only</text>
            </svg>`
        },
        {
            title: "OSPF Router ID",
            icon: "fa-id-card",
            description: "The Router ID (RID) is a 32-bit number that uniquely identifies an OSPF router. It is determined in order of preference: 1) Manually configured `router-id`, 2) Highest IP of a loopback interface, 3) Highest IP of an active physical interface.",
            visual: `<svg viewBox="0 0 400 200">
                <title>OSPF Router ID Selection</title>
                <circle cx="200" cy="100" r="30" fill="#3b82f6"/><text x="200" y="105" fill="white">Router</text>
                <text x="200" y="30" font-size="12" fill="#6366f1" text-anchor="middle">1. Manual router-id</text>
                <text x="50" y="105" font-size="12" fill="#3b82f6" text-anchor="middle">2. Highest Loopback IP</text>
                <text x="200" y="170" font-size="12" fill="#10b981" text-anchor="middle">3. Highest Active IP</text>
            </svg>`
        }
    ],
    fhrp: [
        {
            title: "FHRP",
            icon: "fa-clone",
            description: "First Hop Redundancy Protocols (FHRPs) like HSRP, VRRP, and GLBP provide a way to create a redundant default gateway for end devices, preventing a single point of failure at the gateway router. Devices use a single virtual IP address.",
            visual: `<svg viewBox="0 0 400 200">
                <title>First Hop Redundancy Protocol (FHRP)</title>
                <rect x="50" y="150" width="60" height="30" rx="3" fill="#10b981"/><text x="80" y="170" font-size="10" fill="white">PC</text>
                <text x="80" y="140" font-size="10" fill="#e2e8f0">GW: 10.1.1.1</text>
                <path d="M80,150 v-30" stroke="#94a3b8"/>
                
                <ellipse cx="200" cy="90" rx="100" ry="30" stroke="#6366f1" stroke-dasharray="4,4" fill="rgba(99,102,241,0.1)"/>
                <text x="200" y="70" font-size="12" fill="#6366f1" text-anchor="middle">Virtual IP: 10.1.1.1</text>
                
                <circle cx="150" cy="100" r="25" fill="#334155"/><text x="150" y="105" fill="white">R1 (Active)</text>
                <circle cx="250" cy="100" r="25" fill="#334155"/><text x="250" y="105" fill="white">R2 (Standby)</text>
                
                <path d="M125,100 h-45" stroke="#94a3b8"/>
                <path d="M175,100 L225,100" stroke="#94a3b8" stroke-dasharray="2,2"/>
                
                <path d="M160,50 L350,50 L350,150" stroke="#f59e0b" fill="none"/><text x="360" y="100" fill="#f59e0b">Internet</text>
            </svg>`
        }
    ],
    // Section metadata
    metadata: {
        sectionNumber: 3,
        title: "IP Connectivity",
        subsections: {
            routingTable: { title: "3.1 Routing Table Components", count: 3 },
            routing: { title: "3.2 Forwarding Decision", count: 2 },
            staticRouting: { title: "3.3 Static Routing", count: 2 },
            ospf: { title: "3.4 Single Area OSPFv2", count: 3 },
            fhrp: { title: "3.5 First Hop Redundancy", count: 1 }
        },
        // Dynamic calculation of total topics from subsections
        get totalTopics() {
            return Object.values(this.subsections).reduce((total, section) => total + section.count, 0);
        }
    }
};

// Export for global use
window.SECTION3_DATA = SECTION3_DATA;

// Register with section registry for dynamic topic totals
document.addEventListener('DOMContentLoaded', () => {
    if (window.CCNA_SECTION_REGISTRY) {
        window.CCNA_SECTION_REGISTRY.registerSectionData(3, SECTION3_DATA);
    }
    // Dispatch event for other listeners
    window.dispatchEvent(new CustomEvent('sectionDataLoaded', {
        detail: { sectionNumber: 3, sectionData: SECTION3_DATA }
    }));
});
