-- Section 2.0 Topics Insertion Script
-- Populating all 29 topics with comprehensive content from chapter2.html topicDetails

-- First, update subsection topic counts to reflect actual counts
UPDATE subsections SET topic_count = 4 WHERE id = 14; -- Routing Table: 4 topics
UPDATE subsections SET topic_count = 2 WHERE id = 15; -- Packet Forwarding: 2 topics
UPDATE subsections SET topic_count = 4 WHERE id = 16; -- Static Routes: 4 topics
UPDATE subsections SET topic_count = 2 WHERE id = 17; -- Dynamic Routing: 2 topics
UPDATE subsections SET topic_count = 3 WHERE id = 18; -- RIP Protocol: 3 topics
UPDATE subsections SET topic_count = 2 WHERE id = 19; -- EIGRP Protocol: 2 topics
UPDATE subsections SET topic_count = 3 WHERE id = 20; -- OSPF Protocol: 3 topics
UPDATE subsections SET topic_count = 2 WHERE id = 21; -- Redistribution: 2 topics
UPDATE subsections SET topic_count = 3 WHERE id = 22; -- FHRP Protocols: 3 topics

-- Update section total topic count
UPDATE sections SET topic_count = 29 WHERE id = 2;

-- Insert all 29 topics with comprehensive content

-- 2.1 Routing Table Topics (Subsection ID: 14)
INSERT INTO topics (subsection_id, title, content, order_index, created_at) VALUES 
(14, 'Route Source', '<div class="space-y-6">
<section>
<h3 class="text-xl font-semibold text-blue-400 mb-3">Route Source Types</h3>
<ul class="list-disc list-inside space-y-2 text-slate-300">
<li><strong>Connected (C):</strong> Directly attached networks with AD = 0</li>
<li><strong>Static (S):</strong> Manually configured routes with AD = 1</li>
<li><strong>OSPF (O):</strong> Open Shortest Path First routes with AD = 110</li>
<li><strong>EIGRP (D):</strong> Enhanced Interior Gateway Routing Protocol with AD = 90</li>
<li><strong>RIP (R):</strong> Routing Information Protocol with AD = 120</li>
<li><strong>External (E):</strong> Routes from outside AS (OSPF external, EIGRP external)</li>
</ul>
</section>

<section>
<h3 class="text-xl font-semibold text-blue-400 mb-3">Administrative Distance</h3>
<div class="bg-slate-800 p-4 rounded-lg">
<code class="text-green-400">
Connected: 0    (Most trusted)<br>
Static: 1<br>
EIGRP: 90<br>
OSPF: 110<br>
RIP: 120<br>
External EIGRP: 170<br>
Unknown: 255    (Least trusted)
</code>
</div>
</section>

<section>
<h3 class="text-xl font-semibold text-blue-400 mb-3">Route Selection Process</h3>
<ul class="list-disc list-inside space-y-2 text-slate-300">
<li>Lower administrative distance wins</li>
<li>If AD equal, lower metric wins</li>
<li>Load balancing with equal AD and metric</li>
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
</div>', 1, datetime('now')),

(14, 'Destination Network', '<div class="space-y-6">
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
</div>', 2, datetime('now'));