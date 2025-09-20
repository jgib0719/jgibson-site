-- CCNA Section 1.0 Network Fundamentals Database Data (Complete)
-- Generated from chapter1.html topicDetails with Object.assign() parsing
-- Created: September 19, 2025
-- Split Horizon Design System Format


-- Clear existing Section 1 data
DELETE FROM topics WHERE subsection_id IN (
    SELECT s.id FROM subsections s 
    JOIN sections sec ON s.section_id = sec.id 
    WHERE sec.section_number = '1.0'
);


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Network Endpoints - CCNA 200-301 Guide',
    'endpoints',
    'CCNA 200-301 exam topic covering Endpoints',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Endpoint Types</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Workstations:</strong> Desktop and laptop computers</li>\n                                    <li><strong>Mobile Devices:</strong> Smartphones, tablets, IoT devices</li>\n                                    <li><strong>IP Phones:</strong> VoIP endpoints for unified communications</li>\n                                    <li><strong>Printers:</strong> Network-attached printing devices</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Network Configuration</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Static IP: Manual IP configuration<br>\n                                        DHCP: Automatic IP assignment<br>\n                                        DNS: Domain name resolution<br>\n                                        Default Gateway: Router for remote networks\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure DHCP server and reservations</li>\n                                    <li>Troubleshoot IP connectivity issues</li>\n                                    <li>Implement VLAN assignments for endpoints</li>\n                                    <li>Configure port security for endpoint connections</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Various endpoints connecting to a network</title><path d="M 80 50 C 70 30, 130 30, 120 50 C 140 60, 110 80, 100 70 C 90 80, 60 60, 80 50 Z" fill="#334155"/><text x="100" y="55" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif" fill="#94a3b8">Network</text><rect x="30" y="10" width="20" height="15" rx="2" fill="#475569"/><line x1="40" y1="25" x2="85" y2="45" stroke="#64748b" stroke-width="1.5"/><rect x="20" y="70" width="15" height="20" rx="2" fill="#475569"/><line x1="27" y1="70" x2="80" y2="55" stroke="#64748b" stroke-width="1.5"/><rect x="150" y="10" width="20" height="15" rx="2" fill="#475569"/><line x1="160" y1="25" x2="115" y2="45" stroke="#64748b" stroke-width="1.5"/><circle cx="160" cy="80" r="8" fill="#475569"/><line x1="155" y1="75" x2="115" y2="60" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    1,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.1';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Network Servers - CCNA 200-301 Guide',
    'servers',
    'CCNA 200-301 exam topic covering Servers',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Server Placement</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Data Center:</strong> Centralized server farm with redundancy</li>\n                                    <li><strong>Server Farm:</strong> Multiple servers in secure environment</li>\n                                    <li><strong>DMZ:</strong> Public-facing servers in screened subnet</li>\n                                    <li><strong>Cloud:</strong> Virtual servers in cloud infrastructure</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Server Types</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>DHCP Server:</strong> Assigns IP addresses automatically</li>\n                                    <li><strong>DNS Server:</strong> Resolves domain names to IP addresses</li>\n                                    <li><strong>Web Server:</strong> Hosts websites and web applications</li>\n                                    <li><strong>File Server:</strong> Centralized file storage and sharing</li>\n                                    <li><strong>Email Server:</strong> Handles email communication</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure DHCP and DNS services on routers</li>\n                                    <li>Implement NTP for time synchronization</li>\n                                    <li>Configure syslog for centralized logging</li>\n                                    <li>Set up SNMP for network monitoring</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Client-Server network model</title><rect x="85" y="10" width="30" height="35" rx="3" fill="#15803d" stroke="#34d399"/><text x="100" y="32" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif" fill="#d1fae5">Server</text><line x1="100" y1="45" x2="100" y2="55" stroke="#64748b" stroke-width="1.5"/><line x1="20" y1="55" x2="180" y2="55" stroke="#64748b" stroke-width="1.5"/><rect x="30" y="65" width="20" height="15" rx="2" fill="#475569"/><text x="40" y="86" font-size="6" font-family="Rajdhani, sans-serif" text-anchor="middle">Client</text><line x1="40" y1="65" x2="40" y2="55" stroke="#64748b" stroke-width="1.5"/><rect x="90" y="65" width="20" height="15" rx="2" fill="#475569"/><text x="100" y="86" font-size="6" font-family="Rajdhani, sans-serif" text-anchor="middle">Client</text><line x1="100" y1="65" x2="100" y2="55" stroke="#64748b" stroke-width="1.5"/><rect x="150" y="65" width="20" height="15" rx="2" fill="#475569"/><text x="160" y="86" font-size="6" font-family="Rajdhani, sans-serif" text-anchor="middle">Client</text><line x1="160" y1="65" x2="160" y2="55" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    2,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.1';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Power over Ethernet - CCNA 200-301 Guide',
    'poe',
    'CCNA 200-301 exam topic covering PoE',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">PoE Standards</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        802.3af (PoE): 15.4W at source, 12.95W at device<br>\n                                        802.3at (PoE+): 30W at source, 25.5W at device<br>\n                                        802.3bt (PoE++): Up to 60W or 100W<br>\n                                        Cisco UPoE: Up to 60W proprietary standard\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">PoE Components</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>PSE (Power Sourcing Equipment):</strong> Switch or injector providing power</li>\n                                    <li><strong>PD (Powered Device):</strong> Device receiving power (AP, IP phone, camera)</li>\n                                    <li><strong>Classification:</strong> PD advertises power requirements to PSE</li>\n                                    <li><strong>Detection:</strong> PSE detects if device supports PoE</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Power Delivery Methods</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Alternative A:</strong> Power over data pairs (1,2 and 3,6)</li>\n                                    <li><strong>Alternative B:</strong> Power over spare pairs (4,5 and 7,8)</li>\n                                    <li><strong>4-Pair:</strong> All pairs used for higher power (PoE++)</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Calculate PoE power budgets for switches</li>\n                                    <li>Configure PoE on switch interfaces</li>\n                                    <li>Troubleshoot PoE delivery issues</li>\n                                    <li>Understand PoE+ requirements for devices</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>PoE switch providing power and data</title><rect x="75" y="10" width="50" height="20" rx="2" fill="#5b21b6"/><text x="100" y="23" text-anchor="middle" font-size="7" font-family="Rajdhani, sans-serif" fill="#ddd6fe">PoE Switch</text><rect x="20" y="70" width="25" height="18" rx="2" fill="#475569"/><text x="32.5" y="93" text-anchor="middle" font-size="7" font-family="Rajdhani, sans-serif">PC (Data)</text><path d="M 85 30 V 50 H 45 V 70" stroke="#64748b" stroke-width="1.5" fill="none"/><rect x="155" y="70" width="25" height="18" rx="2" fill="#475569"/><text x="167.5" y="93" text-anchor="middle" font-size="6" font-family="Rajdhani, sans-serif">VoIP (Data+Pwr)</text><path d="M 115 30 V 50 H 155 V 70" stroke="#64748b" stroke-width="1.5" fill="none"/><path d="M 130 40 L 127 47 L 133 47 L 130 54" stroke="#facc15" fill="#facc15" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/></svg>',
    'intermediate',
    15,
    3,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Two-Tier Architecture - CCNA 200-301 Guide',
    'two_tier',
    'CCNA 200-301 exam topic covering Two-Tier',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Architecture Overview</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Access Layer:</strong> End-user connections and edge services</li>\n                                    <li><strong>Core Layer:</strong> High-speed backbone and routing</li>\n                                    <li><strong>Collapsed Distribution:</strong> Distribution functions integrated into core</li>\n                                    <li><strong>Cost Effective:</strong> Fewer devices and simpler management</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Compare two-tier vs three-tier architectures</li>\n                                    <li>Identify appropriate use cases for each model</li>\n                                    <li>Understand scalability limitations</li>\n                                </ul>\n                            </section>',
    '',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Two-Tier Architecture</title><rect x="60" y="15" width="80" height="20" rx="3" fill="#818cf8"/><text x="100" y="28" text-anchor="middle" font-size="8" fill="white" font-family="Rajdhani, sans-serif">Core/Distribution</text><rect x="20" y="70" width="50" height="15" rx="2" fill="#a5b4fc"/><text x="45" y="79" text-anchor="middle" font-size="7" fill="#3730a3" font-family="Rajdhani, sans-serif">Access</text><rect x="130" y="70" width="50" height="15" rx="2" fill="#a5b4fc"/><text x="155" y="79" text-anchor="middle" font-size="7" fill="#3730a3" font-family="Rajdhani, sans-serif">Access</text><path d="M 45 70 V 50 C 45 40, 80 40, 80 35" stroke="#64748b" stroke-width="1.5" fill="none"/><path d="M 155 70 V 50 C 155 40, 120 40, 120 35" stroke="#64748b" stroke-width="1.5" fill="none"/></svg>',
    'intermediate',
    15,
    4,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.2';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Three-Tier Architecture - CCNA 200-301 Guide',
    'three_tier',
    'CCNA 200-301 exam topic covering Three-Tier',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Architecture Layers</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Access Layer:</strong> End-user connectivity, VLANs, port security</li>\n                                    <li><strong>Distribution Layer:</strong> Routing, policies, aggregation</li>\n                                    <li><strong>Core Layer:</strong> High-speed forwarding, redundancy</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Design hierarchical network topologies</li>\n                                    <li>Select appropriate devices for each layer</li>\n                                    <li>Implement redundancy and load balancing</li>\n                                </ul>\n                            </section>',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Three-Tier Architecture</title><rect x="80" y="5" width="40" height="15" rx="2" fill="#6366f1"/><text x="100" y="14" text-anchor="middle" font-size="7" fill="white">Core</text><rect x="30" y="40" width="50" height="15" rx="2" fill="#818cf8"/><text x="55" y="49" text-anchor="middle" font-size="7" fill="white">Distribution</text><rect x="120" y="40" width="50" height="15" rx="2" fill="#818cf8"/><text x="145" y="49" text-anchor="middle" font-size="7" fill="white">Distribution</text><rect x="5" y="80" width="40" height="15" rx="2" fill="#a5b4fc"/><text x="25" y="89" text-anchor="middle" font-size="7" fill="#3730a3">Access</text><rect x="55" y="80" width="40" height="15" rx="2" fill="#a5b4fc"/><text x="75" y="89" text-anchor="middle" font-size="7" fill="#3730a3">Access</text><line x1="100" y1="20" x2="55" y2="40" stroke="#64748b" stroke-width="1.5"/><line x1="100" y1="20" x2="145" y2="40" stroke="#64748b" stroke-width="1.5"/><line x1="55" y1="55" x2="25" y2="80" stroke="#64748b" stroke-width="1.5"/><line x1="55" y1="55" x2="75" y2="80" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    5,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.2';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Spine-Leaf Architecture - CCNA 200-301 Guide',
    'spine_leaf',
    'CCNA 200-301 exam topic covering Spine-Leaf',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Architecture Overview</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Spine Switches:</strong> High-performance core switches</li>\n                                    <li><strong>Leaf Switches:</strong> Access switches connecting servers/users</li>\n                                    <li><strong>Full Mesh:</strong> Every leaf connects to every spine</li>\n                                    <li><strong>Consistent Latency:</strong> Same hop count between any two endpoints</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand modern data center architectures</li>\n                                    <li>Compare traditional vs spine-leaf designs</li>\n                                    <li>Recognize use cases for spine-leaf topology</li>\n                                </ul>\n                            </section>',
    '',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Spine-Leaf Architecture</title><rect x="30" y="15" width="40" height="15" rx="2" fill="#166534"/><text x="50" y="24" text-anchor="middle" font-size="7" fill="white">Spine</text><rect x="130" y="15" width="40" height="15" rx="2" fill="#166534"/><text x="150" y="24" text-anchor="middle" font-size="7" fill="white">Spine</text><rect x="10" y="75" width="40" height="15" rx="2" fill="#34d399"/><text x="30" y="84" text-anchor="middle" font-size="7" fill="#065f46">Leaf</text><rect x="80" y="75" width="40" height="15" rx="2" fill="#34d399"/><text x="100" y="84" text-anchor="middle" font-size="7" fill="#065f46">Leaf</text><rect x="150" y="75" width="40" height="15" rx="2" fill="#34d399"/><text x="170" y="84" text-anchor="middle" font-size="7" fill="#065f46">Leaf</text><line x1="30" y1="75" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/><line x1="30" y1="75" x2="150" y2="30" stroke="#64748b" stroke-width="1.5"/><line x1="100" y1="75" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/><line x1="100" y1="75" x2="150" y2="30" stroke="#64748b" stroke-width="1.5"/><line x1="170" y1="75" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/><line x1="170" y1="75" x2="150" y2="30" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    6,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.2';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Wide Area Network - CCNA 200-301 Guide',
    'wan',
    'CCNA 200-301 exam topic covering WAN',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">WAN Technologies</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>MPLS:</strong> Multi-Protocol Label Switching for enterprise connectivity</li>\n                                    <li><strong>Internet VPN:</strong> Site-to-site VPN over public internet</li>\n                                    <li><strong>SD-WAN:</strong> Software-defined WAN with centralized policy</li>\n                                    <li><strong>Metro Ethernet:</strong> Layer 2 connectivity over metropolitan area</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure PPP and Frame Relay (legacy)</li>\n                                    <li>Implement site-to-site VPN tunnels</li>\n                                    <li>Understand WAN connectivity options</li>\n                                    <li>Troubleshoot WAN connectivity issues</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>WAN connecting two sites</title><rect x="10" y="30" width="50" height="40" rx="5" fill="#334155"/><text x="35" y="55" text-anchor="middle" font-size="8" fill="#94a3b8">Site A</text><rect x="140" y="30" width="50" height="40" rx="5" fill="#334155"/><text x="165" y="55" text-anchor="middle" font-size="8" fill="#94a3b8">Site B</text><path d="M 80 50 C 70 30, 130 30, 120 50 C 140 60, 110 80, 100 70 C 90 80, 60 60, 80 50 Z" fill="#581c87" stroke="#a855f7"/><text x="100" y="55" text-anchor="middle" font-size="8" fill="#e9d5ff">WAN</text><line x1="60" y1="50" x2="82" y2="50" stroke="#64748b" stroke-width="1.5"/><line x1="118" y1="50" x2="140" y2="50" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    7,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.2';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Small Office/Home Office - CCNA 200-301 Guide',
    'soho',
    'CCNA 200-301 exam topic covering SOHO',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SOHO Components</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Router/Modem:</strong> Internet connectivity and NAT</li>\n                                    <li><strong>Wireless AP:</strong> Built into router for Wi-Fi access</li>\n                                    <li><strong>Switch Ports:</strong> Limited Ethernet connections</li>\n                                    <li><strong>Firewall:</strong> Basic security features built-in</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure basic router security</li>\n                                    <li>Set up wireless networks</li>\n                                    <li>Implement port forwarding and NAT</li>\n                                    <li>Troubleshoot home network issues</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>SOHO Network</title><path d="M 20 50 C 10 30, 50 30, 40 50 C 60 60, 30 80, 20 70 C 10 80, -10 60, 20 50 Z" fill="#4a4a0f"/><text x="30" y="55" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif">Internet</text><rect x="70" y="40" width="50" height="20" rx="3" fill="#991b1b"/><text x="95" y="53" text-anchor="middle" font-size="7" fill="#fecaca">SOHO Router</text><line x1="45" y1="50" x2="70" y2="50" stroke="#64748b" stroke-width="1.5"/><rect x="150" y="20" width="20" height="15" rx="2" fill="#475569"/><rect x="150" y="70" width="20" height="15" rx="2" fill="#475569"/><line x1="120" y1="50" x2="150" y2="27.5" stroke="#64748b" stroke-width="1.5"/><line x1="120" y1="50" x2="150" y2="77.5" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    8,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.2';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Copper Twisted Pair Cabling - CCNA 200-301 Guide',
    'copper___twisted_pair',
    'CCNA 200-301 exam topic covering Copper - Twisted Pair',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Cable Categories</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Cat 5e: 100 MHz, 1 Gbps up to 100m<br>\n                                        Cat 6: 250 MHz, 1 Gbps up to 100m, 10 Gbps up to 55m<br>\n                                        Cat 6a: 500 MHz, 10 Gbps up to 100m<br>\n                                        Cat 7: 600 MHz, 10 Gbps up to 100m\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ethernet Standards</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>10BASE-T:</strong> 10 Mbps over Cat 3/5</li>\n                                    <li><strong>100BASE-TX:</strong> 100 Mbps over Cat 5/5e</li>\n                                    <li><strong>1000BASE-T:</strong> 1 Gbps over Cat 5e/6</li>\n                                    <li><strong>10GBASE-T:</strong> 10 Gbps over Cat 6a/7</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Identify cable categories and capabilities</li>\n                                    <li>Understand Ethernet pinouts (T568A/B)</li>\n                                    <li>Troubleshoot cable issues</li>\n                                    <li>Calculate maximum distances</li>\n                                </ul>\n                            </section>',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Twisted Pair Copper Cable</title><rect x="20" y="40" width="160" height="20" rx="10" fill="#b45309"/><text x="100" y="53" text-anchor="middle" font-size="8" fill="#fed7aa">Copper Cable</text><path d="M 30 25 Q 35 15 40 25 Q 45 35 50 25 Q 55 15 60 25" stroke="#0ea5e9" stroke-width="2" fill="none"/><path d="M 30 75 Q 35 85 40 75 Q 45 65 50 75 Q 55 85 60 75" stroke="#10b981" stroke-width="2" fill="none"/><path d="M 140 25 Q 145 15 150 25 Q 155 35 160 25 Q 165 15 170 25" stroke="#f59e0b" stroke-width="2" fill="none"/><path d="M 140 75 Q 145 85 150 75 Q 155 65 160 75 Q 165 85 170 75" stroke="#ef4444" stroke-width="2" fill="none"/><text x="100" y="90" text-anchor="middle" font-size="7" fill="#92400e">Twisted pairs reduce EMI</text></svg>',
    'intermediate',
    15,
    9,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.3';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'IPv4 Addressing & Subnetting - CCNA 200-301 Guide',
    'ipv4_and_subnetting',
    'CCNA 200-301 exam topic covering IPv4 & Subnetting',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">IPv4 Address Classes</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Class A: 1.0.0.0 to 126.255.255.255 (/8)<br>\n                                        Class B: 128.0.0.0 to 191.255.255.255 (/16)<br>\n                                        Class C: 192.0.0.0 to 223.255.255.255 (/24)\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Subnetting Process</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Determine Requirements:</strong> Number of subnets and hosts needed</li>\n                                    <li><strong>Borrow Bits:</strong> Use host bits for subnet addressing</li>\n                                    <li><strong>Calculate Ranges:</strong> Network, broadcast, and usable addresses</li>\n                                    <li><strong>VLSM:</strong> Variable Length Subnet Masking for efficiency</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Calculate subnet ranges quickly</li>\n                                    <li>Implement VLSM designs</li>\n                                    <li>Troubleshoot addressing issues</li>\n                                    <li>Configure router interfaces with correct addressing</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>IPv4 Address and Subnet Mask</title><text x="100" y="25" text-anchor="middle" font-size="10" font-family="monospace" fill="#f8fafc">192.168.1.100</text><text x="100" y="35" text-anchor="middle" font-size="8">IP Address</text><text x="100" y="60" text-anchor="middle" font-size="10" font-family="monospace" fill="#f8fafc">255.255.255.0</text><text x="100" y="70" text-anchor="middle" font-size="8">Subnet Mask</text><rect x="34" y="18" width="102" height="10" fill="rgba(139, 92, 246, 0.2)" rx="2"/><text x="85" y="12" font-size="7">Network: 192.168.1</text><rect x="137" y="18" width="28" height="10" fill="rgba(236, 72, 153, 0.2)" rx="2"/><text x="151" y="12" font-size="7">Host: 100</text></svg>',
    'intermediate',
    15,
    10,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'IPv6 Addressing - CCNA 200-301 Guide',
    'ipv6_addressing',
    'CCNA 200-301 exam topic covering IPv6 Addressing',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">IPv6 Address Types</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Global Unicast:</strong> 2000::/3 - Routable on internet</li>\n                                    <li><strong>Link-Local:</strong> FE80::/10 - Local segment communication</li>\n                                    <li><strong>Unique Local:</strong> FC00::/7 - Private addressing</li>\n                                    <li><strong>Multicast:</strong> FF00::/8 - One-to-many communication</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Address Configuration</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Static Assignment:</strong> Manual configuration</li>\n                                    <li><strong>SLAAC:</strong> Stateless Address Auto-Configuration</li>\n                                    <li><strong>DHCPv6:</strong> Stateful address assignment</li>\n                                    <li><strong>EUI-64:</strong> Modified Extended Unique Identifier</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure IPv6 on router interfaces</li>\n                                    <li>Implement SLAAC and DHCPv6</li>\n                                    <li>Understand neighbor discovery protocol</li>\n                                    <li>Troubleshoot IPv6 connectivity</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>IPv6 Address and Prefix</title><text x="100" y="40" text-anchor="middle" font-size="8" font-family="monospace" fill="#f8fafc">2001:db8:85a3:0:0:8a2e:370:7334</text><rect x="20" y="33" width="86" height="10" fill="rgba(96, 165, 250, 0.2)" rx="2"/><text x="63" y="25" font-size="7">Network Prefix (/64)</text><rect x="107" y="33" width="74" height="10" fill="rgba(244, 114, 182, 0.2)" rx="2"/><text x="144" y="25" font-size="7">Interface ID</text><text x="100" y="70" font-size="7" text-anchor="middle" fill="#94a3b8">Compressed: 2001:db8:85a3::8a2e:370:7334</text></svg>',
    'intermediate',
    15,
    11,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.8';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Single-Mode Fiber Optic - CCNA 200-301 Guide',
    'fiber_optic___single_mode',
    'CCNA 200-301 exam topic covering Fiber Optic - Single Mode',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Single-Mode Fiber Characteristics</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Core Diameter:</strong> 8-10 microns (very small core)</li>\n                                    <li><strong>Light Propagation:</strong> Only one mode of light can propagate</li>\n                                    <li><strong>Distance:</strong> Up to 100+ kilometers without repeaters</li>\n                                    <li><strong>Bandwidth:</strong> Extremely high bandwidth capacity</li>\n                                    <li><strong>Dispersion:</strong> Minimal modal dispersion due to single light path</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ethernet Standards</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        1000BASE-LX: 1 Gbps up to 10km<br>\n                                        1000BASE-EX: 1 Gbps up to 40km<br>\n                                        10GBASE-LR: 10 Gbps up to 10km<br>\n                                        10GBASE-ER: 10 Gbps up to 40km<br>\n                                        100GBASE-LR4: 100 Gbps up to 10km\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Applications & Use Cases</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>WAN Connections:</strong> Long-distance telecommunications</li>\n                                    <li><strong>Campus Backbone:</strong> Building-to-building connections</li>\n                                    <li><strong>Internet Backbone:</strong> ISP and carrier networks</li>\n                                    <li><strong>Data Centers:</strong> High-speed interconnects between facilities</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Compare single-mode vs multimode fiber characteristics</li>\n                                    <li>Identify appropriate fiber types for distance requirements</li>\n                                    <li>Understand fiber optic connector types (LC, SC, ST)</li>\n                                    <li>Calculate fiber optic link budgets and loss</li>\n                                </ul>\n                            </section>',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Single Mode Fiber</title><rect x="20" y="45" width="160" height="10" rx="5" fill="#fbbf24"/><circle cx="15" cy="50" r="8" fill="#0ea5e9"/><circle cx="185" cy="50" r="8" fill="#0ea5e9"/><path d="M 23 50 L 177 50" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/><text x="100" y="35" text-anchor="middle" font-size="8" fill="#0ea5e9">Single Mode</text><text x="100" y="75" text-anchor="middle" font-size="7" fill="#0ea5e9">Long distance, high bandwidth</text><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><polygon points="0,0 0,6 6,3" fill="#ef4444"/></marker></defs></svg>',
    'intermediate',
    15,
    12,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.3';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Multimode Fiber Optic - CCNA 200-301 Guide',
    'fiber_optic___multimode',
    'CCNA 200-301 exam topic covering Fiber Optic - Multimode',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Multimode Fiber Characteristics</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Core Diameter:</strong> 50 or 62.5 microns (larger core)</li>\n                                    <li><strong>Light Propagation:</strong> Multiple modes of light can propagate</li>\n                                    <li><strong>Distance:</strong> Up to 550 meters (OM4) or 2km (depending on standard)</li>\n                                    <li><strong>Modal Dispersion:</strong> Light pulses spread out over distance</li>\n                                    <li><strong>Cost:</strong> Less expensive than single-mode for short distances</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Multimode Categories</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        OM1: 62.5/125μm, 850nm, 275m @ 1Gbps<br>\n                                        OM2: 50/125μm, 850nm, 550m @ 1Gbps<br>\n                                        OM3: 50/125μm, 850nm, 300m @ 10Gbps<br>\n                                        OM4: 50/125μm, 850nm, 400m @ 10Gbps<br>\n                                        OM5: 50/125μm, wideband, 400m @ 40/100Gbps\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Applications</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Building Backbone:</strong> Floor-to-floor connections</li>\n                                    <li><strong>Data Center:</strong> Server-to-switch connections</li>\n                                    <li><strong>Campus Networks:</strong> Short to medium distance links</li>\n                                    <li><strong>LAN Infrastructure:</strong> High-speed local connections</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand modal dispersion limitations</li>\n                                    <li>Select appropriate fiber grade for applications</li>\n                                    <li>Configure fiber interfaces on switches and routers</li>\n                                    <li>Troubleshoot fiber connectivity issues</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Multimode Fiber</title><rect x="20" y="42.5" width="160" height="15" rx="7.5" fill="#fbbf24"/><circle cx="15" cy="50" r="10" fill="#0ea5e9"/><circle cx="185" cy="50" r="10" fill="#0ea5e9"/><path d="M 25 45 L 175 45" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow1)"/><path d="M 25 50 L 175 50" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow2)"/><path d="M 25 55 L 175 55" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#arrow3)"/><text x="100" y="30" text-anchor="middle" font-size="8" fill="#0ea5e9">Multimode</text><text x="100" y="80" text-anchor="middle" font-size="7" fill="#0ea5e9">Multiple light paths</text><defs><marker id="arrow1" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto"><polygon points="0,0 0,4 4,2" fill="#ef4444"/></marker><marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto"><polygon points="0,0 0,4 4,2" fill="#10b981"/></marker><marker id="arrow3" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto"><polygon points="0,0 0,4 4,2" fill="#8b5cf6"/></marker></defs></svg>',
    'intermediate',
    15,
    13,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.3';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Cable Categories - CCNA 200-301 Guide',
    'cable_categories',
    'CCNA 200-301 exam topic covering Cable Categories',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">UTP Cable Categories</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Cat 3: 16 MHz, 10 Mbps (legacy)<br>\n                                        Cat 5: 100 MHz, 100 Mbps (legacy)<br>\n                                        Cat 5e: 100 MHz, 1000 Mbps, 100m<br>\n                                        Cat 6: 250 MHz, 1000 Mbps/10 Gbps (55m)<br>\n                                        Cat 6a: 500 MHz, 10 Gbps, 100m<br>\n                                        Cat 7: 600 MHz, 10 Gbps, 100m (shielded)<br>\n                                        Cat 8: 2000 MHz, 25/40 Gbps, 30m\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Cable Construction</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>UTP:</strong> Unshielded Twisted Pair - most common</li>\n                                    <li><strong>STP:</strong> Shielded Twisted Pair - EMI protection</li>\n                                    <li><strong>FTP:</strong> Foiled Twisted Pair - overall shield</li>\n                                    <li><strong>SFTP:</strong> Shielded Foiled Twisted Pair - dual protection</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Performance Factors</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Bandwidth:</strong> Frequency range cable can carry</li>\n                                    <li><strong>Attenuation:</strong> Signal loss over distance</li>\n                                    <li><strong>NEXT:</strong> Near-End Crosstalk between pairs</li>\n                                    <li><strong>FEXT:</strong> Far-End Crosstalk interference</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Select appropriate cable category for speed requirements</li>\n                                    <li>Understand distance limitations for each category</li>\n                                    <li>Identify cable construction types and uses</li>\n                                    <li>Troubleshoot cable performance issues</li>\n                                </ul>\n                            </section>',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Cable Categories</title><rect x="10" y="20" width="50" height="15" rx="2" fill="#10b981"/><text x="35" y="30" text-anchor="middle" font-size="8" fill="white">Cat5e</text><text x="35" y="45" text-anchor="middle" font-size="7" fill="#10b981">1 Gb/s</text><rect x="75" y="20" width="50" height="15" rx="2" fill="#3b82f6"/><text x="100" y="30" text-anchor="middle" font-size="8" fill="white">Cat6</text><text x="100" y="45" text-anchor="middle" font-size="7" fill="#3b82f6">10 Gb/s @55m</text><rect x="140" y="20" width="50" height="15" rx="2" fill="#8b5cf6"/><text x="165" y="30" text-anchor="middle" font-size="8" fill="white">Cat6a</text><text x="165" y="45" text-anchor="middle" font-size="7" fill="#8b5cf6">10 Gb/s @100m</text><rect x="50" y="65" width="100" height="20" rx="3" fill="#ef4444"/><text x="100" y="78" text-anchor="middle" font-size="8" fill="white">Bandwidth increases</text></svg>',
    'intermediate',
    15,
    14,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.3';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Network Connectors - CCNA 200-301 Guide',
    'connectors',
    'CCNA 200-301 exam topic covering Connectors',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Copper Connectors</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>RJ45:</strong> 8P8C connector for Ethernet (Cat 5e/6/6a)</li>\n                                    <li><strong>RJ11:</strong> 6P4C connector for telephone lines</li>\n                                    <li><strong>GG45:</strong> Backward compatible with RJ45, supports Cat 7</li>\n                                    <li><strong>TERA:</strong> Cat 7 connector with improved performance</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Fiber Optic Connectors</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>LC (Lucent Connector):</strong> Small form factor, duplex</li>\n                                    <li><strong>SC (Subscriber Connector):</strong> Square connector, push-pull</li>\n                                    <li><strong>ST (Straight Tip):</strong> Bayonet mount, twist-lock</li>\n                                    <li><strong>FC (Ferrule Connector):</strong> Threaded, high precision</li>\n                                    <li><strong>MTP/MPO:</strong> Multi-fiber connector for high density</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Wiring Standards</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        T568A: Green/White-Green-Orange/White-Blue-Blue/White-Orange-Brown/White-Brown<br>\n                                        T568B: Orange/White-Orange-Green/White-Blue-Blue/White-Green-Brown/White-Brown<br>\n                                        Straight-through: Both ends same standard<br>\n                                        Crossover: One T568A, one T568B\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Identify connector types and applications</li>\n                                    <li>Understand T568A vs T568B wiring standards</li>\n                                    <li>Create straight-through and crossover cables</li>\n                                    <li>Troubleshoot connector and wiring issues</li>\n                                </ul>\n                            </section>',
    '',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Network Connectors</title><rect x="30" y="25" width="40" height="20" rx="3" fill="#475569"/><rect x="32" y="30" width="36" height="10" rx="2" fill="#fbbf24"/><text x="50" y="37" text-anchor="middle" font-size="7" fill="#1e293b">RJ45</text><text x="50" y="55" text-anchor="middle" font-size="7" fill="#475569">Copper</text><rect x="130" y="25" width="25" height="20" rx="3" fill="#475569"/><rect x="132" y="30" width="21" height="10" rx="5" fill="#0ea5e9"/><text x="142.5" y="37" text-anchor="middle" font-size="7" fill="white">LC</text><text x="142.5" y="55" text-anchor="middle" font-size="7" fill="#475569">Fiber</text><line x1="75" y1="35" x2="125" y2="35" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    15,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.3';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Ethernet Connections (Shared Media and Point-to-Point) - CCNA 200-301 Guide',
    'ethernet_connections',
    'CCNA 200-301 exam topic covering Ethernet Connections',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Shared Media (Legacy)</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Ethernet Hubs:</strong> All devices share the same collision domain</li>\n                                    <li><strong>CSMA/CD Required:</strong> Carrier Sense Multiple Access with Collision Detection</li>\n                                    <li><strong>Half-Duplex:</strong> Cannot send and receive simultaneously</li>\n                                    <li><strong>Bandwidth Sharing:</strong> Total bandwidth divided among all connected devices</li>\n                                    <li><strong>Collision Domain:</strong> All ports on hub are in same collision domain</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Point-to-Point (Modern)</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Ethernet Switches:</strong> Each port is separate collision domain</li>\n                                    <li><strong>No CSMA/CD:</strong> Collision detection not needed</li>\n                                    <li><strong>Full-Duplex:</strong> Simultaneous send and receive capability</li>\n                                    <li><strong>Dedicated Bandwidth:</strong> Full bandwidth available to each port</li>\n                                    <li><strong>Microsegmentation:</strong> Each switch port creates separate collision domain</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Key Differences</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <div class="grid grid-cols-2 gap-4 text-sm">\n                                        <div>\n                                            <h4 class="text-yellow-400 font-semibold mb-2">Shared Media (Hub)</h4>\n                                            <ul class="text-slate-300 space-y-1">\n                                                <li>• Single collision domain</li>\n                                                <li>• Half-duplex operation</li>\n                                                <li>• Shared bandwidth</li>\n                                                <li>• CSMA/CD required</li>\n                                                <li>• Collisions increase with load</li>\n                                            </ul>\n                                        </div>\n                                        <div>\n                                            <h4 class="text-green-400 font-semibold mb-2">Point-to-Point (Switch)</h4>\n                                            <ul class="text-slate-300 space-y-1">\n                                                <li>• Separate collision domains</li>\n                                                <li>• Full-duplex operation</li>\n                                                <li>• Dedicated bandwidth</li>\n                                                <li>• No collisions</li>\n                                                <li>• Consistent performance</li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Distinguish between shared media and point-to-point connections</li>\n                                    <li>Understand why modern networks use switches instead of hubs</li>\n                                    <li>Explain collision domains and broadcast domains</li>\n                                    <li>Configure duplex settings on switch interfaces</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Shared Media vs Point-to-Point</title><text x="50" y="15" text-anchor="middle" font-size="8" font-weight="bold">Shared Media</text><circle cx="50" cy="35" r="10" fill="#dc2626"/><text x="50" y="39" text-anchor="middle" font-size="6" fill="white">HUB</text><rect x="20" y="55" width="15" height="10" rx="1" fill="#475569"/><rect x="65" y="55" width="15" height="10" rx="1" fill="#475569"/><rect x="35" y="70" width="15" height="10" rx="1" fill="#475569"/><line x1="30" y1="45" x2="27" y2="55" stroke="#64748b"/><line x1="70" y1="45" x2="73" y2="55" stroke="#64748b"/><line x1="50" y1="45" x2="42" y2="70" stroke="#64748b"/><text x="150" y="15" text-anchor="middle" font-size="8" font-weight="bold">Point-to-Point</text><rect x="125" y="30" width="20" height="15" rx="2" fill="#16a34a"/><text x="135" y="40" text-anchor="middle" font-size="6" fill="white">SW</text><rect x="155" y="30" width="20" height="15" rx="2" fill="#16a34a"/><text x="165" y="40" text-anchor="middle" font-size="6" fill="white">SW</text><line x1="145" y1="37" x2="155" y2="37" stroke="#64748b" stroke-width="2"/></svg>',
    'intermediate',
    15,
    16,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.3';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Interface and Cable Issues - CCNA 200-301 Guide',
    'interface_cable_issues',
    'CCNA 200-301 exam topic covering Interface/Cable Issues',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common Cable Issues</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Attenuation:</strong> Signal weakens over distance</li>\n                                    <li><strong>Crosstalk:</strong> Signal interference between wire pairs</li>\n                                    <li><strong>EMI/RFI:</strong> Electromagnetic/Radio frequency interference</li>\n                                    <li><strong>Bad Connectors:</strong> Loose or damaged RJ45 connections</li>\n                                    <li><strong>Wrong Cable Type:</strong> Using wrong category or straight vs crossover</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Interface Status Issues</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Up/Up: Interface working normally<br>\n                                        Down/Down: Physical layer problem<br>\n                                        Up/Down: Data link layer problem<br>\n                                        Administratively Down: Interface shutdown\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Troubleshooting Commands</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        show interfaces<br>\n                                        show interfaces status<br>\n                                        show controllers<br>\n                                        test cable-diagnostics tdr interface<br>\n                                        show cable-diagnostics tdr interface\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Diagnose physical layer connectivity issues</li>\n                                    <li>Use cable diagnostic tools and commands</li>\n                                    <li>Interpret interface status indicators</li>\n                                    <li>Resolve duplex and speed mismatches</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Duplex Mismatch causing errors</title><rect x="10" y="40" width="50" height="20" rx="2" fill="#4f46e5"/><text x="35" y="53" text-anchor="middle" font-size="7">Switch A</text><text x="35" y="35" text-anchor="middle" font-size="7" fill="#16a34a">Full Duplex</text><rect x="140" y="40" width="50" height="20" rx="2" fill="#4f46e5"/><text x="165" y="53" text-anchor="middle" font-size="7">Switch B</text><text x="165" y="35" text-anchor="middle" font-size="7" fill="#dc2626">Half Duplex</text><line x1="60" y1="50" x2="140" y2="50" stroke="#64748b" stroke-width="1.5"/><path d="M 95 40 L 105 60 M 105 40 L 95 60" stroke="#ef4444" stroke-width="2.5"/><text x="100" y="70" text-anchor="middle" font-size="8" fill="#ef4444">Errors!</text></svg>',
    'intermediate',
    15,
    17,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.4';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'TCP vs UDP Protocols - CCNA 200-301 Guide',
    'tcp_vs._udp',
    'CCNA 200-301 exam topic covering TCP vs. UDP',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">TCP (Transmission Control Protocol)</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Connection-Oriented:</strong> Establishes session before data transfer</li>\n                                    <li><strong>Reliable:</strong> Guarantees delivery with acknowledgments</li>\n                                    <li><strong>Flow Control:</strong> Manages data transmission rate</li>\n                                    <li><strong>Error Recovery:</strong> Retransmits lost or corrupted segments</li>\n                                    <li><strong>Ordered Delivery:</strong> Data arrives in correct sequence</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">UDP (User Datagram Protocol)</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Connectionless:</strong> No session establishment required</li>\n                                    <li><strong>Best Effort:</strong> No delivery guarantees</li>\n                                    <li><strong>Low Overhead:</strong> Minimal header and processing</li>\n                                    <li><strong>Fast:</strong> No connection setup or reliability mechanisms</li>\n                                    <li><strong>Real-Time:</strong> Preferred for time-sensitive applications</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common Applications</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        TCP: HTTP (80), HTTPS (443), FTP (21), SSH (22), Telnet (23)<br>\n                                        UDP: DNS (53), DHCP (67/68), SNMP (161), TFTP (69), NTP (123)\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand TCP three-way handshake</li>\n                                    <li>Identify when to use TCP vs UDP</li>\n                                    <li>Configure ACLs based on protocols and ports</li>\n                                    <li>Troubleshoot application connectivity issues</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>TCP Handshake vs UDP Fire-and-Forget</title><text x="45" y="15" text-anchor="middle" font-size="9" font-weight="bold">TCP (Reliable)</text><path d="M20 30 H 70" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/><text x="45" y="25" text-anchor="middle" font-size="7">SYN</text><path d="M70 45 H 20" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue-rev)"/><text x="45" y="52" text-anchor="middle" font-size="7">SYN-ACK</text><path d="M20 60 H 70" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/><text x="45" y="70" text-anchor="middle" font-size="7">ACK</text><text x="155" y="15" text-anchor="middle" font-size="9" font-weight="bold">UDP (Fast)</text><path d="M130 30 H 180" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/><path d="M130 45 H 180" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/><path d="M130 60 H 180" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/><defs><marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" /></marker><marker id="arrow-blue-rev" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 10 0 L 0 5 L 10 10 z" fill="#2563eb" /></marker><marker id="arrow-pink" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#db2777" /></marker></defs></svg>',
    'intermediate',
    15,
    18,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Private IPv4 Addressing - CCNA 200-301 Guide',
    'private_ipv4_addressing',
    'CCNA 200-301 exam topic covering Private IPv4 Addressing',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Private Address Ranges (RFC 1918)</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Class A: 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)<br>\n                                        Class B: 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)<br>\n                                        Class C: 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Private Address Benefits</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Address Conservation:</strong> Reduces public IPv4 address consumption</li>\n                                    <li><strong>Security:</strong> Not routable on public internet</li>\n                                    <li><strong>Flexibility:</strong> Can be reused in different organizations</li>\n                                    <li><strong>Cost Savings:</strong> No need to purchase public address blocks</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">NAT (Network Address Translation)</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Static NAT:</strong> One-to-one mapping of private to public</li>\n                                    <li><strong>Dynamic NAT:</strong> Pool of public addresses for private hosts</li>\n                                    <li><strong>PAT (Port Address Translation):</strong> Many-to-one using port numbers</li>\n                                    <li><strong>Port Forwarding:</strong> Redirect external traffic to internal servers</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure NAT and PAT on routers</li>\n                                    <li>Troubleshoot NAT translation issues</li>\n                                    <li>Implement port forwarding for services</li>\n                                    <li>Understand NAT impact on applications</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Private LAN using NAT to access Internet</title><rect x="10" y="30" width="70" height="40" rx="5" fill="#14532d"/><text x="45" y="55" text-anchor="middle" font-size="8" fill="#dcfce7">LAN (192.168.1.0/24)</text><path d="M 140 50 C 130 30, 170 30, 160 50 C 180 60, 150 80, 140 70 C 130 80, 110 60, 140 50 Z" fill="#4a4a0f"/><text x="150" y="55" text-anchor="middle" font-size="8">Internet</text><rect x="90" y="40" width="40" height="20" rx="2" fill="#991b1b"/><text x="110" y="53" text-anchor="middle" font-size="7" fill="#fecaca">NAT Router</text><line x1="80" y1="50" x2="90" y2="50" stroke="#64748b" stroke-width="1.5"/><line x1="130" y1="50" x2="142" y2="50" stroke="#64748b" stroke-width="1.5"/></svg>',
    'intermediate',
    15,
    19,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'IPv6 Address Types - CCNA 200-301 Guide',
    'ipv6_address_types',
    'CCNA 200-301 exam topic covering IPv6 Address Types',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Unicast Addresses</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Global Unicast:</strong> 2000::/3 - Internet routable addresses</li>\n                                    <li><strong>Unique Local:</strong> FC00::/7 - Private addressing (like RFC 1918)</li>\n                                    <li><strong>Link-Local:</strong> FE80::/10 - Local segment communication only</li>\n                                    <li><strong>Loopback:</strong> ::1 - IPv6 equivalent of 127.0.0.1</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Multicast Addresses</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        FF00::/8 - Multicast prefix<br>\n                                        FF02::1 - All nodes multicast<br>\n                                        FF02::2 - All routers multicast<br>\n                                        FF02::5 - OSPFv3 all SPF routers<br>\n                                        FF02::1:FF00:0/104 - Solicited node multicast\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Special Addresses</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Unspecified:</strong> :: (all zeros, like 0.0.0.0)</li>\n                                    <li><strong>IPv4-Mapped:</strong> ::FFFF:IPv4 (transition mechanism)</li>\n                                    <li><strong>6to4:</strong> 2002::/16 (IPv6 over IPv4 tunneling)</li>\n                                    <li><strong>Teredo:</strong> 2001::/32 (NAT traversal for IPv6)</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Identify IPv6 address types and scopes</li>\n                                    <li>Configure different IPv6 address types</li>\n                                    <li>Understand IPv6 address format and compression</li>\n                                    <li>Implement IPv6 multicast applications</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full" fill="#94a3b8"><title>IPv6 Address Types</title><circle cx="20" cy="50" r="5" fill="#be123c"/><text x="45" y="20" font-size="7">Unicast</text><circle cx="70" cy="20" r="5" fill="#475569"/><path d="M25 48 L 65 22" stroke="#64748b" marker-end="url(#arrow-sm)"/><text x="100" y="40" font-size="7">Anycast</text><circle cx="120" cy="20" r="5" fill="#475569"/><circle cx="140" cy="60" r="5" fill="#475569"/><path d="M25 50 L 116 23" stroke="#64748b" stroke-dasharray="2" marker-end="url(#arrow-sm)"/><text x="155" y="20" font-size="7">Multicast</text><circle cx="180" cy="40" r="5" fill="#475569"/><circle cx="180" cy="60" r="5" fill="#475569"/><circle cx="180" cy="80" r="5" fill="#475569"/><path d="M25 52 L 175 42" stroke="#64748b" marker-end="url(#arrow-sm)"/><path d="M25 52 L 175 78" stroke="#64748b" marker-end="url(#arrow-sm)"/><defs><marker id="arrow-sm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs></svg>',
    'intermediate',
    15,
    20,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.9';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Modified EUI-64 - CCNA 200-301 Guide',
    'modified_eui_64',
    'CCNA 200-301 exam topic covering Modified EUI-64',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">EUI-64 Process</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>MAC Address Split:</strong> Split 48-bit MAC into two 24-bit halves</li>\n                                    <li><strong>Insert FFFE:</strong> Insert FFFE between the two halves</li>\n                                    <li><strong>Flip U/L Bit:</strong> Invert 7th bit of first byte (universal/local)</li>\n                                    <li><strong>64-bit Result:</strong> Creates 64-bit interface identifier</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Example Conversion</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        MAC: 00:0C:29:12:34:56<br>\n                                        Split: 000C29 | 123456<br>\n                                        Insert FFFE: 000C29:FFFE:123456<br>\n                                        Flip bit: 020C29:FFFE:123456<br>\n                                        IPv6 IID: 020c:29ff:fe12:3456\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SLAAC Configuration</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Router Advertisement:</strong> Provides network prefix</li>\n                                    <li><strong>EUI-64 Generation:</strong> Host creates interface ID automatically</li>\n                                    <li><strong>Address Formation:</strong> Combines prefix + EUI-64 interface ID</li>\n                                    <li><strong>DAD:</strong> Duplicate Address Detection ensures uniqueness</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Calculate EUI-64 addresses from MAC addresses</li>\n                                    <li>Configure IPv6 addresses using EUI-64</li>\n                                    <li>Understand SLAAC address autoconfiguration</li>\n                                    <li>Troubleshoot IPv6 address assignment issues</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full" fill="#94a3b8"><title>EUI-64 Process</title><text x="100" y="20" text-anchor="middle" font-size="8" font-family="monospace">MAC: 00:1A:2B:3C:4D:5E</text><path d="M65 25 L 65 35 L 50 45" stroke="#64748b" fill="none"/><path d="M135 25 L 135 35 L 150 45" stroke="#64748b" fill="none"/><text x="35" y="52" text-anchor="middle" font-size="8" font-family="monospace">001A:2B</text><text x="165" y="52" text-anchor="middle" font-size="8" font-family="monospace">3C:4D:5E</text><rect x="80" y="45" width="40" height="15" fill="#166534" rx="2"/><text x="100" y="55" text-anchor="middle" font-size="8" fill="#6ee7b7">FF:FE</text><text x="100" y="80" text-anchor="middle" font-size="8" font-family="monospace">Interface ID: 021A:2BFF:FE3C:4D5E</text></svg>',
    'intermediate',
    15,
    21,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Verify IP Parameters - CCNA 200-301 Guide',
    'verify_ip_parameters',
    'CCNA 200-301 exam topic covering Verify IP Parameters',
    '',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Windows Commands</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        ipconfig /all          # Show all IP configuration<br>\n                                        ping destination       # Test connectivity<br>\n                                        tracert destination    # Trace route path<br>\n                                        nslookup domain       # DNS resolution test<br>\n                                        arp -a                # View ARP table\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Linux/Mac Commands</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        ifconfig / ip addr     # Show interface config<br>\n                                        ping destination       # Test connectivity<br>\n                                        traceroute destination # Trace route path<br>\n                                        dig domain            # DNS lookup<br>\n                                        arp -a                # View ARP table\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Key Parameters to Verify</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>IP Address:</strong> Correct address assignment and subnet</li>\n                                    <li><strong>Subnet Mask:</strong> Proper network/host boundary</li>\n                                    <li><strong>Default Gateway:</strong> Router IP for remote networks</li>\n                                    <li><strong>DNS Servers:</strong> Name resolution configuration</li>\n                                    <li><strong>DHCP Status:</strong> Static vs dynamic assignment</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Use appropriate commands for different operating systems</li>\n                                    <li>Interpret command output to identify issues</li>\n                                    <li>Verify DHCP vs static IP configuration</li>\n                                    <li>Troubleshoot connectivity using ping and traceroute</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Terminal showing ipconfig</title><rect x="10" y="10" width="180" height="80" rx="3" fill="#1e293b"/><rect x="10" y="10" width="180" height="15" rx="3" ry="0" fill="#475569"/><circle cx="20" cy="17.5" r="3" fill="#ef4444"/><circle cx="30" cy="17.5" r="3" fill="#fbbd23"/><circle cx="40" cy="17.5" r="3" fill="#4ade80"/><text x="20" y="40" font-family="monospace" fill="#e2e8f0" font-size="7">C:\\Users> ipconfig</text><text x="20" y="55" font-family="monospace" fill="white" font-size="7">IPv4 Address. . : 192.168.1.10</text><text x="20" y="65" font-family="monospace" fill="white" font-size="7">Subnet Mask . . : 255.255.255.0</text><text x="20" y="75" font-family="monospace" fill="white" font-size="7">Default Gateway : 192.168.1.1</text></svg>',
    'intermediate',
    15,
    22,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Wi-Fi Channels - CCNA 200-301 Guide',
    'wi_fi_channels',
    'CCNA 200-301 exam topic covering Wi-Fi Channels',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">2.4 GHz Band Channels</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Channel 1: 2412 MHz (20 MHz wide)<br>\n                                        Channel 6: 2437 MHz (20 MHz wide)<br>\n                                        Channel 11: 2462 MHz (20 MHz wide)<br>\n                                        Non-overlapping: 1, 6, 11 (US)<br>\n                                        Total channels: 1-11 (US), 1-13 (Europe)\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">5 GHz Band Channels</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>UNII-1:</strong> Channels 36-48 (5150-5250 MHz)</li>\n                                    <li><strong>UNII-2:</strong> Channels 52-64 (5250-5350 MHz) - DFS required</li>\n                                    <li><strong>UNII-2 Extended:</strong> Channels 100-144 (5470-5725 MHz)</li>\n                                    <li><strong>UNII-3:</strong> Channels 149-165 (5725-5850 MHz)</li>\n                                    <li><strong>Non-overlapping:</strong> Many more available than 2.4 GHz</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Channel Width Options</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>20 MHz:</strong> Basic channel width, maximum range</li>\n                                    <li><strong>40 MHz:</strong> 802.11n, doubled throughput</li>\n                                    <li><strong>80 MHz:</strong> 802.11ac, quadrupled throughput</li>\n                                    <li><strong>160 MHz:</strong> 802.11ac Wave 2, maximum throughput</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Plan non-overlapping channel assignments</li>\n                                    <li>Understand DFS and radar detection requirements</li>\n                                    <li>Configure channel width for optimal performance</li>\n                                    <li>Troubleshoot wireless interference issues</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Non-overlapping Wi-Fi channels 1, 6, 11</title><path d="M10 80 C 30 20, 50 20, 70 80" stroke="#3b82f6" stroke-width="2" fill="#3b82f644"/><text x="40" y="85" text-anchor="middle" font-size="8">1</text><path d="M60 80 C 80 20, 100 20, 120 80" stroke="#10b981" stroke-width="2" fill="#10b98144"/><text x="90" y="85" text-anchor="middle" font-size="8">6</text><path d="M110 80 C 130 20, 150 20, 170 80" stroke="#f97316" stroke-width="2" fill="#f9731644"/><text x="140" y="85" text-anchor="middle" font-size="8">11</text><path d="M35 80 C 55 40, 75 40, 95 80" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2" fill="none"/><text x="65" y="75" text-anchor="middle" font-size="7" fill="#ef4444">Overlap</text></svg>',
    'intermediate',
    15,
    23,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.11';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Wireless Concepts - CCNA 200-301 Guide',
    'wireless_concepts',
    'CCNA 200-301 exam topic covering Wireless Concepts',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">RF Fundamentals</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Frequency:</strong> Number of cycles per second (Hz)</li>\n                                    <li><strong>Wavelength:</strong> Physical length of one cycle</li>\n                                    <li><strong>Amplitude:</strong> Signal strength or power</li>\n                                    <li><strong>Phase:</strong> Timing relationship between signals</li>\n                                    <li><strong>Modulation:</strong> Encoding data onto RF carrier</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Wireless Security</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Open: No encryption (insecure)<br>\n                                        WEP: Wired Equivalent Privacy (deprecated)<br>\n                                        WPA: Wi-Fi Protected Access (TKIP)<br>\n                                        WPA2: Advanced Encryption Standard (AES)<br>\n                                        WPA3: Latest standard with enhanced security\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Coverage Patterns</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Omnidirectional:</strong> 360-degree coverage pattern</li>\n                                    <li><strong>Directional:</strong> Focused beam in specific direction</li>\n                                    <li><strong>RSSI:</strong> Received Signal Strength Indicator</li>\n                                    <li><strong>SNR:</strong> Signal-to-Noise Ratio for quality</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure wireless security protocols</li>\n                                    <li>Understand RF propagation and coverage</li>\n                                    <li>Troubleshoot wireless connectivity issues</li>\n                                    <li>Implement wireless network design principles</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Wireless concepts</title><circle cx="50" cy="50" r="10" fill="#2563eb"/><text x="50" y="53" text-anchor="middle" font-size="8" fill="white">AP</text><path d="M60 50 A 20 20 0 0 1 75 35" stroke="#3b82f6" fill="none" stroke-linecap="round"/><path d="M65 50 A 40 40 0 0 1 100 15" stroke="#3b82f6" fill="none" stroke-linecap="round"/><rect x="130" y="40" width="60" height="20" rx="3" fill="#1e293b" stroke="#334155"/><text x="160" y="53" text-anchor="middle" font-size="8" fill="#e2e8f0">SSID: MyWiFi</text><path d="M 105 30 L 112 37 L 105 44" stroke="#f59e0b" stroke-width="2" fill="none"/><path d="M 112 30 L 119 37 L 112 44" stroke="#f59e0b" stroke-width="2" fill="none"/></svg>',
    'intermediate',
    15,
    24,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.11';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Network Virtualization - CCNA 200-301 Guide',
    'virtualization',
    'CCNA 200-301 exam topic covering Virtualization',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Virtualization Types</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Server Virtualization:</strong> Multiple VMs on single physical server</li>\n                                    <li><strong>Network Virtualization:</strong> Virtual switches, routers, and networks</li>\n                                    <li><strong>Storage Virtualization:</strong> Abstracted storage resources</li>\n                                    <li><strong>Desktop Virtualization:</strong> VDI (Virtual Desktop Infrastructure)</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Hypervisor Types</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Type 1 (Bare Metal):</strong> Runs directly on hardware (VMware ESXi)</li>\n                                    <li><strong>Type 2 (Hosted):</strong> Runs on host OS (VMware Workstation)</li>\n                                    <li><strong>Container:</strong> OS-level virtualization (Docker)</li>\n                                    <li><strong>Nested:</strong> Hypervisor running inside virtual machine</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Network Virtualization Benefits</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Resource Efficiency:</strong> Better utilization of hardware</li>\n                                    <li><strong>Isolation:</strong> Logical separation of network segments</li>\n                                    <li><strong>Scalability:</strong> Easy to provision new virtual networks</li>\n                                    <li><strong>Mobility:</strong> VMs can move between physical hosts</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand virtualization concepts and benefits</li>\n                                    <li>Configure VLANs for VM network segmentation</li>\n                                    <li>Implement network services in virtual environments</li>\n                                    <li>Troubleshoot virtual network connectivity</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Server Virtualization</title><rect x="10" y="70" width="180" height="20" rx="3" fill="#334155"/><text x="100" y="83" text-anchor="middle" font-size="8" fill="white">Physical Server</text><rect x="20" y="55" width="160" height="10" rx="2" fill="#4f46e5"/><text x="100" y="62" text-anchor="middle" font-size="7" fill="white">Hypervisor</text><rect x="30" y="20" width="40" height="30" rx="2" fill="#166534"/><text x="50" y="40" text-anchor="middle" font-size="8" fill="#d1fae5">VM 1</text><rect x="80" y="20" width="40" height="30" rx="2" fill="#166534"/><text x="100" y="40" text-anchor="middle" font-size="8" fill="#d1fae5">VM 2</text><rect x="130" y="20" width="40" height="30" rx="2" fill="#166534"/><text x="150" y="40" text-anchor="middle" font-size="8" fill="#d1fae5">VM 3</text></svg>',
    'intermediate',
    15,
    25,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.12';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'MAC Learning & Aging - CCNA 200-301 Guide',
    'mac_learning_and_aging',
    'CCNA 200-301 exam topic covering MAC Learning & Aging',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">MAC Learning Process</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Frame Reception:</strong> Switch receives frame on interface</li>\n                                    <li><strong>Source MAC Examination:</strong> Reads source MAC address</li>\n                                    <li><strong>CAM Table Update:</strong> Associates MAC with receiving interface</li>\n                                    <li><strong>Timestamp Recording:</strong> Records when entry was learned</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Aging Process</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Default Aging Timer:</strong> 300 seconds (5 minutes)</li>\n                                    <li><strong>Activity Refresh:</strong> Timer resets when MAC is seen again</li>\n                                    <li><strong>Entry Removal:</strong> Inactive entries removed from table</li>\n                                    <li><strong>Relearning:</strong> MAC addresses learned again when needed</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CAM Table Commands</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        show mac address-table<br>\n                                        show mac address-table dynamic<br>\n                                        clear mac address-table dynamic<br>\n                                        mac address-table aging-time 600\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand how switches learn MAC addresses</li>\n                                    <li>Configure aging timers appropriately</li>\n                                    <li>Troubleshoot MAC address table issues</li>\n                                    <li>Analyze switch forwarding behavior</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>MAC Address Learning</title><rect x="10" y="70" width="20" height="15" rx="2" fill="#475569"/><text x="20" y="90" font-size="6">PC-A</text><rect x="70" y="40" width="60" height="20" rx="2" fill="#4f46e5"/><text x="100" y="53" font-size="7">Switch</text><path d="M 20 70 L 80 60" stroke="#64748b" stroke-width="1.5"/><text x="45" y="60" font-size="6" fill="#60a5fa">Frame from A</text><rect x="140" y="10" width="55" height="30" rx="2" fill="#1e293b"/><text x="167" y="20" font-size="6" fill="#64748b">MAC Table</text><text x="167" y="32" font-size="6" fill="#4ade80">A -> Port 1</text><path d="M120 45 Q 140 40 140 25" stroke="#4ade80" fill="none" stroke-dasharray="2"/></svg>',
    'intermediate',
    15,
    26,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Frame Forwarding - CCNA 200-301 Guide',
    'frame_forwarding',
    'CCNA 200-301 exam topic covering Frame Forwarding',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Forwarding Decision Process</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Destination MAC Lookup:</strong> Search CAM table for destination</li>\n                                    <li><strong>Known Unicast:</strong> Forward out specific interface if found</li>\n                                    <li><strong>Unknown Unicast:</strong> Flood out all interfaces except source</li>\n                                    <li><strong>Broadcast/Multicast:</strong> Forward to all interfaces in VLAN</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Switching Methods</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Store-and-Forward:</strong> Receive entire frame, check FCS, then forward</li>\n                                    <li><strong>Cut-Through:</strong> Forward as soon as destination MAC is read</li>\n                                    <li><strong>Fragment-Free:</strong> Read first 64 bytes before forwarding</li>\n                                    <li><strong>Adaptive:</strong> Switch between methods based on error rates</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Frame Processing</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Frame Reception:</strong> Receive frame on ingress interface</li>\n                                    <li><strong>VLAN Processing:</strong> Determine VLAN membership</li>\n                                    <li><strong>Security Checks:</strong> Port security, MAC filtering</li>\n                                    <li><strong>QoS Marking:</strong> Apply quality of service policies</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand switch forwarding logic</li>\n                                    <li>Configure switching methods when available</li>\n                                    <li>Troubleshoot frame forwarding issues</li>\n                                    <li>Analyze network traffic flow patterns</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Frame Forwarding to a known MAC</title><rect x="70" y="40" width="60" height="20" rx="2" fill="#4f46e5"/><text x="100" y="53" font-size="7">Switch</text><text x="20" y="10" font-size="6">P1</text><line x1="80" y1="40" x2="20" y2="15"/><text x="100" y="10" font-size="6">P2</text><line x1="100" y1="40" x2="100" y2="15"/><text x="180" y="10" font-size="6">P3 (PC-B)</text><line x1="120" y1="40" x2="180" y2="15"/><text x="50" y="80" font-size="7">Frame In (to B)</text><path d="M100 80 L 100 60" stroke="#64748b" stroke-width="2" marker-start="url(#arrow-rev)"/><path d="M 100 50 L 115 50" stroke="#16a34a" stroke-width="2" /><path d="M 115 50 L 178 17" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow-grn)"/><defs><marker id="arrow-rev" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 5 L 10 0 L 10 10 Z" fill="#64748b"/></marker><marker id="arrow-grn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/></marker></defs></svg>',
    'intermediate',
    15,
    27,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Frame Flooding - CCNA 200-301 Guide',
    'frame_flooding',
    'CCNA 200-301 exam topic covering Frame Flooding',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">When Flooding Occurs</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Unknown Unicast:</strong> Destination MAC not in CAM table</li>\n                                    <li><strong>Broadcast Frames:</strong> Destination MAC is FF:FF:FF:FF:FF:FF</li>\n                                    <li><strong>Multicast Frames:</strong> No specific multicast entry</li>\n                                    <li><strong>CAM Table Full:</strong> New MACs can\'t be learned</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Flooding Behavior</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>VLAN Boundary:</strong> Flooding limited to source VLAN</li>\n                                    <li><strong>All Ports:</strong> Frame sent out all active ports in VLAN</li>\n                                    <li><strong>Except Source:</strong> Not sent back out receiving interface</li>\n                                    <li><strong>Trunk Ports:</strong> Flooded on trunks carrying the VLAN</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Controlling Flooding</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Static MAC Entries:</strong> Manually configure MAC addresses</li>\n                                    <li><strong>Port Security:</strong> Limit and control MAC addresses per port</li>\n                                    <li><strong>Unknown Unicast Filtering:</strong> Block unknown unicast flooding</li>\n                                    <li><strong>IGMP Snooping:</strong> Control multicast flooding</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand when and why flooding occurs</li>\n                                    <li>Configure port security to control flooding</li>\n                                    <li>Implement IGMP snooping for multicast control</li>\n                                    <li>Troubleshoot excessive broadcast traffic</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Frame Flooding for an unknown MAC</title><rect x="70" y="40" width="60" height="20" rx="2" fill="#4f46e5"/><text x="100" y="53" font-size="7">Switch</text><text x="20" y="10" font-size="6">P1 (In)</text><line x1="80" y1="40" x2="20" y2="15"/><text x="100" y="10" font-size="6">P2</text><line x1="100" y1="40" x2="100" y2="15"/><text x="180" y="10" font-size="6">P3</text><line x1="120" y1="40" x2="180" y2="15"/><text x="50" y="80" font-size="7">Frame In (to ?)</text><path d="M20 20 L 80 42" stroke="#64748b" stroke-width="2" marker-start="url(#arrow-rev)"/><path d="M90 40 L 98 17" stroke="#be123c" stroke-dasharray="2" marker-end="url(#arrow-red)"/><path d="M110 40 L 178 17" stroke="#be123c" stroke-dasharray="2" marker-end="url(#arrow-red)"/><defs><marker id="arrow-rev" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 5 L 10 0 L 10 10 Z" fill="#64748b"/></marker><marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#be123c"/></marker></defs></svg>',
    'intermediate',
    15,
    28,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'MAC Address Table - CCNA 200-301 Guide',
    'mac_address_table',
    'CCNA 200-301 exam topic covering MAC Address Table',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Table Management</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        show mac address-table<br>\n                                        show mac address-table count<br>\n                                        mac address-table static H.H.H interface<br>\n                                        clear mac address-table dynamic address H.H.H\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Table Limitations</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Size Limits:</strong> Hardware-dependent maximum entries</li>\n                                    <li><strong>Hash Collisions:</strong> Multiple MACs mapping to same location</li>\n                                    <li><strong>Table Overflow:</strong> New entries fail when table is full</li>\n                                    <li><strong>Memory Exhaustion:</strong> Can cause flooding behavior</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CAM Table Structure</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>MAC Address:</strong> 48-bit hardware address</li>\n                                    <li><strong>VLAN ID:</strong> Virtual LAN identifier</li>\n                                    <li><strong>Interface:</strong> Physical or logical port</li>\n                                    <li><strong>Type:</strong> Dynamic (learned) or Static (configured)</li>\n                                    <li><strong>Age:</strong> Time since last activity</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Monitor and manage MAC address tables</li>\n                                    <li>Configure static MAC entries when needed</li>\n                                    <li>Troubleshoot MAC address learning issues</li>\n                                    <li>Understand CAM table exhaustion attacks</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>MAC Address Table</title><rect x="40" y="15" width="120" height="70" rx="3" fill="#1e293b" stroke="#334155"/><line x1="40" y1="35" x2="160" y2="35" stroke="#334155"/><line x1="100" y1="15" x2="100" y2="85" stroke="#334155"/><text x="70" y="28" font-size="8" font-weight="bold" fill="#94a3b8">Port</text><text x="130" y="28" font-size="8" font-weight="bold" fill="#94a3b8">MAC Address</text><text x="70" y="48" font-family="monospace" font-size="7" fill="#e2e8f0">Gi0/1</text><text x="130" y="48" font-family="monospace" font-size="7" fill="#e2e8f0">00:1A:2B:..:5E</text><text x="70" y="60" font-family="monospace" font-size="7" fill="#e2e8f0">Gi0/2</text><text x="130" y="60" font-family="monospace" font-size="7" fill="#e2e8f0">AA:BB:CC:..:FF</text><text x="70" y="72" font-family="monospace" font-size="7" fill="#e2e8f0">Gi0/3</text><text x="130" y="72" font-family="monospace" font-size="7" fill="#e2e8f0">11:22:33:..:66</text></svg>',
    'intermediate',
    15,
    29,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'On-Premises vs Cloud - CCNA 200-301 Guide',
    'on_premises_vs._cloud',
    'CCNA 200-301 exam topic covering On-Premises vs. Cloud',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">On-Premises Infrastructure</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Full Control:</strong> Complete control over hardware and software</li>\n                                    <li><strong>Capital Expense:</strong> Large upfront investment in equipment</li>\n                                    <li><strong>Maintenance:</strong> Organization responsible for all maintenance</li>\n                                    <li><strong>Security:</strong> Direct control over security measures</li>\n                                    <li><strong>Performance:</strong> Predictable performance and latency</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Cloud Infrastructure</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Scalability:</strong> Rapid scaling up or down as needed</li>\n                                    <li><strong>Operational Expense:</strong> Pay-as-you-use pricing model</li>\n                                    <li><strong>Provider Management:</strong> Cloud provider handles maintenance</li>\n                                    <li><strong>Shared Responsibility:</strong> Security shared between customer and provider</li>\n                                    <li><strong>Geographic Distribution:</strong> Global availability and redundancy</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Hybrid Models</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Hybrid Cloud:</strong> Combination of on-premises and cloud</li>\n                                    <li><strong>Multi-Cloud:</strong> Using multiple cloud providers</li>\n                                    <li><strong>Edge Computing:</strong> Processing closer to data sources</li>\n                                    <li><strong>Cloud Bursting:</strong> Overflow to cloud during peak demand</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand deployment model differences</li>\n                                    <li>Configure connectivity to cloud services</li>\n                                    <li>Implement hybrid network architectures</li>\n                                    <li>Compare cost and performance considerations</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>On-Premises vs Cloud</title><rect x="10" y="25" width="60" height="50" rx="3" fill="#334155"/><path d="M 15 25 L 40 10 L 65 25" stroke="#94a3b8" fill="none" stroke-width="2"/><rect x="35" y="35" width="10" height="30" rx="1" fill="#94a3b8"/><text x="40" y="85" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif">On-Premises</text><path d="M 140 30 C 130 10, 170 10, 160 30 C 180 30, 180 50, 160 50 L 140 50 C 120 50, 120 30, 140 30 Z" fill="#0c4a6e"/><rect x="130" y="70" width="20" height="15" rx="2" fill="#475569"/><line x1="140" y1="70" x2="150" y2="50" stroke="#64748b" stroke-width="1.5"/><text x="150" y="85" text-anchor="middle" font-size="8" font-family="Rajdhani, sans-serif">Cloud</text><line x1="95" y1="10" x2="95" y2="90" stroke-dasharray="2" stroke="#475569"/></svg>',
    'intermediate',
    15,
    30,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.2';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'OSI Model - CCNA 200-301 Guide',
    'osi_model',
    'CCNA 200-301 exam topic covering OSI Model',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">7-Layer Reference Model</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Layer 7 - Application:</strong> Network services for applications (HTTP, FTP, SMTP, DNS)</li>\n                                    <li><strong>Layer 6 - Presentation:</strong> Data formatting, encryption, compression (SSL/TLS, JPEG)</li>\n                                    <li><strong>Layer 5 - Session:</strong> Managing sessions between applications (NetBIOS, RPC)</li>\n                                    <li><strong>Layer 4 - Transport:</strong> End-to-end delivery and error recovery (TCP, UDP)</li>\n                                    <li><strong>Layer 3 - Network:</strong> Logical addressing and routing (IP, ICMP, OSPF)</li>\n                                    <li><strong>Layer 2 - Data Link:</strong> Node-to-node delivery (Ethernet, Wi-Fi, PPP)</li>\n                                    <li><strong>Layer 1 - Physical:</strong> Physical transmission of raw bits (cables, hubs, repeaters)</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Data Encapsulation Process</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Application Data → Segments (L4) → Packets (L3) → Frames (L2) → Bits (L1)\n                                    </code>\n                                </div>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300 mt-4">\n                                    <li><strong>Data:</strong> Application layer information</li>\n                                    <li><strong>Segment:</strong> TCP/UDP header added at Transport layer</li>\n                                    <li><strong>Packet:</strong> IP header added at Network layer</li>\n                                    <li><strong>Frame:</strong> Ethernet header/trailer added at Data Link layer</li>\n                                    <li><strong>Bits:</strong> Physical transmission of electrical signals</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Troubleshooting with OSI</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Bottom-Up:</strong> Start at Physical layer, work up to Application</li>\n                                    <li><strong>Top-Down:</strong> Start at Application layer, work down to Physical</li>\n                                    <li><strong>Divide and Conquer:</strong> Test specific layer based on symptoms</li>\n                                    <li><strong>Layer Isolation:</strong> Identify which layer has the problem</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Memorize all 7 layers and their functions</li>\n                                    <li>Understand data encapsulation/de-encapsulation</li>\n                                    <li>Apply OSI model to network troubleshooting</li>\n                                    <li>Identify protocols operating at each layer</li>\n                                </ul>\n                            </section>',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>OSI 7-Layer Model</title><rect x="50" y="10" width="100" height="10" fill="#ef4444" rx="2"/><text x="100" y="17" text-anchor="middle" font-size="7" fill="white">7. Application</text><rect x="50" y="20" width="100" height="10" fill="#f97316" rx="2"/><text x="100" y="27" text-anchor="middle" font-size="7" fill="white">6. Presentation</text><rect x="50" y="30" width="100" height="10" fill="#eab308" rx="2"/><text x="100" y="37" text-anchor="middle" font-size="7" fill="white">5. Session</text><rect x="50" y="40" width="100" height="10" fill="#22c55e" rx="2"/><text x="100" y="47" text-anchor="middle" font-size="7" fill="white">4. Transport</text><rect x="50" y="50" width="100" height="10" fill="#06b6d4" rx="2"/><text x="100" y="57" text-anchor="middle" font-size="7" fill="white">3. Network</text><rect x="50" y="60" width="100" height="10" fill="#3b82f6" rx="2"/><text x="100" y="67" text-anchor="middle" font-size="7" fill="white">2. Data Link</text><rect x="50" y="70" width="100" height="10" fill="#8b5cf6" rx="2"/><text x="100" y="77" text-anchor="middle" font-size="7" fill="white">1. Physical</text><text x="100" y="95" text-anchor="middle" font-size="8" fill="#4f46e5">Please Do Not Throw Sausage Pizza Away</text></svg>',
    'intermediate',
    15,
    31,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'TCP/IP Stack - CCNA 200-301 Guide',
    'tcp_ip_stack',
    'CCNA 200-301 exam topic covering TCP/IP Stack',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">TCP vs UDP Comparison</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg space-y-3">\n                                    <div>\n                                        <code class="text-blue-400 font-bold">TCP (Transmission Control Protocol)</code>\n                                        <ul class="text-green-400 text-sm mt-1">\n                                            <li>• Connection-oriented (3-way handshake)</li>\n                                            <li>• Reliable delivery with acknowledgments</li>\n                                            <li>• Flow control and congestion control</li>\n                                            <li>• Error detection and retransmission</li>\n                                            <li>• Used by: HTTP, HTTPS, FTP, SSH, Telnet</li>\n                                        </ul>\n                                    </div>\n                                    <div>\n                                        <code class="text-orange-400 font-bold">UDP (User Datagram Protocol)</code>\n                                        <ul class="text-yellow-400 text-sm mt-1">\n                                            <li>• Connectionless (no handshake)</li>\n                                            <li>• Best-effort delivery (no guarantees)</li>\n                                            <li>• No flow control or error recovery</li>\n                                            <li>• Lower overhead, faster transmission</li>\n                                            <li>• Used by: DNS, DHCP, SNMP, VoIP, video streaming</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common Port Numbers</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        TCP Ports:<br>\n                                        20/21 - FTP (Data/Control)<br>\n                                        22 - SSH<br>\n                                        23 - Telnet<br>\n                                        25 - SMTP<br>\n                                        53 - DNS (also UDP)<br>\n                                        80 - HTTP<br>\n                                        443 - HTTPS<br><br>\n                                        UDP Ports:<br>\n                                        53 - DNS<br>\n                                        67/68 - DHCP<br>\n                                        69 - TFTP<br>\n                                        161/162 - SNMP<br>\n                                        514 - Syslog\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">4-Layer TCP/IP Model</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Application Layer:</strong> Combines OSI layers 5-7 (HTTP, FTP, SMTP, DNS, DHCP)</li>\n                                    <li><strong>Transport Layer:</strong> End-to-end communication (TCP, UDP)</li>\n                                    <li><strong>Internet Layer:</strong> Routing and logical addressing (IP, ICMP, ARP)</li>\n                                    <li><strong>Network Access Layer:</strong> Combines OSI layers 1-2 (Ethernet, Wi-Fi)</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand TCP 3-way handshake process</li>\n                                    <li>Know when to use TCP vs UDP</li>\n                                    <li>Memorize common port numbers</li>\n                                    <li>Configure access lists using port numbers</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>TCP/IP 4-Layer Model</title><rect x="30" y="15" width="60" height="15" fill="#ef4444" rx="2"/><text x="60" y="25" text-anchor="middle" font-size="8" fill="white">Application</text><rect x="30" y="35" width="60" height="15" fill="#22c55e" rx="2"/><text x="60" y="45" text-anchor="middle" font-size="8" fill="white">Transport</text><rect x="30" y="55" width="60" height="15" fill="#06b6d4" rx="2"/><text x="60" y="65" text-anchor="middle" font-size="8" fill="white">Internet</text><rect x="30" y="75" width="60" height="15" fill="#8b5cf6" rx="2"/><text x="60" y="85" text-anchor="middle" font-size="8" fill="white">Network Access</text><rect x="110" y="15" width="60" height="15" fill="#64748b" rx="2"/><text x="140" y="25" text-anchor="middle" font-size="8" fill="white">HTTP/HTTPS</text><rect x="110" y="35" width="60" height="15" fill="#64748b" rx="2"/><text x="140" y="45" text-anchor="middle" font-size="8" fill="white">TCP/UDP</text><rect x="110" y="55" width="60" height="15" fill="#64748b" rx="2"/><text x="140" y="65" text-anchor="middle" font-size="8" fill="white">IP</text><rect x="110" y="75" width="60" height="15" fill="#64748b" rx="2"/><text x="140" y="85" text-anchor="middle" font-size="8" fill="white">Ethernet</text></svg>',
    'intermediate',
    15,
    32,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Ethernet Frame Structure - CCNA 200-301 Guide',
    'ethernet_frame_structure',
    'CCNA 200-301 exam topic covering Ethernet Frame Structure',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ethernet II Frame Fields</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        |Preamble|Dest MAC|Src MAC|Type|Data|FCS|<br>\n                                        |8 bytes |6 bytes |6 bytes|2 B |46-1500|4 B|\n                                    </code>\n                                </div>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300 mt-4">\n                                    <li><strong>Preamble (8 bytes):</strong> 7 bytes of 10101010 + 1 byte SFD (10101011)</li>\n                                    <li><strong>Destination MAC (6 bytes):</strong> Target device\'s hardware address</li>\n                                    <li><strong>Source MAC (6 bytes):</strong> Sending device\'s hardware address</li>\n                                    <li><strong>Type/Length (2 bytes):</strong> Protocol type (0x0800 = IPv4, 0x0806 = ARP)</li>\n                                    <li><strong>Data (46-1500 bytes):</strong> Payload with padding if needed</li>\n                                    <li><strong>FCS (4 bytes):</strong> Frame Check Sequence for error detection</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Frame Size Limits</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Minimum Frame:</strong> 64 bytes total (padding added if needed)</li>\n                                    <li><strong>Maximum Frame:</strong> 1518 bytes total (standard Ethernet)</li>\n                                    <li><strong>Jumbo Frames:</strong> Up to 9000 bytes (non-standard)</li>\n                                    <li><strong>MTU (Maximum Transmission Unit):</strong> 1500 bytes for data payload</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">MAC Address Format</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Format: XX:XX:XX:XX:XX:XX (48 bits)<br>\n                                        OUI: First 24 bits (Organizationally Unique Identifier)<br>\n                                        NIC: Last 24 bits (Network Interface Card specific)<br><br>\n                                        Special Addresses:<br>\n                                        FF:FF:FF:FF:FF:FF - Broadcast<br>\n                                        01:XX:XX:XX:XX:XX - Multicast (first bit = 1)\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Analyze frame structure in packet captures</li>\n                                    <li>Identify broadcast vs unicast vs multicast frames</li>\n                                    <li>Understand MTU and frame size implications</li>\n                                    <li>Configure and verify MAC address tables</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Ethernet Frame Structure</title><rect x="10" y="40" width="20" height="20" fill="#ef4444" rx="2"/><text x="20" y="52" text-anchor="middle" font-size="7" fill="white">Pre</text><rect x="30" y="40" width="30" height="20" fill="#f97316" rx="2"/><text x="45" y="52" text-anchor="middle" font-size="7" fill="white">Dest MAC</text><rect x="60" y="40" width="30" height="20" fill="#eab308" rx="2"/><text x="75" y="52" text-anchor="middle" font-size="7" fill="white">Src MAC</text><rect x="90" y="40" width="20" height="20" fill="#22c55e" rx="2"/><text x="100" y="52" text-anchor="middle" font-size="7" fill="white">Type</text><rect x="110" y="40" width="50" height="20" fill="#06b6d4" rx="2"/><text x="135" y="52" text-anchor="middle" font-size="7" fill="white">Data</text><rect x="160" y="40" width="20" height="20" fill="#8b5cf6" rx="2"/><text x="170" y="52" text-anchor="middle" font-size="7" fill="white">FCS</text><text x="100" y="80" text-anchor="middle" font-size="8" fill="#4f46e5">64-1518 bytes total</text></svg>',
    'intermediate',
    15,
    33,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Collision vs Broadcast Domains - CCNA 200-301 Guide',
    'collision_vs_broadcast_domains',
    'CCNA 200-301 exam topic covering Collision vs Broadcast Domains',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Collision Domain</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Definition:</strong> Network segment where collisions can occur</li>\n                                    <li><strong>Hub Behavior:</strong> All ports share one collision domain</li>\n                                    <li><strong>Switch Behavior:</strong> Each port is separate collision domain</li>\n                                    <li><strong>CSMA/CD Required:</strong> Devices must detect and handle collisions</li>\n                                    <li><strong>Half-Duplex Only:</strong> Cannot send and receive simultaneously</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Broadcast Domain</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Definition:</strong> Network segment where broadcast frames are forwarded</li>\n                                    <li><strong>Switch Behavior:</strong> All ports in same VLAN share broadcast domain</li>\n                                    <li><strong>Router Behavior:</strong> Routers separate broadcast domains</li>\n                                    <li><strong>VLAN Segmentation:</strong> VLANs create separate broadcast domains</li>\n                                    <li><strong>Traffic Types:</strong> Broadcast, multicast, and unknown unicast</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Network Device Impact</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Device Type      | Collision Domains | Broadcast Domains<br>\n                                        Hub (4 ports)    | 1                | 1<br>\n                                        Switch (4 ports) | 4                | 1<br>\n                                        Router (4 ports) | 4                | 4<br>\n                                        Bridge (4 ports) | 4                | 1\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Performance Implications</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Large Collision Domains:</strong> More collisions, reduced bandwidth</li>\n                                    <li><strong>Large Broadcast Domains:</strong> More broadcast traffic, CPU overhead</li>\n                                    <li><strong>Segmentation Benefits:</strong> Improved performance and security</li>\n                                    <li><strong>VLAN Design:</strong> Balance functionality with broadcast domain size</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Count collision and broadcast domains in network diagrams</li>\n                                    <li>Design VLANs to optimize broadcast domains</li>\n                                    <li>Understand impact of different network devices</li>\n                                    <li>Troubleshoot broadcast storms and collision issues</li>\n                                </ul>\n                            </section>',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Collision vs Broadcast Domains</title><circle cx="50" cy="30" r="35" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" stroke-width="2" stroke-dasharray="3"/><text x="50" y="70" text-anchor="middle" font-size="8" fill="#ef4444">Collision Domain</text><rect x="40" y="25" width="20" height="10" fill="#475569" rx="2"/><text x="50" y="32" text-anchor="middle" font-size="6" fill="white">Hub</text><circle cx="150" cy="30" r="35" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" stroke-width="2"/><text x="150" y="70" text-anchor="middle" font-size="8" fill="#22c55e">Broadcast Domain</text><rect x="140" y="25" width="20" height="10" fill="#475569" rx="2"/><text x="150" y="32" text-anchor="middle" font-size="6" fill="white">Switch</text><circle cx="25" cy="15" r="3" fill="#64748b"/><circle cx="75" cy="15" r="3" fill="#64748b"/><circle cx="125" cy="15" r="3" fill="#64748b"/><circle cx="175" cy="15" r="3" fill="#64748b"/></svg>',
    'intermediate',
    15,
    34,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'CSMA/CD - CCNA 200-301 Guide',
    'csma_cd',
    'CCNA 200-301 exam topic covering CSMA/CD',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CSMA/CD Process</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Carrier Sense (CS):</strong> Listen to medium before transmitting</li>\n                                    <li><strong>Multiple Access (MA):</strong> Multiple devices share same medium</li>\n                                    <li><strong>Collision Detection (CD):</strong> Detect when frames collide</li>\n                                    <li><strong>Jam Signal:</strong> Send 32-bit pattern to notify all stations of collision</li>\n                                    <li><strong>Backoff Algorithm:</strong> Wait random time before retrying</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Collision Handling Steps</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        1. Listen for carrier signal<br>\n                                        2. If clear, start transmission<br>\n                                        3. Monitor for collisions while sending<br>\n                                        4. If collision detected:<br>\n                                           a. Stop transmission<br>\n                                           b. Send jam signal<br>\n                                           c. Wait backoff period<br>\n                                           d. Retry transmission<br>\n                                        5. If no collision, transmission successful\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Binary Exponential Backoff</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Algorithm:</strong> Wait time = random(0, 2^n - 1) × slot time</li>\n                                    <li><strong>Slot Time:</strong> 512 bit times (51.2 microseconds at 10 Mbps)</li>\n                                    <li><strong>Maximum Attempts:</strong> 16 attempts before frame is dropped</li>\n                                    <li><strong>Collision Counter:</strong> n = number of collisions (max 10)</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Modern Ethernet</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Full-Duplex:</strong> CSMA/CD not needed with switches</li>\n                                    <li><strong>Point-to-Point Links:</strong> No shared medium means no collisions</li>\n                                    <li><strong>Legacy Support:</strong> Still supported for half-duplex connections</li>\n                                    <li><strong>Collision Domain Elimination:</strong> Switches create separate domains</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand CSMA/CD operation in shared media</li>\n                                    <li>Explain why modern switched networks don\'t need CSMA/CD</li>\n                                    <li>Calculate collision domains in network topologies</li>\n                                    <li>Troubleshoot excessive collision issues</li>\n                                </ul>\n                            </section>',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>CSMA/CD Process</title><rect x="30" y="20" width="20" height="15" fill="#10b981" rx="2"/><text x="40" y="30" text-anchor="middle" font-size="7" fill="white">PC A</text><rect x="150" y="20" width="20" height="15" fill="#10b981" rx="2"/><text x="160" y="30" text-anchor="middle" font-size="7" fill="white">PC B</text><line x1="50" y1="27" x2="150" y2="27" stroke="#64748b" stroke-width="2"/><path d="M 60 27 L 90 27" stroke="#22c55e" stroke-width="3"/><path d="M 110 27 L 140 27" stroke="#ef4444" stroke-width="3"/><text x="75" y="45" text-anchor="middle" font-size="7" fill="#22c55e">Frame A</text><text x="125" y="45" text-anchor="middle" font-size="7" fill="#ef4444">Frame B</text><path d="M 95 27 L 105 27" stroke="#fbbf24" stroke-width="4"/><text x="100" y="55" text-anchor="middle" font-size="8" fill="#fbbf24">Collision!</text><text x="100" y="75" text-anchor="middle" font-size="8" fill="#94a3b8">Both back off & retry</text></svg>',
    'intermediate',
    15,
    35,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Half vs Full Duplex - CCNA 200-301 Guide',
    'half_vs_full_duplex',
    'CCNA 200-301 exam topic covering Half vs Full Duplex',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Half Duplex Communication</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>One Direction:</strong> Can send OR receive, but not both simultaneously</li>\n                                    <li><strong>Shared Medium:</strong> Multiple devices share the same wire</li>\n                                    <li><strong>CSMA/CD Required:</strong> Must detect and handle collisions</li>\n                                    <li><strong>Legacy Equipment:</strong> Hubs and old network cards</li>\n                                    <li><strong>Reduced Bandwidth:</strong> Effective bandwidth is less than link speed</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Full Duplex Communication</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Both Directions:</strong> Can send AND receive simultaneously</li>\n                                    <li><strong>Dedicated Medium:</strong> Separate transmit and receive paths</li>\n                                    <li><strong>No Collisions:</strong> CSMA/CD disabled</li>\n                                    <li><strong>Modern Equipment:</strong> Switches and modern network cards</li>\n                                    <li><strong>Full Bandwidth:</strong> Can utilize 100% of link capacity in each direction</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Duplex Mismatch Issues</h3>\n                                <div class="bg-red-900/20 border border-red-500/50 rounded-lg p-4">\n                                    <ul class="list-disc list-inside space-y-2 text-red-200">\n                                        <li><strong>Performance Degradation:</strong> Significant speed reduction</li>\n                                        <li><strong>Collision Errors:</strong> False collision detection</li>\n                                        <li><strong>CRC Errors:</strong> Frame corruption from collisions</li>\n                                        <li><strong>Runts and Giants:</strong> Malformed frames</li>\n                                        <li><strong>Link Instability:</strong> Intermittent connectivity</li>\n                                    </ul>\n                                </div>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration and Troubleshooting</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        interface FastEthernet0/1<br>\n                                        duplex full                    # Force full duplex<br>\n                                        duplex half                   # Force half duplex<br>\n                                        duplex auto                   # Auto-negotiate (default)<br><br>\n                                        show interface Fa0/1          # Verify duplex setting<br>\n                                        show interface counters errors # Check for collision/CRC errors\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Auto-Negotiation</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>IEEE 802.3u Standard:</strong> Automatic speed and duplex detection</li>\n                                    <li><strong>Link Pulse Detection:</strong> Fast Link Pulses (FLP) exchange capabilities</li>\n                                    <li><strong>Fallback Rules:</strong> If negotiation fails, defaults to half-duplex</li>\n                                    <li><strong>Best Practice:</strong> Manual configuration in production networks</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure duplex settings on switch interfaces</li>\n                                    <li>Identify and resolve duplex mismatch issues</li>\n                                    <li>Understand auto-negotiation process and limitations</li>\n                                    <li>Analyze interface statistics for duplex problems</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Half vs Full Duplex</title><text x="50" y="15" text-anchor="middle" font-size="9" font-weight="bold">Half Duplex</text><rect x="20" y="25" width="15" height="10" fill="#ef4444" rx="2"/><rect x="65" y="25" width="15" height="10" fill="#ef4444" rx="2"/><path d="M 35 30 L 65 30" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/><text x="50" y="50" text-anchor="middle" font-size="7" fill="#ef4444">One way only</text><text x="150" y="15" text-anchor="middle" font-size="9" font-weight="bold">Full Duplex</text><rect x="120" y="22" width="15" height="10" fill="#22c55e" rx="2"/><rect x="165" y="32" width="15" height="10" fill="#22c55e" rx="2"/><path d="M 135 27 L 165 37" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-grn)"/><path d="M 165 37 L 135 32" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-grn)"/><text x="150" y="55" text-anchor="middle" font-size="7" fill="#22c55e">Both directions</text><defs><marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker><marker id="arrow-grn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e"/></marker></defs></svg>',
    'intermediate',
    15,
    36,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'ARP (Address Resolution Protocol) - CCNA 200-301 Guide',
    'arp_address_resolution_protocol',
    'CCNA 200-301 exam topic covering ARP (Address Resolution Protocol)',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Purpose and Function</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>IP to MAC Mapping:</strong> Resolves IP addresses to MAC addresses</li>\n                                    <li><strong>Layer 2 Delivery:</strong> Enables frame delivery on local network</li>\n                                    <li><strong>Dynamic Learning:</strong> Automatically builds address mappings</li>\n                                    <li><strong>Local Subnet Only:</strong> Works within same broadcast domain</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Process</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        1. Host A wants to send packet to Host B (knows IP)<br>\n                                        2. A checks ARP cache for B\'s MAC address<br>\n                                        3. If not found, A sends ARP Request (broadcast)<br>\n                                           "Who has 192.168.1.10? Tell 192.168.1.5"<br>\n                                        4. Host B responds with ARP Reply (unicast)<br>\n                                           "192.168.1.10 is at AA:BB:CC:DD:EE:FF"<br>\n                                        5. A caches the mapping and sends original packet<br>\n                                        6. All hosts on segment cache the ARP information\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Security Considerations</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>ARP Spoofing:</strong> Malicious responses with false MAC addresses</li>\n                                    <li><strong>Man-in-the-Middle:</strong> Intercepting traffic through ARP poisoning</li>\n                                    <li><strong>DAI (Dynamic ARP Inspection):</strong> Validates ARP packets against DHCP snooping</li>\n                                    <li><strong>Static Entries:</strong> Prevent spoofing for critical devices</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Table Management</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Dynamic Entries:</strong> Learned through ARP process</li>\n                                    <li><strong>Static Entries:</strong> Manually configured mappings</li>\n                                    <li><strong>Aging Timer:</strong> Entries expire after inactivity (typically 4 hours)</li>\n                                    <li><strong>Cache Size:</strong> Limited number of entries per device</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">ARP Commands</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Windows/Linux:<br>\n                                        arp -a                        # Show ARP table<br>\n                                        arp -d 192.168.1.10          # Delete specific entry<br>\n                                        arp -s 192.168.1.10 aa-bb-cc-dd-ee-ff  # Add static entry<br><br>\n                                        Cisco IOS:<br>\n                                        show arp                      # Display ARP table<br>\n                                        clear arp-cache              # Clear dynamic entries<br>\n                                        arp 192.168.1.10 aabb.ccdd.eeff ARPA  # Static entry\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Understand ARP operation and packet flow</li>\n                                    <li>Troubleshoot connectivity using ARP tables</li>\n                                    <li>Configure and verify ARP entries</li>\n                                    <li>Identify ARP-related security threats</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>ARP Process</title><rect x="20" y="40" width="25" height="20" fill="#4f46e5" rx="2"/><text x="32.5" y="52" text-anchor="middle" font-size="7" fill="white">PC A</text><rect x="155" y="40" width="25" height="20" fill="#10b981" rx="2"/><text x="167.5" y="52" text-anchor="middle" font-size="7" fill="white">PC B</text><path d="M 45 45 Q 100 20 155 45" stroke="#ef4444" stroke-width="2" fill="none" stroke-dasharray="3"/><text x="100" y="25" text-anchor="middle" font-size="7" fill="#ef4444">ARP Request (Broadcast)</text><text x="100" y="35" text-anchor="middle" font-size="6" fill="#ef4444">"Who has 192.168.1.10?"</text><path d="M 155 55 Q 100 80 45 55" stroke="#22c55e" stroke-width="2" fill="none"/><text x="100" y="85" text-anchor="middle" font-size="7" fill="#22c55e">ARP Reply (Unicast)</text><text x="100" y="95" text-anchor="middle" font-size="6" fill="#22c55e">"I do! MAC: AA:BB:CC..."</text></svg>',
    'intermediate',
    15,
    37,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Default Gateway - CCNA 200-301 Guide',
    'default_gateway',
    'CCNA 200-301 exam topic covering Default Gateway',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Default Gateway Purpose</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Inter-Network Communication:</strong> Route to reach other networks</li>\n                                    <li><strong>Last Resort:</strong> Used when no specific route matches destination</li>\n                                    <li><strong>Layer 3 Function:</strong> Router interface on local subnet</li>\n                                    <li><strong>Single Point Exit:</strong> Typically one gateway per subnet</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Gateway Redundancy</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>HSRP (Hot Standby Router Protocol):</strong> Cisco proprietary redundancy</li>\n                                    <li><strong>VRRP (Virtual Router Redundancy Protocol):</strong> Industry standard</li>\n                                    <li><strong>GLBP (Gateway Load Balancing Protocol):</strong> Load balancing + redundancy</li>\n                                    <li><strong>Virtual IP:</strong> Shared IP address between redundant routers</li>\n                                </ul>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Routing Decision Process</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Host routing logic:<br>\n                                        1. Is destination on local subnet? → Send directly<br>\n                                        2. Is there a specific route? → Use that route<br>\n                                        3. Otherwise → Send to default gateway<br><br>\n                                        Router routing logic:<br>\n                                        1. Check connected routes<br>\n                                        2. Check static routes<br>\n                                        3. Check dynamic routing protocols<br>\n                                        4. Use default route (0.0.0.0/0) if configured\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration Examples</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Windows:<br>\n                                        route add 0.0.0.0 mask 0.0.0.0 192.168.1.1<br><br>\n                                        Cisco Router:<br>\n                                        ip route 0.0.0.0 0.0.0.0 192.168.1.1    # Static default route<br>\n                                        ip default-gateway 192.168.1.1          # Management traffic only<br><br>\n                                        Cisco Switch (for management):<br>\n                                        ip default-gateway 192.168.1.1<br>\n                                        ip route 0.0.0.0 0.0.0.0 192.168.1.1    # If IP routing enabled\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Troubleshooting Gateway Issues</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Common commands:<br>\n                                        ping 192.168.1.1             # Test gateway connectivity<br>\n                                        tracert 8.8.8.8             # Verify gateway in path<br>\n                                        ipconfig /all                # Verify gateway configuration<br>\n                                        show ip route                # Check routing table<br>\n                                        show arp                     # Verify gateway MAC resolution\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Configure default routes on routers and hosts</li>\n                                    <li>Implement gateway redundancy with HSRP</li>\n                                    <li>Troubleshoot inter-VLAN routing issues</li>\n                                    <li>Verify default gateway configuration and operation</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Default Gateway routing</title><rect x="20" y="60" width="40" height="30" fill="#334155" rx="3"/><text x="40" y="78" text-anchor="middle" font-size="8" fill="#94a3b8">LAN A</text><text x="40" y="88" text-anchor="middle" font-size="7" fill="#94a3b8">192.168.1.0/24</text><rect x="140" y="60" width="40" height="30" fill="#334155" rx="3"/><text x="160" y="78" text-anchor="middle" font-size="8" fill="#94a3b8">LAN B</text><text x="160" y="88" text-anchor="middle" font-size="7" fill="#94a3b8">10.0.0.0/24</text><circle cx="100" cy="40" r="15" fill="#ef4444"/><text x="100" y="45" text-anchor="middle" font-size="8" fill="white">GW</text><line x1="60" y1="75" x2="85" y2="50" stroke="#64748b" stroke-width="2"/><line x1="115" y1="50" x2="140" y2="75" stroke="#64748b" stroke-width="2"/><text x="100" y="15" text-anchor="middle" font-size="8" fill="#ef4444">Default Gateway</text><text x="100" y="25" text-anchor="middle" font-size="7" fill="#94a3b8">192.168.1.1</text></svg>',
    'intermediate',
    15,
    38,
    CURRENT_TIMESTAMP
FROM subsections s 
JOIN sections sec ON s.section_id = sec.id 
WHERE s.subsection_number = '1.13';


INSERT INTO topics (
    subsection_id, title, slug, description, 
    principles_content, examples_content, configuration_content, tips_content,
    visual_diagram, difficulty_level, estimated_time_minutes, 
    order_index, created_at
)
SELECT 
    s.id,
    'Ping & Traceroute - CCNA 200-301 Guide',
    'ping_and_traceroute',
    'CCNA 200-301 exam topic covering Ping & Traceroute',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ping (ICMP Echo)</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Purpose:</strong> Test basic IP connectivity and measure round-trip time</li>\n                                    <li><strong>Protocol:</strong> ICMP (Internet Control Message Protocol)</li>\n                                    <li><strong>Operation:</strong> Sends Echo Request, expects Echo Reply</li>\n                                    <li><strong>Information:</strong> RTT, packet loss, TTL values</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Ping Command Options</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Windows:<br>\n                                        ping 8.8.8.8                 # Basic ping<br>\n                                        ping -t 8.8.8.8             # Continuous ping<br>\n                                        ping -n 10 8.8.8.8          # Send 10 packets<br>\n                                        ping -l 1500 8.8.8.8        # Large packet size<br><br>\n                                        Cisco IOS:<br>\n                                        ping 8.8.8.8                 # Basic ping<br>\n                                        ping 8.8.8.8 repeat 100     # Send 100 packets<br>\n                                        ping 8.8.8.8 size 1500      # Large packet size<br>\n                                        ping 8.8.8.8 source loopback0  # Source from specific interface\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Traceroute Operation</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Purpose:</strong> Discover path packets take through network</li>\n                                    <li><strong>TTL Manipulation:</strong> Increments TTL to reveal each hop</li>\n                                    <li><strong>ICMP Time Exceeded:</strong> Routers respond when TTL expires</li>\n                                    <li><strong>Path Discovery:</strong> Shows IP address and RTT for each hop</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Traceroute Process</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        1. Send packet with TTL=1<br>\n                                           → First router decrements TTL to 0<br>\n                                           → Router sends ICMP Time Exceeded<br>\n                                        2. Send packet with TTL=2<br>\n                                           → Second router decrements TTL to 0<br>\n                                           → Router sends ICMP Time Exceeded<br>\n                                        3. Continue until destination reached<br>\n                                           → Destination sends ICMP Echo Reply (ping)<br>\n                                           → or Port Unreachable (tracert)\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Traceroute Variations</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li><strong>Windows (tracert):</strong> Uses ICMP Echo Request</li>\n                                    <li><strong>Linux/Unix (traceroute):</strong> Uses UDP to high port numbers</li>\n                                    <li><strong>Cisco (traceroute):</strong> Uses UDP by default, ICMP option available</li>\n                                    <li><strong>TCP Traceroute:</strong> Uses TCP SYN packets to specific port</li>\n                                </ul>\n                            </section>\n                            \n                            <section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Troubleshooting with Ping/Traceroute</h3>\n                                <div class="bg-slate-800 p-4 rounded-lg">\n                                    <code class="text-green-400">\n                                        Ping Results Interpretation:<br>\n                                        • Success: Connectivity confirmed<br>\n                                        • Timeout: Packet loss or filtering<br>\n                                        • Destination Unreachable: Routing issue<br>\n                                        • TTL Expired: Routing loop<br><br>\n                                        Traceroute Results:<br>\n                                        • * * *: Router not responding or filtering<br>\n                                        • High RTT: Congestion or long distance<br>\n                                        • Loop: Shows repeating IP addresses\n                                    </code>\n                                </div>\n                            </section>\n                            \n                            ',
    '',
    '<section>\n                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>\n                                <ul class="list-disc list-inside space-y-2 text-slate-300">\n                                    <li>Use ping and traceroute for network troubleshooting</li>\n                                    <li>Interpret ping and traceroute output</li>\n                                    <li>Configure ICMP access control when needed</li>\n                                    <li>Understand limitations and filtering impacts</li>\n                                </ul>\n                            </section>',
    '',
    '<svg viewBox="0 0 200 100" class="w-full h-full"><title>Ping and Traceroute</title><rect x="10" y="40" width="30" height="20" fill="#4f46e5" rx="2"/><text x="25" y="52" text-anchor="middle" font-size="8" fill="white">Source</text><rect x="160" y="40" width="30" height="20" fill="#10b981" rx="2"/><text x="175" y="52" text-anchor="middle" font-size="8" fill="white">Target</text><circle cx="70" cy="50" r="8" fill="#64748b"/><text x="70" y="53" text-anchor="middle" font-size="6" fill="white">R1</text><circle cx="130" cy="50" r="8" fill="#64748b"/><text x="130" y="53" text-anchor="middle" font-size="6" fill="white">R2</text><path d="M 40 45 Q 100 25 160 45" stroke="#ef4444" stroke-width="2" fill="none" marker-end="url(#ping-arrow)"/><text x="100" y="30" text-anchor="middle" font-size="7" fill="#ef4444">ICMP Echo</text><path d="M 160 55 Q 100 75 40 55" stroke="#22c55e" stroke-width="2" fill="none" marker-end="url(#pong-arrow)"/><text x="100" y="85" text-anchor="middle" font-size="7" fill="#22c55e">ICMP Reply</text><defs><marker id="ping-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker><marker id="pong-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e"/></marker></defs></svg>',
    'intermediate',
    15,
    39,
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

UPDATE subsections SET topic_count = (
    SELECT COUNT(*) FROM topics t 
    WHERE t.subsection_id = subsections.id
);
