/**
 * CCNA Section 6: Automation and Programmability - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, this content is focused on exam-relevant technical details.
 * v1.0 - Initial creation for all Section 6 topics.
 */

const SECTION6_DETAILS = {
    // 6.1 Traditional vs. Controller-Based Networks
    "Traditional vs. Controller-Based Networks": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #6366F1; border-bottom: 2px solid #6366F1; padding-bottom: 5px;">6.2: Traditional vs. Controller-Based Networking</h3>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Traditional Networks:</strong> Management is done on a device-by-device basis, typically via CLI. The control plane (making routing decisions) and data plane (forwarding packets) are co-located on each device. This is a distributed architecture.</li>
                <li><strong>Controller-Based Networks (SDN):</strong> Management is centralized. A software-based network controller has a global view of the network. Administrators interact with the controller, and the controller pushes configurations down to the network devices. This centralizes the control plane.</li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #818CF8; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.juniper.net/us/en/research-topics/what-is-sdn.html" target="_blank" style="color: #66B2FF;">Read: What is Software-Defined Networking?</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=Fj-cfY6LoHw" target="_blank" style="color: #66B2FF;">Watch: Controller-Based vs Traditional Networks</a></em>
            </div>
        </div>
    `,
    
    // 6.3 Software-Defined Architecture
    "Software-Defined Architecture": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #6366F1; border-bottom: 2px solid #6366F1; padding-bottom: 5px;">6.3: Controller-Based, Software-Defined Architecture</h3>
            <p>This architecture is defined by distinct layers and interfaces.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Underlay & Overlay:</strong> The <strong>underlay</strong> is the physical network of switches and routers responsible for basic IP reachability. The <strong>overlay</strong> is a virtual network built on top of the underlay, creating logical tunnels (like VXLAN) to connect endpoints, independent of the physical topology.</li>
                <li><strong>Fabric:</strong> The combination of the underlay and overlay is often referred to as a network fabric.</li>
                <li><strong>Separation of Control & Data Plane:</strong> This is the core principle of SDN. The <strong>control plane</strong> (network intelligence, routing calculations) is centralized in the controller. The <strong>data plane</strong> (packet forwarding) remains on the network devices, which receive their instructions from the controller.</li>
                <li><strong>Northbound & Southbound APIs:</strong>
                    <ul>
                        <li><strong>Southbound APIs (SBAs):</strong> Allow the controller to communicate with and program the data plane of the network devices. Examples include OpenFlow and NETCONF.</li>
                        <li><strong>Northbound APIs (NBAs):</strong> Allow applications and orchestration systems to communicate with the controller, enabling automation. These are typically REST APIs.</li>
                    </ul>
                </li>
            </ul>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #818CF8; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.ciscopress.com/articles/article.asp?p=2980392&seqNum=3" target="_blank" style="color: #66B2FF;">Read: SDN and Network Programmability (Cisco Press)</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=IdQp-0_7-d8" target="_blank" style="color: #66B2FF;">Watch: Northbound vs Southbound APIs</a></em>
            </div>
        </div>
    `,

    // Northbound & Southbound APIs
    "Northbound & Southbound APIs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #6366F1; border-bottom: 2px solid #6366F1; padding-bottom: 5px;">Northbound & Southbound APIs</h3>
            <p>APIs (Application Programming Interfaces) enable communication between different layers of the SDN architecture.</p>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Southbound APIs:</strong> Connect the SDN controller to the network devices (switches/routers). Examples include OpenFlow, NETCONF, and proprietary vendor APIs. These APIs allow the controller to program the forwarding tables and control the data plane.</li>
                <li><strong>Northbound APIs:</strong> Connect applications and orchestration systems to the SDN controller. These are typically REST APIs that allow network applications to request network services, query network state, and implement higher-level networking functions.</li>
            </ul>
            <p>The controller acts as a broker between applications (via northbound APIs) and network devices (via southbound APIs).</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #818CF8; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/solutions/software-defined-networking/overview.html" target="_blank" style="color: #66B2FF;">Read: SDN APIs Overview</a></em>
            </div>
        </div>
    `,

    // 6.4 Cisco DNA Center
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
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center/index.html" target="_blank" style="color: #66B2FF;">Read: Cisco DNA Center Overview</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=EfjGg3Rk2wA" target="_blank" style="color: #66B2FF;">Watch: What is Cisco DNA Center?</a></em>
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
                <em style="font-size: 0.9em;"><a href="https://restfulapi.net/" target="_blank" style="color: #66B2FF;">Read: What is REST?</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=lsMQRaeLNDk" target="_blank" style="color: #66B2FF;">Watch: REST API Explained (freeCodeCamp)</a></em>
            </div>
        </div>
    `,
    
        // 6.6 Configuration Management Tools
    "Puppet, Chef, and Ansible": `
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
                <em style="font-size: 0.9em;"><a href="https://www.redhat.com/en/topics/automation/what-is-configuration-management" target="_blank" style="color: #66B2FF;">Read: What is Configuration Management?</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=g2m_22i_ofY" target="_blank" style="color: #66B2FF;">Watch: Ansible vs. Chef vs. Puppet</a></em>
            </div>
        </div>
    `,

    // 6.7 JSON
    "JSON Formatted Data": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">6.7: Components of JSON-encoded Data</h3>
            <p><strong>JSON (JavaScript Object Notation)</strong> is a lightweight, human-readable format for data exchange. It is the de facto standard for data in REST APIs.</p>
            <h4 style="color: #F5B041;">Key Components:</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Key-Value Pairs:</strong> The fundamental building block. A "key" is a string in double quotes, followed by a colon, followed by a "value". This is also called an <strong>object</strong>.</li>
                <li><strong>Values:</strong> Can be a string, number, boolean (true/false), array, or another object.</li>
                <li><strong>Arrays:</strong> An ordered list of values, enclosed in square brackets <code>[ ]</code>.</li>
            </ul>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
{
  "hostname": "Router1",
  "domain": "cisco.com",
  "is_active": true,
  "interfaces": [
    { "name": "GigabitEthernet0/1", "ip_address": "10.1.1.1" },
    { "name": "GigabitEthernet0/2", "ip_address": "10.1.2.1" }
  ]
}
</code>
</pre>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #F5B041; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.json.org/json-en.html" target="_blank" style="color: #66B2FF;">Read: Introducing JSON</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=iiADhChRriM" target="_blank" style="color: #66B2FF;">Watch: JSON Explained in 100 Seconds</a></em>
            </div>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION6_DETAILS = SECTION6_DETAILS;
}
