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
            </div>
        </div>
    `,

    // 2.2 Interswitch Connectivity
    "Trunk Ports": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.2a: Configure & Verify Trunk Ports</h3>
            <p><strong>Trunk ports</strong> are essential network connections that carry traffic for multiple VLANs between network devices. They enable VLAN segmentation to extend beyond a single switch, creating scalable and flexible network architectures.</p>
            
            <h4 style="color: #58D68D;">Trunk Port Fundamentals</h4>
            <p>Unlike access ports that belong to a single VLAN, trunk ports can simultaneously carry traffic from multiple VLANs. This is accomplished through <strong>VLAN tagging</strong>, where frames are marked with VLAN identifiers as they traverse the trunk link.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Trunk Port Characteristics:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Multi-VLAN Support:</strong> Carries traffic for multiple VLANs simultaneously</li>
                    <li><strong>VLAN Tagging:</strong> Uses 802.1Q standard for frame identification</li>
                    <li><strong>Native VLAN:</strong> One VLAN crosses untagged (default VLAN 1)</li>
                    <li><strong>Allowed VLANs:</strong> Configurable list of permitted VLANs</li>
                    <li><strong>Inter-switch Connectivity:</strong> Primary method for VLAN extension</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Trunk Configuration Steps</h4>
            <p><strong>Basic Trunk Setup:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure interface as trunk port
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk

! Set encapsulation (if required)
Switch(config-if)# switchport trunk encapsulation dot1q

! Configure native VLAN (security best practice)
Switch(config-if)# switchport trunk native vlan 999

! Specify allowed VLANs (security best practice)
Switch(config-if)# switchport trunk allowed vlan 10,20,30,100-199
</code>
</pre>

            <p><strong>Advanced Configuration Options:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Disable DTP (Dynamic Trunking Protocol) for security
Switch(config-if)# switchport nonegotiate

! Add VLANs to existing allowed list
Switch(config-if)# switchport trunk allowed vlan add 40,50

! Remove VLANs from allowed list
Switch(config-if)# switchport trunk allowed vlan remove 30

! Set all VLANs except specified ones
Switch(config-if)# switchport trunk allowed vlan except 1,999
</code>
</pre>

            <h4 style="color: #58D68D;">Verification and Troubleshooting</h4>
            <p><strong>Verification Commands:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Display all trunk ports and their status
Switch# show interfaces trunk

! Show specific interface trunk details
Switch# show interfaces GigabitEthernet0/1 switchport

! Check DTP status and negotiation
Switch# show dtp interface GigabitEthernet0/1

! Verify VLAN database and trunk VLANs
Switch# show vlan brief
</code>
</pre>

            <div style="background-color: #2c1810; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #f59e0b; margin-top: 0;">🔍 Common Troubleshooting Issues:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>VLAN Mismatch:</strong> Check both sides have same allowed VLANs</li>
                    <li><strong>Native VLAN Mismatch:</strong> Verify native VLAN consistency</li>
                    <li><strong>DTP Conflicts:</strong> Ensure both sides agree on trunk mode</li>
                    <li><strong>Physical Issues:</strong> Check cable and port status</li>
                    <li><strong>STP Blocking:</strong> Verify spanning-tree is not blocking the port</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Security Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Explicit Trunk Mode:</strong> Always use "switchport mode trunk" instead of auto</li>
                <li><strong>Disable DTP:</strong> Use "switchport nonegotiate" to prevent DTP attacks</li>
                <li><strong>Change Native VLAN:</strong> Never use VLAN 1 as native VLAN</li>
                <li><strong>Prune Unused VLANs:</strong> Only allow necessary VLANs on trunk ports</li>
                <li><strong>Physical Security:</strong> Secure trunk connections in locked network rooms</li>
            </ul>

            <h4 style="color: #58D68D;">Design Considerations</h4>
            <p><strong>Bandwidth Planning:</strong> Trunk links should have sufficient bandwidth to handle combined traffic from all VLANs. Consider link aggregation (EtherChannel) for high-traffic trunk connections.</p>
            <p><strong>Redundancy:</strong> Implement multiple trunk paths with spanning-tree for failover protection, ensuring network resilience in case of link failure.</p>
            <p><strong>Scalability:</strong> Plan trunk allowed-VLAN lists carefully to support future network growth while maintaining security boundaries.</p>

            <h4 style="color: #58D68D;">Real-World Implementation</h4>
            <p><strong>Campus Networks:</strong> Trunk ports connect access layer switches to distribution layer switches, enabling department VLANs to span multiple floors or buildings while maintaining logical separation.</p>
            <p><strong>Data Centers:</strong> Critical for connecting server access switches to aggregation switches, supporting multi-tenant environments and application segmentation strategies.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Configure trunk ports with proper encapsulation and security settings</li>
                    <li>Troubleshoot trunk negotiation and VLAN mismatch issues</li>
                    <li>Understand the relationship between trunks, VLANs, and spanning-tree</li>
                    <li>Implement trunk security best practices including DTP hardening</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "802.1Q": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.2b: IEEE 802.1Q VLAN Tagging Protocol</h3>
            <p><strong>802.1Q</strong> is the IEEE standard that defines the architecture for VLANs in bridged LANs. It specifies how VLAN information is carried in Ethernet frames through a tagging mechanism, enabling VLANs to span multiple switches across a network infrastructure.</p>
            
            <h4 style="color: #58D68D;">802.1Q Frame Structure</h4>
            <p>The 802.1Q standard inserts a 4-byte <strong>VLAN tag</strong> into the standard Ethernet frame header, positioned between the Source MAC Address and the Type/Length fields. This tag contains critical VLAN identification information.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">802.1Q Tag Components (4 bytes):</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>TPID (Tag Protocol Identifier):</strong> 2 bytes, always 0x8100 for 802.1Q</li>
                    <li><strong>PCP (Priority Code Point):</strong> 3 bits for QoS priority (0-7)</li>
                    <li><strong>DEI (Drop Eligible Indicator):</strong> 1 bit for traffic drop eligibility</li>
                    <li><strong>VID (VLAN Identifier):</strong> 12 bits for VLAN ID (1-4094)</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Key 802.1Q Characteristics</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Frame Tagging:</strong> Adds 4-byte tag to identify VLAN membership</li>
                <li><strong>VLAN Range:</strong> Supports VLANs 1-4094 (0 and 4095 reserved)</li>
                <li><strong>Native VLAN:</strong> One VLAN can traverse trunk untagged</li>
                <li><strong>Inter-operability:</strong> Industry standard supported by all vendors</li>
                <li><strong>QoS Integration:</strong> Includes priority bits for traffic classification</li>
            </ul>

            <h4 style="color: #58D68D;">Configuration Examples</h4>
            <p><strong>Basic Trunk Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure interface as 802.1Q trunk
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk encapsulation dot1q

! Specify allowed VLANs (security best practice)
Switch(config-if)# switchport trunk allowed vlan 10,20,30,100-199

! Set native VLAN (security best practice)
Switch(config-if)# switchport trunk native vlan 999
</code>
</pre>

            <p><strong>Verification Commands:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Show trunk status and VLAN information
Switch# show interfaces trunk
Switch# show interfaces GigabitEthernet0/1 trunk

! Display VLAN information
Switch# show vlan brief
Switch# show spanning-tree vlan 10
</code>
</pre>

            <h4 style="color: #58D68D;">Security Considerations</h4>
            <div style="background-color: #2c1810; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #f59e0b; margin-top: 0;">⚠️ Security Best Practices:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Change Native VLAN:</strong> Never use VLAN 1 as native VLAN</li>
                    <li><strong>Prune Unused VLANs:</strong> Only allow necessary VLANs on trunks</li>
                    <li><strong>VLAN Hopping Prevention:</strong> Disable DTP and use explicit trunk mode</li>
                    <li><strong>Access Port Security:</strong> Never trunk to end devices</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Troubleshooting Common Issues</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Native VLAN Mismatch:</strong> Check both ends have same native VLAN</li>
                <li><strong>VLAN Not Allowed:</strong> Verify VLAN in allowed list on trunk</li>
                <li><strong>Encapsulation Mismatch:</strong> Ensure both ends use 802.1Q</li>
                <li><strong>STP Blocking:</strong> Check for spanning-tree port blocking states</li>
            </ul>

            <h4 style="color: #58D68D;">Real-World Applications</h4>
            <p><strong>Campus Network Design:</strong> 802.1Q enables efficient VLAN distribution across building infrastructure, allowing departments to maintain logical separation while sharing physical network resources.</p>
            <p><strong>Data Center Environments:</strong> Critical for multi-tenant environments and micro-segmentation strategies, enabling isolation between applications and security zones.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Understand 802.1Q frame format and tagging process</li>
                    <li>Configure and verify trunk ports with proper security settings</li>
                    <li>Identify and resolve VLAN-related connectivity issues</li>
                    <li>Implement native VLAN security best practices</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "VTP Modes": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">2.2b: VLAN Trunking Protocol (VTP) Modes</h3>
            <p><strong>VTP (VLAN Trunking Protocol)</strong> is a Cisco proprietary protocol that manages VLAN information across multiple switches in a domain. It synchronizes VLAN configuration changes, reducing administrative overhead in large switched networks.</p>
            
            <h4 style="color: #F5B041;">VTP Operating Modes</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 2px solid #F39C12;">
                        <th style="padding: 10px; text-align: left; color: #F39C12;">Mode</th>
                        <th style="padding: 10px; text-align: left; color: #F39C12;">Create VLANs</th>
                        <th style="padding: 10px; text-align: left; color: #F39C12;">Modify VLANs</th>
                        <th style="padding: 10px; text-align: left; color: #F39C12;">Forward Advertisements</th>
                        <th style="padding: 10px; text-align: left; color: #F39C12;">Sync from Advertisements</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold; color: #10b981;">Server</td>
                        <td style="padding: 8px;">✓ Yes</td>
                        <td style="padding: 8px;">✓ Yes</td>
                        <td style="padding: 8px;">✓ Yes</td>
                        <td style="padding: 8px;">✓ Yes</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold; color: #6366f1;">Client</td>
                        <td style="padding: 8px;">✗ No</td>
                        <td style="padding: 8px;">✗ No</td>
                        <td style="padding: 8px;">✓ Yes</td>
                        <td style="padding: 8px;">✓ Yes</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold; color: #f59e0b;">Transparent</td>
                        <td style="padding: 8px;">✓ Local Only</td>
                        <td style="padding: 8px;">✓ Local Only</td>
                        <td style="padding: 8px;">✓ Yes</td>
                        <td style="padding: 8px;">✗ No</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #F5B041;">VTP Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure VTP Domain and Mode</span>
Switch(config)# <span style="color: #DCDCAA;">vtp mode server</span>
Switch(config)# <span style="color: #DCDCAA;">vtp domain COMPANY</span>
Switch(config)# <span style="color: #DCDCAA;">vtp password cisco123</span>

<span style="color: #6A9955;"># Verify VTP Configuration</span>
Switch# <span style="color: #DCDCAA;">show vtp status</span>
Switch# <span style="color: #DCDCAA;">show vtp counters</span>

<span style="color: #6A9955;"># Client Mode Configuration</span>
Switch(config)# <span style="color: #DCDCAA;">vtp mode client</span>
Switch(config)# <span style="color: #DCDCAA;">vtp domain COMPANY</span>
Switch(config)# <span style="color: #DCDCAA;">vtp password cisco123</span>
</code>
</pre>

            <h4 style="color: #F5B041;">VTP Security Considerations</h4>
            <div style="background-color: #2d1b1b; padding: 15px; border-radius: 8px; border-left: 4px solid #f87171; margin: 15px 0;">
                <h5 style="color: #f87171; margin-top: 0;">⚠️ Critical VTP Risks:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>VLAN Deletion:</strong> Server with higher revision number can delete all VLANs</li>
                    <li><strong>Network Outage:</strong> Incorrect VTP configuration can bring down entire network</li>
                    <li><strong>Password Mismatch:</strong> Different passwords prevent synchronization</li>
                    <li><strong>Domain Mismatch:</strong> Switches must be in same VTP domain to sync</li>
                </ul>
            </div>

            <h4 style="color: #F5B041;">Best Practices</h4>
            <ul style="color: #E0E0E0;">
                <li><strong>Use Transparent Mode:</strong> Recommended for most modern networks</li>
                <li><strong>Set Passwords:</strong> Always use VTP passwords for security</li>
                <li><strong>Monitor Revision Numbers:</strong> Higher revision overwrites lower</li>
                <li><strong>Backup Configuration:</strong> Before adding new switches to domain</li>
                <li><strong>Test in Lab:</strong> Verify VTP behavior before production deployment</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand VTP mode capabilities and limitations</li>
                    <li>Know VTP security risks and mitigation strategies</li>
                    <li>Configure VTP domain, mode, and password</li>
                    <li>Troubleshoot VTP synchronization issues</li>
                </ul>
            </div>
        </div>
    `,

    "VTP Pruning": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">2.2c: VTP Pruning</h3>
            <p><strong>VTP Pruning</strong> is an optimization feature that enhances network efficiency by preventing unnecessary VLAN traffic from being sent across trunk links where the VLAN has no active ports.</p>
            
            <h4 style="color: #EC7063;">How VTP Pruning Works</h4>
            <p>By default, trunk ports carry traffic for all VLANs in the VTP domain, even if a switch has no active ports in certain VLANs. VTP Pruning intelligently removes (prunes) VLANs from trunk links when they're not needed, reducing bandwidth consumption and broadcast traffic.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #E74C3C;">
                <h5 style="color: #EC7063; margin-top: 0;">Pruning Benefits:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Bandwidth Optimization:</strong> Reduces unnecessary broadcast and multicast traffic</li>
                    <li><strong>Improved Performance:</strong> Less CPU processing on switches for irrelevant VLANs</li>
                    <li><strong>Automatic Operation:</strong> Dynamically adjusts as VLANs are added/removed</li>
                    <li><strong>Scalability:</strong> Becomes more beneficial in large switched networks</li>
                </ul>
            </div>

            <h4 style="color: #EC7063;">VTP Pruning Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable VTP Pruning (Server Mode Only)</span>
Switch(config)# <span style="color: #DCDCAA;">vtp pruning</span>

<span style="color: #6A9955;"># Verify Pruning Status</span>
Switch# <span style="color: #DCDCAA;">show vtp status</span>
VTP Pruning Mode         : Enabled

<span style="color: #6A9955;"># View Pruning Information per Interface</span>
Switch# <span style="color: #DCDCAA;">show interfaces trunk</span>

<span style="color: #6A9955;"># Configure Pruning-Eligible VLANs</span>
Switch(config)# <span style="color: #DCDCAA;">interface gigabitethernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport trunk pruning vlan add 10-20</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport trunk pruning vlan remove 30</span>
</code>
</pre>

            <h4 style="color: #EC7063;">Pruning Verification</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch# <span style="color: #DCDCAA;">show interfaces gigabitethernet0/1 pruning</span>

Port    Vlans pruned for lack of request by neighbor
Gi0/1   3-4,6,8-9,11-99,101-1001

<span style="color: #6A9955;"># VLANs 3-4, 6, 8-9, etc. are pruned because</span>
<span style="color: #6A9955;"># the neighboring switch has no active ports in these VLANs</span>
</code>
</pre>

            <h4 style="color: #EC7063;">Pruning Considerations</h4>
            <div style="background-color: #2d1f1b; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
                <h5 style="color: #f59e0b; margin-top: 0;">⚠️ Important Notes:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Server Mode Required:</strong> Only VTP servers can enable pruning</li>
                    <li><strong>VLAN 1 Exception:</strong> VLAN 1 is never pruned (management traffic)</li>
                    <li><strong>VLANs 1002-1005:</strong> Default token ring VLANs cannot be pruned</li>
                    <li><strong>Dynamic Operation:</strong> Pruning changes as ports become active/inactive</li>
                </ul>
            </div>

            <h4 style="color: #EC7063;">Troubleshooting VTP Pruning</h4>
            <ul style="color: #E0E0E0;">
                <li><strong>Check VTP Mode:</strong> Ensure server mode for pruning configuration</li>
                <li><strong>Verify Trunk Status:</strong> Pruning only works on trunk ports</li>
                <li><strong>Monitor VLAN Activity:</strong> Pruning reflects actual VLAN usage</li>
                <li><strong>Review Pruning-Eligible Lists:</strong> Some VLANs may be excluded</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand pruning benefits and operation</li>
                    <li>Know which VLANs cannot be pruned</li>
                    <li>Configure and verify VTP pruning</li>
                    <li>Troubleshoot pruning-related connectivity issues</li>
                </ul>
            </div>
        </div>
    `,
    
    // 2.3 Discovery Protocols
    "CDP": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.3a: Cisco Discovery Protocol (CDP)</h3>
            <p><strong>CDP</strong> is a Cisco proprietary Layer 2 protocol that allows directly connected Cisco devices to automatically discover and learn about each other. It's one of the most fundamental network discovery tools in Cisco environments.</p>
            
            <h4 style="color: #58D68D;">How CDP Works</h4>
            <p>CDP operates at Layer 2 and sends periodic advertisements to the multicast address <code>01:00:0C:CC:CC:CC</code>. These advertisements contain device information that neighboring devices can use for network mapping and troubleshooting.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">CDP Information Shared:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Device ID:</strong> Hostname of the device</li>
                    <li><strong>Local Interface:</strong> Interface sending the CDP frame</li>
                    <li><strong>Platform:</strong> Device model (e.g., Cisco 2911, C3560-24P)</li>
                    <li><strong>Capabilities:</strong> Router, Switch, Bridge, etc.</li>
                    <li><strong>IP Address:</strong> Management IP address</li>
                    <li><strong>Software Version:</strong> IOS version information</li>
                    <li><strong>Duplex:</strong> Full or half duplex operation</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">CDP Configuration & Commands</h4>
            <p>CDP is <strong>enabled by default</strong> on all Cisco devices and interfaces. Here are the key commands:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Global CDP commands
Router(config)# cdp run                    # Enable CDP globally (default)
Router(config)# no cdp run                 # Disable CDP globally
Router(config)# cdp timer 30               # Change advertisement interval (default 60s)
Router(config)# cdp holdtime 180           # Change holdtime (default 180s)

# Interface-specific CDP
Router(config-if)# cdp enable              # Enable CDP on interface (default)
Router(config-if)# no cdp enable           # Disable CDP on interface

# Verification commands
Router# show cdp                           # CDP global information
Router# show cdp neighbors                 # Basic neighbor information
Router# show cdp neighbors detail          # Detailed neighbor information
Router# show cdp interface                 # CDP-enabled interfaces
Router# show cdp entry *                   # Detailed info for all neighbors
</code>
</pre>
            
            <h4 style="color: #58D68D;">Security Considerations</h4>
            <p>While CDP is useful for network discovery, it can present security risks:</p>
            <ul style="color: #E0E0E0;">
                <li><strong>Information Disclosure:</strong> Reveals network topology and device details</li>
                <li><strong>Best Practice:</strong> Disable CDP on interfaces facing untrusted networks</li>
                <li><strong>Edge Security:</strong> Disable on interfaces connected to end-user devices</li>
            </ul>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #f87171;">
# Secure CDP configuration
Switch(config)# interface range fa0/1-24
Switch(config-if-range)# no cdp enable     # Disable on access ports
Switch(config-if-range)# exit
Switch(config)# interface gi0/1
Switch(config-if)# cdp enable              # Keep enabled on trunk ports
</code>
</pre>
            
            <h4 style="color: #58D68D;">Troubleshooting with CDP</h4>
            <p>CDP is invaluable for network troubleshooting and documentation:</p>
            <ul style="color: #E0E0E0;">
                <li><strong>Physical Connectivity:</strong> Verify which devices are directly connected</li>
                <li><strong>Cable Documentation:</strong> Identify remote interface connections</li>
                <li><strong>Device Inventory:</strong> Discover model numbers and IOS versions</li>
                <li><strong>Duplex Mismatches:</strong> Identify potential performance issues</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "LLDP": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.3b: Link Layer Discovery Protocol (LLDP)</h3>
            <p><strong>LLDP</strong> (IEEE 802.1AB) is an industry-standard, vendor-neutral protocol for device discovery. Unlike CDP, LLDP works with equipment from any manufacturer that supports the standard, making it essential in multi-vendor environments.</p>
            
            <h4 style="color: #58D68D;">LLDP vs CDP Comparison</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #0ea5e9;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Feature</th>
                        <th style="text-align: left; padding: 8px; color: #6366f1;">CDP</th>
                        <th style="text-align: left; padding: 8px; color: #0ea5e9;">LLDP</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>Standard</strong></td>
                        <td style="padding: 8px;">Cisco Proprietary</td>
                        <td style="padding: 8px;">IEEE 802.1AB</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong>Default State</strong></td>
                        <td style="padding: 8px;">Enabled</td>
                        <td style="padding: 8px;">Disabled</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>Vendor Support</strong></td>
                        <td style="padding: 8px;">Cisco only</td>
                        <td style="padding: 8px;">Multi-vendor</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong>Multicast Address</strong></td>
                        <td style="padding: 8px;">01:00:0C:CC:CC:CC</td>
                        <td style="padding: 8px;">01:80:C2:00:00:0E</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">LLDP Information Elements</h4>
            <p>LLDP uses Type-Length-Value (TLV) format to exchange information:</p>
            <ul style="color: #E0E0E0;">
                <li><strong>Chassis ID:</strong> Unique identifier for the device</li>
                <li><strong>Port ID:</strong> Interface identifier (different from CDP)</li>
                <li><strong>System Name:</strong> Device hostname</li>
                <li><strong>System Description:</strong> Device model and software version</li>
                <li><strong>Port Description:</strong> Interface description</li>
                <li><strong>System Capabilities:</strong> Device type (router, switch, bridge, etc.)</li>
                <li><strong>Management Address:</strong> IP address for management</li>
                <li><strong>Time To Live (TTL):</strong> How long to keep the information</li>
            </ul>
            
            <h4 style="color: #58D68D;">LLDP Configuration</h4>
            <p>Unlike CDP, LLDP must be manually enabled on Cisco devices:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Global LLDP configuration
Switch(config)# lldp run                   # Enable LLDP globally
Switch(config)# no lldp run                # Disable LLDP globally
Switch(config)# lldp timer 30              # Advertisement interval (default 30s)
Switch(config)# lldp holdtime 120          # Holdtime (default 120s)
Switch(config)# lldp reinit 2              # Reinitialize delay (default 2s)

# Interface-specific LLDP
Switch(config-if)# lldp transmit           # Enable LLDP transmission
Switch(config-if)# lldp receive            # Enable LLDP reception
Switch(config-if)# no lldp transmit        # Disable transmission
Switch(config-if)# no lldp receive         # Disable reception

# Verification commands
Switch# show lldp                          # LLDP global status
Switch# show lldp neighbors                # Basic neighbor information
Switch# show lldp neighbors detail         # Detailed neighbor information
Switch# show lldp interface                # LLDP-enabled interfaces
Switch# show lldp entry *                  # All neighbor details
</code>
</pre>
            
            <h4 style="color: #58D68D;">Multi-Vendor Interoperability</h4>
            <p>LLDP's greatest strength is its ability to work with equipment from different vendors:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <h5 style="color: #58D68D; margin-top: 0;">Supported Vendors:</h5>
                <ul style="color: #E0E0E0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                    <li>Cisco Systems</li>
                    <li>Hewlett Packard Enterprise</li>
                    <li>Juniper Networks</li>
                    <li>Arista Networks</li>
                    <li>Extreme Networks</li>
                    <li>Dell Technologies</li>
                    <li>Ubiquiti Networks</li>
                    <li>And many others...</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">LLDP-MED (Media Endpoint Discovery)</h4>
            <p>Extension of LLDP for endpoint devices like IP phones and wireless access points:</p>
            <ul style="color: #E0E0E0;">
                <li><strong>Network Policy:</strong> VLAN and QoS information for voice</li>
                <li><strong>Power Management:</strong> PoE requirements and capabilities</li>
                <li><strong>Location Information:</strong> Physical location data</li>
                <li><strong>Device Class:</strong> Endpoint device type identification</li>
            </ul>
            
            <h4 style="color: #58D68D;">Best Practices</h4>
            <ul style="color: #E0E0E0;">
                <li><strong>Mixed Environments:</strong> Use LLDP in multi-vendor networks</li>
                <li><strong>Security:</strong> Disable on untrusted interfaces (same as CDP)</li>
                <li><strong>Documentation:</strong> Use for automatic network topology discovery</li>
                <li><strong>Monitoring:</strong> Integrate with network management systems</li>
                <li><strong>Troubleshooting:</strong> Essential for identifying cross-vendor connections</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
                
            </div>
        </div>
    `,

    "Network Documentation & Best Practices": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.3c: Network Documentation & Discovery Best Practices</h3>
            <p><strong>Network Documentation</strong> is the systematic process of recording network infrastructure details, configurations, and relationships. Discovery protocols like CDP and LLDP provide automated data collection that forms the foundation of comprehensive network documentation strategies.</p>
            
            <h4 style="color: #58D68D;">Documentation Components</h4>
            <p>Effective network documentation integrates both automated discovery and manual processes:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Core Documentation Elements:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Physical Topology:</strong> Device locations, rack positions, and cable runs</li>
                    <li><strong>Logical Topology:</strong> IP addressing, VLAN assignments, and routing paths</li>
                    <li><strong>Device Inventory:</strong> Hardware models, software versions, and serial numbers</li>
                    <li><strong>Configuration Baselines:</strong> Standard configurations and approved changes</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Discovery Protocol Integration</h4>
            <p><strong>Automated Data Collection:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Generate network topology from CDP
show cdp neighbors detail | redirect flash:cdp-topology.txt

! Export LLDP neighbor data
show lldp neighbors detail | redirect flash:lldp-inventory.txt

! Create comprehensive device inventory
show version | append flash:device-inventory.txt
show inventory | append flash:device-inventory.txt
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Network Mapping Strategies</h4>
            <p><strong>Layer 2 Topology Discovery:</strong></p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #58D68D;">Method</th><th style="padding: 8px; text-align: left; color: #58D68D;">Data Source</th><th style="padding: 8px; text-align: left; color: #58D68D;">Information Gathered</th></tr>
                    <tr><td style="padding: 5px;">CDP Mapping</td><td style="padding: 5px;">show cdp neighbors</td><td style="padding: 5px;">Cisco device connections</td></tr>
                    <tr><td style="padding: 5px;">LLDP Discovery</td><td style="padding: 5px;">show lldp neighbors</td><td style="padding: 5px;">Multi-vendor topology</td></tr>
                    <tr><td style="padding: 5px;">MAC Address Tables</td><td style="padding: 5px;">show mac address-table</td><td style="padding: 5px;">Connected endpoints</td></tr>
                    <tr><td style="padding: 5px;">ARP Tables</td><td style="padding: 5px;">show ip arp</td><td style="padding: 5px;">IP-to-MAC mappings</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">IP Address Management (IPAM)</h4>
            <p><strong>Automated IP Discovery:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Discover management IP addresses from CDP
show cdp neighbors detail | include IP address

! Map VLAN to IP subnet relationships
show ip interface brief | include up
show interfaces status | include connected

! Document DHCP scope utilization
show ip dhcp binding
show ip dhcp pool
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Configuration Management</h4>
            <p><strong>Baseline Documentation Process:</strong></p>
            <ol style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Initial Configuration Capture:</strong> Document "golden" configurations for each device type</li>
                <li><strong>Change Management:</strong> Track all configuration modifications with timestamps and reasons</li>
                <li><strong>Version Control:</strong> Maintain historical configuration versions for rollback capabilities</li>
                <li><strong>Compliance Verification:</strong> Regular audits against security and operational standards</li>
            </ol>
            
            <h4 style="color: #58D68D;">Documentation Automation Scripts</h4>
            <p><strong>EEM (Embedded Event Manager) for Automated Collection:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! EEM script for daily topology collection
event manager applet DAILY_TOPOLOGY_COLLECTION
 event timer cron cron-entry "0 2 * * *"
 action 010 cli command "enable"
 action 020 cli command "show cdp neighbors detail | redirect flash:daily-cdp.txt"
 action 030 cli command "show lldp neighbors detail | redirect flash:daily-lldp.txt"
 action 040 cli command "show interfaces status | redirect flash:interface-status.txt"
 action 050 syslog msg "Daily topology collection completed"
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Best Practices Implementation</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #f59e0b; margin-top: 0;">📋 Documentation Best Practices:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Regular Updates:</strong> Schedule weekly automated collections and monthly manual reviews</li>
                    <li><strong>Multiple Sources:</strong> Combine CDP, LLDP, SNMP, and manual verification</li>
                    <li><strong>Centralized Storage:</strong> Use network management systems or documentation platforms</li>
                    <li><strong>Access Control:</strong> Implement role-based access to sensitive network information</li>
                    <li><strong>Backup Procedures:</strong> Maintain copies of documentation in multiple locations</li>
                    <li><strong>Validation Process:</strong> Cross-reference discovery data with physical infrastructure</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Documentation Tools Integration</h4>
            <p><strong>Network Management System Integration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! SNMP configuration for NMS integration
snmp-server community NetworkDocs RO
snmp-server location "Data Center A - Rack 15"
snmp-server contact "Network Team - netops@company.com"
snmp-server enable traps config

! Configure logging for change tracking
logging buffered 64000 debugging
logging facility local5
logging source-interface loopback0
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Troubleshooting Documentation Gaps</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;"><th style="padding: 8px; text-align: left; color: #58D68D;">Problem</th><th style="padding: 8px; text-align: left; color: #58D68D;">Cause</th><th style="padding: 8px; text-align: left; color: #58D68D;">Solution</th></tr>
                    <tr><td style="padding: 5px;">Missing devices in topology</td><td style="padding: 5px;">CDP/LLDP disabled</td><td style="padding: 5px;">Enable discovery protocols</td></tr>
                    <tr><td style="padding: 5px;">Outdated device information</td><td style="padding: 5px;">Infrequent collection</td><td style="padding: 5px;">Increase collection frequency</td></tr>
                    <tr><td style="padding: 5px;">Incomplete multi-vendor discovery</td><td style="padding: 5px;">CDP-only deployment</td><td style="padding: 5px;">Implement LLDP standards</td></tr>
                    <tr><td style="padding: 5px;">Configuration drift</td><td style="padding: 5px;">No change tracking</td><td style="padding: 5px;">Deploy configuration management</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Real-World Implementation</h4>
            <p><strong>Enterprise Documentation Strategy:</strong> Large organizations implement tiered documentation systems with automated discovery feeding into centralized CMDBs (Configuration Management Databases), enabling real-time topology visualization and change impact analysis.</p>
            <p><strong>Service Provider Networks:</strong> Critical for managing complex multi-tenant environments where accurate documentation enables rapid fault isolation and prevents service-affecting configuration errors.</p>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the importance of network documentation for troubleshooting</li>
                    <li>Know how to use CDP and LLDP for topology discovery</li>
                    <li>Practice creating network diagrams from discovery protocol output</li>
                    <li>Understand the relationship between documentation and change management</li>
                </ul>
            </div>
            
            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
                
            </div>
        </div>
    `,

    // 2.4 EtherChannel
    "LACP Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.4a: Configure & Verify LACP EtherChannel</h3>
            <p><strong>Link Aggregation Control Protocol (LACP)</strong> is the IEEE 802.3ad standard for dynamically negotiating link aggregation groups. LACP provides standards-based EtherChannel formation with automatic detection and configuration of link bundles.</p>
            
            <h4 style="color: #58D68D;">LACP Fundamentals</h4>
            <p>LACP uses control frames called <strong>LACP Data Units (LACPDUs)</strong> exchanged between devices to negotiate channel formation. These frames contain information about port priorities, system priorities, and administrative keys to determine which ports can be bundled together.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">LACP Operating Modes:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Active:</strong> Initiates LACP negotiation and sends LACPDUs</li>
                    <li><strong>Passive:</strong> Responds to LACP frames but doesn't initiate</li>
                    <li><strong>Required:</strong> At least one side must be Active for channel formation</li>
                    <li><strong>Best Practice:</strong> Configure both sides as Active for faster convergence</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">LACP Configuration Steps</h4>
            <p><strong>Basic LACP Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure physical interfaces first
Switch(config)# interface range GigabitEthernet0/1 - 2
Switch(config-if-range)# switchport mode trunk
Switch(config-if-range)# switchport trunk allowed vlan 10,20,30

! Create LACP EtherChannel
Switch(config-if-range)# channel-group 1 mode active
Switch(config-if-range)# exit

! Configure the logical Port-channel interface
Switch(config)# interface port-channel 1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
</code>
</pre>

            <p><strong>Advanced LACP Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Set LACP system priority (lower is better)
Switch(config)# lacp system-priority 100

! Configure port priorities within channel group
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# lacp port-priority 100
Switch(config-if)# interface GigabitEthernet0/2  
Switch(config-if)# lacp port-priority 200

! Configure LACP timeout (fast vs slow)
Switch(config-if-range)# lacp rate fast
</code>
</pre>

            <h4 style="color: #58D68D;">LACP Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Display EtherChannel summary
Switch# show etherchannel summary

! Show detailed LACP information
Switch# show lacp neighbor
Switch# show lacp 1 neighbor detail

! Verify port-channel status
Switch# show interfaces port-channel 1
Switch# show spanning-tree interface port-channel 1

! Check LACP counters and statistics
Switch# show lacp counters
Switch# show lacp sys-id
</code>
</pre>

            <h4 style="color: #58D68D;">LACP Selection Criteria</h4>
            <p>LACP selects which ports participate in the bundle based on several factors:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>System Priority:</strong> Lower system priority takes precedence</li>
                <li><strong>Port Priority:</strong> Lower port priority is preferred</li>
                <li><strong>Port Number:</strong> Lower port number used as tiebreaker</li>
                <li><strong>Administrative Key:</strong> Ports must have matching keys</li>
                <li><strong>Physical Parameters:</strong> Speed, duplex, and VLAN configuration must match</li>
            </ul>

            <h4 style="color: #58D68D;">LACP Advantages</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Benefits over Static EtherChannel:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Automatic Detection:</strong> Detects link failures and misconfigurations</li>
                    <li><strong>Standards-Based:</strong> Interoperates with other vendors</li>
                    <li><strong>Hot Standby:</strong> Supports standby links for redundancy</li>
                    <li><strong>Dynamic Recovery:</strong> Automatically brings failed links back online</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Common LACP Issues</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Mismatched Modes:</strong> Both sides passive prevents negotiation</li>
                <li><strong>Speed Mismatch:</strong> All links must have same speed/duplex</li>
                <li><strong>VLAN Mismatch:</strong> Inconsistent VLAN configuration</li>
                <li><strong>Priority Conflicts:</strong> Incorrect system or port priorities</li>
            </ul>

            <h4 style="color: #58D68D;">Real-World Implementation</h4>
            <p><strong>Data Center Design:</strong> LACP is essential for connecting servers to Top-of-Rack switches, providing high bandwidth and redundancy for critical applications.</p>
            <p><strong>Campus Networks:</strong> Used for uplinks between access and distribution layers, ensuring high availability and load distribution across multiple paths.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Configure LACP with active/passive modes</li>
                    <li>Verify EtherChannel formation and LACP neighbor status</li>
                    <li>Understand LACP selection criteria and port priorities</li>
                    <li>Troubleshoot LACP negotiation failures</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "PAgP Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.4b: Configure & Verify PAgP EtherChannel</h3>
            <p><strong>Port Aggregation Protocol (PAgP)</strong> is Cisco's proprietary protocol for automatic EtherChannel formation. PAgP provides vendor-specific enhancements and is commonly used in pure Cisco environments for link aggregation.</p>
            
            <h4 style="color: #58D68D;">PAgP Fundamentals</h4>
            <p>PAgP uses its own control frames to negotiate channel formation between Cisco devices. These frames exchange information about port capabilities, administrative configuration, and operational status to determine channel eligibility.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">PAgP Operating Modes:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Desirable:</strong> Actively initiates PAgP negotiation</li>
                    <li><strong>Auto:</strong> Responds to PAgP frames but doesn't initiate</li>
                    <li><strong>On:</strong> Forces EtherChannel without negotiation (static)</li>
                    <li><strong>Required:</strong> At least one side must be Desirable for negotiation</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">PAgP Configuration</h4>
            <p><strong>Basic PAgP Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure interfaces for PAgP EtherChannel
Switch(config)# interface range FastEthernet0/1 - 2
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10

! Create PAgP EtherChannel
Switch(config-if-range)# channel-group 2 mode desirable
Switch(config-if-range)# exit

! Configure logical port-channel
Switch(config)# interface port-channel 2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
</code>
</pre>

            <p><strong>PAgP with Trunk Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure trunk PAgP EtherChannel
Switch(config)# interface range GigabitEthernet0/3 - 4
Switch(config-if-range)# switchport mode trunk
Switch(config-if-range)# channel-group 3 mode auto

! Configure port-channel as trunk
Switch(config)# interface port-channel 3
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
</code>
</pre>

            <h4 style="color: #58D68D;">PAgP Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Show PAgP neighbor information
Switch# show pagp neighbor
Switch# show pagp 2 neighbor

! Display EtherChannel summary
Switch# show etherchannel 2 summary
Switch# show etherchannel 2 port-channel

! Check PAgP counters and statistics
Switch# show pagp counters
Switch# show interfaces port-channel 2
</code>
</pre>

            <h4 style="color: #58D68D;">PAgP vs LACP Comparison</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Key Differences:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Vendor Support:</strong> PAgP is Cisco-only, LACP is standards-based</li>
                    <li><strong>Modes:</strong> PAgP uses desirable/auto, LACP uses active/passive</li>
                    <li><strong>Hot Standby:</strong> LACP supports standby links, PAgP does not</li>
                    <li><strong>Load Distribution:</strong> Both support similar load balancing methods</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">PAgP Advantages</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Cisco Integration:</strong> Deep integration with Cisco-specific features</li>
                <li><strong>Automatic Detection:</strong> Detects misconfigurations and link failures</li>
                <li><strong>Silent Partner Detection:</strong> Can detect devices that don't support PAgP</li>
                <li><strong>Mature Protocol:</strong> Well-established in Cisco environments</li>
            </ul>

            <h4 style="color: #58D68D;">Common PAgP Issues</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Both Auto:</strong> No negotiation occurs when both sides are auto</li>
                <li><strong>Speed Mismatch:</strong> All member ports must have identical speed</li>
                <li><strong>Vendor Mismatch:</strong> PAgP only works between Cisco devices</li>
                <li><strong>Configuration Drift:</strong> Physical and logical interface config must match</li>
            </ul>

            <h4 style="color: #58D68D;">Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Use LACP:</strong> Prefer LACP for new deployments due to standards compliance</li>
                <li><strong>Consistent Configuration:</strong> Apply same settings to all member ports</li>
                <li><strong>Monitor Status:</strong> Regularly check EtherChannel and PAgP status</li>
                <li><strong>Document Channels:</strong> Maintain clear documentation of channel assignments</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Configure PAgP with desirable/auto modes</li>
                    <li>Understand differences between PAgP and LACP</li>
                    <li>Verify PAgP neighbor relationships</li>
                    <li>Troubleshoot PAgP negotiation failures</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "Load Balancing": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.4c: EtherChannel Load Balancing Methods</h3>
            <p><strong>EtherChannel load balancing</strong> determines how traffic is distributed across the member links in a channel group. The load balancing method significantly impacts bandwidth utilization and network performance.</p>
            
            <h4 style="color: #58D68D;">Load Balancing Fundamentals</h4>
            <p>EtherChannel uses various frame header fields to calculate a hash value that determines which physical link will carry each frame. The goal is to distribute traffic as evenly as possible across all active member links.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Available Load Balancing Methods:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>src-mac:</strong> Source MAC address only</li>
                    <li><strong>dst-mac:</strong> Destination MAC address only</li>
                    <li><strong>src-dst-mac:</strong> Source and destination MAC addresses</li>
                    <li><strong>src-ip:</strong> Source IP address only</li>
                    <li><strong>dst-ip:</strong> Destination IP address only</li>
                    <li><strong>src-dst-ip:</strong> Source and destination IP addresses (recommended)</li>
                    <li><strong>src-port:</strong> Source TCP/UDP port</li>
                    <li><strong>dst-port:</strong> Destination TCP/UDP port</li>
                    <li><strong>src-dst-port:</strong> Source and destination TCP/UDP ports</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Load Balancing Configuration</h4>
            <p><strong>Global Load Balancing Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure global load balancing method
Switch(config)# port-channel load-balance src-dst-ip

! Alternative methods
Switch(config)# port-channel load-balance src-dst-mac
Switch(config)# port-channel load-balance src-mac
Switch(config)# port-channel load-balance dst-ip
</code>
</pre>

            <p><strong>Verification Commands:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Check current load balancing method
Switch# show etherchannel load-balance

! Monitor traffic distribution
Switch# show interfaces port-channel 1
Switch# show etherchannel 1 summary

! Test load balancing
Switch# test etherchannel load-balance interface port-channel 1 ip 192.168.1.10 192.168.1.20
</code>
</pre>

            <h4 style="color: #58D68D;">Load Balancing Method Selection</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Best Practices by Traffic Type:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Layer 2 Only:</strong> Use src-dst-mac for pure switching environments</li>
                    <li><strong>Layer 3 Routing:</strong> Use src-dst-ip for routed traffic (most common)</li>
                    <li><strong>Server Farms:</strong> Use src-dst-ip for optimal distribution</li>
                    <li><strong>Single Server:</strong> Use src-ip to distribute client connections</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Traffic Distribution Analysis</h4>
            <p><strong>Monitoring Commands:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Check individual member link utilization
Switch# show interfaces GigabitEthernet0/1 | include packets
Switch# show interfaces GigabitEthernet0/2 | include packets

! Monitor EtherChannel statistics
Switch# show etherchannel 1 port
Switch# show etherchannel 1 traffic

! Test hash distribution for specific flows
Switch# test etherchannel load-balance interface port-channel 1 mac 0000.1111.2222 0000.3333.4444
</code>
</pre>

            <h4 style="color: #58D68D;">Load Balancing Optimization</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Match Traffic Patterns:</strong> Choose method based on actual traffic flows</li>
                <li><strong>Monitor Utilization:</strong> Regularly check for uneven distribution</li>
                <li><strong>Consider Topology:</strong> Account for network design and traffic sources</li>
                <li><strong>Test Changes:</strong> Use test commands before implementing new methods</li>
            </ul>

            <h4 style="color: #58D68D;">Common Load Balancing Issues</h4>
            <div style="background-color: #2c1810; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #f59e0b; margin-top: 0;">⚠️ Potential Problems:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Poor Hash Distribution:</strong> Similar source/destination pairs</li>
                    <li><strong>Single Flow Dominance:</strong> One large flow saturating a single link</li>
                    <li><strong>Polarization:</strong> Multiple EtherChannels using same hash values</li>
                    <li><strong>Asymmetric Traffic:</strong> Return traffic taking different paths</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Advanced Considerations</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Hash Polarization:</strong> Avoid same load balance method on multiple devices</li>
                <li><strong>Flow Persistence:</strong> Same flow always uses same physical link</li>
                <li><strong>Link Utilization:</strong> Monitor for hot links and adjust methods accordingly</li>
                <li><strong>Platform Differences:</strong> Some platforms support additional methods</li>
            </ul>

            <h4 style="color: #58D68D;">Real-World Applications</h4>
            <p><strong>Data Center Design:</strong> src-dst-ip is typically optimal for server-to-server and client-to-server traffic patterns, providing good distribution across diverse IP flows.</p>
            <p><strong>Campus Networks:</strong> src-dst-mac may be sufficient for simple switching environments, while src-dst-ip works better with inter-VLAN routing.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Configure appropriate load balancing methods for different scenarios</li>
                    <li>Understand the relationship between hash algorithms and traffic distribution</li>
                    <li>Monitor and verify EtherChannel load balancing effectiveness</li>
                    <li>Troubleshoot uneven traffic distribution issues</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    // 2.5 Spanning Tree Protocol
    "Root Bridge & Port Roles": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.5a: Rapid PVST+ Root Bridge & Per-VLAN Instances</h3>
            <p><strong>Rapid Per-VLAN Spanning Tree Plus (Rapid PVST+)</strong> is Cisco's enhancement to IEEE 802.1w RSTP. It maintains separate spanning tree instances for each VLAN while providing rapid convergence for faster network recovery.</p>
            
            <h4 style="color: #58D68D;">Rapid PVST+ Fundamentals</h4>
            <p>Unlike Common Spanning Tree (CST), Rapid PVST+ runs a separate spanning tree instance for each VLAN, allowing different root bridges per VLAN and enabling load balancing across VLANs by varying the root bridge selection.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Rapid PVST+ Advantages:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Per-VLAN Instances:</strong> Separate spanning tree for each VLAN</li>
                    <li><strong>Load Balancing:</strong> Different root bridges for different VLANs</li>
                    <li><strong>Rapid Convergence:</strong> Sub-second convergence with sync/proposal</li>
                    <li><strong>Backward Compatibility:</strong> Interoperates with 802.1D and PVST+</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Per-VLAN Root Bridge Configuration</h4>
            <p><strong>Load Balancing Strategy:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure Core-SW1 as root for VLANs 10,30,50 (odd VLANs)
Core-SW1(config)# spanning-tree vlan 10,30,50 root primary
Core-SW1(config)# spanning-tree vlan 20,40,60 root secondary

! Configure Core-SW2 as root for VLANs 20,40,60 (even VLANs)  
Core-SW2(config)# spanning-tree vlan 20,40,60 root primary
Core-SW2(config)# spanning-tree vlan 10,30,50 root secondary

! Alternative manual priority configuration
Core-SW1(config)# spanning-tree vlan 10 priority 4096
Core-SW2(config)# spanning-tree vlan 20 priority 4096
</code>
</pre>

            <h4 style="color: #58D68D;">Bridge ID in Rapid PVST+</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Bridge ID Format (Per-VLAN):</h5>
                <p style="margin: 5px 0;"><strong>Bridge Priority:</strong> 4-bit priority value (0-15, increments of 4096)</p>
                <p style="margin: 5px 0;"><strong>Extended System ID:</strong> 12-bit VLAN ID (1-4094)</p>
                <p style="margin: 5px 0;"><strong>MAC Address:</strong> 48-bit switch base MAC address</p>
                <p style="margin: 5px 0; color: #58D68D;"><strong>Total:</strong> Priority + VLAN ID + MAC = 64-bit Bridge ID</p>
            </div>

            <h4 style="color: #58D68D;">Rapid PVST+ Port Roles</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Port Role</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Function</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Convergence</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong style="color: #10b981;">Root Port</strong></td>
                        <td style="padding: 8px;">Best path to root bridge per VLAN</td>
                        <td style="padding: 8px;">Immediate</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong style="color: #6366f1;">Designated Port</strong></td>
                        <td style="padding: 8px;">Forwards traffic for segment</td>
                        <td style="padding: 8px;">Immediate</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong style="color: #f59e0b;">Alternate Port</strong></td>
                        <td style="padding: 8px;">Backup to root port</td>
                        <td style="padding: 8px;">Rapid (sync)</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong style="color: #f87171;">Backup Port</strong></td>
                        <td style="padding: 8px;">Backup to designated port</td>
                        <td style="padding: 8px;">Rapid (sync)</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Show per-VLAN spanning tree information
Switch# show spanning-tree vlan 10
Switch# show spanning-tree summary

! Verify root bridge for each VLAN
Switch# show spanning-tree root

! Check spanning tree mode
Switch# show spanning-tree bridge

! Display port roles and states
Switch# show spanning-tree interface GigabitEthernet0/1
</code>
</pre>

            <h4 style="color: #58D68D;">Load Balancing Benefits</h4>
            <p><strong>Traffic Distribution:</strong> By configuring different root bridges for different VLANs, traffic can be load-balanced across multiple uplinks, improving bandwidth utilization.</p>
            <p><strong>Example:</strong> In a dual-core design, configure Core-1 as root for odd VLANs and Core-2 as root for even VLANs to achieve optimal traffic distribution.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Configure per-VLAN root bridges for load balancing</li>
                    <li>Understand Bridge ID calculation with Extended System ID</li>
                    <li>Verify Rapid PVST+ operation and port roles</li>
                    <li>Implement redundant spanning tree design</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
    `,

    "Port States & Roles": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.5b: Rapid PVST+ Convergence Mechanisms</h3>
            <p><strong>Rapid PVST+</strong> dramatically reduces convergence time from traditional STP's 50 seconds to sub-second recovery through enhanced proposal/agreement mechanisms and intelligent port state management.</p>
            
            <h4 style="color: #58D68D;">Rapid Convergence Process</h4>
            <p>Rapid PVST+ uses the <strong>sync/proposal mechanism</strong> to achieve rapid convergence when topology changes occur, eliminating the need for timer-based transitions in most scenarios.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Rapid Convergence Components:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Proposal/Agreement:</strong> Rapid negotiation between switches</li>
                    <li><strong>Sync Process:</strong> Immediate blocking of non-edge ports</li>
                    <li><strong>Edge Ports:</strong> Immediate forwarding (no convergence delay)</li>
                    <li><strong>P2P Links:</strong> Fast transition between switches</li>
                    <li><strong>Alternate/Backup:</strong> Pre-computed backup paths</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Port Types in Rapid PVST+</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Port Type</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Connection</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Convergence</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong style="color: #10b981;">Edge Port</strong></td>
                        <td style="padding: 8px;">End device (PC, server)</td>
                        <td style="padding: 8px;">Immediate</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong style="color: #6366f1;">Point-to-Point</strong></td>
                        <td style="padding: 8px;">Switch-to-switch (full duplex)</td>
                        <td style="padding: 8px;">Rapid (sync/proposal)</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong style="color: #f59e0b;">Shared</strong></td>
                        <td style="padding: 8px;">Hub or half-duplex</td>
                        <td style="padding: 8px;">Timer-based (legacy)</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D68D;">Proposal/Agreement Process</h4>
            <p><strong>Step-by-Step Rapid Convergence:</strong></p>
            <ol style="margin-left: 20px; color: #E0E0E0;">
                <li><strong>Proposal:</strong> New root port sends proposal to upstream switch</li>
                <li><strong>Sync:</strong> Receiving switch blocks all non-edge ports</li>
                <li><strong>Agreement:</strong> Switch sends agreement back</li>
                <li><strong>Forward:</strong> Proposing port immediately transitions to forwarding</li>
            </ol>

            <h4 style="color: #58D68D;">Configuration Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Enable Rapid PVST+ (default on modern switches)
Switch(config)# spanning-tree mode rapid-pvst

! Configure edge ports for immediate forwarding
Switch(config)# interface range GigabitEthernet0/1-24
Switch(config-if-range)# spanning-tree portfast

! Configure point-to-point links explicitly
Switch(config)# interface GigabitEthernet0/25
Switch(config-if)# spanning-tree link-type point-to-point

! Global PortFast for access ports
Switch(config)# spanning-tree portfast default
</code>
</pre>

            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Check spanning tree mode
Switch# show spanning-tree summary
Switch# show spanning-tree mode

! Monitor convergence activity
Switch# debug spanning-tree events
Switch# show spanning-tree detail

! Verify port types and roles
Switch# show spanning-tree interface GigabitEthernet0/1 detail
Switch# show spanning-tree vlan 10
</code>
</pre>

            <h4 style="color: #58D68D;">Convergence Time Comparison</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #f59e0b; margin-top: 0;">⚡ Performance Improvement:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Traditional STP:</strong> 50 seconds (20s + 15s + 15s)</li>
                    <li><strong>Rapid PVST+:</strong> 1-3 seconds with proposal/agreement</li>
                    <li><strong>Edge Ports:</strong> Immediate (0 seconds)</li>
                    <li><strong>Max Age:</strong> Reduced from 20s to 6s for faster failure detection</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Real-World Benefits</h4>
            <p><strong>Network Resilience:</strong> Rapid PVST+ enables near-instantaneous recovery from link failures, maintaining user connectivity and application performance in enterprise environments.</p>
            <p><strong>Per-VLAN Optimization:</strong> Each VLAN can have different topologies optimized for specific traffic patterns and redundancy requirements.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Understand proposal/agreement rapid convergence mechanism</li>
                    <li>Configure Rapid PVST+ mode and verify operation</li>
                    <li>Distinguish between edge ports, P2P links, and shared media</li>
                    <li>Compare convergence times between STP and Rapid PVST+</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "PortFast": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.5c: Rapid PVST+ PortFast & Edge Ports</h3>
            <p><strong>PortFast</strong> is a Cisco feature that allows access ports to bypass the normal STP states and immediately transition to forwarding. This eliminates the 30+ second delay for end devices.</p>
            
            <h4 style="color: #EC7063;">How PortFast Works</h4>
            <p>Without PortFast, when a device connects to a switch port, it must wait through STP states:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f87171;">
                <h5 style="color: #EC7063; margin-top: 0;">Normal STP Process (Without PortFast):</h5>
                <p style="margin: 5px 0;"><strong>Blocking:</strong> 20 seconds (Max Age timer)</p>
                <p style="margin: 5px 0;"><strong>Listening:</strong> 15 seconds (Forward Delay timer)</p>
                <p style="margin: 5px 0;"><strong>Learning:</strong> 15 seconds (Forward Delay timer)</p>
                <p style="margin: 5px 0;"><strong>Forwarding:</strong> Finally ready (Total: ~50 seconds)</p>
            </div>
    `,

    "PortFast": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.5c: Rapid PVST+ Edge Ports & PortFast</h3>
            <p><strong>Edge ports</strong> in Rapid PVST+ are ports connected to end devices that cannot create loops. These ports transition immediately to forwarding state, eliminating convergence delay for end-user connections.</p>
            
            <h4 style="color: #58D68D;">Edge Port Fundamentals</h4>
            <p>Edge ports are a key component of Rapid PVST+ that enable immediate connectivity for end devices. When a port is configured as an edge port, it bypasses the traditional spanning tree state transitions.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Edge Port Characteristics:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Immediate Forwarding:</strong> Transition directly to forwarding state</li>
                    <li><strong>No BPDU Generation:</strong> Do not send BPDUs unless received</li>
                    <li><strong>Automatic Detection:</strong> Become non-edge if BPDU received</li>
                    <li><strong>End Device Connections:</strong> PCs, servers, printers, phones</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">PortFast in Rapid PVST+</h4>
            <p>PortFast is Cisco's implementation of edge port functionality. In Rapid PVST+, PortFast-enabled ports automatically become edge ports with enhanced rapid convergence benefits.</p>

            <h4 style="color: #58D68D;">Configuration Methods</h4>
            <p><strong>Interface-Specific Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Enable PortFast on specific access port
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# spanning-tree portfast

! PortFast with BPDU Guard (recommended)
Switch(config-if)# spanning-tree portfast
Switch(config-if)# spanning-tree bpduguard enable
</code>
</pre>

            <p><strong>Global Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Enable PortFast on all access ports globally
Switch(config)# spanning-tree portfast default

! Global BPDU Guard for PortFast ports
Switch(config)# spanning-tree portfast bpduguard default

! Verify configuration
Switch# show spanning-tree summary
Switch# show running-config | include portfast
</code>
</pre>

            <h4 style="color: #58D68D;">Edge Port vs Regular Port Behavior</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Aspect</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Regular Port</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Edge Port (PortFast)</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>Initial State</strong></td>
                        <td style="padding: 8px;">Blocking → Listening → Learning → Forwarding</td>
                        <td style="padding: 8px;">Immediately to Forwarding</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong>Convergence Time</strong></td>
                        <td style="padding: 8px;">30+ seconds (STP) / 3-6 seconds (RSTP)</td>
                        <td style="padding: 8px;">Immediate (0 seconds)</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>BPDU Handling</strong></td>
                        <td style="padding: 8px;">Processes all BPDUs</td>
                        <td style="padding: 8px;">Becomes regular port if BPDU received</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong>Use Case</strong></td>
                        <td style="padding: 8px;">Switch-to-switch links</td>
                        <td style="padding: 8px;">End device connections</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D68D;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Check PortFast status on specific interface
Switch# show spanning-tree interface GigabitEthernet0/1 detail
Switch# show spanning-tree interface GigabitEthernet0/1 portfast

! View all PortFast enabled interfaces
Switch# show spanning-tree summary totals

! Check edge port status
Switch# show spanning-tree vlan 10 | include Edge
</code>
</pre>

            <h4 style="color: #58D68D;">Security Considerations</h4>
            <div style="background-color: #2c1810; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #f59e0b; margin-top: 0;">⚠️ PortFast Security Best Practices:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>BPDU Guard:</strong> Always enable BPDU Guard with PortFast</li>
                    <li><strong>Access Ports Only:</strong> Never use PortFast on trunk or switch-facing ports</li>
                    <li><strong>Automatic Conversion:</strong> Edge ports automatically become regular ports if BPDUs received</li>
                    <li><strong>Loop Prevention:</strong> BPDU Guard immediately err-disables port if BPDU received</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Advanced Features</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>PortFast BPDU Filter:</strong> Stops sending/receiving BPDUs entirely (use with caution)</li>
                <li><strong>Auto Recovery:</strong> err-disable timeout can automatically recover BPDU Guard violations</li>
                <li><strong>Voice VLAN Integration:</strong> PortFast works seamlessly with voice VLANs for IP phones</li>
                <li><strong>Dynamic Detection:</strong> Ports can dynamically transition between edge and non-edge states</li>
            </ul>

            <h4 style="color: #58D68D;">Real-World Implementation</h4>
            <p><strong>Campus Access Layer:</strong> Configure PortFast on all access ports connecting to end devices, with BPDU Guard for security, ensuring immediate connectivity for users while maintaining spanning tree protection.</p>
            <p><strong>Data Center Design:</strong> Critical for server connections requiring immediate network access during boot processes and failover scenarios.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Configure PortFast on access ports for immediate connectivity</li>
                    <li>Understand edge port behavior in Rapid PVST+</li>
                    <li>Implement PortFast with BPDU Guard for security</li>
                    <li>Verify PortFast operation and troubleshoot issues</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "STP Protection Features": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.5d: Rapid PVST+ Protection Features</h3>
            <p>STP protection features defend against common spanning tree attacks and misconfigurations that could disrupt network stability or create security vulnerabilities.</p>
            
            <h4 style="color: #58D68D;">Root Guard</h4>
            <p><strong>Root Guard</strong> prevents unauthorized devices from becoming the Root Bridge by protecting against superior BPDU attacks:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <h5 style="color: #58D68D; margin-top: 0;">Root Guard Operation:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Purpose:</strong> Prevents inferior BPDUs from making a port become Root Port</li>
                    <li><strong>Action:</strong> Places port in "root-inconsistent" state if superior BPDU received</li>
                    <li><strong>Recovery:</strong> Port automatically recovers when superior BPDUs stop</li>
                    <li><strong>Use Case:</strong> Enable on ports facing access layer or external networks</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">BPDU Guard</h4>
            <p><strong>BPDU Guard</strong> immediately disables ports that receive BPDUs, protecting against unauthorized switches:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #58D68D; margin-top: 0;">BPDU Guard Operation:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Purpose:</strong> Protects PortFast-enabled ports from receiving BPDUs</li>
                    <li><strong>Action:</strong> Immediately places port in err-disable state if BPDU received</li>
                    <li><strong>Recovery:</strong> Manual intervention required (shutdown/no shutdown)</li>
                    <li><strong>Use Case:</strong> Essential on all PortFast access ports</li>
                </ul>
            </div>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Configure Root Guard
Switch(config-if)# spanning-tree guard root

# Configure BPDU Guard globally
Switch(config)# spanning-tree portfast bpduguard default

# Configure Loop Guard globally  
Switch(config)# spanning-tree loopguard default

# Verify protection features
Switch# show spanning-tree inconsistentports
Switch# show spanning-tree summary
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "MST (Multiple Spanning Tree)": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">2.5e: Multiple Spanning Tree (MST)</h3>
            <p><strong>Multiple Spanning Tree (MST)</strong> is an advanced spanning tree implementation that maps multiple VLANs to fewer spanning tree instances, providing superior scalability and load balancing compared to traditional PVST+ or Rapid PVST+.</p>
            
            <h4 style="color: #AF7AC5;">MST Fundamentals</h4>
            <p>While Rapid PVST+ runs a separate spanning tree instance for each VLAN (potentially hundreds), MST groups multiple VLANs into a single spanning tree instance, dramatically reducing CPU overhead and memory consumption on switches.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <h5 style="color: #AF7AC5; margin-top: 0;">MST Key Concepts:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>MST Region:</strong> Collection of switches with identical MST configuration</li>
                    <li><strong>MST Instance (MSTI):</strong> Single spanning tree calculation for multiple VLANs</li>
                    <li><strong>Internal Spanning Tree (IST):</strong> Instance 0, equivalent to Common Spanning Tree</li>
                    <li><strong>Regional Root:</strong> Root bridge for an MST instance within the region</li>
                </ul>
            </div>

            <h4 style="color: #AF7AC5;">MST vs Rapid PVST+ Comparison</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 2px solid #9B59B6;">
                        <th style="padding: 10px; text-align: left; color: #9B59B6;">Feature</th>
                        <th style="padding: 10px; text-align: left; color: #9B59B6;">Rapid PVST+</th>
                        <th style="padding: 10px; text-align: left; color: #9B59B6;">MST</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold;">Instances per VLAN</td>
                        <td style="padding: 8px; color: #f87171;">One per VLAN</td>
                        <td style="padding: 8px; color: #10b981;">Multiple VLANs per instance</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold;">CPU Usage</td>
                        <td style="padding: 8px; color: #f87171;">High (many VLANs)</td>
                        <td style="padding: 8px; color: #10b981;">Low (few instances)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold;">Memory Usage</td>
                        <td style="padding: 8px; color: #f87171;">High</td>
                        <td style="padding: 8px; color: #10b981;">Low</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold;">Load Balancing</td>
                        <td style="padding: 8px; color: #10b981;">Per-VLAN</td>
                        <td style="padding: 8px; color: #10b981;">Per-Instance</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px; font-weight: bold;">Interoperability</td>
                        <td style="padding: 8px; color: #10b981;">Cisco only</td>
                        <td style="padding: 8px; color: #10b981;">IEEE 802.1s standard</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #AF7AC5;">MST Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enter MST Configuration Mode</span>
Switch(config)# <span style="color: #DCDCAA;">spanning-tree mode mst</span>
Switch(config)# <span style="color: #DCDCAA;">spanning-tree mst configuration</span>

<span style="color: #6A9955;"># Configure MST Region</span>
Switch(config-mst)# <span style="color: #DCDCAA;">name ENTERPRISE</span>
Switch(config-mst)# <span style="color: #DCDCAA;">revision 1</span>

<span style="color: #6A9955;"># Map VLANs to MST Instances</span>
Switch(config-mst)# <span style="color: #DCDCAA;">instance 1 vlan 10,20,30</span>
Switch(config-mst)# <span style="color: #DCDCAA;">instance 2 vlan 40,50,60</span>
Switch(config-mst)# <span style="color: #DCDCAA;">instance 3 vlan 70-99</span>

<span style="color: #6A9955;"># Exit and activate configuration</span>
Switch(config-mst)# <span style="color: #DCDCAA;">exit</span>

<span style="color: #6A9955;"># Configure Root Bridge per Instance</span>
Switch(config)# <span style="color: #DCDCAA;">spanning-tree mst 1 root primary</span>
Switch(config)# <span style="color: #DCDCAA;">spanning-tree mst 2 root secondary</span>
</code>
</pre>

            <h4 style="color: #AF7AC5;">MST Verification</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify MST Configuration</span>
Switch# <span style="color: #DCDCAA;">show spanning-tree mst configuration</span>
Name      [ENTERPRISE]
Revision  1     Instances configured 3

Instance  Vlans mapped
--------  -------------
0         1-9,11-19,21-29,31-39,41-49,51-59,61-69,100-4094
1         10,20,30
2         40,50,60
3         70-99

<span style="color: #6A9955;"># View MST Instance Status</span>
Switch# <span style="color: #DCDCAA;">show spanning-tree mst</span>
Switch# <span style="color: #DCDCAA;">show spanning-tree mst 1</span>

<span style="color: #6A9955;"># Check MST Interface Status</span>
Switch# <span style="color: #DCDCAA;">show spanning-tree mst interface gigabitethernet0/1</span>
</code>
</pre>

            <h4 style="color: #AF7AC5;">MST Design Considerations</h4>
            <div style="background-color: #2d1f1b; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
                <h5 style="color: #f59e0b; margin-top: 0;">MST Best Practices:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Region Planning:</strong> All switches in region must have identical configuration</li>
                    <li><strong>Instance Mapping:</strong> Distribute VLANs across instances for load balancing</li>
                    <li><strong>Root Bridge Placement:</strong> Configure different root bridges per instance</li>
                    <li><strong>Interoperability:</strong> MST regions appear as single switch to PVST+ domains</li>
                </ul>
            </div>

            <h4 style="color: #AF7AC5;">When to Use MST</h4>
            <ul style="color: #E0E0E0;">
                <li><strong>Large Networks:</strong> Many VLANs (50+) causing PVST+ scalability issues</li>
                <li><strong>Resource Optimization:</strong> CPU and memory constraints on older switches</li>
                <li><strong>Standards Compliance:</strong> IEEE 802.1s requirement in multi-vendor environments</li>
                <li><strong>Load Balancing:</strong> Distribute traffic across multiple root bridges efficiently</li>
                <li><strong>WAN Integration:</strong> Provider networks requiring MST for service provider STP</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand MST benefits over PVST+ in large networks</li>
                    <li>Know MST region configuration requirements</li>
                    <li>Configure VLAN to instance mapping</li>
                    <li>Verify MST operation and troubleshoot issues</li>
                </ul>
            </div>
        </div>
    `,

    // 2.6 Wireless Architectures
    "Autonomous vs Controller-Based": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.6a: Wireless Network Architectures</h3>
            <p>Wireless networks use different architectural approaches based on scale, management requirements, and operational needs.</p>
            
            <h4 style="color: #58D68D;">Autonomous AP Architecture</h4>
            <p><strong>Autonomous APs</strong> operate independently with complete 802.11 functionality built into each device:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Autonomous AP Characteristics:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Self-Contained:</strong> All 802.11 functions in the AP</li>
                    <li><strong>Independent Management:</strong> Each AP configured individually</li>
                    <li><strong>Local Intelligence:</strong> Makes all decisions locally</li>
                    <li><strong>SOHO Usage:</strong> Best for small deployments (1-10 APs)</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Controller-Based (Split-MAC) Architecture</h4>
            <p><strong>Split-MAC</strong> divides 802.11 functions between lightweight APs and a central WLC:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Configure WLC for Split-MAC
WLC(config)# ap lwapp ip address 192.168.1.100
WLC(config)# ap manager ip address 192.168.1.100

# AP Discovery Process
# 1. DHCP Option 43 (WLC IP)
# 2. DNS Resolution (CISCO-LWAPP-CONTROLLER.domain.com)
# 3. Local subnet broadcast
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "AP Operating Modes": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.6b: Access Point Operating Modes</h3>
            <p>Lightweight APs can operate in different modes depending on their function in the wireless network.</p>
            
            <h4 style="color: #58D68D;">Local Mode (Default)</h4>
            <p>Standard mode for serving wireless clients with centralized data forwarding:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Client Access:</strong> Serves wireless clients normally</li>
                    <li><strong>Central Switching:</strong> All traffic tunneled to WLC</li>
                    <li><strong>RF Monitoring:</strong> Dedicated scanning on unused channels</li>
                    <li><strong>Default Configuration:</strong> No additional setup required</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">FlexConnect Mode</h4>
            <p>Designed for remote sites with local switching capabilities:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #6366f1;">
                <h5 style="color: #58D68D; margin-top: 0;">FlexConnect Features:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Local Switching:</strong> VLAN switching without WLC tunnel</li>
                    <li><strong>WAN Resilience:</strong> Continues operation during WLC outages</li>
                    <li><strong>Authentication:</strong> Can cache credentials locally</li>
                    <li><strong>VLAN Mapping:</strong> Maps wireless VLANs to local VLANs</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Monitor Mode</h4>
            <p>Dedicated RF monitoring for security and troubleshooting:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #58D68D; margin-top: 0;">Monitor Mode Functions:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>IDS/IPS:</strong> Intrusion detection and prevention</li>
                    <li><strong>RF Analysis:</strong> Spectrum analysis and interference detection</li>
                    <li><strong>Rogue Detection:</strong> Identifies unauthorized APs and clients</li>
                    <li><strong>No Client Service:</strong> Dedicated to monitoring only</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Rogue Detector Mode</h4>
            <p>Specialized mode for detecting wired rogue devices:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <h5 style="color: #58D68D; margin-top: 0;">Rogue Detector Capabilities:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Wired Detection:</strong> Finds rogues connected to wired network</li>
                    <li><strong>No RF Transmission:</strong> Listens only, no wireless transmission</li>
                    <li><strong>Network Correlation:</strong> Matches wireless rogues to wired sources</li>
                    <li><strong>Security Focus:</strong> Dedicated security monitoring device</li>
                </ul>
            </div>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Configure AP Operating Modes
WLC(config)# ap name AP1 mode flexconnect
WLC(config)# ap name AP2 mode monitor
WLC(config)# ap name AP3 mode rogue-detector

# Verify AP Modes
WLC# show ap summary
WLC# show ap config general AP1

# FlexConnect Configuration
WLC(config)# flexconnect group BRANCH_OFFICE
WLC(config)# flexconnect group BRANCH_OFFICE local-switching enable
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    // 2.7 WLAN Component Connections
    "WLAN Infrastructure": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.7: Physical Connections of WLAN Components</h3>
            <p>Understanding how wireless components connect to the wired network is crucial.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>AP to Switch:</strong> A Lightweight AP connects to an <strong>access port</strong> on a switch. The access port is configured for the VLAN that will be used for management traffic between the AP and the WLC.</li>
                <li><strong>WLC to Switch:</strong> A WLC typically connects to a <strong>trunk port</strong> on a switch. This is because the WLC must be able to communicate on multiple VLANs: the management VLAN and all the various client data VLANs it is managing.</li>
                <li><strong>LAG (Link Aggregation Group):</strong> This is simply EtherChannel. It's best practice to connect a physical WLC to a switch using a LAG to provide redundancy and increased bandwidth.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    // 2.7 WLAN Infrastructure  
    "AP Connections": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.7a: Access Point Physical Connections</h3>
            <p>Understanding how APs connect to the wired infrastructure is critical for proper deployment and troubleshooting.</p>
            
            <h4 style="color: #58D68D;">Switch Port Configuration for APs</h4>
            <p>APs connect to <strong>access ports</strong> on switches, typically requiring PoE for power:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Configure switch port for AP
Switch(config)# interface gi0/1
Switch(config-if)# description Wireless AP
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# switchport voice vlan 20
Switch(config-if)# spanning-tree portfast
Switch(config-if)# power inline auto
</code>
</pre>
            
            <h4 style="color: #58D68D;">Power over Ethernet (PoE) Requirements</h4>
            <p>Different AP models require different PoE standards:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #58D68D;">PoE Standard</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Power</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Typical Use</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>802.3af (PoE)</strong></td>
                        <td style="padding: 8px;">15.4W</td>
                        <td style="padding: 8px;">Basic APs, IP Phones</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong>802.3at (PoE+)</strong></td>
                        <td style="padding: 8px;">30W</td>
                        <td style="padding: 8px;">Modern APs, PTZ Cameras</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>802.3bt (PoE++)</strong></td>
                        <td style="padding: 8px;">60W/100W</td>
                        <td style="padding: 8px;">High-end APs, LED Lighting</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">VLAN Considerations</h4>
            <p>AP traffic typically uses multiple VLANs:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #0ea5e9;">
                <h5 style="color: #58D68D; margin-top: 0;">VLAN Usage:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Management VLAN:</strong> AP-to-WLC communication</li>
                    <li><strong>Data VLAN(s):</strong> Wireless client traffic</li>
                    <li><strong>Voice VLAN:</strong> VoIP traffic (if supported)</li>
                    <li><strong>Guest VLAN:</strong> Isolated guest access</li>
                </ul>
            </div>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Verify AP connection and PoE
Switch# show power inline gi0/1
Switch# show interface gi0/1 status
Switch# show mac address-table | include gi0/1

# Troubleshooting AP connectivity
Switch# show cdp neighbors gi0/1 detail
Switch# show lldp neighbors gi0/1 detail
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "WLC Connections": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.7b: WLC Infrastructure Connections</h3>
            <p>WLCs require specific network connections and interface configurations for proper operation.</p>
            
            <h4 style="color: #58D68D;">WLC Trunk Connections</h4>
            <p>WLCs connect to switches via <strong>trunk ports</strong> to carry multiple VLANs:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Configure switch trunk for WLC
Switch(config)# interface gi0/24
Switch(config-if)# description WLC Trunk Connection
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30,100
Switch(config-if)# spanning-tree portfast trunk
</code>
</pre>
            
            <h4 style="color: #58D68D;">Link Aggregation (LAG)</h4>
            <p>Multiple physical connections can be bundled for redundancy and increased bandwidth:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #6366f1;">
                <h5 style="color: #58D68D; margin-top: 0;">LAG Benefits:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Redundancy:</strong> Link failure protection</li>
                    <li><strong>Bandwidth:</strong> Aggregate throughput</li>
                    <li><strong>Load Balancing:</strong> Traffic distribution</li>
                    <li><strong>Seamless Failover:</strong> No service interruption</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">WLC Interface Types</h4>
            <p>WLCs require multiple logical interfaces for different functions:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Interface</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Purpose</th>
                        <th style="text-align: left; padding: 8px; color: #58D68D;">Required</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong style="color: #10b981;">Management</strong></td>
                        <td style="padding: 8px;">In-band management traffic</td>
                        <td style="padding: 8px;">Yes</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong style="color: #6366f1;">AP-Manager</strong></td>
                        <td style="padding: 8px;">AP communication</td>
                        <td style="padding: 8px;">Yes</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong style="color: #f59e0b;">Virtual</strong></td>
                        <td style="padding: 8px;">DHCP relay, client mobility</td>
                        <td style="padding: 8px;">Yes</td>
                    </tr>
                    <tr style="background-color: #0f0f0f;">
                        <td style="padding: 8px;"><strong style="color: #0ea5e9;">Dynamic</strong></td>
                        <td style="padding: 8px;">Client VLAN mapping</td>
                        <td style="padding: 8px;">Per WLAN</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong style="color: #f87171;">Service Port</strong></td>
                        <td style="padding: 8px;">Out-of-band management</td>
                        <td style="padding: 8px;">Optional</td>
                    </tr>
                </table>
            </div>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# WLC Interface Configuration
WLC(config)# interface dynamic-interface corporate
WLC(config-if)# ip address 192.168.10.50 255.255.255.0 192.168.10.1
WLC(config-if)# vlan 10

# LAG Configuration
WLC(config)# port-channel load-balance src-dst-ip
WLC(config)# interface port-channel 1
WLC(config-if)# switchport mode trunk
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,
    "Management Methods": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.8a: CLI & Console Management</h3>
            <p>Command Line Interface provides complete configuration control with methods ranging from physical console to secure SSH access.</p>
            
            <h4 style="color: #58D68D;">Console Access</h4>
            <p><strong>Direct console connection</strong> provides out-of-band management access for initial configuration:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #94a3b8;">
                <h5 style="color: #58D68D; margin-top: 0;">Console Connection:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Physical:</strong> RJ-45 console port on WLC/AP</li>
                    <li><strong>Cable:</strong> Console cable to USB/Serial adapter</li>
                    <li><strong>Settings:</strong> 9600 baud, 8-N-1, no flow control</li>
                    <li><strong>Use Case:</strong> Initial setup, password recovery, troubleshooting</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">SSH Access (Recommended)</h4>
            <p><strong>Secure Shell</strong> provides encrypted remote CLI access over the network:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Enable SSH on WLC
WLC(config)# ssh enable
WLC(config)# ssh timeout 300
WLC(config)# ssh version 2

# Configure local user accounts
WLC(config)# username admin password Cisco123! role admin

# Connect via SSH
$ ssh admin@192.168.1.100

# Verify SSH status
WLC# show ssh
</code>
</pre>
            
            <h4 style="color: #58D68D;">Telnet Access (Legacy)</h4>
            <p><strong>Telnet</strong> provides unencrypted CLI access - avoid in production:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <h5 style="color: #ef4444; margin-top: 0;">⚠️ Security Warning:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Risk:</strong> Passwords and data transmitted in clear text</li>
                    <li><strong>Recommendation:</strong> Disable Telnet, use SSH only</li>
                    <li><strong>Lab Use:</strong> Acceptable for isolated lab environments</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "Web GUI Management": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.8b: Web GUI Management</h3>
            <p>WLC and AP web interfaces provide intuitive graphical configuration through HTTP/HTTPS with dashboard monitoring and configuration wizards.</p>
            
            <h4 style="color: #58D68D;">HTTPS Web Interface (Recommended)</h4>
            <p><strong>Secure web management</strong> provides encrypted GUI access with comprehensive features:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <h5 style="color: #58D68D; margin-top: 0;">HTTPS Features:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Dashboard:</strong> Real-time AP status, client count, alarms</li>
                    <li><strong>Configuration:</strong> WLAN setup, security, QoS profiles</li>
                    <li><strong>Monitoring:</strong> RF performance, client statistics</li>
                    <li><strong>File Management:</strong> Software upgrades, certificate uploads</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Initial Web Access</h4>
            <p>Default credentials and security considerations for first-time setup:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Default WLC Web Access
URL: https://[management-ip]
Default Login: admin/admin

# Secure the interface
WLC(config)# web-auth username admin password NewPassword123!
WLC(config)# web-auth timeout 1800

# Enable HTTPS only
WLC(config)# web-auth https enable
WLC(config)# web-auth http disable
</code>
</pre>
            
            <h4 style="color: #58D68D;">Configuration Wizards</h4>
            <p>Step-by-step wizards simplify complex configurations:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #0ea5e9;">
                <h5 style="color: #58D68D; margin-top: 0;">Available Wizards:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Startup Wizard:</strong> Initial WLC configuration</li>
                    <li><strong>WLAN Wizard:</strong> New wireless network creation</li>
                    <li><strong>Security Wizard:</strong> WPA2/WPA3 setup with certificates</li>
                    <li><strong>Guest Access:</strong> Captive portal and guest user management</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "AAA & Monitoring": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.8c: AAA Authentication & SNMP Monitoring</h3>
            <p>Authentication, Authorization, and Accounting services provide secure access control while SNMP enables comprehensive network monitoring and management.</p>
            
            <h4 style="color: #58D68D;">RADIUS Authentication</h4>
            <p><strong>RADIUS</strong> provides centralized user authentication for wireless client access:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <h5 style="color: #58D68D; margin-top: 0;">RADIUS Configuration:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Server:</strong> IP address and shared secret</li>
                    <li><strong>Ports:</strong> 1812 (auth), 1813 (accounting)</li>
                    <li><strong>Timeout:</strong> Response timeout and retry settings</li>
                    <li><strong>Failover:</strong> Primary and backup server configuration</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">TACACS+ Device Administration</h4>
            <p><strong>TACACS+</strong> provides device-level authentication for administrative access:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Configure RADIUS server for clients
WLC(config)# radius server 192.168.1.50
WLC(config-radius)# shared-secret MySecret123
WLC(config-radius)# timeout 5
WLC(config-radius)# retries 3

# Configure TACACS+ for device admin
WLC(config)# tacacs server 192.168.1.51
WLC(config-tacacs)# shared-secret AdminSecret456
WLC(config-tacacs)# port 49
</code>
</pre>
            
            <h4 style="color: #58D68D;">SNMP Monitoring</h4>
            <p><strong>SNMPv3</strong> enables secure monitoring and management integration:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #58D68D; margin-top: 0;">SNMP Capabilities:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Performance Metrics:</strong> CPU, memory, client counts</li>
                    <li><strong>Fault Management:</strong> AP down alerts, interface status</li>
                    <li><strong>Configuration:</strong> Read-only or read-write access</li>
                    <li><strong>Security:</strong> SNMPv3 with encryption and authentication</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Syslog Integration</h4>
            <p><strong>Centralized logging</strong> for troubleshooting and compliance:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Configure SNMP
WLC(config)# snmp version v3 enable
WLC(config)# snmp user monitor group readonly

# Configure Syslog
WLC(config)# logging host 192.168.1.100
WLC(config)# logging level warnings
WLC(config)# logging facility local7
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "AP Discovery & Provisioning": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.8d: AP Discovery & Provisioning Process</h3>
            <p>Lightweight APs automatically discover WLCs through multiple methods and establish secure CAPWAP tunnels for centralized management and configuration.</p>
            
            <h4 style="color: #58D68D;">WLC Discovery Methods</h4>
            <p>APs use a specific order to locate and connect to WLCs:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <h5 style="color: #58D68D; margin-top: 0;">Discovery Order:</h5>
                <ol style="color: #E0E0E0; margin: 0;">
                    <li><strong>DHCP Option 43:</strong> WLC IP addresses from DHCP server</li>
                    <li><strong>DNS Resolution:</strong> CISCO-LWAPP-CONTROLLER.domain.com</li>
                    <li><strong>Local Subnet Broadcast:</strong> Limited broadcast (255.255.255.255)</li>
                    <li><strong>OTAP (Over-the-Air-Provisioning):</strong> From nearby APs</li>
                </ol>
            </div>
            
            <h4 style="color: #58D68D;">DHCP Option 43 Configuration</h4>
            <p><strong>Preferred method</strong> for large deployments with centralized DHCP:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# DHCP Server Configuration (Cisco IOS)
Router(config)# ip dhcp pool AP_POOL
Router(dhcp-config)# network 192.168.10.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.10.1
Router(dhcp-config)# dns-server 192.168.1.10
Router(dhcp-config)# option 43 hex f104c0a80164c0a80165

# Option 43 Breakdown:
# f1 = Sub-option 241 (WLC IP addresses)
# 04 = Length (4 bytes per IP)
# c0a80164 = 192.168.1.100 (Primary WLC)
# c0a80165 = 192.168.1.101 (Secondary WLC)
</code>
</pre>
            
            <h4 style="color: #58D68D;">CAPWAP Tunnel Establishment</h4>
            <p><strong>Control and Provisioning of Wireless Access Points</strong> protocol:</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #6366f1;">
                <h5 style="color: #58D68D; margin-top: 0;">CAPWAP Process:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Discovery:</strong> AP sends CAPWAP Discovery Request</li>
                    <li><strong>Join:</strong> WLC responds, AP sends Join Request</li>
                    <li><strong>Configuration:</strong> WLC pushes configuration to AP</li>
                    <li><strong>Image Download:</strong> AP downloads matching software image</li>
                    <li><strong>Run State:</strong> AP begins serving clients</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">AP Provisioning and States</h4>
            <p>AP progression through various states during provisioning:</p>
            
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
# Monitor AP provisioning
WLC# show ap summary
WLC# show ap join stats summary
WLC# show capwap summary

# AP States:
# - Discover: Looking for WLC
# - Join: Joining WLC
# - Image: Downloading software
# - Configure: Receiving configuration
# - Run: Operational
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    // 2.9 WLAN Configuration
    "WLAN Creation Wizard": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.9a: WLAN Creation Wizard</h3>
            <p>The WLC GUI provides a comprehensive 4-step wizard for creating WLANs with proper configuration and security settings.</p>
            
            <h4 style="color: #58D68D;">Step 1: General Configuration</h4>
            <p>Initial WLAN settings including profile name, SSID, and type designation.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;">General → New...</span><br>
                Profile Name: <span style="color: #9CDCFE;">Corporate_WiFi</span><br>
                SSID: <span style="color: #9CDCFE;">CompanyNetwork</span><br>
                Type: <span style="color: #DCDCAA;">WLAN</span> (default)<br>
                WLAN ID: <span style="color: #F7DC6F;">1</span> (auto-assigned)
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Step 2: Security Method</h4>
            <p>Configure authentication and encryption protocols based on security requirements.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Security Type</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Use Case</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Authentication</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">WPA2-PSK</td>
                        <td style="padding: 8px;">Small networks</td>
                        <td style="padding: 8px;">Pre-shared key</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">WPA2-Enterprise</td>
                        <td style="padding: 8px;">Corporate networks</td>
                        <td style="padding: 8px;">802.1X + RADIUS</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">WPA3-PSK</td>
                        <td style="padding: 8px;">Enhanced security</td>
                        <td style="padding: 8px;">SAE (Simultaneous Authentication)</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Step 3: QoS Profile Assignment</h4>
            <p>Select appropriate Quality of Service profile based on traffic type and priority.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># QoS Profile Options</span><br>
                <span style="color: #DCDCAA;">Platinum</span>: Voice traffic (highest priority)<br>
                <span style="color: #F7DC6F;">Gold</span>: Video streaming (high priority)<br>
                <span style="color: #9CDCFE;">Silver</span>: Best effort data (normal priority)<br>
                <span style="color: #8B4513;">Bronze</span>: Background traffic (lowest priority)
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Step 4: Advanced Settings</h4>
            <p>Configure interface mapping, VLAN assignment, and advanced features.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Advanced Configuration</span><br>
                Interface/Interface Group: <span style="color: #9CDCFE;">management</span><br>
                VLAN: <span style="color: #F7DC6F;">100</span> (data VLAN)<br>
                Broadcast SSID: <span style="color: #DCDCAA;">Enabled</span><br>
                Radio Policy: <span style="color: #9CDCFE;">All</span> (2.4GHz + 5GHz)<br>
                Status: <span style="color: #58D68D;">Enabled</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">CLI Equivalent Commands</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Create WLAN via CLI</span><br>
                (Cisco Controller) >config wlan create <span style="color: #F7DC6F;">1</span> <span style="color: #9CDCFE;">Corporate_WiFi</span> <span style="color: #9CDCFE;">CompanyNetwork</span><br>
                (Cisco Controller) >config wlan security wpa akm <span style="color: #DCDCAA;">psk</span> <span style="color: #F7DC6F;">1</span><br>
                (Cisco Controller) >config wlan security wpa wpa2 encryption aes <span style="color: #F7DC6F;">1</span><br>
                (Cisco Controller) >config wlan qos <span style="color: #9CDCFE;">silver</span> <span style="color: #F7DC6F;">1</span><br>
                (Cisco Controller) >config wlan interface <span style="color: #F7DC6F;">1</span> <span style="color: #9CDCFE;">management</span><br>
                (Cisco Controller) >config wlan enable <span style="color: #F7DC6F;">1</span>
                </code>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "Security Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.9b: WLAN Security Configuration</h3>
            <p>Comprehensive security configuration for wireless networks including authentication methods, encryption protocols, and access control mechanisms.</p>
            
            <h4 style="color: #58D68D;">WPA2/WPA3 Personal Configuration</h4>
            <p>Pre-shared key authentication suitable for smaller deployments with shared passwords.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># WPA2-PSK Configuration</span><br>
                Security → Layer 2 Security: <span style="color: #DCDCAA;">WPA+WPA2</span><br>
                WPA+WPA2 Parameters:<br>
                &nbsp;&nbsp;WPA Policy: <span style="color: #F7DC6F;">Disabled</span><br>
                &nbsp;&nbsp;WPA2 Policy: <span style="color: #58D68D;">Enabled</span><br>
                &nbsp;&nbsp;WPA2 Encryption: <span style="color: #9CDCFE;">AES</span><br>
                &nbsp;&nbsp;Auth Key Mgmt: <span style="color: #DCDCAA;">PSK</span><br>
                PSK Format: <span style="color: #9CDCFE;">ASCII</span><br>
                PSK: <span style="color: #E74C3C;">[Complex Password 8-63 chars]</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">WPA2/WPA3 Enterprise Configuration</h4>
            <p>802.1X authentication with RADIUS server for enterprise-grade security.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># WPA2-Enterprise Configuration</span><br>
                Security → Layer 2 Security: <span style="color: #DCDCAA;">WPA+WPA2</span><br>
                Auth Key Mgmt: <span style="color: #58D68D;">802.1X</span><br>
                RADIUS Servers:<br>
                &nbsp;&nbsp;Auth Server: <span style="color: #9CDCFE;">192.168.1.100</span><br>
                &nbsp;&nbsp;Port: <span style="color: #F7DC6F;">1812</span><br>
                &nbsp;&nbsp;Shared Secret: <span style="color: #E74C3C;">[RADIUS-Secret]</span><br>
                &nbsp;&nbsp;Server Timeout: <span style="color: #F7DC6F;">2</span> seconds<br>
                EAP Methods: <span style="color: #9CDCFE;">PEAP, EAP-TLS, EAP-TTLS</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">MAC Address Filtering</h4>
            <p>Additional layer of access control using MAC address allow/deny lists.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Local MAC Filtering:</strong> WLC maintains the MAC filter list</li>
                    <li><strong>RADIUS MAC Filtering:</strong> RADIUS server validates MAC addresses</li>
                    <li><strong>Allow/Deny Modes:</strong> Whitelist or blacklist specific devices</li>
                    <li><strong>Format:</strong> xx:xx:xx:xx:xx:xx or xx-xx-xx-xx-xx-xx</li>
                </ul>
            </div>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># MAC Filtering CLI Commands</span><br>
                (Cisco Controller) >config macfilter add <span style="color: #F7DC6F;">1</span> <span style="color: #9CDCFE;">aa:bb:cc:dd:ee:ff</span> <span style="color: #DCDCAA;">permit</span><br>
                (Cisco Controller) >config macfilter enable <span style="color: #F7DC6F;">1</span><br>
                (Cisco Controller) >show macfilter summary <span style="color: #F7DC6F;">1</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Advanced Security Features</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Feature</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Purpose</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Configuration</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">PMF (Protected Management Frames)</td>
                        <td style="padding: 8px;">Protect management frames</td>
                        <td style="padding: 8px;">Required/Optional</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">Fast Transition (802.11r)</td>
                        <td style="padding: 8px;">Seamless roaming</td>
                        <td style="padding: 8px;">Enable FT over DS</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Band Selection</td>
                        <td style="padding: 8px;">Force 5GHz when possible</td>
                        <td style="padding: 8px;">Probe Response/Data Rate</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Security Best Practices</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Use WPA3 when supported:</strong> Enhanced security with SAE authentication</li>
                    <li><strong>Strong PSK passwords:</strong> Minimum 12 characters, complex</li>
                    <li><strong>Regular key rotation:</strong> Change passwords periodically</li>
                    <li><strong>Disable WPS:</strong> Vulnerable to brute force attacks</li>
                    <li><strong>Hide SSID broadcast:</strong> Obscurity (not true security)</li>
                    <li><strong>Enable PMF:</strong> Required for WPA3, recommended for WPA2</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "Guest Access & Captive Portal": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.9c: Guest Access & Captive Portal Configuration</h3>
            <p>Configure secure guest networks with captive portal authentication, providing temporary internet access while maintaining network isolation.</p>
            
            <h4 style="color: #58D68D;">Guest WLAN Creation</h4>
            <p>Create a dedicated guest network with proper isolation and security controls.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Guest WLAN Configuration</span><br>
                Profile Name: <span style="color: #9CDCFE;">Guest_Network</span><br>
                SSID: <span style="color: #9CDCFE;">CompanyGuest</span><br>
                Type: <span style="color: #DCDCAA;">Guest-LAN</span><br>
                Security: <span style="color: #F7DC6F;">None</span> (Open) or <span style="color: #58D68D;">WPA2-PSK</span><br>
                Interface: <span style="color: #9CDCFE;">guest</span> (dedicated interface)<br>
                VLAN: <span style="color: #F7DC6F;">200</span> (guest VLAN)
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Captive Portal Configuration</h4>
            <p>Configure web authentication for guest access with customizable login pages.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Web Authentication:</strong> Layer 3 security method</li>
                    <li><strong>Customizable Pages:</strong> Login, success, failure, logout</li>
                    <li><strong>User Accounts:</strong> Local or external (RADIUS/LDAP)</li>
                    <li><strong>Time-based Access:</strong> Session timeouts and access windows</li>
                </ul>
            </div>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Web Authentication Setup</span><br>
                Security → Layer 3 Security: <span style="color: #DCDCAA;">Web Policy</span><br>
                Authentication: <span style="color: #58D68D;">Enabled</span><br>
                Pass-through: <span style="color: #F7DC6F;">Disabled</span><br>
                Conditional Web Redirect: <span style="color: #9CDCFE;">Splash Page</span><br>
                Sleeping Client: <span style="color: #DCDCAA;">Enabled</span><br>
                Pre-Auth ACL: <span style="color: #9CDCFE;">guest_preauth_acl</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Guest User Account Management</h4>
            <p>Create and manage temporary guest accounts with appropriate access controls.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Guest User Configuration</span><br>
                Management → Guest Users → New<br>
                Username: <span style="color: #9CDCFE;">guest001</span><br>
                Password: <span style="color: #E74C3C;">[Auto-generated or custom]</span><br>
                Lifetime: <span style="color: #F7DC6F;">24</span> hours<br>
                Start Time: <span style="color: #DCDCAA;">Login time</span><br>
                Description: <span style="color: #9CDCFE;">"Conference visitor - John Doe"</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Access Control Lists (ACLs)</h4>
            <p>Configure ACLs to control guest network traffic and restrict internal access.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">ACL Type</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Purpose</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Application</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">Pre-Authentication</td>
                        <td style="padding: 8px;">DNS, DHCP, captive portal access</td>
                        <td style="padding: 8px;">Before login</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">Post-Authentication</td>
                        <td style="padding: 8px;">Internet access, block internal</td>
                        <td style="padding: 8px;">After login</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Guest Role</td>
                        <td style="padding: 8px;">Bandwidth limits, time restrictions</td>
                        <td style="padding: 8px;">User-based</td>
                    </tr>
                </table>
            </div>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Guest ACL Example</span><br>
                (Cisco Controller) >config acl create <span style="color: #9CDCFE;">guest_acl</span><br>
                (Cisco Controller) >config acl rule add <span style="color: #9CDCFE;">guest_acl</span> <span style="color: #F7DC6F;">1</span><br>
                (Cisco Controller) >config acl rule action <span style="color: #9CDCFE;">guest_acl</span> <span style="color: #F7DC6F;">1</span> <span style="color: #E74C3C;">deny</span><br>
                (Cisco Controller) >config acl rule destination address <span style="color: #9CDCFE;">guest_acl</span> <span style="color: #F7DC6F;">1</span> <span style="color: #E74C3C;">192.168.0.0</span> <span style="color: #E74C3C;">255.255.0.0</span><br>
                (Cisco Controller) >config acl rule add <span style="color: #9CDCFE;">guest_acl</span> <span style="color: #F7DC6F;">2</span><br>
                (Cisco Controller) >config acl rule action <span style="color: #9CDCFE;">guest_acl</span> <span style="color: #F7DC6F;">2</span> <span style="color: #58D68D;">permit</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Bandwidth and Time Restrictions</h4>
            <p>Implement QoS policies and session controls for guest users.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Bandwidth Limiting</span><br>
                QoS → Profiles → Bronze<br>
                Per-user Bandwidth Contracts:<br>
                &nbsp;&nbsp;Average Data Rate: <span style="color: #F7DC6F;">512</span> kbps<br>
                &nbsp;&nbsp;Burst Data Rate: <span style="color: #F7DC6F;">1024</span> kbps<br>
                &nbsp;&nbsp;Average Real-time Rate: <span style="color: #F7DC6F;">256</span> kbps<br>
                &nbsp;&nbsp;Burst Real-time Rate: <span style="color: #F7DC6F;">512</span> kbps
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Custom Captive Portal Pages</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Login Page:</strong> Company branding, terms acceptance, contact info</li>
                    <li><strong>Success Page:</strong> Welcome message, usage guidelines, support</li>
                    <li><strong>Failure Page:</strong> Error messages, troubleshooting tips</li>
                    <li><strong>Logout Page:</strong> Session terminated confirmation</li>
                    <li><strong>Custom CSS/HTML:</strong> Upload custom pages via WLC</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Troubleshooting Guest Access</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Debug Commands</span><br>
                (Cisco Controller) >show web-auth summary<br>
                (Cisco Controller) >show client detail <span style="color: #9CDCFE;">&lt;MAC-address&gt;</span><br>
                (Cisco Controller) >show acl detailed <span style="color: #9CDCFE;">guest_acl</span><br>
                (Cisco Controller) >debug client <span style="color: #9CDCFE;">&lt;MAC-address&gt;</span><br>
                (Cisco Controller) >debug web-auth all enable
                </code>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    "Advanced WLAN Features": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.9d: Advanced WLAN Features & Optimization</h3>
            <p>Configure advanced wireless features for optimal performance, client distribution, and network efficiency in enterprise environments.</p>
            
            <h4 style="color: #58D68D;">Band Steering Configuration</h4>
            <p>Automatically steer dual-band capable clients to 5GHz for better performance and reduced 2.4GHz congestion.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Band Steering Configuration</span><br>
                Wireless → 802.11a/n/ac-5GHz → Band Select<br>
                Band Select: <span style="color: #58D68D;">Enabled</span><br>
                Cycle Count: <span style="color: #F7DC6F;">2</span> (probe responses to suppress)<br>
                Cycle Threshold: <span style="color: #F7DC6F;">200</span> ms<br>
                Age Out Suppression: <span style="color: #F7DC6F;">20</span> seconds<br>
                Age Out Dual Band: <span style="color: #F7DC6F;">60</span> seconds
                </code>
            </div>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Probe Response Delay:</strong> Delays 2.4GHz responses to encourage 5GHz</li>
                    <li><strong>Client RSSI Checks:</strong> Only steers clients with adequate 5GHz signal</li>
                    <li><strong>Age-out Timers:</strong> Stops steering attempts after timeout</li>
                    <li><strong>Dual-band Detection:</strong> Identifies clients capable of both bands</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Load Balancing</h4>
            <p>Distribute clients evenly across multiple access points to prevent overloading.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Load Balancing Configuration</span><br>
                Wireless → 802.11a/n/ac-5GHz → Load Balancing<br>
                Load Balancing: <span style="color: #58D68D;">Enabled</span><br>
                Window Size: <span style="color: #F7DC6F;">5</span> clients<br>
                Denial: <span style="color: #F7DC6F;">3</span> (times to deny before allowing)<br>
                <br>
                <span style="color: #6A9955;"># Per-WLAN Load Balancing</span><br>
                WLANs → [WLAN-ID] → Advanced<br>
                Load Balancing: <span style="color: #58D68D;">Enabled</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Client Limits and Admission Control</h4>
            <p>Control the maximum number of clients per AP and WLAN for optimal performance.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Limit Type</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Scope</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Typical Value</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">Max Clients per AP</td>
                        <td style="padding: 8px;">Global (per radio)</td>
                        <td style="padding: 8px;">200 (total)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">Max Clients per WLAN</td>
                        <td style="padding: 8px;">Per WLAN</td>
                        <td style="padding: 8px;">50-100</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Session Timeout</td>
                        <td style="padding: 8px;">Per user</td>
                        <td style="padding: 8px;">8 hours</td>
                    </tr>
                </table>
            </div>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Client Limit Configuration</span><br>
                (Cisco Controller) >config 802.11a 11nSupport max-clients <span style="color: #F7DC6F;">50</span><br>
                (Cisco Controller) >config wlan max-associated-clients <span style="color: #F7DC6F;">1</span> <span style="color: #F7DC6F;">100</span><br>
                (Cisco Controller) >config wlan session-timeout <span style="color: #F7DC6F;">1</span> <span style="color: #F7DC6F;">28800</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Airtime Fairness</h4>
            <p>Ensure equal airtime allocation to prevent slower clients from degrading overall performance.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Airtime Fairness Configuration</span><br>
                Wireless → 802.11a/n/ac-5GHz → Global Parameters<br>
                Call Admission Control (CAC): <span style="color: #58D68D;">Enabled</span><br>
                Voice CAC: <span style="color: #58D68D;">Load-based</span><br>
                Voice Stream Size: <span style="color: #F7DC6F;">84000</span> bps<br>
                Video CAC: <span style="color: #58D68D;">Static</span><br>
                Video Bandwidth: <span style="color: #F7DC6F;">10</span>% of available bandwidth
                </code>
            </div>
            
            <h4 style="color: #58D68D;">RF Optimization Features</h4>
            <p>Advanced RF management for optimal coverage and performance.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Dynamic Power Control (DPC):</strong> Automatic power adjustment</li>
                    <li><strong>Dynamic Channel Assignment (DCA):</strong> Optimal channel selection</li>
                    <li><strong>CleanAir:</strong> RF interference detection and mitigation</li>
                    <li><strong>Coverage Hole Detection:</strong> Identifies weak coverage areas</li>
                    <li><strong>Rogue Detection:</strong> Identifies unauthorized APs</li>
                </ul>
            </div>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># RF Management Commands</span><br>
                (Cisco Controller) >config advanced 802.11a channel dca <span style="color: #58D68D;">enable</span><br>
                (Cisco Controller) >config advanced 802.11a txpower dpc <span style="color: #58D68D;">enable</span><br>
                (Cisco Controller) >config advanced 802.11a coverage data rssi-threshold <span style="color: #F7DC6F;">-70</span><br>
                (Cisco Controller) >config cleanair air-quality <span style="color: #58D68D;">enable</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">WLAN Troubleshooting</h4>
            <p>Essential commands and techniques for diagnosing WLAN issues.</p>
            
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Troubleshooting Commands</span><br>
                <span style="color: #6A9955;"># Client Connectivity</span><br>
                (Cisco Controller) >show client summary<br>
                (Cisco Controller) >show client detail <span style="color: #9CDCFE;">&lt;MAC-address&gt;</span><br>
                (Cisco Controller) >show client stats <span style="color: #9CDCFE;">&lt;MAC-address&gt;</span><br>
                <br>
                <span style="color: #6A9955;"># WLAN Status</span><br>
                (Cisco Controller) >show wlan summary<br>
                (Cisco Controller) >show wlan id <span style="color: #F7DC6F;">1</span><br>
                (Cisco Controller) >show interface summary<br>
                <br>
                <span style="color: #6A9955;"># RF Information</span><br>
                (Cisco Controller) >show ap summary<br>
                (Cisco Controller) >show ap stats 802.11a <span style="color: #9CDCFE;">&lt;AP-name&gt;</span><br>
                (Cisco Controller) >show rf summary
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Performance Monitoring</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Client Signal Strength:</strong> Monitor RSSI values for coverage</li>
                    <li><strong>Throughput Statistics:</strong> Track data rates and utilization</li>
                    <li><strong>Roaming Events:</strong> Analyze handoff patterns</li>
                    <li><strong>Authentication Failures:</strong> Identify security issues</li>
                    <li><strong>Channel Utilization:</strong> Monitor RF spectrum usage</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,
    
    "Default VLAN": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.1: Default VLAN Configuration & Security</h3>
            
            <p>By default, all switch ports are assigned to <strong>VLAN 1</strong>, which serves as the default VLAN on Cisco switches. Understanding and properly configuring the default VLAN is crucial for network security and proper VLAN implementation.</p>

            <h4 style="color: #58D68D;">Default VLAN Characteristics</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>VLAN 1:</strong> Cannot be deleted or modified, always exists on Cisco switches</li>
                <li><strong>All Ports Initially:</strong> Every port starts in VLAN 1 by default</li>
                <li><strong>Management Traffic:</strong> STP, CDP, and VTP use VLAN 1 by default</li>
                <li><strong>Native VLAN:</strong> VLAN 1 is the default native VLAN for trunks</li>
            </ul>

            <h4 style="color: #58D68D;">Security Vulnerabilities</h4>
            <p>Using VLAN 1 for user data creates several security risks:</p>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>VLAN Hopping:</strong> Attackers can exploit native VLAN 1 to access other VLANs</li>
                    <li><strong>Management Exposure:</strong> Management traffic mixed with user data</li>
                    <li><strong>Default Configuration:</strong> Many devices assume VLAN 1, creating predictable attack vectors</li>
                    <li><strong>Spanning Tree Attacks:</strong> Malicious BPDUs can disrupt VLAN 1 operations</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Best Practice Configuration</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;">! Step 1: Create management VLAN</span><br>
                Switch(config)# <span style="color: #DCDCAA;">vlan 99</span><br>
                Switch(config-vlan)# <span style="color: #9CDCFE;">name MANAGEMENT</span><br>
                Switch(config-vlan)# <span style="color: #C586C0;">exit</span><br><br>
                
                <span style="color: #6A9955;">! Step 2: Move management interface</span><br>
                Switch(config)# <span style="color: #DCDCAA;">interface vlan 99</span><br>
                Switch(config-if)# <span style="color: #9CDCFE;">ip address 192.168.99.10 255.255.255.0</span><br>
                Switch(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                <span style="color: #6A9955;">! Step 3: Disable VLAN 1 interface</span><br>
                Switch(config)# <span style="color: #DCDCAA;">interface vlan 1</span><br>
                Switch(config-if)# <span style="color: #C586C0;">shutdown</span><br><br>
                
                <span style="color: #6A9955;">! Step 4: Move user ports to data VLANs</span><br>
                Switch(config)# <span style="color: #DCDCAA;">interface range fa0/1-24</span><br>
                Switch(config-if-range)# <span style="color: #9CDCFE;">switchport access vlan 10</span><br>
                Switch(config-if-range)# <span style="color: #C586C0;">no shutdown</span>
                </code>
            </div>

            <h4 style="color: #58D68D;">VLAN 1 Minimization Strategy</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Action</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Purpose</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Command</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">Change Native VLAN</td>
                        <td style="padding: 8px;">Prevent VLAN hopping</td>
                        <td style="padding: 8px;"><code>switchport trunk native vlan 999</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">Create Management VLAN</td>
                        <td style="padding: 8px;">Isolate management traffic</td>
                        <td style="padding: 8px;"><code>vlan 99</code></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Shutdown VLAN 1</td>
                        <td style="padding: 8px;">Disable unused interface</td>
                        <td style="padding: 8px;"><code>interface vlan 1; shutdown</code></td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D68D;">Verification Commands</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                Switch# <span style="color: #DCDCAA;">show vlan brief</span><br>
                Switch# <span style="color: #DCDCAA;">show interface status</span><br>
                Switch# <span style="color: #DCDCAA;">show interfaces trunk</span><br>
                Switch# <span style="color: #DCDCAA;">show spanning-tree vlan 1</span><br><br>
                
                <span style="color: #6A9955;">! Check which ports are still in VLAN 1</span><br>
                Switch# <span style="color: #DCDCAA;">show vlan id 1</span>
                </code>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that VLAN 1 cannot be deleted from Cisco switches</li>
                    <li>Know security risks of using VLAN 1 for user data</li>
                    <li>Remember to change native VLAN from default VLAN 1</li>
                    <li>Create separate management VLAN for switch administration</li>
                    <li>Use show commands to verify VLAN assignments and status</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;"><ul style="margin-left: 20px;">
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    `,
    
    "Connectivity": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.1: VLAN Connectivity & Communication</h3>
            
            <p>Understanding how devices communicate within and between VLANs is fundamental to network design and troubleshooting. VLANs create logical broadcast domains that determine communication patterns.</p>

            <h4 style="color: #58D68D;">Intra-VLAN Communication (Same VLAN)</h4>
            <p>Devices within the same VLAN can communicate directly using Layer 2 switching:</p>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li><strong>Layer 2 Operation:</strong> Switch uses MAC address table for forwarding</li>
                    <li><strong>Same Broadcast Domain:</strong> Broadcast, multicast, and unknown unicast frames flood within VLAN</li>
                    <li><strong>No Routing Required:</strong> Direct communication through switch fabric</li>
                    <li><strong>Full Bandwidth:</strong> Switch port speed available for communication</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Inter-VLAN Communication (Different VLANs)</h4>
            <p>Devices in different VLANs require Layer 3 routing to communicate:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Method</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Description</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Use Case</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;"><strong>Router on a Stick</strong></td>
                        <td style="padding: 8px;">External router with subinterfaces</td>
                        <td style="padding: 8px;">Small networks, cost-effective</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;"><strong>Layer 3 Switch</strong></td>
                        <td style="padding: 8px;">Switch with routing capabilities</td>
                        <td style="padding: 8px;">Enterprise networks, high performance</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;"><strong>Separate Router Ports</strong></td>
                        <td style="padding: 8px;">Dedicated router interface per VLAN</td>
                        <td style="padding: 8px;">Legacy networks, high security</td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D68D;">Router-on-a-Stick Configuration</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;">! Switch configuration</span><br>
                Switch(config)# <span style="color: #DCDCAA;">interface gi0/1</span><br>
                Switch(config-if)# <span style="color: #9CDCFE;">switchport mode trunk</span><br>
                Switch(config-if)# <span style="color: #9CDCFE;">switchport trunk allowed vlan 10,20,30</span><br><br>
                
                <span style="color: #6A9955;">! Router subinterface configuration</span><br>
                Router(config)# <span style="color: #DCDCAA;">interface gi0/1.10</span><br>
                Router(config-subif)# <span style="color: #9CDCFE;">encapsulation dot1Q 10</span><br>
                Router(config-subif)# <span style="color: #9CDCFE;">ip address 192.168.10.1 255.255.255.0</span><br><br>
                
                Router(config)# <span style="color: #DCDCAA;">interface gi0/1.20</span><br>
                Router(config-subif)# <span style="color: #9CDCFE;">encapsulation dot1Q 20</span><br>
                Router(config-subif)# <span style="color: #9CDCFE;">ip address 192.168.20.1 255.255.255.0</span>
                </code>
            </div>

            <h4 style="color: #58D68D;">Layer 3 Switch Configuration</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;">! Enable IP routing</span><br>
                Switch(config)# <span style="color: #DCDCAA;">ip routing</span><br><br>
                
                <span style="color: #6A9955;">! Create SVIs (Switched Virtual Interfaces)</span><br>
                Switch(config)# <span style="color: #DCDCAA;">interface vlan 10</span><br>
                Switch(config-if)# <span style="color: #9CDCFE;">ip address 192.168.10.1 255.255.255.0</span><br>
                Switch(config-if)# <span style="color: #C586C0;">no shutdown</span><br><br>
                
                Switch(config)# <span style="color: #DCDCAA;">interface vlan 20</span><br>
                Switch(config-if)# <span style="color: #9CDCFE;">ip address 192.168.20.1 255.255.255.0</span><br>
                Switch(config-if)# <span style="color: #C586C0;">no shutdown</span>
                </code>
            </div>

            <h4 style="color: #58D68D;">Connectivity Testing & Troubleshooting</h4>
            <p><strong>Testing Same VLAN Communication:</strong></p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                PC1# <span style="color: #DCDCAA;">ping 192.168.10.20</span>   <span style="color: #6A9955;">! Same VLAN (VLAN 10)</span><br>
                PC1# <span style="color: #DCDCAA;">arp -a</span>              <span style="color: #6A9955;">! Check ARP table</span><br>
                Switch# <span style="color: #DCDCAA;">show mac address-table vlan 10</span>
                </code>
            </div>

            <p><strong>Testing Inter-VLAN Communication:</strong></p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                PC1# <span style="color: #DCDCAA;">ping 192.168.20.10</span>   <span style="color: #6A9955;">! Different VLAN (VLAN 20)</span><br>
                PC1# <span style="color: #DCDCAA;">tracert 192.168.20.10</span> <span style="color: #6A9955;">! Should show router hop</span><br>
                Router# <span style="color: #DCDCAA;">show ip route</span>      <span style="color: #6A9955;">! Verify routing table</span>
                </code>
            </div>

            <h4 style="color: #58D68D;">Common Connectivity Issues</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #e2e8f0; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #444;">
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Problem</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Cause</th>
                        <th style="text-align: left; padding: 8px; color: #2ECC71;">Solution</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">No same-VLAN communication</td>
                        <td style="padding: 8px;">Wrong VLAN assignment</td>
                        <td style="padding: 8px;">Verify <code>show vlan brief</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #444;">
                        <td style="padding: 8px;">No inter-VLAN communication</td>
                        <td style="padding: 8px;">Missing routing/gateway</td>
                        <td style="padding: 8px;">Configure router/SVI</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Partial connectivity</td>
                        <td style="padding: 8px;">VLAN pruning/trunk issues</td>
                        <td style="padding: 8px;">Check <code>show interfaces trunk</code></td>
                    </tr>
                </table>
            </div>

            <h4 style="color: #58D68D;">Performance Considerations</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong>Intra-VLAN:</strong> Wire-speed switching performance</li>
                <li><strong>Inter-VLAN via Router:</strong> Limited by router throughput and trunk bandwidth</li>
                <li><strong>Inter-VLAN via L3 Switch:</strong> Hardware-accelerated routing at line rate</li>
                <li><strong>Broadcast Domains:</strong> Smaller VLANs reduce broadcast traffic impact</li>
            </ul>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that devices in same VLAN communicate via Layer 2 switching</li>
                    <li>Know that different VLANs require Layer 3 routing for communication</li>
                    <li>Configure router-on-a-stick with subinterfaces and dot1Q encapsulation</li>
                    <li>Set up Layer 3 switch with SVIs and ip routing command</li>
                    <li>Use appropriate show and ping commands for connectivity testing</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;"><ul style="margin-left: 20px;">
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    `,
    
    "Native VLAN": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">2.2c: Native VLAN Configuration & Security</h3>
            <p>The <strong>Native VLAN</strong> is a critical component of 802.1Q trunk configuration that carries untagged traffic across trunk links. Understanding and properly configuring the native VLAN is essential for network security and proper VLAN operation.</p>
            
            <h4 style="color: #58D68D;">Native VLAN Fundamentals</h4>
            <p>In 802.1Q trunking, all VLAN traffic is tagged with a VLAN identifier except for <em>one special VLAN</em> - the native VLAN. This VLAN's traffic crosses the trunk link in its original, unmodified Ethernet frame format without any 802.1Q tag.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D; margin-top: 0;">Key Characteristics:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>Untagged Traffic:</strong> Only VLAN that crosses trunk without 802.1Q tag</li>
                    <li><strong>Default Setting:</strong> VLAN 1 is the default native VLAN on Cisco switches</li>
                    <li><strong>Consistency Required:</strong> Both ends of trunk must have identical native VLAN</li>
                    <li><strong>Legacy Support:</strong> Enables communication with non-802.1Q aware devices</li>
                    <li><strong>Security Implications:</strong> Improper configuration creates security vulnerabilities</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Configuration Examples</h4>
            <p><strong>Basic Native VLAN Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Configure native VLAN on trunk interface
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 999

! Verify native VLAN configuration
Switch(config-if)# do show interfaces trunk
</code>
</pre>

            <p><strong>Security-Hardened Configuration:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Create dedicated unused VLAN for native VLAN
Switch(config)# vlan 999
Switch(config-vlan)# name NATIVE_UNUSED

! Configure trunk with secure native VLAN
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 999
Switch(config-if)# switchport trunk allowed vlan 10,20,30
Switch(config-if)# switchport nonegotiate
</code>
</pre>

            <h4 style="color: #58D68D;">Security Vulnerabilities & Mitigation</h4>
            <div style="background-color: #2c1810; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #f59e0b; margin-top: 0;">⚠️ Native VLAN Security Risks:</h5>
                <ul style="color: #E0E0E0; margin: 0;">
                    <li><strong>VLAN Hopping:</strong> Attackers can inject traffic into native VLAN</li>
                    <li><strong>Double Tagging:</strong> Exploitation of native VLAN processing behavior</li>
                    <li><strong>Management Traffic:</strong> Default VLAN 1 carries management protocols</li>
                    <li><strong>Spanning Tree Attacks:</strong> Native VLAN mismatch causes STP issues</li>
                </ul>
            </div>

            <h4 style="color: #58D68D;">Security Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Change Default Native VLAN:</strong> Never use VLAN 1 as native VLAN</li>
                <li><strong>Use Unused VLAN:</strong> Choose high-numbered, unused VLAN (e.g., 999)</li>
                <li><strong>Consistent Configuration:</strong> Ensure both trunk ends have same native VLAN</li>
                <li><strong>Prune Native VLAN:</strong> Don't allow native VLAN on access switch ports</li>
                <li><strong>Monitor Traffic:</strong> Regularly audit native VLAN for unexpected traffic</li>
                <li><strong>Document Settings:</strong> Maintain clear documentation of native VLAN assignments</li>
            </ul>

            <h4 style="color: #58D68D;">Troubleshooting Native VLAN Issues</h4>
            <p><strong>Common Problems and Solutions:</strong></p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Native VLAN Mismatch:</strong> Use "show interfaces trunk" to verify both sides</li>
                <li><strong>Spanning Tree Errors:</strong> Check logs for native VLAN mismatch messages</li>
                <li><strong>Connectivity Issues:</strong> Verify native VLAN exists in VLAN database</li>
                <li><strong>Security Violations:</strong> Monitor for unexpected traffic in native VLAN</li>
            </ul>

            <p><strong>Verification Commands:</strong></p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
! Check trunk and native VLAN status
Switch# show interfaces GigabitEthernet0/1 trunk
Switch# show interfaces GigabitEthernet0/1 switchport

! Verify VLAN database includes native VLAN
Switch# show vlan brief | include 999

! Check for spanning tree issues
Switch# show spanning-tree inconsistentports
Switch# show spanning-tree interface GigabitEthernet0/1
</code>
</pre>

            <h4 style="color: #58D68D;">Advanced Configuration Scenarios</h4>
            <p><strong>Multiple Trunk Scenario:</strong> In networks with multiple trunk links, ensure all trunks between the same pair of switches use identical native VLAN settings to prevent loops and spanning tree issues.</p>
            <p><strong>Voice VLAN Integration:</strong> When implementing voice VLANs, carefully plan native VLAN assignment to avoid conflicts with voice traffic requirements and QoS policies.</p>

            <h4 style="color: #58D68D;">Real-World Implementation</h4>
            <p><strong>Enterprise Networks:</strong> Large organizations typically use high-numbered VLANs (900-999) as native VLANs, completely separate from user and server VLANs to maintain security boundaries.</p>
            <p><strong>Service Provider Networks:</strong> Critical for maintaining customer traffic isolation and preventing cross-customer VLAN bleeding in multi-tenant environments.</p>

            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="color: #E0E0E0; margin: 0; font-size: 0.9em;">
                    <li>Configure native VLAN with security best practices</li>
                    <li>Identify and resolve native VLAN mismatch issues</li>
                    <li>Understand native VLAN security vulnerabilities and mitigation</li>
                    <li>Verify native VLAN configuration using show commands</li>
                </ul>
            </div>

            <div style="margin-top: 15px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION2_DETAILS = SECTION2_DETAILS;
}