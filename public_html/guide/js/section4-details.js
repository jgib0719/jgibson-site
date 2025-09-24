/**
 * CCNA Section 4: IP Services - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, this content is focused on exam-relevant technical details.
 * v1.0 - Initial creation for all Section 4 topics.
 */

const SECTION4_DETAILS = {
    // 4.1 NAT
    "Static NAT": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">4.1: Configure & Verify Static NAT</h3>
            <p><strong>Static NAT</strong> provides a one-to-one mapping between an inside local address and an inside global address.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Define inside and outside interfaces
Router(config)# interface Gi0/1
Router(config-if)# ip nat inside
Router(config)# interface Gi0/0
Router(config-if)# ip nat outside

! Create the static mapping
Router(config)# ip nat inside source static 192.168.1.10 203.0.113.5
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2980382&seqNum=4" target="_blank" style="color: #66B2FF;">Read: Implementing NAT (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=2kG-Ng_aVcw" target="_blank" style="color: #66B2FF;">Watch: NAT Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // Dynamic NAT
    "Dynamic NAT": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">Dynamic NAT using Pools</h3>
            <p><strong>Dynamic NAT</strong> maps a group of inside addresses to a pool of outside addresses on a first-come, first-served basis.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Define the pool of public IPs
Router(config)# ip nat pool PUBLIC_POOL 203.0.113.10 203.0.113.20 netmask 255.255.255.0

! Define which inside IPs are allowed to use the pool
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255

! Tie the ACL to the pool
Router(config)# ip nat inside source list 1 pool PUBLIC_POOL
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2980382&seqNum=4" target="_blank" style="color: #66B2FF;">Read: Implementing NAT (Cisco Press)</a></em>
            </div>
        </div>
    `,

    // 4.2 NTP
    "NTP Mode": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">4.2: Configure & Verify NTP</h3>
            <p><strong>Network Time Protocol (NTP)</strong> synchronizes device clocks across a network. This is critical for accurate timestamping of logs, certificate validation, and troubleshooting.</p>
            
            <h4 style="color: #58D68D;">NTP Client Mode</h4>
            <p>Configures the device to synchronize its clock with an upstream NTP server.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# ntp server 216.239.35.0
</code>
</pre>

            <h4 style="color: #58D68D;">NTP Server Mode</h4>
            <p>Configures the device to act as an NTP source for other clients on the network. A device can be both a client and a server.</p>
             <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! To make a device a server if it can't reach the internet,
! you can make it master of its own clock (use with caution).
Router(config)# ntp master 3
</code>
</pre>
            <p>Verification is done with <code>show ntp status</code> and <code>show ntp associations</code>.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/network-time-protocol-ntp/214352-configure-network-time-protocol-ntp.html" target="_blank" style="color: #66B2FF;">Read: Configure NTP</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=rs5d5n_2aj0" target="_blank" style="color: #66B2FF;">Watch: NTP Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 4.3 DHCP and DNS
    "Role of DHCP": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">4.3: Role of DHCP</h3>
            <p><strong>DHCP (Dynamic Host Configuration Protocol)</strong> automates IP address configuration. A client device sends a broadcast DHCP Discover message. A DHCP server replies with a unicast Offer containing an IP address, subnet mask, default gateway, and DNS server info. The client then formally Requests the address, and the server sends a final Acknowledgement. This process is known as <strong>DORA</strong>.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=R_Q2iEnA62E" target="_blank" style="color: #66B2FF;">Watch: DHCP Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // Role of DNS
    "Role of DNS": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">4.3: Role of DNS</h3>
            <p><strong>DNS (Domain Name System)</strong> is the phonebook of the internet. It resolves human-friendly domain names (e.g., www.cisco.com) into machine-routable IP addresses (e.g., 72.163.4.185). When you type a URL, your computer sends a DNS query to a DNS server to get the corresponding IP address before it can establish a connection.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cloudflare.com/learning/dns/what-is-dns/" target="_blank" style="color: #66B2FF;">Read: What is DNS? (Cloudflare)</a></em>
            </div>
        </div>
    `,

    // 4.4 SNMP
    "SNMP": `
        <div style="font-family: 'Inter', sans-serif; color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">4.4: SNMP</h4>
            <p><strong>Simple Network Management Protocol (SNMP)</strong> is used to monitor and manage network devices. An <strong>SNMP manager</strong> (a central server) communicates with <strong>SNMP agents</strong> (software on managed devices).</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>GET requests:</strong> The manager polls the agent for specific information (e.g., CPU utilization, interface status).</li>
                <li><strong>SET requests:</strong> The manager can change a configuration parameter on the agent (rarely used).</li>
                <li><strong>TRAPs:</strong> The agent can send an unsolicited alert to the manager if a significant event occurs (e.g., a link goes down).</li>
            </ul>
            <p>SNMPv3 is the current standard and provides crucial security features like encryption and authentication, which were lacking in older versions.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html" target="_blank" style="color: #C39BD3;">Read: SNMP Configuration Guide</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=S0T08iL4v6c" target="_blank" style="color: #C39BD3;">Watch: SNMP Explained (Practical Networking)</a></em>
            </div>
        </div>
    `,
    
    // 4.5 Syslog
    "Syslog Features": `
        <div style="font-family: 'Inter', sans-serif; color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">4.5: Syslog Features</h4>
            <p><strong>Syslog</strong> is a standard protocol for sending log messages to a central logging server. This allows for centralized monitoring, analysis, and archiving of network events.</p>
            <h4 style="color: #AF7AC5;">Facilities and Levels</h4>
            <p>Syslog messages have two key components:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Facility:</strong> Describes the source of the message on the device (e.g., OSPF, IP, interface status).</li>
                <li><strong>Severity Level:</strong> A number from 0 to 7 indicating the importance of the message.
                    <ul>
                        <li><strong>0:</strong> Emergency (system unusable)</li>
                        <li><strong>1:</strong> Alert (immediate action needed)</li>
                        <li><strong>2:</strong> Critical</li>
                        <li><strong>3:</strong> Error</li>
                        <li><strong>4:</strong> Warning</li>
                        <li><strong>5:</strong> Notification (informational)</li>
                        <li><strong>6:</strong> Informational</li>
                        <li><strong>7:</strong> Debugging (very verbose)</li>
                    </ul>
                </li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/td/docs/routers/ios/config/17-x/ipaddr-serv/b-ipaddr-serv/m_serv-log.html" target="_blank" style="color: #C39BD3;">Read: Syslog Configuration Guide</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=uD9g44Qy2J8" target="_blank" style="color: #C39BD3;">Watch: Syslog Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 4.6 DHCP Client and Relay
    "DHCP Client": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">4.6: Configure DHCP Client</h3>
            <p>Configures a router's interface to obtain its IP address automatically from a DHCP server. Useful for a SOHO router connecting to an ISP.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address dhcp
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=R_Q2iEnA62E" target="_blank" style="color: #66B2FF;">Watch: DHCP Client (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // DHCP Relay
    "DHCP Relay": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">4.6: Configure DHCP Relay</h3>
            <p>DHCP relies on broadcast messages, which do not cross routers. If a DHCP server is in a different VLAN/subnet from clients, a <strong>DHCP relay agent</strong> is needed. The router's interface that receives the client broadcasts is configured with the <code>ip helper-address</code> command.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! On the gateway interface for the clients
Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip helper-address 10.10.10.5
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.practicalnetworking.net/stand-alone/dhcp-relay/" target="_blank" style="color: #66B2FF;">Read: DHCP Relay (Practical Networking)</a></em>
            </div>
        </div>
    `,

    // 4.7 QoS
    "QoS Concepts": `
        <div style="font-family: 'Inter', sans-serif; color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">4.7: Explain QoS Per-Hop Behavior (PHB)</h4>
            <p><strong>Quality of Service (QoS)</strong> provides preferential treatment for certain types of traffic. The Per-Hop Behavior (PHB) defines how a device should handle a packet based on its QoS marking.</p>
            <h4 style="color: #F5B041;">QoS Mechanisms</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Classification:</strong> Identifying and categorizing traffic (e.g., by application, IP address, port number).</li>
                <li><strong>Marking:</strong> Applying a value to the packet header (e.g., DSCP value in the IP header) to indicate its priority.</li>
                <li><strong>Queuing:</strong> When a link is congested, queuing algorithms manage how packets are stored and sent. Low Latency Queuing (LLQ) gives strict priority to traffic like voice.</li>
                <li><strong>Policing & Shaping:</strong> Rate-limiting techniques. Policing drops excess traffic, while shaping buffers it.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos/configuration/15-mt/qos-15-mt-book/qos-overview.html" target="_blank" style="color: #66B2FF;">Read: QoS Overview</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=z6k-4H3t1eU" target="_blank" style="color: #66B2FF;">Watch: Quality of Service (QoS) Explained (PowerCert)</a></em>
            </div>
        </div>
    `,

};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION4_DETAILS = SECTION4_DETAILS;
}
