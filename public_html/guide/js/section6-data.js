/**
 * CCNA Section 6: Automation and Programmability - Complete Topic Data
 * This data is structured to be used with section6.html
 */

const SECTION6_DATA = {
    automation: [
        {
            title: "Traditional vs SDN",
            icon: "fa-exchange-alt",
            description: "Traditional networks are managed device-by-device (distributed control plane). Controller-based networks centralize the control plane, allowing for network-wide automation, policy enforcement, and simplified management.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Traditional vs Controller-Based Networks</title>
                <text x="80" y="30" font-size="12" text-anchor="middle" fill="#e2e8f0">Traditional</text>
                <circle cx="80" cy="80" r="15" fill="#334155"/><circle cx="50" cy="130" r="15" fill="#334155"/><circle cx="110" cy="130" r="15" fill="#334155"/>
                <text x="80" y="160" font-size="10" text-anchor="middle" fill="#94a3b8">CLI to each device</text>

                <text x="300" y="30" font-size="12" text-anchor="middle" fill="#e2e8f0">Controller-Based</text>
                <rect x="275" y="50" width="50" height="30" rx="3" fill="#6366f1"/><text x="300" y="70" text-anchor="middle" font-size="10" fill="white">Controller</text>
                <circle cx="260" cy="130" r="15" fill="#334155"/><circle cx="300" cy="130" r="15" fill="#334155"/><circle cx="340" cy="130" r="15" fill="#334155"/>
                <path d="M300,80 L260,115" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <path d="M300,80 L300,115" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <path d="M300,80 L340,115" stroke="#94a3b8" stroke-dasharray="2,2"/>
            </svg>`
        },
        {
            title: "SDN Architecture",
            icon: "fa-sitemap",
            description: "In a software-defined architecture, the control plane (decision making) is separated from the data plane (packet forwarding). This model uses an underlay (physical network) and an overlay (virtual network), managed by a central controller.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Control Plane and Data Plane Separation</title>
                <rect x="50" y="40" width="300" height="40" rx="5" fill="#6366f1"/><text x="200" y="65" text-anchor="middle" fill="white">Control Plane (The Brains)</text>
                <rect x="50" y="120" width="300" height="40" rx="5" fill="#334155"/><text x="200" y="145" text-anchor="middle" fill="white">Data Plane (The Muscle)</text>
                <text x="200" y="100" font-size="12" fill="#94a3b8" text-anchor="middle">Separation</text>
            </svg>`
        },
        {
            title: "Network APIs",
            icon: "fa-arrows-alt-v",
            description: "Southbound APIs (e.g., OpenFlow, NETCONF) allow a network controller to communicate with and manage the underlying network devices. Northbound APIs allow applications to access the controller's services and data.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Northbound and Southbound APIs</title>
                <rect x="100" y="30" width="200" height="30" rx="3" fill="#1e293b"/><text x="200" y="50" text-anchor="middle" fill="white">Applications</text>
                <text x="200" y="75" font-size="12" fill="#94a3b8">↑ Northbound API ↓</text>
                <rect x="125" y="85" width="150" height="30" rx="3" fill="#6366f1"/><text x="200" y="105" text-anchor="middle" fill="white">Network Controller</text>
                <text x="200" y="135" font-size="12" fill="#94a3b8">↑ Southbound API ↓</text>
                <circle cx="150" cy="155" r="15" fill="#334155"/><circle cx="200" cy="155" r="15" fill="#334155"/><circle cx="250" cy="155" r="15" fill="#334155"/>
            </svg>`
        },
    ],
    configManagement: [
        {
            title: "Config Tools",
            icon: "fa-cogs",
            description: "These are popular configuration management tools. Puppet and Chef typically use a client-server model with agents on devices, while Ansible is agentless, using SSH to push configurations to devices. All help automate device setup and maintenance.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Configuration Management Tools</title>
                <text x="80" y="60" font-size="12" fill="#e2e8f0" text-anchor="middle">Puppet</text>
                <circle cx="80" cy="100" r="20" fill="#f59e0b"/>
                <text x="200" y="60" font-size="12" fill="#e2e8f0" text-anchor="middle">Chef</text>
                <circle cx="200" cy="100" r="20" fill="#f87171"/>
                <text x="320" y="60" font-size="12" fill="#e2e8f0" text-anchor="middle">Ansible</text>
                <circle cx="320" cy="100" r="20" fill="#3b82f6"/>
                <text x="200" y="150" font-size="12" fill="#94a3b8" text-anchor="middle">Automating System Configurations</text>
            </svg>`
        }
    ],
    restApi: [
        {
            title: "REST-based APIs",
            icon: "fa-code-branch",
            description: "A REST (Representational State Transfer) API is a popular way for systems to communicate. It uses standard HTTP verbs (GET, POST, PUT, DELETE) for actions (CRUD - Create, Read, Update, Delete) and typically uses JSON for data encoding.",
            visual: `<svg viewBox="0 0 400 200">
                <title>REST API Verbs</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#1e293b"/><text x="80" y="105" font-size="10" fill="white" text-anchor="middle">Client</text>
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#6366f1"/><text x="320" y="105" font-size="10" fill="white" text-anchor="middle">API Server</text>
                
                <path d="M115,90 h170" stroke="#10b981" marker-end="url(#arrow-green)"/><text x="200" y="85" font-size="10" fill="#10b981">GET /users</text>
                <path d="M285,110 h-170" stroke="#94a3b8" marker-end="url(#arrow)"/><text x="200" y="125" font-size="10" fill="#94a3b8">200 OK + JSON data</text>
                <defs>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker>
                </defs>
            </svg>`
        }
    ],
    configFile: [
        {
            title: "Cisco DNA Center",
            icon: "fa-tachometer-alt",
            description: "Cisco DNA Center is a network controller and management dashboard. It contrasts with traditional device management (CLI per device) by providing a centralized GUI for network design, policy, provisioning, and assurance.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Cisco DNA Center vs Traditional Management</title>
                <text x="80" y="60" font-size="12" fill="#94a3b8" text-anchor="middle">Traditional CLI</text>
                <rect x="30" y="80" width="100" height="50" rx="3" fill="#1e293b"/>
                <text x="80" y="105" font-size="10" fill="white" text-anchor="middle">> enable...</text>

                <text x="300" y="60" font-size="12" fill="#6366f1" text-anchor="middle">DNA Center GUI</text>
                <rect x="250" y="80" width="100" height="50" rx="3" fill="#334155"/>
                <circle cx="275" cy="105" r="5" fill="#10b981"/>
                <path d="M285,110 L335,90" stroke="#3b82f6"/>
            </svg>`
        }
    ],
    json: [
        {
            title: "JSON Data",
            icon: "fa-file-code",
            description: "JSON (JavaScript Object Notation) is a lightweight, human-readable data format. It consists of key-value pairs (like a dictionary) and ordered lists (arrays). It is commonly used in REST APIs for exchanging data.",
            visual: `<svg viewBox="0 0 400 200">
                <title>JSON Data Structure</title>
                <rect x="20" y="30" width="360" height="140" rx="5" fill="#1e293b" />
                <text x="40" y="60" font-family="monospace" font-size="12" fill="white">{</text>
                <text x="60" y="80" font-family="monospace" font-size="12" fill="#f59e0b">"hostname"</text>
                <text x="140" y="80" font-family="monospace" font-size="12" fill="white">: </text>
                <text x="160" y="80" font-family="monospace" font-size="12" fill="#10b981">"Router1"</text>
                <text x="220" y="80" font-family="monospace" font-size="12" fill="white">,</text>
                
                <text x="60" y="100" font-family="monospace" font-size="12" fill="#f59e0b">"interfaces"</text>
                <text x="145" y="100" font-family="monospace" font-size="12" fill="white">: [ </text>
                <text x="180" y="100" font-family="monospace" font-size="12" fill="#10b981">"Gi0/0"</text>
                <text x="230" y="100" font-family="monospace" font-size="12" fill="white">,</text>
                <text x="245" y="100" font-family="monospace" font-size="12" fill="#10b981">"Gi0/1"</text>
                <text x="295" y="100" font-family="monospace" font-size="12" fill="white"> ]</text>
                
                <text x="40" y="140" font-family="monospace" font-size="12" fill="white">}</text>
            </svg>`
        }
    ],
    // Section metadata
    metadata: {
        sectionNumber: 6,
        title: "Automation & Programmability",
        subsections: {
            automation: { title: "6.1-6.3 Network Automation", count: 3 },
            configFile: { title: "6.4 Device Management", count: 1 },
            restApi: { title: "6.5 REST APIs", count: 1 },
            configManagement: { title: "6.6 Config Management Tools", count: 1 },
            json: { title: "6.7 JSON", count: 1 },
        },
        // Dynamic calculation of total topics from subsections
        get totalTopics() {
            return Object.values(this.subsections).reduce((total, section) => total + section.count, 0);
        }
    }
};

// Export for global use
window.SECTION6_DATA = SECTION6_DATA;

// Register with section registry for dynamic topic totals
document.addEventListener('DOMContentLoaded', () => {
    if (window.CCNA_SECTION_REGISTRY) {
        window.CCNA_SECTION_REGISTRY.registerSectionData(6, SECTION6_DATA);
    }
    // Dispatch event for other listeners
    window.dispatchEvent(new CustomEvent('sectionDataLoaded', {
        detail: { sectionNumber: 6, sectionData: SECTION6_DATA }
    }));
});
