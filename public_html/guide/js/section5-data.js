/**
 * CCNA Section 5: Security Fundamentals - Complete Topic Data
 * This data is structured to be used with section5.html
 */

const SECTION5_DATA = {
    localPasswords: [
        {
            title: "Access Control",
            icon: "fa-user-lock",
            description: "Securing a device starts with local access control. This involves creating local user accounts with specific privilege levels and applying strong, encrypted passwords to console, VTY (Telnet/SSH), and auxiliary lines.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Local Device Access Control</title>
                <rect x="20" y="50" width="360" height="100" rx="5" fill="#1e293b" />
                <text x="35" y="70" font-family="monospace" font-size="12" fill="white">username admin privilege 15 secret &lt;password&gt;</text>
                <text x="35" y="90" font-family="monospace" font-size="12" fill="white">line console 0</text>
                <text x="50" y="110" font-family="monospace" font-size="12" fill="white">login local</text>
                <text x="35" y="130" font-family="monospace" font-size="12" fill="white">line vty 0 4</text>
                <text x="50" y="150" font-family="monospace" font-size="12" fill="white">login local</text>
            </svg>`
        }
    ],
    passwordPolicies: [
        {
            title: "Password Policies",
            icon: "fa-key",
            description: "A strong password policy is essential. This includes enforcing complexity (length, character types), regular changes, and preventing reuse. Alternatives like multi-factor authentication (MFA) and certificates provide even stronger security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Password Policy Elements</title>
                <circle cx="100" cy="100" r="40" fill="#10b981"><text x="100" y="105" text-anchor="middle" fill="white">Strong</text></circle>
                <text x="250" y="60" font-size="12" fill="#e2e8f0">✓ Minimum Length</text>
                <text x="250" y="85" font-size="12" fill="#e2e8f0">✓ Character Mix (A, a, 1, #)</text>
                <text x="250" y="110" font-size="12" fill="#e2e8f0">✓ Regular Changes</text>
                <text x="250" y="135" font-size="12" fill="#e2e8f0">✓ Multi-Factor Auth</text>
            </svg>`
        }
    ],
    remoteVpn: [
        {
            title: "IPsec VPNs",
            icon: "fa-shield-alt",
            description: "IPsec (Internet Protocol Security) is a suite of protocols used to secure network communications. It's commonly used to create secure site-to-site or remote access VPNs (Virtual Private Networks) over untrusted networks like the internet.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPsec VPN Tunnel</title>
                <rect x="30" y="80" width="80" height="40" rx="3" fill="#334155"/><text x="70" y="105" font-size="10" fill="white" text-anchor="middle">Remote User</text>
                <rect x="290" y="80" width="80" height="40" rx="3" fill="#334155"/><text x="330" y="105" font-size="10" fill="white" text-anchor="middle">Corp Office</text>
                <text x="200" y="60" text-anchor="middle" font-size="14" fill="#f87171">Internet</text>
                <rect x="110" y="90" width="180" height="20" fill="#10b981" opacity="0.5"/>
                <line x1="110" y1="100" x2="290" y2="100" stroke="#10b981" stroke-width="3"/>
                <text x="200" y="120" text-anchor="middle" fill="#10b981" font-size="12">Encrypted Tunnel</text>
            </svg>`
        }
    ],
    portSecurity: [
        {
            title: "Port Security",
            icon: "fa-ethernet",
            description: "Port security is a Layer 2 feature that restricts input to an interface by limiting and identifying MAC addresses of the hosts allowed to access the port. It can prevent unauthorized devices from connecting to the network.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Port Security</title>
                <rect x="150" y="40" width="100" height="40" rx="5" fill="#334155" /><text x="200" y="65" text-anchor="middle" fill="white">Switch Port</text>
                <!-- Authorized PC -->
                <rect x="50" y="120" width="80" height="40" rx="3" fill="#10b981"/><text x="90" y="145" font-size="10" text-anchor="middle" fill="white">Allowed PC</text>
                <line x1="180" y1="80" x2="90" y2="120" stroke="#10b981"/>
                <!-- Rogue PC -->
                <rect x="270" y="120" width="80" height="40" rx="3" fill="#f87171"/><text x="310" y="145" font-size="10" text-anchor="middle" fill="white">Rogue PC</text>
                <line x1="220" y1="80" x2="310" y2="120" stroke="#f87171"/>
                <text x="320" y="110" font-size="24" fill="#f87171">✗</text>
            </svg>`
        }
    ],
    dhcpSnooping: [
        {
            title: "DHCP Snooping",
            icon: "fa-search",
            description: "DHCP snooping is a security feature that acts like a firewall between untrusted hosts and trusted DHCP servers. It builds a binding table of MAC addresses to IP addresses and drops malicious DHCP messages from rogue servers.",
            visual: `<svg viewBox="0 0 400 200">
                <title>DHCP Snooping</title>
                <rect x="150" y="80" width="100" height="40" rx="5" fill="#334155"/><text x="200" y="105" text-anchor="middle" fill="white">Switch</text>
                <rect x="30" y="30" width="100" height="30" rx="3" fill="#10b981"/><text x="80" y="50" text-anchor="middle" fill="white" font-size="10">Trusted Server</text>
                <line x1="180" y1="80" x2="80" y2="60" stroke="#10b981"/>
                <rect x="30" y="140" width="100" height="30" rx="3" fill="#f87171"/><text x="80" y="160" text-anchor="middle" fill="white" font-size="10">Rogue Server</text>
                <line x1="180" y1="120" x2="80" y2="140" stroke="#f87171"/>
                <text x="110" y="130" font-size="24" fill="#f87171">✗</text>
            </svg>`
        },
        {
            title: "ARP Inspection",
            icon: "fa-user-secret",
            description: "DAI validates ARP packets in a network. It uses the DHCP snooping binding table to intercept, log, and discard ARP packets with invalid IP-to-MAC address bindings, preventing man-in-the-middle attacks.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Dynamic ARP Inspection</title>
                <text x="200" y="40" font-size="12" text-anchor="middle" fill="#e2e8f0">Attacker's Fake ARP Reply</text>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#f87171"/><text x="80" y="105" text-anchor="middle" fill="white" font-size="10">Attacker</text>
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#10b981"/><text x="320" y="105" text-anchor="middle" fill="white" font-size="10">Victim</text>
                <path d="M115,100 h170" stroke="#f87171" marker-end="url(#arrow-red)"/>
                <circle cx="200" cy="100" r="25" fill="#6366f1"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="12">DAI</text>
                <text x="200" y="150" font-size="14" text-anchor="middle" fill="#f87171">Packet Dropped</text>
                <defs><marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f87171"/></marker></defs>
            </svg>`
        }
    ],
    acls: [
        {
            title: "ACLs",
            icon: "fa-list-check",
            description: "ACLs are a series of rules used to filter traffic. Standard ACLs filter based only on source IP address. Extended ACLs are more granular, filtering on source/destination IP, protocol, and port numbers.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Standard vs Extended ACLs</title>
                <rect x="30" y="60" width="150" height="80" rx="5" fill="#334155"/>
                <text x="105" y="50" font-size="12" text-anchor="middle" fill="#e2e8f0">Standard ACL</text>
                <text x="105" y="90" font-family="monospace" font-size="10" text-anchor="middle" fill="white">Source IP Only</text>

                <rect x="220" y="60" width="150" height="80" rx="5" fill="#334155"/>
                <text x="295" y="50" font-size="12" text-anchor="middle" fill="#e2e8f0">Extended ACL</text>
                <text x="295" y="80" font-family="monospace" font-size="10" text-anchor="middle" fill="white">Source IP</text>
                <text x="295" y="100" font-family="monospace" font-size="10" text-anchor="middle" fill="white">Destination IP</text>
                <text x="295" y="120" font-family="monospace" font-size="10" text-anchor="middle" fill="white">Protocol / Port</text>
            </svg>`
        }
    ],
    layer2Security: [
        {
            title: "Security Concepts",
            icon: "fa-lightbulb",
            description: "A threat is a potential danger. A vulnerability is a weakness. An exploit is a way to take advantage of a vulnerability. Mitigation is the action taken to reduce the risk from a threat.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Threat, Vulnerability, Exploit</title>
                <circle cx="80" cy="100" r="30" fill="#f87171"/><text x="80" y="105" text-anchor="middle" fill="white">Threat</text>
                <circle cx="200" cy="100" r="30" fill="#f59e0b"/><text x="200" y="105" text-anchor="middle" fill="white">Vulnerability</text>
                <circle cx="320" cy="100" r="30" fill="#10b981"/><text x="320" y="105" text-anchor="middle" fill="white">Mitigation</text>
                <path d="M110,100 h60" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <path d="M230,100 h60" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <text x="170" y="85" font-size="10" fill="#94a3b8">Exploit</text>
                 <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "AAA Concepts",
            icon: "fa-users-cog",
            description: "Authentication, Authorization, and Accounting (AAA) is a security framework. Authentication verifies identity (who are you?). Authorization determines permissions (what can you do?). Accounting logs actions (what did you do?).",
            visual: `<svg viewBox="0 0 400 200">
                <title>AAA Framework</title>
                <rect x="50" y="80" width="80" height="40" rx="5" fill="#3b82f6"/><text x="90" y="105" text-anchor="middle" fill="white">Authentication</text>
                <rect x="160" y="80" width="80" height="40" rx="5" fill="#10b981"/><text x="200" y="105" text-anchor="middle" fill="white">Authorization</text>
                <rect x="270" y="80" width="80" height="40" rx="5" fill="#6366f1"/><text x="310" y="105" text-anchor="middle" fill="white">Accounting</text>
                <text x="90" y="65" font-size="10" fill="#94a3b8" text-anchor="middle">Verify Identity</text>
                <text x="200" y="65" font-size="10" fill="#94a3b8" text-anchor="middle">Grant Permissions</text>
                <text x="310" y="65" font-size="10" fill="#94a3b8" text-anchor="middle">Log Actions</text>
            </svg>`
        }
    ],
    wirelessSecurity: [
        {
            title: "Wireless Security",
            icon: "fa-wifi",
            description: "WPA (Wi-Fi Protected Access), WPA2, and WPA3 are security protocols to secure wireless networks. WPA3 is the most recent and secure standard, offering stronger encryption and protection against modern threats.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Evolution of Wireless Security</title>
                <rect x="50" y="80" width="80" height="40" fill="#f87171"/><text x="90" y="105" text-anchor="middle" fill="white">WEP (Insecure)</text>
                <rect x="160" y="80" width="80" height="40" fill="#f59e0b"/><text x="200" y="105" text-anchor="middle" fill="white">WPA</text>
                <rect x="270" y="80" width="80" height="40" fill="#10b981"/><text x="310" y="105" text-anchor="middle" fill="white">WPA2/3</text>
                <text x="200" y="50" font-size="12" fill="#e2e8f0" text-anchor="middle">Increasing Security →</text>
            </svg>`
        },
        {
            title: "WPA2 PSK",
            icon: "fa-sliders-h",
            description: "A common wireless security configuration is WPA2 with a Pre-Shared Key (PSK). This is configured in the WLAN settings on a WLC or AP, where you define the SSID and the shared password for all users.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WPA2 PSK GUI Configuration</title>
                <rect x="20" y="20" width="360" height="160" rx="10" fill="#334155" stroke="#475569"/>
                <text x="40" y="40" font-size="12" fill="#e2e8f0">WLAN Security</text>
                <text x="50" y="80" font-size="12" fill="#94a3b8">SSID:</text><rect x="150" y="70" width="180" height="20" fill="#475569" rx="3"/><text x="160" y="84" font-size="10" fill="white">CorpWiFi</text>
                <text x="50" y="110" font-size="12" fill="#94a3b8">L2 Security:</text><rect x="150" y="100" width="180" height="20" fill="#475569" rx="3"/><text x="160" y="114" font-size="10" fill="white">WPA+WPA2</text>
                <text x="50" y="140" font-size="12" fill="#94a3b8">PSK:</text><rect x="150" y="130" width="180" height="20" fill="#475569" rx="3"/><text x="160" y="144" font-size="10" fill="white">●●●●●●●●●</text>
            </svg>`
        }
    ],
    // Section metadata
    metadata: {
        sectionNumber: 5,
        title: "Security Fundamentals",
        subsections: {
            layer2Security: { title: "5.1 & 5.8 Security Concepts", count: 2 },
            localPasswords: { title: "5.3 Device Access Control", count: 1 },
            passwordPolicies: { title: "5.4 Password Policies", count: 1 },
            remoteVpn: { title: "5.5 VPNs", count: 1 },
            acls: { title: "5.6 Access Control Lists", count: 1 },
            portSecurity: { title: "5.7.1 Port Security", count: 1 },
            dhcpSnooping: { title: "5.7.2 DHCP Snooping & DAI", count: 2 },
            wirelessSecurity: { title: "5.9 & 5.10 Wireless Security", count: 2 },
        },
        // Dynamic calculation of total topics from subsections
        get totalTopics() {
            return Object.values(this.subsections).reduce((total, section) => total + section.count, 0);
        }
    }
};

// Export for global use
window.SECTION5_DATA = SECTION5_DATA;

// Register with section registry for dynamic topic totals
document.addEventListener('DOMContentLoaded', () => {
    if (window.CCNA_SECTION_REGISTRY) {
        window.CCNA_SECTION_REGISTRY.registerSectionData(5, SECTION5_DATA);
    }
    // Dispatch event for other listeners
    window.dispatchEvent(new CustomEvent('sectionDataLoaded', {
        detail: { sectionNumber: 5, sectionData: SECTION5_DATA }
    }));
});
