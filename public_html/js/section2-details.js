/**
 * CCNA Section 2: Network Access - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, this content is focused on exam-relevant technical details.
 * v1.0 - Initial creation for all Section 2 topics.
 */

const SECTION2_DETAILS = {
    // 2.1 VLANs
    "Access Ports": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">2.1: Configure & Verify VLANs</h3>
            <p>A <strong>VLAN (Virtual LAN)</strong> is a logical broadcast domain. It allows you to segment a physical switch into multiple virtual switches. This improves security by isolating traffic and reduces broadcast traffic, enhancing performance.</p>
            
            <h4 style="color: #00CFFF;">Access Ports (Data and Voice)</h4>
            <p>An <strong>Access Port</strong> belongs to and carries traffic for only one VLAN. It's the type of port you connect an endpoint like a PC or printer to.</p>
            <p>A special configuration allows an access port to support both a PC (on a data VLAN) and an IP Phone (on a separate voice VLAN). The switch identifies voice traffic via CDP from the Cisco phone and places it on the voice VLAN, while all other traffic goes to the data VLAN.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10      <-- Data VLAN
Switch(config-if)# switchport voice vlan 20       <-- Voice VLAN
</code>
</pre>
            <h4 style="color: #00CFFF;">Default VLAN & Connectivity</h4>
            <p>By default, all ports on a Cisco switch are in <strong>VLAN 1</strong>. This is the default VLAN. For devices in different VLANs to communicate, they must have their traffic routed by a Layer 3 device (a router or a Layer 3 switch). Devices within the same VLAN can communicate directly through a switch without needing a router.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2980381&seqNum=3" target="_blank" style="color: #66B2FF;">Read: Implementing VLANs (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=b2w1Y_g_o_M" target="_blank" style="color: #66B2FF;">Watch: VLANs Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 2.2 Interswitch Connectivity
    "Trunk Ports": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">2.2: Configure & Verify Interswitch Connectivity</h3>
            <p>To span VLANs across multiple switches, you need a special connection between them called a <strong>trunk</strong>.</p>
            
            <h4 style="color: #00CFFF;">Trunk Ports & 802.1Q</h4>
            <p>A <strong>Trunk Port</strong> can carry traffic for multiple VLANs simultaneously. To do this, it uses the <strong>802.1Q</strong> trunking protocol. When a frame from a specific VLAN (e.g., VLAN 10) is sent across a trunk, the switch inserts a 4-byte "tag" into the Ethernet frame header. This tag contains the VLAN ID (10), allowing the receiving switch to know which VLAN the frame belongs to.</p>

            <h4 style="color: #00CFFF;">Native VLAN</h4>
            <p>The <strong>Native VLAN</strong> is a special feature of 802.1Q trunks. Traffic belonging to the native VLAN is the <em>only</em> traffic that crosses the trunk link <em>without a tag</em>. By default, this is VLAN 1. For a trunk to function correctly, the native VLAN must match on both ends of the trunk link. A native VLAN mismatch will cause spanning-tree issues and is a common security vulnerability.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 99
Switch(config-if)# switchport trunk allowed vlan 10,20,30,99
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://study-ccna.com/vlan-trunks/" target="_blank" style="color: #66B2FF;">Read: VLAN Trunks Explained</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=JSeuR9I7M-M" target="_blank" style="color: #66B2FF;">Watch: Trunking & Native VLANs (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,
    
    // 2.3 Discovery Protocols
    "CDP & LLDP": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.3: L2 Discovery Protocols (CDP & LLDP)</h3>
            <p>These protocols allow directly connected network devices to learn about each other automatically.</p>
            
            <h4 style="color: #58D68D;">Cisco Discovery Protocol (CDP)</h4>
            <p><strong>Cisco-proprietary</strong>. It runs by default on all Cisco devices. Devices send periodic CDP advertisements to a multicast address, sharing information like their device ID (hostname), local interface, platform (model number), and IP address.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch# show cdp neighbors detail
</code>
</pre>
            
            <h4 style="color: #58D68D;">Link Layer Discovery Protocol (LLDP)</h4>
            <p><strong>Industry standard</strong> (IEEE 802.1AB). It performs the same function as CDP but is vendor-neutral, allowing devices from different manufacturers to discover each other. It must be enabled globally on Cisco devices.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# lldp run
Switch# show lldp neighbors detail
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.practicalnetworking.net/stand-alone/cdp-and-lldp/" target="_blank" style="color: #66B2FF;">Read: CDP and LLDP (Practical Networking)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=J4kI0g-Ocvo" target="_blank" style="color: #66B2FF;">Watch: CDP and LLDP (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 2.4 EtherChannel
    "LACP Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">2.4: Configure & Verify EtherChannel (LACP)</h3>
            <p><strong>EtherChannel</strong> (or Link Aggregation) bundles multiple physical links between switches into a single logical link. This provides increased bandwidth and redundancy.</p>
            
            <h4 style="color: #F5B041;">Dynamic Negotiation Protocols</h4>
            <p>You can configure EtherChannel statically ("on") or use a negotiation protocol:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>LACP (Link Aggregation Control Protocol):</strong> Industry standard (IEEE 802.3ad). Modes are <strong>Active</strong> (actively tries to form a channel) and <strong>Passive</strong> (will form a channel only if the other side is active).</li>
                <li><strong>PAgP (Port Aggregation Protocol):</strong> Cisco-proprietary. Modes are <strong>Desirable</strong> and <strong>Auto</strong>.</li>
            </ul>
            <p>For a channel to form, the ports on both sides must have matching speed, duplex, and VLAN configuration.</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# interface range GigabitEthernet0/1 - 2
Switch(config-if-range)# channel-group 1 mode active
</code>
</pre>
            <p>This creates a logical interface, Port-channel1. Any configuration (like making it a trunk) should then be applied to the Port-channel interface, not the physical interfaces.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2994363&seqNum=4" target="_blank" style="color: #66B2FF;">Read: Understanding EtherChannel (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=oVcyK-DB-1s" target="_blank" style="color: #66B2FF;">Watch: EtherChannel Explained (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 2.5 Spanning Tree Protocol
    "Rapid PVST+": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">2.5: Rapid PVST+ Spanning Tree Protocol</h3>
            <p><strong>Spanning Tree Protocol (STP)</strong> is a Layer 2 loop-prevention mechanism. It logically blocks redundant paths to ensure there is only one active path to any destination.</p>
            
            <h4 style="color: #EC7063;">Root Bridge & Port Roles</h4>
            <p>The entire STP topology is built from the perspective of the <strong>Root Bridge</strong>. The Root Bridge is the switch with the lowest Bridge ID (Priority + MAC Address). All other switches must calculate their single best path to the root.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Root Port:</strong> On a non-root switch, the one port with the lowest cost path to the Root Bridge.</li>
                <li><strong>Designated Port:</strong> For each network segment, the switch port that advertises the best path to the Root Bridge for that segment. All ports on the Root Bridge are Designated Ports.</li>
                <li><strong>Blocking/Alternate Port:</strong> A redundant port that is logically blocked to prevent a loop.</li>
            </ul>

            <h4 style="color: #EC7063;">Port States & PortFast</h4>
            <p>A port transitions through states: Blocking -> Listening -> Learning -> Forwarding. This process can take 30-50 seconds. <strong>PortFast</strong> is a feature enabled on access ports (connected to endpoints) that bypasses the Listening and Learning states, allowing the port to go directly to Forwarding. Never enable PortFast on a link to another switch.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #EC7063; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/5234-5.html" target="_blank" style="color: #66B2FF;">Read: Understanding Rapid Spanning Tree Protocol</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=198CixG-A2w" target="_blank" style="color: #66B2FF;">Watch: Spanning Tree Protocol (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 2.6 Wireless Architectures
    "Wireless Architecture": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">2.6: Wireless Architecture & AP Modes</h3>
            <p>This describes how wireless networks are designed and managed.</p>

            <h4 style="color: #AF7AC5;">Split-MAC Architecture</h4>
            <p>The most common enterprise architecture is the <strong>Split-MAC</strong> architecture used with a WLC. In this model, the AP and WLC split the 802.11 functions. The AP handles the real-time, time-sensitive tasks (like sending beacons and acknowledgements), while the WLC handles the management-intensive tasks (like authentication, security policies, and RF management).</p>
            
            <h4 style="color: #AF7AC5;">Other Architectures:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Autonomous:</strong> Each AP is an independent, self-contained unit. (SOHO)</li>
                <li><strong>Cloud-Based:</strong> APs are managed from a cloud platform like Cisco Meraki.</li>
            </ul>
             <p>AP modes (Local, FlexConnect, Monitor, etc.) define the specific function an AP performs within these architectures.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/wireless_lan_architecture.html" target="_blank" style="color: #C39BD3;">Read: Cisco Wireless LAN Architecture</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=F05E7R_0gqQ" target="_blank" style="color: #C39BD3;">Watch: Wireless Architecture (Zigbits)</a></em>
            </div>
        </div>
    `,

    // 2.7 WLAN Component Connections
    "WLAN Infrastructure": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">2.7: Physical Connections of WLAN Components</h3>
            <p>Understanding how wireless components connect to the wired network is crucial.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>AP to Switch:</strong> A Lightweight AP connects to an <strong>access port</strong> on a switch. The access port is configured for the VLAN that will be used for management traffic between the AP and the WLC.</li>
                <li><strong>WLC to Switch:</strong> A WLC typically connects to a <strong>trunk port</strong> on a switch. This is because the WLC must be able to communicate on multiple VLANs: the management VLAN and all the various client data VLANs it is managing.</li>
                <li><strong>LAG (Link Aggregation Group):</strong> This is simply EtherChannel. It's best practice to connect a physical WLC to a switch using a LAG to provide redundancy and increased bandwidth.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2756378&seqNum=3" target="_blank" style="color: #C39BD3;">Read: Connecting WLCs and APs (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=KzfYyT3p-4M" target="_blank" style="color: #C39BD3;">Watch: WLC and AP Lab Setup (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 2.8 AP Management Access
    "AP Management": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">2.8: AP Management Access</h3>
            <p>Describes the methods used to configure and monitor wireless network devices.</p>
            <h4 style="color: #AF7AC5;">Management Methods:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Console:</strong> Out-of-band physical connection for initial setup or recovery.</li>
                <li><strong>Telnet / SSH:</strong> In-band command-line access. SSH is the secure, encrypted standard.</li>
                <li><strong>HTTP / HTTPS:</strong> In-band graphical user interface (GUI) access. HTTPS is the secure standard.</li>
                <li><strong>TACACS+/RADIUS:</strong> Centralized authentication protocols. Instead of storing local usernames and passwords on each device, management access is authenticated against a central server (like Cisco ISE). This provides Authentication, Authorization, and Accounting (AAA).</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/security-vpn/terminal-access-controller-access-control-system-tacacs-/215535-tacacs-and-radius-comparison.html" target="_blank" style="color: #C39BD3;">Read: TACACS+ and RADIUS Comparison</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=W-Lq232K4aM" target="_blank" style="color: #C39BD3;">Watch: AAA on Cisco Routers (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 2.9 Wireless LAN GUI Config
    "WLAN Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">2.9: Interpret Wireless LAN GUI Configuration</h3>
            <p>Configuring a basic WLAN for client connectivity in the WLC GUI involves several key steps.</p>
            <h4 style="color: #AF7AC5;">Key Configuration Steps:</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Create a new WLAN:</strong> Give it a Profile Name and an SSID (the name that will be broadcast to clients).</li>
                <li><strong>Associate with a VLAN Interface:</strong> Map the WLAN to a pre-configured interface on the WLC. This determines which VLAN the wireless clients' traffic will be placed on in the wired network.</li>
                <li><strong>Configure Security Settings:</strong>
                    <ul>
                        <li>On the Layer 2 Security tab, select the security protocol, typically WPA2 or WPA3.</li>
                        <li>Choose a policy (e.g., WPA2 Policy).</li>
                        <li>Enable PSK (Pre-Shared Key) and enter the password clients will use to connect.</li>
                    </ul>
                </li>
                <li><strong>Enable the WLAN:</strong> Activate the WLAN so it can be used by APs.</li>
            </ol>
            <p>Advanced settings can include configuring QoS profiles to prioritize traffic (like voice) and applying ACLs to filter traffic.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/wlan_security.html" target="_blank" style="color: #C39BD3;">Read: WLC WLAN Security Configuration Guide</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=KzfYyT3p-4M" target="_blank" style="color: #C39BD3;">Watch: WLC and AP Lab Setup (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,
    
    "Default VLAN": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">Default VLAN</h3>
            <p>By default, all ports on a Cisco switch are in <strong>VLAN 1</strong>, which is the default VLAN.</p>
            <h4 style="color: #F5B041;">Security Considerations:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Best Practice:</strong> Don't use VLAN 1 for user data</li>
                <li><strong>Management VLAN:</strong> Change management traffic to another VLAN</li>
                <li><strong>Native VLAN:</strong> Change native VLAN from 1 to unused VLAN</li>
            </ul>
            <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# vlan 99
Switch(config-vlan)# name MANAGEMENT
Switch(config)# interface vlan 99
Switch(config-if)# ip address 192.168.99.10 255.255.255.0
</code>
</pre>
        </div>
    `,
    
    "Connectivity": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">VLAN Connectivity</h3>
            <p>Devices within the same VLAN can communicate directly. Devices in different VLANs require routing.</p>
            <h4 style="color: #58D68D;">Intra-VLAN Communication:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Same VLAN:</strong> Layer 2 switching (MAC addresses)</li>
                <li><strong>Same broadcast domain:</strong> Direct communication</li>
                <li><strong>No routing required:</strong> Switch forwards based on MAC table</li>
            </ul>
            <h4 style="color: #58D68D;">Inter-VLAN Communication:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Different VLANs:</strong> Layer 3 routing required</li>
                <li><strong>Router or L3 Switch:</strong> Provides routing between VLANs</li>
                <li><strong>Default Gateway:</strong> Each VLAN needs gateway configuration</li>
            </ul>
        </div>
    `,
    
    "Native VLAN": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">Native VLAN</h3>
            <p>The Native VLAN is the VLAN that carries untagged traffic on a 802.1Q trunk link.</p>
            <h4 style="color: #EC7063;">Key Characteristics:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Untagged Traffic:</strong> Only VLAN that crosses trunk without 802.1Q tag</li>
                <li><strong>Default:</strong> VLAN 1 is the default native VLAN</li>
                <li><strong>Must Match:</strong> Both ends of trunk must have same native VLAN</li>
                <li><strong>Security Risk:</strong> Native VLAN hopping attacks possible</li>
            </ul>
            <h4 style="color: #EC7063;">Best Practices:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Change Native VLAN:</strong> Use unused VLAN (e.g., 999)</li>
                <li><strong>Prune Native VLAN:</strong> Don't allow native VLAN on access ports</li>
                <li><strong>Document Configuration:</strong> Ensure consistent native VLAN settings</li>
            </ul>
            <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport trunk native vlan 999
</code>
</pre>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION2_DETAILS = SECTION2_DETAILS;
}