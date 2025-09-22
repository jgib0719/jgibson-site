/**
 * CCNA Section 4: IP Services - Complete Topic Data
 * This data is structured to be used with section4.html
 */

const SECTION4_DATA = {
    dhcpDns: [
        {
            title: "Role of DHCP",
            icon: "fa-server",
            description: "The Dynamic Host Configuration Protocol (DHCP) automates the assignment of IP addresses, subnet masks, default gateways, and DNS servers to client devices, simplifying network administration.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DHCP DORA Process</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#10b981"/><text x="80" y="105" font-size="10" fill="white" text-anchor="middle">Client</text>
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#3b82f6"/><text x="320" y="105" font-size="10" fill="white" text-anchor="middle">Server</text>
                
                <text x="185" y="50" text-anchor="middle" font-size="10" fill="#94a3b8">Discover ▶</text>
                <path d="M115,85 h170" stroke="#94a3b8" stroke-dasharray="3,3" marker-end="url(#arrow)"/>
                
                <text x="185" y="80" text-anchor="middle" font-size="10" fill="#94a3b8">◀ Offer</text>
                <path d="M285,95 h-170" stroke="#94a3b8" stroke-dasharray="3,3" marker-end="url(#arrow)"/>

                <text x="185" y="110" text-anchor="middle" font-size="10" fill="#94a3b8">Request ▶</text>
                <path d="M115,105 h170" stroke="#94a3b8" stroke-dasharray="3,3" marker-end="url(#arrow)"/>
                
                <text x="185" y="140" text-anchor="middle" font-size="10" fill="#94a3b8">◀ Acknowledge</text>
                <path d="M285,115 h-170" stroke="#94a3b8" stroke-dasharray="3,3" marker-end="url(#arrow)"/>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "Role of DNS",
            icon: "fa-book",
            description: "The Domain Name System (DNS) translates human-readable domain names (like www.cisco.com) into machine-readable IP addresses (like 192.168.1.1), enabling users to navigate the internet easily.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DNS Resolution Process</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#10b981"/><text x="80" y="105" font-size="10" fill="white" text-anchor="middle">You</text>
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#3b82f6"/><text x="320" y="105" font-size="10" fill="white" text-anchor="middle">DNS Server</text>
                <text x="185" y="60" text-anchor="middle" font-size="10" fill="#e2e8f0">Query: www.cisco.com?</text>
                <path d="M115,90 h170" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="185" y="130" text-anchor="middle" font-size="10" fill="#e2e8f0">Response: 72.163.4.185</text>
                <path d="M285,110 h-170" stroke="#94a3b8" marker-end="url(#arrow)"/>
            </svg>`
        },
    ],
    ntp: [
        {
            title: "NTP Client/Server Mode",
            icon: "fa-clock",
            description: "The Network Time Protocol (NTP) synchronizes clocks on network devices. In a client/server model, an authoritative NTP server provides the time, and NTP clients synchronize their clocks to that server, ensuring consistent time for logging and security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NTP Client/Server Synchronization</title>
                <circle cx="200" cy="50" r="25" fill="#6366f1"/><text x="200" y="55" font-size="10" fill="white">NTP Server</text>
                <text x="200" y="20" font-size="10" fill="#e2e8f0">Stratum 1</text>

                <circle cx="100" cy="150" r="25" fill="#334155"/><text x="100" y="155" font-size="10" fill="white">Client 1</text>
                <circle cx="200" cy="150" r="25" fill="#334155"/><text x="200" y="155" font-size="10" fill="white">Client 2</text>
                <circle cx="300" cy="150" r="25" fill="#334155"/><text x="300" y="155" font-size="10" fill="white">Client 3</text>

                <path d="M200,75 L100,125" stroke="#94a3b8" stroke-dasharray="3,3"/>
                <path d="M200,75 L200,125" stroke="#94a3b8" stroke-dasharray="3,3"/>
                <path d="M200,75 L300,125" stroke="#94a3b8" stroke-dasharray="3,3"/>
                <text x="200" y="110" font-size="10" fill="#94a3b8">Time Sync</text>
            </svg>`
        }
    ],
    nat: [
        {
            title: "Static NAT",
            icon: "fa-arrows-alt-h",
            description: "Static Network Address Translation (NAT) creates a one-to-one mapping between a private internal IP address and a public external IP address. It's often used for servers that need to be accessible from the internet.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Static NAT One-to-One Mapping</title>
                <rect x="50" y="80" width="80" height="40" rx="3" fill="#1e293b" /><text x="90" y="105" font-size="10" text-anchor="middle" fill="white">Server</text>
                <text x="90" y="70" font-size="10" text-anchor="middle" fill="#94a3b8">192.168.1.10</text>

                <circle cx="200" cy="100" r="25" fill="#6366f1" /><text x="200" y="105" text-anchor="middle" fill="white" font-size="12">NAT</text>

                <path d="M130,100 h45" stroke="#94a3b8" marker-end="url(#arrow)" />
                <path d="M225,100 h45" stroke="#94a3b8" marker-end="url(#arrow)" />

                <text x="310" y="105" text-anchor="middle" font-size="10" fill="#e2e8f0">Internet</text>
                <text x="310" y="70" font-size="10" text-anchor="middle" fill="#94a3b8">203.0.113.5</text>
            </svg>`
        },
        {
            title: "Dynamic NAT (Pools)",
            icon: "fa-users",
            description: "Dynamic NAT maps a pool of private IP addresses to a pool of public IP addresses on a first-come, first-served basis. This is more scalable than static NAT for client devices accessing the internet.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Dynamic NAT with a Pool</title>
                <rect x="30" y="80" width="30" height="40" rx="3" fill="#1e293b" /><text x="45" y="105" font-size="10" text-anchor="middle" fill="white">PC1</text>
                <rect x="70" y="80" width="30" height="40" rx="3" fill="#1e293b" /><text x="85" y="105" font-size="10" text-anchor="middle" fill="white">PC2</text>
                <rect x="110" y="80" width="30" height="40" rx="3" fill="#1e293b" /><text x="125" y="105" font-size="10" text-anchor="middle" fill="white">PC3</text>
                
                <circle cx="200" cy="100" r="25" fill="#6366f1" /><text x="200" y="105" text-anchor="middle" fill="white" font-size="12">NAT</text>
                <path d="M140,100 h35" stroke="#94a3b8"/>

                <rect x="270" y="70" width="100" height="60" rx="3" fill="#334155" />
                <text x="320" y="60" font-size="10" text-anchor="middle" fill="#94a3b8">Public IP Pool</text>
                <text x="320" y="90" font-size="10" text-anchor="middle" fill="white">203.0.113.10</text>
                <text x="320" y="110" font-size="10" text-anchor="middle" fill="white">203.0.113.11</text>
            </svg>`
        }
    ],
    dhcpClient: [
        {
            title: "DHCP Client Configuration",
            icon: "fa-cogs",
            description: "A network device can be configured as a DHCP client to automatically obtain an IP address from a DHCP server. This is done on an interface using the `ip address dhcp` command.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DHCP Client Command</title>
                <rect x="20" y="50" width="360" height="100" rx="5" fill="#1e293b" />
                <text x="35" y="70" font-family="monospace" font-size="12" fill="#818cf8">Router(config)#</text>
                <text x="135" y="70" font-family="monospace" font-size="12" fill="white">interface GigabitEthernet0/1</text>
                <text x="35" y="90" font-family="monospace" font-size="12" fill="#818cf8">Router(config-if)#</text>
                <text x="165" y="90" font-family="monospace" font-size="12" fill="white">ip address dhcp</text>
                <text x="35" y="110" font-family="monospace" font-size="12" fill="#818cf8">Router(config-if)#</text>
                <text x="165" y="110" font-family="monospace" font-size="12" fill="white">no shutdown</text>
            </svg>`
        },
        {
            title: "DHCP Relay",
            icon: "fa-exchange-alt",
            description: "A DHCP relay agent (or IP helper) forwards DHCP broadcast messages from clients to a DHCP server on a different subnet, allowing a centralized DHCP server to serve multiple VLANs or subnets.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DHCP Relay Agent</title>
                <rect x="30" y="100" width="50" height="30" rx="3" fill="#10b981"/><text x="55" y="120" font-size="10" fill="white">Client</text>
                <text x="55" y="90" font-size="10" fill="#94a3b8">VLAN 10</text>
                
                <circle cx="150" cy="100" r="30" fill="#6366f1"/><text x="150" y="105" fill="white">Relay</text>
                
                <rect x="270" y="100" width="80" height="30" rx="3" fill="#3b82f6"/><text x="310" y="120" font-size="10" fill="white">DHCP Server</text>
                <text x="310" y="90" font-size="10" fill="#94a3b8">VLAN 20</text>
                
                <path d="M80,110 h40" stroke="#94a3b8" /><text x="110" y="90" font-size="10" fill="#94a3b8">Broadcast</text>
                <path d="M180,110 h90" stroke="#94a3b8" marker-end="url(#arrow)"/><text x="225" y="135" font-size="10" fill="#94a3b8">Unicast</text>
            </svg>`
        }
    ],
    snmp: [
        {
            title: "Function of SNMP",
            icon: "fa-chart-bar",
            description: "The Simple Network Management Protocol (SNMP) is used for network monitoring. An SNMP manager can poll devices (agents) for information (GET requests) or agents can send unsolicited alerts (traps) to the manager about significant events.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SNMP Manager and Agents</title>
                <rect x="150" y="30" width="100" height="40" rx="5" fill="#6366f1" /><text x="200" y="55" text-anchor="middle" fill="white">SNMP Manager</text>
                
                <circle cx="80" cy="150" r="25" fill="#334155" /><text x="80" y="155" fill="white" font-size="10">Agent</text>
                <circle cx="200" cy="150" r="25" fill="#334155" /><text x="200" y="155" fill="white" font-size="10">Agent</text>
                <circle cx="320" cy="150" r="25" fill="#334155" /><text x="320" y="155" fill="white" font-size="10">Agent</text>
                
                <path d="M180,70 L90,125" stroke="#94a3b8" marker-end="url(#arrow)"/><text x="120" y="90" font-size="10" fill="#94a3b8">GET</text>
                <path d="M220,70 L310,125" stroke="#f87171" marker-end="url(#arrow)"/><text x="280" y="90" font-size="10" fill="#f87171">TRAP</text>
            </svg>`
        },
        {
            title: "Syslog Features",
            icon: "fa-file-alt",
            description: "Syslog is a standard for message logging. Messages are categorized by facility (origin, e.g., interface) and severity level (0-Emergency to 7-Debug). Devices can be configured to send logs to a central syslog server for monitoring.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Syslog Message Levels</title>
                <text x="200" y="30" text-anchor="middle" font-size="14" fill="#e2e8f0">Syslog Severity Levels</text>
                <rect x="20" y="50" width="50" height="100" fill="#dc2626"/><text x="45" y="105" fill="white" font-size="10" text-anchor="middle">0-2</text>
                <rect x="70" y="50" width="50" height="100" fill="#f97316"/><text x="95" y="105" fill="white" font-size="10" text-anchor="middle">3</text>
                <rect x="120" y="50" width="50" height="100" fill="#f59e0b"/><text x="145" y="105" fill="white" font-size="10" text-anchor="middle">4</text>
                <rect x="170" y="50" width="50" height="100" fill="#eab308"/><text x="195" y="105" fill="white" font-size="10" text-anchor="middle">5</text>
                <rect x="220" y="50" width="80" height="100" fill="#22c55e"/><text x="260" y="105" fill="white" font-size="10" text-anchor="middle">6</text>
                <rect x="300" y="50" width="80" height="100" fill="#3b82f6"/><text x="340" y="105" fill="white" font-size="10" text-anchor="middle">7</text>
                <text x="45" y="170" font-size="9" text-anchor="middle" fill="#dc2626">Critical</text>
                <text x="210" y="170" font-size="9" text-anchor="middle" fill="#eab308">Notice</text>
                <text x="340" y="170" font-size="9" text-anchor="middle" fill="#3b82f6">Debug</text>
            </svg>`
        }
    ],
    qos: [
        {
            title: "QoS Concepts",
            icon: "fa-traffic-light",
            description: "Quality of Service (QoS) provides preferential treatment to specific types of traffic. This involves classification (identifying traffic), marking (tagging packets), queuing (managing buffers), and policing/shaping (controlling traffic rate).",
            visual: `<svg viewBox="0 0 400 200">
                <title>QoS Pipeline</title>
                <text x="50" y="105" font-size="10">Classify</text>
                <path d="M85,100 h30" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="135" y="105" font-size="10">Mark</text>
                <path d="M160,100 h30" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="210" y="105" font-size="10">Queue</text>
                <path d="M245,100 h30" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="290" y="105" font-size="10">Police</text>
                
                <rect x="30" y="40" width="100" height="40" rx="3" fill="#3b82f6"/><text x="80" y="65" font-size="10" fill="white" text-anchor="middle">Voice</text>
                <rect x="30" y="120" width="100" height="40" rx="3" fill="#334155"/><text x="80" y="145" font-size="10" fill="white" text-anchor="middle">E-mail</text>
            </svg>`
        }
    ],
    // Section metadata
    metadata: {
        sectionNumber: 4,
        title: "IP Services",
        totalTopics: 8,
        subsections: {
            nat: { title: "4.1 NAT", count: 2 },
            ntp: { title: "4.2 NTP", count: 1 },
            dhcpDns: { title: "4.3 DHCP and DNS", count: 2 },
            snmp: { title: "4.4 & 4.5 Monitoring", count: 2 },
            dhcpClient: { title: "4.6 DHCP Configuration", count: 2 },
            qos: { title: "4.7 QoS", count: 1 },
        }
    }
};

// Export for global use
window.SECTION4_DATA = SECTION4_DATA;
