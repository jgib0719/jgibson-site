/**
 * CCNA Section 1: Network Fundamentals - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, I've packed this with visuals and deep-dives.
 * v5.0 - Removed all placeholder images and replaced with deeper CCNA 200-301 technical details.
 */

const SECTION1_DETAILS = {
    // 1.1 Network Components
    "Routers": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.a: Routers (The Traffic Cops of the Network)</h3>
            <p>At its core, a <strong>Router</strong> is a Layer 3 device that connects different networks. Its primary job is to examine the destination IP address of a packet and use a <strong>routing table</strong> to determine the best path to forward it.</p>
            
            <h4 style="color: #00CFFF;">Route Selection Process</h4>
            <p>When a router has multiple paths to the same destination, it decides which route to install in the routing table using this logic:</p>
            <ol style="margin-left: 20px;">
                <li><strong>Longest Prefix Match:</strong> The router always prefers the most specific route. A route to 192.168.10.0/26 is more specific than 192.168.10.0/24.</li>
                <li><strong>Administrative Distance (AD):</strong> If multiple routing protocols provide a route to the same destination with the same prefix length, the router trusts the protocol with the lower AD. This is a measure of trustworthiness.</li>
                <li><strong>Metric:</strong> If the AD is the same, the router uses the protocol's metric to break the tie. The lowest metric wins.</li>
            </ol>

            <h4 style="color: #00CFFF;">Key Administrative Distances (Lower is Better)</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Directly Connected:</strong> 0</li>
                <li><strong>Static Route:</strong> 1</li>
                <li><strong>EIGRP:</strong> 90</li>
                <li><strong>OSPF:</strong> 110</li>
                <li><strong>RIP:</strong> 120</li>
            </ul>
             <p>Remembering your interest in routing protocols, the AD is how a router chooses between a route learned via OSPF vs. one learned via EIGRP. It will always trust EIGRP more because 90 is less than 110.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/products/routers/what-is-a-router.html" target="_blank" style="color: #66B2FF;">Read: Cisco's Guide to Routers</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=H8W9oM622bA" target="_blank" style="color: #66B2FF;">Watch: How Routers Work (PowerCert)</a></em>
            </div>
        </div>
    `,
    
    "L2 and L3 Switches": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.b: Layer 2 vs. Layer 3 Switches</h3>
            <p>Layer 2 switches operate at the Data Link layer using MAC addresses, while Layer 3 switches add routing capabilities for inter-VLAN communication and IP-based forwarding decisions.</p>
            
            <h4 style="color: #58D4FF;">Layer 2 Switch Characteristics:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Feature</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Description</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Functionality</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Forwarding Method</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">MAC address table lookup</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Layer 2 frame switching only</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">VLAN Support</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Creates separate broadcast domains</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">No inter-VLAN routing</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">ARP Handling</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Floods ARP requests within VLAN</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">No ARP processing or caching</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">IP Awareness</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">None - purely Layer 2</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Transparent to IP traffic</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Layer 3 Switch (Multilayer Switch) Capabilities:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Feature</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Description</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Benefit</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Dual Operation</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Layer 2 switching + Layer 3 routing</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Best of both worlds</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Inter-VLAN Routing</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Route between VLANs at wire speed</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">No external router needed</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Hardware ASICs</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Specialized routing hardware</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Near wire-speed routing</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">SVI Support</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Switch Virtual Interfaces for VLANs</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Default gateway per VLAN</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">ARP Handling Differences:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Switch Type</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">ARP Request</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">ARP Reply</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">ARP Table</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #f59e0b;">Layer 2 Switch</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Floods within VLAN</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Forwards transparently</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">No ARP table</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #22c55e;">Layer 3 Switch</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Processes for SVI networks</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Responds for SVI IPs</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Maintains ARP cache</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D4FF;">Switch Virtual Interfaces (SVIs):</h4>
            <p>SVIs are virtual Layer 3 interfaces associated with VLANs on a Layer 3 switch. They serve as the default gateway for hosts in each VLAN.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">SVI Characteristic</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Description</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Purpose</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">VLAN Association</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">One SVI per VLAN possible</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Inter-VLAN routing gateway</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">IP Configuration</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Assigned IP in VLAN subnet</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Default gateway for hosts</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">State Dependencies</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Up when VLAN exists and ports active</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Automatic interface management</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">VLAN 1 SVI</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Default management interface</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Switch management access</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D4FF;">Layer 3 Switch Configuration Examples:</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable IP routing on Layer 3 switch</span>
Switch(config)# <span style="color: #DCDCAA;">ip routing</span>

<span style="color: #6A9955;"># Create VLANs</span>
Switch(config)# <span style="color: #DCDCAA;">vlan 10</span>
Switch(config-vlan)# <span style="color: #C586C0;">name Sales</span>
Switch(config)# <span style="color: #DCDCAA;">vlan 20</span>
Switch(config-vlan)# <span style="color: #C586C0;">name Marketing</span>

<span style="color: #6A9955;"># Configure SVI for VLAN 10</span>
Switch(config)# <span style="color: #DCDCAA;">interface vlan 10</span>
Switch(config-if)# <span style="color: #9CDCFE;">ip address 192.168.10.1 255.255.255.0</span>
Switch(config-if)# <span style="color: #C586C0;">no shutdown</span>

<span style="color: #6A9955;"># Configure SVI for VLAN 20</span>
Switch(config)# <span style="color: #DCDCAA;">interface vlan 20</span>
Switch(config-if)# <span style="color: #9CDCFE;">ip address 192.168.20.1 255.255.255.0</span>
Switch(config-if)# <span style="color: #C586C0;">no shutdown</span>

<span style="color: #6A9955;"># Verify ARP table (L3 switch only)</span>
Switch# <span style="color: #DCDCAA;">show ip arp</span>
Protocol  Address     Age (min)  Hardware Addr   Type   Interface
Internet  192.168.10.1       -   0012.7f5a.0001  ARPA   Vlan10
Internet  192.168.10.10     15   0023.1234.5678  ARPA   Vlan10
Internet  192.168.20.1       -   0012.7f5a.0001  ARPA   Vlan20
</code>
            </pre>

            <h4 style="color: #58D4FF;">Switch Forwarding Methods:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Method</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Operation</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Advantage</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Disadvantage</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Store-and-Forward</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Receive entire frame, run CRC</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Error detection</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Higher latency</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Cut-Through</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Forward after reading DA MAC</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Lower latency</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Forwards errors</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Fragment-Free</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Read first 64 bytes</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Detects collision fragments</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Still forwards some errors</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Layer 3 vs Traditional Router Comparison:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Feature</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Layer 3 Switch</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Traditional Router</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Primary Use</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">LAN inter-VLAN routing</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">WAN connectivity</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Forwarding</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Hardware-based (ASICs)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Software-based (CPU)</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Performance</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Wire-speed routing</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Process switching overhead</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Port Density</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">High (24-48+ ports)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Low (2-8 ports typically)</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">WAN Features</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Limited</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Extensive (PPP, Frame Relay, etc.)</td>
                    </tr>
                </table>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Layer 2 switches only maintain MAC address tables</li>
                    <li>Layer 3 switches maintain both MAC tables and routing tables</li>
                    <li>SVIs provide Layer 3 interfaces for VLANs</li>
                    <li>Layer 3 switches can maintain ARP tables for IP-to-MAC resolution</li>
                    <li>Store-and-forward is the most common switching method today</li>
                    <li>Layer 3 switches use hardware ASICs for wire-speed routing</li>
                    <li>SVI state depends on VLAN existence and active ports</li>
                </ul>
            </div>
        </div>
    `,
    "NGFW & IPS": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.c: Next-Gen Firewalls (NGFW) & IPS</h3>
            <p>These are intelligent security devices that provide advanced protection.</p>
            <h4 style="color: #00CFFF;">NGFW Features:</h4>
            <p>An NGFW includes traditional firewall functions (IP and port filtering) plus <strong>Application Awareness</strong> (blocking specific apps like BitTorrent), an integrated <strong>Intrusion Prevention System (IPS)</strong>, and real-time <strong>Threat Intelligence</strong> feeds.</p>

            <h4 style="color: #00CFFF;">IPS vs. IDS</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>IPS (Intrusion Prevention System):</strong> Sits "in-line" with traffic. It can actively analyze and block malicious packets in real time. If the IPS goes down, traffic stops.</li>
                <li><strong>IDS (Intrusion Detection System):</strong> Sits "out-of-band," monitoring a copy of the traffic (via a SPAN port). It can only detect threats and send an alert; it cannot block them. If the IDS goes down, traffic flow is not affected.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-next-generation-firewall.html" target="_blank" style="color: #66B2FF;">Read: What Is an NGFW?</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=3B_i0_5t2jA" target="_blank" style="color: #66B2FF;">Watch: NGFW Explained (Sunny Classroom)</a></em>
            </div>
        </div>
    `,
    "Access Points": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.d: Access Points (APs)</h3>
            <p>An AP is a Layer 2 device that bridges wireless clients to a wired network.</p>
            <h4 style="color: #00CFFF;">AP Architectures:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Autonomous APs:</strong> Standalone devices, configured individually. (SOHO).</li>
                <li><strong>Lightweight APs:</strong> Centrally managed by a Wireless LAN Controller (WLC). (Enterprise).</li>
            </ul>
            <h4 style="color: #00CFFF;">Cisco AP Modes (A CCNA Topic):</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                 <li><strong>Local:</strong> The default mode. The AP provides a BSS for client connections and also monitors the RF environment.</li>
                 <li><strong>FlexConnect:</strong> Allows an AP at a remote branch office to switch traffic locally if its connection to the central WLC is lost.</li>
                 <li><strong>Monitor:</strong> The AP does not serve clients; instead, it acts as a dedicated sensor to detect rogue APs and IDS events.</li>
                 <li><strong>Rogue Detector:</strong> A dedicated mode to listen for rogue devices on the wired and wireless network.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/products/wireless/access-points/index.html" target="_blank" style="color: #66B2FF;">Read: Cisco Wireless Access Points</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=uSeia3pHMA4" target="_blank" style="color: #66B2FF;">Watch: What is a Wireless Access Point? (Techquickie)</a></em>
            </div>
        </div>
    `,
    "Controllers": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.e: Controllers - WLC, DNA Center & Cloud Management</h3>
            <p>Controllers centralize network management and configuration. Modern networks use both on-premises and cloud-based controller architectures for optimal management flexibility.</p>
            
            <h4 style="color: #58D4FF;">Wireless LAN Controller (WLC):</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Feature</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Description</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Benefit</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Centralized Management</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Single point of configuration for all APs</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Simplified administration</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">CAPWAP Protocol</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Control and Provisioning of Wireless APs</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Secure AP-to-controller communication</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Lightweight APs</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">APs depend on WLC for configuration</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Consistent policy enforcement</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Data Tunneling</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Optional client traffic tunneling to WLC</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Centralized traffic processing</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Cisco DNA Center (Intent-Based Networking):</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Capability</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Function</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Technology</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Design</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Network topology and hierarchy planning</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Intelligent discovery and mapping</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Policy</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Centralized policy creation and enforcement</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Software-Defined Access (SDA)</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Provision</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Automated device deployment</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Zero-Touch Provisioning (ZTP)</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Assure</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Continuous monitoring and analytics</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">AI/ML-powered insights</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Cloud-Managed Networking (Cisco Meraki):</h4>
            <p>Cloud-managed networking represents a paradigm shift from traditional on-premises controllers to cloud-based management platforms. Cisco Meraki leads this approach with simplified, scalable network management.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Feature</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Traditional WLC</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Cloud-Managed (Meraki)</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Infrastructure</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">On-premises hardware controller</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Cloud-hosted management</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Scalability</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Limited by controller capacity</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Virtually unlimited scale</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Management Access</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Local network or VPN required</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Anywhere with internet access</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Updates</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Manual firmware management</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Automatic cloud updates</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Analytics</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Basic monitoring tools</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Rich analytics and insights</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Multi-Site</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Complex multi-controller setup</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Single dashboard for all sites</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D4FF;">Meraki Cloud Architecture:</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Dashboard-as-a-Service:</strong> Web-based management accessible globally</li>
                <li><strong>Intelligent Edge:</strong> Local traffic switching with cloud management</li>
                <li><strong>Zero-Touch Deployment:</strong> Devices auto-configure when connected</li>
                <li><strong>Continuous Monitoring:</strong> Real-time health and performance metrics</li>
                <li><strong>Advanced Analytics:</strong> User behavior, application usage, and security insights</li>
                <li><strong>API Integration:</strong> RESTful APIs for third-party integrations</li>
            </ul>

            <h4 style="color: #58D4FF;">CAPWAP Operation (Traditional WLC):</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># CAPWAP Discovery Process</span>
<span style="color: #DCDCAA;">1. AP Discovery:</span>        Broadcast CAPWAP discovery request
<span style="color: #DCDCAA;">2. WLC Response:</span>        Controller responds with discovery response
<span style="color: #DCDCAA;">3. DTLS Handshake:</span>     Secure tunnel establishment
<span style="color: #DCDCAA;">4. Join Request:</span>       AP requests to join controller
<span style="color: #DCDCAA;">5. Configuration:</span>      WLC pushes configuration to AP
<span style="color: #DCDCAA;">6. Run State:</span>          AP operational, heartbeats every 30 sec

<span style="color: #6A9955;"># WLC Configuration Example</span>
WLC(config)# <span style="color: #DCDCAA;">wlan create 1 Corp-WiFi Corp-WiFi</span>
WLC(config)# <span style="color: #DCDCAA;">wlan security wpa akm psk</span>
WLC(config)# <span style="color: #DCDCAA;">wlan security wpa psk ascii MyPassword</span>
WLC(config)# <span style="color: #DCDCAA;">wlan enable</span>
</code>
            </pre>

            <h4 style="color: #58D4FF;">Controller Architecture Benefits:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Benefit</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">On-Premises Controller</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Cloud Controller</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Deployment Speed</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Days to weeks</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Minutes to hours</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Operational Complexity</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">High - expert staff required</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Low - simplified management</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Total Cost of Ownership</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Hardware + licensing + staff</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Subscription-based pricing</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Security Updates</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Manual patching cycles</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Automatic threat protection</td>
                    </tr>
                </table>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand CAPWAP protocol for AP-to-WLC communication</li>
                    <li>Know the difference between autonomous and lightweight APs</li>
                    <li>Cisco DNA Center provides intent-based networking capabilities</li>
                    <li>Cloud-managed networking (Meraki) simplifies multi-site deployments</li>
                    <li>Controllers provide centralized configuration and policy enforcement</li>
                    <li>DTLS tunnels secure management traffic between APs and controllers</li>
                </ul>
            </div>
        </div>
    `,
    "Endpoints": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.f: Endpoints</h3>
            <p>An <strong>endpoint</strong> is any device that is the final destination for data communications, such as a laptop, smartphone, server, or IoT device. The term is critical in security, as endpoints are often the most vulnerable part of a network and the primary target for malware.</p>
            <p>A robust defense-in-depth security strategy requires not only a strong network perimeter (firewall) but also dedicated endpoint security solutions (like advanced anti-malware and Endpoint Detection and Response - EDR) on each device.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/products/security/endpoint-security/index.html" target="_blank" style="color: #66B2FF;">Read: Cisco Endpoint Security Solutions</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=5nJ4532aX5w" target="_blank" style="color: #66B2FF;">Watch: What is an Endpoint? (CrowdStrike)</a></em>
            </div>
        </div>
    `,
    "Servers": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.g: Servers</h3>
            <p>A <strong>server</strong> provides a service to other computers, known as clients. This client-server model is fundamental to networking.</p>
            <h4 style="color: #00CFFF;">The Client-Server Model in Action:</h4>
            <p>When you browse a website, your computer (the client) sends an HTTP GET request to a Web Server. The server processes the request and returns the webpage content. Similarly, your PC acts as a client when requesting an IP address from a DHCP Server or resolving a name from a DNS Server.</p>
            <h4 style="color: #00CFFF;">Common Server Roles:</h4>
            <p>Web Server (HTTP), File Server (SMB/NFS), DHCP Server, DNS Server, Authentication Server (RADIUS/TACACS+).</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.techtarget.com/searchnetworking/definition/server" target="_blank" style="color: #66B2FF;">Read: What is a Server? (TechTarget)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=knc_hprcOPo" target="_blank" style="color: #66B2FF;">Watch: Servers vs Desktops (Techquickie)</a></em>
            </div>
        </div>
    `,
    "PoE": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.h: Power over Ethernet (PoE)</h3>
            <p><strong>PoE</strong> allows network cables to carry both data and electrical power, eliminating the need for separate power adapters for devices like APs, IP phones, and cameras.</p>
            <h4 style="color: #00CFFF;">PoE Negotiation</h4>
            <p>A PoE-enabled switch, or <strong>PSE (Power Sourcing Equipment)</strong>, doesn't just send power blindly. It first performs a low-voltage test to detect if the connected device is a valid <strong>PD (Powered Device)</strong>. The PD then communicates its power requirements (its PoE class) to the PSE, which then allocates the appropriate power budget to that port.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr style="background-color: #005F8C;"><th style="padding: 10px; border: 1px solid #444;">Standard</th><th style="padding: 10px; border: 1px solid #444;">Name</th><th style="padding: 10px; border: 1px solid #444;">Power to PD</th></tr>
                <tr><td style="padding: 10px; border: 1px solid #444;">802.3af</td><td style="padding: 10px; border: 1px solid #444;">PoE</td><td style="padding: 10px; border: 1px solid #444;">~13W</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #444;">802.3at</td><td style="padding: 10px; border: 1px solid #444;">PoE+</td><td style="padding: 10px; border: 1px solid #444;">~25.5W</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #444;">802.3bt</td><td style="padding: 10px; border: 1px solid #444;">PoE++</td><td style="padding: 10px; border: 1px solid #444;">~51W-71W</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://community.cisco.com/t5/networking-documents/power-over-ethernet-poe-powering-and-standards/ta-p/3159253" target="_blank" style="color: #66B2FF;">Read: PoE Powering and Standards</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=Tg2q1a5dTRk" target="_blank" style="color: #66B2FF;">Watch: Power over Ethernet Explained (Crosstalk)</a></em>
            </div>
        </div>
    `,

    // 1.2 Network Topology Architectures
    "Two-Tier": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.2.a: Two-Tier Topology</h3>
            <p>A <strong>Collapsed Core</strong> architecture common in small-to-medium networks. It combines the Core and Distribution layers into a single layer to save on cost and complexity.</p>
            <h4 style="color: #58D68D;">Layer Functions:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Collapsed Core/Distribution:</strong> Provides Layer 3 routing between VLANs and aggregates the Access layer switches.</li>
                <li><strong>Access:</strong> Provides endpoint connectivity to the network.</li>
            </ul>
            <p><strong style="color: #F1948A;">Drawback:</strong> As the network grows, this single core layer can become a performance bottleneck and a single point of failure.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Campus/cisco-campus-lan-wlan-design-guide.html" target="_blank" style="color: #66B2FF;">Read: Cisco Campus LAN Design Guide</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=HEiIuT5-L-8" target="_blank" style="color: #66B2FF;">Watch: 3-Tier & 2-Tier Architecture (Practical Networking)</a></em>
            </div>
        </div>
    `,
    "Three-Tier": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.2.b: Three-Tier Hierarchical Topology</h3>
            <p>The classic, highly scalable design for large enterprise networks. It breaks the network into distinct functional layers.</p>
            <h4 style="color: #58D68D;">Layer Functions:</h4>
            <dl>
                <dt style="color: #ABEBC6; font-weight: bold;">1. Core Layer:</dt><dd style="margin-left: 20px;">The high-speed backbone. Its only job is to switch packets as fast as possible. No complex policies like ACLs should be here.</dd>
                <dt style="color: #ABEBC6; font-weight: bold;">2. Distribution Layer:</dt><dd style="margin-left: 20px;">The boundary where routing, aggregation of access switches, and policy enforcement (ACLs, QoS) happen.</dd>
                <dt style="color: #ABEBC6; font-weight: bold;">3. Access Layer:</dt><dd style="margin-left: 20px;">The edge where endpoints connect. Provides features like port security, VLAN membership, and PoE.</dd>
            </dl>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2202421&seqNum=3" target="_blank" style="color: #66B2FF;">Read: Hierarchical Network Design (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=HEiIuT5-L-8" target="_blank" style="color: #66B2FF;">Watch: 3-Tier & 2-Tier Architecture (Practical Networking)</a></em>
            </div>
        </div>
    `,
    "Spine-Leaf": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.2.c: Spine-Leaf Topology</h3>
            <p>The modern standard for data centers, designed for massive amounts of <strong>east-west traffic</strong> (server-to-server).</p>
            <h4 style="color: #58D68D;">Architecture Rules:</h4>
            <p>Every Leaf switch connects to every Spine switch. Devices only connect to Leaf switches. There are no connections between Leaf switches or between Spine switches. This creates a highly predictable, non-blocking fabric.</p>
            <h4 style="color: #58D68D;">Key Benefit: No Spanning Tree</h4>
            <p>Because the design has no Layer 2 loops, it does not need Spanning Tree Protocol (STP). Instead, it uses Layer 3 routing protocols (like BGP or OSPF) between the switches. This allows all links to be active and load-balanced using Equal-Cost Multi-Path (ECMP).</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9000-series-switches/white-paper-c11-737022.html" target="_blank" style="color: #66B2FF;">Read: Cisco Nexus Spine-Leaf Architecture</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=5aKy-sJK_wA" target="_blank" style="color: #66B2FF;">Watch: Spine-and-Leaf Architecture (NetworkChuck)</a></em>
            </div>
        </div>
    `,
    "WAN": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.2.d: Wide Area Network (WAN) Topology</h3>
            <p>A WAN connects networks over a large geographical area.</p>
            <h4 style="color: #58D68D;">Common WAN Designs & Technologies:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Topologies:</strong> Hub-and-Spoke (centralized), Full Mesh (all sites connected), and Partial Mesh (hybrid).</li>
                <li><strong>Technologies:</strong> MPLS (a private, carrier-managed WAN), Metro Ethernet (high-speed Ethernet from a carrier), and Internet VPN (using technologies like IPsec and DMVPN to build a secure network over the public internet).</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/solutions/enterprise-networks/sd-wan/what-is-a-wan.html" target="_blank" style="color: #66B2FF;">Read: What is a WAN? by Cisco</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=JkJ61lD-hH8" target="_blank" style="color: #66B2FF;">Watch: LANs, WANs, and the Internet (NetworkChuck)</a></em>
            </div>
        </div>
    `,
    "SOHO": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.2.e: SOHO Topology</h3>
            <p>A Small Office/Home Office (SOHO) network is a simple, <strong>flat network</strong>. Typically, it uses a single "all-in-one" device from an ISP that combines a router, switch, firewall, and wireless AP.</p>
            <p>In a flat network, all devices are in the same broadcast domain. This is simple to manage but offers no segmentation. A broadcast storm or a malware infection on one device can potentially impact all other devices on the network.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/solutions/small-business/networking/index.html" target="_blank" style="color: #66B2FF;">Read: Cisco Small Business Networking</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=j_g-9ksJR44" target="_blank" style="color: #66B2FF;">Watch: Building a Home Network (Linus Tech Tips)</a></em>
            </div>
        </div>
    `,
    "On-Premises vs. Cloud": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.2.f: On-Premises vs. Cloud</h3>
            <p>This describes where your IT infrastructure physically resides.</p>
            <p><strong>On-Premise:</strong> You own and manage all hardware in your own data center. <strong>Cloud:</strong> You rent resources from a provider like AWS or Azure.</p>
            <h4 style="color: #58D68D;">Cloud Service Models:</h4>
             <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>IaaS (Infrastructure as a Service):</strong> The provider manages the physical hardware; you manage the OS, applications, and data. (e.g., AWS EC2, Azure VM).</li>
                <li><strong>PaaS (Platform as a Service):</strong> The provider manages the hardware and OS; you manage the application and data. (e.g., AWS Elastic Beanstalk, Heroku).</li>
                <li><strong>SaaS (Software as a Service):</strong> The provider manages everything; you just use the software. (e.g., Office 365, Salesforce).</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://aws.amazon.com/what-is/on-premises/" target="_blank" style="color: #66B2FF;">Read: What is On-Premises? (AWS)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=kQ24-BQC8-g" target="_blank" style="color: #66B2FF;">Watch: Cloud vs On-Premise (IBM)</a></em>
            </div>
        </div>
    `,
    
    // 1.3 Physical Interface and Cabling
    "Physical Interface and Cabling": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.3: Physical Interface & Cabling Types</h3>
             <p>The physical layer is the foundation of the network.</p>
             <h4 style="color: #F5B041;">Copper - Twisted Pair</h4>
             <p>Uses RJ-45 connectors. The arrangement of the wires inside the cable matters. T568A and T568B are the two wiring standards. A <strong>straight-through</strong> cable has the same standard on both ends (e.g., B to B) and is used to connect unlike devices (PC to Switch). A <strong>crossover</strong> cable has different standards on each end (A to B) and is used for like devices (Switch to Switch), though modern devices with Auto-MDIX often make this unnecessary.</p>

             <h4 style="color: #F5B041;">Fiber Optic Cabling</h4>
             <p>Transmits data using light. Immune to EMI. <strong>Single-mode (SMF)</strong> for long-haul; <strong>Multimode (MMF)</strong> for campus/data center.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=29807" target="_blank" style="color: #66B2FF;">Read: Network Cabling (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=lantry9QQoU" target="_blank" style="color: #66B2FF;">Watch: Fiber vs Copper (NetworkChuck)</a></em>
            </div>
        </div>
    `,
    
    "Copper - Twisted Pair": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">Copper - Twisted Pair Cabling</h3>
            <p>Uses RJ-45 connectors with 8 wires arranged in 4 twisted pairs. The twisting reduces electromagnetic interference (EMI).</p>
            <h4 style="color: #F5B041;">Wiring Standards:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>T568A and T568B:</strong> Two standard pin arrangements</li>
                <li><strong>Straight-through:</strong> Same standard both ends (PC to Switch)</li>
                <li><strong>Crossover:</strong> Different standards each end (Switch to Switch)</li>
            </ul>
            <p>Modern devices with Auto-MDIX can auto-negotiate crossover functionality.</p>
        </div>
    `,
    
    "Single Mode Fiber": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">Single Mode Fiber (SMF)</h3>
            <p>Fiber optic cable with a small core (9 microns) that allows only one mode of light to propagate.</p>
            <h4 style="color: #BB8FCE;">Characteristics:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Distance:</strong> Long-haul (up to 100+ km)</li>
                <li><strong>Bandwidth:</strong> Very high</li>
                <li><strong>Cost:</strong> Higher than multimode</li>
                <li><strong>Light Source:</strong> Laser diodes</li>
            </ul>
            <p>Used for WAN connections and campus backbone links requiring long distances.</p>
        </div>
    `,
    
    "Multimode Fiber": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #16A085; border-bottom: 2px solid #16A085; padding-bottom: 5px;">Multimode Fiber (MMF)</h3>
            <p>Fiber optic cable with a larger core (50 or 62.5 microns) that allows multiple modes of light.</p>
            <h4 style="color: #52C4A0;">Characteristics:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Distance:</strong> Shorter (up to 2 km)</li>
                <li><strong>Bandwidth:</strong> Lower than single mode</li>
                <li><strong>Cost:</strong> Lower than single mode</li>
                <li><strong>Light Source:</strong> LEDs or VCSELs</li>
            </ul>
            <p>Used for campus and data center connections where distance is limited.</p>
        </div>
    `,
    
    "Cable Categories": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E67E22; border-bottom: 2px solid #E67E22; padding-bottom: 5px;">Cable Categories</h3>
            <p>Different categories of twisted pair cables support different bandwidths and distances.</p>
            <h4 style="color: #F7934C;">Common Categories:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Cat 5e:</strong> 100 MHz, 1 Gbps, 100m</li>
                <li><strong>Cat 6:</strong> 250 MHz, 1 Gbps, 100m (10 Gbps up to 55m)</li>
                <li><strong>Cat 6a:</strong> 500 MHz, 10 Gbps, 100m</li>
                <li><strong>Cat 8:</strong> 2000 MHz, 25/40 Gbps, 30m</li>
            </ul>
            <p>Higher categories support higher frequencies and data rates.</p>
        </div>
    `,
    
    "Connectors": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">Network Connectors</h3>
            <p>Different connector types are used for different cable types and applications.</p>
            <h4 style="color: #58D68D;">Copper Connectors:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>RJ-45:</strong> 8P8C connector for Ethernet</li>
                <li><strong>RJ-11:</strong> 6P4C connector for telephone</li>
            </ul>
            <h4 style="color: #58D68D;">Fiber Connectors:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>LC:</strong> Small form factor, duplex</li>
                <li><strong>SC:</strong> Square connector, duplex</li>
                <li><strong>ST:</strong> Bayonet mount, older standard</li>
            </ul>
        </div>
    `,
    
    "Ethernet Connections": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.3.b: Ethernet Connections (Shared Media vs Point-to-Point)</h3>
            <p>Ethernet has evolved from shared collision domains using hubs to modern point-to-point switched networks. Understanding this evolution is fundamental to network design and troubleshooting.</p>

            <h4 style="color: #58D4FF;">Shared Media (Legacy Hub-Based Networks):</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Characteristic</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Description</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Impact</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Collision Domain</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">All devices share one collision domain</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Collisions increase with more devices</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">CSMA/CD</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Carrier Sense Multiple Access/Collision Detection</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Reduced efficiency with utilization</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Bandwidth Sharing</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Total bandwidth shared among all ports</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Performance degrades with load</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Duplex</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Half-duplex only</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Cannot send and receive simultaneously</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Point-to-Point (Modern Switched Networks):</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Characteristic</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Description</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Benefit</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Collision Domain</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Each port is separate collision domain</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">No collisions between ports</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">MAC Learning</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Switch learns and stores MAC addresses</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Intelligent frame forwarding</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Dedicated Bandwidth</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Full bandwidth per port</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Consistent performance</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Duplex</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Full-duplex capability</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Simultaneous send/receive</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Collision Domains vs Broadcast Domains:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Domain Type</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Hub Behavior</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Switch Behavior</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Router Behavior</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #ef4444;">Collision Domain</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">All ports = 1 domain</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Each port = 1 domain</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Each port = 1 domain</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #3b82f6;">Broadcast Domain</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">All ports = 1 domain</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">All ports = 1 domain*</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Each port = 1 domain</td>
                    </tr>
                </table>
                <p style="font-size: 0.9em; color: #94a3b8; margin-top: 10px;">*VLANs can create separate broadcast domains on switches</p>
            </div>

            <h4 style="color: #58D4FF;">Ethernet Standards and Media Types:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Standard</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Speed</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Media</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Max Distance</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">10BASE-T</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">10 Mbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Cat3/5 UTP</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">100m</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">100BASE-TX</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">100 Mbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Cat5 UTP</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">100m</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">1000BASE-T</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1 Gbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Cat5e/6 UTP</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">100m</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">1000BASE-SX</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1 Gbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Multimode Fiber</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">550m</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">1000BASE-LX</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1 Gbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Single/Multimode Fiber</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">5km/10km</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">10GBASE-T</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">10 Gbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Cat6a/7 UTP</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">100m</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">CSMA/CD Process (Legacy Shared Media):</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># CSMA/CD Operation Steps</span>
<span style="color: #DCDCAA;">1. Carrier Sense:</span>    Listen before transmitting
<span style="color: #DCDCAA;">2. Multiple Access:</span>  Multiple devices can access medium
<span style="color: #DCDCAA;">3. Collision Detection:</span> Monitor for collisions during transmission
<span style="color: #DCDCAA;">4. Jam Signal:</span>       Send jam if collision detected
<span style="color: #DCDCAA;">5. Backoff Algorithm:</span> Wait random time before retry

<span style="color: #6A9955;"># Collision Domain Size Impact</span>
<span style="color: #CE9178;">Hub with 4 devices:</span>   1 collision domain = high collision probability
<span style="color: #CE9178;">Switch with 4 devices:</span> 4 collision domains = no collisions
</code>
            </pre>

            <h4 style="color: #58D4FF;">Modern Switching Advantages:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Microsegmentation:</strong> Each port is separate collision domain</li>
                    <li><strong>Full-Duplex:</strong> Simultaneous send/receive eliminates collisions</li>
                    <li><strong>MAC Learning:</strong> Dynamic learning and aging of MAC addresses</li>
                    <li><strong>Store-and-Forward:</strong> Frame validation and error checking</li>
                    <li><strong>VLAN Support:</strong> Logical segmentation of broadcast domains</li>
                    <li><strong>Spanning Tree:</strong> Loop prevention in redundant topologies</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand collision domain vs broadcast domain concepts</li>
                    <li>Know that hubs create one large collision domain</li>
                    <li>Switches create separate collision domain per port</li>
                    <li>CSMA/CD is only needed in shared media (half-duplex)</li>
                    <li>Modern networks use full-duplex point-to-point connections</li>
                    <li>Routers separate both collision and broadcast domains</li>
                </ul>
            </div>
        </div>
    `,
    
    // 1.4 Interface and Cable Issues
    "Physical Layer Issues": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.4.1: Physical Layer Issues</h3>
            <p>Physical layer problems are the foundation of network troubleshooting. They manifest as complete connectivity loss or intermittent issues.</p>
            
            <h4 style="color: #EC7063;">Common Physical Layer Problems:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Cable Breaks:</strong> Complete severing of copper conductors or fiber core</li>
                <li><strong>Loose Connections:</strong> Poor contact at RJ45 or fiber connectors</li>
                <li><strong>Bend Radius Violations:</strong> Cables bent beyond minimum radius causing signal loss</li>
                <li><strong>Environmental Damage:</strong> Water, heat, or physical crushing</li>
                <li><strong>EMI/RFI Interference:</strong> Electrical noise from power lines or machinery</li>
            </ul>

            <h4 style="color: #EC7063;">Initial Troubleshooting Steps:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Router# <span style="color: #DCDCAA;">show interface gi0/1</span><br>
                GigabitEthernet0/1 is <span style="color: #EF4444;">down</span>, line protocol is <span style="color: #EF4444;">down</span><br>
                Hardware is GigE, address is 0012.7f5a.0001<br>
                MTU 1500 bytes, BW 1000000 Kbit/sec, DLY 100 usec<br>
                <span style="color: #F59E0B;">Last clearing of "show interface" counters never</span>
                </code>
            </div>
            <p><strong>Key Indicators:</strong> "down/down" status typically indicates physical layer issues. Check cables, connectors, and patch panels.</p>

            <h4 style="color: #EC7063;">Link Light Interpretation:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Link Light</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Status</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Meaning</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Solid Green</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Good Link</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Physical connection established</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Blinking Amber</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Activity</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Data transmission occurring</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">No Light</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">No Link</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Physical layer problem</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand "down/down" vs "up/down" interface states</li>
                    <li>Know that physical layer issues cause complete connectivity loss</li>
                    <li>Remember that LED status lights provide immediate visual feedback</li>
                    <li>Cable testing tools are essential for physical layer troubleshooting</li>
                </ul>
            </div>
        </div>
    `,

    "Show Interface Analysis": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.4.2: Show Interface Analysis</h3>
            <p>The <code>show interface</code> command provides comprehensive statistics for troubleshooting network issues. Understanding these counters is crucial for CCNA-level troubleshooting.</p>

            <h4 style="color: #58D68D;">Interface Status Meanings:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Interface</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Line Protocol</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Problem Layer</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Physical (Layer 1)</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Up</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Data Link (Layer 2)</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Up</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Up</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface Working</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Administratively Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Manual Shutdown</td>
                </tr>
            </table>

            <h4 style="color: #58D68D;">Sample Show Interface Output:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Router# <span style="color: #DCDCAA;">show interface gigabitethernet0/1</span><br>
                GigabitEthernet0/1 is <span style="color: #16A34A;">up</span>, line protocol is <span style="color: #16A34A;">up</span><br>
                Hardware is GigE, address is 0012.7f5a.0001 (bia 0012.7f5a.0001)<br>
                Internet address is 192.168.1.1/24<br>
                MTU 1500 bytes, BW 1000000 Kbit/sec, DLY 100 usec,<br>
                reliability <span style="color: #16A34A;">255/255</span>, txload <span style="color: #16A34A;">1/255</span>, rxload <span style="color: #16A34A;">1/255</span><br>
                Encapsulation ARPA, loopback not set<br>
                Keepalive set (10 sec)<br>
                <span style="color: #F59E0B;">Full-duplex, 1000Mb/s, media type is T</span><br>
                input flow-control is off, output flow-control is unsupported<br>
                ARP type: ARPA, ARP Timeout 04:00:00<br>
                Last input 00:00:08, output 00:00:05, output hang never<br>
                Last clearing of "show interface" counters never<br>
                Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0<br>
                Queueing strategy: fifo<br>
                Output queue: 0/40/0 (size/max total/drops)<br>
                <span style="color: #EF4444;">5 minute input rate 1000 bits/sec, 1 packets/sec</span><br>
                <span style="color: #EF4444;">5 minute output rate 2000 bits/sec, 2 packets/sec</span><br>
                1024 packets input, 65536 bytes, <span style="color: #EF4444;">0 no buffer</span><br>
                Received 1000 broadcasts (0 IP multicasts)<br>
                <span style="color: #EF4444;">0 runts, 0 giants, 0 throttles</span><br>
                <span style="color: #EF4444;">5 input errors, 5 CRC, 0 frame, 0 overrun, 0 ignored</span><br>
                <span style="color: #EF4444;">0 watchdog, 1017 multicast, 0 pause input</span><br>
                2048 packets output, 131072 bytes, 0 underruns<br>
                <span style="color: #EF4444;">0 output errors, 2 collisions, 1 interface resets</span><br>
                <span style="color: #EF4444;">0 late collisions, 0 deferred, 0 lost carrier, 0 no carrier</span><br>
                0 output buffer failures, 0 output buffers swapped out
                </code>
            </div>

            <h4 style="color: #58D68D;">Key Metrics to Monitor:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Reliability (255/255):</strong> Perfect = 255/255, degraded < 255/255</li>
                <li><strong>Load (1/255):</strong> Interface utilization, 255 = 100% utilized</li>
                <li><strong>Input/Output Rates:</strong> Current traffic levels in bits/sec and packets/sec</li>
                <li><strong>Queue Drops:</strong> Buffer overflow indicating congestion</li>
                <li><strong>Interface Resets:</strong> Hardware-level problems if increasing</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Memorize interface status combinations and their meanings</li>
                    <li>Understand that "up/down" suggests Layer 2 problems</li>
                    <li>Know that reliability and load values indicate performance</li>
                    <li>Recognize that increasing error counters indicate problems</li>
                </ul>
            </div>
        </div>
    `,

    "Duplex & Speed Issues": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.4.3: Duplex & Speed Issues</h3>
            <p>Duplex mismatches are among the most common Layer 1/2 issues. They cause performance problems that are often difficult to diagnose without proper understanding.</p>

            <h4 style="color: #F5B041;">Auto-Negotiation Process:</h4>
            <p>Modern Ethernet uses auto-negotiation to agree on speed and duplex. When this fails, devices fall back to defaults that often don't match.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Switch(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Switch(config-if)# <span style="color: #DCDCAA;">speed auto</span><br>
                Switch(config-if)# <span style="color: #DCDCAA;">duplex auto</span><br><br>
                
                <span style="color: #6A9955;">! Verify auto-negotiation results</span><br>
                Switch# <span style="color: #DCDCAA;">show interface gi0/1</span><br>
                GigabitEthernet0/1 is up, line protocol is up<br>
                <span style="color: #16A34A;">Full-duplex, 1000Mb/s, media type is T</span><br>
                <span style="color: #16A34A;">Auto-negotiation enabled, link ok</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">Common Duplex Mismatch Scenarios:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Device A</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Device B</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Result</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Auto (Full)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Manual Half</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Mismatch</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Manual Full</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Auto (Half)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Mismatch</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Auto (Full)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Auto (Full)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Match</td>
                </tr>
            </table>

            <h4 style="color: #F5B041;">Symptoms of Duplex Mismatches:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Late Collisions:</strong> The telltale sign of duplex mismatches</li>
                <li><strong>CRC Errors:</strong> Frame corruption due to collision damage</li>
                <li><strong>Slow Performance:</strong> Especially noticeable during bidirectional traffic</li>
                <li><strong>Timeouts:</strong> Applications timing out due to retransmissions</li>
            </ul>

            <h4 style="color: #F5B041;">Identifying Duplex Issues:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Switch# <span style="color: #DCDCAA;">show interface gi0/1</span><br>
                GigabitEthernet0/1 is up, line protocol is up<br>
                <span style="color: #EF4444;">Half-duplex, 100Mb/s, media type is T</span><br>
                ...<br>
                <span style="color: #EF4444;">15 input errors, 10 CRC, 0 frame, 0 overrun, 0 ignored</span><br>
                <span style="color: #EF4444;">25 output errors, 150 collisions, 1 interface resets</span><br>
                <span style="color: #EF4444;">45 late collisions, 0 deferred, 0 lost carrier, 0 no carrier</span><br><br>
                
                <span style="color: #6A9955;">! Fix by forcing both ends to same settings</span><br>
                Switch(config-if)# <span style="color: #DCDCAA;">speed 1000</span><br>
                Switch(config-if)# <span style="color: #DCDCAA;">duplex full</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">Speed Negotiation Issues:</h4>
            <p>Similar problems occur with speed mismatches, though less common with modern equipment:</p>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Link Down:</strong> Incompatible speeds prevent link establishment</li>
                <li><strong>Degraded Performance:</strong> Both ends default to lowest common speed</li>
                <li><strong>Auto-Negotiation Failure:</strong> Manual configuration needed</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Late collisions are the primary indicator of duplex mismatches</li>
                    <li>Auto-negotiation requires both ends to support it properly</li>
                    <li>Manual configuration should match on both devices</li>
                    <li>Gigabit Ethernet and higher requires full-duplex operation</li>
                </ul>
            </div>
        </div>
    `,

    "Error Counter Types": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.4.4: Error Counter Types</h3>
            <p>Understanding different error types and their root causes is essential for effective network troubleshooting. Each error type points to specific problems.</p>

            <h4 style="color: #EC7063;">Input Error Categories:</h4>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #EF4444; margin-bottom: 10px;">CRC Errors (Cyclic Redundancy Check)</h5>
                <code style="color: #9CDCFE;">
                <span style="color: #EF4444;">147 input errors, 147 CRC, 0 frame, 0 overrun, 0 ignored</span>
                </code>
                <p style="margin-top: 10px;"><strong>Causes:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Bad or damaged cables (most common)</li>
                    <li>Faulty network interface cards</li>
                    <li>Electromagnetic interference (EMI)</li>
                    <li>Duplex mismatches causing collisions</li>
                </ul>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #F59E0B; margin-bottom: 10px;">Runts (Undersized Frames)</h5>
                <code style="color: #9CDCFE;">
                <span style="color: #F59E0B;">25 runts, 0 giants, 0 throttles</span>
                </code>
                <p style="margin-top: 10px;"><strong>Definition:</strong> Frames smaller than 64 bytes (minimum Ethernet frame size)</p>
                <p><strong>Causes:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Collisions truncating frames</li>
                    <li>Faulty network drivers</li>
                    <li>Hardware malfunctions</li>
                </ul>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #8B5CF6; margin-bottom: 10px;">Giants (Oversized Frames)</h5>
                <code style="color: #9CDCFE;">
                <span style="color: #8B5CF6;">0 runts, 12 giants, 0 throttles</span>
                </code>
                <p style="margin-top: 10px;"><strong>Definition:</strong> Frames larger than 1518 bytes (standard) or configured MTU</p>
                <p><strong>Causes:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Faulty network interface cards</li>
                    <li>Driver bugs sending oversized frames</li>
                    <li>Misconfigured jumbo frame settings</li>
                </ul>
            </div>

            <h4 style="color: #EC7063;">Output Error Categories:</h4>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #10B981; margin-bottom: 10px;">Collisions</h5>
                <code style="color: #9CDCFE;">
                <span style="color: #10B981;">0 output errors, 1247 collisions, 1 interface resets</span>
                </code>
                <p style="margin-top: 10px;"><strong>Normal on half-duplex links</strong> - indicates multiple devices transmitting simultaneously</p>
                <p><strong>Problem if seen on full-duplex links:</strong> Indicates duplex mismatch</p>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #EF4444; margin-bottom: 10px;">Late Collisions</h5>
                <code style="color: #9CDCFE;">
                <span style="color: #EF4444;">78 late collisions, 0 deferred, 0 lost carrier, 0 no carrier</span>
                </code>
                <p style="margin-top: 10px;"><strong>Critical Problem:</strong> Collision detected after 64th byte (slot time)</p>
                <p><strong>Causes:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Duplex mismatch (most common)</li>
                    <li>Cable length exceeding 100m limit</li>
                    <li>Too many repeaters in collision domain</li>
                </ul>
            </div>

            <h4 style="color: #EC7063;">Buffer and Queue Errors:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #9CDCFE;">
                Input queue: <span style="color: #3B82F6;">0/75/25/0</span> (size/max/drops/flushes)<br>
                Output queue: <span style="color: #3B82F6;">0/40/15</span> (size/max total/drops)<br>
                <span style="color: #3B82F6;">Total output drops: 15</span>
                </code>
                <p style="margin-top: 10px;"><strong>Queue Drops:</strong> Interface cannot process packets fast enough</p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Input drops: Traffic arriving faster than processing capability</li>
                    <li>Output drops: Outgoing traffic exceeding line rate</li>
                    <li>Solutions: QoS implementation, bandwidth upgrades</li>
                </ul>
            </div>

            <h4 style="color: #EC7063;">Troubleshooting Methodology:</h4>
            <ol style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Baseline:</strong> Clear counters and monitor for new errors</li>
                <li><strong>Identify Pattern:</strong> Continuous vs. intermittent errors</li>
                <li><strong>Isolate:</strong> Test cables, swap interfaces, check connected devices</li>
                <li><strong>Resolve:</strong> Replace faulty components, fix configuration</li>
            </ol>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Clear counters to establish baseline</span><br>
                Switch# <span style="color: #DCDCAA;">clear counters gi0/1</span><br>
                Clear "show interface" counters on this interface [confirm] y<br><br>
                
                <span style="color: #6A9955;">! Monitor for new errors</span><br>
                Switch# <span style="color: #DCDCAA;">show interface gi0/1 | include error</span><br>
                0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored<br>
                0 output errors, 0 collisions, 0 interface resets
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>CRC errors almost always indicate physical layer problems</li>
                    <li>Late collisions are definitive signs of duplex mismatches</li>
                    <li>Runts and giants suggest hardware or driver issues</li>
                    <li>Queue drops indicate congestion, not errors</li>
                    <li>Always clear counters to establish a baseline for monitoring</li>
                </ul>
            </div>
        </div>
    `,

    "Cable Testing Methods": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.4.5: Cable Testing Methods</h3>
            <p>Proper cable testing is essential for maintaining network reliability. Different tools and techniques help identify various types of cable faults.</p>

            <h4 style="color: #AF7AC5;">Cable Testing Tools:</h4>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #8B5CF6; margin-bottom: 10px;">1. Basic Cable Tester</h5>
                <p><strong>Function:</strong> Tests continuity and basic wiring</p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Verifies all 8 wires have continuity</li>
                    <li>Detects opens, shorts, and miswires</li>
                    <li>Shows pin-to-pin mapping</li>
                    <li>Typically uses remote identifier unit</li>
                </ul>
                <p><strong>Limitations:</strong> Cannot test signal quality or performance</p>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #F59E0B; margin-bottom: 10px;">2. Cable Certifier</h5>
                <p><strong>Function:</strong> Comprehensive testing to industry standards</p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Tests to TIA/EIA standards (Cat5e, Cat6, Cat6a)</li>
                    <li>Measures attenuation, crosstalk, return loss</li>
                    <li>Verifies bandwidth capabilities</li>
                    <li>Generates certification reports</li>
                </ul>
                <p><strong>Use Case:</strong> New installations and warranty compliance</p>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #10B981; margin-bottom: 10px;">3. Time Domain Reflectometer (TDR)</h5>
                <p><strong>Function:</strong> Locates cable faults and measures distances</p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Sends signal pulse and measures reflections</li>
                    <li>Identifies exact distance to faults</li>
                    <li>Detects opens, shorts, and impedance changes</li>
                    <li>Works on any cable type</li>
                </ul>
                <p><strong>Benefit:</strong> Pinpoints problems for efficient repair</p>
            </div>

            <h4 style="color: #AF7AC5;">Common Cable Faults:</h4>
            
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Fault Type</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Symptoms</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Detection Method</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Open Circuit</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">No connectivity</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Continuity test</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Short Circuit</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Intermittent connectivity</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Resistance measurement</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #8B5CF6;">Split Pair</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">High error rates</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Advanced wire map</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #10B981;">Excessive Length</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Signal degradation</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">TDR measurement</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">Testing Procedures:</h4>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #3B82F6; margin-bottom: 10px;">Step-by-Step Cable Testing:</h5>
                <ol style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Visual Inspection:</strong> Check for obvious damage, kinks, or crush points</li>
                    <li><strong>Continuity Test:</strong> Verify all pairs have end-to-end connectivity</li>
                    <li><strong>Wire Map:</strong> Confirm correct pin assignments (T568A or T568B)</li>
                    <li><strong>Length Test:</strong> Ensure cable doesn't exceed 100m limit</li>
                    <li><strong>Performance Test:</strong> Measure attenuation and crosstalk if required</li>
                </ol>
            </div>

            <h4 style="color: #AF7AC5;">Fiber Optic Testing:</h4>
            <p>Fiber cables require specialized testing equipment:</p>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Light Source and Power Meter:</strong> Measures optical power loss</li>
                <li><strong>OTDR (Optical TDR):</strong> Locates breaks and measures distances</li>
                <li><strong>Visual Fault Locator:</strong> Red laser helps trace fiber paths</li>
                <li><strong>Insertion Loss Test:</strong> Verifies connector and splice quality</li>
            </ul>

            <h4 style="color: #AF7AC5;">Best Practices:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Document Results:</strong> Keep records of all test results</li>
                    <li><strong>Test Both Ends:</strong> Problems may be direction-specific</li>
                    <li><strong>Use Quality Tools:</strong> Invest in reliable testing equipment</li>
                    <li><strong>Follow Standards:</strong> Test to appropriate TIA/EIA categories</li>
                    <li><strong>Regular Testing:</strong> Periodic testing prevents surprises</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know the difference between basic testers and certifiers</li>
                    <li>Understand that TDR can locate exact fault distances</li>
                    <li>Remember the 100-meter distance limitation for copper</li>
                    <li>Split pairs are wiring errors that pass basic continuity tests</li>
                    <li>Fiber testing requires optical-specific equipment</li>
                </ul>
            </div>
        </div>
    `,

    "Common Failure Modes": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.4.6: Common Failure Modes</h3>
            <p>Understanding typical cable and interface failure patterns helps network technicians quickly identify and resolve connectivity issues.</p>

            <h4 style="color: #58D4FF;">Physical Cable Failures:</h4>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #EF4444; margin-bottom: 10px;">Open Circuits</h5>
                <p><strong>Description:</strong> Complete break in one or more conductors</p>
                <p><strong>Causes:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Cable cut or crushed</li>
                    <li>Connector wire pulled out of crimp</li>
                    <li>Corrosion breaking conductor</li>
                    <li>Excessive bending causing wire fracture</li>
                </ul>
                <p><strong>Symptoms:</strong> Complete link failure, "down/down" interface status</p>
                <p><strong>Detection:</strong> Basic continuity test, TDR shows infinite resistance</p>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #F59E0B; margin-bottom: 10px;">Short Circuits</h5>
                <p><strong>Description:</strong> Unintended connection between conductors</p>
                <p><strong>Causes:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Crushed cable shorting adjacent wires</li>
                    <li>Water ingress causing conductive path</li>
                    <li>Poor connector crimping</li>
                    <li>Staple or nail penetrating cable</li>
                </ul>
                <p><strong>Symptoms:</strong> Intermittent connectivity, high error rates</p>
                <p><strong>Detection:</strong> Resistance measurement shows low resistance between pairs</p>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #8B5CF6; margin-bottom: 10px;">Split Pairs</h5>
                <p><strong>Description:</strong> Correct connectivity but wrong wire pairing</p>
                <p><strong>Example:</strong> Pin 1 connected to pin 1, pin 2 to pin 2, but they're from different pairs</p>
                <p><strong>Problem:</strong> Destroys twist geometry, causing crosstalk and signal integrity issues</p>
                <p><strong>Detection:</strong> Advanced wire mapping or performance testing required</p>
                
                <table style="border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 12px;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 6px; color: #F3F4F6;">Correct (T568B)</th>
                        <th style="border: 1px solid #4B5563; padding: 6px; color: #F3F4F6;">Split Pair Error</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 6px;">1-Orange/White, 2-Orange</td>
                        <td style="border: 1px solid #4B5563; padding: 6px; color: #EF4444;">1-Orange/White, 2-Green</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 6px;">3-Green/White, 6-Green</td>
                        <td style="border: 1px solid #4B5563; padding: 6px; color: #EF4444;">3-Green/White, 6-Orange</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D4FF;">Performance Degradation Issues:</h4>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #10B981; margin-bottom: 10px;">Attenuation (Signal Loss)</h5>
                <p><strong>Description:</strong> Signal strength decreases over distance</p>
                <p><strong>Causes:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Cable length exceeding specifications (>100m for copper)</li>
                    <li>Poor quality cable with high resistance</li>
                    <li>Damaged conductors with increased resistance</li>
                    <li>Multiple connectors adding insertion loss</li>
                </ul>
                <p><strong>Effects:</strong> Reduced link speed, increased error rates</p>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #3B82F6; margin-bottom: 10px;">Crosstalk</h5>
                <p><strong>Description:</strong> Unwanted signal coupling between wire pairs</p>
                <p><strong>Types:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>NEXT (Near-End Crosstalk):</strong> Measured at transmit end</li>
                    <li><strong>FEXT (Far-End Crosstalk):</strong> Measured at receive end</li>
                </ul>
                <p><strong>Causes:</strong> Untwisted pairs, split pairs, damaged cable, EMI</p>
            </div>

            <h4 style="color: #58D4FF;">Environmental Failures:</h4>
            
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Environmental Factor</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Effects</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Prevention</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Temperature</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Conductor expansion/contraction</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Proper cable rating</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Moisture</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Corrosion, shorts</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Waterproof connectors</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">UV Light</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Jacket degradation</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">UV-rated cable</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Rodents</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Chewed cables</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Conduit protection</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Interface Hardware Failures:</h4>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <p><strong>Common Interface Problems:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Transceiver Failure:</strong> SFP/SFP+ modules failing</li>
                    <li><strong>Port Damage:</strong> Physical damage to RJ45 jacks</li>
                    <li><strong>Power Issues:</strong> PoE delivery problems</li>
                    <li><strong>Driver Problems:</strong> Software/firmware issues</li>
                </ul>
                
                <p><strong>Troubleshooting Steps:</strong></p>
                <ol style="margin-left: 20px; color: #B0B0B0;">
                    <li>Test with known good cable</li>
                    <li>Try different interface ports</li>
                    <li>Swap transceivers if using fiber</li>
                    <li>Check for loose connections</li>
                    <li>Verify power delivery for PoE devices</li>
                </ol>
            </div>

            <h4 style="color: #58D4FF;">Systematic Troubleshooting Approach:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Start with interface status</span><br>
                Switch# <span style="color: #DCDCAA;">show interface gi0/1 status</span><br>
                Port      Name               Status       Vlan       Duplex  Speed Type<br>
                Gi0/1                        <span style="color: #EF4444;">notconnect</span>   1            auto   auto 10/100/1000BaseTX<br><br>
                
                <span style="color: #6A9955;">! Check for errors</span><br>
                Switch# <span style="color: #DCDCAA;">show interface gi0/1 | include (error|drop|collision)</span><br>
                <span style="color: #EF4444;">147 input errors, 147 CRC, 0 frame, 0 overrun, 0 ignored</span><br>
                <span style="color: #EF4444;">25 output errors, 1247 collisions, 1 interface resets</span><br>
                <span style="color: #EF4444;">78 late collisions, 0 deferred, 0 lost carrier, 0 no carrier</span><br><br>
                
                <span style="color: #6A9955;">! Test with different cable</span><br>
                <span style="color: #6A9955;">! Move to different port</span><br>
                <span style="color: #6A9955;">! Use cable tester if available</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Split pairs pass basic connectivity tests but cause performance issues</li>
                    <li>Excessive cable length causes attenuation problems</li>
                    <li>Environmental factors can cause intermittent issues</li>
                    <li>Systematic troubleshooting starts with interface status</li>
                    <li>Replace components one at a time to isolate failures</li>
                </ul>
            </div>
        </div>
    `,
    
    // 1.5 Compare TCP to UDP
    "TCP Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.5.1: TCP Fundamentals</h3>
            <p>Transmission Control Protocol (TCP) is a connection-oriented, reliable transport layer protocol that ensures data integrity and ordered delivery.</p>

            <h4 style="color: #AF7AC5;">Three-Way Handshake:</h4>
            <p>TCP establishes connections using a three-step process:</p>
            <ol style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>SYN:</strong> Client sends synchronization request with initial sequence number</li>
                <li><strong>SYN-ACK:</strong> Server acknowledges and sends its own sequence number</li>
                <li><strong>ACK:</strong> Client acknowledges server's sequence number</li>
            </ol>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Client                    Server<br>
                  |                         |<br>
                  |<span style="color: #9B59B6;">--- SYN (seq=100) ---></span>|<br>
                  |<span style="color: #AF7AC5;"><-- SYN-ACK (seq=200, ack=101) --</span>|<br>
                  |<span style="color: #9B59B6;">--- ACK (ack=201) ---></span>|<br>
                  |                         |<br>
                  |<span style="color: #16A34A;">    Connection Established</span>    |
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>TCP is connection-oriented and reliable</li>
                    <li>Three-way handshake establishes connections</li>
                    <li>Sequence numbers ensure ordered delivery</li>
                    <li>Used for applications requiring reliability (HTTP, FTP, SSH)</li>
                </ul>
            </div>
        </div>
    `,

    "UDP Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #AF7AC5; border-bottom: 2px solid #AF7AC5; padding-bottom: 5px;">1.5.2: UDP Fundamentals</h3>
            <p>User Datagram Protocol (UDP) is a connectionless, best-effort transport protocol optimized for speed and efficiency.</p>

            <h4 style="color: #C4B5FD;">Connectionless Operation:</h4>
            <p>UDP sends data without establishing a connection:</p>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>No handshake:</strong> Data sent immediately without setup</li>
                <li><strong>No connection state:</strong> Each packet treated independently</li>
                <li><strong>Fire and forget:</strong> No confirmation of delivery</li>
                <li><strong>Minimal overhead:</strong> Only 8-byte header</li>
            </ul>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 10px;">UDP Header (8 bytes):</h5>
                <code style="color: #9CDCFE;">
                0                   1                   2                   3<br>
                0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |     <span style="color: #AF7AC5;">Source Port</span>          |     <span style="color: #AF7AC5;">Destination Port</span>   |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |       <span style="color: #C4B5FD;">Length</span>            |      <span style="color: #C4B5FD;">Checksum</span>          |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |                    <span style="color: #16A34A;">Data ...</span>                          |<br>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>UDP is connectionless and unreliable</li>
                    <li>Simple 8-byte header vs TCP's 20+ bytes</li>
                    <li>No flow control or error recovery</li>
                    <li>Used for real-time applications (VoIP, gaming, DNS)</li>
                </ul>
            </div>
        </div>
    `,

    "TCP Header Analysis": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.5.4: TCP Header Analysis</h3>
            <p>The TCP header contains multiple fields that enable reliable, ordered data delivery and flow control.</p>

            <h4 style="color: #F5B041;">Key TCP Header Fields:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Sequence Number (32 bits):</strong> Identifies data position in stream</li>
                <li><strong>Acknowledgment Number (32 bits):</strong> Next expected sequence number</li>
                <li><strong>Window Size (16 bits):</strong> Flow control - amount of data receiver can accept</li>
                <li><strong>Flags (9 bits):</strong> Control connection state (SYN, ACK, FIN, RST, PSH, URG)</li>
                <li><strong>Checksum (16 bits):</strong> Error detection for header and data</li>
            </ul>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                TCP Header Format (20+ bytes minimum):<br><br>
                0                   1                   2                   3<br>
                0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |     <span style="color: #F39C12;">Source Port</span>          |     <span style="color: #F39C12;">Destination Port</span>   |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |                    <span style="color: #F5B041;">Sequence Number</span>                   |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |                 <span style="color: #F5B041;">Acknowledgment Number</span>                |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                | <span style="color: #FED7AA;">Hdr</span> |<span style="color: #FED7AA;">Res</span>| <span style="color: #16A34A;">Flags</span> |          <span style="color: #3B82F6;">Window Size</span>           |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |      <span style="color: #EF4444;">Checksum</span>            |      <span style="color: #8B5CF6;">Urgent Pointer</span>      |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |                   <span style="color: #10B981;">Options and Data</span>                   |<br>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Sequence and acknowledgment numbers ensure reliable delivery</li>
                    <li>Window size provides flow control mechanism</li>
                    <li>TCP flags control connection establishment and teardown</li>
                    <li>Minimum header size is 20 bytes (vs UDP's 8 bytes)</li>
                </ul>
            </div>
        </div>
    `,

    "UDP Header Analysis": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.5.5: UDP Header Analysis</h3>
            <p>UDP's simple header design prioritizes speed and efficiency over reliability and features.</p>

            <h4 style="color: #EC7063;">UDP Header Fields (8 bytes total):</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Source Port (16 bits):</strong> Sending application's port number</li>
                <li><strong>Destination Port (16 bits):</strong> Receiving application's port number</li>
                <li><strong>Length (16 bits):</strong> Total UDP datagram length (header + data)</li>
                <li><strong>Checksum (16 bits):</strong> Optional error detection (can be zero)</li>
            </ul>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                UDP Header (8 bytes only):<br><br>
                0                   1                   2                   3<br>
                0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |     <span style="color: #E74C3C;">Source Port</span>          |     <span style="color: #E74C3C;">Destination Port</span>   |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |       <span style="color: #EC7063;">Length</span>            |      <span style="color: #EC7063;">Checksum</span>          |<br>
                +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+<br>
                |                    <span style="color: #16A34A;">Data ...</span>                          |<br>
                </code>
            </div>

            <h4 style="color: #EC7063;">Simplicity Benefits:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Minimal Processing:</strong> Less CPU overhead than TCP</li>
                <li><strong>Lower Latency:</strong> No connection setup delay</li>
                <li><strong>Smaller Packets:</strong> Less bandwidth consumed by headers</li>
                <li><strong>Stateless:</strong> No connection tracking required</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>UDP header is only 8 bytes vs TCP's minimum 20 bytes</li>
                    <li>No sequence numbers or acknowledgments</li>
                    <li>Checksum is optional and can be disabled</li>
                    <li>Length field includes both header and data</li>
                </ul>
            </div>
        </div>
    `,

    "Protocol Applications": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.5.6: Protocol Applications</h3>
            <p>Understanding which applications use TCP vs UDP helps in network design and troubleshooting.</p>

            <h4 style="color: #AF7AC5;">TCP Applications (Reliability Required):</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Application</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Port</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Why TCP?</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">HTTP/HTTPS</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">80/443</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Complete web pages required</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">FTP</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">20/21</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">File integrity critical</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">SMTP/POP3</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">25/110</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Email delivery must be reliable</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">UDP Applications (Speed Required):</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Application</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Port</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Why UDP?</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">DNS</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">53</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Fast lookups, retry if needed</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">DHCP</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">67/68</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Simple request/response</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">VoIP (RTP)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Variable</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Real-time, retransmission useless</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know common TCP and UDP port numbers</li>
                    <li>Understand why certain apps choose TCP or UDP</li>
                    <li>Real-time applications typically use UDP</li>
                    <li>Data integrity applications use TCP</li>
                </ul>
            </div>
        </div>
    `,

    "Performance Comparison": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.5.7: Performance Comparison</h3>
            <p>TCP and UDP represent different approaches to data transport, each optimized for specific requirements.</p>

            <h4 style="color: #58D4FF;">Performance Metrics Comparison:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Metric</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #9B59B6;">TCP</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #AF7AC5;">UDP</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;"><strong>Latency</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Higher (connection setup)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Lower (immediate send)</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;"><strong>Throughput</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Optimized with windowing</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Raw line speed</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;"><strong>CPU Usage</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Higher (state tracking)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Lower (stateless)</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;"><strong>Memory Usage</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Higher (buffers, state)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Lower (no state)</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">When to Choose Each Protocol:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #9B59B6; margin-bottom: 10px;">Choose TCP When:</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Data integrity is critical (file transfers, web pages)</li>
                    <li>Ordered delivery is required (streaming video)</li>
                    <li>Error recovery is needed (database connections)</li>
                    <li>Flow control prevents buffer overrun</li>
                </ul>
            </div>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #AF7AC5; margin-bottom: 10px;">Choose UDP When:</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Speed is more important than reliability (gaming)</li>
                    <li>Real-time communication (VoIP, video calls)</li>
                    <li>Simple request/response (DNS lookups)</li>
                    <li>Multicast or broadcast needed</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>TCP provides reliability at the cost of performance overhead</li>
                    <li>UDP provides speed at the cost of reliability guarantees</li>
                    <li>Application requirements determine protocol choice</li>
                    <li>Modern networks often use both protocols simultaneously</li>
                </ul>
            </div>
        </div>
    `,

    "TCP Sliding Window": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.5.8: TCP Sliding Window</h3>
            <p>The TCP sliding window mechanism provides flow control by allowing the receiver to control the rate of data transmission, preventing buffer overrun and optimizing network performance.</p>

            <h4 style="color: #AF7AC5;">Window Mechanism Overview:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Component</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Function</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Impact</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Window Size</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Amount of data sender can transmit</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Controls transmission rate</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Window Advertisement</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Receiver announces available buffer space</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Prevents buffer overflow</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Window Sliding</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Window moves forward as ACKs received</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Enables continuous data flow</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Zero Window</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Receiver buffer full, stop transmission</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Pauses data flow</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">Window States and Buffer Management:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Sender Buffer State</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Description</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Action</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #dc2626;">Sent & ACKed</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Data transmitted and acknowledged</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Buffer space can be reused</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #f59e0b;">Sent & Waiting</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Data transmitted, awaiting ACK</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Monitor for retransmission</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #22c55e;">Can Send</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Within advertised window</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Ready for transmission</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #6b7280;">Future Data</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Beyond current window</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Wait for window to advance</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #AF7AC5;">Dynamic Window Adjustment:</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Window Operation Example</span>
<span style="color: #DCDCAA;">Initial State:</span>
  Window Size: 8192 bytes
  Available Buffer: 8192 bytes
  
<span style="color: #DCDCAA;">Step 1 - Send Data:</span>
  Transmit: 4096 bytes (MSS limit)
  Window Remaining: 4096 bytes
  
<span style="color: #DCDCAA;">Step 2 - Receive ACK + Window Update:</span>
  ACK Received: Sequence + 4096
  New Window: 6144 bytes (receiver processed 2048)
  
<span style="color: #DCDCAA;">Step 3 - Window Slides:</span>
  Can Send: 6144 bytes
  Previous Data: Cleared from buffer
</code>
            </pre>

            <h4 style="color: #AF7AC5;">Flow Control Scenarios:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Scenario</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Window Size</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Behavior</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Result</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Fast Receiver</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Large (32KB+)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Rapid data consumption</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">High throughput</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Slow Receiver</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Small (1-4KB)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Limited processing capacity</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Throttled transmission</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Buffer Full</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Zero (0)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">No available buffer space</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Transmission stopped</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Window Probe</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #3b82f6;">Probe (1 byte)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Check if window reopened</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #3b82f6;">Prevent deadlock</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #AF7AC5;">Window Scale Option (RFC 7323):</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Window Scaling:</strong> Multiplier to extend maximum window size beyond 65,535 bytes</li>
                <li><strong>High-Speed Networks:</strong> Essential for optimal bandwidth utilization on fast links</li>
                <li><strong>Bandwidth-Delay Product:</strong> Window size should match network capacity</li>
                <li><strong>Negotiation:</strong> Both endpoints must support window scaling during handshake</li>
            </ul>

            <h4 style="color: #AF7AC5;">Practical Window Sizing:</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Optimal Window Size Calculation</span>
<span style="color: #DCDCAA;">Bandwidth-Delay Product (BDP):</span>
  Link Speed: 100 Mbps
  Round-Trip Time: 50ms
  
<span style="color: #DCDCAA;">BDP Calculation:</span>
  BDP = (100 Mbps × 50ms) / 8 = 625,000 bytes
  Optimal Window = 625 KB minimum
  
<span style="color: #6A9955;"># Window Scaling for Large BDP</span>
<span style="color: #DCDCAA;">With Window Scaling:</span>
  Scale Factor: 8 (multiply by 256)
  Max Window: 65,535 × 256 = 16.7 MB
</code>
            </pre>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>TCP sliding window provides flow control to prevent buffer overflow</li>
                    <li>Receiver advertises available buffer space in every ACK</li>
                    <li>Window size dynamically adjusts based on receiver processing speed</li>
                    <li>Zero window stops transmission until buffer space becomes available</li>
                    <li>Window scaling extends maximum window size for high-speed networks</li>
                    <li>Optimal window size equals bandwidth-delay product for maximum throughput</li>
                </ul>
            </div>
        </div>
    `,

    // 1.6 IPv4 & Subnetting
    "IPv4 & Subnetting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">1.6: IPv4 & Subnetting</h3>
             <p>Subnetting is the process of dividing a large network into smaller sub-networks.</p>
             <h4 style="color: #5DADE2;">Finding Your Way in a Subnet</h4>
             <p>Given an IP <code>192.168.10.70</code> with mask <code>255.255.255.224</code> (/27):</p>
             <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Block Size:</strong> 256 - 224 = 32. Networks are .0, .32, .64, .96 etc.</li>
                <li><strong>Network Address:</strong> 70 falls in the .64 network. So, <code>192.168.10.64</code>.</li>
                <li><strong>Broadcast Address:</strong> The address right before the next network (.96) is <code>192.168.10.95</code>.</li>
                <li><strong>First Usable Host:</strong> .64 + 1 = <code>192.168.10.65</code>.</li>
                <li><strong>Last Usable Host:</strong> .95 - 1 = <code>192.168.10.94</code>.</li>
             </ul>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html" target="_blank" style="color: #66B2FF;">Read: IP Addressing and Subnetting for New Users</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=sI0foOK9d-A" target="_blank" style="color: #66B2FF;">Watch: IPv4 Subnetting for Beginners (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    "VLSM": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.6.2: Variable Length Subnet Masking (VLSM)</h3>
            <p>VLSM allows different subnet sizes within the same network, maximizing IP address efficiency by allocating exactly what each segment needs.</p>

            <h4 style="color: #58D68D;">VLSM Design Principles:</h4>
            <p>Start with the largest subnet requirement and work down to the smallest. This prevents address overlap and ensures efficient allocation.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #16A34A; margin-bottom: 10px;">VLSM Example: 192.168.1.0/24 Network</h5>
                <code style="color: #9CDCFE;">
                <strong>Requirements:</strong><br>
                • Subnet A: 60 hosts (Sales Department)<br>
                • Subnet B: 28 hosts (Engineering)<br>
                • Subnet C: 12 hosts (Management)<br>
                • Subnet D: 2 hosts (Point-to-Point Link)<br><br>

                <strong>VLSM Allocation:</strong><br>
                <span style="color: #16A34A;">192.168.1.0/26</span>   - 62 hosts (Sales)<br>
                <span style="color: #3B82F6;">192.168.1.64/27</span>  - 30 hosts (Engineering)<br>
                <span style="color: #F59E0B;">192.168.1.96/28</span>  - 14 hosts (Management)<br>
                <span style="color: #8B5CF6;">192.168.1.112/30</span> - 2 hosts (P2P Link)<br>
                <span style="color: #9CA3AF;">192.168.1.116/30</span> - Available for future use
                </code>
            </div>

            <h4 style="color: #58D68D;">VLSM vs Fixed Subnetting:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Method</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Address Efficiency</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Complexity</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Best Use</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Fixed Subnetting</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Low</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Simple</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Uniform requirements</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">VLSM</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">High</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Moderate</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Varying requirements</td>
                </tr>
            </table>

            <h4 style="color: #58D68D;">VLSM Configuration Commands:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip address 192.168.1.1 255.255.255.192</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/2</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip address 192.168.1.65 255.255.255.224</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                <span style="color: #6A9955;">! Verify VLSM configuration</span><br>
                Router# <span style="color: #DCDCAA;">show ip interface brief</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>VLSM maximizes IP address utilization in networks with varying subnet sizes</li>
                    <li>Always start with the largest subnet requirement and work down</li>
                    <li>Each subnet must have a unique network address with no overlap</li>
                    <li>VLSM requires classless routing protocols (OSPF, EIGRP) for advertisement</li>
                </ul>
            </div>
        </div>
    `,

    "CIDR Notation": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.6.3: CIDR Notation & Route Summarization</h3>
            <p>Classless Inter-Domain Routing (CIDR) uses prefix notation (/x) to represent subnet masks and enables efficient route summarization.</p>

            <h4 style="color: #F5B041;">CIDR Prefix Notation:</h4>
            <p>The /x notation represents the number of consecutive 1 bits in the subnet mask, making it easier to understand and calculate subnets.</p>

            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">CIDR</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Subnet Mask</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Hosts per Subnet</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Subnets Available</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">/24</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">255.255.255.0</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">254</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">/25</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">255.255.255.128</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">126</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">/26</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">255.255.255.192</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">62</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">4</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">/27</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">255.255.255.224</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">30</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">8</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">/30</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">255.255.255.252</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">64</td>
                </tr>
            </table>

            <h4 style="color: #F5B041;">Route Summarization (Supernetting):</h4>
            <p>Combining multiple networks into a single route advertisement to reduce routing table size and improve efficiency.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #F59E0B; margin-bottom: 10px;">Summarization Example:</h5>
                <code style="color: #9CDCFE;">
                <strong>Individual Networks:</strong><br>
                192.168.1.0/24<br>
                192.168.2.0/24<br>
                192.168.3.0/24<br>
                192.168.4.0/24<br><br>

                <strong>Binary Analysis:</strong><br>
                192.168.1.0 = 11000000.10101000.00000001.00000000<br>
                192.168.2.0 = 11000000.10101000.00000010.00000000<br>
                192.168.3.0 = 11000000.10101000.00000011.00000000<br>
                192.168.4.0 = 11000000.10101000.00000100.00000000<br><br>

                <strong>Summary Route:</strong> <span style="color: #16A34A;">192.168.0.0/22</span><br>
                <span style="color: #6A9955;">! Covers 192.168.0.0 through 192.168.3.255</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">CIDR Benefits:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Routing Table Reduction:</strong> Fewer routes to maintain and advertise</li>
                <li><strong>Faster Convergence:</strong> Less routing information to process</li>
                <li><strong>Bandwidth Conservation:</strong> Smaller routing updates</li>
                <li><strong>Scalability:</strong> Internet-scale routing made possible</li>
            </ul>

            <h4 style="color: #F5B041;">Summarization Configuration:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! OSPF Area Border Router (ABR) summarization</span><br>
                Router(config)# <span style="color: #DCDCAA;">router ospf 1</span><br>
                Router(config-router)# <span style="color: #9CDCFE;">area 1 range 192.168.0.0 255.255.252.0</span><br><br>
                
                <span style="color: #6A9955;">! EIGRP summarization</span><br>
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip summary-address eigrp 100 192.168.0.0 255.255.252.0</span><br><br>
                
                <span style="color: #6A9955;">! Verify summarization</span><br>
                Router# <span style="color: #DCDCAA;">show ip route summary</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>CIDR notation (/x) represents consecutive 1 bits in subnet mask</li>
                    <li>Route summarization reduces routing table size and improves performance</li>
                    <li>Summary routes must encompass all intended networks without including unintended ones</li>
                    <li>Binary conversion skills are essential for calculating proper summary routes</li>
                </ul>
            </div>
        </div>
    `,

    "IPv4 Address Classes": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.6.4: IPv4 Address Classes</h3>
            <p>The original IPv4 addressing scheme divided the address space into classes based on the first octet, each with default subnet masks and specific purposes.</p>

            <h4 style="color: #EC7063;">Classful Address Ranges:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Class</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Range</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Default Mask</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Networks</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Hosts/Network</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #DC2626;"><strong>Class A</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1.0.0.0 - 126.255.255.255</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">255.0.0.0 (/8)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">126</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">16,777,214</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #2563EB;"><strong>Class B</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">128.0.0.0 - 191.255.255.255</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">255.255.0.0 (/16)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">16,384</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">65,534</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;"><strong>Class C</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">192.0.0.0 - 223.255.255.255</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">255.255.255.0 (/24)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2,097,152</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">254</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;"><strong>Class D</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">224.0.0.0 - 239.255.255.255</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">N/A</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Multicast</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">N/A</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #8B5CF6;"><strong>Class E</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">240.0.0.0 - 255.255.255.255</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">N/A</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Reserved</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">N/A</td>
                </tr>
            </table>

            <h4 style="color: #EC7063;">First Octet Binary Patterns:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #DC2626;">Class A:</span> <strong>0</strong>xxxxxxx (0-127, but 0 and 127 reserved)<br>
                <span style="color: #2563EB;">Class B:</span> <strong>10</strong>xxxxxx (128-191)<br>
                <span style="color: #16A34A;">Class C:</span> <strong>110</strong>xxxxx (192-223)<br>
                <span style="color: #F59E0B;">Class D:</span> <strong>1110</strong>xxxx (224-239)<br>
                <span style="color: #8B5CF6;">Class E:</span> <strong>1111</strong>xxxx (240-255)
                </code>
            </div>

            <h4 style="color: #EC7063;">Special Address Ranges:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>0.0.0.0:</strong> Network address (this network)</li>
                <li><strong>127.0.0.0/8:</strong> Loopback addresses (127.0.0.1 most common)</li>
                <li><strong>255.255.255.255:</strong> Limited broadcast address</li>
            </ul>

            <p style="color: #B0B0B0; font-style: italic; margin: 15px 0;">
                <strong>Note:</strong> For detailed information about private IP addressing (RFC 1918 ranges) and APIPA (169.254.0.0/16), see Section 1.7 - Private IPv4 Addressing.
            </p>

            <h4 style="color: #EC7063;">Classful vs Classless Addressing:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <p><strong style="color: #EF4444;">Classful Limitations:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Wasteful address allocation (Class B gives 65,534 hosts even if only 300 needed)</li>
                    <li>Limited flexibility in network design</li>
                    <li>Routing protocols couldn't advertise subnet mask</li>
                </ul>
                
                <p><strong style="color: #16A34A;">Classless Solutions:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>CIDR notation allows any prefix length</li>
                    <li>VLSM enables efficient address utilization</li>
                    <li>Modern routing protocols carry subnet mask information</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Memorize Class A, B, C ranges and default subnet masks</li>
                    <li>Understand why classful addressing became obsolete</li>
                    <li>Remember that 127.0.0.0/8 is reserved for loopback</li>
                    <li>Know special address purposes (0.0.0.0, 255.255.255.255)</li>
                    <li>Understand the transition from classful to classless addressing</li>
                </ul>
            </div>
        </div>
    `,

    "Subnet Calculations": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.6.5: Subnet Calculations</h3>
            <p>Master subnet calculations using both binary and decimal methods to quickly determine network, broadcast, and host ranges.</p>

            <h4 style="color: #AF7AC5;">Powers of 2 Reference:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                2^1 = 2    |  2^5 = 32   |  2^9 = 512<br>
                2^2 = 4    |  2^6 = 64   |  2^10 = 1024<br>
                2^3 = 8    |  2^7 = 128  |  2^11 = 2048<br>
                2^4 = 16   |  2^8 = 256  |  2^12 = 4096
                </code>
            </div>

            <h4 style="color: #AF7AC5;">Quick Decimal Method:</h4>
            <p>Use the "magic number" (256 minus the subnet mask octet) to find subnet boundaries.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #9B59B6; margin-bottom: 10px;">Example: 192.168.1.50/27</h5>
                <code style="color: #9CDCFE;">
                <strong>Step 1:</strong> /27 = 255.255.255.224<br>
                <strong>Step 2:</strong> Magic number = 256 - 224 = 32<br>
                <strong>Step 3:</strong> Subnets: 0, 32, 64, 96, 128, 160, 192, 224<br>
                <strong>Step 4:</strong> 50 falls between 32 and 64<br><br>
                
                <span style="color: #16A34A;">Network:</span> 192.168.1.32<br>
                <span style="color: #EF4444;">Broadcast:</span> 192.168.1.63 (next subnet - 1)<br>
                <span style="color: #3B82F6;">First Host:</span> 192.168.1.33<br>
                <span style="color: #F59E0B;">Last Host:</span> 192.168.1.62<br>
                <span style="color: #8B5CF6;">Total Hosts:</span> 30 (2^5 - 2)
                </code>
            </div>

            <h4 style="color: #AF7AC5;">Binary Method (More Precise):</h4>
            <p>Convert to binary for complex subnetting scenarios and verification.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #9B59B6; margin-bottom: 10px;">Example: 172.16.35.78/22</h5>
                <code style="color: #9CDCFE;">
                <strong>IP Address:</strong> 172.16.35.78<br>
                172.16 = 10101100.00010000<br>
                35.78  = 00100011.01001110<br><br>
                
                <strong>Subnet Mask:</strong> /22 = 255.255.252.0<br>
                Binary: 11111111.11111111.11111100.00000000<br><br>
                
                <strong>Network (IP AND Mask):</strong><br>
                10101100.00010000.00100011.01001110<br>
                11111111.11111111.11111100.00000000<br>
                ─────────────────────────────────────<br>
                10101100.00010000.00100000.00000000<br>
                = <span style="color: #16A34A;">172.16.32.0</span><br><br>
                
                <strong>Broadcast (Network OR Wildcard):</strong><br>
                Network:  172.16.32.0<br>
                Wildcard: 0.0.3.255<br>
                = <span style="color: #EF4444;">172.16.35.255</span>
                </code>
            </div>

            <h4 style="color: #AF7AC5;">Subnetting Formulas:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Formula</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Calculation</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Number of Subnets</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2^(borrowed bits)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Total available subnets</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Hosts per Subnet</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2^(host bits) - 2</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Usable host addresses</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Block Size</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">256 - subnet octet</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Spacing between subnets</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">Common Subnetting Scenarios:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #16A34A; margin-bottom: 10px;">Scenario 1: Need 6 subnets from 192.168.1.0/24</h5>
                <code style="color: #9CDCFE;">
                Need 6 subnets → Need 3 bits (2^3 = 8 > 6)<br>
                New mask: /24 + 3 = /27 (255.255.255.224)<br>
                Block size: 256 - 224 = 32<br>
                Subnets: .0, .32, .64, .96, .128, .160, .192, .224
                </code>

                <h5 style="color: #3B82F6; margin-top: 15px; margin-bottom: 10px;">Scenario 2: Need 25 hosts per subnet from 10.1.0.0/16</h5>
                <code style="color: #9CDCFE;">
                Need 25 hosts → Need 5 bits (2^5 - 2 = 30 > 25)<br>
                New mask: /32 - 5 = /27 (255.255.255.224)<br>
                Each subnet provides 30 usable hosts
                </code>
            </div>

            <h4 style="color: #AF7AC5;">Verification Commands:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Verify subnet configuration</span><br>
                Router# <span style="color: #DCDCAA;">show ip interface brief</span><br>
                Router# <span style="color: #DCDCAA;">show ip route</span><br>
                Router# <span style="color: #DCDCAA;">ping [network-address]</span><br>
                Router# <span style="color: #DCDCAA;">ping [broadcast-address]</span><br><br>
                
                <span style="color: #6A9955;">! Test connectivity within subnet</span><br>
                PC> <span style="color: #DCDCAA;">ping [first-host]</span><br>
                PC> <span style="color: #DCDCAA;">ping [last-host]</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Master the "magic number" method for quick decimal calculations</li>
                    <li>Memorize powers of 2 up to 2^12 for instant reference</li>
                    <li>Practice identifying which subnet an IP address belongs to</li>
                    <li>Remember: usable hosts = 2^(host bits) - 2 (subtract network and broadcast)</li>
                    <li>Binary method provides verification and handles complex scenarios</li>
                </ul>
            </div>
        </div>
    `,

    "IPv4 Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.6.6: IPv4 Configuration</h3>
            <p>Configure and verify IPv4 addresses on router and switch interfaces using Cisco IOS commands.</p>

            <h4 style="color: #58D4FF;">Basic Interface Configuration:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Enter global configuration mode</span><br>
                Router> <span style="color: #DCDCAA;">enable</span><br>
                Router# <span style="color: #DCDCAA;">configure terminal</span><br><br>
                
                <span style="color: #6A9955;">! Configure interface IP address</span><br>
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip address 192.168.1.1 255.255.255.0</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br>
                Router(config-if)# <span style="color: #DCDCAA;">exit</span><br><br>
                
                <span style="color: #6A9955;">! Alternative CIDR notation (newer IOS versions)</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip address 192.168.1.1/24</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">Secondary IP Addresses:</h4>
            <p>Add multiple IP addresses to a single interface for network migration or multiple subnets.</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip address 192.168.1.1 255.255.255.0</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip address 10.1.1.1 255.255.255.0 secondary</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                <span style="color: #6A9955;">! Remove secondary address</span><br>
                Router(config-if)# <span style="color: #EF4444;">no ip address 10.1.1.1 255.255.255.0 secondary</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">DHCP vs Static Configuration:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Method</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Advantages</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Disadvantages</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Best Use</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;"><strong>Static</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Predictable, no dependency</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Manual configuration</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Servers, network devices</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;"><strong>DHCP</strong></td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Automatic, centralized</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">DHCP server dependency</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Client devices</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Verification Commands:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Quick interface status</span><br>
                Router# <span style="color: #DCDCAA;">show ip interface brief</span><br>
                Interface          IP-Address      OK? Method Status                Protocol<br>
                GigabitEthernet0/1 192.168.1.1     YES manual <span style="color: #16A34A;">up</span>                    <span style="color: #16A34A;">up</span><br><br>
                
                <span style="color: #6A9955;">! Detailed interface information</span><br>
                Router# <span style="color: #DCDCAA;">show interface gigabitethernet0/1</span><br>
                GigabitEthernet0/1 is <span style="color: #16A34A;">up</span>, line protocol is <span style="color: #16A34A;">up</span><br>
                Internet address is 192.168.1.1/24<br><br>
                
                <span style="color: #6A9955;">! View running configuration</span><br>
                Router# <span style="color: #DCDCAA;">show running-config interface gigabitethernet0/1</span><br>
                interface GigabitEthernet0/1<br>
                 ip address 192.168.1.1 255.255.255.0<br>
                 no shutdown<br><br>
                
                <span style="color: #6A9955;">! Test connectivity</span><br>
                Router# <span style="color: #DCDCAA;">ping 192.168.1.10</span><br>
                Type escape sequence to abort.<br>
                Sending 5, 100-byte ICMP Echos to 192.168.1.10, timeout is 2 seconds:<br>
                <span style="color: #16A34A;">!!!!!</span><br>
                Success rate is 100 percent (5/5)
                </code>
            </div>

            <h4 style="color: #58D4FF;">Interface States and Troubleshooting:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Interface Status</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Line Protocol</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Problem Layer</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Common Causes</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Physical (Layer 1)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Cable, shutdown, power</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Up</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Data Link (Layer 2)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Encapsulation, duplex mismatch</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Up</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Up</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Working</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface operational</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Administratively Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Down</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Configuration</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface shutdown</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Common Configuration Errors:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Incorrect subnet mask:</strong> Device can't communicate outside local subnet</li>
                    <li><strong>IP address conflicts:</strong> Two devices with same IP cause connectivity issues</li>
                    <li><strong>Wrong network:</strong> IP not in intended subnet range</li>
                    <li><strong>Interface shutdown:</strong> Forgetting "no shutdown" command</li>
                    <li><strong>VLAN mismatch:</strong> Switch port in wrong VLAN</li>
                </ul>
            </div>

            <h4 style="color: #58D4FF;">Best Practices:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Documentation:</strong> Keep IP address assignment records</li>
                    <li><strong>Consistency:</strong> Use standard schemes (gateway = .1, DNS = .2, etc.)</li>
                    <li><strong>Testing:</strong> Verify connectivity after configuration changes</li>
                    <li><strong>Security:</strong> Disable unused interfaces</li>
                    <li><strong>Backup:</strong> Save configurations before major changes</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know the interface configuration command sequence by heart</li>
                    <li>Understand interface status meanings (up/up, down/down, up/down)</li>
                    <li>Remember that "no shutdown" is required to enable interfaces</li>
                    <li>Use "show ip interface brief" for quick status verification</li>
                    <li>Secondary addresses support multiple subnets on one interface</li>
                </ul>
            </div>
        </div>
    `,
    
    // 1.7 Private IPv4 Addressing
    "Private IPv4": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.7: Private IPv4 Addressing</h3>
            
            <p>Private IPv4 addressing, defined in <strong>RFC 1918</strong>, provides a solution to IPv4 address exhaustion by reserving specific address ranges for use within private networks. These addresses are not routable on the public internet and must be translated using Network Address Translation (NAT) to communicate with external networks.</p>

            <h4 style="color: #58D4FF;">RFC 1918 Private Address Ranges</h4>
            <p>Three address blocks are reserved for private use:</p>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Class A:</strong> <code>10.0.0.0/8</code> (10.0.0.0 - 10.255.255.255) - 16,777,216 addresses</li>
                <li><strong>Class B:</strong> <code>172.16.0.0/12</code> (172.16.0.0 - 172.31.255.255) - 1,048,576 addresses</li>
                <li><strong>Class C:</strong> <code>192.168.0.0/16</code> (192.168.0.0 - 192.168.255.255) - 65,536 addresses</li>
            </ul>

            <h4 style="color: #58D4FF;">Private Network Configuration</h4>
            <p>Basic private network setup on a Cisco router:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip address 192.168.1.1 255.255.255.0</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br>
                Router(config-if)# <span style="color: #6A9955;">! Internal LAN interface</span><br><br>
                
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip address dhcp</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br>
                Router(config-if)# <span style="color: #6A9955;">! Internet-facing interface</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">Network Address Translation (NAT)</h4>
            <p>NAT enables private networks to access the internet by translating private IP addresses to public IP addresses:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                Router(config)# <span style="color: #6A9955;">! Define inside and outside interfaces</span><br>
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip nat inside</span><br><br>
                
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ip nat outside</span><br><br>
                
                Router(config)# <span style="color: #6A9955;">! Configure PAT (Port Address Translation)</span><br>
                Router(config)# <span style="color: #9CDCFE;">access-list 1 permit 192.168.1.0 0.0.0.255</span><br>
                Router(config)# <span style="color: #9CDCFE;">ip nat inside source list 1 interface gi0/1 overload</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">APIPA (Automatic Private IP Addressing)</h4>
            <p>When a DHCP client cannot contact a DHCP server, it may automatically assign itself an address from the <code>169.254.0.0/16</code> range (link-local addressing). This allows limited local network communication but indicates a DHCP connectivity issue.</p>
            
            <p><strong>APIPA Characteristics:</strong></p>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li>Address range: 169.254.1.0 - 169.254.254.255</li>
                <li>Subnet mask: 255.255.0.0 (/16)</li>
                <li>No default gateway assigned</li>
                <li>Communication limited to local subnet only</li>
            </ul>

            <h4 style="color: #58D4FF;">Troubleshooting Private Networks</h4>
            <p>Common commands for diagnosing private network issues:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                Router# <span style="color: #DCDCAA;">show ip nat translations</span><br>
                Router# <span style="color: #DCDCAA;">show ip nat statistics</span><br>
                Router# <span style="color: #DCDCAA;">show ip interface brief</span><br>
                Router# <span style="color: #DCDCAA;">ping 8.8.8.8 source 192.168.1.1</span><br><br>
                
                PC> <span style="color: #DCDCAA;">ipconfig /all</span><br>
                PC> <span style="color: #DCDCAA;">ping 192.168.1.1</span><br>
                PC> <span style="color: #DCDCAA;">nslookup google.com</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">Real-World Applications</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Home Networks:</strong> ISPs typically assign one public IP; private addressing used internally</li>
                <li><strong>Corporate LANs:</strong> Large organizations use 10.0.0.0/8 for extensive internal networks</li>
                <li><strong>Branch Offices:</strong> 192.168.x.0/24 subnets commonly used for smaller locations</li>
                <li><strong>DMZ Networks:</strong> Private addressing with NAT provides security layer</li>
                <li><strong>Cloud Environments:</strong> Virtual Private Clouds (VPCs) use private addressing extensively</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Memorize all three RFC 1918 private address ranges and their CIDR notation</li>
                    <li>Understand NAT/PAT configuration and operation</li>
                    <li>Recognize APIPA addresses (169.254.x.x) as DHCP failure indicators</li>
                    <li>Know that private addresses are not routable on the internet</li>
                    <li>Understand the relationship between private addressing and address conservation</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <ul style="margin-left: 20px;">
                    <li><a href="https://datatracker.ietf.org/doc/html/rfc1918" target="_blank" style="color: #66B2FF;">RFC 1918: Address Allocation for Private Internets</a></li>
                    <li><a href="https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipaddr_nat/configuration/15-mt/iadnat-15-mt-book.html" target="_blank" style="color: #66B2FF;">Cisco NAT Configuration Guide</a></li>
                    <li><a href="https://datatracker.ietf.org/doc/html/rfc3927" target="_blank" style="color: #66B2FF;">RFC 3927: Dynamic Configuration of IPv4 Link-Local Addresses</a></li>
                </ul>
            </div>
        </div>
    `,

    // 1.7 RFC 1918 Private Ranges
    "RFC 1918 Private Ranges": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.7a: RFC 1918 Private Address Ranges</h3>
            
            <p>RFC 1918 defines three blocks of IP addresses reserved for private use, addressing IPv4 address exhaustion by allowing reuse of addresses within private networks.</p>

            <h4 style="color: #58D4FF;">The Three Private Address Classes</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Class</th>
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Address Range</th>
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">CIDR</th>
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Total Addresses</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;"><strong>Class A</strong></td>
                        <td style="padding: 8px;">10.0.0.0 - 10.255.255.255</td>
                        <td style="padding: 8px;"><code>10.0.0.0/8</code></td>
                        <td style="padding: 8px;">16,777,216</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;"><strong>Class B</strong></td>
                        <td style="padding: 8px;">172.16.0.0 - 172.31.255.255</td>
                        <td style="padding: 8px;"><code>172.16.0.0/12</code></td>
                        <td style="padding: 8px;">1,048,576</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>Class C</strong></td>
                        <td style="padding: 8px;">192.168.0.0 - 192.168.255.255</td>
                        <td style="padding: 8px;"><code>192.168.0.0/16</code></td>
                        <td style="padding: 8px;">65,536</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D4FF;">Key Characteristics</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Not Internet Routable:</strong> Cannot be routed across the public internet</li>
                <li><strong>Address Conservation:</strong> Allows multiple organizations to use the same private ranges</li>
                <li><strong>Security Layer:</strong> Provides inherent protection from direct internet access</li>
                <li><strong>NAT Requirement:</strong> Must use NAT/PAT for internet connectivity</li>
            </ul>

            <h4 style="color: #58D4FF;">Subnet Planning Examples</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;">! Large Enterprise (Class A)</span><br>
                10.1.0.0/16    <span style="color: #6A9955;">- Corporate HQ (65,534 hosts)</span><br>
                10.2.0.0/16    <span style="color: #6A9955;">- Branch Office 1</span><br>
                10.3.0.0/16    <span style="color: #6A9955;">- Branch Office 2</span><br><br>
                
                <span style="color: #6A9955;">! Medium Business (Class B)</span><br>
                172.16.1.0/24  <span style="color: #6A9955;">- Management VLAN (254 hosts)</span><br>
                172.16.2.0/24  <span style="color: #6A9955;">- User VLAN</span><br>
                172.16.3.0/24  <span style="color: #6A9955;">- Server VLAN</span><br><br>
                
                <span style="color: #6A9955;">! Small Office (Class C)</span><br>
                192.168.1.0/24 <span style="color: #6A9955;">- Main LAN (254 hosts)</span><br>
                192.168.2.0/24 <span style="color: #6A9955;">- Guest WiFi</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Memorize all three RFC 1918 ranges with exact CIDR notation</li>
                    <li>Understand why private addresses cannot be routed on the internet</li>
                    <li>Know the total number of addresses in each class</li>
                    <li>Recognize valid/invalid private IP addresses in exam questions</li>
                </ul>
            </div>
        </div>
    `,

    // 1.7 NAT Configuration
    "NAT Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.7b: Network Address Translation Concepts</h3>
            
            <p>NAT enables private networks to access the internet by translating private IP addresses to public IP addresses. This fundamental concept bridges private addressing with internet connectivity.</p>

            <h4 style="color: #58D4FF;">Why NAT is Necessary</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>IPv4 Address Scarcity:</strong> Not enough public IPv4 addresses for all devices</li>
                <li><strong>Private Network Security:</strong> Hides internal network structure from outside</li>
                <li><strong>Cost Savings:</strong> Organizations can use one or few public IPs for many internal devices</li>
                <li><strong>Network Management:</strong> Allows internal address changes without affecting external connectivity</li>
            </ul>

            <h4 style="color: #58D4FF;">Types of NAT</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Static NAT:</strong> One-to-one permanent mapping between private and public IP addresses</li>
                    <li><strong>Dynamic NAT:</strong> Pool of public IPs assigned dynamically to private IPs</li>
                    <li><strong>PAT (NAT Overload):</strong> Many private IPs share one public IP using port numbers</li>
                </ul>
            </div>

            <h4 style="color: #58D4FF;">Basic NAT Operation</h4>
            <p style="color: #B0B0B0;">1. <strong>Outbound Traffic:</strong> Router replaces private source IP with public IP</p>
            <p style="color: #B0B0B0;">2. <strong>Translation Table:</strong> Router maintains mapping of private to public addresses</p>
            <p style="color: #B0B0B0;">3. <strong>Inbound Traffic:</strong> Router uses translation table to forward responses to correct private IP</p>
            <p style="color: #B0B0B0;">4. <strong>Port Tracking (PAT):</strong> Port numbers distinguish between multiple internal hosts</p>

            <h4 style="color: #58D4FF;">NAT Address Terminology</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Term</th>
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Description</th>
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Example</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;"><strong>Inside Local</strong></td>
                        <td style="padding: 8px;">Actual private IP address</td>
                        <td style="padding: 8px;">192.168.1.100</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;"><strong>Inside Global</strong></td>
                        <td style="padding: 8px;">Public IP address used for translation</td>
                        <td style="padding: 8px;">203.0.113.10</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>Outside Global</strong></td>
                        <td style="padding: 8px;">Destination address on internet</td>
                        <td style="padding: 8px;">8.8.8.8</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D4FF;">Real-World NAT Applications</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Home Routers:</strong> Single public IP shared by all home devices via PAT</li>
                <li><strong>Corporate Networks:</strong> Pool of public IPs for employee internet access</li>
                <li><strong>Server Publishing:</strong> Static NAT allows external access to internal servers</li>
                <li><strong>DMZ Networks:</strong> NAT provides security layer for public-facing services</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand why NAT is necessary with private addressing</li>
                    <li>Know the difference between Static NAT, Dynamic NAT, and PAT</li>
                    <li>Memorize NAT address terminology (Inside Local/Global, Outside Global)</li>
                    <li>Understand that PAT allows many devices to share one public IP</li>
                    <li>For detailed NAT configuration, see Section 4.1 - IP Services</li>
                </ul>
            </div>
        </div>
    `,

    // 1.7 APIPA & Troubleshooting
    "APIPA & Troubleshooting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.7c: APIPA & Network Troubleshooting</h3>
            
            <p>Automatic Private IP Addressing (APIPA) provides a fallback mechanism when DHCP services are unavailable. Understanding APIPA behavior is crucial for network troubleshooting.</p>

            <h4 style="color: #58D4FF;">APIPA Address Range</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Address Range:</strong> 169.254.1.0 - 169.254.254.255</li>
                    <li><strong>Subnet Mask:</strong> 255.255.0.0 (/16)</li>
                    <li><strong>Default Gateway:</strong> None assigned</li>
                    <li><strong>Communication:</strong> Local subnet only</li>
                    <li><strong>Purpose:</strong> Indicates DHCP failure</li>
                </ul>
            </div>

            <h4 style="color: #58D4FF;">APIPA Behavior Timeline</h4>
            <p style="color: #B0B0B0;">1. <strong>DHCP Request:</strong> Client broadcasts DHCPDISCOVER</p>
            <p style="color: #B0B0B0;">2. <strong>Timeout Period:</strong> No DHCP response after multiple attempts</p>
            <p style="color: #B0B0B0;">3. <strong>APIPA Assignment:</strong> Self-assigns 169.254.x.x address</p>
            <p style="color: #B0B0B0;">4. <strong>Background Retry:</strong> Continues attempting DHCP every 5 minutes</p>

            <h4 style="color: #58D4FF;">Windows DHCP Troubleshooting</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;">REM Check current IP configuration</span><br>
                C:\> <span style="color: #DCDCAA;">ipconfig /all</span><br><br>
                
                <span style="color: #6A9955;">REM Release and renew DHCP lease</span><br>
                C:\> <span style="color: #DCDCAA;">ipconfig /release</span><br>
                C:\> <span style="color: #DCDCAA;">ipconfig /renew</span><br><br>
                
                <span style="color: #6A9955;">REM Flush DNS cache</span><br>
                C:\> <span style="color: #DCDCAA;">ipconfig /flushdns</span><br><br>
                
                <span style="color: #6A9955;">REM Reset TCP/IP stack</span><br>
                C:\> <span style="color: #DCDCAA;">netsh int ip reset</span><br>
                C:\> <span style="color: #DCDCAA;">netsh winsock reset</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">Router DHCP Troubleshooting</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                Router# <span style="color: #DCDCAA;">show ip dhcp binding</span><br>
                Router# <span style="color: #DCDCAA;">show ip dhcp pool</span><br>
                Router# <span style="color: #DCDCAA;">show ip dhcp conflict</span><br>
                Router# <span style="color: #DCDCAA;">show ip dhcp statistics</span><br><br>
                
                <span style="color: #6A9955;">! Debug DHCP operations</span><br>
                Router# <span style="color: #DCDCAA;">debug ip dhcp server events</span><br>
                Router# <span style="color: #DCDCAA;">debug ip dhcp server packet</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">Common Private Network Issues</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Symptom</th>
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Likely Cause</th>
                        <th style="text-align: left; padding: 8px; color: #00A8FF;">Solution</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">169.254.x.x address</td>
                        <td style="padding: 8px;">DHCP server unreachable</td>
                        <td style="padding: 8px;">Check DHCP service/connectivity</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">No internet access</td>
                        <td style="padding: 8px;">NAT not configured</td>
                        <td style="padding: 8px;">Configure NAT/PAT</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Duplicate IP error</td>
                        <td style="padding: 8px;">IP conflict</td>
                        <td style="padding: 8px;">Clear DHCP binding, restart</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D4FF;">Network Connectivity Testing</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;">! Test local connectivity</span><br>
                C:\> <span style="color: #DCDCAA;">ping 192.168.1.1</span><br><br>
                
                <span style="color: #6A9955;">! Test external connectivity</span><br>
                C:\> <span style="color: #DCDCAA;">ping 8.8.8.8</span><br>
                C:\> <span style="color: #DCDCAA;">nslookup google.com</span><br><br>
                
                <span style="color: #6A9955;">! Trace route to destination</span><br>
                C:\> <span style="color: #DCDCAA;">tracert 8.8.8.8</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Recognize 169.254.x.x as APIPA indicating DHCP failure</li>
                    <li>Know APIPA limitations (no default gateway, local subnet only)</li>
                    <li>Understand ipconfig commands for DHCP troubleshooting</li>
                    <li>Use show commands to verify DHCP operation on routers</li>
                </ul>
            </div>
        </div>
    `,

    // 1.8 IPv6 Addressing
    "IPv6 Addressing": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #8E44AD; border-bottom: 2px solid #8E44AD; padding-bottom: 5px;">1.8: IPv6 Addressing & Prefix</h3>
             <p>IPv6 uses a 128-bit address space written in hexadecimal. Key is to remember the two abbreviation rules: 1) Omit leading zeros. 2) Use <code>::</code> once to replace consecutive blocks of zeros.</p>
             <h4 style="color: #A569BD;">Basic IPv6 Interface Configuration:</h4>
             <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
R1(config)# interface GigabitEthernet0/1
R1(config-if)# ipv6 address 2001:DB8:ACAD:1::1/64
R1(config-if)# no shutdown
</code>
</pre>
             <p>The <strong>Prefix</strong> (<code>/64</code>) represents the network portion of the address.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #A569BD; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/ip-version-6-ipv6/113141-config-ipv6-00.html" target="_blank" style="color: #C39BD3;">Read: IPv6 Configuration Guide</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=3QhL2oP6-a4" target="_blank" style="color: #C39BD3;">Watch: Introduction to IPv6 (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    "IPv6 Shortening Rules": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.8.2: IPv6 Address Shortening Rules</h3>
            <p>IPv6 addresses can be simplified using two specific rules to make them more manageable and readable.</p>

            <h4 style="color: #58D68D;">Rule 1: Remove Leading Zeros</h4>
            <p>Leading zeros in any 16-bit group can be omitted, but at least one digit must remain in each group.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Original:</strong> 2001:0db8:0000:0042:0000:8a2e:0370:7334<br>
                <strong>Rule 1:</strong>  2001:db8:0:42:0:8a2e:370:7334
                </code>
            </div>

            <h4 style="color: #58D68D;">Rule 2: Compress Consecutive Zeros (::)</h4>
            <p>The double colon (::) can replace one or more consecutive groups of zeros, but can only be used <strong>once</strong> per address.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>After Rule 1:</strong> 2001:db8:0:42:0:8a2e:370:7334<br>
                <strong>After Rule 2:</strong> 2001:db8:0:42::8a2e:370:7334<br><br>
                
                <span style="color: #6A9955;">! Alternative compression (only one :: allowed)</span><br>
                <strong>Could also be:</strong> 2001:db8::42:0:8a2e:370:7334
                </code>
            </div>

            <h4 style="color: #58D68D;">Common IPv6 Address Examples:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Full Address</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Compressed</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">fe80:0000:0000:0000:0000:0000:0000:0001</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace; color: #16A34A;">fe80::1</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">2001:0db8:0000:0000:0000:0000:0000:0001</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace; color: #16A34A;">2001:db8::1</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">0000:0000:0000:0000:0000:0000:0000:0001</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace; color: #16A34A;">::1 (loopback)</td>
                </tr>
            </table>

            <h4 style="color: #58D68D;">Important Rules to Remember:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Only one :: per address:</strong> Prevents ambiguity in address expansion</li>
                <li><strong>At least one digit required:</strong> Cannot compress a single group to nothing</li>
                <li><strong>Context matters:</strong> Choose compression for maximum readability</li>
                <li><strong>Leading zeros only:</strong> Cannot remove zeros in the middle or end of a group</li>
            </ul>

            <h4 style="color: #58D68D;">Expansion Practice:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Compressed:</strong> 2001:db8::8a2e:370:7334<br><br>
                
                <strong>Expansion Process:</strong><br>
                1. Identify :: location (replaces 0:0:0)<br>
                2. Count existing groups: 2001:db8 + 8a2e:370:7334 = 5 groups<br>
                3. Fill missing groups: 8 - 5 = 3 zero groups<br>
                4. <span style="color: #16A34A;">Result: 2001:db8:0000:0000:0000:8a2e:0370:7334</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Master both compression rules for exam address manipulation</li>
                    <li>Practice expanding compressed addresses back to full form</li>
                    <li>Remember :: can only be used once per address</li>
                    <li>Understand that multiple valid compressions may exist for one address</li>
                </ul>
            </div>
        </div>
    `,

    "IPv6 Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.8.3: IPv6 Configuration</h3>
            <p>Configure IPv6 addressing on Cisco routers using specific commands to enable IPv6 routing and assign addresses to interfaces.</p>

            <h4 style="color: #F5B041;">Global IPv6 Configuration:</h4>
            <p>IPv6 routing must be enabled globally before IPv6 addresses can be configured on interfaces.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Enable IPv6 routing globally</span><br>
                Router(config)# <span style="color: #DCDCAA;">ipv6 unicast-routing</span><br><br>
                
                <span style="color: #6A9955;">! Verify IPv6 is enabled</span><br>
                Router# <span style="color: #DCDCAA;">show ipv6 interface brief</span><br>
                Router# <span style="color: #DCDCAA;">show running-config | include ipv6</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">Interface IPv6 Address Configuration:</h4>
            <p>Configure IPv6 addresses on interfaces using the ipv6 address command with CIDR notation.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Configure Global Unicast Address</span><br>
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 address 2001:db8:acad:1::1/64</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                <span style="color: #6A9955;">! Alternative: Enable IPv6 on interface (auto link-local)</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 enable</span><br><br>
                
                <span style="color: #6A9955;">! Configure Link-Local Address manually</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 address fe80::1 link-local</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">IPv6 Address Types Configuration:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Address Type</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Configuration Command</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Global Unicast</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ipv6 address 2001:db8:1::1/64</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Internet routable</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Unique Local</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ipv6 address fc00:1:1::1/64</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Private network</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Link-Local</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ipv6 address fe80::1 link-local</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Local segment only</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Auto-configure</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ipv6 address autoconfig</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">SLAAC enabled</td>
                </tr>
            </table>

            <h4 style="color: #F5B041;">EUI-64 Configuration:</h4>
            <p>Automatically generate interface ID from MAC address using EUI-64 format.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Configure IPv6 address with EUI-64</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 address 2001:db8:acad:1::/64 eui-64</span><br><br>
                
                <span style="color: #6A9955;">! Result: Interface ID generated from MAC</span><br>
                <span style="color: #6A9955;">! MAC: 0012.7f5a.0001 becomes 0212:7fff:fe5a:0001</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">Multiple IPv6 Addresses:</h4>
            <p>Unlike IPv4, an interface can have multiple IPv6 addresses of different types simultaneously.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 address 2001:db8:acad:1::1/64</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 address 2001:db8:acad:2::1/64</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 address fe80::1 link-local</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                <span style="color: #6A9955;">! All three addresses active simultaneously</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">IPv6 Router Advertisement:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Enable/disable router advertisements</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 nd ra suppress</span><br>
                Router(config-if)# <span style="color: #EF4444;">no ipv6 nd ra suppress</span><br><br>
                
                <span style="color: #6A9955;">! Configure RA parameters</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 nd ra interval 200</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 nd ra lifetime 1800</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>IPv6 unicast-routing must be enabled globally before interface configuration</li>
                    <li>Interfaces can have multiple IPv6 addresses simultaneously</li>
                    <li>Link-local addresses are automatically generated when IPv6 is enabled</li>
                    <li>EUI-64 automatically generates interface ID from MAC address</li>
                    <li>Router advertisements enable SLAAC for connected devices</li>
                </ul>
            </div>
        </div>
    `,

    "SLAAC Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.8.4: SLAAC Configuration</h3>
            <p>Stateless Address Autoconfiguration (SLAAC) allows IPv6 devices to automatically configure their own addresses using Router Advertisements without requiring a DHCPv6 server.</p>

            <h4 style="color: #EC7063;">SLAAC Process Overview:</h4>
            <ol style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Router Advertisement:</strong> Router sends RA messages with network prefix</li>
                <li><strong>Prefix Reception:</strong> Client receives prefix information (e.g., 2001:db8:1::/64)</li>
                <li><strong>Interface ID Generation:</strong> Client creates interface ID (EUI-64 or random)</li>
                <li><strong>Address Formation:</strong> Combines prefix + interface ID = complete address</li>
                <li><strong>Duplicate Address Detection (DAD):</strong> Ensures address uniqueness</li>
            </ol>

            <h4 style="color: #EC7063;">Router Configuration for SLAAC:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Enable IPv6 routing (required for RA)</span><br>
                Router(config)# <span style="color: #DCDCAA;">ipv6 unicast-routing</span><br><br>
                
                <span style="color: #6A9955;">! Configure interface with prefix</span><br>
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 address 2001:db8:acad:1::1/64</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                <span style="color: #6A9955;">! Router Advertisements automatically enabled</span><br>
                <span style="color: #6A9955;">! Clients can now use SLAAC with 2001:db8:acad:1::/64</span>
                </code>
            </div>

            <h4 style="color: #EC7063;">Router Advertisement Parameters:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Parameter</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Command</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Default</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">RA Interval</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ipv6 nd ra interval 200</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">200 seconds</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">How often RAs sent</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">RA Lifetime</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ipv6 nd ra lifetime 1800</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1800 seconds</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Router validity time</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Prefix Lifetime</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ipv6 nd prefix default</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2592000 seconds</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Address validity</td>
                </tr>
            </table>

            <h4 style="color: #EC7063;">SLAAC Flags in Router Advertisement:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! M-Flag (Managed): Use DHCPv6 for address</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 nd managed-config-flag</span><br><br>
                
                <span style="color: #6A9955;">! O-Flag (Other): Use DHCPv6 for other info (DNS, etc.)</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 nd other-config-flag</span><br><br>
                
                <span style="color: #6A9955;">! A-Flag (Autonomous): Use SLAAC (default)</span><br>
                Router(config-if)# <span style="color: #EF4444;">no ipv6 nd prefix default no-autoconfig</span>
                </code>
            </div>

            <h4 style="color: #EC7063;">SLAAC Configuration Modes:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Mode</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">M-Flag</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">O-Flag</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Result</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">SLAAC Only</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">0</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">0</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Get everything from RA</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">SLAAC + DHCPv6</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">0</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">SLAAC address + DHCPv6 options</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">DHCPv6 Only</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">0</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Get address from DHCPv6</td>
                </tr>
            </table>

            <h4 style="color: #EC7063;">Client SLAAC Verification:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Windows client verification</span><br>
                C:\\> <span style="color: #DCDCAA;">ipconfig /all</span><br>
                Ethernet adapter Local Area Connection:<br>
                   IPv6 Address. . . : <span style="color: #16A34A;">2001:db8:acad:1:2e0:f4ff:fe68:b448</span><br>
                   Link-local IPv6 Address : fe80::2e0:f4ff:fe68:b448<br><br>
                
                <span style="color: #6A9955;">! Linux client verification</span><br>
                $ <span style="color: #DCDCAA;">ip -6 addr show</span><br>
                2: eth0: inet6 <span style="color: #16A34A;">2001:db8:acad:1:2e0:f4ff:fe68:b448/64</span> scope global<br>
                   inet6 fe80::2e0:f4ff:fe68:b448/64 scope link
                </code>
            </div>

            <h4 style="color: #EC7063;">Troubleshooting SLAAC:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Verify RA is being sent</span><br>
                Router# <span style="color: #DCDCAA;">debug ipv6 nd</span><br><br>
                
                <span style="color: #6A9955;">! Check interface RA configuration</span><br>
                Router# <span style="color: #DCDCAA;">show ipv6 interface gigabitethernet0/1</span><br>
                GigabitEthernet0/1 is up, line protocol is up<br>
                  IPv6 is enabled, link-local address is FE80::1<br>
                  <span style="color: #16A34A;">ND router advertisements are sent every 200 seconds</span><br><br>
                
                <span style="color: #6A9955;">! Verify clients receiving RA</span><br>
                Client$ <span style="color: #DCDCAA;">ping6 ff02::1</span> <span style="color: #6A9955;"># All-nodes multicast</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>SLAAC requires ipv6 unicast-routing to be enabled on the router</li>
                    <li>Router Advertisements are automatically sent when IPv6 address is configured</li>
                    <li>M-Flag and O-Flag control DHCPv6 interaction with SLAAC</li>
                    <li>Clients automatically configure address using prefix + interface ID</li>
                    <li>Link-local addresses are always configured regardless of SLAAC</li>
                </ul>
            </div>
        </div>
    `,

    "IPv6 Verification": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.8.5: IPv6 Verification</h3>
            <p>Verify IPv6 configuration and connectivity using comprehensive show commands and testing utilities to ensure proper operation.</p>

            <h4 style="color: #58D4FF;">Basic IPv6 Interface Verification:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Quick interface status overview</span><br>
                Router# <span style="color: #DCDCAA;">show ipv6 interface brief</span><br>
                GigabitEthernet0/1     [up/up]<br>
                    FE80::1<br>
                    2001:DB8:ACAD:1::1<br>
                GigabitEthernet0/2     [up/up]<br>
                    FE80::2<br>
                    2001:DB8:ACAD:2::1<br><br>
                
                <span style="color: #6A9955;">! Detailed interface information</span><br>
                Router# <span style="color: #DCDCAA;">show ipv6 interface gigabitethernet0/1</span><br>
                GigabitEthernet0/1 is up, line protocol is up<br>
                  IPv6 is enabled, link-local address is FE80::1<br>
                  No Virtual link-local address(es):<br>
                  Global unicast address(es):<br>
                    <span style="color: #16A34A;">2001:DB8:ACAD:1::1, subnet is 2001:DB8:ACAD:1::/64</span><br>
                  Joined group address(es):<br>
                    FF02::1<br>
                    FF02::2<br>
                    FF02::1:FF00:1<br>
                  MTU is 1500 bytes<br>
                  <span style="color: #F59E0B;">ND router advertisements are sent every 200 seconds</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">IPv6 Routing Table Verification:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                Router# <span style="color: #DCDCAA;">show ipv6 route</span><br>
                IPv6 Routing Table - default - 7 entries<br>
                Codes: C - Connected, L - Local, S - Static, U - Per-user Static route<br><br>
                
                <span style="color: #16A34A;">C   2001:DB8:ACAD:1::/64 [0/0]</span><br>
                     via GigabitEthernet0/1, directly connected<br>
                <span style="color: #3B82F6;">L   2001:DB8:ACAD:1::1/128 [0/0]</span><br>
                     via GigabitEthernet0/1, receive<br>
                <span style="color: #8B5CF6;">L   FE80::/10 [0/0]</span><br>
                     via Null0, receive<br>
                <span style="color: #F59E0B;">L   FF00::/8 [0/0]</span><br>
                     via Null0, receive
                </code>
            </div>

            <h4 style="color: #58D4FF;">IPv6 Connectivity Testing:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Command</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Example</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ping ipv6</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Test IPv6 connectivity</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ping ipv6 2001:db8::1</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">traceroute ipv6</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Trace IPv6 path</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">traceroute ipv6 2001:db8::1</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ping ipv6 ff02::1</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">All-nodes multicast</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">Tests local segment</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">IPv6 Connectivity Test Examples:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Test connectivity to specific IPv6 address</span><br>
                Router# <span style="color: #DCDCAA;">ping ipv6 2001:db8:acad:2::1</span><br>
                Type escape sequence to abort.<br>
                Sending 5, 100-byte ICMP Echos to 2001:DB8:ACAD:2::1, timeout is 2 seconds:<br>
                <span style="color: #16A34A;">!!!!!</span><br>
                Success rate is 100 percent (5/5), round-trip min/avg/max = 1/1/4 ms<br><br>
                
                <span style="color: #6A9955;">! Test local segment (all nodes)</span><br>
                Router# <span style="color: #DCDCAA;">ping ipv6 ff02::1</span><br>
                Output Interface: GigabitEthernet0/1<br>
                Type escape sequence to abort.<br>
                Sending 5, 100-byte ICMP Echos to FF02::1, timeout is 2 seconds:<br>
                Packet sent with a source address of FE80::1<br>
                <span style="color: #16A34A;">!!!!!</span><br>
                Success rate is 100 percent (5/5)
                </code>
            </div>

            <h4 style="color: #58D4FF;">IPv6 Neighbor Discovery Verification:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Show IPv6 neighbor table (like ARP for IPv4)</span><br>
                Router# <span style="color: #DCDCAA;">show ipv6 neighbors</span><br>
                IPv6 Address                              Age Link-layer Addr State Interface<br>
                FE80::2E0:F4FF:FE68:B448                    0 00e0.f468.b448  REACH Gi0/1<br>
                2001:DB8:ACAD:1::2                         12 00e0.f468.b448  STALE Gi0/1<br><br>
                
                <span style="color: #6A9955;">! Clear neighbor cache</span><br>
                Router# <span style="color: #DCDCAA;">clear ipv6 neighbors</span><br><br>
                
                <span style="color: #6A9955;">! Show neighbor discovery debug</span><br>
                Router# <span style="color: #DCDCAA;">debug ipv6 nd</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">IPv6 Configuration Verification:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Verify IPv6 is enabled globally</span><br>
                Router# <span style="color: #DCDCAA;">show running-config | include ipv6 unicast-routing</span><br>
                ipv6 unicast-routing<br><br>
                
                <span style="color: #6A9955;">! Show IPv6 protocols status</span><br>
                Router# <span style="color: #DCDCAA;">show ipv6 protocols</span><br>
                IPv6 Routing Protocol is "connected"<br>
                IPv6 Routing Protocol is "ND"<br><br>
                
                <span style="color: #6A9955;">! Show specific interface configuration</span><br>
                Router# <span style="color: #DCDCAA;">show running-config interface gigabitethernet0/1</span><br>
                interface GigabitEthernet0/1<br>
                 ipv6 address 2001:DB8:ACAD:1::1/64<br>
                 no shutdown
                </code>
            </div>

            <h4 style="color: #58D4FF;">Common IPv6 Troubleshooting Steps:</h4>
            <ol style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Verify Global Configuration:</strong> Check ipv6 unicast-routing is enabled</li>
                <li><strong>Check Interface Status:</strong> Confirm interface is up/up with show ipv6 interface brief</li>
                <li><strong>Verify Addresses:</strong> Ensure both link-local and global addresses are configured</li>
                <li><strong>Test Local Connectivity:</strong> Use ping ipv6 ff02::1 to test local segment</li>
                <li><strong>Check Routing:</strong> Verify IPv6 routes exist with show ipv6 route</li>
                <li><strong>Examine Neighbors:</strong> Use show ipv6 neighbors to verify neighbor discovery</li>
            </ol>

            <h4 style="color: #58D4FF;">IPv6 vs IPv4 Command Comparison:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Function</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">IPv4 Command</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">IPv6 Command</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface Status</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">show ip interface brief</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">show ipv6 interface brief</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Routing Table</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">show ip route</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">show ipv6 route</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Neighbor Table</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">show arp</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">show ipv6 neighbors</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Connectivity Test</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ping 192.168.1.1</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ping ipv6 2001:db8::1</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Use show ipv6 interface brief for quick status verification</li>
                    <li>Remember to specify "ipv6" in ping and traceroute commands</li>
                    <li>IPv6 neighbors replace ARP functionality from IPv4</li>
                    <li>Link-local addresses are required for IPv6 neighbor discovery</li>
                    <li>Multicast ff02::1 tests all nodes on local segment</li>
                </ul>
            </div>
        </div>
    `,
    
    // 1.9 IPv6 Address Types
    "Unicast Addresses": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.9.a: IPv6 Unicast Addresses</h3>
            <p>Unicast addresses provide one-to-one communication between a single source and destination. IPv6 defines three main types of unicast addresses.</p>

            <h4 style="color: #58D68D;">Global Unicast Addresses (GUA)</h4>
            <p>Internet-routable addresses similar to IPv4 public addresses. Currently allocated from the 2000::/3 range.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #16A34A; margin-bottom: 10px;">Global Unicast Structure:</h5>
                <code style="color: #9CDCFE;">
                <strong>Format:</strong> 2000::/3 to 3FFF::/3<br>
                <strong>Example:</strong> 2001:0db8:85a3:0000:0000:8a2e:0370:7334<br><br>
                
                <strong>Structure:</strong><br>
                • <span style="color: #3B82F6;">Global Routing Prefix:</span> /48 (assigned by ISP)<br>
                • <span style="color: #F59E0B;">Subnet ID:</span> /64 (16 bits for subnetting)<br>
                • <span style="color: #EF4444;">Interface ID:</span> /128 (64 bits for host portion)
                </code>
            </div>

            <h4 style="color: #58D68D;">Unique Local Addresses (ULA)</h4>
            <p>Private addresses similar to IPv4 RFC 1918 ranges. Not routable on the global internet but can be routed within an organization.</p>

            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Prefix</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Range</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FC00::/7</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">FC00:: to FDFF::</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Unique Local Unicast</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FD00::/8</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Locally assigned</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Most common ULA usage</td>
                </tr>
            </table>

            <h4 style="color: #58D68D;">Link-Local Addresses (LLA)</h4>
            <p>Automatically configured on every IPv6-enabled interface. Used for local segment communication and neighbor discovery.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Prefix:</strong> FE80::/10<br>
                <strong>Range:</strong> FE80:: to FEBF::<br>
                <strong>Scope:</strong> Link-local only (not routed)<br><br>
                
                <strong>Structure:</strong><br>
                FE80:0000:0000:0000:<span style="color: #16A34A;">Interface-ID</span><br><br>
                
                <strong>Example:</strong> FE80::1 (manually configured)<br>
                <strong>Auto:</strong> FE80::2E0:F4FF:FE68:B448 (EUI-64)
                </code>
            </div>

            <h4 style="color: #58D68D;">Unicast Address Characteristics:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Multiple addresses per interface:</strong> Unlike IPv4, an interface can have multiple IPv6 addresses</li>
                <li><strong>No broadcast:</strong> IPv6 uses multicast instead of broadcast communication</li>
                <li><strong>Mandatory link-local:</strong> Every IPv6 interface must have a link-local address</li>
                <li><strong>Stateless configuration:</strong> Addresses can be auto-configured using SLAAC</li>
            </ul>

            <h4 style="color: #58D68D;">Address Selection Priority:</h4>
            <ol style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Longest prefix match</strong> for destination selection</li>
                <li><strong>Global addresses preferred</strong> over link-local for routing</li>
                <li><strong>Smaller scope preferred</strong> for source address selection</li>
                <li><strong>Manual configuration preferred</strong> over automatic</li>
            </ol>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Remember the three unicast types: Global, Unique Local, Link-Local</li>
                    <li>Know that link-local addresses are mandatory on every IPv6 interface</li>
                    <li>Understand that ULA addresses (FC00::/7) are IPv6's private addresses</li>
                    <li>Global unicast addresses are currently allocated from 2000::/3</li>
                </ul>
            </div>
        </div>
    `,

    "Multicast Addresses": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.9.b: IPv6 Multicast Addresses</h3>
            <p>Multicast addresses enable one-to-many communication, replacing IPv4 broadcast functionality. All multicast addresses begin with FF.</p>

            <h4 style="color: #F5B041;">Multicast Address Structure:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Format:</strong> FF<span style="color: #F59E0B;">0</span><span style="color: #3B82F6;">S</span>:<span style="color: #16A34A;">GGGG</span>:<span style="color: #EF4444;">GGGG</span>:<span style="color: #EF4444;">GGGG</span>:<span style="color: #EF4444;">GGGG</span>:<span style="color: #EF4444;">GGGG</span>:<span style="color: #EF4444;">GGGG</span>:<span style="color: #EF4444;">GGGG</span><br><br>
                
                • <span style="color: #F59E0B;">Flags (4 bits):</span> Reserved, must be 0<br>
                • <span style="color: #3B82F6;">Scope (4 bits):</span> Multicast scope<br>
                • <span style="color: #16A34A;">Group ID (112 bits):</span> Multicast group identifier
                </code>
            </div>

            <h4 style="color: #F5B041;">Multicast Scopes:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Scope</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Value</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Description</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Example</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface-local</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Loopback only</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FF01::</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Link-local</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Local segment</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FF02::</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Site-local</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">5</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Organization</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FF05::</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Global</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">E</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Internet-wide</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FF0E::</td>
                </tr>
            </table>

            <h4 style="color: #F5B041;">Well-Known Multicast Addresses:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong style="color: #16A34A;">FF02::1</strong> - All Nodes Address<br>
                • Reaches all IPv6 devices on local link<br>
                • Equivalent to IPv4 broadcast<br>
                • Used for: Neighbor Discovery, SLAAC<br><br>
                
                <strong style="color: #3B82F6;">FF02::2</strong> - All Routers Address<br>
                • Reaches all routers on local link<br>
                • Used for: Router Discovery, routing protocols<br><br>
                
                <strong style="color: #F59E0B;">FF02::5</strong> - OSPFv3 All SPF Routers<br>
                <strong style="color: #F59E0B;">FF02::6</strong> - OSPFv3 All DR Routers<br><br>
                
                <strong style="color: #8B5CF6;">FF02::9</strong> - RIPng Routers<br>
                <strong style="color: #EF4444;">FF02::A</strong> - EIGRP Routers
                </code>
            </div>

            <h4 style="color: #F5B041;">Solicited-Node Multicast:</h4>
            <p>Special multicast address used for efficient neighbor discovery, avoiding the need to disturb all nodes.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Format:</strong> FF02::1:FF<span style="color: #16A34A;">XX:XXXX</span><br>
                <strong>Purpose:</strong> Neighbor Discovery efficiency<br><br>
                
                <strong>Example:</strong><br>
                IPv6 Address: 2001:db8::8a2e:370:7334<br>
                Last 24 bits: 37:0734<br>
                Solicited-node: <span style="color: #16A34A;">FF02::1:FF37:0734</span><br><br>
                
                <strong>Usage:</strong> Duplicate Address Detection (DAD)
                </code>
            </div>

            <h4 style="color: #F5B041;">Multicast vs Broadcast Comparison:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Aspect</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">IPv4 Broadcast</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">IPv6 Multicast</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Efficiency</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">All devices process</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Only interested devices</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Scope</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Subnet limited</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Configurable scope</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Routing</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Not routed</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Can be routed</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>All multicast addresses start with FF00::/8</li>
                    <li>FF02::1 reaches all nodes on local link (replaces IPv4 broadcast)</li>
                    <li>FF02::2 reaches all routers on local link</li>
                    <li>Solicited-node multicast improves neighbor discovery efficiency</li>
                    <li>Multicast scope determines how far packets can travel</li>
                </ul>
            </div>
        </div>
    `,

    "Anycast Addresses": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.9.c: IPv6 Anycast Addresses</h3>
            <p>Anycast addresses enable one-to-nearest communication where the same address is assigned to multiple devices, and packets are routed to the topologically closest instance.</p>

            <h4 style="color: #EC7063;">Anycast Concepts:</h4>
            <p>An anycast address is assigned to multiple interfaces (on different nodes), but packets sent to an anycast address are delivered to only one interface—the "nearest" one according to the routing protocol's distance measure.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #EF4444; margin-bottom: 10px;">Anycast Characteristics:</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Same address, multiple locations:</strong> Identical address on different devices</li>
                    <li><strong>Routing table based:</strong> "Nearest" determined by routing metrics</li>
                    <li><strong>Transparent to sender:</strong> Client doesn't know it's anycast</li>
                    <li><strong>Load distribution:</strong> Different clients may reach different servers</li>
                    <li><strong>Fault tolerance:</strong> Automatic failover if nearest instance fails</li>
                </ul>
            </div>

            <h4 style="color: #EC7063;">Anycast Address Format:</h4>
            <p>Anycast addresses are allocated from the unicast address space. There's no special format—any unicast address can be configured as anycast.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Address Space:</strong> Taken from unicast ranges<br>
                <strong>Identification:</strong> No special prefix or format<br>
                <strong>Configuration:</strong> Same address on multiple devices<br><br>
                
                <strong>Example Deployment:</strong><br>
                Server A (New York): 2001:db8:100::53<br>
                Server B (London):   2001:db8:100::53<br>
                Server C (Tokyo):    2001:db8:100::53<br><br>
                
                <span style="color: #16A34A;">Client queries 2001:db8:100::53</span><br>
                <span style="color: #3B82F6;">→ Routed to geographically nearest server</span>
                </code>
            </div>

            <h4 style="color: #EC7063;">Common Anycast Use Cases:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Service</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Benefit</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Example</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">DNS Servers</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Reduced latency</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Root DNS servers</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">CDN Services</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Content delivery</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Web acceleration</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Load Balancing</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Automatic distribution</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Web servers</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Redundancy</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Automatic failover</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Critical services</td>
                </tr>
            </table>

            <h4 style="color: #EC7063;">Subnet-Router Anycast Address:</h4>
            <p>A special anycast address defined in RFC 4291 that represents all routers on a subnet.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Format:</strong> Subnet prefix + all zeros in interface ID<br>
                <strong>Purpose:</strong> Reach any router on the subnet<br><br>
                
                <strong>Example:</strong><br>
                Subnet: 2001:db8:1:2::/64<br>
                Subnet-Router Anycast: <span style="color: #16A34A;">2001:db8:1:2::</span><br><br>
                
                <strong>Usage:</strong> Mobile IPv6, network management
                </code>
            </div>

            <h4 style="color: #EC7063;">Anycast Routing Behavior:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <p><strong style="color: #F59E0B;">Route Advertisement:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Each anycast instance advertises the same route</li>
                    <li>Routing protocol selects best path to "nearest" instance</li>
                    <li>Automatic convergence if instance becomes unavailable</li>
                </ul>
                
                <p><strong style="color: #F59E0B;">Client Perspective:</strong></p>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Appears as normal unicast communication</li>
                    <li>May reach different servers over time</li>
                    <li>Session persistence not guaranteed</li>
                </ul>
            </div>

            <h4 style="color: #EC7063;">Anycast Limitations:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>No return path guarantee:</strong> Response may take different path</li>
                <li><strong>Session issues:</strong> TCP connections may break if routing changes</li>
                <li><strong>Geographic accuracy:</strong> "Nearest" is routing-metric based, not geographic</li>
                <li><strong>Load distribution:</strong> Traffic split depends on client locations</li>
            </ul>

            <h4 style="color: #EC7063;">Anycast vs Other Address Types:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Type</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Communication</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Delivery</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Use Case</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Unicast</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">One-to-one</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Specific host</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Normal communication</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Anycast</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">One-to-nearest</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Closest instance</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Load balancing, CDN</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Multicast</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">One-to-many</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">All group members</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Streaming, updates</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Anycast uses unicast address space—no special prefix</li>
                    <li>Same address configured on multiple devices for redundancy</li>
                    <li>Routing protocols determine "nearest" instance</li>
                    <li>Commonly used for DNS servers and CDN services</li>
                    <li>Subnet-router anycast address represents all routers on subnet</li>
                </ul>
            </div>
        </div>
    `,

    "Special Addresses": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.9.d: IPv6 Special Addresses</h3>
            <p>IPv6 defines several special addresses for specific functions, including loopback, unspecified, and transition mechanisms.</p>

            <h4 style="color: #AF7AC5;">Loopback Address (::1)</h4>
            <p>IPv6 equivalent of IPv4's 127.0.0.1, used for local testing and communication within the same device.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Address:</strong> ::1/128<br>
                <strong>Full form:</strong> 0000:0000:0000:0000:0000:0000:0000:0001<br>
                <strong>Purpose:</strong> Local loopback communication<br>
                <strong>Scope:</strong> Node-local (interface 1)<br><br>
                
                <strong>Usage Examples:</strong><br>
                ping6 ::1                    <span style="color: #6A9955;"># Test IPv6 stack</span><br>
                telnet ::1 80                <span style="color: #6A9955;"># Connect to local service</span><br>
                http://[::1]:8080/          <span style="color: #6A9955;"># Web browser URL</span>
                </code>
            </div>

            <h4 style="color: #AF7AC5;">Unspecified Address (::)</h4>
            <p>Indicates the absence of an address, similar to IPv4's 0.0.0.0. Never assigned to an interface.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Address:</strong> ::/128<br>
                <strong>Full form:</strong> 0000:0000:0000:0000:0000:0000:0000:0000<br>
                <strong>Usage:</strong> Source address before configuration<br><br>
                
                <strong>Common Uses:</strong><br>
                • DHCPv6 requests before address assignment<br>
                • Duplicate Address Detection (DAD) process<br>
                • Default route specification (::/0)<br>
                • Indicates "no address" in applications
                </code>
            </div>

            <h4 style="color: #AF7AC5;">IPv4-Mapped IPv6 Addresses</h4>
            <p>Allows IPv6 applications to communicate with IPv4-only nodes by embedding IPv4 addresses in IPv6 format.</p>

            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Type</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Prefix</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Format</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Example</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">IPv4-mapped</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">::ffff:0:0/96</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">::ffff:w.x.y.z</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">::ffff:192.0.2.1</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">IPv4-compatible</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">::0:0/96</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">::w.x.y.z</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">::192.0.2.1</td>
                </tr>
            </table>

            <p><strong style="color: #EF4444;">Note:</strong> IPv4-compatible addresses (::w.x.y.z) are deprecated and should not be used.</p>

            <h4 style="color: #AF7AC5;">IPv6 Transition Mechanisms:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #8B5CF6; margin-bottom: 10px;">6to4 Tunneling (2002::/16)</h5>
                <code style="color: #9CDCFE;">
                <strong>Prefix:</strong> 2002::/16<br>
                <strong>Format:</strong> 2002:WWXX:YYZZ::/48<br>
                <strong>Purpose:</strong> Automatic IPv6-over-IPv4 tunneling<br><br>
                
                <strong>Example:</strong><br>
                IPv4 address: 192.0.2.1 (C000:0201 in hex)<br>
                6to4 prefix: 2002:C000:0201::/48
                </code>

                <h5 style="color: #F59E0B; margin-top: 15px; margin-bottom: 10px;">Teredo (2001::/32)</h5>
                <code style="color: #9CDCFE;">
                <strong>Prefix:</strong> 2001:0000::/32<br>
                <strong>Purpose:</strong> IPv6 through NAT devices<br>
                <strong>Client prefix:</strong> 2001:0000:4136:e378::/64<br>
                <strong>Status:</strong> Microsoft implementation
                </code>
            </div>

            <h4 style="color: #AF7AC5;">Well-Known Prefixes Summary:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Prefix</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Status</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">::1/128</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Loopback</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Standard</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">::/128</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Unspecified</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Standard</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FE80::/10</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Link-local</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Standard</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FC00::/7</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Unique Local</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Standard</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">FF00::/8</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Multicast</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Standard</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">2001::/32</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Teredo</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Deprecated</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">2002::/16</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">6to4</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Deprecated</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">Reserved and Documentation Prefixes:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>2001:DB8::/32</strong> - Documentation prefix<br>
                • Reserved for examples and documentation<br>
                • Never routed on production internet<br>
                • Used in RFCs, books, and training materials<br><br>
                
                <strong>3FFE::/16</strong> - Former 6bone prefix (historic)<br>
                <strong>5F00::/8</strong> - Reserved by IANA<br>
                <strong>2001:0000::/23</strong> - IETF protocol assignments
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know ::1 is IPv6 loopback (equivalent to 127.0.0.1)</li>
                    <li>:: (unspecified) indicates no address or unknown source</li>
                    <li>2001:DB8::/32 is reserved for documentation examples</li>
                    <li>IPv4-mapped addresses allow dual-stack communication</li>
                    <li>Most transition mechanisms (6to4, Teredo) are now deprecated</li>
                </ul>
            </div>
        </div>
    `,

    "Modified EUI-64": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.9.e: Modified EUI-64 Interface Identifiers</h3>
            <p>Modified EUI-64 is a method for automatically generating the 64-bit interface identifier portion of an IPv6 address from a device's 48-bit MAC address.</p>

            <h4 style="color: #58D4FF;">EUI-64 Conversion Process:</h4>
            <p>The conversion involves three steps to transform a 48-bit MAC address into a 64-bit interface identifier.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #3B82F6; margin-bottom: 10px;">Step-by-Step Conversion:</h5>
                <code style="color: #9CDCFE;">
                <strong>Original MAC:</strong> 00:1A:2B:3C:4D:5E<br><br>
                
                <strong>Step 1:</strong> Split MAC address in half<br>
                First half:  00:1A:2B<br>
                Second half: 3C:4D:5E<br><br>
                
                <strong>Step 2:</strong> Insert FFFE in the middle<br>
                Result: 00:1A:2B:<span style="color: #F59E0B;">FF:FE</span>:3C:4D:5E<br><br>
                
                <strong>Step 3:</strong> Invert the 7th bit (Universal/Local bit)<br>
                00 = 00000000 binary<br>
                7th bit: 0000001<span style="color: #EF4444;">0</span> → 0000001<span style="color: #16A34A;">0</span> (already 1)<br>
                Actually: 0000000<span style="color: #EF4444;">0</span> → 0000001<span style="color: #16A34A;">0</span><br>
                00 → 02<br><br>
                
                <strong>Final EUI-64:</strong> <span style="color: #16A34A;">02:1A:2B:FF:FE:3C:4D:5E</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">Universal/Local (U/L) Bit:</h4>
            <p>The 7th bit of the first byte indicates whether the identifier is universally unique or locally administered.</p>

            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">U/L Bit</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Value</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Meaning</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Example</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">0 (Universal)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Original MAC</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Globally unique</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">00:xx:xx → 02:xx:xx</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">1 (Local)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">After inversion</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Locally unique</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">02:xx:xx (in IPv6)</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Common EUI-64 Examples:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <strong>Example 1:</strong><br>
                MAC: 00:50:56:C0:00:08<br>
                EUI-64: 0250:56FF:FEC0:0008<br>
                IPv6: FE80::0250:56FF:FEC0:0008<br><br>
                
                <strong>Example 2:</strong><br>
                MAC: 00:0C:29:1C:5D:EF<br>
                EUI-64: 020C:29FF:FE1C:5DEF<br>
                IPv6: 2001:DB8::/64 + EUI-64<br>
                Result: 2001:DB8::020C:29FF:FE1C:5DEF<br><br>
                
                <strong>Example 3 (Cisco):</strong><br>
                MAC: 00:12:7F:5A:00:01<br>
                EUI-64: 0212:7FFF:FE5A:0001<br>
                Full: 2001:DB8:ACAD:1:0212:7FFF:FE5A:0001
                </code>
            </div>

            <h4 style="color: #58D4FF;">EUI-64 Configuration:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">! Configure EUI-64 on Cisco router</span><br>
                Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span><br>
                Router(config-if)# <span style="color: #9CDCFE;">ipv6 address 2001:db8:acad:1::/64 eui-64</span><br>
                Router(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                <span style="color: #6A9955;">! Verification</span><br>
                Router# <span style="color: #DCDCAA;">show ipv6 interface brief</span><br>
                Gi0/1 [up/up]<br>
                    FE80::0212:7FFF:FE5A:0001<br>
                    2001:DB8:ACAD:1:0212:7FFF:FE5A:0001
                </code>
            </div>

            <h4 style="color: #58D4FF;">Privacy and Security Concerns:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Device Tracking:</strong> EUI-64 addresses can be used to track devices across networks</li>
                <li><strong>MAC Exposure:</strong> Original MAC address can be derived from the IPv6 address</li>
                <li><strong>Privacy Extensions:</strong> RFC 4941 defines temporary addresses for privacy</li>
                <li><strong>Random Interface IDs:</strong> Modern OSes often use random identifiers instead</li>
            </ul>

            <h4 style="color: #58D4FF;">EUI-64 vs Random Interface IDs:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Aspect</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">EUI-64</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Random</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Uniqueness</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Guaranteed</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Probabilistic</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Privacy</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Poor</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Good</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Predictability</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #EF4444;">Predictable</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Unpredictable</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Troubleshooting</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16A34A;">Easier</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #F59E0B;">Harder</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Alternative Interface ID Methods:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Manual Assignment:</strong> Manually configure interface ID</li>
                    <li><strong>Random Generation:</strong> OS generates random 64-bit identifier</li>
                    <li><strong>Privacy Extensions:</strong> Temporary addresses with limited lifetime</li>
                    <li><strong>Cryptographically Generated:</strong> CGA addresses using public key</li>
                    <li><strong>Stable Privacy:</strong> RFC 7217 stable but privacy-preserving</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know the three steps: split MAC, insert FFFE, invert 7th bit</li>
                    <li>Understand that EUI-64 creates predictable interface identifiers</li>
                    <li>Remember privacy concerns with EUI-64 addresses</li>
                    <li>Know the configuration command: ipv6 address prefix/64 eui-64</li>
                    <li>Understand why modern systems prefer random interface IDs</li>
                </ul>
            </div>
        </div>
    `,

    "ICMPv6 Messages": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.8.f: ICMPv6 Messages</h3>
            <p>Internet Control Message Protocol version 6 (ICMPv6) is essential for IPv6 operation, providing error reporting and network discovery functions that replace both ICMP and ARP in IPv4 networks.</p>

            <h4 style="color: #AF7AC5;">ICMPv6 Message Categories:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Category</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Type Range</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Examples</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #ef4444;">Error Messages</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">0-127</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Report delivery problems</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Destination Unreachable, Time Exceeded</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #22c55e;">Informational</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">128-255</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Network discovery and maintenance</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Echo Request/Reply, Neighbor Discovery</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">Neighbor Discovery Protocol (NDP) Messages:</h4>
            <p>NDP replaces ARP in IPv6 networks and provides additional functions like router discovery and parameter discovery.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Message Type</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">ICMPv6 Type</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Function</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Sent By</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #f59e0b;">Router Solicitation (RS)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">133</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Request router information</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Hosts</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #22c55e;">Router Advertisement (RA)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">134</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Provide network configuration</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Routers</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #8b5cf6;">Neighbor Solicitation (NS)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">135</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Resolve IPv6 to MAC address</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Any device</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #ec4899;">Neighbor Advertisement (NA)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">136</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Respond with MAC address</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Responding device</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #06b6d4;">Redirect</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">137</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Inform of better next hop</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Routers</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #AF7AC5;">Router Solicitation/Advertisement Process:</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Router Solicitation (RS) - Type 133</span>
<span style="color: #DCDCAA;">Source:</span>      Link-local address or unspecified (::)
<span style="color: #DCDCAA;">Destination:</span> All-routers multicast (FF02::2)
<span style="color: #DCDCAA;">Purpose:</span>     Host requests router information
<span style="color: #DCDCAA;">Trigger:</span>     Interface startup, no RA received

<span style="color: #6A9955;"># Router Advertisement (RA) - Type 134</span>
<span style="color: #DCDCAA;">Source:</span>      Router's link-local address
<span style="color: #DCDCAA;">Destination:</span> All-nodes multicast (FF02::1) or unicast
<span style="color: #DCDCAA;">Purpose:</span>     Provide network configuration parameters
<span style="color: #DCDCAA;">Contains:</span>    Prefix info, default gateway, hop limit, flags

<span style="color: #6A9955;"># RA Message Flags</span>
<span style="color: #CE9178;">M Flag (Managed):</span>    Use DHCPv6 for address assignment
<span style="color: #CE9178;">O Flag (Other):</span>      Use DHCPv6 for other configuration
<span style="color: #CE9178;">Router Lifetime:</span>     Time router serves as default gateway
</code>
            </pre>

            <h4 style="color: #AF7AC5;">Neighbor Solicitation/Advertisement Process:</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Neighbor Solicitation (NS) - Type 135</span>
<span style="color: #DCDCAA;">Source:</span>      Sender's link-local or global address
<span style="color: #DCDCAA;">Destination:</span> Solicited-node multicast address
<span style="color: #DCDCAA;">Target:</span>      IPv6 address being resolved
<span style="color: #DCDCAA;">Purpose:</span>     IPv6 equivalent of ARP request

<span style="color: #6A9955;"># Solicited-Node Multicast Address</span>
<span style="color: #CE9178;">Format:</span>      FF02::1:FF + last 24 bits of target address
<span style="color: #CE9178;">Example:</span>     Target: 2001:DB8::1234:5678:9ABC:DEF0
<span style="color: #CE9178;">Multicast:</span>   FF02::1:FFBC:DEF0

<span style="color: #6A9955;"># Neighbor Advertisement (NA) - Type 136</span>
<span style="color: #DCDCAA;">Source:</span>      Target's link-local or global address
<span style="color: #DCDCAA;">Destination:</span> Sender's address or all-nodes multicast
<span style="color: #DCDCAA;">Target:</span>      The advertised IPv6 address
<span style="color: #DCDCAA;">Flags:</span>       Router, Solicited, Override flags
</code>
            </pre>

            <h4 style="color: #AF7AC5;">ICMPv6 vs IPv4 Comparison:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Function</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">IPv4 Protocol</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">IPv6 ICMPv6 Message</th>
                        <th style="border: 1px solid #4B5563; padding: 8px;">Improvement</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Address Resolution</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">ARP (separate protocol)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Neighbor Solicitation/Advertisement</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Integrated, secure</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Router Discovery</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">ICMP Router Discovery</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Router Advertisement</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Enhanced functionality</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Ping</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">ICMP Echo Request/Reply</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Echo Request/Reply (128/129)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #3b82f6;">Same functionality</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Error Reporting</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">ICMP errors</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">ICMPv6 error messages</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Enhanced error codes</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #AF7AC5;">Duplicate Address Detection (DAD):</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Process:</strong> Host sends NS for its own address before using it</li>
                <li><strong>Destination:</strong> Solicited-node multicast of tentative address</li>
                <li><strong>No Response:</strong> Address is unique and can be used</li>
                <li><strong>Response Received:</strong> Address conflict detected, cannot use address</li>
                <li><strong>Timing:</strong> Performed during SLAAC and manual configuration</li>
            </ul>

            <h4 style="color: #AF7AC5;">Troubleshooting ICMPv6:</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Debug ICMPv6 on Cisco router</span>
Router# <span style="color: #DCDCAA;">debug ipv6 icmp</span>
Router# <span style="color: #DCDCAA;">debug ipv6 nd</span>

<span style="color: #6A9955;"># View neighbor discovery table</span>
Router# <span style="color: #DCDCAA;">show ipv6 neighbors</span>
IPv6 Address                     Age Link-layer Addr State Interface
FE80::1                          0   0012.7f5a.0001  REACH Gi0/1

<span style="color: #6A9955;"># Clear neighbor cache</span>
Router# <span style="color: #DCDCAA;">clear ipv6 neighbors</span>

<span style="color: #6A9955;"># Test IPv6 connectivity</span>
Router# <span style="color: #DCDCAA;">ping ipv6 2001:db8::1</span>
</code>
            </pre>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know the four main NDP message types: RS (133), RA (134), NS (135), NA (136)</li>
                    <li>Understand that ICMPv6 NS/NA replaces IPv4 ARP functionality</li>
                    <li>Router Advertisements provide automatic configuration parameters</li>
                    <li>Solicited-node multicast addresses optimize neighbor discovery</li>
                    <li>Duplicate Address Detection prevents address conflicts</li>
                    <li>ICMPv6 is mandatory for IPv6 operation, unlike ICMP in IPv4</li>
                </ul>
            </div>
        </div>
    `,

    // 1.10 Verify IP Parameters
    "Windows Client Verification": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.10.a: Windows Client IP Verification</h3>
            <p>Windows provides multiple tools for verifying IP configuration, from basic ipconfig commands to advanced PowerShell cmdlets and GUI utilities.</p>

            <h4 style="color: #58D4FF;">Essential ipconfig Commands:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;">:: Basic IP information</span><br>
                C:\\> <span style="color: #DCDCAA;">ipconfig</span><br>
                Shows IP address, subnet mask, default gateway<br><br>
                
                <span style="color: #6A9955;">:: Complete configuration details</span><br>
                C:\\> <span style="color: #DCDCAA;">ipconfig /all</span><br>
                Shows all adapters, DHCP status, DNS servers, lease info<br><br>
                
                <span style="color: #6A9955;">:: DHCP operations</span><br>
                C:\\> <span style="color: #DCDCAA;">ipconfig /release</span>     <span style="color: #6A9955;"># Release DHCP lease</span><br>
                C:\\> <span style="color: #DCDCAA;">ipconfig /renew</span>       <span style="color: #6A9955;"># Renew DHCP lease</span><br>
                C:\\> <span style="color: #DCDCAA;">ipconfig /displaydns</span>  <span style="color: #6A9955;"># Show DNS cache</span><br>
                C:\\> <span style="color: #DCDCAA;">ipconfig /flushdns</span>    <span style="color: #6A9955;"># Clear DNS cache</span>
                </code>
            </div>

            <h4 style="color: #58D4FF;">Advanced Windows Tools:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Tool</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Command</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Network Shell</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">netsh int ip show config</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Detailed interface configuration</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">PowerShell</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">Get-NetIPConfiguration</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Modern network configuration view</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Route Table</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">route print</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">View routing table</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">ARP Table</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">arp -a</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">View ARP cache</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Windows GUI Network Information:</h4>
            <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Network and Sharing Center:</strong> Control Panel → Network and Internet</li>
                <li><strong>Network Connections:</strong> ncpa.cpl (Run command)</li>
                <li><strong>Network Adapter Properties:</strong> Right-click adapter → Properties → TCP/IPv4</li>
                <li><strong>Command Prompt as Admin:</strong> Required for some network commands</li>
            </ul>

            <h4 style="color: #58D4FF;">PowerShell Network Cmdlets:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;"># Modern PowerShell network verification</span><br>
                PS> <span style="color: #DCDCAA;">Get-NetIPConfiguration</span><br>
                PS> <span style="color: #DCDCAA;">Get-NetAdapter</span><br>
                PS> <span style="color: #DCDCAA;">Get-NetRoute</span><br>
                PS> <span style="color: #DCDCAA;">Test-NetConnection</span> -ComputerName google.com -Port 80<br>
                PS> <span style="color: #DCDCAA;">Resolve-DnsName</span> google.com<br><br>
                
                <span style="color: #6A9955;"># DHCP lease information</span><br>
                PS> <span style="color: #DCDCAA;">Get-NetIPConfiguration</span> | Format-List *
                </code>
            </div>

            <h4 style="color: #58D4FF;">Common Windows Network Issues:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Issue</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Symptom</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Solution</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">No IP Address</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">APIPA (169.254.x.x)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Check DHCP server/cable</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">DNS Issues</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Can ping IPs, not domains</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">ipconfig /flushdns</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Wrong Gateway</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">No internet access</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Check static IP config</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know basic ipconfig commands: /all, /release, /renew, /flushdns</li>
                    <li>Understand APIPA (169.254.x.x) indicates DHCP failure</li>
                    <li>Be familiar with Windows network troubleshooting methodology</li>
                    <li>Know difference between ipconfig and PowerShell cmdlets</li>
                </ul>
            </div>
        </div>
    `,

    "macOS Client Verification": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.10.b: macOS Client IP Verification</h3>
            <p>macOS provides both graphical and command-line tools for network verification, combining Unix foundation with Apple's user-friendly interface design.</p>

            <h4 style="color: #58D68D;">macOS-Specific Network Commands:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;"># List all network hardware ports</span><br>
                $ <span style="color: #DCDCAA;">networksetup -listallhardwareports</span><br>
                Hardware Port: Wi-Fi<br>
                Device: en0<br>
                Ethernet Address: 00:1b:63:84:45:e6<br><br>
                
                <span style="color: #6A9955;"># Get detailed interface information</span><br>
                $ <span style="color: #DCDCAA;">networksetup -getinfo "Wi-Fi"</span><br>
                DHCP Configuration<br>
                IP address: 192.168.1.100<br>
                Subnet mask: 255.255.255.0<br>
                Router: 192.168.1.1<br><br>
                
                <span style="color: #6A9955;"># Get DNS servers</span><br>
                $ <span style="color: #DCDCAA;">networksetup -getdnsservers Wi-Fi</span><br>
                8.8.8.8<br>
                8.8.4.4
                </code>
            </div>

            <h4 style="color: #58D68D;">System Configuration Tools:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Tool</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Command</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">System Config Utility</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">scutil --dns</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Complete DNS configuration</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Airport Utility</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">airport -I</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Wi-Fi interface details</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Netstat</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">netstat -rn</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Routing table</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface Config</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ifconfig en0</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface status and addresses</td>
                </tr>
            </table>

            <h4 style="color: #58D68D;">macOS Network Preferences GUI:</h4>
            <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                <li><strong>System Preferences → Network:</strong> Main network configuration interface</li>
                <li><strong>Wi-Fi Advanced Settings:</strong> Click Wi-Fi → Advanced for detailed options</li>
                <li><strong>TCP/IP Tab:</strong> Shows DHCP lease, IP configuration</li>
                <li><strong>DNS Tab:</strong> Configure DNS servers and search domains</li>
                <li><strong>Hardware Tab:</strong> Configure MTU, duplex settings</li>
            </ul>

            <h4 style="color: #58D68D;">DHCP and Network Services:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;"># DHCP lease information</span><br>
                $ <span style="color: #DCDCAA;">ipconfig getpacket en0</span><br>
                Shows complete DHCP lease details<br><br>
                
                <span style="color: #6A9955;"># Renew DHCP lease</span><br>
                $ <span style="color: #DCDCAA;">sudo ipconfig set en0 DHCP</span><br><br>
                
                <span style="color: #6A9955;"># Get router address</span><br>
                $ <span style="color: #DCDCAA;">route -n get default</span><br>
                   route to: default<br>
                destination: default<br>
                    gateway: 192.168.1.1<br><br>
                
                <span style="color: #6A9955;"># Network quality test (macOS 12+)</span><br>
                $ <span style="color: #DCDCAA;">networkQuality</span>
                </code>
            </div>

            <h4 style="color: #58D68D;">macOS Network Troubleshooting:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Wi-Fi Diagnostics:</strong> Option+Click Wi-Fi icon → Open Wireless Diagnostics</li>
                <li><strong>Console App:</strong> View system logs for network events</li>
                <li><strong>Activity Monitor:</strong> Network tab shows traffic statistics</li>
                <li><strong>Terminal Utilities:</strong> ping, traceroute, nslookup work as expected</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know networksetup command for programmatic network configuration</li>
                    <li>Understand both GUI (System Preferences) and CLI approaches</li>
                    <li>Be familiar with scutil --dns for comprehensive DNS information</li>
                    <li>Know how to access Wi-Fi diagnostics and network quality tools</li>
                </ul>
            </div>
        </div>
    `,

    "Linux Client Verification": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.10.c: Linux Client IP Verification</h3>
            <p>Linux provides the most comprehensive set of network verification tools, from traditional Unix utilities to modern iproute2 commands and distribution-specific management tools.</p>

            <h4 style="color: #F5B041;">Modern iproute2 Commands:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;"># Show all network interfaces and addresses</span><br>
                $ <span style="color: #DCDCAA;">ip addr show</span><br>
                $ <span style="color: #DCDCAA;">ip a</span>                        <span style="color: #6A9955;"># Short form</span><br><br>
                
                <span style="color: #6A9955;"># Show specific interface</span><br>
                $ <span style="color: #DCDCAA;">ip addr show eth0</span><br>
                2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500<br>
                    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic eth0<br><br>
                
                <span style="color: #6A9955;"># Show routing table</span><br>
                $ <span style="color: #DCDCAA;">ip route show</span><br>
                $ <span style="color: #DCDCAA;">ip r</span>                        <span style="color: #6A9955;"># Short form</span><br><br>
                
                <span style="color: #6A9955;"># Show neighbor (ARP) table</span><br>
                $ <span style="color: #DCDCAA;">ip neigh show</span><br>
                $ <span style="color: #DCDCAA;">ip n</span>                        <span style="color: #6A9955;"># Short form</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">Traditional Network Commands:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Legacy Command</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Modern Equivalent</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ifconfig</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ip addr</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface configuration</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">route -n</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ip route</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Routing table</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">arp -a</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ip neigh</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">ARP table</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">netstat -i</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ip -s link</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Interface statistics</td>
                </tr>
            </table>

            <h4 style="color: #F5B041;">Distribution-Specific Tools:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #F39C12; margin-bottom: 10px;">NetworkManager (Ubuntu, RHEL, CentOS):</h5>
                <code style="color: #9CDCFE;">
                $ <span style="color: #DCDCAA;">nmcli device status</span>         <span style="color: #6A9955;"># Device overview</span><br>
                $ <span style="color: #DCDCAA;">nmcli connection show</span>       <span style="color: #6A9955;"># Active connections</span><br>
                $ <span style="color: #DCDCAA;">nmcli device show eth0</span>      <span style="color: #6A9955;"># Detailed device info</span><br>
                $ <span style="color: #DCDCAA;">nmcli general status</span>        <span style="color: #6A9955;"># NetworkManager status</span><br><br>
                </code>

                <h5 style="color: #F39C12; margin-bottom: 10px;">systemd-networkd:</h5>
                <code style="color: #9CDCFE;">
                $ <span style="color: #DCDCAA;">networkctl status</span>           <span style="color: #6A9955;"># Overall network status</span><br>
                $ <span style="color: #DCDCAA;">networkctl list</span>             <span style="color: #6A9955;"># List all interfaces</span><br>
                $ <span style="color: #DCDCAA;">networkctl status eth0</span>      <span style="color: #6A9955;"># Interface details</span><br><br>
                </code>

                <h5 style="color: #F39C12; margin-bottom: 10px;">Debian/Ubuntu netplan:</h5>
                <code style="color: #9CDCFE;">
                $ <span style="color: #DCDCAA;">netplan get</span>                 <span style="color: #6A9955;"># Show current config</span><br>
                $ <span style="color: #DCDCAA;">netplan apply</span>               <span style="color: #6A9955;"># Apply configuration</span><br>
                $ <span style="color: #DCDCAA;">netplan try</span>                 <span style="color: #6A9955;"># Test configuration</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">DHCP Client Information:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;"># DHCP client lease information</span><br>
                $ <span style="color: #DCDCAA;">cat /var/lib/dhcp/dhclient.leases</span><br>
                $ <span style="color: #DCDCAA;">cat /var/lib/dhcpcd5/dhcpcd.leases</span>  <span style="color: #6A9955;"># Alternative path</span><br><br>
                
                <span style="color: #6A9955;"># Renew DHCP lease</span><br>
                $ <span style="color: #DCDCAA;">sudo dhclient -r eth0</span>      <span style="color: #6A9955;"># Release</span><br>
                $ <span style="color: #DCDCAA;">sudo dhclient eth0</span>         <span style="color: #6A9955;"># Renew</span><br><br>
                
                <span style="color: #6A9955;"># NetworkManager DHCP renewal</span><br>
                $ <span style="color: #DCDCAA;">sudo nmcli connection down eth0</span><br>
                $ <span style="color: #DCDCAA;">sudo nmcli connection up eth0</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">Advanced Linux Network Tools:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Tool</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Command</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Socket Statistics</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">ss -tuln</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Modern netstat replacement</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Bandwidth Monitor</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">iftop</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Real-time bandwidth usage</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Network Scanner</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">nmap</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Network discovery and scanning</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Packet Capture</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">tcpdump</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Network packet analysis</td>
                </tr>
            </table>

            <h4 style="color: #F5B041;">Configuration File Locations:</h4>
            <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Network Interfaces:</strong> /etc/network/interfaces (Debian/Ubuntu)</li>
                <li><strong>Network Scripts:</strong> /etc/sysconfig/network-scripts/ (RHEL/CentOS)</li>
                <li><strong>DNS Configuration:</strong> /etc/resolv.conf</li>
                <li><strong>Hostname:</strong> /etc/hostname</li>
                <li><strong>Host Mappings:</strong> /etc/hosts</li>
                <li><strong>Netplan Config:</strong> /etc/netplan/ (Ubuntu 18.04+)</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Prefer modern ip commands over legacy ifconfig/route commands</li>
                    <li>Know nmcli for NetworkManager-based distributions</li>
                    <li>Understand DHCP client lease file locations and renewal process</li>
                    <li>Be familiar with ss command as modern netstat replacement</li>
                    <li>Know key configuration file locations for different distributions</li>
                </ul>
            </div>
        </div>
    `,

    "Client Network Troubleshooting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.10.c: Client Network Troubleshooting Methodology</h3>
            <p>Systematic approach to diagnosing client-side network issues using a layered methodology from physical connectivity to application-specific problems.</p>

            <h4 style="color: #F5B041;">Bottom-Up Troubleshooting Approach:</h4>
            <p>Start with the physical layer and work up the OSI model to isolate the problem efficiently.</p>

            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #F39C12; margin-bottom: 10px;">Layer 1 - Physical Connectivity:</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Check cables:</strong> Ensure Ethernet cable is connected and not damaged</li>
                    <li><strong>Link lights:</strong> Verify NIC and switch port LEDs are active</li>
                    <li><strong>Wi-Fi signal:</strong> Check signal strength and interference</li>
                    <li><strong>Port status:</strong> Verify switch port is not disabled</li>
                </ul>

                <h5 style="color: #F39C12; margin-top: 15px; margin-bottom: 10px;">Layer 2 - Data Link:</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Interface status:</strong> Check if interface is up/up</li>
                    <li><strong>VLAN membership:</strong> Verify correct VLAN assignment</li>
                    <li><strong>MAC address:</strong> Ensure no MAC address conflicts</li>
                    <li><strong>Switch connectivity:</strong> Verify switch port configuration</li>
                </ul>

                <h5 style="color: #F39C12; margin-top: 15px; margin-bottom: 10px;">Layer 3 - Network:</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>IP configuration:</strong> Valid IP, subnet mask, gateway</li>
                    <li><strong>DHCP functionality:</strong> Successful lease acquisition</li>
                    <li><strong>Default gateway:</strong> Can ping local gateway</li>
                    <li><strong>Routing:</strong> Can reach external networks</li>
                </ul>
            </div>

            <h4 style="color: #F5B041;">Step-by-Step Troubleshooting Process:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Step</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Test</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Expected Result</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">If Failed</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">1</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Check physical connection</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Link lights active</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Check cables, ports</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">2</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Verify IP configuration</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Valid IP address</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">DHCP/static config issue</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">3</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Ping localhost (127.0.0.1)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Success</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">TCP/IP stack problem</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">4</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Ping own IP address</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Success</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">NIC configuration issue</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">5</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Ping default gateway</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Success</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Local network issue</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">6</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Ping external IP (8.8.8.8)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Success</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Routing/ISP issue</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">7</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Ping external name (google.com)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Success</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">DNS resolution issue</td>
                </tr>
            </table>

            <h4 style="color: #F5B041;">Common Client Issues and Solutions:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <h5 style="color: #EF4444; margin-bottom: 10px;">No IP Address (APIPA 169.254.x.x):</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>DHCP server unavailable or unreachable</li>
                    <li>Network cable unplugged or faulty</li>
                    <li>Switch port disabled or VLAN mismatch</li>
                    <li><strong>Solution:</strong> Check physical connectivity, DHCP server status</li>
                </ul>

                <h5 style="color: #EF4444; margin-top: 15px; margin-bottom: 10px;">Can't Reach Internet:</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Default gateway incorrect or unreachable</li>
                    <li>DNS servers not configured or unreachable</li>
                    <li>Firewall blocking traffic</li>
                    <li><strong>Solution:</strong> Verify gateway, DNS settings, firewall rules</li>
                </ul>

                <h5 style="color: #EF4444; margin-top: 15px; margin-bottom: 10px;">Slow Network Performance:</h5>
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li>Duplex mismatch (half vs full duplex)</li>
                    <li>Network congestion or bandwidth limitations</li>
                    <li>DNS resolution delays</li>
                    <li><strong>Solution:</strong> Check interface statistics, DNS response times</li>
                </ul>
            </div>

            <h4 style="color: #F5B041;">Advanced Troubleshooting Commands:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <code style="color: #9CDCFE;">
                <span style="color: #6A9955;"># Network path analysis</span><br>
                Windows: <span style="color: #DCDCAA;">tracert google.com</span><br>
                Unix: <span style="color: #DCDCAA;">traceroute google.com</span><br><br>
                
                <span style="color: #6A9955;"># DNS troubleshooting</span><br>
                <span style="color: #DCDCAA;">nslookup google.com</span><br>
                <span style="color: #DCDCAA;">nslookup google.com 8.8.8.8</span>  <span style="color: #6A9955;"># Test specific DNS</span><br><br>
                
                <span style="color: #6A9955;"># Port connectivity testing</span><br>
                Windows: <span style="color: #DCDCAA;">telnet google.com 80</span><br>
                PowerShell: <span style="color: #DCDCAA;">Test-NetConnection google.com -Port 80</span><br>
                Unix: <span style="color: #DCDCAA;">nc -zv google.com 80</span><br><br>
                
                <span style="color: #6A9955;"># Interface statistics</span><br>
                Windows: <span style="color: #DCDCAA;">netstat -e</span><br>
                Unix: <span style="color: #DCDCAA;">ip -s link show eth0</span>
                </code>
            </div>

            <h4 style="color: #F5B041;">Documentation and Escalation:</h4>
            <ul style="list-style-type: square; margin-left: 20px; color: #B0B0B0;">
                <li><strong>Document findings:</strong> Record test results and error messages</li>
                <li><strong>Note configuration:</strong> IP settings, network hardware details</li>
                <li><strong>Escalation criteria:</strong> When to involve network team or ISP</li>
                <li><strong>User communication:</strong> Explain findings in non-technical terms</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand systematic bottom-up troubleshooting methodology</li>
                    <li>Know the 7-step ping test sequence for connectivity issues</li>
                    <li>Recognize APIPA (169.254.x.x) as DHCP failure indicator</li>
                    <li>Understand difference between IP connectivity and DNS resolution issues</li>
                    <li>Know when to escalate beyond client-side troubleshooting</li>
                </ul>
            </div>
        </div>
    `,

    // 1.11 Wireless Principles
    "Wi-Fi Standards & Evolution": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.11.a: Wi-Fi Standards & Evolution</h3>
            <p>Wi-Fi has evolved through multiple generations, each bringing faster speeds, better efficiency, and new capabilities to wireless networking.</p>

            <h4 style="color: #58D4FF;">Wi-Fi Standards Timeline:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Standard</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Year</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Max Speed</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Frequency</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Key Features</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">802.11b</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">1999</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">11 Mbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2.4 GHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">First widespread adoption</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">802.11a/g</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2003</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">54 Mbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">5/2.4 GHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Dual-band capability</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">802.11n</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2009</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">600 Mbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2.4/5 GHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">MIMO, channel bonding</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">802.11ac</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2013</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">6.9 Gbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">5 GHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">MU-MIMO, wider channels</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">802.11ax (Wi-Fi 6)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2019</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">9.6 Gbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2.4/5 GHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">OFDMA, better efficiency</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-family: monospace;">Wi-Fi 6E</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2020</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">9.6 Gbps</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">6 GHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">New 6 GHz spectrum</td>
                </tr>
            </table>

            <h4 style="color: #58D4FF;">Key Technology Improvements:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>MIMO (Multiple-Input Multiple-Output):</strong> Multiple antennas for better performance</li>
                    <li><strong>MU-MIMO:</strong> Serve multiple users simultaneously</li>
                    <li><strong>OFDMA:</strong> More efficient spectrum usage (Wi-Fi 6)</li>
                    <li><strong>Channel Bonding:</strong> Combine channels for higher throughput</li>
                    <li><strong>BSS Coloring:</strong> Reduce interference in dense environments</li>
                    <li><strong>Target Wake Time:</strong> Better battery life for IoT devices</li>
                </ul>
            </div>

            <h4 style="color: #58D4FF;">Backward Compatibility:</h4>
            <p>All Wi-Fi standards maintain backward compatibility, but performance is limited by the slowest device in the network. Mixed environments typically operate at the lowest common denominator speed.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know the major Wi-Fi standards and their maximum speeds</li>
                    <li>Understand that Wi-Fi 6 (802.11ax) is the current generation</li>
                    <li>Remember that newer standards are backward compatible</li>
                    <li>Know that 6 GHz spectrum is available with Wi-Fi 6E</li>
                </ul>
            </div>
        </div>
    `,
    "Wi-Fi Channels & Frequencies": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.11.b: Wi-Fi Channels & Frequencies</h3>
            <p>Wi-Fi operates in specific frequency bands divided into channels. Proper channel planning is essential for optimal performance and interference avoidance.</p>

            <h4 style="color: #58D68D;">2.4 GHz Band Characteristics:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Frequency Range:</strong> 2.400 - 2.495 GHz</li>
                    <li><strong>Available Channels:</strong> 1-11 (North America), 1-13 (Europe)</li>
                    <li><strong>Non-overlapping Channels:</strong> Only 1, 6, and 11</li>
                    <li><strong>Channel Width:</strong> 20 MHz (can bond to 40 MHz)</li>
                    <li><strong>Advantages:</strong> Better range, penetrates walls well</li>
                    <li><strong>Disadvantages:</strong> More congested, interference from other devices</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Channel Overlap Problem:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Channel</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Center Frequency</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Overlaps With</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Recommended Use</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #3b82f6;">1</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2412 MHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2, 3, 4, 5</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">✓ Use</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">2-5</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2417-2432 MHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Adjacent channels</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">✗ Avoid</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #10b981;">6</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2437 MHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">7, 8, 9, 10</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">✓ Use</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">7-10</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2442-2457 MHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Adjacent channels</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">✗ Avoid</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f97316;">11</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">2462 MHz</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">12, 13 (Europe)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">✓ Use</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Remember only 3 non-overlapping channels in 2.4 GHz: 1, 6, 11</li>
                    <li>Know that 5 GHz has many more non-overlapping channels</li>
                    <li>Understand channel overlap causes interference in 2.4 GHz</li>
                    <li>Know that 6 GHz spectrum is available with Wi-Fi 6E</li>
                </ul>
            </div>
        </div>
    `,
    "RF Fundamentals & Signal Metrics": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.11.c: RF Fundamentals & Signal Metrics</h3>
            <p>Radio Frequency fundamentals determine wireless performance. Understanding signal metrics is crucial for troubleshooting and optimizing wireless networks.</p>

            <h4 style="color: #F5B041;">Key RF Signal Metrics:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Metric</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Description</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Good Values</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Poor Values</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">RSSI</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Received Signal Strength Indicator</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">-30 to -50 dBm</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Below -70 dBm</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">SNR</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Signal-to-Noise Ratio</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">Above 20 dB</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Below 10 dB</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>RSSI measures signal strength: -30 dBm = excellent, -70 dBm = minimum</li>
                    <li>SNR measures signal quality: >20 dB good, <10 dB poor</li>
                    <li>Distance and obstacles reduce signal strength</li>
                    <li>5 GHz has shorter range but less interference than 2.4 GHz</li>
                </ul>
            </div>
        </div>
    `,

    "CSMA/CA & Wireless Media Access": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.11.d: CSMA/CA & Wireless Media Access</h3>
            <p>Wireless networks use Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA) because they cannot detect collisions like wired networks can.</p>

            <h4 style="color: #EC7063;">Why CSMA/CD Doesn't Work in Wireless:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Half-duplex nature:</strong> Wireless devices can't transmit and receive simultaneously</li>
                    <li><strong>Hidden node problem:</strong> Devices may not hear each other but both reach the AP</li>
                    <li><strong>Signal attenuation:</strong> Transmitting device can't detect weak collision signals</li>
                    <li><strong>Radio characteristics:</strong> RF signals behave differently than electrical signals</li>
                </ul>
            </div>

            <h4 style="color: #EC7063;">CSMA/CA Process Steps:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Step</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Action</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Purpose</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">1. Listen</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Carrier Sense - check if channel is busy</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Avoid transmitting over ongoing transmission</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">2. Wait IFS</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Inter-Frame Spacing - mandatory wait time</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Allow receiver to process previous frame</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">3. Random Backoff</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Wait random time from contention window</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Reduce probability of simultaneous transmission</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">4. Transmit</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Send frame if channel still clear</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Deliver data to destination</td>
                </tr>
            </table>

            <h4 style="color: #EC7063;">RTS/CTS Mechanism:</h4>
            <p>Request to Send/Clear to Send helps solve the hidden node problem by reserving the medium.</p>

            <h4 style="color: #EC7063;">CSMA/CA vs CSMA/CD Comparison:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Aspect</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">CSMA/CD (Ethernet)</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">CSMA/CA (Wi-Fi)</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Collision Detection</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">Yes - detect during transmission</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">No - avoid before transmission</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Medium Access</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Immediate after sensing clear</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Wait IFS + random backoff</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Wireless uses CSMA/CA (Collision Avoidance) not CSMA/CD</li>
                    <li>Devices wait IFS + random backoff before transmitting</li>
                    <li>RTS/CTS helps solve hidden node problem</li>
                    <li>ACK frames are mandatory in wireless (unreliable medium)</li>
                    <li>Exponential backoff increases wait time after collisions</li>
                </ul>
            </div>
        </div>
    `,
    "Wireless Security & Authentication": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.11.e: Wireless Security & Authentication</h3>
            <p>Wireless security has evolved from broken protocols to robust enterprise-grade authentication. Understanding SSID and security protocols is essential for CCNA.</p>

            <h4 style="color: #AF7AC5;">SSID (Service Set Identifier):</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
                <ul style="list-style-type: disc; margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Purpose:</strong> Network name that identifies a wireless network</li>
                    <li><strong>Length:</strong> 0-32 characters (case sensitive)</li>
                    <li><strong>Broadcast:</strong> Included in beacon frames by default</li>
                    <li><strong>Hidden SSID:</strong> Can be disabled but provides minimal security</li>
                </ul>
            </div>

            <h4 style="color: #AF7AC5;">Wireless Security Evolution:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Protocol</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Status</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Notes</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #ef4444;">WEP</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">BROKEN</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Crackable in minutes</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #22c55e;">WPA2</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">GOOD</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Still widely used</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold; color: #3b82f6;">WPA3</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #3b82f6;">BEST</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Current standard</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">Authentication Methods:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Method</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Use Case</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Management</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Personal (PSK)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Home, small office</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Simple - shared password</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Enterprise (802.1X)</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Business, enterprise</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Complex - individual credentials</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>SSID is the network name broadcast in beacon frames</li>
                    <li>WEP is broken, WPA3 is current best practice</li>
                    <li>Personal uses PSK (pre-shared key), Enterprise uses 802.1X</li>
                    <li>Enterprise authentication requires RADIUS server</li>
                    <li>802.1X has three components: supplicant, authenticator, auth server</li>
                </ul>
            </div>
        </div>
    `,

    "Wireless Encryption Standards": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.11.d: Wireless Encryption Standards</h3>
            <p>Wireless encryption protocols protect data transmitted over Wi-Fi networks. TKIP was designed for legacy hardware compatibility, while AES provides modern, robust encryption.</p>

            <h4 style="color: #AF7AC5;">TKIP (Temporal Key Integrity Protocol):</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Feature</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Details</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Cipher Type</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">RC4 stream cipher with key mixing</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Key Size</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">128-bit encryption key</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Key Management</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Temporal key rotation every packet</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Integrity Check</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Michael MIC (Message Integrity Check)</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Usage</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">WPA only - legacy compatibility</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">AES (Advanced Encryption Standard):</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Feature</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Details</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Cipher Type</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Block cipher with CCMP mode</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Key Size</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">128/192/256-bit encryption key</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Mode</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Counter Mode with CBC-MAC</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Integrity Check</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Built-in authentication and integrity</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Usage</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">WPA2/WPA3 standard</td>
                </tr>
            </table>

            <h4 style="color: #AF7AC5;">Performance and Security Comparison:</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #374151;">
                        <th style="border: 1px solid #4B5563; padding: 8px;">Aspect</th>
                        <th style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">TKIP</th>
                        <th style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">AES-CCMP</th>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Security Level</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Moderate (RC4 vulnerabilities)</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">High (Government grade)</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Performance</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Lower throughput</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Higher throughput</td>
                    </tr>
                    <tr style="background-color: #1F2937;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Hardware Support</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Legacy devices</td>
                        <td style="border: 1px solid #4B5563; padding: 8px;">Modern devices required</td>
                    </tr>
                    <tr style="background-color: #374151;">
                        <td style="border: 1px solid #4B5563; padding: 8px; font-weight: bold;">Recommendation</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #ef4444;">Avoid if possible</td>
                        <td style="border: 1px solid #4B5563; padding: 8px; color: #22c55e;">Preferred choice</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #AF7AC5;">Implementation in WPA Versions:</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># WPA Configuration (Legacy)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid MyNetwork</span>
Router(config-if-ssid)# <span style="color: #C586C0;">wpa-psk ascii MyPassword</span>
Router(config-if-ssid)# <span style="color: #CE9178;">authentication open</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">authentication key-management wpa</span>

<span style="color: #6A9955;"># WPA2 Configuration (Current Standard)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid MyNetwork</span>
Router(config-if-ssid)# <span style="color: #C586C0;">wpa-psk ascii MyPassword</span>
Router(config-if-ssid)# <span style="color: #CE9178;">authentication open</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">authentication key-management wpa version 2</span>
Router(config-if-ssid)# <span style="color: #22c55e;">encryption aes-ccmp</span>
</code>
            </pre>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>TKIP uses RC4 stream cipher with temporal key mixing</li>
                    <li>AES uses block cipher with CCMP (Counter mode with CBC-MAC)</li>
                    <li>AES provides better security and performance than TKIP</li>
                    <li>WPA uses TKIP, WPA2/WPA3 use AES-CCMP</li>
                    <li>Mixed mode supports both TKIP and AES for compatibility</li>
                    <li>AES requires dedicated hardware or software implementation</li>
                </ul>
            </div>
        </div>
    `,

    // 1.12 Virtualization Fundamentals
    "Virtualization Overview": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.12.a: Virtualization Overview</h3>
            <p>Virtualization creates virtual versions of physical resources, enabling better resource utilization, isolation, and flexibility in modern computing environments.</p>

            <h4 style="color: #58D4FF;">Benefits of Virtualization:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Benefit</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Impact</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Cost Reduction</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">Lower CapEx/OpEx</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Resource Efficiency</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">60-80% vs 10-15%</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Flexibility</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">Rapid deployment</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Virtualization abstracts physical hardware into virtual resources</li>
                    <li>Benefits include cost reduction, better utilization, and flexibility</li>
                    <li>Multiple virtual instances can run on single physical hardware</li>
                    <li>Common types: server, network, storage virtualization</li>
                </ul>
            </div>
        </div>
    `,

    "Hypervisors & Virtual Machines": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">1.12.b: Hypervisors & Virtual Machines</h3>
            <p>Hypervisors manage virtual machines and provide the virtualization layer between physical hardware and virtual operating systems.</p>

            <h4 style="color: #58D68D;">Type 1 vs Type 2 Hypervisors:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Aspect</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Type 1 (Bare-Metal)</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Type 2 (Hosted)</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Performance</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">Excellent</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Good</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Examples</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">ESXi, Hyper-V</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">VMware Workstation, VirtualBox</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Type 1 hypervisors run directly on hardware (bare-metal)</li>
                    <li>Type 2 hypervisors run on top of host operating system</li>
                    <li>Type 1 offers better performance for production environments</li>
                    <li>Examples: ESXi (Type 1), VMware Workstation (Type 2)</li>
                </ul>
            </div>
        </div>
    `,

    "Containers & Microservices": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">1.12.c: Containers & Microservices</h3>
            <p>Containers provide lightweight, OS-level virtualization that packages applications with their dependencies for consistent deployment across environments.</p>

            <h4 style="color: #F8C471;">Container vs Virtual Machine:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Aspect</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Container</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Virtual Machine</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Resource Usage</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">Lower</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Higher</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Startup Time</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">Seconds</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Minutes</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">Isolation</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #f59e0b;">Process Level</td>
                    <td style="border: 1px solid #4B5563; padding: 8px; color: #16a34a;">Hardware Level</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Containers share host OS kernel, VMs include full OS</li>
                    <li>Docker is most popular containerization platform</li>
                    <li>Microservices architecture uses containers for scalable deployment</li>
                    <li>Container orchestration with Kubernetes for enterprise deployments</li>
                </ul>
            </div>
        </div>
    `,

    "Network Virtualization": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.12.d: Network Virtualization</h3>
            <p>Network virtualization creates multiple logical networks on shared physical infrastructure, enabling network segmentation and isolation.</p>

            <h4 style="color: #EC7063;">Common Network Virtualization Technologies:</h4>
            <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr style="background-color: #374151;">
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Technology</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Layer</th>
                    <th style="border: 1px solid #4B5563; padding: 8px; color: #F3F4F6;">Use Case</th>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">VRF-Lite</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Layer 3</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Routing isolation</td>
                </tr>
                <tr style="background-color: #374151;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">VLAN</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Layer 2</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Broadcast domain isolation</td>
                </tr>
                <tr style="background-color: #1F2937;">
                    <td style="border: 1px solid #4B5563; padding: 8px;">VXLAN</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Layer 2 over Layer 3</td>
                    <td style="border: 1px solid #4B5563; padding: 8px;">Data center overlay</td>
                </tr>
            </table>

            <h4 style="color: #EC7063;">VRF-Lite Example Configuration:</h4>
            <div style="background-color: #2D3748; border-left: 4px solid #E74C3C; padding: 15px; margin: 10px 0; border-radius: 5px;">
                <code style="color: #F7FAFC; font-family: 'Fira Code', monospace; display: block; line-height: 1.5;">
ip vrf CUSTOMER_A<br />
 rd 100:1<br />
 description Customer A Routing Domain<br />
!<br />
interface GigabitEthernet0/1<br />
 ip vrf forwarding CUSTOMER_A<br />
 ip address 192.168.1.1 255.255.255.0<br />
!<br />
show ip route vrf CUSTOMER_A
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>VRF creates separate routing instances on single device</li>
                    <li>VLANs provide Layer 2 network segmentation</li>
                    <li>Network virtualization enables multi-tenancy</li>
                    <li>Logical separation without physical infrastructure duplication</li>
                </ul>
            </div>
        </div>
    `,

    // 1.13 Switching Concepts
    "MAC Learning": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #7D3C98; border-bottom: 2px solid #7D3C98; padding-bottom: 5px;">1.13.a: MAC Learning and Aging</h3>
             <p>A Layer 2 switch builds a MAC address table to make intelligent forwarding decisions.</p>
             <p><strong>MAC Learning:</strong> The switch inspects the <em>source MAC address</em> of incoming frames to learn which devices live on which ports. <strong>MAC Aging:</strong> Entries in the table are removed after a timer (default 300s on Cisco switches) expires. Each time a frame is seen from a MAC, its timer is reset. This keeps the table accurate and prevents it from filling up with stale entries.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #A569BD; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.practicalnetworking.net/series/ethernet-switching/ethernet-switching/" target="_blank" style="color: #C39BD3;">Read: Ethernet Switching (Practical Networking)</a></em><br />
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=jdJ2yCR4aM8" target="_blank" style="color: #C39BD3;">Watch: How Switches Learn MAC Addresses (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,
    "Frame Forwarding": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #7D3C98; border-bottom: 2px solid #7D3C98; padding-bottom: 5px;">1.13.b: Frame Switching / Forwarding</h3>
             <p>When a frame arrives, the switch looks up the <em>destination MAC address</em> in its MAC table. If an entry exists, it forwards the frame only out the specific port associated with that MAC address. This process creates separate collision domains for each port, which is why switches are vastly superior to old hubs.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #A569BD; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://study-ccna.com/layer-2-switching/" target="_blank" style="color: #C39BD3;">Read: Layer 2 Switching Explained</a></em><br />
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=jdJ2yCR4aM8" target="_blank" style="color: #C39BD3;">Watch: How Switches Forward Frames (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,
    "Frame Flooding": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #7D3C98; border-bottom: 2px solid #7D3C98; padding-bottom: 5px;">1.13.c: Frame Flooding</h3>
             <p>A switch floods a frame under two main conditions:</p>
             <ol style="margin-left: 20px;">
                <li><strong>Broadcast Frame:</strong> The destination MAC is <code>FFFF.FFFF.FFFF</code>.</li>
                <li><strong>Unknown Unicast:</strong> The destination MAC is not in the switch's MAC address table.</li>
             </ol>
             <p>In both cases, the switch sends a copy of the frame out all ports in the same VLAN, except for the port it was received on. This is how devices discover each other (e.g., with ARP) on a LAN.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #A569BD; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/" target="_blank" style="color: #C39BD3;">Read: How a Network Switch Works (Cloudflare)</a></em><br />
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=jdJ2yCR4aM8" target="_blank" style="color: #C39BD3;">Watch: Frame Flooding Behavior (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,
    "MAC Address Table": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #7D3C98; border-bottom: 2px solid #7D3C98; padding-bottom: 5px;">1.13.d: MAC Address Table</h3>
             <p>The MAC Address Table (or CAM Table) is the brain of a Layer 2 switch, mapping MAC addresses to ports. It's stored in high-speed content-addressable memory (CAM) for very fast lookups.</p>
             <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch# show mac address-table
Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
10      000c.291c.5def    DYNAMIC     Gi0/1
10      aabb.cc00.0100    STATIC      Gi0/5
</code>
</pre>
             <p>A <strong>DYNAMIC</strong> entry was learned automatically. A <strong>STATIC</strong> entry was manually configured by an administrator, often for security reasons (e.g., port security).</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #A569BD; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2181837&seqNum=5" target="_blank" style="color: #C39BD3;">Read: Managing the MAC Address Table (Cisco Press)</a></em><br />
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=Ci-p_1q5y8o" target="_blank" style="color: #C39BD3;">Watch: The MAC Address Table (Practical Networking)</a></em>
            </div>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION1_DETAILS = SECTION1_DETAILS;
}