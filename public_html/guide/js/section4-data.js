/**
 * CCNA Section 4: IP Services - Complete Topic Data
 * This data is structured to be used with section4.html
 */

const SECTION4_DATA = {
    nat: [
        {
            title: "Static NAT",
            icon: "fa-arrows-alt-h",
            description: "Static NAT creates permanent one-to-one mappings between private and public IP addresses. Essential for servers requiring consistent external access.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Static NAT Configuration</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#10b981"/>
                <text x="80" y="105" font-size="10" fill="white" text-anchor="middle">Server</text>
                <text x="80" y="70" font-size="9" fill="#94a3b8" text-anchor="middle">192.168.1.10</text>
                <circle cx="200" cy="100" r="25" fill="#6366f1"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="10">NAT</text>
                <path d="M130,100 h45" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <path d="M225,100 h45" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="320" y="105" text-anchor="middle" font-size="10" fill="#e2e8f0">Internet</text>
                <text x="320" y="70" font-size="9" fill="#94a3b8" text-anchor="middle">203.0.113.5</text>
                <rect x="50" y="140" width="300" height="40" rx="3" fill="#1e293b"/>
                <text x="200" y="160" font-family="monospace" font-size="10" fill="#10b981" text-anchor="middle">ip nat inside source static 192.168.1.10 203.0.113.5</text>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "Dynamic NAT Pool",
            icon: "fa-users",
            description: "Dynamic NAT assigns public IPs from a pool on first-come basis. Provides scalable internet access for multiple internal hosts without permanent mappings.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Dynamic NAT Pool</title>
                <rect x="20" y="70" width="30" height="30" rx="3" fill="#334155"/>
                <text x="35" y="90" font-size="8" fill="white" text-anchor="middle">PC1</text>
                <rect x="20" y="110" width="30" height="30" rx="3" fill="#334155"/>
                <text x="35" y="130" font-size="8" fill="white" text-anchor="middle">PC2</text>
                <circle cx="150" cy="100" r="25" fill="#6366f1"/>
                <text x="150" y="105" text-anchor="middle" fill="white" font-size="10">NAT</text>
                <rect x="250" y="60" width="120" height="80" rx="5" fill="#1e293b" stroke="#3b82f6"/>
                <text x="310" y="80" font-size="10" fill="#3b82f6" text-anchor="middle">Public Pool</text>
                <text x="310" y="100" font-size="9" fill="white" text-anchor="middle">203.0.113.10-20</text>
                <text x="310" y="120" font-size="9" fill="white" text-anchor="middle">(11 addresses)</text>
                <path d="M60,100 h65" stroke="#94a3b8"/>
                <path d="M175,100 h75" stroke="#94a3b8" marker-end="url(#arrow)"/>
            </svg>`
        },
        {
            title: "PAT (Overload)",
            icon: "fa-share-alt",
            description: "Port Address Translation allows many private IPs to share one public IP using port numbers. Most common NAT implementation for conserving public addresses.",
            visual: `<svg viewBox="0 0 400 200">
                <title>PAT Port Multiplexing</title>
                <rect x="20" y="40" width="25" height="25" rx="2" fill="#334155"/>
                <text x="32" y="57" font-size="7" fill="white" text-anchor="middle">PC1</text>
                <rect x="20" y="75" width="25" height="25" rx="2" fill="#334155"/>
                <text x="32" y="92" font-size="7" fill="white" text-anchor="middle">PC2</text>
                <rect x="20" y="110" width="25" height="25" rx="2" fill="#334155"/>
                <text x="32" y="127" font-size="7" fill="white" text-anchor="middle">PC3</text>
                <circle cx="150" cy="90" r="20" fill="#ef4444"/>
                <text x="150" y="95" text-anchor="middle" fill="white" font-size="9">PAT</text>
                <rect x="280" y="70" width="80" height="40" rx="3" fill="#059669"/>
                <text x="320" y="95" text-anchor="middle" fill="white" font-size="9">Internet</text>
                <text x="320" y="50" font-size="8" fill="#94a3b8" text-anchor="middle">203.0.113.1</text>
                <path d="M50,52 Q100,52 130,75" stroke="#10b981" fill="none"/>
                <text x="90" y="45" font-size="7" fill="#10b981">:1024</text>
                <path d="M50,87 h80" stroke="#3b82f6"/>
                <text x="90" y="82" font-size="7" fill="#3b82f6">:1025</text>
                <path d="M50,122 Q100,122 130,105" stroke="#f59e0b" fill="none"/>
                <text x="90" y="135" font-size="7" fill="#f59e0b">:1026</text>
                <path d="M170,90 h110" stroke="#94a3b8" marker-end="url(#arrow)"/>
            </svg>`
        },
        {
            title: "NAT Troubleshooting",
            icon: "fa-bug",
            description: "Debug NAT translations with show commands, translation tables, and common issue resolution. Essential for maintaining reliable NAT operations.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NAT Troubleshooting Process</title>
                <rect x="50" y="50" width="80" height="30" rx="3" fill="#6366f1"/>
                <text x="90" y="70" text-anchor="middle" fill="white" font-size="9">NAT Router</text>
                <rect x="50" y="120" width="300" height="60" rx="3" fill="#1e293b"/>
                <text x="200" y="140" text-anchor="middle" font-size="8" fill="#10b981">show ip nat translations</text>
                <text x="200" y="155" text-anchor="middle" font-size="8" fill="#3b82f6">show ip nat statistics</text>
                <text x="200" y="170" text-anchor="middle" font-size="8" fill="#ef4444">debug ip nat</text>
                <circle cx="280" cy="65" r="8" fill="#ef4444"/>
                <text x="280" y="70" text-anchor="middle" fill="white" font-size="6">!</text>
                <text x="280" y="40" font-size="8" fill="#ef4444" text-anchor="middle">Issue</text>
            </svg>`
        },
        {
            title: "NAT Security & Port Forwarding",
            icon: "fa-shield-alt",
            description: "Configure port forwarding for external access to internal services. Understand NAT security implications and access control considerations.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NAT Port Forwarding</title>
                <rect x="300" y="50" width="60" height="30" rx="3" fill="#059669"/>
                <text x="330" y="70" text-anchor="middle" fill="white" font-size="9">Internet</text>
                <circle cx="200" cy="100" r="25" fill="#6366f1"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="9">NAT</text>
                <rect x="50" y="80" width="50" height="30" rx="3" fill="#334155"/>
                <text x="75" y="100" text-anchor="middle" fill="white" font-size="8">Web Server</text>
                <text x="75" y="65" font-size="8" fill="#94a3b8" text-anchor="middle">:80</text>
                <path d="M275,65 L225,85" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="250" y="70" font-size="8" fill="#ef4444">:8080</text>
                <path d="M175,100 h-75" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="135" y="95" font-size="8" fill="#10b981">:80</text>
                <rect x="60" y="140" width="280" height="20" rx="2" fill="#1e293b"/>
                <text x="200" y="155" text-anchor="middle" font-size="8" fill="#f59e0b">ip nat inside source static tcp 192.168.1.10 80 8080</text>
            </svg>`
        }
    ],
    ntp: [
        {
            title: "NTP Fundamentals",
            icon: "fa-clock",
            description: "Network Time Protocol provides accurate time synchronization using stratum hierarchy. Understanding NTP architecture is essential for network reliability and security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NTP Stratum Hierarchy</title>
                <circle cx="200" cy="30" r="15" fill="#f59e0b"/>
                <text x="200" y="35" font-size="8" fill="white" text-anchor="middle">Stratum 0</text>
                <text x="200" y="55" font-size="8" fill="#f59e0b" text-anchor="middle">Atomic Clock</text>
                <circle cx="150" cy="90" r="12" fill="#10b981"/>
                <text x="150" y="95" font-size="7" fill="white" text-anchor="middle">S1</text>
                <circle cx="250" cy="90" r="12" fill="#10b981"/>
                <text x="250" y="95" font-size="7" fill="white" text-anchor="middle">S1</text>
                <circle cx="100" cy="140" r="10" fill="#3b82f6"/>
                <text x="100" y="145" font-size="6" fill="white" text-anchor="middle">S2</text>
                <circle cx="200" cy="140" r="10" fill="#3b82f6"/>
                <text x="200" y="145" font-size="6" fill="white" text-anchor="middle">S2</text>
                <circle cx="300" cy="140" r="10" fill="#3b82f6"/>
                <text x="300" y="145" font-size="6" fill="white" text-anchor="middle">S2</text>
                <path d="M200,45 L150,78" stroke="#94a3b8"/>
                <path d="M200,45 L250,78" stroke="#94a3b8"/>
                <path d="M150,102 L100,128" stroke="#94a3b8"/>
                <path d="M150,102 L200,128" stroke="#94a3b8"/>
                <path d="M250,102 L300,128" stroke="#94a3b8"/>
                <text x="200" y="175" font-size="9" fill="#94a3b8" text-anchor="middle">Higher Stratum = Lower Accuracy</text>
            </svg>`
        },
        {
            title: "NTP Client Configuration",
            icon: "fa-download",
            description: "Configure network devices as NTP clients to synchronize with authoritative time servers. Includes server selection, authentication, and client verification.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NTP Client Configuration</title>
                <circle cx="320" cy="50" r="20" fill="#f59e0b"/>
                <text x="320" y="55" font-size="9" fill="white" text-anchor="middle">NTP</text>
                <text x="320" y="25" font-size="8" fill="#f59e0b" text-anchor="middle">Server</text>
                <rect x="50" y="120" width="80" height="50" rx="5" fill="#334155"/>
                <text x="90" y="145" font-size="10" fill="white" text-anchor="middle">Router</text>
                <text x="90" y="160" font-size="8" fill="#94a3b8" text-anchor="middle">(Client)</text>
                <path d="M130,145 Q225,100 300,50" stroke="#10b981" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
                <text x="215" y="90" font-size="8" fill="#10b981" text-anchor="middle">Time Sync</text>
                <rect x="30" y="180" width="200" height="15" rx="3" fill="#1e293b"/>
                <text x="130" y="190" font-family="monospace" font-size="7" fill="#10b981" text-anchor="middle">ntp server pool.ntp.org prefer</text>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker></defs>
            </svg>`
        },
        {
            title: "NTP Server & Master",
            icon: "fa-upload",
            description: "Configure routers as NTP servers to provide time services to local networks. Includes master mode configuration and access control for security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NTP Server Configuration</title>
                <circle cx="200" cy="50" r="25" fill="#f59e0b"/>
                <text x="200" y="55" font-size="10" fill="white" text-anchor="middle">Master</text>
                <text x="200" y="25" font-size="8" fill="#f59e0b" text-anchor="middle">Stratum 3</text>
                <rect x="60" y="120" width="40" height="30" rx="3" fill="#334155"/>
                <text x="80" y="140" font-size="8" fill="white" text-anchor="middle">R1</text>
                <rect x="180" y="120" width="40" height="30" rx="3" fill="#334155"/>
                <text x="200" y="140" font-size="8" fill="white" text-anchor="middle">R2</text>
                <rect x="300" y="120" width="40" height="30" rx="3" fill="#334155"/>
                <text x="320" y="140" font-size="8" fill="white" text-anchor="middle">R3</text>
                <path d="M200,75 L80,120" stroke="#10b981" stroke-dasharray="2,2"/>
                <path d="M200,75 L200,120" stroke="#10b981" stroke-dasharray="2,2"/>
                <path d="M200,75 L320,120" stroke="#10b981" stroke-dasharray="2,2"/>
                <rect x="50" y="170" width="300" height="15" rx="3" fill="#1e293b"/>
                <text x="200" y="180" font-family="monospace" font-size="7" fill="#f59e0b" text-anchor="middle">ntp master 3 | ntp access-group serve-only CLIENTS</text>
            </svg>`
        },
        {
            title: "NTP Troubleshooting & Security",
            icon: "fa-shield-alt",
            description: "Debug NTP synchronization issues and implement security measures. Includes authentication, access control, and systematic troubleshooting procedures.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NTP Security & Troubleshooting</title>
                <rect x="50" y="30" width="120" height="80" rx="5" fill="#1e293b" stroke="#ef4444"/>
                <text x="110" y="50" font-size="9" fill="#ef4444" text-anchor="middle">Secured NTP</text>
                <text x="110" y="70" font-size="8" fill="white" text-anchor="middle">Authentication</text>
                <text x="110" y="85" font-size="8" fill="white" text-anchor="middle">Access Control</text>
                <text x="110" y="100" font-size="8" fill="white" text-anchor="middle">MD5 Keys</text>
                <rect x="230" y="30" width="120" height="80" rx="5" fill="#1e293b" stroke="#f59e0b"/>
                <text x="290" y="50" font-size="9" fill="#f59e0b" text-anchor="middle">Debug Tools</text>
                <text x="290" y="70" font-size="8" fill="white" text-anchor="middle">show ntp status</text>
                <text x="290" y="85" font-size="8" fill="white" text-anchor="middle">show ntp assoc</text>
                <text x="290" y="100" font-size="8" fill="white" text-anchor="middle">debug ntp</text>
                <path d="M170,70 L230,70" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <rect x="50" y="130" width="300" height="50" rx="5" fill="#2d3748"/>
                <text x="200" y="150" font-size="8" fill="#10b981" text-anchor="middle">Systematic Troubleshooting Process</text>
                <text x="200" y="165" font-size="7" fill="#94a3b8" text-anchor="middle">1. Check connectivity → 2. Verify config → 3. Debug sync → 4. Security</text>
            </svg>`
        }
    ],
    dhcpDns: [
        {
            title: "DHCP Server Configuration",
            icon: "fa-server",
            description: "DHCP server automates IP assignment with pools, excluded addresses, and lease management. Configure DORA process for reliable IP distribution.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DHCP Server Configuration</title>
                <rect x="20" y="40" width="360" height="120" rx="5" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
                <text x="30" y="60" font-family="monospace" font-size="11" fill="#DCDCAA">ip dhcp pool LAN_POOL</text>
                <text x="30" y="80" font-family="monospace" font-size="11" fill="#9CDCFE">network 192.168.1.0 /24</text>
                <text x="30" y="100" font-family="monospace" font-size="11" fill="#9CDCFE">default-router 192.168.1.1</text>
                <text x="30" y="120" font-family="monospace" font-size="11" fill="#9CDCFE">dns-server 8.8.8.8</text>
                <text x="30" y="140" font-family="monospace" font-size="11" fill="#C586C0">lease 7</text>
                <circle cx="350" cy="100" r="15" fill="#10b981"/>
                <text x="350" y="105" font-size="10" fill="white" text-anchor="middle">✓</text>
                <text x="200" y="180" text-anchor="middle" font-size="9" fill="#94a3b8">Pool-based IP Assignment</text>
            </svg>`
        },
        {
            title: "DHCP Options & Reservations",
            icon: "fa-cogs",
            description: "Advanced DHCP features including static reservations, custom options (TFTP, domain), and specialized configurations for IP phones and network services.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DHCP Options Configuration</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b"/>
                <text x="30" y="50" font-family="monospace" font-size="10" fill="#6A9955"># Static Reservation</text>
                <text x="30" y="70" font-family="monospace" font-size="10" fill="#DCDCAA">host SERVER reserved-only</text>
                <text x="30" y="85" font-family="monospace" font-size="10" fill="#9CDCFE">hardware-address 1234.5678.9abc</text>
                <text x="30" y="100" font-family="monospace" font-size="10" fill="#9CDCFE">client-ip 192.168.1.100</text>
                
                <text x="30" y="125" font-family="monospace" font-size="10" fill="#6A9955"># Custom Options</text>
                <text x="30" y="140" font-family="monospace" font-size="10" fill="#DCDCAA">option 150 ip 192.168.1.200</text>
                <text x="30" y="155" font-family="monospace" font-size="10" fill="#C586C0">domain-name cisco.local</text>
                
                <circle cx="350" cy="100" r="15" fill="#f59e0b"/>
                <text x="350" y="105" font-size="10" fill="white" text-anchor="middle">150</text>
                <text x="200" y="185" text-anchor="middle" font-size="9" fill="#94a3b8">TFTP Server for IP Phones</text>
            </svg>`
        },
        {
            title: "DNS Configuration",
            icon: "fa-globe",
            description: "Configure DNS client settings including name servers, domain names, and local host entries. Essential for name resolution and network connectivity.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DNS Client Configuration</title>
                <rect x="20" y="40" width="360" height="120" rx="5" fill="#1e293b"/>
                <text x="30" y="60" font-family="monospace" font-size="11" fill="#DCDCAA">ip domain-lookup</text>
                <text x="30" y="80" font-family="monospace" font-size="11" fill="#9CDCFE">ip name-server 8.8.8.8</text>
                <text x="30" y="100" font-family="monospace" font-size="11" fill="#9CDCFE">ip name-server 8.8.4.4</text>
                <text x="30" y="120" font-family="monospace" font-size="11" fill="#C586C0">ip domain-name cisco.local</text>
                <text x="30" y="140" font-family="monospace" font-size="11" fill="#CE9178">ip host router1 192.168.1.1</text>
                
                <circle cx="350" cy="100" r="15" fill="#6366f1"/>
                <text x="350" y="105" font-size="8" fill="white" text-anchor="middle">DNS</text>
                <text x="200" y="180" text-anchor="middle" font-size="9" fill="#94a3b8">Domain Name Resolution Setup</text>
            </svg>`
        },
        {
            title: "DNS Records & Resolution",
            icon: "fa-sitemap",
            description: "Understand DNS record types (A, AAAA, CNAME, MX, PTR) and the hierarchical resolution process from root servers to authoritative name servers.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DNS Record Types</title>
                <rect x="30" y="30" width="340" height="140" rx="5" fill="#1e293b"/>
                
                <text x="50" y="55" font-family="monospace" font-size="11" fill="#10b981">A</text>
                <text x="80" y="55" font-size="10" fill="#e2e8f0">www.cisco.com → 72.163.4.185</text>
                
                <text x="50" y="75" font-family="monospace" font-size="11" fill="#3b82f6">AAAA</text>
                <text x="80" y="75" font-size="10" fill="#e2e8f0">IPv6 address mapping</text>
                
                <text x="50" y="95" font-family="monospace" font-size="11" fill="#6366f1">CNAME</text>
                <text x="80" y="95" font-size="10" fill="#e2e8f0">alias.cisco.com → www.cisco.com</text>
                
                <text x="50" y="115" font-family="monospace" font-size="11" fill="#f59e0b">MX</text>
                <text x="80" y="115" font-size="10" fill="#e2e8f0">Mail server: 10 mail.cisco.com</text>
                
                <text x="50" y="135" font-family="monospace" font-size="11" fill="#ef4444">PTR</text>
                <text x="80" y="135" font-size="10" fill="#e2e8f0">Reverse: 185.4.163.72.in-addr.arpa</text>
                
                <text x="50" y="155" font-family="monospace" font-size="11" fill="#8b5cf6">NS</text>
                <text x="80" y="155" font-size="10" fill="#e2e8f0">Name server: ns1.cisco.com</text>
                
                <text x="200" y="185" text-anchor="middle" font-size="9" fill="#94a3b8">Hierarchical Name Resolution</text>
            </svg>`
        },
        {
            title: "DNS Troubleshooting",
            icon: "fa-search",
            description: "Systematic DNS troubleshooting using debug commands, nslookup, and verification tools. Resolve common DNS issues and connectivity problems.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DNS Troubleshooting Tools</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b"/>
                
                <text x="30" y="50" font-family="monospace" font-size="10" fill="#DCDCAA">show hosts</text>
                <text x="150" y="50" font-size="9" fill="#94a3b8">Display cached entries</text>
                
                <text x="30" y="70" font-family="monospace" font-size="10" fill="#DCDCAA">nslookup cisco.com</text>
                <text x="150" y="70" font-size="9" fill="#94a3b8">Query specific domain</text>
                
                <text x="30" y="90" font-family="monospace" font-size="10" fill="#DCDCAA">debug ip domain</text>
                <text x="150" y="90" font-size="9" fill="#94a3b8">DNS query debugging</text>
                
                <text x="30" y="110" font-family="monospace" font-size="10" fill="#DCDCAA">ping www.cisco.com</text>
                <text x="150" y="110" font-size="9" fill="#94a3b8">Test resolution</text>
                
                <text x="30" y="130" font-family="monospace" font-size="10" fill="#DCDCAA">show ip route</text>
                <text x="150" y="130" font-size="9" fill="#94a3b8">Verify connectivity</text>
                
                <rect x="250" y="80" width="120" height="60" rx="3" fill="#ef4444" fill-opacity="0.2"/>
                <text x="310" y="100" font-size="9" fill="#ef4444" text-anchor="middle">Common Issues:</text>
                <text x="310" y="115" font-size="8" fill="#ef4444" text-anchor="middle">Wrong DNS server</text>
                <text x="310" y="125" font-size="8" fill="#ef4444" text-anchor="middle">Connectivity loss</text>
                
                <text x="200" y="185" text-anchor="middle" font-size="9" fill="#94a3b8">Systematic DNS Problem Resolution</text>
            </svg>`
        }
    ],
    snmp: [
        {
            title: "SNMP Fundamentals",
            icon: "fa-network-wired",
            description: "SNMP uses a manager-agent model for network monitoring. Understand the three versions (v1, v2c, v3) and core operations (GET, SET, TRAP) for effective network management.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SNMP Manager-Agent Model</title>
                <rect x="150" y="30" width="100" height="30" rx="5" fill="#3b82f6"/>
                <text x="200" y="50" text-anchor="middle" fill="white" font-size="10">SNMP Manager</text>
                <circle cx="80" cy="150" r="20" fill="#334155"/>
                <text x="80" y="155" fill="white" font-size="8" text-anchor="middle">Agent</text>
                <circle cx="200" cy="150" r="20" fill="#334155"/>
                <text x="200" y="155" fill="white" font-size="8" text-anchor="middle">Agent</text>
                <circle cx="320" cy="150" r="20" fill="#334155"/>
                <text x="320" y="155" fill="white" font-size="8" text-anchor="middle">Agent</text>
                <path d="M180,60 L90,130" stroke="#10b981" marker-end="url(#arrow)"/>
                <text x="120" y="90" font-size="9" fill="#10b981">GET</text>
                <path d="M220,60 L310,130" stroke="#ef4444" marker-end="url(#arrow)"/>
                <text x="280" y="90" font-size="9" fill="#ef4444">TRAP</text>
                <text x="50" y="190" font-size="8" fill="#94a3b8">v1/v2c/v3</text>
            </svg>`
        },
        {
            title: "SNMP Configuration",
            icon: "fa-cogs",
            description: "Configure SNMP agents with community strings, SNMPv3 security, and manager relationships. Set up read-only/read-write access and secure authentication.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SNMP Configuration</title>
                <rect x="50" y="50" width="80" height="40" rx="5" fill="#2563eb"/>
                <text x="90" y="75" text-anchor="middle" fill="white" font-size="10">Router</text>
                <rect x="270" y="50" width="80" height="40" rx="5" fill="#059669"/>
                <text x="310" y="75" text-anchor="middle" fill="white" font-size="10">Manager</text>
                <path d="M130,70 L270,70" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="200" y="60" text-anchor="middle" font-size="9" fill="#f59e0b">SNMPv3</text>
                <rect x="60" y="120" width="60" height="15" rx="2" fill="#1e293b"/>
                <text x="90" y="132" text-anchor="middle" font-size="8" fill="#10b981">community</text>
                <rect x="280" y="120" width="60" height="15" rx="2" fill="#1e293b"/>
                <text x="310" y="132" text-anchor="middle" font-size="8" fill="#ef4444">auth+priv</text>
            </svg>`
        },
        {
            title: "SNMP MIB & OIDs",
            icon: "fa-sitemap",
            description: "Explore the Management Information Base (MIB) tree structure and Object Identifiers (OIDs). Learn to navigate the hierarchical SNMP namespace.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SNMP MIB Tree Structure</title>
                <circle cx="200" cy="40" r="15" fill="#6366f1"/>
                <text x="200" y="45" text-anchor="middle" fill="white" font-size="8">root</text>
                <circle cx="120" cy="90" r="12" fill="#3b82f6"/>
                <text x="120" y="95" text-anchor="middle" fill="white" font-size="7">iso</text>
                <circle cx="280" cy="90" r="12" fill="#3b82f6"/>
                <text x="280" y="95" text-anchor="middle" fill="white" font-size="7">itu</text>
                <circle cx="120" cy="140" r="10" fill="#10b981"/>
                <text x="120" y="145" text-anchor="middle" fill="white" font-size="6">1.3</text>
                <circle cx="80" cy="170" r="8" fill="#f59e0b"/>
                <text x="80" y="175" text-anchor="middle" fill="white" font-size="6">6</text>
                <circle cx="160" cy="170" r="8" fill="#f59e0b"/>
                <text x="160" y="175" text-anchor="middle" fill="white" font-size="6">1</text>
                <path d="M185,50 L130,80" stroke="#94a3b8" stroke-width="1"/>
                <path d="M215,50 L270,80" stroke="#94a3b8" stroke-width="1"/>
                <path d="M120,102 L120,128" stroke="#94a3b8" stroke-width="1"/>
                <path d="M110,150 L90,162" stroke="#94a3b8" stroke-width="1"/>
                <path d="M130,150 L150,162" stroke="#94a3b8" stroke-width="1"/>
            </svg>`
        },
        {
            title: "SNMP Monitoring & Traps",
            icon: "fa-bell",
            description: "Configure SNMP traps and notifications for proactive network monitoring. Set up event-driven alerts and implement monitoring best practices.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SNMP Traps and Monitoring</title>
                <rect x="50" y="80" width="60" height="30" rx="3" fill="#334155"/>
                <text x="80" y="100" text-anchor="middle" fill="white" font-size="9">Device</text>
                <rect x="290" y="50" width="80" height="30" rx="3" fill="#059669"/>
                <text x="330" y="70" text-anchor="middle" fill="white" font-size="9">NMS</text>
                <path d="M110,95 L290,65" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="180" y="75" text-anchor="middle" font-size="9" fill="#ef4444">TRAP</text>
                <text x="50" y="130" font-size="8" fill="#f59e0b">Interface Down</text>
                <text x="50" y="145" font-size="8" fill="#ef4444">Config Change</text>
                <text x="50" y="160" font-size="8" fill="#3b82f6">Threshold</text>
                <circle cx="80" cy="50" r="8" fill="#ef4444"/>
                <text x="80" y="55" text-anchor="middle" fill="white" font-size="7">!</text>
            </svg>`
        }
    ],
    syslog: [
        {
            title: "Syslog Fundamentals",
            icon: "fa-layer-group",
            description: "Syslog message logging standard with severity levels (0=Emergency to 7=Debug) and facility codes. Foundation for network monitoring and troubleshooting.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Syslog Severity Levels</title>
                <text x="200" y="25" text-anchor="middle" font-size="12" fill="#e2e8f0">Syslog Severity Levels</text>
                <rect x="30" y="50" width="40" height="60" fill="#dc2626"/>
                <text x="50" y="85" fill="white" font-size="9" text-anchor="middle">0-2</text>
                <text x="50" y="125" fill="#dc2626" font-size="8" text-anchor="middle">Emergency</text>
                <rect x="80" y="50" width="40" height="60" fill="#f97316"/>
                <text x="100" y="85" fill="white" font-size="9" text-anchor="middle">3</text>
                <rect x="130" y="50" width="40" height="60" fill="#f59e0b"/>
                <text x="150" y="85" fill="white" font-size="9" text-anchor="middle">4</text>
                <rect x="180" y="50" width="40" height="60" fill="#eab308"/>
                <text x="200" y="85" fill="white" font-size="9" text-anchor="middle">5</text>
                <rect x="230" y="50" width="40" height="60" fill="#22c55e"/>
                <text x="250" y="85" fill="white" font-size="9" text-anchor="middle">6</text>
                <rect x="280" y="50" width="40" height="60" fill="#3b82f6"/>
                <text x="300" y="85" fill="white" font-size="9" text-anchor="middle">7</text>
                <text x="300" y="125" fill="#3b82f6" font-size="8" text-anchor="middle">Debug</text>
                <text x="50" y="150" fill="#6b7280" font-size="8" text-anchor="middle">Critical</text>
                <text x="200" y="150" fill="#6b7280" font-size="8" text-anchor="middle">Notice</text>
            </svg>`
        },
        {
            title: "Configuration & Local Logging",
            icon: "fa-cogs",
            description: "Configure local syslog destinations including console, buffer, monitor, and file. Control message buffering, timestamps, and local storage options.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Local Syslog Configuration</title>
                <circle cx="200" cy="100" r="30" fill="#6366f1"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="10">Router</text>
                <rect x="50" y="40" width="60" height="30" rx="3" fill="#10b981"/>
                <text x="80" y="60" font-size="9" fill="white" text-anchor="middle">Console</text>
                <rect x="50" y="85" width="60" height="30" rx="3" fill="#3b82f6"/>
                <text x="80" y="105" font-size="9" fill="white" text-anchor="middle">Buffer</text>
                <rect x="50" y="130" width="60" height="30" rx="3" fill="#f59e0b"/>
                <text x="80" y="150" font-size="9" fill="white" text-anchor="middle">Monitor</text>
                <rect x="290" y="85" width="60" height="30" rx="3" fill="#ef4444"/>
                <text x="320" y="105" font-size="9" fill="white" text-anchor="middle">File</text>
                <path d="M120,55 L170,90" stroke="#94a3b8" stroke-width="2"/>
                <path d="M120,100 L170,100" stroke="#94a3b8" stroke-width="2"/>
                <path d="M120,145 L170,110" stroke="#94a3b8" stroke-width="2"/>
                <path d="M230,100 L280,100" stroke="#94a3b8" stroke-width="2"/>
            </svg>`
        },
        {
            title: "Remote Logging & Servers",
            icon: "fa-server",
            description: "Configure centralized syslog servers for network-wide log collection. Set source interfaces, facility codes, and remote server parameters for scalable monitoring.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Remote Syslog Architecture</title>
                <circle cx="80" cy="80" r="20" fill="#334155"/>
                <text x="80" y="85" text-anchor="middle" fill="white" font-size="8">R1</text>
                <circle cx="80" cy="120" r="20" fill="#334155"/>
                <text x="80" y="125" text-anchor="middle" fill="white" font-size="8">R2</text>
                <rect x="30" y="160" width="40" height="25" rx="3" fill="#1e293b"/>
                <text x="50" y="175" text-anchor="middle" fill="white" font-size="8">SW1</text>
                <rect x="280" y="80" width="80" height="60" rx="5" fill="#6366f1"/>
                <text x="320" y="105" text-anchor="middle" fill="white" font-size="10">Syslog</text>
                <text x="320" y="120" text-anchor="middle" fill="white" font-size="10">Server</text>
                <text x="320" y="140" text-anchor="middle" fill="#94a3b8" font-size="8">192.168.1.100</text>
                <path d="M100,80 L280,100" stroke="#10b981" stroke-width="2"/>
                <path d="M100,120 L280,110" stroke="#10b981" stroke-width="2"/>
                <path d="M70,160 L280,120" stroke="#10b981" stroke-width="2"/>
                <text x="190" y="60" text-anchor="middle" fill="#10b981" font-size="9">UDP 514</text>
            </svg>`
        },
        {
            title: "Troubleshooting & Management",
            icon: "fa-search",
            description: "Debug and analyze syslog messages with show commands, filtering techniques, and log management. Essential skills for network monitoring and problem resolution.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Syslog Analysis & Troubleshooting</title>
                <rect x="50" y="40" width="300" height="120" rx="5" fill="#1e293b" stroke="#64748b"/>
                <text x="200" y="60" text-anchor="middle" fill="#e2e8f0" font-size="11">Log Analysis Console</text>
                <rect x="70" y="75" width="260" height="15" fill="#dc2626"/>
                <text x="75" y="87" fill="white" font-size="8">%LINK-3-UPDOWN: Interface Gi0/1, changed state to down</text>
                <rect x="70" y="95" width="260" height="15" fill="#f59e0b"/>
                <text x="75" y="107" fill="white" font-size="8">%LINEPROTO-5-UPDOWN: Line protocol on Interface Gi0/1</text>
                <rect x="70" y="115" width="260" height="15" fill="#22c55e"/>
                <text x="75" y="127" fill="white" font-size="8">%SYS-6-LOGGINGHOST_STARTSTOP: Logging to host started</text>
                <rect x="70" y="135" width="260" height="15" fill="#3b82f6"/>
                <text x="75" y="147" fill="white" font-size="8">%SYS-7-DEBUG: Debugging enabled for interface events</text>
                <circle cx="320" cy="170" r="15" fill="#6366f1"/>
                <text x="320" y="175" text-anchor="middle" fill="white" font-size="8">🔍</text>
            </svg>`
        }
    ],
    dhcpClient: [
        {
            title: "DHCP Client Configuration",
            icon: "fa-laptop",
            description: "Configure network devices as DHCP clients to automatically obtain IP configuration. Essential for dynamic networks and plug-and-play operation.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DHCP Client Interface</title>
                <rect x="50" y="50" width="300" height="100" rx="5" fill="#1e293b"/>
                <text x="60" y="75" font-family="monospace" font-size="12" fill="#818cf8">Router(config-if)#</text>
                <text x="60" y="95" font-family="monospace" font-size="12" fill="#DCDCAA">ip address dhcp</text>
                <text x="60" y="115" font-family="monospace" font-size="12" fill="#C586C0">no shutdown</text>
                <rect x="100" y="160" width="200" height="25" rx="3" fill="#10b981"/>
                <text x="200" y="177" font-size="10" fill="white" text-anchor="middle">Auto IP: 192.168.1.50/24</text>
                <path d="M200,150 L200,160" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
            </svg>`
        },
        {
            title: "DHCP Relay (IP Helper)",
            icon: "fa-exchange-alt",
            description: "DHCP relay forwards broadcast requests across subnets to centralized DHCP server. Essential for multi-VLAN environments with single DHCP server.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DHCP Relay Operation</title>
                <rect x="30" y="80" width="50" height="30" rx="3" fill="#10b981"/>
                <text x="55" y="100" font-size="9" fill="white" text-anchor="middle">Client</text>
                <text x="55" y="70" font-size="8" fill="#94a3b8" text-anchor="middle">VLAN 10</text>
                
                <circle cx="150" cy="95" r="25" fill="#6366f1"/>
                <text x="150" y="100" font-size="9" fill="white" text-anchor="middle">Relay</text>
                
                <rect x="270" y="80" width="80" height="30" rx="3" fill="#3b82f6"/>
                <text x="310" y="100" font-size="9" fill="white" text-anchor="middle">DHCP Server</text>
                <text x="310" y="70" font-size="8" fill="#94a3b8" text-anchor="middle">VLAN 20</text>
                
                <path d="M80,90 h45" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <text x="102" y="85" font-size="8" fill="#94a3b8">Broadcast</text>
                <path d="M175,95 h95" stroke="#10b981" marker-end="url(#arrow)"/>
                <text x="222" y="85" font-size="8" fill="#10b981">Unicast</text>
                
                <rect x="50" y="140" width="300" height="20" rx="3" fill="#2d2d2d"/>
                <text x="200" y="155" font-family="monospace" font-size="9" fill="#DCDCAA" text-anchor="middle">ip helper-address 192.168.20.10</text>
            </svg>`
        }
    ],
    qos: [
        {
            title: "QoS PHB",
            icon: "fa-traffic-light",
            description: "Per-Hop Behavior (PHB) for QoS includes classification (identify traffic), marking (tag packets), queuing (buffer management), congestion management, policing (rate limiting), and shaping (smooth traffic).",
            visual: `<svg viewBox="0 0 400 200">
                <title>QoS PHB Pipeline</title>
                <rect x="20" y="80" width="50" height="40" rx="3" fill="#3b82f6"/>
                <text x="45" y="105" font-size="9" fill="white" text-anchor="middle">Classify</text>
                <path d="M75,100 h25" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <rect x="105" y="80" width="40" height="40" rx="3" fill="#6366f1"/>
                <text x="125" y="105" font-size="9" fill="white" text-anchor="middle">Mark</text>
                <path d="M150,100 h25" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <rect x="180" y="80" width="40" height="40" rx="3" fill="#8b5cf6"/>
                <text x="200" y="105" font-size="9" fill="white" text-anchor="middle">Queue</text>
                <path d="M225,100 h25" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <rect x="255" y="80" width="40" height="40" rx="3" fill="#10b981"/>
                <text x="275" y="105" font-size="9" fill="white" text-anchor="middle">Police</text>
                <path d="M300,100 h25" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <rect x="330" y="80" width="40" height="40" rx="3" fill="#f59e0b"/>
                <text x="350" y="105" font-size="9" fill="white" text-anchor="middle">Shape</text>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "Traffic Classification & Marking",
            icon: "fa-tags",
            description: "QoS classification identifies traffic types and marks packets with priority values. Uses DSCP, IP Precedence, and Class of Service (CoS) markings for prioritization.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Traffic Classification and Marking</title>
                <rect x="30" y="40" width="60" height="30" rx="3" fill="#334155"/>
                <text x="60" y="60" font-size="9" fill="white" text-anchor="middle">Voice</text>
                <rect x="30" y="80" width="60" height="30" rx="3" fill="#334155"/>
                <text x="60" y="100" font-size="9" fill="white" text-anchor="middle">Video</text>
                <rect x="30" y="120" width="60" height="30" rx="3" fill="#334155"/>
                <text x="60" y="140" font-size="9" fill="white" text-anchor="middle">Data</text>
                <circle cx="180" cy="100" r="25" fill="#6366f1"/>
                <text x="180" y="105" text-anchor="middle" fill="white" font-size="10">QoS</text>
                <path d="M95,55 Q130,55 155,85" stroke="#dc2626" stroke-width="2" fill="none"/>
                <text x="115" y="45" font-size="8" fill="#dc2626">EF(46)</text>
                <path d="M95,95 h60" stroke="#f97316" stroke-width="2"/>
                <text x="115" y="88" font-size="8" fill="#f97316">AF41(34)</text>
                <path d="M95,135 Q130,135 155,115" stroke="#22c55e" stroke-width="2" fill="none"/>
                <text x="115" y="150" font-size="8" fill="#22c55e">BE(0)</text>
                <rect x="280" y="70" width="80" height="60" rx="5" fill="#1e293b"/>
                <text x="320" y="95" font-size="10" fill="#e2e8f0" text-anchor="middle">Network</text>
                <text x="320" y="110" font-size="10" fill="#e2e8f0" text-anchor="middle">Core</text>
                <path d="M205,100 h75" stroke="#94a3b8" marker-end="url(#arrow)"/>
            </svg>`
        },
        {
            title: "Congestion Management",
            icon: "fa-layer-group",
            description: "Queuing mechanisms that determine how packets are scheduled for transmission during congestion. Includes FIFO, Priority Queuing, and Class-Based Weighted Fair Queuing (CBWFQ).",
            visual: `<svg viewBox="0 0 400 200">
                <title>Congestion Management Queuing</title>
                <rect x="50" y="30" width="80" height="25" rx="3" fill="#dc2626"/>
                <text x="90" y="47" font-size="9" fill="white" text-anchor="middle">Priority Queue</text>
                <rect x="50" y="65" width="80" height="25" rx="3" fill="#f97316"/>
                <text x="90" y="82" font-size="9" fill="white" text-anchor="middle">Class 1 (30%)</text>
                <rect x="50" y="100" width="80" height="25" rx="3" fill="#eab308"/>
                <text x="90" y="117" font-size="9" fill="white" text-anchor="middle">Class 2 (20%)</text>
                <rect x="50" y="135" width="80" height="25" rx="3" fill="#22c55e"/>
                <text x="90" y="152" font-size="9" fill="white" text-anchor="middle">Default (50%)</text>
                <circle cx="220" cy="100" r="20" fill="#6366f1"/>
                <text x="220" y="105" text-anchor="middle" fill="white" font-size="9">WFQ</text>
                <path d="M135,42 Q170,42 200,85" stroke="#dc2626" stroke-width="3" fill="none"/>
                <path d="M135,77 Q170,77 200,90" stroke="#f97316" stroke-width="2" fill="none"/>
                <path d="M135,112 h65" stroke="#eab308" stroke-width="2"/>
                <path d="M135,147 Q170,147 200,115" stroke="#22c55e" stroke-width="2" fill="none"/>
                <rect x="280" y="80" width="80" height="40" rx="5" fill="#10b981"/>
                <text x="320" y="105" font-size="10" fill="white" text-anchor="middle">Interface</text>
                <path d="M240,100 h40" stroke="#94a3b8" marker-end="url(#arrow)"/>
            </svg>`
        },
        {
            title: "Traffic Policing",
            icon: "fa-tachometer-alt",
            description: "Rate limiting mechanism that drops or re-marks packets exceeding configured rates. Uses token bucket algorithm to enforce committed information rates (CIR) and burst sizes.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Traffic Policing with Token Bucket</title>
                <rect x="50" y="60" width="80" height="80" rx="5" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
                <text x="90" y="85" font-size="10" fill="#3b82f6" text-anchor="middle">Token Bucket</text>
                <circle cx="70" cy="105" r="6" fill="#10b981"/>
                <circle cx="90" cy="105" r="6" fill="#10b981"/>
                <circle cx="110" cy="105" r="6" fill="#10b981"/>
                <circle cx="80" cy="120" r="6" fill="#10b981"/>
                <circle cx="100" cy="120" r="6" fill="#10b981"/>
                <text x="90" y="155" font-size="8" fill="#94a3b8" text-anchor="middle">CIR: 1 Mbps</text>
                <rect x="200" y="80" width="60" height="40" rx="3" fill="#6366f1"/>
                <text x="230" y="105" font-size="9" fill="white" text-anchor="middle">Policer</text>
                <path d="M135,100 h60" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <path d="M265,90 Q300,70 330,90" stroke="#10b981" stroke-width="2" fill="none"/>
                <text x="310" y="65" font-size="8" fill="#10b981">Conform</text>
                <path d="M265,100 h65" stroke="#f59e0b" stroke-width="2"/>
                <text x="310" y="95" font-size="8" fill="#f59e0b">Exceed</text>
                <path d="M265,110 Q300,130 330,110" stroke="#ef4444" stroke-width="2" fill="none"/>
                <text x="310" y="145" font-size="8" fill="#ef4444">Violate</text>
            </svg>`
        },
        {
            title: "Traffic Shaping",
            icon: "fa-chart-line",
            description: "Smooths traffic bursts by buffering excess packets instead of dropping them. Uses Generic Traffic Shaping (GTS) to conform traffic to specified rates while minimizing packet loss.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Traffic Shaping vs Policing</title>
                <text x="50" y="25" font-size="12" fill="#f59e0b" font-weight="bold">Policing</text>
                <path d="M30,40 L50,30 L70,50 L90,25 L110,45 L130,20 L150,40" stroke="#ef4444" stroke-width="3" fill="none"/>
                <text x="90" y="70" font-size="8" fill="#ef4444" text-anchor="middle">Drops packets</text>
                <line x1="30" y1="80" x2="150" y2="80" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <text x="250" y="25" font-size="12" fill="#10b981" font-weight="bold">Shaping</text>
                <path d="M230,40 L250,35 L270,38 L290,36 L310,37 L330,36 L350,37" stroke="#10b981" stroke-width="3" fill="none"/>
                <text x="290" y="70" font-size="8" fill="#10b981" text-anchor="middle">Buffers packets</text>
                <line x1="230" y1="80" x2="350" y2="80" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <rect x="80" y="120" width="240" height="60" rx="5" fill="#1e293b"/>
                <text x="200" y="140" font-size="10" fill="#f59e0b" text-anchor="middle">class-map SHAPE</text>
                <text x="200" y="155" font-size="10" fill="#94a3b8" text-anchor="middle">shape average 512000</text>
                <text x="200" y="170" font-size="10" fill="#10b981" text-anchor="middle">queue-limit 100</text>
            </svg>`
        },
        {
            title: "QoS Models",
            icon: "fa-sitemap",
            description: "Three QoS deployment models: Best Effort (no QoS), Integrated Services (IntServ with RSVP), and Differentiated Services (DiffServ with DSCP markings). DiffServ is most common in enterprise networks.",
            visual: `<svg viewBox="0 0 400 200">
                <title>QoS Models Comparison</title>
                <rect x="30" y="40" width="80" height="60" rx="5" fill="#6b7280"/>
                <text x="70" y="60" font-size="9" fill="white" text-anchor="middle">Best Effort</text>
                <text x="70" y="75" font-size="8" fill="#e5e7eb" text-anchor="middle">No QoS</text>
                <text x="70" y="90" font-size="8" fill="#e5e7eb" text-anchor="middle">FIFO Only</text>
                <rect x="160" y="40" width="80" height="60" rx="5" fill="#3b82f6"/>
                <text x="200" y="60" font-size="9" fill="white" text-anchor="middle">IntServ</text>
                <text x="200" y="75" font-size="8" fill="#dbeafe" text-anchor="middle">RSVP</text>
                <text x="200" y="90" font-size="8" fill="#dbeafe" text-anchor="middle">Per-flow</text>
                <rect x="290" y="40" width="80" height="60" rx="5" fill="#10b981"/>
                <text x="330" y="60" font-size="9" fill="white" text-anchor="middle">DiffServ</text>
                <text x="330" y="75" font-size="8" fill="#dcfce7" text-anchor="middle">DSCP</text>
                <text x="330" y="90" font-size="8" fill="#dcfce7" text-anchor="middle">Per-class</text>
                <rect x="120" y="130" width="160" height="50" rx="5" fill="#1e293b"/>
                <text x="200" y="145" font-size="9" fill="#e2e8f0" text-anchor="middle">Enterprise Standard:</text>
                <text x="200" y="160" font-size="10" fill="#10b981" text-anchor="middle">DiffServ + DSCP Markings</text>
                <text x="200" y="175" font-size="9" fill="#94a3b8" text-anchor="middle">Scalable & Manageable</text>
            </svg>`
        }
    ],
    ssh: [
        {
            title: "SSH Fundamentals",
            icon: "fa-shield-alt",
            description: "Secure Shell protocol fundamentals, encryption concepts, and comparison with insecure protocols. Understanding SSH's role in secure network management.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SSH Protocol Security</title>
                <rect x="50" y="70" width="60" height="40" rx="3" fill="#e74c3c"/>
                <text x="80" y="95" font-size="10" fill="white" text-anchor="middle">Telnet</text>
                <text x="80" y="110" font-size="8" fill="white" text-anchor="middle">Port 23</text>
                <rect x="290" y="70" width="60" height="40" rx="3" fill="#10b981"/>
                <text x="320" y="95" font-size="10" fill="white" text-anchor="middle">SSH</text>
                <text x="320" y="110" font-size="8" fill="white" text-anchor="middle">Port 22</text>
                <path d="M115,80 h170" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
                <text x="200" y="75" text-anchor="middle" font-size="9" fill="#ef4444">Plaintext</text>
                <path d="M115,100 h170" stroke="#10b981" stroke-width="3"/>
                <text x="200" y="95" text-anchor="middle" font-size="9" fill="#10b981">AES Encrypted</text>
                <rect x="100" y="130" width="200" height="50" rx="3" fill="#1e293b"/>
                <text x="200" y="150" text-anchor="middle" font-size="9" fill="#10b981">SSH Protocol Benefits</text>
                <text x="200" y="165" text-anchor="middle" font-size="8" fill="#94a3b8">Encryption • Authentication • Integrity</text>
            </svg>`
        },
        {
            title: "SSH Authentication Methods",
            icon: "fa-key",
            description: "Configure multiple SSH authentication methods including password, public key, and certificate-based authentication for secure access control.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SSH Authentication Methods</title>
                <rect x="50" y="50" width="80" height="30" rx="3" fill="#3b82f6"/>
                <text x="90" y="70" font-size="9" fill="white" text-anchor="middle">Password Auth</text>
                <rect x="50" y="90" width="80" height="30" rx="3" fill="#10b981"/>
                <text x="90" y="110" font-size="9" fill="white" text-anchor="middle">Public Key</text>
                <rect x="50" y="130" width="80" height="30" rx="3" fill="#6366f1"/>
                <text x="90" y="150" font-size="9" fill="white" text-anchor="middle">Certificate</text>
                <circle cx="250" cy="100" r="30" fill="#e74c3c"/>
                <text x="250" y="105" text-anchor="middle" fill="white" font-size="10">SSH Server</text>
                <path d="M135,65 Q190,65 220,85" stroke="#3b82f6" fill="none"/>
                <path d="M135,105 h85" stroke="#10b981"/>
                <path d="M135,145 Q190,145 220,115" stroke="#6366f1" fill="none"/>
                <rect x="320" y="80" width="60" height="40" rx="3" fill="#059669"/>
                <text x="350" y="105" text-anchor="middle" fill="white" font-size="9">Access Granted</text>
                <path d="M280,100 h35" stroke="#10b981" marker-end="url(#arrow)"/>
            </svg>`
        },
        {
            title: "SSH Key Management",
            icon: "fa-cogs",
            description: "Generate, distribute, and manage SSH keys. Configure RSA and ECDSA keys with proper modulus sizes for secure authentication.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SSH Key Management</title>
                <rect x="50" y="60" width="90" height="80" rx="5" fill="#1e293b" stroke="#3b82f6"/>
                <text x="95" y="80" text-anchor="middle" font-size="9" fill="#3b82f6">Key Generation</text>
                <text x="95" y="100" text-anchor="middle" font-size="8" fill="#94a3b8">RSA 2048</text>
                <text x="95" y="115" text-anchor="middle" font-size="8" fill="#94a3b8">ECDSA 256</text>
                <text x="95" y="130" text-anchor="middle" font-size="8" fill="#94a3b8">crypto key generate</text>
                <rect x="200" y="40" width="60" height="40" rx="3" fill="#059669"/>
                <text x="230" y="65" text-anchor="middle" fill="white" font-size="9">Public Key</text>
                <rect x="200" y="120" width="60" height="40" rx="3" fill="#e74c3c"/>
                <text x="230" y="145" text-anchor="middle" fill="white" font-size="9">Private Key</text>
                <path d="M145,80 h50" stroke="#10b981" marker-end="url(#arrow)"/>
                <path d="M145,120 h50" stroke="#ef4444" marker-end="url(#arrow)"/>
                <rect x="320" y="80" width="60" height="40" rx="3" fill="#6366f1"/>
                <text x="350" y="105" text-anchor="middle" fill="white" font-size="9">SSH Client</text>
                <path d="M265,60 Q290,60 320,90" stroke="#10b981" fill="none"/>
            </svg>`
        },
        {
            title: "SSH Troubleshooting",
            icon: "fa-bug",
            description: "Diagnose SSH connection issues with debug commands, verify key exchanges, and resolve common authentication and connectivity problems.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SSH Troubleshooting</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#6366f1"/>
                <text x="80" y="105" font-size="10" fill="white" text-anchor="middle">Client</text>
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#e74c3c"/>
                <text x="320" y="105" font-size="10" fill="white" text-anchor="middle">Server</text>
                <circle cx="200" cy="70" r="8" fill="#ef4444"/>
                <text x="200" y="75" text-anchor="middle" fill="white" font-size="6">X</text>
                <text x="200" y="55" text-anchor="middle" font-size="9" fill="#ef4444">Connection Failed</text>
                <path d="M115,100 h170" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
                <rect x="80" y="140" width="240" height="50" rx="3" fill="#1e293b"/>
                <text x="200" y="155" text-anchor="middle" font-size="8" fill="#10b981">Debug Commands</text>
                <text x="200" y="170" text-anchor="middle" font-size="7" fill="#94a3b8">show ip ssh • debug ip ssh • show ssh</text>
                <text x="200" y="183" text-anchor="middle" font-size="7" fill="#94a3b8">show crypto key mypubkey rsa</text>
            </svg>`
        },
        {
            title: "SSH Security & Best Practices",
            icon: "fa-lock",
            description: "Harden SSH configuration with security best practices, access control, session management, and monitoring for enterprise-grade security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SSH Security Hardening</title>
                <rect x="50" y="50" width="300" height="100" rx="5" fill="#1e293b" stroke="#10b981"/>
                <text x="200" y="75" text-anchor="middle" font-size="10" fill="#10b981">SSH Security Hardening</text>
                <rect x="70" y="90" width="80" height="20" rx="2" fill="#3b82f6"/>
                <text x="110" y="103" text-anchor="middle" font-size="8" fill="white">Access Control</text>
                <rect x="160" y="90" width="80" height="20" rx="2" fill="#059669"/>
                <text x="200" y="103" text-anchor="middle" font-size="8" fill="white">Key Management</text>
                <rect x="250" y="90" width="80" height="20" rx="2" fill="#e74c3c"/>
                <text x="290" y="103" text-anchor="middle" font-size="8" fill="white">Session Limits</text>
                <rect x="115" y="120" width="70" height="20" rx="2" fill="#6366f1"/>
                <text x="150" y="133" text-anchor="middle" font-size="8" fill="white">IP ACLs</text>
                <rect x="215" y="120" width="70" height="20" rx="2" fill="#9333ea"/>
                <text x="250" y="133" text-anchor="middle" font-size="8" fill="white">Logging</text>
                <circle cx="200" cy="170" r="15" fill="#10b981"/>
                <text x="200" y="175" text-anchor="middle" fill="white" font-size="8">✓</text>
            </svg>`
        }
    ],
    tftp: [
        {
            title: "TFTP/FTP Operations",
            icon: "fa-file-upload",
            description: "TFTP (Trivial FTP) provides simple file transfer for network device management - backing up configs, uploading firmware. FTP offers more features but TFTP is preferred for network devices due to simplicity.",
            visual: `<svg viewBox="0 0 400 200">
                <title>TFTP File Transfer</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#6366f1"/>
                <text x="80" y="105" font-size="10" fill="white" text-anchor="middle">Router</text>
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#10b981"/>
                <text x="320" y="105" font-size="10" fill="white" text-anchor="middle">TFTP Server</text>
                <path d="M115,90 h170" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="200" y="85" text-anchor="middle" font-size="9" fill="#94a3b8">Upload Config</text>
                <path d="M285,110 h-170" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="200" y="125" text-anchor="middle" font-size="9" fill="#94a3b8">Download IOS</text>
                <rect x="100" y="150" width="200" height="30" rx="3" fill="#1e293b"/>
                <text x="200" y="170" font-family="monospace" font-size="8" fill="#10b981" text-anchor="middle">copy running-config tftp</text>
            </svg>`
        },
        {
            title: "HTTP/HTTPS File Transfer",
            icon: "fa-globe",
            description: "Modern network devices support HTTP/HTTPS for file transfers. Web-based file operations enable downloading firmware from vendor websites and configuration backups via web servers.",
            visual: `<svg viewBox="0 0 400 200">
                <title>HTTP File Transfer</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#6366f1"/>
                <text x="80" y="105" font-size="10" fill="white" text-anchor="middle">Router</text>
                <circle cx="200" cy="100" r="25" fill="#f59e0b"/>
                <text x="200" y="108" font-size="10" fill="white" text-anchor="middle">Web</text>
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#10b981"/>
                <text x="320" y="105" font-size="10" fill="white" text-anchor="middle">HTTP Server</text>
                <path d="M115,90 h60" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="145" y="85" text-anchor="middle" font-size="9" fill="#94a3b8">HTTPS</text>
                <path d="M225,90 h60" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="255" y="85" text-anchor="middle" font-size="9" fill="#94a3b8">Secure</text>
                <rect x="100" y="150" width="200" height="30" rx="3" fill="#1e293b"/>
                <text x="200" y="170" font-family="monospace" font-size="8" fill="#10b981" text-anchor="middle">copy https://server/file.bin flash:</text>
            </svg>`
        },
        {
            title: "Local Storage Management",
            icon: "fa-hdd",
            description: "Network devices support various local storage: flash memory, USB drives, and compact flash. Understanding file system management is crucial for device maintenance and troubleshooting.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Local Storage Management</title>
                <rect x="50" y="60" width="80" height="60" rx="5" fill="#6366f1"/>
                <text x="90" y="95" font-size="12" fill="white" text-anchor="middle">Router</text>
                <rect x="70" y="130" width="40" height="20" rx="3" fill="#f59e0b"/>
                <text x="90" y="143" font-size="8" fill="white" text-anchor="middle">Flash</text>
                <rect x="200" y="70" width="30" height="15" rx="2" fill="#10b981"/>
                <text x="215" y="81" font-size="8" fill="white" text-anchor="middle">USB</text>
                <path d="M130,90 h65" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <rect x="270" y="80" width="60" height="40" rx="3" fill="#ef4444"/>
                <text x="300" y="105" font-size="10" fill="white" text-anchor="middle">Compact Flash</text>
                <rect x="150" y="150" width="150" height="30" rx="3" fill="#1e293b"/>
                <text x="225" y="170" font-family="monospace" font-size="8" fill="#10b981" text-anchor="middle">dir flash: | usbflash0:</text>
            </svg>`
        },
        {
            title: "Boot System Management",
            icon: "fa-power-off",
            description: "Boot system commands control device startup sequence. Managing boot images, configuration register, and startup files ensures reliable device operation and recovery options.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Boot System Management</title>
                <rect x="50" y="40" width="80" height="120" rx="5" fill="#6366f1"/>
                <text x="90" y="65" font-size="12" fill="white" text-anchor="middle">Router</text>
                <circle cx="90" cy="85" r="8" fill="#10b981"/>
                <text x="90" y="90" font-size="8" fill="white" text-anchor="middle">PWR</text>
                <rect x="70" y="105" width="40" height="15" rx="2" fill="#f59e0b"/>
                <text x="90" y="115" font-size="8" fill="white" text-anchor="middle">IOS 1</text>
                <rect x="70" y="125" width="40" height="15" rx="2" fill="#94a3b8"/>
                <text x="90" y="135" font-size="8" fill="white" text-anchor="middle">IOS 2</text>
                <path d="M135,100 h45" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="157" y="95" text-anchor="middle" font-size="9" fill="#94a3b8">Boot Order</text>
                <rect x="190" y="80" width="160" height="40" rx="3" fill="#1e293b"/>
                <text x="270" y="105" font-family="monospace" font-size="8" fill="#10b981" text-anchor="middle">boot system flash:ios-image.bin</text>
            </svg>`
        },
        {
            title: "Secure File Protocols",
            icon: "fa-shield-alt",
            description: "Secure Copy (SCP) and SSH File Transfer Protocol (SFTP) provide encrypted file transfers. These protocols replace insecure FTP/TFTP for security-conscious environments.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Secure File Transfer</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#6366f1"/>
                <text x="80" y="105" font-size="10" fill="white" text-anchor="middle">Router</text>
                <rect x="160" y="60" width="80" height="80" rx="5" fill="#ef4444"/>
                <text x="200" y="85" font-size="12" fill="white" text-anchor="middle">SSH</text>
                <text x="200" y="105" font-size="12" fill="white" text-anchor="middle">Encrypted</text>
                <text x="200" y="125" font-size="12" fill="white" text-anchor="middle">Tunnel</text>
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#10b981"/>
                <text x="320" y="105" font-size="10" fill="white" text-anchor="middle">Server</text>
                <path d="M115,90 h40" stroke="#94a3b8" stroke-width="3" marker-end="url(#arrow)"/>
                <path d="M245,90 h40" stroke="#94a3b8" stroke-width="3" marker-end="url(#arrow)"/>
                <rect x="100" y="150" width="200" height="30" rx="3" fill="#1e293b"/>
                <text x="200" y="170" font-family="monospace" font-size="8" fill="#10b981" text-anchor="middle">copy scp://user@server/file flash:</text>
            </svg>`
        }
    ],
    hsrp: [
        {
            title: "HSRP Configuration",
            icon: "fa-route",
            description: "Configure Hot Standby Router Protocol for first hop redundancy. HSRP provides automatic failover between multiple routers, ensuring continuous network connectivity for end devices.",
            visual: `<svg viewBox="0 0 400 200">
                <title>HSRP Redundancy Configuration</title>
                <rect x="50" y="60" width="60" height="30" rx="3" fill="#10b981"/>
                <text x="80" y="80" text-anchor="middle" fill="white" font-size="9">Active</text>
                <text x="80" y="45" text-anchor="middle" fill="#10b981" font-size="8">Priority: 110</text>
                <rect x="50" y="110" width="60" height="30" rx="3" fill="#64748b"/>
                <text x="80" y="130" text-anchor="middle" fill="white" font-size="9">Standby</text>
                <text x="80" y="155" text-anchor="middle" fill="#64748b" font-size="8">Priority: 100</text>
                <circle cx="200" cy="100" r="15" fill="#3b82f6"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="8">VIP</text>
                <text x="200" y="75" text-anchor="middle" fill="#3b82f6" font-size="8">.254</text>
                <rect x="290" y="85" width="60" height="30" rx="3" fill="#334155"/>
                <text x="320" y="105" text-anchor="middle" fill="white" font-size="9">Clients</text>
                <path d="M120,75 Q160,75 185,85" stroke="#10b981" stroke-width="2" fill="none"/>
                <path d="M120,125 Q160,125 185,115" stroke="#64748b" stroke-width="2" stroke-dasharray="2,2" fill="none"/>
                <path d="M215,100 h70" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="250" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">Default GW</text>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        }
    ],
    netflow: [
        {
            title: "NetFlow Fundamentals",
            icon: "fa-chart-line",
            description: "NetFlow provides detailed network traffic analysis and monitoring. Collect flow records to understand network utilization, security patterns, and performance characteristics.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NetFlow Data Collection</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#6366f1"/>
                <text x="80" y="105" text-anchor="middle" fill="white" font-size="9">Router</text>
                <text x="80" y="60" text-anchor="middle" fill="#6366f1" font-size="8">NetFlow</text>
                <rect x="180" y="70" width="80" height="60" rx="5" fill="#10b981"/>
                <text x="220" y="95" text-anchor="middle" fill="white" font-size="9">Collector</text>
                <text x="220" y="110" text-anchor="middle" fill="white" font-size="9">Server</text>
                <text x="220" y="125" text-anchor="middle" fill="#94a3b8" font-size="8">UDP 2055</text>
                <rect x="300" y="80" width="60" height="40" rx="3" fill="#f59e0b"/>
                <text x="330" y="105" text-anchor="middle" fill="white" font-size="9">Analysis</text>
                <path d="M115,100 h60" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="145" y="95" text-anchor="middle" fill="#3b82f6" font-size="8">Flow Data</text>
                <path d="M265,100 h30" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="60" y="140" width="280" height="40" rx="3" fill="#1e293b"/>
                <text x="200" y="165" text-anchor="middle" fill="#10b981" font-size="9">Traffic Patterns • Bandwidth Usage • Security Analysis</text>
            </svg>`
        },
        {
            title: "NetFlow Configuration",
            icon: "fa-cogs",
            description: "Configure NetFlow on router interfaces and specify collector destinations. Enable flow monitoring for inbound/outbound traffic with appropriate sampling and export settings.",
            visual: `<svg viewBox="0 0 400 200">
                <title>NetFlow Configuration</title>
                <rect x="50" y="50" width="300" height="100" rx="5" fill="#1e293b"/>
                <text x="70" y="75" font-family="monospace" font-size="10" fill="#6A9955"># Configure NetFlow on interface</text>
                <text x="70" y="95" font-family="monospace" font-size="10" fill="#DCDCAA">interface gigabitethernet0/0</text>
                <text x="70" y="110" font-family="monospace" font-size="10" fill="#9CDCFE">ip flow ingress</text>
                <text x="70" y="125" font-family="monospace" font-size="10" fill="#9CDCFE">ip flow egress</text>
                <text x="200" y="75" font-family="monospace" font-size="10" fill="#6A9955"># Export destination</text>
                <text x="200" y="95" font-family="monospace" font-size="10" fill="#DCDCAA">ip flow-export destination</text>
                <text x="200" y="110" font-family="monospace" font-size="10" fill="#C586C0">192.168.1.100 2055</text>
                <text x="200" y="125" font-family="monospace" font-size="10" fill="#9CDCFE">ip flow-export version 9</text>
                <circle cx="330" cy="100" r="15" fill="#10b981"/>
                <text x="330" y="105" text-anchor="middle" fill="white" font-size="10">✓</text>
                <text x="200" y="175" text-anchor="middle" fill="#94a3b8" font-size="9">Interface-based Flow Monitoring</text>
            </svg>`
        }
    ],
    // Section metadata
    metadata: {
        sectionNumber: 4,
        title: "IP Services",
        subsections: {
            nat: { title: "4.1 NAT Configuration", count: 5 },
            ntp: { title: "4.2 NTP Configuration", count: 4 },
            dhcpDns: { title: "4.3 DHCP and DNS", count: 5 },
            snmp: { title: "4.4 SNMP Operations", count: 4 },
            syslog: { title: "4.5 Syslog Features", count: 4 },
            dhcpClient: { title: "4.6 DHCP Client & Relay", count: 2 },
            qos: { title: "4.7 QoS Concepts", count: 6 },
            ssh: { title: "4.8 SSH Remote Access", count: 5 },
            tftp: { title: "4.9 TFTP/FTP Functions", count: 5 },
            hsrp: { title: "4.10 HSRP Configuration", count: 1 },
            netflow: { title: "4.11 NetFlow Monitoring", count: 2 }
        },
        // Dynamic calculation of total topics from subsections
        get totalTopics() {
            return Object.values(this.subsections).reduce((total, section) => total + section.count, 0);
        }
    }
};

// Export for global use
window.SECTION4_DATA = SECTION4_DATA;

// Register with section registry for dynamic topic totals
document.addEventListener('DOMContentLoaded', () => {
    if (window.CCNA_SECTION_REGISTRY) {
        window.CCNA_SECTION_REGISTRY.registerSectionData(4, SECTION4_DATA);
    }
    // Dispatch event for other listeners
    window.dispatchEvent(new CustomEvent('sectionDataLoaded', {
        detail: { sectionNumber: 4, sectionData: SECTION4_DATA }
    }));
});
