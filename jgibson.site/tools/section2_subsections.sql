-- Section 2.0 Subsections Creation Script
-- Based on Chapter 2 topic arrays from chapter2.html

-- Insert 9 subsections for Section 2.0 (Network Access)
INSERT INTO subsections (section_id, subsection_number, title, description, topic_count, created_at) VALUES 
(2, '2.1', 'Routing Table', 'Understanding routing table entries, administrative distance, and route sources', 3, datetime('now')),
(2, '2.2', 'Packet Forwarding', 'Host routing behavior, default gateways, and packet forwarding process', 3, datetime('now')),
(2, '2.3', 'Static Routes', 'Static route configuration, default routes, and floating static routes', 3, datetime('now')),
(2, '2.4', 'Dynamic Routing', 'Routing protocol fundamentals, metrics, and protocol comparison', 3, datetime('now')),
(2, '2.5', 'RIP Protocol', 'RIP operation, timers, and loop prevention mechanisms', 3, datetime('now')),
(2, '2.6', 'EIGRP Protocol', 'EIGRP DUAL algorithm, metrics, and advanced features', 4, datetime('now')),
(2, '2.7', 'OSPF Protocol', 'OSPF areas, LSAs, network types, and area types', 4, datetime('now')),
(2, '2.8', 'Redistribution', 'Route redistribution, loop prevention, and best practices', 2, datetime('now')),
(2, '2.9', 'FHRP Protocols', 'First-hop redundancy protocols: HSRP, VRRP, and GLBP', 4, datetime('now'));

-- Update section topic count
UPDATE sections SET topic_count = 29 WHERE id = 2;