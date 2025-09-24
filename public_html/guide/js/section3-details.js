/**
 * CCNA Section 3: IP Connectivity - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, this content is focused on exam-relevant technical details.
 * v1.0 - Initial creation for all Section 3 topics.
 */

const SECTION3_DETAILS = {
    // 3.1 Routing Table
    "Routing Table": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">3.1: Interpret Routing Table</h3>
            <p>The routing table is the router's brain. The <code>show ip route</code> command is essential for verification.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
O  10.1.1.0/24 [110/10] via 192.168.1.2, 00:15:30, Gig0/1
</code>
</pre>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Routing Protocol Code (O):</strong> How the route was learned (O=OSPF, S=Static, C=Connected, R=RIP, D=EIGRP).</li>
                <li><strong>Prefix & Network Mask (10.1.1.0/24):</strong> The destination network and its prefix length.</li>
                <li><strong>Administrative Distance & Metric ([110/10]):</strong> The AD (trustworthiness) is 110, and the metric (cost) is 10.</li>
                <li><strong>Next Hop (via 192.168.1.2):</strong> The IP address of the next router to send the packet to.</li>
                <li><strong>Default Gateway:</strong> Not shown in this line, but it appears at the top of the routing table. It's the default route (S*) used when no specific route is found.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2180210&seqNum=5" target="_blank" style="color: #66B2FF;">Read: Reading the IP Routing Table (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=s_w0a_53eeA" target="_blank" style="color: #66B2FF;">Watch: The Routing Table Explained (Practical Networking)</a></em>
            </div>
        </div>
    `,

    // Administrative Distance & Metric
    "AD & Metric": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">Administrative Distance & Metric</h3>
            <p><strong>Administrative Distance (AD)</strong> represents the trustworthiness of the route source. Lower AD values are preferred.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Connected Routes:</strong> AD 0 (most trusted)</li>
                <li><strong>Static Routes:</strong> AD 1</li>
                <li><strong>OSPF:</strong> AD 110</li>
                <li><strong>RIP:</strong> AD 120</li>
            </ul>
            <p><strong>Metric</strong> is used by routing protocols to determine the best path when multiple routes to the same destination exist within the same protocol.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.html" target="_blank" style="color: #66B2FF;">Read: Administrative Distance</a></em>
            </div>
        </div>
    `,

    // Default Gateway
    "Default Gateway": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">Default Gateway</h3>
            <p>The Default Gateway is the default route (0.0.0.0/0) that packets use when no specific route exists for their destination.</p>
            <p>It appears at the top of the routing table as: <code>Gateway of last resort is [IP] to network 0.0.0.0</code></p>
            <p>This is essential for internet connectivity, as routers cannot have routes to every possible destination.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/16448-default.html" target="_blank" style="color: #66B2FF;">Read: Default Routes</a></em>
            </div>
        </div>
    `,

    // 3.2 Router Forwarding Decision
    "Forwarding Logic": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">3.2: Router Forwarding Logic</h3>
            <p>A router follows a strict, three-step process to choose the best route to install in its routing table for any given destination.</p>
            <ol style="margin-left: 20px;">
                <li><strong>Prefix Matching:</strong> The most specific route always wins. A route to <code>10.1.1.0/26</code> is preferred over <code>10.1.1.0/24</code> because it describes a smaller, more specific range of addresses.</li>
                <li><strong>Lowest Administrative Distance (AD):</strong> If a router learns about the exact same prefix (e.g., 10.1.1.0/24) from both OSPF (AD 110) and a static route (AD 1), it will choose the static route because its AD is lower, meaning it's considered more trustworthy.</li>
                <li><strong>Lowest Metric:</strong> If the AD is the same (e.g., two OSPF routes to the same prefix), the router uses the protocol's own metric to break the tie. For OSPF, this is the 'cost'. The route with the lowest cost is installed.</li>
            </ol>
            <p>This logic is applied in order. The router never looks at the metric if the ADs are different.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://community.cisco.com/t5/networking-knowledge-base/routing-basics-how-a-router-makes-its-forwarding-decision/ta-p/3132448" target="_blank" style="color: #66B2FF;">Read: How a Router Makes its Forwarding Decision</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=--c_Wp-s_S8" target="_blank" style="color: #66B2FF;">Watch: Prefix Matching, AD, Metric (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // Prefix Matching
    "Prefix Matching": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">Prefix Matching</h3>
            <p>The primary rule for route selection. A router always prefers the most specific (longest prefix) route to a destination.</p>
            <p><strong>Example:</strong> For destination 10.1.1.100:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li>Route A: 10.1.0.0/16 (covers 10.1.0.0 - 10.1.255.255)</li>
                <li>Route B: 10.1.1.0/24 (covers 10.1.1.0 - 10.1.1.255) ← CHOSEN</li>
            </ul>
            <p>Route B is chosen because /24 is more specific than /16, even if Route A has a better metric or came from a more trusted source.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.practicalnetworking.net/stand-alone/routing-table-lookup/" target="_blank" style="color: #66B2FF;">Read: Prefix Matching (Practical Networking)</a></em>
            </div>
        </div>
    `,

    // 3.3 Static Routing
    "Static Routes": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">3.3: Configure & Verify Static Routing</h3>
            <p>Static routes are manually configured by an administrator. They provide precise control over routing but don't adapt to network changes.</p>
            
            <h4 style="color: #58D68D;">IPv4 Static Route Types & Configuration</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Default Route:</strong> <code>ip route 0.0.0.0 0.0.0.0 [next-hop_IP]</code></li>
                <li><strong>Network Route:</strong> <code>ip route 10.1.2.0 255.255.255.0 [next-hop_IP]</code></li>
                <li><strong>Host Route:</strong> <code>ip route 10.1.2.50 255.255.255.255 [next-hop_IP]</code></li>
                <li><strong>Floating Static:</strong> A backup route with a higher AD. <code>ip route 10.1.2.0 255.255.255.0 [backup_next-hop_IP] 254</code>. The '254' at the end sets the AD.</li>
            </ul>

            <h4 style="color: #58D68D;">IPv6 Static Route Types & Configuration</h4>
            <p>Configuration is very similar, but requires <code>ipv6 unicast-routing</code> to be enabled globally first.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Default Route:</strong> <code>ipv6 route ::/0 [next-hop_IPv6]</code></li>
                <li><strong>Network Route:</strong> <code>ipv6 route 2001:DB8:ACAD:2::/64 [next-hop_IPv6]</code></li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13740-9.html" target="_blank" style="color: #66B2FF;">Read: Configuring Static Routes</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=m-24i2b881s" target="_blank" style="color: #66B2FF;">Watch: Static Routing (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // Floating Static Route
    "Floating Static Route": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">Floating Static Routes</h3>
            <p>A floating static route is a backup route that remains inactive until the primary route fails.</p>
            <p><strong>Configuration:</strong> Add a higher Administrative Distance to make it "float" above the primary route:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
ip route 10.1.2.0 255.255.255.0 192.168.1.2      ! Primary (AD 1)
ip route 10.1.2.0 255.255.255.0 192.168.1.3 254   ! Floating (AD 254)
</code>
</pre>
            <p>The floating route with AD 254 will only be used if the primary route (AD 1) becomes unavailable.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/routing/118263-technote-backup-00.html" target="_blank" style="color: #66B2FF;">Read: Floating Static Routes</a></em>
            </div>
        </div>
    `,

    // 3.4 Single Area OSPFv2
    "OSPF Neighbors": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">3.4: Configure & Verify Single Area OSPFv2</h3>
            <p><strong>OSPF (Open Shortest Path First)</strong> is an industry-standard link-state routing protocol. It builds a complete map of the network, allowing it to make intelligent routing decisions.</p>
            
            <h4 style="color: #F5B041;">Neighbor Adjacency Requirements</h4>
            <p>For two OSPF routers to become neighbors, their connecting interfaces must agree on: Area ID, Hello and Dead timers, Authentication (if used), and Subnet mask.</p>

            <h4 style="color: #F5B041;">Network Types & DR/BDR Selection</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Point-to-Point:</strong> No DR/BDR election occurs. Neighbors form a full adjacency immediately.</li>
                <li><strong>Broadcast (e.g., Ethernet):</strong> A <strong>Designated Router (DR)</strong> and <strong>Backup DR (BDR)</strong> are elected to reduce the number of adjacencies. The election is based first on the highest OSPF priority (1-255, default 1), then the highest Router ID as a tie-breaker.</li>
            </ul>

            <h4 style="color: #F5B041;">Router ID (RID)</h4>
            <p>The RID is a unique 32-bit number identifying the router. It's chosen in this order: 1) Manually configured with <code>router-id x.x.x.x</code> command. 2) Highest IP address of any up/up loopback interface. 3) Highest IP address of any other up/up physical interface.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2994364&seqNum=4" target="_blank" style="color: #66B2FF;">Read: OSPF Configuration (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=4E26_TEFhps" target="_blank" style="color: #66B2FF;">Watch: Single-Area OSPF (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // DR/BDR Election
    "DR/BDR Election": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">OSPF DR/BDR Election</h3>
            <p>On multi-access networks (like Ethernet), OSPF elects a <strong>Designated Router (DR)</strong> and <strong>Backup Designated Router (BDR)</strong> to optimize adjacency formation.</p>
            
            <h4 style="color: #F5B041;">Election Process</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Highest OSPF Priority:</strong> Default is 1, range 0-255. Priority 0 = never become DR/BDR.</li>
                <li><strong>Highest Router ID:</strong> Used as tiebreaker if priorities are equal.</li>
            </ol>
            
            <h4 style="color: #F5B041;">Benefits</h4>
            <p>Instead of every router forming adjacencies with every other router (n*(n-1)/2 adjacencies), DROthers only form adjacencies with the DR and BDR, significantly reducing overhead on large segments.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2180210&seqNum=10" target="_blank" style="color: #66B2FF;">Read: OSPF DR/BDR Election</a></em>
            </div>
        </div>
    `,

    // OSPF Router ID
    "OSPF Router ID": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">OSPF Router ID Selection</h3>
            <p>The Router ID (RID) is a unique 32-bit identifier for each OSPF router. Selection follows this priority order:</p>
            
            <ol style="margin-left: 20px;">
                <li><strong>Manual Configuration:</strong> <code>router-id x.x.x.x</code> command (highest priority)</li>
                <li><strong>Highest Loopback IP:</strong> Highest IP address of any up/up loopback interface</li>
                <li><strong>Highest Physical IP:</strong> Highest IP address of any up/up physical interface</li>
            </ol>
            
            <p><strong>Best Practice:</strong> Always manually configure the Router ID using loopback interfaces for stability, as physical interfaces can go down.</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
interface loopback 0
 ip address 1.1.1.1 255.255.255.255
router ospf 1
 router-id 1.1.1.1
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/13685-13.html" target="_blank" style="color: #66B2FF;">Read: OSPF Router ID</a></em>
            </div>
        </div>
    `,

    // 3.5 FHRP Protocols
    "FHRP": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.5: FHRP Protocols (FHRP)</h3>
            <p><strong>FHRPs</strong> provide a redundant default gateway for end devices, preventing a single point of failure if one gateway router goes down.</p>
            
            <h4 style="color: #EC7063;">FHRP Concepts</h4>
            <p>Multiple physical routers are configured in a group. They share a single <strong>virtual IP address</strong> and a <strong>virtual MAC address</strong>. End devices are configured to use this virtual IP as their default gateway. One router is elected as the <strong>active</strong> router, which handles all forwarding. The other routers are in a <strong>standby</strong> state, monitoring the active router. If the active router fails, a standby router takes over its role almost instantly.</p>
            
            <h4 style="color: #EC7063;">Common FHRPs</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>HSRP (Hot Standby Router Protocol):</strong> Cisco-proprietary. Elects an Active and a Standby router.</li>
                <li><strong>VRRP (Virtual Router Redundancy Protocol):</strong> Industry standard. Elects a Master and Backup routers.</li>
                <li><strong>GLBP (Gateway Load Balancing Protocol):</strong> Cisco-proprietary. Allows for load balancing by assigning different gateways (virtual MACs) to different hosts, even though they all use the same virtual IP.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EC7063; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.practicalnetworking.net/stand-alone/first-hop-redundancy-protocols/" target="_blank" style="color: #66B2FF;">Read: FHRPs (Practical Networking)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=7p-m2oV3i-M" target="_blank" style="color: #66B2FF;">Watch: FHRP Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION3_DETAILS = SECTION3_DETAILS;
}
