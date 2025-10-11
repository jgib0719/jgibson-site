/**
 * CCNA Section 3: IP Connectivity - Complete Topic Data
 * This data is structured to be used with section3.html
 */

const SECTION3_DATA = {
    routingTable: [
        {
            title: "Routing Protocol Code",
            icon: "fa-code",
            description: "Protocol codes indicate how routes were learned. Each code represents a different source: C=Connected, S=Static, O=OSPF, R=RIP, D=EIGRP, i=IS-IS, B=BGP. Understanding these codes is essential for troubleshooting.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Routing Protocol Codes</title>
                <rect x="20" y="20" width="360" height="160" rx="10" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="45" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">Routing Protocol Codes</text>
                <!-- Code explanations -->
                <text x="50" y="70" font-family="monospace" font-size="12" fill="#10b981">C</text>
                <text x="80" y="70" font-family="sans-serif" font-size="10" fill="#94a3b8">Connected - Directly attached subnet</text>
                <text x="50" y="90" font-family="monospace" font-size="12" fill="#3b82f6">S</text>
                <text x="80" y="90" font-family="sans-serif" font-size="10" fill="#94a3b8">Static - Manually configured route</text>
                <text x="50" y="110" font-family="monospace" font-size="12" fill="#6366f1">O</text>
                <text x="80" y="110" font-family="sans-serif" font-size="10" fill="#94a3b8">OSPF - Open Shortest Path First</text>
                <text x="50" y="130" font-family="monospace" font-size="12" fill="#f59e0b">R</text>
                <text x="80" y="130" font-family="sans-serif" font-size="10" fill="#94a3b8">RIP - Routing Information Protocol</text>
                <text x="50" y="150" font-family="monospace" font-size="12" fill="#ef4444">D</text>
                <text x="80" y="150" font-family="sans-serif" font-size="10" fill="#94a3b8">EIGRP - Enhanced Interior Gateway</text>
                <text x="50" y="170" font-family="monospace" font-size="12" fill="#8b5cf6">*</text>
                <text x="80" y="170" font-family="sans-serif" font-size="10" fill="#94a3b8">Candidate default route</text>
            </svg>`
        },
        {
            title: "Prefix & Network Mask",
            icon: "fa-network-wired",
            description: "The prefix shows the destination network (e.g., 192.168.1.0/24). The /24 notation indicates the subnet mask - how many bits represent the network portion. This determines which addresses belong to this network.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Prefix and Network Mask</title>
                <rect x="20" y="30" width="360" height="140" rx="10" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="55" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">192.168.1.0/24</text>
                <!-- Network portion -->
                <rect x="50" y="80" width="150" height="30" fill="#10b981" opacity="0.7"/>
                <text x="125" y="100" font-family="monospace" font-size="12" fill="white" text-anchor="middle">192.168.1</text>
                <text x="125" y="120" font-family="sans-serif" font-size="10" fill="#10b981" text-anchor="middle">Network (24 bits)</text>
                <!-- Host portion -->
                <rect x="200" y="80" width="100" height="30" fill="#3b82f6" opacity="0.7"/>
                <text x="250" y="100" font-family="monospace" font-size="12" fill="white" text-anchor="middle">.0</text>
                <text x="250" y="120" font-family="sans-serif" font-size="10" fill="#3b82f6" text-anchor="middle">Host (8 bits)</text>
                <!-- Subnet mask -->
                <text x="200" y="150" font-family="monospace" font-size="12" fill="#e2e8f0" text-anchor="middle">255.255.255.0</text>
            </svg>`
        },
        {
            title: "Next Hop Address",
            icon: "fa-route",
            description: "The next hop is the IP address of the next router in the path to the destination. For directly connected networks, it shows the outgoing interface. This tells the router where to forward packets.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Next Hop Address</title>
                <circle cx="80" cy="100" r="30" fill="#334155"/><text x="80" y="105" fill="white" font-size="10">Router A</text>
                <circle cx="200" cy="100" r="30" fill="#6366f1"/><text x="200" y="105" fill="white" font-size="10">Router B</text>
                <circle cx="320" cy="100" r="30" fill="#334155"/><text x="320" y="105" fill="white" font-size="10">Router C</text>
                <!-- Connections -->
                <path d="M110,100 h60" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M230,100 h60" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
                <!-- Route entry -->
                <rect x="50" y="40" width="300" height="25" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="58" font-family="monospace" font-size="12" fill="white" text-anchor="middle">O 10.3.3.0/24 [110/20] via 192.168.2.2</text>
                <!-- Highlight next hop -->
                <text x="280" y="25" font-family="sans-serif" font-size="10" fill="#6366f1">Next Hop IP</text>
                <path d="M260,30 L245,45" stroke="#6366f1" stroke-width="1"/>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "Administrative Distance",
            icon: "fa-star",
            description: "Administrative Distance (AD) represents the trustworthiness of the route source. Lower values are more trusted. Connected=0, Static=1, OSPF=110, RIP=120. When multiple protocols learn the same route, AD determines the winner.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Administrative Distance</title>
                <text x="200" y="30" font-family="sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle">Route Trustworthiness (Lower = Better)</text>
                <!-- AD scale -->
                <rect x="50" y="60" width="300" height="20" fill="#1e293b" stroke="#334155"/>
                <text x="60" y="75" font-size="10" fill="white">0</text>
                <text x="340" y="75" font-size="10" fill="white">255</text>
                <!-- Connected -->
                <rect x="50" y="100" width="30" height="25" fill="#10b981"/>
                <text x="65" y="117" font-size="10" fill="white" text-anchor="middle">0</text>
                <text x="65" y="135" font-size="8" fill="#10b981" text-anchor="middle">Connected</text>
                <!-- Static -->
                <rect x="90" y="100" width="30" height="25" fill="#3b82f6"/>
                <text x="105" y="117" font-size="10" fill="white" text-anchor="middle">1</text>
                <text x="105" y="135" font-size="8" fill="#3b82f6" text-anchor="middle">Static</text>
                <!-- OSPF -->
                <rect x="220" y="100" width="40" height="25" fill="#6366f1"/>
                <text x="240" y="117" font-size="10" fill="white" text-anchor="middle">110</text>
                <text x="240" y="135" font-size="8" fill="#6366f1" text-anchor="middle">OSPF</text>
                <!-- RIP -->
                <rect x="270" y="100" width="40" height="25" fill="#f59e0b"/>
                <text x="290" y="117" font-size="10" fill="white" text-anchor="middle">120</text>
                <text x="290" y="135" font-size="8" fill="#f59e0b" text-anchor="middle">RIP</text>
            </svg>`
        },
        {
            title: "Metric",
            icon: "fa-ruler-horizontal",
            description: "The metric is used by routing protocols to determine the best path when multiple routes to the same destination exist within the same protocol. Lower metrics are preferred. OSPF uses cost, RIP uses hop count.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Routing Protocol Metrics</title>
                <circle cx="80" cy="100" r="25" fill="#334155"/><text x="80" y="105" fill="white" font-size="10">Source</text>
                <circle cx="320" cy="100" r="25" fill="#334155"/><text x="320" y="105" fill="white" font-size="10">Dest</text>
                <!-- Path 1 - Better metric -->
                <path d="M105,90 C150,50 250,50 295,90" stroke="#10b981" fill="none" stroke-width="3"/>
                <text x="200" y="65" font-size="12" fill="#10b981" text-anchor="middle">OSPF Cost: 10 ✓</text>
                <!-- Path 2 - Worse metric -->
                <path d="M105,110 C150,150 250,150 295,110" stroke="#f87171" fill="none" stroke-width="2" stroke-dasharray="4,4"/>
                <text x="200" y="135" font-size="12" fill="#f87171" text-anchor="middle">OSPF Cost: 20</text>
                <!-- Route entry example -->
                <rect x="50" y="25" width="300" height="20" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="40" font-family="monospace" font-size="11" fill="white" text-anchor="middle">O 10.2.2.0/24 [110/10] via 192.168.1.2</text>
                <text x="240" y="15" font-size="8" fill="#6366f1">Metric</text>
            </svg>`
        },
        {
            title: "Gateway of Last Resort",
            icon: "fa-door-open",
            description: "The Gateway of Last Resort is the default route (0.0.0.0/0) used when no specific route exists for a destination. It appears at the top of the routing table and is essential for internet connectivity.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Gateway of Last Resort</title>
                <rect x="20" y="20" width="360" height="160" rx="10" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="45" font-family="sans-serif" font-size="12" fill="#e2e8f0" text-anchor="middle">show ip route</text>
                <!-- Gateway line -->
                <rect x="40" y="60" width="320" height="20" fill="#f59e0b" opacity="0.3"/>
                <text x="200" y="75" font-family="monospace" font-size="10" fill="#f59e0b" text-anchor="middle">Gateway of last resort is 192.168.1.1 to network 0.0.0.0</text>
                <!-- Default route -->
                <text x="50" y="105" font-family="monospace" font-size="10" fill="#f59e0b">S*</text>
                <text x="80" y="105" font-family="monospace" font-size="10" fill="white">0.0.0.0/0 [1/0] via 192.168.1.1</text>
                <!-- Other routes -->
                <text x="50" y="125" font-family="monospace" font-size="10" fill="#10b981">C</text>
                <text x="80" y="125" font-family="monospace" font-size="10" fill="white">192.168.1.0/24 is directly connected</text>
                <text x="50" y="145" font-family="monospace" font-size="10" fill="#6366f1">O</text>
                <text x="80" y="145" font-family="monospace" font-size="10" fill="white">10.1.1.0/24 [110/10] via 192.168.1.2</text>
                <text x="200" y="165" font-family="sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">* indicates candidate default route</text>
            </svg>`
        }
    ],
    routing: [
        {
            title: "Longest Prefix Match",
            icon: "fa-search",
            description: "The PRIMARY rule for route selection. A router always prefers the most specific (longest) prefix match. This is step 1 in the forwarding decision process and overrides all other considerations.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Longest Prefix Match Example</title>
                <text x="200" y="30" font-size="14" fill="#e2e8f0" text-anchor="middle">Destination: 192.168.1.100</text>
                <!-- Route options -->
                <rect x="50" y="60" width="300" height="30" rx="5" fill="#334155"/>
                <text x="60" y="80" font-family="monospace" fill="#94a3b8" font-size="12">Route A: 192.168.0.0/16</text>
                <text x="350" y="80" font-size="10" fill="#94a3b8">65,534 hosts</text>
                
                <rect x="50" y="100" width="300" height="30" rx="5" fill="#6366f1"/>
                <text x="60" y="120" font-family="monospace" fill="white" font-size="12">Route B: 192.168.1.0/24</text>
                <text x="350" y="120" font-size="10" fill="white">254 hosts</text>
                
                <rect x="50" y="140" width="300" height="30" rx="5" fill="#10b981" stroke="#16a34a" stroke-width="3"/>
                <text x="60" y="160" font-family="monospace" fill="white" font-size="12">Route C: 192.168.1.96/27</text>
                <text x="330" y="160" font-size="10" fill="white">30 hosts ✓</text>
                
                <text x="200" y="185" font-size="12" fill="#10b981" text-anchor="middle">Most Specific Match Wins!</text>
            </svg>`
        },
        {
            title: "Administrative Distance",
            icon: "fa-star-half-alt",
            description: "Step 2: When multiple routes have the SAME prefix length, Administrative Distance determines the winner. Lower AD = more trusted = chosen route. This is how routers choose between different routing protocols.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Administrative Distance Comparison</title>
                <text x="200" y="25" font-size="14" fill="#e2e8f0" text-anchor="middle">Same Destination: 10.1.1.0/24</text>
                
                <!-- Static route -->
                <rect x="50" y="50" width="300" height="35" rx="5" fill="#10b981" stroke="#16a34a" stroke-width="3"/>
                <text x="60" y="68" font-family="monospace" fill="white" font-size="12">S  10.1.1.0/24 [1/0] via 192.168.1.2</text>
                <text x="60" y="82" font-size="10" fill="#10b981">Static Route - AD 1 ✓ INSTALLED</text>
                
                <!-- OSPF route -->
                <rect x="50" y="95" width="300" height="35" rx="5" fill="#374151"/>
                <text x="60" y="113" font-family="monospace" fill="#94a3b8" font-size="12">O  10.1.1.0/24 [110/10] via 192.168.1.3</text>
                <text x="60" y="127" font-size="10" fill="#94a3b8">OSPF Route - AD 110</text>
                
                <!-- RIP route -->
                <rect x="50" y="140" width="300" height="35" rx="5" fill="#374151"/>
                <text x="60" y="158" font-family="monospace" fill="#94a3b8" font-size="12">R  10.1.1.0/24 [120/2] via 192.168.1.4</text>
                <text x="60" y="172" font-size="10" fill="#94a3b8">RIP Route - AD 120</text>
                
                <text x="200" y="195" font-size="11" fill="#10b981" text-anchor="middle">Lower AD Wins: Static (1) beats OSPF (110) and RIP (120)</text>
            </svg>`
        },
        {
            title: "Routing Protocol Metric",
            icon: "fa-ruler-horizontal",
            description: "Step 3: When prefix length AND Administrative Distance are identical, the metric (cost) determines the best path. Each protocol uses different metrics: OSPF=cost, RIP=hop count, EIGRP=composite.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Metric Comparison Within Protocol</title>
                <text x="200" y="25" font-size="14" fill="#e2e8f0" text-anchor="middle">Same Destination via OSPF: 10.2.1.0/24</text>
                
                <!-- Path 1 - Better metric -->
                <rect x="50" y="50" width="300" height="35" rx="5" fill="#10b981" stroke="#16a34a" stroke-width="3"/>
                <text x="60" y="68" font-family="monospace" fill="white" font-size="12">O  10.2.1.0/24 [110/10] via 192.168.1.2</text>
                <text x="60" y="82" font-size="10" fill="#10b981">OSPF Cost 10 - Fast Path ✓ INSTALLED</text>
                
                <!-- Path 2 - Worse metric -->
                <rect x="50" y="95" width="300" height="35" rx="5" fill="#374151"/>
                <text x="60" y="113" font-family="monospace" fill="#94a3b8" font-size="12">O  10.2.1.0/24 [110/20] via 192.168.1.3</text>
                <text x="60" y="127" font-size="10" fill="#94a3b8">OSPF Cost 20 - Slower Path</text>
                
                <!-- Load balancing scenario -->
                <rect x="50" y="145" width="300" height="25" rx="5" fill="#6366f1"/>
                <text x="60" y="162" font-family="monospace" fill="white" font-size="10">If metrics are equal → Load Balance (up to 4 paths)</text>
                
                <text x="200" y="185" font-size="11" fill="#10b981" text-anchor="middle">Lower Metric = Better Path</text>
            </svg>`
        }
    ],
    staticRouting: [
        {
            title: "Default Route",
            icon: "fa-globe",
            description: "A default route (0.0.0.0/0) is used when no specific route exists for a destination. It's the gateway of last resort, commonly used for internet connectivity. IPv6 uses ::/0 for default routes.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Default Route Configuration</title>
                <circle cx="80" cy="100" r="25" fill="#334155"/><text x="80" y="105" fill="white" font-size="10">Router</text>
                <circle cx="320" cy="100" r="25" fill="#f59e0b"/><text x="320" y="105" fill="white" font-size="10">ISP</text>
                
                <!-- Default route arrow -->
                <path d="M105,100 L295,100" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-orange)"/>
                <text x="200" y="90" font-size="12" fill="#f59e0b" text-anchor="middle">Default Route</text>
                
                <!-- Configuration examples -->
                <rect x="20" y="20" width="360" height="60" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="40" font-family="monospace" font-size="11" fill="#10b981" text-anchor="middle">IPv4: ip route 0.0.0.0 0.0.0.0 192.168.1.1</text>
                <text x="200" y="55" font-family="monospace" font-size="11" fill="#3b82f6" text-anchor="middle">IPv6: ipv6 route ::/0 2001:DB8::1</text>
                <text x="200" y="70" font-family="sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Gateway of Last Resort</text>
                
                <!-- Internet cloud -->
                <text x="200" y="140" font-size="12" fill="#f59e0b" text-anchor="middle">0.0.0.0/0 → All Unknown Destinations</text>
                <text x="200" y="160" font-size="10" fill="#94a3b8" text-anchor="middle">(Internet, Remote Networks)</text>
                
                <defs>
                  <marker id="arrow-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
                  </marker>
                </defs>
            </svg>`
        },
        {
            title: "Network Route",
            icon: "fa-network-wired",
            description: "A network route targets an entire subnet or network. It specifies the destination network, subnet mask, and next-hop router. This is the most common type of static route for reaching remote networks.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Network Route Configuration</title>
                <circle cx="60" cy="100" r="25" fill="#334155"/><text x="60" y="105" fill="white" font-size="10">R1</text>
                <circle cx="200" cy="100" r="25" fill="#6366f1"/><text x="200" y="105" fill="white" font-size="10">R2</text>
                <rect x="280" y="80" width="100" height="40" rx="5" fill="#3b82f6"/><text x="330" y="105" fill="white" font-size="10">10.1.1.0/24</text>
                
                <!-- Network route arrow -->
                <path d="M85,100 L175,100" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
                <path d="M225,100 L280,100" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
                
                <!-- Configuration examples -->
                <rect x="20" y="20" width="360" height="45" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="38" font-family="monospace" font-size="10" fill="#3b82f6" text-anchor="middle">IPv4: ip route 10.1.1.0 255.255.255.0 192.168.1.2</text>
                <text x="200" y="52" font-family="monospace" font-size="10" fill="#6366f1" text-anchor="middle">IPv6: ipv6 route 2001:DB8:1::/64 2001:DB8::2</text>
                
                <!-- Network details -->
                <text x="60" y="140" font-size="10" fill="#94a3b8">192.168.1.1</text>
                <text x="200" y="140" font-size="10" fill="#94a3b8">192.168.1.2</text>
                <text x="330" y="140" font-size="10" fill="#3b82f6">254 hosts</text>
                <text x="200" y="170" font-size="11" fill="#3b82f6" text-anchor="middle">Route to entire network subnet</text>
                
                <defs>
                  <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
                  </marker>
                </defs>
            </svg>`
        },
        {
            title: "Host Route",
            icon: "fa-desktop",
            description: "A host route targets a single device using a /32 subnet mask (IPv4) or /128 (IPv6). It's the most specific route possible and is used for reaching individual devices like servers or management interfaces.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Host Route Configuration</title>
                <circle cx="60" cy="100" r="25" fill="#334155"/><text x="60" y="105" fill="white" font-size="10">R1</text>
                <circle cx="200" cy="100" r="25" fill="#6366f1"/><text x="200" y="105" fill="white" font-size="10">R2</text>
                <rect x="290" y="85" width="80" height="30" rx="5" fill="#10b981"/><text x="330" y="105" fill="white" font-size="10">Server</text>
                
                <!-- Host route arrow -->
                <path d="M85,100 L175,100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)"/>
                <path d="M225,100 L290,100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)"/>
                
                <!-- Configuration examples -->
                <rect x="20" y="20" width="360" height="45" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="38" font-family="monospace" font-size="10" fill="#10b981" text-anchor="middle">IPv4: ip route 10.1.1.50 255.255.255.255 192.168.1.2</text>
                <text x="200" y="52" font-family="monospace" font-size="10" fill="#16a34a" text-anchor="middle">IPv6: ipv6 route 2001:DB8:1::50/128 2001:DB8::2</text>
                
                <!-- Host details -->
                <text x="60" y="140" font-size="10" fill="#94a3b8">192.168.1.1</text>
                <text x="200" y="140" font-size="10" fill="#94a3b8">192.168.1.2</text>
                <text x="330" y="140" font-size="10" fill="#10b981">10.1.1.50/32</text>
                <text x="200" y="170" font-size="11" fill="#10b981" text-anchor="middle">Route to single host (most specific)</text>
                
                <defs>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
                  </marker>
                </defs>
            </svg>`
        },
        {
            title: "Floating Static",
            icon: "fa-life-ring",
            description: "A floating static route is a backup route with a higher Administrative Distance than the primary route. It only becomes active when the primary route fails, providing redundancy without interfering with normal operations.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Floating Static Route</title>
                <circle cx="60" cy="100" r="25" fill="#334155"/><text x="60" y="105" fill="white" font-size="10">R1</text>
                <circle cx="340" cy="100" r="25" fill="#334155"/><text x="340" y="105" fill="white" font-size="10">R3</text>
                
                <!-- Primary route (active) -->
                <path d="M85,85 C150,40 250,40 315,85" stroke="#10b981" fill="none" stroke-width="3"/>
                <text x="200" y="55" text-anchor="middle" font-size="11" fill="#10b981">Primary: OSPF (AD 110)</text>
                <circle cx="200" cy="70" r="15" fill="#6366f1"/><text x="200" y="75" fill="white" font-size="8">R2</text>
                
                <!-- Backup route (floating) -->
                <path d="M85,115 C150,160 250,160 315,115" stroke="#f59e0b" fill="none" stroke-dasharray="5,5" stroke-width="2"/>
                <text x="200" y="145" text-anchor="middle" font-size="11" fill="#f59e0b">Backup: Static (AD 200)</text>
                <circle cx="200" cy="130" r="15" fill="#334155"/><text x="200" y="135" fill="white" font-size="8">R4</text>
                
                <!-- Configuration example -->
                <rect x="20" y="20" width="360" height="25" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="37" font-family="monospace" font-size="10" fill="#f59e0b" text-anchor="middle">ip route 10.3.3.0 255.255.255.0 192.168.2.4 200</text>
                
                <!-- Status indicators -->
                <text x="130" y="95" font-size="9" fill="#10b981">✓ Active</text>
                <text x="270" y="125" font-size="9" fill="#f59e0b">⚠ Standby</text>
                
                <text x="200" y="180" font-size="11" fill="#f59e0b" text-anchor="middle">Higher AD = Backup Only</text>
            </svg>`
        }
    ],
    // 3.4 Policy-Based Routing (PBR)
    pbr: [
        {
            title: "PBR Fundamentals",
            icon: "fa-route",
            description: "Policy-Based Routing (PBR) overrides the normal routing table lookup by making forwarding decisions based on defined policies. Routes traffic based on source address, packet size, application, or other criteria rather than just destination.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Policy-Based Routing Operation</title>
                <!-- Router -->
                <rect x="170" y="80" width="60" height="40" rx="5" fill="#334155"/>
                <text x="200" y="105" font-size="10" fill="white" text-anchor="middle">Router</text>
                
                <!-- Incoming Traffic -->
                <rect x="30" y="90" width="80" height="20" rx="3" fill="#6366f1"/>
                <text x="70" y="103" font-size="9" fill="white" text-anchor="middle">Mixed Traffic</text>
                <path d="M110,100 L170,100" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>
                
                <!-- Policy Decision -->
                <rect x="160" y="40" width="80" height="25" rx="3" fill="#f59e0b"/>
                <text x="200" y="55" font-size="9" fill="white" text-anchor="middle">Route-Map Policy</text>
                
                <!-- Traffic Classification -->
                <text x="200" y="25" font-size="10" fill="#e2e8f0" text-anchor="middle" font-weight="bold">PBR Classification</text>
                
                <!-- Output Paths -->
                <path d="M230,90 L290,60" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="270" y="55" font-size="8" fill="#10b981">VIP Traffic</text>
                <text x="330" y="65" font-size="8" fill="#10b981">ISP-A</text>
                
                <path d="M230,100 L310,100" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="270" y="95" font-size="8" fill="#3b82f6">Regular Traffic</text>
                <text x="330" y="105" font-size="8" fill="#3b82f6">ISP-B</text>
                
                <path d="M230,110 L290,140" stroke="#f87171" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="270" y="135" font-size="8" fill="#f87171">Backup Traffic</text>
                <text x="330" y="145" font-size="8" fill="#f87171">ISP-C</text>
                
                <!-- Policy Override Note -->
                <text x="200" y="175" font-size="9" fill="#94a3b8" text-anchor="middle">Overrides Normal Routing Table</text>
                
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                  </marker>
                </defs>
            </svg>`
        },
        {
            title: "Route-Map Policies",
            icon: "fa-map-signs",
            description: "PBR uses route-maps to define traffic matching criteria and actions. Match statements identify traffic (access-lists, packet length, interface), while set statements define actions (next-hop, interface, IP precedence).",
            visual: `<svg viewBox="0 0 400 200">
                <title>Route-Map Structure</title>
                <!-- Route-Map Container -->
                <rect x="50" y="40" width="300" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                <text x="200" y="30" font-size="12" fill="#f59e0b" text-anchor="middle" font-weight="bold">route-map PBR-POLICY permit 10</text>
                
                <!-- Match Conditions -->
                <rect x="70" y="60" width="130" height="80" rx="5" fill="#10b981" fill-opacity="0.2" stroke="#10b981"/>
                <text x="135" y="75" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">MATCH Conditions</text>
                <text x="80" y="90" font-size="8" fill="#10b981">• ip address ACL</text>
                <text x="80" y="105" font-size="8" fill="#10b981">• length (packet size)</text>
                <text x="80" y="120" font-size="8" fill="#10b981">• interface</text>
                <text x="80" y="135" font-size="8" fill="#10b981">• ip next-hop</text>
                
                <!-- Set Actions -->
                <rect x="220" y="60" width="120" height="80" rx="5" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1"/>
                <text x="280" y="75" font-size="10" fill="#6366f1" text-anchor="middle" font-weight="bold">SET Actions</text>
                <text x="230" y="90" font-size="8" fill="#6366f1">• ip next-hop</text>
                <text x="230" y="105" font-size="8" fill="#6366f1">• interface</text>
                <text x="230" y="120" font-size="8" fill="#6366f1">• ip precedence</text>
                <text x="230" y="135" font-size="8" fill="#6366f1">• ip dscp</text>
                
                <!-- Logic Flow -->
                <path d="M200,100 L220,100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-flow)"/>
                <text x="210" y="95" font-size="8" fill="#94a3b8" text-anchor="middle">IF</text>
                <text x="210" y="115" font-size="8" fill="#94a3b8" text-anchor="middle">THEN</text>
                
                <!-- Application -->
                <text x="200" y="180" font-size="9" fill="#94a3b8" text-anchor="middle">Applied to Interface: ip policy route-map PBR-POLICY</text>
                
                <defs>
                  <marker id="arrow-flow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                  </marker>
                </defs>
            </svg>`
        }
    ],
    // 3.5 Single Area OSPFv2
    ospf: [
        {
            title: "Neighbor Adjacencies",
            icon: "fa-handshake",
            description: "OSPF routers form neighbor relationships by exchanging Hello packets. For adjacency to form, parameters must match: Area ID, Hello/Dead timers, authentication, and subnet mask. Adjacencies enable LSA exchange and topology learning.",
            visual: `<svg viewBox="0 0 400 200">
                <title>OSPF Neighbor Adjacency Process</title>
                <circle cx="80" cy="100" r="30" fill="#3b82f6"/><text x="80" y="105" fill="white" font-size="11">R1</text>
                <circle cx="320" cy="100" r="30" fill="#3b82f6"/><text x="320" y="105" fill="white" font-size="11">R2</text>
                
                <!-- Hello exchange -->
                <path d="M115,85 L285,85" stroke="#10b981" fill="none" stroke-width="2" marker-end="url(#arrow-green)"/>
                <text x="200" y="75" font-size="10" fill="#10b981" text-anchor="middle">Hello (Area 0, Timer 10s)</text>
                
                <path d="M285,115 L115,115" stroke="#10b981" fill="none" stroke-width="2" marker-end="url(#arrow-green)"/>
                <text x="200" y="130" font-size="10" fill="#10b981" text-anchor="middle">Hello (Parameters Match!)</text>
                
                <!-- Status indicators -->
                <rect x="50" y="20" width="300" height="40" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="35" font-size="11" fill="#e2e8f0" text-anchor="middle">Adjacency Requirements:</text>
                <text x="200" y="50" font-size="9" fill="#94a3b8" text-anchor="middle">Area ID • Hello/Dead Timers • Authentication • Subnet Mask</text>
                
                <text x="200" y="170" font-size="12" fill="#10b981" text-anchor="middle">Full Adjacency Established</text>
                
                <defs>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
                  </marker>
                </defs>
            </svg>`
        },
        {
            title: "Point-to-Point",
            icon: "fa-exchange-alt",
            description: "Point-to-point networks connect exactly two routers. No DR/BDR election occurs since there are only two devices. Neighbors automatically form full adjacencies and exchange routing information directly.",
            visual: `<svg viewBox="0 0 400 200">
                <title>OSPF Point-to-Point Network</title>
                <circle cx="100" cy="100" r="30" fill="#3b82f6"/><text x="100" y="105" fill="white" font-size="11">R1</text>
                <circle cx="300" cy="100" r="30" fill="#3b82f6"/><text x="300" y="105" fill="white" font-size="11">R2</text>
                
                <!-- Point-to-point link -->
                <path d="M130,100 L270,100" stroke="#6366f1" fill="none" stroke-width="4"/>
                <text x="200" y="90" font-size="12" fill="#6366f1" text-anchor="middle">Serial Link</text>
                <text x="200" y="115" font-size="10" fill="#94a3b8" text-anchor="middle">Point-to-Point</text>
                
                <!-- Configuration examples -->
                <rect x="20" y="20" width="360" height="50" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="35" font-size="10" fill="#e2e8f0" text-anchor="middle">Network Type: Point-to-Point</text>
                <text x="200" y="50" font-size="9" fill="#3b82f6" text-anchor="middle">ip ospf network point-to-point</text>
                <text x="200" y="62" font-size="9" fill="#94a3b8" text-anchor="middle">• No DR/BDR Election • Full Adjacency • Fast Convergence</text>
                
                <!-- Status -->
                <rect x="50" y="140" width="120" height="40" rx="3" fill="#10b981" opacity="0.8"/>
                <text x="110" y="157" font-size="10" fill="white" text-anchor="middle">R1 Status:</text>
                <text x="110" y="170" font-size="9" fill="white" text-anchor="middle">Full Neighbor</text>
                
                <rect x="230" y="140" width="120" height="40" rx="3" fill="#10b981" opacity="0.8"/>
                <text x="290" y="157" font-size="10" fill="white" text-anchor="middle">R2 Status:</text>
                <text x="290" y="170" font-size="9" fill="white" text-anchor="middle">Full Neighbor</text>
            </svg>`
        },
        {
            title: "Broadcast (DR/BDR)",
            icon: "fa-crown",
            description: "On multi-access networks (Ethernet), OSPF elects a Designated Router (DR) and Backup DR (BDR) to reduce adjacencies. Election based on highest OSPF priority, then highest Router ID. DROthers only form adjacencies with DR/BDR.",
            visual: `<svg viewBox="0 0 400 200">
                <title>OSPF DR/BDR Election on Ethernet</title>
                
                <!-- Ethernet segment -->
                <rect x="100" y="30" width="200" height="20" rx="10" fill="#334155"/>
                <text x="200" y="44" font-size="11" text-anchor="middle" fill="white">Ethernet Segment</text>
                
                <!-- Routers -->
                <circle cx="100" cy="120" r="25" fill="#f59e0b"/><text x="100" y="125" fill="white" font-size="10">DR</text>
                <circle cx="200" cy="120" r="25" fill="#3b82f6"/><text x="200" y="125" fill="white" font-size="10">BDR</text>
                <circle cx="300" cy="120" r="25" fill="#6b7280"/><text x="300" y="125" fill="white" font-size="9">DROther</text>
                
                <!-- Connections to segment -->
                <path d="M100,95 v-40" stroke="#94a3b8" stroke-width="2"/>
                <path d="M200,95 v-40" stroke="#94a3b8" stroke-width="2"/>
                <path d="M300,95 v-40" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- Election criteria -->
                <rect x="20" y="160" width="360" height="30" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="200" y="175" font-size="10" fill="#f59e0b" text-anchor="middle">Election: 1) Highest OSPF Priority  2) Highest Router ID</text>
                <text x="200" y="185" font-size="9" fill="#94a3b8" text-anchor="middle">DROthers form adjacencies only with DR and BDR</text>
                
                <!-- Priority labels -->
                <text x="100" y="155" font-size="9" fill="#f59e0b" text-anchor="middle">Priority: 2</text>
                <text x="200" y="155" font-size="9" fill="#3b82f6" text-anchor="middle">Priority: 1</text>
                <text x="300" y="155" font-size="9" fill="#6b7280" text-anchor="middle">Priority: 1</text>
                
                <!-- Adjacency lines -->
                <path d="M125,130 L175,130" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
                <path d="M125,110 L275,110" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2"/>
                <path d="M225,110 L275,110" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2"/>
            </svg>`
        },
        {
            title: "Router ID",
            icon: "fa-id-card",
            description: "The Router ID (RID) is a unique 32-bit identifier for each OSPF router. Selection priority: 1) Manual 'router-id' configuration, 2) Highest loopback interface IP, 3) Highest active physical interface IP. Critical for DR/BDR elections.",
            visual: `<svg viewBox="0 0 400 200">
                <title>OSPF Router ID Selection Process</title>
                
                <!-- Central router -->
                <circle cx="200" cy="100" r="35" fill="#3b82f6"/>
                <text x="200" y="95" fill="white" font-size="9" text-anchor="middle">Router</text>
                <text x="200" y="108" fill="white" font-size="10" text-anchor="middle" font-weight="bold">1.1.1.1</text>
                
                <!-- Selection methods -->
                <rect x="50" y="30" width="120" height="40" rx="5" fill="#10b981"/>
                <text x="110" y="45" fill="white" font-size="9" text-anchor="middle">1. Manual Config</text>
                <text x="110" y="58" fill="white" font-size="8" text-anchor="middle">router-id 1.1.1.1</text>
                <path d="M170,50 L175,85" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)"/>
                
                <rect x="30" y="120" width="120" height="40" rx="5" fill="#6366f1"/>
                <text x="90" y="135" fill="white" font-size="9" text-anchor="middle">2. Highest Loopback</text>
                <text x="90" y="148" fill="white" font-size="8" text-anchor="middle">Lo0: 2.2.2.2</text>
                <path d="M150,140 L165,115" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
                
                <rect x="250" y="120" width="120" height="40" rx="5" fill="#8b5cf6"/>
                <text x="310" y="135" fill="white" font-size="9" text-anchor="middle">3. Highest Physical</text>
                <text x="310" y="148" fill="white" font-size="8" text-anchor="middle">Gi0/1: 3.3.3.3</text>
                <path d="M250,140 L235,115" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,5"/>
                
                <!-- Priority indication -->
                <text x="200" y="25" font-size="12" fill="#10b981" text-anchor="middle" font-weight="bold">HIGHEST PRIORITY</text>
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Manual configuration always wins</text>
                
                <!-- Configuration example -->
                <rect x="230" y="30" width="140" height="40" rx="5" fill="#1e293b" stroke="#334155"/>
                <text x="300" y="45" fill="#10b981" font-size="9" text-anchor="middle">router ospf 1</text>
                <text x="300" y="58" fill="#10b981" font-size="9" text-anchor="middle">router-id 1.1.1.1</text>
                
                <defs>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
                  </marker>
                </defs>
            </svg>`
        }
    ],
    // 3.5 EIGRP (Enhanced Interior Gateway Routing Protocol)
    eigrp: [
        {
            title: "EIGRP Fundamentals",
            icon: "fa-project-diagram",
            description: "Enhanced Interior Gateway Routing Protocol (EIGRP) is Cisco's advanced distance-vector routing protocol. Uses DUAL algorithm for fast convergence, supports unequal cost load balancing, and classless routing with VLSM.",
            visual: `<svg viewBox="0 0 400 200">
                <title>EIGRP Network Operation</title>
                <!-- EIGRP AS -->
                <ellipse cx="200" cy="100" rx="180" ry="80" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,5"/>
                <text x="200" y="40" font-size="12" fill="#f59e0b" text-anchor="middle" font-weight="bold">EIGRP AS 100</text>
                
                <!-- Routers -->
                <circle cx="120" cy="80" r="25" fill="#334155"/>
                <text x="120" y="85" font-size="10" fill="white" text-anchor="middle">R1</text>
                <text x="120" y="115" font-size="8" fill="#94a3b8" text-anchor="middle">10.1.1.1</text>
                
                <circle cx="280" cy="80" r="25" fill="#334155"/>
                <text x="280" y="85" font-size="10" fill="white" text-anchor="middle">R2</text>
                <text x="280" y="115" font-size="8" fill="#94a3b8" text-anchor="middle">10.1.1.2</text>
                
                <circle cx="200" cy="140" r="25" fill="#334155"/>
                <text x="200" y="145" font-size="10" fill="white" text-anchor="middle">R3</text>
                <text x="200" y="175" font-size="8" fill="#94a3b8" text-anchor="middle">10.1.1.3</text>
                
                <!-- EIGRP Adjacencies -->
                <line x1="145" y1="85" x2="255" y2="85" stroke="#10b981" stroke-width="2"/>
                <line x1="135" y1="95" x2="185" y2="125" stroke="#10b981" stroke-width="2"/>
                <line x1="265" y1="95" x2="215" y2="125" stroke="#10b981" stroke-width="2"/>
                
                <!-- EIGRP Hello Packets -->
                <circle cx="150" cy="85" r="8" fill="#f59e0b" opacity="0.7"/>
                <text x="150" y="89" font-size="6" fill="white" text-anchor="middle">Hello</text>
                
                <circle cx="250" cy="85" r="8" fill="#f59e0b" opacity="0.7"/>
                <text x="250" y="89" font-size="6" fill="white" text-anchor="middle">Hello</text>
                
                <!-- DUAL Algorithm -->
                <rect x="320" y="50" width="70" height="40" rx="5" fill="#1e293b" stroke="#f59e0b"/>
                <text x="355" y="65" font-size="9" fill="#f59e0b" text-anchor="middle" font-weight="bold">DUAL</text>
                <text x="355" y="77" font-size="8" fill="#e2e8f0" text-anchor="middle">Algorithm</text>
                <text x="355" y="85" font-size="7" fill="#94a3b8" text-anchor="middle">Loop-Free</text>
            </svg>`
        },
        {
            title: "EIGRP Metric Calculation",
            icon: "fa-calculator",
            description: "EIGRP uses composite metric based on bandwidth, delay, reliability, load, and MTU. By default, only bandwidth and delay are used. Formula: 256 * (K1*BW + K3*Delay) where K1=K3=1, others=0.",
            visual: `<svg viewBox="0 0 400 200">
                <title>EIGRP Metric Components</title>
                <!-- Metric Formula -->
                <rect x="50" y="30" width="300" height="30" rx="5" fill="#1e293b" stroke="#f59e0b"/>
                <text x="200" y="50" font-size="12" fill="#f59e0b" text-anchor="middle" font-weight="bold">Metric = 256 × (K₁×BW + K₃×Delay)</text>
                
                <!-- Bandwidth Component -->
                <rect x="70" y="80" width="120" height="50" rx="5" fill="#10b981" fill-opacity="0.2" stroke="#10b981"/>
                <text x="130" y="95" font-size="10" fill="#10b981" text-anchor="middle" font-weight="bold">Bandwidth (K₁)</text>
                <text x="130" y="108" font-size="9" fill="#10b981" text-anchor="middle">10⁷ ÷ lowest BW (kbps)</text>
                <text x="130" y="120" font-size="8" fill="#94a3b8" text-anchor="middle">Default: K₁ = 1</text>
                
                <!-- Delay Component -->
                <rect x="210" y="80" width="120" height="50" rx="5" fill="#6366f1" fill-opacity="0.2" stroke="#6366f1"/>
                <text x="270" y="95" font-size="10" fill="#6366f1" text-anchor="middle" font-weight="bold">Delay (K₃)</text>
                <text x="270" y="108" font-size="9" fill="#6366f1" text-anchor="middle">Sum of delays ÷ 10</text>
                <text x="270" y="120" font-size="8" fill="#94a3b8" text-anchor="middle">Default: K₃ = 1</text>
                
                <!-- Unused Components -->
                <rect x="80" y="150" width="80" height="30" rx="3" fill="#64748b" fill-opacity="0.3" stroke="#64748b"/>
                <text x="120" y="170" font-size="8" fill="#64748b" text-anchor="middle">Reliability (K₂=0)</text>
                
                <rect x="170" y="150" width="60" height="30" rx="3" fill="#64748b" fill-opacity="0.3" stroke="#64748b"/>
                <text x="200" y="170" font-size="8" fill="#64748b" text-anchor="middle">Load (K₄=0)</text>
                
                <rect x="240" y="150" width="60" height="30" rx="3" fill="#64748b" fill-opacity="0.3" stroke="#64748b"/>
                <text x="270" y="170" font-size="8" fill="#64748b" text-anchor="middle">MTU (K₅=0)</text>
            </svg>`
        }
    ],
    // 3.6 First Hop Redundancy Protocols
    fhrp: [
        {
            title: "FHRP Purpose & Concepts",
            icon: "fa-shield-alt",
            description: "First Hop Redundancy Protocols eliminate single points of failure at the default gateway. Multiple routers share a virtual IP/MAC address, providing seamless failover for end devices without reconfiguration.",
            visual: `<svg viewBox="0 0 400 200">
                <title>FHRP Problem and Solution</title>
                <!-- Problem scenario -->
                <text x="200" y="20" font-size="12" fill="#e74c3c" text-anchor="middle" font-weight="bold">Problem: Single Point of Failure</text>
                <rect x="20" y="30" width="160" height="70" rx="5" fill="#1e293b" stroke="#e74c3c" stroke-dasharray="3,3"/>
                <rect x="50" y="50" width="40" height="20" rx="3" fill="#10b981"/><text x="70" y="63" font-size="9" fill="white">PC</text>
                <text x="70" y="45" font-size="8" fill="#94a3b8">GW: 192.168.1.1</text>
                <circle cx="120" cy="70" r="15" fill="#e74c3c"/><text x="120" y="75" fill="white" font-size="8">R1</text>
                <path d="M90,60 L105,65" stroke="#94a3b8"/>
                <text x="100" y="90" font-size="10" fill="#e74c3c" text-anchor="middle">Gateway Fails!</text>
                
                <!-- Solution scenario -->
                <text x="300" y="20" font-size="12" fill="#10b981" text-anchor="middle" font-weight="bold">Solution: FHRP Redundancy</text>
                <rect x="220" y="30" width="160" height="140" rx="5" fill="#1e293b" stroke="#10b981"/>
                <rect x="250" y="50" width="40" height="20" rx="3" fill="#10b981"/><text x="270" y="63" font-size="9" fill="white">PC</text>
                <text x="270" y="45" font-size="8" fill="#94a3b8">GW: 192.168.1.100</text>
                
                <!-- Virtual IP cloud -->
                <ellipse cx="300" cy="100" rx="60" ry="20" stroke="#6366f1" stroke-dasharray="2,2" fill="rgba(99,102,241,0.1)"/>
                <text x="300" y="95" font-size="9" fill="#6366f1" text-anchor="middle">Virtual IP</text>
                <text x="300" y="108" font-size="8" fill="#6366f1" text-anchor="middle">192.168.1.100</text>
                
                <!-- Redundant routers -->
                <circle cx="270" cy="140" r="12" fill="#10b981"/><text x="270" y="145" fill="white" font-size="7">R1</text>
                <circle cx="330" cy="140" r="12" fill="#3b82f6"/><text x="330" y="145" fill="white" font-size="7">R2</text>
                <text x="270" y="160" font-size="7" fill="#10b981" text-anchor="middle">Active</text>
                <text x="330" y="160" font-size="7" fill="#3b82f6" text-anchor="middle">Standby</text>
                
                <!-- Connections -->
                <path d="M270,75 v25" stroke="#94a3b8"/>
                <path d="M258,140 L282,140" stroke="#94a3b8" stroke-dasharray="1,1"/>
                <path d="M318,140 L342,140" stroke="#94a3b8" stroke-dasharray="1,1"/>
                
                <!-- Benefits -->
                <text x="200" y="190" font-size="11" fill="#10b981" text-anchor="middle">✓ No Single Point of Failure  ✓ Transparent Failover  ✓ Load Balancing</text>
            </svg>`
        },
        {
            title: "HSRP (Hot Standby)",
            icon: "fa-fire",
            description: "Cisco's proprietary FHRP with Active/Standby model. Uses virtual MAC address 0000.0c07.acXX where XX is the group number. Default priority is 100, with preemption disabled by default.",
            visual: `<svg viewBox="0 0 400 200">
                <title>HSRP Operation</title>
                <!-- Network segment -->
                <rect x="50" y="130" width="300" height="15" rx="7" fill="#334155"/>
                <text x="200" y="142" font-size="9" text-anchor="middle" fill="white">Ethernet LAN</text>
                
                <!-- End device -->
                <rect x="30" y="160" width="40" height="25" rx="3" fill="#10b981"/>
                <text x="50" y="175" font-size="9" fill="white" text-anchor="middle">PC</text>
                <text x="50" y="155" font-size="8" fill="#94a3b8" text-anchor="middle">GW: 192.168.1.1</text>
                <path d="M50,160 v-15" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- HSRP Group -->
                <ellipse cx="200" cy="80" rx="120" ry="25" stroke="#f59e0b" stroke-width="2" fill="rgba(245,158,11,0.1)"/>
                <text x="200" y="70" font-size="11" fill="#f59e0b" text-anchor="middle" font-weight="bold">HSRP Group 1</text>
                <text x="200" y="85" font-size="9" fill="#f59e0b" text-anchor="middle">Virtual IP: 192.168.1.1</text>
                <text x="200" y="95" font-size="8" fill="#f59e0b" text-anchor="middle">Virtual MAC: 0000.0c07.ac01</text>
                
                <!-- Router 1 - Active -->
                <circle cx="150" cy="110" r="20" fill="#10b981"/>
                <text x="150" y="115" fill="white" font-size="9" text-anchor="middle">R1</text>
                <rect x="130" y="25" width="40" height="15" rx="3" fill="#10b981"/>
                <text x="150" y="35" font-size="8" fill="white" text-anchor="middle">ACTIVE</text>
                <text x="150" y="20" font-size="8" fill="#10b981" text-anchor="middle">Priority: 110</text>
                <path d="M150,90 v20" stroke="#94a3b8"/>
                
                <!-- Router 2 - Standby -->
                <circle cx="250" cy="110" r="20" fill="#3b82f6"/>
                <text x="250" y="115" fill="white" font-size="9" text-anchor="middle">R2</text>
                <rect x="230" y="25" width="40" height="15" rx="3" fill="#3b82f6"/>
                <text x="250" y="35" font-size="8" fill="white" text-anchor="middle">STANDBY</text>
                <text x="250" y="20" font-size="8" fill="#3b82f6" text-anchor="middle">Priority: 100</text>
                <path d="M250,90 v20" stroke="#94a3b8"/>
                
                <!-- Internet connection -->
                <rect x="330" y="160" width="40" height="25" rx="3" fill="#f59e0b"/>
                <text x="350" y="175" font-size="9" fill="white" text-anchor="middle">ISP</text>
                <path d="M350,160 v-15" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- Hello messages -->
                <path d="M170,115 L230,115" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2" marker-end="url(#arrow-small)"/>
                <text x="200" y="112" font-size="7" fill="#10b981" text-anchor="middle">Hello (3s)</text>
                
                <!-- Status indicators -->
                <text x="200" y="170" font-size="10" fill="#10b981" text-anchor="middle">Active router forwards traffic • Standby monitors active</text>
                <text x="200" y="185" font-size="9" fill="#94a3b8" text-anchor="middle">Automatic failover if active router fails</text>
                
                <defs>
                  <marker id="arrow-small" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="4" markerHeight="4" orient="auto">
                    <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981"/>
                  </marker>
                </defs>
            </svg>`
        },
        {
            title: "VRRP (Virtual Router)",
            icon: "fa-sitemap",
            description: "Industry standard FHRP (RFC 3768) with Master/Backup model. Uses virtual MAC address 0000.5e00.01XX where XX is the VRID. Default priority is 100, with preemption enabled by default.",
            visual: `<svg viewBox="0 0 400 200">
                <title>VRRP Operation</title>
                <!-- Network segment -->
                <rect x="50" y="130" width="300" height="15" rx="7" fill="#334155"/>
                <text x="200" y="142" font-size="9" text-anchor="middle" fill="white">Ethernet LAN</text>
                
                <!-- End device -->
                <rect x="30" y="160" width="40" height="25" rx="3" fill="#10b981"/>
                <text x="50" y="175" font-size="9" fill="white" text-anchor="middle">PC</text>
                <text x="50" y="155" font-size="8" fill="#94a3b8" text-anchor="middle">GW: 10.1.1.1</text>
                <path d="M50,160 v-15" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- VRRP Group -->
                <ellipse cx="200" cy="80" rx="120" ry="25" stroke="#6366f1" stroke-width="2" fill="rgba(99,102,241,0.1)"/>
                <text x="200" y="70" font-size="11" fill="#6366f1" text-anchor="middle" font-weight="bold">VRRP Group 10</text>
                <text x="200" y="85" font-size="9" fill="#6366f1" text-anchor="middle">Virtual IP: 10.1.1.1</text>
                <text x="200" y="95" font-size="8" fill="#6366f1" text-anchor="middle">Virtual MAC: 0000.5e00.010a</text>
                
                <!-- Router 1 - Master -->
                <circle cx="150" cy="110" r="20" fill="#10b981"/>
                <text x="150" y="115" fill="white" font-size="9" text-anchor="middle">R1</text>
                <rect x="130" y="25" width="40" height="15" rx="3" fill="#10b981"/>
                <text x="150" y="35" font-size="8" fill="white" text-anchor="middle">MASTER</text>
                <text x="150" y="20" font-size="8" fill="#10b981" text-anchor="middle">Priority: 200</text>
                <path d="M150,90 v20" stroke="#94a3b8"/>
                
                <!-- Router 2 - Backup -->
                <circle cx="250" cy="110" r="20" fill="#8b5cf6"/>
                <text x="250" y="115" fill="white" font-size="9" text-anchor="middle">R2</text>
                <rect x="230" y="25" width="40" height="15" rx="3" fill="#8b5cf6"/>
                <text x="250" y="35" font-size="8" fill="white" text-anchor="middle">BACKUP</text>
                <text x="250" y="20" font-size="8" fill="#8b5cf6" text-anchor="middle">Priority: 100</text>
                <path d="M250,90 v20" stroke="#94a3b8"/>
                
                <!-- Internet connection -->
                <rect x="330" y="160" width="40" height="25" rx="3" fill="#f59e0b"/>
                <text x="350" y="175" font-size="9" fill="white" text-anchor="middle">ISP</text>
                <path d="M350,160 v-15" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- Advertisement messages -->
                <path d="M170,105 L360,105" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2" marker-end="url(#arrow-vrrp)"/>
                <text x="265" y="102" font-size="7" fill="#10b981" text-anchor="middle">Advertisement (1s)</text>
                
                <!-- Key differences -->
                <rect x="290" y="40" width="100" height="40" rx="3" fill="#1e293b" stroke="#6366f1"/>
                <text x="340" y="52" font-size="8" fill="#6366f1" text-anchor="middle">VRRP Features:</text>
                <text x="340" y="62" font-size="7" fill="#e2e8f0" text-anchor="middle">• Industry Standard</text>
                <text x="340" y="70" font-size="7" fill="#e2e8f0" text-anchor="middle">• Preemption ON</text>
                
                <!-- Status indicators -->
                <text x="200" y="170" font-size="10" fill="#6366f1" text-anchor="middle">Master router forwards traffic • Backup monitors master</text>
                <text x="200" y="185" font-size="9" fill="#94a3b8" text-anchor="middle">Preemption allows better router to take over immediately</text>
                
                <defs>
                  <marker id="arrow-vrrp" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="4" markerHeight="4" orient="auto">
                    <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981"/>
                  </marker>
                </defs>
            </svg>`
        },
        {
            title: "GLBP Load Balancing",
            icon: "fa-balance-scale",
            description: "Cisco's Gateway Load Balancing Protocol provides both redundancy and load balancing. One Active Virtual Gateway (AVG) assigns virtual MAC addresses to multiple Active Virtual Forwarders (AVFs), distributing traffic among all routers.",
            visual: `<svg viewBox="0 0 400 200">
                <title>GLBP Load Balancing</title>
                <!-- Network segment -->
                <rect x="20" y="130" width="360" height="15" rx="7" fill="#334155"/>
                <text x="200" y="142" font-size="9" text-anchor="middle" fill="white">Ethernet LAN</text>
                
                <!-- Multiple end devices -->
                <rect x="20" y="160" width="30" height="20" rx="3" fill="#10b981"/>
                <text x="35" y="172" font-size="8" fill="white" text-anchor="middle">PC1</text>
                <text x="35" y="155" font-size="7" fill="#94a3b8" text-anchor="middle">GW: .1</text>
                <path d="M35,160 v-15" stroke="#94a3b8" stroke-width="1"/>
                
                <rect x="70" y="160" width="30" height="20" rx="3" fill="#10b981"/>
                <text x="85" y="172" font-size="8" fill="white" text-anchor="middle">PC2</text>
                <text x="85" y="155" font-size="7" fill="#94a3b8" text-anchor="middle">GW: .1</text>
                <path d="M85,160 v-15" stroke="#94a3b8" stroke-width="1"/>
                
                <rect x="120" y="160" width="30" height="20" rx="3" fill="#10b981"/>
                <text x="135" y="172" font-size="8" fill="white" text-anchor="middle">PC3</text>
                <text x="135" y="155" font-size="7" fill="#94a3b8" text-anchor="middle">GW: .1</text>
                <path d="M135,160 v-15" stroke="#94a3b8" stroke-width="1"/>
                
                <!-- GLBP Group -->
                <ellipse cx="250" cy="80" rx="120" ry="30" stroke="#8b5cf6" stroke-width="2" fill="rgba(139,92,246,0.1)"/>
                <text x="250" y="65" font-size="11" fill="#8b5cf6" text-anchor="middle" font-weight="bold">GLBP Group 1</text>
                <text x="250" y="78" font-size="9" fill="#8b5cf6" text-anchor="middle">Virtual IP: 192.168.1.1</text>
                <text x="250" y="90" font-size="8" fill="#8b5cf6" text-anchor="middle">Multiple Virtual MACs</text>
                
                <!-- Router 1 - AVG -->
                <circle cx="200" cy="110" r="18" fill="#10b981"/>
                <text x="200" y="115" fill="white" font-size="8" text-anchor="middle">R1</text>
                <rect x="185" y="25" width="30" height="12" rx="2" fill="#10b981"/>
                <text x="200" y="33" font-size="7" fill="white" text-anchor="middle">AVG</text>
                <text x="200" y="20" font-size="7" fill="#10b981" text-anchor="middle">Gateway</text>
                <path d="M200,92 v18" stroke="#94a3b8"/>
                
                <!-- Router 2 - AVF -->
                <circle cx="250" cy="110" r="18" fill="#3b82f6"/>
                <text x="250" y="115" fill="white" font-size="8" text-anchor="middle">R2</text>
                <rect x="235" y="25" width="30" height="12" rx="2" fill="#3b82f6"/>
                <text x="250" y="33" font-size="7" fill="white" text-anchor="middle">AVF</text>
                <text x="250" y="20" font-size="7" fill="#3b82f6" text-anchor="middle">Forwarder</text>
                <path d="M250,92 v18" stroke="#94a3b8"/>
                
                <!-- Router 3 - AVF -->
                <circle cx="300" cy="110" r="18" fill="#6366f1"/>
                <text x="300" y="115" fill="white" font-size="8" text-anchor="middle">R3</text>
                <rect x="285" y="25" width="30" height="12" rx="2" fill="#6366f1"/>
                <text x="300" y="33" font-size="7" fill="white" text-anchor="middle">AVF</text>
                <text x="300" y="20" font-size="7" fill="#6366f1" text-anchor="middle">Forwarder</text>
                <path d="M300,92 v18" stroke="#94a3b8"/>
                
                <!-- Load balancing arrows -->
                <path d="M35,130 C35,120 35,120 200,120" stroke="#10b981" stroke-width="2" fill="none" stroke-dasharray="3,1" marker-end="url(#arrow-glbp1)"/>
                <path d="M85,130 C85,115 85,115 250,115" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="3,1" marker-end="url(#arrow-glbp2)"/>
                <path d="M135,130 C135,125 135,125 300,125" stroke="#6366f1" stroke-width="2" fill="none" stroke-dasharray="3,1" marker-end="url(#arrow-glbp3)"/>
                
                <!-- Internet -->
                <rect x="350" y="160" width="30" height="20" rx="3" fill="#f59e0b"/>
                <text x="365" y="172" font-size="8" fill="white" text-anchor="middle">ISP</text>
                <path d="M365,160 v-15" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- Status indicators -->
                <text x="200" y="185" font-size="10" fill="#8b5cf6" text-anchor="middle">All routers actively forward traffic • Load shared automatically</text>
                
                <defs>
                  <marker id="arrow-glbp1" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981"/></marker>
                  <marker id="arrow-glbp2" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 6 3 L 0 6 z" fill="#3b82f6"/></marker>
                  <marker id="arrow-glbp3" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 6 3 L 0 6 z" fill="#6366f1"/></marker>
                </defs>
            </svg>`
        }
    ],
    // Section metadata
    metadata: {
        sectionNumber: 3,
        title: "IP Connectivity",
        subsections: {
            routingTable: { title: "3.1 Routing Table Components", count: 6 },
            routing: { title: "3.2 Forwarding Decision", count: 3 },
            staticRouting: { title: "3.3 Static Routing", count: 4 },
            pbr: { title: "3.4 Policy-Based Routing", count: 2 },
            ospf: { title: "3.5 Single Area OSPFv2", count: 4 },
            eigrp: { title: "3.6 EIGRP", count: 2 },
            fhrp: { title: "3.7 First Hop Redundancy", count: 4 }
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
