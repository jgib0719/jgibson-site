/**
 * CCNA Section 6: Automation and Programmability - Complete Topic Data
 * This data is structured to be used with section6.html
 */

const SECTION6_DATA = {
    // 6.1 - Explain how automation impacts network management
    automationImpact: [
        {
            title: "Automation Benefits",
            icon: "fa-robot",
            description: "Network automation reduces human error, increases consistency, speeds deployment, and improves scalability. It transforms how networks are designed, configured, monitored, and maintained.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Automation Benefits</title>
                <rect x="50" y="40" width="80" height="40" rx="5" fill="#ef4444"/>
                <text x="90" y="65" text-anchor="middle" fill="white" font-size="10">Manual Errors</text>
                <text x="90" y="100" text-anchor="middle" fill="#94a3b8" font-size="10">High Risk</text>
                
                <rect x="160" y="40" width="80" height="40" rx="5" fill="#f59e0b"/>
                <text x="200" y="65" text-anchor="middle" fill="white" font-size="10">Slow Deployment</text>
                <text x="200" y="100" text-anchor="middle" fill="#94a3b8" font-size="10">Manual Process</text>
                
                <rect x="270" y="40" width="80" height="40" rx="5" fill="#10b981"/>
                <text x="310" y="65" text-anchor="middle" fill="white" font-size="10">Automated</text>
                <text x="310" y="100" text-anchor="middle" fill="#94a3b8" font-size="10">Fast & Reliable</text>
                
                <path d="M130,60 h25" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <path d="M240,60 h25" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
            </svg>`
        },
        {
            title: "Automation Tools & Technologies",
            icon: "fa-tools",
            description: "Modern network automation leverages APIs, configuration management tools, orchestration platforms, and scripting languages to enable programmatic network management and control.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Automation Tools & Technologies</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Network Automation Toolchain</text>
                
                <!-- APIs Layer -->
                <rect x="50" y="40" width="300" height="25" rx="3" fill="#6366f1"/>
                <text x="200" y="57" text-anchor="middle" fill="white" font-size="10">APIs (REST, NETCONF, RESTCONF)</text>
                
                <!-- Tools Layer -->
                <rect x="50" y="75" width="90" height="25" rx="3" fill="#10b981"/>
                <text x="95" y="92" text-anchor="middle" fill="white" font-size="9">Ansible</text>
                
                <rect x="155" y="75" width="90" height="25" rx="3" fill="#10b981"/>
                <text x="200" y="92" text-anchor="middle" fill="white" font-size="9">Python</text>
                
                <rect x="260" y="75" width="90" height="25" rx="3" fill="#10b981"/>
                <text x="305" y="92" text-anchor="middle" fill="white" font-size="9">Terraform</text>
                
                <!-- Orchestration Layer -->
                <rect x="50" y="110" width="140" height="25" rx="3" fill="#f59e0b"/>
                <text x="120" y="127" text-anchor="middle" fill="white" font-size="9">DNA Center</text>
                
                <rect x="210" y="110" width="140" height="25" rx="3" fill="#f59e0b"/>
                <text x="280" y="127" text-anchor="middle" fill="white" font-size="9">NSO</text>
                
                <!-- Network Devices -->
                <circle cx="100" cy="165" r="15" fill="#334155"/>
                <text x="100" y="170" text-anchor="middle" fill="white" font-size="8">Device</text>
                
                <circle cx="200" cy="165" r="15" fill="#334155"/>
                <text x="200" y="170" text-anchor="middle" fill="white" font-size="8">Device</text>
                
                <circle cx="300" cy="165" r="15" fill="#334155"/>
                <text x="300" y="170" text-anchor="middle" fill="white" font-size="8">Device</text>
                
                <!-- Connection Lines -->
                <path d="M120,135 L100,150" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <path d="M200,135 L200,150" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <path d="M280,135 L300,150" stroke="#94a3b8" stroke-dasharray="2,2"/>
            </svg>`
        },
        {
            title: "Automation Workflows",
            icon: "fa-project-diagram",
            description: "Network automation follows structured workflows including discovery, modeling, validation, deployment, and monitoring. These processes ensure reliable and repeatable network changes.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Automation Workflow</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Automation Workflow Process</text>
                
                <!-- Step 1: Discovery -->
                <rect x="20" y="50" width="70" height="30" rx="5" fill="#3b82f6"/>
                <text x="55" y="70" text-anchor="middle" fill="white" font-size="9">Discovery</text>
                <text x="55" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">Inventory</text>
                
                <!-- Step 2: Model -->
                <rect x="110" y="50" width="70" height="30" rx="5" fill="#10b981"/>
                <text x="145" y="70" text-anchor="middle" fill="white" font-size="9">Model</text>
                <text x="145" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">Template</text>
                
                <!-- Step 3: Validate -->
                <rect x="200" y="50" width="70" height="30" rx="5" fill="#f59e0b"/>
                <text x="235" y="70" text-anchor="middle" fill="white" font-size="9">Validate</text>
                <text x="235" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">Test</text>
                
                <!-- Step 4: Deploy -->
                <rect x="290" y="50" width="70" height="30" rx="5" fill="#ef4444"/>
                <text x="325" y="70" text-anchor="middle" fill="white" font-size="9">Deploy</text>
                <text x="325" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">Execute</text>
                
                <!-- Step 5: Monitor -->
                <rect x="155" y="120" width="70" height="30" rx="5" fill="#9333ea"/>
                <text x="190" y="140" text-anchor="middle" fill="white" font-size="9">Monitor</text>
                <text x="190" y="165" text-anchor="middle" fill="#94a3b8" font-size="8">Verify</text>
                
                <!-- Flow Arrows -->
                <path d="M90,65 h15" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-workflow)"/>
                <path d="M180,65 h15" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-workflow)"/>
                <path d="M270,65 h15" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-workflow)"/>
                <path d="M325,80 L325,95 L225,95 L225,105 L190,105 L190,120" stroke="#94a3b8" stroke-width="2" fill="none" marker-end="url(#arrow-workflow)"/>
                
                <defs>
                    <marker id="arrow-workflow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Infrastructure as Code",
            icon: "fa-code-branch",
            description: "Infrastructure as Code (IaC) treats network configurations as software code, enabling version control, testing, and automated deployment of network infrastructure changes.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Infrastructure as Code</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Infrastructure as Code Workflow</text>
                
                <!-- Git Repository -->
                <rect x="50" y="50" width="80" height="40" rx="5" fill="#6366f1"/>
                <text x="90" y="73" text-anchor="middle" fill="white" font-size="10">Git Repo</text>
                <text x="90" y="105" text-anchor="middle" fill="#94a3b8" font-size="9">Version Control</text>
                
                <!-- CI/CD Pipeline -->
                <rect x="160" y="50" width="80" height="40" rx="5" fill="#10b981"/>
                <text x="200" y="73" text-anchor="middle" fill="white" font-size="10">CI/CD</text>
                <text x="200" y="105" text-anchor="middle" fill="#94a3b8" font-size="9">Automation</text>
                
                <!-- Network Deployment -->
                <rect x="270" y="50" width="80" height="40" rx="5" fill="#f59e0b"/>
                <text x="310" y="73" text-anchor="middle" fill="white" font-size="10">Deploy</text>
                <text x="310" y="105" text-anchor="middle" fill="#94a3b8" font-size="9">Infrastructure</text>
                
                <!-- Configuration Files -->
                <rect x="80" y="130" width="60" height="25" rx="3" fill="#334155"/>
                <text x="110" y="147" text-anchor="middle" fill="white" font-size="9">Templates</text>
                
                <rect x="170" y="130" width="60" height="25" rx="3" fill="#334155"/>
                <text x="200" y="147" text-anchor="middle" fill="white" font-size="9">Playbooks</text>
                
                <rect x="260" y="130" width="60" height="25" rx="3" fill="#334155"/>
                <text x="290" y="147" text-anchor="middle" fill="white" font-size="9">Configs</text>
                
                <!-- Flow Arrows -->
                <path d="M130,70 h25" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-iac)"/>
                <path d="M240,70 h25" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-iac)"/>
                
                <!-- Bidirectional arrows to files -->
                <path d="M110,90 L110,130" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <path d="M200,90 L200,130" stroke="#94a3b8" stroke-dasharray="2,2"/>
                <path d="M290,90 L290,130" stroke="#94a3b8" stroke-dasharray="2,2"/>
                
                <defs>
                    <marker id="arrow-iac" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                </defs>
            </svg>`
        }
    ],
    // 6.2 - Compare traditional networks with controller-based networking
    traditionalVsController: [
        {
            title: "Traditional Networks",
            icon: "fa-network-wired",
            description: "Traditional networks use distributed control planes where each device makes independent decisions. Configuration is done device-by-device through CLI, resulting in complex management and potential inconsistencies.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Traditional Network Architecture</title>
                <text x="200" y="30" font-size="14" text-anchor="middle" fill="#e2e8f0">Traditional Network</text>
                
                <circle cx="100" cy="80" r="20" fill="#334155"/>
                <text x="100" y="85" text-anchor="middle" fill="white" font-size="8">Router</text>
                <text x="100" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">CLI Config</text>
                
                <circle cx="200" cy="80" r="20" fill="#334155"/>
                <text x="200" y="85" text-anchor="middle" fill="white" font-size="8">Switch</text>
                <text x="200" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">CLI Config</text>
                
                <circle cx="300" cy="80" r="20" fill="#334155"/>
                <text x="300" y="85" text-anchor="middle" fill="white" font-size="8">Router</text>
                <text x="300" y="110" text-anchor="middle" fill="#94a3b8" font-size="10">CLI Config</text>
                
                <path d="M120,80 h60" stroke="#94a3b8"/>
                <path d="M220,80 h60" stroke="#94a3b8"/>
                
                <text x="200" y="150" text-anchor="middle" fill="#ef4444" font-size="12">Distributed Control</text>
                <text x="200" y="170" text-anchor="middle" fill="#94a3b8" font-size="10">Each device makes independent decisions</text>
            </svg>`
        },
        {
            title: "Controller-Based Networks",
            icon: "fa-sitemap",
            description: "Controller-based networks centralize the control plane in a network controller. This provides network-wide visibility, centralized policy enforcement, and simplified management through automation.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Controller-Based Network Architecture</title>
                <text x="200" y="30" font-size="14" text-anchor="middle" fill="#e2e8f0">Controller-Based Network</text>
                
                <rect x="175" y="50" width="50" height="30" rx="5" fill="#6366f1"/>
                <text x="200" y="70" text-anchor="middle" fill="white" font-size="10">Controller</text>
                
                <circle cx="100" cy="130" r="20" fill="#334155"/>
                <text x="100" y="135" text-anchor="middle" fill="white" font-size="8">Device</text>
                
                <circle cx="200" cy="130" r="20" fill="#334155"/>
                <text x="200" y="135" text-anchor="middle" fill="white" font-size="8">Device</text>
                
                <circle cx="300" cy="130" r="20" fill="#334155"/>
                <text x="300" y="135" text-anchor="middle" fill="white" font-size="8">Device</text>
                
                <path d="M180,80 L100,110" stroke="#10b981" stroke-dasharray="3,3"/>
                <path d="M200,80 L200,110" stroke="#10b981" stroke-dasharray="3,3"/>
                <path d="M220,80 L300,110" stroke="#10b981" stroke-dasharray="3,3"/>
                
                <text x="200" y="170" text-anchor="middle" fill="#10b981" font-size="12">Centralized Control</text>
                <text x="200" y="190" text-anchor="middle" fill="#94a3b8" font-size="10">Controller makes network-wide decisions</text>
            </svg>`
        }
    ],
    // 6.3 - Describe controller-based, software defined architecture (overlay, underlay, and fabric)
    // 6.3.a - Separation of control plane and data plane 
    // 6.3.b - Northbound and Southbound APIs
    sdnArchitecture: [
        {
            title: "Control vs Data Plane",
            icon: "fa-layer-group",
            description: "In SDN architecture, the control plane (intelligence/decision making) is separated from the data plane (packet forwarding). This separation enables centralized network control and programmability.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Control Plane and Data Plane Separation</title>
                <rect x="50" y="40" width="300" height="40" rx="5" fill="#6366f1"/>
                <text x="200" y="65" text-anchor="middle" fill="white" font-size="12">Control Plane (Brain)</text>
                <text x="200" y="90" font-size="10" fill="#94a3b8" text-anchor="middle">Routing decisions, policies, network state</text>
                
                <path d="M200,80 L200,120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
                <text x="200" y="105" font-size="10" fill="#94a3b8" text-anchor="middle">API Communication</text>
                
                <rect x="50" y="130" width="300" height="40" rx="5" fill="#334155"/>
                <text x="200" y="155" text-anchor="middle" fill="white" font-size="12">Data Plane (Muscle)</text>
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Packet forwarding based on control plane instructions</text>
            </svg>`
        },
        {
            title: "Northbound APIs",
            icon: "fa-arrow-up",
            description: "Northbound APIs allow applications and orchestration platforms to communicate with the network controller. They enable network services consumption and policy definition from higher-level applications.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Northbound API Communication</title>
                <rect x="100" y="30" width="200" height="30" rx="3" fill="#1e293b"/>
                <text x="200" y="50" text-anchor="middle" fill="white" font-size="11">Network Applications</text>
                
                <path d="M200,60 L200,85" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-down)"/>
                <text x="220" y="75" font-size="10" fill="#10b981">Northbound API</text>
                <text x="220" y="88" font-size="9" fill="#94a3b8">REST, GraphQL, etc.</text>
                
                <rect x="125" y="95" width="150" height="30" rx="3" fill="#6366f1"/>
                <text x="200" y="115" text-anchor="middle" fill="white" font-size="11">SDN Controller</text>
                
                <text x="200" y="145" font-size="10" fill="#94a3b8" text-anchor="middle">Policy, Orchestration, Analytics</text>
                
                <defs>
                    <marker id="arrow-down" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Southbound APIs",
            icon: "fa-arrow-down",
            description: "Southbound APIs allow the network controller to communicate with and program network devices. Common protocols include OpenFlow, NETCONF, RESTCONF, and vendor-specific APIs.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Southbound API Communication</title>
                <rect x="125" y="30" width="150" height="30" rx="3" fill="#6366f1"/>
                <text x="200" y="50" text-anchor="middle" fill="white" font-size="11">SDN Controller</text>
                
                <path d="M200,60 L200,90" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-down-orange)"/>
                <text x="220" y="75" font-size="10" fill="#f59e0b">Southbound API</text>
                <text x="220" y="88" font-size="9" fill="#94a3b8">OpenFlow, NETCONF</text>
                
                <circle cx="150" cy="125" r="15" fill="#334155"/>
                <text x="150" y="130" text-anchor="middle" fill="white" font-size="8">Switch</text>
                
                <circle cx="200" cy="125" r="15" fill="#334155"/>
                <text x="200" y="130" text-anchor="middle" fill="white" font-size="8">Router</text>
                
                <circle cx="250" cy="125" r="15" fill="#334155"/>
                <text x="250" y="130" text-anchor="middle" fill="white" font-size="8">AP</text>
                
                <path d="M185,90 L150,110" stroke="#f59e0b" stroke-width="2"/>
                <path d="M215,90 L250,110" stroke="#f59e0b" stroke-width="2"/>
                
                <text x="200" y="170" font-size="10" fill="#94a3b8" text-anchor="middle">Device Programming & Control</text>
                
                <defs>
                    <marker id="arrow-down-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Overlay & Underlay",
            icon: "fa-network-wired", 
            description: "The underlay is the physical network infrastructure that provides connectivity. The overlay is a virtual network built on top of the underlay, providing logical network services and abstraction.",
            visual: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="200" fill="#1a1a2e"/>
                <text x="200" y="30" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Overlay & Underlay Networks</text>
                
                <!-- Overlay (Virtual) Layer -->
                <rect x="50" y="50" width="300" height="35" rx="8" fill="#6366f1" stroke="#8b5cf6" stroke-width="2"/>
                <text x="200" y="72" text-anchor="middle" fill="white" font-size="14" font-weight="bold">OVERLAY (Virtual)</text>
                
                <!-- Virtual Machines -->
                <circle cx="120" cy="67" r="8" fill="#a855f7" stroke="white" stroke-width="2"/>
                <text x="120" y="72" text-anchor="middle" fill="white" font-size="8">VM</text>
                
                <circle cx="200" cy="67" r="8" fill="#a855f7" stroke="white" stroke-width="2"/>
                <text x="200" y="72" text-anchor="middle" fill="white" font-size="8">VM</text>
                
                <circle cx="280" cy="67" r="8" fill="#a855f7" stroke="white" stroke-width="2"/>
                <text x="280" y="72" text-anchor="middle" fill="white" font-size="8">VM</text>
                
                <!-- Connection arrows -->
                <line x1="120" y1="85" x2="120" y2="105" stroke="#f59e0b" stroke-width="4"/>
                <line x1="200" y1="85" x2="200" y2="105" stroke="#f59e0b" stroke-width="4"/>
                <line x1="280" y1="85" x2="280" y2="105" stroke="#f59e0b" stroke-width="4"/>
                
                <!-- Underlay (Physical) Layer -->
                <rect x="50" y="115" width="300" height="35" rx="8" fill="#374151" stroke="#6b7280" stroke-width="2"/>
                <text x="200" y="137" text-anchor="middle" fill="white" font-size="14" font-weight="bold">UNDERLAY (Physical)</text>
                
                <!-- Physical Switches -->
                <rect x="110" y="125" width="20" height="15" rx="3" fill="#1f2937" stroke="#9ca3af" stroke-width="2"/>
                <text x="120" y="135" text-anchor="middle" fill="white" font-size="8">SW</text>
                
                <rect x="190" y="125" width="20" height="15" rx="3" fill="#1f2937" stroke="#9ca3af" stroke-width="2"/>
                <text x="200" y="135" text-anchor="middle" fill="white" font-size="8">SW</text>
                
                <rect x="270" y="125" width="20" height="15" rx="3" fill="#1f2937" stroke="#9ca3af" stroke-width="2"/>
                <text x="280" y="135" text-anchor="middle" fill="white" font-size="8">SW</text>
                
                <!-- Physical connections -->
                <line x1="130" y1="132" x2="190" y2="132" stroke="#9ca3af" stroke-width="3"/>
                <line x1="210" y1="132" x2="270" y2="132" stroke="#9ca3af" stroke-width="3"/>
                
                <!-- Tunnel connections -->
                <line x1="128" y1="67" x2="192" y2="67" stroke="#10b981" stroke-width="3" stroke-dasharray="6,3"/>
                <line x1="208" y1="67" x2="272" y2="67" stroke="#10b981" stroke-width="3" stroke-dasharray="6,3"/>
                
                <!-- Side labels -->
                <text x="25" y="67" font-size="12" fill="#6366f1" font-weight="bold">Virtual</text>
                <text x="25" y="132" font-size="12" fill="#9ca3af" font-weight="bold">Physical</text>
                
                <!-- Bottom description -->
                <text x="200" y="175" font-size="12" fill="#d1d5db" text-anchor="middle">Logical networks abstracted from physical infrastructure</text>
            </svg>`
        },
        {
            title: "SDN Controllers",
            icon: "fa-network-wired",
            description: "SDN controllers are centralized software platforms that provide network intelligence, policy management, and device orchestration. Modern controllers offer clustering, APIs, and multi-vendor support.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SDN Controller Architecture</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">SDN Controller Ecosystem</text>
                
                <!-- Controller Cluster -->
                <rect x="150" y="40" width="40" height="30" rx="3" fill="#6366f1"/>
                <text x="170" y="58" text-anchor="middle" fill="white" font-size="8">Ctrl 1</text>
                
                <rect x="200" y="40" width="40" height="30" rx="3" fill="#6366f1"/>
                <text x="220" y="58" text-anchor="middle" fill="white" font-size="8">Ctrl 2</text>
                
                <rect x="250" y="40" width="40" height="30" rx="3" fill="#6366f1"/>
                <text x="270" y="58" text-anchor="middle" fill="white" font-size="8">Ctrl 3</text>
                
                <!-- Cluster connections -->
                <path d="M190,55 L200,55" stroke="#10b981" stroke-width="2"/>
                <path d="M240,55 L250,55" stroke="#10b981" stroke-width="2"/>
                
                <text x="200" y="85" font-size="10" fill="#94a3b8" text-anchor="middle">Controller Cluster (HA)</text>
                
                <!-- Applications above -->
                <rect x="100" y="10" width="50" height="20" rx="2" fill="#1e293b"/>
                <text x="125" y="23" text-anchor="middle" fill="white" font-size="8">Apps</text>
                
                <rect x="175" y="10" width="50" height="20" rx="2" fill="#1e293b"/>
                <text x="200" y="23" text-anchor="middle" fill="white" font-size="8">GUI</text>
                
                <rect x="250" y="10" width="50" height="20" rx="2" fill="#1e293b"/>
                <text x="275" y="23" text-anchor="middle" fill="white" font-size="8">APIs</text>
                
                <!-- Northbound connections -->
                <path d="M125,30 L170,40" stroke="#10b981" stroke-width="2"/>
                <path d="M200,30 L220,40" stroke="#10b981" stroke-width="2"/>
                <path d="M275,30 L270,40" stroke="#10b981" stroke-width="2"/>
                
                <!-- Network devices below -->
                <circle cx="150" cy="130" r="12" fill="#334155"/>
                <text x="150" y="135" text-anchor="middle" fill="white" font-size="8">SW</text>
                
                <circle cx="200" cy="130" r="12" fill="#334155"/>
                <text x="200" y="135" text-anchor="middle" fill="white" font-size="8">RTR</text>
                
                <circle cx="250" cy="130" r="12" fill="#334155"/>
                <text x="250" y="135" text-anchor="middle" fill="white" font-size="8">AP</text>
                
                <!-- Southbound connections -->
                <path d="M170,70 L150,118" stroke="#f59e0b" stroke-width="2"/>
                <path d="M220,70 L200,118" stroke="#f59e0b" stroke-width="2"/>
                <path d="M270,70 L250,118" stroke="#f59e0b" stroke-width="2"/>
                
                <text x="200" y="160" font-size="10" fill="#94a3b8" text-anchor="middle">DNA Center, OpenDaylight, ONOS</text>
            </svg>`
        },
        {
            title: "SDN Use Cases",
            icon: "fa-sitemap",
            description: "SDN enables advanced network services including data center automation, campus orchestration, service chaining, and cloud integration. It transforms network operations from manual to programmatic.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SDN Use Cases and Applications</title>
                <text x="200" y="20" font-size="14" text-anchor="middle" fill="#e2e8f0">SDN Applications</text>
                
                <!-- Data Center -->
                <rect x="30" y="40" width="80" height="50" rx="5" fill="#2ECC71"/>
                <text x="70" y="60" text-anchor="middle" fill="white" font-size="10">Data Center</text>
                <text x="70" y="75" text-anchor="middle" fill="white" font-size="8">Automation</text>
                
                <!-- Campus -->
                <rect x="130" y="40" width="80" height="50" rx="5" fill="#3498DB"/>
                <text x="170" y="60" text-anchor="middle" fill="white" font-size="10">Campus</text>
                <text x="170" y="75" text-anchor="middle" fill="white" font-size="8">Orchestration</text>
                
                <!-- Service Chaining -->
                <rect x="230" y="40" width="80" height="50" rx="5" fill="#E67E22"/>
                <text x="270" y="60" text-anchor="middle" fill="white" font-size="10">Service</text>
                <text x="270" y="75" text-anchor="middle" fill="white" font-size="8">Chaining</text>
                
                <!-- Cloud Integration -->
                <rect x="330" y="40" width="80" height="50" rx="5" fill="#9B59B6"/>
                <text x="370" y="60" text-anchor="middle" fill="white" font-size="10">Cloud</text>
                <text x="370" y="75" text-anchor="middle" fill="white" font-size="8">Integration</text>
                
                <!-- Central Controller -->
                <rect x="150" y="120" width="100" height="30" rx="5" fill="#34495E"/>
                <text x="200" y="140" text-anchor="middle" fill="white" font-size="12">SDN Controller</text>
                
                <!-- Connections -->
                <path d="M70,90 Q70,105 150,130" stroke="#94a3b8" stroke-width="2" fill="none"/>
                <path d="M170,90 L170,120" stroke="#94a3b8" stroke-width="2"/>
                <path d="M270,90 Q270,105 250,130" stroke="#94a3b8" stroke-width="2" fill="none"/>
                <path d="M370,90 Q370,105 250,130" stroke="#94a3b8" stroke-width="2" fill="none"/>
                
                <text x="200" y="175" font-size="10" fill="#94a3b8" text-anchor="middle">Centralized Policy & Automation</text>
            </svg>`
        },
        {
            title: "SDN Security",
            icon: "fa-shield-alt",
            description: "SDN security involves controller hardening, API authentication, network isolation, and automated security policy enforcement. Centralized control enables consistent security posture across the network.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SDN Security Architecture</title>
                <text x="200" y="20" font-size="14" text-anchor="middle" fill="#e2e8f0">SDN Security Model</text>
                
                <!-- Security Perimeter -->
                <rect x="40" y="35" width="320" height="120" rx="8" fill="none" stroke="#E74C3C" stroke-width="3" stroke-dasharray="5,5"/>
                <text x="50" y="50" font-size="10" fill="#E74C3C">Security Perimeter</text>
                
                <!-- Controller with security -->
                <rect x="175" y="60" width="50" height="30" rx="3" fill="#E74C3C"/>
                <text x="200" y="80" text-anchor="middle" fill="white" font-size="10">Controller</text>
                <circle cx="165" cy="75" r="8" fill="#F39C12"/>
                <text x="165" y="79" text-anchor="middle" fill="white" font-size="8">🔒</text>
                
                <!-- API Security -->
                <rect x="90" y="40" width="60" height="15" rx="2" fill="#9B59B6"/>
                <text x="120" y="51" text-anchor="middle" fill="white" font-size="8">API Auth</text>
                
                <!-- Micro-segmentation -->
                <rect x="60" y="110" width="40" height="25" rx="2" fill="#2ECC71" opacity="0.7"/>
                <text x="80" y="125" text-anchor="middle" fill="white" font-size="8">Seg A</text>
                
                <rect x="120" y="110" width="40" height="25" rx="2" fill="#3498DB" opacity="0.7"/>
                <text x="140" y="125" text-anchor="middle" fill="white" font-size="8">Seg B</text>
                
                <rect x="180" y="110" width="40" height="25" rx="2" fill="#E67E22" opacity="0.7"/>
                <text x="200" y="125" text-anchor="middle" fill="white" font-size="8">Seg C</text>
                
                <rect x="240" y="110" width="40" height="25" rx="2" fill="#9B59B6" opacity="0.7"/>
                <text x="260" y="125" text-anchor="middle" fill="white" font-size="8">Seg D</text>
                
                <!-- Security policies -->
                <path d="M200,90 L80,110" stroke="#E74C3C" stroke-width="2"/>
                <path d="M200,90 L140,110" stroke="#E74C3C" stroke-width="2"/>
                <path d="M200,90 L200,110" stroke="#E74C3C" stroke-width="2"/>
                <path d="M200,90 L260,110" stroke="#E74C3C" stroke-width="2"/>
                
                <text x="200" y="170" font-size="10" fill="#94a3b8" text-anchor="middle">Centralized Security Policy Enforcement</text>
            </svg>`
        }
    ],
    // 6.4 - Explain AI (generative and predictive) and machine learning in network operations
    aiMachineLearning: [
        {
            title: "AI Fundamentals",
            icon: "fa-brain",
            description: "Artificial Intelligence in networking encompasses various technologies that enable autonomous network operations, intelligent decision-making, and automated optimization. AI transforms reactive networks into proactive, self-managing systems.",
            visual: `<svg viewBox="0 0 400 200">
                <title>AI Fundamentals in Networking</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">AI Network Intelligence</text>
                
                <!-- Central AI Brain -->
                <circle cx="200" cy="80" r="30" fill="#00A8FF"/>
                <text x="200" y="87" text-anchor="middle" fill="white" font-size="14">AI</text>
                
                <!-- AI Components -->
                <rect x="60" y="130" width="70" height="25" rx="3" fill="#10b981"/>
                <text x="95" y="147" text-anchor="middle" fill="white" font-size="9">Learning</text>
                
                <rect x="140" y="130" width="70" height="25" rx="3" fill="#f59e0b"/>
                <text x="175" y="147" text-anchor="middle" fill="white" font-size="9">Reasoning</text>
                
                <rect x="220" y="130" width="70" height="25" rx="3" fill="#8b5cf6"/>
                <text x="255" y="147" text-anchor="middle" fill="white" font-size="9">Decision</text>
                
                <rect x="300" y="130" width="70" height="25" rx="3" fill="#ef4444"/>
                <text x="335" y="147" text-anchor="middle" fill="white" font-size="9">Action</text>
                
                <!-- Connections -->
                <path d="M180,105 L95,130" stroke="#94a3b8" stroke-width="2"/>
                <path d="M190,105 L175,130" stroke="#94a3b8" stroke-width="2"/>
                <path d="M210,105 L255,130" stroke="#94a3b8" stroke-width="2"/>
                <path d="M220,105 L335,130" stroke="#94a3b8" stroke-width="2"/>
                
                <text x="200" y="180" font-size="10" fill="#94a3b8" text-anchor="middle">Autonomous Network Intelligence</text>
            </svg>`
        },
        {
            title: "Generative AI in Networks",
            icon: "fa-magic",
            description: "Generative AI creates new content, configurations, and solutions for network operations. It can generate network designs, configuration scripts, troubleshooting procedures, and optimization recommendations based on learned patterns.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Generative AI in Networks</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Generative AI Applications</text>
                
                <!-- Input -->
                <rect x="30" y="50" width="80" height="30" rx="3" fill="#334155"/>
                <text x="70" y="70" text-anchor="middle" fill="white" font-size="9">Requirements</text>
                
                <!-- Generative AI Engine -->
                <circle cx="200" cy="65" r="25" fill="#2ECC71"/>
                <text x="200" y="72" text-anchor="middle" fill="white" font-size="10">Gen AI</text>
                
                <!-- Outputs -->
                <rect x="290" y="40" width="80" height="20" rx="3" fill="#10b981"/>
                <text x="330" y="53" text-anchor="middle" fill="white" font-size="8">Configs</text>
                
                <rect x="290" y="65" width="80" height="20" rx="3" fill="#f59e0b"/>
                <text x="330" y="78" text-anchor="middle" fill="white" font-size="8">Designs</text>
                
                <rect x="290" y="90" width="80" height="20" rx="3" fill="#8b5cf6"/>
                <text x="330" y="103" text-anchor="middle" fill="white" font-size="8">Scripts</text>
                
                <!-- Arrows -->
                <path d="M110,65 L175,65" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-gen)"/>
                <path d="M225,55 L290,50" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-gen)"/>
                <path d="M225,65 L290,75" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-gen)"/>
                <path d="M225,75 L290,100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-gen)"/>
                
                <!-- Examples -->
                <text x="70" y="140" font-size="9" fill="#94a3b8" text-anchor="middle">• Business needs</text>
                <text x="70" y="155" font-size="9" fill="#94a3b8" text-anchor="middle">• Performance goals</text>
                <text x="70" y="170" font-size="9" fill="#94a3b8" text-anchor="middle">• Security policies</text>
                
                <text x="330" y="140" font-size="9" fill="#94a3b8" text-anchor="middle">• Auto-generated</text>
                <text x="330" y="155" font-size="9" fill="#94a3b8" text-anchor="middle">• Optimized</text>
                <text x="330" y="170" font-size="9" fill="#94a3b8" text-anchor="middle">• Validated</text>
                
                <defs>
                    <marker id="arrow-gen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Machine Learning Models",
            icon: "fa-project-diagram",
            description: "Machine Learning models enable networks to learn from data patterns, classify traffic, detect anomalies, and optimize performance. Different ML algorithms serve specific networking use cases and requirements.",
            visual: `<svg viewBox="0 0 400 200">
                <title>ML Models in Networking</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">ML Model Types</text>
                
                <!-- Supervised Learning -->
                <rect x="50" y="50" width="90" height="35" rx="5" fill="#F39C12"/>
                <text x="95" y="70" text-anchor="middle" fill="white" font-size="10">Supervised</text>
                <text x="95" y="95" font-size="8" fill="#94a3b8" text-anchor="middle">Traffic Classification</text>
                
                <!-- Unsupervised Learning -->
                <rect x="160" y="50" width="90" height="35" rx="5" fill="#F39C12"/>
                <text x="205" y="70" text-anchor="middle" fill="white" font-size="10">Unsupervised</text>
                <text x="205" y="95" font-size="8" fill="#94a3b8" text-anchor="middle">Anomaly Detection</text>
                
                <!-- Reinforcement Learning -->
                <rect x="270" y="50" width="90" height="35" rx="5" fill="#F39C12"/>
                <text x="315" y="70" text-anchor="middle" fill="white" font-size="10">Reinforcement</text>
                <text x="315" y="95" font-size="8" fill="#94a3b8" text-anchor="middle">Path Optimization</text>
                
                <!-- Data Flow -->
                <rect x="140" y="130" width="120" height="25" rx="3" fill="#1e293b"/>
                <text x="200" y="147" text-anchor="middle" fill="white" font-size="10">Network Data Input</text>
                
                <!-- Arrows up -->
                <path d="M95,130 L95,85" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ml)"/>
                <path d="M205,130 L205,85" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ml)"/>
                <path d="M315,130 L315,85" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-ml)"/>
                
                <text x="200" y="175" font-size="10" fill="#94a3b8" text-anchor="middle">Training → Learning → Prediction</text>
                
                <defs>
                    <marker id="arrow-ml" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Predictive Analytics",
            icon: "fa-chart-line",
            description: "Predictive analytics uses historical network data to forecast future events, capacity needs, and potential failures. This enables proactive maintenance and optimal resource planning.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Predictive Network Analytics</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Predictive Analytics</text>
                
                <rect x="50" y="50" width="100" height="30" rx="3" fill="#1e293b"/>
                <text x="100" y="70" text-anchor="middle" fill="white" font-size="10">Historical Data</text>
                
                <path d="M150,65 h50" stroke="#E74C3C" stroke-width="3" marker-end="url(#arrow-red)"/>
                
                <circle cx="225" cy="65" r="20" fill="#E74C3C"/>
                <text x="225" y="70" text-anchor="middle" fill="white" font-size="8">ML</text>
                
                <path d="M245,65 h50" stroke="#E74C3C" stroke-width="3" marker-end="url(#arrow-red)"/>
                
                <rect x="310" y="50" width="80" height="30" rx="3" fill="#10b981"/>
                <text x="350" y="70" text-anchor="middle" fill="white" font-size="10">Predictions</text>
                
                <text x="100" y="110" font-size="9" fill="#94a3b8" text-anchor="middle">• Traffic patterns</text>
                <text x="100" y="125" font-size="9" fill="#94a3b8" text-anchor="middle">• Device performance</text>
                <text x="100" y="140" font-size="9" fill="#94a3b8" text-anchor="middle">• Failure events</text>
                
                <text x="350" y="110" font-size="9" fill="#94a3b8" text-anchor="middle">• Capacity planning</text>
                <text x="350" y="125" font-size="9" fill="#94a3b8" text-anchor="middle">• Failure prevention</text>
                <text x="350" y="140" font-size="9" fill="#94a3b8" text-anchor="middle">• Optimization</text>
                
                <defs>
                    <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#E74C3C"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "AI/ML Implementation",
            icon: "fa-cogs",
            description: "Implementing AI/ML in networks requires proper data collection, model training, integration with existing systems, and continuous monitoring. Modern network platforms provide built-in AI/ML capabilities and APIs.",
            visual: `<svg viewBox="0 0 400 200">
                <title>AI/ML Network Implementation</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Implementation Architecture</text>
                
                <!-- Data Layer -->
                <rect x="50" y="45" width="80" height="25" rx="3" fill="#334155"/>
                <text x="90" y="62" text-anchor="middle" fill="white" font-size="9">Data Collection</text>
                
                <!-- Processing Layer -->
                <rect x="160" y="45" width="80" height="25" rx="3" fill="#9B59B6"/>
                <text x="200" y="62" text-anchor="middle" fill="white" font-size="9">ML Processing</text>
                
                <!-- Action Layer -->
                <rect x="270" y="45" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="310" y="62" text-anchor="middle" fill="white" font-size="9">Automation</text>
                
                <!-- Components -->
                <text x="90" y="90" font-size="8" fill="#94a3b8" text-anchor="middle">• NetFlow/sFlow</text>
                <text x="90" y="105" font-size="8" fill="#94a3b8" text-anchor="middle">• SNMP Metrics</text>
                <text x="90" y="120" font-size="8" fill="#94a3b8" text-anchor="middle">• Syslog Events</text>
                
                <text x="200" y="90" font-size="8" fill="#94a3b8" text-anchor="middle">• Model Training</text>
                <text x="200" y="105" font-size="8" fill="#94a3b8" text-anchor="middle">• Pattern Recognition</text>
                <text x="200" y="120" font-size="8" fill="#94a3b8" text-anchor="middle">• Decision Engine</text>
                
                <text x="310" y="90" font-size="8" fill="#94a3b8" text-anchor="middle">• Config Changes</text>
                <text x="310" y="105" font-size="8" fill="#94a3b8" text-anchor="middle">• Traffic Control</text>
                <text x="310" y="120" font-size="8" fill="#94a3b8" text-anchor="middle">• Alerting</text>
                
                <!-- Platform Integration -->
                <rect x="120" y="150" width="160" height="25" rx="3" fill="#1e293b"/>
                <text x="200" y="167" text-anchor="middle" fill="white" font-size="10">Network Management Platform</text>
                
                <!-- Arrows -->
                <path d="M130,57 L160,57" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-impl)"/>
                <path d="M240,57 L270,57" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-impl)"/>
                <path d="M200,70 L200,150" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-impl)"/>
                
                <defs>
                    <marker id="arrow-impl" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "AI-Driven Security",
            icon: "fa-shield-alt",
            description: "AI enhances network security through intelligent threat detection, automated incident response, and behavioral analysis. AI security systems can identify zero-day attacks, insider threats, and sophisticated attack patterns.",
            visual: `<svg viewBox="0 0 400 200">
                <title>AI-Driven Network Security</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">AI Security Defense</text>
                
                <!-- Shield with AI -->
                <path d="M200,50 L180,65 L180,85 L200,100 L220,85 L220,65 Z" fill="#9B59B6" stroke="#AF7AC5" stroke-width="2"/>
                <text x="200" y="80" text-anchor="middle" fill="white" font-size="10">AI</text>
                
                <!-- Threat Detection -->
                <rect x="50" y="120" width="80" height="25" rx="3" fill="#ef4444"/>
                <text x="90" y="137" text-anchor="middle" fill="white" font-size="9">Threat Detection</text>
                
                <!-- Behavior Analysis -->
                <rect x="160" y="120" width="80" height="25" rx="3" fill="#f59e0b"/>
                <text x="200" y="137" text-anchor="middle" fill="white" font-size="9">Behavior Analysis</text>
                
                <!-- Auto Response -->
                <rect x="270" y="120" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="310" y="137" text-anchor="middle" fill="white" font-size="9">Auto Response</text>
                
                <!-- Connections to Shield -->
                <path d="M90,120 L185,95" stroke="#94a3b8" stroke-width="2"/>
                <path d="M200,120 L200,100" stroke="#94a3b8" stroke-width="2"/>
                <path d="M310,120 L215,95" stroke="#94a3b8" stroke-width="2"/>
                
                <!-- Security Features -->
                <text x="90" y="165" font-size="8" fill="#94a3b8" text-anchor="middle">• Anomaly Detection</text>
                <text x="90" y="175" font-size="8" fill="#94a3b8" text-anchor="middle">• Zero-day Protection</text>
                
                <text x="200" y="165" font-size="8" fill="#94a3b8" text-anchor="middle">• User Profiling</text>
                <text x="200" y="175" font-size="8" fill="#94a3b8" text-anchor="middle">• Traffic Patterns</text>
                
                <text x="310" y="165" font-size="8" fill="#94a3b8" text-anchor="middle">• Quarantine</text>
                <text x="310" y="175" font-size="8" fill="#94a3b8" text-anchor="middle">• Block & Alert</text>
            </svg>`
        }
    ],
    // 6.5 - Describe characteristics of REST-based APIs
    restApiCharacteristics: [
        {
            title: "REST API Fundamentals",
            icon: "fa-code",
            description: "REST (Representational State Transfer) is an architectural style for designing web services. It uses standard HTTP methods and is stateless, making it ideal for network automation and API integrations.",
            visual: `<svg viewBox="0 0 400 200">
                <title>REST API Architecture</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">REST API Architecture</text>
                
                <rect x="50" y="50" width="80" height="40" rx="5" fill="#1e293b"/>
                <text x="90" y="75" text-anchor="middle" fill="white" font-size="10">Client App</text>
                
                <rect x="270" y="50" width="80" height="40" rx="5" fill="#6366f1"/>
                <text x="310" y="75" text-anchor="middle" fill="white" font-size="10">API Server</text>
                
                <path d="M130,60 h135" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-req)"/>
                <text x="200" y="55" font-size="9" fill="#10b981" text-anchor="middle">HTTP Request</text>
                
                <path d="M265,80 h-135" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-res)"/>
                <text x="200" y="95" font-size="9" fill="#f59e0b" text-anchor="middle">HTTP Response</text>
                
                <text x="200" y="125" font-size="12" fill="#e2e8f0" text-anchor="middle">Stateless Communication</text>
                
                <rect x="100" y="140" width="200" height="30" rx="3" fill="#334155"/>
                <text x="200" y="160" text-anchor="middle" fill="white" font-size="10">JSON/XML Data Exchange</text>
                
                <defs>
                    <marker id="arrow-req" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
                    </marker>
                    <marker id="arrow-res" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "HTTP Verbs & CRUD",
            icon: "fa-exchange-alt",
            description: "REST APIs map CRUD operations (Create, Read, Update, Delete) to HTTP verbs. GET retrieves data, POST creates, PUT/PATCH updates, and DELETE removes resources.",
            visual: `<svg viewBox="0 0 400 200">
                <title>HTTP Verbs and CRUD Operations</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">HTTP Verbs = CRUD Operations</text>
                
                <rect x="30" y="50" width="80" height="30" rx="3" fill="#10b981"/>
                <text x="70" y="70" text-anchor="middle" fill="white" font-size="10">GET = Read</text>
                
                <rect x="120" y="50" width="80" height="30" rx="3" fill="#3b82f6"/>
                <text x="160" y="70" text-anchor="middle" fill="white" font-size="10">POST = Create</text>
                
                <rect x="210" y="50" width="80" height="30" rx="3" fill="#f59e0b"/>
                <text x="250" y="70" text-anchor="middle" fill="white" font-size="10">PUT = Update</text>
                
                <rect x="300" y="50" width="80" height="30" rx="3" fill="#ef4444"/>
                <text x="340" y="70" text-anchor="middle" fill="white" font-size="10">DELETE</text>
                
                <text x="70" y="105" font-size="9" fill="#94a3b8" text-anchor="middle">Retrieve data</text>
                <text x="160" y="105" font-size="9" fill="#94a3b8" text-anchor="middle">Add new resource</text>
                <text x="250" y="105" font-size="9" fill="#94a3b8" text-anchor="middle">Modify existing</text>
                <text x="340" y="105" font-size="9" fill="#94a3b8" text-anchor="middle">Remove resource</text>
                
                <rect x="50" y="130" width="300" height="40" rx="5" fill="#1e293b"/>
                <text x="200" y="155" text-anchor="middle" fill="white" font-size="11">Example: /api/v1/devices/router1</text>
            </svg>`
        },
        {
            title: "HTTP Status Codes",
            icon: "fa-traffic-light",
            description: "HTTP status codes indicate the result of API requests. Understanding 2xx (success), 4xx (client errors), and 5xx (server errors) is essential for API troubleshooting and error handling.",
            visual: `<svg viewBox="0 0 400 200">
                <title>HTTP Status Codes</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">HTTP Response Status Codes</text>
                
                <!-- 2xx Success -->
                <rect x="50" y="50" width="80" height="35" rx="3" fill="#10b981"/>
                <text x="90" y="70" text-anchor="middle" fill="white" font-size="11">2xx Success</text>
                <text x="90" y="95" font-size="8" fill="#94a3b8" text-anchor="middle">200 OK</text>
                <text x="90" y="108" font-size="8" fill="#94a3b8" text-anchor="middle">201 Created</text>
                
                <!-- 4xx Client Error -->
                <rect x="160" y="50" width="80" height="35" rx="3" fill="#f59e0b"/>
                <text x="200" y="70" text-anchor="middle" fill="white" font-size="11">4xx Client</text>
                <text x="200" y="95" font-size="8" fill="#94a3b8" text-anchor="middle">400 Bad Request</text>
                <text x="200" y="108" font-size="8" fill="#94a3b8" text-anchor="middle">401 Unauthorized</text>
                
                <!-- 5xx Server Error -->
                <rect x="270" y="50" width="80" height="35" rx="3" fill="#ef4444"/>
                <text x="310" y="70" text-anchor="middle" fill="white" font-size="11">5xx Server</text>
                <text x="310" y="95" font-size="8" fill="#94a3b8" text-anchor="middle">500 Internal Error</text>
                <text x="310" y="108" font-size="8" fill="#94a3b8" text-anchor="middle">503 Unavailable</text>
                
                <!-- Traffic Light Visual -->
                <rect x="170" y="130" width="60" height="50" rx="10" fill="#2d2d2d" stroke="#444" stroke-width="2"/>
                <circle cx="185" cy="145" r="8" fill="#10b981"/>
                <circle cx="200" cy="145" r="8" fill="#f59e0b"/>
                <circle cx="215" cy="145" r="8" fill="#ef4444"/>
                
                <text x="200" y="175" font-size="9" fill="#94a3b8" text-anchor="middle">Success → Warning → Error</text>
            </svg>`
        },
        {
            title: "Authentication Types",
            icon: "fa-shield-alt",
            description: "REST APIs use various authentication methods including API keys, OAuth tokens, basic authentication, and bearer tokens. These ensure secure access to network resources and API endpoints.",
            visual: `<svg viewBox="0 0 400 200">
                <title>API Authentication Methods</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">API Authentication Types</text>
                
                <rect x="20" y="50" width="80" height="40" rx="3" fill="#8b5cf6"/>
                <text x="60" y="75" text-anchor="middle" fill="white" font-size="9">API Keys</text>
                
                <rect x="110" y="50" width="80" height="40" rx="3" fill="#10b981"/>
                <text x="150" y="75" text-anchor="middle" fill="white" font-size="9">OAuth 2.0</text>
                
                <rect x="200" y="50" width="80" height="40" rx="3" fill="#f59e0b"/>
                <text x="240" y="75" text-anchor="middle" fill="white" font-size="9">Basic Auth</text>
                
                <rect x="290" y="50" width="80" height="40" rx="3" fill="#ef4444"/>
                <text x="330" y="75" text-anchor="middle" fill="white" font-size="9">Bearer Token</text>
                
                <text x="60" y="105" font-size="8" fill="#94a3b8" text-anchor="middle">X-API-Key header</text>
                <text x="150" y="105" font-size="8" fill="#94a3b8" text-anchor="middle">Token-based</text>
                <text x="240" y="105" font-size="8" fill="#94a3b8" text-anchor="middle">Username:Password</text>
                <text x="330" y="105" font-size="8" fill="#94a3b8" text-anchor="middle">Authorization header</text>
                
                <rect x="100" y="130" width="200" height="30" rx="3" fill="#334155"/>
                <text x="200" y="150" text-anchor="middle" fill="white" font-size="10">Secure API Access Control</text>
            </svg>`
        },
        {
            title: "Data Encoding",
            icon: "fa-file-code",
            description: "REST APIs commonly use JSON for data encoding due to its lightweight, human-readable format. XML is also supported but JSON is preferred for network automation and modern API design.",
            visual: `<svg viewBox="0 0 400 200">
                <title>API Data Encoding Formats</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">REST API Data Formats</text>
                
                <rect x="50" y="50" width="130" height="100" rx="5" fill="#1e293b"/>
                <text x="115" y="70" text-anchor="middle" fill="#f59e0b" font-size="12">JSON (Preferred)</text>
                <text x="70" y="90" font-family="monospace" font-size="9" fill="white">{</text>
                <text x="80" y="105" font-family="monospace" font-size="9" fill="#10b981">"device"</text>
                <text x="120" y="105" font-family="monospace" font-size="9" fill="white">:</text>
                <text x="130" y="105" font-family="monospace" font-size="9" fill="#3b82f6">"router1"</text>
                <text x="80" y="120" font-family="monospace" font-size="9" fill="#10b981">"status"</text>
                <text x="120" y="120" font-family="monospace" font-size="9" fill="white">:</text>
                <text x="130" y="120" font-family="monospace" font-size="9" fill="#3b82f6">"up"</text>
                <text x="70" y="135" font-family="monospace" font-size="9" fill="white">}</text>
                
                <rect x="220" y="50" width="130" height="100" rx="5" fill="#334155"/>
                <text x="285" y="70" text-anchor="middle" fill="#f59e0b" font-size="12">XML (Legacy)</text>
                <text x="240" y="90" font-family="monospace" font-size="8" fill="white">&lt;device&gt;</text>
                <text x="250" y="105" font-family="monospace" font-size="8" fill="#10b981">&lt;name&gt;router1&lt;/name&gt;</text>
                <text x="250" y="120" font-family="monospace" font-size="8" fill="#3b82f6">&lt;status&gt;up&lt;/status&gt;</text>
                <text x="240" y="135" font-family="monospace" font-size="8" fill="white">&lt;/device&gt;</text>
                
                <text x="200" y="175" font-size="10" fill="#94a3b8" text-anchor="middle">JSON: Lightweight • Human-readable • JavaScript native</text>
            </svg>`
        },
        {
            title: "API Testing & Tools",
            icon: "fa-tools",
            description: "Testing REST APIs requires specialized tools like Postman, curl, and browser developer tools. These enable developers to validate API functionality, test authentication, and debug network automation scripts.",
            visual: `<svg viewBox="0 0 400 200">
                <title>API Testing Tools</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">REST API Testing Tools</text>
                
                <!-- Postman -->
                <rect x="50" y="50" width="80" height="40" rx="5" fill="#9B59B6"/>
                <text x="90" y="75" text-anchor="middle" fill="white" font-size="10">Postman</text>
                <text x="90" y="100" font-size="8" fill="#94a3b8" text-anchor="middle">GUI Testing</text>
                
                <!-- curl -->
                <rect x="160" y="50" width="80" height="40" rx="5" fill="#9B59B6"/>
                <text x="200" y="75" text-anchor="middle" fill="white" font-size="10">curl</text>
                <text x="200" y="100" font-size="8" fill="#94a3b8" text-anchor="middle">Command Line</text>
                
                <!-- Browser Dev Tools -->
                <rect x="270" y="50" width="80" height="40" rx="5" fill="#9B59B6"/>
                <text x="310" y="70" text-anchor="middle" fill="white" font-size="9">Browser</text>
                <text x="310" y="80" text-anchor="middle" fill="white" font-size="9">Dev Tools</text>
                <text x="310" y="100" font-size="8" fill="#94a3b8" text-anchor="middle">Built-in Debug</text>
                
                <!-- Testing Workflow -->
                <rect x="80" y="120" width="240" height="50" rx="5" fill="#1e293b"/>
                <text x="200" y="140" text-anchor="middle" fill="white" font-size="11">API Testing Workflow</text>
                <text x="110" y="155" font-size="9" fill="#94a3b8">1. Send Request</text>
                <text x="200" y="155" font-size="9" fill="#94a3b8">2. Check Status</text>
                <text x="290" y="155" font-size="9" fill="#94a3b8">3. Validate Response</text>
                
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Essential for API Development & Troubleshooting</text>
            </svg>`
        },
        {
            title: "API Design Best Practices",
            icon: "fa-clipboard-check",
            description: "Well-designed REST APIs follow conventions for URL structure, resource naming, versioning, and error handling. These practices ensure APIs are intuitive, maintainable, and compatible with automation tools.",
            visual: `<svg viewBox="0 0 400 200">
                <title>REST API Design Best Practices</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">API Design Best Practices</text>
                
                <!-- URL Structure -->
                <rect x="50" y="45" width="300" height="25" rx="3" fill="#00A8FF"/>
                <text x="200" y="62" text-anchor="middle" fill="white" font-size="10">/api/v1/devices/{id}/interfaces</text>
                
                <!-- Best Practices -->
                <rect x="30" y="85" width="90" height="25" rx="3" fill="#10b981"/>
                <text x="75" y="102" text-anchor="middle" fill="white" font-size="9">Nouns Not Verbs</text>
                
                <rect x="135" y="85" width="90" height="25" rx="3" fill="#f59e0b"/>
                <text x="180" y="102" text-anchor="middle" fill="white" font-size="9">Consistent Naming</text>
                
                <rect x="240" y="85" width="90" height="25" rx="3" fill="#8b5cf6"/>
                <text x="285" y="102" text-anchor="middle" fill="white" font-size="9">API Versioning</text>
                
                <!-- Examples -->
                <text x="75" y="125" font-size="8" fill="#94a3b8" text-anchor="middle">✓ /devices</text>
                <text x="75" y="135" font-size="8" fill="#ef4444" text-anchor="middle">✗ /getDevices</text>
                
                <text x="180" y="125" font-size="8" fill="#94a3b8" text-anchor="middle">snake_case</text>
                <text x="180" y="135" font-size="8" fill="#94a3b8" text-anchor="middle">kebab-case</text>
                
                <text x="285" y="125" font-size="8" fill="#94a3b8" text-anchor="middle">/api/v1/</text>
                <text x="285" y="135" font-size="8" fill="#94a3b8" text-anchor="middle">/api/v2/</text>
                
                <!-- Documentation -->
                <rect x="120" y="155" width="160" height="25" rx="3" fill="#334155"/>
                <text x="200" y="172" text-anchor="middle" fill="white" font-size="10">Comprehensive Documentation</text>
            </svg>`
        }
    ],
    // 6.6 - Recognize the capabilities of configuration management mechanisms
    configurationManagement: [
        {
            title: "Ansible Fundamentals",
            icon: "fa-cogs",
            description: "Ansible is an agentless automation tool that uses SSH to configure devices. It uses YAML playbooks for configuration management, making it popular for network automation due to its simplicity and ease of use.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Ansible Architecture</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Ansible Agentless Architecture</text>
                
                <rect x="150" y="40" width="100" height="40" rx="5" fill="#ef4444"/>
                <text x="200" y="65" text-anchor="middle" fill="white" font-size="11">Control Node</text>
                
                <circle cx="80" cy="130" r="20" fill="#334155"/>
                <text x="80" y="135" text-anchor="middle" fill="white" font-size="8">Device 1</text>
                
                <circle cx="200" cy="130" r="20" fill="#334155"/>
                <text x="200" y="135" text-anchor="middle" fill="white" font-size="8">Device 2</text>
                
                <circle cx="320" cy="130" r="20" fill="#334155"/>
                <text x="320" y="135" text-anchor="middle" fill="white" font-size="8">Device 3</text>
                
                <path d="M170,80 L80,110" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
                <text x="120" y="90" font-size="8" fill="#10b981">SSH</text>
                
                <path d="M200,80 L200,110" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
                <text x="210" y="95" font-size="8" fill="#10b981">SSH</text>
                
                <path d="M230,80 L320,110" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
                <text x="280" y="90" font-size="8" fill="#10b981">SSH</text>
                
                <text x="200" y="170" font-size="10" fill="#94a3b8" text-anchor="middle">No Agents Required - Push Model</text>
            </svg>`
        },
        {
            title: "Terraform Infrastructure",
            icon: "fa-cube",
            description: "Terraform is an Infrastructure as Code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently. It uses declarative configuration files to manage infrastructure across multiple cloud providers.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Terraform Infrastructure as Code</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Terraform Infrastructure as Code</text>
                
                <rect x="30" y="50" width="100" height="30" rx="3" fill="#8b5cf6"/>
                <text x="80" y="70" text-anchor="middle" fill="white" font-size="10">HCL Config</text>
                
                <path d="M130,65 h40" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-tf)"/>
                
                <circle cx="200" cy="65" r="20" fill="#10b981"/>
                <text x="200" y="70" text-anchor="middle" fill="white" font-size="8">Terraform</text>
                
                <path d="M220,65 h40" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-tf)"/>
                
                <rect x="280" y="50" width="100" height="30" rx="3" fill="#3b82f6"/>
                <text x="330" y="70" text-anchor="middle" fill="white" font-size="10">Infrastructure</text>
                
                <text x="80" y="100" font-size="8" fill="#94a3b8" text-anchor="middle">Define desired state</text>
                <text x="200" y="100" font-size="8" fill="#94a3b8" text-anchor="middle">Plan & Apply</text>
                <text x="330" y="100" font-size="8" fill="#94a3b8" text-anchor="middle">Deploy resources</text>
                
                <rect x="50" y="120" width="300" height="50" rx="5" fill="#1e293b"/>
                <text x="200" y="140" text-anchor="middle" fill="white" font-size="11">Multi-Cloud Support</text>
                <text x="120" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">AWS</text>
                <text x="160" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">Azure</text>
                <text x="200" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">GCP</text>
                <text x="240" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">VMware</text>
                <text x="280" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">Cisco</text>
                
                <defs>
                    <marker id="arrow-tf" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Ansible Advanced Configuration",
            icon: "fa-layer-group",
            description: "Advanced Ansible features include roles for reusable code, variables and templates for dynamic configurations, and specialized network modules for complex automation tasks and enterprise deployments.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Ansible Advanced Features</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Ansible Advanced Components</text>
                
                <!-- Roles Layer -->
                <rect x="50" y="45" width="300" height="25" rx="3" fill="#ef4444"/>
                <text x="200" y="62" text-anchor="middle" fill="white" font-size="11">Ansible Roles (Reusable Components)</text>
                
                <!-- Variables & Templates -->
                <rect x="50" y="80" width="140" height="30" rx="3" fill="#f59e0b"/>
                <text x="120" y="98" text-anchor="middle" fill="white" font-size="10">Variables</text>
                <text x="120" y="108" text-anchor="middle" fill="white" font-size="8">Dynamic Values</text>
                
                <rect x="210" y="80" width="140" height="30" rx="3" fill="#f59e0b"/>
                <text x="280" y="98" text-anchor="middle" fill="white" font-size="10">Templates</text>
                <text x="280" y="108" text-anchor="middle" fill="white" font-size="8">Jinja2 Configs</text>
                
                <!-- Network Modules -->
                <rect x="75" y="125" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="115" y="142" text-anchor="middle" fill="white" font-size="9">ios_config</text>
                
                <rect x="165" y="125" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="205" y="142" text-anchor="middle" fill="white" font-size="9">nxos_facts</text>
                
                <rect x="255" y="125" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="295" y="142" text-anchor="middle" fill="white" font-size="9">junos_config</text>
                
                <!-- Inventory & Vault -->
                <rect x="100" y="160" width="80" height="25" rx="3" fill="#8b5cf6"/>
                <text x="140" y="177" text-anchor="middle" fill="white" font-size="9">Inventory</text>
                
                <rect x="200" y="160" width="80" height="25" rx="3" fill="#8b5cf6"/>
                <text x="240" y="177" text-anchor="middle" fill="white" font-size="9">Vault Secrets</text>
                
                <text x="200" y="195" font-size="10" fill="#94a3b8" text-anchor="middle">Enterprise-Grade Network Automation</text>
            </svg>`
        },
        {
            title: "Puppet Enterprise Configuration",
            icon: "fa-users-cog",
            description: "Puppet uses a declarative approach with manifests, modules, and Hiera for data separation. It provides enterprise-grade configuration management with reporting, compliance, and orchestration capabilities.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Puppet Enterprise Architecture</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Puppet Enterprise Components</text>
                
                <!-- Master Server -->
                <rect x="150" y="45" width="100" height="35" rx="5" fill="#f59e0b"/>
                <text x="200" y="65" text-anchor="middle" fill="white" font-size="11">Puppet Master</text>
                <text x="200" y="75" text-anchor="middle" fill="white" font-size="8">Central Server</text>
                
                <!-- Agents -->
                <circle cx="80" cy="120" r="18" fill="#334155"/>
                <text x="80" y="125" text-anchor="middle" fill="white" font-size="8">Agent</text>
                
                <circle cx="200" cy="120" r="18" fill="#334155"/>
                <text x="200" y="125" text-anchor="middle" fill="white" font-size="8">Agent</text>
                
                <circle cx="320" cy="120" r="18" fill="#334155"/>
                <text x="320" y="125" text-anchor="middle" fill="white" font-size="8">Agent</text>
                
                <!-- Pull connections -->
                <path d="M170,80 L90,105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
                <path d="M200,80 L200,102" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
                <path d="M230,80 L310,105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
                
                <!-- Components -->
                <rect x="50" y="150" width="60" height="20" rx="3" fill="#8b5cf6"/>
                <text x="80" y="163" text-anchor="middle" fill="white" font-size="8">Manifests</text>
                
                <rect x="120" y="150" width="60" height="20" rx="3" fill="#8b5cf6"/>
                <text x="150" y="163" text-anchor="middle" fill="white" font-size="8">Modules</text>
                
                <rect x="190" y="150" width="60" height="20" rx="3" fill="#8b5cf6"/>
                <text x="220" y="163" text-anchor="middle" fill="white" font-size="8">Hiera</text>
                
                <rect x="260" y="150" width="80" height="20" rx="3" fill="#8b5cf6"/>
                <text x="300" y="163" text-anchor="middle" fill="white" font-size="8">Compliance</text>
                
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Declarative Configuration Management</text>
            </svg>`
        },
        {
            title: "GitOps & Version Control",
            icon: "fa-code-branch",
            description: "GitOps uses Git repositories as the single source of truth for infrastructure and application configurations. It enables CI/CD pipelines, peer review processes, and automated deployments with full audit trails.",
            visual: `<svg viewBox="0 0 400 200">
                <title>GitOps Workflow</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">GitOps Configuration Pipeline</text>
                
                <!-- Git Repository -->
                <rect x="30" y="50" width="80" height="40" rx="5" fill="#6366f1"/>
                <text x="70" y="72" text-anchor="middle" fill="white" font-size="10">Git Repo</text>
                <text x="70" y="82" text-anchor="middle" fill="white" font-size="8">Source of Truth</text>
                
                <!-- CI/CD Pipeline -->
                <rect x="130" y="50" width="80" height="40" rx="5" fill="#10b981"/>
                <text x="170" y="72" text-anchor="middle" fill="white" font-size="10">CI/CD</text>
                <text x="170" y="82" text-anchor="middle" fill="white" font-size="8">Automation</text>
                
                <!-- Deployment -->
                <rect x="230" y="50" width="80" height="40" rx="5" fill="#ef4444"/>
                <text x="270" y="72" text-anchor="middle" fill="white" font-size="10">Deploy</text>
                <text x="270" y="82" text-anchor="middle" fill="white" font-size="8">Infrastructure</text>
                
                <!-- Monitoring -->
                <rect x="330" y="50" width="50" height="40" rx="5" fill="#8b5cf6"/>
                <text x="355" y="72" text-anchor="middle" fill="white" font-size="9">Monitor</text>
                <text x="355" y="82" text-anchor="middle" fill="white" font-size="7">& Sync</text>
                
                <!-- Flow arrows -->
                <path d="M110,70 h15" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-gitops)"/>
                <path d="M210,70 h15" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-gitops)"/>
                <path d="M310,70 h15" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-gitops)"/>
                
                <!-- Benefits -->
                <text x="70" y="110" font-size="8" fill="#94a3b8" text-anchor="middle">Version Control</text>
                <text x="170" y="110" font-size="8" fill="#94a3b8" text-anchor="middle">Automated Testing</text>
                <text x="270" y="110" font-size="8" fill="#94a3b8" text-anchor="middle">Consistent Delivery</text>
                <text x="355" y="110" font-size="8" fill="#94a3b8" text-anchor="middle">Drift Detection</text>
                
                <!-- Developer Workflow -->
                <rect x="80" y="130" width="240" height="50" rx="5" fill="#1e293b"/>
                <text x="200" y="150" text-anchor="middle" fill="white" font-size="11">Developer Workflow</text>
                <text x="120" y="165" text-anchor="middle" fill="#94a3b8" font-size="9">Commit</text>
                <text x="160" y="165" text-anchor="middle" fill="#94a3b8" font-size="9">Review</text>
                <text x="200" y="165" text-anchor="middle" fill="#94a3b8" font-size="9">Merge</text>
                <text x="240" y="165" text-anchor="middle" fill="#94a3b8" font-size="9">Deploy</text>
                <text x="280" y="165" text-anchor="middle" fill="#94a3b8" font-size="9">Monitor</text>
                
                <defs>
                    <marker id="arrow-gitops" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Configuration Security & Compliance",
            icon: "fa-shield-alt",
            description: "Security in configuration management involves secrets management, role-based access control, compliance automation, and audit trails to ensure configurations meet security policies and regulatory requirements.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Configuration Security Framework</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Security & Compliance Framework</text>
                
                <!-- Security Layers -->
                <rect x="50" y="45" width="300" height="25" rx="3" fill="#ef4444"/>
                <text x="200" y="62" text-anchor="middle" fill="white" font-size="11">Access Control & Authentication</text>
                
                <rect x="50" y="80" width="140" height="25" rx="3" fill="#f59e0b"/>
                <text x="120" y="97" text-anchor="middle" fill="white" font-size="10">Secrets Management</text>
                
                <rect x="210" y="80" width="140" height="25" rx="3" fill="#f59e0b"/>
                <text x="280" y="97" text-anchor="middle" fill="white" font-size="10">Policy Enforcement</text>
                
                <!-- Compliance Components -->
                <rect x="75" y="115" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="115" y="132" text-anchor="middle" fill="white" font-size="9">Audit Trails</text>
                
                <rect x="165" y="115" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="205" y="132" text-anchor="middle" fill="white" font-size="9">Compliance</text>
                
                <rect x="255" y="115" width="80" height="25" rx="3" fill="#10b981"/>
                <text x="295" y="132" text-anchor="middle" fill="white" font-size="9">Drift Detection</text>
                
                <!-- Security Features -->
                <rect x="100" y="150" width="200" height="30" rx="3" fill="#8b5cf6"/>
                <text x="200" y="168" text-anchor="middle" fill="white" font-size="10">Continuous Security Monitoring</text>
                <text x="200" y="175" text-anchor="middle" fill="white" font-size="8">Real-time Policy Validation</text>
                
                <text x="200" y="195" font-size="10" fill="#94a3b8" text-anchor="middle">Zero-Trust Configuration Management</text>
            </svg>`
        },
        {
            title: "Configuration Troubleshooting",
            icon: "fa-bug",
            description: "Troubleshooting configuration management involves debugging playbooks and manifests, detecting configuration drift, implementing rollback procedures, and using systematic approaches to resolve automation issues.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Configuration Troubleshooting Process</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Configuration Troubleshooting Workflow</text>
                
                <!-- Problem Detection -->
                <circle cx="80" cy="60" r="25" fill="#ef4444"/>
                <text x="80" y="67" text-anchor="middle" fill="white" font-size="10">Detect</text>
                <text x="80" y="85" font-size="8" fill="#94a3b8" text-anchor="middle">Issue Found</text>
                
                <!-- Analysis -->
                <circle cx="200" cy="60" r="25" fill="#f59e0b"/>
                <text x="200" y="67" text-anchor="middle" fill="white" font-size="10">Analyze</text>
                <text x="200" y="85" font-size="8" fill="#94a3b8" text-anchor="middle">Root Cause</text>
                
                <!-- Resolution -->
                <circle cx="320" cy="60" r="25" fill="#10b981"/>
                <text x="320" y="67" text-anchor="middle" fill="white" font-size="10">Resolve</text>
                <text x="320" y="85" font-size="8" fill="#94a3b8" text-anchor="middle">Fix & Verify</text>
                
                <!-- Flow arrows -->
                <path d="M105,60 h70" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-trouble)"/>
                <path d="M225,60 h70" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-trouble)"/>
                
                <!-- Troubleshooting Tools -->
                <rect x="50" y="110" width="300" height="60" rx="5" fill="#1e293b"/>
                <text x="200" y="130" text-anchor="middle" fill="white" font-size="11">Troubleshooting Tools & Techniques</text>
                
                <text x="100" y="145" text-anchor="middle" fill="#94a3b8" font-size="9">Verbose Logs</text>
                <text x="150" y="145" text-anchor="middle" fill="#94a3b8" font-size="9">Dry Run</text>
                <text x="200" y="145" text-anchor="middle" fill="#94a3b8" font-size="9">Syntax Check</text>
                <text x="250" y="145" text-anchor="middle" fill="#94a3b8" font-size="9">State Diff</text>
                <text x="300" y="145" text-anchor="middle" fill="#94a3b8" font-size="9">Rollback</text>
                
                <text x="125" y="160" text-anchor="middle" fill="#94a3b8" font-size="9">Drift Detection</text>
                <text x="200" y="160" text-anchor="middle" fill="#94a3b8" font-size="9">Debug Mode</text>
                <text x="275" y="160" text-anchor="middle" fill="#94a3b8" font-size="9">Version Control</text>
                
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Systematic Configuration Problem Resolution</text>
                
                <defs>
                    <marker id="arrow-trouble" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Configuration Management Comparison",
            icon: "fa-balance-scale",
            description: "Different configuration management tools use various approaches: push vs pull models, agent vs agentless architectures, and declarative vs imperative paradigms. Understanding these differences helps choose the right tool.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Configuration Management Tools Comparison</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">Config Management Approaches</text>
                
                <rect x="20" y="50" width="80" height="60" rx="3" fill="#ef4444"/>
                <text x="60" y="70" text-anchor="middle" fill="white" font-size="10">Ansible</text>
                <text x="60" y="85" text-anchor="middle" fill="white" font-size="8">Agentless</text>
                <text x="60" y="95" text-anchor="middle" fill="white" font-size="8">Push Model</text>
                
                <rect x="110" y="50" width="80" height="60" rx="3" fill="#f59e0b"/>
                <text x="150" y="70" text-anchor="middle" fill="white" font-size="10">Puppet</text>
                <text x="150" y="85" text-anchor="middle" fill="white" font-size="8">Agent-based</text>
                <text x="150" y="95" text-anchor="middle" fill="white" font-size="8">Pull Model</text>
                
                <rect x="200" y="50" width="80" height="60" rx="3" fill="#10b981"/>
                <text x="240" y="70" text-anchor="middle" fill="white" font-size="10">Chef</text>
                <text x="240" y="85" text-anchor="middle" fill="white" font-size="8">Agent-based</text>
                <text x="240" y="95" text-anchor="middle" fill="white" font-size="8">Pull Model</text>
                
                <rect x="290" y="50" width="80" height="60" rx="3" fill="#8b5cf6"/>
                <text x="330" y="70" text-anchor="middle" fill="white" font-size="10">Terraform</text>
                <text x="330" y="85" text-anchor="middle" fill="white" font-size="8">Agentless</text>
                <text x="330" y="95" text-anchor="middle" fill="white" font-size="8">IaC Tool</text>
                
                <text x="60" y="130" font-size="8" fill="#94a3b8" text-anchor="middle">YAML Playbooks</text>
                <text x="150" y="130" font-size="8" fill="#94a3b8" text-anchor="middle">Declarative DSL</text>
                <text x="240" y="130" font-size="8" fill="#94a3b8" text-anchor="middle">Ruby Recipes</text>
                <text x="330" y="130" font-size="8" fill="#94a3b8" text-anchor="middle">HCL Language</text>
                
                <text x="200" y="160" font-size="11" fill="#e2e8f0" text-anchor="middle">Choose Based on Requirements</text>
                <text x="200" y="175" font-size="9" fill="#94a3b8" text-anchor="middle">Infrastructure type • Team expertise • Existing tools</text>
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
    jsonComponents: [
        {
            title: "JSON Syntax & Structure",
            icon: "fa-code",
            description: "JSON uses a simple syntax with key-value pairs, objects, arrays, and data types. Understanding JSON structure is essential for REST API interactions and network automation scripts.",
            visual: `<svg viewBox="0 0 400 200">
                <title>JSON Syntax Structure</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">JSON Syntax Components</text>
                
                <rect x="30" y="40" width="340" height="130" rx="5" fill="#1e293b"/>
                
                <text x="50" y="65" font-family="monospace" font-size="11" fill="#f59e0b">"object"</text>
                <text x="110" y="65" font-family="monospace" font-size="11" fill="#white">: {</text>
                
                <text x="70" y="85" font-family="monospace" font-size="10" fill="#10b981">"string"</text>
                <text x="120" y="85" font-family="monospace" font-size="10" fill="white">:</text>
                <text x="135" y="85" font-family="monospace" font-size="10" fill="#3b82f6">"value"</text>
                <text x="175" y="85" font-family="monospace" font-size="10" fill="white">,</text>
                
                <text x="70" y="105" font-family="monospace" font-size="10" fill="#10b981">"number"</text>
                <text x="120" y="105" font-family="monospace" font-size="10" fill="white">:</text>
                <text x="135" y="105" font-family="monospace" font-size="10" fill="#8b5cf6">42</text>
                <text x="155" y="105" font-family="monospace" font-size="10" fill="white">,</text>
                
                <text x="70" y="125" font-family="monospace" font-size="10" fill="#10b981">"boolean"</text>
                <text x="125" y="125" font-family="monospace" font-size="10" fill="white">:</text>
                <text x="140" y="125" font-family="monospace" font-size="10" fill="#ef4444">true</text>
                <text x="175" y="125" font-family="monospace" font-size="10" fill="white">,</text>
                
                <text x="70" y="145" font-family="monospace" font-size="10" fill="#10b981">"array"</text>
                <text x="110" y="145" font-family="monospace" font-size="10" fill="white">: [</text>
                <text x="125" y="145" font-family="monospace" font-size="10" fill="#3b82f6">"item1"</text>
                <text x="170" y="145" font-family="monospace" font-size="10" fill="white">,</text>
                <text x="180" y="145" font-family="monospace" font-size="10" fill="#3b82f6">"item2"</text>
                <text x="225" y="145" font-family="monospace" font-size="10" fill="white">]</text>
                
                <text x="50" y="165" font-family="monospace" font-size="11" fill="white">}</text>
                
                <text x="250" y="70" font-size="9" fill="#f59e0b">Objects</text>
                <text x="250" y="85" font-size="8" fill="#94a3b8">{ } containers</text>
                
                <text x="250" y="105" font-size="9" fill="#10b981">Key-Value Pairs</text>
                <text x="250" y="120" font-size="8" fill="#94a3b8">"key": value</text>
                
                <text x="250" y="140" font-size="9" fill="#3b82f6">Arrays</text>
                <text x="250" y="155" font-size="8" fill="#94a3b8">[ ] ordered lists</text>
            </svg>`
        },
        {
            title: "JSON Data Types",
            icon: "fa-list-alt",
            description: "JSON supports six data types: string, number, boolean, null, object, and array. Each type has specific syntax rules and use cases in network automation and API communications.",
            visual: `<svg viewBox="0 0 400 200">
                <title>JSON Data Types</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">JSON Data Types</text>
                
                <rect x="20" y="45" width="80" height="35" rx="3" fill="#10b981"/>
                <text x="60" y="67" text-anchor="middle" fill="white" font-size="10">String</text>
                <text x="60" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">"text"</text>
                
                <rect x="110" y="45" width="80" height="35" rx="3" fill="#3b82f6"/>
                <text x="150" y="67" text-anchor="middle" fill="white" font-size="10">Number</text>
                <text x="150" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">42, 3.14</text>
                
                <rect x="200" y="45" width="80" height="35" rx="3" fill="#f59e0b"/>
                <text x="240" y="67" text-anchor="middle" fill="white" font-size="10">Boolean</text>
                <text x="240" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">true/false</text>
                
                <rect x="290" y="45" width="80" height="35" rx="3" fill="#6b7280"/>
                <text x="330" y="67" text-anchor="middle" fill="white" font-size="10">Null</text>
                <text x="330" y="95" text-anchor="middle" fill="#94a3b8" font-size="8">null</text>
                
                <rect x="65" y="110" width="80" height="35" rx="3" fill="#8b5cf6"/>
                <text x="105" y="132" text-anchor="middle" fill="white" font-size="10">Object</text>
                <text x="105" y="160" text-anchor="middle" fill="#94a3b8" font-size="8">{"key": value}</text>
                
                <rect x="155" y="110" width="80" height="35" rx="3" fill="#ef4444"/>
                <text x="195" y="132" text-anchor="middle" fill="white" font-size="10">Array</text>
                <text x="195" y="160" text-anchor="middle" fill="#94a3b8" font-size="8">[item1, item2]</text>
                
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">All JSON values must be one of these types</text>
            </svg>`
        },
        {
            title: "Network JSON Examples",
            icon: "fa-network-wired",
            description: "JSON is extensively used in network APIs for device configuration, monitoring data, and automation scripts. Understanding common network JSON patterns is crucial for CCNA candidates.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Network JSON Use Cases</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">JSON in Network Operations</text>
                
                <rect x="20" y="45" width="110" height="40" rx="3" fill="#1e293b"/>
                <text x="75" y="60" text-anchor="middle" fill="white" font-size="9">Device Info</text>
                <text x="75" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">GET /devices</text>
                
                <rect x="140" y="45" width="110" height="40" rx="3" fill="#1e293b"/>
                <text x="195" y="60" text-anchor="middle" fill="white" font-size="9">Interface Config</text>
                <text x="195" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">POST /interfaces</text>
                
                <rect x="260" y="45" width="110" height="40" rx="3" fill="#1e293b"/>
                <text x="315" y="60" text-anchor="middle" fill="white" font-size="9">Monitoring Data</text>
                <text x="315" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">GET /health</text>
                
                <rect x="30" y="100" width="340" height="70" rx="3" fill="#334155"/>
                <text x="50" y="120" font-family="monospace" font-size="9" fill="#f59e0b">{</text>
                <text x="60" y="135" font-family="monospace" font-size="9" fill="#10b981">"hostname"</text>
                <text x="120" y="135" font-family="monospace" font-size="9" fill="white">:</text>
                <text x="130" y="135" font-family="monospace" font-size="9" fill="#3b82f6">"Router1"</text>
                <text x="185" y="135" font-family="monospace" font-size="9" fill="white">,</text>
                <text x="60" y="150" font-family="monospace" font-size="9" fill="#10b981">"interfaces"</text>
                <text x="125" y="150" font-family="monospace" font-size="9" fill="white">: [</text>
                <text x="145" y="150" font-family="monospace" font-size="9" fill="#3b82f6">"Gi0/1"</text>
                <text x="185" y="150" font-family="monospace" font-size="9" fill="white">,</text>
                <text x="195" y="150" font-family="monospace" font-size="9" fill="#3b82f6">"Gi0/2"</text>
                <text x="235" y="150" font-family="monospace" font-size="9" fill="white">]</text>
                <text x="50" y="165" font-family="monospace" font-size="9" fill="#f59e0b">}</text>
                
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Common in REST APIs, Configuration Management, Monitoring</text>
            </svg>`
        },
        {
            title: "JSON vs XML Comparison",
            icon: "fa-exchange-alt",
            description: "While XML was traditionally used for configuration and data exchange, JSON has become the preferred format due to its simplicity, smaller size, and better performance in modern network automation.",
            visual: `<svg viewBox="0 0 400 200">
                <title>JSON vs XML Comparison</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">JSON vs XML for Network Data</text>
                
                <rect x="30" y="45" width="150" height="100" rx="5" fill="#1e293b"/>
                <text x="105" y="65" text-anchor="middle" fill="#10b981" font-size="12">JSON</text>
                <text x="50" y="85" font-family="monospace" font-size="8" fill="white">{</text>
                <text x="60" y="100" font-family="monospace" font-size="8" fill="#f59e0b">"device"</text>
                <text x="100" y="100" font-family="monospace" font-size="8" fill="white">:</text>
                <text x="110" y="100" font-family="monospace" font-size="8" fill="#3b82f6">"router1"</text>
                <text x="60" y="115" font-family="monospace" font-size="8" fill="#f59e0b">"status"</text>
                <text x="100" y="115" font-family="monospace" font-size="8" fill="white">:</text>
                <text x="110" y="115" font-family="monospace" font-size="8" fill="#3b82f6">"up"</text>
                <text x="50" y="130" font-family="monospace" font-size="8" fill="white">}</text>
                
                <rect x="220" y="45" width="150" height="100" rx="5" fill="#334155"/>
                <text x="295" y="65" text-anchor="middle" fill="#f59e0b" font-size="12">XML</text>
                <text x="240" y="85" font-family="monospace" font-size="7" fill="white">&lt;device&gt;</text>
                <text x="250" y="100" font-family="monospace" font-size="7" fill="#10b981">&lt;name&gt;router1&lt;/name&gt;</text>
                <text x="250" y="115" font-family="monospace" font-size="7" fill="#3b82f6">&lt;status&gt;up&lt;/status&gt;</text>
                <text x="240" y="130" font-family="monospace" font-size="7" fill="white">&lt;/device&gt;</text>
                
                <text x="105" y="165" font-size="9" fill="#10b981" text-anchor="middle">✓ Smaller size</text>
                <text x="105" y="175" font-size="9" fill="#10b981" text-anchor="middle">✓ Faster parsing</text>
                <text x="105" y="185" font-size="9" fill="#10b981" text-anchor="middle">✓ Native JS support</text>
                
                <text x="295" y="165" font-size="9" fill="#f59e0b" text-anchor="middle">⚠ Verbose syntax</text>
                <text x="295" y="175" font-size="9" fill="#f59e0b" text-anchor="middle">⚠ Slower processing</text>
                <text x="295" y="185" font-size="9" fill="#f59e0b" text-anchor="middle">⚠ Complex parsing</text>
            </svg>`
        },
        {
            title: "JSON Parsing & Validation",
            icon: "fa-check-circle",
            description: "JSON parsing techniques, validation tools, common errors, and debugging methods. Understanding how to troubleshoot and validate JSON is essential for network automation success.",
            visual: `<svg viewBox="0 0 400 200">
                <title>JSON Parsing & Validation</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">JSON Validation Process</text>
                
                <rect x="30" y="45" width="100" height="40" rx="3" fill="#334155"/>
                <text x="80" y="60" text-anchor="middle" fill="white" font-size="9">Raw JSON</text>
                <text x="80" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">Input Data</text>
                
                <rect x="150" y="45" width="100" height="40" rx="3" fill="#6366f1"/>
                <text x="200" y="60" text-anchor="middle" fill="white" font-size="9">Parser</text>
                <text x="200" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">Validation</text>
                
                <rect x="270" y="30" width="100" height="25" rx="3" fill="#10b981"/>
                <text x="320" y="47" text-anchor="middle" fill="white" font-size="8">✓ Valid JSON</text>
                
                <rect x="270" y="70" width="100" height="25" rx="3" fill="#ef4444"/>
                <text x="320" y="87" text-anchor="middle" fill="white" font-size="8">✗ Parse Error</text>
                
                <path d="M130,65 h15" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <path d="M250,55 h15" stroke="#10b981" marker-end="url(#arrow-green)"/>
                <path d="M250,75 h15" stroke="#ef4444" marker-end="url(#arrow-red)"/>
                
                <rect x="30" y="110" width="340" height="60" rx="3" fill="#1e293b"/>
                <text x="50" y="130" font-size="10" fill="#f59e0b">Common Errors:</text>
                <text x="50" y="145" font-size="8" fill="#94a3b8">• Missing quotes on keys</text>
                <text x="50" y="157" font-size="8" fill="#94a3b8">• Trailing commas</text>
                
                <text x="200" y="145" font-size="8" fill="#94a3b8">• Unescaped characters</text>
                <text x="200" y="157" font-size="8" fill="#94a3b8">• Mismatched brackets</text>
                
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Tools: JSONLint, jq, Python json.loads()</text>
                
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker>
                    <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker>
                    <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker>
                </defs>
            </svg>`
        },
        {
            title: "JSON in Network Automation",
            icon: "fa-cogs",
            description: "Practical JSON usage in network automation tools like Ansible, Python scripts, and REST API interactions. Essential for modern network engineers working with automation frameworks.",
            visual: `<svg viewBox="0 0 400 200">
                <title>JSON in Network Automation</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">JSON in Automation Workflows</text>
                
                <rect x="20" y="45" width="80" height="35" rx="3" fill="#f59e0b"/>
                <text x="60" y="60" text-anchor="middle" fill="white" font-size="9">Ansible</text>
                <text x="60" y="72" text-anchor="middle" fill="white" font-size="7">Playbooks</text>
                
                <rect x="120" y="45" width="80" height="35" rx="3" fill="#3b82f6"/>
                <text x="160" y="60" text-anchor="middle" fill="white" font-size="9">Python</text>
                <text x="160" y="72" text-anchor="middle" fill="white" font-size="7">Scripts</text>
                
                <rect x="220" y="45" width="80" height="35" rx="3" fill="#10b981"/>
                <text x="260" y="60" text-anchor="middle" fill="white" font-size="9">REST APIs</text>
                <text x="260" y="72" text-anchor="middle" fill="white" font-size="7">Calls</text>
                
                <rect x="320" y="45" width="60" height="35" rx="3" fill="#8b5cf6"/>
                <text x="350" y="60" text-anchor="middle" fill="white" font-size="9">cURL</text>
                <text x="350" y="72" text-anchor="middle" fill="white" font-size="7">CLI</text>
                
                <rect x="50" y="100" width="300" height="70" rx="3" fill="#334155"/>
                <text x="70" y="120" font-family="monospace" font-size="8" fill="#f59e0b">tasks:</text>
                <text x="70" y="135" font-family="monospace" font-size="8" fill="#94a3b8">- name: Configure interface</text>
                <text x="80" y="150" font-family="monospace" font-size="8" fill="#10b981">ios_config:</text>
                <text x="90" y="165" font-family="monospace" font-size="8" fill="#3b82f6">lines: "{{ interface_json.config }}"</text>
                
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Configuration as Code with JSON Templates</text>
            </svg>`
        },
        {
            title: "JSON Schema & Validation",
            icon: "fa-shield-alt",
            description: "JSON Schema definition, validation rules, and enterprise API standards. Understanding how to enforce data structure and validate JSON payloads in network applications.",
            visual: `<svg viewBox="0 0 400 200">
                <title>JSON Schema & Validation</title>
                <text x="200" y="25" font-size="14" text-anchor="middle" fill="#e2e8f0">JSON Schema Validation</text>
                
                <rect x="30" y="45" width="120" height="50" rx="3" fill="#1e293b"/>
                <text x="90" y="60" text-anchor="middle" fill="white" font-size="9">JSON Schema</text>
                <text x="50" y="75" font-family="monospace" font-size="7" fill="#f59e0b">"type": "object"</text>
                <text x="50" y="85" font-family="monospace" font-size="7" fill="#10b981">"required": ["ip"]</text>
                
                <rect x="170" y="45" width="60" height="50" rx="3" fill="#6366f1"/>
                <text x="200" y="70" text-anchor="middle" fill="white" font-size="9">Validator</text>
                
                <rect x="250" y="30" width="120" height="25" rx="3" fill="#10b981"/>
                <text x="310" y="47" text-anchor="middle" fill="white" font-size="8">✓ Schema Valid</text>
                
                <rect x="250" y="70" width="120" height="25" rx="3" fill="#ef4444"/>
                <text x="310" y="87" text-anchor="middle" fill="white" font-size="8">✗ Schema Error</text>
                
                <path d="M150,70 h15" stroke="#94a3b8" marker-end="url(#arrow)"/>
                <path d="M230,55 h15" stroke="#10b981" marker-end="url(#arrow-green)"/>
                <path d="M230,75 h15" stroke="#ef4444" marker-end="url(#arrow-red)"/>
                
                <rect x="30" y="110" width="340" height="60" rx="3" fill="#2d2d2d"/>
                <text x="50" y="130" font-size="10" fill="#8b5cf6">Schema Benefits:</text>
                <text x="50" y="145" font-size="8" fill="#94a3b8">• API contract enforcement</text>
                <text x="50" y="157" font-size="8" fill="#94a3b8">• Data validation</text>
                
                <text x="200" y="145" font-size="8" fill="#94a3b8">• Documentation generation</text>
                <text x="200" y="157" font-size="8" fill="#94a3b8">• Error prevention</text>
                
                <text x="200" y="185" font-size="10" fill="#94a3b8" text-anchor="middle">Enterprise APIs use schemas for consistency</text>
            </svg>`
        }
    ],
    // Section metadata  
    metadata: {
        sectionNumber: 6,
        title: "Automation & Programmability",
        subsections: {
            automationImpact: { title: "6.1 Automation Impact", count: 1 },
            traditionalVsController: { title: "6.2 Traditional vs Controller-Based", count: 2 },
            sdnArchitecture: { title: "6.3 Software-Defined Architecture", count: 7 },
            aiMachineLearning: { title: "6.4 AI & Machine Learning", count: 6 },
            restApiCharacteristics: { title: "6.5 REST API Characteristics", count: 7 },
            configurationManagement: { title: "6.6 Configuration Management", count: 7 },
            jsonComponents: { title: "6.7 JSON Data Components", count: 7 },
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
