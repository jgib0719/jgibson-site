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
            <p>The key distinction is the OSI layer at which they make forwarding decisions.</p>
            
            <h4 style="color: #00CFFF;">Layer 2 Switch (MAC-based)</h4>
            <p>Operates at the Data Link Layer, using <strong>MAC addresses</strong> to forward frames within a single LAN or VLAN. It builds a MAC address table to make these decisions.</p>

            <h4 style="color: #00CFFF;">Layer 3 Switch (IP-based)</h4>
            <p>A multilayer switch that can do everything a Layer 2 switch can, but adds routing functionality. It can inspect <strong>IP addresses</strong> to route traffic between different VLANs at very high speeds using specialized hardware (ASICs).</p>
            
            <h4 style="color: #00CFFF;">Switch Forwarding Methods</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                 <li><strong>Store-and-Forward:</strong> The switch receives the entire frame and runs a CRC check. If the frame is valid, it looks up the destination MAC and forwards it. If it's corrupt, it's dropped. This is the most common method today as it ensures data integrity.</li>
                 <li><strong>Cut-Through:</strong> The switch reads only the destination MAC address before it starts forwarding the frame. It's faster but can forward corrupted frames.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://community.cisco.com/t5/switching/l2-vs-l3-switch-what-s-the-difference/td-p/2034963" target="_blank" style="color: #66B2FF;">Read: Layer 2 vs. Layer 3 Switch Differences</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=ofjgyd_jQpM" target="_blank" style="color: #66B2FF;">Watch: L2 vs L3 Switching (NetworkChuck)</a></em>
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
    "Controllers (WLC)": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">1.1.e: Controllers - WLC & Cisco DNA Center</h3>
            <p>Controllers centralize network management and configuration.</p>
            <h4 style="color: #00CFFF;">Wireless LAN Controller (WLC)</h4>
            <p>A WLC is the central brain for Lightweight APs. APs and WLCs communicate using the <strong>CAPWAP</strong> (Control and Provisioning of Wireless Access Points) protocol. A secure CAPWAP tunnel is built between the AP and WLC for management traffic, and optionally, another tunnel can carry client data traffic back to the controller.</p>
            <h4 style="color: #00CFFF;">Cisco DNA Center</h4>
            <p>An advanced management platform for the entire network (wired & wireless), serving as the command center for Cisco's Intent-Based Networking architecture.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/solutions/enterprise-networks/dna-center/index.html" target="_blank" style="color: #66B2FF;">Read: Cisco DNA Center Overview</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=smnYq_xGkP4" target="_blank" style="color: #66B2FF;">Watch: Cisco WLC Basics (Jeremy's IT Lab)</a></em>
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
    
    // 1.4 Interface and Cable Issues
    "Interface/Cable Issues": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">1.4: Interface & Cable Issues</h3>
             <p>Troubleshooting physical layer issues using <code>show interface</code> is a fundamental skill.</p>
            <h4 style="color: #EC7063;">Interpreting Interface Counters:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>CRC Errors:</strong> Frame corruption. Almost always a bad cable, faulty NIC, or EMI.</li>
                <li><strong>Collisions:</strong> Normal on a half-duplex link. If you see them on a full-duplex link, it's a sign of a duplex mismatch.</li>
                <li><strong>Late Collisions:</strong> A collision that occurs after the 64th byte. This is a serious problem, indicating a duplex mismatch or a cable that exceeds the 100m length limit.</li>
                <li><strong>Runts:</strong> Frames smaller than the 64-byte minimum. Usually caused by collisions.</li>
                <li><strong>Giants:</strong> Frames larger than the 1518-byte maximum. Often caused by a faulty NIC.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EC7063; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/interfaces-modules/network-modules/12760-52.html" target="_blank" style="color: #66B2FF;">Read: Troubleshooting Ethernet Interface Issues</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=BJ-x04eglH8" target="_blank" style="color: #66B2FF;">Watch: Show Interface Command Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,
    
    // 1.5 Compare TCP to UDP
    "TCP vs. UDP": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">1.5: TCP vs. UDP</h3>
            <p>The two primary protocols at the Transport Layer (Layer 4).</p>
            <h4 style="color: #AF7AC5;">TCP (Transmission Control Protocol) - The Reliable Phone Call</h4>
            <p><strong>Connection-oriented</strong> and reliable. Its header contains fields like <strong>Sequence Numbers</strong> (to track order), <strong>Acknowledgment Numbers</strong> (to confirm receipt), and <strong>Window Size</strong> (for flow control). This overhead makes it reliable. Used for web, email, file transfers.</p>
            <h4 style="color: #AF7AC5;">UDP (User Datagram Protocol) - The Fast Postcard</h4>
            <p><strong>Connectionless</strong> and unreliable. Its header is very simple, containing just source/destination ports and a checksum. This low overhead makes it very fast. Used for VoIP, video streaming, online gaming, DNS.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.geeksforgeeks.org/tcp-vs-udp-in-computer-network/" target="_blank" style="color: #66B2FF;">Read: TCP vs. UDP Differences (GeeksforGeeks)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=u-pr0u-jM3U" target="_blank" style="color: #66B2FF;">Watch: TCP vs UDP (Sunny Classroom)</a></em>
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
    
    // 1.7 Private IPv4 Addressing
    "Private IPv4 Addressing": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">1.7: The Need for Private IPv4 Addressing</h3>
             <p>Private addressing (<strong>RFC 1918</strong>) reserves address ranges for use inside private networks.</p>
             <h4 style="color: #5DADE2;">Private Ranges & APIPA:</h4>
             <p>The private ranges are <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, and <code>192.168.0.0/16</code>. If a Windows PC can't reach a DHCP server, it will assign itself an <strong>APIPA (Automatic Private IP Addressing)</strong> address in the <code>169.254.0.0/16</code> range. This allows communication on the local subnet only and is a clear sign of a DHCP problem.</p>
             <p>To communicate with the internet, private addresses are translated to a public IP using <strong>NAT</strong>.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://datatracker.ietf.org/doc/html/rfc1918" target="_blank" style="color: #66B2FF;">Read: RFC 1918: Private Internet Address Allocation</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=02JU2gCg-kE" target="_blank" style="color: #66B2FF;">Watch: Private IP Addresses and NAT (Practical Networking)</a></em>
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
    
    // 1.9 IPv6 Address Types
    "IPv6 Address Types": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #8E44AD; border-bottom: 2px solid #8E44AD; padding-bottom: 5px;">1.9: IPv6 Address Types</h3>
             <p>IPv6 removes broadcast and introduces new address types.</p>
             <h4 style="color: #A569BD;">Unicast Types (One-to-One):</h4>
             <p><strong>Global Unicast (GUA):</strong> Public. <strong>Unique Local (ULA):</strong> Private. <strong>Link-Local (LLA):</strong> Non-routable, used for local communication (e.g., neighbor discovery). Every IPv6-enabled interface MUST have a Link-Local address (<code>FE80::/10</code>).</p>
             <h4 style="color: #A569BD;">Important Multicast Addresses:</h4>
             <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>FF02::1:</strong> All-nodes multicast. Pinging this address reaches every device on the local link.</li>
                <li><strong>FF02::2:</strong> All-routers multicast. Pinging this reaches all routers on the local link.</li>
             </ul>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #A569BD; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2803866&seqNum=3" target="_blank" style="color: #C39BD3;">Read: IPv6 Address Types (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=5-8O71-gQo8" target="_blank" style="color: #C39BD3;">Watch: IPv6 Address Types (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,
    "Modified EUI-64": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #8E44AD; border-bottom: 2px solid #8E44AD; padding-bottom: 5px;">1.9.d: Modified EUI-64</h3>
             <p>A method for a device to automatically generate its own IPv6 interface ID from its MAC address.</p>
             <h4 style="color: #A569BD;">The EUI-64 Process:</h4>
             <p>1. Split the 48-bit MAC in half. 2. Insert <code>FFFE</code> in the middle. 3. Flip the 7th bit of the first byte.</p>
             <p><strong>Privacy Concerns:</strong> Because the EUI-64 address is tied to the hardware MAC, it can be used to track a device across different networks. For this reason, modern operating systems often use a randomly generated interface ID for privacy instead of EUI-64 when performing SLAAC.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #A569BD; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.networkacademy.io/ccna/ipv6/eui-64-explained" target="_blank" style="color: #C39BD3;">Read: EUI-64 Explained</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=FrGfTEs0KGY" target="_blank" style="color: #C39BD3;">Watch: EUI-64 for IPv6 Explained (Practical Networking)</a></em>
            </div>
        </div>
    `,

    // 1.10 Verify IP Parameters
    "Verify IP Parameters": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #1ABC9C; border-bottom: 2px solid #1ABC9C; padding-bottom: 5px;">1.10: Verify IP Parameters for Client OS</h3>
             <p>Verifying a client's IP settings is a day-one troubleshooting step.</p>
             <h4 style="color: #48C9B0;">Verification Commands:</h4>
             <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>IP Info:</strong> <code>ipconfig /all</code> (Windows) or <code>ip addr show</code> (Mac/Linux).</li>
                <li><strong>Connectivity Test:</strong> <code>ping [ip_address]</code> sends an ICMP echo request to test basic reachability.</li>
                <li><strong>Path Test:</strong> <code>tracert [ip_address]</code> (Windows) or <code>traceroute [ip_address]</code> (Mac/Linux) shows the hop-by-hop path to a destination.</li>
             </ul>
             <p>If you can ping your gateway but not an external IP like 8.8.8.8, the problem is likely with your router or ISP. If you can ping 8.8.8.8 but not google.com, it's a DNS issue.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #48C9B0; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.lifewire.com/what-is-ipconfig-2625865" target="_blank" style="color: #76D7C4;">Read: How to Use ipconfig</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=0_g-vo2qt5k" target="_blank" style="color: #76D7C4;">Watch: ipconfig and ifconfig commands (Professor Messer)</a></em>
            </div>
        </div>
    `,

    // 1.11 Wireless Principles
    "Wi-Fi Channels": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">1.11.a: Nonoverlapping Wi-Fi Channels</h3>
             <p>To avoid co-channel interference, adjacent APs should use non-overlapping channels.</p>
             <h4 style="color: #5DADE2;">2.4 GHz Band</h4>
             <p>Only <strong>channels 1, 6, and 11</strong> are non-overlapping in North America.</p>
             <h4 style="color: #5DADE2;">5 GHz Band & Channel Bonding</h4>
             <p>The 5 GHz band has many more non-overlapping channels. It also allows for <strong>channel bonding</strong>, where multiple 20 MHz channels are combined into a wider 40 MHz or 80 MHz channel to increase data rates. The tradeoff is that using wider channels reduces the total number of available non-overlapping channels, requiring more careful channel planning.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.metageek.com/training/resources/why-channels-1-6-11/" target="_blank" style="color: #66B2FF;">Read: Why Channels 1, 6, and 11?</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=pKe4jwzjhC4" target="_blank" style="color: #66B2FF;">Watch: Wi-Fi Channels Explained (Crosstalk)</a></em>
            </div>
        </div>
    `,
    "Wireless Concepts": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">1.11.b: Wireless Concepts</h3>
             <p><strong>SSID:</strong> The network name. <strong>RF:</strong> Key metrics are signal strength (dBm) and signal-to-noise ratio (SNR).</p>
             <h4 style="color: #5DADE2;">Wireless Encryption & Authentication</h4>
             <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>WPA2/WPA3 Personal (PSK):</strong> Uses a Pre-Shared Key. Everyone on the WLAN uses the same password. Simple, but less secure.</li>
                <li><strong>WPA2/WPA3 Enterprise (802.1X):</strong> Does not use a shared key. Each user authenticates with their unique credentials (e.g., username/password) to a central RADIUS server, which then grants them access. Far more secure and the standard for corporate environments.</li>
             </ul>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/products/wireless/what-is-wlan.html" target="_blank" style="color: #66B2FF;">Read: What is a WLAN?</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=au_I-cpVzLw" target="_blank" style="color: #66B2FF;">Watch: How Wi-Fi Works (Techquickie)</a></em>
            </div>
        </div>
    `,

    // 1.12 Virtualization
    "Virtualization": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #E67E22; border-bottom: 2px solid #E67E22; padding-bottom: 5px;">1.12: Virtualization Fundamentals</h3>
             <p>Virtualization creates multiple logical systems on a single piece of physical hardware.</p>
             <h4 style="color: #EB984E;">Types of Hypervisors:</h4>
             <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Type 1 (Bare-Metal):</strong> The hypervisor is installed directly onto the physical hardware, like an OS. (e.g., VMware ESXi, Microsoft Hyper-V). This is the standard for data centers due to its high performance and stability.</li>
                <li><strong>Type 2 (Hosted):</strong> The hypervisor runs as an application on top of an existing host operating system. (e.g., VMware Workstation, VirtualBox). Common for desktop use and testing.</li>
             </ul>
             <p><strong>Containers</strong> are a more lightweight OS-level virtualization. <strong>VRFs</strong> are a form of network virtualization, creating separate routing tables within a single router.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EB984E; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.vmware.com/topics/glossary/content/virtualization.html" target="_blank" style="color: #F0B27A;">Read: What is Virtualization? (VMware)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=F2shs2-t90E" target="_blank" style="color: #F0B27A;">Watch: Virtual Machines vs Containers (IBM)</a></em>
            </div>
        </div>
    `,

    // 1.13 Switching Concepts
    "MAC Learning & Aging": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
             <h3 style="color: #7D3C98; border-bottom: 2px solid #7D3C98; padding-bottom: 5px;">1.13.a: MAC Learning and Aging</h3>
             <p>A Layer 2 switch builds a MAC address table to make intelligent forwarding decisions.</p>
             <p><strong>MAC Learning:</strong> The switch inspects the <em>source MAC address</em> of incoming frames to learn which devices live on which ports. <strong>MAC Aging:</strong> Entries in the table are removed after a timer (default 300s on Cisco switches) expires. Each time a frame is seen from a MAC, its timer is reset. This keeps the table accurate and prevents it from filling up with stale entries.</p>
             <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #A569BD; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.practicalnetworking.net/series/ethernet-switching/ethernet-switching/" target="_blank" style="color: #C39BD3;">Read: Ethernet Switching (Practical Networking)</a></em><br>
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
                <em style="font-size: 0.9em;"><a href="https://study-ccna.com/layer-2-switching/" target="_blank" style="color: #C39BD3;">Read: Layer 2 Switching Explained</a></em><br>
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
                <em style="font-size: 0.9em;"><a href="https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/" target="_blank" style="color: #C39BD3;">Read: How a Network Switch Works (Cloudflare)</a></em><br>
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
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2181837&seqNum=5" target="_blank" style="color: #C39BD3;">Read: Managing the MAC Address Table (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=Ci-p_1q5y8o" target="_blank" style="color: #C39BD3;">Watch: The MAC Address Table (Practical Networking)</a></em>
            </div>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION1_DETAILS = SECTION1_DETAILS;
}