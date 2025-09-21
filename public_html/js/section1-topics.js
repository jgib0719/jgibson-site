/**
 * CCNA Section 1 Topics Data
 * Network Fundamentals topics for Section 1
 */

const Section1Topics = {
    // 1.1 Explain the role and function of network components
    components: [
        {
            title: "Routers",
            icon: "fa-route",
            description: "Forward data packets between different computer networks. Operates at Layer 3 (Network). Makes decisions based on IP addresses.",
            visual: `
                <svg viewBox="0 0 400 200" class="w-full h-full">
                    <title>Router connecting two LANs</title>
                    <rect x="20" y="60" width="120" height="80" rx="10" fill="#334155"/>
                    <text x="80" y="110" text-anchor="middle" font-size="16" fill="#94a3b8" font-family="Rajdhani, sans-serif">LAN A</text>
                    <circle cx="200" cy="100" r="30" fill="#6366f1"/>
                    <text x="200" y="108" text-anchor="middle" font-size="24" fill="white" font-family="Orbitron, sans-serif" font-weight="bold">R</text>
                    <rect x="260" y="60" width="120" height="80" rx="10" fill="#334155"/>
                    <text x="320" y="110" text-anchor="middle" font-size="16" fill="#94a3b8" font-family="Rajdhani, sans-serif">LAN B</text>
                    <line x1="140" y1="100" x2="170" y2="100" stroke="#64748b" stroke-width="3"/>
                    <line x1="230" y1="100" x2="260" y2="100" stroke="#64748b" stroke-width="3"/>
                </svg>
            `
        },
        {
            title: "L2 and L3 Switches",
            icon: "fa-network-wired",
            description: "L2 Switch: Forwards frames using MAC addresses. L3 Switch: Combines switching with routing capabilities for inter-VLAN communication.",
            visual: `
                <svg viewBox="0 0 400 200" class="w-full h-full">
                    <title>L2 Switch in a LAN vs L3 Switch for VLANs</title>
                    <rect x="40" y="120" width="100" height="30" rx="4" fill="#4f46e5"/>
                    <text x="90" y="140" text-anchor="middle" font-size="14" fill="#c7d2fe" font-family="Rajdhani, sans-serif">L2 Switch</text>
                    <line x1="50" y1="70" x2="50" y2="120" stroke="#64748b" stroke-width="3"/>
                    <rect x="40" y="50" width="20" height="20" rx="2" fill="#475569"/>
                    <line x1="90" y1="70" x2="90" y2="120" stroke="#64748b" stroke-width="3"/>
                    <rect x="80" y="50" width="20" height="20" rx="2" fill="#475569"/>
                    <line x1="130" y1="70" x2="130" y2="120" stroke="#64748b" stroke-width="3"/>
                    <rect x="120" y="50" width="20" height="20" rx="2" fill="#475569"/>
                    <rect x="240" y="120" width="100" height="30" rx="4" fill="#818cf8"/>
                    <text x="290" y="140" text-anchor="middle" font-size="14" fill="#1e1b4b" font-family="Rajdhani, sans-serif">L3 Switch</text>
                    <rect x="200" y="50" width="80" height="40" rx="6" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
                    <text x="240" y="76" text-anchor="middle" font-size="12" font-family="Rajdhani, sans-serif" fill="#f59e0b">VLAN 10</text>
                    <line x1="220" y1="90" x2="270" y2="120" stroke="#64748b" stroke-width="3"/>
                    <rect x="300" y="50" width="80" height="40" rx="6" fill="#334155" stroke="#10b981" stroke-width="2"/>
                    <text x="340" y="76" text-anchor="middle" font-size="12" font-family="Rajdhani, sans-serif" fill="#10b981">VLAN 20</text>
                    <line x1="320" y1="90" x2="310" y2="120" stroke="#64748b" stroke-width="3"/>
                </svg>
            `
        }
        // Add more component topics here...
    ],

    // Section metadata
    metadata: {
        sectionNumber: 1,
        title: "Network Fundamentals",
        totalTopics: 35,
        subsections: [
            { id: "components", title: "1.1 Network Components", count: 9 },
            { id: "topology", title: "1.2 Network Topology Architectures", count: 6 },
            { id: "cabling", title: "1.3 Physical Interface and Cabling", count: 4 },
            { id: "issues", title: "1.4 Interface and Cable Issues", count: 2 },
            { id: "tcpUdp", title: "1.5 Compare TCP to UDP", count: 2 },
            { id: "ipv4", title: "1.6 Configure and verify IPv4", count: 2 },
            { id: "privateIpv4", title: "1.7 Private IPv4 addressing", count: 2 },
            { id: "ipv6", title: "1.8 Configure and verify IPv6", count: 2 },
            { id: "ipv6Types", title: "1.9 Describe IPv6 address types", count: 3 },
            { id: "clientOs", title: "1.10 Verify IP parameters", count: 2 },
            { id: "wireless", title: "1.11 Describe wireless principles", count: 2 },
            { id: "virtualization", title: "1.12 Virtualization fundamentals", count: 1 },
            { id: "switching", title: "1.13 Describe switching concepts", count: 2 }
        ]
    }
};

// Export for use in section1.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Section1Topics;
}