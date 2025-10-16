/**
 * Section 4: IP Services - Detailed Explanations
 * CCNA 200-301 Exam Topics - Comprehensive Coverage
 */

const SECTION4_DETAILS = {
    // 4.1 NAT Configuration - Static NAT
    "Static NAT": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">4.1.a: Static NAT Configuration</h3>
            <p>Static NAT creates permanent one-to-one mappings between private and public IP addresses. This mapping persists until manually removed, making it ideal for servers requiring consistent external access.</p>
            
            <h4 style="color: #58D4FF;">Basic Static NAT Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure static NAT mapping</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static 192.168.1.10 203.0.113.5</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static 192.168.1.20 203.0.113.6</span>

<span style="color: #6A9955;"># Configure inside interface</span>
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">ip nat inside</span>

<span style="color: #6A9955;"># Configure outside interface</span>
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0/1</span>
Router(config-if)# <span style="color: #DCDCAA;">ip nat outside</span>
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">NAT Address Terminology</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Inside Local</td><td style="padding: 8px; border-bottom: 1px solid #444;">Private IP address (192.168.1.10)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Source device's actual IP</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Inside Global</td><td style="padding: 8px; border-bottom: 1px solid #444;">Public IP address (203.0.113.5)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Translated public IP</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Outside Local</td><td style="padding: 8px; border-bottom: 1px solid #444;">External host IP as seen by inside</td><td style="padding: 8px; border-bottom: 1px solid #444;">Usually same as Outside Global</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Outside Global</td><td style="padding: 8px;">External host's actual IP</td><td style="padding: 8px;">Internet server's real IP</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Static NAT with Port Specification</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Map specific TCP ports</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.10 80 203.0.113.5 8080</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.10 443 203.0.113.5 8443</span>

<span style="color: #6A9955;"># Map UDP services</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static udp 192.168.1.15 53 203.0.113.5 5353</span>
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">Bidirectional Communication</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Outbound Traffic:</strong> Inside host initiates connection to internet</li>
                <li><strong style="color: #3b82f6;">Inbound Traffic:</strong> External hosts can initiate connections to inside hosts</li>
                <li><strong style="color: #f59e0b;">Server Applications:</strong> Perfect for web servers, mail servers, DNS servers</li>
                <li><strong style="color: #ef4444;">Security Consideration:</strong> Exposes internal hosts to external access</li>
            </ul>
            
            <h4 style="color: #58D4FF;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show ip nat translations</span>
Router# <span style="color: #DCDCAA;">show ip nat translations verbose</span>
Router# <span style="color: #DCDCAA;">show ip nat statistics</span>
Router# <span style="color: #DCDCAA;">show running-config | include nat</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the four NAT address types and their relationships</li>
                    <li>Static NAT provides permanent, bidirectional connectivity</li>
                    <li>Remember to configure both inside and outside interface designations</li>
                    <li>Static NAT with ports enables service-specific translations</li>
                </ul>
            </div>
        </div>
    `,

    "Dynamic NAT Pool": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.1.b: Dynamic NAT with Address Pools</h3>
            <p>Dynamic NAT uses a pool of public IP addresses to create temporary mappings as needed. When inside hosts initiate connections, they receive the next available public IP from the pool.</p>
            
            <h4 style="color: #58D68D;">Complete Dynamic NAT Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Step 1: Create NAT pool</span>
Router(config)# <span style="color: #DCDCAA;">ip nat pool INTERNET_POOL 203.0.113.10 203.0.113.20 netmask 255.255.255.0</span>

<span style="color: #6A9955;"># Step 2: Create access list for inside addresses</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 192.168.1.0 0.0.0.255</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 192.168.2.0 0.0.0.255</span>

<span style="color: #6A9955;"># Step 3: Enable NAT with pool</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source list 10 pool INTERNET_POOL</span>

<span style="color: #6A9955;"># Step 4: Configure interfaces</span>
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">ip nat inside</span>
Router(config)# <span style="color: #DCDCAA;">interface serial0/0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">ip nat outside</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Pool Management Features</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">First Available</td><td style="padding: 8px; border-bottom: 1px solid #444;">Assigns lowest available IP in pool</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Timeout</td><td style="padding: 8px; border-bottom: 1px solid #444;">Idle connections release IP back to pool</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Pool Exhaustion</td><td style="padding: 8px; border-bottom: 1px solid #444;">New connections dropped when pool full</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Rotation</td><td style="padding: 8px;">Released IPs become available for new connections</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Advanced Pool Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure pool with prefix length</span>
Router(config)# <span style="color: #DCDCAA;">ip nat pool WEB_POOL 203.0.113.50 203.0.113.60 prefix-length 28</span>

<span style="color: #6A9955;"># Pool with type rotary (round-robin)</span>
Router(config)# <span style="color: #DCDCAA;">ip nat pool ROTARY_POOL 203.0.113.100 203.0.113.105 netmask 255.255.255.0 type rotary</span>

<span style="color: #6A9955;"># Configure NAT timeout</span>
Router(config)# <span style="color: #DCDCAA;">ip nat translation timeout 3600</span>
Router(config)# <span style="color: #DCDCAA;">ip nat translation tcp-timeout 86400</span>
Router(config)# <span style="color: #DCDCAA;">ip nat translation udp-timeout 300</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Pool Monitoring and Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Monitor pool utilization</span>
Router# <span style="color: #DCDCAA;">show ip nat pool</span>
Router# <span style="color: #DCDCAA;">show ip nat translations</span>
Router# <span style="color: #DCDCAA;">show ip nat statistics</span>

<span style="color: #6A9955;"># Clear specific translations</span>
Router# <span style="color: #DCDCAA;">clear ip nat translation *</span>
Router# <span style="color: #DCDCAA;">clear ip nat translation inside 192.168.1.10</span>
</code>
            </pre>
            
            <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 10px 0; color: #92400E;">
                <p><strong>Pool Exhaustion Warning:</strong> When all pool addresses are in use, new outbound connections will fail. Monitor pool utilization and size pools appropriately for expected traffic.</p>
            </div>
            
            <h4 style="color: #58D68D;">Use Cases and Limitations</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Branch Offices:</strong> Multiple users sharing limited public IP addresses</li>
                <li><strong style="color: #3b82f6;">Temporary Access:</strong> Dynamic assignments for non-permanent connections</li>
                <li><strong style="color: #f59e0b;">Scalability Limit:</strong> One-to-one mapping limits concurrent users to pool size</li>
                <li><strong style="color: #ef4444;">Cost Consideration:</strong> Requires multiple public IP addresses (expensive)</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Dynamic NAT requires pool creation, ACL definition, and interface configuration</li>
                    <li>Pool exhaustion prevents new connections when all IPs are in use</li>
                    <li>Timeout values control how long translations remain active</li>
                    <li>Understand one-to-one mapping limitation versus PAT efficiency</li>
                </ul>
            </div>
        </div>
    `,

    "PAT (Overload)": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.1.c: Port Address Translation (PAT/Overload)</h3>
            <p>PAT allows many internal devices to share a single public IP address by using port number translation. This is the most common NAT implementation due to IPv4 address conservation.</p>
            
            <h4 style="color: #F5B041;">PAT with Interface Overload</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure PAT using outside interface IP</span>
Router(config)# <span style="color: #DCDCAA;">access-list 1 permit 192.168.0.0 0.0.255.255</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source list 1 interface gigabitethernet0/0/1 overload</span>

<span style="color: #6A9955;"># Configure inside interface</span>
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">ip nat inside</span>

<span style="color: #6A9955;"># Configure outside interface</span>
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0/1</span>
Router(config-if)# <span style="color: #DCDCAA;">ip nat outside</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">PAT with Pool Overload</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create pool for PAT</span>
Router(config)# <span style="color: #DCDCAA;">ip nat pool PAT_POOL 203.0.113.1 203.0.113.3 netmask 255.255.255.0</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 192.168.0.0 0.0.255.255</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source list 10 pool PAT_POOL overload</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Port Translation Mechanics</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p style="color: #E0E0E0; margin-bottom: 15px;"><strong>Translation Process:</strong></p>
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; color: #10b981; font-weight: bold;">Original Packet</td>
                        <td style="padding: 8px; color: #3b82f6; font-weight: bold;">Translated Packet</td>
                    </tr>
                    <tr><td style="padding: 8px;">192.168.1.10:1024 → 8.8.8.8:53</td><td style="padding: 8px;">203.0.113.1:1024 → 8.8.8.8:53</td></tr>
                    <tr><td style="padding: 8px;">192.168.1.20:1024 → 8.8.8.8:53</td><td style="padding: 8px;">203.0.113.1:1025 → 8.8.8.8:53</td></tr>
                    <tr><td style="padding: 8px;">192.168.1.30:1024 → 1.1.1.1:53</td><td style="padding: 8px;">203.0.113.1:1026 → 1.1.1.1:53</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Port Range Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure port range for PAT</span>
Router(config)# <span style="color: #DCDCAA;">ip nat settings port-range 1024 65535</span>

<span style="color: #6A9955;"># Set maximum PAT entries</span>
Router(config)# <span style="color: #DCDCAA;">ip nat settings max-entries 65536</span>

<span style="color: #6A9955;"># Configure PAT mapping behavior</span>
Router(config)# <span style="color: #DCDCAA;">ip nat settings mode endpoint-independent</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">PAT Scalability and Limitations</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f39c12;">
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong style="color: #10b981;">Theoretical Limit:</strong> ~65,000 concurrent sessions per public IP</li>
                    <li><strong style="color: #3b82f6;">Practical Limit:</strong> ~4,000-8,000 concurrent users (varies by traffic pattern)</li>
                    <li><strong style="color: #f59e0b;">Port Conflicts:</strong> Same inside port to same destination requires port rewrite</li>
                    <li><strong style="color: #ef4444;">Protocol Limitations:</strong> Some protocols don't work well with PAT (FTP, TFTP)</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Advanced PAT Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Detailed translation information</span>
Router# <span style="color: #DCDCAA;">show ip nat translations verbose</span>
Router# <span style="color: #DCDCAA;">show ip nat statistics</span>

<span style="color: #6A9955;"># Debug PAT operations</span>
Router# <span style="color: #DCDCAA;">debug ip nat detailed</span>
Router# <span style="color: #DCDCAA;">debug ip nat</span>

<span style="color: #6A9955;"># Monitor port utilization</span>
Router# <span style="color: #DCDCAA;">show ip nat translations | include tcp</span>
Router# <span style="color: #DCDCAA;">show ip nat translations | count</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Real-World Implementation</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Home Networks:</strong> Single ISP IP shared by all household devices</li>
                <li><strong style="color: #3b82f6;">Small Business:</strong> Cost-effective internet access for entire organization</li>
                <li><strong style="color: #f59e0b;">Branch Offices:</strong> Efficient use of limited WAN IP allocations</li>
                <li><strong style="color: #ef4444;">Service Provider:</strong> CGNAT (Carrier-Grade NAT) for customer aggregation</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>PAT uses port numbers to multiplex many internal hosts to one public IP</li>
                    <li>The "overload" keyword enables PAT functionality</li>
                    <li>PAT can use interface IP or pool IP addresses</li>
                    <li>Understand port conflict resolution and session limits</li>
                </ul>
            </div>
        </div>
    `,

    "NAT Troubleshooting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.1.d: NAT Troubleshooting & Verification</h3>
            <p>Effective NAT troubleshooting requires understanding translation tables, debug commands, and common failure scenarios. Systematic verification ensures reliable NAT operations.</p>
            
            <h4 style="color: #EC7063;">Essential Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Display active NAT translations</span>
Router# <span style="color: #DCDCAA;">show ip nat translations</span>
Router# <span style="color: #DCDCAA;">show ip nat translations verbose</span>
Router# <span style="color: #DCDCAA;">show ip nat translations inside 192.168.1.10</span>

<span style="color: #6A9955;"># NAT statistics and counters</span>
Router# <span style="color: #DCDCAA;">show ip nat statistics</span>
Router# <span style="color: #DCDCAA;">show ip nat pool</span>
Router# <span style="color: #DCDCAA;">show access-lists</span>

<span style="color: #6A9955;"># Interface NAT configuration</span>
Router# <span style="color: #DCDCAA;">show ip interface brief | include nat</span>
Router# <span style="color: #DCDCAA;">show running-config | section nat</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Translation Table Analysis</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p style="color: #E0E0E0; margin-bottom: 10px;"><strong>Sample Translation Output:</strong></p>
                <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 5px; font-family: monospace; font-size: 0.8em;">
<code style="color: #C0C0C0;">
Pro Inside global    Inside local     Outside local    Outside global
tcp 203.0.113.1:1024 192.168.1.10:1024 8.8.8.8:53     8.8.8.8:53
tcp 203.0.113.1:1025 192.168.1.20:1024 1.1.1.1:53     1.1.1.1:53
--- 203.0.113.5:---  192.168.1.100:--- ---             ---
</code>
                </pre>
                <ul style="color: #B0B0B0; margin-top: 10px;">
                    <li><strong style="color: #10b981;">Dynamic entries:</strong> Show protocol, ports, and destination</li>
                    <li><strong style="color: #3b82f6;">Static entries:</strong> Show permanent mappings with "---" for unused fields</li>
                    <li><strong style="color: #f59e0b;">Timeout indicators:</strong> Age and remaining time for dynamic entries</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Debug Commands and Analysis</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable NAT debugging</span>
Router# <span style="color: #DCDCAA;">debug ip nat</span>
Router# <span style="color: #DCDCAA;">debug ip nat detailed</span>

<span style="color: #6A9955;"># Conditional debugging for specific hosts</span>
Router# <span style="color: #DCDCAA;">debug ip nat 192.168.1.10</span>

<span style="color: #6A9955;"># Monitor specific protocols</span>
Router# <span style="color: #DCDCAA;">debug ip packet detail 101</span>
Router(config)# <span style="color: #DCDCAA;">access-list 101 permit ip host 192.168.1.10 any</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Common NAT Issues and Solutions</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; color: #ef4444; font-weight: bold;">Problem</td>
                        <td style="padding: 8px; color: #f59e0b; font-weight: bold;">Symptoms</td>
                        <td style="padding: 8px; color: #10b981; font-weight: bold;">Solution</td>
                    </tr>
                    <tr><td style="padding: 8px;">Missing inside/outside designation</td><td style="padding: 8px;">No translations created</td><td style="padding: 8px;">Configure "ip nat inside/outside"</td></tr>
                    <tr><td style="padding: 8px;">Pool exhaustion</td><td style="padding: 8px;">New connections fail</td><td style="padding: 8px;">Expand pool or use PAT</td></tr>
                    <tr><td style="padding: 8px;">ACL mismatch</td><td style="padding: 8px;">Some hosts not translated</td><td style="padding: 8px;">Verify ACL permits correct subnets</td></tr>
                    <tr><td style="padding: 8px;">Routing issues</td><td style="padding: 8px;">One-way connectivity</td><td style="padding: 8px;">Check return route for translated IPs</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Clearing and Resetting NAT</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Clear all NAT translations</span>
Router# <span style="color: #DCDCAA;">clear ip nat translation *</span>

<span style="color: #6A9955;"># Clear specific translations</span>
Router# <span style="color: #DCDCAA;">clear ip nat translation inside 192.168.1.10</span>
Router# <span style="color: #DCDCAA;">clear ip nat translation outside 203.0.113.5</span>

<span style="color: #6A9955;"># Clear NAT statistics</span>
Router# <span style="color: #DCDCAA;">clear ip nat statistics</span>

<span style="color: #6A9955;"># Force translation table refresh</span>
Router# <span style="color: #DCDCAA;">clear ip nat translation forced</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Performance Monitoring</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #e74c3c;">
                <h5 style="color: #EC7063; margin-top: 0;">Key Performance Indicators:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Translation Table Size:</strong> Monitor current vs. maximum entries</li>
                    <li><strong>Hit/Miss Ratios:</strong> Track successful vs. failed translations</li>
                    <li><strong>Pool Utilization:</strong> Percentage of pool addresses in use</li>
                    <li><strong>Timeout Events:</strong> Frequency of translation expiration</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Systematic Troubleshooting Process</h4>
            <ol style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Verify Configuration:</strong> Check NAT rules, ACLs, and interface designations</li>
                <li><strong style="color: #3b82f6;">Check Translation Table:</strong> Confirm expected mappings exist</li>
                <li><strong style="color: #6366f1;">Test Connectivity:</strong> Ping and telnet from inside hosts</li>
                <li><strong style="color: #f59e0b;">Monitor Debug Output:</strong> Analyze packet flow and translation process</li>
                <li><strong style="color: #ef4444;">Verify Routing:</strong> Ensure return paths for translated addresses</li>
            </ol>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Use "show ip nat translations" to verify active translations</li>
                    <li>Know how to clear NAT translations and statistics</li>
                    <li>Understand common NAT failure scenarios and solutions</li>
                    <li>Remember that both inside/outside interface configuration is required</li>
                </ul>
            </div>
        </div>
    `,

    "NAT Security & Port Forwarding": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">4.1.e: NAT Security & Port Forwarding</h3>
            <p>NAT provides inherent security benefits while port forwarding enables controlled external access to internal services. Understanding security implications is crucial for safe NAT deployment.</p>
            
            <h4 style="color: #AF7AC5;">Port Forwarding Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Forward external port 8080 to internal web server port 80</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.10 80 interface gigabitethernet0/0/1 8080</span>

<span style="color: #6A9955;"># Forward HTTPS traffic to internal server</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.10 443 203.0.113.5 443</span>

<span style="color: #6A9955;"># Forward SSH access to specific internal host</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.20 22 203.0.113.5 2222</span>

<span style="color: #6A9955;"># Forward UDP services (DNS)</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static udp 192.168.1.15 53 203.0.113.5 53</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">NAT Security Benefits</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Address Hiding</td><td style="padding: 8px; border-bottom: 1px solid #444;">Internal network structure obscured from external view</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Inbound Filtering</td><td style="padding: 8px; border-bottom: 1px solid #444;">Unsolicited inbound connections blocked by default</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">State Tracking</td><td style="padding: 8px; border-bottom: 1px solid #444;">Only established connections allow return traffic</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Port Randomization</td><td style="padding: 8px;">PAT randomizes external ports making attacks harder</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">Access Control with NAT</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Restrict NAT to specific internal subnets</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 192.168.1.0 0.0.0.255</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 deny 192.168.100.0 0.0.0.255</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source list 10 interface gi0/0/1 overload</span>

<span style="color: #6A9955;"># Time-based NAT access control</span>
Router(config)# <span style="color: #DCDCAA;">time-range BUSINESS_HOURS</span>
Router(config-time-range)# <span style="color: #DCDCAA;">periodic weekdays 8:00 to 18:00</span>
Router(config)# <span style="color: #DCDCAA;">access-list 11 permit 192.168.1.0 0.0.0.255 time-range BUSINESS_HOURS</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">DMZ and Security Zones</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9b59b6;">
                <h5 style="color: #AF7AC5; margin-top: 0;">DMZ Implementation with NAT:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Public Servers:</strong> Place in DMZ with static NAT mappings</li>
                    <li><strong>Internal Network:</strong> Use PAT for outbound internet access</li>
                    <li><strong>Segmentation:</strong> Separate ACLs control inter-zone traffic</li>
                    <li><strong>Monitoring:</strong> Log and audit all port forwarding rules</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Advanced Port Forwarding Scenarios</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Multiple services on same internal host</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.10 80 203.0.113.5 80</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.10 443 203.0.113.5 443</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.10 22 203.0.113.5 2222</span>

<span style="color: #6A9955;"># Load balancing with rotary pool</span>
Router(config)# <span style="color: #DCDCAA;">ip nat pool WEB_SERVERS 192.168.1.10 192.168.1.12 netmask 255.255.255.0 type rotary</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside destination list 20 pool WEB_SERVERS</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Security Considerations and Best Practices</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Minimal Exposure:</strong> Only forward ports that are absolutely necessary</li>
                <li><strong style="color: #3b82f6;">Non-Standard Ports:</strong> Use non-standard external ports to reduce automated attacks</li>
                <li><strong style="color: #6366f1;">Access Control:</strong> Combine NAT with ACLs for granular control</li>
                <li><strong style="color: #f59e0b;">Monitoring:</strong> Log and monitor all forwarded connections</li>
                <li><strong style="color: #ef4444;">Regular Audits:</strong> Review and remove unnecessary port forwarding rules</li>
            </ul>
            
            <h4 style="color: #AF7AC5;">NAT and VPN Considerations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># IPSec VPN NAT traversal</span>
Router(config)# <span style="color: #DCDCAA;">crypto isakmp nat-traversal</span>

<span style="color: #6A9955;"># PPTP VPN support</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source static tcp 192.168.1.50 1723 203.0.113.5 1723</span>

<span style="color: #6A9955;"># GRE protocol forwarding</span>
Router(config)# <span style="color: #DCDCAA;">access-list 101 permit gre host 192.168.1.50 any</span>
Router(config)# <span style="color: #DCDCAA;">ip nat inside source list 101 interface gi0/0/1 overload</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Common Security Misconfigurations</h4>
            <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 10px 0; color: #92400E;">
                <ul style="margin: 0;">
                    <li><strong>Wide Open Forwarding:</strong> Avoid forwarding entire port ranges unnecessarily</li>
                    <li><strong>Default Credentials:</strong> Ensure forwarded services don't use default passwords</li>
                    <li><strong>Unencrypted Protocols:</strong> Be cautious forwarding telnet, FTP, HTTP</li>
                    <li><strong>DMZ Bypass:</strong> Don't allow direct internal network access from DMZ</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Port forwarding enables external access to specific internal services</li>
                    <li>NAT provides inherent security through address hiding and state tracking</li>
                    <li>Combine NAT with ACLs for comprehensive access control</li>
                    <li>Understand security implications of port forwarding and DMZ placement</li>
                </ul>
            </div>
        </div>
    `,

    // 4.2 NTP Configuration
    "NTP Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.2.a: Network Time Protocol Fundamentals</h3>
            <p>Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks. NTP is essential for accurate timestamps in logs, authentication protocols, and network troubleshooting.</p>
            
            <h4 style="color: #F5B041;">NTP Stratum Hierarchy</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F39C12; font-weight: bold;">Stratum Level</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F39C12; font-weight: bold;">Description</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F39C12; font-weight: bold;">Accuracy</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Stratum 0</td><td style="padding: 8px; border-bottom: 1px solid #444;">Reference clocks (atomic, GPS)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Highest (nanoseconds)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Stratum 1</td><td style="padding: 8px; border-bottom: 1px solid #444;">Primary servers directly connected to Stratum 0</td><td style="padding: 8px; border-bottom: 1px solid #444;">Very High (microseconds)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Stratum 2-15</td><td style="padding: 8px; border-bottom: 1px solid #444;">Secondary servers synchronized to higher stratum</td><td style="padding: 8px; border-bottom: 1px solid #444;">Good (milliseconds)</td></tr>
                    <tr><td style="padding: 8px;">Stratum 16</td><td style="padding: 8px;">Unsynchronized/unreachable</td><td style="padding: 8px;">No synchronization</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">NTP Operation Modes</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Client Mode:</strong> Synchronizes local clock with remote NTP server</li>
                <li><strong>Server Mode:</strong> Provides time service to other NTP clients</li>
                <li><strong>Peer Mode:</strong> Symmetric relationship for backup/redundancy</li>
                <li><strong>Broadcast Mode:</strong> One-way time distribution for LANs</li>
            </ul>
            
            <h4 style="color: #F5B041;">Time Accuracy Requirements</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Network requirements for accurate time</span>
Authentication protocols: <span style="color: #F39C12;">±5 seconds maximum</span>
Log correlation: <span style="color: #F39C12;">±1 second recommended</span>
Certificate validation: <span style="color: #F39C12;">±5 minutes maximum</span>
Network troubleshooting: <span style="color: #F39C12;">Sub-second preferred</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand stratum hierarchy and why lower numbers mean higher accuracy</li>
                    <li>Know the difference between reference clocks and network time servers</li>
                    <li>Recognize why accurate time is critical for network security and troubleshooting</li>
                    <li>Identify appropriate stratum levels for different network scenarios</li>
                </ul>
            </div>
        </div>
    `,

    "NTP Client Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.2.b: NTP Client Configuration</h3>
            <p>Configure network devices as NTP clients to synchronize with authoritative time servers. Proper client configuration ensures accurate timekeeping across the network infrastructure.</p>
            
            <h4 style="color: #58D68D;">Basic NTP Client Setup</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure primary and backup NTP servers</span>
Router(config)# <span style="color: #DCDCAA;">ntp server 129.6.15.28</span>
Router(config)# <span style="color: #DCDCAA;">ntp server 132.163.96.1 prefer</span>
Router(config)# <span style="color: #DCDCAA;">ntp server pool.ntp.org iburst</span>

<span style="color: #6A9955;"># Set source interface for NTP packets</span>
Router(config)# <span style="color: #DCDCAA;">ntp source loopback0</span>

<span style="color: #6A9955;"># Update hardware calendar from NTP</span>
Router(config)# <span style="color: #DCDCAA;">ntp update-calendar</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">NTP Authentication Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable NTP authentication</span>
Router(config)# <span style="color: #DCDCAA;">ntp authenticate</span>

<span style="color: #6A9955;"># Define authentication keys</span>
Router(config)# <span style="color: #DCDCAA;">ntp authentication-key 1 md5 MySecretKey123</span>
Router(config)# <span style="color: #DCDCAA;">ntp authentication-key 2 md5 BackupKey456</span>

<span style="color: #6A9955;"># Mark keys as trusted</span>
Router(config)# <span style="color: #DCDCAA;">ntp trusted-key 1</span>
Router(config)# <span style="color: #DCDCAA;">ntp trusted-key 2</span>

<span style="color: #6A9955;"># Associate keys with servers</span>
Router(config)# <span style="color: #DCDCAA;">ntp server 129.6.15.28 key 1</span>
Router(config)# <span style="color: #DCDCAA;">ntp server 132.163.96.1 key 2 prefer</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Advanced Client Options</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #2ECC71; font-weight: bold;">Option</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #2ECC71; font-weight: bold;">Purpose</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #2ECC71; font-weight: bold;">Example</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">prefer</td><td style="padding: 8px; border-bottom: 1px solid #444;">Mark as preferred server</td><td style="padding: 8px; border-bottom: 1px solid #444;">ntp server 1.1.1.1 prefer</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">iburst</td><td style="padding: 8px; border-bottom: 1px solid #444;">Fast initial synchronization</td><td style="padding: 8px; border-bottom: 1px solid #444;">ntp server 1.1.1.1 iburst</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">burst</td><td style="padding: 8px; border-bottom: 1px solid #444;">Send burst of packets</td><td style="padding: 8px; border-bottom: 1px solid #444;">ntp server 1.1.1.1 burst</td></tr>
                    <tr><td style="padding: 8px;">maxpoll</td><td style="padding: 8px;">Maximum poll interval</td><td style="padding: 8px;">ntp server 1.1.1.1 maxpoll 10</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Client Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show ntp status</span>
Router# <span style="color: #DCDCAA;">show ntp associations</span>
Router# <span style="color: #DCDCAA;">show ntp associations detail</span>
Router# <span style="color: #DCDCAA;">show clock detail</span>
Router# <span style="color: #DCDCAA;">show calendar</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure basic NTP client with multiple servers for redundancy</li>
                    <li>Understand the 'prefer' keyword for server selection</li>
                    <li>Implement NTP authentication for security</li>
                    <li>Use verification commands to confirm synchronization status</li>
                </ul>
            </div>
        </div>
    `,

    "NTP Server & Master": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 5px;">4.2.c: NTP Server & Master Configuration</h3>
            <p>Configure routers as NTP servers to provide time services to local networks. Includes master mode for isolated networks and access control for security.</p>
            
            <h4 style="color: #60A5FA;">NTP Master Mode Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure router as NTP master (stratum 3)</span>
Router(config)# <span style="color: #DCDCAA;">ntp master 3</span>

<span style="color: #6A9955;"># Set source interface for NTP packets</span>
Router(config)# <span style="color: #DCDCAA;">ntp source loopback0</span>

<span style="color: #6A9955;"># Alternative: Auto-select best source</span>
Router(config)# <span style="color: #DCDCAA;">ntp source gigabitethernet0/1</span>

<span style="color: #6A9955;"># Configure upstream server while serving locally</span>
Router(config)# <span style="color: #DCDCAA;">ntp server 129.6.15.28</span>
Router(config)# <span style="color: #DCDCAA;">ntp master 8</span>
</code>
            </pre>
            
            <h4 style="color: #60A5FA;">NTP Access Control</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create access control lists for NTP</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 192.168.0.0 0.0.255.255</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 10.0.0.0 0.255.255.255</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 deny any</span>

<span style="color: #6A9955;"># Apply access control to NTP service</span>
Router(config)# <span style="color: #DCDCAA;">ntp access-group serve-only 10</span>

<span style="color: #6A9955;"># More granular access control</span>
Router(config)# <span style="color: #DCDCAA;">ntp access-group peer 20</span>
Router(config)# <span style="color: #DCDCAA;">ntp access-group serve 30</span>
Router(config)# <span style="color: #DCDCAA;">ntp access-group query-only 40</span>
</code>
            </pre>
            
            <h4 style="color: #60A5FA;">NTP Access Group Types</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3B82F6; font-weight: bold;">Access Type</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #3B82F6; font-weight: bold;">Permissions</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #3B82F6; font-weight: bold;">Use Case</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">peer</td><td style="padding: 8px; border-bottom: 1px solid #444;">Full access - sync and control</td><td style="padding: 8px; border-bottom: 1px solid #444;">Trusted NTP peers</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">serve</td><td style="padding: 8px; border-bottom: 1px solid #444;">Time service + queries</td><td style="padding: 8px; border-bottom: 1px solid #444;">Internal network clients</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">serve-only</td><td style="padding: 8px; border-bottom: 1px solid #444;">Time service only</td><td style="padding: 8px; border-bottom: 1px solid #444;">Restricted clients</td></tr>
                    <tr><td style="padding: 8px;">query-only</td><td style="padding: 8px;">Status queries only</td><td style="padding: 8px;">Monitoring systems</td></tr>
                </table>
            </div>
            
            <h4 style="color: #60A5FA;">Server Authentication Setup</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable authentication on server</span>
Router(config)# <span style="color: #DCDCAA;">ntp authenticate</span>

<span style="color: #6A9955;"># Configure authentication keys</span>
Router(config)# <span style="color: #DCDCAA;">ntp authentication-key 10 md5 ServerKey123</span>
Router(config)# <span style="color: #DCDCAA;">ntp trusted-key 10</span>

<span style="color: #6A9955;"># Apply to upstream server connection</span>
Router(config)# <span style="color: #DCDCAA;">ntp server 129.6.15.28 key 10</span>

<span style="color: #6A9955;"># Local clients will authenticate with this key</span>
Router(config)# <span style="color: #DCDCAA;">ntp master 3</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure router as NTP master with appropriate stratum level</li>
                    <li>Implement access control lists to restrict NTP access</li>
                    <li>Understand different access group types and their security implications</li>
                    <li>Use source interface configuration for consistent NTP operation</li>
                </ul>
            </div>
        </div>
    `,

    "NTP Troubleshooting & Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.2.d: NTP Troubleshooting & Security</h3>
            <p>Debug NTP synchronization issues and implement comprehensive security measures. Systematic troubleshooting ensures reliable time services across the network.</p>
            
            <h4 style="color: #EC7063;">Systematic Troubleshooting Process</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ol style="color: #E0E0E0; margin-left: 20px;">
                    <li style="margin-bottom: 8px;"><strong>Connectivity Check:</strong> Verify network reachability to NTP servers</li>
                    <li style="margin-bottom: 8px;"><strong>Configuration Review:</strong> Validate NTP server configuration and authentication</li>
                    <li style="margin-bottom: 8px;"><strong>Status Analysis:</strong> Check synchronization status and associations</li>
                    <li style="margin-bottom: 8px;"><strong>Debug Analysis:</strong> Use debug commands to identify specific issues</li>
                    <li><strong>Security Verification:</strong> Confirm authentication and access controls</li>
                </ol>
            </div>
            
            <h4 style="color: #EC7063;">Essential Debug Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Check overall NTP status</span>
Router# <span style="color: #DCDCAA;">show ntp status</span>
Clock is synchronized, stratum 4, reference is 129.6.15.28

<span style="color: #6A9955;"># Detailed association information</span>
Router# <span style="color: #DCDCAA;">show ntp associations detail</span>

<span style="color: #6A9955;"># Active debug for troubleshooting</span>
Router# <span style="color: #DCDCAA;">debug ntp events</span>
Router# <span style="color: #DCDCAA;">debug ntp packets</span>
Router# <span style="color: #DCDCAA;">debug ntp authentication</span>

<span style="color: #6A9955;"># Disable debug when done</span>
Router# <span style="color: #DCDCAA;">undebug all</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Common NTP Issues & Solutions</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #E74C3C; font-weight: bold;">Issue</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #E74C3C; font-weight: bold;">Symptoms</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #E74C3C; font-weight: bold;">Solution</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">No Synchronization</td><td style="padding: 8px; border-bottom: 1px solid #444;">Clock is unsynchronized</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check server reachability, ACLs</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Authentication Failure</td><td style="padding: 8px; border-bottom: 1px solid #444;">Auth failed messages</td><td style="padding: 8px; border-bottom: 1px solid #444;">Verify keys and trusted-key config</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">High Stratum</td><td style="padding: 8px; border-bottom: 1px solid #444;">Stratum 16 (unsynced)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check server associations</td></tr>
                    <tr><td style="padding: 8px;">Time Drift</td><td style="padding: 8px;">Gradual time deviation</td><td style="padding: 8px;">Add more servers, check hardware</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">NTP Security Best Practices</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Comprehensive NTP security configuration</span>
Router(config)# <span style="color: #DCDCAA;">ntp authenticate</span>
Router(config)# <span style="color: #DCDCAA;">ntp authentication-key 1 md5 StrongPassword123!</span>
Router(config)# <span style="color: #DCDCAA;">ntp trusted-key 1</span>

<span style="color: #6A9955;"># Restrict access to internal networks only</span>
Router(config)# <span style="color: #DCDCAA;">access-list 99 permit 192.168.0.0 0.0.255.255</span>
Router(config)# <span style="color: #DCDCAA;">access-list 99 deny any log</span>
Router(config)# <span style="color: #DCDCAA;">ntp access-group serve-only 99</span>

<span style="color: #6A9955;"># Use source interface for consistency</span>
Router(config)# <span style="color: #DCDCAA;">ntp source loopback0</span>

<span style="color: #6A9955;"># Logging for security monitoring</span>
Router(config)# <span style="color: #DCDCAA;">logging buffered 32768 informational</span>
Router(config)# <span style="color: #DCDCAA;">logging console warnings</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Monitoring & Maintenance</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Regular monitoring commands</span>
Router# <span style="color: #DCDCAA;">show ntp status | include stratum</span>
Router# <span style="color: #DCDCAA;">show ntp associations | include \*</span>

<span style="color: #6A9955;"># Check for authentication issues</span>
Router# <span style="color: #DCDCAA;">show logging | include ntp</span>

<span style="color: #6A9955;"># Performance monitoring</span>
Router# <span style="color: #DCDCAA;">show ntp associations detail | include offset</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Use systematic troubleshooting approach for NTP issues</li>
                    <li>Understand debug commands and their appropriate use</li>
                    <li>Implement comprehensive security with authentication and access control</li>
                    <li>Monitor NTP performance and security through logging</li>
                </ul>
            </div>
        </div>
    `,

    // 4.3 DHCP and DNS
    "DHCP Server Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">4.3.a: DHCP Server Configuration</h3>
            <p>Dynamic Host Configuration Protocol (DHCP) automates IP address assignment through centralized management. DHCP servers maintain address pools, manage leases, and provide network configuration options to clients via the DORA process.</p>
            
            <h4 style="color: #58D4FF;">Basic DHCP Pool Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Exclude addresses from DHCP assignment</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp excluded-address 192.168.1.1 192.168.1.10</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp excluded-address 192.168.1.200 192.168.1.254</span>

<span style="color: #6A9955;"># Create DHCP pool</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp pool LAN_POOL</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">network 192.168.1.0 255.255.255.0</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">default-router 192.168.1.1</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">dns-server 8.8.8.8 8.8.4.4</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">domain-name company.local</span>
Router(dhcp-config)# <span style="color: #C586C0;">lease 7</span>
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">DORA Process Overview</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">1. DISCOVER</td><td style="padding: 8px; border-bottom: 1px solid #444;">Client broadcasts DHCPDISCOVER (255.255.255.255)</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP port 67</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">2. OFFER</td><td style="padding: 8px; border-bottom: 1px solid #444;">Server responds with DHCPOFFER (available IP)</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP port 68</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">3. REQUEST</td><td style="padding: 8px; border-bottom: 1px solid #444;">Client sends DHCPREQUEST (accepts specific offer)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Broadcast message</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">4. ACKNOWLEDGE</td><td style="padding: 8px;">Server confirms with DHCPACK (lease granted)</td><td style="padding: 8px;">Configuration complete</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Advanced Pool Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Multiple pools for different subnets</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp pool VLAN10</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">network 192.168.10.0 /24</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">default-router 192.168.10.1</span>
Router(dhcp-config)# <span style="color: #C586C0;">lease 1</span>

Router(config)# <span style="color: #DCDCAA;">ip dhcp pool VLAN20</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">network 192.168.20.0 /24</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">default-router 192.168.20.1</span>
Router(dhcp-config)# <span style="color: #C586C0;">lease infinite</span>
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">DHCP Pool Management</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Lease Duration</td><td style="padding: 8px; border-bottom: 1px solid #444;">0 = infinite, 1-365 days</td><td style="padding: 8px; border-bottom: 1px solid #444;">Default: 1 day</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Pool Utilization</td><td style="padding: 8px; border-bottom: 1px solid #444;">Monitor with show commands</td><td style="padding: 8px; border-bottom: 1px solid #444;">Prevent exhaustion</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Excluded Ranges</td><td style="padding: 8px; border-bottom: 1px solid #444;">Static device reservations</td><td style="padding: 8px; border-bottom: 1px solid #444;">Server/printer IPs</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Conflict Detection</td><td style="padding: 8px;">ICMP ping before assignment</td><td style="padding: 8px;">Automatic resolution</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Display active DHCP bindings</span>
Router# <span style="color: #DCDCAA;">show ip dhcp binding</span>

<span style="color: #6A9955;"># Show pool statistics and utilization</span>
Router# <span style="color: #DCDCAA;">show ip dhcp pool</span>

<span style="color: #6A9955;"># Check for IP address conflicts</span>
Router# <span style="color: #DCDCAA;">show ip dhcp conflict</span>

<span style="color: #6A9955;"># Debug DHCP server operations</span>
Router# <span style="color: #DCDCAA;">debug ip dhcp server packet</span>
Router# <span style="color: #DCDCAA;">debug ip dhcp server events</span>

<span style="color: #6A9955;"># Clear DHCP bindings and conflicts</span>
Router# <span style="color: #DCDCAA;">clear ip dhcp binding *</span>
Router# <span style="color: #DCDCAA;">clear ip dhcp conflict *</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Master the four-step DORA process and UDP ports (67/68)</li>
                    <li>Understand excluded addresses prevent assignment conflicts</li>
                    <li>Know lease times: infinite, days (1-365), default is 1 day</li>
                    <li>Configure default-router, dns-server, and domain-name options</li>
                    <li>Use show ip dhcp binding to troubleshoot assignments</li>
                    <li>Remember DHCP uses broadcast initially, then unicast</li>
                </ul>
            </div>
        </div>
    `,

    "DHCP Options & Reservations": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.3.d: DHCP Options & Reservations</h3>
            <p>Advanced DHCP features provide precise control over IP assignments and network configuration. Static reservations guarantee specific IPs for critical devices, while custom options deliver specialized configuration parameters.</p>
            
            <h4 style="color: #EC7063;">Static DHCP Reservations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create host-specific reservation</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp pool SERVER_POOL</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">host 192.168.1.100 255.255.255.0</span>
Router(dhcp-config)# <span style="color: #CE9178;">hardware-address 0050.5697.4e2a</span>
Router(dhcp-config)# <span style="color: #C586C0;">client-name file-server</span>

<span style="color: #6A9955;"># Reserved-only pool (no dynamic assignment)</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp pool PRINTER_POOL</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">host 192.168.1.200 255.255.255.0</span>
Router(dhcp-config)# <span style="color: #CE9178;">hardware-address 0025.b3a0.1234</span>
Router(dhcp-config)# <span style="color: #C586C0;">reserved-only</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">DHCP Option Configuration</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Option 3</td><td style="padding: 8px; border-bottom: 1px solid #444;">default-router</td><td style="padding: 8px; border-bottom: 1px solid #444;">Gateway address</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Option 6</td><td style="padding: 8px; border-bottom: 1px solid #444;">dns-server</td><td style="padding: 8px; border-bottom: 1px solid #444;">DNS servers</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Option 15</td><td style="padding: 8px; border-bottom: 1px solid #444;">domain-name</td><td style="padding: 8px; border-bottom: 1px solid #444;">DNS domain suffix</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">Option 51</td><td style="padding: 8px; border-bottom: 1px solid #444;">lease</td><td style="padding: 8px; border-bottom: 1px solid #444;">Lease duration</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Option 66</td><td style="padding: 8px; border-bottom: 1px solid #444;">option 66 ascii</td><td style="padding: 8px; border-bottom: 1px solid #444;">TFTP server name</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6; font-weight: bold;">Option 150</td><td style="padding: 8px; border-bottom: 1px solid #444;">option 150 ip</td><td style="padding: 8px; border-bottom: 1px solid #444;">TFTP server IP</td></tr>
                    <tr><td style="padding: 8px; color: #06b6d4; font-weight: bold;">Option 67</td><td style="padding: 8px;">bootfile-name</td><td style="padding: 8px;">Boot filename</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Custom DHCP Options</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure TFTP server for IP phones</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp pool VOICE_POOL</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">network 192.168.20.0 255.255.255.0</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">default-router 192.168.20.1</span>
Router(dhcp-config)# <span style="color: #CE9178;">option 150 ip 192.168.1.200</span>

<span style="color: #6A9955;"># Alternative TFTP server configuration</span>
Router(dhcp-config)# <span style="color: #CE9178;">option 66 ascii "tftp.company.com"</span>

<span style="color: #6A9955;"># Custom vendor-specific options</span>
Router(dhcp-config)# <span style="color: #C586C0;">option 43 hex 010401010101</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">IP Phone DHCP Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Comprehensive IP phone pool</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp pool PHONES</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">network 192.168.100.0 255.255.255.0</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">default-router 192.168.100.1</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">dns-server 192.168.1.10</span>
Router(dhcp-config)# <span style="color: #CE9178;">domain-name voice.company.local</span>

<span style="color: #6A9955;"># TFTP server for phone configuration</span>
Router(dhcp-config)# <span style="color: #CE9178;">option 150 ip 192.168.1.200</span>

<span style="color: #6A9955;"># Boot file for specific phone model</span>
Router(dhcp-config)# <span style="color: #C586C0;">bootfile-name "SEP*.cnf.xml"</span>

<span style="color: #6A9955;"># Shorter lease for dynamic phones</span>
Router(dhcp-config)# <span style="color: #C586C0;">lease 0 4</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">DHCP Class Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Define DHCP class for device types</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp class CISCO_PHONES</span>
Router(config-dhcp-class)# <span style="color: #9CDCFE;">relay agent information</span>
Router(config-dhcp-class-relayinfo)# <span style="color: #CE9178;">relay-information hex 01040a0a0a01</span>

<span style="color: #6A9955;"># Apply class to pool</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp pool PHONE_CLASS</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">class CISCO_PHONES</span>
Router(dhcp-config)# <span style="color: #9CDCFE;">address range 192.168.20.100 192.168.20.199</span>
Router(dhcp-config)# <span style="color: #CE9178;">option 150 ip 192.168.1.200</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Advanced Pool Features</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Address Range</td><td style="padding: 8px; border-bottom: 1px solid #444;">address range 192.168.1.50 192.168.1.100</td><td style="padding: 8px; border-bottom: 1px solid #444;">Specific IP range</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Lease Infinite</td><td style="padding: 8px; border-bottom: 1px solid #444;">lease infinite</td><td style="padding: 8px; border-bottom: 1px solid #444;">Permanent assignment</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Lease Time</td><td style="padding: 8px; border-bottom: 1px solid #444;">lease 0 4 30</td><td style="padding: 8px; border-bottom: 1px solid #444;">4 hours 30 minutes</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Update DNS</td><td style="padding: 8px;">update dns</td><td style="padding: 8px;">Dynamic DNS updates</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Show all DHCP pools and their configurations</span>
Router# <span style="color: #DCDCAA;">show ip dhcp pool</span>

<span style="color: #6A9955;"># Display specific pool details</span>
Router# <span style="color: #DCDCAA;">show ip dhcp pool VOICE_POOL</span>

<span style="color: #6A9955;"># Check static bindings and reservations</span>
Router# <span style="color: #DCDCAA;">show ip dhcp binding</span>

<span style="color: #6A9955;"># Monitor pool utilization statistics</span>
Router# <span style="color: #DCDCAA;">show ip dhcp pool statistics</span>

<span style="color: #6A9955;"># Debug DHCP option processing</span>
Router# <span style="color: #DCDCAA;">debug ip dhcp server packet detail</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Troubleshooting Reservations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Wrong MAC Format</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use dots, not colons/dashes</td><td style="padding: 8px; border-bottom: 1px solid #444;">0050.5697.4e2a</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Case Sensitivity</td><td style="padding: 8px; border-bottom: 1px solid #444;">MAC addresses are case-insensitive</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use lowercase</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Pool Conflicts</td><td style="padding: 8px; border-bottom: 1px solid #444;">Multiple pools for same subnet</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use address ranges</td></tr>
                    <tr><td style="padding: 8px; color: #ef4444; font-weight: bold;">Option Override</td><td style="padding: 8px;">Host-specific options override pool</td><td style="padding: 8px;">Check inheritance</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Use "host" command for static IP reservations with MAC addresses</li>
                    <li>Know Option 150 (TFTP server IP) vs Option 66 (TFTP server name)</li>
                    <li>Understand "reserved-only" prevents dynamic assignment from pool</li>
                    <li>Configure custom options with hex, ASCII, or IP formats</li>
                    <li>Use address ranges to create sub-pools within networks</li>
                    <li>Remember MAC address format: xxxx.xxxx.xxxx (dots, not colons)</li>
                </ul>
            </div>
        </div>
    `,

    "DNS Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">4.3.e: DNS Configuration</h3>
            <p>DNS client configuration enables network devices to resolve domain names to IP addresses. Proper DNS setup is critical for connectivity to internet resources and internal services.</p>
            
            <h4 style="color: #AF7AC5;">Basic DNS Client Setup</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable DNS lookup functionality</span>
Router(config)# <span style="color: #DCDCAA;">ip domain-lookup</span>

<span style="color: #6A9955;"># Configure primary and secondary DNS servers</span>
Router(config)# <span style="color: #9CDCFE;">ip name-server 8.8.8.8</span>
Router(config)# <span style="color: #9CDCFE;">ip name-server 8.8.4.4</span>
Router(config)# <span style="color: #9CDCFE;">ip name-server 1.1.1.1</span>

<span style="color: #6A9955;"># Set default domain name</span>
Router(config)# <span style="color: #CE9178;">ip domain-name company.local</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Static Host Entries</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create local host table entries</span>
Router(config)# <span style="color: #C586C0;">ip host router1 192.168.1.1</span>
Router(config)# <span style="color: #C586C0;">ip host router2 10.0.0.1</span>
Router(config)# <span style="color: #C586C0;">ip host server1 192.168.1.100</span>

<span style="color: #6A9955;"># Multiple IP addresses for one hostname</span>
Router(config)# <span style="color: #C586C0;">ip host server-cluster 192.168.1.100 192.168.1.101 192.168.1.102</span>

<span style="color: #6A9955;"># FQDN entries</span>
Router(config)# <span style="color: #C586C0;">ip host www.internal.com 10.1.1.50</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Domain List Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure domain search list</span>
Router(config)# <span style="color: #CE9178;">ip domain-list company.local</span>
Router(config)# <span style="color: #CE9178;">ip domain-list branch.company.local</span>
Router(config)# <span style="color: #CE9178;">ip domain-list cisco.com</span>

<span style="color: #6A9955;"># When typing "ping server1", router tries:</span>
<span style="color: #6A9955;"># 1. server1.company.local</span>
<span style="color: #6A9955;"># 2. server1.branch.company.local</span>
<span style="color: #6A9955;"># 3. server1.cisco.com</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">DNS Resolution Methods</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">1. Local Host Table</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check "ip host" entries first</td><td style="padding: 8px; border-bottom: 1px solid #444;">Fastest resolution</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">2. DNS Cache</td><td style="padding: 8px; border-bottom: 1px solid #444;">Previously resolved names</td><td style="padding: 8px; border-bottom: 1px solid #444;">Temporary storage</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">3. DNS Servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">Query configured name servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">External resolution</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">4. Domain Lists</td><td style="padding: 8px;">Append domain suffixes</td><td style="padding: 8px;">Automatic FQDN completion</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">DNS Timeout and Retry Settings</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure DNS timeout (default: 2 seconds)</span>
Router(config)# <span style="color: #C586C0;">ip domain-timeout 5</span>

<span style="color: #6A9955;"># Set retry attempts (default: 2)</span>
Router(config)# <span style="color: #C586C0;">ip domain-retry 3</span>

<span style="color: #6A9955;"># Disable DNS lookup (troubleshooting)</span>
Router(config)# <span style="color: #DCDCAA;">no ip domain-lookup</span>

<span style="color: #6A9955;"># Round-robin DNS server selection</span>
Router(config)# <span style="color: #C586C0;">ip domain-round-robin</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">VRF-Aware DNS Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># DNS servers for specific VRF</span>
Router(config)# <span style="color: #9CDCFE;">ip name-server vrf MGMT 172.16.1.10</span>
Router(config)# <span style="color: #9CDCFE;">ip name-server vrf MGMT 172.16.1.11</span>

<span style="color: #6A9955;"># DNS view for VRF</span>
Router(config)# <span style="color: #DCDCAA;">ip dns view MGMT_VIEW</span>
Router(config-dns-view)# <span style="color: #CE9178;">domain name mgmt.company.local</span>
Router(config-dns-view)# <span style="color: #9CDCFE;">dns forwarder 172.16.1.10</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Display all DNS-related configuration</span>
Router# <span style="color: #DCDCAA;">show hosts</span>

<span style="color: #6A9955;"># Test DNS resolution</span>
Router# <span style="color: #DCDCAA;">nslookup www.cisco.com</span>
Router# <span style="color: #DCDCAA;">ping www.google.com</span>

<span style="color: #6A9955;"># Check specific host table entries</span>
Router# <span style="color: #DCDCAA;">show hosts summary</span>

<span style="color: #6A9955;"># Clear DNS cache</span>
Router# <span style="color: #DCDCAA;">clear host *</span>

<span style="color: #6A9955;"># Debug DNS operations</span>
Router# <span style="color: #DCDCAA;">debug ip domain</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">DNS Troubleshooting Workflow</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">No Resolution</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check "ip domain-lookup" enabled</td><td style="padding: 8px; border-bottom: 1px solid #444;">Verify name-server config</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Slow Resolution</td><td style="padding: 8px; border-bottom: 1px solid #444;">Reduce domain-timeout value</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check DNS server response</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Wrong Domain</td><td style="padding: 8px; border-bottom: 1px solid #444;">Review domain-list order</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use FQDN instead</td></tr>
                    <tr><td style="padding: 8px; color: #ef4444; font-weight: bold;">VRF Issues</td><td style="padding: 8px;">DNS server in different VRF</td><td style="padding: 8px;">Configure VRF-aware DNS</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Enable DNS with "ip domain-lookup" and configure "ip name-server"</li>
                    <li>Use "ip host" for static hostname-to-IP mappings</li>
                    <li>Understand domain-list provides automatic suffix completion</li>
                    <li>Know DNS resolution order: host table → cache → DNS servers</li>
                    <li>Configure domain-timeout and domain-retry for optimization</li>
                    <li>Use "show hosts" and "nslookup" for DNS verification</li>
                </ul>
            </div>
        </div>
    `,

    "DNS Records & Resolution": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">4.3.f: DNS Records & Resolution Process</h3>
            <p>DNS operates through a hierarchical system of records that map domain names to various network resources. Understanding record types and the resolution process is essential for network troubleshooting and management.</p>
            
            <h4 style="color: #58D4FF;">Common DNS Record Types</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-family: monospace; font-weight: bold;">A</td><td style="padding: 8px; border-bottom: 1px solid #444;">IPv4 Address Record</td><td style="padding: 8px; border-bottom: 1px solid #444;">www.cisco.com → 72.163.4.185</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-family: monospace; font-weight: bold;">AAAA</td><td style="padding: 8px; border-bottom: 1px solid #444;">IPv6 Address Record</td><td style="padding: 8px; border-bottom: 1px solid #444;">Maps to 128-bit IPv6 address</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-family: monospace; font-weight: bold;">CNAME</td><td style="padding: 8px; border-bottom: 1px solid #444;">Canonical Name (Alias)</td><td style="padding: 8px; border-bottom: 1px solid #444;">ftp.cisco.com → www.cisco.com</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-family: monospace; font-weight: bold;">MX</td><td style="padding: 8px; border-bottom: 1px solid #444;">Mail Exchange Record</td><td style="padding: 8px; border-bottom: 1px solid #444;">10 mail.cisco.com (priority)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-family: monospace; font-weight: bold;">NS</td><td style="padding: 8px; border-bottom: 1px solid #444;">Name Server Record</td><td style="padding: 8px; border-bottom: 1px solid #444;">Authoritative DNS servers</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6; font-family: monospace; font-weight: bold;">PTR</td><td style="padding: 8px; border-bottom: 1px solid #444;">Pointer (Reverse DNS)</td><td style="padding: 8px; border-bottom: 1px solid #444;">185.4.163.72.in-addr.arpa</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #06b6d4; font-family: monospace; font-weight: bold;">SOA</td><td style="padding: 8px; border-bottom: 1px solid #444;">Start of Authority</td><td style="padding: 8px; border-bottom: 1px solid #444;">Zone administrative info</td></tr>
                    <tr><td style="padding: 8px; color: #10b981; font-family: monospace; font-weight: bold;">TXT</td><td style="padding: 8px;">Text Record</td><td style="padding: 8px;">SPF, DKIM, verification data</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">DNS Hierarchy Structure</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># DNS Hierarchy (from specific to general)</span>
<span style="color: #CE9178;">www.cisco.com.</span>
 │   └── <span style="color: #10b981;">www</span>     (Host/Subdomain)
 │   └── <span style="color: #3b82f6;">cisco</span>   (Second-level domain)
 │   └── <span style="color: #6366f1;">com</span>     (Top-level domain - TLD)
 └── <span style="color: #f59e0b;">.</span>       (Root - implicit)

<span style="color: #6A9955;"># Reverse DNS Hierarchy</span>
<span style="color: #CE9178;">185.4.163.72.in-addr.arpa.</span>
 │   └── <span style="color: #10b981;">185</span>    (Host octet)
 │   └── <span style="color: #3b82f6;">4</span>      (Third octet)
 │   └── <span style="color: #6366f1;">163</span>    (Second octet)  
 │   └── <span style="color: #f59e0b;">72</span>     (First octet)
 └── <span style="color: #ef4444;">in-addr.arpa</span> (Reverse zone)
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">DNS Resolution Process (Recursive)</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">1. Client Query</td><td style="padding: 8px; border-bottom: 1px solid #444;">Client asks resolver for www.cisco.com</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP port 53</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">2. Root Servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">Resolver queries root (.) servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">Returns .com NS records</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">3. TLD Servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">Query .com TLD servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">Returns cisco.com NS records</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">4. Authoritative</td><td style="padding: 8px; border-bottom: 1px solid #444;">Query cisco.com name servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">Returns A record IP address</td></tr>
                    <tr><td style="padding: 8px; color: #ef4444; font-weight: bold;">5. Response</td><td style="padding: 8px;">IP address returned to client</td><td style="padding: 8px;">Cached for TTL duration</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">DNS Caching and TTL</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Example DNS record with TTL</span>
www.cisco.com.    <span style="color: #C586C0;">3600</span>    IN    <span style="color: #10b981;">A</span>    72.163.4.185
     │             │          │     │
     │             │          │     └── IPv4 Address
     │             │          └── Record Type
     │             └── TTL (Time To Live) in seconds
     └── Fully Qualified Domain Name

<span style="color: #6A9955;"># TTL Examples:</span>
<span style="color: #C586C0;">300</span>   = 5 minutes   (Dynamic records)
<span style="color: #C586C0;">3600</span>  = 1 hour      (Standard records)
<span style="color: #C586C0;">86400</span> = 24 hours    (Stable records)
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">Reverse DNS Lookups</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Forward lookup: Name to IP</span>
Router# <span style="color: #DCDCAA;">nslookup www.cisco.com</span>
Non-authoritative answer:
Name: www.cisco.com
Address: 72.163.4.185

<span style="color: #6A9955;"># Reverse lookup: IP to Name</span>
Router# <span style="color: #DCDCAA;">nslookup 72.163.4.185</span>
Non-authoritative answer:
185.4.163.72.in-addr.arpa    name = www.cisco.com

<span style="color: #6A9955;"># IPv6 reverse lookup uses ip6.arpa</span>
2001:db8::1 → 1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">DNS Query Types</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Recursive</td><td style="padding: 8px; border-bottom: 1px solid #444;">Client asks resolver to do full lookup</td><td style="padding: 8px; border-bottom: 1px solid #444;">Resolver handles all queries</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Iterative</td><td style="padding: 8px; border-bottom: 1px solid #444;">Server returns referral to next server</td><td style="padding: 8px; border-bottom: 1px solid #444;">Client follows referrals</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Authoritative</td><td style="padding: 8px; border-bottom: 1px solid #444;">Answer from zone's primary server</td><td style="padding: 8px; border-bottom: 1px solid #444;">Definitive, not cached</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Non-Authoritative</td><td style="padding: 8px;">Answer from cache or secondary</td><td style="padding: 8px;">May be outdated</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail) record types</li>
                    <li>Understand PTR records enable reverse DNS lookups (IP to name)</li>
                    <li>Remember DNS hierarchy: Root → TLD → Second-level → Subdomain</li>
                    <li>Know recursive vs iterative queries and their differences</li>
                    <li>Understand TTL controls caching duration in seconds</li>
                    <li>Use nslookup for forward and reverse DNS verification</li>
                </ul>
            </div>
        </div>
    `,

    "DNS Troubleshooting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.3.g: DNS Troubleshooting</h3>
            <p>Systematic DNS troubleshooting requires understanding common failure points and using appropriate diagnostic tools. Effective DNS troubleshooting can quickly resolve connectivity issues and improve network performance.</p>
            
            <h4 style="color: #58D68D;">DNS Troubleshooting Methodology</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">1. Verify Configuration</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check DNS client settings</td><td style="padding: 8px; border-bottom: 1px solid #444;">show hosts, running-config</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">2. Test Connectivity</td><td style="padding: 8px; border-bottom: 1px solid #444;">Ping DNS servers directly</td><td style="padding: 8px; border-bottom: 1px solid #444;">ping 8.8.8.8</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">3. Manual Resolution</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use nslookup to test</td><td style="padding: 8px; border-bottom: 1px solid #444;">nslookup cisco.com</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">4. Check DNS Path</td><td style="padding: 8px; border-bottom: 1px solid #444;">Verify routing to DNS servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">traceroute, show ip route</td></tr>
                    <tr><td style="padding: 8px; color: #ef4444; font-weight: bold;">5. Debug Operations</td><td style="padding: 8px;">Enable DNS debugging</td><td style="padding: 8px;">debug ip domain</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Basic DNS Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Display DNS configuration and cache</span>
Router# <span style="color: #DCDCAA;">show hosts</span>

<span style="color: #6A9955;"># Test specific hostname resolution</span>
Router# <span style="color: #DCDCAA;">ping www.cisco.com</span>
Router# <span style="color: #DCDCAA;">ping cisco.com</span>

<span style="color: #6A9955;"># Manual DNS lookup</span>
Router# <span style="color: #DCDCAA;">nslookup www.google.com</span>
Router# <span style="color: #DCDCAA;">nslookup 8.8.8.8</span>

<span style="color: #6A9955;"># Test with specific DNS server</span>
Router# <span style="color: #DCDCAA;">nslookup cisco.com 1.1.1.1</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Advanced DNS Diagnostics</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Clear DNS cache for fresh lookups</span>
Router# <span style="color: #DCDCAA;">clear host *</span>

<span style="color: #6A9955;"># Enable DNS debugging</span>
Router# <span style="color: #DCDCAA;">debug ip domain</span>

<span style="color: #6A9955;"># Test with verbose output</span>
Router# <span style="color: #DCDCAA;">nslookup</span>
> <span style="color: #9CDCFE;">set debug</span>
> <span style="color: #9CDCFE;">www.cisco.com</span>

<span style="color: #6A9955;"># Check specific record types</span>
> <span style="color: #9CDCFE;">set type=MX</span>
> <span style="color: #9CDCFE;">cisco.com</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Common DNS Issues and Solutions</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">DNS Disabled</td><td style="padding: 8px; border-bottom: 1px solid #444;">"no ip domain-lookup" configured</td><td style="padding: 8px; border-bottom: 1px solid #444;">Enable with "ip domain-lookup"</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">No DNS Servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">No name-server configured</td><td style="padding: 8px; border-bottom: 1px solid #444;">Add "ip name-server x.x.x.x"</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Wrong DNS Server</td><td style="padding: 8px; border-bottom: 1px solid #444;">DNS server unreachable/wrong</td><td style="padding: 8px; border-bottom: 1px solid #444;">Update to working DNS server</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Timeout Issues</td><td style="padding: 8px; border-bottom: 1px solid #444;">DNS queries timing out</td><td style="padding: 8px; border-bottom: 1px solid #444;">Adjust domain-timeout value</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Cache Poisoning</td><td style="padding: 8px; border-bottom: 1px solid #444;">Incorrect cached entries</td><td style="padding: 8px; border-bottom: 1px solid #444;">Clear cache with "clear host *"</td></tr>
                    <tr><td style="padding: 8px; color: #ef4444; font-weight: bold;">Domain List Issues</td><td style="padding: 8px;">Wrong domain suffix appended</td><td style="padding: 8px;">Check "ip domain-list" order</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">DNS Debug Output Analysis</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Example debug output (debug ip domain)</span>
DNS: Request packet for www.cisco.com from 192.168.1.1
DNS: Sendto 8.8.8.8 (len 32)
DNS: Request ID = 0x1A2B, type = A
DNS: Response ID = 0x1A2B from 8.8.8.8
DNS: RR: www.cisco.com type 1 class 1 TTL 3600
DNS: RR: www.cisco.com A 72.163.4.185

<span style="color: #6A9955;"># Analysis points:</span>
<span style="color: #10b981;">✓</span> Request sent to DNS server (8.8.8.8)
<span style="color: #10b981;">✓</span> Response received with matching ID
<span style="color: #10b981;">✓</span> A record returned with IP address
<span style="color: #10b981;">✓</span> TTL shows cache duration (3600 seconds)
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Network-Level DNS Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Check routing to DNS servers</span>
Router# <span style="color: #DCDCAA;">show ip route 8.8.8.8</span>
Router# <span style="color: #DCDCAA;">traceroute 8.8.8.8</span>

<span style="color: #6A9955;"># Verify ACLs not blocking DNS traffic</span>
Router# <span style="color: #DCDCAA;">show access-lists</span>

<span style="color: #6A9955;"># Check NAT translations for DNS</span>
Router# <span style="color: #DCDCAA;">show ip nat translations | include :53</span>

<span style="color: #6A9955;"># Monitor DNS packet flow</span>
Router# <span style="color: #DCDCAA;">debug ip packet detail 53</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">DNS Performance Optimization</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Reduce Timeouts</td><td style="padding: 8px; border-bottom: 1px solid #444;">ip domain-timeout 3</td><td style="padding: 8px; border-bottom: 1px solid #444;">Faster failure detection</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Multiple DNS</td><td style="padding: 8px; border-bottom: 1px solid #444;">Configure 2-3 name servers</td><td style="padding: 8px; border-bottom: 1px solid #444;">Redundancy and load distribution</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Local Hosts</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use "ip host" for critical systems</td><td style="padding: 8px; border-bottom: 1px solid #444;">Eliminate DNS dependency</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Round Robin</td><td style="padding: 8px;">ip domain-round-robin</td><td style="padding: 8px;">Distribute queries across servers</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">DNS Security Considerations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Use trusted DNS servers</span>
<span style="color: #CE9178;">Google DNS:</span>     8.8.8.8, 8.8.4.4
<span style="color: #CE9178;">Cloudflare:</span>     1.1.1.1, 1.0.0.1
<span style="color: #CE9178;">Quad9:</span>         9.9.9.9, 149.112.112.112

<span style="color: #6A9955;"># Monitor for DNS tunneling/exfiltration</span>
Router# <span style="color: #DCDCAA;">show ip nat translations | include :53</span>

<span style="color: #6A9955;"># Implement DNS filtering if needed</span>
Router(config)# <span style="color: #9CDCFE;">access-list 100 permit udp any host 8.8.8.8 eq 53</span>
Router(config)# <span style="color: #9CDCFE;">access-list 100 deny udp any any eq 53</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Use systematic approach: config → connectivity → resolution → debug</li>
                    <li>Know "show hosts" displays DNS cache and configuration</li>
                    <li>Use "nslookup" for manual DNS testing and verification</li>
                    <li>Remember "clear host *" clears DNS cache for troubleshooting</li>
                    <li>Enable "debug ip domain" to trace DNS query/response process</li>
                    <li>Check routing to DNS servers and ACL restrictions</li>
                </ul>
            </div>
        </div>
    `,

    // 4.4 SNMP Operations - Fundamentals
    "SNMP Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">4.4.a: SNMP Fundamentals & Architecture</h3>
            <p>Simple Network Management Protocol (SNMP) provides a standardized framework for monitoring and managing network devices. Understanding the core architecture and operations is essential for effective network administration.</p>
            
            <h4 style="color: #58D4FF;">Manager-Agent Model</h4>
            <p>SNMP operates on a <strong>client-server architecture</strong> where:</p>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">SNMP Manager (NMS):</strong> Network Management Station that monitors and controls agents</li>
                <li><strong style="color: #3b82f6;">SNMP Agent:</strong> Software running on managed devices (routers, switches, servers)</li>
                <li><strong style="color: #f59e0b;">Management Information Base (MIB):</strong> Database of manageable objects</li>
            </ul>
            
            <h4 style="color: #58D4FF;">SNMP Versions Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 2px solid #444;">
                        <td style="padding: 8px; font-weight: bold; color: #10b981;">Version</td>
                        <td style="padding: 8px; font-weight: bold; color: #10b981;">Security</td>
                        <td style="padding: 8px; font-weight: bold; color: #10b981;">Features</td>
                        <td style="padding: 8px; font-weight: bold; color: #10b981;">Usage</td>
                    </tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">SNMPv1</td><td style="padding: 8px; border-bottom: 1px solid #444;">Community strings (plaintext)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Basic operations</td><td style="padding: 8px; border-bottom: 1px solid #444;">Legacy only</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">SNMPv2c</td><td style="padding: 8px; border-bottom: 1px solid #444;">Community strings (plaintext)</td><td style="padding: 8px; border-bottom: 1px solid #444;">GET-BULK, improved error handling</td><td style="padding: 8px; border-bottom: 1px solid #444;">Common in LANs</td></tr>
                    <tr><td style="padding: 8px; color: #10b981; font-weight: bold;">SNMPv3</td><td style="padding: 8px;">Authentication + Encryption</td><td style="padding: 8px;">User-based security, access control</td><td style="padding: 8px;">Production networks</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Core SNMP Operations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">GET</td><td style="padding: 8px; border-bottom: 1px solid #444;">Retrieve value of specific OID</td><td style="padding: 8px; border-bottom: 1px solid #444;">Manager → Agent</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">GET-NEXT</td><td style="padding: 8px; border-bottom: 1px solid #444;">Retrieve next OID in MIB tree</td><td style="padding: 8px; border-bottom: 1px solid #444;">Manager → Agent</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">GET-BULK</td><td style="padding: 8px; border-bottom: 1px solid #444;">Efficiently retrieve multiple OIDs (v2c+)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Manager → Agent</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">SET</td><td style="padding: 8px; border-bottom: 1px solid #444;">Modify configuration value</td><td style="padding: 8px; border-bottom: 1px solid #444;">Manager → Agent</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">TRAP</td><td style="padding: 8px; border-bottom: 1px solid #444;">Unsolicited notification (v1/v2c)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Agent → Manager</td></tr>
                    <tr><td style="padding: 8px; color: #8b5cf6; font-weight: bold;">INFORM</td><td style="padding: 8px;">Acknowledged notification (v2c+)</td><td style="padding: 8px;">Agent → Manager</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Transport Protocol Details</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Protocol:</strong> UDP (User Datagram Protocol)</li>
                <li><strong style="color: #3b82f6;">Manager Port:</strong> 162 (for receiving traps)</li>
                <li><strong style="color: #f59e0b;">Agent Port:</strong> 161 (for GET/SET operations)</li>
                <li><strong style="color: #ef4444;">Connection:</strong> Connectionless, simple request-response</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the manager-agent model and UDP ports 161/162</li>
                    <li>Know the differences between SNMPv1, v2c, and v3</li>
                    <li>Recognize when to use each SNMP operation (GET, SET, TRAP)</li>
                    <li>Understand why SNMPv3 is preferred for security</li>
                </ul>
            </div>
        </div>
    `,

    "SNMP Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.4.b: SNMP Configuration & Security</h3>
            <p>Configuring SNMP agents requires careful attention to security, access control, and proper community string or user-based authentication setup.</p>
            
            <h4 style="color: #58D68D;">Basic SNMP Agent Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Basic SNMPv2c Configuration</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server community public RO</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server community private RW</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server contact admin@company.com</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server location "DataCenter-A Rack-5"</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server chassis-id "Router-Core-01"</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">SNMPv2c Manager Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure manager and enable traps</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server host 192.168.1.100 version 2c public</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server host 192.168.1.101 version 2c private udp-port 162</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps snmp linkdown linkup</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps config</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps syslog</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">SNMPv3 Security Configuration</h4>
            <p>SNMPv3 provides <strong>User-based Security Model (USM)</strong> with authentication and privacy:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create SNMPv3 group with privacy</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server group NETWORK-ADMINS v3 priv</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server group READ-ONLY v3 auth</span>

<span style="color: #6A9955;"># Create SNMPv3 users with authentication and encryption</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server user admin NETWORK-ADMINS v3 auth sha secretpass123 priv aes 128 privpass456</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server user monitor READ-ONLY v3 auth md5 monitorpass</span>

<span style="color: #6A9955;"># Configure SNMPv3 manager</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server host 192.168.1.100 version 3 priv admin</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">SNMPv3 Security Levels</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">noAuthNoPriv</td><td style="padding: 8px; border-bottom: 1px solid #444;">No authentication, no encryption</td><td style="padding: 8px; border-bottom: 1px solid #444;">Not recommended</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">authNoPriv</td><td style="padding: 8px; border-bottom: 1px solid #444;">Authentication only (MD5/SHA)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Better security</td></tr>
                    <tr><td style="padding: 8px; color: #10b981; font-weight: bold;">authPriv</td><td style="padding: 8px;">Authentication + Encryption (AES/DES)</td><td style="padding: 8px;">Highest security</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Access Control Lists (Views)</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create SNMP views to restrict access</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server view SYSTEM-VIEW iso.3.6.1.2.1.1 included</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server view INTERFACE-VIEW iso.3.6.1.2.1.2 included</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server view ALL-VIEW iso included</span>

<span style="color: #6A9955;"># Apply views to groups</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server group READ-ONLY v3 auth read SYSTEM-VIEW</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server group NETWORK-ADMINS v3 priv read ALL-VIEW write ALL-VIEW</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show snmp</span>
Router# <span style="color: #DCDCAA;">show snmp community</span>
Router# <span style="color: #DCDCAA;">show snmp group</span>
Router# <span style="color: #DCDCAA;">show snmp user</span>
Router# <span style="color: #DCDCAA;">show snmp view</span>
Router# <span style="color: #DCDCAA;">show snmp host</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure community strings for read-only and read-write access</li>
                    <li>Implement SNMPv3 with authentication and encryption for security</li>
                    <li>Understand SNMPv3 security levels: noAuthNoPriv, authNoPriv, authPriv</li>
                    <li>Configure SNMP managers and enable appropriate trap types</li>
                </ul>
            </div>
        </div>
    `,

    "SNMP MIB & OIDs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.4.c: SNMP MIB Structure & Object Identifiers</h3>
            <p>The Management Information Base (MIB) provides a hierarchical namespace for all manageable objects in SNMP. Understanding OID structure is crucial for effective SNMP monitoring.</p>
            
            <h4 style="color: #F5B041;">MIB Tree Hierarchy</h4>
            <p>The MIB follows a <strong>tree structure</strong> with standardized root nodes:</p>
            <ul style="margin-left: 20px; color: #B0B0B0; font-family: monospace; font-size: 0.9em;">
                <li><strong style="color: #10b981;">iso(1)</strong> - International Organization for Standardization</li>
                <li><strong style="color: #3b82f6;">iso(1).org(3)</strong> - Organization branch</li>
                <li><strong style="color: #6366f1;">iso(1).org(3).dod(6)</strong> - US Department of Defense</li>
                <li><strong style="color: #f59e0b;">iso(1).org(3).dod(6).internet(1)</strong> - Internet node</li>
                <li><strong style="color: #ef4444;">1.3.6.1.2.1</strong> - Management Information Base (MIB-II)</li>
            </ul>
            
            <h4 style="color: #F5B041;">Standard MIB-II Groups</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">1.3.6.1.2.1.1</td><td style="padding: 8px; border-bottom: 1px solid #444;">system</td><td style="padding: 8px; border-bottom: 1px solid #444;">System information</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">1.3.6.1.2.1.2</td><td style="padding: 8px; border-bottom: 1px solid #444;">interfaces</td><td style="padding: 8px; border-bottom: 1px solid #444;">Network interfaces</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">1.3.6.1.2.1.3</td><td style="padding: 8px; border-bottom: 1px solid #444;">at</td><td style="padding: 8px; border-bottom: 1px solid #444;">Address translation</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">1.3.6.1.2.1.4</td><td style="padding: 8px; border-bottom: 1px solid #444;">ip</td><td style="padding: 8px; border-bottom: 1px solid #444;">IP protocol information</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">1.3.6.1.2.1.5</td><td style="padding: 8px; border-bottom: 1px solid #444;">icmp</td><td style="padding: 8px; border-bottom: 1px solid #444;">ICMP statistics</td></tr>
                    <tr><td style="padding: 8px; color: #8b5cf6; font-weight: bold;">1.3.6.1.2.1.6</td><td style="padding: 8px;">tcp</td><td style="padding: 8px;">TCP protocol information</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Common System OIDs</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f39c12;">
                <ul style="color: #E0E0E0; margin: 0; font-family: monospace; font-size: 0.9em;">
                    <li><strong style="color: #10b981;">1.3.6.1.2.1.1.1.0:</strong> sysDescr - System description</li>
                    <li><strong style="color: #3b82f6;">1.3.6.1.2.1.1.2.0:</strong> sysObjectID - System object identifier</li>
                    <li><strong style="color: #6366f1;">1.3.6.1.2.1.1.3.0:</strong> sysUpTime - System uptime (timeticks)</li>
                    <li><strong style="color: #f59e0b;">1.3.6.1.2.1.1.4.0:</strong> sysContact - System contact information</li>
                    <li><strong style="color: #ef4444;">1.3.6.1.2.1.1.5.0:</strong> sysName - System name</li>
                    <li><strong style="color: #8b5cf6;">1.3.6.1.2.1.1.6.0:</strong> sysLocation - System location</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Interface Table OIDs</h4>
            <p>The <strong>interfaces table (1.3.6.1.2.1.2.2.1)</strong> contains per-interface statistics:</p>
            <ul style="margin-left: 20px; color: #B0B0B0; font-family: monospace; font-size: 0.9em;">
                <li><strong style="color: #10b981;">1.3.6.1.2.1.2.2.1.1.X:</strong> ifIndex - Interface index number</li>
                <li><strong style="color: #3b82f6;">1.3.6.1.2.1.2.2.1.2.X:</strong> ifDescr - Interface description</li>
                <li><strong style="color: #6366f1;">1.3.6.1.2.1.2.2.1.3.X:</strong> ifType - Interface type</li>
                <li><strong style="color: #f59e0b;">1.3.6.1.2.1.2.2.1.8.X:</strong> ifOperStatus - Operational status</li>
                <li><strong style="color: #ef4444;">1.3.6.1.2.1.2.2.1.10.X:</strong> ifInOctets - Input bytes counter</li>
                <li><strong style="color: #8b5cf6;">1.3.6.1.2.1.2.2.1.16.X:</strong> ifOutOctets - Output bytes counter</li>
            </ul>
            
            <h4 style="color: #F5B041;">Cisco Enterprise MIB</h4>
            <p>Cisco devices include proprietary MIBs under <strong>1.3.6.1.4.1.9</strong>:</p>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">CISCO-PROCESS-MIB:</strong> CPU and memory utilization</li>
                <li><strong style="color: #3b82f6;">CISCO-ENVMON-MIB:</strong> Environmental monitoring (temperature, power)</li>
                <li><strong style="color: #f59e0b;">CISCO-CONFIG-COPY-MIB:</strong> Configuration backup and restore</li>
                <li><strong style="color: #ef4444;">CISCO-FLASH-MIB:</strong> Flash memory information</li>
            </ul>
            
            <h4 style="color: #F5B041;">OID Navigation Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># SNMP GET examples using OIDs</span>
$ snmpget -v2c -c public 192.168.1.1 1.3.6.1.2.1.1.1.0
$ snmpget -v2c -c public 192.168.1.1 1.3.6.1.2.1.1.3.0
$ snmpwalk -v2c -c public 192.168.1.1 1.3.6.1.2.1.2.2.1.2

<span style="color: #6A9955;"># Using MIB names instead of numeric OIDs</span>
$ snmpget -v2c -c public 192.168.1.1 sysDescr.0
$ snmpget -v2c -c public 192.168.1.1 sysUpTime.0
$ snmpwalk -v2c -c public 192.168.1.1 ifDescr
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand MIB-II hierarchy starting with 1.3.6.1.2.1</li>
                    <li>Know common system OIDs: sysDescr, sysUpTime, sysContact, sysLocation</li>
                    <li>Recognize interface table structure and key interface OIDs</li>
                    <li>Understand how OID indexing works for table entries (.X suffix)</li>
                </ul>
            </div>
        </div>
    `,

    "SNMP Monitoring & Traps": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.4.d: SNMP Monitoring, Traps & Best Practices</h3>
            <p>Effective SNMP monitoring combines polling strategies with event-driven notifications (traps) to provide comprehensive network visibility and proactive fault management.</p>
            
            <h4 style="color: #EC7063;">SNMP Trap Configuration</h4>
            <p><strong>Traps</strong> enable devices to send unsolicited notifications when events occur:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable comprehensive trap monitoring</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps snmp linkdown linkup</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps config</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps entity</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps envmon temperature shutdown supply fan</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps cpu threshold</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps memory bufferpeak</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps bgp</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps ospf state-change</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Trap Types & Categories</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Interface</td><td style="padding: 8px; border-bottom: 1px solid #444;">linkdown, linkup</td><td style="padding: 8px; border-bottom: 1px solid #444;">Physical interface state changes</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">Environmental</td><td style="padding: 8px; border-bottom: 1px solid #444;">temperature, fan, power</td><td style="padding: 8px; border-bottom: 1px solid #444;">Hardware health monitoring</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Configuration</td><td style="padding: 8px; border-bottom: 1px solid #444;">config, reload</td><td style="padding: 8px; border-bottom: 1px solid #444;">System configuration changes</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Performance</td><td style="padding: 8px; border-bottom: 1px solid #444;">cpu, memory</td><td style="padding: 8px; border-bottom: 1px solid #444;">Resource utilization thresholds</td></tr>
                    <tr><td style="padding: 8px; color: #6366f1; font-weight: bold;">Protocol</td><td style="padding: 8px;">bgp, ospf, eigrp</td><td style="padding: 8px;">Routing protocol state changes</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Trap vs. Inform Notifications</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #e74c3c;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold; color: #ef4444;">TRAP</td>
                        <td style="padding: 8px; font-weight: bold; color: #10b981;">INFORM</td>
                    </tr>
                    <tr><td style="padding: 8px; color: #B0B0B0;">Fire-and-forget (UDP)</td><td style="padding: 8px; color: #B0B0B0;">Acknowledged delivery</td></tr>
                    <tr><td style="padding: 8px; color: #B0B0B0;">No delivery guarantee</td><td style="padding: 8px; color: #B0B0B0;">Retransmission until ACK</td></tr>
                    <tr><td style="padding: 8px; color: #B0B0B0;">Lower overhead</td><td style="padding: 8px; color: #B0B0B0;">Higher reliability</td></tr>
                    <tr><td style="padding: 8px; color: #B0B0B0;">SNMPv1/v2c/v3</td><td style="padding: 8px; color: #B0B0B0;">SNMPv2c/v3 only</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Polling Strategies</h4>
            <p><strong>Effective monitoring</strong> combines polling with trap-based notifications:</p>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">High-frequency polling:</strong> Critical metrics (CPU, memory) every 1-5 minutes</li>
                <li><strong style="color: #3b82f6;">Medium-frequency polling:</strong> Interface statistics every 5-15 minutes</li>
                <li><strong style="color: #f59e0b;">Low-frequency polling:</strong> Configuration data every 1-4 hours</li>
                <li><strong style="color: #ef4444;">Event-driven:</strong> Traps for immediate fault notification</li>
            </ul>
            
            <h4 style="color: #EC7063;">Monitoring Best Practices</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <h5 style="color: #EC7063; margin-top: 0;">Security Considerations:</h5>
                <ul style="color: #E0E0E0; margin-bottom: 15px;">
                    <li>Use SNMPv3 with authentication and encryption</li>
                    <li>Implement access control lists for SNMP traffic</li>
                    <li>Change default community strings immediately</li>
                    <li>Use read-only communities for monitoring</li>
                </ul>
                
                <h5 style="color: #EC7063; margin-top: 0;">Performance Optimization:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li>Use GET-BULK for efficient bulk data retrieval</li>
                    <li>Implement reasonable polling intervals</li>
                    <li>Monitor SNMP agent CPU impact</li>
                    <li>Use delta calculations for counter-based metrics</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Troubleshooting SNMP Issues</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Debug SNMP operations</span>
Router# <span style="color: #DCDCAA;">debug snmp packets</span>
Router# <span style="color: #DCDCAA;">debug snmp mib</span>

<span style="color: #6A9955;"># Test SNMP connectivity</span>
Router# <span style="color: #DCDCAA;">show snmp sessions</span>
Router# <span style="color: #DCDCAA;">show snmp stats</span>
Router# <span style="color: #DCDCAA;">show snmp pending</span>

<span style="color: #6A9955;"># Verify trap configuration</span>
Router# <span style="color: #DCDCAA;">show running-config | include snmp</span>
Router# <span style="color: #DCDCAA;">test snmp trap-generation 192.168.1.100</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Common Issues & Solutions</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #ef4444;">No SNMP response:</strong> Check UDP port 161 accessibility and community strings</li>
                <li><strong style="color: #f59e0b;">Missing traps:</strong> Verify UDP port 162, trap configuration, and network connectivity</li>
                <li><strong style="color: #3b82f6;">Authentication failures:</strong> Confirm SNMPv3 user credentials and security levels</li>
                <li><strong style="color: #10b981;">Performance issues:</strong> Reduce polling frequency and optimize queries</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure SNMP traps for interface state changes and system events</li>
                    <li>Understand the difference between TRAPs and INFORMs</li>
                    <li>Know when to use polling vs. event-driven monitoring</li>
                    <li>Implement SNMP security best practices with SNMPv3</li>
                </ul>
            </div>
        </div>
    `,

    // 4.5 Syslog Features - Expanded to 4 comprehensive cards
    "Syslog Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">4.5.a: Syslog Fundamentals</h3>
            <p>Syslog is the standard protocol for message logging in network devices. It provides structured logging with severity levels and facility codes for effective network monitoring and troubleshooting.</p>
            
            <h4 style="color: #58D4FF;">Severity Levels (0-7)</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #dc2626; font-weight: bold;">0 - Emergency</td><td style="padding: 8px; border-bottom: 1px solid #444;">System is unusable</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f97316; font-weight: bold;">1 - Alert</td><td style="padding: 8px; border-bottom: 1px solid #444;">Action must be taken immediately</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">2 - Critical</td><td style="padding: 8px; border-bottom: 1px solid #444;">Critical conditions</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #eab308; font-weight: bold;">3 - Error</td><td style="padding: 8px; border-bottom: 1px solid #444;">Error conditions</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #84cc16; font-weight: bold;">4 - Warning</td><td style="padding: 8px; border-bottom: 1px solid #444;">Warning conditions</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #22c55e; font-weight: bold;">5 - Notice</td><td style="padding: 8px; border-bottom: 1px solid #444;">Normal but significant condition</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">6 - Informational</td><td style="padding: 8px; border-bottom: 1px solid #444;">Informational messages</td></tr>
                    <tr><td style="padding: 8px; color: #6366f1; font-weight: bold;">7 - Debug</td><td style="padding: 8px;">Debug-level messages</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Common Facility Codes</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">local0-local7</td><td style="padding: 8px; border-bottom: 1px solid #444;">User-defined facilities (16-23)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">mail</td><td style="padding: 8px; border-bottom: 1px solid #444;">Mail system (2)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">daemon</td><td style="padding: 8px; border-bottom: 1px solid #444;">System daemons (3)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">kern</td><td style="padding: 8px; border-bottom: 1px solid #444;">Kernel messages (0)</td></tr>
                    <tr><td style="padding: 8px; color: #ef4444; font-weight: bold;">auth</td><td style="padding: 8px;">Security/authorization messages (4)</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Syslog Message Format</h4>
            <div style="background-color: #F3F4F6; padding: 15px; border-radius: 8px; margin: 10px 0; font-family: monospace; font-size: 0.9em; color: #374151;">
                <div>&lt;PRI&gt;TIMESTAMP HOSTNAME TAG: MESSAGE</div>
                <div style="margin-top: 10px; color: #10b981;">&lt;190&gt;Mar 15 10:30:15 Router1 %LINK-5-CHANGED: Interface GigabitEthernet0/0, changed state to up</div>
                <div style="margin-top: 5px; font-size: 0.8em; color: #6b7280;">
                    PRI = Priority (Facility × 8 + Severity)<br>
                    190 = local7(23) × 8 + informational(6) = 190
                </div>
            </div>
            
            <h4 style="color: #58D4FF;">RFC 3164 vs RFC 5424 Standards</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">RFC 3164:</strong> Traditional syslog format, UDP port 514</li>
                <li><strong style="color: #3b82f6;">RFC 5424:</strong> Enhanced format with structured data, better timestamps</li>
                <li><strong style="color: #f59e0b;">Cisco Implementation:</strong> Supports both standards with vendor-specific extensions</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Memorize severity levels 0-7 (Emergency to Debug)</li>
                    <li>Understand facility codes and their numbering</li>
                    <li>Know message format components and PRI calculation</li>
                    <li>Recognize common Cisco message tags (%LINK, %LINEPROTO, %SYS)</li>
                </ul>
            </div>
        </div>
    `,

    "Configuration & Local Logging": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.5.b: Configuration & Local Logging</h3>
            <p>Configure local syslog destinations and parameters for effective log management. Control message routing to console, buffer, monitor sessions, and files.</p>
            
            <h4 style="color: #58D68D;">Basic Syslog Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable logging globally</span>
Router(config)# <span style="color: #DCDCAA;">logging on</span>

<span style="color: #6A9955;"># Configure logging destinations</span>
Router(config)# <span style="color: #DCDCAA;">logging console warnings</span>
Router(config)# <span style="color: #DCDCAA;">logging monitor informational</span>
Router(config)# <span style="color: #DCDCAA;">logging buffered 16384 debugging</span>

<span style="color: #6A9955;"># Enable timestamps and sequence numbers</span>
Router(config)# <span style="color: #DCDCAA;">service timestamps log datetime msec localtime</span>
Router(config)# <span style="color: #DCDCAA;">service sequence-numbers</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Local Logging Destinations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Console</td><td style="padding: 8px; border-bottom: 1px solid #444;">Direct console port output</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #6b7280;">Default: warnings</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Monitor</td><td style="padding: 8px; border-bottom: 1px solid #444;">VTY terminal sessions</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #6b7280;">Requires 'terminal monitor'</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Buffer</td><td style="padding: 8px; border-bottom: 1px solid #444;">Router memory buffer</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #6b7280;">Circular buffer, size configurable</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">File</td><td style="padding: 8px;">Local flash/disk storage</td><td style="padding: 8px; color: #6b7280;">Persistent across reboots</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Advanced Local Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># File logging configuration</span>
Router(config)# <span style="color: #DCDCAA;">logging file flash:syslog.txt 32768 debugging</span>

<span style="color: #6A9955;"># Buffered logging with size and level</span>
Router(config)# <span style="color: #DCDCAA;">logging buffered 65536 informational</span>

<span style="color: #6A9955;"># Rate limiting to prevent log flooding</span>
Router(config)# <span style="color: #DCDCAA;">logging rate-limit console 10 except errors</span>

<span style="color: #6A9955;"># Synchronous logging for console</span>
Router(config)# <span style="color: #DCDCAA;">line console 0</span>
Router(config-line)# <span style="color: #DCDCAA;">logging synchronous</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Timestamp Configuration Options</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Basic timestamp options</span>
Router(config)# <span style="color: #DCDCAA;">service timestamps log uptime</span>
Router(config)# <span style="color: #DCDCAA;">service timestamps log datetime</span>

<span style="color: #6A9955;"># Enhanced timestamp with milliseconds and timezone</span>
Router(config)# <span style="color: #DCDCAA;">service timestamps log datetime msec localtime show-timezone</span>

<span style="color: #6A9955;"># Debug timestamps (separate from log timestamps)</span>
Router(config)# <span style="color: #DCDCAA;">service timestamps debug datetime msec</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Buffer Management</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Circular Buffer:</strong> Oldest entries overwritten when buffer fills</li>
                <li><strong style="color: #3b82f6;">Size Limits:</strong> 4096 to 2147483647 bytes (platform dependent)</li>
                <li><strong style="color: #f59e0b;">Memory Impact:</strong> Larger buffers consume more router memory</li>
                <li><strong style="color: #ef4444;">Volatile:</strong> Buffer contents lost on reboot (use file logging for persistence)</li>
            </ul>
            
            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show logging</span>
Router# <span style="color: #DCDCAA;">show logging | include Interface</span>
Router# <span style="color: #DCDCAA;">clear logging</span>
Router# <span style="color: #DCDCAA;">terminal monitor</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure logging to console, monitor, buffer, and file destinations</li>
                    <li>Set appropriate severity levels for different destinations</li>
                    <li>Enable timestamps with millisecond precision</li>
                    <li>Understand buffer size limitations and circular buffer behavior</li>
                </ul>
            </div>
        </div>
    `,

    "Remote Logging & Servers": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.5.c: Remote Logging & Servers</h3>
            <p>Configure centralized syslog servers for enterprise-wide log collection and analysis. Essential for network monitoring, compliance, and troubleshooting in distributed environments.</p>
            
            <h4 style="color: #F5B041;">Remote Syslog Server Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure remote syslog server</span>
Router(config)# <span style="color: #DCDCAA;">logging host 192.168.1.100</span>
Router(config)# <span style="color: #DCDCAA;">logging trap informational</span>

<span style="color: #6A9955;"># Specify source interface for consistent source IP</span>
Router(config)# <span style="color: #DCDCAA;">logging source-interface loopback0</span>

<span style="color: #6A9955;"># Set facility code for organizational purposes</span>
Router(config)# <span style="color: #DCDCAA;">logging facility local7</span>

<span style="color: #6A9955;"># Multiple syslog servers for redundancy</span>
Router(config)# <span style="color: #DCDCAA;">logging host 192.168.1.101</span>
Router(config)# <span style="color: #DCDCAA;">logging host 192.168.1.102 transport udp port 1514</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Advanced Remote Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># VRF-aware logging</span>
Router(config)# <span style="color: #DCDCAA;">logging host 10.1.1.100 vrf MGMT</span>

<span style="color: #6A9955;"># Secure syslog with TLS (where supported)</span>
Router(config)# <span style="color: #DCDCAA;">logging host 192.168.1.100 transport tcp port 6514 secure</span>

<span style="color: #6A9955;"># Origin ID for unique device identification</span>
Router(config)# <span style="color: #DCDCAA;">logging origin-id hostname</span>
Router(config)# <span style="color: #DCDCAA;">logging origin-id string "DataCenter-Core"</span>

<span style="color: #6A9955;"># Filter messages sent to remote servers</span>
Router(config)# <span style="color: #DCDCAA;">logging discriminator CRITICAL facility eq local7 severity eq errors</span>
Router(config)# <span style="color: #DCDCAA;">logging host 192.168.1.100 discriminator CRITICAL</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Syslog Server Architecture</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Primary Server</td><td style="padding: 8px; border-bottom: 1px solid #444;">Main log collection point</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #6b7280;">192.168.1.100:514</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Secondary Server</td><td style="padding: 8px; border-bottom: 1px solid #444;">Backup/redundancy</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #6b7280;">192.168.1.101:514</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">Security Server</td><td style="padding: 8px; border-bottom: 1px solid #444;">Critical/security events only</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #6b7280;">10.1.1.100:6514</td></tr>
                    <tr><td style="padding: 8px; color: #ef4444; font-weight: bold;">Archive Server</td><td style="padding: 8px;">Long-term storage/compliance</td><td style="padding: 8px; color: #6b7280;">archive.company.com</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Transport Protocol Considerations</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">UDP (Default):</strong> Fast, connectionless, potential message loss</li>
                <li><strong style="color: #3b82f6;">TCP:</strong> Reliable delivery, connection overhead, buffering on failure</li>
                <li><strong style="color: #f59e0b;">TLS:</strong> Encrypted transport for sensitive environments</li>
                <li><strong style="color: #ef4444;">Port 514:</strong> Standard UDP syslog port</li>
                <li><strong style="color: #6366f1;">Port 6514:</strong> Standard TCP/TLS syslog port</li>
            </ul>
            
            <h4 style="color: #F5B041;">Common Syslog Server Software</h4>
            <div style="background-color: #F3F4F6; padding: 15px; border-radius: 8px; margin: 10px 0; font-family: monospace; font-size: 0.9em; color: #374151;">
                <div><strong>Enterprise Solutions:</strong></div>
                <div>• Splunk Enterprise • LogRhythm • IBM QRadar • ArcSight ESM</div>
                <div style="margin-top: 10px;"><strong>Open Source Options:</strong></div>
                <div>• rsyslog • syslog-ng • Fluentd • ELK Stack (Elasticsearch/Logstash/Kibana)</div>
            </div>
            
            <h4 style="color: #F5B041;">Troubleshooting Remote Logging</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify remote logging configuration</span>
Router# <span style="color: #DCDCAA;">show logging | include Logging</span>
Router# <span style="color: #DCDCAA;">show logging | section Trap</span>

<span style="color: #6A9955;"># Test connectivity to syslog server</span>
Router# <span style="color: #DCDCAA;">ping 192.168.1.100</span>
Router# <span style="color: #DCDCAA;">telnet 192.168.1.100 514</span>

<span style="color: #6A9955;"># Debug logging process</span>
Router# <span style="color: #DCDCAA;">debug logging</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure remote syslog servers with appropriate trap levels</li>
                    <li>Set source interface for consistent originating IP address</li>
                    <li>Understand facility codes and their organizational use</li>
                    <li>Know standard UDP port 514 for syslog communications</li>
                </ul>
            </div>
        </div>
    `,

    "Troubleshooting & Management": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.5.d: Troubleshooting & Management</h3>
            <p>Master syslog analysis and management techniques for effective network troubleshooting. Learn to filter, analyze, and interpret log messages for rapid problem resolution.</p>
            
            <h4 style="color: #EC7063;">Log Analysis Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Basic log viewing</span>
Router# <span style="color: #DCDCAA;">show logging</span>
Router# <span style="color: #DCDCAA;">show logging last 50</span>
Router# <span style="color: #DCDCAA;">show logging | begin Interface</span>

<span style="color: #6A9955;"># Filtered log analysis</span>
Router# <span style="color: #DCDCAA;">show logging | include UPDOWN</span>
Router# <span style="color: #DCDCAA;">show logging | exclude Informational</span>
Router# <span style="color: #DCDCAA;">show logging | section "Mar 15"</span>

<span style="color: #6A9955;"># Real-time monitoring</span>
Router# <span style="color: #DCDCAA;">terminal monitor</span>
Router# <span style="color: #DCDCAA;">terminal no monitor</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Common Log Message Analysis</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <div style="font-family: monospace; font-size: 0.9em;">
                    <div style="color: #dc2626; margin-bottom: 5px;">%LINK-3-UPDOWN: Interface GigabitEthernet0/1, changed state to down</div>
                    <div style="color: #6b7280; margin-bottom: 10px;">→ Physical layer issue: cable, port, or device failure</div>
                    
                    <div style="color: #f59e0b; margin-bottom: 5px;">%LINEPROTO-5-UPDOWN: Line protocol on Interface Gi0/1, changed state to down</div>
                    <div style="color: #6b7280; margin-bottom: 10px;">→ Data link layer issue: follows physical layer change</div>
                    
                    <div style="color: #ef4444; margin-bottom: 5px;">%SYS-2-MALLOCFAIL: Memory allocation of 65536 bytes failed</div>
                    <div style="color: #6b7280; margin-bottom: 10px;">→ Critical: Router running out of memory</div>
                    
                    <div style="color: #22c55e; margin-bottom: 5px;">%SYS-5-CONFIG_I: Configured from console by admin on vty0</div>
                    <div style="color: #6b7280;">→ Configuration change notification</div>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Advanced Filtering and Search</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Time-based filtering</span>
Router# <span style="color: #DCDCAA;">show logging | include "Mar 15 1[0-1]:"</span>

<span style="color: #6A9955;"># Severity-based analysis</span>
Router# <span style="color: #DCDCAA;">show logging | include "%.*-[0-3]-"</span>    <span style="color: #6A9955;"># Critical and above</span>
Router# <span style="color: #DCDCAA;">show logging | include "%.*-[4-5]-"</span>    <span style="color: #6A9955;"># Warnings and notices</span>

<span style="color: #6A9955;"># Interface-specific logs</span>
Router# <span style="color: #DCDCAA;">show logging | include GigabitEthernet0/1</span>

<span style="color: #6A9955;"># Protocol-specific analysis</span>
Router# <span style="color: #DCDCAA;">show logging | include "OSPF|BGP|EIGRP"</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Log Management Best Practices</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Regular Rotation:</strong> Archive logs before buffer overflow</li>
                <li><strong style="color: #3b82f6;">Timestamp Synchronization:</strong> Use NTP for accurate correlation</li>
                <li><strong style="color: #f59e0b;">Severity Tuning:</strong> Adjust levels to reduce noise</li>
                <li><strong style="color: #ef4444;">Rate Limiting:</strong> Prevent log flooding during events</li>
                <li><strong style="color: #6366f1;">Centralized Collection:</strong> Send critical logs to SIEM systems</li>
            </ul>
            
            <h4 style="color: #EC7063;">Troubleshooting Methodology</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">1. Identify</td><td style="padding: 8px; border-bottom: 1px solid #444;">Locate error messages and timestamps</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">2. Correlate</td><td style="padding: 8px; border-bottom: 1px solid #444;">Match logs across multiple devices</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">3. Filter</td><td style="padding: 8px; border-bottom: 1px solid #444;">Focus on relevant severity and time ranges</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">4. Pattern</td><td style="padding: 8px; border-bottom: 1px solid #444;">Look for recurring issues or trends</td></tr>
                    <tr><td style="padding: 8px; color: #6366f1; font-weight: bold;">5. Action</td><td style="padding: 8px;">Implement fixes and verify resolution</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Maintenance Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Clear log buffers</span>
Router# <span style="color: #DCDCAA;">clear logging</span>

<span style="color: #6A9955;"># Archive log buffer to file</span>
Router# <span style="color: #DCDCAA;">archive log config</span>

<span style="color: #6A9955;"># Show logging statistics</span>
Router# <span style="color: #DCDCAA;">show logging count</span>
Router# <span style="color: #DCDCAA;">show logging statistics</span>

<span style="color: #6A9955;"># Disable specific message types</span>
Router(config)# <span style="color: #DCDCAA;">no logging console</span>
Router(config)# <span style="color: #DCDCAA;">logging console critical</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Emergency Procedures</h4>
            <div style="background-color: #F3F4F6; padding: 15px; border-radius: 8px; margin: 10px 0; font-family: monospace; font-size: 0.9em; color: #374151;">
                <div><strong style="color: #dc2626;">Log Flooding:</strong> logging rate-limit console 10</div>
                <div><strong style="color: #f59e0b;">Buffer Full:</strong> clear logging + increase buffer size</div>
                <div><strong style="color: #ef4444;">Critical Issues:</strong> Focus on severity 0-3 messages</div>
                <div><strong style="color: #10b981;">Performance Impact:</strong> Reduce debug logging levels</div>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Use 'show logging' commands with filters for effective analysis</li>
                    <li>Interpret common Cisco log message formats and error codes</li>
                    <li>Understand log correlation across multiple network devices</li>
                    <li>Know emergency procedures for log flooding and buffer management</li>
                </ul>
            </div>
        </div>
    `,

    // 4.6 DHCP Client and Relay
    "DHCP Client Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.6.a: DHCP Client Configuration</h3>
            <p>DHCP client functionality allows network devices to obtain IP configuration automatically from a DHCP server. This is commonly used on interfaces connecting to ISPs or when devices need dynamic addressing.</p>
            
            <h4 style="color: #58D68D;">Basic DHCP Client Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0/1</span>
Router(config-if)# <span style="color: #DCDCAA;">ip address dhcp</span>
Router(config-if)# <span style="color: #DCDCAA;">no shutdown</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp-client default-router distance 100</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Advanced DHCP Client Options</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config-if)# <span style="color: #DCDCAA;">ip address dhcp hostname MyRouter</span>
Router(config-if)# <span style="color: #DCDCAA;">ip dhcp client request tftp-server-address</span>
Router(config-if)# <span style="color: #DCDCAA;">ip dhcp client request router</span>
Router(config-if)# <span style="color: #DCDCAA;">ip dhcp client lease 0 0 1</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">DHCP Client Process</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">1. Interface Up:</strong> Interface comes up with DHCP configuration</li>
                <li><strong style="color: #3b82f6;">2. DISCOVER:</strong> Client sends DHCPDISCOVER broadcast</li>
                <li><strong style="color: #6366f1;">3. OFFER:</strong> Server responds with DHCPOFFER</li>
                <li><strong style="color: #f59e0b;">4. REQUEST:</strong> Client requests specific configuration</li>
                <li><strong style="color: #ef4444;">5. ACK:</strong> Server acknowledges with DHCPACK</li>
                <li><strong style="color: #8b5cf6;">6. Configure:</strong> Client configures interface with parameters</li>
            </ul>
            
            <h4 style="color: #58D68D;">Lease Renewal Process</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">T1 Timer (50% of lease):</strong> Unicast renewal to original server</li>
                <li><strong style="color: #3b82f6;">T2 Timer (87.5% of lease):</strong> Broadcast renewal to any server</li>
                <li><strong style="color: #ef4444;">Lease expiration:</strong> Release IP and restart DHCP process</li>
            </ul>
            
            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show dhcp lease</span>
Router# <span style="color: #DCDCAA;">show ip interface brief</span>
Router# <span style="color: #DCDCAA;">debug dhcp client</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure interface to use DHCP for IP addressing</li>
                    <li>Understand DORA process and lease renewal timers</li>
                    <li>Verify DHCP-learned configuration and troubleshoot issues</li>
                </ul>
            </div>
        </div>
    `,

    "DHCP Relay (IP Helper)": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.6.b: DHCP Relay Agent (IP Helper)</h3>
            <p>DHCP Relay (IP Helper) forwards DHCP broadcasts across routed networks, allowing centralized DHCP servers to serve multiple subnets. This eliminates the need for DHCP servers on every subnet.</p>
            
            <h4 style="color: #58D68D;">DHCP Relay Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">ip helper-address 192.168.100.10</span>
Router(config-if)# <span style="color: #DCDCAA;">ip helper-address 192.168.100.11</span>
Router(config)# <span style="color: #DCDCAA;">ip forward-protocol udp 67</span>
Router(config)# <span style="color: #DCDCAA;">ip forward-protocol udp 68</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">How DHCP Relay Works</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">1. Client Broadcast:</strong> Client broadcasts DHCPDISCOVER on local subnet</li>
                <li><strong style="color: #3b82f6;">2. Router Receives:</strong> Router receives broadcast on DHCP-enabled interface</li>
                <li><strong style="color: #6366f1;">3. Router Unicasts:</strong> Router unicasts DHCPDISCOVER to configured helper addresses</li>
                <li><strong style="color: #f59e0b;">4. Server Response:</strong> DHCP server receives request with relay agent information</li>
                <li><strong style="color: #ef4444;">5. Server Unicasts:</strong> Server unicasts DHCPOFFER back to relay agent</li>
                <li><strong style="color: #8b5cf6;">6. Relay Broadcasts:</strong> Relay agent broadcasts DHCPOFFER to original subnet</li>
                <li><strong style="color: #06b6d4;">7. Process Continues:</strong> Process continues for REQUEST/ACK exchange</li>
            </ul>
            
            <h4 style="color: #58D68D;">Option 82 (Relay Agent Information)</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">ip dhcp relay information option</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp relay information check</span>
Router(config)# <span style="color: #DCDCAA;">ip dhcp relay information trust-all</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Protocols Forwarded by IP Helper</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">DHCP</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP 67/68</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">DNS</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP 53</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Time</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP 37</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">NetBIOS</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP 137-138</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">TFTP</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP 69</td></tr>
                    <tr><td style="padding: 8px; color: #8b5cf6; font-weight: bold;">TACACS</td><td style="padding: 8px;">UDP 49</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show ip interface gigabitethernet0/0/0</span>
Router# <span style="color: #DCDCAA;">debug ip dhcp relay</span>
Router# <span style="color: #DCDCAA;">show ip helper-address</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure ip helper-address on client-facing interfaces</li>
                    <li>Understand relay agent operation and UDP port forwarding</li>
                    <li>Know Option 82 for relay agent information insertion</li>
                    <li>Troubleshoot DHCP relay functionality</li>
                </ul>
            </div>
        </div>
    `,

    // 4.7 QoS Concepts
    "QoS PHB": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.7: Quality of Service Per-Hop Behavior (PHB)</h3>
            <p>Quality of Service (QoS) Per-Hop Behavior (PHB) defines how packets are treated at each network device. QoS ensures critical applications receive appropriate network resources while managing congestion.</p>
            
            <h4 style="color: #F5B041;">QoS Components</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Classification:</strong> Identify traffic types based on various criteria</li>
                <li><strong style="color: #3b82f6;">Marking:</strong> Tag packets with QoS values (DSCP, IP Precedence, CoS)</li>
                <li><strong style="color: #6366f1;">Queuing:</strong> Place packets into appropriate queues</li>
                <li><strong style="color: #f59e0b;">Congestion Management:</strong> Schedule packets from queues</li>
                <li><strong style="color: #ef4444;">Policing:</strong> Rate-limit traffic exceeding defined thresholds</li>
                <li><strong style="color: #8b5cf6;">Shaping:</strong> Smooth traffic to conform to defined rates</li>
            </ul>
            
            <h4 style="color: #F5B041;">Traffic Classification Methods</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">access-list 100 permit tcp any any eq 80</span>
Router(config)# <span style="color: #DCDCAA;">class-map HTTP</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match access-group 100</span>
Router(config)# <span style="color: #DCDCAA;">class-map VOICE</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match ip dscp ef</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match protocol rtp</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">DSCP Markings</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #dc2626; font-weight: bold;">EF (46)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Expedited Forwarding (Voice)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f97316; font-weight: bold;">AF41 (34)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Assured Forwarding Class 4 (Video)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #eab308; font-weight: bold;">AF31 (26)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Assured Forwarding Class 3 (Mission Critical)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #22c55e; font-weight: bold;">AF21 (18)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Assured Forwarding Class 2 (Transactional)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">AF11 (10)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Assured Forwarding Class 1 (Bulk Data)</td></tr>
                    <tr><td style="padding: 8px; color: #6b7280; font-weight: bold;">BE (0)</td><td style="padding: 8px;">Best Effort (Default)</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand QoS marking and classification concepts</li>
                    <li>Know standard DSCP values (EF, AF classes, BE)</li>
                    <li>Recognize QoS policy components and implementation</li>
                </ul>
            </div>
        </div>
    `,

    "Traffic Classification & Marking": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.7: Traffic Classification and Marking</h3>
            <p>Traffic classification identifies different types of network traffic, while marking applies QoS labels to packets for prioritization throughout the network. This is the foundation of any QoS implementation.</p>
            
            <h4 style="color: #F5B041;">Classification Criteria</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Layer 3:</strong> IP addresses, DSCP, IP Precedence, protocol type</li>
                <li><strong style="color: #3b82f6;">Layer 4:</strong> TCP/UDP ports, application protocols</li>
                <li><strong style="color: #6366f1;">Layer 2:</strong> CoS markings, VLAN IDs, source MAC</li>
                <li><strong style="color: #f59e0b;">Deep Packet:</strong> Application signatures, URL patterns</li>
            </ul>
            
            <h4 style="color: #F5B041;">DSCP Marking Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">class-map match-all VOICE</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match protocol rtp</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match ip dscp ef</span>

Router(config)# <span style="color: #DCDCAA;">class-map match-any VIDEO</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match access-group name VIDEO-ACL</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match protocol http url "*video*"</span>

Router(config)# <span style="color: #DCDCAA;">policy-map QOS-POLICY</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class VOICE</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">set dscp ef</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">priority percent 30</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class VIDEO</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">set dscp af41</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">bandwidth percent 25</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Marking Locations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Location</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Advantage</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Marking Method</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Source Device</td><td style="padding: 5px; border-bottom: 1px solid #444;">Application aware</td><td style="padding: 5px; border-bottom: 1px solid #444;">DSCP, CoS</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Access Switch</td><td style="padding: 5px; border-bottom: 1px solid #444;">Trust boundary</td><td style="padding: 5px; border-bottom: 1px solid #444;">CoS to DSCP</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Distribution</td><td style="padding: 5px; border-bottom: 1px solid #444;">Aggregation point</td><td style="padding: 5px; border-bottom: 1px solid #444;">DSCP re-mark</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">WAN Edge</td><td style="padding: 5px;">Bandwidth control</td><td style="padding: 5px;">DSCP to MPLS EXP</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Trust Boundaries</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">mls qos trust dscp</span>
Switch(config-if)# <span style="color: #DCDCAA;">mls qos trust cos</span>
Switch(config-if)# <span style="color: #DCDCAA;">auto qos voip cisco-phone</span>
Switch(config-if)# <span style="color: #DCDCAA;">auto qos voip trust</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand trust boundaries and marking locations</li>
                    <li>Know DSCP, CoS, and IP Precedence relationships</li>
                    <li>Configure class-maps and policy-maps for marking</li>
                    <li>Recognize Auto-QoS commands and functionality</li>
                </ul>
            </div>
        </div>
    `,

    "Congestion Management": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.7: Congestion Management and Queuing</h3>
            <p>Congestion management determines how packets are scheduled for transmission when interface queues are full. Different queuing algorithms provide various levels of service guarantees and fairness.</p>
            
            <h4 style="color: #F5B041;">Queuing Algorithms</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #6b7280;">FIFO:</strong> First In, First Out - Default, no prioritization</li>
                <li><strong style="color: #dc2626;">PQ:</strong> Priority Queuing - Strict priority, risk of starvation</li>
                <li><strong style="color: #3b82f6;">WFQ:</strong> Weighted Fair Queuing - Flow-based fairness</li>
                <li><strong style="color: #10b981;">CBWFQ:</strong> Class-Based WFQ - Class-based bandwidth allocation</li>
                <li><strong style="color: #f59e0b;">LLQ:</strong> Low Latency Queuing - Priority + CBWFQ combination</li>
            </ul>
            
            <h4 style="color: #F5B041;">Class-Based Weighted Fair Queuing</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">policy-map WAN-OUT</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class VOICE</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">priority percent 30</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class VIDEO</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">bandwidth percent 25</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class MISSION-CRITICAL</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">bandwidth percent 20</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class class-default</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">bandwidth percent 25</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">fair-queue</span>

Router(config)# <span style="color: #DCDCAA;">interface Serial0/0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">service-policy output WAN-OUT</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Priority vs Bandwidth Allocation</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Command</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Behavior</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Use Case</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-family: monospace; color: #dc2626;">priority</td><td style="padding: 5px; border-bottom: 1px solid #444;">Strict priority, served first</td><td style="padding: 5px; border-bottom: 1px solid #444;">Voice, Real-time</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-family: monospace; color: #3b82f6;">bandwidth</td><td style="padding: 5px; border-bottom: 1px solid #444;">Guaranteed minimum bandwidth</td><td style="padding: 5px; border-bottom: 1px solid #444;">Video, Business apps</td></tr>
                    <tr><td style="padding: 5px; font-family: monospace; color: #10b981;">bandwidth remaining</td><td style="padding: 5px;">Share of leftover bandwidth</td><td style="padding: 5px;">Best effort traffic</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Queue Limits and Buffer Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config-pmap-c)# <span style="color: #DCDCAA;">queue-limit 64</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">random-detect</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">random-detect dscp-based</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">random-detect dscp af31 25 40 10</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Monitoring Queuing Statistics</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show policy-map interface serial0/0/0</span>
Router# <span style="color: #DCDCAA;">show queueing interface serial0/0/0</span>
Router# <span style="color: #DCDCAA;">show interface serial0/0/0</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand difference between priority and bandwidth commands</li>
                    <li>Know CBWFQ configuration and policy-map structure</li>
                    <li>Recognize queue management and buffer tuning concepts</li>
                    <li>Troubleshoot queuing with show policy-map interface</li>
                </ul>
            </div>
        </div>
    `,

    "Traffic Policing": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.7: Traffic Policing and Rate Limiting</h3>
            <p>Traffic policing enforces rate limits by dropping or remarking packets that exceed configured thresholds. Uses token bucket algorithm to measure compliance with committed information rates.</p>
            
            <h4 style="color: #F5B041;">Token Bucket Algorithm</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">CIR:</strong> Committed Information Rate (sustained rate)</li>
                <li><strong style="color: #3b82f6;">Bc:</strong> Committed Burst Size (normal burst)</li>
                <li><strong style="color: #f59e0b;">Be:</strong> Excess Burst Size (additional burst)</li>
                <li><strong style="color: #dc2626;">Conform:</strong> Traffic within CIR + Bc</li>
                <li><strong style="color: #f97316;">Exceed:</strong> Traffic using Be (CIR + Bc + Be)</li>
                <li><strong style="color: #ef4444;">Violate:</strong> Traffic exceeding all limits</li>
            </ul>
            
            <h4 style="color: #F5B041;">Single-Rate Policing Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">policy-map POLICE-WAN</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class BULK-DATA</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">police cir 256000 bc 8000 be 8000</span>
Router(config-pmap-c-police)# <span style="color: #DCDCAA;">conform-action transmit</span>
Router(config-pmap-c-police)# <span style="color: #DCDCAA;">exceed-action set-dscp-transmit af11</span>
Router(config-pmap-c-police)# <span style="color: #DCDCAA;">violate-action drop</span>

Router(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Router(config-if)# <span style="color: #DCDCAA;">service-policy input POLICE-WAN</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Dual-Rate Policing (PIR/CIR)</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config-pmap-c)# <span style="color: #DCDCAA;">police cir 512000 pir 1024000</span>
Router(config-pmap-c-police)# <span style="color: #DCDCAA;">conform-action transmit</span>
Router(config-pmap-c-police)# <span style="color: #DCDCAA;">exceed-action set-dscp-transmit af21</span>
Router(config-pmap-c-police)# <span style="color: #DCDCAA;">violate-action drop</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Policing Actions</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Action</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Description</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Common Use</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-family: monospace; color: #10b981;">transmit</td><td style="padding: 5px; border-bottom: 1px solid #444;">Forward packet unchanged</td><td style="padding: 5px; border-bottom: 1px solid #444;">Conforming traffic</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-family: monospace; color: #f59e0b;">set-dscp-transmit</td><td style="padding: 5px; border-bottom: 1px solid #444;">Remark and forward</td><td style="padding: 5px; border-bottom: 1px solid #444;">Exceeding traffic</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-family: monospace; color: #ef4444;">drop</td><td style="padding: 5px; border-bottom: 1px solid #444;">Discard packet</td><td style="padding: 5px; border-bottom: 1px solid #444;">Violating traffic</td></tr>
                    <tr><td style="padding: 5px; font-family: monospace; color: #3b82f6;">set-prec-transmit</td><td style="padding: 5px;">Set IP Precedence</td><td style="padding: 5px;">Legacy marking</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Monitoring Policing Statistics</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show policy-map interface gi0/1 input</span>

Service-policy input: POLICE-WAN
  Class-map: BULK-DATA (match-all)
    police:
      cir 256000 bps, bc 8000 bytes, be 8000 bytes
      conformed 1250 packets, 1600000 bytes; action: transmit
      exceeded 235 packets, 301440 bytes; action: set-dscp-transmit af11
      violated 89 packets, 114176 bytes; action: drop
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Troubleshooting Common Issues</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #ef4444;">High Drop Rate:</strong> CIR too low, increase burst size</li>
                <li><strong style="color: #f59e0b;">Bursty Traffic:</strong> Adjust Bc/Be parameters</li>
                <li><strong style="color: #3b82f6;">Interface Congestion:</strong> Policing at wrong location</li>
                <li><strong style="color: #10b981;">Performance Issues:</strong> Consider shaping instead</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand token bucket algorithm (CIR, Bc, Be)</li>
                    <li>Configure police commands with conform/exceed/violate actions</li>
                    <li>Know difference between single-rate and dual-rate policing</li>
                    <li>Monitor policing statistics with show policy-map interface</li>
                </ul>
            </div>
        </div>
    `,

    "Traffic Shaping": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.7: Traffic Shaping and Rate Control</h3>
            <p>Traffic shaping smooths traffic bursts by buffering excess packets instead of dropping them. Unlike policing, shaping maintains packet integrity while conforming traffic to specified rates.</p>
            
            <h4 style="color: #F5B041;">Shaping vs Policing Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Aspect</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #10b981; text-align: left;">Traffic Shaping</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #ef4444; text-align: left;">Traffic Policing</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Excess Traffic</td><td style="padding: 5px; border-bottom: 1px solid #444;">Buffer and delay</td><td style="padding: 5px; border-bottom: 1px solid #444;">Drop or remark</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Packet Loss</td><td style="padding: 5px; border-bottom: 1px solid #444;">Minimal (buffer full)</td><td style="padding: 5px; border-bottom: 1px solid #444;">Intentional drops</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Application</td><td style="padding: 5px; border-bottom: 1px solid #444;">Outbound interfaces</td><td style="padding: 5px; border-bottom: 1px solid #444;">Inbound/Outbound</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">TCP Behavior</td><td style="padding: 5px; border-bottom: 1px solid #444;">TCP-friendly</td><td style="padding: 5px; border-bottom: 1px solid #444;">May cause retransmits</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Use Case</td><td style="padding: 5px;">WAN links, Frame Relay</td><td style="padding: 5px;">Rate limiting, SLA enforcement</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Generic Traffic Shaping (GTS)</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">interface Serial0/0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">traffic-shape rate 512000 64000 64000 1000</span>
Router(config-if)# <span style="color: #DCDCAA;">traffic-shape adaptive 512000</span>

! Class-based shaping (preferred method)
Router(config)# <span style="color: #DCDCAA;">policy-map SHAPE-WAN</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class class-default</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">shape average 512000 64000 64000</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">service-policy WAN-OUT</span>

Router(config)# <span style="color: #DCDCAA;">interface Serial0/0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">service-policy output SHAPE-WAN</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Hierarchical QoS Policy</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Parent policy (shaping)
Router(config)# <span style="color: #DCDCAA;">policy-map PARENT-SHAPE</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class class-default</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">shape average 1024000</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">service-policy CHILD-QOS</span>

! Child policy (queuing)
Router(config)# <span style="color: #DCDCAA;">policy-map CHILD-QOS</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class VOICE</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">priority percent 30</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class VIDEO</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">bandwidth percent 25</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class class-default</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">bandwidth percent 45</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Adaptive Shaping</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">BECN-based:</strong> Reduce rate when BECN received</li>
                <li><strong style="color: #3b82f6;">FECN-based:</strong> Respond to forward congestion</li>
                <li><strong style="color: #f59e0b;">Interface-based:</strong> Adjust based on interface utilization</li>
            </ul>
            
            <h4 style="color: #F5B041;">Shaping Buffer Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config-pmap-c)# <span style="color: #DCDCAA;">shape average 512000</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">queue-limit 100</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">shape max-buffers 1000</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Monitoring Shaping Statistics</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show policy-map interface serial0/0/0</span>

Service-policy output: SHAPE-WAN
  Class-map: class-default (match-any)
    Traffic Shaping
      Target/Average   Byte   Sustain   Excess    Interval  Increment
      Rate             Limit  bits/int  bits/int  (ms)      (bytes)
      512000/512000    2000   8000      8000      16        1000

    Shaping Active
    Queue Depth 45
    Packets Delayed 2341
    Queue Length:
      Mean   Max
      23     64
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand shaping vs policing behavior differences</li>
                    <li>Configure class-based shaping with shape average command</li>
                    <li>Implement hierarchical QoS policies (parent/child)</li>
                    <li>Monitor shaping statistics and queue depths</li>
                </ul>
            </div>
        </div>
    `,

    "QoS Models": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.7: QoS Models and Implementation Strategies</h3>
            <p>Three primary QoS models provide different approaches to implementing quality of service: Best Effort, Integrated Services (IntServ), and Differentiated Services (DiffServ). Each model offers distinct advantages and deployment considerations.</p>
            
            <h4 style="color: #F5B041;">Best Effort Model</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #6b7280;">Characteristics:</strong> No QoS guarantees, FIFO queuing only</li>
                <li><strong style="color: #6b7280;">Scalability:</strong> Infinite - no state information required</li>
                <li><strong style="color: #6b7280;">Implementation:</strong> Default Internet model, simple and reliable</li>
                <li><strong style="color: #6b7280;">Use Cases:</strong> Basic Internet connectivity, non-critical applications</li>
            </ul>
            
            <h4 style="color: #F5B041;">Integrated Services (IntServ)</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #3b82f6;">Protocol:</strong> Resource Reservation Protocol (RSVP)</li>
                <li><strong style="color: #3b82f6;">Granularity:</strong> Per-flow reservations and guarantees</li>
                <li><strong style="color: #3b82f6;">State:</strong> Soft-state maintained at each router</li>
                <li><strong style="color: #3b82f6;">Scalability:</strong> Limited - state grows with number of flows</li>
                <li><strong style="color: #3b82f6;">Applications:</strong> Voice, video conferencing, mission-critical apps</li>
            </ul>
            
            <h4 style="color: #F5B041;">RSVP Configuration Example</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">ip rsvp bandwidth 1024 256</span>
Router(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Router(config-if)# <span style="color: #DCDCAA;">ip rsvp bandwidth 512 128</span>
Router(config-if)# <span style="color: #DCDCAA;">fair-queue</span>

! Monitor RSVP reservations
Router# <span style="color: #DCDCAA;">show ip rsvp reservation</span>
Router# <span style="color: #DCDCAA;">show ip rsvp interface</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Differentiated Services (DiffServ)</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Marking:</strong> DSCP field in IP header (6 bits)</li>
                <li><strong style="color: #10b981;">Granularity:</strong> Per-class treatment, not per-flow</li>
                <li><strong style="color: #10b981;">Scalability:</strong> Excellent - stateless operation</li>
                <li><strong style="color: #10b981;">Implementation:</strong> Industry standard for enterprise networks</li>
                <li><strong style="color: #10b981;">PHBs:</strong> Expedited Forwarding (EF), Assured Forwarding (AF), Best Effort (BE)</li>
            </ul>
            
            <h4 style="color: #F5B041;">DiffServ Implementation</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Classification and marking at network edge
Router(config)# <span style="color: #DCDCAA;">class-map match-all VOICE-SIGNALING</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match protocol sip</span>
Router(config-cmap)# <span style="color: #DCDCAA;">match protocol h323</span>

Router(config)# <span style="color: #DCDCAA;">policy-map EDGE-MARKING</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class VOICE-SIGNALING</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">set dscp cs3</span>
Router(config-pmap)# <span style="color: #DCDCAA;">class VOICE-BEARER</span>
Router(config-pmap-c)# <span style="color: #DCDCAA;">set dscp ef</span>

! Trust markings in network core
Router(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Router(config-if)# <span style="color: #DCDCAA;">service-policy input TRUST-DSCP</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">DiffServ Code Points (DSCP)</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">PHB</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">DSCP</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Application</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Treatment</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #dc2626; font-weight: bold;">EF</td><td style="padding: 5px; border-bottom: 1px solid #444;">46</td><td style="padding: 5px; border-bottom: 1px solid #444;">Voice Bearer</td><td style="padding: 5px; border-bottom: 1px solid #444;">Priority Queue</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #f97316; font-weight: bold;">AF41</td><td style="padding: 5px; border-bottom: 1px solid #444;">34</td><td style="padding: 5px; border-bottom: 1px solid #444;">Video</td><td style="padding: 5px; border-bottom: 1px solid #444;">Guaranteed BW</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #eab308; font-weight: bold;">AF31</td><td style="padding: 5px; border-bottom: 1px solid #444;">26</td><td style="padding: 5px; border-bottom: 1px solid #444;">Mission Critical</td><td style="padding: 5px; border-bottom: 1px solid #444;">Guaranteed BW</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #22c55e; font-weight: bold;">AF21</td><td style="padding: 5px; border-bottom: 1px solid #444;">18</td><td style="padding: 5px; border-bottom: 1px solid #444;">Transactional</td><td style="padding: 5px; border-bottom: 1px solid #444;">Guaranteed BW</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">CS3</td><td style="padding: 5px; border-bottom: 1px solid #444;">24</td><td style="padding: 5px; border-bottom: 1px solid #444;">Voice Signaling</td><td style="padding: 5px; border-bottom: 1px solid #444;">Guaranteed BW</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold; color: #6b7280;">BE</td><td style="padding: 5px;">0</td><td style="padding: 5px;">Best Effort</td><td style="padding: 5px;">Remaining BW</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">QoS Model Selection Criteria</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #F39C12; text-align: left;">Factor</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #6b7280; text-align: left;">Best Effort</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #3b82f6; text-align: left;">IntServ</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #10b981; text-align: left;">DiffServ</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Complexity</td><td style="padding: 5px; border-bottom: 1px solid #444;">Very Low</td><td style="padding: 5px; border-bottom: 1px solid #444;">High</td><td style="padding: 5px; border-bottom: 1px solid #444;">Medium</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Scalability</td><td style="padding: 5px; border-bottom: 1px solid #444;">Excellent</td><td style="padding: 5px; border-bottom: 1px solid #444;">Poor</td><td style="padding: 5px; border-bottom: 1px solid #444;">Excellent</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Guarantees</td><td style="padding: 5px; border-bottom: 1px solid #444;">None</td><td style="padding: 5px; border-bottom: 1px solid #444;">Hard</td><td style="padding: 5px; border-bottom: 1px solid #444;">Soft</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Deployment</td><td style="padding: 5px;">Internet</td><td style="padding: 5px;">Small Networks</td><td style="padding: 5px;">Enterprise</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the three QoS models and their characteristics</li>
                    <li>Know DiffServ DSCP values and Per-Hop Behaviors (PHBs)</li>
                    <li>Recognize when to use IntServ vs DiffServ approaches</li>
                    <li>Understand QoS marking trust boundaries and domains</li>
                </ul>
            </div>
        </div>
    `,

    // 4.8 SSH Remote Access
    "SSH Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.8.a: SSH Protocol Fundamentals</h3>
            <p>Secure Shell (SSH) is a cryptographic network protocol that provides secure communication over an insecure network. SSH replaces insecure protocols like Telnet, providing encryption, authentication, and data integrity.</p>
            
            <h4 style="color: #EC7063;">SSH Protocol Overview</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #EC7063; text-align: left;">Component</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #10b981; text-align: left;">SSH</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #ef4444; text-align: left;">Telnet</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Encryption</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">AES, 3DES, ChaCha20</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #ef4444;">None (Plaintext)</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Authentication</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">Password, Keys, Certificates</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #ef4444;">Password Only</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Port</td><td style="padding: 5px; border-bottom: 1px solid #444;">22/tcp</td><td style="padding: 5px; border-bottom: 1px solid #444;">23/tcp</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Integrity</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">HMAC-SHA256</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #ef4444;">None</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Key Exchange</td><td style="padding: 5px; color: #10b981;">Diffie-Hellman</td><td style="padding: 5px; color: #ef4444;">Not Applicable</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">SSH Protocol Versions</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #ef4444;">SSH-1.x:</strong> Legacy version with security vulnerabilities (deprecated)</li>
                <li><strong style="color: #10b981;">SSH-2.0:</strong> Current standard with improved security and features</li>
                <li><strong style="color: #3b82f6;">Backward Compatibility:</strong> SSH 2.0 can communicate with SSH 1.x (not recommended)</li>
            </ul>
            
            <h4 style="color: #EC7063;">Basic SSH Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure basic SSH requirements</span>
Router(config)# <span style="color: #DCDCAA;">hostname R1</span>
Router(config)# <span style="color: #DCDCAA;">ip domain-name example.com</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa modulus 2048</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh version 2</span>
Router(config)# <span style="color: #DCDCAA;">username admin privilege 15 secret P@ssw0rd123</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input ssh</span>
Router(config-line)# <span style="color: #DCDCAA;">login local</span>
</code>
            </pre>
            
            <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 10px 0; color: #92400E;">
                <h5 style="color: #D97706; margin-bottom: 10px;">SSH Prerequisites</h5>
                <ul style="margin-left: 20px;">
                    <li>Hostname must be configured (not default)</li>
                    <li>Domain name required for RSA key generation</li>
                    <li>Minimum IOS version supporting SSH</li>
                    <li>Sufficient memory for cryptographic operations</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>SSH provides encrypted remote access replacing Telnet</li>
                    <li>SSH version 2 is the current standard and recommended</li>
                    <li>Requires hostname and domain-name for key generation</li>
                    <li>Uses port 22/tcp for secure communication</li>
                </ul>
            </div>
        </div>
    `,

    "SSH Authentication Methods": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.8.b: SSH Authentication Methods</h3>
            <p>SSH supports multiple authentication methods to verify user identity. Understanding and configuring appropriate authentication methods is crucial for secure network device management.</p>
            
            <h4 style="color: #EC7063;">Password Authentication</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure password-based authentication</span>
Router(config)# <span style="color: #DCDCAA;">username admin privilege 15 secret P@ssw0rd123</span>
Router(config)# <span style="color: #DCDCAA;">username readonly privilege 1 secret ReadOnly456</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">login local</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input ssh</span>
<span style="color: #6A9955;">! Optional: Enable password policy</span>
Router(config)# <span style="color: #DCDCAA;">security passwords min-length 8</span>
Router(config)# <span style="color: #DCDCAA;">security authentication failure rate 3 log</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Public Key Authentication</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure public key authentication</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh pubkey-chain</span>
Router(conf-ssh-pubkey)# <span style="color: #DCDCAA;">username admin</span>
Router(conf-ssh-pubkey-user)# <span style="color: #DCDCAA;">key-string</span>
Router(conf-ssh-pubkey-data)# <span style="color: #CE9178;">AAAAB3NzaC1yc2EAAAADAQABAAABgQC...</span>
Router(conf-ssh-pubkey-data)# <span style="color: #DCDCAA;">exit</span>
Router(conf-ssh-pubkey-user)# <span style="color: #DCDCAA;">exit</span>
Router(conf-ssh-pubkey)# <span style="color: #DCDCAA;">exit</span>
<span style="color: #6A9955;">! Disable password authentication (optional)</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh server authenticate user publickey</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Authentication Method Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #EC7063; text-align: left;">Method</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #10b981; text-align: left;">Security</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #3b82f6; text-align: left;">Complexity</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #6366f1; text-align: left;">Use Case</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Password</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #f59e0b;">Medium</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">Low</td><td style="padding: 5px; border-bottom: 1px solid #444;">Small networks</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Public Key</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">High</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #f59e0b;">Medium</td><td style="padding: 5px; border-bottom: 1px solid #444;">Automated systems</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Certificate</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">Very High</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #ef4444;">High</td><td style="padding: 5px; border-bottom: 1px solid #444;">Enterprise PKI</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Two-Factor</td><td style="padding: 5px; color: #10b981;">Very High</td><td style="padding: 5px; color: #ef4444;">High</td><td style="padding: 5px;">High-security environments</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">AAA Integration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure SSH with AAA authentication</span>
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Router(config)# <span style="color: #DCDCAA;">aaa authentication login SSH_LOGIN group radius local</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">login authentication SSH_LOGIN</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input ssh</span>
<span style="color: #6A9955;">! Configure RADIUS server</span>
Router(config)# <span style="color: #DCDCAA;">radius server AUTH-SERVER</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">address ipv4 192.168.1.100</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">key SecretKey123</span>
</code>
            </pre>
            
            <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 10px 0; color: #92400E;">
                <h5 style="color: #D97706; margin-bottom: 10px;">Authentication Best Practices</h5>
                <ul style="margin-left: 20px;">
                    <li>Use strong passwords with complexity requirements</li>
                    <li>Implement account lockout policies for failed attempts</li>
                    <li>Consider public key authentication for automation</li>
                    <li>Integrate with centralized AAA systems for scalability</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Password authentication is simplest but least secure</li>
                    <li>Public key authentication provides non-repudiation</li>
                    <li>AAA integration enables centralized authentication</li>
                    <li>Configure appropriate privilege levels for user roles</li>
                </ul>
            </div>
        </div>
    `,

    "SSH Key Management": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.8.c: SSH Key Management</h3>
            <p>Proper SSH key management is essential for maintaining secure authentication. This includes key generation, distribution, rotation, and storage across network infrastructure.</p>
            
            <h4 style="color: #EC7063;">RSA Key Generation</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Generate RSA key pair</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa general-keys modulus 2048</span>
The name for the keys will be: R1.example.com
% The key modulus size is 2048 bits
% Generating 2048 bit RSA keys, keys will be non-exportable...
[OK] (elapsed time was 3 seconds)

<span style="color: #6A9955;">! Generate RSA key with specific label</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa general-keys label SSH-KEYS modulus 4096</span>

<span style="color: #6A9955;">! View generated keys</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey rsa</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">ECDSA Key Generation</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Generate ECDSA key pair (more efficient)</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate ec keysize 256</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate ec keysize 384</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate ec keysize 521</span>

<span style="color: #6A9955;">! View ECDSA keys</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey ec</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Key Strength Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #EC7063; text-align: left;">Algorithm</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #10b981; text-align: left;">Key Size</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #3b82f6; text-align: left;">Security Level</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #6366f1; text-align: left;">Performance</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">RSA</td><td style="padding: 5px; border-bottom: 1px solid #444;">1024 bits</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #ef4444;">Weak (deprecated)</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">Fast</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">RSA</td><td style="padding: 5px; border-bottom: 1px solid #444;">2048 bits</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">Good</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #f59e0b;">Medium</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">RSA</td><td style="padding: 5px; border-bottom: 1px solid #444;">4096 bits</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">Very Good</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #ef4444;">Slow</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">ECDSA</td><td style="padding: 5px; border-bottom: 1px solid #444;">256 bits</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">Excellent</td><td style="padding: 5px; border-bottom: 1px solid #444; color: #10b981;">Fast</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">ECDSA</td><td style="padding: 5px;">384 bits</td><td style="padding: 5px; color: #10b981;">Excellent</td><td style="padding: 5px; color: #10b981;">Fast</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Key Management Operations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Export public key for distribution</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey rsa | redirect tftp://192.168.1.100/R1-pubkey.txt</span>

<span style="color: #6A9955;">! Delete existing keys (will break SSH!)</span>
Router(config)# <span style="color: #DCDCAA;">crypto key zeroize rsa</span>
Router(config)# <span style="color: #DCDCAA;">crypto key zeroize ec</span>

<span style="color: #6A9955;">! Regenerate keys (recommended annually)</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa modulus 2048 on-startup</span>

<span style="color: #6A9955;">! Configure key storage location</span>
Router(config)# <span style="color: #DCDCAA;">crypto key storage flash</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Client Key Distribution</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Add client public key to router</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh pubkey-chain</span>
Router(conf-ssh-pubkey)# <span style="color: #DCDCAA;">username admin</span>
Router(conf-ssh-pubkey-user)# <span style="color: #DCDCAA;">key-string</span>
Router(conf-ssh-pubkey-data)# <span style="color: #CE9178;">ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDL...</span>
Router(conf-ssh-pubkey-data)# <span style="color: #DCDCAA;">exit</span>

<span style="color: #6A9955;">! Remove client key</span>
Router(conf-ssh-pubkey)# <span style="color: #DCDCAA;">no username admin</span>

<span style="color: #6A9955;">! View configured public keys</span>
Router# <span style="color: #DCDCAA;">show ip ssh pubkey-chain</span>
</code>
            </pre>
            
            <div style="background-color: #DCFCE7; border-left: 4px solid #16A34A; padding: 15px; margin: 10px 0; color: #166534;">
                <h5 style="color: #15803D; margin-bottom: 10px;">Key Management Best Practices</h5>
                <ul style="margin-left: 20px;">
                    <li>Use minimum 2048-bit RSA keys or 256-bit ECDSA keys</li>
                    <li>Rotate keys annually or after security incidents</li>
                    <li>Store keys securely with backup procedures</li>
                    <li>Document key distribution and access procedures</li>
                    <li>Consider automated key management for large deployments</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Key Backup and Recovery</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Export keys to secure storage</span>
Router# <span style="color: #DCDCAA;">crypto key export rsa SSH-KEYS pem terminal 3des SecretPass123</span>

<span style="color: #6A9955;">! Import keys from backup</span>
Router(config)# <span style="color: #DCDCAA;">crypto key import rsa SSH-KEYS pem terminal SecretPass123</span>

<span style="color: #6A9955;">! Verify key integrity</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey rsa SSH-KEYS</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>RSA keys require minimum 768 bits (recommend 2048+)</li>
                    <li>ECDSA provides equivalent security with smaller key sizes</li>
                    <li>Keys are device-specific and tied to hostname/domain</li>
                    <li>Regular key rotation improves security posture</li>
                </ul>
            </div>
        </div>
    `,

    "SSH Troubleshooting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.8.d: SSH Troubleshooting</h3>
            <p>Systematic SSH troubleshooting involves analyzing connection issues, authentication failures, and performance problems using diagnostic commands and methodical troubleshooting approaches.</p>
            
            <h4 style="color: #EC7063;">Common SSH Issues</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><th style="padding: 8px; border-bottom: 2px solid #444; color: #EC7063; text-align: left;">Issue</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #f59e0b; text-align: left;">Cause</th><th style="padding: 8px; border-bottom: 2px solid #444; color: #10b981; text-align: left;">Solution</th></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Connection Refused</td><td style="padding: 5px; border-bottom: 1px solid #444;">SSH not enabled</td><td style="padding: 5px; border-bottom: 1px solid #444;">Configure SSH server</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Authentication Failed</td><td style="padding: 5px; border-bottom: 1px solid #444;">Wrong credentials</td><td style="padding: 5px; border-bottom: 1px solid #444;">Verify username/password</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Key Exchange Failed</td><td style="padding: 5px; border-bottom: 1px solid #444;">No RSA keys</td><td style="padding: 5px; border-bottom: 1px solid #444;">Generate crypto keys</td></tr>
                    <tr><td style="padding: 5px; border-bottom: 1px solid #444; font-weight: bold;">Timeout</td><td style="padding: 5px; border-bottom: 1px solid #444;">Network/ACL issue</td><td style="padding: 5px; border-bottom: 1px solid #444;">Check connectivity</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Protocol Mismatch</td><td style="padding: 5px;">Version incompatibility</td><td style="padding: 5px;">Configure SSH version</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">SSH Diagnostic Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Check SSH server status</span>
Router# <span style="color: #DCDCAA;">show ip ssh</span>
SSH Enabled - version 2.0
Authentication methods:publickey,keyboard-interactive,password
Authentication Publickey Algorithms:x509v3-ssh-rsa,ssh-rsa
Hostkey Algorithms:x509v3-ssh-rsa,ssh-rsa
Encryption Algorithms:aes128-ctr,aes192-ctr,aes256-ctr
MAC Algorithms:hmac-sha2-256,hmac-sha2-512,hmac-sha1

<span style="color: #6A9955;">! View active SSH sessions</span>
Router# <span style="color: #DCDCAA;">show ssh</span>
Connection  Version Mode  Encryption  Hmac         State                 Username
0           2.0     IN    aes128-ctr  hmac-sha1    Session started       admin
1           2.0     OUT   aes128-ctr  hmac-sha1    Session started       backup-user

<span style="color: #6A9955;">! Check RSA key status</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey rsa</span>
% Key pair was generated at: 14:25:33 EST Dec 15 2023
Key name: R1.example.com
Key type: RSA KEYS
Storage Device: not specified
Usage: General Purpose Key
Key is not exportable.
Key Data:
305C300D...
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Debug Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Enable SSH debugging (use carefully in production)</span>
Router# <span style="color: #DCDCAA;">debug ip ssh</span>
SSH0: starting SSH control process
SSH0: Exchanging versions - SSH-2.0-Cisco-1.25
SSH0: client version is SSH-2.0-OpenSSH_7.4
SSH0: algorithm negotiation complete
SSH0: keys exchanged and verified
SSH0: authentication successful for admin

<span style="color: #6A9955;">! Debug SSH client connections</span>
Router# <span style="color: #DCDCAA;">debug ssh client</span>

<span style="color: #6A9955;">! Disable debugging</span>
Router# <span style="color: #DCDCAA;">undebug all</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Systematic Troubleshooting Process</h4>
            <ol style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #3b82f6;">Layer 3 Connectivity:</strong> Verify IP reachability with ping</li>
                <li><strong style="color: #10b981;">SSH Service Status:</strong> Check if SSH is enabled and configured</li>
                <li><strong style="color: #f59e0b;">Port Accessibility:</strong> Test TCP port 22 connectivity</li>
                <li><strong style="color: #ef4444;">Authentication:</strong> Verify credentials and authentication methods</li>
                <li><strong style="color: #6366f1;">Key Exchange:</strong> Ensure proper cryptographic keys are present</li>
                <li><strong style="color: #9333ea;">Access Control:</strong> Check ACLs and line configurations</li>
            </ol>
            
            <h4 style="color: #EC7063;">Connection Testing</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Test connectivity from client</span>
Client$ <span style="color: #DCDCAA;">ping 192.168.1.1</span>
Client$ <span style="color: #DCDCAA;">telnet 192.168.1.1 22</span>
Client$ <span style="color: #DCDCAA;">ssh -v admin@192.168.1.1</span>

<span style="color: #6A9955;">! Test from router (SSH client)</span>
Router# <span style="color: #DCDCAA;">ssh -l admin 192.168.1.10</span>
Router# <span style="color: #DCDCAA;">ssh -c aes128-ctr -v 2 192.168.1.10</span>

<span style="color: #6A9955;">! Check VTY line configuration</span>
Router# <span style="color: #DCDCAA;">show line vty 0 15</span>
Router# <span style="color: #DCDCAA;">show users</span>
</code>
            </pre>
            
            <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 10px 0; color: #92400E;">
                <h5 style="color: #D97706; margin-bottom: 10px;">Troubleshooting Tips</h5>
                <ul style="margin-left: 20px;">
                    <li>Always check basic IP connectivity first</li>
                    <li>Verify hostname and domain-name configuration</li>
                    <li>Ensure sufficient VTY lines are available</li>
                    <li>Check for conflicting transport input commands</li>
                    <li>Verify time synchronization for certificate validation</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Common Configuration Fixes</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Fix missing hostname/domain</span>
Router(config)# <span style="color: #DCDCAA;">hostname RouterA</span>
Router(config)# <span style="color: #DCDCAA;">ip domain-name company.com</span>

<span style="color: #6A9955;">! Regenerate missing keys</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa modulus 2048</span>

<span style="color: #6A9955;">! Fix VTY line issues</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input ssh</span>
Router(config-line)# <span style="color: #DCDCAA;">login local</span>
Router(config-line)# <span style="color: #DCDCAA;">exec-timeout 10 0</span>

<span style="color: #6A9955;">! Clear hanging SSH sessions</span>
Router# <span style="color: #DCDCAA;">clear line vty 2</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Use systematic approach to diagnose SSH issues</li>
                    <li>Verify SSH prerequisites (hostname, domain, keys)</li>
                    <li>Check VTY line configuration and availability</li>
                    <li>Use debug commands carefully in production environments</li>
                </ul>
            </div>
        </div>
    `,

    "SSH Security & Best Practices": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.8.e: SSH Security & Best Practices</h3>
            <p>Implement comprehensive SSH security hardening to protect network infrastructure from unauthorized access and cyber threats. Security best practices ensure robust protection for critical network devices.</p>
            
            <h4 style="color: #EC7063;">SSH Server Hardening</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure SSH version and security settings</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh version 2</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh time-out 60</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh authentication-retries 2</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh logging events</span>

<span style="color: #6A9955;">! Configure strong encryption algorithms</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh server algorithm encryption aes256-ctr aes192-ctr aes128-ctr</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh server algorithm mac hmac-sha2-256 hmac-sha2-512</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh server algorithm kex diffie-hellman-group14-sha256</span>

<span style="color: #6A9955;">! Disable weak algorithms</span>
Router(config)# <span style="color: #DCDCAA;">no ip ssh server algorithm encryption 3des-cbc</span>
Router(config)# <span style="color: #DCDCAA;">no ip ssh server algorithm mac hmac-md5</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Access Control Implementation</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure access control lists</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard SSH_ADMIN</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 192.168.100.0 0.0.0.255</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit host 10.1.1.50</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">deny any log</span>

<span style="color: #6A9955;">! Apply ACL to VTY lines</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">access-class SSH_ADMIN in</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input ssh</span>
Router(config-line)# <span style="color: #DCDCAA;">exec-timeout 5 0</span>
Router(config-line)# <span style="color: #DCDCAA;">login local</span>

<span style="color: #6A9955;">! Configure session limits</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 4</span>
Router(config-line)# <span style="color: #DCDCAA;">session-limit 2</span>
Router(config)# <span style="color: #DCDCAA;">line vty 5 15</span>
Router(config-line)# <span style="color: #DCDCAA;">session-limit 1</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">User Account Security</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure strong password policies</span>
Router(config)# <span style="color: #DCDCAA;">security passwords min-length 12</span>
Router(config)# <span style="color: #DCDCAA;">security authentication failure rate 3 log</span>

<span style="color: #6A9955;">! Create users with appropriate privileges</span>
Router(config)# <span style="color: #DCDCAA;">username netadmin privilege 15 secret 9 $9$2KPX2KPX2KPX</span>
Router(config)# <span style="color: #DCDCAA;">username operator privilege 7 secret 9 $9$1KRY1KRY1KRY</span>
Router(config)# <span style="color: #DCDCAA;">username readonly privilege 1 secret 9 $9$3LMZ3LMZ3LMZ</span>

<span style="color: #6A9955;">! Configure account lockout</span>
Router(config)# <span style="color: #DCDCAA;">aaa local authentication attempts max-fail 3</span>
Router(config)# <span style="color: #DCDCAA;">aaa local authentication lockout-time 300</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">SSH Security Monitoring</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure logging for SSH events</span>
Router(config)# <span style="color: #DCDCAA;">logging buffered 16384 informational</span>
Router(config)# <span style="color: #DCDCAA;">logging host 192.168.1.100</span>
Router(config)# <span style="color: #DCDCAA;">logging facility local0</span>
Router(config)# <span style="color: #DCDCAA;">logging source-interface loopback0</span>

<span style="color: #6A9955;">! Enable SSH-specific logging</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh logging events</span>
Router(config)# <span style="color: #DCDCAA;">login on-failure log</span>
Router(config)# <span style="color: #DCDCAA;">login on-success log</span>

<span style="color: #6A9955;">! Monitor active sessions</span>
Router# <span style="color: #DCDCAA;">show users</span>
Router# <span style="color: #DCDCAA;">show ssh</span>
Router# <span style="color: #DCDCAA;">show logging | include SSH</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">SSH Banner and Legal Notices</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure login banner</span>
Router(config)# <span style="color: #DCDCAA;">banner login ^C</span>
WARNING: Unauthorized access is prohibited.
All connections are monitored and recorded.
Violators will be prosecuted to the full extent of the law.
^C

<span style="color: #6A9955;">! Configure MOTD banner</span>
Router(config)# <span style="color: #DCDCAA;">banner motd ^C</span>
Company Network Infrastructure
Authorized Personnel Only
Contact: netops@company.com
^C

<span style="color: #6A9955;">! Apply banner to VTY lines</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">banner</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Certificate-Based Authentication</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure PKI for certificate authentication</span>
Router(config)# <span style="color: #DCDCAA;">crypto pki trustpoint SSH-CA</span>
Router(ca-trustpoint)# <span style="color: #DCDCAA;">enrollment url http://ca.company.com:80</span>
Router(ca-trustpoint)# <span style="color: #DCDCAA;">subject-name CN=R1.company.com,OU=Network,O=Company</span>
Router(ca-trustpoint)# <span style="color: #DCDCAA;">rsakeypair SSH-KEYS</span>
Router(ca-trustpoint)# <span style="color: #DCDCAA;">revocation-check crl</span>

<span style="color: #6A9955;">! Enroll for certificate</span>
Router(ca-trustpoint)# <span style="color: #DCDCAA;">enrollment terminal</span>
Router# <span style="color: #DCDCAA;">crypto pki enroll SSH-CA</span>

<span style="color: #6A9955;">! Configure SSH to use certificates</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh server authenticate user x509</span>
</code>
            </pre>
            
            <div style="background-color: #DCFCE7; border-left: 4px solid #16A34A; padding: 15px; margin: 10px 0; color: #166534;">
                <h5 style="color: #15803D; margin-bottom: 10px;">Security Best Practices Summary</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>Use SSH version 2 only</strong> - Disable SSHv1 for security</li>
                    <li><strong>Implement strong authentication</strong> - Use keys or certificates when possible</li>
                    <li><strong>Apply access controls</strong> - Limit SSH access by source IP/network</li>
                    <li><strong>Configure session limits</strong> - Prevent resource exhaustion attacks</li>
                    <li><strong>Enable comprehensive logging</strong> - Monitor all SSH activities</li>
                    <li><strong>Regular key rotation</strong> - Update cryptographic keys annually</li>
                    <li><strong>Use strong encryption</strong> - Configure modern cipher suites</li>
                    <li><strong>Implement timeouts</strong> - Automatically disconnect idle sessions</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Compliance and Auditing</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Generate security compliance report</span>
Router# <span style="color: #DCDCAA;">show ip ssh</span>
Router# <span style="color: #DCDCAA;">show running-config | section line vty</span>
Router# <span style="color: #DCDCAA;">show running-config | section username</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey rsa</span>

<span style="color: #6A9955;">! Audit SSH configuration</span>
Router# <span style="color: #DCDCAA;">show archive config differences nvram:startup-config system:running-config</span>
Router# <span style="color: #DCDCAA;">show configuration lock</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure SSH with security hardening best practices</li>
                    <li>Implement access controls with ACLs and user privileges</li>
                    <li>Enable comprehensive logging and monitoring</li>
                    <li>Understand certificate-based authentication concepts</li>
                </ul>
            </div>
        </div>
    `,

    // 4.9 TFTP/FTP Operations  
    "TFTP/FTP Operations": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 5px;">4.9.1: TFTP and FTP Operations</h3>
            <p>Trivial File Transfer Protocol (TFTP) and File Transfer Protocol (FTP) are fundamental protocols for network device file management. TFTP's simplicity makes it ideal for device bootstrapping and configuration management, while FTP provides enhanced features for complex file operations.</p>
            
            <h4 style="color: #60A5FA;">TFTP Protocol Characteristics</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3B82F6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Port:</strong> UDP 69 (connectionless, minimal overhead)</li>
                    <li><strong>Authentication:</strong> None (relies on network-level security)</li>
                    <li><strong>File Size:</strong> Limited to 4GB theoretical, 32MB practical</li>
                    <li><strong>Error Handling:</strong> Simple retransmission mechanism</li>
                    <li><strong>Directory Operations:</strong> No directory listing or navigation</li>
                </ul>
            </div>
            
            <h4 style="color: #60A5FA;">Essential TFTP Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configuration Backup (Running to TFTP)</span>
Router# <span style="color: #DCDCAA;">copy running-config tftp://192.168.1.100/R1-config-backup.txt</span>
Address or name of remote host []? <span style="color: #CE9178;">192.168.1.100</span>
Destination filename [R1-config-backup.txt]? <span style="color: #CE9178;">[Enter]</span>

<span style="color: #6A9955;"># Configuration Restore (TFTP to Running)</span>
Router# <span style="color: #DCDCAA;">copy tftp://192.168.1.100/R1-config-backup.txt running-config</span>

<span style="color: #6A9955;"># IOS Image Upload (TFTP to Flash)</span>
Router# <span style="color: #DCDCAA;">copy tftp://server/c2960-lanbasek9-mz.150-2.SE11.bin flash:</span>

<span style="color: #6A9955;"># Interactive TFTP (prompts for details)</span>
Router# <span style="color: #DCDCAA;">copy startup-config tftp</span>
Router# <span style="color: #DCDCAA;">copy tftp startup-config</span>
</code>
            </pre>
            
            <h4 style="color: #60A5FA;">TFTP Server Configuration (IOS as TFTP Server)</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable IOS device as TFTP server</span>
Router(config)# <span style="color: #DCDCAA;">tftp-server flash:c2960-lanbasek9-mz.150-2.SE11.bin</span>
Router(config)# <span style="color: #DCDCAA;">tftp-server bootflash:config-backup.txt</span>

<span style="color: #6A9955;"># Specify source interface for TFTP operations</span>
Router(config)# <span style="color: #DCDCAA;">ip tftp source-interface loopback0</span>

<span style="color: #6A9955;"># Set TFTP timeout and retry parameters</span>
Router(config)# <span style="color: #DCDCAA;">ip tftp blocksize 8192</span>
</code>
            </pre>
            
            <h4 style="color: #60A5FA;">FTP Protocol Features</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #60A5FA;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Ports:</strong> TCP 20 (data), TCP 21 (control)</li>
                    <li><strong>Authentication:</strong> Username/password required</li>
                    <li><strong>Modes:</strong> Active and Passive transfer modes</li>
                    <li><strong>Features:</strong> Directory navigation, file listing, resume capability</li>
                    <li><strong>Reliability:</strong> TCP ensures reliable delivery</li>
                </ul>
            </div>
            
            <h4 style="color: #60A5FA;">FTP Configuration and Operations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure FTP client settings</span>
Router(config)# <span style="color: #DCDCAA;">ip ftp username ftpuser</span>
Router(config)# <span style="color: #DCDCAA;">ip ftp password ftppass</span>
Router(config)# <span style="color: #DCDCAA;">ip ftp passive</span>

<span style="color: #6A9955;"># FTP file operations</span>
Router# <span style="color: #DCDCAA;">copy running-config ftp://192.168.1.100/configs/R1-backup.txt</span>
Router# <span style="color: #DCDCAA;">copy ftp://user:pass@server/firmware/new-ios.bin flash:</span>

<span style="color: #6A9955;"># FTP with authentication in URL</span>
Router# <span style="color: #DCDCAA;">copy flash:config.txt ftp://admin:cisco@192.168.1.100/backups/</span>
</code>
            </pre>
</code>
            </pre>
            
            <h4 style="color: #60A5FA;">TFTP vs FTP Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #3a3a3a;"><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Feature</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">TFTP</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">FTP</th></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #60A5FA;">Protocol</td><td style="padding: 8px; border: 1px solid #555;">UDP</td><td style="padding: 8px; border: 1px solid #555;">TCP</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #60A5FA;">Port</td><td style="padding: 8px; border: 1px solid #555;">69</td><td style="padding: 8px; border: 1px solid #555;">20/21</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #60A5FA;">Authentication</td><td style="padding: 8px; border: 1px solid #555;">None</td><td style="padding: 8px; border: 1px solid #555;">Username/Password</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #60A5FA;">Security</td><td style="padding: 8px; border: 1px solid #555;">None</td><td style="padding: 8px; border: 1px solid #555;">Plaintext (FTPS for encryption)</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #60A5FA;">Features</td><td style="padding: 8px; border: 1px solid #555;">Basic</td><td style="padding: 8px; border: 1px solid #555;">Directory listing, resume</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #60A5FA;">Reliability</td><td style="padding: 8px; border: 1px solid #555;">No acknowledgment</td><td style="padding: 8px; border: 1px solid #555;">TCP reliability</td></tr>
                </table>
            </div>
            
            <h4 style="color: #60A5FA;">Common File Operations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configuration Backup</span>
Router# <span style="color: #DCDCAA;">copy running-config tftp://server/backup.cfg</span>

<span style="color: #6A9955;"># IOS Upgrade</span>
Router# <span style="color: #DCDCAA;">copy tftp://server/new-ios.bin flash:</span>

<span style="color: #6A9955;"># Boot System</span>
Router(config)# <span style="color: #DCDCAA;">boot system flash:new-ios.bin</span>

<span style="color: #6A9955;"># Verify Flash</span>
Router# <span style="color: #DCDCAA;">dir flash:</span>
Router# <span style="color: #DCDCAA;">show version</span>
</code>
            </pre>
            
            <h4 style="color: #60A5FA;">SCP (Secure Copy) Alternative</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">copy running-config scp://admin@192.168.1.100/backup.cfg</span>
Router(config)# <span style="color: #DCDCAA;">ip scp server enable</span>
</code>
            </pre>
            
            <h4 style="color: #60A5FA;">Best Practices</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">1. File Integrity:</strong> Always verify file integrity after transfer</li>
                <li><strong style="color: #3b82f6;">2. Backup First:</strong> Backup current configuration before changes</li>
                <li><strong style="color: #6366f1;">3. Use Security:</strong> Use secure protocols (SCP/SFTP) when possible</li>
                <li><strong style="color: #f59e0b;">4. Test Lab:</strong> Test new firmware in lab environment first</li>
                <li><strong style="color: #ef4444;">5. Documentation:</strong> Document file locations and versions</li>
            </ul>
            
            <h4 style="color: #60A5FA;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show file systems</span>
Router# <span style="color: #DCDCAA;">dir</span>
Router# <span style="color: #DCDCAA;">more flash:config.txt</span>
Router# <span style="color: #DCDCAA;">verify /md5 flash:ios-file.bin</span>
</code>
            </pre>
            
            <h4 style="color: #60A5FA;">Troubleshooting Tips</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">•</strong> Verify network connectivity to TFTP server</li>
                <li><strong style="color: #3b82f6;">•</strong> Check access-lists blocking TFTP traffic</li>
                <li><strong style="color: #6366f1;">•</strong> Ensure sufficient flash memory space</li>
                <li><strong style="color: #f59e0b;">•</strong> Verify file permissions on TFTP server</li>
                <li><strong style="color: #ef4444;">•</strong> Use debug tftp for detailed troubleshooting</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #60A5FA; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand TFTP vs FTP differences and use cases</li>
                    <li>Know file transfer commands for configuration backup/restore</li>
                    <li>Configure TFTP server for network device file sharing</li>
                    <li>Troubleshoot file transfer connectivity issues</li>
                </ul>
            </div>
        </div>
    `,

    // 4.9.2 HTTP/HTTPS File Transfer
    "HTTP/HTTPS File Transfer": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.9.2: HTTP/HTTPS File Transfer</h3>
            <p>Modern network devices support HTTP and HTTPS protocols for file transfers, enabling secure web-based file operations. This capability allows downloading firmware directly from vendor websites and configuration management through encrypted connections.</p>
            
            <h4 style="color: #58D68D;">HTTP/HTTPS Protocol Features</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>HTTP:</strong> TCP port 80, unencrypted transfers (not recommended for sensitive data)</li>
                    <li><strong>HTTPS:</strong> TCP port 443, SSL/TLS encrypted transfers (preferred)</li>
                    <li><strong>Authentication:</strong> Supports basic, digest, and certificate-based authentication</li>
                    <li><strong>Resume Support:</strong> Partial content downloads with range requests</li>
                    <li><strong>Proxy Support:</strong> Corporate proxy configuration for internet access</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Basic HTTP/HTTPS Copy Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Download IOS image from HTTP server</span>
Router# <span style="color: #DCDCAA;">copy http://192.168.1.100/firmware/c2960-lanbasek9-mz.150-2.SE11.bin flash:</span>

<span style="color: #6A9955;"># Secure HTTPS download (preferred)</span>
Router# <span style="color: #DCDCAA;">copy https://cisco.com/firmware/latest-ios.bin flash:</span>

<span style="color: #6A9955;"># Upload configuration to HTTP server</span>
Router# <span style="color: #DCDCAA;">copy running-config http://server/configs/R1-backup.txt</span>

<span style="color: #6A9955;"># Download configuration from HTTPS server</span>
Router# <span style="color: #DCDCAA;">copy https://server/configs/R1-production.cfg startup-config</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">HTTP Client Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure HTTP client settings</span>
Router(config)# <span style="color: #DCDCAA;">ip http client username admin</span>
Router(config)# <span style="color: #DCDCAA;">ip http client password cisco123</span>

<span style="color: #6A9955;"># Set HTTP proxy for corporate environments</span>
Router(config)# <span style="color: #DCDCAA;">ip http client proxy-server 192.168.1.50 proxy-port 8080</span>

<span style="color: #6A9955;"># Configure connection timeout</span>
Router(config)# <span style="color: #DCDCAA;">ip http client connection timeout 300</span>

<span style="color: #6A9955;"># Source interface specification</span>
Router(config)# <span style="color: #DCDCAA;">ip http client source-interface gigabitethernet0/0</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">HTTPS SSL/TLS Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Trust all certificates (development only)</span>
Router(config)# <span style="color: #DCDCAA;">ip http client secure-trustpoint trustpoint-name</span>

<span style="color: #6A9955;"># Verify server certificates (production recommended)</span>
Router(config)# <span style="color: #DCDCAA;">no ip http client secure-verify-certificate</span>

<span style="color: #6A9955;"># Configure minimum SSL/TLS version</span>
Router(config)# <span style="color: #DCDCAA;">ip http secure-server minimum-ssl-version tlsv1.2</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Advanced HTTP File Operations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># HTTP with authentication in URL</span>
Router# <span style="color: #DCDCAA;">copy https://admin:password@server.com/file.bin flash:</span>

<span style="color: #6A9955;"># Copy with custom HTTP headers</span>
Router# <span style="color: #DCDCAA;">copy https://api.company.com/firmware/latest bootflash:</span>

<span style="color: #6A9955;"># Verify downloaded file integrity</span>
Router# <span style="color: #DCDCAA;">verify /md5 flash:c2960-lanbasek9-mz.150-2.SE11.bin</span>
Router# <span style="color: #DCDCAA;">dir flash: | include c2960</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">HTTP vs HTTPS Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #3a3a3a;"><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Feature</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">HTTP</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">HTTPS</th></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #2ECC71;">Port</td><td style="padding: 8px; border: 1px solid #555;">80</td><td style="padding: 8px; border: 1px solid #555;">443</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #2ECC71;">Encryption</td><td style="padding: 8px; border: 1px solid #555;">None</td><td style="padding: 8px; border: 1px solid #555;">SSL/TLS</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #2ECC71;">Security</td><td style="padding: 8px; border: 1px solid #555;">Plaintext</td><td style="padding: 8px; border: 1px solid #555;">Encrypted</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #2ECC71;">Certificate</td><td style="padding: 8px; border: 1px solid #555;">Not required</td><td style="padding: 8px; border: 1px solid #555;">Server certificate</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #2ECC71;">Use Case</td><td style="padding: 8px; border: 1px solid #555;">Internal networks</td><td style="padding: 8px; border: 1px solid #555;">Internet/Production</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Troubleshooting HTTP/HTTPS Transfers</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Debug HTTP client operations</span>
Router# <span style="color: #DCDCAA;">debug ip http client</span>

<span style="color: #6A9955;"># Check connectivity to HTTP server</span>
Router# <span style="color: #DCDCAA;">ping 192.168.1.100</span>
Router# <span style="color: #DCDCAA;">telnet 192.168.1.100 80</span>
Router# <span style="color: #DCDCAA;">telnet 192.168.1.100 443</span>

<span style="color: #6A9955;"># View HTTP client configuration</span>
Router# <span style="color: #DCDCAA;">show ip http client all</span>
Router# <span style="color: #DCDCAA;">show ip http client session</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Common Use Cases</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #2ECC71;">Firmware Updates:</strong> Download latest IOS directly from Cisco.com</li>
                <li><strong style="color: #58D68D;">Configuration Management:</strong> Centralized config repository access</li>
                <li><strong style="color: #27AE60;">Security Patches:</strong> Automated security update downloads</li>
                <li><strong style="color: #16A085;">Backup Operations:</strong> Scheduled configuration uploads to web servers</li>
                <li><strong style="color: #138D75;">Certificate Updates:</strong> Download SSL certificates and CA bundles</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure HTTP/HTTPS client settings for secure file transfers</li>
                    <li>Understand differences between HTTP and HTTPS protocols</li>
                    <li>Use copy commands for web-based file operations</li>
                    <li>Troubleshoot HTTP connectivity and certificate issues</li>
                    <li>Configure proxy settings for corporate environments</li>
                </ul>
            </div>
        </div>
    `,

    // 4.9.3 Local Storage Management
    "Local Storage Management": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.9.3: Local Storage Management</h3>
            <p>Network devices utilize various storage types for IOS images, configurations, and operational data. Understanding file system management is essential for device maintenance, troubleshooting, and capacity planning.</p>
            
            <h4 style="color: #F5B041;">Storage Types and File Systems</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Flash:</strong> Primary non-volatile storage for IOS images and files</li>
                    <li><strong>NVRAM:</strong> Stores startup configuration and configuration register</li>
                    <li><strong>DRAM:</strong> Volatile memory for running configuration and active processes</li>
                    <li><strong>USB:</strong> External storage for backups and file transfers</li>
                    <li><strong>Compact Flash:</strong> Removable storage for additional capacity</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">File System Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># View all available file systems</span>
Router# <span style="color: #DCDCAA;">show file systems</span>

<span style="color: #6A9955;"># Directory listing for different storage</span>
Router# <span style="color: #DCDCAA;">dir flash:</span>
Router# <span style="color: #DCDCAA;">dir bootflash:</span>
Router# <span style="color: #DCDCAA;">dir usbflash0:</span>
Router# <span style="color: #DCDCAA;">dir harddisk:</span>

<span style="color: #6A9955;"># Show flash memory details</span>
Router# <span style="color: #DCDCAA;">show flash</span>
Router# <span style="color: #DCDCAA;">show flash: all</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">File Operations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create directory</span>
Router# <span style="color: #DCDCAA;">mkdir flash:configs</span>

<span style="color: #6A9955;"># Copy files between storage locations</span>
Router# <span style="color: #DCDCAA;">copy flash:config-backup.txt usbflash0:</span>
Router# <span style="color: #DCDCAA;">copy bootflash:ios-image.bin flash:</span>

<span style="color: #6A9955;"># Rename files</span>
Router# <span style="color: #DCDCAA;">rename flash:old-config.txt flash:new-config.txt</span>

<span style="color: #6A9955;"># Delete files and directories</span>
Router# <span style="color: #DCDCAA;">delete flash:old-ios.bin</span>
Router# <span style="color: #DCDCAA;">rmdir flash:old-configs</span>

<span style="color: #6A9955;"># Verify file integrity</span>
Router# <span style="color: #DCDCAA;">verify /md5 flash:ios-image.bin</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Advanced File Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Format flash memory (CAUTION: Erases all data)</span>
Router# <span style="color: #DCDCAA;">format flash:</span>

<span style="color: #6A9955;"># Squeeze flash to reclaim deleted space</span>
Router# <span style="color: #DCDCAA;">squeeze flash:</span>

<span style="color: #6A9955;"># Archive operations</span>
Router# <span style="color: #DCDCAA;">archive tar /create flash:backup.tar flash:configs</span>
Router# <span style="color: #DCDCAA;">archive tar /extract flash:backup.tar flash:</span>

<span style="color: #6A9955;"># View file contents</span>
Router# <span style="color: #DCDCAA;">more flash:config.txt</span>
Router# <span style="color: #DCDCAA;">type flash:startup-config</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Storage Capacity Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Check available space</span>
Router# <span style="color: #DCDCAA;">dir flash: | include bytes</span>
Router# <span style="color: #DCDCAA;">show flash summary</span>

<span style="color: #6A9955;"># Detailed space usage</span>
Router# <span style="color: #DCDCAA;">show file descriptors</span>
Router# <span style="color: #DCDCAA;">show file systems | include flash</span>

<span style="color: #6A9955;"># Monitor storage utilization</span>
Router# <span style="color: #DCDCAA;">show processes memory</span>
Router# <span style="color: #DCDCAA;">show memory summary</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">USB Drive Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Detect USB devices</span>
Router# <span style="color: #DCDCAA;">show usb controllers</span>
Router# <span style="color: #DCDCAA;">show hw-module usbflash security</span>

<span style="color: #6A9955;"># USB file operations</span>
Router# <span style="color: #DCDCAA;">copy running-config usbflash0:backup-config.txt</span>
Router# <span style="color: #DCDCAA;">copy usbflash0:ios-backup.bin flash:</span>

<span style="color: #6A9955;"># USB formatting (FAT32)</span>
Router# <span style="color: #DCDCAA;">format usbflash0:</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">File System Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #3a3a3a;"><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Storage Type</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Volatility</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Typical Use</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Capacity</th></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #F39C12;">Flash</td><td style="padding: 8px; border: 1px solid #555;">Non-volatile</td><td style="padding: 8px; border: 1px solid #555;">IOS images, files</td><td style="padding: 8px; border: 1px solid #555;">16MB-8GB</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #F39C12;">NVRAM</td><td style="padding: 8px; border: 1px solid #555;">Non-volatile</td><td style="padding: 8px; border: 1px solid #555;">Startup config</td><td style="padding: 8px; border: 1px solid #555;">32KB-1MB</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #F39C12;">DRAM</td><td style="padding: 8px; border: 1px solid #555;">Volatile</td><td style="padding: 8px; border: 1px solid #555;">Running config, processes</td><td style="padding: 8px; border: 1px solid #555;">256MB-16GB</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #F39C12;">USB</td><td style="padding: 8px; border: 1px solid #555;">Non-volatile</td><td style="padding: 8px; border: 1px solid #555;">Backups, transfers</td><td style="padding: 8px; border: 1px solid #555;">1GB-128GB</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #F39C12;">Compact Flash</td><td style="padding: 8px; border: 1px solid #555;">Non-volatile</td><td style="padding: 8px; border: 1px solid #555;">Additional storage</td><td style="padding: 8px; border: 1px solid #555;">256MB-32GB</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Best Practices</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #F39C12;">Regular Backups:</strong> Schedule automatic configuration and IOS backups</li>
                <li><strong style="color: #F5B041;">Space Monitoring:</strong> Monitor flash usage to prevent storage exhaustion</li>
                <li><strong style="color: #E67E22;">File Organization:</strong> Use directories to organize configurations and logs</li>
                <li><strong style="color: #D68910;">Version Control:</strong> Maintain multiple IOS versions for rollback capability</li>
                <li><strong style="color: #CA6F1E;">Security:</strong> Protect sensitive files with appropriate access controls</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand different storage types and their uses</li>
                    <li>Master file system navigation and management commands</li>
                    <li>Know how to check storage capacity and manage space</li>
                    <li>Configure backup strategies using local storage</li>
                    <li>Troubleshoot storage-related issues and space constraints</li>
                </ul>
            </div>
        </div>
    `,

    // 4.9.4 Boot System Management
    "Boot System Management": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">4.9.4: Boot System Management</h3>
            <p>Boot system management controls the device startup sequence, IOS image selection, and recovery options. Understanding boot processes is critical for device reliability, troubleshooting, and maintenance operations.</p>
            
            <h4 style="color: #EC7063;">Boot Sequence Overview</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #E74C3C;">
                <ol style="margin-left: 20px;">
                    <li><strong>POST (Power-On Self-Test):</strong> Hardware initialization and memory test</li>
                    <li><strong>Bootstrap:</strong> Load initial bootstrap program from ROM</li>
                    <li><strong>IOS Selection:</strong> Choose IOS image based on boot system commands</li>
                    <li><strong>Configuration Load:</strong> Load startup-config from NVRAM</li>
                    <li><strong>Interface Activation:</strong> Bring up interfaces and start routing protocols</li>
                </ol>
            </div>
            
            <h4 style="color: #EC7063;">Boot System Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure primary boot image</span>
Router(config)# <span style="color: #DCDCAA;">boot system flash:c2960-lanbasek9-mz.150-2.SE11.bin</span>

<span style="color: #6A9955;"># Configure secondary boot image (fallback)</span>
Router(config)# <span style="color: #DCDCAA;">boot system flash:c2960-lanbasek9-mz.122-55.SE12.bin</span>

<span style="color: #6A9955;"># Boot from TFTP server (recovery)</span>
Router(config)# <span style="color: #DCDCAA;">boot system tftp://192.168.1.100/ios-backup.bin</span>

<span style="color: #6A9955;"># Boot from USB (emergency)</span>
Router(config)# <span style="color: #DCDCAA;">boot system usbflash0:emergency-ios.bin</span>

<span style="color: #6A9955;"># View boot system configuration</span>
Router# <span style="color: #DCDCAA;">show boot</span>
Router# <span style="color: #DCDCAA;">show bootvar</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Configuration Register</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># View current configuration register</span>
Router# <span style="color: #DCDCAA;">show version | include register</span>

<span style="color: #6A9955;"># Common configuration register values</span>
Router(config)# <span style="color: #DCDCAA;">config-register 0x2102</span>   <span style="color: #6A9955;"># Normal boot (default)</span>
Router(config)# <span style="color: #DCDCAA;">config-register 0x2142</span>   <span style="color: #6A9955;"># Bypass startup-config</span>
Router(config)# <span style="color: #DCDCAA;">config-register 0x2101</span>   <span style="color: #6A9955;"># Boot to ROMmon</span>
Router(config)# <span style="color: #DCDCAA;">config-register 0x2120</span>   <span style="color: #6A9955;"># Boot from TFTP</span>

<span style="color: #6A9955;"># Apply configuration register changes</span>
Router# <span style="color: #DCDCAA;">reload</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Boot Modes and Recovery</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #3a3a3a;"><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Register</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Boot Source</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Use Case</th></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #E74C3C;">0x2102</td><td style="padding: 8px; border: 1px solid #555;">Flash/boot system</td><td style="padding: 8px; border: 1px solid #555;">Normal operation</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #E74C3C;">0x2142</td><td style="padding: 8px; border: 1px solid #555;">Flash, ignore startup-config</td><td style="padding: 8px; border: 1px solid #555;">Password recovery</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #E74C3C;">0x2101</td><td style="padding: 8px; border: 1px solid #555;">ROM monitor</td><td style="padding: 8px; border: 1px solid #555;">Emergency recovery</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #E74C3C;">0x2120</td><td style="padding: 8px; border: 1px solid #555;">TFTP server</td><td style="padding: 8px; border: 1px solid #555;">Network boot</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #E74C3C;">0x2100</td><td style="padding: 8px; border: 1px solid #555;">ROM/Mini-IOS</td><td style="padding: 8px; border: 1px solid #555;">Minimal functionality</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Password Recovery Procedure</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Step 1: Power cycle and send break sequence</span>
<span style="color: #CE9178;">Ctrl+Break during boot process</span>

<span style="color: #6A9955;"># Step 2: Change configuration register in ROMmon</span>
rommon 1 > <span style="color: #DCDCAA;">confreg 0x2142</span>
rommon 2 > <span style="color: #DCDCAA;">reset</span>

<span style="color: #6A9955;"># Step 3: Boot into privilege mode (no startup-config loaded)</span>
Router> <span style="color: #DCDCAA;">enable</span>
Router# <span style="color: #DCDCAA;">copy startup-config running-config</span>

<span style="color: #6A9955;"># Step 4: Change password and restore normal boot</span>
Router(config)# <span style="color: #DCDCAA;">enable secret newpassword</span>
Router(config)# <span style="color: #DCDCAA;">config-register 0x2102</span>
Router(config)# <span style="color: #DCDCAA;">exit</span>
Router# <span style="color: #DCDCAA;">copy running-config startup-config</span>
Router# <span style="color: #DCDCAA;">reload</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">IOS Image Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Check current IOS version and image</span>
Router# <span style="color: #DCDCAA;">show version</span>
Router# <span style="color: #DCDCAA;">show flash | include bin</span>

<span style="color: #6A9955;"># Copy and verify new IOS image</span>
Router# <span style="color: #DCDCAA;">copy tftp://server/new-ios.bin flash:</span>
Router# <span style="color: #DCDCAA;">verify /md5 flash:new-ios.bin</span>

<span style="color: #6A9955;"># Configure new boot image</span>
Router(config)# <span style="color: #DCDCAA;">no boot system</span>  <span style="color: #6A9955;"># Clear existing boot commands</span>
Router(config)# <span style="color: #DCDCAA;">boot system flash:new-ios.bin</span>
Router(config)# <span style="color: #DCDCAA;">boot system flash:old-ios.bin</span>  <span style="color: #6A9955;"># Fallback</span>

<span style="color: #6A9955;"># Save and reload to test</span>
Router# <span style="color: #DCDCAA;">copy running-config startup-config</span>
Router# <span style="color: #DCDCAA;">reload</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">ROMmon Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Basic ROMmon commands</span>
rommon 1 > <span style="color: #DCDCAA;">?</span>                <span style="color: #6A9955;"># Help - list all commands</span>
rommon 2 > <span style="color: #DCDCAA;">set</span>              <span style="color: #6A9955;"># Show environment variables</span>
rommon 3 > <span style="color: #DCDCAA;">confreg</span>          <span style="color: #6A9955;"># Display/modify config register</span>
rommon 4 > <span style="color: #DCDCAA;">dir flash:</span>       <span style="color: #6A9955;"># List files in flash</span>

<span style="color: #6A9955;"># Network boot from ROMmon</span>
rommon 5 > <span style="color: #DCDCAA;">IP_ADDRESS=192.168.1.10</span>
rommon 6 > <span style="color: #DCDCAA;">IP_SUBNET_MASK=255.255.255.0</span>
rommon 7 > <span style="color: #DCDCAA;">DEFAULT_GATEWAY=192.168.1.1</span>
rommon 8 > <span style="color: #DCDCAA;">TFTP_SERVER=192.168.1.100</span>
rommon 9 > <span style="color: #DCDCAA;">TFTP_FILE=recovery-ios.bin</span>
rommon 10 > <span style="color: #DCDCAA;">tftpdnld</span>

<span style="color: #6A9955;"># Boot specific image from ROMmon</span>
rommon 11 > <span style="color: #DCDCAA;">boot flash:ios-image.bin</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Troubleshooting Boot Issues</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #E74C3C;">Boot Loop:</strong> Check configuration register and boot system commands</li>
                <li><strong style="color: #EC7063;">Missing IOS:</strong> Verify flash contents and image integrity</li>
                <li><strong style="color: #CD6155;">Memory Issues:</strong> Ensure sufficient RAM for IOS image</li>
                <li><strong style="color: #C0392B;">Corrupt Flash:</strong> Format flash and reload IOS from TFTP</li>
                <li><strong style="color: #A93226;">Hardware Failure:</strong> Test with known good IOS image</li>
            </ul>
            
            <h4 style="color: #EC7063;">Boot Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify boot configuration</span>
Router# <span style="color: #DCDCAA;">show boot</span>
Router# <span style="color: #DCDCAA;">show version</span>
Router# <span style="color: #DCDCAA;">show startup-config | include boot</span>

<span style="color: #6A9955;"># Check file system and images</span>
Router# <span style="color: #DCDCAA;">dir flash: | include bin</span>
Router# <span style="color: #DCDCAA;">show flash summary</span>

<span style="color: #6A9955;"># Monitor boot process</span>
Router# <span style="color: #DCDCAA;">show logging | include boot</span>
Router# <span style="color: #DCDCAA;">show processes cpu | include boot</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand boot sequence and configuration register values</li>
                    <li>Configure boot system commands with primary and fallback images</li>
                    <li>Perform password recovery using configuration register</li>
                    <li>Troubleshoot boot issues and use ROMmon for recovery</li>
                    <li>Manage IOS images and verify boot configuration</li>
                </ul>
            </div>
        </div>
    `,

    // 4.9.5 Secure File Protocols
    "Secure File Protocols": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">4.9.5: Secure File Protocols</h3>
            <p>Secure Copy Protocol (SCP) and SSH File Transfer Protocol (SFTP) provide encrypted file transfers for network devices. These protocols replace insecure FTP/TFTP in security-conscious environments, ensuring data confidentiality and authentication.</p>
            
            <h4 style="color: #AF7AC5;">Protocol Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #3a3a3a;"><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">Feature</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">SCP</th><th style="padding: 8px; border: 1px solid #555; text-align: left; font-weight: bold;">SFTP</th></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #9B59B6;">Transport</td><td style="padding: 8px; border: 1px solid #555;">SSH (TCP 22)</td><td style="padding: 8px; border: 1px solid #555;">SSH (TCP 22)</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #9B59B6;">Encryption</td><td style="padding: 8px; border: 1px solid #555;">AES, 3DES</td><td style="padding: 8px; border: 1px solid #555;">AES, 3DES</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #9B59B6;">Authentication</td><td style="padding: 8px; border: 1px solid #555;">Password, Keys</td><td style="padding: 8px; border: 1px solid #555;">Password, Keys</td></tr>
                    <tr style="background-color: #333;"><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #9B59B6;">Features</td><td style="padding: 8px; border: 1px solid #555;">Simple copy</td><td style="padding: 8px; border: 1px solid #555;">Directory listing, resume</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #555; font-weight: bold; color: #9B59B6;">Performance</td><td style="padding: 8px; border: 1px solid #555;">Faster</td><td style="padding: 8px; border: 1px solid #555;">More features</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">SSH Server Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable SSH server</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh version 2</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh time-out 60</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh authentication-retries 3</span>

<span style="color: #6A9955;"># Enable SCP server functionality</span>
Router(config)# <span style="color: #DCDCAA;">ip scp server enable</span>

<span style="color: #6A9955;"># Create SSH key pair</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa modulus 2048</span>

<span style="color: #6A9955;"># Configure hostname and domain (required for SSH)</span>
Router(config)# <span style="color: #DCDCAA;">hostname R1</span>
Router(config)# <span style="color: #DCDCAA;">ip domain-name company.com</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">SCP Client Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Basic SCP file transfers</span>
Router# <span style="color: #DCDCAA;">copy running-config scp://admin@192.168.1.100/backups/R1-config.txt</span>
Router# <span style="color: #DCDCAA;">copy scp://admin@server/firmware/new-ios.bin flash:</span>

<span style="color: #6A9955;"># SCP with alternate SSH port</span>
Router# <span style="color: #DCDCAA;">copy flash:config.txt scp://admin@server:2222/configs/</span>

<span style="color: #6A9955;"># SCP using IPv6</span>
Router# <span style="color: #DCDCAA;">copy running-config scp://admin@[2001:db8::100]/backup.cfg</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">SFTP Operations</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># SFTP file transfers</span>
Router# <span style="color: #DCDCAA;">copy running-config sftp://admin@192.168.1.100/backups/R1-config.txt</span>
Router# <span style="color: #DCDCAA;">copy sftp://admin@server/firmware/ios-image.bin bootflash:</span>

<span style="color: #6A9955;"># Interactive SFTP session</span>
Router# <span style="color: #DCDCAA;">sftp admin@192.168.1.100</span>
admin@192.168.1.100's password: <span style="color: #CE9178;">password</span>

<span style="color: #6A9955;"># SFTP session commands</span>
sftp> <span style="color: #DCDCAA;">ls</span>                    <span style="color: #6A9955;"># List remote directory</span>
sftp> <span style="color: #DCDCAA;">pwd</span>                   <span style="color: #6A9955;"># Show remote working directory</span>
sftp> <span style="color: #DCDCAA;">lcd flash:</span>            <span style="color: #6A9955;"># Change local directory</span>
sftp> <span style="color: #DCDCAA;">put config.txt</span>        <span style="color: #6A9955;"># Upload file</span>
sftp> <span style="color: #DCDCAA;">get firmware.bin</span>      <span style="color: #6A9955;"># Download file</span>
sftp> <span style="color: #DCDCAA;">quit</span>                  <span style="color: #6A9955;"># Exit SFTP session</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">SSH Key-Based Authentication</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Generate SSH key pair on router</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa modulus 2048 label SSH-KEY</span>

<span style="color: #6A9955;"># Export public key for server authentication</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey rsa SSH-KEY</span>

<span style="color: #6A9955;"># Configure username with SSH key</span>
Router(config)# <span style="color: #DCDCAA;">username admin privilege 15</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh pubkey-chain</span>
Router(config-ssh-pubkey)# <span style="color: #DCDCAA;">username admin</span>
Router(config-ssh-pubkey-user)# <span style="color: #DCDCAA;">key-string</span>
Router(config-ssh-pubkey-data)# <span style="color: #CE9178;">ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDxyz...</span>
Router(config-ssh-pubkey-data)# <span style="color: #DCDCAA;">exit</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Advanced Security Features</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Host Key Verification:</strong> Prevents man-in-the-middle attacks</li>
                    <li><strong>User Authentication:</strong> Multiple methods (password, public key, keyboard-interactive)</li>
                    <li><strong>Data Integrity:</strong> HMAC verification ensures file integrity</li>
                    <li><strong>Forward Secrecy:</strong> Ephemeral keys protect past communications</li>
                    <li><strong>Compression:</strong> Optional data compression for better performance</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Troubleshooting Secure File Transfers</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Debug SSH connections</span>
Router# <span style="color: #DCDCAA;">debug ip ssh</span>
Router# <span style="color: #DCDCAA;">debug crypto ssh</span>

<span style="color: #6A9955;"># Check SSH server status</span>
Router# <span style="color: #DCDCAA;">show ip ssh</span>
Router# <span style="color: #DCDCAA;">show ssh</span>

<span style="color: #6A9955;"># Verify SSH connectivity</span>
Router# <span style="color: #DCDCAA;">ssh -l admin 192.168.1.100</span>
Router# <span style="color: #DCDCAA;">telnet 192.168.1.100 22</span>

<span style="color: #6A9955;"># Check crypto keys</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey rsa</span>
Router# <span style="color: #DCDCAA;">show crypto key pubkey-chain ssh</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Performance Optimization</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure SSH compression</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh compression</span>

<span style="color: #6A9955;"># Adjust SSH timeouts</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh time-out 300</span>

<span style="color: #6A9955;"># Set SSH cipher preference</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh client algorithm encryption aes128-ctr aes192-ctr aes256-ctr</span>

<span style="color: #6A9955;"># Configure concurrent SSH sessions</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input ssh</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Security Best Practices</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #9B59B6;">Key Management:</strong> Use strong RSA keys (2048+ bits) and rotate regularly</li>
                <li><strong style="color: #AF7AC5;">Authentication:</strong> Prefer public key authentication over passwords</li>
                <li><strong style="color: #BB8FCE;">Access Control:</strong> Limit SSH access to specific VTY lines and IP ranges</li>
                <li><strong style="color: #D2B4DE;">Monitoring:</strong> Log and monitor all file transfer activities</li>
                <li><strong style="color: #E8DAEF;">Updates:</strong> Keep SSH implementations updated for security patches</li>
            </ul>
            
            <h4 style="color: #AF7AC5;">Common Use Cases</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #AF7AC5;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Configuration Backup:</strong> Automated secure backup of device configurations</li>
                    <li><strong>Firmware Updates:</strong> Secure download of IOS images from trusted sources</li>
                    <li><strong>Log Collection:</strong> Centralized collection of device logs and diagnostics</li>
                    <li><strong>Certificate Management:</strong> Secure distribution of SSL certificates</li>
                    <li><strong>Script Distribution:</strong> Deploy network automation scripts securely</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure SSH server and enable SCP functionality</li>
                    <li>Understand differences between SCP and SFTP protocols</li>
                    <li>Use secure file transfer commands for device management</li>
                    <li>Implement SSH key-based authentication for enhanced security</li>
                    <li>Troubleshoot secure file transfer connectivity issues</li>
                </ul>
            </div>
        </div>
    `,

    // 4.10 HSRP Configuration
    "HSRP Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">4.10: HSRP Configuration</h3>
            <p>Hot Standby Router Protocol (HSRP) provides first hop redundancy by creating a virtual router with shared IP and MAC addresses. Multiple physical routers work together to ensure continuous connectivity for end devices.</p>
            
            <h4 style="color: #58D4FF;">Basic HSRP Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Router 1 (Active) Configuration</span>
Router1(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0</span>
Router1(config-if)# <span style="color: #DCDCAA;">ip address 192.168.1.1 255.255.255.0</span>
Router1(config-if)# <span style="color: #DCDCAA;">standby 1 ip 192.168.1.254</span>
Router1(config-if)# <span style="color: #DCDCAA;">standby 1 priority 110</span>
Router1(config-if)# <span style="color: #DCDCAA;">standby 1 preempt</span>

<span style="color: #6A9955;"># Router 2 (Standby) Configuration</span>
Router2(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0</span>
Router2(config-if)# <span style="color: #DCDCAA;">ip address 192.168.1.2 255.255.255.0</span>
Router2(config-if)# <span style="color: #DCDCAA;">standby 1 ip 192.168.1.254</span>
Router2(config-if)# <span style="color: #C586C0;">standby 1 priority 100</span>
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">HSRP States and Operation</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Active</td><td style="padding: 8px; border-bottom: 1px solid #444;">Forwards traffic for virtual IP</td><td style="padding: 8px; border-bottom: 1px solid #444;">Highest priority router</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Standby</td><td style="padding: 8px; border-bottom: 1px solid #444;">Monitors active router</td><td style="padding: 8px; border-bottom: 1px solid #444;">Ready to take over</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Listen</td><td style="padding: 8px; border-bottom: 1px solid #444;">Monitors HSRP messages</td><td style="padding: 8px; border-bottom: 1px solid #444;">Lower priority routers</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Learn</td><td style="padding: 8px;">Discovers virtual IP</td><td style="padding: 8px;">Initial state</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Advanced HSRP Features</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Interface tracking for automatic failover</span>
Router1(config-if)# <span style="color: #DCDCAA;">standby 1 track serial0/0/0</span>
Router1(config-if)# <span style="color: #DCDCAA;">standby 1 track serial0/0/0 20</span>

<span style="color: #6A9955;"># Authentication for security</span>
Router1(config-if)# <span style="color: #DCDCAA;">standby 1 authentication md5 key-string cisco123</span>

<span style="color: #6A9955;"># Custom timers for faster convergence</span>
Router1(config-if)# <span style="color: #DCDCAA;">standby 1 timers 1 3</span>

<span style="color: #6A9955;"># Multiple HSRP groups</span>
Router1(config-if)# <span style="color: #DCDCAA;">standby 2 ip 192.168.1.253</span>
Router1(config-if)# <span style="color: #C586C0;">standby 2 priority 90</span>
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">Load Balancing with Multiple Groups</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #58D4FF;">
                <p><strong>Group 1:</strong> Router A (Active), Router B (Standby) - VLANs 10, 30, 50</p>
                <p><strong>Group 2:</strong> Router B (Active), Router A (Standby) - VLANs 20, 40, 60</p>
                <p>This configuration distributes traffic load across both routers while maintaining redundancy.</p>
            </div>
            
            <h4 style="color: #58D4FF;">Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show standby</span>
Router# <span style="color: #DCDCAA;">show standby brief</span>
Router# <span style="color: #DCDCAA;">show standby group 1</span>
Router# <span style="color: #DCDCAA;">debug standby</span>
Router# <span style="color: #DCDCAA;">debug standby events</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure basic HSRP with virtual IP and priority settings</li>
                    <li>Understand preemption and when to use it</li>
                    <li>Implement interface tracking for automatic failover</li>
                    <li>Configure multiple HSRP groups for load balancing</li>
                    <li>Use verification commands to troubleshoot HSRP operations</li>
                </ul>
            </div>
        </div>
    `,

    // 4.11 NetFlow Fundamentals
    "NetFlow Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.11.a: NetFlow Fundamentals</h3>
            <p>NetFlow is a network protocol for collecting IP traffic information and monitoring network flow data. It provides detailed visibility into network traffic patterns, bandwidth utilization, and security analysis.</p>
            
            <h4 style="color: #58D68D;">NetFlow Components</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Flow Cache</td><td style="padding: 8px; border-bottom: 1px solid #444;">Stores active flow records in router memory</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Flow Record</td><td style="padding: 8px; border-bottom: 1px solid #444;">Contains flow information (5-tuple + stats)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6366f1; font-weight: bold;">Flow Exporter</td><td style="padding: 8px; border-bottom: 1px solid #444;">Sends flow data to collector</td></tr>
                    <tr><td style="padding: 8px; color: #f59e0b; font-weight: bold;">Flow Collector</td><td style="padding: 8px;">Receives and processes flow data</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Flow Definition (5-tuple)</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Flow identification parameters</span>
<span style="color: #DCDCAA;">Source IP Address:</span>    <span style="color: #CE9178;">192.168.1.10</span>
<span style="color: #DCDCAA;">Destination IP Address:</span> <span style="color: #CE9178;">203.0.113.5</span>
<span style="color: #DCDCAA;">Source Port:</span>          <span style="color: #CE9178;">49152</span>
<span style="color: #DCDCAA;">Destination Port:</span>     <span style="color: #CE9178;">80</span>
<span style="color: #DCDCAA;">Protocol:</span>             <span style="color: #CE9178;">TCP (6)</span>

<span style="color: #6A9955;"># Additional flow information</span>
<span style="color: #9CDCFE;">Input Interface:</span>      <span style="color: #CE9178;">GigabitEthernet0/0</span>
<span style="color: #9CDCFE;">Output Interface:</span>     <span style="color: #CE9178;">GigabitEthernet0/1</span>
<span style="color: #9CDCFE;">ToS/DSCP:</span>             <span style="color: #CE9178;">0x00</span>
<span style="color: #9CDCFE;">Packet Count:</span>         <span style="color: #CE9178;">150</span>
<span style="color: #9CDCFE;">Byte Count:</span>           <span style="color: #CE9178;">98,432</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">NetFlow Versions</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #58D68D;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Version 5:</strong> Most common, fixed format, IPv4 only</li>
                    <li><strong>Version 9:</strong> Template-based, flexible, supports IPv6</li>
                    <li><strong>IPFIX:</strong> Internet standard based on NetFlow v9</li>
                    <li><strong>Flexible NetFlow:</strong> Cisco's advanced implementation</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Flow Export Triggers</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #10b981;">Flow Timeout:</strong> Active flows expire after 30 minutes (default)</li>
                <li><strong style="color: #3b82f6;">Inactive Timeout:</strong> Idle flows expire after 15 seconds</li>
                <li><strong style="color: #6366f1;">TCP FIN/RST:</strong> Connection termination triggers export</li>
                <li><strong style="color: #f59e0b;">Cache Full:</strong> Oldest flows exported when cache fills</li>
                <li><strong style="color: #ef4444;">Interface Change:</strong> Route change triggers export</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the 5-tuple flow identification mechanism</li>
                    <li>Know the difference between NetFlow versions (v5, v9, IPFIX)</li>
                    <li>Recognize flow export triggers and timeout values</li>
                    <li>Identify NetFlow components and their roles</li>
                </ul>
            </div>
        </div>
    `,

    // 4.11 NetFlow Configuration
    "NetFlow Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.11.b: NetFlow Configuration</h3>
            <p>Configure NetFlow to monitor network traffic patterns and export flow data to collectors for analysis. Proper configuration enables effective network monitoring and security analysis.</p>
            
            <h4 style="color: #F5B041;">Traditional NetFlow Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure NetFlow export destination</span>
Router(config)# <span style="color: #DCDCAA;">ip flow-export destination 192.168.1.100 2055</span>
Router(config)# <span style="color: #DCDCAA;">ip flow-export version 9</span>
Router(config)# <span style="color: #DCDCAA;">ip flow-export source loopback0</span>

<span style="color: #6A9955;"># Configure cache parameters</span>
Router(config)# <span style="color: #DCDCAA;">ip flow-cache timeout active 1</span>
Router(config)# <span style="color: #DCDCAA;">ip flow-cache timeout inactive 15</span>

<span style="color: #6A9955;"># Enable NetFlow on interfaces</span>
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">ip flow ingress</span>
Router(config-if)# <span style="color: #C586C0;">ip flow egress</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Flexible NetFlow Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Define flow record</span>
Router(config)# <span style="color: #DCDCAA;">flow record CUSTOM_RECORD</span>
Router(config-flow-record)# <span style="color: #DCDCAA;">match ipv4 source address</span>
Router(config-flow-record)# <span style="color: #DCDCAA;">match ipv4 destination address</span>
Router(config-flow-record)# <span style="color: #DCDCAA;">match transport source-port</span>
Router(config-flow-record)# <span style="color: #DCDCAA;">match transport destination-port</span>
Router(config-flow-record)# <span style="color: #DCDCAA;">match ip protocol</span>
Router(config-flow-record)# <span style="color: #DCDCAA;">collect counter bytes</span>
Router(config-flow-record)# <span style="color: #C586C0;">collect counter packets</span>

<span style="color: #6A9955;"># Define flow exporter</span>
Router(config)# <span style="color: #DCDCAA;">flow exporter NETFLOW_EXPORTER</span>
Router(config-flow-exporter)# <span style="color: #DCDCAA;">destination 192.168.1.100</span>
Router(config-flow-exporter)# <span style="color: #DCDCAA;">transport udp 2055</span>
Router(config-flow-exporter)# <span style="color: #C586C0;">version 9</span>

<span style="color: #6A9955;"># Define flow monitor</span>
Router(config)# <span style="color: #DCDCAA;">flow monitor NETFLOW_MONITOR</span>
Router(config-flow-monitor)# <span style="color: #DCDCAA;">record CUSTOM_RECORD</span>
Router(config-flow-monitor)# <span style="color: #C586C0;">exporter NETFLOW_EXPORTER</span>

<span style="color: #6A9955;"># Apply to interface</span>
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0</span>
Router(config-if)# <span style="color: #C586C0;">ip flow monitor NETFLOW_MONITOR input</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">NetFlow Sampling</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure sampling to reduce CPU load</span>
Router(config)# <span style="color: #DCDCAA;">flow-sampler-map SAMPLER</span>
Router(config-sampler)# <span style="color: #DCDCAA;">mode random one-out-of 100</span>

<span style="color: #6A9955;"># Apply sampling to interface</span>
Router(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/0</span>
Router(config-if)# <span style="color: #C586C0;">ip flow-sampler SAMPLER</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router# <span style="color: #DCDCAA;">show ip flow export</span>
Router# <span style="color: #DCDCAA;">show ip cache flow</span>
Router# <span style="color: #DCDCAA;">show flow monitor NETFLOW_MONITOR</span>
Router# <span style="color: #DCDCAA;">show flow record CUSTOM_RECORD</span>
Router# <span style="color: #DCDCAA;">show flow exporter NETFLOW_EXPORTER</span>
Router# <span style="color: #DCDCAA;">show ip flow interface</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">NetFlow Applications</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F5B041;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Network Monitoring:</strong> Real-time visibility into traffic patterns</li>
                    <li><strong>Capacity Planning:</strong> Historical analysis for infrastructure sizing</li>
                    <li><strong>Security Analysis:</strong> Detect anomalous traffic and potential threats</li>
                    <li><strong>Billing and Accounting:</strong> Usage-based billing for service providers</li>
                    <li><strong>Quality of Service:</strong> Application identification and QoS enforcement</li>
                    <li><strong>Troubleshooting:</strong> Identify performance bottlenecks and issues</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure basic NetFlow export destination and version</li>
                    <li>Enable NetFlow on router interfaces (ingress/egress)</li>
                    <li>Understand flow cache timeout parameters</li>
                    <li>Use verification commands to validate NetFlow operation</li>
                    <li>Recognize NetFlow applications in network monitoring</li>
                </ul>
            </div>
        </div>
    `
};

// Export for global use
window.SECTION4_DETAILS = SECTION4_DETAILS;
