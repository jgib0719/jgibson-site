/**
 * CCNA Section 5: Security Fundamentals - Complete Topic Data
 * This data is structured to be used with section5.html
 */

const SECTION5_DATA = {
    // 5.1 - Key security concepts (threats, vulnerabilities, exploits, and mitigation techniques)
    securityConcepts: [
        {
            title: "CIA Triad Fundamentals",
            icon: "fa-shield-alt",
            description: "The foundation of information security: Confidentiality (protecting data from unauthorized access), Integrity (ensuring data accuracy), and Availability (ensuring system accessibility).",
            visual: `<svg viewBox="0 0 400 200">
                <title>CIA Triad</title>
                <polygon points="200,40 320,160 80,160" fill="none" stroke="#E74C3C" stroke-width="3"/>
                <circle cx="200" cy="70" r="25" fill="#3b82f6"/>
                <text x="200" y="77" text-anchor="middle" fill="white" font-size="10">Confidentiality</text>
                <circle cx="130" cy="140" r="25" fill="#10b981"/>
                <text x="130" y="147" text-anchor="middle" fill="white" font-size="10">Integrity</text>
                <circle cx="270" cy="140" r="25" fill="#f59e0b"/>
                <text x="270" y="147" text-anchor="middle" fill="white" font-size="10">Availability</text>
                <text x="200" y="185" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">CIA TRIAD</text>
            </svg>`
        },
        {
            title: "Threat Landscape",
            icon: "fa-exclamation-triangle",
            description: "Classification of security threats including malware, social engineering, insider threats, and advanced persistent threats. Understanding threat actors and attack vectors.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Threat Classification</title>
                <rect x="50" y="50" width="80" height="50" rx="5" fill="#f87171"/>
                <text x="90" y="70" text-anchor="middle" fill="white" font-size="9">External</text>
                <text x="90" y="85" text-anchor="middle" fill="white" font-size="9">Threats</text>
                <rect x="160" y="50" width="80" height="50" rx="5" fill="#f59e0b"/>
                <text x="200" y="70" text-anchor="middle" fill="white" font-size="9">Internal</text>
                <text x="200" y="85" text-anchor="middle" fill="white" font-size="9">Threats</text>
                <rect x="270" y="50" width="80" height="50" rx="5" fill="#ef4444"/>
                <text x="310" y="70" text-anchor="middle" fill="white" font-size="9">Advanced</text>
                <text x="310" y="85" text-anchor="middle" fill="white" font-size="9">Persistent</text>
                <rect x="105" y="120" width="190" height="40" rx="5" fill="#334155"/>
                <text x="200" y="145" text-anchor="middle" fill="white" font-size="10">Attack Vectors & Methods</text>
            </svg>`
        },
        {
            title: "Risk Assessment Methods",
            icon: "fa-chart-line",
            description: "Systematic approaches to identify vulnerabilities, calculate risk levels, and prioritize security measures. Understanding qualitative and quantitative risk analysis methods.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Risk Assessment Matrix</title>
                <rect x="80" y="60" width="240" height="120" fill="none" stroke="#E74C3C" stroke-width="2"/>
                <line x1="80" y1="120" x2="320" y2="120" stroke="#E74C3C"/>
                <line x1="160" y1="60" x2="160" y2="180" stroke="#E74C3C"/>
                <line x1="240" y1="60" x2="240" y2="180" stroke="#E74C3C"/>
                <rect x="80" y="60" width="80" height="60" fill="#10b981" opacity="0.7"/>
                <rect x="160" y="60" width="80" height="60" fill="#f59e0b" opacity="0.7"/>
                <rect x="240" y="60" width="80" height="60" fill="#f87171" opacity="0.7"/>
                <rect x="160" y="120" width="80" height="60" fill="#f59e0b" opacity="0.7"/>
                <rect x="240" y="120" width="80" height="60" fill="#f87171" opacity="0.7"/>
                <text x="50" y="95" text-anchor="middle" fill="#E0E0E0" font-size="10">High</text>
                <text x="50" y="155" text-anchor="middle" fill="#E0E0E0" font-size="10">Low</text>
                <text x="120" y="200" text-anchor="middle" fill="#E0E0E0" font-size="10">Low</text>
                <text x="200" y="200" text-anchor="middle" fill="#E0E0E0" font-size="10">Medium</text>
                <text x="280" y="200" text-anchor="middle" fill="#E0E0E0" font-size="10">High</text>
                <text x="40" y="125" text-anchor="middle" fill="#E0E0E0" font-size="9" transform="rotate(-90 40 125)">Impact</text>
                <text x="200" y="40" text-anchor="middle" fill="#E0E0E0" font-size="9">Probability</text>
            </svg>`
        },
        {
            title: "Defense in Depth",
            icon: "fa-layer-group",
            description: "Multi-layered security strategy using overlapping security controls. Physical, network, host, application, and data protection layers working together to provide comprehensive security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Defense in Depth Layers</title>
                <ellipse cx="200" cy="100" rx="180" ry="80" fill="none" stroke="#64748b" stroke-width="2"/>
                <ellipse cx="200" cy="100" rx="140" ry="60" fill="none" stroke="#f59e0b" stroke-width="2"/>
                <ellipse cx="200" cy="100" rx="100" ry="40" fill="none" stroke="#10b981" stroke-width="2"/>
                <ellipse cx="200" cy="100" rx="60" ry="25" fill="none" stroke="#3b82f6" stroke-width="2"/>
                <circle cx="200" cy="100" r="15" fill="#E74C3C"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="8">Data</text>
                <text x="130" y="105" text-anchor="middle" fill="#3b82f6" font-size="9">Application</text>
                <text x="270" y="105" text-anchor="middle" fill="#10b981" font-size="9">Host</text>
                <text x="320" y="80" text-anchor="middle" fill="#f59e0b" font-size="9">Network</text>
                <text x="350" y="60" text-anchor="middle" fill="#64748b" font-size="9">Physical</text>
            </svg>`
        },
        {
            title: "Security Frameworks",
            icon: "fa-clipboard-check",
            description: "Industry standard security frameworks including NIST Cybersecurity Framework, ISO 27001, and security compliance requirements. Guidelines for implementing comprehensive security programs.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Security Framework Components</title>
                <rect x="50" y="40" width="300" height="120" rx="10" fill="#334155" stroke="#475569"/>
                <text x="200" y="30" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">Security Framework</text>
                <rect x="70" y="60" width="80" height="30" rx="3" fill="#3b82f6"/>
                <text x="110" y="80" text-anchor="middle" fill="white" font-size="9">Identify</text>
                <rect x="160" y="60" width="80" height="30" rx="3" fill="#10b981"/>
                <text x="200" y="80" text-anchor="middle" fill="white" font-size="9">Protect</text>
                <rect x="250" y="60" width="80" height="30" rx="3" fill="#f59e0b"/>
                <text x="290" y="80" text-anchor="middle" fill="white" font-size="9">Detect</text>
                <rect x="110" y="100" width="80" height="30" rx="3" fill="#f87171"/>
                <text x="150" y="120" text-anchor="middle" fill="white" font-size="9">Respond</text>
                <rect x="200" y="100" width="80" height="30" rx="3" fill="#9333ea"/>
                <text x="240" y="120" text-anchor="middle" fill="white" font-size="9">Recover</text>
                <text x="200" y="150" text-anchor="middle" fill="#94a3b8" font-size="10">NIST Cybersecurity Framework</text>
            </svg>`
        }
    ],
    // 5.2 - Security program elements (user awareness, training, and physical access control)
    securityProgram: [
        {
            title: "User Awareness",
            icon: "fa-user-graduate",
            description: "Security awareness training educates users about threats like social engineering, phishing, and password security. Users are often the weakest link in security, so proper training is essential.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Security Training Program</title>
                <rect x="50" y="60" width="80" height="80" rx="5" fill="#3b82f6"/>
                <text x="90" y="90" text-anchor="middle" fill="white" font-size="10">User</text>
                <text x="90" y="105" text-anchor="middle" fill="white" font-size="10">Training</text>
                <rect x="160" y="60" width="80" height="80" rx="5" fill="#10b981"/>
                <text x="200" y="90" text-anchor="middle" fill="white" font-size="10">Physical</text>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="10">Security</text>
                <rect x="270" y="60" width="80" height="80" rx="5" fill="#f59e0b"/>
                <text x="310" y="90" text-anchor="middle" fill="white" font-size="10">Security</text>
                <text x="310" y="105" text-anchor="middle" fill="white" font-size="10">Policies</text>
            </svg>`
        },
        {
            title: "Physical Access Control",
            icon: "fa-building-lock",
            description: "Physical security controls access to facilities, equipment, and data centers. This includes badge readers, biometric scanners, security guards, and environmental controls.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Physical Access Control</title>
                <rect x="150" y="50" width="100" height="100" rx="5" fill="#334155" stroke="#475569"/>
                <text x="200" y="40" text-anchor="middle" fill="#e2e8f0" font-size="12">Secure Facility</text>
                <rect x="180" y="80" width="40" height="60" rx="3" fill="#64748b"/>
                <circle cx="200" cy="100" r="5" fill="#f59e0b"/>
                <rect x="50" y="120" width="60" height="30" rx="3" fill="#10b981"/>
                <text x="80" y="140" text-anchor="middle" fill="white" font-size="10">Badge</text>
                <path d="M110,135 h40" stroke="#10b981" marker-end="url(#arrow-green)"/>
                <defs><marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker></defs>
            </svg>`
        },
        {
            title: "Security Policies & Procedures",
            icon: "fa-file-contract",
            description: "Comprehensive security policies define organizational security standards, acceptable use guidelines, and operational procedures. These form the foundation of any security program.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Security Policy Framework</title>
                <rect x="80" y="40" width="240" height="120" rx="8" fill="#334155" stroke="#475569" stroke-width="2"/>
                <text x="200" y="30" text-anchor="middle" fill="#9B59B6" font-size="14" font-weight="bold">Security Policy Framework</text>
                <rect x="100" y="60" width="80" height="25" rx="3" fill="#E74C3C"/>
                <text x="140" y="77" text-anchor="middle" fill="white" font-size="9">Data Classification</text>
                <rect x="220" y="60" width="80" height="25" rx="3" fill="#F39C12"/>
                <text x="260" y="77" text-anchor="middle" fill="white" font-size="9">Acceptable Use</text>
                <rect x="100" y="95" width="80" height="25" rx="3" fill="#2ECC71"/>
                <text x="140" y="112" text-anchor="middle" fill="white" font-size="9">Access Control</text>
                <rect x="220" y="95" width="80" height="25" rx="3" fill="#9B59B6"/>
                <text x="260" y="112" text-anchor="middle" fill="white" font-size="9">Change Mgmt</text>
                <rect x="160" y="130" width="80" height="25" rx="3" fill="#00A8FF"/>
                <text x="200" y="147" text-anchor="middle" fill="white" font-size="9">Incident Response</text>
            </svg>`
        },
        {
            title: "Incident Response Program",
            icon: "fa-exclamation-circle",
            description: "Structured approach to detecting, containing, and recovering from security incidents. Includes incident classification, response teams, communication procedures, and post-incident analysis.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Incident Response Lifecycle</title>
                <circle cx="100" cy="100" r="35" fill="#E74C3C"/>
                <text x="100" y="105" text-anchor="middle" fill="white" font-size="9">Detect</text>
                <circle cx="200" cy="60" r="35" fill="#F39C12"/>
                <text x="200" y="65" text-anchor="middle" fill="white" font-size="9">Contain</text>
                <circle cx="300" cy="100" r="35" fill="#2ECC71"/>
                <text x="300" y="105" text-anchor="middle" fill="white" font-size="9">Recover</text>
                <circle cx="200" cy="140" r="35" fill="#9B59B6"/>
                <text x="200" y="145" text-anchor="middle" fill="white" font-size="9">Learn</text>
                <path d="M130,85 L175,75" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M230,85 L275,95" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M275,125 L230,135" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M175,125 L130,115" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs>
            </svg>`
        },
        {
            title: "Security Monitoring & Auditing",
            icon: "fa-search",
            description: "Continuous monitoring of security controls, vulnerability assessments, and compliance audits. Includes log analysis, security metrics, and regular security reviews to ensure program effectiveness.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Security Monitoring Dashboard</title>
                <rect x="50" y="50" width="300" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <text x="200" y="40" text-anchor="middle" fill="#00A8FF" font-size="12" font-weight="bold">Security Operations Center</text>
                <rect x="70" y="70" width="90" height="40" rx="3" fill="#10b981"/>
                <text x="115" y="90" text-anchor="middle" fill="white" font-size="10">Log Analysis</text>
                <rect x="240" y="70" width="90" height="40" rx="3" fill="#f59e0b"/>
                <text x="285" y="90" text-anchor="middle" fill="white" font-size="10">Vulnerability</text>
                <text x="285" y="102" text-anchor="middle" fill="white" font-size="10">Scanning</text>
                <rect x="70" y="120" width="90" height="40" rx="3" fill="#3b82f6"/>
                <text x="115" y="140" text-anchor="middle" fill="white" font-size="10">Compliance</text>
                <text x="115" y="152" text-anchor="middle" fill="white" font-size="10">Audits</text>
                <rect x="240" y="120" width="90" height="40" rx="3" fill="#9B59B6"/>
                <text x="285" y="140" text-anchor="middle" fill="white" font-size="10">Security</text>
                <text x="285" y="152" text-anchor="middle" fill="white" font-size="10">Metrics</text>
                <circle cx="200" cy="90" r="8" fill="#E74C3C"/>
                <text x="200" y="95" text-anchor="middle" fill="white" font-size="8">SOC</text>
            </svg>`
        },
        {
            title: "Compliance & Governance",
            icon: "fa-balance-scale",
            description: "Regulatory compliance frameworks including SOX, HIPAA, PCI-DSS, and GDPR. Understanding governance structures, risk management processes, and third-party security assessments.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Compliance Framework</title>
                <rect x="80" y="40" width="240" height="30" rx="5" fill="#9B59B6"/>
                <text x="200" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Governance Framework</text>
                <rect x="60" y="90" width="70" height="35" rx="3" fill="#E74C3C"/>
                <text x="95" y="105" text-anchor="middle" fill="white" font-size="9">SOX</text>
                <text x="95" y="118" text-anchor="middle" fill="white" font-size="9">Compliance</text>
                <rect x="140" y="90" width="70" height="35" rx="3" fill="#F39C12"/>
                <text x="175" y="105" text-anchor="middle" fill="white" font-size="9">PCI-DSS</text>
                <text x="175" y="118" text-anchor="middle" fill="white" font-size="9">Standards</text>
                <rect x="220" y="90" width="70" height="35" rx="3" fill="#2ECC71"/>
                <text x="255" y="105" text-anchor="middle" fill="white" font-size="9">HIPAA</text>
                <text x="255" y="118" text-anchor="middle" fill="white" font-size="9">Privacy</text>
                <rect x="300" y="90" width="70" height="35" rx="3" fill="#00A8FF"/>
                <text x="335" y="105" text-anchor="middle" fill="white" font-size="9">GDPR</text>
                <text x="335" y="118" text-anchor="middle" fill="white" font-size="9">Rights</text>
                <rect x="150" y="140" width="100" height="25" rx="3" fill="#64748b"/>
                <text x="200" y="157" text-anchor="middle" fill="white" font-size="10">Risk Assessment</text>
            </svg>`
        },
        {
            title: "Firewall Types",
            icon: "fa-fire-alt",
            description: "Understanding different firewall architectures: stateless packet filters, stateful inspection firewalls, and next-generation firewalls (NGFWs) with their distinct security capabilities and roles.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Firewall Types Comparison</title>
                <rect x="30" y="50" width="100" height="100" rx="5" fill="#3b82f6"/>
                <text x="80" y="35" text-anchor="middle" fill="#3b82f6" font-size="10" font-weight="bold">Stateless</text>
                <text x="80" y="75" text-anchor="middle" fill="white" font-size="9">Packet Filter</text>
                <text x="80" y="90" text-anchor="middle" fill="white" font-size="8">• IP/Port Rules</text>
                <text x="80" y="105" text-anchor="middle" fill="white" font-size="8">• No Connection State</text>
                <text x="80" y="120" text-anchor="middle" fill="white" font-size="8">• Fast Processing</text>
                <text x="80" y="135" text-anchor="middle" fill="white" font-size="8">• Basic Security</text>
                
                <rect x="150" y="50" width="100" height="100" rx="5" fill="#10b981"/>
                <text x="200" y="35" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">Stateful</text>
                <text x="200" y="75" text-anchor="middle" fill="white" font-size="9">Inspection</text>
                <text x="200" y="90" text-anchor="middle" fill="white" font-size="8">• Connection Tracking</text>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="8">• Session State</text>
                <text x="200" y="120" text-anchor="middle" fill="white" font-size="8">• Context Aware</text>
                <text x="200" y="135" text-anchor="middle" fill="white" font-size="8">• Enhanced Security</text>
                
                <rect x="270" y="50" width="100" height="100" rx="5" fill="#ef4444"/>
                <text x="320" y="35" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">NGFW</text>
                <text x="320" y="75" text-anchor="middle" fill="white" font-size="9">Next-Generation</text>
                <text x="320" y="90" text-anchor="middle" fill="white" font-size="8">• Application Control</text>
                <text x="320" y="105" text-anchor="middle" fill="white" font-size="8">• Deep Inspection</text>
                <text x="320" y="120" text-anchor="middle" fill="white" font-size="8">• Threat Intelligence</text>
                <text x="320" y="135" text-anchor="middle" fill="white" font-size="8">• Advanced Security</text>
                
                <text x="200" y="175" text-anchor="middle" fill="#E0E0E0" font-size="9">Firewall Evolution: Basic → Advanced Security Controls</text>
            </svg>`
        },
        {
            title: "Cryptography Basics",
            icon: "fa-key",
            description: "Fundamental cryptographic concepts including symmetric and asymmetric encryption, key management, and hashing algorithms. Essential foundation for understanding VPNs and secure communications.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Cryptography Fundamentals</title>
                <rect x="30" y="40" width="120" height="120" rx="5" fill="#6366f1"/>
                <text x="90" y="30" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="bold">Symmetric</text>
                <circle cx="90" cy="70" r="15" fill="#3b82f6"/>
                <text x="90" y="75" text-anchor="middle" fill="white" font-size="8">Key</text>
                <rect x="65" y="90" width="50" height="15" rx="2" fill="#10b981"/>
                <text x="90" y="100" text-anchor="middle" fill="white" font-size="8">Encrypt</text>
                <rect x="65" y="110" width="50" height="15" rx="2" fill="#f59e0b"/>
                <text x="90" y="120" text-anchor="middle" fill="white" font-size="8">Decrypt</text>
                <text x="90" y="140" text-anchor="middle" fill="white" font-size="8">AES, DES</text>
                <text x="90" y="152" text-anchor="middle" fill="white" font-size="8">Same Key</text>
                
                <rect x="170" y="40" width="120" height="120" rx="5" fill="#8b5cf6"/>
                <text x="230" y="30" text-anchor="middle" fill="#8b5cf6" font-size="11" font-weight="bold">Asymmetric</text>
                <circle cx="210" cy="70" r="12" fill="#10b981"/>
                <text x="210" y="75" text-anchor="middle" fill="white" font-size="7">Public</text>
                <circle cx="250" cy="70" r="12" fill="#ef4444"/>
                <text x="250" y="75" text-anchor="middle" fill="white" font-size="7">Private</text>
                <rect x="205" y="90" width="50" height="15" rx="2" fill="#10b981"/>
                <text x="230" y="100" text-anchor="middle" fill="white" font-size="8">Encrypt</text>
                <rect x="205" y="110" width="50" height="15" rx="2" fill="#ef4444"/>
                <text x="230" y="120" text-anchor="middle" fill="white" font-size="8">Decrypt</text>
                <text x="230" y="140" text-anchor="middle" fill="white" font-size="8">RSA, ECC</text>
                <text x="230" y="152" text-anchor="middle" fill="white" font-size="8">Key Pairs</text>
                
                <rect x="310" y="60" width="70" height="80" rx="5" fill="#f59e0b"/>
                <text x="345" y="50" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Hashing</text>
                <text x="345" y="80" text-anchor="middle" fill="white" font-size="8">MD5</text>
                <text x="345" y="95" text-anchor="middle" fill="white" font-size="8">SHA-1</text>
                <text x="345" y="110" text-anchor="middle" fill="white" font-size="8">SHA-256</text>
                <text x="345" y="125" text-anchor="middle" fill="white" font-size="8">Integrity</text>
                
                <text x="200" y="185" text-anchor="middle" fill="#E0E0E0" font-size="9">Cryptographic Methods for Data Protection</text>
            </svg>`
        }
    ],
    // 5.3 - Configure and verify device access control using local passwords
    localPasswords: [
        {
            title: "Local User Authentication",
            icon: "fa-user-lock",
            description: "Configure local user accounts with specific privilege levels and secure password policies. Foundation of device access control using username/password combinations stored locally on the device.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Local User Authentication</title>
                <rect x="50" y="40" width="300" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <text x="200" y="30" text-anchor="middle" fill="#00A8FF" font-size="12" font-weight="bold">Local User Database</text>
                <rect x="70" y="60" width="90" height="30" rx="3" fill="#3b82f6"/>
                <text x="115" y="80" text-anchor="middle" fill="white" font-size="10">Admin (15)</text>
                <rect x="170" y="60" width="90" height="30" rx="3" fill="#10b981"/>
                <text x="215" y="80" text-anchor="middle" fill="white" font-size="10">Operator (7)</text>
                <rect x="270" y="60" width="90" height="30" rx="3" fill="#f59e0b"/>
                <text x="315" y="80" text-anchor="middle" fill="white" font-size="10">ReadOnly (1)</text>
                <rect x="120" y="110" width="160" height="30" rx="3" fill="#E74C3C"/>
                <text x="200" y="130" text-anchor="middle" fill="white" font-size="10">Password Encryption</text>
                <circle cx="80" cy="170" r="8" fill="#00A8FF"/>
                <text x="95" y="175" fill="#E0E0E0" font-size="10">Service password-encryption</text>
            </svg>`
        },
        {
            title: "Line Security Configuration",
            icon: "fa-terminal",
            description: "Secure console, VTY, and auxiliary lines with proper authentication, timeouts, and access controls. Critical for preventing unauthorized physical and remote access to network devices.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Line Security Configuration</title>
                <rect x="50" y="50" width="100" height="100" rx="5" fill="#334155"/>
                <text x="100" y="40" text-anchor="middle" fill="#00A8FF" font-size="12" font-weight="bold">Network Device</text>
                <rect x="70" y="70" width="60" height="20" rx="2" fill="#3b82f6"/>
                <text x="100" y="83" text-anchor="middle" fill="white" font-size="9">Console 0</text>
                <rect x="70" y="100" width="60" height="20" rx="2" fill="#10b981"/>
                <text x="100" y="113" text-anchor="middle" fill="white" font-size="9">VTY 0-15</text>
                <rect x="70" y="120" width="60" height="20" rx="2" fill="#f59e0b"/>
                <text x="100" y="133" text-anchor="middle" fill="white" font-size="9">AUX 0</text>
                <rect x="200" y="60" width="150" height="80" rx="5" fill="#1e293b"/>
                <text x="275" y="55" text-anchor="middle" fill="#E0E0E0" font-size="10">Security Controls</text>
                <text x="210" y="80" fill="#E0E0E0" font-size="9">• login local</text>
                <text x="210" y="95" fill="#E0E0E0" font-size="9">• exec-timeout 10 0</text>
                <text x="210" y="110" fill="#E0E0E0" font-size="9">• transport input ssh</text>
                <text x="210" y="125" fill="#E0E0E0" font-size="9">• access-class 10 in</text>
                <path d="M155,100 L195,100" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs>
            </svg>`
        },
        {
            title: "SSH Configuration & Management",
            icon: "fa-shield-alt",
            description: "Implement secure SSH version 2 for encrypted remote management. Includes RSA key generation, SSH parameters, and security hardening to replace insecure Telnet access.",
            visual: `<svg viewBox="0 0 400 200">
                <title>SSH Configuration</title>
                <rect x="50" y="60" width="80" height="80" rx="5" fill="#334155"/>
                <text x="90" y="50" text-anchor="middle" fill="#E0E0E0" font-size="11">Admin PC</text>
                <rect x="70" y="80" width="40" height="40" rx="3" fill="#3b82f6"/>
                <text x="90" y="105" text-anchor="middle" fill="white" font-size="9">SSH</text>
                <rect x="270" y="60" width="80" height="80" rx="5" fill="#334155"/>
                <text x="310" y="50" text-anchor="middle" fill="#E0E0E0" font-size="11">Router</text>
                <rect x="290" y="80" width="40" height="40" rx="3" fill="#10b981"/>
                <text x="310" y="105" text-anchor="middle" fill="white" font-size="9">SSHv2</text>
                <path d="M135,100 L265,100" stroke="#10b981" stroke-width="4"/>
                <text x="200" y="95" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">Encrypted</text>
                <text x="200" y="115" text-anchor="middle" fill="#10b981" font-size="10">2048-bit RSA</text>
                <rect x="160" y="130" width="80" height="25" rx="3" fill="#E74C3C"/>
                <text x="200" y="147" text-anchor="middle" fill="white" font-size="9">Telnet Disabled</text>
                <circle cx="90" cy="75" r="5" fill="#f59e0b"/>
                <circle cx="310" cy="75" r="5" fill="#f59e0b"/>
            </svg>`
        },
        {
            title: "Enable Password Security",
            icon: "fa-key",
            description: "Configure enable secret passwords with proper encryption and security. Understand differences between enable password and enable secret, and implement privilege level access control.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Enable Password Security</title>
                <rect x="80" y="50" width="240" height="100" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <text x="200" y="40" text-anchor="middle" fill="#00A8FF" font-size="12" font-weight="bold">Privilege Level Security</text>
                <rect x="100" y="70" width="80" height="25" rx="3" fill="#E74C3C"/>
                <text x="140" y="87" text-anchor="middle" fill="white" font-size="9">enable secret</text>
                <rect x="220" y="70" width="80" height="25" rx="3" fill="#64748b"/>
                <text x="260" y="87" text-anchor="middle" fill="white" font-size="9">enable password</text>
                <text x="140" y="110" text-anchor="middle" fill="#10b981" font-size="9">MD5 Hash</text>
                <text x="260" y="110" text-anchor="middle" fill="#f87171" font-size="9">Weak/Deprecated</text>
                <rect x="120" y="120" width="160" height="20" rx="3" fill="#3b82f6"/>
                <text x="200" y="133" text-anchor="middle" fill="white" font-size="9">Privilege Level 0-15</text>
                <text x="90" y="175" fill="#E0E0E0" font-size="10">✓ enable secret class</text>
                <text x="220" y="175" fill="#E0E0E0" font-size="10">✗ enable password</text>
            </svg>`
        },
        {
            title: "Access Control & Authorization",
            icon: "fa-user-shield",
            description: "Implement command authorization, privilege level management, and access verification. Configure role-based access control with proper command restrictions and audit logging.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Access Control Authorization</title>
                <rect x="50" y="40" width="300" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <text x="200" y="30" text-anchor="middle" fill="#00A8FF" font-size="12" font-weight="bold">Command Authorization Matrix</text>
                <rect x="70" y="60" width="70" height="20" rx="2" fill="#10b981"/>
                <text x="105" y="73" text-anchor="middle" fill="white" font-size="8">Level 15</text>
                <rect x="150" y="60" width="70" height="20" rx="2" fill="#f59e0b"/>
                <text x="185" y="73" text-anchor="middle" fill="white" font-size="8">Level 7</text>
                <rect x="230" y="60" width="70" height="20" rx="2" fill="#3b82f6"/>
                <text x="265" y="73" text-anchor="middle" fill="white" font-size="8">Level 1</text>
                <rect x="310" y="60" width="30" height="20" rx="2" fill="#E74C3C"/>
                <text x="325" y="73" text-anchor="middle" fill="white" font-size="8">Deny</text>
                <text x="70" y="100" fill="#E0E0E0" font-size="9">configure terminal</text>
                <text x="70" y="115" fill="#E0E0E0" font-size="9">show running-config</text>
                <text x="70" y="130" fill="#E0E0E0" font-size="9">show ip route</text>
                <text x="70" y="145" fill="#E0E0E0" font-size="9">ping/traceroute</text>
                <circle cx="270" cy="100" r="4" fill="#10b981"/>
                <circle cx="200" cy="115" r="4" fill="#f59e0b"/>
                <circle cx="200" cy="130" r="4" fill="#3b82f6"/>
                <circle cx="200" cy="145" r="4" fill="#3b82f6"/>
            </svg>`
        }
    ],
    // 5.4 - Security password policy elements
    passwordPolicies: [
        {
            title: "Password Complexity Requirements",
            icon: "fa-lock",
            description: "Comprehensive password policy elements including minimum length, character diversity, complexity rules, and prevention of common passwords. Essential foundation of organizational security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Password Complexity Matrix</title>
                <rect x="50" y="40" width="300" height="120" rx="5" fill="#334155" stroke="#E74C3C"/>
                <text x="200" y="30" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">Password Complexity Rules</text>
                <rect x="70" y="60" width="120" height="25" rx="3" fill="#10b981"/>
                <text x="130" y="77" text-anchor="middle" fill="white" font-size="10">Min 8 Characters</text>
                <rect x="210" y="60" width="120" height="25" rx="3" fill="#3b82f6"/>
                <text x="270" y="77" text-anchor="middle" fill="white" font-size="10">Uppercase A-Z</text>
                <rect x="70" y="95" width="120" height="25" rx="3" fill="#f59e0b"/>
                <text x="130" y="112" text-anchor="middle" fill="white" font-size="10">Lowercase a-z</text>
                <rect x="210" y="95" width="120" height="25" rx="3" fill="#9333ea"/>
                <text x="270" y="112" text-anchor="middle" fill="white" font-size="10">Numbers 0-9</text>
                <rect x="140" y="130" width="120" height="25" rx="3" fill="#ef4444"/>
                <text x="200" y="147" text-anchor="middle" fill="white" font-size="10">Special !@#$%</text>
            </svg>`
        },
        {
            title: "Multi-Factor Authentication",
            icon: "fa-mobile-alt",
            description: "MFA implementation using something you know (password), something you have (token/phone), and something you are (biometric). Significantly reduces authentication vulnerabilities.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Multi-Factor Authentication</title>
                <circle cx="120" cy="100" r="35" fill="#3b82f6"/>
                <text x="120" y="85" text-anchor="middle" fill="white" font-size="8">Something</text>
                <text x="120" y="100" text-anchor="middle" fill="white" font-size="8">You</text>
                <text x="120" y="115" text-anchor="middle" fill="white" font-size="8">KNOW</text>
                <circle cx="200" cy="100" r="35" fill="#10b981"/>
                <text x="200" y="85" text-anchor="middle" fill="white" font-size="8">Something</text>
                <text x="200" y="100" text-anchor="middle" fill="white" font-size="8">You</text>
                <text x="200" y="115" text-anchor="middle" fill="white" font-size="8">HAVE</text>
                <circle cx="280" cy="100" r="35" fill="#f59e0b"/>
                <text x="280" y="85" text-anchor="middle" fill="white" font-size="8">Something</text>
                <text x="280" y="100" text-anchor="middle" fill="white" font-size="8">You</text>
                <text x="280" y="115" text-anchor="middle" fill="white" font-size="8">ARE</text>
                <text x="200" y="40" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">Multi-Factor Authentication</text>
                <text x="200" y="170" text-anchor="middle" fill="#e2e8f0" font-size="10">Password + Token + Biometric</text>
            </svg>`
        },
        {
            title: "Certificate-Based Authentication",
            icon: "fa-certificate",
            description: "Digital certificates providing strong authentication without passwords. PKI infrastructure, certificate authorities, and certificate lifecycle management for secure identity verification.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Certificate Authentication Flow</title>
                <rect x="30" y="80" width="60" height="40" rx="5" fill="#334155"/>
                <text x="60" y="105" text-anchor="middle" fill="white" font-size="9">Client</text>
                <rect x="170" y="80" width="60" height="40" rx="5" fill="#10b981"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="9">CA</text>
                <rect x="310" y="80" width="60" height="40" rx="5" fill="#3b82f6"/>
                <text x="340" y="105" text-anchor="middle" fill="white" font-size="9">Server</text>
                <path d="M90 90 L170 90" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="130" y="85" text-anchor="middle" fill="#f59e0b" font-size="8">Certificate</text>
                <path d="M230 90 L310 90" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
                <text x="270" y="85" text-anchor="middle" fill="#10b981" font-size="8">Verified</text>
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <polygon points="0,0 0,6 9,3" fill="#f59e0b"/>
                    </marker>
                </defs>
                <text x="200" y="40" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">PKI Certificate Authentication</text>
                <text x="200" y="160" text-anchor="middle" fill="#e2e8f0" font-size="10">No Passwords Required</text>
            </svg>`
        },
        {
            title: "Password Management Systems",
            icon: "fa-database",
            description: "Enterprise password management solutions for secure storage, automated rotation, and policy enforcement. Integration with directory services and compliance requirements.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Password Management System</title>
                <rect x="150" y="60" width="100" height="80" rx="8" fill="#334155" stroke="#10b981"/>
                <text x="200" y="45" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">Password Vault</text>
                <circle cx="200" cy="90" r="15" fill="#ef4444"/>
                <text x="200" y="95" text-anchor="middle" fill="white" font-size="8">SECURE</text>
                <rect x="170" y="110" width="60" height="15" rx="2" fill="#3b82f6"/>
                <text x="200" y="122" text-anchor="middle" fill="white" font-size="8">Encrypted</text>
                <circle cx="80" cy="100" r="25" fill="#6b7280"/>
                <text x="80" y="105" text-anchor="middle" fill="white" font-size="9">User</text>
                <circle cx="320" cy="100" r="25" fill="#6b7280"/>
                <text x="320" y="105" text-anchor="middle" fill="white" font-size="9">Admin</text>
                <path d="M105 100 L150 100" stroke="#f59e0b" stroke-width="2"/>
                <path d="M250 100 L295 100" stroke="#f59e0b" stroke-width="2"/>
                <text x="200" y="170" text-anchor="middle" fill="#e2e8f0" font-size="10">Centralized • Audited • Automated</text>
            </svg>`
        },
        {
            title: "Biometric Authentication",
            icon: "fa-fingerprint",
            description: "Biometric factors including fingerprints, facial recognition, voice patterns, and behavioral analytics. Implementation considerations, accuracy metrics, and privacy requirements.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Biometric Authentication Types</title>
                <circle cx="100" cy="80" r="30" fill="#9333ea"/>
                <text x="100" y="70" text-anchor="middle" fill="white" font-size="8">👁</text>
                <text x="100" y="85" text-anchor="middle" fill="white" font-size="8">Iris</text>
                <text x="100" y="95" text-anchor="middle" fill="white" font-size="8">Scan</text>
                <circle cx="200" cy="80" r="30" fill="#10b981"/>
                <text x="200" y="70" text-anchor="middle" fill="white" font-size="8">👤</text>
                <text x="200" y="85" text-anchor="middle" fill="white" font-size="8">Face</text>
                <text x="200" y="95" text-anchor="middle" fill="white" font-size="8">ID</text>
                <circle cx="300" cy="80" r="30" fill="#3b82f6"/>
                <text x="300" y="70" text-anchor="middle" fill="white" font-size="8">👆</text>
                <text x="300" y="85" text-anchor="middle" fill="white" font-size="8">Finger</text>
                <text x="300" y="95" text-anchor="middle" fill="white" font-size="8">Print</text>
                <rect x="120" y="130" width="160" height="30" rx="5" fill="#ef4444"/>
                <text x="200" y="150" text-anchor="middle" fill="white" font-size="10">Unique Physical Characteristics</text>
                <text x="200" y="40" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">Biometric Authentication</text>
            </svg>`
        }
    ],
    // 5.5 - IPsec remote access and site-to-site VPNs
    remoteVpn: [
        {
            title: "IPsec Fundamentals",
            icon: "fa-shield-alt",
            description: "Internet Protocol Security (IPsec) framework providing authentication, integrity, and confidentiality for IP communications. Understanding ESP, AH protocols and security associations.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPsec Protocol Stack</title>
                <rect x="50" y="40" width="300" height="120" rx="5" fill="#334155" stroke="#E74C3C"/>
                <text x="200" y="30" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">IPsec Protocol Suite</text>
                <rect x="70" y="60" width="120" height="30" rx="3" fill="#3b82f6"/>
                <text x="130" y="80" text-anchor="middle" fill="white" font-size="10">ESP (Encryption)</text>
                <rect x="210" y="60" width="120" height="30" rx="3" fill="#10b981"/>
                <text x="270" y="80" text-anchor="middle" fill="white" font-size="10">AH (Authentication)</text>
                <rect x="70" y="100" width="120" height="30" rx="3" fill="#f59e0b"/>
                <text x="130" y="120" text-anchor="middle" fill="white" font-size="10">IKE (Key Exchange)</text>
                <rect x="210" y="100" width="120" height="30" rx="3" fill="#9333ea"/>
                <text x="270" y="120" text-anchor="middle" fill="white" font-size="10">SA (Security Assoc)</text>
                <text x="200" y="180" text-anchor="middle" fill="#e2e8f0" font-size="10">Confidentiality • Integrity • Authentication</text>
            </svg>`
        },
        {
            title: "Site-to-Site VPNs",
            icon: "fa-network-wired",
            description: "Permanent encrypted tunnels connecting remote offices or networks. Gateway-to-gateway connectivity enabling secure communication between geographically distributed sites.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Site-to-Site VPN</title>
                <rect x="30" y="70" width="80" height="60" rx="5" fill="#334155"/>
                <text x="70" y="90" text-anchor="middle" fill="white" font-size="8">Branch</text>
                <text x="70" y="105" text-anchor="middle" fill="white" font-size="8">Office</text>
                <text x="70" y="120" text-anchor="middle" fill="#10b981" font-size="8">Router</text>
                <rect x="290" y="70" width="80" height="60" rx="5" fill="#334155"/>
                <text x="330" y="90" text-anchor="middle" fill="white" font-size="8">HQ</text>
                <text x="330" y="105" text-anchor="middle" fill="white" font-size="8">Office</text>
                <text x="330" y="120" text-anchor="middle" fill="#10b981" font-size="8">Router</text>
                <ellipse cx="200" cy="100" rx="80" ry="25" fill="none" stroke="#f87171" stroke-width="2"/>
                <text x="200" y="50" text-anchor="middle" fill="#f87171" font-size="12">Internet</text>
                <rect x="130" y="90" width="140" height="20" rx="10" fill="#10b981" opacity="0.7"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="10">IPsec Tunnel</text>
                <text x="200" y="160" text-anchor="middle" fill="#e2e8f0" font-size="10">Always-On Connection</text>
            </svg>`
        },
        {
            title: "Remote Access VPNs",
            icon: "fa-user-shield",
            description: "Client-initiated VPN connections for remote workers. Dynamic tunnel establishment using VPN clients to securely access corporate resources from any location.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Remote Access VPN</title>
                <circle cx="70" cy="100" r="30" fill="#6b7280"/>
                <text x="70" y="85" text-anchor="middle" fill="white" font-size="8">Remote</text>
                <text x="70" y="100" text-anchor="middle" fill="white" font-size="8">Worker</text>
                <text x="70" y="115" text-anchor="middle" fill="#3b82f6" font-size="8">Client</text>
                <rect x="290" y="70" width="80" height="60" rx="5" fill="#334155"/>
                <text x="330" y="90" text-anchor="middle" fill="white" font-size="8">Corporate</text>
                <text x="330" y="105" text-anchor="middle" fill="white" font-size="8">Network</text>
                <text x="330" y="120" text-anchor="middle" fill="#10b981" font-size="8">VPN Gateway</text>
                <path d="M100 100 Q200 70 290 100" stroke="#10b981" stroke-width="3" fill="none"/>
                <text x="200" y="50" text-anchor="middle" fill="#10b981" font-size="10">Dynamic Tunnel</text>
                <circle cx="200" cy="140" r="20" fill="#f59e0b"/>
                <text x="200" y="145" text-anchor="middle" fill="white" font-size="8">Internet</text>
                <text x="200" y="180" text-anchor="middle" fill="#e2e8f0" font-size="10">On-Demand Connection</text>
            </svg>`
        },
        {
            title: "VPN Tunnel Modes",
            icon: "fa-exchange-alt",
            description: "Transport vs Tunnel mode implementations. Understanding when to use each mode, packet encapsulation differences, and performance considerations for various VPN scenarios.",
            visual: `<svg viewBox="0 0 400 200">
                <title>IPsec Tunnel vs Transport Mode</title>
                <rect x="30" y="50" width="160" height="100" rx="5" fill="#334155" stroke="#3b82f6"/>
                <text x="110" y="40" text-anchor="middle" fill="#3b82f6" font-size="12" font-weight="bold">Transport Mode</text>
                <rect x="50" y="70" width="120" height="20" rx="2" fill="#10b981"/>
                <text x="110" y="84" text-anchor="middle" fill="white" font-size="9">Original IP Header</text>
                <rect x="50" y="100" width="120" height="20" rx="2" fill="#f59e0b"/>
                <text x="110" y="114" text-anchor="middle" fill="white" font-size="9">IPsec Header</text>
                <rect x="50" y="120" width="120" height="20" rx="2" fill="#9333ea"/>
                <text x="110" y="134" text-anchor="middle" fill="white" font-size="9">Payload</text>
                <rect x="210" y="50" width="160" height="100" rx="5" fill="#334155" stroke="#ef4444"/>
                <text x="290" y="40" text-anchor="middle" fill="#ef4444" font-size="12" font-weight="bold">Tunnel Mode</text>
                <rect x="230" y="70" width="120" height="15" rx="2" fill="#10b981"/>
                <text x="290" y="81" text-anchor="middle" fill="white" font-size="8">New IP Header</text>
                <rect x="230" y="90" width="120" height="15" rx="2" fill="#f59e0b"/>
                <text x="290" y="101" text-anchor="middle" fill="white" font-size="8">IPsec Header</text>
                <rect x="230" y="110" width="120" height="15" rx="2" fill="#6b7280"/>
                <text x="290" y="121" text-anchor="middle" fill="white" font-size="8">Original IP</text>
                <rect x="230" y="125" width="120" height="15" rx="2" fill="#9333ea"/>
                <text x="290" y="136" text-anchor="middle" fill="white" font-size="8">Payload</text>
            </svg>`
        },
        {
            title: "VPN Implementation & Troubleshooting",
            icon: "fa-tools",
            description: "VPN configuration best practices, common deployment scenarios, troubleshooting techniques, and performance optimization. Monitoring tools and diagnostic commands for VPN connectivity.",
            visual: `<svg viewBox="0 0 400 200">
                <title>VPN Implementation Process</title>
                <circle cx="80" cy="80" r="25" fill="#3b82f6"/>
                <text x="80" y="70" text-anchor="middle" fill="white" font-size="8">1</text>
                <text x="80" y="85" text-anchor="middle" fill="white" font-size="8">Plan</text>
                <circle cx="160" cy="80" r="25" fill="#10b981"/>
                <text x="160" y="70" text-anchor="middle" fill="white" font-size="8">2</text>
                <text x="160" y="85" text-anchor="middle" fill="white" font-size="8">Config</text>
                <circle cx="240" cy="80" r="25" fill="#f59e0b"/>
                <text x="240" y="70" text-anchor="middle" fill="white" font-size="8">3</text>
                <text x="240" y="85" text-anchor="middle" fill="white" font-size="8">Test</text>
                <circle cx="320" cy="80" r="25" fill="#9333ea"/>
                <text x="320" y="70" text-anchor="middle" fill="white" font-size="8">4</text>
                <text x="320" y="85" text-anchor="middle" fill="white" font-size="8">Monitor</text>
                <path d="M105 80 L135 80" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M185 80 L215 80" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M265 80 L295 80" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
                <rect x="100" y="130" width="200" height="40" rx="5" fill="#ef4444"/>
                <text x="200" y="155" text-anchor="middle" fill="white" font-size="10">Debug & Troubleshoot</text>
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0,0 0,6 9,3" fill="#e2e8f0"/>
                    </marker>
                </defs>
            </svg>`
        }
    ],
    // 5.6 - Configure and verify access control lists
    acls: [
        {
            title: "Standard ACLs",
            icon: "fa-filter",
            description: "Standard ACLs filter traffic based only on source IP address. They use numbered lists (1-99, 1300-1999) and should be placed as close to the destination as possible to minimize impact on network traffic.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Standard ACL Operation</title>
                <rect x="50" y="60" width="80" height="40" rx="5" fill="#10b981"/>
                <text x="90" y="85" text-anchor="middle" fill="white" font-size="10">Source Host</text>
                <text x="90" y="110" text-anchor="middle" fill="#E0E0E0" font-size="9">10.1.1.10</text>
                
                <rect x="180" y="60" width="80" height="40" rx="5" fill="#E74C3C"/>
                <text x="220" y="80" text-anchor="middle" fill="white" font-size="10">Standard ACL</text>
                <text x="220" y="95" text-anchor="middle" fill="white" font-size="8">Check Source IP</text>
                
                <rect x="310" y="60" width="80" height="40" rx="5" fill="#3b82f6"/>
                <text x="350" y="85" text-anchor="middle" fill="white" font-size="10">Destination</text>
                
                <path d="M130,80 L180,80" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
                <path d="M260,80 L310,80" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/>
                
                <text x="90" y="140" text-anchor="middle" fill="#E0E0E0" font-size="9">Permit/Deny based</text>
                <text x="90" y="155" text-anchor="middle" fill="#E0E0E0" font-size="9">on Source IP only</text>
                
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Extended ACLs",
            icon: "fa-list-ul",
            description: "Extended ACLs provide granular traffic filtering based on source/destination IP, protocol type, and port numbers. They use numbered lists (100-199, 2000-2699) and should be placed close to the source.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Extended ACL Multi-Criteria Filtering</title>
                <rect x="50" y="40" width="70" height="30" rx="3" fill="#10b981"/>
                <text x="85" y="60" text-anchor="middle" fill="white" font-size="9">Source IP</text>
                
                <rect x="50" y="80" width="70" height="30" rx="3" fill="#10b981"/>
                <text x="85" y="100" text-anchor="middle" fill="white" font-size="9">Dest IP</text>
                
                <rect x="50" y="120" width="70" height="30" rx="3" fill="#10b981"/>
                <text x="85" y="140" text-anchor="middle" fill="white" font-size="9">Protocol</text>
                
                <rect x="50" y="160" width="70" height="30" rx="3" fill="#10b981"/>
                <text x="85" y="180" text-anchor="middle" fill="white" font-size="9">Port</text>
                
                <rect x="180" y="90" width="100" height="60" rx="5" fill="#E74C3C"/>
                <text x="230" y="115" text-anchor="middle" fill="white" font-size="10">Extended ACL</text>
                <text x="230" y="130" text-anchor="middle" fill="white" font-size="8">Multi-Criteria</text>
                <text x="230" y="145" text-anchor="middle" fill="white" font-size="8">Filtering</text>
                
                <rect x="320" y="110" width="60" height="40" rx="3" fill="#3b82f6"/>
                <text x="350" y="130" text-anchor="middle" fill="white" font-size="9">Permit</text>
                <text x="350" y="145" text-anchor="middle" fill="white" font-size="9">or Deny</text>
                
                <path d="M120,110 L180,120" stroke="#10b981" stroke-width="2"/>
                <path d="M280,120 L320,130" stroke="#3b82f6" stroke-width="2"/>
            </svg>`
        },
        {
            title: "Named ACLs",
            icon: "fa-tag",
            description: "Named ACLs use descriptive names instead of numbers for easier management. They support both standard and extended functionality with improved readability and allow for line insertion and deletion.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Named ACL Management</title>
                <rect x="50" y="50" width="120" height="100" rx="5" fill="#334155" stroke="#F39C12" stroke-width="2"/>
                <text x="110" y="40" text-anchor="middle" fill="#F39C12" font-size="12" font-weight="bold">Named ACL</text>
                <text x="110" y="75" text-anchor="middle" fill="#E0E0E0" font-size="10">"OFFICE_SECURITY"</text>
                <text x="110" y="95" text-anchor="middle" fill="#10b981" font-size="9">✓ Descriptive</text>
                <text x="110" y="110" text-anchor="middle" fill="#10b981" font-size="9">✓ Manageable</text>
                <text x="110" y="125" text-anchor="middle" fill="#10b981" font-size="9">✓ Line Numbers</text>
                <text x="110" y="140" text-anchor="middle" fill="#10b981" font-size="9">✓ Insert/Delete</text>
                
                <rect x="230" y="50" width="120" height="100" rx="5" fill="#334155" stroke="#64748b" stroke-width="2"/>
                <text x="290" y="40" text-anchor="middle" fill="#64748b" font-size="12" font-weight="bold">Numbered ACL</text>
                <text x="290" y="75" text-anchor="middle" fill="#E0E0E0" font-size="10">"ACL 101"</text>
                <text x="290" y="95" text-anchor="middle" fill="#f87171" font-size="9">✗ Generic Numbers</text>
                <text x="290" y="110" text-anchor="middle" fill="#f87171" font-size="9">✗ Hard to Manage</text>
                <text x="290" y="125" text-anchor="middle" fill="#f87171" font-size="9">✗ No Line Insert</text>
                <text x="290" y="140" text-anchor="middle" fill="#f87171" font-size="9">✗ Delete/Recreate</text>
            </svg>`
        },
        {
            title: "ACL Troubleshooting",
            icon: "fa-bug",
            description: "Systematic ACL troubleshooting using debug commands, show commands, and log analysis. Understanding implicit deny, rule order evaluation, and common configuration errors.",
            visual: `<svg viewBox="0 0 400 200">
                <title>ACL Troubleshooting Process</title>
                <rect x="50" y="40" width="90" height="30" rx="3" fill="#3b82f6"/>
                <text x="95" y="60" text-anchor="middle" fill="white" font-size="9">show access-lists</text>
                
                <rect x="50" y="80" width="90" height="30" rx="3" fill="#f59e0b"/>
                <text x="95" y="100" text-anchor="middle" fill="white" font-size="9">show ip interface</text>
                
                <rect x="50" y="120" width="90" height="30" rx="3" fill="#10b981"/>
                <text x="95" y="140" text-anchor="middle" fill="white" font-size="9">debug ip packet</text>
                
                <rect x="200" y="70" width="80" height="60" rx="5" fill="#E74C3C"/>
                <text x="240" y="95" text-anchor="middle" fill="white" font-size="10">Analysis</text>
                <text x="240" y="110" text-anchor="middle" fill="white" font-size="8">& Diagnosis</text>
                
                <rect x="320" y="40" width="60" height="25" rx="3" fill="#10b981"/>
                <text x="350" y="57" text-anchor="middle" fill="white" font-size="8">Permit</text>
                
                <rect x="320" y="75" width="60" height="25" rx="3" fill="#f87171"/>
                <text x="350" y="92" text-anchor="middle" fill="white" font-size="8">Deny</text>
                
                <rect x="320" y="110" width="60" height="25" rx="3" fill="#f59e0b"/>
                <text x="350" y="127" text-anchor="middle" fill="white" font-size="8">Log</text>
                
                <rect x="320" y="145" width="60" height="25" rx="3" fill="#9B59B6"/>
                <text x="350" y="162" text-anchor="middle" fill="white" font-size="8">Count</text>
                
                <path d="M140,55 L200,85" stroke="#3b82f6" stroke-width="2"/>
                <path d="M140,95 L200,100" stroke="#f59e0b" stroke-width="2"/>
                <path d="M140,135 L200,115" stroke="#10b981" stroke-width="2"/>
                
                <path d="M280,85 L320,55" stroke="#10b981" stroke-width="2"/>
                <path d="M280,95 L320,87" stroke="#f87171" stroke-width="2"/>
                <path d="M280,105 L320,120" stroke="#f59e0b" stroke-width="2"/>
                <path d="M280,115 L320,155" stroke="#9B59B6" stroke-width="2"/>
            </svg>`
        },
        {
            title: "ACL Best Practices",
            icon: "fa-shield-alt",
            description: "ACL security best practices including optimal placement strategies, performance considerations, logging configuration, and integration with network security policies.",
            visual: `<svg viewBox="0 0 400 200">
                <title>ACL Best Practices</title>
                <circle cx="200" cy="100" r="80" fill="none" stroke="#E74C3C" stroke-width="3"/>
                
                <rect x="170" y="85" width="60" height="30" rx="3" fill="#E74C3C"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="10">ACL Core</text>
                
                <rect x="120" y="30" width="50" height="20" rx="2" fill="#3b82f6"/>
                <text x="145" y="45" text-anchor="middle" fill="white" font-size="8">Placement</text>
                
                <rect x="230" y="30" width="50" height="20" rx="2" fill="#10b981"/>
                <text x="255" y="45" text-anchor="middle" fill="white" font-size="8">Logging</text>
                
                <rect x="300" y="85" width="50" height="20" rx="2" fill="#f59e0b"/>
                <text x="325" y="100" text-anchor="middle" fill="white" font-size="8">Performance</text>
                
                <rect x="230" y="150" width="50" height="20" rx="2" fill="#9B59B6"/>
                <text x="255" y="165" text-anchor="middle" fill="white" font-size="8">Security</text>
                
                <rect x="120" y="150" width="50" height="20" rx="2" fill="#6366f1"/>
                <text x="145" y="165" text-anchor="middle" fill="white" font-size="8">Order</text>
                
                <rect x="50" y="85" width="50" height="20" rx="2" fill="#ec4899"/>
                <text x="75" y="100" text-anchor="middle" fill="white" font-size="8">Naming</text>
                
                <path d="M145,50 L180,85" stroke="#3b82f6" stroke-width="2"/>
                <path d="M255,50 L220,85" stroke="#10b981" stroke-width="2"/>
                <path d="M300,95 L230,105" stroke="#f59e0b" stroke-width="2"/>
                <path d="M255,150 L220,115" stroke="#9B59B6" stroke-width="2"/>
                <path d="M145,150 L180,115" stroke="#6366f1" stroke-width="2"/>
                <path d="M100,95 L170,105" stroke="#ec4899" stroke-width="2"/>
            </svg>`
        }
    ],
    // 5.7 - Layer 2 security features (DHCP snooping, dynamic ARP inspection, and port security)
    layer2Security: [
        {
            title: "Port Security",
            icon: "fa-ethernet",
            description: "Port security restricts input to an interface by limiting and identifying MAC addresses. Prevents unauthorized devices from connecting and provides violation actions like shutdown, restrict, or protect.",
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
        },
        {
            title: "DHCP Snooping",
            icon: "fa-search",
            description: "DHCP snooping acts as a firewall between untrusted hosts and trusted DHCP servers. It builds a binding table of MAC-to-IP mappings and drops malicious DHCP messages from rogue servers.",
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
            title: "Dynamic ARP Inspection",
            icon: "fa-user-secret",
            description: "DAI validates ARP packets using the DHCP snooping binding table. It intercepts, logs, and discards ARP packets with invalid IP-to-MAC bindings, preventing man-in-the-middle attacks.",
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
        },
        {
            title: "802.1X Authentication",
            icon: "fa-key",
            description: "802.1X provides port-based network access control using EAP (Extensible Authentication Protocol). Authenticates devices before granting network access via RADIUS server integration.",
            visual: `<svg viewBox="0 0 400 200">
                <title>802.1X Authentication Process</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#3b82f6"/>
                <text x="80" y="105" text-anchor="middle" fill="white" font-size="9">Supplicant</text>
                
                <rect x="170" y="80" width="60" height="40" rx="3" fill="#E74C3C"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="9">Authenticator</text>
                
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#10b981"/>
                <text x="320" y="100" text-anchor="middle" fill="white" font-size="8">RADIUS</text>
                <text x="320" y="110" text-anchor="middle" fill="white" font-size="8">Server</text>
                
                <path d="M110,90 L170,90" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow1)"/>
                <text x="140" y="85" text-anchor="middle" fill="#E0E0E0" font-size="8">EAP</text>
                
                <path d="M230,90 L290,90" stroke="#E74C3C" stroke-width="2" marker-end="url(#arrow2)"/>
                <text x="260" y="85" text-anchor="middle" fill="#E0E0E0" font-size="8">RADIUS</text>
                
                <path d="M290,110 L230,110" stroke="#10b981" stroke-width="2" marker-end="url(#arrow3)"/>
                <text x="260" y="125" text-anchor="middle" fill="#E0E0E0" font-size="8">Accept/Reject</text>
                
                <path d="M170,110 L110,110" stroke="#10b981" stroke-width="2" marker-end="url(#arrow4)"/>
                <text x="140" y="125" text-anchor="middle" fill="#E0E0E0" font-size="8">Access</text>
                
                <defs>
                    <marker id="arrow1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#3b82f6"/>
                    </marker>
                    <marker id="arrow2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#E74C3C"/>
                    </marker>
                    <marker id="arrow3" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                    <marker id="arrow4" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Storm Control",
            icon: "fa-cloud-bolt",
            description: "Storm control prevents broadcast, multicast, or unicast traffic storms from disrupting network performance. Monitors traffic rates and drops excessive packets when thresholds are exceeded.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Storm Control Protection</title>
                <rect x="50" y="60" width="80" height="80" rx="5" fill="#f87171"/>
                <text x="90" y="85" text-anchor="middle" fill="white" font-size="10">Traffic Storm</text>
                <text x="90" y="100" text-anchor="middle" fill="white" font-size="9">Broadcast</text>
                <text x="90" y="115" text-anchor="middle" fill="white" font-size="9">Multicast</text>
                <text x="90" y="130" text-anchor="middle" fill="white" font-size="9">Unicast</text>
                
                <rect x="180" y="80" width="80" height="40" rx="5" fill="#E74C3C"/>
                <text x="220" y="95" text-anchor="middle" fill="white" font-size="10">Storm Control</text>
                <text x="220" y="110" text-anchor="middle" fill="white" font-size="8">Threshold Check</text>
                
                <rect x="310" y="70" width="60" height="25" rx="3" fill="#10b981"/>
                <text x="340" y="87" text-anchor="middle" fill="white" font-size="9">Normal</text>
                
                <rect x="310" y="105" width="60" height="25" rx="3" fill="#f87171"/>
                <text x="340" y="122" text-anchor="middle" fill="white" font-size="9">Dropped</text>
                
                <path d="M130,100 L180,100" stroke="#f87171" stroke-width="3"/>
                <path d="M260,85 L310,82" stroke="#10b981" stroke-width="2"/>
                <path d="M260,115 L310,118" stroke="#f87171" stroke-width="2"/>
                
                <text x="200" y="160" text-anchor="middle" fill="#E0E0E0" font-size="10">Threshold: 50% BW</text>
                <text x="200" y="175" text-anchor="middle" fill="#E0E0E0" font-size="9">Action: Drop excess packets</text>
            </svg>`
        },
        {
            title: "VLAN Access Control Lists",
            icon: "fa-filter",
            description: "VACLs filter traffic within VLANs using access control lists applied to VLAN interfaces. Provides Layer 2 filtering for intra-VLAN communication control and security policy enforcement.",
            visual: `<svg viewBox="0 0 400 200">
                <title>VLAN Access Control Lists</title>
                <rect x="50" y="40" width="120" height="120" rx="5" fill="#3b82f6" opacity="0.3"/>
                <text x="110" y="30" text-anchor="middle" fill="#3b82f6" font-size="12" font-weight="bold">VLAN 10</text>
                
                <rect x="70" y="60" width="30" height="20" rx="2" fill="#10b981"/>
                <text x="85" y="75" text-anchor="middle" fill="white" font-size="8">PC1</text>
                
                <rect x="120" y="60" width="30" height="20" rx="2" fill="#10b981"/>
                <text x="135" y="75" text-anchor="middle" fill="white" font-size="8">PC2</text>
                
                <rect x="70" y="120" width="30" height="20" rx="2" fill="#f87171"/>
                <text x="85" y="135" text-anchor="middle" fill="white" font-size="8">PC3</text>
                
                <rect x="120" y="120" width="30" height="20" rx="2" fill="#f87171"/>
                <text x="135" y="135" text-anchor="middle" fill="white" font-size="8">PC4</text>
                
                <rect x="230" y="80" width="80" height="40" rx="5" fill="#E74C3C"/>
                <text x="270" y="95" text-anchor="middle" fill="white" font-size="10">VACL</text>
                <text x="270" y="110" text-anchor="middle" fill="white" font-size="8">Filter Rules</text>
                
                <path d="M100,70 L135,70" stroke="#10b981" stroke-width="2" marker-end="url(#vacl-arrow1)"/>
                <text x="117" y="65" text-anchor="middle" fill="#10b981" font-size="8">✓</text>
                
                <path d="M100,130 L135,130" stroke="#f87171" stroke-width="2"/>
                <text x="117" y="125" text-anchor="middle" fill="#f87171" font-size="12">✗</text>
                
                <path d="M170,100 L230,100" stroke="#E74C3C" stroke-width="2"/>
                
                <defs>
                    <marker id="vacl-arrow1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                </defs>
                
                <text x="270" y="160" text-anchor="middle" fill="#E0E0E0" font-size="9">Permit: PC1 ↔ PC2</text>
                <text x="270" y="175" text-anchor="middle" fill="#E0E0E0" font-size="9">Deny: PC3 ↔ PC4</text>
            </svg>`
        },
        {
            title: "Protected Ports",
            icon: "fa-ban",
            description: "Protected ports prevent communication between ports on the same switch, even within the same VLAN. Provides isolation for security or regulatory compliance requirements.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Protected Ports Isolation</title>
                <rect x="150" y="80" width="100" height="40" rx="5" fill="#334155"/>
                <text x="200" y="105" text-anchor="middle" fill="white">Switch</text>
                
                <rect x="50" y="40" width="60" height="30" rx="3" fill="#f87171"/>
                <text x="80" y="60" text-anchor="middle" fill="white" font-size="9">Protected</text>
                
                <rect x="50" y="130" width="60" height="30" rx="3" fill="#f87171"/>
                <text x="80" y="150" text-anchor="middle" fill="white" font-size="9">Protected</text>
                
                <rect x="290" y="85" width="60" height="30" rx="3" fill="#10b981"/>
                <text x="320" y="105" text-anchor="middle" fill="white" font-size="9">Normal</text>
                
                <path d="M110,55 L150,90" stroke="#E74C3C" stroke-width="2"/>
                <path d="M110,145 L150,110" stroke="#E74C3C" stroke-width="2"/>
                <path d="M250,100 L290,100" stroke="#10b981" stroke-width="2"/>
                
                <path d="M80,70 Q80,100 80,130" stroke="#f87171" stroke-width="3" stroke-dasharray="5,5"/>
                <text x="60" y="100" text-anchor="middle" fill="#f87171" font-size="20">✗</text>
                
                <text x="200" y="40" text-anchor="middle" fill="#E0E0E0" font-size="11">Protected ports cannot communicate</text>
                <text x="200" y="170" text-anchor="middle" fill="#E0E0E0" font-size="9">Normal ports can communicate normally</text>
            </svg>`
        }
    ],
    // 5.8 - Authentication, authorization, and accounting concepts
    aaaConcepts: [
        {
            title: "Authentication Methods",
            icon: "fa-key",
            description: "Authentication verifies user identity through local databases, external servers (RADIUS/TACACS+), or certificate-based methods. Supports password, multi-factor, and certificate authentication.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Authentication Methods</title>
                <rect x="50" y="40" width="80" height="40" rx="5" fill="#3b82f6"/>
                <text x="90" y="65" text-anchor="middle" fill="white" font-size="10">Local Auth</text>
                
                <rect x="160" y="40" width="80" height="40" rx="5" fill="#10b981"/>
                <text x="200" y="65" text-anchor="middle" fill="white" font-size="10">RADIUS</text>
                
                <rect x="270" y="40" width="80" height="40" rx="5" fill="#f59e0b"/>
                <text x="310" y="65" text-anchor="middle" fill="white" font-size="10">TACACS+</text>
                
                <rect x="50" y="120" width="80" height="40" rx="5" fill="#9B59B6"/>
                <text x="90" y="145" text-anchor="middle" fill="white" font-size="10">Certificate</text>
                
                <rect x="160" y="120" width="80" height="40" rx="5" fill="#E74C3C"/>
                <text x="200" y="145" text-anchor="middle" fill="white" font-size="10">Multi-Factor</text>
                
                <rect x="270" y="120" width="80" height="40" rx="5" fill="#6366f1"/>
                <text x="310" y="145" text-anchor="middle" fill="white" font-size="10">Smart Card</text>
                
                <circle cx="200" cy="100" r="15" fill="#334155"/>
                <text x="200" y="106" text-anchor="middle" fill="white" font-size="8">User</text>
                
                <path d="M185,100 L130,60" stroke="#3b82f6" stroke-width="2"/>
                <path d="M200,85 L200,60" stroke="#10b981" stroke-width="2"/>
                <path d="M215,100 L270,60" stroke="#f59e0b" stroke-width="2"/>
                <path d="M185,115 L130,145" stroke="#9B59B6" stroke-width="2"/>
                <path d="M215,115 L270,145" stroke="#6366f1" stroke-width="2"/>
            </svg>`
        },
        {
            title: "Authorization Models",
            icon: "fa-user-shield",
            description: "Authorization determines what authenticated users can access. Includes privilege levels (0-15), command authorization, and role-based access control (RBAC) for network devices.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Authorization Hierarchy</title>
                <rect x="150" y="30" width="100" height="25" rx="3" fill="#E74C3C"/>
                <text x="200" y="47" text-anchor="middle" fill="white" font-size="10">Privilege 15 (Admin)</text>
                
                <rect x="120" y="70" width="160" height="25" rx="3" fill="#f59e0b"/>
                <text x="200" y="87" text-anchor="middle" fill="white" font-size="10">Privilege 5-14 (Operator)</text>
                
                <rect x="90" y="110" width="220" height="25" rx="3" fill="#10b981"/>
                <text x="200" y="127" text-anchor="middle" fill="white" font-size="10">Privilege 1-4 (Monitor)</text>
                
                <rect x="60" y="150" width="280" height="25" rx="3" fill="#64748b"/>
                <text x="200" y="167" text-anchor="middle" fill="white" font-size="10">Privilege 0 (User EXEC)</text>
                
                <text x="50" y="47" text-anchor="middle" fill="#E74C3C" font-size="9">Full Access</text>
                <text x="50" y="87" text-anchor="middle" fill="#f59e0b" font-size="9">Config</text>
                <text x="50" y="127" text-anchor="middle" fill="#10b981" font-size="9">Show</text>
                <text x="50" y="167" text-anchor="middle" fill="#64748b" font-size="9">Basic</text>
                
                <path d="M350,42 L380,42" stroke="#E74C3C" stroke-width="2" marker-end="url(#auth-arrow)"/>
                <path d="M350,82 L370,82" stroke="#f59e0b" stroke-width="2" marker-end="url(#auth-arrow)"/>
                <path d="M350,122 L360,122" stroke="#10b981" stroke-width="2" marker-end="url(#auth-arrow)"/>
                <path d="M350,162 L355,162" stroke="#64748b" stroke-width="2" marker-end="url(#auth-arrow)"/>
                
                <defs>
                    <marker id="auth-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#E0E0E0"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Accounting & Logging",
            icon: "fa-clipboard-list",
            description: "Accounting tracks user activities, command execution, and session details. Provides audit trails for security compliance, troubleshooting, and forensic analysis of network access.",
            visual: `<svg viewBox="0 0 400 200">
                <title>AAA Accounting Process</title>
                <rect x="50" y="60" width="60" height="80" rx="5" fill="#334155"/>
                <text x="80" y="45" text-anchor="middle" fill="#E0E0E0" font-size="10">User Session</text>
                <text x="80" y="85" text-anchor="middle" fill="#3b82f6" font-size="8">Login</text>
                <text x="80" y="100" text-anchor="middle" fill="#10b981" font-size="8">Commands</text>
                <text x="80" y="115" text-anchor="middle" fill="#f59e0b" font-size="8">Config</text>
                <text x="80" y="130" text-anchor="middle" fill="#E74C3C" font-size="8">Logout</text>
                
                <rect x="170" y="80" width="80" height="40" rx="5" fill="#9B59B6"/>
                <text x="210" y="95" text-anchor="middle" fill="white" font-size="9">Accounting</text>
                <text x="210" y="110" text-anchor="middle" fill="white" font-size="9">Server</text>
                
                <rect x="290" y="40" width="80" height="120" rx="5" fill="#6366f1"/>
                <text x="330" y="30" text-anchor="middle" fill="#E0E0E0" font-size="10">Audit Log</text>
                <text x="330" y="65" text-anchor="middle" fill="#E0E0E0" font-size="7">User: admin</text>
                <text x="330" y="80" text-anchor="middle" fill="#E0E0E0" font-size="7">Time: 14:32:15</text>
                <text x="330" y="95" text-anchor="middle" fill="#E0E0E0" font-size="7">Command: show run</text>
                <text x="330" y="110" text-anchor="middle" fill="#E0E0E0" font-size="7">Status: Success</text>
                <text x="330" y="125" text-anchor="middle" fill="#E0E0E0" font-size="7">Session: 30 min</text>
                <text x="330" y="140" text-anchor="middle" fill="#E0E0E0" font-size="7">Source: 10.1.1.100</text>
                
                <path d="M110,100 L170,100" stroke="#9B59B6" stroke-width="2" marker-end="url(#acc-arrow)"/>
                <path d="M250,100 L290,100" stroke="#6366f1" stroke-width="2" marker-end="url(#acc-arrow)"/>
                
                <defs>
                    <marker id="acc-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#9B59B6"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "AAA Protocols & Servers",
            icon: "fa-server",
            description: "RADIUS and TACACS+ are AAA protocols for centralized authentication. RADIUS uses UDP, encrypts passwords only. TACACS+ uses TCP, encrypts entire packet, and separates AAA functions.",
            visual: `<svg viewBox="0 0 400 200">
                <title>RADIUS vs TACACS+</title>
                <rect x="50" y="50" width="120" height="100" rx="5" fill="#10b981" stroke="#22c55e" stroke-width="2"/>
                <text x="110" y="40" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">RADIUS</text>
                <text x="110" y="75" text-anchor="middle" fill="white" font-size="9">UDP Ports 1812/1813</text>
                <text x="110" y="90" text-anchor="middle" fill="white" font-size="9">Password Encryption</text>
                <text x="110" y="105" text-anchor="middle" fill="white" font-size="9">Combined Auth/Authz</text>
                <text x="110" y="120" text-anchor="middle" fill="white" font-size="9">IEEE Standard</text>
                <text x="110" y="135" text-anchor="middle" fill="white" font-size="9">Widely Supported</text>
                
                <rect x="230" y="50" width="120" height="100" rx="5" fill="#3b82f6" stroke="#60a5fa" stroke-width="2"/>
                <text x="290" y="40" text-anchor="middle" fill="#3b82f6" font-size="12" font-weight="bold">TACACS+</text>
                <text x="290" y="75" text-anchor="middle" fill="white" font-size="9">TCP Port 49</text>
                <text x="290" y="90" text-anchor="middle" fill="white" font-size="9">Full Encryption</text>
                <text x="290" y="105" text-anchor="middle" fill="white" font-size="9">Separate AAA</text>
                <text x="290" y="120" text-anchor="middle" fill="white" font-size="9">Cisco Proprietary</text>
                <text x="290" y="135" text-anchor="middle" fill="white" font-size="9">Command Authorization</text>
                
                <circle cx="200" cy="100" r="20" fill="#E74C3C"/>
                <text x="200" y="90" text-anchor="middle" fill="white" font-size="8">vs</text>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="7">Protocol</text>
                <text x="200" y="115" text-anchor="middle" fill="white" font-size="7">Choice</text>
                
                <text x="200" y="180" text-anchor="middle" fill="#E0E0E0" font-size="10">Both provide centralized AAA services</text>
            </svg>`
        }
    ],
    // 5.9 - Wireless security protocols (WPA, WPA2, and WPA3)
    wirelessSecurity: [
        {
            title: "WEP & Legacy Security",
            icon: "fa-exclamation-triangle",
            description: "WEP (Wired Equivalent Privacy) uses weak RC4 encryption and is easily crackable. Included for historical context - never use in production. Demonstrates why modern security protocols were developed.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WEP Vulnerability</title>
                <rect x="50" y="80" width="80" height="40" rx="5" fill="#f87171"/>
                <text x="90" y="95" text-anchor="middle" fill="white" font-size="10">WEP</text>
                <text x="90" y="110" text-anchor="middle" fill="white" font-size="8">RC4 + IV</text>
                
                <rect x="170" y="60" width="80" height="80" rx="5" fill="#334155"/>
                <text x="210" y="85" text-anchor="middle" fill="#f87171" font-size="10">VULNERABILITIES</text>
                <text x="210" y="100" text-anchor="middle" fill="#E0E0E0" font-size="8">• Static Keys</text>
                <text x="210" y="115" text-anchor="middle" fill="#E0E0E0" font-size="8">• Weak IV</text>
                <text x="210" y="130" text-anchor="middle" fill="#E0E0E0" font-size="8">• Easy to Crack</text>
                
                <rect x="290" y="80" width="80" height="40" rx="5" fill="#ef4444"/>
                <text x="330" y="95" text-anchor="middle" fill="white" font-size="10">DEPRECATED</text>
                <text x="330" y="110" text-anchor="middle" fill="white" font-size="8">Do Not Use</text>
                
                <path d="M130,100 L170,100" stroke="#f87171" stroke-width="2"/>
                <path d="M250,100 L290,100" stroke="#ef4444" stroke-width="2"/>
                
                <text x="200" y="40" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold">⚠️ INSECURE PROTOCOL ⚠️</text>
                <text x="200" y="170" text-anchor="middle" fill="#E0E0E0" font-size="9">Crackable in minutes with modern tools</text>
            </svg>`
        },
        {
            title: "WPA & WPA2 Fundamentals",
            icon: "fa-shield-alt",
            description: "WPA improved WEP with TKIP encryption and dynamic keys. WPA2 uses AES encryption with CCMP for stronger security. Both support Personal (PSK) and Enterprise (802.1X) modes.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WPA Evolution</title>
                <rect x="50" y="60" width="80" height="80" rx="5" fill="#f59e0b"/>
                <text x="90" y="40" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">WPA</text>
                <text x="90" y="85" text-anchor="middle" fill="white" font-size="9">TKIP</text>
                <text x="90" y="100" text-anchor="middle" fill="white" font-size="9">RC4</text>
                <text x="90" y="115" text-anchor="middle" fill="white" font-size="9">Dynamic Keys</text>
                <text x="90" y="130" text-anchor="middle" fill="white" font-size="9">MIC</text>
                
                <rect x="160" y="60" width="80" height="80" rx="5" fill="#10b981"/>
                <text x="200" y="40" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">WPA2</text>
                <text x="200" y="85" text-anchor="middle" fill="white" font-size="9">AES-CCMP</text>
                <text x="200" y="100" text-anchor="middle" fill="white" font-size="9">Stronger</text>
                <text x="200" y="115" text-anchor="middle" fill="white" font-size="9">Encryption</text>
                <text x="200" y="130" text-anchor="middle" fill="white" font-size="9">IEEE 802.11i</text>
                
                <rect x="270" y="60" width="80" height="80" rx="5" fill="#3b82f6"/>
                <text x="310" y="40" text-anchor="middle" fill="#3b82f6" font-size="12" font-weight="bold">MODES</text>
                <text x="310" y="85" text-anchor="middle" fill="white" font-size="9">Personal</text>
                <text x="310" y="100" text-anchor="middle" fill="white" font-size="9">(PSK)</text>
                <text x="310" y="115" text-anchor="middle" fill="white" font-size="9">Enterprise</text>
                <text x="310" y="130" text-anchor="middle" fill="white" font-size="9">(802.1X)</text>
                
                <path d="M130,100 L160,100" stroke="#10b981" stroke-width="2" marker-end="url(#wpa-arrow)"/>
                <path d="M240,100 L270,100" stroke="#3b82f6" stroke-width="2" marker-end="url(#wpa-arrow)"/>
                
                <text x="200" y="170" text-anchor="middle" fill="#E0E0E0" font-size="10">Significant security improvements over WEP</text>
                
                <defs>
                    <marker id="wpa-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "WPA3 Security Enhancements",
            icon: "fa-lock",
            description: "WPA3 provides the strongest wireless security with SAE (Simultaneous Authentication of Equals), enhanced open networks, and protection against offline password attacks and forward secrecy.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WPA3 Security Features</title>
                <rect x="150" y="40" width="100" height="30" rx="5" fill="#E74C3C"/>
                <text x="200" y="60" text-anchor="middle" fill="white" font-size="12" font-weight="bold">WPA3</text>
                
                <rect x="50" y="90" width="80" height="40" rx="3" fill="#10b981"/>
                <text x="90" y="105" text-anchor="middle" fill="white" font-size="9">SAE</text>
                <text x="90" y="120" text-anchor="middle" fill="white" font-size="8">Dragonfly</text>
                
                <rect x="160" y="90" width="80" height="40" rx="3" fill="#3b82f6"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="9">Enhanced</text>
                <text x="200" y="120" text-anchor="middle" fill="white" font-size="8">Open</text>
                
                <rect x="270" y="90" width="80" height="40" rx="3" fill="#9B59B6"/>
                <text x="310" y="105" text-anchor="middle" fill="white" font-size="9">192-bit</text>
                <text x="310" y="120" text-anchor="middle" fill="white" font-size="8">Security</text>
                
                <rect x="80" y="150" width="90" height="30" rx="3" fill="#f59e0b"/>
                <text x="125" y="170" text-anchor="middle" fill="white" font-size="9">Forward Secrecy</text>
                
                <rect x="230" y="150" width="90" height="30" rx="3" fill="#6366f1"/>
                <text x="275" y="170" text-anchor="middle" fill="white" font-size="9">Offline Protection</text>
                
                <path d="M200,70 L90,90" stroke="#10b981" stroke-width="2"/>
                <path d="M200,70 L200,90" stroke="#3b82f6" stroke-width="2"/>
                <path d="M200,70 L310,90" stroke="#9B59B6" stroke-width="2"/>
                <path d="M180,70 L125,150" stroke="#f59e0b" stroke-width="2"/>
                <path d="M220,70 L275,150" stroke="#6366f1" stroke-width="2"/>
                
                <text x="200" y="25" text-anchor="middle" fill="#E0E0E0" font-size="10">Latest Wi-Fi Security Standard</text>
            </svg>`
        },
        {
            title: "Wireless Encryption Methods",
            icon: "fa-key",
            description: "Technical comparison of wireless encryption: TKIP uses RC4 with key mixing, AES-CCMP provides stronger block cipher encryption, and newer methods support 256-bit encryption for enterprise security.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Encryption Method Comparison</title>
                <rect x="40" y="50" width="100" height="100" rx="5" fill="#f59e0b"/>
                <text x="90" y="40" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">TKIP</text>
                <text x="90" y="75" text-anchor="middle" fill="white" font-size="9">RC4 Stream</text>
                <text x="90" y="90" text-anchor="middle" fill="white" font-size="9">Key Mixing</text>
                <text x="90" y="105" text-anchor="middle" fill="white" font-size="9">64-bit MIC</text>
                <text x="90" y="120" text-anchor="middle" fill="white" font-size="9">Legacy Support</text>
                <text x="90" y="135" text-anchor="middle" fill="white" font-size="8">Deprecated</text>
                
                <rect x="150" y="50" width="100" height="100" rx="5" fill="#10b981"/>
                <text x="200" y="40" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">AES-CCMP</text>
                <text x="200" y="75" text-anchor="middle" fill="white" font-size="9">128-bit AES</text>
                <text x="200" y="90" text-anchor="middle" fill="white" font-size="9">Block Cipher</text>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="9">Strong MIC</text>
                <text x="200" y="120" text-anchor="middle" fill="white" font-size="9">WPA2 Standard</text>
                <text x="200" y="135" text-anchor="middle" fill="white" font-size="8">Recommended</text>
                
                <rect x="260" y="50" width="100" height="100" rx="5" fill="#E74C3C"/>
                <text x="310" y="40" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">AES-256</text>
                <text x="310" y="75" text-anchor="middle" fill="white" font-size="9">256-bit AES</text>
                <text x="310" y="90" text-anchor="middle" fill="white" font-size="9">GCMP</text>
                <text x="310" y="105" text-anchor="middle" fill="white" font-size="9">Enterprise</text>
                <text x="310" y="120" text-anchor="middle" fill="white" font-size="9">WPA3 Suite-B</text>
                <text x="310" y="135" text-anchor="middle" fill="white" font-size="8">Future-Proof</text>
                
                <text x="200" y="175" text-anchor="middle" fill="#E0E0E0" font-size="10">Encryption Strength: TKIP < AES-128 < AES-256</text>
            </svg>`
        },
        {
            title: "Wireless Security Threats",
            icon: "fa-bug",
            description: "Common wireless attacks include evil twin APs, WPS PIN attacks, deauthentication attacks, and WPA2 KRACK vulnerabilities. Modern WPA3 addresses many of these security concerns.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Wireless Security Threats</title>
                <circle cx="200" cy="100" r="80" fill="none" stroke="#E74C3C" stroke-width="3"/>
                <text x="200" y="30" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">Wireless Threats</text>
                
                <rect x="170" y="85" width="60" height="30" rx="3" fill="#6366f1"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="10">Wi-Fi Network</text>
                
                <rect x="100" y="40" width="50" height="20" rx="2" fill="#f87171"/>
                <text x="125" y="55" text-anchor="middle" fill="white" font-size="8">Evil Twin</text>
                
                <rect x="250" y="40" width="50" height="20" rx="2" fill="#f87171"/>
                <text x="275" y="55" text-anchor="middle" fill="white" font-size="8">Deauth</text>
                
                <rect x="80" y="130" width="50" height="20" rx="2" fill="#f87171"/>
                <text x="105" y="145" text-anchor="middle" fill="white" font-size="8">WPS PIN</text>
                
                <rect x="270" y="130" width="50" height="20" rx="2" fill="#f87171"/>
                <text x="295" y="145" text-anchor="middle" fill="white" font-size="8">KRACK</text>
                
                <rect x="320" y="85" width="50" height="20" rx="2" fill="#f87171"/>
                <text x="345" y="100" text-anchor="middle" fill="white" font-size="8">Rogue AP</text>
                
                <rect x="30" y="85" width="50" height="20" rx="2" fill="#f87171"/>
                <text x="55" y="100" text-anchor="middle" fill="white" font-size="8">Jamming</text>
                
                <path d="M125,60 L180,85" stroke="#f87171" stroke-width="2"/>
                <path d="M275,60 L220,85" stroke="#f87171" stroke-width="2"/>
                <path d="M105,130 L180,115" stroke="#f87171" stroke-width="2"/>
                <path d="M295,130 L220,115" stroke="#f87171" stroke-width="2"/>
                <path d="M320,95 L230,100" stroke="#f87171" stroke-width="2"/>
                <path d="M80,95 L170,100" stroke="#f87171" stroke-width="2"/>
                
                <text x="200" y="175" text-anchor="middle" fill="#E0E0E0" font-size="9">Use WPA3 and proper security policies to mitigate</text>
            </svg>`
        }
    ],
    // 5.10 - Configure and verify WLAN within the GUI using WPA2 PSK
    wlanConfig: [
        {
            title: "WPA2 PSK Configuration",
            icon: "fa-sliders-h",
            description: "WPA2 Personal (PSK) is the most common wireless security configuration. Uses a pre-shared key (password) for all users. Configured through WLC GUI or CLI with SSID, security mode, and passphrase.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WPA2 PSK GUI Configuration</title>
                <rect x="20" y="20" width="360" height="160" rx="10" fill="#334155" stroke="#475569"/>
                <text x="40" y="40" font-size="12" fill="#e2e8f0">WLAN Security Configuration</text>
                
                <text x="50" y="70" font-size="11" fill="#94a3b8">SSID:</text>
                <rect x="120" y="60" width="200" height="20" fill="#475569" rx="3"/>
                <text x="130" y="74" font-size="10" fill="white">CorpWiFi</text>
                
                <text x="50" y="100" font-size="11" fill="#94a3b8">Security:</text>
                <rect x="120" y="90" width="200" height="20" fill="#475569" rx="3"/>
                <text x="130" y="104" font-size="10" fill="white">WPA2 Personal</text>
                
                <text x="50" y="130" font-size="11" fill="#94a3b8">Encryption:</text>
                <rect x="120" y="120" width="200" height="20" fill="#475569" rx="3"/>
                <text x="130" y="134" font-size="10" fill="white">AES</text>
                
                <text x="50" y="160" font-size="11" fill="#94a3b8">PSK:</text>
                <rect x="120" y="150" width="200" height="20" fill="#475569" rx="3"/>
                <text x="130" y="164" font-size="10" fill="white">●●●●●●●●●●●●</text>
                
                <rect x="340" y="150" width="30" height="20" fill="#10b981" rx="3"/>
                <text x="355" y="164" font-size="9" fill="white" text-anchor="middle">Apply</text>
            </svg>`
        },
        {
            title: "WPA3 & Enterprise Config",
            icon: "fa-building",
            description: "WPA3 Personal and Enterprise configurations provide enhanced security. Enterprise mode integrates with RADIUS servers for 802.1X authentication, supporting individual user credentials and certificates.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Enterprise WLAN Architecture</title>
                <rect x="50" y="80" width="60" height="40" rx="3" fill="#3b82f6"/>
                <text x="80" y="95" text-anchor="middle" fill="white" font-size="9">Client</text>
                <text x="80" y="110" text-anchor="middle" fill="white" font-size="8">WPA3/802.1X</text>
                
                <rect x="170" y="80" width="60" height="40" rx="3" fill="#E74C3C"/>
                <text x="200" y="95" text-anchor="middle" fill="white" font-size="9">WLC/AP</text>
                <text x="200" y="110" text-anchor="middle" fill="white" font-size="8">Authenticator</text>
                
                <rect x="290" y="80" width="60" height="40" rx="3" fill="#10b981"/>
                <text x="320" y="95" text-anchor="middle" fill="white" font-size="9">RADIUS</text>
                <text x="320" y="110" text-anchor="middle" fill="white" font-size="8">Server</text>
                
                <path d="M110,100 L170,100" stroke="#3b82f6" stroke-width="2" marker-end="url(#wlan-arrow1)"/>
                <text x="140" y="95" text-anchor="middle" fill="#E0E0E0" font-size="8">EAP</text>
                
                <path d="M230,100 L290,100" stroke="#E74C3C" stroke-width="2" marker-end="url(#wlan-arrow2)"/>
                <text x="260" y="95" text-anchor="middle" fill="#E0E0E0" font-size="8">RADIUS</text>
                
                <path d="M290,120 L230,120" stroke="#10b981" stroke-width="2" marker-end="url(#wlan-arrow3)"/>
                <text x="260" y="135" text-anchor="middle" fill="#E0E0E0" font-size="8">Accept/Reject</text>
                
                <rect x="140" y="40" width="120" height="25" rx="3" fill="#9B59B6"/>
                <text x="200" y="57" text-anchor="middle" fill="white" font-size="10">WPA3-Enterprise</text>
                
                <rect x="140" y="145" width="120" height="25" rx="3" fill="#6366f1"/>
                <text x="200" y="162" text-anchor="middle" fill="white" font-size="10">Individual Credentials</text>
                
                <defs>
                    <marker id="wlan-arrow1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#3b82f6"/>
                    </marker>
                    <marker id="wlan-arrow2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#E74C3C"/>
                    </marker>
                    <marker id="wlan-arrow3" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <polygon points="0 0, 6 3, 0 6" fill="#10b981"/>
                    </marker>
                </defs>
            </svg>`
        },
        {
            title: "Guest Network Security",
            icon: "fa-user-friends",
            description: "Guest networks provide isolated internet access for visitors. Configured with separate SSID, VLAN isolation, bandwidth limits, and captive portal authentication for controlled access.",
            visual: `<svg viewBox="0 0 400 200">
                <title>Guest Network Isolation</title>
                <rect x="50" y="40" width="300" height="120" rx="5" fill="#334155" stroke="#475569"/>
                <text x="200" y="30" text-anchor="middle" fill="#E0E0E0" font-size="12">Network Segmentation</text>
                
                <rect x="70" y="60" width="120" height="40" rx="3" fill="#10b981"/>
                <text x="130" y="75" text-anchor="middle" fill="white" font-size="10">Corporate SSID</text>
                <text x="130" y="90" text-anchor="middle" fill="white" font-size="8">VLAN 10 - Full Access</text>
                
                <rect x="210" y="60" width="120" height="40" rx="3" fill="#f59e0b"/>
                <text x="270" y="75" text-anchor="middle" fill="white" font-size="10">Guest SSID</text>
                <text x="270" y="90" text-anchor="middle" fill="white" font-size="8">VLAN 100 - Internet Only</text>
                
                <rect x="70" y="110" width="50" height="30" rx="2" fill="#3b82f6"/>
                <text x="95" y="130" text-anchor="middle" fill="white" font-size="8">Servers</text>
                
                <rect x="140" y="110" width="50" height="30" rx="2" fill="#3b82f6"/>
                <text x="165" y="130" text-anchor="middle" fill="white" font-size="8">Printers</text>
                
                <rect x="210" y="110" width="50" height="30" rx="2" fill="#334155"/>
                <text x="235" y="130" text-anchor="middle" fill="#64748b" font-size="8">Blocked</text>
                
                <rect x="280" y="110" width="50" height="30" rx="2" fill="#10b981"/>
                <text x="305" y="130" text-anchor="middle" fill="white" font-size="8">Internet</text>
                
                <path d="M130,100 L95,110" stroke="#10b981" stroke-width="2"/>
                <path d="M130,100 L165,110" stroke="#10b981" stroke-width="2"/>
                <path d="M270,100 L235,110" stroke="#f87171" stroke-width="2" stroke-dasharray="3,3"/>
                <path d="M270,100 L305,110" stroke="#10b981" stroke-width="2"/>
                
                <text x="235" y="120" text-anchor="middle" fill="#f87171" font-size="12">✗</text>
                
                <text x="200" y="180" text-anchor="middle" fill="#E0E0E0" font-size="9">Captive Portal + Bandwidth Limiting</text>
            </svg>`
        },
        {
            title: "WLAN Security Policies",
            icon: "fa-shield-alt",
            description: "Advanced WLAN security includes MAC filtering, time-based access, captive portals, band steering, and rogue AP detection. Comprehensive policies ensure network integrity and performance.",
            visual: `<svg viewBox="0 0 400 200">
                <title>WLAN Security Policy Framework</title>
                <circle cx="200" cy="100" r="70" fill="none" stroke="#E74C3C" stroke-width="3"/>
                <text x="200" y="40" text-anchor="middle" fill="#E74C3C" font-size="12" font-weight="bold">WLAN Policies</text>
                
                <rect x="170" y="85" width="60" height="30" rx="3" fill="#6366f1"/>
                <text x="200" y="105" text-anchor="middle" fill="white" font-size="10">Security Core</text>
                
                <rect x="110" y="50" width="50" height="20" rx="2" fill="#10b981"/>
                <text x="135" y="65" text-anchor="middle" fill="white" font-size="8">MAC Filter</text>
                
                <rect x="240" y="50" width="50" height="20" rx="2" fill="#f59e0b"/>
                <text x="265" y="65" text-anchor="middle" fill="white" font-size="8">Time Access</text>
                
                <rect x="300" y="90" width="50" height="20" rx="2" fill="#9B59B6"/>
                <text x="325" y="105" text-anchor="middle" fill="white" font-size="8">Band Steer</text>
                
                <rect x="240" y="140" width="50" height="20" rx="2" fill="#E74C3C"/>
                <text x="265" y="155" text-anchor="middle" fill="white" font-size="8">Rogue AP</text>
                
                <rect x="110" y="140" width="50" height="20" rx="2" fill="#3b82f6"/>
                <text x="135" y="155" text-anchor="middle" fill="white" font-size="8">Portal</text>
                
                <rect x="50" y="90" width="50" height="20" rx="2" fill="#6366f1"/>
                <text x="75" y="105" text-anchor="middle" fill="white" font-size="8">QoS</text>
                
                <path d="M135,70 L185,90" stroke="#10b981" stroke-width="2"/>
                <path d="M265,70 L215,90" stroke="#f59e0b" stroke-width="2"/>
                <path d="M300,100 L230,105" stroke="#9B59B6" stroke-width="2"/>
                <path d="M265,140 L215,115" stroke="#E74C3C" stroke-width="2"/>
                <path d="M135,140 L185,115" stroke="#3b82f6" stroke-width="2"/>
                <path d="M100,100 L170,105" stroke="#6366f1" stroke-width="2"/>
                
                <text x="200" y="180" text-anchor="middle" fill="#E0E0E0" font-size="9">Layered security approach for enterprise WLANs</text>
            </svg>`
        }
    ],
    // Section metadata
    metadata: {
        sectionNumber: 5,
        title: "Security Fundamentals",
        subsections: {
            securityConcepts: { title: "5.1 Key Security Concepts", count: 7 },
            securityProgram: { title: "5.2 Security Program Elements", count: 6 },
            localPasswords: { title: "5.3 Device Access Control", count: 5 },
            passwordPolicies: { title: "5.4 Password Policy Elements", count: 5 },
            remoteVpn: { title: "5.5 IPsec VPNs", count: 5 },
            acls: { title: "5.6 Access Control Lists", count: 5 },
            layer2Security: { title: "5.7 Layer 2 Security Features", count: 7 },
            aaaConcepts: { title: "5.8 AAA Concepts", count: 4 },
            wirelessSecurity: { title: "5.9 Wireless Security Protocols", count: 5 },
            wlanConfig: { title: "5.10 WLAN Configuration", count: 4 },
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
