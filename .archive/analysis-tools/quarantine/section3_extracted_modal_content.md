# CCNA Section 3 - Extracted Modal Content

**Extraction Date:** 2025-09-20 22:51:08
**Total Topics:** 21
**Categories:** 5

## 📋 Topic Categories

### DHCP Services (4 topics)
- DHCP Server Configuration
- DHCP Client Configuration
- DHCP Relay Agent
- DHCP Options

### NAT/PAT (4 topics)
- Syslog Severity Levels
- Static NAT
- Dynamic NAT
- PAT (Port Address Translation)

### Network Time Protocol (4 topics)
- NTP Client Configuration
- DNS Record Types
- Syslog Server Configuration
- NTP Server Configuration

### DNS Services (2 topics)
- DNS Client Configuration
- DNS Server Configuration

### General IP Services (7 topics)
- SNMP Community Strings
- SNMP Versions
- SSH Configuration
- Telnet Configuration
- FTP and TFTP
- HTTP and HTTPS
- QoS Basics

---

## 📖 Full Topic Content

## DHCP Services

### DHCP Server Configuration

**Title:** DHCP Server Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DHCP Server Setup</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip dhcp pool [pool-name]<br>
                                        Router(dhcp-config)# network [network] [mask]<br>
                                        Router(dhcp-config)# default-router [gateway]<br>
                                        Router(dhcp-config)# dns-server [dns-ip]<br>
                                        Router(dhcp-config)# lease [days] [hours] [minutes]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DHCP Pool Configuration</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Define IP address range for automatic assignment</li>
                                    <li>Set default gateway for client routing</li>
                                    <li>Configure DNS servers for name resolution</li>
                                    <li>Exclude static IP addresses from pool</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure DHCP server on Cisco routers</li>
                                    <li>Verify DHCP pool and bindings</li>
                                    <li>Troubleshoot DHCP address assignment</li>
                                    <li>Implement DHCP reservations</li>
                                </ul>
                            </section>
                        </div>

---

### DHCP Client Configuration

**Title:** DHCP Client Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Client Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# interface [interface]<br>
                                        Router(config-if)# ip address dhcp<br>
                                        Router(config-if)# no shutdown<br><br>
                                        Switch(config)# interface vlan [vlan-id]<br>
                                        Switch(config-if)# ip address dhcp
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DHCP Process (DORA)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Discover:</strong> Client broadcasts DHCP discover message</li>
                                    <li><strong>Offer:</strong> Server responds with IP address offer</li>
                                    <li><strong>Request:</strong> Client requests the offered address</li>
                                    <li><strong>Acknowledge:</strong> Server confirms the assignment</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure interfaces to use DHCP</li>
                                    <li>Understand DHCP message types</li>
                                    <li>Verify DHCP client configuration</li>
                                    <li>Troubleshoot DHCP connectivity issues</li>
                                </ul>
                            </section>
                        </div>

---

### DHCP Relay Agent

**Title:** DHCP Relay Agent - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DHCP Relay Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# interface [interface]<br>
                                        Router(config-if)# ip helper-address [dhcp-server-ip]<br><br>
                                        ! Multiple DHCP servers<br>
                                        Router(config-if)# ip helper-address [server1-ip]<br>
                                        Router(config-if)# ip helper-address [server2-ip]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">How DHCP Relay Works</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Client broadcasts DHCP Discover on local subnet</li>
                                    <li>Relay agent receives broadcast and converts to unicast</li>
                                    <li>Relay forwards request to configured DHCP server</li>
                                    <li>Server responds through relay agent back to client</li>
                                    <li>Enables DHCP across multiple subnets/VLANs</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure ip helper-address on router interfaces</li>
                                    <li>Understand DHCP relay operation across subnets</li>
                                    <li>Troubleshoot DHCP relay issues</li>
                                    <li>Verify DHCP relay functionality</li>
                                </ul>
                            </section>
                        </div>

---

### DHCP Options

**Title:** DHCP Options - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common DHCP Options</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Option 43:</strong> Vendor-specific information (e.g., wireless controller IP)</li>
                                    <li><strong>Option 66:</strong> TFTP server name for boot files</li>
                                    <li><strong>Option 150:</strong> TFTP server IP address</li>
                                    <li><strong>Option 3:</strong> Default gateway (router)</li>
                                    <li><strong>Option 6:</strong> DNS servers</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DHCP Option Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip dhcp pool POOL_NAME<br>
                                        Router(dhcp-config)# option 43 hex [hex-string]<br>
                                        Router(dhcp-config)# option 150 ip [tftp-server-ip]<br>
                                        Router(dhcp-config)# option 66 ascii [server-name]<br>
                                        Router(dhcp-config)# bootfile [filename]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure vendor-specific DHCP options</li>
                                    <li>Understand TFTP server options for IP phones</li>
                                    <li>Know common DHCP option numbers and purposes</li>
                                    <li>Verify DHCP option delivery to clients</li>
                                </ul>
                            </section>
                        </div>

---

## NAT/PAT

### Syslog Severity Levels

**Title:** Syslog Severity Levels - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Severity Level Hierarchy</h3>
                                <div class="bg-slate-800 p-4 rounded-lg space-y-2">
                                    <div><code class="text-red-500">Level 0 - Emergency:</code> <span class="text-slate-300">System unusable</span></div>
                                    <div><code class="text-red-400">Level 1 - Alert:</code> <span class="text-slate-300">Immediate action needed</span></div>
                                    <div><code class="text-orange-500">Level 2 - Critical:</code> <span class="text-slate-300">Critical conditions</span></div>
                                    <div><code class="text-orange-400">Level 3 - Error:</code> <span class="text-slate-300">Error conditions</span></div>
                                    <div><code class="text-yellow-400">Level 4 - Warning:</code> <span class="text-slate-300">Warning conditions</span></div>
                                    <div><code class="text-green-400">Level 5 - Notice:</code> <span class="text-slate-300">Normal but significant</span></div>
                                    <div><code class="text-blue-400">Level 6 - Info:</code> <span class="text-slate-300">Informational messages</span></div>
                                    <div><code class="text-gray-400">Level 7 - Debug:</code> <span class="text-slate-300">Debug messages</span></div>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Logging Configuration</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Higher number = lower priority (Debug is lowest)</li>
                                    <li>Setting level includes that level and all higher priorities</li>
                                    <li>Level 4 includes Emergency, Alert, Critical, Error, Warning</li>
                                    <li>Use appropriate level to control log volume</li>
                                    <li>Debug level generates most verbose logging</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Memorize all 8 severity levels and their numbers</li>
                                    <li>Understand cumulative nature of severity filtering</li>
                                    <li>Configure appropriate logging levels for different scenarios</li>
                                    <li>Troubleshoot why certain messages aren't being logged</li>
                                </ul>
                            </section>
                        </div>

---

### Static NAT

**Title:** Static NAT - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Static NAT Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip nat inside source static [inside-local] [inside-global]<br>
                                        Router(config)# interface [inside-interface]<br>
                                        Router(config-if)# ip nat inside<br>
                                        Router(config)# interface [outside-interface]<br>
                                        Router(config-if)# ip nat outside
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Static NAT Characteristics</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>One-to-one mapping between inside and outside addresses</li>
                                    <li>Permanent translation entry in NAT table</li>
                                    <li>Ideal for servers requiring consistent external addresses</li>
                                    <li>Allows inbound connections to internal servers</li>
                                    <li>Uses one public IP address per internal device</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure static NAT mappings</li>
                                    <li>Designate inside and outside interfaces</li>
                                    <li>Understand when to use static vs dynamic NAT</li>
                                    <li>Verify static NAT translations with show commands</li>
                                </ul>
                            </section>
                        </div>

---

### Dynamic NAT

**Title:** Dynamic NAT - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Dynamic NAT Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip nat pool [pool-name] [start-ip] [end-ip] netmask [mask]<br>
                                        Router(config)# access-list [acl-number] permit [source-network] [wildcard]<br>
                                        Router(config)# ip nat inside source list [acl] pool [pool-name]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Dynamic NAT Operation</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Automatically assigns public IPs from a pool</li>
                                    <li>Creates temporary translation entries</li>
                                    <li>First-come, first-served IP assignment</li>
                                    <li>Returns IP to pool when session ends</li>
                                    <li>Limited by number of public IPs in pool</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Create NAT pools with appropriate IP ranges</li>
                                    <li>Configure access lists to define inside networks</li>
                                    <li>Understand dynamic assignment process</li>
                                    <li>Troubleshoot NAT pool exhaustion issues</li>
                                </ul>
                            </section>
                        </div>

---

### PAT (Port Address Translation)

**Title:** PAT (Port Address Translation) - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">PAT Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# access-list [acl] permit [source-network] [wildcard]<br>
                                        Router(config)# ip nat inside source list [acl] interface [outside-int] overload<br><br>
                                        ! Or with NAT pool<br>
                                        Router(config)# ip nat inside source list [acl] pool [pool] overload
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">PAT Operation</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Multiple inside addresses share one public IP</li>
                                    <li>Uses different port numbers to distinguish sessions</li>
                                    <li>Tracks connections using source port translation</li>
                                    <li>Most common NAT implementation in small networks</li>
                                    <li>Supports thousands of simultaneous translations</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure PAT using interface or pool overload</li>
                                    <li>Understand port number manipulation in PAT</li>
                                    <li>Know advantages of PAT over static/dynamic NAT</li>
                                    <li>Verify PAT translations and troubleshoot issues</li>
                                </ul>
                            </section>
                        </div>

---

## Network Time Protocol

### NTP Client Configuration

**Title:** NTP Client Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">NTP Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ntp server [ntp-server-ip]<br>
                                        Router(config)# ntp master [stratum]<br>
                                        Router(config)# clock timezone [zone] [hours]<br>
                                        Router(config)# clock summer-time [zone] recurring
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">NTP Importance</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Synchronizes time across network devices</li>
                                    <li>Critical for log correlation and debugging</li>
                                    <li>Required for security protocols and certificates</li>
                                    <li>Enables accurate timestamp on events</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure NTP client and server</li>
                                    <li>Set timezone and daylight saving time</li>
                                    <li>Verify NTP synchronization status</li>
                                    <li>Understand NTP stratum levels</li>
                                </ul>
                            </section>
                        </div>

---

### DNS Record Types

**Title:** DNS Record Types - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Common DNS Record Types</h3>
                                <div class="bg-slate-800 p-4 rounded-lg space-y-3">
                                    <div><code class="text-green-400">A Record:</code> <span class="text-slate-300">Maps hostname to IPv4 address</span></div>
                                    <div><code class="text-blue-400">AAAA Record:</code> <span class="text-slate-300">Maps hostname to IPv6 address</span></div>
                                    <div><code class="text-yellow-400">CNAME Record:</code> <span class="text-slate-300">Creates alias for another hostname</span></div>
                                    <div><code class="text-purple-400">MX Record:</code> <span class="text-slate-300">Specifies mail server for domain</span></div>
                                    <div><code class="text-red-400">NS Record:</code> <span class="text-slate-300">Identifies authoritative name servers</span></div>
                                    <div><code class="text-orange-400">PTR Record:</code> <span class="text-slate-300">Reverse DNS lookup (IP to hostname)</span></div>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DNS Resolution Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Client queries local DNS resolver</li>
                                    <li>Resolver checks cache for existing record</li>
                                    <li>If not cached, query authoritative servers</li>
                                    <li>Return appropriate record type to client</li>
                                    <li>Cache result with TTL (Time To Live)</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand different DNS record types and uses</li>
                                    <li>Know forward vs reverse DNS lookups</li>
                                    <li>Configure static host entries on routers</li>
                                    <li>Troubleshoot DNS resolution issues</li>
                                </ul>
                            </section>
                        </div>

---

### Syslog Server Configuration

**Title:** Syslog Server Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Syslog Server Setup</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# logging [syslog-server-ip]<br>
                                        Router(config)# logging trap [severity-level]<br>
                                        Router(config)# logging facility [facility-type]<br>
                                        Router(config)# logging source-interface [interface]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Syslog Benefits</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Centralized log collection and storage</li>
                                    <li>Real-time monitoring of network events</li>
                                    <li>Historical analysis and troubleshooting</li>
                                    <li>Compliance and audit trail maintenance</li>
                                    <li>Automated alerting on critical events</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure devices to send logs to syslog server</li>
                                    <li>Set appropriate logging levels and facilities</li>
                                    <li>Configure source interface for consistent logging</li>
                                    <li>Verify syslog functionality and troubleshoot issues</li>
                                </ul>
                            </section>
                        </div>

---

### NTP Server Configuration

**Title:** NTP Server Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">NTP Server Setup</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ntp master [stratum]<br>
                                        Router(config)# ntp server [upstream-ntp-server]<br>
                                        Router(config)# ntp authenticate<br>
                                        Router(config)# ntp authentication-key [key-id] md5 [password]<br>
                                        Router(config)# ntp trusted-key [key-id]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">NTP Stratum Levels</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Stratum 0:</strong> Reference clocks (atomic, GPS)</li>
                                    <li><strong>Stratum 1:</strong> Primary servers connected to Stratum 0</li>
                                    <li><strong>Stratum 2:</strong> Secondary servers sync to Stratum 1</li>
                                    <li><strong>Stratum 3-15:</strong> Lower accuracy, sync to higher stratum</li>
                                    <li>Lower stratum number = higher accuracy and priority</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure router as NTP server with appropriate stratum</li>
                                    <li>Understand NTP hierarchy and stratum levels</li>
                                    <li>Configure NTP authentication for security</li>
                                    <li>Verify NTP server operation and client synchronization</li>
                                </ul>
                            </section>
                        </div>

---

## DNS Services

### DNS Client Configuration

**Title:** DNS Client Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DNS Configuration Commands</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip domain-name [domain]<br>
                                        Router(config)# ip name-server [dns-server]<br>
                                        Router(config)# ip domain-lookup<br>
                                        Router(config)# ip host [hostname] [ip-address]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DNS Resolution Process</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Check local host table first</li>
                                    <li>Query configured DNS servers</li>
                                    <li>Receive A record with IP address</li>
                                    <li>Cache result for future queries</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure DNS client settings</li>
                                    <li>Create static host entries</li>
                                    <li>Verify DNS resolution functionality</li>
                                    <li>Troubleshoot name resolution issues</li>
                                </ul>
                            </section>
                        </div>

---

### DNS Server Configuration

**Title:** DNS Server Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DNS Server Setup</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip dns server<br>
                                        Router(config)# ip host [hostname] [ip-address]<br>
                                        Router(config)# ip domain-name [domain]<br>
                                        Router(config)# ip name-server [upstream-dns]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">DNS Server Functions</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Resolve domain names to IP addresses</li>
                                    <li>Cache DNS responses for performance</li>
                                    <li>Forward queries to upstream DNS servers</li>
                                    <li>Maintain local host table entries</li>
                                    <li>Support recursive and iterative queries</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Enable DNS server functionality on routers</li>
                                    <li>Configure static host entries</li>
                                    <li>Set up DNS forwarding to external servers</li>
                                    <li>Verify DNS server operation</li>
                                </ul>
                            </section>
                        </div>

---

## General IP Services

### SNMP Community Strings

**Title:** SNMP Community Strings - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SNMP Community Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# snmp-server community [string] RO<br>
                                        Router(config)# snmp-server community [string] RW<br>
                                        Router(config)# snmp-server location [location]<br>
                                        Router(config)# snmp-server contact [contact-info]
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Community String Types</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>RO (Read-Only):</strong> Allows GET operations only</li>
                                    <li><strong>RW (Read-Write):</strong> Allows GET and SET operations</li>
                                    <li>Default communities: "public" (RO), "private" (RW)</li>
                                    <li>Use custom, secure community strings in production</li>
                                    <li>Community acts as password for SNMP access</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure SNMP communities with proper access levels</li>
                                    <li>Understand security implications of community strings</li>
                                    <li>Set device location and contact information</li>
                                    <li>Verify SNMP configuration and accessibility</li>
                                </ul>
                            </section>
                        </div>

---

### SNMP Versions

**Title:** SNMP Versions - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SNMP Version Comparison</h3>
                                <div class="bg-slate-800 p-4 rounded-lg space-y-3">
                                    <div><code class="text-red-400">SNMPv1:</code> <span class="text-slate-300">Basic functionality, community-based, no encryption</span></div>
                                    <div><code class="text-yellow-400">SNMPv2c:</code> <span class="text-slate-300">Enhanced operations, bulk retrieval, still community-based</span></div>
                                    <div><code class="text-green-400">SNMPv3:</code> <span class="text-slate-300">Security features, authentication, encryption, user-based</span></div>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SNMPv3 Security Features</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Authentication:</strong> MD5 or SHA hash verification</li>
                                    <li><strong>Privacy:</strong> DES or AES encryption of SNMP packets</li>
                                    <li><strong>User-based Security:</strong> Individual user credentials</li>
                                    <li><strong>Message Integrity:</strong> Prevents packet tampering</li>
                                    <li><strong>Access Control:</strong> Fine-grained permissions</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand differences between SNMP versions</li>
                                    <li>Know security improvements in SNMPv3</li>
                                    <li>Configure appropriate SNMP version for security requirements</li>
                                    <li>Troubleshoot SNMP connectivity issues</li>
                                </ul>
                            </section>
                        </div>

---

### SSH Configuration

**Title:** SSH Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SSH Setup Commands</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# ip domain-name [domain]<br>
                                        Router(config)# crypto key generate rsa<br>
                                        Router(config)# username [user] privilege 15 secret [password]<br>
                                        Router(config)# line vty 0 15<br>
                                        Router(config-line)# transport input ssh<br>
                                        Router(config-line)# login local
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">SSH Security Benefits</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>All data is encrypted during transmission</li>
                                    <li>Strong authentication using RSA key pairs</li>
                                    <li>Protection against eavesdropping and man-in-the-middle attacks</li>
                                    <li>Secure remote management of network devices</li>
                                    <li>Industry standard for secure remote access</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure SSH with RSA key generation</li>
                                    <li>Set up local user authentication</li>
                                    <li>Restrict VTY lines to SSH only</li>
                                    <li>Verify SSH functionality and troubleshoot connection issues</li>
                                </ul>
                            </section>
                        </div>

---

### Telnet Configuration

**Title:** Telnet Configuration - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Telnet Configuration</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        Router(config)# line vty 0 15<br>
                                        Router(config-line)# transport input telnet<br>
                                        Router(config-line)# password [password]<br>
                                        Router(config-line)# login<br><br>
                                        ! Or with local users<br>
                                        Router(config-line)# login local
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Telnet Security Concerns</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>⚠️ No Encryption:</strong> All data sent in clear text</li>
                                    <li><strong>⚠️ Password Exposure:</strong> Passwords visible to network sniffers</li>
                                    <li><strong>⚠️ Man-in-the-Middle:</strong> Susceptible to session hijacking</li>
                                    <li><strong>⚠️ Eavesdropping:</strong> Commands and responses easily monitored</li>
                                    <li>Should only be used in secure, trusted networks</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure Telnet access on VTY lines</li>
                                    <li>Understand security limitations of Telnet</li>
                                    <li>Know when SSH should be preferred over Telnet</li>
                                    <li>Configure both password and local authentication</li>
                                </ul>
                            </section>
                        </div>

---

### FTP and TFTP

**Title:** FTP and TFTP - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">FTP (File Transfer Protocol)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Ports:</strong> Control (21), Data (20)</li>
                                    <li><strong>Authentication:</strong> Username and password required</li>
                                    <li><strong>Security:</strong> Plain text transmission (not secure)</li>
                                    <li><strong>Features:</strong> Directory listing, file management</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">TFTP (Trivial File Transfer Protocol)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Port:</strong> UDP 69</li>
                                    <li><strong>Authentication:</strong> None (connectionless)</li>
                                    <li><strong>Features:</strong> Simple, lightweight protocol</li>
                                    <li><strong>Usage:</strong> Firmware updates, configuration backups</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration Examples</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        ! TFTP Configuration<br>
                                        Router# copy running-config tftp://192.168.1.100/config.txt<br>
                                        Router# copy tftp://192.168.1.100/ios.bin flash:<br><br>
                                        ! FTP Configuration<br>
                                        Router(config)# ip ftp username admin<br>
                                        Router(config)# ip ftp password cisco123
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand FTP vs TFTP differences</li>
                                    <li>Configure file transfers using both protocols</li>
                                    <li>Know common use cases for each protocol</li>
                                    <li>Verify file transfer operations</li>
                                </ul>
                            </section>
                        </div>

---

### HTTP and HTTPS

**Title:** HTTP and HTTPS - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">HTTP (HyperText Transfer Protocol)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Port:</strong> TCP 80</li>
                                    <li><strong>Security:</strong> Plain text transmission</li>
                                    <li><strong>Usage:</strong> Web browsing, REST APIs</li>
                                    <li><strong>Methods:</strong> GET, POST, PUT, DELETE</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">HTTPS (HTTP Secure)</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Port:</strong> TCP 443</li>
                                    <li><strong>Security:</strong> TLS/SSL encryption</li>
                                    <li><strong>Certificates:</strong> Digital certificates for authentication</li>
                                    <li><strong>Usage:</strong> Secure web management, APIs</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Configuration Examples</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <code class="text-green-400">
                                        ! Enable HTTP/HTTPS Server<br>
                                        Router(config)# ip http server<br>
                                        Router(config)# ip http secure-server<br>
                                        Router(config)# ip http authentication local<br><br>
                                        ! Disable HTTP (Security Best Practice)<br>
                                        Router(config)# no ip http server
                                    </code>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Configure HTTP/HTTPS services on network devices</li>
                                    <li>Understand security implications of each protocol</li>
                                    <li>Know when to use HTTP vs HTTPS</li>
                                    <li>Recognize REST API communication over HTTP/HTTPS</li>
                                </ul>
                            </section>
                        </div>

---

### QoS Basics

**Title:** QoS Basics - CCNA 200-301 Guide

**Content:**
<div class="space-y-6">
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">QoS Fundamentals</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Classification:</strong> Identify and categorize traffic types</li>
                                    <li><strong>Marking:</strong> Tag packets with QoS indicators</li>
                                    <li><strong>Queuing:</strong> Organize traffic into priority queues</li>
                                    <li><strong>Shaping:</strong> Control traffic flow rates</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">QoS Markings</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>DSCP:</strong> Differentiated Services Code Point (Layer 3)</li>
                                    <li><strong>IP Precedence:</strong> 3-bit priority field in IP header</li>
                                    <li><strong>CoS:</strong> Class of Service (802.1Q Layer 2)</li>
                                    <li><strong>Trust Boundaries:</strong> Where to trust existing markings</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">Traffic Types and Priorities</h3>
                                <div class="bg-slate-800 p-4 rounded-lg">
                                    <div class="space-y-2 text-sm">
                                        <div><span class="text-red-400 font-bold">Voice:</span> <span class="text-slate-300">Highest priority, low latency, low jitter</span></div>
                                        <div><span class="text-orange-400 font-bold">Video:</span> <span class="text-slate-300">High priority, bandwidth intensive</span></div>
                                        <div><span class="text-blue-400 font-bold">Critical Data:</span> <span class="text-slate-300">Important business applications</span></div>
                                        <div><span class="text-green-400 font-bold">Best Effort:</span> <span class="text-slate-300">Default traffic, no guarantees</span></div>
                                        <div><span class="text-gray-400 font-bold">Bulk Data:</span> <span class="text-slate-300">Lowest priority, background transfers</span></div>
                                    </div>
                                </div>
                            </section>
                            
                            <section>
                                <h3 class="text-xl font-semibold text-blue-400 mb-3">CCNA Exam Focus</h3>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li>Understand QoS concepts and terminology</li>
                                    <li>Know different traffic types and priority levels</li>
                                    <li>Recognize QoS marking standards (DSCP, CoS)</li>
                                    <li>Identify where QoS should be implemented</li>
                                </ul>
                            </section>
                        </div>

---

