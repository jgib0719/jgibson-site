# CCNA Section 4 - Extracted Modal Content

**Extraction Date:** 2025-09-20 22:51:12
**Total Topics:** 22
**Categories:** 5

## 📋 Topic Categories

### Access Control Lists (7 topics)
- Standard ACLs
- Extended ACLs
- Named ACLs
- RADIUS Configuration
- MAC Address Filtering
- Network Segmentation
- Threat Mitigation Techniques

### Network Address Translation (2 topics)
- Syslog Configuration
- Dynamic ARP Inspection

### Network Management (5 topics)
- SNMP Configuration
- Port Security
- WPA2/WPA3 Configuration
- Site-to-Site VPN
- Security Best Practices

### SNMP and Logging (3 topics)
- Switch Port Security
- Password Security
- AAA Configuration

### General IP Services (5 topics)
- Device Hardening
- DHCP Snooping
- 802.1X Authentication
- Client VPN
- 802.1X Port-Based Authentication

---

## 📖 Full Topic Content

## Access Control Lists

### Standard ACLs

**Title:** Standard ACLs - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Standard ACL Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# access-list [1-99] [permit|deny] [source] [wildcard]<br>
                                        Router(config)# access-list [1-99] [permit|deny] host [ip]<br>
                                        Router(config)# access-list [1-99] [permit|deny] any<br><br>
                                        Router(config-if)# ip access-group [number] [in|out]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Standard ACL Features</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Filter based on source IP address only</li>
                                    <li>Use numbers 1-99 and 1300-1999</li>
                                    <li>Apply close to destination for efficiency</li>
                                    <li>Implicit deny any at the end</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure numbered standard ACLs</li>
                                    <li>Apply ACLs to interfaces (inbound/outbound)</li>
                                    <li>Understand wildcard mask calculations</li>
                                    <li>Troubleshoot ACL filtering issues</li>
                                </ul>
                            </section>
                        </div>

---

### Extended ACLs

**Title:** Extended ACLs - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Extended ACL Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# access-list [100-199] [permit|deny] [protocol] [source] [dest] [port]<br>
                                        Router(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 80<br>
                                        Router(config)# access-list 100 deny ip any any<br><br>
                                        Router(config-if)# ip access-group 100 in
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Extended ACL Capabilities</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Filter by source and destination IP</li>
                                    <li>Specify protocols (TCP, UDP, ICMP, IP)</li>
                                    <li>Define port numbers and ranges</li>
                                    <li>More granular traffic control</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure extended ACLs with protocols</li>
                                    <li>Use port numbers and service names</li>
                                    <li>Apply extended ACLs close to source</li>
                                    <li>Verify ACL operation and statistics</li>
                                </ul>
                            </section>
                        </div>

---

### Named ACLs

**Title:** Named ACLs - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Named ACL Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip access-list [standard|extended] [name]<br>
                                        Router(config-std-nacl)# permit host 192.168.1.10<br>
                                        Router(config-std-nacl)# deny 192.168.1.0 0.0.0.255<br>
                                        Router(config-std-nacl)# permit any<br><br>
                                        Router(config-if)# ip access-group [name] [in|out]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Named ACL Advantages</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Descriptive names for easier management</li>
                                    <li>Can insert, delete, and modify entries</li>
                                    <li>Better documentation and organization</li>
                                    <li>Support for sequence numbers</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure named standard and extended ACLs</li>
                                    <li>Edit existing ACL entries</li>
                                    <li>Use sequence numbers for insertion</li>
                                    <li>Apply named ACLs to interfaces</li>
                                </ul>
                            </section>
                        </div>

---

### RADIUS Configuration

**Title:** RADIUS Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">RADIUS Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# radius server [name]<br>
                                        Router(config-radius-server)# address ipv4 [ip] auth-port 1812 acct-port 1813<br>
                                        Router(config-radius-server)# key [shared-secret]<br>
                                        Router(config)# aaa group server radius [group-name]<br>
                                        Router(config-sg-radius)# server name [server-name]<br>
                                        Router(config)# aaa authentication login default group [group-name] local
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">RADIUS Features</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Centralized authentication, authorization, and accounting</li>
                                    <li>UDP-based protocol (ports 1812/1813)</li>
                                    <li>Shared secret for device-server communication</li>
                                    <li>Attribute-value pairs (AVPs) for user information</li>
                                    <li>Vendor-specific attributes for extended functionality</li>
                                    <li>Failover to backup servers and local authentication</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure RADIUS server communication</li>
                                    <li>Set up server groups and shared secrets</li>
                                    <li>Understand RADIUS ports and operation</li>
                                    <li>Integrate RADIUS with AAA method lists</li>
                                </ul>
                            </section>
                        </div>

---

### MAC Address Filtering

**Title:** MAC Address Filtering - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">MAC Address Filtering Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Switch(config)# mac address-table static [mac-address] vlan [vlan-id] interface [interface]<br>
                                        Switch(config-if)# switchport port-security mac-address [mac-address]<br>
                                        Switch(config-if)# switchport port-security mac-address sticky
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Filtering Methods</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Static MAC Entries:</strong> Manually configured MAC addresses</li>
                                    <li><strong>Dynamic Learning:</strong> Automatically learned MAC addresses</li>
                                    <li><strong>Sticky Learning:</strong> Dynamically learned but saved to config</li>
                                    <li><strong>Blacklist/Whitelist:</strong> Allow or deny specific MAC addresses</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure static MAC address entries</li>
                                    <li>Understand MAC address security limitations</li>
                                    <li>Know when to use MAC filtering vs other security</li>
                                    <li>Implement sticky MAC learning</li>
                                </ul>
                            </section>
                        </div>

---

### Network Segmentation

**Title:** Network Segmentation - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Segmentation Methods</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>VLANs:</strong> Layer 2 logical separation of network traffic</li>
                                    <li><strong>Subnets:</strong> Layer 3 IP address space division</li>
                                    <li><strong>Firewalls:</strong> Traffic filtering between network segments</li>
                                    <li><strong>ACLs:</strong> Access control lists for traffic control</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Security Benefits</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Limit blast radius of security incidents</li>
                                    <li>Enforce security policies between segments</li>
                                    <li>Monitor and control inter-segment traffic</li>
                                    <li>Compliance with regulatory requirements</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Implementation Example</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Switch(config)# vlan 10<br>
                                        Switch(config-vlan)# name USER_SEGMENT<br>
                                        Switch(config)# vlan 20<br>
                                        Switch(config-vlan)# name SERVER_SEGMENT<br>
                                        Switch(config)# interface vlan 10<br>
                                        Switch(config-if)# ip address 192.168.10.1 255.255.255.0
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand network segmentation benefits</li>
                                    <li>Configure VLANs for network separation</li>
                                    <li>Implement inter-VLAN routing with security</li>
                                    <li>Know segmentation best practices</li>
                                </ul>
                            </section>
                        </div>

---

### Threat Mitigation Techniques

**Title:** Threat Mitigation Techniques - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common Network Threats</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>DDoS Attacks:</strong> Distributed denial of service attacks</li>
                                    <li><strong>Man-in-the-Middle:</strong> Traffic interception attacks</li>
                                    <li><strong>Brute Force:</strong> Password guessing attacks</li>
                                    <li><strong>Social Engineering:</strong> Human-based attack vectors</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Mitigation Strategies</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Rate Limiting:</strong> Control traffic flow and prevent floods</li>
                                    <li><strong>Access Control:</strong> Restrict network access to authorized users</li>
                                    <li><strong>Monitoring:</strong> Continuous network traffic analysis</li>
                                    <li><strong>Incident Response:</strong> Rapid response to security events</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Implementation Techniques</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# access-list 100 deny tcp any any eq 80 log<br>
                                        Router(config)# interface gigabitethernet0/0<br>
                                        Router(config-if)# rate-limit input 1000000 8000 8000 conform-action transmit exceed-action drop<br>
                                        Router(config)# login block-for 300 attempts 3 within 60
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Identify common network security threats</li>
                                    <li>Implement basic threat mitigation techniques</li>
                                    <li>Configure rate limiting and access controls</li>
                                    <li>Understand monitoring and logging importance</li>
                                </ul>
                            </section>
                        </div>

---

## Network Address Translation

### Syslog Configuration

**Title:** Syslog Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Syslog Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# logging [host-ip]<br>
                                        Router(config)# logging trap [level]<br>
                                        Router(config)# logging buffered [size] [level]<br>
                                        Router(config)# logging console [level]<br>
                                        Router(config)# service timestamps log datetime
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Syslog Severity Levels</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>0 - Emergency:</strong> System unusable</li>
                                    <li><strong>1 - Alert:</strong> Immediate action needed</li>
                                    <li><strong>2 - Critical:</strong> Critical conditions</li>
                                    <li><strong>3 - Error:</strong> Error conditions</li>
                                    <li><strong>4 - Warning:</strong> Warning conditions</li>
                                    <li><strong>5 - Notice:</strong> Normal but significant</li>
                                    <li><strong>6 - Info:</strong> Informational messages</li>
                                    <li><strong>7 - Debug:</strong> Debug messages</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure syslog server destinations</li>
                                    <li>Set logging levels for different outputs</li>
                                    <li>Enable timestamps for log messages</li>
                                    <li>Understand syslog severity levels</li>
                                </ul>
                            </section>
                        </div>

---

### Dynamic ARP Inspection

**Title:** Dynamic ARP Inspection - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DAI Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Switch(config)# ip arp inspection vlan [vlan-list]<br>
                                        Switch(config)# interface [interface]<br>
                                        Switch(config-if)# ip arp inspection trust<br>
                                        Switch(config)# ip arp inspection validate [src-mac] [dst-mac] [ip]<br>
                                        Switch(config-if)# ip arp inspection limit rate [rate]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DAI Operation</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Uses DHCP snooping binding table for validation</li>
                                    <li>Inspects ARP packets on untrusted interfaces</li>
                                    <li>Prevents ARP spoofing and man-in-the-middle attacks</li>
                                    <li>Validates source MAC, destination MAC, and IP addresses</li>
                                    <li>Rate limiting prevents ARP packet flooding</li>
                                    <li>Trusted interfaces bypass DAI inspection</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Enable DAI on VLANs with DHCP snooping</li>
                                    <li>Configure trusted interfaces for DAI</li>
                                    <li>Understand DAI validation options</li>
                                    <li>Implement rate limiting for ARP inspection</li>
                                </ul>
                            </section>
                        </div>

---

## Network Management

### SNMP Configuration

**Title:** SNMP Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SNMP Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# snmp-server community [string] [ro|rw]<br>
                                        Router(config)# snmp-server location [location]<br>
                                        Router(config)# snmp-server contact [contact]<br>
                                        Router(config)# snmp-server host [ip] [community]<br>
                                        Router(config)# snmp-server enable traps
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SNMP Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Manager:</strong> Network management system</li>
                                    <li><strong>Agent:</strong> Software on managed device</li>
                                    <li><strong>MIB:</strong> Management Information Base</li>
                                    <li><strong>Community:</strong> Authentication mechanism</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure SNMP communities</li>
                                    <li>Set system location and contact</li>
                                    <li>Enable SNMP traps and notifications</li>
                                    <li>Understand SNMPv2c and SNMPv3 differences</li>
                                </ul>
                            </section>
                        </div>

---

### Port Security

**Title:** Port Security - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Port Security Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Switch(config)# interface [interface]<br>
                                        Switch(config-if)# switchport mode access<br>
                                        Switch(config-if)# switchport port-security<br>
                                        Switch(config-if)# switchport port-security maximum [number]<br>
                                        Switch(config-if)# switchport port-security mac-address [mac|sticky]<br>
                                        Switch(config-if)# switchport port-security violation [shutdown|restrict|protect]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Port Security Violation Actions</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Shutdown:</strong> Disables port and sends SNMP trap (default)</li>
                                    <li><strong>Restrict:</strong> Drops violating packets, increments counter</li>
                                    <li><strong>Protect:</strong> Drops violating packets silently</li>
                                    <li>Sticky learning automatically saves learned MACs</li>
                                    <li>Maximum MAC addresses per port (default: 1)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure port security with MAC address limits</li>
                                    <li>Understand violation modes and their effects</li>
                                    <li>Implement sticky MAC address learning</li>
                                    <li>Troubleshoot port security violations and recovery</li>
                                </ul>
                            </section>
                        </div>

---

### WPA2/WPA3 Configuration

**Title:** WPA2/WPA3 Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">WPA2/WPA3 Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        AP(config)# interface dot11radio 0<br>
                                        AP(config-if)# encryption mode ciphers [aes-ccm|tkip]<br>
                                        AP(config-if)# ssid [network-name]<br>
                                        AP(config-if-ssid)# authentication open<br>
                                        AP(config-if-ssid)# authentication key-management wpa version 2<br>
                                        AP(config-if-ssid)# wpa-psk ascii [passphrase]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">WPA2 vs WPA3 Features</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>WPA2:</strong> AES-CCMP encryption, PSK/Enterprise modes</li>
                                    <li><strong>WPA3:</strong> Enhanced security with SAE (Simultaneous Authentication of Equals)</li>
                                    <li><strong>WPA3 Personal:</strong> Improved dictionary attack resistance</li>
                                    <li><strong>WPA3 Enterprise:</strong> 192-bit security mode</li>
                                    <li>Forward secrecy prevents key compromise</li>
                                    <li>Individualized data encryption in open networks</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure WPA2-PSK with AES encryption</li>
                                    <li>Understand WPA3 security improvements</li>
                                    <li>Know the difference between Personal and Enterprise modes</li>
                                    <li>Configure SSID and authentication settings</li>
                                </ul>
                            </section>
                        </div>

---

### Site-to-Site VPN

**Title:** Site-to-Site VPN - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Site-to-Site VPN Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# crypto isakmp policy 10<br>
                                        Router(config-isakmp)# authentication pre-share<br>
                                        Router(config-isakmp)# encryption aes 256<br>
                                        Router(config-isakmp)# hash sha256<br>
                                        Router(config-isakmp)# group 14<br>
                                        Router(config)# crypto isakmp key [preshared-key] address [peer-ip]<br>
                                        Router(config)# crypto ipsec transform-set [name] esp-aes 256 esp-sha256-hmac
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">VPN Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>IKE Phase 1:</strong> Establish secure management connection</li>
                                    <li><strong>IKE Phase 2:</strong> Negotiate IPSec parameters</li>
                                    <li><strong>ESP:</strong> Encapsulating Security Payload for data protection</li>
                                    <li><strong>Transform Sets:</strong> Define encryption and authentication</li>
                                    <li>Pre-shared keys or certificate-based authentication</li>
                                    <li>Tunnel vs transport mode operation</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand IPSec VPN concepts and components</li>
                                    <li>Configure IKE policies and transform sets</li>
                                    <li>Know the difference between tunnel and transport modes</li>
                                    <li>Troubleshoot VPN connectivity issues</li>
                                </ul>
                            </section>
                        </div>

---

### Security Best Practices

**Title:** Security Best Practices - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Administrative Best Practices</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Regular Updates:</strong> Keep firmware and software current</li>
                                    <li><strong>Strong Passwords:</strong> Enforce complex password policies</li>
                                    <li><strong>Principle of Least Privilege:</strong> Minimum required access</li>
                                    <li><strong>Documentation:</strong> Maintain current network documentation</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Technical Best Practices</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Network Monitoring:</strong> Continuous security monitoring</li>
                                    <li><strong>Backup Strategies:</strong> Regular configuration backups</li>
                                    <li><strong>Incident Response:</strong> Prepared response procedures</li>
                                    <li><strong>Security Training:</strong> Regular staff security education</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration Examples</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# service password-encryption<br>
                                        Router(config)# enable secret [strong-password]<br>
                                        Router(config)# banner motd "Authorized Access Only"<br>
                                        Router(config)# no ip source-route<br>
                                        Router(config)# no service tcp-small-servers<br>
                                        Router(config)# no service udp-small-servers
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand comprehensive security practices</li>
                                    <li>Implement device hardening techniques</li>
                                    <li>Know password and access security best practices</li>
                                    <li>Recognize importance of monitoring and documentation</li>
                                </ul>
                            </section>
                        </div>

---

## SNMP and Logging

### Switch Port Security

**Title:** Switch Port Security - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Port Security Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Switch(config-if)# switchport mode access<br>
                                        Switch(config-if)# switchport port-security<br>
                                        Switch(config-if)# switchport port-security maximum [number]<br>
                                        Switch(config-if)# switchport port-security mac-address [mac|sticky]<br>
                                        Switch(config-if)# switchport port-security violation [protect|restrict|shutdown]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Violation Actions</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Protect:</strong> Drops unauthorized frames silently</li>
                                    <li><strong>Restrict:</strong> Drops frames and logs violations</li>
                                    <li><strong>Shutdown:</strong> Disables port and logs violation</li>
                                    <li>Recovery requires manual intervention</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure port security on access ports</li>
                                    <li>Set maximum MAC addresses allowed</li>
                                    <li>Configure sticky MAC learning</li>
                                    <li>Troubleshoot port security violations</li>
                                </ul>
                            </section>
                        </div>

---

### Password Security

**Title:** Password Security - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Password Security Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# enable secret [password]<br>
                                        Router(config)# username [user] privilege 15 secret [password]<br>
                                        Router(config)# service password-encryption<br>
                                        Router(config)# security passwords min-length 8<br>
                                        Router(config)# login block-for 120 attempts 3 within 60
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Password Security Features</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Use secret instead of password for stronger encryption</li>
                                    <li>Enable service password-encryption for all passwords</li>
                                    <li>Set minimum password length requirements</li>
                                    <li>Configure login blocking for brute force protection</li>
                                    <li>Use privilege levels for role-based access</li>
                                    <li>Implement password complexity requirements</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure enable secret vs enable password</li>
                                    <li>Implement password encryption services</li>
                                    <li>Set password complexity and length policies</li>
                                    <li>Configure login blocking for security</li>
                                </ul>
                            </section>
                        </div>

---

### AAA Configuration

**Title:** AAA Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">AAA Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# aaa new-model<br>
                                        Router(config)# aaa authentication login default local<br>
                                        Router(config)# aaa authentication login CONSOLE none<br>
                                        Router(config)# aaa authorization exec default local<br>
                                        Router(config)# aaa accounting exec default start-stop local<br>
                                        Router(config)# line console 0<br>
                                        Router(config-line)# login authentication CONSOLE
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">AAA Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Authentication:</strong> Who are you? (verify identity)</li>
                                    <li><strong>Authorization:</strong> What can you do? (assign permissions)</li>
                                    <li><strong>Accounting:</strong> What did you do? (log activities)</li>
                                    <li>Method lists define authentication sources</li>
                                    <li>Local, RADIUS, TACACS+ authentication methods</li>
                                    <li>Named method lists for different access methods</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure AAA new-model and method lists</li>
                                    <li>Understand Authentication, Authorization, Accounting</li>
                                    <li>Apply AAA to different line types (console, VTY)</li>
                                    <li>Configure local vs external AAA methods</li>
                                </ul>
                            </section>
                        </div>

---

## General IP Services

### Device Hardening

**Title:** Device Hardening - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Device Hardening Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# no ip http server<br>
                                        Router(config)# no ip http secure-server<br>
                                        Router(config)# service password-encryption<br>
                                        Router(config)# no service pad<br>
                                        Router(config)# no cdp run<br>
                                        Router(config)# banner motd #Unauthorized access prohibited#<br>
                                        Router(config)# security passwords min-length 8
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Hardening Best Practices</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Disable unused services and protocols</li>
                                    <li>Configure warning banners for legal compliance</li>
                                    <li>Encrypt stored passwords with service password-encryption</li>
                                    <li>Set minimum password length requirements</li>
                                    <li>Disable CDP on internet-facing interfaces</li>
                                    <li>Configure console and VTY timeout values</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure device hardening features</li>
                                    <li>Disable unnecessary services for security</li>
                                    <li>Implement password encryption and policies</li>
                                    <li>Configure appropriate warning banners</li>
                                </ul>
                            </section>
                        </div>

---

### DHCP Snooping

**Title:** DHCP Snooping - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DHCP Snooping Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Switch(config)# ip dhcp snooping<br>
                                        Switch(config)# ip dhcp snooping vlan [vlan-list]<br>
                                        Switch(config)# interface [interface]<br>
                                        Switch(config-if)# ip dhcp snooping trust<br>
                                        Switch(config)# ip dhcp snooping database [url]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DHCP Snooping Operation</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Creates binding table of IP-to-MAC mappings</li>
                                    <li>Trusted ports can send DHCP server messages</li>
                                    <li>Untrusted ports are monitored for rogue DHCP servers</li>
                                    <li>Prevents DHCP starvation and spoofing attacks</li>
                                    <li>Foundation for Dynamic ARP Inspection (DAI)</li>
                                    <li>Rate limiting prevents DHCP message flooding</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Enable DHCP snooping globally and per VLAN</li>
                                    <li>Configure trusted and untrusted interfaces</li>
                                    <li>Understand DHCP snooping binding table</li>
                                    <li>Troubleshoot DHCP snooping issues</li>
                                </ul>
                            </section>
                        </div>

---

### 802.1X Authentication

**Title:** 802.1X Authentication - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">802.1X Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Switch(config)# aaa new-model<br>
                                        Switch(config)# dot1x system-auth-control<br>
                                        Switch(config)# interface [interface]<br>
                                        Switch(config-if)# dot1x port-control auto<br>
                                        Switch(config-if)# dot1x host-mode [single-host|multi-host]<br>
                                        Switch(config-if)# authentication periodic
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">802.1X Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Supplicant:</strong> Client device requesting access</li>
                                    <li><strong>Authenticator:</strong> Switch/AP controlling port access</li>
                                    <li><strong>Authentication Server:</strong> RADIUS server validating credentials</li>
                                    <li>EAP (Extensible Authentication Protocol) for communication</li>
                                    <li>Port-based network access control</li>
                                    <li>Dynamic VLAN assignment based on authentication</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure 802.1X port-based authentication</li>
                                    <li>Understand the three-party authentication model</li>
                                    <li>Configure host modes (single-host vs multi-host)</li>
                                    <li>Integrate with RADIUS for authentication</li>
                                </ul>
                            </section>
                        </div>

---

### Client VPN

**Title:** Client VPN - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Client VPN Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# crypto vpn anyconnect flash0:/anyconnect-image.pkg<br>
                                        Router(config)# webvpn gateway [gateway-name]<br>
                                        Router(config-webvpn-gateway)# ip address [ip] port 443<br>
                                        Router(config-webvpn-gateway)# ssl trustpoint [trustpoint-name]<br>
                                        Router(config)# webvpn context [context-name]<br>
                                        Router(config-webvpn-context)# gateway [gateway-name]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Client VPN Features</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>SSL/TLS-based remote access connectivity</li>
                                    <li>AnyConnect client software for various platforms</li>
                                    <li>Web-based clientless access option</li>
                                    <li>Dynamic IP address assignment to clients</li>
                                    <li>Split tunneling for local internet access</li>
                                    <li>User authentication via local or external methods</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand remote access VPN concepts</li>
                                    <li>Know SSL VPN vs IPSec client VPN differences</li>
                                    <li>Configure basic SSL VPN parameters</li>
                                    <li>Understand client VPN authentication methods</li>
                                </ul>
                            </section>
                        </div>

---

### 802.1X Port-Based Authentication

**Title:** 802.1X Port-Based Authentication - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">802.1X Components</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Supplicant:</strong> Client device requesting network access</li>
                                    <li><strong>Authenticator:</strong> Switch port controlling network access</li>
                                    <li><strong>Authentication Server:</strong> RADIUS server validating credentials</li>
                                    <li><strong>EAP Protocol:</strong> Extensible Authentication Protocol</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration Example</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Switch(config)# aaa new-model<br>
                                        Switch(config)# aaa authentication dot1x default group radius<br>
                                        Switch(config)# dot1x system-auth-control<br>
                                        Switch(config-if)# authentication port-control auto<br>
                                        Switch(config-if)# authentication periodic<br>
                                        Switch(config-if)# dot1x pae authenticator
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand 802.1X authentication process</li>
                                    <li>Configure basic 802.1X on switch ports</li>
                                    <li>Know EAP methods and RADIUS integration</li>
                                    <li>Troubleshoot port-based authentication issues</li>
                                </ul>
                            </section>
                        </div>

---

