-- CCNA Section 1.0 Network Fundamentals Database Data
-- Generated from chapter1.html topicDetails
-- Created: September 19, 2025
-- Split Horizon Design System Format


-- Insert Section 1.0 Network Fundamentals
INSERT OR IGNORE INTO sections (section_number, title, description, exam_weight_percent, order_index) 
VALUES ('1.0', 'Network Fundamentals', 'Core networking concepts, components, topologies, and protocols', 20, 1);


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.1', 'Network Components', 'Routers, switches, firewalls, access points, controllers, endpoints, servers, PoE', 1
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.2', 'Network Topologies', 'Two-tier, three-tier, spine-leaf, WAN, SOHO, on-premises and cloud', 2
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.3', 'Physical Interfaces and Cabling', 'Fiber, copper, connections (shared media and point-to-point)', 3
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.4', 'Interface and Cable Issues', 'Collisions, errors, duplex mismatch, speed mismatch', 4
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.5', 'TCP and UDP', 'Transport layer protocols and characteristics', 5
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.6', 'IPv4 Addressing and Subnetting', 'IPv4 address structure, subnetting, VLSM', 6
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.7', 'Private IPv4 Addressing', 'RFC 1918 address ranges and NAT', 7
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.8', 'IPv6 Addressing and Configuration', 'IPv6 structure, configuration methods', 8
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.9', 'IPv6 Address Types', 'Global unicast, link-local, multicast, anycast', 9
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.10', 'Client Operating System Configuration', 'Windows, macOS, Linux network configuration', 10
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.11', 'Wireless Concepts', 'Standards, topologies, AP modes, channels, security', 11
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.12', 'Virtualization Concepts', 'Hypervisors, virtual switches, SDN', 12
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO subsections (section_id, subsection_number, title, description, order_index)
SELECT id, '1.13', 'Network Models and Switching', 'OSI/TCP-IP models, Ethernet, switching operations', 13
FROM sections WHERE section_number = '1.0';


INSERT OR IGNORE INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Routers - CCNA 200-301 Guide',
    'routers',
    'CCNA 200-301 exam topic covering Routers',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Router Functions</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Layer 3 Forwarding:</strong> Routes packets between different networks using routing tables</li>\n                                    <li><strong>Path Determination:</strong> Uses routing protocols (OSPF, EIGRP, BGP) to determine best paths</li>\n                                    <li><strong>Packet Forwarding:</strong> Examines destination IP, consults routing table, forwards to next hop</li>\n                                    <li><strong>Network Segmentation:</strong> Breaks up broadcast domains and collision domains</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Router Components</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>CPU:</strong> Executes routing protocols and control plane functions</li>\n                                    <li><strong>RAM:</strong> Stores running configuration, routing tables, ARP cache</li>\n                                    <li><strong>NVRAM:</strong> Stores startup configuration (non-volatile)</li>\n                                    <li><strong>Flash:</strong> Stores Cisco IOS and other system files</li>\n                                    <li><strong>ROM:</strong> Contains bootstrap program and POST</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Boot Process</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        1. POST (Power-On Self Test)<br>\n                                        2. Bootstrap loads from ROM<br>\n                                        3. IOS loads from Flash to RAM<br>\n                                        4. Configuration loads from NVRAM<br>\n                                        5. Router becomes operational\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand router vs switch functions</li>\n                                    <li>Configure basic router settings (hostname, passwords, interfaces)</li>\n                                    <li>Implement static and dynamic routing</li>\n                                    <li>Troubleshoot routing issues using show commands</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Router connecting two LANs</title><rect x="10" y="30" width="60" height="40" rx="5" fill="#334155"/><text x="40" y="55" text-anchor="middle" font-size="8" fill="#94a3b8" font-family="Rajdhani, sans-serif">LAN A</text><circle cx="100" cy="50" r="15" fill="#6366f1"/><text x="100" y="54" text-anchor="middle" font-size="12" fill="white" font-family="Orbitron, sans-serif" font-weight="bold">R</text><rect x="130" y="30" width="60" height="40" rx="5" fill="#334155"/><text x="160" y="55" text-anchor="middle" font-size="8" fill="#94a3b8" font-family="Rajdhani, sans-serif">LAN B</text><line x1="70" y1="50" x2="85" y2="50" stroke="#64748b" stroke-width="1.5"/><line x1="115" y1="50" x2="130" y2="50" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    1,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.1';


INSERT OR IGNORE INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Layer 2 and Layer 3 Switches - CCNA 200-301 Guide',
    'l2_and_l3_switches',
    'CCNA 200-301 exam topic covering L2 and L3 Switches',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Layer 2 Switch Functions</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>MAC Address Learning:</strong> Builds CAM table by learning source MAC addresses</li>\n                                    <li><strong>Frame Forwarding:</strong> Forwards frames based on destination MAC address</li>\n                                    <li><strong>Loop Prevention:</strong> Implements Spanning Tree Protocol (STP/RSTP)</li>\n                                    <li><strong>VLAN Support:</strong> Creates virtual LANs for network segmentation</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Layer 3 Switch Functions</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Inter-VLAN Routing:</strong> Routes between VLANs without external router</li>\n                                    <li><strong>Hardware-Based Routing:</strong> Uses ASICs for wire-speed Layer 3 forwarding</li>\n                                    <li><strong>Routing Protocols:</strong> Supports OSPF, EIGRP for dynamic routing</li>\n                                    <li><strong>Access Control:</strong> Can implement Layer 3 ACLs</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Key Commands</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        show mac address-table          # View CAM table<br>\n                                        show vlan brief                 # Display VLAN information<br>\n                                        show spanning-tree              # STP status<br>\n                                        show ip route                   # L3 routing table<br>\n                                        interface vlan 10               # Create SVI for VLAN 10\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure VLANs and trunk ports</li>\n                                    <li>Implement inter-VLAN routing with SVIs</li>\n                                    <li>Troubleshoot switching loops and STP issues</li>\n                                    <li>Configure port security and access control</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>L2 Switch in a LAN vs L3 Switch for VLANs</title><rect x="20" y="60" width="50" height="15" rx="2" fill="#4f46e5"/><text x="45" y="70" text-anchor="middle" font-size="7" fill="#c7d2fe" font-family="Rajdhani, sans-serif">L2 Switch</text><line x1="25" y1="35" x2="25" y2="60" stroke="#64748b" stroke-width="1.5"/><rect x="20" y="25" width="10" height="10" rx="1" fill="#475569" /><line x1="45" y1="35" x2="45" y2="60" stroke="#64748b" stroke-width="1.5"/><rect x="40" y="25" width="10" height="10" rx="1" fill="#475569" /><line x1="65" y1="35" x2="65" y2="60" stroke="#64748b" stroke-width="1.5"/><rect x="60" y="25" width="10" height="10" rx="1" fill="#475569" /><rect x="120" y="60" width="50" height="15" rx="2" fill="#818cf8"/><text x="145" y="70" text-anchor="middle" font-size="7" fill="#1e1b4b" font-family="Rajdhani, sans-serif">L3 Switch</text><rect x="100" y="25" width="40" height="20" rx="3" fill="#334155" stroke="#f59e0b" /><text x="120" y="38" text-anchor="middle" font-size="6" font-family="Rajdhani, sans-serif" fill="#f59e0b">VLAN 10</text><line x1="110" y1="45" x2="135" y2="60" stroke="#64748b" stroke-width="1.5"/><rect x="150" y="25" width="40" height="20" rx="3" fill="#334155" stroke="#10b981" /><text x="170" y="38" text-anchor="middle" font-size="6" font-family="Rajdhani, sans-serif" fill="#10b981">VLAN 20</text><line x1="160" y1="45" x2="155" y2="60" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    2,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT OR IGNORE INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Next-Generation Firewall & Intrusion Prevention System - CCNA 200-301 Guide',
    'ngfw_and_ips',
    'CCNA 200-301 exam topic covering NGFW & IPS',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">IPS Capabilities</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Signature-Based Detection:</strong> Matches known attack patterns</li>\n                                    <li><strong>Anomaly-Based Detection:</strong> Identifies deviations from normal behavior</li>\n                                    <li><strong>Real-Time Blocking:</strong> Stops threats inline without disrupting flow</li>\n                                    <li><strong>Threat Correlation:</strong> Combines multiple indicators for accuracy</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Deployment Models</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Network-Based IPS (NIPS):</strong> Deployed inline in network segments</li>\n                                    <li><strong>Host-Based IPS (HIPS):</strong> Software agent on individual systems</li>\n                                    <li><strong>Wireless IPS (WIPS):</strong> Monitors wireless networks for threats</li>\n                                    <li><strong>Perimeter Deployment:</strong> At network edge between internal/external</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">NGFW Features</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Application Awareness:</strong> Deep packet inspection beyond port/protocol</li>\n                                    <li><strong>User Identity:</strong> Integrates with Active Directory for user-based policies</li>\n                                    <li><strong>SSL Inspection:</strong> Decrypts and inspects encrypted traffic</li>\n                                    <li><strong>Threat Intelligence:</strong> Cloud-based reputation and signature updates</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand NGFW vs traditional firewall differences</li>\n                                    <li>Recognize IPS deployment scenarios</li>\n                                    <li>Identify when to use IPS vs IDS</li>\n                                    <li>Configure basic firewall access control</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>NGFW protecting a LAN from the Internet</title><path d="M 20 50 C 10 30, 50 30, 40 50 C 60 60, 30 80, 20 70 C 10 80, -10 60, 20 50 Z" fill="#4a4a0f"/><text x="30" y="55" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif" fill="#eab308">Internet</text><line x1="45" y1="50" x2="75" y2="50" stroke="#64748b" stroke-width="1.5"/><path d="M 75 30 L 100 25 L 125 30 L 125 70 L 100 75 L 75 70 Z" fill="#9a3412" stroke="#f97316"/><text x="100" y="53" text-anchor="middle" font-size="8" fill="white" font-family="Rajdhani, sans-serif">NGFW</text><rect x="135" y="30" width="55" height="40" rx="5" fill="#14532d" stroke="#4ade80"/><text x="162" y="55" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif" fill="#bbf7d0">LAN</text><line x1="125" y1="50" x2="135" y2="50" stroke="#64748b" stroke-width="1.5"/><path d="M 55 45 L 65 55 M 65 45 L 55 55" stroke="#ef4444" stroke-width="2.5"/><line x1="60" y1="50" x2="75" y2="50" stroke="#ef4444" stroke-width="1.5"/><path d="M 95 35 L 105 45 M 105 35 L 95 45" stroke="white" stroke-width="3"/></svg>',
    'intermediate',
    15,
    3,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.1';


INSERT OR IGNORE INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Wireless Access Points - CCNA 200-301 Guide',
    'access_points',
    'CCNA 200-301 exam topic covering Access Points',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">802.11 Standards</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        802.11a: 5 GHz, 54 Mbps<br>\n                                        802.11b: 2.4 GHz, 11 Mbps<br>\n                                        802.11g: 2.4 GHz, 54 Mbps<br>\n                                        802.11n: 2.4/5 GHz, up to 600 Mbps<br>\n                                        802.11ac: 5 GHz, up to 6.9 Gbps<br>\n                                        802.11ax (Wi-Fi 6): 2.4/5 GHz, up to 9.6 Gbps\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">AP Functions</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Wireless Bridge:</strong> Converts between wireless (802.11) and wired (Ethernet)</li>\n                                    <li><strong>Coverage Area:</strong> Provides wireless connectivity within RF range</li>\n                                    <li><strong>Client Authentication:</strong> Handles WPA/WPA2/WPA3 security protocols</li>\n                                    <li><strong>Traffic Management:</strong> Controls bandwidth and QoS for wireless clients</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">AP Types</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Autonomous AP:</strong> Standalone operation with local configuration</li>\n                                    <li><strong>Lightweight AP:</strong> Centrally managed by Wireless LAN Controller (WLC)</li>\n                                    <li><strong>Cloud-Managed AP:</strong> Configuration and monitoring via cloud portal</li>\n                                    <li><strong>Mesh AP:</strong> Wireless backhaul to other APs for extended coverage</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure basic wireless security (WPA2/WPA3)</li>\n                                    <li>Understand autonomous vs controller-based architectures</li>\n                                    <li>Troubleshoot wireless connectivity issues</li>\n                                    <li>Plan wireless coverage and channel assignments</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Access Point connecting wireless devices to a wired network</title><rect x="10" y="42.5" width="50" height="15" rx="2" fill="#4f46e5"/><text x="35" y="51.5" text-anchor="middle" font-size="7" fill="#c7d2fe" font-family="Rajdhani, sans-serif">Switch</text><circle cx="100" cy="50" r="10" fill="#2563eb"/><text x="100" y="53" text-anchor="middle" font-size="8" fill="white" font-family="Rajdhani, sans-serif">AP</text><line x1="60" y1="50" x2="90" y2="50" stroke="#64748b" stroke-width="1.5"/><rect x="150" y="20" width="20" height="15" rx="2" fill="#475569"/><rect x="155" y="70" width="10" height="15" rx="2" fill="#475569"/><path d="M 110 50 A 20 20 0 0 1 125 35" stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M 115 50 A 40 40 0 0 1 150 15" stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M 110 50 A 30 30 0 0 0 130 75" stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
    'intermediate',
    15,
    4,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.1';


INSERT OR IGNORE INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Controllers (Cisco DNA Center and WLC) - CCNA 200-301 Guide',
    'controllers_wlc',
    'CCNA 200-301 exam topic covering Controllers (WLC)',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Cisco DNA Center</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Intent-Based Networking:</strong> Policy-driven automation and assurance</li>\n                                    <li><strong>Network Assurance:</strong> AI/ML-powered analytics and troubleshooting</li>\n                                    <li><strong>Software-Defined Access:</strong> Automated network segmentation and access control</li>\n                                    <li><strong>Centralized Management:</strong> Single pane of glass for entire network infrastructure</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">WLC Deployment Models</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Centralized:</strong> WLC in data center, APs distributed</li>\n                                    <li><strong>Distributed:</strong> Smaller WLCs closer to AP clusters</li>\n                                    <li><strong>Cloud-Based:</strong> Virtual WLC in cloud infrastructure</li>\n                                    <li><strong>Embedded:</strong> WLC function integrated into switch</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">WLC Functions</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Centralized Management:</strong> Configure and monitor multiple APs from single point</li>\n                                    <li><strong>CAPWAP Protocol:</strong> Control and Provisioning of Wireless Access Points</li>\n                                    <li><strong>RF Management:</strong> Automatic power and channel optimization</li>\n                                    <li><strong>Client Mobility:</strong> Seamless roaming between APs</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CAPWAP Tunnels</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Control Tunnel:</strong> Management traffic between WLC and AP (UDP 5246)</li>\n                                    <li><strong>Data Tunnel:</strong> Client data traffic tunneled to WLC (UDP 5247)</li>\n                                    <li><strong>Split Tunneling:</strong> Some traffic local, some to controller</li>\n                                    <li><strong>FlexConnect:</strong> Local switching at AP when WLC unreachable</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand CAPWAP tunnel establishment</li>\n                                    <li>Configure WLANs and security policies</li>\n                                    <li>Troubleshoot AP join process to WLC</li>\n                                    <li>Implement FlexConnect for branch offices</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Wireless LAN Controller managing multiple Access Points</title><rect x="10" y="42.5" width="40" height="15" rx="2" fill="#be185d"/><text x="30" y="51.5" text-anchor="middle" font-size="7" fill="white" font-family="Rajdhani, sans-serif">WLC</text><rect x="70" y="30" width="60" height="40" rx="5" fill="#334155"/><text x="100" y="55" text-anchor="middle" font-size="8" fill="#94a3b8" font-family="Rajdhani, sans-serif">Core Net</text><line x1="50" y1="50" x2="70" y2="50" stroke="#64748b" stroke-width="1.5"/><circle cx="150" cy="20" r="8" fill="#2563eb"/><text x="150" y="23" font-size="6" fill="white" text-anchor="middle" font-family="Rajdhani, sans-serif">AP</text><circle cx="170" cy="50" r="8" fill="#2563eb"/><text x="170" y="53" font-size="6" fill="white" text-anchor="middle" font-family="Rajdhani, sans-serif">AP</text><circle cx="150" cy="80" r="8" fill="#2563eb"/><text x="150" y="83" font-size="6" fill="white" text-anchor="middle" font-family="Rajdhani, sans-serif">AP</text><path d="M 50 50 Q 100 -10 150 15" stroke="#db2777" stroke-width="1.5" fill="none" stroke-dasharray="3"/><path d="M 50 50 Q 110 50 162 50" stroke="#db2777" stroke-width="1.5" fill="none" stroke-dasharray="3"/><path d="M 50 50 Q 100 110 150 85" stroke="#db2777" stroke-width="1.5" fill="none" stroke-dasharray="3"/></svg>',
    'intermediate',
    15,
    5,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


-- Update topic counts
UPDATE sections SET topic_count = (
    SELECT COUNT(*) FROM topics t 
    JOIN subsections s ON t.subsection_id = s.id 
    WHERE s.section_id = sections.id
) WHERE section_number = '1.0';
