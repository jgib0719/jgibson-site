/**
 * CCNA Section 6: Automation and Programmability - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, this content is focused on exam-relevant technical details.
 * v2.0 - Updated for proper CCNA 200-301 topic alignment (6.1-6.3).
 */

const SECTION6_DETAILS = {
    // 6.1 - Explain how automation impacts network management
    "Automation Benefits": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">6.1: Automation & Network Management</h3>
            <p>Network automation fundamentally transforms how networks are designed, deployed, managed, and maintained. It addresses critical challenges in modern networking through systematic improvements.</p>
            
            <h4 style="color: #58D4FF;">Key Automation Benefits</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Reduced Human Error:</strong> Manual configuration is error-prone. Automation ensures consistent, repeatable configurations across devices</li>
                    <li><strong>Increased Speed:</strong> Deploying network changes manually across hundreds of devices can take weeks. Automation reduces this to hours or minutes</li>
                    <li><strong>Improved Consistency:</strong> Ensures all devices follow the same configuration standards and security policies</li>
                    <li><strong>Enhanced Scalability:</strong> Enables management of large-scale networks that would be impossible to manage manually</li>
                    <li><strong>Cost Reduction:</strong> Reduces operational expenses through reduced manual labor and faster problem resolution</li>
                    <li><strong>Better Compliance:</strong> Automated compliance checking and reporting ensures adherence to corporate and regulatory requirements</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Automation Impact Areas</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Network Function</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Manual Process</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Automated Process</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Impact</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Device Configuration</td>
                    <td style="border: 1px solid #444; padding: 8px;">CLI per device, copy/paste</td>
                    <td style="border: 1px solid #444; padding: 8px;">Template-based mass deployment</td>
                    <td style="border: 1px solid #444; padding: 8px;">Hours to minutes</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Monitoring & Alerting</td>
                    <td style="border: 1px solid #444; padding: 8px;">Manual log checking</td>
                    <td style="border: 1px solid #444; padding: 8px;">Automated monitoring with smart alerts</td>
                    <td style="border: 1px solid #444; padding: 8px;">Proactive issue detection</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Troubleshooting</td>
                    <td style="border: 1px solid #444; padding: 8px;">Manual command execution</td>
                    <td style="border: 1px solid #444; padding: 8px;">Automated diagnostics and remediation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Faster MTTR</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Compliance</td>
                    <td style="border: 1px solid #444; padding: 8px;">Manual audits</td>
                    <td style="border: 1px solid #444; padding: 8px;">Continuous compliance monitoring</td>
                    <td style="border: 1px solid #444; padding: 8px;">Real-time compliance status</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Automation Technologies</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>APIs (REST, NETCONF, RESTCONF):</strong> Enable programmatic device interaction</li>
                <li><strong>Configuration Management Tools:</strong> Ansible, Puppet, Chef for systematic configuration</li>
                <li><strong>Orchestration Platforms:</strong> Cisco DNA Center, NSO for end-to-end automation</li>
                <li><strong>Infrastructure as Code:</strong> Version-controlled network configurations</li>
                <li><strong>Intent-Based Networking:</strong> High-level policy definition with automated implementation</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand how automation reduces human error and increases consistency</li>
                    <li>Know the key benefits: speed, scalability, cost reduction, compliance</li>
                    <li>Recognize automation technologies: APIs, configuration management tools</li>
                    <li>Compare manual vs. automated network management approaches</li>
                </ul>
            </div>
        </div>
    `,

    "Automation Tools & Technologies": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.1: Automation Tools & Technologies</h3>
            <p>Modern network automation relies on a diverse ecosystem of tools and technologies that enable programmatic network management, from low-level device APIs to high-level orchestration platforms.</p>
            
            <h4 style="color: #58D68D;">Network APIs</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>REST APIs:</strong> HTTP-based APIs using GET, POST, PUT, DELETE methods for stateless communication</li>
                    <li><strong>NETCONF:</strong> Network configuration protocol over SSH/TLS for structured device configuration</li>
                    <li><strong>RESTCONF:</strong> RESTful interface to NETCONF, combining REST principles with YANG data models</li>
                    <li><strong>SNMP:</strong> Simple Network Management Protocol for monitoring and basic configuration</li>
                    <li><strong>gRPC:</strong> High-performance RPC framework for streaming telemetry and real-time communication</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Configuration Management Tools</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Tool</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Language</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Key Features</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Ansible</td>
                    <td style="border: 1px solid #444; padding: 8px;">Agentless</td>
                    <td style="border: 1px solid #444; padding: 8px;">YAML</td>
                    <td style="border: 1px solid #444; padding: 8px;">Simple, SSH-based, idempotent</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Puppet</td>
                    <td style="border: 1px solid #444; padding: 8px;">Agent-based</td>
                    <td style="border: 1px solid #444; padding: 8px;">Ruby DSL</td>
                    <td style="border: 1px solid #444; padding: 8px;">Pull model, mature ecosystem</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Terraform</td>
                    <td style="border: 1px solid #444; padding: 8px;">IaC</td>
                    <td style="border: 1px solid #444; padding: 8px;">HCL</td>
                    <td style="border: 1px solid #444; padding: 8px;">Infrastructure provisioning, state management</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">SaltStack</td>
                    <td style="border: 1px solid #444; padding: 8px;">Agent-based</td>
                    <td style="border: 1px solid #444; padding: 8px;">Python</td>
                    <td style="border: 1px solid #444; padding: 8px;">High performance, event-driven</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Orchestration Platforms</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Cisco DNA Center:</strong> Intent-based networking controller for campus and WAN automation</li>
                <li><strong>Cisco NSO (Network Services Orchestrator):</strong> Multi-vendor service orchestration platform</li>
                <li><strong>Cisco ACI APIC:</strong> Application Policy Infrastructure Controller for data center automation</li>
                <li><strong>Cisco SD-WAN vManage:</strong> Centralized management for SD-WAN deployments</li>
                <li><strong>OpenDaylight:</strong> Open-source SDN controller platform</li>
            </ul>
            
            <h4 style="color: #58D68D;">Scripting and Programming Languages</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <h5 style="color: #58D68D; margin-bottom: 8px;">Python</h5>
                        <ul style="list-style-type: disc; margin-left: 15px; font-size: 0.9em;">
                            <li>Netmiko library for multi-vendor SSH</li>
                            <li>NAPALM for vendor-neutral APIs</li>
                            <li>Requests for REST API interaction</li>
                            <li>Paramiko for low-level SSH control</li>
                        </ul>
                    </div>
                    <div>
                        <h5 style="color: #58D68D; margin-bottom: 8px;">Other Languages</h5>
                        <ul style="list-style-type: disc; margin-left: 15px; font-size: 0.9em;">
                            <li>Go for high-performance tools</li>
                            <li>JavaScript/Node.js for web integration</li>
                            <li>PowerShell for Windows environments</li>
                            <li>Bash for Unix/Linux automation</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand REST APIs use HTTP methods for network operations</li>
                    <li>Know NETCONF/RESTCONF enable structured device configuration</li>
                    <li>Recognize Ansible as agentless, YAML-based automation tool</li>
                    <li>Understand Python's role in network automation scripting</li>
                </ul>
            </div>
        </div>
    `,

    "Automation Workflows": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.1: Automation Workflows</h3>
            <p>Network automation follows structured workflows that ensure reliable, repeatable, and safe deployment of network changes. These processes minimize risk while maximizing efficiency.</p>
            
            <h4 style="color: #F5B041;">Standard Automation Workflow</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <ol style="margin-left: 20px;">
                    <li><strong>Discovery & Inventory:</strong> Identify and catalog network devices, their capabilities, and current state</li>
                    <li><strong>Modeling & Templating:</strong> Create standardized configuration templates and data models</li>
                    <li><strong>Validation & Testing:</strong> Test configurations in lab environments before production deployment</li>
                    <li><strong>Deployment & Execution:</strong> Apply configurations systematically with rollback capabilities</li>
                    <li><strong>Monitoring & Verification:</strong> Confirm successful deployment and ongoing compliance</li>
                </ol>
            </div>
            
            <h4 style="color: #F5B041;">Discovery and Inventory Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Python script for network discovery</span>
from netmiko import ConnectHandler
import json

def discover_device(device_ip):
    device = {
        <span style="color: #CE9178;">'device_type'</span>: <span style="color: #CE9178;">'cisco_ios'</span>,
        <span style="color: #CE9178;">'host'</span>: device_ip,
        <span style="color: #CE9178;">'username'</span>: <span style="color: #CE9178;">'admin'</span>,
        <span style="color: #CE9178;">'password'</span>: <span style="color: #CE9178;">'password'</span>
    }
    
    with ConnectHandler(**device) as conn:
        version = conn.send_command(<span style="color: #CE9178;">'show version'</span>)
        interfaces = conn.send_command(<span style="color: #CE9178;">'show ip interface brief'</span>)
        
    return {<span style="color: #CE9178;">'ip'</span>: device_ip, <span style="color: #CE9178;">'version'</span>: version, <span style="color: #CE9178;">'interfaces'</span>: interfaces}
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Configuration Modeling</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p style="margin-bottom: 10px;"><strong>Jinja2 Template Example:</strong></p>
                <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 5px; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Interface configuration template</span>
interface {{ interface_name }}
 description {{ description }}
 ip address {{ ip_address }} {{ subnet_mask }}
{% if vlan_id %}
 switchport mode access
 switchport access vlan {{ vlan_id }}
{% endif %}
 no shutdown
</code>
                </pre>
            </div>
            
            <h4 style="color: #F5B041;">Validation and Testing Strategies</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Test Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Purpose</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Tools/Methods</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Syntax Validation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Check configuration syntax</td>
                    <td style="border: 1px solid #444; padding: 8px;">YANG models, linting tools</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Lab Testing</td>
                    <td style="border: 1px solid #444; padding: 8px;">Functional verification</td>
                    <td style="border: 1px solid #444; padding: 8px;">Virtual labs, GNS3, EVE-NG</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Impact Analysis</td>
                    <td style="border: 1px solid #444; padding: 8px;">Assess change risks</td>
                    <td style="border: 1px solid #444; padding: 8px;">Dependency mapping, simulation</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Rollback Planning</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prepare failure recovery</td>
                    <td style="border: 1px solid #444; padding: 8px;">Configuration snapshots, scripts</td>
                </tr>
            </table>
            
            <h4 style="color: #F5B041;">Deployment Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Phased Rollouts:</strong> Deploy to pilot groups before full production</li>
                <li><strong>Maintenance Windows:</strong> Schedule changes during low-impact periods</li>
                <li><strong>Health Checks:</strong> Verify device state before and after changes</li>
                <li><strong>Automatic Rollback:</strong> Implement automated failure detection and recovery</li>
                <li><strong>Change Documentation:</strong> Log all changes with timestamps and approvals</li>
                <li><strong>Parallel Execution:</strong> Use threading for multi-device deployments with rate limiting</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the importance of testing before production deployment</li>
                    <li>Know key workflow steps: discovery, modeling, validation, deployment, monitoring</li>
                    <li>Recognize the need for rollback procedures and change documentation</li>
                    <li>Understand phased deployment strategies for risk mitigation</li>
                </ul>
            </div>
        </div>
    `,

    "Infrastructure as Code": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">6.1: Infrastructure as Code (IaC)</h3>
            <p>Infrastructure as Code treats network configurations as software, enabling version control, automated testing, and consistent deployment of network infrastructure changes through proven software development practices.</p>
            
            <h4 style="color: #EC7063;">IaC Core Principles</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #E74C3C;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Version Control:</strong> All configurations stored in Git repositories with change history</li>
                    <li><strong>Declarative Configuration:</strong> Define desired state rather than procedural steps</li>
                    <li><strong>Immutable Infrastructure:</strong> Replace rather than modify existing configurations</li>
                    <li><strong>Automated Testing:</strong> CI/CD pipelines validate changes before deployment</li>
                    <li><strong>Documentation as Code:</strong> Configuration files serve as living documentation</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Git-Based Workflow</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Example Git workflow for network configuration</span>
<span style="color: #DCDCAA;">git</span> checkout -b feature/add-vlan-100
<span style="color: #6A9955;"># Edit configuration files</span>
<span style="color: #DCDCAA;">git</span> add configs/switch-config.yml
<span style="color: #DCDCAA;">git</span> commit -m <span style="color: #CE9178;">"Add VLAN 100 for new department"</span>
<span style="color: #DCDCAA;">git</span> push origin feature/add-vlan-100
<span style="color: #6A9955;"># Create pull request for peer review</span>
<span style="color: #DCDCAA;">git</span> checkout main
<span style="color: #DCDCAA;">git</span> merge feature/add-vlan-100
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Ansible Playbook Structure</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p style="margin-bottom: 10px;"><strong>Directory Structure:</strong></p>
                <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 5px; font-size: 0.9em;">
<code style="color: #9CDCFE;">
network-automation/
├── inventories/
│   ├── production/
│   │   ├── hosts.yml
│   │   └── group_vars/
│   └── staging/
├── playbooks/
│   ├── site.yml
│   ├── configure-vlans.yml
│   └── backup-configs.yml
├── roles/
│   ├── common/
│   ├── switches/
│   └── routers/
└── templates/
    ├── ios-base.j2
    └── vlan-config.j2
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">CI/CD Pipeline Integration</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Stage</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Actions</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Tools</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Code Commit</td>
                    <td style="border: 1px solid #444; padding: 8px;">Trigger pipeline, syntax checking</td>
                    <td style="border: 1px solid #444; padding: 8px;">Git hooks, YAML linting</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Testing</td>
                    <td style="border: 1px solid #444; padding: 8px;">Lab deployment, validation tests</td>
                    <td style="border: 1px solid #444; padding: 8px;">Molecule, pytest, GNS3</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Approval</td>
                    <td style="border: 1px solid #444; padding: 8px;">Peer review, change approval</td>
                    <td style="border: 1px solid #444; padding: 8px;">Pull requests, ITSM integration</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Deployment</td>
                    <td style="border: 1px solid #444; padding: 8px;">Production rollout, monitoring</td>
                    <td style="border: 1px solid #444; padding: 8px;">Ansible, Jenkins, monitoring tools</td>
                </tr>
            </table>
            
            <h4 style="color: #EC7063;">Configuration Templates</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p style="margin-bottom: 10px;"><strong>YAML Data Model Example:</strong></p>
                <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 5px; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># group_vars/switches.yml</span>
vlans:
  - id: 10
    name: <span style="color: #CE9178;">"SALES"</span>
    description: <span style="color: #CE9178;">"Sales Department"</span>
  - id: 20
    name: <span style="color: #CE9178;">"ENGINEERING"</span>
    description: <span style="color: #CE9178;">"Engineering Department"</span>

interfaces:
  GigabitEthernet0/1:
    description: <span style="color: #CE9178;">"Uplink to Core"</span>
    mode: trunk
    allowed_vlans: <span style="color: #CE9178;">"10,20"</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Benefits and Challenges</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0;">
                <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                    <h5 style="color: #10b981; margin-bottom: 8px;">Benefits</h5>
                    <ul style="list-style-type: disc; margin-left: 15px; font-size: 0.9em;">
                        <li>Consistent deployments</li>
                        <li>Change auditability</li>
                        <li>Faster rollbacks</li>
                        <li>Reduced human error</li>
                        <li>Knowledge preservation</li>
                    </ul>
                </div>
                <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <h5 style="color: #f59e0b; margin-bottom: 8px;">Challenges</h5>
                    <ul style="list-style-type: disc; margin-left: 15px; font-size: 0.9em;">
                        <li>Initial learning curve</li>
                        <li>Tool complexity</li>
                        <li>Cultural resistance</li>
                        <li>Legacy device support</li>
                        <li>Testing infrastructure needs</li>
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand IaC treats network configs as software code</li>
                    <li>Know benefits: version control, testing, consistency, rollback</li>
                    <li>Recognize CI/CD pipeline integration for network automation</li>
                    <li>Understand declarative vs procedural configuration approaches</li>
                </ul>
            </div>
        </div>
    `,

    // 6.2 - Compare traditional networks with controller-based networking  
    "Traditional Networks": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.2: Traditional Networks</h3>
            <p>Traditional networks use a distributed control plane architecture where each network device makes independent decisions. This approach has served networking for decades but presents challenges in modern environments.</p>
            
            <h4 style="color: #58D68D;">Traditional Network Characteristics</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Distributed Control Plane:</strong> Each device (router, switch) has its own "brain" for making decisions</li>
                    <li><strong>Device-by-Device Management:</strong> Administrators configure each device individually through CLI</li>
                    <li><strong>Local Decision Making:</strong> Routing protocols like OSPF and EIGRP run independently on each device</li>
                    <li><strong>Horizontal Communication:</strong> Devices exchange information with neighboring devices</li>
                    <li><strong>Manual Configuration:</strong> Changes require accessing each device separately</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Traditional Network Management Process</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Planning:</strong> Design network topology on paper or network diagramming tools</li>
                <li><strong>Configuration:</strong> SSH/Telnet to each device and configure via CLI commands</li>
                <li><strong>Verification:</strong> Check each device individually to ensure proper operation</li>
                <li><strong>Monitoring:</strong> Set up SNMP monitoring for each device separately</li>
                <li><strong>Troubleshooting:</strong> Login to multiple devices to diagnose and fix issues</li>
            </ol>
            
            <h4 style="color: #58D68D;">Traditional Network Challenges</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Challenge</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Description</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Impact</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Scalability Issues</td>
                    <td style="border: 1px solid #444; padding: 8px;">Each device requires individual attention</td>
                    <td style="border: 1px solid #444; padding: 8px;">Exponential management complexity</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Configuration Drift</td>
                    <td style="border: 1px solid #444; padding: 8px;">Devices become inconsistent over time</td>
                    <td style="border: 1px solid #444; padding: 8px;">Security vulnerabilities, operational issues</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Limited Visibility</td>
                    <td style="border: 1px solid #444; padding: 8px;">No centralized view of network state</td>
                    <td style="border: 1px solid #444; padding: 8px;">Difficult troubleshooting and optimization</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Slow Deployment</td>
                    <td style="border: 1px solid #444; padding: 8px;">Manual changes take significant time</td>
                    <td style="border: 1px solid #444; padding: 8px;">Delayed business initiatives</td>
                </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand distributed control plane concept</li>
                    <li>Know traditional management methods (CLI, device-by-device)</li>
                    <li>Recognize scalability and consistency challenges</li>
                    <li>Compare with controller-based alternatives</li>
                </ul>
            </div>
        </div>
    `,

    "Controller-Based Networks": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.2: Controller-Based Networks</h3>
            <p>Controller-based networks centralize the control plane in a software-based controller, providing network-wide visibility and centralized management. This approach enables automation, consistency, and simplified operations.</p>
            
            <h4 style="color: #58D68D;">Controller-Based Network Characteristics</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Centralized Control Plane:</strong> Network intelligence consolidated in a central controller</li>
                    <li><strong>Global Network View:</strong> Controller maintains complete network topology and state</li>
                    <li><strong>Policy-Based Management:</strong> Define policies centrally, automatically implemented network-wide</li>
                    <li><strong>API-Driven:</strong> Programmatic interfaces enable automation and integration</li>
                    <li><strong>Abstraction Layer:</strong> Simplified network management through high-level abstractions</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Controller Functions</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Function</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Description</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Benefit</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Network Discovery</td>
                    <td style="border: 1px solid #444; padding: 8px;">Automatically discovers and maps network topology</td>
                    <td style="border: 1px solid #444; padding: 8px;">Real-time network visibility</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Policy Enforcement</td>
                    <td style="border: 1px solid #444; padding: 8px;">Translates high-level policies to device configs</td>
                    <td style="border: 1px solid #444; padding: 8px;">Consistent policy application</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Configuration Management</td>
                    <td style="border: 1px solid #444; padding: 8px;">Pushes configurations to network devices</td>
                    <td style="border: 1px solid #444; padding: 8px;">Centralized, template-based management</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Monitoring & Analytics</td>
                    <td style="border: 1px solid #444; padding: 8px;">Collects and analyzes network telemetry</td>
                    <td style="border: 1px solid #444; padding: 8px;">Proactive network optimization</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Controller-Based Advantages</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Simplified Management:</strong> Single point of control for entire network</li>
                <li><strong>Consistent Policies:</strong> Centrally defined policies applied uniformly</li>
                <li><strong>Rapid Deployment:</strong> Network-wide changes deployed in minutes</li>
                <li><strong>Enhanced Security:</strong> Centralized security policy enforcement</li>
                <li><strong>Better Analytics:</strong> Network-wide data collection and analysis</li>
                <li><strong>Intent-Based Operations:</strong> Define desired outcomes, not specific configurations</li>
            </ul>
            
            <h4 style="color: #58D68D;">Popular Controller Platforms</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Cisco DNA Center:</strong> Enterprise network automation and assurance</li>
                <li><strong>Cisco APIC:</strong> Application Policy Infrastructure Controller for data centers</li>
                <li><strong>Cisco NSO:</strong> Network Services Orchestrator for service providers</li>
                <li><strong>OpenDaylight:</strong> Open source SDN controller platform</li>
                <li><strong>ONOS:</strong> Open Network Operating System</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand centralized control plane benefits</li>
                    <li>Know key controller functions: discovery, policy, configuration</li>
                    <li>Recognize advantages over traditional networks</li>
                    <li>Familiar with major controller platforms (DNA Center, APIC)</li>
                </ul>
            </div>
        </div>
    `,

    // 6.3.a - Describe the characteristics of data and control planes
    "Control vs Data Plane": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.3.a: Control vs Data Plane</h3>
            <p>In traditional networking, both control and data planes exist on each device. SDN separates these planes, moving intelligence to a centralized controller while keeping packet forwarding distributed.</p>
            
            <h4 style="color: #FFB84D;">Control Plane</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <p><strong>Definition:</strong> The "brain" of the network that makes decisions about where traffic should be sent</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Functions:</strong> Routing calculations, topology discovery, protocol processing</li>
                    <li><strong>Traditional Location:</strong> On each individual network device</li>
                    <li><strong>SDN Location:</strong> Centralized in the SDN controller</li>
                    <li><strong>Examples:</strong> OSPF calculations, BGP route selection, spanning tree topology</li>
                    <li><strong>Characteristics:</strong> CPU-intensive, less time-sensitive, makes global decisions</li>
                </ul>
            </div>
            
            <h4 style="color: #FFB84D;">Data Plane (Forwarding Plane)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <p><strong>Definition:</strong> The part of the network that actually forwards packets based on decisions made by the control plane</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Functions:</strong> Packet forwarding, switching, filtering</li>
                    <li><strong>Location:</strong> Always remains on network devices (switches/routers)</li>
                    <li><strong>Examples:</strong> Looking up MAC addresses, forwarding based on IP routing table</li>
                    <li><strong>Characteristics:</strong> Hardware-optimized, extremely time-sensitive, executes decisions</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand control plane makes decisions, data plane forwards packets</li>
                    <li>Know SDN centralizes control plane, distributes data plane</li>
                    <li>Recognize benefits: global view, centralized management, consistency</li>
                    <li>Compare traditional distributed vs. SDN centralized architectures</li>
                </ul>
            </div>
        </div>
    `,

    // 6.3.b - Describe the functions of the management and application planes
    "Northbound APIs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">6.3.b: Northbound APIs</h3>
            <p>Northbound APIs enable communication from applications and orchestration systems to the SDN controller, allowing high-level network automation and programmability.</p>
            
            <h4 style="color: #FF6B6B;">Common Northbound API Functions</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Network Inventory:</strong> Retrieve device and topology information</li>
                <li><strong>Policy Creation:</strong> Define and apply network policies</li>
                <li><strong>Monitoring & Analytics:</strong> Collect network telemetry and health data</li>
                <li><strong>Configuration Management:</strong> Deploy configurations across devices</li>
            </ul>
            
            <h4 style="color: #FF6B6B;">REST API Operations</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>GET:</strong> Retrieve network information (devices, policies, health)</li>
                <li><strong>POST:</strong> Create new network objects (VLANs, policies, users)</li>
                <li><strong>PUT/PATCH:</strong> Update existing configurations</li>
                <li><strong>DELETE:</strong> Remove network objects or policies</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand Northbound APIs connect applications to controllers</li>
                    <li>Know REST is the common protocol for Northbound APIs</li>
                    <li>Recognize HTTP methods: GET, POST, PUT, DELETE</li>
                    <li>Understand intent-based, high-level network operations</li>
                </ul>
            </div>
        </div>
    `,

    "Southbound APIs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">6.3.b: Southbound APIs</h3>
            <p>Southbound APIs enable the SDN controller to communicate with and program network devices, translating high-level policies into device-specific configurations and commands.</p>
            
            <h4 style="color: #FF6B6B;">Major Southbound Protocols</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>NETCONF:</strong> IETF standard (RFC 6241) using SSH transport with XML data encoding</li>
                <li><strong>RESTCONF:</strong> RESTful API layer on top of NETCONF using HTTP/HTTPS</li>
                <li><strong>OpenFlow:</strong> Flow table programming protocol for SDN switches</li>
                <li><strong>gNMI:</strong> gRPC Network Management Interface for telemetry streaming</li>
            </ul>
            
            <h4 style="color: #FF6B6B;">NETCONF Configuration Examples</h4>
            <p>NETCONF uses SSH on port 830 and XML for data encoding:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable NETCONF on Cisco device</span>
Router(config)# <span style="color: #DCDCAA;">netconf-yang</span>
Router(config)# <span style="color: #DCDCAA;">username admin privilege 15 secret cisco123</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh version 2</span>

<span style="color: #6A9955;"># NETCONF XML example - Interface configuration</span>
&lt;config xmlns="urn:ietf:params:xml:ns:netconf:base:1.0"&gt;
  &lt;interfaces xmlns="urn:ietf:params:xml:ns:yang:ietf-interfaces"&gt;
    &lt;interface&gt;
      &lt;name&gt;GigabitEthernet0/1&lt;/name&gt;
      &lt;description&gt;Configured via NETCONF&lt;/description&gt;
      &lt;enabled&gt;true&lt;/enabled&gt;
      &lt;ipv4 xmlns="urn:ietf:params:xml:ns:yang:ietf-ip"&gt;
        &lt;address&gt;
          &lt;ip&gt;192.168.1.1&lt;/ip&gt;
          &lt;netmask&gt;255.255.255.0&lt;/netmask&gt;
        &lt;/address&gt;
      &lt;/ipv4&gt;
    &lt;/interface&gt;
  &lt;/interfaces&gt;
&lt;/config&gt;
</code>
            </pre>
            
            <h4 style="color: #FF6B6B;">RESTCONF API Examples</h4>
            <p>RESTCONF provides HTTP-based access to YANG data models:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable RESTCONF on Cisco device</span>
Router(config)# <span style="color: #DCDCAA;">restconf</span>
Router(config)# <span style="color: #DCDCAA;">ip http secure-server</span>

<span style="color: #6A9955;"># GET interface information via RESTCONF</span>
<span style="color: #DCDCAA;">GET</span> https://192.168.1.1/restconf/data/ietf-interfaces:interfaces/interface=GigabitEthernet0%2F1
<span style="color: #C586C0;">Authorization:</span> Basic YWRtaW46Y2lzY28xMjM=
<span style="color: #C586C0;">Accept:</span> application/yang-data+json

<span style="color: #6A9955;"># PUT interface configuration via RESTCONF</span>
<span style="color: #DCDCAA;">PUT</span> https://192.168.1.1/restconf/data/ietf-interfaces:interfaces/interface=GigabitEthernet0%2F1
<span style="color: #C586C0;">Content-Type:</span> application/yang-data+json
{
  "ietf-interfaces:interface": {
    "name": "GigabitEthernet0/1",
    "description": "Updated via RESTCONF",
    "enabled": true,
    "ietf-ip:ipv4": {
      "address": [
        {
          "ip": "192.168.1.10",
          "netmask": "255.255.255.0"
        }
      ]
    }
  }
}
</code>
            </pre>
            
            <h4 style="color: #FF6B6B;">Southbound API Functions</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Configuration Push:</strong> Deploy device configurations from controller</li>
                <li><strong>Operational Data Collection:</strong> Gather device status and statistics</li>
                <li><strong>Policy Enforcement:</strong> Implement security and QoS policies</li>
                <li><strong>Flow Programming:</strong> Install forwarding rules in device tables</li>
                <li><strong>Monitoring:</strong> Real-time device health and performance data</li>
            </ul>
            
            <h4 style="color: #FF6B6B;">Troubleshooting Southbound APIs</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify NETCONF status</span>
Router# <span style="color: #DCDCAA;">show netconf-yang datastores</span>
Router# <span style="color: #DCDCAA;">show netconf-yang sessions</span>
Router# <span style="color: #DCDCAA;">show netconf-yang statistics</span>

<span style="color: #6A9955;"># Debug NETCONF communications</span>
Router# <span style="color: #DCDCAA;">debug netconf-yang</span>

<span style="color: #6A9955;"># Verify RESTCONF status</span>
Router# <span style="color: #DCDCAA;">show restconf</span>
Router# <span style="color: #DCDCAA;">show ip http server status</span>

<span style="color: #6A9955;"># Test API connectivity</span>
$ <span style="color: #DCDCAA;">curl -k -u admin:cisco123 https://192.168.1.1/restconf/data/ietf-interfaces:interfaces</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand Southbound APIs connect controllers to devices</li>
                    <li>Know major protocols: NETCONF, RESTCONF, OpenFlow</li>
                    <li>Recognize NETCONF uses SSH, RESTCONF uses HTTPS</li>
                    <li>Understand controller programs device behavior via these APIs</li>
                    <li>Know basic YANG data models and JSON/XML data formats</li>
                </ul>
            </div>
        </div>
    `,

    // 6.3.c - Describe characteristics of overlay networks and underlay networks
    "Overlay & Underlay": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.3.c: Overlay & Underlay</h3>
            <p>Modern data center and campus networks use a two-layer approach: a physical underlay network providing basic connectivity, and a logical overlay network providing advanced services and tenant isolation.</p>
            
            <h4 style="color: #BB7BD6;">Underlay Network</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <p><strong>Definition:</strong> The physical network infrastructure that provides basic IP connectivity between all network devices</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Purpose:</strong> Provide reliable, high-performance IP transport</li>
                    <li><strong>Components:</strong> Physical switches, routers, links, and IP routing protocols</li>
                    <li><strong>Protocols:</strong> BGP, OSPF, IS-IS for routing; often uses ECMP for load balancing</li>
                    <li><strong>Requirements:</strong> Low latency, high bandwidth, loop-free topology</li>
                    <li><strong>Design:</strong> Typically spine-leaf architecture in data centers</li>
                </ul>
            </div>
            
            <h4 style="color: #BB7BD6;">Overlay Network</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <p><strong>Definition:</strong> A virtual network built on top of the underlay that provides logical connectivity and advanced services</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Purpose:</strong> Enable tenant isolation, advanced services, and network virtualization</li>
                    <li><strong>Implementation:</strong> Encapsulation tunnels (VXLAN, GRE, IPsec)</li>
                    <li><strong>Benefits:</strong> Multi-tenancy, mobility, service insertion, policy enforcement</li>
                    <li><strong>Protocols:</strong> VXLAN, NVGRE, STT, OTV</li>
                    <li><strong>Control:</strong> Managed by network controller or orchestration system</li>
                </ul>
            </div>
            
            <h4 style="color: #BB7BD6;">VXLAN Configuration Example</h4>
            <p>VXLAN (Virtual Extensible LAN) is the most common overlay technology in data centers:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable VXLAN on Nexus switch</span>
Switch(config)# <span style="color: #DCDCAA;">feature vn-segment-vlan-based</span>
Switch(config)# <span style="color: #DCDCAA;">feature nv overlay</span>

<span style="color: #6A9955;"># Configure NVE (Network Virtualization Endpoint)</span>
Switch(config)# <span style="color: #DCDCAA;">interface nve1</span>
Switch(config-if)# <span style="color: #9CDCFE;">no shutdown</span>
Switch(config-if)# <span style="color: #9CDCFE;">source-interface loopback0</span>
Switch(config-if)# <span style="color: #9CDCFE;">member vni 10100</span>
Switch(config-if-nve-vni)# <span style="color: #C586C0;">ingress-replication protocol bgp</span>

<span style="color: #6A9955;"># Map VLAN to VNI (VXLAN Network Identifier)</span>
Switch(config)# <span style="color: #DCDCAA;">vlan 100</span>
Switch(config-vlan)# <span style="color: #9CDCFE;">vn-segment 10100</span>

<span style="color: #6A9955;"># Configure VTEP (VXLAN Tunnel Endpoint) source</span>
Switch(config)# <span style="color: #DCDCAA;">interface loopback0</span>
Switch(config-if)# <span style="color: #9CDCFE;">ip address 10.1.1.1/32</span>
Switch(config-if)# <span style="color: #9CDCFE;">ip pim sparse-mode</span>
</code>
            </pre>
            
            <h4 style="color: #BB7BD6;">VXLAN Key Components</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>VNI (VXLAN Network Identifier):</strong> 24-bit identifier supporting 16M virtual networks</li>
                <li><strong>VTEP (VXLAN Tunnel Endpoint):</strong> Devices that perform VXLAN encap/decap</li>
                <li><strong>Underlay Multicast/Unicast:</strong> Methods for VTEP discovery and BUM traffic</li>
                <li><strong>VXLAN Header:</strong> 8-byte header added to original Ethernet frame</li>
                <li><strong>UDP Encapsulation:</strong> VXLAN uses UDP port 4789 for transport</li>
            </ul>
            
            <h4 style="color: #BB7BD6;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify VXLAN configuration</span>
Switch# <span style="color: #DCDCAA;">show nve peers</span>
Switch# <span style="color: #DCDCAA;">show nve vni</span>
Switch# <span style="color: #DCDCAA;">show vxlan</span>

<span style="color: #6A9955;"># Monitor VXLAN tunnel status</span>
Switch# <span style="color: #DCDCAA;">show interface nve1</span>
Switch# <span style="color: #DCDCAA;">show vxlan tunnel</span>

<span style="color: #6A9955;"># Debug VXLAN operations</span>
Switch# <span style="color: #DCDCAA;">debug nve all</span>
Switch# <span style="color: #DCDCAA;">show logging | include VXLAN</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand underlay provides physical connectivity, overlay provides services</li>
                    <li>Know VXLAN as primary data center overlay technology</li>
                    <li>Recognize benefits: multi-tenancy, mobility, scalability (16M vs 4K VLANs)</li>
                    <li>Understand VNI, VTEP concepts and UDP port 4789</li>
                    <li>Know VXLAN enables Layer 2 extension over Layer 3 networks</li>
                </ul>
            </div>
        </div>
    `,

    // 6.3.d - Describe SDN controller types and implementations
    "SDN Controllers": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">6.3.d: SDN Controllers</h3>
            <p>SDN controllers are the central intelligence of software-defined networks, providing network-wide visibility, policy management, and automated device orchestration through standardized APIs.</p>
            
            <h4 style="color: #58D4FF;">Controller Architecture Types</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <p><strong>Centralized Controllers:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Design:</strong> Single controller instance with global network view</li>
                    <li><strong>Benefits:</strong> Simplified management, consistent policies, optimal decisions</li>
                    <li><strong>Challenges:</strong> Single point of failure, scalability limits</li>
                    <li><strong>Use Cases:</strong> Small to medium networks, campus environments</li>
                </ul>
                
                <p style="margin-top: 15px;"><strong>Distributed Controllers:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Design:</strong> Multiple controller instances with shared state</li>
                    <li><strong>Benefits:</strong> High availability, horizontal scaling, fault tolerance</li>
                    <li><strong>Challenges:</strong> State synchronization, complexity</li>
                    <li><strong>Use Cases:</strong> Large data centers, service provider networks</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Popular SDN Controller Platforms</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Controller</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Vendor</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Focus</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">DNA Center</td><td style="padding: 8px; border-bottom: 1px solid #444;">Cisco</td><td style="padding: 8px; border-bottom: 1px solid #444;">Enterprise campus/WAN</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Meraki Dashboard</td><td style="padding: 8px; border-bottom: 1px solid #444;">Cisco</td><td style="padding: 8px; border-bottom: 1px solid #444;">Cloud-managed networking</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">OpenDaylight</td><td style="padding: 8px; border-bottom: 1px solid #444;">Open Source</td><td style="padding: 8px; border-bottom: 1px solid #444;">Modular, extensible platform</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">ONOS</td><td style="padding: 8px; border-bottom: 1px solid #444;">Open Source</td><td style="padding: 8px; border-bottom: 1px solid #444;">Service provider networks</td></tr>
                    <tr><td style="padding: 8px;">NSX Manager</td><td style="padding: 8px;">VMware</td><td style="padding: 8px;">Data center virtualization</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">High Availability & Clustering</h4>
            <p>Enterprise SDN deployments require controller redundancy:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Active-Standby:</strong> Primary controller with backup ready to take over</li>
                <li><strong>Active-Active:</strong> Multiple controllers sharing load with state synchronization</li>
                <li><strong>Cluster Deployment:</strong> 3+ controllers with consensus protocols (RAFT, Paxos)</li>
                <li><strong>Geographic Distribution:</strong> Controllers across multiple sites for disaster recovery</li>
            </ul>
            
            <h4 style="color: #58D4FF;">Controller Functionality</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Topology Discovery:</strong> Automatic network mapping and device inventory</li>
                <li><strong>Policy Management:</strong> Centralized configuration and rule enforcement</li>
                <li><strong>Flow Programming:</strong> Installing forwarding rules in network devices</li>
                <li><strong>Monitoring & Analytics:</strong> Real-time visibility and performance metrics</li>
                <li><strong>Service Orchestration:</strong> Automated service deployment and lifecycle management</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand centralized vs distributed controller architectures</li>
                    <li>Know major Cisco controllers: DNA Center, Meraki Dashboard</li>
                    <li>Recognize importance of controller high availability</li>
                    <li>Understand controller functions: discovery, policy, monitoring</li>
                </ul>
            </div>
        </div>
    `,

    // 6.3.e - Describe SDN use cases and practical applications
    "SDN Use Cases": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.3.e: SDN Use Cases</h3>
            <p>Software-Defined Networking transforms traditional network operations by enabling programmatic control, automated provisioning, and dynamic service deployment across diverse environments.</p>
            
            <h4 style="color: #58D68D;">Data Center Automation</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>VM Mobility:</strong> Automatic network reconfiguration when VMs migrate between hosts</li>
                    <li><strong>Multi-Tenant Isolation:</strong> Dynamic VLAN/VNI provisioning for tenant separation</li>
                    <li><strong>Load Balancer Integration:</strong> Automatic traffic steering and service insertion</li>
                    <li><strong>Micro-Segmentation:</strong> Granular security policies between applications and services</li>
                    <li><strong>Disaster Recovery:</strong> Automated failover and network service restoration</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Campus Network Orchestration</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Zero-Touch Provisioning:</strong> Automatic device deployment and configuration</li>
                <li><strong>User Policy Enforcement:</strong> Dynamic access control based on identity and location</li>
                <li><strong>Guest Network Automation:</strong> Self-service portal with automated VLAN assignment</li>
                <li><strong>IoT Device Management:</strong> Automatic classification and policy application</li>
                <li><strong>Network Assurance:</strong> Proactive monitoring and automated remediation</li>
            </ul>
            
            <h4 style="color: #58D68D;">Service Function Chaining (SFC)</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Service Chain Example:</strong></p>
                <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 5px; font-family: 'Courier New', monospace; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Traffic Flow: Client → Firewall → Load Balancer → IPS → Application Server
                ↓            ↓              ↓        ↓
            Policy 1    Policy 2      Policy 3   Policy 4
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Dynamic Chaining:</strong> Policies determine which services traffic traverses</li>
                    <li><strong>Service Insertion:</strong> Add/remove services without changing network topology</li>
                    <li><strong>Performance Optimization:</strong> Intelligent path selection based on service load</li>
                    <li><strong>Compliance:</strong> Ensure all traffic passes through required security services</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Cloud and Hybrid Integration</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Multi-Cloud Connectivity:</strong> Consistent policies across on-premises and cloud</li>
                <li><strong>Workload Migration:</strong> Seamless VM/container movement between environments</li>
                <li><strong>Hybrid Security:</strong> Unified security policies spanning multiple locations</li>
                <li><strong>Network as a Service:</strong> Self-service network provisioning through APIs</li>
                <li><strong>Cost Optimization:</strong> Dynamic bandwidth allocation based on demand</li>
            </ul>
            
            <h4 style="color: #58D68D;">WAN Optimization and SD-WAN</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Application-Aware Routing:</strong> Traffic steering based on application requirements</li>
                <li><strong>Quality of Service:</strong> Dynamic bandwidth allocation for critical applications</li>
                <li><strong>Path Selection:</strong> Intelligent routing across multiple WAN links</li>
                <li><strong>Zero-Touch Branch:</strong> Automated branch office deployment and management</li>
                <li><strong>Cloud Breakout:</strong> Direct internet access for cloud applications</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand key SDN use cases: data center, campus, service chaining</li>
                    <li>Know benefits: automation, agility, centralized management</li>
                    <li>Recognize SDN enables network as code and infrastructure as code</li>
                    <li>Understand service function chaining and dynamic service insertion</li>
                </ul>
            </div>
        </div>
    `,

    // 6.3.f - Describe SDN security considerations and best practices
    "SDN Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.3.f: SDN Security</h3>
            <p>SDN introduces new security challenges and opportunities. While centralized control enables consistent security policies, it also creates new attack vectors that require comprehensive protection strategies.</p>
            
            <h4 style="color: #F5B041;">Controller Security Hardening</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Physical Security:</strong> Secure data center placement with restricted access</li>
                    <li><strong>OS Hardening:</strong> Minimal installation, regular patching, disabled unnecessary services</li>
                    <li><strong>Network Isolation:</strong> Dedicated management network separate from production traffic</li>
                    <li><strong>High Availability:</strong> Controller clustering to prevent single points of failure</li>
                    <li><strong>Backup & Recovery:</strong> Regular configuration backups and disaster recovery procedures</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">API Security and Authentication</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Northbound API Protection:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>HTTPS/TLS:</strong> All API communications encrypted in transit</li>
                    <li><strong>OAuth 2.0/JWT:</strong> Token-based authentication for application access</li>
                    <li><strong>RBAC:</strong> Role-based access control limiting user permissions</li>
                    <li><strong>Rate Limiting:</strong> Prevent DoS attacks against controller APIs</li>
                    <li><strong>API Gateways:</strong> Centralized authentication and authorization</li>
                </ul>
                
                <p style="margin-top: 15px;"><strong>Southbound API Protection:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>SSH/NETCONF:</strong> Encrypted management sessions to devices</li>
                    <li><strong>Certificate-Based Auth:</strong> PKI certificates for device identity</li>
                    <li><strong>OpenFlow Security:</strong> TLS for controller-switch communications</li>
                    <li><strong>Device Certificates:</strong> Mutual authentication between controller and devices</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Micro-Segmentation and Network Isolation</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Zero Trust Architecture:</strong> Never trust, always verify network access</li>
                <li><strong>Application-Level Segmentation:</strong> Granular policies between application tiers</li>
                <li><strong>Dynamic Policy Enforcement:</strong> Real-time policy updates based on threat intelligence</li>
                <li><strong>East-West Traffic Inspection:</strong> Monitor and control lateral movement</li>
                <li><strong>Automated Quarantine:</strong> Isolate compromised devices automatically</li>
            </ul>
            
            <h4 style="color: #F5B041;">SDN-Specific Threats and Mitigations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #E74C3C; font-weight: bold;">Threat</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #E74C3C; font-weight: bold;">Impact</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #E74C3C; font-weight: bold;">Mitigation</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Controller DoS</td><td style="padding: 8px; border-bottom: 1px solid #444;">Network outage</td><td style="padding: 8px; border-bottom: 1px solid #444;">Clustering, rate limiting</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Flow Table Overflow</td><td style="padding: 8px; border-bottom: 1px solid #444;">Switch failure</td><td style="padding: 8px; border-bottom: 1px solid #444;">Flow timeout, monitoring</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Man-in-the-Middle</td><td style="padding: 8px; border-bottom: 1px solid #444;">Traffic interception</td><td style="padding: 8px; border-bottom: 1px solid #444;">TLS, certificate validation</td></tr>
                    <tr><td style="padding: 8px;">Configuration Tampering</td><td style="padding: 8px;">Policy bypass</td><td style="padding: 8px;">Digital signatures, audit logs</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Monitoring and Incident Response</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>SIEM Integration:</strong> Centralized logging and correlation of security events</li>
                <li><strong>Network Analytics:</strong> Behavioral analysis for anomaly detection</li>
                <li><strong>Automated Response:</strong> Dynamic policy updates based on threat detection</li>
                <li><strong>Forensics Capability:</strong> Detailed flow and packet capture for investigation</li>
                <li><strong>Compliance Reporting:</strong> Automated compliance validation and reporting</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand SDN security challenges: centralized risk, new attack vectors</li>
                    <li>Know key protections: API authentication, TLS, RBAC</li>
                    <li>Recognize micro-segmentation as SDN security benefit</li>
                    <li>Understand importance of controller hardening and redundancy</li>
                </ul>
            </div>
        </div>
    `,

    // 6.4 - Explain AI (generative and predictive) and machine learning in network operations
    "AI Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">6.4.a: AI Fundamentals</h3>
            <p>Artificial Intelligence in networking represents a paradigm shift from traditional rule-based network management to intelligent, adaptive systems that can learn, reason, and make autonomous decisions. AI enables networks to become self-aware, self-healing, and self-optimizing.</p>
            
            <h4 style="color: #58D4FF;">Types of AI in Networking</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Narrow AI (Weak AI):</strong> Specialized AI for specific networking tasks like traffic classification or anomaly detection</li>
                    <li><strong>Machine Learning AI:</strong> Systems that learn from network data to improve performance and predictions over time</li>
                    <li><strong>Expert Systems:</strong> Rule-based AI that applies networking knowledge to automate complex decision-making</li>
                    <li><strong>Neural Networks:</strong> Deep learning systems that can recognize complex patterns in network behavior</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">AI Components in Network Operations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Component</td><td style="padding: 8px; border-bottom: 1px solid #444;">Function</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Data Collection</td><td style="padding: 8px; border-bottom: 1px solid #444;">Gathers network telemetry, flows, logs, and performance metrics</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Pattern Recognition</td><td style="padding: 8px; border-bottom: 1px solid #444;">Identifies trends, anomalies, and behavioral patterns</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Decision Engine</td><td style="padding: 8px; border-bottom: 1px solid #444;">Makes intelligent choices based on learned patterns</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Automation Layer</td><td style="padding: 8px; border-bottom: 1px solid #444;">Executes actions and configurations automatically</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Benefits of AI in Networks</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Proactive Management:</strong> Predict and prevent issues before they impact users</li>
                <li><strong>Reduced MTTR:</strong> Faster problem identification and automated resolution</li>
                <li><strong>Operational Efficiency:</strong> Automate routine tasks and optimize resource utilization</li>
                <li><strong>Enhanced Security:</strong> Real-time threat detection and automated response</li>
                <li><strong>Scalability:</strong> Manage complex networks that exceed human cognitive capacity</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand AI types: narrow AI, machine learning, expert systems</li>
                    <li>Know AI components: data collection, pattern recognition, decision making</li>
                    <li>Recognize AI benefits: proactive management, automation, efficiency</li>
                    <li>Understand the shift from reactive to predictive network operations</li>
                </ul>
            </div>
        </div>
    `,

    "Generative AI in Networks": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.4.b: Generative AI in Networks</h3>
            <p>Generative AI creates new content, configurations, and solutions for network operations by learning from existing patterns and data. It can automatically generate network designs, configuration scripts, documentation, and troubleshooting procedures, revolutionizing how network engineers approach complex tasks.</p>
            
            <h4 style="color: #58D68D;">Generative AI Applications</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Configuration Generation:</strong> Auto-create device configurations based on requirements and best practices</li>
                    <li><strong>Network Design:</strong> Generate optimal network topologies and architectures for specific use cases</li>
                    <li><strong>Script Automation:</strong> Create custom automation scripts and API integrations</li>
                    <li><strong>Documentation:</strong> Automatically generate network documentation and runbooks</li>
                    <li><strong>Policy Creation:</strong> Generate security policies and access control lists based on requirements</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Generative AI Technologies</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Technology</td><td style="padding: 8px; border-bottom: 1px solid #444;">Network Application</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Large Language Models (LLMs)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Generate CLI configurations and documentation</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Generative Adversarial Networks (GANs)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Create synthetic network traffic for testing</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Transformer Models</td><td style="padding: 8px; border-bottom: 1px solid #444;">Understand and generate network policies</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Code Generation Models</td><td style="padding: 8px; border-bottom: 1px solid #444;">Create automation scripts and API calls</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Implementation Example</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Generative AI creates VLAN configuration</span>
<span style="color: #DCDCAA;">Input:</span> "Create VLAN 10 for Sales department with security policies"

<span style="color: #DCDCAA;">Generated Output:</span>
vlan 10
 name Sales_Department
 state active
!
interface range gi0/1-10
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
 spanning-tree bpduguard enable
!
ip access-list extended SALES_ACL
 permit tcp 192.168.10.0 0.0.0.255 any eq 80
 permit tcp 192.168.10.0 0.0.0.255 any eq 443
 deny ip any any log
!
interface vlan 10
 ip address 192.168.10.1 255.255.255.0
 ip access-group SALES_ACL in
</code>
            </pre>
            
            <h4 style="color: #58D68D;">Benefits and Considerations</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Rapid Deployment:</strong> Generate configurations in seconds rather than hours</li>
                <li><strong>Best Practices:</strong> Incorporates industry standards and security practices</li>
                <li><strong>Consistency:</strong> Ensures uniform configurations across the network</li>
                <li><strong>Validation Required:</strong> Generated content must be reviewed and tested</li>
                <li><strong>Training Data Quality:</strong> Output quality depends on training data accuracy</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand generative AI capabilities: configuration, design, documentation</li>
                    <li>Know generative AI technologies: LLMs, GANs, transformers</li>
                    <li>Recognize benefits: rapid deployment, consistency, best practices</li>
                    <li>Understand validation requirements for AI-generated content</li>
                </ul>
            </div>
        </div>
    `,

    "Machine Learning Models": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.4.c: Machine Learning Models</h3>
            <p>Machine Learning models enable networks to automatically learn from data patterns, adapt to changing conditions, and make intelligent decisions without explicit programming. Different ML algorithms serve specific networking use cases and requirements.</p>
            
            <h4 style="color: #F5B041;">ML Learning Paradigms</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Supervised Learning:</strong> Uses labeled training data to predict outcomes (e.g., classify network traffic types, predict device failures)</li>
                    <li><strong>Unsupervised Learning:</strong> Finds hidden patterns in unlabeled data (e.g., detect unusual traffic patterns, cluster user behaviors)</li>
                    <li><strong>Reinforcement Learning:</strong> Learns through trial and error to optimize decisions (e.g., dynamic routing optimization, resource allocation)</li>
                    <li><strong>Semi-supervised Learning:</strong> Combines labeled and unlabeled data for improved accuracy</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Common ML Algorithms in Networking</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Algorithm</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use Case</td><td style="padding: 8px; border-bottom: 1px solid #444;">Example</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Decision Trees</td><td style="padding: 8px; border-bottom: 1px solid #444;">Traffic Classification</td><td style="padding: 8px; border-bottom: 1px solid #444;">Classify application types</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">K-Means Clustering</td><td style="padding: 8px; border-bottom: 1px solid #444;">Anomaly Detection</td><td style="padding: 8px; border-bottom: 1px solid #444;">Group normal vs abnormal traffic</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Neural Networks</td><td style="padding: 8px; border-bottom: 1px solid #444;">Pattern Recognition</td><td style="padding: 8px; border-bottom: 1px solid #444;">Complex threat detection</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Random Forest</td><td style="padding: 8px; border-bottom: 1px solid #444;">Predictive Analysis</td><td style="padding: 8px; border-bottom: 1px solid #444;">Predict equipment failures</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">SVM (Support Vector Machine)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Classification</td><td style="padding: 8px; border-bottom: 1px solid #444;">Intrusion detection</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">ML Data Pipeline in Networks</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># ML Pipeline for Network Anomaly Detection</span>

<span style="color: #DCDCAA;">1. Data Collection:</span>
   • NetFlow/sFlow records
   • SNMP performance metrics
   • Syslog events and alarms
   • Packet capture data

<span style="color: #DCDCAA;">2. Data Preprocessing:</span>
   • Clean and normalize data
   • Feature extraction and selection
   • Handle missing values
   • Time-series aggregation

<span style="color: #DCDCAA;">3. Model Training:</span>
   • Split data: training/validation/test
   • Train algorithm on historical data
   • Hyperparameter tuning
   • Cross-validation

<span style="color: #DCDCAA;">4. Model Deployment:</span>
   • Real-time inference engine
   • Integration with network monitoring
   • Automated alert generation
   • Continuous model updates
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Model Performance Metrics</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Accuracy:</strong> Percentage of correct predictions overall</li>
                <li><strong>Precision:</strong> Ratio of true positives to all positive predictions</li>
                <li><strong>Recall:</strong> Ratio of true positives to all actual positives</li>
                <li><strong>F1-Score:</strong> Harmonic mean of precision and recall</li>
                <li><strong>False Positive Rate:</strong> Critical for minimizing false alarms</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand ML types: supervised, unsupervised, reinforcement learning</li>
                    <li>Know common algorithms: decision trees, clustering, neural networks</li>
                    <li>Recognize ML pipeline: data → preprocessing → training → deployment</li>
                    <li>Understand model evaluation metrics and their importance</li>
                </ul>
            </div>
        </div>
    `,

    "Predictive Analytics": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">6.4.d: Predictive Analytics</h3>
            <p>Predictive analytics uses historical network data, statistical algorithms, and machine learning techniques to forecast future events, performance trends, and potential issues. This enables proactive network management and strategic planning.</p>
            
            <h4 style="color: #EC7063;">Network Predictive Use Cases</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #E74C3C;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Capacity Planning:</strong> Predict when network links or devices will reach capacity limits based on growth trends</li>
                    <li><strong>Failure Prediction:</strong> Identify devices likely to fail based on performance degradation patterns and historical data</li>
                    <li><strong>Traffic Forecasting:</strong> Predict traffic volumes and patterns for optimal resource allocation and scaling</li>
                    <li><strong>Security Threat Prediction:</strong> Anticipate potential attack vectors based on historical attack patterns and behaviors</li>
                    <li><strong>Performance Optimization:</strong> Predict optimal configurations for changing network conditions and workloads</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Predictive Analytics Workflow</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Predictive Analytics Process</span>

<span style="color: #DCDCAA;">1. Data Collection & Aggregation:</span>
   • Historical performance metrics (CPU, memory, bandwidth)
   • Traffic patterns and flow data
   • Device health indicators and error rates
   • Environmental factors (temperature, power)

<span style="color: #DCDCAA;">2. Feature Engineering:</span>
   • Create time-based features (hourly, daily, weekly patterns)
   • Calculate trend indicators and moving averages
   • Identify seasonal patterns and cycles
   • Normalize data across different scales

<span style="color: #DCDCAA;">3. Model Development:</span>
   • Time series forecasting (ARIMA, LSTM)
   • Regression models for trend analysis
   • Survival analysis for failure prediction
   • Ensemble methods for improved accuracy

<span style="color: #DCDCAA;">4. Prediction & Action:</span>
   • Generate forecasts with confidence intervals
   • Set threshold-based alerts and notifications
   • Trigger automated remediation actions
   • Update capacity planning and procurement
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Implementation Challenges</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Challenge</td><td style="padding: 8px; border-bottom: 1px solid #444;">Mitigation Strategy</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Data Quality Issues</td><td style="padding: 8px; border-bottom: 1px solid #444;">Implement data validation and cleansing processes</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Model Accuracy</td><td style="padding: 8px; border-bottom: 1px solid #444;">Regular model retraining and validation</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Dynamic Environments</td><td style="padding: 8px; border-bottom: 1px solid #444;">Adaptive models that adjust to changes</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">False Positives</td><td style="padding: 8px; border-bottom: 1px solid #444;">Tune sensitivity and implement feedback loops</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Integration Complexity</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use standardized APIs and monitoring platforms</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Business Value</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Cost Reduction:</strong> Prevent costly outages and optimize resource utilization</li>
                <li><strong>Improved SLA:</strong> Maintain higher service availability and performance</li>
                <li><strong>Strategic Planning:</strong> Make informed decisions about infrastructure investments</li>
                <li><strong>Risk Mitigation:</strong> Identify and address potential issues before they impact users</li>
                <li><strong>Operational Efficiency:</strong> Reduce manual monitoring and reactive troubleshooting</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand predictive analytics workflow: data → models → predictions → actions</li>
                    <li>Know use cases: capacity planning, failure prediction, traffic forecasting</li>
                    <li>Recognize benefits: proactive management, cost reduction, better planning</li>
                    <li>Understand challenges: data quality, model accuracy, integration</li>
                </ul>
            </div>
        </div>
    `,

    "AI/ML Implementation": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.4.e: AI/ML Implementation</h3>
            <p>Implementing AI/ML in networks requires proper data collection, model training, integration with existing systems, and continuous monitoring. Modern network platforms provide built-in AI/ML capabilities and APIs for custom implementations.</p>
            
            <h4 style="color: #AF7AC5;">Implementation Architecture</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Data Layer:</strong> Collect telemetry from network devices (NetFlow, SNMP, syslog, streaming telemetry)</li>
                    <li><strong>Processing Layer:</strong> Clean, normalize, and prepare data for ML models</li>
                    <li><strong>ML Engine:</strong> Train, validate, and deploy machine learning models</li>
                    <li><strong>Decision Layer:</strong> Apply ML insights to make network decisions</li>
                    <li><strong>Action Layer:</strong> Execute automated responses and configurations</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Cisco AI/ML Platforms</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Platform</td><td style="padding: 8px; border-bottom: 1px solid #444;">AI/ML Capabilities</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">DNA Center</td><td style="padding: 8px; border-bottom: 1px solid #444;">AI-driven assurance, predictive insights, network optimization</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Meraki Dashboard</td><td style="padding: 8px; border-bottom: 1px solid #444;">AI-powered insights, wireless optimization, security analytics</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Catalyst Center</td><td style="padding: 8px; border-bottom: 1px solid #444;">ML-based troubleshooting, performance optimization</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">ThousandEyes</td><td style="padding: 8px; border-bottom: 1px solid #444;">AI-powered network intelligence and path visualization</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">SecureX</td><td style="padding: 8px; border-bottom: 1px solid #444;">AI-driven threat detection and response orchestration</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">Implementation Example - Network Anomaly Detection</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Example: Deploying ML-based anomaly detection</span>

<span style="color: #DCDCAA;">1. Data Collection Configuration:</span>
Router(config)# <span style="color: #C586C0;">flow record ANOMALY_RECORD</span>
Router(config-flow-record)# <span style="color: #9CDCFE;">match ipv4 source address</span>
Router(config-flow-record)# <span style="color: #9CDCFE;">match ipv4 destination address</span>
Router(config-flow-record)# <span style="color: #9CDCFE;">collect counter bytes</span>
Router(config-flow-record)# <span style="color: #9CDCFE;">collect counter packets</span>

<span style="color: #DCDCAA;">2. Streaming Telemetry:</span>
Router(config)# <span style="color: #C586C0;">telemetry ietf subscription 100</span>
Router(config-mdt-subs)# <span style="color: #9CDCFE;">encoding encode-json</span>
Router(config-mdt-subs)# <span style="color: #9CDCFE;">filter xpath /interfaces-ios-xe-oper:interfaces/interface</span>
Router(config-mdt-subs)# <span style="color: #9CDCFE;">stream yang-push</span>
Router(config-mdt-subs)# <span style="color: #9CDCFE;">receiver ip address 192.168.1.100 port 57344</span>

<span style="color: #DCDCAA;">3. Model Integration via API:</span>
<span style="color: #6A9955;"># DNA Center API for AI insights</span>
GET https://dna-center.example.com/dna/intent/api/v1/network-health
Authorization: Bearer {token}
Content-Type: application/json
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Deployment Considerations</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Data Privacy:</strong> Ensure compliance with data protection regulations</li>
                <li><strong>Compute Resources:</strong> Adequate processing power for ML model inference</li>
                <li><strong>Network Bandwidth:</strong> Sufficient capacity for telemetry data collection</li>
                <li><strong>Model Lifecycle:</strong> Regular updates, retraining, and version management</li>
                <li><strong>Fallback Mechanisms:</strong> Traditional monitoring when AI/ML systems are unavailable</li>
                <li><strong>Staff Training:</strong> Educate network teams on AI/ML system operation</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand implementation layers: data, processing, ML engine, decision, action</li>
                    <li>Know Cisco AI platforms: DNA Center, Meraki, ThousandEyes</li>
                    <li>Recognize data sources: NetFlow, SNMP, streaming telemetry</li>
                    <li>Understand deployment considerations and requirements</li>
                </ul>
            </div>
        </div>
    `,

    "AI-Driven Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">6.4.f: AI-Driven Security</h3>
            <p>AI enhances network security through intelligent threat detection, automated incident response, and behavioral analysis. AI security systems can identify zero-day attacks, insider threats, and sophisticated attack patterns that traditional signature-based systems miss.</p>
            
            <h4 style="color: #58D4FF;">AI Security Capabilities</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Behavioral Analysis:</strong> Learn normal network and user behaviors to detect anomalies and insider threats</li>
                    <li><strong>Zero-Day Detection:</strong> Identify unknown threats based on behavioral patterns rather than signatures</li>
                    <li><strong>Advanced Persistent Threats (APT):</strong> Detect sophisticated, long-term attacks through pattern correlation</li>
                    <li><strong>Automated Response:</strong> Immediate containment and remediation of security incidents</li>
                    <li><strong>Threat Intelligence:</strong> Correlate local events with global threat intelligence feeds</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">AI Security Technologies</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Technology</td><td style="padding: 8px; border-bottom: 1px solid #444;">Security Application</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">User Entity Behavior Analytics (UEBA)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Detect insider threats and compromised accounts</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Network Traffic Analysis (NTA)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Identify malicious traffic patterns and lateral movement</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Security Orchestration (SOAR)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Automate incident response and remediation</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Deception Technology</td><td style="padding: 8px; border-bottom: 1px solid #444;">Deploy AI-managed honeypots and decoys</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Threat Hunting</td><td style="padding: 8px; border-bottom: 1px solid #444;">Proactively search for hidden threats</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">AI Security Workflow</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># AI-Driven Security Detection Process</span>

<span style="color: #DCDCAA;">1. Data Ingestion:</span>
   • Network flows and packet data
   • DNS queries and web proxy logs
   • Authentication and authorization logs
   • Endpoint telemetry and file system events

<span style="color: #DCDCAA;">2. Baseline Learning:</span>
   • Establish normal behavior patterns
   • Create user and device profiles
   • Map typical network communication flows
   • Identify standard application usage patterns

<span style="color: #DCDCAA;">3. Anomaly Detection:</span>
   • Compare real-time activity to baselines
   • Score deviations and calculate risk levels
   • Correlate events across multiple data sources
   • Apply threat intelligence for context

<span style="color: #DCDCAA;">4. Automated Response:</span>
   • Quarantine suspicious devices
   • Block malicious network communications
   • Alert security teams with detailed context
   • Initiate incident response workflows
</code>
            </pre>
            
            <h4 style="color: #58D4FF;">Cisco AI Security Solutions</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Cisco SecureX:</strong> AI-powered security platform with unified threat detection and response</li>
                <li><strong>Cisco Stealthwatch:</strong> Network traffic analysis with AI-driven threat detection</li>
                <li><strong>Cisco Umbrella:</strong> DNS-layer security with AI-powered threat intelligence</li>
                <li><strong>Cisco AMP for Endpoints:</strong> AI-enhanced endpoint detection and response</li>
                <li><strong>Cisco Firepower:</strong> Next-generation firewall with AI-driven threat detection</li>
            </ul>
            
            <h4 style="color: #58D4FF;">Benefits and Challenges</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Benefits:</strong> Faster detection, reduced false positives, 24/7 monitoring, scalable protection</li>
                <li><strong>Challenges:</strong> Initial training period, model drift, adversarial attacks, privacy concerns</li>
                <li><strong>Best Practices:</strong> Regular model updates, human oversight, multi-layered defense, continuous validation</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand AI security capabilities: behavioral analysis, zero-day detection, automated response</li>
                    <li>Know AI security technologies: UEBA, NTA, SOAR, deception technology</li>
                    <li>Recognize Cisco AI security solutions and their functions</li>
                    <li>Understand benefits and challenges of AI-driven security</li>
                </ul>
            </div>
        </div>
    `,

    // 6.5 - Describe characteristics of REST-based APIs
    "REST API Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.5: REST API Fundamentals</h3>
            <p>REST (Representational State Transfer) is an architectural style for designing web services and APIs. It uses standard HTTP protocols and is stateless, making it ideal for network automation, cloud integration, and modern application development.</p>
            
            <h4 style="color: #FFB84D;">REST Architecture Principles</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Stateless:</strong> Each request contains all information needed; server stores no client context</li>
                    <li><strong>Client-Server:</strong> Clear separation between client and server responsibilities</li>
                    <li><strong>Cacheable:</strong> Responses can be cached to improve performance</li>
                    <li><strong>Uniform Interface:</strong> Consistent resource identification and manipulation methods</li>
                    <li><strong>Layered System:</strong> Architecture can include intermediary layers (proxies, gateways)</li>
                </ul>
            </div>
            
            <h4 style="color: #FFB84D;">REST in Network Automation</h4>
            <p>REST APIs are essential for modern network automation:</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Cisco DNA Center:</strong> REST APIs for network provisioning and monitoring</li>
                <li><strong>Meraki Dashboard:</strong> REST APIs for cloud-managed network control</li>
                <li><strong>NSO (Network Services Orchestrator):</strong> REST APIs for service automation</li>
                <li><strong>ACI APIC:</strong> REST APIs for data center fabric management</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand REST principles: stateless, client-server, uniform interface</li>
                    <li>Know REST uses HTTP/HTTPS protocol with standard methods</li>
                    <li>Recognize REST advantages: simplicity, caching, wide adoption</li>
                    <li>Understand REST role in network automation platforms</li>
                </ul>
            </div>
        </div>
    `,

    "HTTP Verbs & CRUD": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">6.5: HTTP Verbs & CRUD Operations</h3>
            <p>REST APIs map database-style CRUD operations (Create, Read, Update, Delete) to standard HTTP methods. This provides a consistent, intuitive interface for managing network resources and configurations.</p>
            
            <h4 style="color: #FF6B6B;">HTTP Methods and CRUD Mapping</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #E74C3C;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #2a2a2a;">
                        <th style="border: 1px solid #444; padding: 10px; color: #FF6B6B;">HTTP Method</th>
                        <th style="border: 1px solid #444; padding: 10px; color: #FF6B6B;">CRUD Operation</th>
                        <th style="border: 1px solid #444; padding: 10px; color: #FF6B6B;">Purpose</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px; color: #10b981;"><strong>GET</strong></td>
                        <td style="border: 1px solid #444; padding: 8px;">Read</td>
                        <td style="border: 1px solid #444; padding: 8px;">Retrieve data/resources</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="border: 1px solid #444; padding: 8px; color: #3b82f6;"><strong>POST</strong></td>
                        <td style="border: 1px solid #444; padding: 8px;">Create</td>
                        <td style="border: 1px solid #444; padding: 8px;">Create new resources</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px; color: #f59e0b;"><strong>PUT</strong></td>
                        <td style="border: 1px solid #444; padding: 8px;">Update</td>
                        <td style="border: 1px solid #444; padding: 8px;">Replace entire resource</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="border: 1px solid #444; padding: 8px; color: #ef4444;"><strong>DELETE</strong></td>
                        <td style="border: 1px solid #444; padding: 8px;">Delete</td>
                        <td style="border: 1px solid #444; padding: 8px;">Remove resources</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #FF6B6B;">HTTP Status Codes</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>200 OK:</strong> Successful GET, PUT, PATCH, or DELETE</li>
                <li><strong>201 Created:</strong> Successful POST (resource created)</li>
                <li><strong>400 Bad Request:</strong> Invalid request format or parameters</li>
                <li><strong>401 Unauthorized:</strong> Authentication required or failed</li>
                <li><strong>404 Not Found:</strong> Resource doesn't exist</li>
                <li><strong>500 Internal Server Error:</strong> Server-side error</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know HTTP method to CRUD mapping: GET=Read, POST=Create, PUT=Update, DELETE=Delete</li>
                    <li>Understand idempotency: GET, PUT, DELETE are idempotent; POST is not</li>
                    <li>Recognize common HTTP status codes and their meanings</li>
                    <li>Understand REST API URL structure and resource addressing</li>
                </ul>
            </div>
        </div>
    `,

    "Authentication Types": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">6.5: API Authentication Types</h3>
            <p>REST API security relies on proper authentication mechanisms to verify client identity and authorize access to network resources. Different authentication methods provide varying levels of security and complexity.</p>
            
            <h4 style="color: #FF6B6B;">Common Authentication Methods</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #E74C3C;">
                <h5 style="color: #FF6B6B;">1. API Keys</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>Method:</strong> Simple string token passed in header or query parameter</li>
                    <li><strong>Header:</strong> X-API-Key: abc123def456ghi789</li>
                    <li><strong>Use Case:</strong> Internal APIs, simple integrations</li>
                </ul>
                
                <h5 style="color: #FF6B6B;">2. Basic Authentication</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>Method:</strong> Username:password encoded in Base64</li>
                    <li><strong>Header:</strong> Authorization: Basic dXNlcjpwYXNz</li>
                    <li><strong>Use Case:</strong> Legacy systems, internal networks with HTTPS</li>
                </ul>
                
                <h5 style="color: #FF6B6B;">3. Bearer Tokens (OAuth 2.0)</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>Method:</strong> Token-based authentication with expiration</li>
                    <li><strong>Header:</strong> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</li>
                    <li><strong>Use Case:</strong> Modern APIs, cloud services, enterprise applications</li>
                </ul>
            </div>
            
            <h4 style="color: #FF6B6B;">Security Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Always use HTTPS:</strong> Encrypt authentication credentials in transit</li>
                <li><strong>Token Expiration:</strong> Use short-lived tokens that automatically expire</li>
                <li><strong>Rate Limiting:</strong> Implement API call limits to prevent abuse</li>
                <li><strong>Least Privilege:</strong> Grant minimum necessary permissions</li>
                <li><strong>Audit Logging:</strong> Log all API access attempts and actions</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know common authentication types: API keys, Basic Auth, Bearer tokens</li>
                    <li>Understand OAuth 2.0 and JWT token concepts</li>
                    <li>Recognize authentication headers and their formats</li>
                    <li>Understand security best practices: HTTPS, token expiration, least privilege</li>
                </ul>
            </div>
        </div>
    `,

    "Data Encoding": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.5: REST API Data Encoding</h3>
            <p>REST APIs use standardized data formats to exchange information between clients and servers. JSON has become the dominant format due to its simplicity, readability, and native JavaScript support, though XML is still used in legacy systems.</p>
            
            <h4 style="color: #BB7BD6;">JSON (JavaScript Object Notation)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <h5 style="color: #BB7BD6;">JSON Characteristics:</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>Lightweight:</strong> Minimal syntax overhead compared to XML</li>
                    <li><strong>Human-readable:</strong> Easy to read and write manually</li>
                    <li><strong>Language-independent:</strong> Supported by virtually all programming languages</li>
                    <li><strong>Native JavaScript:</strong> Directly parsed by JavaScript engines</li>
                    <li><strong>Structured:</strong> Supports objects, arrays, and primitive data types</li>
                </ul>
                
                <h5 style="color: #BB7BD6;">JSON Data Types:</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>String:</strong> "text in double quotes"</li>
                    <li><strong>Number:</strong> 42, 3.14, -17</li>
                    <li><strong>Boolean:</strong> true, false</li>
                    <li><strong>null:</strong> null value</li>
                    <li><strong>Object:</strong> {"key": "value"}</li>
                    <li><strong>Array:</strong> ["item1", "item2", "item3"]</li>
                </ul>
            </div>
            
            <h4 style="color: #BB7BD6;">Content-Type Headers</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>JSON Request:</strong> Content-Type: application/json</li>
                <li><strong>JSON Response:</strong> Accept: application/json</li>
                <li><strong>XML Request:</strong> Content-Type: application/xml</li>
                <li><strong>XML Response:</strong> Accept: application/xml</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand JSON is preferred over XML for modern REST APIs</li>
                    <li>Know JSON data types: string, number, boolean, null, object, array</li>
                    <li>Recognize proper Content-Type headers for JSON and XML</li>
                    <li>Understand JSON advantages: lightweight, readable, native JavaScript support</li>
                </ul>
            </div>
        </div>
    `,

    "HTTP Status Codes": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">6.5: HTTP Status Codes</h3>
            <p>HTTP status codes provide essential feedback about API request results. Understanding these codes is crucial for API troubleshooting, error handling, and building robust network automation scripts.</p>
            
            <h4 style="color: #58D4FF;">Status Code Categories</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>1xx Informational:</strong> Request received, continuing process (rarely used in REST APIs)</li>
                    <li><strong>2xx Success:</strong> Request was successfully received, understood, and accepted</li>
                    <li><strong>3xx Redirection:</strong> Further action needs to be taken to complete the request</li>
                    <li><strong>4xx Client Error:</strong> Request contains bad syntax or cannot be fulfilled</li>
                    <li><strong>5xx Server Error:</strong> Server failed to fulfill an apparently valid request</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Common REST API Status Codes</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Code</td><td style="padding: 8px; border-bottom: 1px solid #444;">Name</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use Case</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981;">200</td><td style="padding: 8px; border-bottom: 1px solid #444;">OK</td><td style="padding: 8px; border-bottom: 1px solid #444;">Successful GET, PUT, PATCH requests</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981;">201</td><td style="padding: 8px; border-bottom: 1px solid #444;">Created</td><td style="padding: 8px; border-bottom: 1px solid #444;">Successful POST request, resource created</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981;">204</td><td style="padding: 8px; border-bottom: 1px solid #444;">No Content</td><td style="padding: 8px; border-bottom: 1px solid #444;">Successful DELETE request</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b;">400</td><td style="padding: 8px; border-bottom: 1px solid #444;">Bad Request</td><td style="padding: 8px; border-bottom: 1px solid #444;">Invalid request syntax or data</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b;">401</td><td style="padding: 8px; border-bottom: 1px solid #444;">Unauthorized</td><td style="padding: 8px; border-bottom: 1px solid #444;">Authentication required or failed</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b;">403</td><td style="padding: 8px; border-bottom: 1px solid #444;">Forbidden</td><td style="padding: 8px; border-bottom: 1px solid #444;">Access denied despite authentication</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b;">404</td><td style="padding: 8px; border-bottom: 1px solid #444;">Not Found</td><td style="padding: 8px; border-bottom: 1px solid #444;">Resource does not exist</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444;">500</td><td style="padding: 8px; border-bottom: 1px solid #444;">Internal Server Error</td><td style="padding: 8px; border-bottom: 1px solid #444;">Server encountered unexpected condition</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444;">503</td><td style="padding: 8px; border-bottom: 1px solid #444;">Service Unavailable</td><td style="padding: 8px; border-bottom: 1px solid #444;">Server temporarily overloaded or down</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Error Handling Best Practices</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Example error handling in network automation</span>

<span style="color: #DCDCAA;">import requests</span>

<span style="color: #C586C0;">def</span> <span style="color: #DCDCAA;">get_device_status</span>(device_id):
    response = requests.get(f<span style="color: #CE9178;">"/api/v1/devices/{device_id}"</span>)
    
    <span style="color: #C586C0;">if</span> response.status_code == <span style="color: #B5CEA8;">200</span>:
        <span style="color: #C586C0;">return</span> response.json()
    <span style="color: #C586C0;">elif</span> response.status_code == <span style="color: #B5CEA8;">404</span>:
        <span style="color: #C586C0;">print</span>(f<span style="color: #CE9178;">"Device {device_id} not found"</span>)
    <span style="color: #C586C0;">elif</span> response.status_code == <span style="color: #B5CEA8;">401</span>:
        <span style="color: #C586C0;">print</span>(<span style="color: #CE9178;">"Authentication failed"</span>)
    <span style="color: #C586C0;">else</span>:
        <span style="color: #C586C0;">print</span>(f<span style="color: #CE9178;">"API error: {response.status_code}"</span>)
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know status code categories: 2xx success, 4xx client error, 5xx server error</li>
                    <li>Understand common codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Error</li>
                    <li>Recognize importance of status codes for API troubleshooting</li>
                    <li>Understand proper error handling in network automation scripts</li>
                </ul>
            </div>
        </div>
    `,

    "API Testing & Tools": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.5: API Testing & Tools</h3>
            <p>Testing REST APIs is essential for validating functionality, troubleshooting issues, and developing reliable network automation. Various tools and techniques enable comprehensive API testing and debugging.</p>
            
            <h4 style="color: #58D68D;">Popular API Testing Tools</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Postman:</strong> GUI-based API client with collections, testing, and documentation features</li>
                    <li><strong>curl:</strong> Command-line tool for making HTTP requests, perfect for scripting and automation</li>
                    <li><strong>HTTPie:</strong> Modern command-line HTTP client with intuitive syntax</li>
                    <li><strong>Browser DevTools:</strong> Built-in tools for testing APIs and inspecting network traffic</li>
                    <li><strong>Insomnia:</strong> Cross-platform REST client with environment and workspace management</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">curl Examples for Network APIs</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># GET request to retrieve device information</span>
<span style="color: #DCDCAA;">curl</span> <span style="color: #C586C0;">-X GET</span> <span style="color: #CE9178;">"https://api.meraki.com/api/v1/devices"</span> \
     <span style="color: #C586C0;">-H</span> <span style="color: #CE9178;">"X-Cisco-Meraki-API-Key: your_api_key"</span> \
     <span style="color: #C586C0;">-H</span> <span style="color: #CE9178;">"Content-Type: application/json"</span>

<span style="color: #6A9955;"># POST request to create a new VLAN</span>
<span style="color: #DCDCAA;">curl</span> <span style="color: #C586C0;">-X POST</span> <span style="color: #CE9178;">"https://dna-center.example.com/api/v1/vlans"</span> \
     <span style="color: #C586C0;">-H</span> <span style="color: #CE9178;">"Authorization: Bearer token123"</span> \
     <span style="color: #C586C0;">-H</span> <span style="color: #CE9178;">"Content-Type: application/json"</span> \
     <span style="color: #C586C0;">-d</span> <span style="color: #CE9178;">'{"vlanId": 100, "name": "Sales_VLAN"}'</span>

<span style="color: #6A9955;"># PUT request to update device configuration</span>
<span style="color: #DCDCAA;">curl</span> <span style="color: #C586C0;">-X PUT</span> <span style="color: #CE9178;">"https://api.example.com/v1/devices/router1"</span> \
     <span style="color: #C586C0;">-u</span> <span style="color: #CE9178;">"username:password"</span> \
     <span style="color: #C586C0;">-H</span> <span style="color: #CE9178;">"Content-Type: application/json"</span> \
     <span style="color: #C586C0;">-d</span> <span style="color: #CE9178;">'{"hostname": "new_hostname"}'</span>

<span style="color: #6A9955;"># DELETE request to remove a resource</span>
<span style="color: #DCDCAA;">curl</span> <span style="color: #C586C0;">-X DELETE</span> <span style="color: #CE9178;">"https://api.example.com/v1/vlans/100"</span> \
     <span style="color: #C586C0;">-H</span> <span style="color: #CE9178;">"Authorization: Bearer token123"</span>
</code>
            </pre>
            
            <h4 style="color: #58D68D;">API Testing Workflow</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Step</td><td style="padding: 8px; border-bottom: 1px solid #444;">Action</td><td style="padding: 8px; border-bottom: 1px solid #444;">Verification</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">1. Authentication</td><td style="padding: 8px; border-bottom: 1px solid #444;">Test API key/token validity</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check for 401/403 errors</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">2. Request Format</td><td style="padding: 8px; border-bottom: 1px solid #444;">Validate JSON syntax and headers</td><td style="padding: 8px; border-bottom: 1px solid #444;">Ensure Content-Type is correct</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">3. Response Analysis</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check status code and body</td><td style="padding: 8px; border-bottom: 1px solid #444;">Verify expected data structure</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">4. Error Handling</td><td style="padding: 8px; border-bottom: 1px solid #444;">Test invalid requests</td><td style="padding: 8px; border-bottom: 1px solid #444;">Confirm proper error messages</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">5. Performance</td><td style="padding: 8px; border-bottom: 1px solid #444;">Monitor response times</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check for timeouts/rate limits</td></tr>
                </table>
            </div>
            
            <h4 style="color: #58D68D;">Postman Collection Example</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Environment Variables:</strong> Store API endpoints, tokens, and device IDs</li>
                <li><strong>Pre-request Scripts:</strong> Generate timestamps or calculate authentication headers</li>
                <li><strong>Tests:</strong> Validate response status, JSON structure, and data values</li>
                <li><strong>Collection Runner:</strong> Execute multiple requests in sequence for workflow testing</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know popular API testing tools: Postman, curl, browser DevTools</li>
                    <li>Understand curl syntax for basic HTTP operations (GET, POST, PUT, DELETE)</li>
                    <li>Recognize importance of testing authentication, request format, and responses</li>
                    <li>Understand API testing workflow and verification steps</li>
                </ul>
            </div>
        </div>
    `,

    "API Design Best Practices": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.5: API Design Best Practices</h3>
            <p>Well-designed REST APIs follow established conventions for URL structure, resource naming, versioning, and error handling. These practices ensure APIs are intuitive, maintainable, and compatible with automation tools.</p>
            
            <h4 style="color: #F5B041;">RESTful URL Design Principles</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Use Nouns, Not Verbs:</strong> URLs should represent resources, not actions</li>
                    <li><strong>Hierarchical Structure:</strong> Organize resources in logical parent-child relationships</li>
                    <li><strong>Plural Nouns:</strong> Use plural forms for resource collections</li>
                    <li><strong>Consistent Naming:</strong> Follow consistent case conventions (snake_case or kebab-case)</li>
                    <li><strong>Filter with Query Parameters:</strong> Use query strings for filtering, sorting, and pagination</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">URL Structure Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Good URL Design Examples</span>
<span style="color: #10b981;">✓</span> <span style="color: #CE9178;">GET /api/v1/devices</span>                    <span style="color: #6A9955;"># Get all devices</span>
<span style="color: #10b981;">✓</span> <span style="color: #CE9178;">GET /api/v1/devices/router1</span>             <span style="color: #6A9955;"># Get specific device</span>
<span style="color: #10b981;">✓</span> <span style="color: #CE9178;">GET /api/v1/devices/router1/interfaces</span>  <span style="color: #6A9955;"># Get device interfaces</span>
<span style="color: #10b981;">✓</span> <span style="color: #CE9178;">GET /api/v1/vlans?active=true</span>           <span style="color: #6A9955;"># Filter with query params</span>

<span style="color: #6A9955;"># Poor URL Design Examples</span>
<span style="color: #ef4444;">✗</span> <span style="color: #CE9178;">GET /api/v1/getDevices</span>                 <span style="color: #6A9955;"># Uses verb instead of noun</span>
<span style="color: #ef4444;">✗</span> <span style="color: #CE9178;">GET /api/v1/device</span>                     <span style="color: #6A9955;"># Singular for collection</span>
<span style="color: #ef4444;">✗</span> <span style="color: #CE9178;">POST /api/v1/devices/router1/delete</span>     <span style="color: #6A9955;"># Action in URL</span>
<span style="color: #ef4444;">✗</span> <span style="color: #CE9178;">GET /api/v1/DeviceInterfaces</span>           <span style="color: #6A9955;"># Inconsistent naming</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">API Versioning Strategies</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Method</td><td style="padding: 8px; border-bottom: 1px solid #444;">Example</td><td style="padding: 8px; border-bottom: 1px solid #444;">Pros/Cons</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">URL Path</td><td style="padding: 8px; border-bottom: 1px solid #444;">/api/v1/devices</td><td style="padding: 8px; border-bottom: 1px solid #444;">Simple, explicit, most common</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Query Parameter</td><td style="padding: 8px; border-bottom: 1px solid #444;">/api/devices?version=1</td><td style="padding: 8px; border-bottom: 1px solid #444;">Flexible but can be ignored</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Header</td><td style="padding: 8px; border-bottom: 1px solid #444;">Accept: application/vnd.api+json;version=1</td><td style="padding: 8px; border-bottom: 1px solid #444;">Clean URLs but less visible</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Subdomain</td><td style="padding: 8px; border-bottom: 1px solid #444;">v1.api.example.com/devices</td><td style="padding: 8px; border-bottom: 1px solid #444;">Clear separation but DNS complexity</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Response Format Standards</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Consistent Response Structure</span>
{
  <span style="color: #10b981;">"status"</span>: <span style="color: #CE9178;">"success"</span>,
  <span style="color: #10b981;">"data"</span>: {
    <span style="color: #10b981;">"devices"</span>: [
      {
        <span style="color: #10b981;">"id"</span>: <span style="color: #CE9178;">"router1"</span>,
        <span style="color: #10b981;">"hostname"</span>: <span style="color: #CE9178;">"core-router-01"</span>,
        <span style="color: #10b981;">"status"</span>: <span style="color: #CE9178;">"active"</span>,
        <span style="color: #10b981;">"last_seen"</span>: <span style="color: #CE9178;">"2024-03-15T10:30:00Z"</span>
      }
    ]
  },
  <span style="color: #10b981;">"pagination"</span>: {
    <span style="color: #10b981;">"total"</span>: <span style="color: #B5CEA8;">45</span>,
    <span style="color: #10b981;">"page"</span>: <span style="color: #B5CEA8;">1</span>,
    <span style="color: #10b981;">"per_page"</span>: <span style="color: #B5CEA8;">20</span>
  },
  <span style="color: #10b981;">"links"</span>: {
    <span style="color: #10b981;">"next"</span>: <span style="color: #CE9178;">"/api/v1/devices?page=2"</span>,
    <span style="color: #10b981;">"self"</span>: <span style="color: #CE9178;">"/api/v1/devices?page=1"</span>
  }
}
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Security and Performance Considerations</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Rate Limiting:</strong> Implement request throttling to prevent API abuse</li>
                <li><strong>Input Validation:</strong> Validate all input parameters and reject malformed requests</li>
                <li><strong>HTTPS Only:</strong> Always use encrypted connections for API communication</li>
                <li><strong>Caching Headers:</strong> Use appropriate Cache-Control headers for performance</li>
                <li><strong>Error Details:</strong> Provide helpful error messages without exposing sensitive information</li>
                <li><strong>Documentation:</strong> Maintain up-to-date API documentation with examples</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand URL design: use nouns, plural forms, hierarchical structure</li>
                    <li>Know versioning methods: URL path most common (/api/v1/)</li>
                    <li>Recognize importance of consistent response formats and error handling</li>
                    <li>Understand security basics: HTTPS, rate limiting, input validation</li>
                </ul>
            </div>
        </div>
    `,

    // 6.6 - Recognize the capabilities of configuration management mechanisms
    "Ansible Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">6.6: Ansible Fundamentals</h3>
            <p>Ansible is a powerful, agentless automation tool that simplifies configuration management, application deployment, and task automation. It uses SSH for communication and YAML for configuration, making it ideal for network automation.</p>
            
            <h4 style="color: #58D4FF;">Ansible Architecture</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Control Node:</strong> The machine where Ansible is installed and playbooks are executed</li>
                    <li><strong>Managed Nodes:</strong> Target devices that Ansible configures (routers, switches, servers)</li>
                    <li><strong>Inventory:</strong> List of managed nodes with their connection details</li>
                    <li><strong>Playbooks:</strong> YAML files containing automation tasks and configurations</li>
                    <li><strong>Modules:</strong> Reusable units of code that perform specific tasks</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Ansible Key Benefits</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Feature</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Benefit</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Network Impact</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Agentless</td>
                    <td style="border: 1px solid #444; padding: 8px;">No software installation on targets</td>
                    <td style="border: 1px solid #444; padding: 8px;">Works with existing network devices</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">SSH-based</td>
                    <td style="border: 1px solid #444; padding: 8px;">Uses standard protocols</td>
                    <td style="border: 1px solid #444; padding: 8px;">Secure, encrypted communication</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">YAML Syntax</td>
                    <td style="border: 1px solid #444; padding: 8px;">Human-readable configuration</td>
                    <td style="border: 1px solid #444; padding: 8px;">Easy to learn and maintain</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Idempotent</td>
                    <td style="border: 1px solid #444; padding: 8px;">Safe to run multiple times</td>
                    <td style="border: 1px solid #444; padding: 8px;">Consistent configuration state</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Ansible Network Modules</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>ios_command:</strong> Execute commands on Cisco IOS devices</li>
                <li><strong>ios_config:</strong> Manage configuration sections on IOS devices</li>
                <li><strong>nxos_command:</strong> Execute commands on Cisco Nexus switches</li>
                <li><strong>eos_config:</strong> Configure Arista EOS devices</li>
                <li><strong>junos_config:</strong> Manage Juniper device configurations</li>
            </ul>
            
            <h4 style="color: #58D4FF;">Basic Ansible Playbook Example</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #f59e0b;">---</span><br>
                <span style="color: #10b981;">- name:</span> Configure VLAN on switches<br>
                &nbsp;&nbsp;<span style="color: #10b981;">hosts:</span> switches<br>
                &nbsp;&nbsp;<span style="color: #10b981;">tasks:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">- name:</span> Create VLAN 100<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">ios_config:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">lines:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #3b82f6;">vlan 100</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #3b82f6;">name Marketing</span>
                </code>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand Ansible is agentless and uses SSH for communication</li>
                    <li>Know YAML is used for playbook configuration</li>
                    <li>Recognize Ansible benefits: idempotent, human-readable, secure</li>
                    <li>Understand push model vs pull model approaches</li>
                </ul>
            </div>
        </div>
    `,

    "Terraform Infrastructure": `
        <div style="font-family: 'Inter', sans-serif; color: #2ECC71;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.6: Terraform Infrastructure as Code</h3>
            <p>Terraform is an Infrastructure as Code (IaC) tool that enables you to define, provision, and manage infrastructure using declarative configuration files. It supports multiple cloud providers and network platforms.</p>
            
            <h4 style="color: #58D68D;">Terraform Core Concepts</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Provider:</strong> Plugin that interacts with APIs of cloud services (AWS, Azure, VMware)</li>
                    <li><strong>Resource:</strong> Infrastructure component (VM, network, firewall rule)</li>
                    <li><strong>State:</strong> Terraform's knowledge of real-world infrastructure</li>
                    <li><strong>Plan:</strong> Preview of changes before applying them</li>
                    <li><strong>Apply:</strong> Execution of the planned changes</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Terraform Workflow</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Write:</strong> Define infrastructure in HCL (HashiCorp Configuration Language)</li>
                <li><strong>Plan:</strong> Preview changes with <code>terraform plan</code></li>
                <li><strong>Apply:</strong> Create infrastructure with <code>terraform apply</code></li>
                <li><strong>Manage:</strong> Update and destroy infrastructure as needed</li>
            </ol>
            
            <h4 style="color: #58D68D;">Network Infrastructure Example</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #f59e0b;"># Configure VMware vSphere provider</span><br>
                <span style="color: #10b981;">provider</span> <span style="color: #3b82f6;">"vsphere"</span> {<br>
                &nbsp;&nbsp;<span style="color: #10b981;">vsphere_server</span> = <span style="color: #3b82f6;">"vcenter.example.com"</span><br>
                }<br><br>
                <span style="color: #f59e0b;"># Create virtual machine</span><br>
                <span style="color: #10b981;">resource</span> <span style="color: #3b82f6;">"vsphere_virtual_machine"</span> <span style="color: #3b82f6;">"router"</span> {<br>
                &nbsp;&nbsp;<span style="color: #10b981;">name</span> = <span style="color: #3b82f6;">"router-01"</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">num_cpus</span> = <span style="color: #8b5cf6;">2</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">memory</span> = <span style="color: #8b5cf6;">4096</span><br>
                }
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Terraform vs Traditional Methods</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Aspect</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Traditional</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Terraform</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Infrastructure Setup</td>
                    <td style="border: 1px solid #444; padding: 8px;">Manual GUI/CLI configuration</td>
                    <td style="border: 1px solid #444; padding: 8px;">Code-defined infrastructure</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Version Control</td>
                    <td style="border: 1px solid #444; padding: 8px;">No versioning of infrastructure</td>
                    <td style="border: 1px solid #444; padding: 8px;">Git-tracked configuration files</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Reproducibility</td>
                    <td style="border: 1px solid #444; padding: 8px;">Manual, error-prone</td>
                    <td style="border: 1px solid #444; padding: 8px;">Consistent, repeatable</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Multi-cloud</td>
                    <td style="border: 1px solid #444; padding: 8px;">Vendor-specific tools</td>
                    <td style="border: 1px solid #444; padding: 8px;">Unified workflow</td>
                </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand Infrastructure as Code (IaC) concept</li>
                    <li>Know Terraform uses declarative configuration files</li>
                    <li>Recognize benefits: version control, reproducibility, consistency</li>
                    <li>Understand plan/apply workflow for safe infrastructure changes</li>
                </ul>
            </div>
        </div>
    `,

    "Ansible Advanced Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.6: Ansible Advanced Configuration</h3>
            <p>Advanced Ansible features enable enterprise-grade automation through roles for reusable code, variables and templates for dynamic configurations, and specialized network modules for complex automation workflows.</p>
            
            <h4 style="color: #F5B041;">Ansible Roles</h4>
            <p>Roles provide a structured way to organize playbooks, making them reusable and modular. A role typically contains tasks, handlers, variables, templates, and files organized in a standardized directory structure.</p>
            
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Role directory structure</span><br>
                roles/<br>
                &nbsp;&nbsp;network-config/<br>
                &nbsp;&nbsp;&nbsp;&nbsp;tasks/main.yml<br>
                &nbsp;&nbsp;&nbsp;&nbsp;handlers/main.yml<br>
                &nbsp;&nbsp;&nbsp;&nbsp;templates/config.j2<br>
                &nbsp;&nbsp;&nbsp;&nbsp;vars/main.yml<br>
                &nbsp;&nbsp;&nbsp;&nbsp;defaults/main.yml<br>
                &nbsp;&nbsp;&nbsp;&nbsp;files/
                </code>
            </div>
            
            <h4 style="color: #F5B041;">Variables and Templates</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Variables:</strong> Define dynamic values that can be reused across playbooks</li>
                    <li><strong>Templates:</strong> Use Jinja2 templating engine for dynamic configuration files</li>
                    <li><strong>Inventory Variables:</strong> Host-specific and group-specific variables</li>
                    <li><strong>Facts:</strong> Automatically gathered system information</li>
                </ul>
            </div>
            
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Variables example</span><br>
                <span style="color: #10b981;">vars:</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">vlan_id:</span> <span style="color: #3b82f6;">100</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">vlan_name:</span> <span style="color: #3b82f6;">"Sales"</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">interfaces:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #3b82f6;">GigabitEthernet0/1</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #3b82f6;">GigabitEthernet0/2</span><br><br>
                <span style="color: #6A9955;"># Jinja2 template example</span><br>
                <span style="color: #DCDCAA;">vlan {{ vlan_id }}</span><br>
                <span style="color: #DCDCAA;">name {{ vlan_name }}</span><br>
                <span style="color: #C586C0;">{% for interface in interfaces %}</span><br>
                <span style="color: #DCDCAA;">interface {{ interface }}</span><br>
                <span style="color: #DCDCAA;">switchport access vlan {{ vlan_id }}</span><br>
                <span style="color: #C586C0;">{% endfor %}</span>
                </code>
            </div>
            
            <h4 style="color: #F5B041;">Advanced Network Modules</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Module</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Purpose</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Example Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">ios_config</td>
                    <td style="border: 1px solid #444; padding: 8px;">Configure IOS devices</td>
                    <td style="border: 1px solid #444; padding: 8px;">VLAN, interface, routing config</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">ios_facts</td>
                    <td style="border: 1px solid #444; padding: 8px;">Gather device information</td>
                    <td style="border: 1px solid #444; padding: 8px;">Hardware, software, interface details</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">ios_command</td>
                    <td style="border: 1px solid #444; padding: 8px;">Execute show commands</td>
                    <td style="border: 1px solid #444; padding: 8px;">Verification and troubleshooting</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">ios_vlan</td>
                    <td style="border: 1px solid #444; padding: 8px;">Manage VLANs</td>
                    <td style="border: 1px solid #444; padding: 8px;">Create, modify, delete VLANs</td>
                </tr>
            </table>
            
            <h4 style="color: #F5B041;">Ansible Vault for Secrets</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Create encrypted vault file</span><br>
                <span style="color: #DCDCAA;">ansible-vault create secrets.yml</span><br><br>
                <span style="color: #6A9955;"># Use vault variables in playbook</span><br>
                <span style="color: #10b981;">tasks:</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">- name:</span> Configure device with encrypted password<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">ios_config:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">lines:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #3b82f6;">"username admin password {{ vault_admin_password }}"</span>
                </code>
            </div>
            
            <h4 style="color: #F5B041;">Error Handling and Conditionals</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>ignore_errors:</strong> Continue execution even if task fails</li>
                <li><strong>failed_when:</strong> Define custom failure conditions</li>
                <li><strong>when:</strong> Conditional task execution based on variables or facts</li>
                <li><strong>block/rescue:</strong> Exception handling for task groups</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand roles provide modular, reusable automation components</li>
                    <li>Know variables enable dynamic configuration across different environments</li>
                    <li>Recognize Jinja2 templates for dynamic configuration file generation</li>
                    <li>Understand Ansible Vault for secure credential management</li>
                </ul>
            </div>
        </div>
    `,

    "Puppet Enterprise Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">6.6: Puppet Enterprise Configuration</h3>
            <p>Puppet Enterprise provides declarative configuration management with a master-agent architecture, comprehensive reporting, and enterprise-grade orchestration capabilities for large-scale infrastructure automation.</p>
            
            <h4 style="color: #EC7063;">Puppet Architecture Components</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #E74C3C;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Puppet Master:</strong> Central server that stores configurations and serves them to agents</li>
                    <li><strong>Puppet Agent:</strong> Software installed on managed nodes that enforces configuration</li>
                    <li><strong>PuppetDB:</strong> Database storing configuration data, reports, and facts</li>
                    <li><strong>Puppet Console:</strong> Web-based GUI for management and reporting</li>
                    <li><strong>Certificate Authority:</strong> Manages SSL certificates for secure communication</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Puppet Manifests and Resources</h4>
            <p>Manifests are written in Puppet's declarative language and describe the desired state of resources. Resources are the fundamental building blocks representing system components.</p>
            
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Basic manifest example</span><br>
                <span style="color: #C586C0;">class</span> <span style="color: #DCDCAA;">network_config</span> {<br>
                &nbsp;&nbsp;<span style="color: #C586C0;">file</span> { <span style="color: #3b82f6;">'/etc/network/interfaces'</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">ensure</span>  => <span style="color: #3b82f6;">present</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">content</span> => <span style="color: #9CDCFE;">template</span>(<span style="color: #3b82f6;">'network/interfaces.erb'</span>),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">owner</span>   => <span style="color: #3b82f6;">'root'</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">group</span>   => <span style="color: #3b82f6;">'root'</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">mode</span>    => <span style="color: #3b82f6;">'0644'</span>,<br>
                &nbsp;&nbsp;}<br><br>
                &nbsp;&nbsp;<span style="color: #C586C0;">service</span> { <span style="color: #3b82f6;">'networking'</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">ensure</span>    => <span style="color: #3b82f6;">running</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">enable</span>    => <span style="color: #3b82f6;">true</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">subscribe</span> => <span style="color: #9CDCFE;">File</span>[<span style="color: #3b82f6;">'/etc/network/interfaces'</span>],<br>
                &nbsp;&nbsp;}<br>
                }
                </code>
            </div>
            
            <h4 style="color: #EC7063;">Puppet Modules and Forge</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Component</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Purpose</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Example</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Modules</td>
                    <td style="border: 1px solid #444; padding: 8px;">Self-contained bundles of code and data</td>
                    <td style="border: 1px solid #444; padding: 8px;">Apache, MySQL, network modules</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Forge</td>
                    <td style="border: 1px solid #444; padding: 8px;">Community repository of modules</td>
                    <td style="border: 1px solid #444; padding: 8px;">puppetlabs-stdlib, puppetlabs-firewall</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Metadata</td>
                    <td style="border: 1px solid #444; padding: 8px;">Module dependencies and versioning</td>
                    <td style="border: 1px solid #444; padding: 8px;">metadata.json file</td>
                </tr>
            </table>
            
            <h4 style="color: #EC7063;">Hiera Data Separation</h4>
            <p>Hiera provides a key-value lookup tool for configuration data, enabling separation of data from Puppet code and supporting environment-specific configurations.</p>
            
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># hiera.yaml configuration</span><br>
                <span style="color: #f59e0b;">---</span><br>
                <span style="color: #10b981;">version:</span> <span style="color: #3b82f6;">5</span><br>
                <span style="color: #10b981;">hierarchy:</span><br>
                &nbsp;&nbsp;- <span style="color: #10b981;">name:</span> <span style="color: #3b82f6;">"Per-node data"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">path:</span> <span style="color: #3b82f6;">"nodes/%{trusted.certname}.yaml"</span><br>
                &nbsp;&nbsp;- <span style="color: #10b981;">name:</span> <span style="color: #3b82f6;">"Per-environment data"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">path:</span> <span style="color: #3b82f6;">"environments/%{environment}.yaml"</span><br>
                &nbsp;&nbsp;- <span style="color: #10b981;">name:</span> <span style="color: #3b82f6;">"Common data"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">path:</span> <span style="color: #3b82f6;">"common.yaml"</span><br><br>
                <span style="color: #6A9955;"># Data file example</span><br>
                <span style="color: #10b981;">network_interfaces:</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">eth0:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">ip:</span> <span style="color: #3b82f6;">'192.168.1.100'</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">netmask:</span> <span style="color: #3b82f6;">'255.255.255.0'</span>
                </code>
            </div>
            
            <h4 style="color: #EC7063;">Enterprise Features</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions for different user roles</li>
                <li><strong>Orchestration:</strong> Coordinate changes across multiple systems in sequence</li>
                <li><strong>Code Manager:</strong> Git-based code deployment and environment management</li>
                <li><strong>Compliance Reporting:</strong> Detailed reports on configuration compliance and drift</li>
                <li><strong>Node Classification:</strong> Automatic assignment of classes and parameters to nodes</li>
            </ul>
            
            <h4 style="color: #EC7063;">Network Device Management</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Network device resource example</span><br>
                <span style="color: #C586C0;">cisco_interface</span> { <span style="color: #3b82f6;">'GigabitEthernet0/1'</span>:<br>
                &nbsp;&nbsp;<span style="color: #10b981;">ensure</span>      => <span style="color: #3b82f6;">present</span>,<br>
                &nbsp;&nbsp;<span style="color: #10b981;">description</span> => <span style="color: #3b82f6;">'Uplink to Core Switch'</span>,<br>
                &nbsp;&nbsp;<span style="color: #10b981;">shutdown</span>    => <span style="color: #3b82f6;">false</span>,<br>
                &nbsp;&nbsp;<span style="color: #10b981;">ipv4_address</span> => <span style="color: #3b82f6;">'192.168.1.1/24'</span>,<br>
                }<br><br>
                <span style="color: #C586C0;">cisco_vlan</span> { <span style="color: #3b82f6;">'100'</span>:<br>
                &nbsp;&nbsp;<span style="color: #10b981;">ensure</span>    => <span style="color: #3b82f6;">present</span>,<br>
                &nbsp;&nbsp;<span style="color: #10b981;">vlan_name</span> => <span style="color: #3b82f6;">'Sales'</span>,<br>
                &nbsp;&nbsp;<span style="color: #10b981;">state</span>     => <span style="color: #3b82f6;">'active'</span>,<br>
                }
                </code>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand Puppet uses a pull model with master-agent architecture</li>
                    <li>Know manifests define desired state using declarative language</li>
                    <li>Recognize Hiera separates data from code for flexibility</li>
                    <li>Understand enterprise features like RBAC, orchestration, and compliance</li>
                </ul>
            </div>
        </div>
    `,

    "GitOps & Version Control": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.6: GitOps & Version Control</h3>
            <p>GitOps is a paradigm that uses Git repositories as the single source of truth for infrastructure and application configurations, enabling automated deployments, peer review, and complete audit trails through version control.</p>
            
            <h4 style="color: #AF7AC5;">GitOps Core Principles</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Declarative:</strong> All infrastructure described declaratively in Git</li>
                    <li><strong>Versioned:</strong> Complete configuration history with Git commits</li>
                    <li><strong>Immutable:</strong> Changes made through Git workflow, not direct modification</li>
                    <li><strong>Pulled Automatically:</strong> Agents pull and apply configurations from Git</li>
                    <li><strong>Continuously Reconciled:</strong> Automatic drift detection and correction</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">GitOps Workflow</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Code Commit:</strong> Developer commits infrastructure changes to Git repository</li>
                <li><strong>Pull Request:</strong> Peer review process ensures quality and compliance</li>
                <li><strong>Merge to Main:</strong> Approved changes merged to main branch</li>
                <li><strong>CI/CD Trigger:</strong> Automated pipeline triggered by Git webhook</li>
                <li><strong>Deployment:</strong> Changes automatically deployed to target environment</li>
                <li><strong>Monitoring:</strong> Continuous monitoring for configuration drift</li>
            </ol>
            
            <h4 style="color: #AF7AC5;">Repository Structure</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Typical GitOps repository structure</span><br>
                infrastructure-config/<br>
                ├── <span style="color: #10b981;">environments/</span><br>
                │   ├── <span style="color: #f59e0b;">production/</span><br>
                │   │   ├── network-config.yaml<br>
                │   │   └── security-policies.yaml<br>
                │   ├── <span style="color: #f59e0b;">staging/</span><br>
                │   └── <span style="color: #f59e0b;">development/</span><br>
                ├── <span style="color: #10b981;">applications/</span><br>
                │   ├── monitoring/<br>
                │   └── logging/<br>
                ├── <span style="color: #10b981;">base-config/</span><br>
                │   ├── ansible-playbooks/<br>
                │   └── terraform-modules/<br>
                └── <span style="color: #3b82f6;">.github/workflows/</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;└── deploy.yml
                </code>
            </div>
            
            <h4 style="color: #AF7AC5;">CI/CD Pipeline Integration</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Stage</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Process</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Tools</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Validation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Syntax checking, linting, security scans</td>
                    <td style="border: 1px solid #444; padding: 8px;">ansible-lint, terraform validate</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Testing</td>
                    <td style="border: 1px solid #444; padding: 8px;">Automated testing in isolated environment</td>
                    <td style="border: 1px solid #444; padding: 8px;">Molecule, Kitchen, Terratest</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Deployment</td>
                    <td style="border: 1px solid #444; padding: 8px;">Apply configurations to target systems</td>
                    <td style="border: 1px solid #444; padding: 8px;">GitLab CI, GitHub Actions, Jenkins</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Monitoring</td>
                    <td style="border: 1px solid #444; padding: 8px;">Continuous monitoring and alerting</td>
                    <td style="border: 1px solid #444; padding: 8px;">ArgoCD, Flux, Prometheus</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">GitHub Actions Example</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># .github/workflows/deploy.yml</span><br>
                <span style="color: #10b981;">name:</span> <span style="color: #3b82f6;">Deploy Infrastructure</span><br>
                <span style="color: #10b981;">on:</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">push:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">branches:</span> [<span style="color: #3b82f6;">main</span>]<br><br>
                <span style="color: #10b981;">jobs:</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">deploy:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">runs-on:</span> <span style="color: #3b82f6;">ubuntu-latest</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">steps:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #10b981;">name:</span> <span style="color: #3b82f6;">Checkout code</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">uses:</span> <span style="color: #3b82f6;">actions/checkout@v3</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #10b981;">name:</span> <span style="color: #3b82f6;">Validate Ansible</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">run:</span> <span style="color: #DCDCAA;">ansible-lint playbooks/</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #10b981;">name:</span> <span style="color: #3b82f6;">Deploy to production</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">run:</span> <span style="color: #DCDCAA;">ansible-playbook -i inventory/prod deploy.yml</span>
                </code>
            </div>
            
            <h4 style="color: #AF7AC5;">Benefits of GitOps</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Auditability:</strong> Complete history of all infrastructure changes in Git</li>
                <li><strong>Rollback Capability:</strong> Easy rollback to any previous configuration state</li>
                <li><strong>Collaboration:</strong> Peer review process improves configuration quality</li>
                <li><strong>Consistency:</strong> Same workflow for all environments (dev, staging, prod)</li>
                <li><strong>Security:</strong> No direct access to production systems required</li>
                <li><strong>Compliance:</strong> Built-in approval processes and change documentation</li>
            </ul>
            
            <h4 style="color: #AF7AC5;">Drift Detection and Remediation</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Example drift detection script</span><br>
                <span style="color: #C586C0;">#!/bin/bash</span><br>
                <span style="color: #6A9955;"># Compare current state with desired state</span><br>
                <span style="color: #DCDCAA;">git pull origin main</span><br>
                <span style="color: #DCDCAA;">ansible-playbook --check --diff deploy.yml</span><br><br>
                <span style="color: #C586C0;">if</span> [ <span style="color: #3b82f6;">$?</span> <span style="color: #f59e0b;">-ne</span> <span style="color: #3b82f6;">0</span> ]; <span style="color: #C586C0;">then</span><br>
                &nbsp;&nbsp;<span style="color: #DCDCAA;">echo</span> <span style="color: #3b82f6;">"Configuration drift detected!"</span><br>
                &nbsp;&nbsp;<span style="color: #DCDCAA;">ansible-playbook deploy.yml</span><br>
                <span style="color: #C586C0;">fi</span>
                </code>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand GitOps uses Git as single source of truth for configurations</li>
                    <li>Know CI/CD pipelines enable automated testing and deployment</li>
                    <li>Recognize benefits: version control, peer review, audit trails, rollback capability</li>
                    <li>Understand drift detection ensures configurations remain consistent</li>
                </ul>
            </div>
        </div>
    `,

    "Configuration Security & Compliance": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">6.6: Configuration Security & Compliance</h3>
            <p>Security in configuration management involves protecting credentials, implementing access controls, ensuring compliance with policies, and maintaining audit trails for all configuration changes across the infrastructure.</p>
            
            <h4 style="color: #58D4FF;">Secrets Management</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Encryption at Rest:</strong> Store sensitive data encrypted in dedicated secret stores</li>
                    <li><strong>Encryption in Transit:</strong> Secure transmission of secrets to target systems</li>
                    <li><strong>Access Control:</strong> Role-based access to secrets with principle of least privilege</li>
                    <li><strong>Rotation:</strong> Automated credential rotation and lifecycle management</li>
                    <li><strong>Audit Logging:</strong> Complete audit trail of secret access and usage</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Secret Management Tools</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Tool</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Features</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Ansible Vault</td>
                    <td style="border: 1px solid #444; padding: 8px;">Encrypt variables and files</td>
                    <td style="border: 1px solid #444; padding: 8px;">Simple credential encryption in playbooks</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">HashiCorp Vault</td>
                    <td style="border: 1px solid #444; padding: 8px;">Dynamic secrets, policies, audit</td>
                    <td style="border: 1px solid #444; padding: 8px;">Enterprise secret management</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">CyberArk</td>
                    <td style="border: 1px solid #444; padding: 8px;">Privileged access management</td>
                    <td style="border: 1px solid #444; padding: 8px;">Critical infrastructure protection</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">AWS Secrets Manager</td>
                    <td style="border: 1px solid #444; padding: 8px;">Cloud-native secret storage</td>
                    <td style="border: 1px solid #444; padding: 8px;">AWS workload integration</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Ansible Vault Example</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Create encrypted vault file</span><br>
                <span style="color: #DCDCAA;">ansible-vault create group_vars/all/vault.yml</span><br><br>
                <span style="color: #6A9955;"># Content of vault.yml (encrypted)</span><br>
                <span style="color: #10b981;">vault_router_username:</span> <span style="color: #3b82f6;">admin</span><br>
                <span style="color: #10b981;">vault_router_password:</span> <span style="color: #3b82f6;">SecureP@ssw0rd</span><br>
                <span style="color: #10b981;">vault_snmp_community:</span> <span style="color: #3b82f6;">private123</span><br><br>
                <span style="color: #6A9955;"># Reference in playbook</span><br>
                <span style="color: #10b981;">vars:</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">router_username:</span> <span style="color: #3b82f6;">"{{ vault_router_username }}"</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">router_password:</span> <span style="color: #3b82f6;">"{{ vault_router_password }}"</span><br><br>
                <span style="color: #6A9955;"># Run with vault password</span><br>
                <span style="color: #DCDCAA;">ansible-playbook --ask-vault-pass site.yml</span>
                </code>
            </div>
            
            <h4 style="color: #58D4FF;">Access Control and RBAC</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Role-Based Access Control:</strong> Define roles with specific permissions and assign to users</li>
                <li><strong>Multi-Factor Authentication:</strong> Require additional authentication factors for sensitive operations</li>
                <li><strong>API Key Management:</strong> Secure generation, distribution, and rotation of API keys</li>
                <li><strong>Network Segmentation:</strong> Isolate configuration management systems from production networks</li>
                <li><strong>Sudo Policies:</strong> Granular control over privilege escalation</li>
            </ul>
            
            <h4 style="color: #58D4FF;">Compliance Automation</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Compliance check example with Ansible</span><br>
                <span style="color: #f59e0b;">---</span><br>
                <span style="color: #10b981;">- name:</span> Security compliance check<br>
                &nbsp;&nbsp;<span style="color: #10b981;">hosts:</span> network_devices<br>
                &nbsp;&nbsp;<span style="color: #10b981;">tasks:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">- name:</span> Check SSH timeout setting<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">ios_command:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">commands:</span> <span style="color: #3b82f6;">show run | include exec-timeout</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">register:</span> ssh_timeout<br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">- name:</span> Fail if timeout not set<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">fail:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">msg:</span> <span style="color: #3b82f6;">"SSH timeout not configured"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">when:</span> <span style="color: #3b82f6;">'exec-timeout' not in ssh_timeout.stdout[0]</span>
                </code>
            </div>
            
            <h4 style="color: #58D4FF;">Audit and Monitoring</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Component</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Purpose</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Implementation</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Change Logs</td>
                    <td style="border: 1px solid #444; padding: 8px;">Track all configuration changes</td>
                    <td style="border: 1px solid #444; padding: 8px;">Git commits, SIEM integration</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Access Logs</td>
                    <td style="border: 1px solid #444; padding: 8px;">Monitor user access and actions</td>
                    <td style="border: 1px solid #444; padding: 8px;">System logs, authentication events</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Compliance Reports</td>
                    <td style="border: 1px solid #444; padding: 8px;">Demonstrate regulatory compliance</td>
                    <td style="border: 1px solid #444; padding: 8px;">Automated reporting, dashboards</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Drift Detection</td>
                    <td style="border: 1px solid #444; padding: 8px;">Identify unauthorized changes</td>
                    <td style="border: 1px solid #444; padding: 8px;">Continuous monitoring, alerting</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Security Best Practices</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Principle of Least Privilege:</strong> Grant minimum necessary permissions</li>
                <li><strong>Separation of Duties:</strong> Require multiple approvals for critical changes</li>
                <li><strong>Secure Communication:</strong> Use encrypted channels (SSH, HTTPS, TLS)</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability scans</li>
                <li><strong>Incident Response:</strong> Procedures for security incident handling</li>
                <li><strong>Backup and Recovery:</strong> Secure configuration backups and tested recovery procedures</li>
            </ul>
            
            <h4 style="color: #58D4FF;">Compliance Frameworks</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>SOC 2:</strong> Security, availability, processing integrity controls</li>
                    <li><strong>PCI DSS:</strong> Payment card industry data security standards</li>
                    <li><strong>NIST Cybersecurity Framework:</strong> Risk-based cybersecurity guidance</li>
                    <li><strong>ISO 27001:</strong> Information security management systems</li>
                    <li><strong>HIPAA:</strong> Health information privacy and security requirements</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand importance of secrets management and encryption</li>
                    <li>Know role-based access control limits configuration access</li>
                    <li>Recognize compliance automation ensures policy adherence</li>
                    <li>Understand audit trails provide accountability and traceability</li>
                </ul>
            </div>
        </div>
    `,

    "Configuration Troubleshooting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.6: Configuration Troubleshooting</h3>
            <p>Troubleshooting configuration management involves systematic approaches to debug automation failures, detect configuration drift, implement rollback procedures, and resolve complex automation issues efficiently.</p>
            
            <h4 style="color: #58D68D;">Systematic Troubleshooting Approach</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ol style="margin-left: 20px;">
                    <li><strong>Problem Identification:</strong> Clearly define symptoms and affected systems</li>
                    <li><strong>Information Gathering:</strong> Collect logs, error messages, and system state</li>
                    <li><strong>Root Cause Analysis:</strong> Systematically eliminate potential causes</li>
                    <li><strong>Solution Implementation:</strong> Apply fixes with minimal impact</li>
                    <li><strong>Verification:</strong> Confirm resolution and prevent recurrence</li>
                    <li><strong>Documentation:</strong> Record findings and solutions for future reference</li>
                </ol>
            </div>
            
            <h4 style="color: #58D68D;">Ansible Debugging Techniques</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Verbose output for debugging</span><br>
                <span style="color: #DCDCAA;">ansible-playbook -vvv playbook.yml</span><br><br>
                <span style="color: #6A9955;"># Dry run to test without making changes</span><br>
                <span style="color: #DCDCAA;">ansible-playbook --check --diff playbook.yml</span><br><br>
                <span style="color: #6A9955;"># Start at specific task</span><br>
                <span style="color: #DCDCAA;">ansible-playbook --start-at-task="Configure VLAN" playbook.yml</span><br><br>
                <span style="color: #6A9955;"># Debug task to inspect variables</span><br>
                <span style="color: #10b981;">- name:</span> Debug interface facts<br>
                &nbsp;&nbsp;<span style="color: #10b981;">debug:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">var:</span> ansible_interfaces<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">verbosity:</span> <span style="color: #3b82f6;">2</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Configuration Drift Detection</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Tool</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Method</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Detection Approach</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Ansible</td>
                    <td style="border: 1px solid #444; padding: 8px;">Check mode with diff</td>
                    <td style="border: 1px solid #444; padding: 8px;">Compare current vs desired state</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Terraform</td>
                    <td style="border: 1px solid #444; padding: 8px;">Plan command</td>
                    <td style="border: 1px solid #444; padding: 8px;">State file comparison</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Puppet</td>
                    <td style="border: 1px solid #444; padding: 8px;">Noop mode</td>
                    <td style="border: 1px solid #444; padding: 8px;">Agent run simulation</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Custom Scripts</td>
                    <td style="border: 1px solid #444; padding: 8px;">Configuration polling</td>
                    <td style="border: 1px solid #444; padding: 8px;">Periodic compliance checks</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Error Handling and Recovery</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Error handling in Ansible</span><br>
                <span style="color: #10b981;">- name:</span> Configure interface with error handling<br>
                &nbsp;&nbsp;<span style="color: #10b981;">block:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">- name:</span> Apply interface configuration<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">ios_config:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">lines:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #3b82f6;">ip address 192.168.1.1 255.255.255.0</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #3b82f6;">no shutdown</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">parents:</span> <span style="color: #3b82f6;">interface GigabitEthernet0/1</span><br>
                &nbsp;&nbsp;<span style="color: #10b981;">rescue:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">- name:</span> Rollback configuration<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">ios_config:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">lines:</span> <span style="color: #3b82f6;">shutdown</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">parents:</span> <span style="color: #3b82f6;">interface GigabitEthernet0/1</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">- name:</span> Send alert<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">mail:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #10b981;">subject:</span> <span style="color: #3b82f6;">"Configuration Failed"</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Rollback Strategies</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Git-based Rollback:</strong> Revert to previous configuration commit and redeploy</li>
                <li><strong>Snapshot Rollback:</strong> Restore from pre-change configuration snapshots</li>
                <li><strong>Incremental Rollback:</strong> Reverse only specific failed changes</li>
                <li><strong>Blue-Green Deployment:</strong> Maintain parallel environments for safe rollback</li>
                <li><strong>Automated Rollback:</strong> Triggered rollback based on health checks</li>
            </ul>
            
            <h4 style="color: #58D68D;">Common Troubleshooting Scenarios</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D;">SSH Connection Issues:</h5>
                <ul style="margin-left: 20px;">
                    <li>Verify SSH credentials and key authentication</li>
                    <li>Check network connectivity and firewall rules</li>
                    <li>Validate SSH service status on target devices</li>
                    <li>Test SSH connection manually before automation</li>
                </ul>
                
                <h5 style="color: #58D68D;">Permission Errors:</h5>
                <ul style="margin-left: 20px;">
                    <li>Verify user privileges on target systems</li>
                    <li>Check sudo configuration and escalation methods</li>
                    <li>Validate API permissions for cloud resources</li>
                    <li>Review role-based access control settings</li>
                </ul>
                
                <h5 style="color: #58D68D;">Syntax and Logic Errors:</h5>
                <ul style="margin-left: 20px;">
                    <li>Use syntax validation tools (ansible-lint, terraform validate)</li>
                    <li>Test playbooks in isolated environments</li>
                    <li>Validate variable interpolation and templating</li>
                    <li>Check conditional logic and loop constructs</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Monitoring and Alerting</h4>
            <div style="background-color: #2d2d2d; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; margin: 10px 0;">
                <code style="color: #e2e8f0;">
                <span style="color: #6A9955;"># Monitoring script example</span><br>
                <span style="color: #C586C0;">#!/bin/bash</span><br>
                <span style="color: #6A9955;"># Monitor automation job status</span><br>
                <span style="color: #DCDCAA;">LOG_FILE="/var/log/ansible.log"</span><br>
                <span style="color: #DCDCAA;">ERROR_COUNT=$(grep -c "ERROR" $LOG_FILE)</span><br><br>
                <span style="color: #C586C0;">if</span> [ <span style="color: #3b82f6;">$ERROR_COUNT</span> <span style="color: #f59e0b;">-gt</span> <span style="color: #3b82f6;">0</span> ]; <span style="color: #C586C0;">then</span><br>
                &nbsp;&nbsp;<span style="color: #DCDCAA;">echo</span> <span style="color: #3b82f6;">"Configuration errors detected: $ERROR_COUNT"</span><br>
                &nbsp;&nbsp;<span style="color: #DCDCAA;">curl -X POST -H 'Content-type: application/json' \</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #DCDCAA;">--data '{"text":"Ansible errors detected"}' \</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #DCDCAA;">$SLACK_WEBHOOK_URL</span><br>
                <span style="color: #C586C0;">fi</span>
                </code>
            </div>
            
            <h4 style="color: #58D68D;">Documentation and Knowledge Management</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Runbooks:</strong> Step-by-step troubleshooting procedures for common issues</li>
                <li><strong>Error Catalogs:</strong> Database of known errors and their solutions</li>
                <li><strong>Change Logs:</strong> Complete history of configuration changes and outcomes</li>
                <li><strong>Lessons Learned:</strong> Post-incident reviews and improvement recommendations</li>
                <li><strong>Contact Lists:</strong> Escalation procedures and expert contact information</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand systematic approach to troubleshooting automation issues</li>
                    <li>Know debugging tools: verbose output, dry run, check mode</li>
                    <li>Recognize configuration drift detection and remediation methods</li>
                    <li>Understand rollback strategies for failed configuration changes</li>
                </ul>
            </div>
        </div>
    `,

    "Configuration Management Comparison": `
        <div style="font-family: 'Inter', sans-serif; color: #2ECC71;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.6: Configuration Management Tool Comparison</h3>
            <p>Different configuration management tools use various approaches and architectures. Understanding their differences helps network engineers choose the right tool for specific use cases and organizational requirements.</p>
            
            <h4 style="color: #58D68D;">Push vs Pull Models</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <h5 style="color: #58D68D;">Push Model (Ansible):</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>Control:</strong> Central server pushes configurations to targets</li>
                    <li><strong>Timing:</strong> Configurations applied immediately when triggered</li>
                    <li><strong>Scalability:</strong> Limited by control server capacity</li>
                    <li><strong>Security:</strong> Outbound connections from control server</li>
                </ul>
                
                <h5 style="color: #58D68D;">Pull Model (Puppet, Chef):</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>Control:</strong> Agents on targets pull configurations from server</li>
                    <li><strong>Timing:</strong> Periodic checks and updates (every 30 minutes)</li>
                    <li><strong>Scalability:</strong> Better for large-scale deployments</li>
                    <li><strong>Security:</strong> Inbound connections to master server</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Tool Comparison Matrix</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Tool</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Language</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Architecture</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Best For</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;"><strong>Ansible</strong></td>
                    <td style="border: 1px solid #444; padding: 8px;">YAML</td>
                    <td style="border: 1px solid #444; padding: 8px;">Agentless, SSH</td>
                    <td style="border: 1px solid #444; padding: 8px;">Network devices, quick deployments</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;"><strong>Puppet</strong></td>
                    <td style="border: 1px solid #444; padding: 8px;">Puppet DSL</td>
                    <td style="border: 1px solid #444; padding: 8px;">Agent-based, Pull</td>
                    <td style="border: 1px solid #444; padding: 8px;">Large server environments</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;"><strong>Chef</strong></td>
                    <td style="border: 1px solid #444; padding: 8px;">Ruby</td>
                    <td style="border: 1px solid #444; padding: 8px;">Agent-based, Pull</td>
                    <td style="border: 1px solid #444; padding: 8px;">Complex application deployments</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;"><strong>Terraform</strong></td>
                    <td style="border: 1px solid #444; padding: 8px;">HCL</td>
                    <td style="border: 1px solid #444; padding: 8px;">API-based</td>
                    <td style="border: 1px solid #444; padding: 8px;">Infrastructure provisioning</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Choosing the Right Tool</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Network Devices:</strong> Ansible (agentless, works with existing SSH)</li>
                <li><strong>Server Configuration:</strong> Puppet or Chef (mature agent ecosystem)</li>
                <li><strong>Cloud Infrastructure:</strong> Terraform (multi-provider support)</li>
                <li><strong>Hybrid Environments:</strong> Combination of tools for different layers</li>
                <li><strong>Team Skills:</strong> Consider existing team expertise and learning curve</li>
            </ul>
            
            <h4 style="color: #58D68D;">Configuration Management Benefits</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Consistency:</strong> Ensure all systems follow the same configuration standards</li>
                <li><strong>Automation:</strong> Reduce manual configuration errors and save time</li>
                <li><strong>Version Control:</strong> Track changes and rollback when needed</li>
                <li><strong>Compliance:</strong> Enforce security policies and regulatory requirements</li>
                <li><strong>Documentation:</strong> Configuration files serve as living documentation</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand push vs pull models and their trade-offs</li>
                    <li>Know when to use different tools: Ansible for networks, Terraform for infrastructure</li>
                    <li>Recognize benefits: consistency, automation, version control, compliance</li>
                    <li>Understand agent vs agentless architectures</li>
                </ul>
            </div>
        </div>
    `,

    // Existing content continues...
    "Cisco DNA Center": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">6.4: Traditional vs. Cisco DNA Center Management</h3>
            <p>Cisco DNA Center is a specific implementation of a controller-based network for campus environments.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Traditional Management:</strong> Involves logging into each switch via CLI to configure VLANs, ACLs, QoS, etc. It's manual, inconsistent, and requires deep knowledge of device-specific commands.</li>
                <li><strong>DNA Center Management:</strong> Provides a centralized GUI to manage the entire campus network.
                    <ul>
                        <li><strong>Design:</strong> Define network hierarchy and IP address schemes.</li>
                        <li><strong>Policy:</strong> Create group-based access policies in plain language.</li>
                        <li><strong>Provision:</strong> DNA Center automatically generates device configurations and pushes them to the hardware.</li>
                        <li><strong>Assurance:</strong> Provides health monitoring, analytics, and troubleshooting for the entire network.</li>
                    </ul>
                </li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    // 6.5 REST-based APIs
    "REST-based APIs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.5: Characteristics of REST-based APIs</h3>
            <p><strong>REST (Representational State Transfer)</strong> is not a protocol, but an architectural style for designing networked applications. It's the most common method for APIs on the web and in network automation.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>CRUD Operations & HTTP Verbs:</strong> REST maps common database operations (CRUD) to standard HTTP methods.
                    <ul>
                        <li><strong>C</strong>reate -> <strong>POST</strong></li>
                        <li><strong>R</strong>ead -> <strong>GET</strong></li>
                        <li><strong>U</strong>pdate -> <strong>PUT / PATCH</strong></li>
                        <li><strong>D</strong>elete -> <strong>DELETE</strong></li>
                    </ul>
                </li>
                <li><strong>Stateless:</strong> Each API request from a client to a server must contain all the information needed to understand and complete the request. The server does not store any client context between requests.</li>
                <li><strong>Data Encoding:</strong> The format of the data sent in an API request/response. While XML and others can be used, <strong>JSON</strong> is by far the most common format used with REST APIs today.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,
    
        // 6.6 Configuration Management Tools
    "Config Tools": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">6.6: Configuration Management Mechanisms</h3>
            <p>These tools automate the process of configuring and maintaining systems and software in a consistent, repeatable state.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Ansible:</strong> Agentless, using SSH to connect to devices. It uses a "push" model where a control node pushes configurations out. Configurations are written in YAML files called "playbooks." It is very popular in network automation due to its simplicity.</li>
                <li><strong>Puppet:</strong> Agent-based, using a "pull" model. An agent on each device periodically checks in with a master server and "pulls" its required configuration. It uses a declarative, model-driven language.</li>
                <li><strong>Chef:</strong> Also agent-based with a "pull" model. It uses "recipes" and "cookbooks" written in Ruby to define configurations. It is generally considered more procedural than Puppet.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #58D68D; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    // 6.7 JSON Components
    "JSON Syntax & Structure": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.7.a: JSON Syntax & Structure</h3>
            <p>JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format that's easy for humans to read and write. Understanding JSON syntax is crucial for modern network automation and API interactions.</p>
            
            <h4 style="color: #AF7AC5;">Core JSON Syntax Rules</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Rule</td><td style="padding: 8px; border-bottom: 1px solid #444;">Description</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Objects</td><td style="padding: 8px; border-bottom: 1px solid #444;">Enclosed in curly braces { }, contain key-value pairs</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Arrays</td><td style="padding: 8px; border-bottom: 1px solid #444;">Enclosed in square brackets [ ], contain ordered list of values</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Keys</td><td style="padding: 8px; border-bottom: 1px solid #444;">Always strings, must be enclosed in double quotes</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Strings</td><td style="padding: 8px; border-bottom: 1px solid #444;">Must be enclosed in double quotes (not single quotes)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">No Comments</td><td style="padding: 8px; border-bottom: 1px solid #444;">JSON does not support comments or trailing commas</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">Basic JSON Structure Example</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
{
  <span style="color: #CE9178;">"device"</span>: {
    <span style="color: #CE9178;">"hostname"</span>: <span style="color: #CE9178;">"Router1"</span>,
    <span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"router"</span>,
    <span style="color: #CE9178;">"management_ip"</span>: <span style="color: #CE9178;">"192.168.1.1"</span>,
    <span style="color: #CE9178;">"is_online"</span>: <span style="color: #569CD6;">true</span>,
    <span style="color: #CE9178;">"port_count"</span>: <span style="color: #B5CEA8;">24</span>,
    <span style="color: #CE9178;">"software_version"</span>: <span style="color: #569CD6;">null</span>,
    <span style="color: #CE9178;">"interfaces"</span>: [
      <span style="color: #CE9178;">"GigabitEthernet0/1"</span>,
      <span style="color: #CE9178;">"GigabitEthernet0/2"</span>,
      <span style="color: #CE9178;">"Serial0/0/0"</span>
    ]
  }
}
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">JSON Validation Requirements</h4>
            <ul style="margin-left: 20px; color: #E0E0E0;">
                <li><strong>Proper Escaping:</strong> Special characters in strings must be escaped with backslash</li>
                <li><strong>Balanced Brackets:</strong> Every opening brace/bracket must have a closing match</li>
                <li><strong>Comma Usage:</strong> No trailing commas allowed after last element</li>
                <li><strong>Case Sensitivity:</strong> true/false/null must be lowercase</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand JSON is human-readable and lightweight compared to XML</li>
                    <li>Recognize proper JSON syntax with objects, arrays, and key-value pairs</li>
                    <li>Know that JSON keys must always be strings in double quotes</li>
                    <li>Identify valid vs invalid JSON structures in exam scenarios</li>
                </ul>
            </div>
        </div>
    `,

    "JSON Data Types": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.7.b: JSON Data Types</h3>
            <p>JSON supports exactly six data types, each with specific syntax rules and use cases in network automation. Understanding these types is essential for API interactions and configuration management.</p>
            
            <h4 style="color: #AF7AC5;">The Six JSON Data Types</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Data Type</td><td style="padding: 8px; border-bottom: 1px solid #444;">Description</td><td style="padding: 8px; border-bottom: 1px solid #444;">Example</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6;">String</td><td style="padding: 8px; border-bottom: 1px solid #444;">Text data in double quotes</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">"Router1"</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981;">Number</td><td style="padding: 8px; border-bottom: 1px solid #444;">Integer or floating point</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">42, 3.14, -17</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b;">Boolean</td><td style="padding: 8px; border-bottom: 1px solid #444;">True or false value</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">true, false</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #6b7280;">Null</td><td style="padding: 8px; border-bottom: 1px solid #444;">Represents no value</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">null</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6;">Object</td><td style="padding: 8px; border-bottom: 1px solid #444;">Collection of key-value pairs</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">{"key": "value"}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444;">Array</td><td style="padding: 8px; border-bottom: 1px solid #444;">Ordered list of values</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">[1, 2, 3]</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">Network Device JSON Example</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
{
  <span style="color: #CE9178;">"device_info"</span>: {
    <span style="color: #CE9178;">"hostname"</span>: <span style="color: #CE9178;">"SW1"</span>,                    <span style="color: #6A9955;">// String type</span>
    <span style="color: #CE9178;">"vlan_count"</span>: <span style="color: #B5CEA8;">10</span>,                      <span style="color: #6A9955;">// Number type</span>
    <span style="color: #CE9178;">"spanning_tree_enabled"</span>: <span style="color: #569CD6;">true</span>,       <span style="color: #6A9955;">// Boolean type</span>
    <span style="color: #CE9178;">"description"</span>: <span style="color: #569CD6;">null</span>,                  <span style="color: #6A9955;">// Null type</span>
    <span style="color: #CE9178;">"management"</span>: {                         <span style="color: #6A9955;">// Object type</span>
      <span style="color: #CE9178;">"ip_address"</span>: <span style="color: #CE9178;">"192.168.1.100"</span>,
      <span style="color: #CE9178;">"gateway"</span>: <span style="color: #CE9178;">"192.168.1.1"</span>
    },
    <span style="color: #CE9178;">"vlans"</span>: [<span style="color: #B5CEA8;">1</span>, <span style="color: #B5CEA8;">10</span>, <span style="color: #B5CEA8;">20</span>, <span style="color: #B5CEA8;">30</span>]          <span style="color: #6A9955;">// Array type</span>
  }
}
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Data Type Usage in Network APIs</h4>
            <ul style="margin-left: 20px; color: #E0E0E0;">
                <li><strong>Strings:</strong> Hostnames, IP addresses, interface names, descriptions</li>
                <li><strong>Numbers:</strong> Port numbers, VLAN IDs, metric values, timeouts</li>
                <li><strong>Booleans:</strong> Feature enable/disable states, port up/down status</li>
                <li><strong>Null:</strong> Unset optional fields, missing configuration values</li>
                <li><strong>Objects:</strong> Complex configurations, nested device properties</li>
                <li><strong>Arrays:</strong> Interface lists, multiple IP addresses, route tables</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know all six JSON data types and their syntax</li>
                    <li>Understand that JSON is case-sensitive (true/false/null lowercase)</li>
                    <li>Recognize that strings must use double quotes, not single quotes</li>
                    <li>Know JSON does not support comments or undefined values</li>
                </ul>
            </div>
        </div>
    `,

    "Network JSON Examples": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.7.c: Network JSON Examples</h3>
            <p>JSON is extensively used throughout network automation, from device configuration APIs to monitoring data and orchestration scripts. Understanding common JSON patterns in networking contexts is crucial for CCNA candidates.</p>
            
            <h4 style="color: #AF7AC5;">REST API Device Information</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">// GET /api/v1/devices/router1 Response</span>
{
  <span style="color: #CE9178;">"device"</span>: {
    <span style="color: #CE9178;">"id"</span>: <span style="color: #CE9178;">"rtr-001"</span>,
    <span style="color: #CE9178;">"hostname"</span>: <span style="color: #CE9178;">"Router1"</span>,
    <span style="color: #CE9178;">"model"</span>: <span style="color: #CE9178;">"ISR4321"</span>,
    <span style="color: #CE9178;">"ios_version"</span>: <span style="color: #CE9178;">"16.12.03"</span>,
    <span style="color: #CE9178;">"uptime_seconds"</span>: <span style="color: #B5CEA8;">2592000</span>,
    <span style="color: #CE9178;">"management_ip"</span>: <span style="color: #CE9178;">"192.168.100.1"</span>,
    <span style="color: #CE9178;">"status"</span>: <span style="color: #CE9178;">"online"</span>,
    <span style="color: #CE9178;">"location"</span>: {
      <span style="color: #CE9178;">"site"</span>: <span style="color: #CE9178;">"HQ"</span>,
      <span style="color: #CE9178;">"rack"</span>: <span style="color: #CE9178;">"A1"</span>,
      <span style="color: #CE9178;">"position"</span>: <span style="color: #B5CEA8;">42</span>
    }
  }
}
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Interface Configuration JSON</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">// POST /api/v1/interfaces - Configure Interface</span>
{
  <span style="color: #CE9178;">"interface"</span>: {
    <span style="color: #CE9178;">"name"</span>: <span style="color: #CE9178;">"GigabitEthernet0/1"</span>,
    <span style="color: #CE9178;">"description"</span>: <span style="color: #CE9178;">"Link to Core Switch"</span>,
    <span style="color: #CE9178;">"enabled"</span>: <span style="color: #569CD6;">true</span>,
    <span style="color: #CE9178;">"ip_config"</span>: {
      <span style="color: #CE9178;">"address"</span>: <span style="color: #CE9178;">"10.1.1.1"</span>,
      <span style="color: #CE9178;">"subnet_mask"</span>: <span style="color: #CE9178;">"255.255.255.0"</span>,
      <span style="color: #CE9178;">"dhcp_enabled"</span>: <span style="color: #569CD6;">false</span>
    },
    <span style="color: #CE9178;">"security"</span>: {
      <span style="color: #CE9178;">"access_list"</span>: <span style="color: #CE9178;">"MGMT_ACL"</span>,
      <span style="color: #CE9178;">"port_security"</span>: <span style="color: #569CD6;">true</span>,
      <span style="color: #CE9178;">"max_mac_addresses"</span>: <span style="color: #B5CEA8;">2</span>
    }
  }
}
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Network Monitoring Data</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">// GET /api/v1/monitoring/health Response</span>
{
  <span style="color: #CE9178;">"timestamp"</span>: <span style="color: #CE9178;">"2024-03-15T10:30:00Z"</span>,
  <span style="color: #CE9178;">"network_health"</span>: {
    <span style="color: #CE9178;">"overall_status"</span>: <span style="color: #CE9178;">"healthy"</span>,
    <span style="color: #CE9178;">"devices_total"</span>: <span style="color: #B5CEA8;">25</span>,
    <span style="color: #CE9178;">"devices_online"</span>: <span style="color: #B5CEA8;">24</span>,
    <span style="color: #CE9178;">"alerts"</span>: [
      {
        <span style="color: #CE9178;">"severity"</span>: <span style="color: #CE9178;">"warning"</span>,
        <span style="color: #CE9178;">"device"</span>: <span style="color: #CE9178;">"Switch2"</span>,
        <span style="color: #CE9178;">"message"</span>: <span style="color: #CE9178;">"High CPU usage: 85%"</span>,
        <span style="color: #CE9178;">"interface"</span>: <span style="color: #569CD6;">null</span>
      }
    ],
    <span style="color: #CE9178;">"bandwidth_utilization"</span>: {
      <span style="color: #CE9178;">"wan_link_1"</span>: <span style="color: #B5CEA8;">65.2</span>,
      <span style="color: #CE9178;">"wan_link_2"</span>: <span style="color: #B5CEA8;">23.8</span>
    }
  }
}
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Common JSON Patterns in Networking</h4>
            <ul style="margin-left: 20px; color: #E0E0E0;">
                <li><strong>Nested Objects:</strong> Complex configurations with hierarchical data</li>
                <li><strong>Arrays of Objects:</strong> Multiple interfaces, VLANs, or routes</li>
                <li><strong>Mixed Data Types:</strong> Combining strings, numbers, and booleans</li>
                <li><strong>Null Values:</strong> Optional or unset configuration parameters</li>
                <li><strong>Timestamps:</strong> ISO 8601 format for logging and monitoring</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand JSON is the primary format for REST API communications</li>
                    <li>Recognize common network data structures in JSON format</li>
                    <li>Know JSON is used in RESTCONF, NETCONF, and modern NMS systems</li>
                    <li>Identify proper JSON formatting for device configuration data</li>
                </ul>
            </div>
        </div>
    `,

    "JSON vs XML Comparison": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.7.d: JSON vs XML Comparison</h3>
            <p>While XML was the traditional standard for data exchange in network management, JSON has become the preferred format for modern network automation due to its simplicity, efficiency, and native web support.</p>
            
            <h4 style="color: #AF7AC5;">Format Comparison Example</h4>
            <div style="display: flex; gap: 20px; margin: 15px 0;">
                <div style="flex: 1;">
                    <h5 style="color: #10b981; margin-bottom: 10px;">JSON Format</h5>
                    <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.8em;">
<code style="color: #9CDCFE;">
{
  <span style="color: #CE9178;">"device"</span>: {
    <span style="color: #CE9178;">"hostname"</span>: <span style="color: #CE9178;">"Router1"</span>,
    <span style="color: #CE9178;">"ip"</span>: <span style="color: #CE9178;">"192.168.1.1"</span>,
    <span style="color: #CE9178;">"status"</span>: <span style="color: #CE9178;">"online"</span>,
    <span style="color: #CE9178;">"interfaces"</span>: [
      <span style="color: #CE9178;">"Gi0/1"</span>, <span style="color: #CE9178;">"Gi0/2"</span>
    ]
  }
}
</code>
                    </pre>
                    <p style="font-size: 0.9em; color: #10b981;">✓ 156 characters</p>
                </div>
                <div style="flex: 1;">
                    <h5 style="color: #f59e0b; margin-bottom: 10px;">XML Format</h5>
                    <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.8em;">
<code style="color: #9CDCFE;">
<span style="color: #86EFAC;">&lt;device&gt;</span>
  <span style="color: #86EFAC;">&lt;hostname&gt;</span>Router1<span style="color: #86EFAC;">&lt;/hostname&gt;</span>
  <span style="color: #86EFAC;">&lt;ip&gt;</span>192.168.1.1<span style="color: #86EFAC;">&lt;/ip&gt;</span>
  <span style="color: #86EFAC;">&lt;status&gt;</span>online<span style="color: #86EFAC;">&lt;/status&gt;</span>
  <span style="color: #86EFAC;">&lt;interfaces&gt;</span>
    <span style="color: #86EFAC;">&lt;interface&gt;</span>Gi0/1<span style="color: #86EFAC;">&lt;/interface&gt;</span>
    <span style="color: #86EFAC;">&lt;interface&gt;</span>Gi0/2<span style="color: #86EFAC;">&lt;/interface&gt;</span>
  <span style="color: #86EFAC;">&lt;/interfaces&gt;</span>
<span style="color: #86EFAC;">&lt;/device&gt;</span>
</code>
                    </pre>
                    <p style="font-size: 0.9em; color: #f59e0b;">⚠ 289 characters</p>
                </div>
            </div>
            
            <h4 style="color: #AF7AC5;">Detailed Comparison</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Aspect</td><td style="padding: 8px; border-bottom: 1px solid #444;">JSON</td><td style="padding: 8px; border-bottom: 1px solid #444;">XML</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">File Size</td><td style="padding: 8px; border-bottom: 1px solid #444;">Smaller (30-50% less)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Larger due to verbose tags</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Parsing Speed</td><td style="padding: 8px; border-bottom: 1px solid #444;">Faster, especially in web apps</td><td style="padding: 8px; border-bottom: 1px solid #444;">Slower, requires more processing</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Human Readability</td><td style="padding: 8px; border-bottom: 1px solid #444;">More readable and concise</td><td style="padding: 8px; border-bottom: 1px solid #444;">Verbose but self-documenting</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Data Types</td><td style="padding: 8px; border-bottom: 1px solid #444;">Native support for arrays, objects</td><td style="padding: 8px; border-bottom: 1px solid #444;">Everything is text-based</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Schema Validation</td><td style="padding: 8px; border-bottom: 1px solid #444;">JSON Schema available</td><td style="padding: 8px; border-bottom: 1px solid #444;">XML Schema (XSD) mature</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Comments</td><td style="padding: 8px; border-bottom: 1px solid #444;">Not supported</td><td style="padding: 8px; border-bottom: 1px solid #444;">Supports comments</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9B59B6;">Namespaces</td><td style="padding: 8px; border-bottom: 1px solid #444;">Not supported</td><td style="padding: 8px; border-bottom: 1px solid #444;">Full namespace support</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">Network Industry Adoption</h4>
            <ul style="margin-left: 20px; color: #E0E0E0;">
                <li><strong>JSON Dominance:</strong> REST APIs, RESTCONF, modern NMS platforms, SDN controllers</li>
                <li><strong>XML Still Used:</strong> NETCONF, SOAP APIs, legacy network management systems</li>
                <li><strong>API Evolution:</strong> Most new network APIs default to JSON format</li>
                <li><strong>Performance Impact:</strong> JSON's efficiency matters in high-frequency API calls</li>
            </ul>
            
            <h4 style="color: #AF7AC5;">When to Use Each Format</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <h5 style="color: #10b981; margin-bottom: 10px;">Choose JSON When:</h5>
                <ul style="margin-left: 20px;">
                    <li>Building modern REST APIs</li>
                    <li>Web-based network management applications</li>
                    <li>High-performance, frequent API calls</li>
                    <li>Simple data structures without complex validation</li>
                </ul>
            </div>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <h5 style="color: #f59e0b; margin-bottom: 10px;">Choose XML When:</h5>
                <ul style="margin-left: 20px;">
                    <li>Working with NETCONF protocols</li>
                    <li>Complex data validation requirements</li>
                    <li>Legacy system integration needs</li>
                    <li>Document-centric applications with metadata</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand JSON is preferred for modern network automation</li>
                    <li>Know JSON is more efficient and lightweight than XML</li>
                    <li>Recognize both formats may be encountered in enterprise networks</li>
                    <li>Understand JSON's role in REST APIs vs XML's role in NETCONF</li>
                </ul>
            </div>
        </div>
    `,

    "JSON Parsing & Validation": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.7.e: JSON Parsing & Validation</h3>
            <p>Proper JSON parsing and validation are critical skills for network automation. Understanding common errors, debugging techniques, and validation tools helps ensure reliable network automation scripts and API interactions.</p>
            
            <h4 style="color: #AF7AC5;">Common JSON Parsing Errors</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Error Type</td><td style="padding: 8px; border-bottom: 1px solid #444;">Description</td><td style="padding: 8px; border-bottom: 1px solid #444;">Example</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444;">Missing Quotes</td><td style="padding: 8px; border-bottom: 1px solid #444;">Keys or strings without quotes</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">{hostname: "R1"}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444;">Trailing Comma</td><td style="padding: 8px; border-bottom: 1px solid #444;">Extra comma after last element</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">{"ip": "1.1.1.1",}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444;">Single Quotes</td><td style="padding: 8px; border-bottom: 1px solid #444;">Using single instead of double quotes</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">{'name': 'router'}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444;">Unescaped Characters</td><td style="padding: 8px; border-bottom: 1px solid #444;">Special chars not properly escaped</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">{"path": "C:\folder"}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444;">Mismatched Brackets</td><td style="padding: 8px; border-bottom: 1px solid #444;">Unbalanced { } or [ ]</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">{"data": [1, 2}</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">JSON Validation Tools</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <h5 style="color: #10b981; margin-bottom: 10px;">Online Validators:</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>JSONLint:</strong> Web-based JSON validator with detailed error messages</li>
                    <li><strong>JSON Formatter:</strong> Validates and formats JSON with syntax highlighting</li>
                    <li><strong>JSON Schema Validator:</strong> Validates JSON against defined schemas</li>
                </ul>
            </div>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <h5 style="color: #3b82f6; margin-bottom: 10px;">Command Line Tools:</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>jq:</strong> Command-line JSON processor for parsing and manipulation</li>
                    <li><strong>Python json.loads():</strong> Built-in Python JSON parsing with error handling</li>
                    <li><strong>curl + jq:</strong> API testing with JSON validation pipeline</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Python JSON Debugging Example</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #C586C0;">import</span> <span style="color: #9CDCFE;">json</span>

<span style="color: #6A9955;"># Safe JSON parsing with error handling</span>
<span style="color: #C586C0;">def</span> <span style="color: #DCDCAA;">safe_json_parse</span>(json_string):
    <span style="color: #C586C0;">try</span>:
        data = json.<span style="color: #DCDCAA;">loads</span>(json_string)
        <span style="color: #C586C0;">return</span> data, <span style="color: #569CD6;">None</span>
    <span style="color: #C586C0;">except</span> json.<span style="color: #4EC9B0;">JSONDecodeError</span> <span style="color: #C586C0;">as</span> e:
        error_msg = <span style="color: #CE9178;">f"JSON Error: {e.msg} at line {e.lineno}, column {e.colno}"</span>
        <span style="color: #C586C0;">return</span> <span style="color: #569CD6;">None</span>, error_msg

<span style="color: #6A9955;"># Example usage</span>
device_config = <span style="color: #CE9178;">'''{"hostname": "Router1", "interfaces": []}'''</span>
result, error = <span style="color: #DCDCAA;">safe_json_parse</span>(device_config)

<span style="color: #C586C0;">if</span> error:
    <span style="color: #DCDCAA;">print</span>(<span style="color: #CE9178;">f"Validation failed: {error}"</span>)
<span style="color: #C586C0;">else</span>:
    <span style="color: #DCDCAA;">print</span>(<span style="color: #CE9178;">f"Valid JSON: {result['hostname']}"</span>)
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Network Automation JSON Validation</h4>
            <ul style="margin-left: 20px; color: #E0E0E0;">
                <li><strong>Pre-deployment:</strong> Validate configuration templates before applying</li>
                <li><strong>API Responses:</strong> Check API response format before processing</li>
                <li><strong>Configuration Files:</strong> Validate JSON config files in automation tools</li>
                <li><strong>Monitoring Data:</strong> Ensure telemetry data is properly formatted</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Recognize common JSON syntax errors and their causes</li>
                    <li>Understand importance of JSON validation in network automation</li>
                    <li>Know basic validation tools: JSONLint, jq, Python json module</li>
                    <li>Identify invalid JSON structures in exam scenarios</li>
                </ul>
            </div>
        </div>
    `,

    "JSON in Network Automation": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.7.f: JSON in Network Automation</h3>
            <p>JSON is the backbone of modern network automation, serving as the primary data format for configuration templates, API interactions, and orchestration workflows. Understanding practical JSON usage is essential for network engineers working with automation tools.</p>
            
            <h4 style="color: #AF7AC5;">Ansible with JSON Variables</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># group_vars/routers.json</span>
{
  <span style="color: #CE9178;">"router_config"</span>: {
    <span style="color: #CE9178;">"ospf"</span>: {
      <span style="color: #CE9178;">"process_id"</span>: <span style="color: #B5CEA8;">1</span>,
      <span style="color: #CE9178;">"router_id"</span>: <span style="color: #CE9178;">"1.1.1.1"</span>,
      <span style="color: #CE9178;">"networks"</span>: [
        {<span style="color: #CE9178;">"network"</span>: <span style="color: #CE9178;">"10.1.0.0"</span>, <span style="color: #CE9178;">"wildcard"</span>: <span style="color: #CE9178;">"0.0.255.255"</span>, <span style="color: #CE9178;">"area"</span>: <span style="color: #B5CEA8;">0</span>},
        {<span style="color: #CE9178;">"network"</span>: <span style="color: #CE9178;">"192.168.1.0"</span>, <span style="color: #CE9178;">"wildcard"</span>: <span style="color: #CE9178;">"0.0.0.255"</span>, <span style="color: #CE9178;">"area"</span>: <span style="color: #B5CEA8;">0</span>}
      ]
    }
  }
}

<span style="color: #6A9955;"># Playbook using JSON data</span>
- name: Configure OSPF
  cisco.ios.ios_config:
    lines:
      - <span style="color: #CE9178;">"router ospf {{ router_config.ospf.process_id }}"</span>
      - <span style="color: #CE9178;">"router-id {{ router_config.ospf.router_id }}"</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Python Network Scripts with JSON</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #C586C0;">import</span> <span style="color: #9CDCFE;">json</span>
<span style="color: #C586C0;">import</span> <span style="color: #9CDCFE;">requests</span>

<span style="color: #6A9955;"># Load device inventory from JSON</span>
<span style="color: #C586C0;">with</span> <span style="color: #DCDCAA;">open</span>(<span style="color: #CE9178;">'devices.json'</span>, <span style="color: #CE9178;">'r'</span>) <span style="color: #C586C0;">as</span> f:
    devices = json.<span style="color: #DCDCAA;">load</span>(f)

<span style="color: #6A9955;"># Configure interface via REST API</span>
<span style="color: #C586C0;">def</span> <span style="color: #DCDCAA;">configure_interface</span>(device_ip, interface_config):
    url = <span style="color: #CE9178;">f"https://{device_ip}/restconf/data/interfaces"</span>
    headers = {
        <span style="color: #CE9178;">'Content-Type'</span>: <span style="color: #CE9178;">'application/json'</span>,
        <span style="color: #CE9178;">'Accept'</span>: <span style="color: #CE9178;">'application/json'</span>
    }
    
    <span style="color: #6A9955;"># JSON payload for interface configuration</span>
    payload = {
        <span style="color: #CE9178;">"interface"</span>: {
            <span style="color: #CE9178;">"name"</span>: interface_config[<span style="color: #CE9178;">"name"</span>],
            <span style="color: #CE9178;">"description"</span>: interface_config[<span style="color: #CE9178;">"description"</span>],
            <span style="color: #CE9178;">"ip-address"</span>: interface_config[<span style="color: #CE9178;">"ip"</span>],
            <span style="color: #CE9178;">"subnet-mask"</span>: interface_config[<span style="color: #CE9178;">"mask"</span>]
        }
    }
    
    response = requests.<span style="color: #DCDCAA;">post</span>(url, json=payload, headers=headers, verify=<span style="color: #569CD6;">False</span>)
    <span style="color: #C586C0;">return</span> response.status_code == <span style="color: #B5CEA8;">201</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">JSON Configuration Templates</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">// network-template.json - Infrastructure as Code</span>
{
  <span style="color: #CE9178;">"site_config"</span>: {
    <span style="color: #CE9178;">"site_name"</span>: <span style="color: #CE9178;">"Branch_Office_1"</span>,
    <span style="color: #CE9178;">"vlan_database"</span>: [
      {<span style="color: #CE9178;">"id"</span>: <span style="color: #B5CEA8;">10</span>, <span style="color: #CE9178;">"name"</span>: <span style="color: #CE9178;">"DATA"</span>, <span style="color: #CE9178;">"subnet"</span>: <span style="color: #CE9178;">"10.1.10.0/24"</span>},
      {<span style="color: #CE9178;">"id"</span>: <span style="color: #B5CEA8;">20</span>, <span style="color: #CE9178;">"name"</span>: <span style="color: #CE9178;">"VOICE"</span>, <span style="color: #CE9178;">"subnet"</span>: <span style="color: #CE9178;">"10.1.20.0/24"</span>},
      {<span style="color: #CE9178;">"id"</span>: <span style="color: #B5CEA8;">99</span>, <span style="color: #CE9178;">"name"</span>: <span style="color: #CE9178;">"MGMT"</span>, <span style="color: #CE9178;">"subnet"</span>: <span style="color: #CE9178;">"10.1.99.0/24"</span>}
    ],
    <span style="color: #CE9178;">"routing"</span>: {
      <span style="color: #CE9178;">"protocol"</span>: <span style="color: #CE9178;">"ospf"</span>,
      <span style="color: #CE9178;">"area"</span>: <span style="color: #B5CEA8;">0</span>,
      <span style="color: #CE9178;">"default_route"</span>: <span style="color: #CE9178;">"192.168.1.1"</span>
    },
    <span style="color: #CE9178;">"security_policies"</span>: {
      <span style="color: #CE9178;">"access_lists"</span>: [
        {<span style="color: #CE9178;">"name"</span>: <span style="color: #CE9178;">"BLOCK_SOCIAL"</span>, <span style="color: #CE9178;">"action"</span>: <span style="color: #CE9178;">"deny"</span>, <span style="color: #CE9178;">"ports"</span>: [<span style="color: #B5CEA8;">80</span>, <span style="color: #B5CEA8;">443</span>]}
      ]
    }
  }
}
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">cURL with JSON for API Testing</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create VLAN via REST API</span>
curl -X POST https://192.168.1.100/api/v1/vlans \
  -H <span style="color: #CE9178;">"Content-Type: application/json"</span> \
  -H <span style="color: #CE9178;">"Authorization: Bearer token123"</span> \
  -d <span style="color: #CE9178;">'{"vlan_id": 100, "name": "GUEST", "description": "Guest Network"}'</span>

<span style="color: #6A9955;"># Update interface configuration</span>
curl -X PUT https://192.168.1.100/api/v1/interfaces/GigE0/1 \
  -H <span style="color: #CE9178;">"Content-Type: application/json"</span> \
  -d <span style="color: #CE9178;">'{"enabled": true, "description": "Uplink to Core", "vlan": 10}'</span>

<span style="color: #6A9955;"># Query device status and parse with jq</span>
curl -s https://192.168.1.100/api/v1/status | jq <span style="color: #CE9178;">'.interfaces[] | select(.status=="down")'</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">JSON in Network Automation Workflows</h4>
            <ul style="margin-left: 20px; color: #E0E0E0;">
                <li><strong>Configuration as Code:</strong> Store network configs in JSON for version control</li>
                <li><strong>Device Inventory:</strong> Maintain device databases in JSON format</li>
                <li><strong>Template Generation:</strong> Use JSON data to generate device-specific configs</li>
                <li><strong>API Integration:</strong> Exchange data between network tools and orchestrators</li>
                <li><strong>Monitoring Pipelines:</strong> Process telemetry data in JSON format</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand JSON's role in configuration management tools like Ansible</li>
                    <li>Know JSON is used for REST API payloads and responses</li>
                    <li>Recognize JSON templates for infrastructure as code</li>
                    <li>Understand JSON data structures in network automation contexts</li>
                </ul>
            </div>
        </div>
    `,

    "JSON Schema & Validation": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">6.7.g: JSON Schema & Validation</h3>
            <p>JSON Schema provides a contract for JSON data, defining structure, data types, and validation rules. In enterprise networks, schemas ensure API consistency, data integrity, and proper documentation for network automation systems.</p>
            
            <h4 style="color: #AF7AC5;">JSON Schema Fundamentals</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Schema Element</td><td style="padding: 8px; border-bottom: 1px solid #444;">Purpose</td><td style="padding: 8px; border-bottom: 1px solid #444;">Example</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6;">$schema</td><td style="padding: 8px; border-bottom: 1px solid #444;">Defines JSON Schema version</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">"$schema": "draft-07"</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6;">type</td><td style="padding: 8px; border-bottom: 1px solid #444;">Specifies data type</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">"type": "object"</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6;">properties</td><td style="padding: 8px; border-bottom: 1px solid #444;">Defines object properties</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">"properties": {"name": {}}</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6;">required</td><td style="padding: 8px; border-bottom: 1px solid #444;">Lists mandatory fields</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">"required": ["hostname"]</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6;">pattern</td><td style="padding: 8px; border-bottom: 1px solid #444;">Regex validation for strings</td><td style="padding: 8px; border-bottom: 1px solid #444; font-family: monospace;">"pattern": "^[0-9]+\\.[0-9]+$"</td></tr>
                </table>
            </div>
            
            <h4 style="color: #AF7AC5;">Network Device Schema Example</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
{
  <span style="color: #CE9178;">"$schema"</span>: <span style="color: #CE9178;">"http://json-schema.org/draft-07/schema#"</span>,
  <span style="color: #CE9178;">"title"</span>: <span style="color: #CE9178;">"Network Device Configuration"</span>,
  <span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"object"</span>,
  <span style="color: #CE9178;">"properties"</span>: {
    <span style="color: #CE9178;">"hostname"</span>: {
      <span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"string"</span>,
      <span style="color: #CE9178;">"pattern"</span>: <span style="color: #CE9178;">"^[a-zA-Z0-9-]+$"</span>,
      <span style="color: #CE9178;">"minLength"</span>: <span style="color: #B5CEA8;">1</span>,
      <span style="color: #CE9178;">"maxLength"</span>: <span style="color: #B5CEA8;">63</span>
    },
    <span style="color: #CE9178;">"management_ip"</span>: {
      <span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"string"</span>,
      <span style="color: #CE9178;">"pattern"</span>: <span style="color: #CE9178;">"^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$"</span>
    },
    <span style="color: #CE9178;">"interfaces"</span>: {
      <span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"array"</span>,
      <span style="color: #CE9178;">"items"</span>: {
        <span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"object"</span>,
        <span style="color: #CE9178;">"properties"</span>: {
          <span style="color: #CE9178;">"name"</span>: {<span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"string"</span>},
          <span style="color: #CE9178;">"enabled"</span>: {<span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"boolean"</span>},
          <span style="color: #CE9178;">"vlan"</span>: {
            <span style="color: #CE9178;">"type"</span>: <span style="color: #CE9178;">"integer"</span>,
            <span style="color: #CE9178;">"minimum"</span>: <span style="color: #B5CEA8;">1</span>,
            <span style="color: #CE9178;">"maximum"</span>: <span style="color: #B5CEA8;">4094</span>
          }
        },
        <span style="color: #CE9178;">"required"</span>: [<span style="color: #CE9178;">"name"</span>, <span style="color: #CE9178;">"enabled"</span>]
      }
    }
  },
  <span style="color: #CE9178;">"required"</span>: [<span style="color: #CE9178;">"hostname"</span>, <span style="color: #CE9178;">"management_ip"</span>]
}
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Schema Validation in Python</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #C586C0;">import</span> <span style="color: #9CDCFE;">json</span>
<span style="color: #C586C0;">from</span> <span style="color: #9CDCFE;">jsonschema</span> <span style="color: #C586C0;">import</span> validate, ValidationError

<span style="color: #6A9955;"># Load schema and data</span>
<span style="color: #C586C0;">with</span> <span style="color: #DCDCAA;">open</span>(<span style="color: #CE9178;">'device_schema.json'</span>) <span style="color: #C586C0;">as</span> f:
    schema = json.<span style="color: #DCDCAA;">load</span>(f)

device_data = {
    <span style="color: #CE9178;">"hostname"</span>: <span style="color: #CE9178;">"Router1"</span>,
    <span style="color: #CE9178;">"management_ip"</span>: <span style="color: #CE9178;">"192.168.1.100"</span>,
    <span style="color: #CE9178;">"interfaces"</span>: [
        {<span style="color: #CE9178;">"name"</span>: <span style="color: #CE9178;">"GigE0/1"</span>, <span style="color: #CE9178;">"enabled"</span>: <span style="color: #569CD6;">true</span>, <span style="color: #CE9178;">"vlan"</span>: <span style="color: #B5CEA8;">10</span>}
    ]
}

<span style="color: #6A9955;"># Validate data against schema</span>
<span style="color: #C586C0;">try</span>:
    <span style="color: #DCDCAA;">validate</span>(instance=device_data, schema=schema)
    <span style="color: #DCDCAA;">print</span>(<span style="color: #CE9178;">"✓ Configuration is valid"</span>)
<span style="color: #C586C0;">except</span> ValidationError <span style="color: #C586C0;">as</span> e:
    <span style="color: #DCDCAA;">print</span>(<span style="color: #CE9178;">f"✗ Validation error: {e.message}"</span>)
    <span style="color: #DCDCAA;">print</span>(<span style="color: #CE9178;">f"  Path: {list(e.path)}"</span>)
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Enterprise API Schema Benefits</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <h5 style="color: #10b981; margin-bottom: 10px;">Development Benefits:</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>API Contracts:</strong> Clear expectations between API providers and consumers</li>
                    <li><strong>Code Generation:</strong> Automatic client library generation from schemas</li>
                    <li><strong>Documentation:</strong> Self-documenting APIs with schema-based docs</li>
                    <li><strong>Testing:</strong> Automated validation of API requests and responses</li>
                </ul>
            </div>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <h5 style="color: #3b82f6; margin-bottom: 10px;">Operational Benefits:</h5>
                <ul style="margin-left: 20px;">
                    <li><strong>Data Quality:</strong> Prevent invalid configurations from being applied</li>
                    <li><strong>Error Prevention:</strong> Catch issues at validation time, not runtime</li>
                    <li><strong>Consistency:</strong> Ensure uniform data structures across systems</li>
                    <li><strong>Versioning:</strong> Manage API evolution with schema versioning</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Common Schema Validation Use Cases</h4>
            <ul style="margin-left: 20px; color: #E0E0E0;">
                <li><strong>Configuration Templates:</strong> Validate Ansible/Terraform templates</li>
                <li><strong>API Gateways:</strong> Enforce request/response formats</li>
                <li><strong>CI/CD Pipelines:</strong> Validate configs before deployment</li>
                <li><strong>Network Monitoring:</strong> Ensure telemetry data format compliance</li>
                <li><strong>Infrastructure as Code:</strong> Validate IaC templates and parameters</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand JSON Schema defines data structure and validation rules</li>
                    <li>Know schemas improve API reliability and data quality</li>
                    <li>Recognize schema elements: type, properties, required, pattern</li>
                    <li>Understand schema validation prevents configuration errors</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION6_DETAILS = SECTION6_DETAILS;
}
