-- Update subsection topic counts to reflect actual counts
UPDATE subsections SET topic_count = 4 WHERE id = 14;
UPDATE subsections SET topic_count = 2 WHERE id = 15;
UPDATE subsections SET topic_count = 4 WHERE id = 16;
UPDATE subsections SET topic_count = 2 WHERE id = 17;
UPDATE subsections SET topic_count = 3 WHERE id = 18;
UPDATE subsections SET topic_count = 2 WHERE id = 19;
UPDATE subsections SET topic_count = 3 WHERE id = 20;
UPDATE subsections SET topic_count = 2 WHERE id = 21;
UPDATE subsections SET topic_count = 3 WHERE id = 22;

-- Update section total topic count
UPDATE sections SET topic_count = 25 WHERE id = 2;

-- Insert all topics with comprehensive content

-- Subsection 14 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(14, 'Route Source', 'route-source', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Route Sources and Administrative Distance</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Connected (C) - AD 0:</strong> Directly attached network interfaces</li>
                                    <li><strong>Static (S) - AD 1:</strong> Manually configured routes</li>
                                    <li><strong>EIGRP (D) - AD 90:</strong> Cisco proprietary hybrid protocol</li>
                                    <li><strong>OSPF (O) - AD 110:</strong> Open standard link-state protocol</li>
                                    <li><strong>RIP (R) - AD 120:</strong> Distance-vector routing protocol</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Route Selection Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Lower administrative distance values are preferred</li>
                                    <li>Same AD routes use metric comparison</li>
                                    <li>Load balancing occurs with equal cost paths</li>
                                    <li>Floating static routes provide backup paths</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Identify route sources in routing table output</li>
                                    <li>Understand administrative distance values</li>
                                    <li>Configure and verify static routes</li>
                                    <li>Troubleshoot route selection issues</li>
                                </ul>
                            </section>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(14, 'Destination Network', 'destination-network', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Network Address Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Network portion identifies the subnet</li>
                                    <li>Subnet mask defines network/host boundary</li>
                                    <li>CIDR notation provides prefix length (/24)</li>
                                    <li>Wildcard mask used in OSPF and EIGRP</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Route Matching Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Longest prefix match algorithm</li>
                                    <li>More specific routes preferred over general</li>
                                    <li>Default route (0.0.0.0/0) as last resort</li>
                                    <li>Host routes (/32) most specific</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Calculate network addresses from IP/mask</li>
                                    <li>Understand CIDR notation and subnetting</li>
                                    <li>Apply longest prefix match rules</li>
                                    <li>Configure network statements in routing protocols</li>
                                </ul>
                            </section>
                        </div>
                    ', 2, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(14, 'Administrative Distance', 'administrative-distance', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Administrative Distance Values</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Connected: 0    (Most trusted)<br>
                                        Static: 1<br>
                                        EIGRP: 90<br>
                                        OSPF: 110<br>
                                        RIP: 120<br>
                                        Unknown: 255    (Least trusted)
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Route Selection Logic</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Lower AD wins regardless of metric</li>
                                    <li>Floating static routes use higher AD</li>
                                    <li>Load balancing with equal AD and metric</li>
                                    <li>AD can be modified for specific routes</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Memorize default AD values</li>
                                    <li>Configure backup routes with higher AD</li>
                                    <li>Understand route preference mechanisms</li>
                                    <li>Troubleshoot suboptimal routing</li>
                                </ul>
                            </section>
                        </div>
                    ', 3, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(14, 'Next Hop Address', 'next-hop-address', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Next Hop Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>IP Address:</strong> Specific router interface to forward to</li>
                                    <li><strong>Exit Interface:</strong> Local interface to send packets out</li>
                                    <li><strong>Null Interface:</strong> Drops packets (summary routes)</li>
                                    <li><strong>Recursive Lookup:</strong> Multiple hops to reach destination</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration Examples</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        ip route 10.0.0.0 255.255.255.0 192.168.1.1<br>
                                        ip route 10.0.0.0 255.255.255.0 serial0/0/0<br>
                                        ip route 192.168.0.0 255.255.0.0 null0
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure static routes with next-hop</li>
                                    <li>Understand recursive route resolution</li>
                                    <li>Verify next-hop reachability</li>
                                    <li>Troubleshoot next-hop connectivity</li>
                                </ul>
                            </section>
                        </div>
                    ', 4, datetime('now'));


-- Subsection 15 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(15, 'Longest Prefix Match', 'longest-prefix-match', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Longest Prefix Match Algorithm</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Router selects most specific matching route</li>
                                    <li>Longer subnet mask = more specific route</li>
                                    <li>Process occurs before AD comparison</li>
                                    <li>Essential for hierarchical routing</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Example Scenario</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Destination: 192.168.1.100<br><br>
                                        Routes:<br>
                                        192.168.1.0/24 → Selected (most specific)<br>
                                        192.168.0.0/16<br>
                                        0.0.0.0/0 (default route)
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Apply longest prefix match rules</li>
                                    <li>Analyze routing table entries</li>
                                    <li>Understand route summarization impact</li>
                                    <li>Configure specific and summary routes</li>
                                </ul>
                            </section>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(15, 'Route Selection Priority', 'route-selection-priority', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Router Forwarding Decision - Route Selection Priority</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Selection Hierarchy</h5>
                            <p>When multiple routes exist to the same destination, routers use this priority order:</p>
                            <ol class="list-decimal list-inside ml-4 space-y-2 mt-2">
                                <li><strong class="text-green-400">Longest Prefix Match (Most Specific)</strong></li>
                                <li><strong class="text-blue-400">Administrative Distance (Lowest AD)</strong></li>
                                <li><strong class="text-purple-400">Metric (Protocol-Specific)</strong></li>
                            </ol>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Administrative Distance Values</h5>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Common AD Values:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
Connected:     0
Static:        1
EIGRP:         90
OSPF:          110
RIP:           120
External EIGRP: 170
Unknown:       255</pre>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Load Balancing:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Equal-cost paths (same AD & metric)</li>
                                        <li>EIGRP: Unequal-cost load balancing</li>
                                        <li>Maximum paths configurable</li>
                                        <li>Per-destination or per-packet</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Selection Example</h5>
                            <p><strong>Routes to 10.1.1.0/24:</strong></p>
                            <pre class="bg-slate-800 p-3 rounded mt-2 text-sm">
Static route:     10.1.1.0/24 [1/0] via 192.168.1.1
OSPF route:       10.1.1.0/24 [110/65] via 192.168.2.1
RIP route:        10.1.1.0/24 [120/2] via 192.168.3.1</pre>
                            <p class="mt-2 text-green-400"><strong>Selected:</strong> Static route (AD = 1, lowest)</p>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>Lower AD = more trusted. Static routes (AD=1) override dynamic protocols. Connected routes (AD=0) always win.</p>
                        </div>
                    ', 2, datetime('now'));


-- Subsection 16 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(16, 'IPv4 Static Routes', 'ipv4-static-routes', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Static Route Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip route [destination] [mask] [next-hop] [AD]<br>
                                        Router(config)# ip route [destination] [mask] [exit-interface]<br>
                                        Router(config)# ip route 0.0.0.0 0.0.0.0 [next-hop]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Static Route Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Standard Static:</strong> Specific destination network</li>
                                    <li><strong>Default Static:</strong> 0.0.0.0/0 for unknown destinations</li>
                                    <li><strong>Summary Static:</strong> Aggregates multiple networks</li>
                                    <li><strong>Floating Static:</strong> Backup with higher AD</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure IPv4 static routes</li>
                                    <li>Implement default route configuration</li>
                                    <li>Create backup routes with AD modification</li>
                                    <li>Verify static route functionality</li>
                                </ul>
                            </section>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(16, 'IPv6 Static Routes', 'ipv6-static-routes', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">IPv6 Static Route Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ipv6 unicast-routing<br>
                                        Router(config)# ipv6 route [prefix/length] [next-hop]<br>
                                        Router(config)# ipv6 route [prefix/length] [exit-interface]<br>
                                        Router(config)# ipv6 route ::/0 [next-hop]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">IPv6 Addressing</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>128-bit addressing with hex notation</li>
                                    <li>Link-local addresses for next-hop</li>
                                    <li>Global unicast addresses for routing</li>
                                    <li>Address compression rules (::)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Enable IPv6 routing on devices</li>
                                    <li>Configure IPv6 static routes</li>
                                    <li>Understand IPv6 address types</li>
                                    <li>Verify IPv6 connectivity</li>
                                </ul>
                            </section>
                        </div>
                    ', 2, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(16, 'Default Routes', 'default-routes', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Default Route Configuration and Concepts</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Default Route Basics</h5>
                            <p>A default route is used when no specific route exists for a destination. It acts as the "gateway of last resort."</p>
                            <ul class="list-disc list-inside ml-4 space-y-1 mt-2">
                                <li><strong>IPv4:</strong> 0.0.0.0/0 (matches any destination)</li>
                                <li><strong>IPv6:</strong> ::/0 (matches any IPv6 destination)</li>
                                <li>Least specific route possible (prefix length = 0)</li>
                            </ul>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Configuration Examples</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">IPv4 Default Routes:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
# Static default route
ip route 0.0.0.0 0.0.0.0 192.168.1.1

# Via exit interface
ip route 0.0.0.0 0.0.0.0 Serial0/0/0

# With AD (backup)
ip route 0.0.0.0 0.0.0.0 192.168.2.1 5</pre>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">IPv6 Default Routes:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
# IPv6 default route
ipv6 route ::/0 2001:db8::1

# Via exit interface
ipv6 route ::/0 FastEthernet0/1

# OSPF default origination
ipv6 router ospf 1
default-information originate</pre>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Dynamic Default Route Injection</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# OSPF default route propagation
router ospf 1
default-information originate [always] [metric value]

# EIGRP default route
ip route 0.0.0.0 0.0.0.0 [next-hop]
router eigrp 100
redistribute static</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Verification Commands</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
show ip route 0.0.0.0
show ipv6 route ::/0
show ip route | include Gateway
ping 8.8.8.8 (test default path)</pre>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>Default routes are essential for Internet connectivity. They''re selected only when no more specific route exists (longest prefix match principle).</p>
                        </div>
                    ', 3, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(16, 'Floating Static Routes', 'floating-static-routes', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Floating Static Routes for Redundancy</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Concept Overview</h5>
                            <p>Floating static routes are backup routes that remain inactive until the primary route fails. They use higher administrative distance values to ensure they don''t interfere with primary paths.</p>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Configuration Example</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Primary route (via EIGRP, AD = 90)
router eigrp 100
network 10.0.0.0

# Floating static backup (AD = 95, higher than EIGRP)
ip route 192.168.10.0 255.255.255.0 10.1.1.2 95

# Another backup with even higher AD
ip route 192.168.10.0 255.255.255.0 10.2.2.2 100</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Administrative Distance Planning</h5>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Primary Routes:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Connected: 0</li>
                                        <li>Static: 1</li>
                                        <li>EIGRP Internal: 90</li>
                                        <li>OSPF: 110</li>
                                        <li>RIP: 120</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Floating Static ADs:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Backup for EIGRP: 95-109</li>
                                        <li>Backup for OSPF: 115-119</li>
                                        <li>Backup for RIP: 125-169</li>
                                        <li>Last resort: 200+</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Failover Scenarios</h5>
                            <p><strong>Normal Operation:</strong></p>
                            <pre class="bg-slate-800 p-3 rounded mt-2 text-sm">
R1# show ip route 192.168.10.0
D 192.168.10.0/24 [90/2172416] via 10.1.1.2, 00:05:23, Serial0/0/0</pre>
                            <p class="mt-3"><strong>After Primary Route Failure:</strong></p>
                            <pre class="bg-slate-800 p-3 rounded mt-2 text-sm">
R1# show ip route 192.168.10.0
S 192.168.10.0/24 [95/0] via 10.2.2.2, 00:00:05, Serial0/0/1</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">IPv6 Floating Static Example</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Primary path via OSPFv3 (AD = 110)
ipv6 router ospf 1

# Floating static backup (AD = 115)
ipv6 route 2001:db8:10::/48 2001:db8:1::2 115</pre>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>Floating static routes provide simple redundancy without complex protocols. Set AD higher than primary route''s AD but not too high (avoid 255).</p>
                        </div>
                    ', 4, datetime('now'));


-- Subsection 17 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(17, 'OSPF Neighbor Formation', 'ospf-neighbor-formation', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">OSPF Neighbor States</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Down:</strong> No Hello packets received</li>
                                    <li><strong>Init:</strong> Hello received, not bi-directional</li>
                                    <li><strong>2-Way:</strong> Bi-directional communication established</li>
                                    <li><strong>ExStart:</strong> Master/slave relationship formed</li>
                                    <li><strong>Exchange:</strong> Database Description packets sent</li>
                                    <li><strong>Loading:</strong> LSR and LSU packets exchanged</li>
                                    <li><strong>Full:</strong> Databases synchronized</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Hello Packet Requirements</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Area ID must match</li>
                                    <li>Authentication must match</li>
                                    <li>Hello and Dead intervals must match</li>
                                    <li>Stub area flag must match</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand OSPF neighbor states</li>
                                    <li>Configure OSPF network statements</li>
                                    <li>Troubleshoot neighbor adjacency issues</li>
                                    <li>Verify OSPF neighbor relationships</li>
                                </ul>
                            </section>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(17, 'LSA Types', 'lsa-types', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common LSA Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Type 1 (Router LSA):</strong> Describes router''s directly connected links</li>
                                    <li><strong>Type 2 (Network LSA):</strong> Generated by DR for multi-access networks</li>
                                    <li><strong>Type 3 (Summary LSA):</strong> ABR advertises inter-area routes</li>
                                    <li><strong>Type 4 (ASBR Summary):</strong> Path to ASBR from other areas</li>
                                    <li><strong>Type 5 (External LSA):</strong> Routes external to OSPF domain</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">LSA Propagation</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Type 1 and 2 LSAs stay within area</li>
                                    <li>Type 3 LSAs cross area boundaries</li>
                                    <li>Type 5 LSAs flood entire OSPF domain</li>
                                    <li>LSA sequence numbers prevent loops</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Identify LSA types in OSPF database</li>
                                    <li>Understand single-area OSPF operation</li>
                                    <li>Analyze OSPF topology table</li>
                                    <li>Verify OSPF route installation</li>
                                </ul>
                            </section>
                        </div>
                    ', 2, datetime('now'));


-- Subsection 18 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(18, 'RIP Fundamentals', 'rip-fundamentals', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">RIP Protocol Overview</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">RIP Characteristics</h5>
                            <ul class="list-disc list-inside space-y-2">
                                <li><strong>Protocol Type:</strong> Distance Vector (uses Bellman-Ford algorithm)</li>
                                <li><strong>Metric:</strong> Hop count only (1-15 hops, 16 = unreachable)</li>
                                <li><strong>Administrative Distance:</strong> 120</li>
                                <li><strong>Update Interval:</strong> 30 seconds (full routing table broadcast)</li>
                                <li><strong>Maximum Diameter:</strong> 15 hops (16 = infinity)</li>
                                <li><strong>Load Balancing:</strong> Up to 4 equal-cost paths</li>
                            </ul>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">RIP Versions</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">RIPv1 (Classful):</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>No subnet mask in updates</li>
                                        <li>Broadcast updates (255.255.255.255)</li>
                                        <li>No VLSM support</li>
                                        <li>No authentication</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">RIPv2 (Classless):</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Includes subnet masks</li>
                                        <li>Multicast updates (224.0.0.9)</li>
                                        <li>VLSM and CIDR support</li>
                                        <li>Authentication support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Basic RIP Configuration</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Enable RIP and specify version
router rip
version 2
no auto-summary

# Advertise networks (classful boundaries)
network 192.168.1.0
network 10.0.0.0

# Passive interface (no RIP updates sent)
passive-interface FastEthernet0/1</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">RIP Limitations</h5>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Slow convergence (hold-down timers)</li>
                                <li>15-hop limit restricts network size</li>
                                <li>Periodic updates consume bandwidth</li>
                                <li>Vulnerable to routing loops</li>
                                <li>No support for unequal-cost load balancing</li>
                            </ul>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>RIP is simple but inefficient. Use RIPv2 for modern networks. Remember the 15-hop limit and 30-second update interval for exam scenarios.</p>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(18, 'RIP Timers', 'rip-timers', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">RIP Timer Mechanisms</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Four RIP Timers</h5>
                            <div class="space-y-3">
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-green-400">1. Update Timer (30 seconds)</p>
                                    <p class="text-sm">Interval between periodic routing updates. Router broadcasts entire routing table every 30 seconds.</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-yellow-400">2. Invalid Timer (180 seconds)</p>
                                    <p class="text-sm">If no update received for a route within 180 seconds, route is marked as invalid (metric = 16).</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-orange-400">3. Hold-down Timer (180 seconds)</p>
                                    <p class="text-sm">Prevents routing loops by ignoring updates about a failed route for 180 seconds.</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-red-400">4. Flush Timer (240 seconds)</p>
                                    <p class="text-sm">Route is completely removed from routing table after 240 seconds without updates.</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Timer Modification</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Modify RIP timers (not recommended for production)
router rip
timers basic update invalid holddown flush

# Example: Faster convergence (use carefully)
timers basic 10 60 60 80

# View current timer settings
show ip protocols</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Convergence Process</h5>
                            <ol class="list-decimal list-inside space-y-2">
                                <li><strong>Route Failure:</strong> Link goes down</li>
                                <li><strong>Invalid Timer:</strong> Route marked invalid after 180s</li>
                                <li><strong>Hold-down:</strong> Route in hold-down state (180s)</li>
                                <li><strong>Flush:</strong> Route removed after 240s total</li>
                                <li><strong>Update:</strong> Neighbors notified at next update interval</li>
                            </ol>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Route States</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
R 192.168.1.0/24 [120/1] via 10.1.1.2, 00:00:15, Serial0/0/0
                 ^     ^                  ^
                AD   Metric          Age (time since update)</pre>
                            <ul class="list-disc list-inside space-y-1 mt-2">
                                <li><strong>Active:</strong> Normal route with valid metric</li>
                                <li><strong>Invalid:</strong> Metric = 16, still advertised</li>
                                <li><strong>Hold-down:</strong> Ignoring new updates</li>
                                <li><strong>Flushed:</strong> Removed from table</li>
                            </ul>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>Remember: Update=30s, Invalid=180s, Hold-down=180s, Flush=240s. These timers must match between RIP neighbors for proper operation.</p>
                        </div>
                    ', 2, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(18, 'Split Horizon', 'split-horizon', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Split Horizon Mechanism</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Core Principle</h5>
                            <p class="mb-3">Split Horizon prevents routing loops by implementing this rule:</p>
                            <div class="bg-red-900/30 border border-red-600 p-3 rounded">
                                <p class="font-semibold text-red-300">"Never advertise a route back through the interface from which it was learned"</p>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Loop Prevention Example</h5>
                            <p class="mb-2"><strong>Scenario:</strong> Three routers (R1-R2-R3) with network 192.168.1.0/24 behind R3</p>
                            
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-indigo-300 mb-2">Without Split Horizon (Routing Loop):</p>
                                <ol class="list-decimal list-inside space-y-1 text-sm">
                                    <li>R3 advertises 192.168.1.0/24 to R2 (metric 1)</li>
                                    <li>R2 advertises 192.168.1.0/24 to R1 (metric 2)</li>
                                    <li>Link R2-R3 fails</li>
                                    <li>R2 loses route to 192.168.1.0/24</li>
                                    <li>R1 still advertises 192.168.1.0/24 to R2 (metric 3)</li>
                                    <li>R2 installs route via R1 (metric 4)</li>
                                    <li>Traffic loops between R1 and R2!</li>
                                </ol>
                            </div>

                            <div class="bg-slate-800 p-3 rounded">
                                <p class="font-semibold text-green-300 mb-2">With Split Horizon (Loop Prevented):</p>
                                <ol class="list-decimal list-inside space-y-1 text-sm">
                                    <li>R1 learns 192.168.1.0/24 from R2</li>
                                    <li>R1 does NOT advertise this route back to R2</li>
                                    <li>When R2-R3 link fails, R2 cannot use R1 as alternate path</li>
                                    <li>Route properly times out and is removed</li>
                                </ol>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Split Horizon Variants</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Simple Split Horizon:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Don''t advertise route back</li>
                                        <li>Default behavior</li>
                                        <li>Most common implementation</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Split Horizon with Poison Reverse:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Advertise route back with metric 16</li>
                                        <li>Explicitly marks route as unreachable</li>
                                        <li>Faster loop resolution</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Configuration and Verification</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Split horizon is enabled by default on RIP interfaces
# To disable (not recommended):
interface Serial0/0/0
no ip split-horizon

# For Frame Relay hub-and-spoke (special case):
interface Serial0/0/0.1 multipoint
no ip split-horizon

# Verification:
show ip interface Serial0/0/0
show ip protocols</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Special Considerations</h5>
                            <ul class="list-disc list-inside space-y-1">
                                <li><strong>NBMA networks:</strong> May need to disable on hub routers</li>
                                <li><strong>Frame Relay:</strong> Disable on multipoint subinterfaces</li>
                                <li><strong>Hub-and-Spoke:</strong> Hub needs to relay routes between spokes</li>
                                <li><strong>Point-to-Point:</strong> Split horizon always appropriate</li>
                            </ul>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>Split horizon prevents count-to-infinity problems but can cause connectivity issues in hub-and-spoke topologies. Know when to disable it safely.</p>
                        </div>
                    ', 3, datetime('now'));


-- Subsection 19 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(19, 'DUAL Algorithm', 'dual-algorithm', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Diffusing Update Algorithm (DUAL)</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">DUAL Overview</h5>
                            <p class="mb-3">DUAL is EIGRP''s loop-free path selection mechanism that ensures:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li><strong>Loop-free routing:</strong> Prevents routing loops at all times</li>
                                <li><strong>Fast convergence:</strong> Immediate backup path selection</li>
                                <li><strong>Minimal recalculation:</strong> Only affected routes recomputed</li>
                                <li><strong>Backup path ready:</strong> Feasible successors pre-calculated</li>
                            </ul>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Key DUAL Terms</h5>
                            <div class="space-y-3">
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-green-400">Feasible Distance (FD)</p>
                                    <p class="text-sm">Best metric (lowest cost) to reach a destination. This becomes the route metric in the routing table.</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-blue-400">Advertised Distance (AD) / Reported Distance (RD)</p>
                                    <p class="text-sm">Metric reported by a neighbor to reach the destination. Distance from neighbor to destination.</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-purple-400">Successor Route</p>
                                    <p class="text-sm">Best path to destination (lowest FD). Installed in routing table and used for forwarding.</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-yellow-400">Feasible Successor</p>
                                    <p class="text-sm">Backup path where neighbor''s AD < local FD. Loop-free backup route ready for immediate use.</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Feasibility Condition</h5>
                            <div class="bg-red-900/30 border border-red-600 p-3 rounded mb-3">
                                <p class="font-semibold text-red-300 text-center">AD < FD = Feasible Successor</p>
                            </div>
                            <p><strong>Example:</strong> Route to 192.168.1.0/24</p>
                            <pre class="bg-slate-800 p-3 rounded mt-2 text-sm">
Neighbor A: AD = 1000, Total metric = 1500 (FD)
Neighbor B: AD = 800,  Total metric = 2000
Neighbor C: AD = 2000, Total metric = 2500

Successor: Neighbor A (FD = 1500)
Feasible Successor: Neighbor B (800 < 1500) ✓
Not Feasible: Neighbor C (2000 > 1500) ✗</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">DUAL States and Process</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Passive State (Normal):</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Route is stable</li>
                                        <li>Successor known</li>
                                        <li>May have feasible successors</li>
                                        <li>No queries sent</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Active State (Computing):</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>No feasible successor available</li>
                                        <li>Queries sent to neighbors</li>
                                        <li>Waiting for replies</li>
                                        <li>Route computation in progress</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">DUAL Convergence Example</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Before failure - show ip eigrp topology 192.168.1.0/24
P 192.168.1.0/24, 1 successors, FD is 2172416
    via 10.1.1.2 (2172416/28160), Serial0/0/0
    via 10.2.2.2 (2681856/2169856), Serial0/0/1  # Feasible Successor

# After primary path failure - immediate switchover
P 192.168.1.0/24, 1 successors, FD is 2681856
    via 10.2.2.2 (2681856/2169856), Serial0/0/1  # Now successor</pre>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>DUAL ensures loop-free topology. Remember: Feasible Successor''s AD must be less than current FD for guaranteed loop-free backup path.</p>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(19, 'EIGRP Metrics', 'eigrp-metrics', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">EIGRP Composite Metric System</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Metric Components</h5>
                            <p class="mb-3">EIGRP uses five metric components (K-values) for path calculation:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <ul class="list-disc list-inside space-y-2">
                                        <li><strong>K1 - Bandwidth:</strong> Slowest link bandwidth</li>
                                        <li><strong>K2 - Load:</strong> Interface utilization (0-255)</li>
                                        <li><strong>K3 - Delay:</strong> Cumulative interface delay</li>
                                        <li><strong>K4 - Reliability:</strong> Link reliability (0-255)</li>
                                        <li><strong>K5 - MTU:</strong> Maximum Transmission Unit</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Default K-values:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
K1 = 1 (Bandwidth - ON)
K2 = 0 (Load - OFF)
K3 = 1 (Delay - ON)
K4 = 0 (Reliability - OFF)
K5 = 0 (MTU - OFF)</pre>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Default Metric Formula</h5>
                            <div class="bg-slate-800 p-4 rounded mb-3">
                                <p class="text-center font-mono text-lg text-green-400">Metric = (K1 × BW + K3 × Delay) × 256</p>
                                <p class="text-center text-sm text-slate-300 mt-2">With defaults: Metric = (1 × BW + 1 × Delay) × 256</p>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Bandwidth Calculation:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
BW = 10^7 / slowest_link_kbps

Example interfaces:
FastEthernet: 10^7/100000 = 100
Serial T1:    10^7/1544 = 6476
Serial 64k:   10^7/64 = 156250</pre>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Delay Calculation:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
Delay = sum of all delays / 10

Default delays (microseconds):
FastEthernet: 100
Serial:       20000
Loopback:     5000</pre>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Metric Calculation Example</h5>
                            <p><strong>Path:</strong> FastEthernet (100Mbps) → Serial T1 (1.544Mbps) → FastEthernet (100Mbps)</p>
                            
                            <div class="bg-slate-800 p-3 rounded mt-2">
                                <p class="font-semibold text-yellow-300">Step 1: Calculate Bandwidth</p>
                                <pre class="text-sm">
Slowest link = 1544 kbps (T1)
BW = 10,000,000 / 1544 = 6476</pre>
                                
                                <p class="font-semibold text-yellow-300 mt-3">Step 2: Calculate Total Delay</p>
                                <pre class="text-sm">
FastEthernet: 100 μs
Serial T1:    20000 μs  
FastEthernet: 100 μs
Total = 20200 μs
Delay = 20200 / 10 = 2020</pre>
                                
                                <p class="font-semibold text-yellow-300 mt-3">Step 3: Apply Formula</p>
                                <pre class="text-sm">
Metric = (6476 + 2020) × 256 = 2,175,104</pre>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Metric Tuning</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Modify interface bandwidth (affects EIGRP metric)
interface Serial0/0/0
bandwidth 2048

# Modify interface delay
delay 100

# Change EIGRP K-values (all routers in AS must match)
router eigrp 100
metric weights 0 1 0 1 0 0

# View interface metrics
show interface Serial0/0/0
show ip eigrp topology 192.168.1.0/24</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Wide Metrics (EIGRP Named Mode)</h5>
                            <p class="mb-2">Enhanced metric calculation for modern high-speed links:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li>64-bit metric values (vs 32-bit classic)</li>
                                <li>Better scaling for 10Gbps+ links</li>
                                <li>Improved granularity</li>
                                <li>Backward compatible</li>
                            </ul>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>Default EIGRP metric uses only Bandwidth and Delay. Bandwidth is determined by slowest link; Delay is cumulative sum of all links.</p>
                        </div>
                    ', 2, datetime('now'));


-- Subsection 20 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(20, 'OSPF Areas', 'ospf-areas', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">OSPF Hierarchical Area Design</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">OSPF Area Concept</h5>
                            <p class="mb-3">OSPF uses a hierarchical area design to reduce routing overhead and improve scalability:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li><strong>Area 0 (Backbone):</strong> Central area that connects all other areas</li>
                                <li><strong>Non-backbone areas:</strong> Areas 1-65535 that connect to Area 0</li>
                                <li><strong>LSA flooding containment:</strong> Type 1/2 LSAs stay within area</li>
                                <li><strong>Faster convergence:</strong> Smaller topology databases per area</li>
                            </ul>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">OSPF Router Types</h5>
                            <div class="space-y-3">
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-green-400">Internal Router</p>
                                    <p class="text-sm">All interfaces belong to the same area. Maintains only one topology database.</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-blue-400">Area Border Router (ABR)</p>
                                    <p class="text-sm">Connects multiple areas. Generates Type 3 Summary LSAs between areas. Must have interface in Area 0.</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-purple-400">Autonomous System Boundary Router (ASBR)</p>
                                    <p class="text-sm">Connects OSPF domain to external networks. Generates Type 5 External LSAs through redistribution.</p>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-yellow-400">Backbone Router</p>
                                    <p class="text-sm">Has at least one interface in Area 0. Includes ABRs and internal routers in backbone area.</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Area Configuration</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Configure OSPF process and areas
router ospf 1
router-id 1.1.1.1

# Assign interfaces to areas
network 192.168.1.0 0.0.0.255 area 0
network 192.168.2.0 0.0.0.255 area 1
network 192.168.3.0 0.0.0.255 area 2

# Interface-specific area assignment
interface FastEthernet0/0
ip ospf 1 area 0</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Benefits of Multiple Areas</h5>
                            <ul class="list-disc list-inside space-y-1">
                                <li><strong>Reduced LSA flooding:</strong> Type 1/2 LSAs contained within areas</li>
                                <li><strong>Smaller topology databases:</strong> Each area maintains separate LSDB</li>
                                <li><strong>Faster SPF calculations:</strong> Less complex topology to compute</li>
                                <li><strong>Route summarization:</strong> ABRs can summarize inter-area routes</li>
                                <li><strong>Fault isolation:</strong> Problems in one area don''t affect others</li>
                            </ul>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>All non-backbone areas must connect to Area 0 either directly or through virtual links. ABRs maintain separate topology databases for each area.</p>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(20, 'OSPF Network Types', 'ospf-network-types', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">OSPF Network Types</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Network Type Overview</h5>
                            <p class="mb-3">OSPF behavior changes based on the underlying network topology:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">DR Election Required:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Broadcast (Ethernet)</li>
                                        <li>Non-Broadcast Multi-Access (NBMA)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">No DR Election:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Point-to-Point</li>
                                        <li>Point-to-Multipoint</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Broadcast Networks</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-green-400 mb-2">Characteristics:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Multi-access networks (Ethernet, WiFi)</li>
                                    <li>DR and BDR election required</li>
                                    <li>Hello/Dead timers: 10s/40s</li>
                                    <li>Multicast hellos to 224.0.0.5</li>
                                </ul>
                            </div>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Default on Ethernet interfaces
interface FastEthernet0/0
ip ospf network broadcast
ip ospf priority 100  # Higher priority wins DR election</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Point-to-Point Networks</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-blue-400 mb-2">Characteristics:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Direct connection between two routers</li>
                                    <li>No DR/BDR election needed</li>
                                    <li>Hello/Dead timers: 10s/40s</li>
                                    <li>Immediate Full adjacency</li>
                                </ul>
                            </div>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Default on serial interfaces
interface Serial0/0/0
ip ospf network point-to-point</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">NBMA Networks</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-purple-400 mb-2">Characteristics:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Frame Relay, ATM networks</li>
                                    <li>DR/BDR election required</li>
                                    <li>Hello/Dead timers: 30s/120s</li>
                                    <li>Manual neighbor configuration</li>
                                </ul>
                            </div>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
interface Serial0/0/0
ip ospf network non-broadcast
router ospf 1
neighbor 192.168.1.2  # Manual neighbor statements</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">DR/BDR Election Process</h5>
                            <ol class="list-decimal list-inside space-y-2">
                                <li><strong>Priority Check:</strong> Highest OSPF priority wins (0-255)</li>
                                <li><strong>Router ID Tiebreaker:</strong> Highest Router ID if priority tied</li>
                                <li><strong>BDR Election First:</strong> BDR chosen, then DR</li>
                                <li><strong>Non-preemptive:</strong> Existing DR/BDR stay unless they fail</li>
                                <li><strong>Priority 0:</strong> Never participate in DR election</li>
                            </ol>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Network Type Modification</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Change network type manually
interface FastEthernet0/0
ip ospf network point-to-point    # No DR election on Ethernet
ip ospf network point-to-multipoint  # Hub-and-spoke friendly

# Verify network types
show ip ospf interface
show ip ospf neighbor</pre>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>DR election is non-preemptive. Point-to-multipoint is often better than NBMA for hub-and-spoke topologies as it doesn''t require DR election or manual neighbors.</p>
                        </div>
                    ', 2, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(20, 'OSPF Area Types', 'ospf-area-types', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">OSPF Special Area Types</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Standard vs Special Areas</h5>
                            <p class="mb-3">OSPF defines several special area types to reduce routing table size and LSA flooding:</p>
                            <div class="bg-slate-800 p-3 rounded">
                                <p class="font-semibold text-green-400 mb-2">Standard Area (Normal):</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Accepts all LSA types (1, 2, 3, 4, 5)</li>
                                    <li>Full routing information available</li>
                                    <li>Can be transit area for inter-area traffic</li>
                                </ul>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Stub Area</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-blue-400 mb-2">Characteristics:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Blocks Type 4 (ASBR Summary) and Type 5 (External) LSAs</li>
                                    <li>ABR injects default route (0.0.0.0/0) for external destinations</li>
                                    <li>Reduces routing table size in stub area</li>
                                    <li>All routers in area must be configured as stub</li>
                                    <li>Cannot contain ASBR (no redistribution allowed)</li>
                                </ul>
                            </div>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Configure stub area
router ospf 1
area 1 stub

# ABR can advertise custom default route cost
area 1 default-cost 100</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Totally Stubby Area</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-purple-400 mb-2">Characteristics:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Blocks Type 3, 4, and 5 LSAs</li>
                                    <li>Only Type 1 (Router) and Type 2 (Network) LSAs allowed</li>
                                    <li>ABR injects single default route for all external destinations</li>
                                    <li>Maximum routing table reduction</li>
                                    <li>Cisco proprietary extension</li>
                                </ul>
                            </div>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Configure totally stubby area (ABR only)
router ospf 1
area 1 stub no-summary

# Internal routers still use ''area 1 stub''</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Not-So-Stubby Area (NSSA)</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-yellow-400 mb-2">Characteristics:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Allows limited external route redistribution</li>
                                    <li>Blocks Type 5 LSAs but allows Type 7 LSAs</li>
                                    <li>ABR converts Type 7 to Type 5 when flooding to Area 0</li>
                                    <li>Useful when area needs ASBR but external routes should be limited</li>
                                    <li>RFC 3101 standard</li>
                                </ul>
                            </div>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Configure NSSA
router ospf 1
area 1 nssa

# NSSA with default route injection
area 1 nssa default-information-originate

# Totally NSSA (Cisco proprietary)
area 1 nssa no-summary</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">LSA Filtering Summary</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead>
                                        <tr class="bg-slate-800">
                                            <th class="p-2 text-left">Area Type</th>
                                            <th class="p-2 text-center">Type 1/2</th>
                                            <th class="p-2 text-center">Type 3</th>
                                            <th class="p-2 text-center">Type 4</th>
                                            <th class="p-2 text-center">Type 5</th>
                                            <th class="p-2 text-center">Type 7</th>
                                        </tr>
                                    </thead>
                                    <tbody class="space-y-1">
                                        <tr><td class="p-2">Standard</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-red-400">✗</td></tr>
                                        <tr><td class="p-2">Stub</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-red-400">✗</td><td class="p-2 text-center text-red-400">✗</td><td class="p-2 text-center text-red-400">✗</td></tr>
                                        <tr><td class="p-2">Totally Stubby</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-red-400">✗</td><td class="p-2 text-center text-red-400">✗</td><td class="p-2 text-center text-red-400">✗</td><td class="p-2 text-center text-red-400">✗</td></tr>
                                        <tr><td class="p-2">NSSA</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-green-400">✓</td><td class="p-2 text-center text-red-400">✗</td><td class="p-2 text-center text-red-400">✗</td><td class="p-2 text-center text-green-400">✓</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>All routers in a stub area must be configured with the same stub type. NSSA allows ASBRs while still filtering external LSAs from other areas.</p>
                        </div>
                    ', 3, datetime('now'));


-- Subsection 21 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(21, 'Redistribution Basics', 'redistribution-basics', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Route Redistribution Concepts</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Redistribution Overview</h5>
                            <p class="mb-3">Route redistribution allows different routing protocols to share routing information:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li><strong>Protocol Translation:</strong> Convert routes between different routing protocols</li>
                                <li><strong>Metric Conversion:</strong> Translate metrics between different metric systems</li>
                                <li><strong>Administrative Control:</strong> Use route maps and filters for selective redistribution</li>
                                <li><strong>Network Integration:</strong> Connect legacy and modern routing protocols</li>
                            </ul>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Common Redistribution Scenarios</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Into OSPF:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
router ospf 1
redistribute eigrp 100 metric 20
redistribute static subnets
redistribute connected subnets</pre>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Into EIGRP:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
router eigrp 100
redistribute ospf 1 metric 1544 20000 255 1 1500
redistribute static
redistribute connected</pre>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Metric Translation</h5>
                            <div class="space-y-3">
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-green-400 mb-2">OSPF Redistribution:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Default metric: 20 (Type 2 external)</li>
                                        <li>Use ''subnets'' keyword for classless routes</li>
                                        <li>Creates Type 5 LSAs (External)</li>
                                        <li>Router becomes ASBR</li>
                                    </ul>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-blue-400 mb-2">EIGRP Redistribution:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Must specify metric components (BW, Delay, Reliability, Load, MTU)</li>
                                        <li>Or use ''default-metric'' command</li>
                                        <li>Creates external EIGRP routes (AD = 170)</li>
                                        <li>Automatic metric calculation based on interface</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Advanced Redistribution Control</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Route map for selective redistribution
route-map OSPF-to-EIGRP permit 10
match ip address 1
set metric 1544 20000 255 1 1500

# Apply route map to redistribution
router eigrp 100
redistribute ospf 1 route-map OSPF-to-EIGRP

# Access list for filtering
access-list 1 permit 192.168.0.0 0.0.255.255

# Default metric configuration
router eigrp 100
default-metric 1544 20000 255 1 1500</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Redistribution Best Practices</h5>
                            <ul class="list-disc list-inside space-y-1">
                                <li><strong>Single Point:</strong> Perform redistribution at one router when possible</li>
                                <li><strong>Route Filtering:</strong> Use access lists and route maps to control routes</li>
                                <li><strong>Route Tagging:</strong> Tag redistributed routes to prevent loops</li>
                                <li><strong>Administrative Distance:</strong> Adjust AD to prefer specific protocols</li>
                                <li><strong>Default Routes:</strong> Use default routes to minimize routing tables</li>
                            </ul>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Verification Commands</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
show ip route                    # Check redistributed routes
show ip protocols               # View redistribution config
show route-map [name]          # Verify route map operation
show ip route external         # OSPF external routes only
show ip eigrp topology         # EIGRP topology including external</pre>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>Always specify metrics when redistributing into EIGRP. Use ''subnets'' keyword when redistributing into OSPF to include classless routes.</p>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(21, 'Redistribution Loops', 'redistribution-loops', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Redistribution Loop Prevention</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Loop Formation Scenario</h5>
                            <p class="mb-3">Redistribution loops occur when routes are redistributed between multiple routers running different protocols:</p>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-red-400 mb-2">Common Loop Scenario:</p>
                                <ol class="list-decimal list-inside space-y-1 text-sm">
                                    <li>Router A redistributes OSPF routes into EIGRP</li>
                                    <li>Router B redistributes EIGRP routes into OSPF</li>
                                    <li>Routes bounce between protocols with increasing metrics</li>
                                    <li>Network convergence fails, routing tables grow large</li>
                                    <li>Suboptimal routing and potential blackholes</li>
                                </ol>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Route Tagging Solution</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-green-400 mb-2">Tagging Process:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Tag routes when redistributing into a protocol</li>
                                    <li>Deny tagged routes when redistributing back</li>
                                    <li>Prevents routes from being redistributed multiple times</li>
                                    <li>Maintains original source identification</li>
                                </ul>
                            </div>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Router A - Tag OSPF routes going into EIGRP
route-map OSPF-to-EIGRP permit 10
set tag 100

router eigrp 100
redistribute ospf 1 route-map OSPF-to-EIGRP

# Router A - Deny tagged routes when redistributing back
route-map EIGRP-to-OSPF deny 10
match tag 100
route-map EIGRP-to-OSPF permit 20

router ospf 1
redistribute eigrp 100 subnets route-map EIGRP-to-OSPF</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Administrative Distance Tuning</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-blue-400 mb-2">AD Modification Strategy:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li>Increase AD of redistributed routes</li>
                                    <li>Prefer original protocol routes over redistributed ones</li>
                                    <li>Create hierarchy of route preferences</li>
                                </ul>
                            </div>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Increase AD of redistributed routes
router ospf 1
redistribute eigrp 100 subnets
distance 200 0.0.0.0 255.255.255.255 20  # External routes get AD 200

# Access list 20 matches external routes
access-list 20 permit any</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Route Filtering Methods</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Prefix Lists:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
# Allow only specific networks
ip prefix-list ALLOW-NETS permit 192.168.0.0/16 le 24

route-map FILTER permit 10
match ip address prefix-list ALLOW-NETS</pre>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Distribute Lists:</p>
                                    <pre class="bg-slate-800 p-3 rounded text-sm">
# Filter routes in routing protocol
router eigrp 100
distribute-list 10 out

access-list 10 deny 10.0.0.0 0.255.255.255
access-list 10 permit any</pre>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Multi-Point Redistribution Design</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-purple-400 mb-2">Best Practices:</p>
                                <ul class="list-disc list-inside space-y-1 text-sm">
                                    <li><strong>Centralized:</strong> Single redistribution point when possible</li>
                                    <li><strong>Consistent Tagging:</strong> Use same tag values across routers</li>
                                    <li><strong>Route Maps:</strong> Implement comprehensive filtering</li>
                                    <li><strong>Monitoring:</strong> Regular verification of routing tables</li>
                                </ul>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Troubleshooting Commands</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
show ip route tag [value]       # Display routes with specific tag
show route-map                  # Verify route map configuration
debug ip routing                # Watch routing table changes
show ip protocols               # Check redistribution settings
show ip route summary           # Route count by protocol</pre>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>Always use route tagging and filtering when performing mutual redistribution between protocols. Single-point redistribution is preferred over multiple redistribution points.</p>
                        </div>
                    ', 2, datetime('now'));


-- Subsection 22 topics
INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(22, 'HSRP (Hot Standby Router Protocol)', 'hsrp-hot-standby-router-protocol', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">HSRP Operation</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Cisco proprietary first-hop redundancy protocol</li>
                                    <li>Virtual IP and MAC address for gateway</li>
                                    <li>Active router forwards traffic normally</li>
                                    <li>Standby router monitors Active via Hello packets</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">HSRP Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config-if)# standby [group] ip [virtual-ip]<br>
                                        Router(config-if)# standby [group] priority [value]<br>
                                        Router(config-if)# standby [group] preempt<br>
                                        Router(config-if)# standby [group] track [interface]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure HSRP groups</li>
                                    <li>Set priority and preemption</li>
                                    <li>Implement interface tracking</li>
                                    <li>Verify HSRP operation and failover</li>
                                </ul>
                            </section>
                        </div>
                    ', 1, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(22, 'VRRP (Virtual Router Redundancy Protocol)', 'vrrp-virtual-router-redundancy-protocol', '
                        <div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">VRRP Features</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Open standard alternative to HSRP</li>
                                    <li>Master/Backup terminology instead of Active/Standby</li>
                                    <li>Can use interface IP as virtual IP</li>
                                    <li>Faster convergence than HSRP</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">VRRP Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config-if)# vrrp [group] ip [virtual-ip]<br>
                                        Router(config-if)# vrrp [group] priority [value]<br>
                                        Router(config-if)# vrrp [group] preempt<br>
                                        Router(config-if)# vrrp [group] track [interface]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure VRRP groups</li>
                                    <li>Compare VRRP vs HSRP features</li>
                                    <li>Implement redundancy solutions</li>
                                    <li>Troubleshoot gateway redundancy</li>
                                </ul>
                            </section>
                        </div>
                    ', 2, datetime('now'));

INSERT INTO topics (subsection_id, title, slug, principles_content, order_index, created_at) VALUES
(22, 'GLBP (Gateway Load Balancing Protocol)', 'glbp-gateway-load-balancing-protocol', '
                        <h4 class="text-xl font-semibold text-indigo-300 mb-3">Gateway Load Balancing Protocol (GLBP)</h4>
                        
                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">GLBP Overview</h5>
                            <p class="mb-3">GLBP provides first-hop redundancy AND load balancing across multiple routers:</p>
                            <ul class="list-disc list-inside space-y-1">
                                <li><strong>Active Virtual Gateway (AVG):</strong> Manages group and assigns virtual MAC addresses</li>
                                <li><strong>Active Virtual Forwarder (AVF):</strong> Forwards traffic for assigned virtual MAC</li>
                                <li><strong>Load Balancing:</strong> Distributes traffic across multiple physical routers</li>
                                <li><strong>Cisco Proprietary:</strong> Enhanced version of HSRP with load sharing</li>
                            </ul>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">GLBP Components</h5>
                            <div class="space-y-3">
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-green-400">Active Virtual Gateway (AVG)</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>One per GLBP group (highest priority router)</li>
                                        <li>Responds to ARP requests for virtual IP</li>
                                        <li>Assigns virtual MAC addresses to group members</li>
                                        <li>Manages load balancing algorithm</li>
                                    </ul>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-blue-400">Active Virtual Forwarder (AVF)</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>All group members can be AVFs</li>
                                        <li>Each AVF assigned unique virtual MAC address</li>
                                        <li>Forwards traffic for its virtual MAC</li>
                                        <li>Provides actual load balancing functionality</li>
                                    </ul>
                                </div>
                                <div class="bg-slate-800 p-3 rounded">
                                    <p class="font-semibold text-purple-400">Standby Virtual Forwarder (SVF)</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Backup for each AVF</li>
                                        <li>Takes over if primary AVF fails</li>
                                        <li>Monitors AVF health via hello messages</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Load Balancing Methods</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Round-Robin (Default):</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>ARP responses rotate virtual MACs</li>
                                        <li>Even distribution across forwarders</li>
                                        <li>Simple and effective for most scenarios</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="font-semibold text-indigo-300 mb-2">Weighted:</p>
                                    <ul class="list-disc list-inside space-y-1 text-sm">
                                        <li>Load balancing based on interface capacity</li>
                                        <li>Higher weight = more traffic</li>
                                        <li>Useful for unequal link speeds</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">GLBP Configuration</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
# Basic GLBP configuration
interface FastEthernet0/0
ip address 192.168.1.1 255.255.255.0
glbp 1 ip 192.168.1.10
glbp 1 priority 110
glbp 1 preempt
glbp 1 load-balancing round-robin

# Advanced configuration
glbp 1 timers 5 15              # Hello 5s, Hold 15s
glbp 1 load-balancing weighted  # Weighted load balancing
glbp 1 weighting 200 lower 150 upper 200  # Interface tracking</pre>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">GLBP vs HSRP/VRRP Comparison</h5>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead>
                                        <tr class="bg-slate-800">
                                            <th class="p-2 text-left">Feature</th>
                                            <th class="p-2 text-center">HSRP</th>
                                            <th class="p-2 text-center">VRRP</th>
                                            <th class="p-2 text-center">GLBP</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2">Load Balancing</td><td class="p-2 text-center text-red-400">No</td><td class="p-2 text-center text-red-400">No</td><td class="p-2 text-center text-green-400">Yes</td></tr>
                                        <tr><td class="p-2">Active Routers</td><td class="p-2 text-center">1</td><td class="p-2 text-center">1</td><td class="p-2 text-center">All</td></tr>
                                        <tr><td class="p-2">Virtual MACs</td><td class="p-2 text-center">1</td><td class="p-2 text-center">1</td><td class="p-2 text-center">Multiple</td></tr>
                                        <tr><td class="p-2">Standard</td><td class="p-2 text-center">Cisco</td><td class="p-2 text-center">IEEE</td><td class="p-2 text-center">Cisco</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">GLBP Operation Example</h5>
                            <div class="bg-slate-800 p-3 rounded mb-3">
                                <p class="font-semibold text-yellow-400 mb-2">Scenario: 3 routers in GLBP group</p>
                                <ol class="list-decimal list-inside space-y-1 text-sm">
                                    <li>R1 becomes AVG (highest priority)</li>
                                    <li>R1 assigns virtual MAC 0007.b400.0101 to R1</li>
                                    <li>R1 assigns virtual MAC 0007.b400.0102 to R2</li>
                                    <li>R1 assigns virtual MAC 0007.b400.0103 to R3</li>
                                    <li>ARP requests for 192.168.1.10 get responses with rotating MACs</li>
                                    <li>Traffic distributed across all three routers</li>
                                </ol>
                            </div>
                        </div>

                        <div class="bg-slate-700 p-4 rounded-lg mb-4">
                            <h5 class="font-semibold text-yellow-300 mb-2">Verification Commands</h5>
                            <pre class="bg-slate-800 p-3 rounded text-sm">
show glbp                       # GLBP group status
show glbp brief                 # Summary view
show standby                    # Also shows GLBP info
show arp                        # Verify virtual MAC addresses
debug glbp events              # GLBP state changes</pre>
                        </div>

                        <div class="bg-blue-900/30 border border-blue-600 p-4 rounded-lg">
                            <h5 class="font-semibold text-blue-300 mb-2">📝 Exam Tip</h5>
                            <p>GLBP is the only FHRP that provides true load balancing across multiple routers. It uses multiple virtual MAC addresses while maintaining a single virtual IP address.</p>
                        </div>
                    ', 3, datetime('now'));
