/**
 * CCNA Section 5: Security Fundamentals - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, this content is focused on exam-relevant technical details.
 * v1.0 - Initial creation for all Section 5 topics.
 */

const SECTION5_DETAILS = {
    // 5.1 Key Security Concepts
    "Key Security Concepts": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.1: Key Security Concepts</h3>
            <p>Understanding these core terms is the foundation of network security.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Threat:</strong> Any potential danger to an asset. This could be a malicious actor, a natural disaster, or a system failure.</li>
                <li><strong>Vulnerability:</strong> A weakness in a system that a threat can exploit. Examples include an unpatched operating system, a weak password, or a lack of physical security.</li>
                <li><strong>Exploit:</strong> The specific method or piece of code used to take advantage of a vulnerability.</li>
                <li><strong>Mitigation:</strong> The countermeasures put in place to reduce risk. This includes firewalls, intrusion prevention systems (IPS), access control lists (ACLs), and user training.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EC7063; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html" target="_blank" style="color: #66B2FF;">Read: What Is Cybersecurity? (Cisco)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=inWWhr5tnEA" target="_blank" style="color: #66B2FF;">Watch: Threats, Vulnerabilities, Exploits (Professor Messer)</a></em>
            </div>
        </div>
    `,

    // Port Security
    "Port Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">5.7.1: Port Security</h3>
            <p><strong>Port Security</strong> limits the number of MAC addresses that can be learned on a switch port, preventing unauthorized devices from connecting.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 1
Switch(config-if)# switchport port-security violation restrict
Switch(config-if)# switchport port-security mac-address sticky
</code>
</pre>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Maximum:</strong> Sets the maximum number of secure MAC addresses</li>
                <li><strong>Violation modes:</strong> protect (drops frames), restrict (drops + logs), shutdown (disables port)</li>
                <li><strong>Sticky learning:</strong> Dynamically learned MACs are added to running config</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/port-security/10595-69.html" target="_blank" style="color: #66B2FF;">Read: Port Security Configuration</a></em>
            </div>
        </div>
    `,

    // DHCP Snooping
    "DHCP Snooping": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">5.7.2: DHCP Snooping</h3>
            <p><strong>DHCP Snooping</strong> protects against rogue DHCP servers by creating a database of legitimate DHCP bindings and filtering DHCP messages.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# ip dhcp snooping
Switch(config)# ip dhcp snooping vlan 10
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# ip dhcp snooping trust
</code>
</pre>
            <p>Trusted ports connect to legitimate DHCP servers. Untrusted ports connect to client devices and will drop DHCP server messages.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/ip/dynamic-host-configuration-protocol-dhcp/dhcp-snooping-configuration.html" target="_blank" style="color: #66B2FF;">Read: DHCP Snooping Configuration</a></em>
            </div>
        </div>
    `,

    // Dynamic ARP Inspection (DAI)
    "Dynamic ARP Inspection (DAI)": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">5.7.2: Dynamic ARP Inspection (DAI)</h3>
            <p><strong>Dynamic ARP Inspection (DAI)</strong> validates ARP packets against the DHCP snooping binding database, preventing ARP spoofing attacks.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! DAI depends on DHCP snooping
Switch(config)# ip dhcp snooping
Switch(config)# ip dhcp snooping vlan 10
Switch(config)# ip arp inspection vlan 10
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# ip arp inspection trust
</code>
</pre>
            <p>DAI validates ARP packets by checking IP-to-MAC bindings in the DHCP snooping database. Invalid ARP packets are dropped.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/dynamic-arp-inspection-dai/65847-dynamic-arp-inspection.html" target="_blank" style="color: #66B2FF;">Read: Dynamic ARP Inspection</a></em>
            </div>
        </div>
    `,
    
    // 5.3 Device Access Control
    "Device Access Control": `
        <div style="font-family: 'Inter', sans-serif; color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">5.3: Configure Device Access Control (Local)</h3>
            <p>This is the most fundamental device hardening. It involves setting up local usernames and passwords to control who can log in.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Use 'secret' for an encrypted password, 'password' is clear-text (bad practice)
Router(config)# username admin privilege 15 secret C1sc0!_2025

! Configure console port to use the local user database
Router(config)# line console 0
Router(config-line)# login local

! Configure VTY lines (SSH/Telnet) to use local database
Router(config)# line vty 0 4
Router(config-line)# login local
Router(config-line)# transport input ssh
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2994365&seqNum=4" target="_blank" style="color: #66B2FF;">Read: Securing Device Access (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=Fz43AWl_oso" target="_blank" style="color: #66B2FF;">Watch: Securing Console and VTY Lines (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 5.4 Security Password Policies
    "Security Password Policies": `
        <div style="font-family: 'Inter', sans-serif; color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">5.4: Security Password Policies</h3>
            <p>A strong password policy is a critical part of device hardening.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Management & Complexity:</strong> Involves enforcing minimum password length, requiring a mix of uppercase, lowercase, numbers, and symbols. Cisco IOS has commands like <code>security passwords min-length [length]</code>.</li>
                <li><strong>Password Alternatives:</strong> Passwords alone are often not enough.
                    <ul>
                        <li><strong>Multi-Factor Authentication (MFA):</strong> Requires two or more verification methods (e.g., password + a code from your phone).</li>
                        <li><strong>Certificates:</strong> Digital certificates can be used to authenticate devices or users without passwords.</li>
                        <li><strong>Biometrics:</strong> Uses unique physical traits like fingerprints or facial recognition.</li>
                    </ul>
                </li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisa.gov/uscert/ncas/tips/ST04-002" target="_blank" style="color: #66B2FF;">Read: Choosing and Protecting Passwords (CISA)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=rXZcYpsqbiw" target="_blank" style="color: #66B2FF;">Watch: What is Multi-factor Authentication?</a></em>
            </div>
        </div>
    `,

    // 5.5 IPsec VPNs
    "IPsec VPNs": `
        <div style="font-family: 'Inter', sans-serif; color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.5: IPsec Remote Access & Site-to-Site VPNs</h3>
            <p><strong>IPsec (IP Security)</strong> is a framework of open standards for ensuring private, secure communications over IP networks. It creates a Virtual Private Network (VPN) tunnel.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Site-to-Site VPN:</strong> Securely connects two entire networks (e.g., a branch office to a main office) over the internet. To devices on the local networks, it looks like a direct private connection.</li>
                <li><strong>Remote Access VPN:</strong> Securely connects a single remote user (e.g., an employee working from home) to the corporate network. The user's computer runs VPN client software to establish the secure tunnel.</li>
            </ul>
            <p>IPsec provides confidentiality (encryption), integrity (hashing), authentication, and anti-replay protection.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/security-vpn/ipsec-negotiation-ike-protocols/117336-technote-ipsec-00.html" target="_blank" style="color: #66B2FF;">Read: IPsec VPN Fundamentals</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=fk-Kj_2yYn0" target="_blank" style="color: #66B2FF;">Watch: VPNs Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,
    
    // 5.6 Access Control Lists
    "Access Control Lists (ACLs)": `
        <div style="font-family: 'Inter', sans-serif; color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.6: Configure & Verify Access Control Lists</h3>
            <p><strong>ACLs</strong> are lists of permit or deny statements that filter traffic. They are processed top-down, and there is an implicit "deny all" at the end of every ACL.</p>
            <h4 style="color: #58D68D;">Standard vs. Extended</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Standard ACLs (1-99):</strong> Filter based only on the <strong>source</strong> IP address. They should be placed as close to the destination as possible.</li>
                <li><strong>Extended ACLs (100-199):</strong> Filter based on source IP, destination IP, protocol (TCP/UDP), and port numbers. They should be placed as close to the source as possible.</li>
            </ul>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Extended ACL to allow a specific host to a web server
Router(config)# ip access-list extended WEB_FILTER
Router(config-ext-nacl)# permit tcp host 192.168.1.10 host 10.10.10.5 eq 80

! Apply the ACL to an interface
Router(config)# interface Gi0/0
Router(config-if)# ip access-group WEB_FILTER in
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2980383&seqNum=3" target="_blank" style="color: #66B2FF;">Read: Implementing ACLs (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=GGn8k_z5_4s" target="_blank" style="color: #66B2FF;">Watch: ACLs Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 5.7 Layer 2 Security Features
    "Layer 2 Security": `
        <div style="font-family: 'Inter', sans-serif; color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">5.7: Configure Layer 2 Security Features</h3>
            <h4 style="color: #5DADE2;">Port Security</h4>
            <p>Restricts port access based on MAC addresses. It can statically or dynamically learn allowed MACs. If a violation occurs, the port can be set to <strong>protect</strong> (drop violating traffic), <strong>restrict</strong> (drop traffic and send log), or <strong>shutdown</strong> (disable the port).</p>
            <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security mac-address sticky
Switch(config-if)# switchport port-security violation shutdown
</code>
</pre>
            <h4 style="color: #5DADE2;">DHCP Snooping</h4>
            <p>Prevents rogue DHCP servers. You configure switch ports as <strong>trusted</strong> (towards legit servers) or <strong>untrusted</strong> (towards clients). Snooping drops DHCP server messages from untrusted ports.</p>
            <h4 style="color: #5DADE2;">Dynamic ARP Inspection (DAI)</h4>
            <p>Prevents ARP spoofing/poisoning. It uses the DHCP Snooping binding table to verify that an ARP packet's sender MAC and IP address match. If they don't, the packet is dropped.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/12-2sx/configuration/guide/book/layer2.html" target="_blank" style="color: #66B2FF;">Read: L2 Security Features Guide</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=p5p2-_3-4F8" target="_blank" style="color: #66B2FF;">Watch: Port Security, DHCP Snooping, DAI (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 5.8 AAA Concepts
    "AAA Concepts": `
        <div style="font-family: 'Inter', sans-serif; color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.8: Compare AAA Concepts</h3>
            <p><strong>AAA (Authentication, Authorization, and Accounting)</strong> is a framework for intelligent access control, typically managed by a central server like Cisco ISE or RADIUS.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Authentication:</strong> Asks "Who are you?" Verifies a user's identity with credentials like a username/password or a certificate.</li>
                <li><strong>Authorization:</strong> Asks "What are you allowed to do?" Grants specific permissions to an authenticated user. For example, a junior admin might be authorized to view configurations but not change them.</li>
                <li><strong>Accounting:</strong> Asks "What did you do?" Logs user activity, providing an audit trail of commands run and actions taken.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/security-vpn/remote-authentication-dial-user-service-radius/13838-10.html" target="_blank" style="color: #C39BD3;">Read: AAA Overview</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=W-Lq232K4aM" target="_blank" style="color: #C39BD3;">Watch: AAA on Cisco Routers (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 5.9 Wireless Security Protocols
    "Wireless Security Protocols": `
        <div style="font-family: 'Inter', sans-serif; color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.9: Describe Wireless Security Protocols</h3>
            <p>Securing wireless networks is critical. These protocols have evolved over time.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>WEP (Wired Equivalent Privacy):</strong> The original, now-deprecated standard. It is fundamentally broken and should never be used.</li>
                <li><strong>WPA (Wi-Fi Protected Access):</strong> An interim standard that improved on WEP by introducing TKIP for encryption. It is also considered insecure today.</li>
                <li><strong>WPA2:</strong> The long-time standard. It uses AES, a much stronger encryption algorithm, and is still widely used. It requires a Pre-Shared Key (PSK) for personal use or 802.1X/EAP for enterprise use.</li>
                <li><strong>WPA3:</strong> The current standard. It provides stronger encryption than WPA2 and protects against offline dictionary attacks, making it much more secure.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.wi-fi.org/discover-wi-fi/security" target="_blank" style="color: #C39BD3;">Read: Wi-Fi Security (Wi-Fi Alliance)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=Jf_4d2H_qA8" target="_blank" style="color: #C39BD3;">Watch: WPA vs WPA2 vs WPA3</a></em>
            </div>
        </div>
    `,

    // 5.10 WLAN with WPA2 PSK
    "WLAN with WPA2 PSK": `
        <div style="font-family: 'Inter', sans-serif; color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.10: Configure WLAN with WPA2 PSK</h3>
            <p>This is a common configuration for SOHO or guest wireless networks. It is typically done via a graphical user interface (GUI) on a Wireless LAN Controller (WLC) or an autonomous AP.</p>
            <h4 style="color: #AF7AC5;">Key GUI Configuration Steps:</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Create a new WLAN/SSID:</strong> Define the network name that will be broadcast to users (e.g., "Guest-WiFi").</li>
                <li><strong>Select Security Method:</strong> Navigate to the security or authentication tab for the new WLAN.</li>
                <li><strong>Choose WPA2 Policy:</strong> Select WPA2 as the security protocol.</li>
                <li><strong>Enable PSK:</strong> Select Pre-Shared Key (PSK) as the authentication method (as opposed to 802.1X/Enterprise).</li>
                <li><strong>Enter the PSK:</strong> Type in the shared password that all users will use to connect to this wireless network.</li>
                <li><strong>Save and Enable:</strong> Save the configuration and enable the WLAN.</li>
            </ol>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/100561-wlc-wpa-psk-config.html" target="_blank" style="color: #C39BD3;">Read: WPA-PSK on WLC Configuration Example</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=KzfYyT3p-4M" target="_blank" style="color: #C39BD3;">Watch: WLC and AP Lab Setup (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION5_DETAILS = SECTION5_DETAILS;
}
