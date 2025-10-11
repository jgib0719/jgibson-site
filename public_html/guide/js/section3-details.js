/**
 * CCNA Section 3: IP Connectivity - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, this content is focused on exam-relevant technical details.
 * v1.0 - Initial creation for all Section 3 topics.
 */

const SECTION3_DETAILS = {
    // 3.1 Routing Table Components
    "Routing Protocol Code": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.1.a: Routing Protocol Code</h3>
            <p>Routing protocol codes appear at the beginning of each route entry in the routing table. They indicate <strong>how the route was learned</strong> by the router.</p>
            
            <h4 style="color: #F1948A;">Common Protocol Codes</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981; font-family: monospace;">C</td><td style="padding: 5px; border-bottom: 1px solid #444;">Connected - Directly attached subnet</td><td style="padding: 5px; border-bottom: 1px solid #444;">AD 0</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #3b82f6; font-family: monospace;">S</td><td style="padding: 5px; border-bottom: 1px solid #444;">Static - Manually configured route</td><td style="padding: 5px; border-bottom: 1px solid #444;">AD 1</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #6366f1; font-family: monospace;">O</td><td style="padding: 5px; border-bottom: 1px solid #444;">OSPF - Open Shortest Path First</td><td style="padding: 5px; border-bottom: 1px solid #444;">AD 110</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #f59e0b; font-family: monospace;">R</td><td style="padding: 5px; border-bottom: 1px solid #444;">RIP - Routing Information Protocol</td><td style="padding: 5px; border-bottom: 1px solid #444;">AD 120</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #ef4444; font-family: monospace;">D</td><td style="padding: 5px; border-bottom: 1px solid #444;">EIGRP - Enhanced Interior Gateway</td><td style="padding: 5px; border-bottom: 1px solid #444;">AD 90</td></tr>
                    <tr><td style="padding: 5px; color: #8b5cf6; font-family: monospace;">*</td><td style="padding: 5px;">Asterisk indicates candidate default route</td><td style="padding: 5px;">-</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F1948A;">Example Analysis</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
R1# show ip route
Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area

Gateway of last resort is 192.168.1.1 to network 0.0.0.0

S*    0.0.0.0/0 [1/0] via 192.168.1.1
C     192.168.1.0/24 is directly connected, GigabitEthernet0/1
O     10.1.1.0/24 [110/10] via 192.168.1.2, 00:05:42, GigabitEthernet0/1
S     172.16.0.0/16 [1/0] via 192.168.1.3
</code>
            </pre>
            <p>In this output: <strong>S*</strong> indicates a static default route, <strong>C</strong> shows directly connected networks, <strong>O</strong> represents OSPF-learned routes, and <strong>S</strong> shows static routes.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Memorize the most common codes: C, S, O, R, D</li>
                    <li>Understand that the asterisk (*) marks candidate default routes</li>
                    <li>Know that codes help in troubleshooting route sources</li>
                </ul>
            </div>
        </div>
    `,

    "Prefix & Network Mask": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.1.b & 3.1.c: Prefix and Network Mask</h3>
            <p>The <strong>prefix</strong> identifies the destination network, while the <strong>network mask</strong> (expressed in CIDR notation) determines the network and host portions of an IP address.</p>
            
            <h4 style="color: #F1948A;">Understanding CIDR Notation</h4>
            <p>CIDR (Classless Inter-Domain Routing) notation uses a slash followed by a number to indicate how many bits represent the network portion.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left;">CIDR</th><th style="padding: 8px; text-align: left;">Subnet Mask</th><th style="padding: 8px; text-align: left;">Host Bits</th><th style="padding: 8px; text-align: left;">Possible Hosts</th></tr>
                    <tr><td style="padding: 5px; color: #10b981;">/24</td><td style="padding: 5px;">255.255.255.0</td><td style="padding: 5px;">8</td><td style="padding: 5px;">254</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">/25</td><td style="padding: 5px;">255.255.255.128</td><td style="padding: 5px;">7</td><td style="padding: 5px;">126</td></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">/26</td><td style="padding: 5px;">255.255.255.192</td><td style="padding: 5px;">6</td><td style="padding: 5px;">62</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">/30</td><td style="padding: 5px;">255.255.255.252</td><td style="padding: 5px;">2</td><td style="padding: 5px;">2 (point-to-point)</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F1948A;">Routing Table Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
O     10.1.1.0/24 [110/10] via 192.168.1.2
O     10.1.2.0/25 [110/15] via 192.168.1.3
C     192.168.1.0/24 is directly connected, GigabitEthernet0/1
S     172.16.0.0/16 [1/0] via 192.168.1.1
</code>
            </pre>
            
            <h4 style="color: #F1948A;">Longest Prefix Match Principle</h4>
            <p>When multiple routes exist for a destination, the router chooses the route with the <strong>longest prefix match</strong> (most specific route).</p>
            <p><strong>Example:</strong> For destination 10.1.1.100, a route to 10.1.1.0/24 is preferred over 10.1.0.0/16 because /24 is more specific than /16.</p>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand CIDR notation and subnet mask conversion</li>
                    <li>Know that longer prefixes (higher /number) are more specific</li>
                    <li>Remember that longest prefix match is the primary route selection criterion</li>
                    <li>Practice identifying network and host portions of different subnets</li>
                </ul>
            </div>
        </div>
    `,

    "Next Hop Address": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.1.d: Next Hop Address</h3>
            <p>The <strong>next hop address</strong> tells the router where to send packets destined for a particular network. It's the IP address of the next router in the path to the destination.</p>
            
            <h4 style="color: #F1948A;">Types of Next Hop Information</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Next Hop IP:</strong> For remote networks (e.g., "via 192.168.1.2")</li>
                <li><strong>Directly Connected:</strong> For local networks (e.g., "is directly connected, GigabitEthernet0/1")</li>
                <li><strong>Exit Interface:</strong> Specifies the outgoing interface name</li>
            </ul>
            
            <h4 style="color: #F1948A;">Routing Table Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6366f1;">O</span>     10.1.1.0/24 [110/10] <span style="color: #f59e0b;">via 192.168.1.2</span>, 00:05:42, GigabitEthernet0/1
<span style="color: #10b981;">C</span>     192.168.1.0/24 <span style="color: #f59e0b;">is directly connected</span>, GigabitEthernet0/1
<span style="color: #3b82f6;">S</span>     172.16.0.0/16 [1/0] <span style="color: #f59e0b;">via 192.168.1.3</span>
<span style="color: #3b82f6;">S*</span>    0.0.0.0/0 [1/0] <span style="color: #f59e0b;">via 192.168.1.1</span>
</code>
            </pre>
            
            <h4 style="color: #F1948A;">Analysis</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>10.1.1.0/24:</strong> Packets sent via router 192.168.1.2 out interface GigabitEthernet0/1</li>
                <li><strong>192.168.1.0/24:</strong> Directly connected network, no next hop router needed</li>
                <li><strong>172.16.0.0/16:</strong> Static route pointing to next hop 192.168.1.3</li>
                <li><strong>0.0.0.0/0:</strong> Default route sends all unknown traffic to 192.168.1.1</li>
            </ul>
            
            <h4 style="color: #F1948A;">Forwarding Process</h4>
            <p>When a packet arrives, the router:</p>
            <ol style="margin-left: 20px;">
                <li>Checks the destination IP against its routing table</li>
                <li>Finds the best matching route (longest prefix match)</li>
                <li>Forwards the packet to the next hop IP address</li>
                <li>If it's directly connected, delivers directly to the destination</li>
            </ol>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the difference between next hop IP and exit interface</li>
                    <li>Know that directly connected networks don't need a next hop router</li>
                    <li>Recognize that the next hop must be reachable for the route to be valid</li>
                    <li>Practice tracing packet paths through multiple routers</li>
                </ul>
            </div>
        </div>
    `,

    "Administrative Distance": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.1.e: Administrative Distance (AD)</h3>
            <p><strong>Administrative Distance</strong> represents the trustworthiness of a route source. It's used to choose between routes to the same destination learned from different routing protocols.</p>
            
            <h4 style="color: #F1948A;">Administrative Distance Values</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F1948A;">Route Source</th><th style="padding: 8px; text-align: left; color: #F1948A;">Default AD</th><th style="padding: 8px; text-align: left; color: #F1948A;">Trustworthiness</th></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Connected Interface</td><td style="padding: 5px;">0</td><td style="padding: 5px;">Highest (Most Trusted)</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">Static Route</td><td style="padding: 5px;">1</td><td style="padding: 5px;">Very High</td></tr>
                    <tr><td style="padding: 5px; color: #ef4444;">EIGRP</td><td style="padding: 5px;">90</td><td style="padding: 5px;">High</td></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">OSPF</td><td style="padding: 5px;">110</td><td style="padding: 5px;">Medium</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">RIP</td><td style="padding: 5px;">120</td><td style="padding: 5px;">Low</td></tr>
                    <tr><td style="padding: 5px; color: #8b5cf6;">External EIGRP</td><td style="padding: 5px;">170</td><td style="padding: 5px;">Very Low</td></tr>
                    <tr><td style="padding: 5px; color: #64748b;">Unknown/Invalid</td><td style="padding: 5px;">255</td><td style="padding: 5px;">Not Trusted</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F1948A;">Route Selection Example</h4>
            <p>If a router learns about the same network from multiple sources:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #3b82f6;">Static route to 10.1.1.0/24:</span>    AD = 1   ← INSTALLED
<span style="color: #6366f1;">OSPF route to 10.1.1.0/24:</span>     AD = 110
<span style="color: #f59e0b;">RIP route to 10.1.1.0/24:</span>      AD = 120
</code>
            </pre>
            <p>The router installs the static route because it has the lowest AD (highest trustworthiness).</p>
            
            <h4 style="color: #F1948A;">Viewing AD in Routing Table</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
O     10.1.1.0/24 <span style="color: #f59e0b;">[110/10]</span> via 192.168.1.2, 00:05:42, GigabitEthernet0/1
S     172.16.0.0/16 <span style="color: #f59e0b;">[1/0]</span> via 192.168.1.3
</code>
            </pre>
            <p>The format is <code>[AD/Metric]</code>. In the examples above:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li>OSPF route: AD = 110, Metric = 10</li>
                <li>Static route: AD = 1, Metric = 0</li>
            </ul>
            
            <h4 style="color: #F1948A;">Modifying Administrative Distance</h4>
            <p>You can change the AD of static routes to create floating static routes:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
ip route 10.1.1.0 255.255.255.0 192.168.1.2        ! Primary (AD 1)
ip route 10.1.1.0 255.255.255.0 192.168.1.3 <span style="color: #f59e0b;">200</span>   ! Backup (AD 200)
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Memorize the common AD values (Connected=0, Static=1, OSPF=110, RIP=120)</li>
                    <li>Understand that lower AD = more trusted = preferred route</li>
                    <li>Know how to read AD values in the routing table [AD/Metric] format</li>
                    <li>Practice scenarios with multiple protocols learning the same route</li>
                </ul>
            </div>
        </div>
    `,

    "Metric": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.1.f: Metric</h3>
            <p>The <strong>metric</strong> is used by routing protocols to determine the best path when multiple routes to the same destination exist <em>within the same protocol</em>. Lower metrics indicate better paths.</p>
            
            <h4 style="color: #F1948A;">Metrics by Protocol</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F1948A;">Protocol</th><th style="padding: 8px; text-align: left; color: #F1948A;">Metric</th><th style="padding: 8px; text-align: left; color: #F1948A;">Calculation</th></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">OSPF</td><td style="padding: 5px;">Cost</td><td style="padding: 5px;">Reference BW / Interface BW</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">RIP</td><td style="padding: 5px;">Hop Count</td><td style="padding: 5px;">Number of routers to destination</td></tr>
                    <tr><td style="padding: 5px; color: #ef4444;">EIGRP</td><td style="padding: 5px;">Composite</td><td style="padding: 5px;">Bandwidth + Delay (by default)</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">Static</td><td style="padding: 5px;">0</td><td style="padding: 5px;">Not applicable (manually set)</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F1948A;">OSPF Cost Calculation</h4>
            <p>OSPF uses cost as its metric. The default formula is:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0; text-align: center;">
                <code style="color: #10b981; font-size: 1.1em;">Cost = Reference Bandwidth / Interface Bandwidth</code>
            </div>
            <p>Default reference bandwidth is 100 Mbps, so:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>FastEthernet (100 Mbps):</strong> 100/100 = 1</li>
                <li><strong>Ethernet (10 Mbps):</strong> 100/10 = 10</li>
                <li><strong>GigabitEthernet (1000 Mbps):</strong> 100/1000 = 1 (minimum cost)</li>
            </ul>
            
            <h4 style="color: #F1948A;">Viewing Metrics in Routing Table</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
O     10.1.1.0/24 [110/<span style="color: #f59e0b;">10</span>] via 192.168.1.2, 00:05:42, GigabitEthernet0/1
O     10.1.2.0/24 [110/<span style="color: #f59e0b;">20</span>] via 192.168.1.3, 00:03:15, GigabitEthernet0/1
R     10.1.3.0/24 [120/<span style="color: #f59e0b;">2</span>] via 192.168.1.4, 00:00:18, GigabitEthernet0/1
</code>
            </pre>
            <p>In the format <code>[AD/Metric]</code>:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li>First OSPF route has cost 10 (preferred over second route with cost 20)</li>
                <li>RIP route has hop count 2</li>
            </ul>
            
            <h4 style="color: #F1948A;">Route Selection with Metrics</h4>
            <p>When multiple routes to the same destination exist from the same protocol:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Two OSPF routes to 10.1.1.0/24:
  Path A: Cost 10  ← <span style="color: #10b981;">INSTALLED (lower cost)</span>
  Path B: Cost 20
</code>
            </pre>
            
            <h4 style="color: #F1948A;">Manipulating OSPF Cost</h4>
            <p>You can manually set interface cost:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
interface gigabitethernet 0/1
 ip ospf cost 5
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that metrics are only compared within the same protocol</li>
                    <li>Know OSPF uses cost, RIP uses hop count</li>
                    <li>Remember that lower metrics are always preferred</li>
                    <li>Practice reading and interpreting [AD/Metric] format in routing tables</li>
                    <li>Understand OSPF cost calculation and manual configuration</li>
                </ul>
            </div>
        </div>
    `,

    "Gateway of Last Resort": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.1.g: Gateway of Last Resort</h3>
            <p>The <strong>Gateway of Last Resort</strong> is the default route (0.0.0.0/0) that packets use when no specific route exists for their destination. It's essential for internet connectivity and handling unknown networks.</p>
            
            <h4 style="color: #F1948A;">Default Route Characteristics</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Destination:</strong> 0.0.0.0/0 (matches all IP addresses)</li>
                <li><strong>Purpose:</strong> Catch-all for unknown destinations</li>
                <li><strong>Common Use:</strong> Internet connectivity</li>
                <li><strong>Symbol:</strong> Asterisk (*) indicates candidate default route</li>
            </ul>
            
            <h4 style="color: #F1948A;">Viewing Gateway of Last Resort</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
R1# show ip route
Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area

<span style="color: #f59e0b;">Gateway of last resort is 192.168.1.1 to network 0.0.0.0</span>

<span style="color: #3b82f6;">S*</span>    0.0.0.0/0 [1/0] via 192.168.1.1
C     192.168.1.0/24 is directly connected, GigabitEthernet0/1
O     10.1.1.0/24 [110/10] via 192.168.1.2, 00:05:42, GigabitEthernet0/1
</code>
            </pre>
            
            <h4 style="color: #F1948A;">Configuring Default Routes</h4>
            
            <h5 style="color: #7DD3FC;">Static Default Route</h5>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! IPv4 Default Route
ip route 0.0.0.0 0.0.0.0 192.168.1.1

! IPv6 Default Route  
ipv6 route ::/0 2001:DB8::1
</code>
            </pre>
            
            <h5 style="color: #7DD3FC;">OSPF Default Route</h5>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
router ospf 1
 default-information originate
</code>
            </pre>
            
            <h4 style="color: #F1948A;">Packet Forwarding Logic</h4>
            <p>When a router receives a packet:</p>
            <ol style="margin-left: 20px;">
                <li><strong>Check routing table</strong> for specific routes (longest prefix match)</li>
                <li><strong>If no specific route exists,</strong> use the default route</li>
                <li><strong>If no default route exists,</strong> drop the packet and send ICMP unreachable</li>
            </ol>
            
            <h4 style="color: #F1948A;">Multiple Default Routes</h4>
            <p>If multiple default routes exist, the router uses standard route selection:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Administrative Distance:</strong> Lower AD wins</li>
                <li><strong>Metric:</strong> If AD is equal, lower metric wins</li>
                <li><strong>Load Balancing:</strong> If AD and metric are equal, load balance</li>
            </ul>
            
            <h4 style="color: #F1948A;">Troubleshooting Default Routes</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Verify default route exists
show ip route 0.0.0.0

! Check if gateway is reachable
ping 192.168.1.1

! Trace path to internet destination
traceroute 8.8.8.8
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that 0.0.0.0/0 matches any destination</li>
                    <li>Know how to configure static and dynamic default routes</li>
                    <li>Recognize the asterisk (*) symbol for candidate default routes</li>
                    <li>Understand the relationship between default routes and internet connectivity</li>
                    <li>Practice troubleshooting scenarios where default routes are missing or incorrect</li>
                </ul>
            </div>
        </div>
    `,

    // 3.2 Router Forwarding Decision Components
    "Longest Prefix Match": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.2.a: Longest Prefix Match</h3>
            <p>The <strong>FIRST and MOST IMPORTANT</strong> step in the router forwarding decision process. The router always chooses the route with the longest (most specific) prefix match, regardless of Administrative Distance or metric.</p>
            
            <h4 style="color: #F1948A;">How Prefix Matching Works</h4>
            <p>The router compares the destination IP address against all routes in its routing table and selects the route that matches the most bits of the destination address.</p>
            
            <h4 style="color: #F1948A;">Practical Example</h4>
            <p><strong>Scenario:</strong> Router needs to forward a packet to destination <code>192.168.1.100</code></p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <pre style="margin: 0; color: #E0E0E0; font-family: monospace; font-size: 0.9em;">
<span style="color: #94a3b8;">Available Routes:</span>
<span style="color: #ef4444;">Route A:</span> 0.0.0.0/0          (default route - matches 0 bits)
<span style="color: #f59e0b;">Route B:</span> 192.168.0.0/16     (matches 16 bits)  
<span style="color: #3b82f6;">Route C:</span> 192.168.1.0/24     (matches 24 bits)
<span style="color: #10b981;">Route D:</span> 192.168.1.96/27    (matches 27 bits) ← <strong>CHOSEN!</strong>
                </pre>
            </div>
            
            <p><strong>Result:</strong> Route D is selected because /27 (27 bits) is the longest prefix match, even if other routes have better AD or metrics.</p>
            
            <h4 style="color: #F1948A;">Common CCNA Scenarios</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Subnet vs Supernet:</strong> 10.1.1.0/24 beats 10.1.0.0/16</li>
                <li><strong>Host Route Priority:</strong> 10.1.1.50/32 beats 10.1.1.0/24</li>
                <li><strong>Default Route Usage:</strong> 0.0.0.0/0 only used when no specific match exists</li>
            </ul>
            
            <h4 style="color: #F1948A;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! See which route will be used for a specific destination
show ip route 192.168.1.100

! Display only the longest match
show ip cef 192.168.1.100

! Test connectivity
ping 192.168.1.100
traceroute 192.168.1.100
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Longest prefix match is ALWAYS the first consideration</li>
                    <li>Memorize: /32 > /30 > /24 > /16 > /8 > /0 (more specific to less specific)</li>
                    <li>Practice subnet calculations to identify which routes match destinations</li>
                    <li>Understand that this overrides Administrative Distance and Metric</li>
                </ul>
            </div>
        </div>
    `,

    "Administrative Distance": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.2.b: Administrative Distance in Forwarding</h3>
            <p>The <strong>SECOND</strong> step in router forwarding decisions. When multiple routes have the <em>same prefix length</em>, Administrative Distance determines which route source is more trustworthy.</p>
            
            <h4 style="color: #F1948A;">When AD Matters</h4>
            <p>AD is only considered when routes have <strong>identical prefix lengths</strong>. The route with the lower AD wins and gets installed in the routing table.</p>
            
            <h4 style="color: #F1948A;">Real-World Example</h4>
            <p><strong>Scenario:</strong> Router learns about network 10.1.1.0/24 from three sources:</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F1948A;">Source</th><th style="padding: 8px; text-align: left; color: #F1948A;">Route</th><th style="padding: 8px; text-align: left; color: #F1948A;">AD</th><th style="padding: 8px; text-align: left; color: #F1948A;">Status</th></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Static</td><td style="padding: 5px;">S 10.1.1.0/24 [1/0]</td><td style="padding: 5px;">1</td><td style="padding: 5px; color: #10b981;">✓ INSTALLED</td></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">OSPF</td><td style="padding: 5px;">O 10.1.1.0/24 [110/10]</td><td style="padding: 5px;">110</td><td style="padding: 5px; color: #94a3b8;">Backup</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">RIP</td><td style="padding: 5px;">R 10.1.1.0/24 [120/2]</td><td style="padding: 5px;">120</td><td style="padding: 5px; color: #94a3b8;">Backup</td></tr>
                </table>
            </div>
            
            <p><strong>Result:</strong> Static route wins because AD 1 < AD 110 < AD 120. OSPF and RIP routes remain as backup.</p>
            
            <h4 style="color: #F1948A;">Administrative Distance Values</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <pre style="margin: 0; color: #E0E0E0; font-family: monospace; font-size: 0.9em;">
<span style="color: #10b981;">Connected Interface:    0</span>  (Most trusted)
<span style="color: #3b82f6;">Static Route:         1</span>  
<span style="color: #ef4444;">EIGRP Internal:      90</span>  
<span style="color: #6366f1;">OSPF:               110</span>  
<span style="color: #f59e0b;">RIP:                120</span>  
<span style="color: #8b5cf6;">EIGRP External:     170</span>  
<span style="color: #64748b;">Unknown:            255</span>  (Least trusted)
                </pre>
            </div>
            
            <h4 style="color: #F1948A;">Viewing AD in Action</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# show ip route 10.1.1.0
Routing entry for 10.1.1.0/24
  Known via "static", distance <span style="color: #10b981;">1</span>, metric 0

! To see all routes to this destination (including backups)
Router# show ip route 10.1.1.0 longer-prefixes
</code>
            </pre>
            
            <h4 style="color: #F1948A;">Floating Static Routes</h4>
            <p>You can modify static route AD to create backup routes:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Primary static route (AD 1)
ip route 10.1.1.0 255.255.255.0 192.168.1.2

! Backup static route (AD 200 - higher than OSPF's 110)
ip route 10.1.1.0 255.255.255.0 192.168.1.3 <span style="color: #f59e0b;">200</span>

! Now OSPF (AD 110) will be preferred over backup static (AD 200)
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>AD only matters when prefix lengths are identical</li>
                    <li>Lower AD = more trusted = wins the installation</li>
                    <li>Know the common AD values: Connected=0, Static=1, OSPF=110, RIP=120</li>
                    <li>Understand floating static routes and AD modification</li>
                </ul>
            </div>
        </div>
    `,

    "Routing Protocol Metric": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.2.c: Routing Protocol Metric</h3>
            <p>The <strong>THIRD and FINAL</strong> step in router forwarding decisions. When routes have the same prefix length AND same Administrative Distance, the metric determines the best path within that routing protocol.</p>
            
            <h4 style="color: #F1948A;">When Metrics Matter</h4>
            <p>Metrics are only compared when:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li>Routes have <strong>identical prefix lengths</strong></li>
                <li>Routes have <strong>identical Administrative Distances</strong></li>
                <li>Routes are from the <strong>same routing protocol</strong></li>
            </ul>
            
            <h4 style="color: #F1948A;">Protocol-Specific Metrics</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F1948A;">Protocol</th><th style="padding: 8px; text-align: left; color: #F1948A;">Metric Type</th><th style="padding: 8px; text-align: left; color: #F1948A;">Range</th><th style="padding: 8px; text-align: left; color: #F1948A;">Lower = Better</th></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">OSPF</td><td style="padding: 5px;">Cost</td><td style="padding: 5px;">1-65535</td><td style="padding: 5px; color: #10b981;">✓ Yes</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">RIP</td><td style="padding: 5px;">Hop Count</td><td style="padding: 5px;">1-15</td><td style="padding: 5px; color: #10b981;">✓ Yes</td></tr>
                    <tr><td style="padding: 5px; color: #ef4444;">EIGRP</td><td style="padding: 5px;">Composite</td><td style="padding: 5px;">1-4294967295</td><td style="padding: 5px; color: #10b981;">✓ Yes</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">Static</td><td style="padding: 5px;">0 (Default)</td><td style="padding: 5px;">0-255</td><td style="padding: 5px; color: #94a3b8;">N/A</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F1948A;">OSPF Metric Example</h4>
            <p><strong>Scenario:</strong> Two OSPF paths to the same destination:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# show ip route ospf
O     10.2.1.0/24 [110/<span style="color: #10b981;">10</span>] via 192.168.1.2, GigabitEthernet0/1  ← <strong>INSTALLED</strong>
                  [110/<span style="color: #f87171;">20</span>] via 192.168.1.3, GigabitEthernet0/2

<span style="color: #94a3b8;">Cost 10 path is preferred over Cost 20 path</span>
</code>
            </pre>
            
            <h4 style="color: #F1948A;">OSPF Cost Calculation</h4>
            <p>OSPF cost is calculated using bandwidth:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0; text-align: center;">
                <code style="color: #10b981; font-size: 1.1em;">Cost = Reference Bandwidth / Interface Bandwidth</code>
            </div>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F1948A;">Interface Type</th><th style="padding: 8px; text-align: left; color: #F1948A;">Bandwidth</th><th style="padding: 8px; text-align: left; color: #F1948A;">Default Cost</th></tr>
                    <tr><td style="padding: 5px;">Serial (T1)</td><td style="padding: 5px;">1.544 Mbps</td><td style="padding: 5px;">64</td></tr>
                    <tr><td style="padding: 5px;">Ethernet</td><td style="padding: 5px;">10 Mbps</td><td style="padding: 5px;">10</td></tr>
                    <tr><td style="padding: 5px;">FastEthernet</td><td style="padding: 5px;">100 Mbps</td><td style="padding: 5px;">1</td></tr>
                    <tr><td style="padding: 5px;">GigabitEthernet</td><td style="padding: 5px;">1000 Mbps</td><td style="padding: 5px;">1</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F1948A;">Load Balancing</h4>
            <p>When metrics are equal, routers can load balance across multiple paths:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# show ip route 10.2.1.0
O     10.2.1.0/24 [110/10] via 192.168.1.2, GigabitEthernet0/1
                  [110/10] via 192.168.1.3, GigabitEthernet0/2

<span style="color: #94a3b8;">Equal cost paths - traffic load balanced</span>

! Configure maximum load balancing paths (default is 4)
router ospf 1
 maximum-paths 6
</code>
            </pre>
            
            <h4 style="color: #F1948A;">Manipulating Metrics</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Manually set OSPF cost on interface
interface gigabitethernet 0/1
 ip ospf cost 5

! Verify cost changes
show ip ospf interface brief
</code>
            </pre>
            
            <h4 style="color: #F1948A;">Troubleshooting Metrics</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! View detailed route information including metrics
show ip route 10.2.1.0

! See OSPF topology and costs
show ip ospf database

! View interface costs
show ip ospf interface
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F1948A; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Metrics only matter within the same protocol and when prefix/AD are equal</li>
                    <li>Know OSPF uses cost, RIP uses hop count</li>
                    <li>Understand OSPF cost calculation: Reference BW / Interface BW</li>
                    <li>Remember that equal metrics enable load balancing</li>
                    <li>Practice reading [AD/Metric] format in routing table output</li>
                </ul>
            </div>
        </div>
    `,

    // Remove old entries
    "Forwarding Logic": ``,
    "Prefix Matching": ``,

    // 3.3 Static Routing Components
    "Default Route": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">3.3.a: Default Route Configuration</h3>
            <p>A default route (0.0.0.0/0) is the <strong>Gateway of Last Resort</strong> - used when no specific route exists for a destination. It's essential for internet connectivity and handling unknown networks.</p>
            
            <h4 style="color: #58D68D;">IPv4 Default Route Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Standard default route
ip route 0.0.0.0 0.0.0.0 192.168.1.1

! Default route via exit interface
ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/1

! Default route with next-hop and exit interface
ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/1 192.168.1.1
</code>
            </pre>
            
            <h4 style="color: #58D68D;">IPv6 Default Route Configuration</h4>
            <p><strong>Prerequisite:</strong> Enable IPv6 routing globally first:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Enable IPv6 routing
ipv6 unicast-routing

! IPv6 default route
ipv6 route ::/0 2001:DB8::1

! IPv6 default route via exit interface
ipv6 route ::/0 GigabitEthernet0/1

! IPv6 default route with link-local next-hop
ipv6 route ::/0 GigabitEthernet0/1 FE80::1
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Verify IPv4 default route
show ip route 0.0.0.0
show ip route | include 0.0.0.0

! Verify IPv6 default route
show ipv6 route ::/0
show ipv6 route | include ::/0

! Test connectivity
ping 8.8.8.8
traceroute 8.8.8.8
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Default Route in Routing Table</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# show ip route
<span style="color: #f59e0b;">Gateway of last resort is 192.168.1.1 to network 0.0.0.0</span>

<span style="color: #f59e0b;">S*</span>    0.0.0.0/0 [1/0] via 192.168.1.1
C     192.168.1.0/24 is directly connected, GigabitEthernet0/1
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that 0.0.0.0/0 matches ANY destination</li>
                    <li>Know the asterisk (*) indicates candidate default route</li>
                    <li>Remember IPv6 requires <code>ipv6 unicast-routing</code></li>
                    <li>Practice both next-hop and exit interface configurations</li>
                </ul>
            </div>
        </div>
    `,

    "Network Route": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">3.3.b: Network Route Configuration</h3>
            <p>A network route targets an <strong>entire subnet or network</strong>. It specifies the destination network, subnet mask, and next-hop router. This is the most common type of static route for reaching remote networks.</p>
            
            <h4 style="color: #58D68D;">IPv4 Network Route Syntax</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #58D68D; font-size: 1.1em;">ip route [destination_network] [subnet_mask] [next_hop_IP]</code>
            </div>
            
            <h4 style="color: #58D68D;">Configuration Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Route to a /24 network
ip route 10.1.1.0 255.255.255.0 192.168.1.2

! Route to a /16 network
ip route 172.16.0.0 255.255.0.0 192.168.1.3

! Route to a /30 network (point-to-point)
ip route 192.168.100.0 255.255.255.252 10.0.0.1

! Route via exit interface
ip route 10.2.2.0 255.255.255.0 Serial0/0/0

! Route with exit interface and next-hop
ip route 10.3.3.0 255.255.255.0 Serial0/0/0 10.0.0.2
</code>
            </pre>
            
            <h4 style="color: #58D68D;">IPv6 Network Route Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! IPv6 network routes
ipv6 route 2001:DB8:1::/64 2001:DB8::2
ipv6 route 2001:DB8:ACAD::/48 2001:DB8::3
ipv6 route 2001:DB8:CAFE::/64 GigabitEthernet0/1 FE80::1

! Multiple prefix lengths
ipv6 route 2001:DB8::/32 2001:DB8::1          ! /32 supernet
ipv6 route 2001:DB8:A::/48 2001:DB8::2        ! /48 network
ipv6 route 2001:DB8:B:B::/64 2001:DB8::3      ! /64 subnet
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Common Network Route Scenarios</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #58D68D;">Scenario</th><th style="padding: 8px; text-align: left; color: #58D68D;">Network</th><th style="padding: 8px; text-align: left; color: #58D68D;">Mask/Prefix</th></tr>
                    <tr><td style="padding: 5px;">Branch Office</td><td style="padding: 5px;">192.168.10.0</td><td style="padding: 5px;">/24 (255.255.255.0)</td></tr>
                    <tr><td style="padding: 5px;">Server Farm</td><td style="padding: 5px;">10.1.100.0</td><td style="padding: 5px;">/24 (255.255.255.0)</td></tr>
                    <tr><td style="padding: 5px;">Point-to-Point</td><td style="padding: 5px;">172.16.1.0</td><td style="padding: 5px;">/30 (255.255.255.252)</td></tr>
                    <tr><td style="padding: 5px;">Large Network</td><td style="padding: 5px;">10.0.0.0</td><td style="padding: 5px;">/8 (255.0.0.0)</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Verify specific network route
show ip route 10.1.1.0
show ip route 10.1.1.0 255.255.255.0

! Show all static routes
show ip route static

! Test connectivity to network
ping 10.1.1.1
traceroute 10.1.1.1

! IPv6 verification
show ipv6 route 2001:DB8:1::/64
show ipv6 route static
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the difference between network address and host addresses</li>
                    <li>Practice subnet mask calculations and CIDR notation</li>
                    <li>Know when to use exit interface vs next-hop IP</li>
                    <li>Understand longest prefix match for route selection</li>
                </ul>
            </div>
        </div>
    `,

    "Host Route": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">3.3.c: Host Route Configuration</h3>
            <p>A host route targets a <strong>single device</strong> using a /32 subnet mask (IPv4) or /128 (IPv6). It's the most specific route possible and takes precedence over network routes due to longest prefix matching.</p>
            
            <h4 style="color: #58D68D;">IPv4 Host Route Syntax</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #58D68D; font-size: 1.1em;">ip route [host_IP] 255.255.255.255 [next_hop_IP]</code>
            </div>
            
            <h4 style="color: #58D68D;">Configuration Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Route to specific server
ip route 10.1.1.50 255.255.255.255 192.168.1.2

! Route to management interface
ip route 172.16.1.100 255.255.255.255 192.168.100.1

! Route to DNS server
ip route 8.8.8.8 255.255.255.255 192.168.1.1

! Host route via exit interface
ip route 10.1.1.10 255.255.255.255 GigabitEthernet0/1

! Host route with both interface and next-hop
ip route 192.168.50.5 255.255.255.255 Serial0/0/0 10.0.0.2
</code>
            </pre>
            
            <h4 style="color: #58D68D;">IPv6 Host Route Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! IPv6 host routes (/128 prefix)
ipv6 route 2001:DB8:1::50/128 2001:DB8::2
ipv6 route 2001:DB8:ACAD:1::100/128 2001:DB8::3

! Host route via interface
ipv6 route 2001:DB8:CAFE::10/128 GigabitEthernet0/1 FE80::1

! Host route to loopback
ipv6 route 2001:DB8:FFFF::1/128 2001:DB8::1
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Common Host Route Use Cases</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Critical Servers:</strong> Database, web, email servers with specific routing requirements</li>
                <li><strong>Management Interfaces:</strong> Out-of-band management networks</li>
                <li><strong>Network Monitoring:</strong> SNMP agents, syslog servers</li>
                <li><strong>Security Appliances:</strong> Firewalls, IDS/IPS systems</li>
                <li><strong>Load Balancer VIPs:</strong> Virtual IP addresses</li>
                <li><strong>Loopback Interfaces:</strong> Router identification and management</li>
            </ul>
            
            <h4 style="color: #58D68D;">Host Route Priority Example</h4>
            <p><strong>Scenario:</strong> Router needs to reach 10.1.1.50</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Available routes:
<span style="color: #94a3b8;">O  10.1.0.0/16 [110/20] via 192.168.1.3</span>      ← /16 (less specific)
<span style="color: #94a3b8;">S  10.1.1.0/24 [1/0] via 192.168.1.2</span>         ← /24 (more specific)
<span style="color: #10b981;">S  10.1.1.50/32 [1/0] via 192.168.1.4</span>        ← /32 (most specific) ✓ CHOSEN

<span style="color: #10b981;">Host route wins due to longest prefix match!</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Verify specific host route
show ip route 10.1.1.50
show ip route 10.1.1.50 255.255.255.255

! Show all host routes (search for /32)
show ip route | include /32

! Test connectivity to specific host
ping 10.1.1.50
traceroute 10.1.1.50

! IPv6 host route verification
show ipv6 route 2001:DB8:1::50/128
show ipv6 route | include /128
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Troubleshooting Host Routes</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Check if route exists
show ip route 192.168.1.100

! Verify next-hop reachability
ping 192.168.1.2

! Remove host route if needed
no ip route 192.168.1.100 255.255.255.255 192.168.1.2

! Show running config for static routes
show running-config | include ip route
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that /32 (IPv4) and /128 (IPv6) represent single hosts</li>
                    <li>Know that host routes have highest priority due to longest prefix match</li>
                    <li>Practice identifying when host routes are needed vs network routes</li>
                    <li>Understand the relationship between host routes and load balancing</li>
                </ul>
            </div>
        </div>
    `,

    "Floating Static": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">3.3.d: Floating Static Route Configuration</h3>
            <p>A floating static route is a <strong>backup route</strong> with a higher Administrative Distance than the primary route. It "floats" in the routing table, becoming active only when the primary route fails.</p>
            
            <h4 style="color: #58D68D;">Concept and Purpose</h4>
            <p>Floating static routes provide <strong>redundancy</strong> without interfering with normal operations. They remain inactive until needed, offering a backup path for critical networks.</p>
            
            <h4 style="color: #58D68D;">Administrative Distance Modification</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #58D68D;">Route Type</th><th style="padding: 8px; text-align: left; color: #58D68D;">Default AD</th><th style="padding: 8px; text-align: left; color: #58D68D;">Typical Floating AD</th></tr>
                    <tr><td style="padding: 5px;">Static Route</td><td style="padding: 5px; color: #10b981;">1</td><td style="padding: 5px;">Primary route</td></tr>
                    <tr><td style="padding: 5px;">OSPF</td><td style="padding: 5px; color: #6366f1;">110</td><td style="padding: 5px;">Normal operation</td></tr>
                    <tr><td style="padding: 5px;">Floating Static</td><td style="padding: 5px; color: #f59e0b;">200-254</td><td style="padding: 5px;">Backup only</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Configuration Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Scenario 1: Static primary, floating static backup
ip route 10.1.1.0 255.255.255.0 192.168.1.2          ! Primary (AD 1)
ip route 10.1.1.0 255.255.255.0 192.168.1.3 <span style="color: #f59e0b;">200</span>      ! Backup (AD 200)

! Scenario 2: OSPF primary, floating static backup
router ospf 1
 network 192.168.1.0 0.0.0.255 area 0               ! OSPF learns route (AD 110)
exit
ip route 10.1.1.0 255.255.255.0 192.168.1.4 <span style="color: #f59e0b;">150</span>      ! Backup (AD 150 > 110)

! Scenario 3: Dual ISP with floating default routes
ip route 0.0.0.0 0.0.0.0 203.0.113.1                ! Primary ISP (AD 1)
ip route 0.0.0.0 0.0.0.0 198.51.100.1 <span style="color: #f59e0b;">10</span>           ! Backup ISP (AD 10)
</code>
            </pre>
            
            <h4 style="color: #58D68D;">IPv6 Floating Static Routes</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! IPv6 floating static routes
ipv6 route 2001:DB8:1::/64 2001:DB8::2              ! Primary
ipv6 route 2001:DB8:1::/64 2001:DB8::3 <span style="color: #f59e0b;">200</span>          ! Floating backup

! IPv6 floating default routes
ipv6 route ::/0 2001:DB8::1                         ! Primary default
ipv6 route ::/0 2001:DB8::4 <span style="color: #f59e0b;">50</span>                      ! Backup default
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Monitoring Floating Static Routes</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Check active routes (only shows installed routes)
show ip route 10.1.1.0

! View all configured static routes (including floating)
show ip static route
show running-config | include ip route

! Monitor route changes
debug ip routing
show ip route summary

! Test failover scenario
! 1. Disconnect primary path
! 2. Verify floating route becomes active
show ip route 10.1.1.0
ping 10.1.1.1
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Floating Route States</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Normal operation - primary route active
Router# show ip route 10.1.1.0
<span style="color: #10b981;">S  10.1.1.0/24 [1/0] via 192.168.1.2</span>    ← Primary active

! After primary failure - floating route active
Router# show ip route 10.1.1.0
<span style="color: #f59e0b;">S  10.1.1.0/24 [200/0] via 192.168.1.3</span>  ← Floating now active
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>AD Selection:</strong> Choose floating AD higher than any expected dynamic route</li>
                <li><strong>Default Routes:</strong> Use floating statics for ISP redundancy</li>
                <li><strong>Critical Networks:</strong> Implement floating routes for important destinations</li>
                <li><strong>Testing:</strong> Regularly test failover scenarios</li>
                <li><strong>Documentation:</strong> Document all floating routes and their purposes</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that higher AD = lower priority = backup route</li>
                    <li>Know common AD values and when to use floating statics</li>
                    <li>Practice configuring floating routes for different scenarios</li>
                    <li>Understand how floating routes provide redundancy</li>
                </ul>
            </div>
        </div>
    `,

    // 3.2 Policy-Based Routing (PBR) Components  
    "PBR Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E67E22; border-bottom: 2px solid #E67E22; padding-bottom: 5px;">3.2.a: Policy-Based Routing Fundamentals</h3>
            <p><strong>Policy-Based Routing (PBR)</strong> allows network administrators to override the normal destination-based routing and make routing decisions based on defined policies. PBR enables routing based on source address, packet size, application, or other packet characteristics.</p>
            
            <h4 style="color: #F7C52D;">PBR Key Concepts</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Policy Override:</strong> Overrides normal routing table lookup</li>
                <li><strong>Granular Control:</strong> Route based on multiple packet attributes</li>
                <li><strong>Traffic Engineering:</strong> Direct traffic over specific paths</li>
                <li><strong>Quality of Service:</strong> Route different applications through different paths</li>
                <li><strong>Load Distribution:</strong> Distribute traffic across multiple links</li>
            </ul>

            <h4 style="color: #F7C52D;">PBR Use Cases</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Source-Based Routing:</strong> Route traffic based on source IP or subnet</li>
                <li><strong>Application Routing:</strong> Route specific applications through dedicated paths</li>
                <li><strong>ISP Selection:</strong> Direct traffic to specific ISPs based on criteria</li>
                <li><strong>Bandwidth Management:</strong> Route high-bandwidth traffic through appropriate links</li>
                <li><strong>Security Policies:</strong> Route traffic through security appliances</li>
            </ul>

            <h4 style="color: #F7C52D;">PBR Components</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Route-Map:</strong> Defines the policy with match and set statements</li>
                <li><strong>Access Lists:</strong> Define traffic to be matched</li>
                <li><strong>Next-Hop:</strong> Specifies where to forward matched traffic</li>
                <li><strong>Interface Application:</strong> Apply policy to incoming interface</li>
            </ul>

            <h4 style="color: #F7C52D;">Basic PBR Configuration</h4>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #E67E22;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #7FB3D3; margin-bottom: 5px;">// Create access list to match traffic</div>
                    <div style="color: #82E0AA;">access-list 100 permit ip 192.168.1.0 0.0.0.255 any</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// Create route-map policy</div>
                    <div style="color: #82E0AA;">route-map PBR-POLICY permit 10</div>
                    <div style="color: #82E0AA;"> match ip address 100</div>
                    <div style="color: #82E0AA;"> set ip next-hop 10.1.1.1</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// Apply to interface</div>
                    <div style="color: #82E0AA;">interface gigabitethernet0/0</div>
                    <div style="color: #82E0AA;"> ip policy route-map PBR-POLICY</div>
                </div>
            </div>

            <h4 style="color: #F7C52D;">PBR Processing Order</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Check PBR Policy:</strong> If packet matches PBR policy, use policy routing</li>
                <li><strong>Check Routing Table:</strong> If no PBR match, use normal routing table</li>
                <li><strong>Default Route:</strong> If no route exists, use default route</li>
                <li><strong>Drop Packet:</strong> If no routing path available, drop packet</li>
            </ol>

            <div style="background-color: #1B4F72; padding: 12px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3498DB;">
                <h5 style="color: #85C1E9; margin-bottom: 8px;">💡 PBR Best Practices:</h5>
                <ul style="margin-left: 20px; color: #AED6F1;">
                    <li>Use specific access lists to avoid unintended matches</li>
                    <li>Test PBR policies thoroughly before production deployment</li>
                    <li>Monitor PBR performance and routing efficiency</li>
                    <li>Document PBR policies for troubleshooting</li>
                </ul>
            </div>

            <div style="background-color: #0F4C75; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3DAEE9;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand PBR concepts and use cases</li>
                    <li>Know basic route-map and access-list syntax</li>
                    <li>Understand PBR vs normal routing table lookup</li>
                    <li>Practice basic PBR configuration commands</li>
                </ul>
            </div>
        </div>
    `,

    "Route-Map Policies": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E67E22; border-bottom: 2px solid #E67E22; padding-bottom: 5px;">3.2.b: Route-Map Policies</h3>
            <p><strong>Route-maps</strong> are the foundation of Policy-Based Routing, providing the logic to match traffic and set routing policies. They use match and set statements to define complex routing behaviors.</p>
            
            <h4 style="color: #F7C52D;">Route-Map Structure</h4>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #E67E22;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #F4D03F;">route-map [name] [permit|deny] [sequence-number]</div>
                    <div style="color: #7FB3D3; margin-top: 5px;">// Match statements define traffic criteria</div>
                    <div style="color: #82E0AA;"> match ip address [access-list]</div>
                    <div style="color: #82E0AA;"> match length [min] [max]</div>
                    <div style="color: #7FB3D3; margin-top: 5px;">// Set statements define routing action</div>
                    <div style="color: #82E0AA;"> set ip next-hop [ip-address]</div>
                    <div style="color: #82E0AA;"> set interface [interface]</div>
                </div>
            </div>

            <h4 style="color: #F7C52D;">Common Match Statements</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>match ip address:</strong> Match source/destination based on ACL</li>
                <li><strong>match length:</strong> Match packet size (bytes)</li>
                <li><strong>match interface:</strong> Match incoming interface</li>
                <li><strong>match ip next-hop:</strong> Match next-hop IP address</li>
                <li><strong>match metric:</strong> Match route metric</li>
            </ul>

            <h4 style="color: #F7C52D;">Common Set Statements</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>set ip next-hop:</strong> Set specific next-hop IP</li>
                <li><strong>set ip default next-hop:</strong> Set next-hop only if no route exists</li>
                <li><strong>set interface:</strong> Set outgoing interface</li>
                <li><strong>set ip precedence:</strong> Set IP precedence bits</li>
                <li><strong>set ip tos:</strong> Set Type of Service bits</li>
            </ul>

            <h4 style="color: #F7C52D;">Advanced PBR Configuration</h4>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #E67E22;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #7FB3D3;">// Multiple criteria route-map</div>
                    <div style="color: #82E0AA;">access-list 101 permit ip 192.168.1.0 0.0.0.255 any</div>
                    <div style="color: #82E0AA;">access-list 102 permit ip 192.168.2.0 0.0.0.255 any</div>
                    <div style="margin-top: 10px;">
                    <div style="color: #82E0AA;">route-map MULTI-PBR permit 10</div>
                    <div style="color: #82E0AA;"> match ip address 101</div>
                    <div style="color: #82E0AA;"> match length 64 1500</div>
                    <div style="color: #82E0AA;"> set ip next-hop 10.1.1.1</div>
                    <div style="margin-top: 5px;">
                    <div style="color: #82E0AA;">route-map MULTI-PBR permit 20</div>
                    <div style="color: #82E0AA;"> match ip address 102</div>
                    <div style="color: #82E0AA;"> set ip next-hop 10.2.2.1</div>
                    <div style="color: #82E0AA;"> set ip precedence 5</div>
                </div>
            </div>

            <h4 style="color: #F7C52D;">Load Balancing with PBR</h4>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #E67E22;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #7FB3D3;">// Multiple next-hop load balancing</div>
                    <div style="color: #82E0AA;">route-map LOAD-BALANCE permit 10</div>
                    <div style="color: #82E0AA;"> match ip address 100</div>
                    <div style="color: #82E0AA;"> set ip next-hop 10.1.1.1 10.1.1.2</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// Verify next-hop reachability</div>
                    <div style="color: #82E0AA;"> set ip next-hop verify-availability</div>
                </div>
            </div>

            <h4 style="color: #F7C52D;">PBR Verification Commands</h4>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #E67E22;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #7FB3D3;">// Show PBR configuration</div>
                    <div style="color: #82E0AA;">show ip policy</div>
                    <div style="color: #82E0AA;">show route-map</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// Debug PBR operation</div>
                    <div style="color: #82E0AA;">debug ip policy</div>
                    <div style="color: #82E0AA;">show ip route policy</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// Test PBR with traceroute</div>
                    <div style="color: #82E0AA;">traceroute 8.8.8.8 source 192.168.1.10</div>
                </div>
            </div>

            <h4 style="color: #F7C52D;">PBR Troubleshooting</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>ACL Matching:</strong> Verify access lists match intended traffic</li>
                <li><strong>Route-Map Logic:</strong> Check permit/deny logic and sequence numbers</li>
                <li><strong>Next-Hop Reachability:</strong> Ensure next-hop addresses are reachable</li>
                <li><strong>Interface Application:</strong> Verify PBR is applied to correct interface</li>
                <li><strong>Processing Order:</strong> Remember PBR processes before routing table</li>
            </ul>

            <div style="background-color: #1B4F72; padding: 12px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3498DB;">
                <h5 style="color: #85C1E9; margin-bottom: 8px;">💡 Route-Map Design Tips:</h5>
                <ul style="margin-left: 20px; color: #AED6F1;">
                    <li>Use descriptive route-map names for clarity</li>
                    <li>Leave gaps in sequence numbers for future additions</li>
                    <li>Include explicit deny statements for security</li>
                    <li>Test policies with debug commands before production</li>
                </ul>
            </div>

            <div style="background-color: #0F4C75; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3DAEE9;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand route-map syntax and sequence numbers</li>
                    <li>Know common match and set statement options</li>
                    <li>Practice PBR verification commands</li>
                    <li>Understand PBR troubleshooting methodology</li>
                </ul>
            </div>
        </div>
    `,

    // Remove old entries
    "Static Routes": ``,
    "Floating Static Route": ``,

    // 3.3 EIGRP Components
    "EIGRP Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #AF7AC5; border-bottom: 2px solid #AF7AC5; padding-bottom: 5px;">3.3.a: EIGRP Fundamentals</h3>
            <p><strong>EIGRP (Enhanced Interior Gateway Routing Protocol)</strong> is Cisco's proprietary distance-vector routing protocol that combines the best features of distance-vector and link-state protocols. It's known for fast convergence and efficient bandwidth utilization.</p>
            
            <h4 style="color: #C39BD3;">EIGRP Key Characteristics</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Hybrid Protocol:</strong> Combines distance-vector and link-state features</li>
                <li><strong>Fast Convergence:</strong> Uses DUAL algorithm for loop-free paths</li>
                <li><strong>Unequal Cost Load Balancing:</strong> Can use multiple paths with different metrics</li>
                <li><strong>Classless Routing:</strong> Supports VLSM and CIDR</li>
                <li><strong>Incremental Updates:</strong> Only sends changes, not full routing table</li>
            </ul>

            <h4 style="color: #C39BD3;">EIGRP Tables</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Neighbor Table:</strong> Lists directly connected EIGRP routers</li>
                <li><strong>Topology Table:</strong> Contains all learned routes (feasible successors)</li>
                <li><strong>Routing Table:</strong> Contains best paths selected by DUAL algorithm</li>
            </ul>

            <h4 style="color: #C39BD3;">Basic EIGRP Configuration</h4>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #AF7AC5;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #7FB3D3; margin-bottom: 5px;">// Enable EIGRP and configure networks</div>
                    <div style="color: #82E0AA;">router eigrp 100</div>
                    <div style="color: #82E0AA;"> network 192.168.1.0 0.0.0.255</div>
                    <div style="color: #82E0AA;"> network 10.0.0.0 0.255.255.255</div>
                    <div style="color: #82E0AA;"> no auto-summary</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// Interface configuration</div>
                    <div style="color: #82E0AA;">interface gigabitethernet0/0</div>
                    <div style="color: #82E0AA;"> ip address 192.168.1.1 255.255.255.0</div>
                    <div style="color: #82E0AA;"> ip hello-interval eigrp 100 5</div>
                    <div style="color: #82E0AA;"> ip hold-time eigrp 100 15</div>
                </div>
            </div>

            <h4 style="color: #C39BD3;">EIGRP Hello Protocol</h4>
            <p>EIGRP routers discover neighbors and maintain adjacencies using Hello packets:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Hello Interval:</strong> Default 5 seconds on high-speed links</li>
                <li><strong>Hold Time:</strong> 3x Hello interval (15 seconds by default)</li>
                <li><strong>Multicast Address:</strong> 224.0.0.10 for neighbor discovery</li>
                <li><strong>Authentication:</strong> Supports MD5 and SHA authentication</li>
            </ul>

            <div style="background-color: #1B4F72; padding: 12px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3498DB;">
                <h5 style="color: #85C1E9; margin-bottom: 8px;">💡 EIGRP Best Practices:</h5>
                <ul style="margin-left: 20px; color: #AED6F1;">
                    <li>Use process ID consistently across your network</li>
                    <li>Disable auto-summary for modern networks</li>
                    <li>Configure authentication for security</li>
                    <li>Use passive-interface for non-routing segments</li>
                </ul>
            </div>

            <div style="background-color: #0F4C75; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3DAEE9;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand EIGRP hybrid nature and key features</li>
                    <li>Know default Hello and Hold timers</li>
                    <li>Practice basic EIGRP configuration commands</li>
                    <li>Understand neighbor discovery process</li>
                </ul>
            </div>
        </div>
    `,

    "EIGRP Metric Calculation": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #AF7AC5; border-bottom: 2px solid #AF7AC5; padding-bottom: 5px;">3.3.b: EIGRP Metric Calculation</h3>
            <p><strong>EIGRP metric calculation</strong> uses a composite metric based on bandwidth, delay, reliability, load, and MTU. By default, only bandwidth and delay are used in the calculation.</p>
            
            <h4 style="color: #C39BD3;">EIGRP Metric Formula</h4>
            <p>The EIGRP metric is calculated using this formula:</p>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #AF7AC5;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #F4D03F;">Metric = [K1*Bandwidth + (K2*Bandwidth)/(256-Load) + K3*Delay] * [K5/(Reliability + K4)]</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// Default K values:</div>
                    <div style="color: #82E0AA;">K1 = 1 (Bandwidth)</div>
                    <div style="color: #82E0AA;">K2 = 0 (Load)</div>
                    <div style="color: #82E0AA;">K3 = 1 (Delay)</div>
                    <div style="color: #82E0AA;">K4 = 0 (Reliability)</div>
                    <div style="color: #82E0AA;">K5 = 0 (MTU)</div>
                </div>
            </div>

            <h4 style="color: #C39BD3;">Simplified Default Calculation</h4>
            <p>With default K values, the formula simplifies to:</p>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #AF7AC5;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #F4D03F;">Metric = (Bandwidth + Delay) × 256</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">Where:</div>
                    <div style="color: #82E0AA;">Bandwidth = (10^7 / slowest_link_bw_kbps)</div>
                    <div style="color: #82E0AA;">Delay = sum_of_delays_microseconds / 10</div>
                </div>
            </div>

            <h4 style="color: #C39BD3;">Metric Components</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Bandwidth:</strong> Inverse of slowest link bandwidth (10^7/kbps)</li>
                <li><strong>Delay:</strong> Cumulative delay in tens of microseconds</li>
                <li><strong>Reliability:</strong> Packet success rate (0-255, higher is better)</li>
                <li><strong>Load:</strong> Link utilization (0-255, lower is better)</li>
                <li><strong>MTU:</strong> Maximum Transmission Unit (not used in metric by default)</li>
            </ul>

            <h4 style="color: #C39BD3;">Viewing EIGRP Metrics</h4>
            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #AF7AC5;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #7FB3D3;">// View EIGRP topology with metrics</div>
                    <div style="color: #82E0AA;">show ip eigrp topology</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// View interface delay and bandwidth</div>
                    <div style="color: #82E0AA;">show interface gigabitethernet0/0</div>
                    <div style="margin-top: 10px; color: #7FB3D3;">// Configure manual bandwidth</div>
                    <div style="color: #82E0AA;">interface gigabitethernet0/0</div>
                    <div style="color: #82E0AA;"> bandwidth 1000</div>
                    <div style="color: #82E0AA;"> delay 100</div>
                </div>
            </div>

            <h4 style="color: #C39BD3;">Load Balancing</h4>
            <p>EIGRP supports both equal and unequal cost load balancing:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Equal Cost:</strong> Routes with identical metrics (default up to 4 paths)</li>
                <li><strong>Unequal Cost:</strong> Uses variance multiplier for feasible successors</li>
                <li><strong>Maximum Paths:</strong> Configure maximum-paths (1-32)</li>
                <li><strong>Variance:</strong> Multiplier for unequal cost paths (1-128)</li>
            </ul>

            <div style="background-color: #2C3E50; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #AF7AC5;">
                <div style="color: #E8E8E8; font-family: 'Courier New', monospace; font-size: 14px;">
                    <div style="color: #7FB3D3;">// Configure unequal cost load balancing</div>
                    <div style="color: #82E0AA;">router eigrp 100</div>
                    <div style="color: #82E0AA;"> variance 2</div>
                    <div style="color: #82E0AA;"> maximum-paths 6</div>
                </div>
            </div>

            <div style="background-color: #1B4F72; padding: 12px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3498DB;">
                <h5 style="color: #85C1E9; margin-bottom: 8px;">💡 Metric Optimization Tips:</h5>
                <ul style="margin-left: 20px; color: #AED6F1;">
                    <li>Manually configure bandwidth on serial interfaces</li>
                    <li>Adjust delay for path manipulation (more predictable than bandwidth)</li>
                    <li>Use variance carefully to avoid suboptimal routing</li>
                    <li>Monitor load balancing with show ip route eigrp</li>
                </ul>
            </div>

            <div style="background-color: #0F4C75; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3DAEE9;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand default K values and simplified metric calculation</li>
                    <li>Know how bandwidth and delay affect path selection</li>
                    <li>Practice viewing metrics with show commands</li>
                    <li>Understand equal vs unequal cost load balancing concepts</li>
                </ul>
            </div>
        </div>
    `,

    // 3.4 Single Area OSPFv2 Components
    "Neighbor Adjacencies": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">3.4.a: OSPF Neighbor Adjacencies</h3>
            <p><strong>OSPF neighbor adjacencies</strong> are the foundation of OSPF operation. Routers must become neighbors before they can exchange routing information and build the topology database.</p>
            
            <h4 style="color: #F5B041;">Adjacency Requirements</h4>
            <p>For two OSPF routers to form an adjacency, the following parameters must match:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Area ID:</strong> Both interfaces must be in the same OSPF area</li>
                <li><strong>Hello and Dead Timers:</strong> Must match on both sides</li>
                <li><strong>Authentication:</strong> If configured, type and keys must match</li>
                <li><strong>Subnet Mask:</strong> Must be identical on both interfaces</li>
                <li><strong>Stub Area Flag:</strong> Must agree on area type</li>
            </ul>
            
            <h4 style="color: #F5B041;">Neighbor States</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F5B041;">State</th><th style="padding: 8px; text-align: left; color: #F5B041;">Description</th></tr>
                    <tr><td style="padding: 5px; color: #94a3b8;">Down</td><td style="padding: 5px;">No Hello packets received</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">Init</td><td style="padding: 5px;">Hello received but no bidirectional communication</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">2-Way</td><td style="padding: 5px;">Bidirectional communication established</td></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">ExStart</td><td style="padding: 5px;">Master/Slave relationship determined</td></tr>
                    <tr><td style="padding: 5px; color: #8b5cf6;">Exchange</td><td style="padding: 5px;">Database Description packets exchanged</td></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Full</td><td style="padding: 5px;">Complete adjacency - LSAs synchronized</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Basic OSPF Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Enable OSPF process 1
router ospf 1
 router-id 1.1.1.1
 
! Advertise networks in Area 0
 network 192.168.1.0 0.0.0.255 area 0
 network 10.1.1.0 0.0.0.255 area 0

! Interface-specific configuration
interface gigabitethernet 0/1
 ip ospf 1 area 0
 ip ospf hello-interval 10
 ip ospf dead-interval 40
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! View neighbor relationships
show ip ospf neighbor
show ip ospf neighbor detail

! Check interface OSPF status
show ip ospf interface
show ip ospf interface brief

! Verify OSPF database
show ip ospf database
show ip ospf database router

! Debug neighbor adjacency
debug ip ospf adj
debug ip ospf hello
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Troubleshooting Adjacency Issues</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Timer Mismatch:</strong> Verify Hello/Dead intervals match</li>
                <li><strong>Area Mismatch:</strong> Ensure both interfaces in same area</li>
                <li><strong>Authentication:</strong> Check authentication configuration</li>
                <li><strong>Network Mask:</strong> Verify subnet masks are identical</li>
                <li><strong>Access Lists:</strong> Ensure OSPF packets (224.0.0.5/6) aren't blocked</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the neighbor adjacency process and requirements</li>
                    <li>Know how to read 'show ip ospf neighbor' output</li>
                    <li>Practice troubleshooting common adjacency problems</li>
                    <li>Memorize Hello timer defaults (10s broadcast, 30s NBMA)</li>
                </ul>
            </div>
        </div>
    `,

    "Point-to-Point": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">3.4.b: OSPF Point-to-Point Networks</h3>
            <p><strong>Point-to-point networks</strong> connect exactly two OSPF routers. This is the simplest OSPF network type with no DR/BDR election, allowing for immediate full adjacencies and fast convergence.</p>
            
            <h4 style="color: #F5B041;">Point-to-Point Characteristics</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Two Routers Only:</strong> Exactly two OSPF speakers on the network</li>
                <li><strong>No DR/BDR Election:</strong> Unnecessary with only two routers</li>
                <li><strong>Full Adjacency:</strong> Routers proceed directly to FULL state</li>
                <li><strong>Fast Convergence:</strong> No election delay, immediate adjacency</li>
                <li><strong>LSA Flooding:</strong> Direct LSA exchange between neighbors</li>
            </ul>
            
            <h4 style="color: #F5B041;">Common Point-to-Point Scenarios</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F5B041;">Interface Type</th><th style="padding: 8px; text-align: left; color: #F5B041;">Default Network Type</th><th style="padding: 8px; text-align: left; color: #F5B041;">Hello Timer</th></tr>
                    <tr><td style="padding: 5px;">Serial (HDLC/PPP)</td><td style="padding: 5px; color: #10b981;">Point-to-Point</td><td style="padding: 5px;">10 seconds</td></tr>
                    <tr><td style="padding: 5px;">Ethernet</td><td style="padding: 5px; color: #3b82f6;">Broadcast</td><td style="padding: 5px;">10 seconds</td></tr>
                    <tr><td style="padding: 5px;">Frame Relay</td><td style="padding: 5px; color: #f59e0b;">Non-Broadcast</td><td style="padding: 5px;">30 seconds</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Configuration Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Serial interface (automatically point-to-point)
interface serial 0/0/0
 ip address 10.0.0.1 255.255.255.252
 ip ospf 1 area 0
 ! No additional configuration needed

! Force Ethernet to point-to-point (if only 2 routers)
interface gigabitethernet 0/1
 ip address 192.168.1.1 255.255.255.252
 ip ospf network point-to-point
 ip ospf 1 area 0

! Point-to-point with authentication
interface serial 0/0/1
 ip address 172.16.1.1 255.255.255.252
 ip ospf network point-to-point
 ip ospf message-digest-key 1 md5 cisco123
 ip ospf 1 area 0
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Verify network type
show ip ospf interface serial 0/0/0

! Expected output:
! Serial0/0/0 is up, line protocol is up
!   Internet Address 10.0.0.1/30, Area 0, Attached via Interface Enable
!   Process ID 1, Router ID 1.1.1.1, Network Type POINT_TO_POINT, Cost: 64
!   Topology-MTID    Cost    Disabled    Shutdown      Topology Name
!         0           64        no          no            Base
!   Transmit Delay is 1 sec, State POINT_TO_POINT
!   Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5

! Verify neighbor on point-to-point link
show ip ospf neighbor
! Neighbor ID     Pri   State           Dead Time   Address         Interface
! 2.2.2.2           0   FULL/  -        00:00:35    10.0.0.2        Serial0/0/0
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Point-to-Point vs Broadcast</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F5B041;">Feature</th><th style="padding: 8px; text-align: left; color: #F5B041;">Point-to-Point</th><th style="padding: 8px; text-align: left; color: #F5B041;">Broadcast</th></tr>
                    <tr><td style="padding: 5px;">DR/BDR Election</td><td style="padding: 5px; color: #10b981;">No</td><td style="padding: 5px; color: #f59e0b;">Yes</td></tr>
                    <tr><td style="padding: 5px;">Adjacency Formation</td><td style="padding: 5px; color: #10b981;">Immediate</td><td style="padding: 5px; color: #f59e0b;">After Election</td></tr>
                    <tr><td style="padding: 5px;">Neighbor Priority</td><td style="padding: 5px; color: #94a3b8;">0 (ignored)</td><td style="padding: 5px; color: #3b82f6;">1 (default)</td></tr>
                    <tr><td style="padding: 5px;">LSA Flooding</td><td style="padding: 5px; color: #10b981;">Direct</td><td style="padding: 5px; color: #3b82f6;">Via DR/BDR</td></tr>
                    <tr><td style="padding: 5px;">Convergence Speed</td><td style="padding: 5px; color: #10b981;">Fast</td><td style="padding: 5px; color: #f59e0b;">Slower</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">When to Use Point-to-Point</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>WAN Links:</strong> Serial, T1, Metro Ethernet connections</li>
                <li><strong>Two-Router LANs:</strong> Ethernet with only two OSPF routers</li>
                <li><strong>Fast Convergence Required:</strong> When election delay is unacceptable</li>
                <li><strong>Simplified Topology:</strong> Avoid DR/BDR complexity</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that point-to-point has no DR/BDR election</li>
                    <li>Know default network types for different interface types</li>
                    <li>Practice changing network type with 'ip ospf network' command</li>
                    <li>Recognize point-to-point neighbor output (Priority 0, no DR/BDR)</li>
                </ul>
            </div>
        </div>
    `,

    "Broadcast (DR/BDR)": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">3.4.c: Broadcast Networks (DR/BDR Selection)</h3>
            <p><strong>Broadcast networks</strong> (typically Ethernet) can have multiple OSPF routers. To optimize adjacencies and LSA flooding, OSPF elects a Designated Router (DR) and Backup Designated Router (BDR).</p>
            
            <h4 style="color: #F5B041;">DR/BDR Purpose</h4>
            <p>Without DR/BDR, every router would form adjacencies with every other router, creating n(n-1)/2 adjacencies. With DR/BDR:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Reduced Adjacencies:</strong> DROthers only form adjacencies with DR and BDR</li>
                <li><strong>Controlled LSA Flooding:</strong> DROthers send LSAs to DR, which floods to all routers</li>
                <li><strong>Backup Protection:</strong> BDR takes over if DR fails</li>
                <li><strong>Network Scalability:</strong> Reduces OSPF overhead on large segments</li>
            </ul>
            
            <h4 style="color: #F5B041;">Election Process</h4>
            <p>DR and BDR election occurs when the first two routers come online or when the current DR fails:</p>
            <ol style="margin-left: 20px;">
                <li><strong>OSPF Priority:</strong> Highest priority becomes DR (range 0-255, default 1)</li>
                <li><strong>Router ID:</strong> If priorities tie, highest Router ID wins</li>
                <li><strong>Priority 0:</strong> Router with priority 0 cannot become DR/BDR</li>
                <li><strong>Non-preemptive:</strong> New router with higher priority won't take over</li>
            </ol>
            
            <h4 style="color: #F5B041;">DR/BDR Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure OSPF priority (default is 1)
interface gigabitethernet 0/1
 ip address 192.168.1.1 255.255.255.0
 ip ospf priority 100        ! High priority = likely DR
 ip ospf 1 area 0

! Prevent router from becoming DR/BDR
interface gigabitethernet 0/1
 ip ospf priority 0          ! Never DR/BDR

! Force election (clear OSPF process)
clear ip ospf process
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! View DR/BDR status
show ip ospf neighbor

! Example output:
! Neighbor ID     Pri   State           Dead Time   Address         Interface
! 3.3.3.3         100   FULL/DR         00:00:35    192.168.1.3     GigabitEthernet0/1
! 2.2.2.2          50   FULL/BDR        00:00:38    192.168.1.2     GigabitEthernet0/1
! 4.4.4.4           1   FULL/DROTHER    00:00:32    192.168.1.4     GigabitEthernet0/1

! Check interface DR/BDR status
show ip ospf interface gigabitethernet 0/1

! View current router's role
show ip ospf interface brief
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Neighbor States in Broadcast Networks</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F5B041;">State</th><th style="padding: 8px; text-align: left; color: #F5B041;">Adjacency Level</th><th style="padding: 8px; text-align: left; color: #F5B041;">Description</th></tr>
                    <tr><td style="padding: 5px; color: #10b981;">FULL/DR</td><td style="padding: 5px;">Full</td><td style="padding: 5px;">Neighbor is the Designated Router</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">FULL/BDR</td><td style="padding: 5px;">Full</td><td style="padding: 5px;">Neighbor is the Backup Designated Router</td></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">FULL/DROTHER</td><td style="padding: 5px;">Full</td><td style="padding: 5px;">Neighbor is DROther (not DR/BDR)</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">2WAY/DROTHER</td><td style="padding: 5px;">Basic</td><td style="padding: 5px;">DROther neighbor - no full adjacency needed</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">DR/BDR Failover Process</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Normal operation
! DR: 3.3.3.3 (Priority 100)
! BDR: 2.2.2.2 (Priority 50)

! After DR failure:
! 1. BDR (2.2.2.2) becomes new DR
! 2. New BDR election among remaining routers
! 3. Router with highest priority/RID becomes BDR

! Verify after failover
show ip ospf neighbor
! New DR: 2.2.2.2 (former BDR)
! New BDR: 4.4.4.4 (highest remaining priority)
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Troubleshooting DR/BDR Issues</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Wrong DR:</strong> Check priorities and Router IDs</li>
                <li><strong>No BDR:</strong> Ensure at least 2 routers with priority > 0</li>
                <li><strong>Stuck Election:</strong> Clear OSPF process to force re-election</li>
                <li><strong>DROther State:</strong> Verify router priority is not 0</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand DR/BDR election criteria (priority, then Router ID)</li>
                    <li>Know that elections are non-preemptive</li>
                    <li>Practice reading neighbor output and identifying DR/BDR</li>
                    <li>Understand when DROthers form 2WAY vs FULL adjacencies</li>
                </ul>
            </div>
        </div>
    `,

    "Router ID": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">3.4.d: OSPF Router ID</h3>
            <p>The <strong>Router ID (RID)</strong> is a unique 32-bit identifier that distinguishes each OSPF router in the autonomous system. It's critical for DR/BDR elections, LSA origination, and topology identification.</p>
            
            <h4 style="color: #F5B041;">Router ID Selection Priority</h4>
            <p>OSPF determines the Router ID using this strict priority order:</p>
            <ol style="margin-left: 20px;">
                <li><strong>Manual Configuration:</strong> <code>router-id x.x.x.x</code> command (highest priority)</li>
                <li><strong>Highest Loopback Interface:</strong> Highest IP address of any up/up loopback</li>
                <li><strong>Highest Physical Interface:</strong> Highest IP address of any up/up physical interface</li>
            </ol>
            
            <h4 style="color: #F5B041;">Manual Router ID Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Best practice - manual Router ID
router ospf 1
 router-id 1.1.1.1

! Restart OSPF process for immediate effect
clear ip ospf process

! Alternative - using loopback for stability
interface loopback 0
 ip address 1.1.1.1 255.255.255.255
 description "OSPF Router ID"

router ospf 1
 ! No manual router-id - will use loopback IP
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Router ID Selection Examples</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <pre style="margin: 0; color: #E0E0E0; font-family: monospace; font-size: 0.9em;">
<span style="color: #F5B041;">Scenario 1 - Manual Configuration (Highest Priority)</span>
Interface Status:
  Gi0/1: 192.168.1.1/24 (up/up)
  Lo0: 10.1.1.1/32 (up/up)
  router-id 5.5.5.5 configured
<span style="color: #10b981;">Result: Router ID = 5.5.5.5</span>

<span style="color: #F5B041;">Scenario 2 - Loopback Selection</span>
Interface Status:
  Gi0/1: 192.168.1.1/24 (up/up)
  Gi0/2: 172.16.1.1/24 (up/up)
  Lo0: 10.1.1.1/32 (up/up)
  No manual router-id
<span style="color: #10b981;">Result: Router ID = 10.1.1.1 (highest loopback)</span>

<span style="color: #F5B041;">Scenario 3 - Physical Interface Selection</span>
Interface Status:
  Gi0/1: 192.168.1.1/24 (up/up)
  Gi0/2: 172.16.1.1/24 (up/up)
  No loopbacks, no manual router-id
<span style="color: #10b981;">Result: Router ID = 192.168.1.1 (highest physical IP)</span>
                </pre>
            </div>
            
            <h4 style="color: #F5B041;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Display current Router ID
show ip ospf

! Output example:
! Routing Process "ospf 1" with ID 1.1.1.1
! Start time: 00:02:15.492, Time elapsed: 00:05:32.508
! Supports only single TOS(TOS0) routes

! View Router ID in neighbor table
show ip ospf neighbor

! Check Router ID in LSA database
show ip ospf database router

! Verify Router ID source
show ip protocols
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Router ID Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Always Use Manual Configuration:</strong> Provides predictable, stable Router IDs</li>
                <li><strong>Use Sequential IDs:</strong> 1.1.1.1, 2.2.2.2, 3.3.3.3 for easy identification</li>
                <li><strong>Loopback Alternative:</strong> If manual config unavailable, use loopback interfaces</li>
                <li><strong>Avoid Physical IPs:</strong> Physical interfaces can go down, changing Router ID</li>
                <li><strong>Document Router IDs:</strong> Maintain consistent mapping for troubleshooting</li>
            </ul>
            
            <h4 style="color: #F5B041;">Router ID Changes and Impact</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Router ID changes require OSPF process restart
router ospf 1
 router-id 2.2.2.2

! Check current Router ID (still old)
show ip ospf | include ID
! Routing Process "ospf 1" with ID 1.1.1.1

! Restart required for change to take effect
clear ip ospf process
! Reset ALL OSPF processes? [no]: yes

! Verify new Router ID
show ip ospf | include ID
! Routing Process "ospf 1" with ID 2.2.2.2
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Troubleshooting Router ID Issues</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #F5B041;">Problem</th><th style="padding: 8px; text-align: left; color: #F5B041;">Cause</th><th style="padding: 8px; text-align: left; color: #F5B041;">Solution</th></tr>
                    <tr><td style="padding: 5px;">Duplicate Router IDs</td><td style="padding: 5px;">Two routers same RID</td><td style="padding: 5px;">Change one router's ID manually</td></tr>
                    <tr><td style="padding: 5px;">Unexpected DR Election</td><td style="padding: 5px;">Wrong Router ID</td><td style="padding: 5px;">Set appropriate Router IDs</td></tr>
                    <tr><td style="padding: 5px;">Router ID Keeps Changing</td><td style="padding: 5px;">Using physical interfaces</td><td style="padding: 5px;">Configure manual Router ID</td></tr>
                    <tr><td style="padding: 5px;">Can't Form Adjacencies</td><td style="padding: 5px;">RID conflict</td><td style="padding: 5px;">Ensure unique Router IDs</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Memorize Router ID selection priority order</li>
                    <li>Understand that Router ID changes require process restart</li>
                    <li>Know how Router ID affects DR/BDR elections</li>
                    <li>Practice identifying Router ID sources in different scenarios</li>
                </ul>
            </div>
        </div>
    `,

    // Remove old entries
    "OSPF Neighbors": ``,
    "DR/BDR Election": ``,
    "OSPF Router ID": ``,

    // 3.5 First Hop Redundancy Protocols
    "FHRP Purpose & Concepts": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">3.5: First Hop Redundancy Protocol Purpose & Concepts</h3>
            <p><strong>First Hop Redundancy Protocols (FHRPs)</strong> solve the critical problem of single point of failure at the default gateway. They provide seamless failover for end devices without requiring any reconfiguration.</p>
            
            <h4 style="color: #EC7063;">The Problem: Single Point of Failure</h4>
            <p>Traditional networks have a single default gateway. If that router fails:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Loss of Connectivity:</strong> End devices lose access to remote networks</li>
                <li><strong>Manual Intervention:</strong> Network administrators must manually reconfigure devices</li>
                <li><strong>Downtime:</strong> Service interruption until gateway is restored or reconfigured</li>
                <li><strong>User Impact:</strong> Loss of internet access, email, and network services</li>
            </ul>
            
            <h4 style="color: #EC7063;">The FHRP Solution</h4>
            <p>FHRPs create a <strong>virtual gateway</strong> shared by multiple physical routers:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Virtual IP Address:</strong> Single IP address used by all end devices as default gateway</li>
                <li><strong>Virtual MAC Address:</strong> Consistent MAC address that doesn't change during failover</li>
                <li><strong>Active/Standby Model:</strong> One router actively forwards, others monitor and standby</li>
                <li><strong>Automatic Failover:</strong> Transparent switching when active router fails</li>
                <li><strong>Fast Convergence:</strong> Sub-second failover times in most implementations</li>
            </ul>
            
            <h4 style="color: #EC7063;">Core FHRP Concepts</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #EC7063;">Concept</th><th style="padding: 8px; text-align: left; color: #EC7063;">Description</th><th style="padding: 8px; text-align: left; color: #EC7063;">Benefit</th></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Virtual IP</td><td style="padding: 5px;">Shared gateway address</td><td style="padding: 5px;">Consistent end device configuration</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">Virtual MAC</td><td style="padding: 5px;">Shared MAC address</td><td style="padding: 5px;">No ARP table updates needed</td></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">Priority</td><td style="padding: 5px;">Determines active router</td><td style="padding: 5px;">Predictable failover behavior</td></tr>
                    <tr><td style="padding: 5px; color: #8b5cf6;">Preemption</td><td style="padding: 5px;">Better router takes over</td><td style="padding: 5px;">Optimal path restoration</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">Hello Timers</td><td style="padding: 5px;">Failure detection</td><td style="padding: 5px;">Fast convergence</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">FHRP Operation Flow</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Initialization:</strong> Routers elect active/standby based on priority and Router ID</li>
                <li><strong>Normal Operation:</strong> Active router responds to ARP requests with virtual MAC</li>
                <li><strong>Hello Messages:</strong> Active router sends regular hello packets to standbys</li>
                <li><strong>Failure Detection:</strong> Standby detects missing hello packets</li>
                <li><strong>Failover:</strong> Standby assumes active role and virtual MAC ownership</li>
                <li><strong>Recovery:</strong> Original router can resume active role (if preemption enabled)</li>
            </ol>
            
            <h4 style="color: #EC7063;">Benefits of FHRPs</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>High Availability:</strong> Eliminates single point of failure</li>
                <li><strong>Transparent Operation:</strong> End devices unaware of failover</li>
                <li><strong>Fast Recovery:</strong> Sub-second to few-second convergence</li>
                <li><strong>Load Distribution:</strong> Some protocols support load balancing</li>
                <li><strong>Simplified Management:</strong> Centralized gateway configuration</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EC7063; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the problem FHRPs solve (single point of failure)</li>
                    <li>Know the concept of virtual IP and MAC addresses</li>
                    <li>Understand active/standby vs load balancing models</li>
                    <li>Recognize when FHRPs are needed in network designs</li>
                </ul>
            </div>
        </div>
    `,

    "HSRP (Hot Standby)": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">HSRP (Hot Standby Router Protocol)</h3>
            <p><strong>HSRP</strong> is Cisco's proprietary FHRP that provides gateway redundancy using an Active/Standby model. Only one router actively forwards traffic while others remain in standby.</p>
            
            <h4 style="color: #EC7063;">HSRP Characteristics</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Vendor:</strong> Cisco proprietary protocol</li>
                <li><strong>Model:</strong> Active/Standby (only one router forwards)</li>
                <li><strong>Virtual MAC:</strong> 0000.0c07.acXX (XX = group number in hex)</li>
                <li><strong>Default Priority:</strong> 100 (range 0-255)</li>
                <li><strong>Default Timers:</strong> Hello 3s, Hold 10s</li>
                <li><strong>Preemption:</strong> Disabled by default</li>
                <li><strong>Multicast Address:</strong> 224.0.0.2 (HSRPv1), 224.0.0.102 (HSRPv2)</li>
            </ul>
            
            <h4 style="color: #EC7063;">HSRP States</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #EC7063;">State</th><th style="padding: 8px; text-align: left; color: #EC7063;">Description</th><th style="padding: 8px; text-align: left; color: #EC7063;">Function</th></tr>
                    <tr><td style="padding: 5px; color: #94a3b8;">Disabled</td><td style="padding: 5px;">HSRP not running</td><td style="padding: 5px;">No participation</td></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">Init</td><td style="padding: 5px;">Starting up</td><td style="padding: 5px;">Waiting for better router</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">Listen</td><td style="padding: 5px;">Monitoring hellos</td><td style="padding: 5px;">Learning about group</td></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">Speak</td><td style="padding: 5px;">Sending hellos</td><td style="padding: 5px;">Participating in election</td></tr>
                    <tr><td style="padding: 5px; color: #8b5cf6;">Standby</td><td style="padding: 5px;">Ready to take over</td><td style="padding: 5px;">Monitoring active router</td></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Active</td><td style="padding: 5px;">Forwarding traffic</td><td style="padding: 5px;">Responding to virtual IP</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Basic HSRP Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Router 1 - Preferred Active
interface gigabitethernet 0/1
 ip address 192.168.1.2 255.255.255.0
 standby 1 ip 192.168.1.1
 standby 1 priority 110
 standby 1 preempt
 standby 1 authentication text cisco123

! Router 2 - Standby
interface gigabitethernet 0/1
 ip address 192.168.1.3 255.255.255.0
 standby 1 ip 192.168.1.1
 standby 1 priority 100
 standby 1 authentication text cisco123
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Advanced HSRP Features</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Interface tracking (reduce priority if interface fails)
interface gigabitethernet 0/1
 standby 1 track gigabitethernet 0/2 30

! Custom timers
interface gigabitethernet 0/1
 standby 1 timers 1 3
 standby 1 timers msec 200 msec 700

! Version 2 (supports IPv6 and larger groups)
interface gigabitethernet 0/1
 standby version 2
 standby 1 ipv6 2001:db8::1/64
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! View HSRP status
show standby
show standby brief

! Example output:
! GigabitEthernet0/1 - Group 1
!   State is Active
!     2 state changes, last state change 00:01:15
!   Virtual IP address is 192.168.1.1
!   Active virtual MAC address is 0000.0c07.ac01
!   Priority 110 (configured 110)
!   Preemption enabled

! Debug HSRP
debug standby
debug standby events
debug standby packets
</code>
            </pre>
            
            <h4 style="color: #EC7063;">HSRP Troubleshooting</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Split-Brain:</strong> Multiple active routers due to communication failure</li>
                <li><strong>Flapping:</strong> Rapid state changes due to unstable links</li>
                <li><strong>Authentication Mismatch:</strong> Different passwords on group members</li>
                <li><strong>Timer Mismatch:</strong> Different hello/hold timers between routers</li>
                <li><strong>Preemption Issues:</strong> Better router not taking over when expected</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EC7063; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know HSRP virtual MAC format: 0000.0c07.acXX</li>
                    <li>Understand that preemption is disabled by default</li>
                    <li>Remember priority range (0-255) and default (100)</li>
                    <li>Practice reading 'show standby' output</li>
                </ul>
            </div>
        </div>
    `,

    "VRRP (Virtual Router)": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">VRRP (Virtual Router Redundancy Protocol)</h3>
            <p><strong>VRRP</strong> is an industry-standard FHRP (RFC 3768) that provides gateway redundancy using a Master/Backup model. It's similar to HSRP but with key differences in operation and defaults.</p>
            
            <h4 style="color: #EC7063;">VRRP Characteristics</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Standard:</strong> Industry standard (RFC 3768)</li>
                <li><strong>Model:</strong> Master/Backup (only master forwards)</li>
                <li><strong>Virtual MAC:</strong> 0000.5e00.01XX (XX = VRID in hex)</li>
                <li><strong>Default Priority:</strong> 100 (range 1-254)</li>
                <li><strong>Default Advertisement:</strong> 1 second</li>
                <li><strong>Preemption:</strong> Enabled by default</li>
                <li><strong>Multicast Address:</strong> 224.0.0.18</li>
                <li><strong>IP Protocol:</strong> 112</li>
            </ul>
            
            <h4 style="color: #EC7063;">VRRP vs HSRP Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #EC7063;">Feature</th><th style="padding: 8px; text-align: left; color: #EC7063;">HSRP</th><th style="padding: 8px; text-align: left; color: #EC7063;">VRRP</th></tr>
                    <tr><td style="padding: 5px;">Standard</td><td style="padding: 5px; color: #f59e0b;">Cisco Proprietary</td><td style="padding: 5px; color: #10b981;">Industry (RFC 3768)</td></tr>
                    <tr><td style="padding: 5px;">Virtual MAC</td><td style="padding: 5px;">0000.0c07.acXX</td><td style="padding: 5px;">0000.5e00.01XX</td></tr>
                    <tr><td style="padding: 5px;">Preemption</td><td style="padding: 5px; color: #f59e0b;">Disabled default</td><td style="padding: 5px; color: #10b981;">Enabled default</td></tr>
                    <tr><td style="padding: 5px;">Timer</td><td style="padding: 5px;">Hello 3s, Hold 10s</td><td style="padding: 5px;">Advertisement 1s</td></tr>
                    <tr><td style="padding: 5px;">States</td><td style="padding: 5px;">Active/Standby</td><td style="padding: 5px;">Master/Backup</td></tr>
                    <tr><td style="padding: 5px;">Authentication</td><td style="padding: 5px; color: #10b981;">Yes</td><td style="padding: 5px; color: #f59e0b;">VRRPv3 only</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">VRRP Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Router 1 - Preferred Master
interface gigabitethernet 0/1
 ip address 10.1.1.2 255.255.255.0
 vrrp 10 ip 10.1.1.1
 vrrp 10 priority 200
 vrrp 10 preempt delay minimum 30

! Router 2 - Backup
interface gigabitethernet 0/1
 ip address 10.1.1.3 255.255.255.0
 vrrp 10 ip 10.1.1.1
 vrrp 10 priority 100

! Object tracking
track 1 interface gigabitethernet 0/2 line-protocol
interface gigabitethernet 0/1
 vrrp 10 track 1 decrement 50
</code>
            </pre>
            
            <h4 style="color: #EC7063;">VRRP States and Operation</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #EC7063;">State</th><th style="padding: 8px; text-align: left; color: #EC7063;">Description</th><th style="padding: 8px; text-align: left; color: #EC7063;">Behavior</th></tr>
                    <tr><td style="padding: 5px; color: #f59e0b;">Initialize</td><td style="padding: 5px;">Starting up</td><td style="padding: 5px;">Learning group parameters</td></tr>
                    <tr><td style="padding: 5px; color: #8b5cf6;">Backup</td><td style="padding: 5px;">Standby role</td><td style="padding: 5px;">Monitoring master router</td></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Master</td><td style="padding: 5px;">Active role</td><td style="padding: 5px;">Forwarding traffic, sending advertisements</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Priority and Election</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Highest Priority Wins:</strong> Range 1-254, default 100</li>
                <li><strong>IP Address Owner:</strong> Router with virtual IP gets priority 255</li>
                <li><strong>Preemption Default:</strong> Better router immediately takes over</li>
                <li><strong>Preempt Delay:</strong> Wait time before taking over (stability)</li>
            </ul>
            
            <h4 style="color: #EC7063;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! View VRRP status
show vrrp
show vrrp brief

! Example output:
! GigabitEthernet0/1 - Group 10
!   State is Master
!   Virtual IP address is 10.1.1.1
!   Virtual MAC address is 0000.5e00.010a
!   Priority 200
!   Master Advertisement interval 1.000 sec
!   Preemption enabled, min delay 30 sec

! Debug VRRP
debug vrrp events
debug vrrp packets
debug vrrp errors
</code>
            </pre>
            
            <h4 style="color: #EC7063;">VRRP Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Use Preempt Delay:</strong> Prevent rapid state changes</li>
                <li><strong>Object Tracking:</strong> Dynamically adjust priority based on uplinks</li>
                <li><strong>Consistent Timers:</strong> Match advertisement intervals across group</li>
                <li><strong>Monitor Master Uptime:</strong> Track election frequency</li>
                <li><strong>Documentation:</strong> Record priority assignments and reasons</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EC7063; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know VRRP virtual MAC format: 0000.5e00.01XX</li>
                    <li>Understand that preemption is enabled by default</li>
                    <li>Remember it's an industry standard (not Cisco proprietary)</li>
                    <li>Know the difference between Master/Backup vs Active/Standby</li>
                </ul>
            </div>
        </div>
    `,

    "GLBP Load Balancing": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">GLBP (Gateway Load Balancing Protocol)</h3>
            <p><strong>GLBP</strong> is Cisco's advanced FHRP that provides both redundancy and load balancing. Unlike HSRP/VRRP where only one router forwards traffic, GLBP allows all routers to actively forward traffic.</p>
            
            <h4 style="color: #EC7063;">GLBP Architecture</h4>
            <p>GLBP uses two key roles to achieve load balancing:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Active Virtual Gateway (AVG):</strong> Responds to ARP requests and assigns virtual MACs</li>
                <li><strong>Active Virtual Forwarder (AVF):</strong> Forwards traffic using assigned virtual MAC</li>
                <li><strong>Virtual IP Address:</strong> Single IP address for all end devices</li>
                <li><strong>Multiple Virtual MACs:</strong> Different MAC addresses for load distribution</li>
            </ul>
            
            <h4 style="color: #EC7063;">GLBP Load Balancing Methods</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #EC7063;">Method</th><th style="padding: 8px; text-align: left; color: #EC7063;">Algorithm</th><th style="padding: 8px; text-align: left; color: #EC7063;">Use Case</th></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Round Robin</td><td style="padding: 5px;">Sequential MAC assignment</td><td style="padding: 5px;">Default - equal distribution</td></tr>
                    <tr><td style="padding: 5px; color: #3b82f6;">Weighted</td><td style="padding: 5px;">Based on router capacity</td><td style="padding: 5px;">Different router capabilities</td></tr>
                    <tr><td style="padding: 5px; color: #6366f1;">Host-Dependent</td><td style="padding: 5px;">Same MAC for same host</td><td style="padding: 5px;">Consistent path per host</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">GLBP Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Router 1 - Preferred AVG
interface gigabitethernet 0/1
 ip address 192.168.1.2 255.255.255.0
 glbp 1 ip 192.168.1.1
 glbp 1 priority 110
 glbp 1 preempt
 glbp 1 load-balancing round-robin

! Router 2 - AVF
interface gigabitethernet 0/1
 ip address 192.168.1.3 255.255.255.0
 glbp 1 ip 192.168.1.1
 glbp 1 priority 100

! Router 3 - AVF  
interface gigabitethernet 0/1
 ip address 192.168.1.4 255.255.255.0
 glbp 1 ip 192.168.1.1
 glbp 1 priority 90
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Advanced GLBP Features</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Weighted load balancing
interface gigabitethernet 0/1
 glbp 1 load-balancing weighted
 glbp 1 weighting 150 lower 100 upper 150

! Host-dependent load balancing (sticky)
interface gigabitethernet 0/1
 glbp 1 load-balancing host-dependent

! Object tracking
track 1 interface gigabitethernet 0/2 line-protocol
interface gigabitethernet 0/1
 glbp 1 weighting track 1 decrement 50

! Custom timers
interface gigabitethernet 0/1
 glbp 1 timers 5 15
 glbp 1 timers redirect 600 28800
</code>
            </pre>
            
            <h4 style="color: #EC7063;">GLBP Operation Example</h4>
            <p><strong>Scenario:</strong> Three routers in GLBP group, PC sends ARP request</p>
            <ol style="margin-left: 20px;">
                <li><strong>ARP Request:</strong> PC broadcasts "Who has 192.168.1.1?"</li>
                <li><strong>AVG Response:</strong> R1 (AVG) responds with virtual MAC1 (0007.b400.0101)</li>
                <li><strong>Next ARP:</strong> R1 responds with virtual MAC2 (0007.b400.0102)</li>
                <li><strong>Load Distribution:</strong> Different hosts get different virtual MACs</li>
                <li><strong>Forwarding:</strong> Each AVF forwards traffic for its assigned virtual MAC</li>
            </ol>
            
            <h4 style="color: #EC7063;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! View GLBP status
show glbp
show glbp brief

! Example output:
! GigabitEthernet0/1 - Group 1
!   State is Active
!     2 state changes, last state change 00:10:15
!   Virtual IP address is 192.168.1.1
!   Hello time 3 sec, hold time 10 sec
!   Redirect time 600 sec, forwarder timeout 14400 sec
!   Preemption enabled, min delay 0 sec
!   Active is local
!   Standby is 192.168.1.3, priority 100 (expires in 9.792 sec)
!   Priority 110 (configured)
!   Weighting 100 (configured 100), thresholds: lower 1, upper 100
!   Load balancing: round-robin
!   Group members:
!     0007.b400.0101 (192.168.1.2) Active   local
!     0007.b400.0102 (192.168.1.3) Active
!     0007.b400.0103 (192.168.1.4) Active

! Monitor load balancing
show glbp 1 forwarder
debug glbp events
debug glbp packets
</code>
            </pre>
            
            <h4 style="color: #EC7063;">GLBP Benefits and Considerations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #EC7063;">Benefit</th><th style="padding: 8px; text-align: left; color: #EC7063;">Consideration</th></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Load Balancing</td><td style="padding: 5px; color: #f59e0b;">More complex than HSRP/VRRP</td></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Better Bandwidth Utilization</td><td style="padding: 5px; color: #f59e0b;">Cisco proprietary only</td></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Automatic Failover</td><td style="padding: 5px; color: #f59e0b;">Requires more MAC address table entries</td></tr>
                    <tr><td style="padding: 5px; color: #10b981;">Per-Host Consistency</td><td style="padding: 5px; color: #f59e0b;">Additional overhead for AVG election</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EC7063; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand GLBP provides both redundancy AND load balancing</li>
                    <li>Know the difference between AVG and AVF roles</li>
                    <li>Understand that GLBP uses multiple virtual MAC addresses</li>
                    <li>Remember it's Cisco proprietary (like HSRP)</li>
                </ul>
            </div>
        </div>
    `,

    // Remove old entry
    "FHRP": ``
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION3_DETAILS = SECTION3_DETAILS;
}
