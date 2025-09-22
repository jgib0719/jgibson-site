# CCNA Section 1 - Extracted Modal Content

**Extraction Date:** 2025-09-20 22:25:11
**Total Topics:** 44
**Categories:** 3

## 📋 Topic Categories

### Network Infrastructure (33 topics)
- Routers
- L2 and L3 Switches
- Controllers (WLC)
- Endpoints
- Servers
- PoE
- Spine-Leaf
- WAN
- SOHO
- Copper - Twisted Pair
- IPv4 & Subnetting
- IPv6 Addressing
- Fiber Optic - Multimode
- Cable Categories
- Connectors
- Ethernet Connections
- Interface/Cable Issues
- Private IPv4 Addressing
- IPv6 Address Types
- Modified EUI-64
- Verify IP Parameters
- Virtualization
- MAC Learning & Aging
- Frame Forwarding
- MAC Address Table
- On-Premises vs. Cloud
- OSI Model
- Ethernet Frame Structure
- Collision vs Broadcast Domains
- CSMA/CD
- Half vs Full Duplex
- Default Gateway
- Ping & Traceroute

### Network Access (10 topics)
- NGFW & IPS
- Access Points
- Two-Tier
- Three-Tier
- Fiber Optic - Single Mode
- TCP vs. UDP
- Wi-Fi Channels
- Wireless Concepts
- Frame Flooding
- TCP/IP Stack

### IP Connectivity (1 topics)
- ARP (Address Resolution Protocol)

---

## 📖 Full Topic Content

## Network Infrastructure

### Routers

**Title:** Routers - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Router Functions</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Layer 3 Forwarding:</strong> Routes packets between different networks using routing tables</li>
                                    <li><strong>Path Determination:</strong> Uses routing protocols (OSPF, EIGRP, BGP) to determine best paths</li>
                                    <li><strong>Packet Forwarding:</strong> Examines destination IP, consults routing table, forwards to next hop</li>
                                    <li><strong>Network Segmentation:</strong> Breaks up broadcast domains and collision domains</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Router Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>CPU:</strong> Executes routing protocols and control plane functions</li>
                                    <li><strong>RAM:</strong> Stores running configuration, routing tables, ARP cache</li>
                                    <li><strong>NVRAM:</strong> Stores startup configuration (non-volatile)</li>
                                    <li><strong>Flash:</strong> Stores Cisco IOS and other system files</li>
                                    <li><strong>ROM:</strong> Contains bootstrap program and POST</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Boot Process</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        1. POST (Power-On Self Test)<br>
                                        2. Bootstrap loads from ROM<br>
                                        3. IOS loads from Flash to RAM<br>
                                        4. Configuration loads from NVRAM<br>
                                        5. Router becomes operational
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand router vs switch functions</li>
                                    <li>Configure basic router settings (hostname, passwords, interfaces)</li>
                                    <li>Implement static and dynamic routing</li>
                                    <li>Troubleshoot routing issues using show commands</li>
                                </ul>
                            </section>
                        </div>

---

### L2 and L3 Switches

**Title:** Layer 2 and Layer 3 Switches - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Layer 2 Switch Functions</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>MAC Address Learning:</strong> Builds CAM table by learning source MAC addresses</li>
                                    <li><strong>Frame Forwarding:</strong> Forwards frames based on destination MAC address</li>
                                    <li><strong>Loop Prevention:</strong> Implements Spanning Tree Protocol (STP/RSTP)</li>
                                    <li><strong>VLAN Support:</strong> Creates virtual LANs for network segmentation</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Layer 3 Switch Functions</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Inter-VLAN Routing:</strong> Routes between VLANs without external router</li>
                                    <li><strong>Hardware-Based Routing:</strong> Uses ASICs for wire-speed Layer 3 forwarding</li>
                                    <li><strong>Routing Protocols:</strong> Supports OSPF, EIGRP for dynamic routing</li>
                                    <li><strong>Access Control:</strong> Can implement Layer 3 ACLs</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Key Commands</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        show mac address-table          # View CAM table<br>
                                        show vlan brief                 # Display VLAN information<br>
                                        show spanning-tree              # STP status<br>
                                        show ip route                   # L3 routing table<br>
                                        interface vlan 10               # Create SVI for VLAN 10
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure VLANs and trunk ports</li>
                                    <li>Implement inter-VLAN routing with SVIs</li>
                                    <li>Troubleshoot switching loops and STP issues</li>
                                    <li>Configure port security and access control</li>
                                </ul>
                            </section>
                        </div>

---

### Controllers (WLC)

**Title:** Controllers (Cisco DNA Center and WLC) - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Cisco DNA Center</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Intent-Based Networking:</strong> Policy-driven automation and assurance</li>
                                    <li><strong>Network Assurance:</strong> AI/ML-powered analytics and troubleshooting</li>
                                    <li><strong>Software-Defined Access:</strong> Automated network segmentation and access control</li>
                                    <li><strong>Centralized Management:</strong> Single pane of glass for entire network infrastructure</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">WLC Functions</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Centralized Management:</strong> Configure and monitor multiple APs from single point</li>
                                    <li><strong>CAPWAP Protocol:</strong> Control and Provisioning of Wireless Access Points</li>
                                    <li><strong>RF Management:</strong> Automatic power and channel optimization</li>
                                    <li><strong>Client Mobility:</strong> Seamless roaming between APs</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CAPWAP Tunnels</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Control Tunnel:</strong> Management traffic between WLC and AP (UDP 5246)</li>
                                    <li><strong>Data Tunnel:</strong> Client data traffic tunneled to WLC (UDP 5247)</li>
                                    <li><strong>Split Tunneling:</strong> Some traffic local, some to controller</li>
                                    <li><strong>FlexConnect:</strong> Local switching at AP when WLC unreachable</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">WLC Deployment Models</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Centralized:</strong> WLC in data center, APs distributed</li>
                                    <li><strong>Distributed:</strong> Smaller WLCs closer to AP clusters</li>
                                    <li><strong>Cloud-Based:</strong> Virtual WLC in cloud infrastructure</li>
                                    <li><strong>Embedded:</strong> WLC function integrated into switch</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand CAPWAP tunnel establishment</li>
                                    <li>Configure WLANs and security policies</li>
                                    <li>Troubleshoot AP join process to WLC</li>
                                    <li>Implement FlexConnect for branch offices</li>
                                </ul>
                            </section>
                        </div>

---

### Endpoints

**Title:** Network Endpoints - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Endpoint Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Workstations:</strong> Desktop and laptop computers</li>
                                    <li><strong>Mobile Devices:</strong> Smartphones, tablets, IoT devices</li>
                                    <li><strong>IP Phones:</strong> VoIP endpoints for unified communications</li>
                                    <li><strong>Printers:</strong> Network-attached printing devices</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Network Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Static IP: Manual IP configuration<br>
                                        DHCP: Automatic IP assignment<br>
                                        DNS: Domain name resolution<br>
                                        Default Gateway: Router for remote networks
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure DHCP server and reservations</li>
                                    <li>Troubleshoot IP connectivity issues</li>
                                    <li>Implement VLAN assignments for endpoints</li>
                                    <li>Configure port security for endpoint connections</li>
                                </ul>
                            </section>
                        </div>

---

### Servers

**Title:** Network Servers - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Server Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>DHCP Server:</strong> Assigns IP addresses automatically</li>
                                    <li><strong>DNS Server:</strong> Resolves domain names to IP addresses</li>
                                    <li><strong>Web Server:</strong> Hosts websites and web applications</li>
                                    <li><strong>File Server:</strong> Centralized file storage and sharing</li>
                                    <li><strong>Email Server:</strong> Handles email communication</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Server Placement</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Data Center:</strong> Centralized server farm with redundancy</li>
                                    <li><strong>Server Farm:</strong> Multiple servers in secure environment</li>
                                    <li><strong>DMZ:</strong> Public-facing servers in screened subnet</li>
                                    <li><strong>Cloud:</strong> Virtual servers in cloud infrastructure</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure DHCP and DNS services on routers</li>
                                    <li>Implement NTP for time synchronization</li>
                                    <li>Configure syslog for centralized logging</li>
                                    <li>Set up SNMP for network monitoring</li>
                                </ul>
                            </section>
                        </div>

---

### PoE

**Title:** Power over Ethernet - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">PoE Standards</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        802.3af (PoE): 15.4W at source, 12.95W at device<br>
                                        802.3at (PoE+): 30W at source, 25.5W at device<br>
                                        802.3bt (PoE++): Up to 60W or 100W<br>
                                        Cisco UPoE: Up to 60W proprietary standard
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">PoE Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>PSE (Power Sourcing Equipment):</strong> Switch or injector providing power</li>
                                    <li><strong>PD (Powered Device):</strong> Device receiving power (AP, IP phone, camera)</li>
                                    <li><strong>Classification:</strong> PD advertises power requirements to PSE</li>
                                    <li><strong>Detection:</strong> PSE detects if device supports PoE</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Power Delivery Methods</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Alternative A:</strong> Power over data pairs (1,2 and 3,6)</li>
                                    <li><strong>Alternative B:</strong> Power over spare pairs (4,5 and 7,8)</li>
                                    <li><strong>4-Pair:</strong> All pairs used for higher power (PoE++)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Calculate PoE power budgets for switches</li>
                                    <li>Configure PoE on switch interfaces</li>
                                    <li>Troubleshoot PoE delivery issues</li>
                                    <li>Understand PoE+ requirements for devices</li>
                                </ul>
                            </section>
                        </div>

---

### Spine-Leaf

**Title:** Spine-Leaf Architecture - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Architecture Overview</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Spine Switches:</strong> High-performance core switches</li>
                                    <li><strong>Leaf Switches:</strong> Access switches connecting servers/users</li>
                                    <li><strong>Full Mesh:</strong> Every leaf connects to every spine</li>
                                    <li><strong>Consistent Latency:</strong> Same hop count between any two endpoints</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand modern data center architectures</li>
                                    <li>Compare traditional vs spine-leaf designs</li>
                                    <li>Recognize use cases for spine-leaf topology</li>
                                </ul>
                            </section>
                        </div>

---

### WAN

**Title:** Wide Area Network - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">WAN Technologies</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>MPLS:</strong> Multi-Protocol Label Switching for enterprise connectivity</li>
                                    <li><strong>Internet VPN:</strong> Site-to-site VPN over public internet</li>
                                    <li><strong>SD-WAN:</strong> Software-defined WAN with centralized policy</li>
                                    <li><strong>Metro Ethernet:</strong> Layer 2 connectivity over metropolitan area</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure PPP and Frame Relay (legacy)</li>
                                    <li>Implement site-to-site VPN tunnels</li>
                                    <li>Understand WAN connectivity options</li>
                                    <li>Troubleshoot WAN connectivity issues</li>
                                </ul>
                            </section>
                        </div>

---

### SOHO

**Title:** Small Office/Home Office - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SOHO Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Router/Modem:</strong> Internet connectivity and NAT</li>
                                    <li><strong>Wireless AP:</strong> Built into router for Wi-Fi access</li>
                                    <li><strong>Switch Ports:</strong> Limited Ethernet connections</li>
                                    <li><strong>Firewall:</strong> Basic security features built-in</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure basic router security</li>
                                    <li>Set up wireless networks</li>
                                    <li>Implement port forwarding and NAT</li>
                                    <li>Troubleshoot home network issues</li>
                                </ul>
                            </section>
                        </div>

---

### Copper - Twisted Pair

**Title:** Copper Twisted Pair Cabling - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Cable Categories</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Cat 5e: 100 MHz, 1 Gbps up to 100m<br>
                                        Cat 6: 250 MHz, 1 Gbps up to 100m, 10 Gbps up to 55m<br>
                                        Cat 6a: 500 MHz, 10 Gbps up to 100m<br>
                                        Cat 7: 600 MHz, 10 Gbps up to 100m
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ethernet Standards</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>10BASE-T:</strong> 10 Mbps over Cat 3/5</li>
                                    <li><strong>100BASE-TX:</strong> 100 Mbps over Cat 5/5e</li>
                                    <li><strong>1000BASE-T:</strong> 1 Gbps over Cat 5e/6</li>
                                    <li><strong>10GBASE-T:</strong> 10 Gbps over Cat 6a/7</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Identify cable categories and capabilities</li>
                                    <li>Understand Ethernet pinouts (T568A/B)</li>
                                    <li>Troubleshoot cable issues</li>
                                    <li>Calculate maximum distances</li>
                                </ul>
                            </section>
                        </div>

---

### IPv4 & Subnetting

**Title:** IPv4 Addressing & Subnetting - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">IPv4 Address Classes</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Class A: 1.0.0.0 to 126.255.255.255 (/8)<br>
                                        Class B: 128.0.0.0 to 191.255.255.255 (/16)<br>
                                        Class C: 192.0.0.0 to 223.255.255.255 (/24)
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Subnetting Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Determine Requirements:</strong> Number of subnets and hosts needed</li>
                                    <li><strong>Borrow Bits:</strong> Use host bits for subnet addressing</li>
                                    <li><strong>Calculate Ranges:</strong> Network, broadcast, and usable addresses</li>
                                    <li><strong>VLSM:</strong> Variable Length Subnet Masking for efficiency</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Calculate subnet ranges quickly</li>
                                    <li>Implement VLSM designs</li>
                                    <li>Troubleshoot addressing issues</li>
                                    <li>Configure router interfaces with correct addressing</li>
                                </ul>
                            </section>
                        </div>

---

### IPv6 Addressing

**Title:** IPv6 Addressing - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">IPv6 Address Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Global Unicast:</strong> 2000::/3 - Routable on internet</li>
                                    <li><strong>Link-Local:</strong> FE80::/10 - Local segment communication</li>
                                    <li><strong>Unique Local:</strong> FC00::/7 - Private addressing</li>
                                    <li><strong>Multicast:</strong> FF00::/8 - One-to-many communication</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Address Configuration</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Static Assignment:</strong> Manual configuration</li>
                                    <li><strong>SLAAC:</strong> Stateless Address Auto-Configuration</li>
                                    <li><strong>DHCPv6:</strong> Stateful address assignment</li>
                                    <li><strong>EUI-64:</strong> Modified Extended Unique Identifier</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure IPv6 on router interfaces</li>
                                    <li>Implement SLAAC and DHCPv6</li>
                                    <li>Understand neighbor discovery protocol</li>
                                    <li>Troubleshoot IPv6 connectivity</li>
                                </ul>
                            </section>
                        </div>

---

### Fiber Optic - Multimode

**Title:** Multimode Fiber Optic - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Multimode Fiber Characteristics</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Core Diameter:</strong> 50 or 62.5 microns (larger core)</li>
                                    <li><strong>Light Propagation:</strong> Multiple modes of light can propagate</li>
                                    <li><strong>Distance:</strong> Up to 550 meters (OM4) or 2km (depending on standard)</li>
                                    <li><strong>Modal Dispersion:</strong> Light pulses spread out over distance</li>
                                    <li><strong>Cost:</strong> Less expensive than single-mode for short distances</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Multimode Categories</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        OM1: 62.5/125μm, 850nm, 275m @ 1Gbps<br>
                                        OM2: 50/125μm, 850nm, 550m @ 1Gbps<br>
                                        OM3: 50/125μm, 850nm, 300m @ 10Gbps<br>
                                        OM4: 50/125μm, 850nm, 400m @ 10Gbps<br>
                                        OM5: 50/125μm, wideband, 400m @ 40/100Gbps
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Applications</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Building Backbone:</strong> Floor-to-floor connections</li>
                                    <li><strong>Data Center:</strong> Server-to-switch connections</li>
                                    <li><strong>Campus Networks:</strong> Short to medium distance links</li>
                                    <li><strong>LAN Infrastructure:</strong> High-speed local connections</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand modal dispersion limitations</li>
                                    <li>Select appropriate fiber grade for applications</li>
                                    <li>Configure fiber interfaces on switches and routers</li>
                                    <li>Troubleshoot fiber connectivity issues</li>
                                </ul>
                            </section>
                        </div>

---

### Cable Categories

**Title:** Cable Categories - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">UTP Cable Categories</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Cat 3: 16 MHz, 10 Mbps (legacy)<br>
                                        Cat 5: 100 MHz, 100 Mbps (legacy)<br>
                                        Cat 5e: 100 MHz, 1000 Mbps, 100m<br>
                                        Cat 6: 250 MHz, 1000 Mbps/10 Gbps (55m)<br>
                                        Cat 6a: 500 MHz, 10 Gbps, 100m<br>
                                        Cat 7: 600 MHz, 10 Gbps, 100m (shielded)<br>
                                        Cat 8: 2000 MHz, 25/40 Gbps, 30m
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Cable Construction</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>UTP:</strong> Unshielded Twisted Pair - most common</li>
                                    <li><strong>STP:</strong> Shielded Twisted Pair - EMI protection</li>
                                    <li><strong>FTP:</strong> Foiled Twisted Pair - overall shield</li>
                                    <li><strong>SFTP:</strong> Shielded Foiled Twisted Pair - dual protection</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Performance Factors</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Bandwidth:</strong> Frequency range cable can carry</li>
                                    <li><strong>Attenuation:</strong> Signal loss over distance</li>
                                    <li><strong>NEXT:</strong> Near-End Crosstalk between pairs</li>
                                    <li><strong>FEXT:</strong> Far-End Crosstalk interference</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Select appropriate cable category for speed requirements</li>
                                    <li>Understand distance limitations for each category</li>
                                    <li>Identify cable construction types and uses</li>
                                    <li>Troubleshoot cable performance issues</li>
                                </ul>
                            </section>
                        </div>

---

### Connectors

**Title:** Network Connectors - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Copper Connectors</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>RJ45:</strong> 8P8C connector for Ethernet (Cat 5e/6/6a)</li>
                                    <li><strong>RJ11:</strong> 6P4C connector for telephone lines</li>
                                    <li><strong>GG45:</strong> Backward compatible with RJ45, supports Cat 7</li>
                                    <li><strong>TERA:</strong> Cat 7 connector with improved performance</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Fiber Optic Connectors</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>LC (Lucent Connector):</strong> Small form factor, duplex</li>
                                    <li><strong>SC (Subscriber Connector):</strong> Square connector, push-pull</li>
                                    <li><strong>ST (Straight Tip):</strong> Bayonet mount, twist-lock</li>
                                    <li><strong>FC (Ferrule Connector):</strong> Threaded, high precision</li>
                                    <li><strong>MTP/MPO:</strong> Multi-fiber connector for high density</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Wiring Standards</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        T568A: Green/White-Green-Orange/White-Blue-Blue/White-Orange-Brown/White-Brown<br>
                                        T568B: Orange/White-Orange-Green/White-Blue-Blue/White-Green-Brown/White-Brown<br>
                                        Straight-through: Both ends same standard<br>
                                        Crossover: One T568A, one T568B
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Identify connector types and applications</li>
                                    <li>Understand T568A vs T568B wiring standards</li>
                                    <li>Create straight-through and crossover cables</li>
                                    <li>Troubleshoot connector and wiring issues</li>
                                </ul>
                            </section>
                        </div>

---

### Ethernet Connections

**Title:** Ethernet Connections (Shared Media and Point-to-Point) - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Shared Media (Legacy)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Ethernet Hubs:</strong> All devices share the same collision domain</li>
                                    <li><strong>CSMA/CD Required:</strong> Carrier Sense Multiple Access with Collision Detection</li>
                                    <li><strong>Half-Duplex:</strong> Cannot send and receive simultaneously</li>
                                    <li><strong>Bandwidth Sharing:</strong> Total bandwidth divided among all connected devices</li>
                                    <li><strong>Collision Domain:</strong> All ports on hub are in same collision domain</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Point-to-Point (Modern)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Ethernet Switches:</strong> Each port is separate collision domain</li>
                                    <li><strong>No CSMA/CD:</strong> Collision detection not needed</li>
                                    <li><strong>Full-Duplex:</strong> Simultaneous send and receive capability</li>
                                    <li><strong>Dedicated Bandwidth:</strong> Full bandwidth available to each port</li>
                                    <li><strong>Microsegmentation:</strong> Each switch port creates separate collision domain</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Key Differences</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <div class="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <h4 class="text-yellow-400 font-semibold mb-2">Shared Media (Hub)</h4>
                                            <ul class="text-slate-300 space-y-1">
                                                <li>• Single collision domain</li>
                                                <li>• Half-duplex operation</li>
                                                <li>• Shared bandwidth</li>
                                                <li>• CSMA/CD required</li>
                                                <li>• Collisions increase with load</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 class="text-green-400 font-semibold mb-2">Point-to-Point (Switch)</h4>
                                            <ul class="text-slate-300 space-y-1">
                                                <li>• Separate collision domains</li>
                                                <li>• Full-duplex operation</li>
                                                <li>• Dedicated bandwidth</li>
                                                <li>• No collisions</li>
                                                <li>• Consistent performance</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Distinguish between shared media and point-to-point connections</li>
                                    <li>Understand why modern networks use switches instead of hubs</li>
                                    <li>Explain collision domains and broadcast domains</li>
                                    <li>Configure duplex settings on switch interfaces</li>
                                </ul>
                            </section>
                        </div>

---

### Interface/Cable Issues

**Title:** Interface and Cable Issues - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common Cable Issues</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Attenuation:</strong> Signal weakens over distance</li>
                                    <li><strong>Crosstalk:</strong> Signal interference between wire pairs</li>
                                    <li><strong>EMI/RFI:</strong> Electromagnetic/Radio frequency interference</li>
                                    <li><strong>Bad Connectors:</strong> Loose or damaged RJ45 connections</li>
                                    <li><strong>Wrong Cable Type:</strong> Using wrong category or straight vs crossover</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Interface Status Issues</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Up/Up: Interface working normally<br>
                                        Down/Down: Physical layer problem<br>
                                        Up/Down: Data link layer problem<br>
                                        Administratively Down: Interface shutdown
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Troubleshooting Commands</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        show interfaces<br>
                                        show interfaces status<br>
                                        show controllers<br>
                                        test cable-diagnostics tdr interface<br>
                                        show cable-diagnostics tdr interface
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Diagnose physical layer connectivity issues</li>
                                    <li>Use cable diagnostic tools and commands</li>
                                    <li>Interpret interface status indicators</li>
                                    <li>Resolve duplex and speed mismatches</li>
                                </ul>
                            </section>
                        </div>

---

### Private IPv4 Addressing

**Title:** Private IPv4 Addressing - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Private Address Ranges (RFC 1918)</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Class A: 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)<br>
                                        Class B: 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)<br>
                                        Class C: 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Private Address Benefits</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Address Conservation:</strong> Reduces public IPv4 address consumption</li>
                                    <li><strong>Security:</strong> Not routable on public internet</li>
                                    <li><strong>Flexibility:</strong> Can be reused in different organizations</li>
                                    <li><strong>Cost Savings:</strong> No need to purchase public address blocks</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">NAT (Network Address Translation)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Static NAT:</strong> One-to-one mapping of private to public</li>
                                    <li><strong>Dynamic NAT:</strong> Pool of public addresses for private hosts</li>
                                    <li><strong>PAT (Port Address Translation):</strong> Many-to-one using port numbers</li>
                                    <li><strong>Port Forwarding:</strong> Redirect external traffic to internal servers</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure NAT and PAT on routers</li>
                                    <li>Troubleshoot NAT translation issues</li>
                                    <li>Implement port forwarding for services</li>
                                    <li>Understand NAT impact on applications</li>
                                </ul>
                            </section>
                        </div>

---

### IPv6 Address Types

**Title:** IPv6 Address Types - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Unicast Addresses</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Global Unicast:</strong> 2000::/3 - Internet routable addresses</li>
                                    <li><strong>Unique Local:</strong> FC00::/7 - Private addressing (like RFC 1918)</li>
                                    <li><strong>Link-Local:</strong> FE80::/10 - Local segment communication only</li>
                                    <li><strong>Loopback:</strong> ::1 - IPv6 equivalent of 127.0.0.1</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Multicast Addresses</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        FF00::/8 - Multicast prefix<br>
                                        FF02::1 - All nodes multicast<br>
                                        FF02::2 - All routers multicast<br>
                                        FF02::5 - OSPFv3 all SPF routers<br>
                                        FF02::1:FF00:0/104 - Solicited node multicast
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Special Addresses</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Unspecified:</strong> :: (all zeros, like 0.0.0.0)</li>
                                    <li><strong>IPv4-Mapped:</strong> ::FFFF:IPv4 (transition mechanism)</li>
                                    <li><strong>6to4:</strong> 2002::/16 (IPv6 over IPv4 tunneling)</li>
                                    <li><strong>Teredo:</strong> 2001::/32 (NAT traversal for IPv6)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Identify IPv6 address types and scopes</li>
                                    <li>Configure different IPv6 address types</li>
                                    <li>Understand IPv6 address format and compression</li>
                                    <li>Implement IPv6 multicast applications</li>
                                </ul>
                            </section>
                        </div>

---

### Modified EUI-64

**Title:** Modified EUI-64 - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">EUI-64 Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>MAC Address Split:</strong> Split 48-bit MAC into two 24-bit halves</li>
                                    <li><strong>Insert FFFE:</strong> Insert FFFE between the two halves</li>
                                    <li><strong>Flip U/L Bit:</strong> Invert 7th bit of first byte (universal/local)</li>
                                    <li><strong>64-bit Result:</strong> Creates 64-bit interface identifier</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Example Conversion</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        MAC: 00:0C:29:12:34:56<br>
                                        Split: 000C29 | 123456<br>
                                        Insert FFFE: 000C29:FFFE:123456<br>
                                        Flip bit: 020C29:FFFE:123456<br>
                                        IPv6 IID: 020c:29ff:fe12:3456
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SLAAC Configuration</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Router Advertisement:</strong> Provides network prefix</li>
                                    <li><strong>EUI-64 Generation:</strong> Host creates interface ID automatically</li>
                                    <li><strong>Address Formation:</strong> Combines prefix + EUI-64 interface ID</li>
                                    <li><strong>DAD:</strong> Duplicate Address Detection ensures uniqueness</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Calculate EUI-64 addresses from MAC addresses</li>
                                    <li>Configure IPv6 addresses using EUI-64</li>
                                    <li>Understand SLAAC address autoconfiguration</li>
                                    <li>Troubleshoot IPv6 address assignment issues</li>
                                </ul>
                            </section>
                        </div>

---

### Verify IP Parameters

**Title:** Verify IP Parameters - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Windows Commands</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        ipconfig /all          # Show all IP configuration<br>
                                        ping destination       # Test connectivity<br>
                                        tracert destination    # Trace route path<br>
                                        nslookup domain       # DNS resolution test<br>
                                        arp -a                # View ARP table
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Linux/Mac Commands</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        ifconfig / ip addr     # Show interface config<br>
                                        ping destination       # Test connectivity<br>
                                        traceroute destination # Trace route path<br>
                                        dig domain            # DNS lookup<br>
                                        arp -a                # View ARP table
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Key Parameters to Verify</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>IP Address:</strong> Correct address assignment and subnet</li>
                                    <li><strong>Subnet Mask:</strong> Proper network/host boundary</li>
                                    <li><strong>Default Gateway:</strong> Router IP for remote networks</li>
                                    <li><strong>DNS Servers:</strong> Name resolution configuration</li>
                                    <li><strong>DHCP Status:</strong> Static vs dynamic assignment</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Use appropriate commands for different operating systems</li>
                                    <li>Interpret command output to identify issues</li>
                                    <li>Verify DHCP vs static IP configuration</li>
                                    <li>Troubleshoot connectivity using ping and traceroute</li>
                                </ul>
                            </section>
                        </div>

---

### Virtualization

**Title:** Network Virtualization - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Virtualization Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Server Virtualization:</strong> Multiple VMs on single physical server</li>
                                    <li><strong>Network Virtualization:</strong> Virtual switches, routers, and networks</li>
                                    <li><strong>Storage Virtualization:</strong> Abstracted storage resources</li>
                                    <li><strong>Desktop Virtualization:</strong> VDI (Virtual Desktop Infrastructure)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Hypervisor Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Type 1 (Bare Metal):</strong> Runs directly on hardware (VMware ESXi)</li>
                                    <li><strong>Type 2 (Hosted):</strong> Runs on host OS (VMware Workstation)</li>
                                    <li><strong>Container:</strong> OS-level virtualization (Docker)</li>
                                    <li><strong>Nested:</strong> Hypervisor running inside virtual machine</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Network Virtualization Benefits</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Resource Efficiency:</strong> Better utilization of hardware</li>
                                    <li><strong>Isolation:</strong> Logical separation of network segments</li>
                                    <li><strong>Scalability:</strong> Easy to provision new virtual networks</li>
                                    <li><strong>Mobility:</strong> VMs can move between physical hosts</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand virtualization concepts and benefits</li>
                                    <li>Configure VLANs for VM network segmentation</li>
                                    <li>Implement network services in virtual environments</li>
                                    <li>Troubleshoot virtual network connectivity</li>
                                </ul>
                            </section>
                        </div>

---

### MAC Learning & Aging

**Title:** MAC Learning & Aging - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">MAC Learning Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Frame Reception:</strong> Switch receives frame on interface</li>
                                    <li><strong>Source MAC Examination:</strong> Reads source MAC address</li>
                                    <li><strong>CAM Table Update:</strong> Associates MAC with receiving interface</li>
                                    <li><strong>Timestamp Recording:</strong> Records when entry was learned</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Aging Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Default Aging Timer:</strong> 300 seconds (5 minutes)</li>
                                    <li><strong>Activity Refresh:</strong> Timer resets when MAC is seen again</li>
                                    <li><strong>Entry Removal:</strong> Inactive entries removed from table</li>
                                    <li><strong>Relearning:</strong> MAC addresses learned again when needed</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CAM Table Commands</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        show mac address-table<br>
                                        show mac address-table dynamic<br>
                                        clear mac address-table dynamic<br>
                                        mac address-table aging-time 600
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand how switches learn MAC addresses</li>
                                    <li>Configure aging timers appropriately</li>
                                    <li>Troubleshoot MAC address table issues</li>
                                    <li>Analyze switch forwarding behavior</li>
                                </ul>
                            </section>
                        </div>

---

### Frame Forwarding

**Title:** Frame Forwarding - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Forwarding Decision Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Destination MAC Lookup:</strong> Search CAM table for destination</li>
                                    <li><strong>Known Unicast:</strong> Forward out specific interface if found</li>
                                    <li><strong>Unknown Unicast:</strong> Flood out all interfaces except source</li>
                                    <li><strong>Broadcast/Multicast:</strong> Forward to all interfaces in VLAN</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Switching Methods</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Store-and-Forward:</strong> Receive entire frame, check FCS, then forward</li>
                                    <li><strong>Cut-Through:</strong> Forward as soon as destination MAC is read</li>
                                    <li><strong>Fragment-Free:</strong> Read first 64 bytes before forwarding</li>
                                    <li><strong>Adaptive:</strong> Switch between methods based on error rates</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Frame Processing</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Frame Reception:</strong> Receive frame on ingress interface</li>
                                    <li><strong>VLAN Processing:</strong> Determine VLAN membership</li>
                                    <li><strong>Security Checks:</strong> Port security, MAC filtering</li>
                                    <li><strong>QoS Marking:</strong> Apply quality of service policies</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand switch forwarding logic</li>
                                    <li>Configure switching methods when available</li>
                                    <li>Troubleshoot frame forwarding issues</li>
                                    <li>Analyze network traffic flow patterns</li>
                                </ul>
                            </section>
                        </div>

---

### MAC Address Table

**Title:** MAC Address Table - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CAM Table Structure</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>MAC Address:</strong> 48-bit hardware address</li>
                                    <li><strong>VLAN ID:</strong> Virtual LAN identifier</li>
                                    <li><strong>Interface:</strong> Physical or logical port</li>
                                    <li><strong>Type:</strong> Dynamic (learned) or Static (configured)</li>
                                    <li><strong>Age:</strong> Time since last activity</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Table Management</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        show mac address-table<br>
                                        show mac address-table count<br>
                                        mac address-table static H.H.H interface<br>
                                        clear mac address-table dynamic address H.H.H
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Table Limitations</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Size Limits:</strong> Hardware-dependent maximum entries</li>
                                    <li><strong>Hash Collisions:</strong> Multiple MACs mapping to same location</li>
                                    <li><strong>Table Overflow:</strong> New entries fail when table is full</li>
                                    <li><strong>Memory Exhaustion:</strong> Can cause flooding behavior</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Monitor and manage MAC address tables</li>
                                    <li>Configure static MAC entries when needed</li>
                                    <li>Troubleshoot MAC address learning issues</li>
                                    <li>Understand CAM table exhaustion attacks</li>
                                </ul>
                            </section>
                        </div>

---

### On-Premises vs. Cloud

**Title:** On-Premises vs Cloud - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">On-Premises Infrastructure</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Full Control:</strong> Complete control over hardware and software</li>
                                    <li><strong>Capital Expense:</strong> Large upfront investment in equipment</li>
                                    <li><strong>Maintenance:</strong> Organization responsible for all maintenance</li>
                                    <li><strong>Security:</strong> Direct control over security measures</li>
                                    <li><strong>Performance:</strong> Predictable performance and latency</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Cloud Infrastructure</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Scalability:</strong> Rapid scaling up or down as needed</li>
                                    <li><strong>Operational Expense:</strong> Pay-as-you-use pricing model</li>
                                    <li><strong>Provider Management:</strong> Cloud provider handles maintenance</li>
                                    <li><strong>Shared Responsibility:</strong> Security shared between customer and provider</li>
                                    <li><strong>Geographic Distribution:</strong> Global availability and redundancy</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Hybrid Models</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Hybrid Cloud:</strong> Combination of on-premises and cloud</li>
                                    <li><strong>Multi-Cloud:</strong> Using multiple cloud providers</li>
                                    <li><strong>Edge Computing:</strong> Processing closer to data sources</li>
                                    <li><strong>Cloud Bursting:</strong> Overflow to cloud during peak demand</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand deployment model differences</li>
                                    <li>Configure connectivity to cloud services</li>
                                    <li>Implement hybrid network architectures</li>
                                    <li>Compare cost and performance considerations</li>
                                </ul>
                            </section>
                        </div>

---

### OSI Model

**Title:** OSI Model - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">7-Layer Reference Model</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Layer 7 - Application:</strong> Network services for applications (HTTP, FTP, SMTP, DNS)</li>
                                    <li><strong>Layer 6 - Presentation:</strong> Data formatting, encryption, compression (SSL/TLS, JPEG)</li>
                                    <li><strong>Layer 5 - Session:</strong> Managing sessions between applications (NetBIOS, RPC)</li>
                                    <li><strong>Layer 4 - Transport:</strong> End-to-end delivery and error recovery (TCP, UDP)</li>
                                    <li><strong>Layer 3 - Network:</strong> Logical addressing and routing (IP, ICMP, OSPF)</li>
                                    <li><strong>Layer 2 - Data Link:</strong> Node-to-node delivery (Ethernet, Wi-Fi, PPP)</li>
                                    <li><strong>Layer 1 - Physical:</strong> Physical transmission of raw bits (cables, hubs, repeaters)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Data Encapsulation Process</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Application Data → Segments (L4) → Packets (L3) → Frames (L2) → Bits (L1)
                                    </code>
                                </div>
                                <ul class="list-disc list-inside space-y-2 text-slate-300 mt-4">
                                    <li><strong>Data:</strong> Application layer information</li>
                                    <li><strong>Segment:</strong> TCP/UDP header added at Transport layer</li>
                                    <li><strong>Packet:</strong> IP header added at Network layer</li>
                                    <li><strong>Frame:</strong> Ethernet header/trailer added at Data Link layer</li>
                                    <li><strong>Bits:</strong> Physical transmission of electrical signals</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Troubleshooting with OSI</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Bottom-Up:</strong> Start at Physical layer, work up to Application</li>
                                    <li><strong>Top-Down:</strong> Start at Application layer, work down to Physical</li>
                                    <li><strong>Divide and Conquer:</strong> Test specific layer based on symptoms</li>
                                    <li><strong>Layer Isolation:</strong> Identify which layer has the problem</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Memorize all 7 layers and their functions</li>
                                    <li>Understand data encapsulation/de-encapsulation</li>
                                    <li>Apply OSI model to network troubleshooting</li>
                                    <li>Identify protocols operating at each layer</li>
                                </ul>
                            </section>
                        </div>

---

### Ethernet Frame Structure

**Title:** Ethernet Frame Structure - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ethernet II Frame Fields</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        |Preamble|Dest MAC|Src MAC|Type|Data|FCS|<br>
                                        |8 bytes |6 bytes |6 bytes|2 B |46-1500|4 B|
                                    </code>
                                </div>
                                <ul class="list-disc list-inside space-y-2 text-slate-300 mt-4">
                                    <li><strong>Preamble (8 bytes):</strong> 7 bytes of 10101010 + 1 byte SFD (10101011)</li>
                                    <li><strong>Destination MAC (6 bytes):</strong> Target device's hardware address</li>
                                    <li><strong>Source MAC (6 bytes):</strong> Sending device's hardware address</li>
                                    <li><strong>Type/Length (2 bytes):</strong> Protocol type (0x0800 = IPv4, 0x0806 = ARP)</li>
                                    <li><strong>Data (46-1500 bytes):</strong> Payload with padding if needed</li>
                                    <li><strong>FCS (4 bytes):</strong> Frame Check Sequence for error detection</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Frame Size Limits</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Minimum Frame:</strong> 64 bytes total (padding added if needed)</li>
                                    <li><strong>Maximum Frame:</strong> 1518 bytes total (standard Ethernet)</li>
                                    <li><strong>Jumbo Frames:</strong> Up to 9000 bytes (non-standard)</li>
                                    <li><strong>MTU (Maximum Transmission Unit):</strong> 1500 bytes for data payload</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">MAC Address Format</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Format: XX:XX:XX:XX:XX:XX (48 bits)<br>
                                        OUI: First 24 bits (Organizationally Unique Identifier)<br>
                                        NIC: Last 24 bits (Network Interface Card specific)<br><br>
                                        Special Addresses:<br>
                                        FF:FF:FF:FF:FF:FF - Broadcast<br>
                                        01:XX:XX:XX:XX:XX - Multicast (first bit = 1)
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Analyze frame structure in packet captures</li>
                                    <li>Identify broadcast vs unicast vs multicast frames</li>
                                    <li>Understand MTU and frame size implications</li>
                                    <li>Configure and verify MAC address tables</li>
                                </ul>
                            </section>
                        </div>

---

### Collision vs Broadcast Domains

**Title:** Collision vs Broadcast Domains - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Collision Domain</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Definition:</strong> Network segment where collisions can occur</li>
                                    <li><strong>Hub Behavior:</strong> All ports share one collision domain</li>
                                    <li><strong>Switch Behavior:</strong> Each port is separate collision domain</li>
                                    <li><strong>CSMA/CD Required:</strong> Devices must detect and handle collisions</li>
                                    <li><strong>Half-Duplex Only:</strong> Cannot send and receive simultaneously</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Broadcast Domain</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Definition:</strong> Network segment where broadcast frames are forwarded</li>
                                    <li><strong>Switch Behavior:</strong> All ports in same VLAN share broadcast domain</li>
                                    <li><strong>Router Behavior:</strong> Routers separate broadcast domains</li>
                                    <li><strong>VLAN Segmentation:</strong> VLANs create separate broadcast domains</li>
                                    <li><strong>Traffic Types:</strong> Broadcast, multicast, and unknown unicast</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Network Device Impact</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Device Type      | Collision Domains | Broadcast Domains<br>
                                        Hub (4 ports)    | 1                | 1<br>
                                        Switch (4 ports) | 4                | 1<br>
                                        Router (4 ports) | 4                | 4<br>
                                        Bridge (4 ports) | 4                | 1
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Performance Implications</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Large Collision Domains:</strong> More collisions, reduced bandwidth</li>
                                    <li><strong>Large Broadcast Domains:</strong> More broadcast traffic, CPU overhead</li>
                                    <li><strong>Segmentation Benefits:</strong> Improved performance and security</li>
                                    <li><strong>VLAN Design:</strong> Balance functionality with broadcast domain size</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Count collision and broadcast domains in network diagrams</li>
                                    <li>Design VLANs to optimize broadcast domains</li>
                                    <li>Understand impact of different network devices</li>
                                    <li>Troubleshoot broadcast storms and collision issues</li>
                                </ul>
                            </section>
                        </div>

---

### CSMA/CD

**Title:** CSMA/CD - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CSMA/CD Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Carrier Sense (CS):</strong> Listen to medium before transmitting</li>
                                    <li><strong>Multiple Access (MA):</strong> Multiple devices share same medium</li>
                                    <li><strong>Collision Detection (CD):</strong> Detect when frames collide</li>
                                    <li><strong>Jam Signal:</strong> Send 32-bit pattern to notify all stations of collision</li>
                                    <li><strong>Backoff Algorithm:</strong> Wait random time before retrying</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Collision Handling Steps</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        1. Listen for carrier signal<br>
                                        2. If clear, start transmission<br>
                                        3. Monitor for collisions while sending<br>
                                        4. If collision detected:<br>
                                           a. Stop transmission<br>
                                           b. Send jam signal<br>
                                           c. Wait backoff period<br>
                                           d. Retry transmission<br>
                                        5. If no collision, transmission successful
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Binary Exponential Backoff</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Algorithm:</strong> Wait time = random(0, 2^n - 1) × slot time</li>
                                    <li><strong>Slot Time:</strong> 512 bit times (51.2 microseconds at 10 Mbps)</li>
                                    <li><strong>Maximum Attempts:</strong> 16 attempts before frame is dropped</li>
                                    <li><strong>Collision Counter:</strong> n = number of collisions (max 10)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Modern Ethernet</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Full-Duplex:</strong> CSMA/CD not needed with switches</li>
                                    <li><strong>Point-to-Point Links:</strong> No shared medium means no collisions</li>
                                    <li><strong>Legacy Support:</strong> Still supported for half-duplex connections</li>
                                    <li><strong>Collision Domain Elimination:</strong> Switches create separate domains</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand CSMA/CD operation in shared media</li>
                                    <li>Explain why modern switched networks don't need CSMA/CD</li>
                                    <li>Calculate collision domains in network topologies</li>
                                    <li>Troubleshoot excessive collision issues</li>
                                </ul>
                            </section>
                        </div>

---

### Half vs Full Duplex

**Title:** Half vs Full Duplex - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Half Duplex Communication</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>One Direction:</strong> Can send OR receive, but not both simultaneously</li>
                                    <li><strong>Shared Medium:</strong> Multiple devices share the same wire</li>
                                    <li><strong>CSMA/CD Required:</strong> Must detect and handle collisions</li>
                                    <li><strong>Legacy Equipment:</strong> Hubs and old network cards</li>
                                    <li><strong>Reduced Bandwidth:</strong> Effective bandwidth is less than link speed</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Full Duplex Communication</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Both Directions:</strong> Can send AND receive simultaneously</li>
                                    <li><strong>Dedicated Medium:</strong> Separate transmit and receive paths</li>
                                    <li><strong>No Collisions:</strong> CSMA/CD disabled</li>
                                    <li><strong>Modern Equipment:</strong> Switches and modern network cards</li>
                                    <li><strong>Full Bandwidth:</strong> Can utilize 100% of link capacity in each direction</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Duplex Mismatch Issues</h3>
                                <div class="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                                    <ul class="list-disc list-inside space-y-2 text-red-200">
                                        <li><strong>Performance Degradation:</strong> Significant speed reduction</li>
                                        <li><strong>Collision Errors:</strong> False collision detection</li>
                                        <li><strong>CRC Errors:</strong> Frame corruption from collisions</li>
                                        <li><strong>Runts and Giants:</strong> Malformed frames</li>
                                        <li><strong>Link Instability:</strong> Intermittent connectivity</li>
                                    </ul>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration and Troubleshooting</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        interface FastEthernet0/1<br>
                                        duplex full                    # Force full duplex<br>
                                        duplex half                   # Force half duplex<br>
                                        duplex auto                   # Auto-negotiate (default)<br><br>
                                        show interface Fa0/1          # Verify duplex setting<br>
                                        show interface counters errors # Check for collision/CRC errors
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Auto-Negotiation</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>IEEE 802.3u Standard:</strong> Automatic speed and duplex detection</li>
                                    <li><strong>Link Pulse Detection:</strong> Fast Link Pulses (FLP) exchange capabilities</li>
                                    <li><strong>Fallback Rules:</strong> If negotiation fails, defaults to half-duplex</li>
                                    <li><strong>Best Practice:</strong> Manual configuration in production networks</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure duplex settings on switch interfaces</li>
                                    <li>Identify and resolve duplex mismatch issues</li>
                                    <li>Understand auto-negotiation process and limitations</li>
                                    <li>Analyze interface statistics for duplex problems</li>
                                </ul>
                            </section>
                        </div>

---

### Default Gateway

**Title:** Default Gateway - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Default Gateway Purpose</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Inter-Network Communication:</strong> Route to reach other networks</li>
                                    <li><strong>Last Resort:</strong> Used when no specific route matches destination</li>
                                    <li><strong>Layer 3 Function:</strong> Router interface on local subnet</li>
                                    <li><strong>Single Point Exit:</strong> Typically one gateway per subnet</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Routing Decision Process</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Host routing logic:<br>
                                        1. Is destination on local subnet? → Send directly<br>
                                        2. Is there a specific route? → Use that route<br>
                                        3. Otherwise → Send to default gateway<br><br>
                                        Router routing logic:<br>
                                        1. Check connected routes<br>
                                        2. Check static routes<br>
                                        3. Check dynamic routing protocols<br>
                                        4. Use default route (0.0.0.0/0) if configured
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration Examples</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Windows:<br>
                                        route add 0.0.0.0 mask 0.0.0.0 192.168.1.1<br><br>
                                        Cisco Router:<br>
                                        ip route 0.0.0.0 0.0.0.0 192.168.1.1    # Static default route<br>
                                        ip default-gateway 192.168.1.1          # Management traffic only<br><br>
                                        Cisco Switch (for management):<br>
                                        ip default-gateway 192.168.1.1<br>
                                        ip route 0.0.0.0 0.0.0.0 192.168.1.1    # If IP routing enabled
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Gateway Redundancy</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>HSRP (Hot Standby Router Protocol):</strong> Cisco proprietary redundancy</li>
                                    <li><strong>VRRP (Virtual Router Redundancy Protocol):</strong> Industry standard</li>
                                    <li><strong>GLBP (Gateway Load Balancing Protocol):</strong> Load balancing + redundancy</li>
                                    <li><strong>Virtual IP:</strong> Shared IP address between redundant routers</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Troubleshooting Gateway Issues</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Common commands:<br>
                                        ping 192.168.1.1             # Test gateway connectivity<br>
                                        tracert 8.8.8.8             # Verify gateway in path<br>
                                        ipconfig /all                # Verify gateway configuration<br>
                                        show ip route                # Check routing table<br>
                                        show arp                     # Verify gateway MAC resolution
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure default routes on routers and hosts</li>
                                    <li>Implement gateway redundancy with HSRP</li>
                                    <li>Troubleshoot inter-VLAN routing issues</li>
                                    <li>Verify default gateway configuration and operation</li>
                                </ul>
                            </section>
                        </div>

---

### Ping & Traceroute

**Title:** Ping & Traceroute - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ping (ICMP Echo)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Purpose:</strong> Test basic IP connectivity and measure round-trip time</li>
                                    <li><strong>Protocol:</strong> ICMP (Internet Control Message Protocol)</li>
                                    <li><strong>Operation:</strong> Sends Echo Request, expects Echo Reply</li>
                                    <li><strong>Information:</strong> RTT, packet loss, TTL values</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ping Command Options</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Windows:<br>
                                        ping 8.8.8.8                 # Basic ping<br>
                                        ping -t 8.8.8.8             # Continuous ping<br>
                                        ping -n 10 8.8.8.8          # Send 10 packets<br>
                                        ping -l 1500 8.8.8.8        # Large packet size<br><br>
                                        Cisco IOS:<br>
                                        ping 8.8.8.8                 # Basic ping<br>
                                        ping 8.8.8.8 repeat 100     # Send 100 packets<br>
                                        ping 8.8.8.8 size 1500      # Large packet size<br>
                                        ping 8.8.8.8 source loopback0  # Source from specific interface
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Traceroute Operation</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Purpose:</strong> Discover path packets take through network</li>
                                    <li><strong>TTL Manipulation:</strong> Increments TTL to reveal each hop</li>
                                    <li><strong>ICMP Time Exceeded:</strong> Routers respond when TTL expires</li>
                                    <li><strong>Path Discovery:</strong> Shows IP address and RTT for each hop</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Traceroute Process</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        1. Send packet with TTL=1<br>
                                           → First router decrements TTL to 0<br>
                                           → Router sends ICMP Time Exceeded<br>
                                        2. Send packet with TTL=2<br>
                                           → Second router decrements TTL to 0<br>
                                           → Router sends ICMP Time Exceeded<br>
                                        3. Continue until destination reached<br>
                                           → Destination sends ICMP Echo Reply (ping)<br>
                                           → or Port Unreachable (tracert)
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Traceroute Variations</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Windows (tracert):</strong> Uses ICMP Echo Request</li>
                                    <li><strong>Linux/Unix (traceroute):</strong> Uses UDP to high port numbers</li>
                                    <li><strong>Cisco (traceroute):</strong> Uses UDP by default, ICMP option available</li>
                                    <li><strong>TCP Traceroute:</strong> Uses TCP SYN packets to specific port</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Troubleshooting with Ping/Traceroute</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Ping Results Interpretation:<br>
                                        • Success: Connectivity confirmed<br>
                                        • Timeout: Packet loss or filtering<br>
                                        • Destination Unreachable: Routing issue<br>
                                        • TTL Expired: Routing loop<br><br>
                                        Traceroute Results:<br>
                                        • * * *: Router not responding or filtering<br>
                                        • High RTT: Congestion or long distance<br>
                                        • Loop: Shows repeating IP addresses
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Use ping and traceroute for network troubleshooting</li>
                                    <li>Interpret ping and traceroute output</li>
                                    <li>Configure ICMP access control when needed</li>
                                    <li>Understand limitations and filtering impacts</li>
                                </ul>
                            </section>
                        </div>

---

## Network Access

### NGFW & IPS

**Title:** Next-Generation Firewall & Intrusion Prevention System - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">NGFW Features</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Application Awareness:</strong> Deep packet inspection beyond port/protocol</li>
                                    <li><strong>User Identity:</strong> Integrates with Active Directory for user-based policies</li>
                                    <li><strong>SSL Inspection:</strong> Decrypts and inspects encrypted traffic</li>
                                    <li><strong>Threat Intelligence:</strong> Cloud-based reputation and signature updates</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">IPS Capabilities</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Signature-Based Detection:</strong> Matches known attack patterns</li>
                                    <li><strong>Anomaly-Based Detection:</strong> Identifies deviations from normal behavior</li>
                                    <li><strong>Real-Time Blocking:</strong> Stops threats inline without disrupting flow</li>
                                    <li><strong>Threat Correlation:</strong> Combines multiple indicators for accuracy</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Deployment Models</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Network-Based IPS (NIPS):</strong> Deployed inline in network segments</li>
                                    <li><strong>Host-Based IPS (HIPS):</strong> Software agent on individual systems</li>
                                    <li><strong>Wireless IPS (WIPS):</strong> Monitors wireless networks for threats</li>
                                    <li><strong>Perimeter Deployment:</strong> At network edge between internal/external</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand NGFW vs traditional firewall differences</li>
                                    <li>Recognize IPS deployment scenarios</li>
                                    <li>Identify when to use IPS vs IDS</li>
                                    <li>Configure basic firewall access control</li>
                                </ul>
                            </section>
                        </div>

---

### Access Points

**Title:** Wireless Access Points - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">AP Functions</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Wireless Bridge:</strong> Converts between wireless (802.11) and wired (Ethernet)</li>
                                    <li><strong>Coverage Area:</strong> Provides wireless connectivity within RF range</li>
                                    <li><strong>Client Authentication:</strong> Handles WPA/WPA2/WPA3 security protocols</li>
                                    <li><strong>Traffic Management:</strong> Controls bandwidth and QoS for wireless clients</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">AP Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Autonomous AP:</strong> Standalone operation with local configuration</li>
                                    <li><strong>Lightweight AP:</strong> Centrally managed by Wireless LAN Controller (WLC)</li>
                                    <li><strong>Cloud-Managed AP:</strong> Configuration and monitoring via cloud portal</li>
                                    <li><strong>Mesh AP:</strong> Wireless backhaul to other APs for extended coverage</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">802.11 Standards</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        802.11a: 5 GHz, 54 Mbps<br>
                                        802.11b: 2.4 GHz, 11 Mbps<br>
                                        802.11g: 2.4 GHz, 54 Mbps<br>
                                        802.11n: 2.4/5 GHz, up to 600 Mbps<br>
                                        802.11ac: 5 GHz, up to 6.9 Gbps<br>
                                        802.11ax (Wi-Fi 6): 2.4/5 GHz, up to 9.6 Gbps
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure basic wireless security (WPA2/WPA3)</li>
                                    <li>Understand autonomous vs controller-based architectures</li>
                                    <li>Troubleshoot wireless connectivity issues</li>
                                    <li>Plan wireless coverage and channel assignments</li>
                                </ul>
                            </section>
                        </div>

---

### Two-Tier

**Title:** Two-Tier Architecture - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Architecture Overview</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Access Layer:</strong> End-user connections and edge services</li>
                                    <li><strong>Core Layer:</strong> High-speed backbone and routing</li>
                                    <li><strong>Collapsed Distribution:</strong> Distribution functions integrated into core</li>
                                    <li><strong>Cost Effective:</strong> Fewer devices and simpler management</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Compare two-tier vs three-tier architectures</li>
                                    <li>Identify appropriate use cases for each model</li>
                                    <li>Understand scalability limitations</li>
                                </ul>
                            </section>
                        </div>

---

### Three-Tier

**Title:** Three-Tier Architecture - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Architecture Layers</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Access Layer:</strong> End-user connectivity, VLANs, port security</li>
                                    <li><strong>Distribution Layer:</strong> Routing, policies, aggregation</li>
                                    <li><strong>Core Layer:</strong> High-speed forwarding, redundancy</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Design hierarchical network topologies</li>
                                    <li>Select appropriate devices for each layer</li>
                                    <li>Implement redundancy and load balancing</li>
                                </ul>
                            </section>
                        </div>

---

### Fiber Optic - Single Mode

**Title:** Single-Mode Fiber Optic - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Single-Mode Fiber Characteristics</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Core Diameter:</strong> 8-10 microns (very small core)</li>
                                    <li><strong>Light Propagation:</strong> Only one mode of light can propagate</li>
                                    <li><strong>Distance:</strong> Up to 100+ kilometers without repeaters</li>
                                    <li><strong>Bandwidth:</strong> Extremely high bandwidth capacity</li>
                                    <li><strong>Dispersion:</strong> Minimal modal dispersion due to single light path</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Applications & Use Cases</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>WAN Connections:</strong> Long-distance telecommunications</li>
                                    <li><strong>Campus Backbone:</strong> Building-to-building connections</li>
                                    <li><strong>Internet Backbone:</strong> ISP and carrier networks</li>
                                    <li><strong>Data Centers:</strong> High-speed interconnects between facilities</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ethernet Standards</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        1000BASE-LX: 1 Gbps up to 10km<br>
                                        1000BASE-EX: 1 Gbps up to 40km<br>
                                        10GBASE-LR: 10 Gbps up to 10km<br>
                                        10GBASE-ER: 10 Gbps up to 40km<br>
                                        100GBASE-LR4: 100 Gbps up to 10km
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Compare single-mode vs multimode fiber characteristics</li>
                                    <li>Identify appropriate fiber types for distance requirements</li>
                                    <li>Understand fiber optic connector types (LC, SC, ST)</li>
                                    <li>Calculate fiber optic link budgets and loss</li>
                                </ul>
                            </section>
                        </div>

---

### TCP vs. UDP

**Title:** TCP vs UDP Protocols - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">TCP (Transmission Control Protocol)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Connection-Oriented:</strong> Establishes session before data transfer</li>
                                    <li><strong>Reliable:</strong> Guarantees delivery with acknowledgments</li>
                                    <li><strong>Flow Control:</strong> Manages data transmission rate</li>
                                    <li><strong>Error Recovery:</strong> Retransmits lost or corrupted segments</li>
                                    <li><strong>Ordered Delivery:</strong> Data arrives in correct sequence</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">UDP (User Datagram Protocol)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Connectionless:</strong> No session establishment required</li>
                                    <li><strong>Best Effort:</strong> No delivery guarantees</li>
                                    <li><strong>Low Overhead:</strong> Minimal header and processing</li>
                                    <li><strong>Fast:</strong> No connection setup or reliability mechanisms</li>
                                    <li><strong>Real-Time:</strong> Preferred for time-sensitive applications</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common Applications</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        TCP: HTTP (80), HTTPS (443), FTP (21), SSH (22), Telnet (23)<br>
                                        UDP: DNS (53), DHCP (67/68), SNMP (161), TFTP (69), NTP (123)
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand TCP three-way handshake</li>
                                    <li>Identify when to use TCP vs UDP</li>
                                    <li>Configure ACLs based on protocols and ports</li>
                                    <li>Troubleshoot application connectivity issues</li>
                                </ul>
                            </section>
                        </div>

---

### Wi-Fi Channels

**Title:** Wi-Fi Channels - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">2.4 GHz Band Channels</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Channel 1: 2412 MHz (20 MHz wide)<br>
                                        Channel 6: 2437 MHz (20 MHz wide)<br>
                                        Channel 11: 2462 MHz (20 MHz wide)<br>
                                        Non-overlapping: 1, 6, 11 (US)<br>
                                        Total channels: 1-11 (US), 1-13 (Europe)
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">5 GHz Band Channels</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>UNII-1:</strong> Channels 36-48 (5150-5250 MHz)</li>
                                    <li><strong>UNII-2:</strong> Channels 52-64 (5250-5350 MHz) - DFS required</li>
                                    <li><strong>UNII-2 Extended:</strong> Channels 100-144 (5470-5725 MHz)</li>
                                    <li><strong>UNII-3:</strong> Channels 149-165 (5725-5850 MHz)</li>
                                    <li><strong>Non-overlapping:</strong> Many more available than 2.4 GHz</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Channel Width Options</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>20 MHz:</strong> Basic channel width, maximum range</li>
                                    <li><strong>40 MHz:</strong> 802.11n, doubled throughput</li>
                                    <li><strong>80 MHz:</strong> 802.11ac, quadrupled throughput</li>
                                    <li><strong>160 MHz:</strong> 802.11ac Wave 2, maximum throughput</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Plan non-overlapping channel assignments</li>
                                    <li>Understand DFS and radar detection requirements</li>
                                    <li>Configure channel width for optimal performance</li>
                                    <li>Troubleshoot wireless interference issues</li>
                                </ul>
                            </section>
                        </div>

---

### Wireless Concepts

**Title:** Wireless Concepts - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">RF Fundamentals</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Frequency:</strong> Number of cycles per second (Hz)</li>
                                    <li><strong>Wavelength:</strong> Physical length of one cycle</li>
                                    <li><strong>Amplitude:</strong> Signal strength or power</li>
                                    <li><strong>Phase:</strong> Timing relationship between signals</li>
                                    <li><strong>Modulation:</strong> Encoding data onto RF carrier</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Wireless Security</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Open: No encryption (insecure)<br>
                                        WEP: Wired Equivalent Privacy (deprecated)<br>
                                        WPA: Wi-Fi Protected Access (TKIP)<br>
                                        WPA2: Advanced Encryption Standard (AES)<br>
                                        WPA3: Latest standard with enhanced security
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Coverage Patterns</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Omnidirectional:</strong> 360-degree coverage pattern</li>
                                    <li><strong>Directional:</strong> Focused beam in specific direction</li>
                                    <li><strong>RSSI:</strong> Received Signal Strength Indicator</li>
                                    <li><strong>SNR:</strong> Signal-to-Noise Ratio for quality</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure wireless security protocols</li>
                                    <li>Understand RF propagation and coverage</li>
                                    <li>Troubleshoot wireless connectivity issues</li>
                                    <li>Implement wireless network design principles</li>
                                </ul>
                            </section>
                        </div>

---

### Frame Flooding

**Title:** Frame Flooding - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">When Flooding Occurs</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Unknown Unicast:</strong> Destination MAC not in CAM table</li>
                                    <li><strong>Broadcast Frames:</strong> Destination MAC is FF:FF:FF:FF:FF:FF</li>
                                    <li><strong>Multicast Frames:</strong> No specific multicast entry</li>
                                    <li><strong>CAM Table Full:</strong> New MACs can't be learned</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Flooding Behavior</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>VLAN Boundary:</strong> Flooding limited to source VLAN</li>
                                    <li><strong>All Ports:</strong> Frame sent out all active ports in VLAN</li>
                                    <li><strong>Except Source:</strong> Not sent back out receiving interface</li>
                                    <li><strong>Trunk Ports:</strong> Flooded on trunks carrying the VLAN</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Controlling Flooding</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Static MAC Entries:</strong> Manually configure MAC addresses</li>
                                    <li><strong>Port Security:</strong> Limit and control MAC addresses per port</li>
                                    <li><strong>Unknown Unicast Filtering:</strong> Block unknown unicast flooding</li>
                                    <li><strong>IGMP Snooping:</strong> Control multicast flooding</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand when and why flooding occurs</li>
                                    <li>Configure port security to control flooding</li>
                                    <li>Implement IGMP snooping for multicast control</li>
                                    <li>Troubleshoot excessive broadcast traffic</li>
                                </ul>
                            </section>
                        </div>

---

### TCP/IP Stack

**Title:** TCP/IP Stack - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">4-Layer TCP/IP Model</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Application Layer:</strong> Combines OSI layers 5-7 (HTTP, FTP, SMTP, DNS, DHCP)</li>
                                    <li><strong>Transport Layer:</strong> End-to-end communication (TCP, UDP)</li>
                                    <li><strong>Internet Layer:</strong> Routing and logical addressing (IP, ICMP, ARP)</li>
                                    <li><strong>Network Access Layer:</strong> Combines OSI layers 1-2 (Ethernet, Wi-Fi)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">TCP vs UDP Comparison</h3>
                                <div class="bg-slate-800 p-4 rounded-lg space-y-3">
                                    <div>
                                        <code class="text-blue-400 font-bold">TCP (Transmission Control Protocol)</code>
                                        <ul class="text-green-400 text-sm mt-1">
                                            <li>• Connection-oriented (3-way handshake)</li>
                                            <li>• Reliable delivery with acknowledgments</li>
                                            <li>• Flow control and congestion control</li>
                                            <li>• Error detection and retransmission</li>
                                            <li>• Used by: HTTP, HTTPS, FTP, SSH, Telnet</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <code class="text-orange-400 font-bold">UDP (User Datagram Protocol)</code>
                                        <ul class="text-yellow-400 text-sm mt-1">
                                            <li>• Connectionless (no handshake)</li>
                                            <li>• Best-effort delivery (no guarantees)</li>
                                            <li>• No flow control or error recovery</li>
                                            <li>• Lower overhead, faster transmission</li>
                                            <li>• Used by: DNS, DHCP, SNMP, VoIP, video streaming</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common Port Numbers</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        TCP Ports:<br>
                                        20/21 - FTP (Data/Control)<br>
                                        22 - SSH<br>
                                        23 - Telnet<br>
                                        25 - SMTP<br>
                                        53 - DNS (also UDP)<br>
                                        80 - HTTP<br>
                                        443 - HTTPS<br><br>
                                        UDP Ports:<br>
                                        53 - DNS<br>
                                        67/68 - DHCP<br>
                                        69 - TFTP<br>
                                        161/162 - SNMP<br>
                                        514 - Syslog
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand TCP 3-way handshake process</li>
                                    <li>Know when to use TCP vs UDP</li>
                                    <li>Memorize common port numbers</li>
                                    <li>Configure access lists using port numbers</li>
                                </ul>
                            </section>
                        </div>

---

## IP Connectivity

### ARP (Address Resolution Protocol)

**Title:** ARP (Address Resolution Protocol) - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Purpose and Function</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>IP to MAC Mapping:</strong> Resolves IP addresses to MAC addresses</li>
                                    <li><strong>Layer 2 Delivery:</strong> Enables frame delivery on local network</li>
                                    <li><strong>Dynamic Learning:</strong> Automatically builds address mappings</li>
                                    <li><strong>Local Subnet Only:</strong> Works within same broadcast domain</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Process</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        1. Host A wants to send packet to Host B (knows IP)<br>
                                        2. A checks ARP cache for B's MAC address<br>
                                        3. If not found, A sends ARP Request (broadcast)<br>
                                           "Who has 192.168.1.10? Tell 192.168.1.5"<br>
                                        4. Host B responds with ARP Reply (unicast)<br>
                                           "192.168.1.10 is at AA:BB:CC:DD:EE:FF"<br>
                                        5. A caches the mapping and sends original packet<br>
                                        6. All hosts on segment cache the ARP information
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Table Management</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Dynamic Entries:</strong> Learned through ARP process</li>
                                    <li><strong>Static Entries:</strong> Manually configured mappings</li>
                                    <li><strong>Aging Timer:</strong> Entries expire after inactivity (typically 4 hours)</li>
                                    <li><strong>Cache Size:</strong> Limited number of entries per device</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Commands</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Windows/Linux:<br>
                                        arp -a                        # Show ARP table<br>
                                        arp -d 192.168.1.10          # Delete specific entry<br>
                                        arp -s 192.168.1.10 aa-bb-cc-dd-ee-ff  # Add static entry<br><br>
                                        Cisco IOS:<br>
                                        show arp                      # Display ARP table<br>
                                        clear arp-cache              # Clear dynamic entries<br>
                                        arp 192.168.1.10 aabb.ccdd.eeff ARPA  # Static entry
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Security Considerations</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>ARP Spoofing:</strong> Malicious responses with false MAC addresses</li>
                                    <li><strong>Man-in-the-Middle:</strong> Intercepting traffic through ARP poisoning</li>
                                    <li><strong>DAI (Dynamic ARP Inspection):</strong> Validates ARP packets against DHCP snooping</li>
                                    <li><strong>Static Entries:</strong> Prevent spoofing for critical devices</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand ARP operation and packet flow</li>
                                    <li>Troubleshoot connectivity using ARP tables</li>
                                    <li>Configure and verify ARP entries</li>
                                    <li>Identify ARP-related security threats</li>
                                </ul>
                            </section>
                        </div>

---

