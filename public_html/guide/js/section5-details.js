/**
 * CCNA Section 5: Security Fundamentals - Detailed Content
 * This file contains detailed explanations for each topic, designed for a modal view.
 * As a master network engineer, this content is focused on exam-relevant technical details.
 * v1.0 - Initial creation for all Section 5 topics.
 */

const SECTION5_DETAILS = {
    // 5.1 Key Security Concepts
    "CIA Triad Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.1.a: CIA Triad Fundamentals</h3>
            <p>The CIA Triad forms the foundation of information security, providing a framework for evaluating and implementing security measures. These three principles guide all security decisions in network infrastructure.</p>
            
            <h4 style="color: #EC7063;">Confidentiality</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Definition:</strong> Ensuring that information is accessible only to those authorized to have access.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Encryption:</strong> Symmetric (AES) and asymmetric (RSA) encryption methods</li>
                    <li><strong>Access Controls:</strong> Username/password, multi-factor authentication, certificates</li>
                    <li><strong>Physical Security:</strong> Locked server rooms, badge access, surveillance</li>
                    <li><strong>Network Segmentation:</strong> VLANs, VPNs, firewalls to isolate sensitive data</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Integrity</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Definition:</strong> Safeguarding the accuracy and completeness of information and processing methods.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Hashing:</strong> MD5, SHA-256 for data verification and change detection</li>
                    <li><strong>Digital Signatures:</strong> Cryptographic proof of data authenticity and non-repudiation</li>
                    <li><strong>Version Control:</strong> Configuration management and change tracking</li>
                    <li><strong>Checksums:</strong> File integrity verification during transmission</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Availability</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Definition:</strong> Ensuring that authorized users have reliable and timely access to information and resources.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Redundancy:</strong> Multiple links, backup power, failover systems</li>
                    <li><strong>Load Balancing:</strong> Distributing traffic across multiple servers/paths</li>
                    <li><strong>Disaster Recovery:</strong> Backup sites, data replication, recovery procedures</li>
                    <li><strong>DDoS Protection:</strong> Rate limiting, traffic filtering, scrubbing centers</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">CIA Triad in Network Design</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Security Layer</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Confidentiality</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Integrity</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Availability</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Physical</td>
                    <td style="border: 1px solid #444; padding: 8px;">Locked facilities</td>
                    <td style="border: 1px solid #444; padding: 8px;">Environmental controls</td>
                    <td style="border: 1px solid #444; padding: 8px;">Redundant power/cooling</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Network</td>
                    <td style="border: 1px solid #444; padding: 8px;">VPNs, VLANs</td>
                    <td style="border: 1px solid #444; padding: 8px;">Routing protocols</td>
                    <td style="border: 1px solid #444; padding: 8px;">Redundant links</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Application</td>
                    <td style="border: 1px solid #444; padding: 8px;">TLS/SSL encryption</td>
                    <td style="border: 1px solid #444; padding: 8px;">Input validation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Load balancing</td>
                </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand how each CIA principle applies to network security</li>
                    <li>Identify which security controls support each pillar</li>
                    <li>Recognize trade-offs between security and usability</li>
                    <li>Apply CIA principles when analyzing security scenarios</li>
                </ul>
            </div>
        </div>
    `,
    
    "Threat Landscape": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.1.b: Threat Landscape Analysis</h3>
            <p>Understanding the modern threat landscape is essential for implementing effective security measures. Threats are constantly evolving, requiring network professionals to stay informed about attack methods and threat actors.</p>
            
            <h4 style="color: #EC7063;">Threat Classifications</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f87171; font-weight: bold;">External Threats</td><td style="padding: 8px; border-bottom: 1px solid #444;">Hackers, cybercriminals, nation-states, competitors</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">Internal Threats</td><td style="padding: 8px; border-bottom: 1px solid #444;">Malicious insiders, careless employees, compromised accounts</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #ef4444; font-weight: bold;">Environmental</td><td style="padding: 8px; border-bottom: 1px solid #444;">Natural disasters, power failures, hardware failures</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Common Attack Vectors</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Malware:</strong> Viruses, worms, trojans, ransomware, rootkits, spyware</li>
                    <li><strong>Social Engineering:</strong> Phishing, vishing, smishing, pretexting, baiting</li>
                    <li><strong>Network Attacks:</strong> DoS/DDoS, man-in-the-middle, packet sniffing, ARP poisoning</li>
                    <li><strong>Application Attacks:</strong> SQL injection, cross-site scripting (XSS), buffer overflow</li>
                    <li><strong>Physical Attacks:</strong> Tailgating, dumpster diving, device theft, USB drops</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Advanced Persistent Threats (APTs)</h4>
            <p>APTs are sophisticated, long-term attacks typically sponsored by nation-states or organized crime:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ol style="margin-left: 20px;">
                    <li><strong>Initial Compromise:</strong> Spear phishing, watering hole attacks, zero-day exploits</li>
                    <li><strong>Establish Foothold:</strong> Install backdoors, create persistent access</li>
                    <li><strong>Escalate Privileges:</strong> Move laterally, gain administrative access</li>
                    <li><strong>Internal Reconnaissance:</strong> Map network, identify valuable targets</li>
                    <li><strong>Data Exfiltration:</strong> Steal sensitive information over extended periods</li>
                </ol>
            </div>
            
            <h4 style="color: #EC7063;">Emerging Threats</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>IoT Botnets:</strong> Compromised smart devices used for DDoS attacks</li>
                <li><strong>Supply Chain Attacks:</strong> Compromising software/hardware before delivery</li>
                <li><strong>Cloud-based Attacks:</strong> Misconfigurations, shared responsibility model gaps</li>
                <li><strong>AI-powered Attacks:</strong> Automated vulnerability discovery, deepfakes</li>
                <li><strong>Cryptocurrency Mining:</strong> Cryptojacking on compromised systems</li>
            </ul>
            
            <h4 style="color: #EC7063;">Threat Intelligence Sources</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Commercial:</strong> Threat intelligence feeds, security vendors</li>
                    <li><strong>Government:</strong> CISA alerts, FBI IC3, national CERTs</li>
                    <li><strong>Open Source:</strong> MITRE ATT&CK framework, STIX/TAXII</li>
                    <li><strong>Industry:</strong> Information sharing organizations, security forums</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Identify different types of security threats and their characteristics</li>
                    <li>Understand common attack vectors and methods</li>
                    <li>Recognize signs of compromised systems or networks</li>
                    <li>Know the difference between external and internal threats</li>
                </ul>
            </div>
        </div>
    `,
    
    "Risk Assessment Methods": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.1.c: Risk Assessment Methods</h3>
            <p>Risk assessment is the systematic process of identifying vulnerabilities, analyzing threats, and calculating risk levels to prioritize security investments and mitigation strategies.</p>
            
            <h4 style="color: #EC7063;">Risk Calculation Formula</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0; text-align: center;">
                <strong style="color: #E74C3C; font-size: 1.2em;">Risk = Threat × Vulnerability × Impact</strong>
                <br><br>
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f87171; font-weight: bold;">Threat</td><td style="padding: 8px; border-bottom: 1px solid #444;">Likelihood of an attack occurring</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">Vulnerability</td><td style="padding: 8px; border-bottom: 1px solid #444;">Weakness that can be exploited</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Impact</td><td style="padding: 8px; border-bottom: 1px solid #444;">Potential damage if successful</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Qualitative Risk Assessment</h4>
            <p>Uses subjective judgments and descriptive scales (High, Medium, Low) to evaluate risk:</p>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #2a2a2a;">
                        <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Risk Level</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Characteristics</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Response</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px; color: #f87171;">High</td>
                        <td style="border: 1px solid #444; padding: 8px;">Critical systems, known vulnerabilities, active threats</td>
                        <td style="border: 1px solid #444; padding: 8px;">Immediate action required</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="border: 1px solid #444; padding: 8px; color: #f59e0b;">Medium</td>
                        <td style="border: 1px solid #444; padding: 8px;">Important systems, some vulnerabilities, moderate threats</td>
                        <td style="border: 1px solid #444; padding: 8px;">Plan mitigation within timeframe</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px; color: #10b981;">Low</td>
                        <td style="border: 1px solid #444; padding: 8px;">Non-critical systems, minimal vulnerabilities, low threats</td>
                        <td style="border: 1px solid #444; padding: 8px;">Monitor and review periodically</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Quantitative Risk Assessment</h4>
            <p>Uses numerical values and statistical methods for precise risk calculations:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>ALE (Annual Loss Expectancy):</strong> SLE × ARO</li>
                    <li><strong>SLE (Single Loss Expectancy):</strong> Asset value × Exposure factor</li>
                    <li><strong>ARO (Annual Rate of Occurrence):</strong> Frequency of threat per year</li>
                    <li><strong>ROI (Return on Investment):</strong> (ALE_before - ALE_after - Annual_cost_of_control) / Annual_cost_of_control</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Vulnerability Assessment Process</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Asset Identification:</strong> Inventory all systems, applications, and data</li>
                <li><strong>Threat Modeling:</strong> Identify potential threat sources and attack vectors</li>
                <li><strong>Vulnerability Scanning:</strong> Automated tools to discover security weaknesses</li>
                <li><strong>Manual Testing:</strong> Penetration testing and security reviews</li>
                <li><strong>Risk Prioritization:</strong> Rank vulnerabilities by risk score</li>
                <li><strong>Mitigation Planning:</strong> Develop remediation strategies</li>
                <li><strong>Continuous Monitoring:</strong> Regular reassessment and updates</li>
            </ol>
            
            <h4 style="color: #EC7063;">Common Vulnerability Scoring System (CVSS)</h4>
            <p>Industry standard for rating vulnerability severity (0.0 to 10.0 scale):</p>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Critical (9.0-10.0):</strong> Remote code execution, privilege escalation</li>
                    <li><strong>High (7.0-8.9):</strong> Significant security impact, easy to exploit</li>
                    <li><strong>Medium (4.0-6.9):</strong> Moderate impact, requires some user interaction</li>
                    <li><strong>Low (0.1-3.9):</strong> Minimal impact, difficult to exploit</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the risk calculation formula and its components</li>
                    <li>Differentiate between qualitative and quantitative assessment methods</li>
                    <li>Know the vulnerability assessment process steps</li>
                    <li>Recognize how CVSS scores guide remediation priorities</li>
                </ul>
            </div>
        </div>
    `,
    
    "Defense in Depth": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.1.d: Defense in Depth Strategy</h3>
            <p>Defense in Depth is a comprehensive security strategy that employs multiple layers of security controls to protect against various attack vectors. If one layer fails, other layers continue to provide protection.</p>
            
            <h4 style="color: #EC7063;">Security Control Categories</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Preventive</td><td style="padding: 8px; border-bottom: 1px solid #444;">Stop attacks before they occur (firewalls, access controls)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Detective</td><td style="padding: 8px; border-bottom: 1px solid #444;">Identify ongoing attacks (IDS, logging, monitoring)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">Corrective</td><td style="padding: 8px; border-bottom: 1px solid #444;">Respond to and recover from attacks (IPS, backups)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9333ea; font-weight: bold;">Deterrent</td><td style="padding: 8px; border-bottom: 1px solid #444;">Discourage attacks (security awareness, legal warnings)</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Physical Security Layer</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #64748b;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Perimeter Security:</strong> Fences, gates, barriers, security guards</li>
                    <li><strong>Building Access:</strong> Badge readers, biometric scanners, mantrap doors</li>
                    <li><strong>Environmental Controls:</strong> Fire suppression, power protection, climate control</li>
                    <li><strong>Equipment Security:</strong> Locked server racks, cable locks, surveillance cameras</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Network Security Layer</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Perimeter Defense:</strong> Firewalls, DMZ, intrusion prevention systems</li>
                    <li><strong>Network Segmentation:</strong> VLANs, subnets, micro-segmentation</li>
                    <li><strong>Access Control:</strong> NAC (Network Access Control), 802.1X authentication</li>
                    <li><strong>Monitoring:</strong> Network IDS, flow analysis, packet capture</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Host Security Layer</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Endpoint Protection:</strong> Antivirus, anti-malware, host-based firewalls</li>
                    <li><strong>Configuration Management:</strong> Hardening standards, patch management</li>
                    <li><strong>Access Controls:</strong> Strong authentication, privilege escalation controls</li>
                    <li><strong>Monitoring:</strong> Host IDS, log collection, behavioral analysis</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Application Security Layer</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Secure Development:</strong> Secure coding practices, code reviews, testing</li>
                    <li><strong>Input Validation:</strong> Sanitization, parameter checking, SQL injection prevention</li>
                    <li><strong>Authentication/Authorization:</strong> Strong user verification, role-based access</li>
                    <li><strong>Encryption:</strong> Data in transit and at rest protection</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Data Security Layer</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #E74C3C;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Classification:</strong> Data labeling, handling procedures, retention policies</li>
                    <li><strong>Encryption:</strong> Strong algorithms, key management, digital signatures</li>
                    <li><strong>Access Controls:</strong> Need-to-know, least privilege, data loss prevention</li>
                    <li><strong>Backup/Recovery:</strong> Regular backups, tested restore procedures</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Implementation Best Practices</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Overlapping Controls:</strong> Ensure multiple layers address the same threats</li>
                <li><strong>Diversity:</strong> Use different vendors and technologies to avoid single points of failure</li>
                <li><strong>Regular Testing:</strong> Penetration testing and vulnerability assessments</li>
                <li><strong>Continuous Monitoring:</strong> Real-time visibility across all layers</li>
                <li><strong>Incident Response:</strong> Coordinated response across all security layers</li>
            </ol>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the concept of layered security architecture</li>
                    <li>Identify security controls at each layer (physical, network, host, application, data)</li>
                    <li>Recognize how different control types work together</li>
                    <li>Know the importance of overlapping and diverse security measures</li>
                </ul>
            </div>
        </div>
    `,
    
    "Security Frameworks": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.1.e: Security Frameworks and Standards</h3>
            <p>Security frameworks provide structured approaches to implementing comprehensive security programs. They offer guidelines, best practices, and standards for organizations to establish and maintain effective cybersecurity.</p>
            
            <h4 style="color: #EC7063;">NIST Cybersecurity Framework</h4>
            <p>The most widely adopted framework, organized into five core functions:</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #3b82f6; font-weight: bold;">Identify (ID)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Asset management, governance, risk assessment, supply chain</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Protect (PR)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Access controls, awareness training, data security, maintenance</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f59e0b; font-weight: bold;">Detect (DE)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Anomaly detection, continuous monitoring, detection processes</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #f87171; font-weight: bold;">Respond (RS)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Response planning, communications, analysis, mitigation</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #9333ea; font-weight: bold;">Recover (RC)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Recovery planning, improvements, communications</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">ISO 27001/27002 Standards</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>ISO 27001:</strong> Information Security Management System (ISMS) requirements</li>
                    <li><strong>ISO 27002:</strong> Code of practice with 114 security controls across 14 domains</li>
                    <li><strong>Key Domains:</strong> Risk management, access control, cryptography, operations security</li>
                    <li><strong>Certification:</strong> Third-party audited compliance verification</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">MITRE ATT&CK Framework</h4>
            <p>Knowledge base of adversary tactics, techniques, and procedures (TTPs):</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Tactics:</strong> 14 categories from initial access to impact</li>
                    <li><strong>Techniques:</strong> 600+ specific methods used by adversaries</li>
                    <li><strong>Use Cases:</strong> Threat hunting, red teaming, security tool evaluation</li>
                    <li><strong>Matrices:</strong> Enterprise, Mobile, ICS/OT specific versions</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Regulatory Compliance Frameworks</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #2a2a2a;">
                        <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Framework</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Industry</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #EC7063;">Focus</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px;">PCI DSS</td>
                        <td style="border: 1px solid #444; padding: 8px;">Payment processing</td>
                        <td style="border: 1px solid #444; padding: 8px;">Cardholder data protection</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="border: 1px solid #444; padding: 8px;">HIPAA</td>
                        <td style="border: 1px solid #444; padding: 8px;">Healthcare</td>
                        <td style="border: 1px solid #444; padding: 8px;">Protected health information</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px;">SOX</td>
                        <td style="border: 1px solid #444; padding: 8px;">Public companies</td>
                        <td style="border: 1px solid #444; padding: 8px;">Financial reporting accuracy</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="border: 1px solid #444; padding: 8px;">GDPR</td>
                        <td style="border: 1px solid #444; padding: 8px;">EU data subjects</td>
                        <td style="border: 1px solid #444; padding: 8px;">Personal data privacy</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Implementation Methodology</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Current State Assessment:</strong> Evaluate existing security posture</li>
                <li><strong>Framework Selection:</strong> Choose appropriate framework for organization</li>
                <li><strong>Gap Analysis:</strong> Identify differences between current and target state</li>
                <li><strong>Implementation Plan:</strong> Prioritize and sequence improvements</li>
                <li><strong>Control Implementation:</strong> Deploy technical and administrative controls</li>
                <li><strong>Monitoring and Review:</strong> Continuous assessment and improvement</li>
                <li><strong>Certification/Audit:</strong> Third-party validation (if required)</li>
            </ol>
            
            <h4 style="color: #EC7063;">Framework Benefits</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Standardization:</strong> Common language and approach across organization</li>
                    <li><strong>Risk Management:</strong> Structured approach to identifying and managing risks</li>
                    <li><strong>Compliance:</strong> Demonstrates due diligence to regulators and auditors</li>
                    <li><strong>Continuous Improvement:</strong> Regular assessment and enhancement processes</li>
                    <li><strong>Business Alignment:</strong> Links security activities to business objectives</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the purpose and benefits of security frameworks</li>
                    <li>Know the five functions of the NIST Cybersecurity Framework</li>
                    <li>Recognize major compliance requirements (PCI DSS, HIPAA, etc.)</li>
                    <li>Understand how frameworks guide security program development</li>
                </ul>
            </div>
        </div>
    `,

    // 5.2 Security Program Elements
    "User Awareness": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.2: Security Program Elements - User Awareness</h3>
            <p>Security awareness training is critical because users are often the weakest link in the security chain. Effective programs educate users about threats and safe practices.</p>
            
            <p>Users are often considered the weakest link in cybersecurity. A comprehensive security awareness program is essential for CCNA-level network security.</p>
            
            <h4 style="color: #AF7AC5;">Critical Training Areas</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Social Engineering Awareness:</strong> Phishing emails, pretexting, baiting, quid pro quo attacks</li>
                    <li><strong>Password Security:</strong> Strong password creation, password managers, multi-factor authentication</li>
                    <li><strong>Physical Security:</strong> Clean desk policy, device locking, tailgating prevention</li>
                    <li><strong>Data Handling:</strong> Classification levels, secure disposal, encryption requirements</li>
                    <li><strong>Incident Response:</strong> Recognition, reporting procedures, escalation paths</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Training Delivery Methods</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Regular Training Sessions:</strong> Quarterly or annual security awareness training</li>
                <li><strong>Simulated Phishing:</strong> Testing users with fake phishing emails</li>
                <li><strong>Security Newsletters:</strong> Ongoing communication about current threats</li>
                <li><strong>Policies and Procedures:</strong> Clear guidelines for acceptable use and security practices</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the importance of user education in overall security</li>
                    <li>Know common social engineering attack methods</li>
                    <li>Recognize the role of security policies in user awareness</li>
                </ul>
            </div>
        </div>
    `,

    "Physical Access Control": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.2: Security Program Elements - Physical Access Control</h3>
            <p>Physical security controls protect against unauthorized access to facilities, equipment, and data. These controls are fundamental to any comprehensive security program.</p>
            
            <h4 style="color: #AF7AC5;">Authentication Methods</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Something You Have:</strong> Smart cards, RFID badges, proximity cards</li>
                    <li><strong>Something You Are:</strong> Biometric scanners (fingerprint, retina, facial recognition)</li>
                    <li><strong>Something You Know:</strong> PIN codes, passwords, passphrases</li>
                    <li><strong>Multi-Factor:</strong> Combination of two or more authentication types</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Physical Security Zones & Defense in Depth</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Security Zone</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Access Controls</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Assets Protected</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Public Zone</td>
                    <td style="border: 1px solid #444; padding: 8px;">Perimeter fencing, lighting, cameras</td>
                    <td style="border: 1px solid #444; padding: 8px;">Building exterior, parking areas</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Reception/Lobby</td>
                    <td style="border: 1px solid #444; padding: 8px;">Reception desk, visitor badges, escorts</td>
                    <td style="border: 1px solid #444; padding: 8px;">Building access control point</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Work Areas</td>
                    <td style="border: 1px solid #444; padding: 8px;">Badge readers, PIN pads, mantrap doors</td>
                    <td style="border: 1px solid #444; padding: 8px;">Offices, workstations, general IT equipment</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Secure Areas</td>
                    <td style="border: 1px solid #444; padding: 8px;">Biometric + PIN, dual authentication</td>
                    <td style="border: 1px solid #444; padding: 8px;">Data centers, server rooms, network equipment</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Critical Infrastructure Protection</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>HVAC Systems:</strong> Temperature and humidity control for equipment</li>
                <li><strong>Fire Suppression:</strong> Gas-based systems to protect equipment</li>
                <li><strong>Power Systems:</strong> UPS and backup generators for availability</li>
                <li><strong>Monitoring:</strong> Security cameras and alarm systems</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand layered physical security approach</li>
                    <li>Know the importance of environmental controls for network equipment</li>
                    <li>Recognize physical security as part of overall network security</li>
                </ul>
            </div>
        </div>
    `,

    "Security Policies & Procedures": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.2: Security Program Elements - Security Policies & Procedures</h3>
            <p>Security policies and procedures form the foundation of an effective security program. They establish organizational security standards, define acceptable behavior, and provide operational guidance for maintaining security.</p>
            
            <h4 style="color: #AF7AC5;">Core Security Policy Components</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Information Security Policy:</strong> High-level framework defining organizational security objectives and principles</li>
                    <li><strong>Acceptable Use Policy (AUP):</strong> Guidelines for appropriate use of IT resources and systems</li>
                    <li><strong>Access Control Policy:</strong> Rules governing user access rights and authentication requirements</li>
                    <li><strong>Data Classification Policy:</strong> Categories and handling requirements for different data types</li>
                    <li><strong>Change Management Policy:</strong> Procedures for authorizing and implementing system changes</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Data Classification Framework</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Classification</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Examples</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Protection Requirements</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px; color: #E74C3C;">Confidential</td>
                    <td style="border: 1px solid #444; padding: 8px;">Trade secrets, financial data, customer PII</td>
                    <td style="border: 1px solid #444; padding: 8px;">Encryption, access controls, audit logging</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px; color: #F39C12;">Internal</td>
                    <td style="border: 1px solid #444; padding: 8px;">Employee directories, internal procedures</td>
                    <td style="border: 1px solid #444; padding: 8px;">Authentication required, internal use only</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px; color: #2ECC71;">Public</td>
                    <td style="border: 1px solid #444; padding: 8px;">Marketing materials, public announcements</td>
                    <td style="border: 1px solid #444; padding: 8px;">Basic integrity controls, version control</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Change Management Process</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ol style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Change Request:</strong> Formal documentation of proposed change with business justification</li>
                    <li><strong>Impact Assessment:</strong> Analysis of security, operational, and business impacts</li>
                    <li><strong>Change Approval:</strong> Review and authorization by Change Advisory Board (CAB)</li>
                    <li><strong>Implementation Planning:</strong> Detailed implementation plan with rollback procedures</li>
                    <li><strong>Testing & Validation:</strong> Pre-production testing and security validation</li>
                    <li><strong>Implementation:</strong> Controlled deployment with monitoring and verification</li>
                    <li><strong>Post-Implementation Review:</strong> Validation of successful implementation and lessons learned</li>
                </ol>
            </div>
            
            <h4 style="color: #AF7AC5;">Policy Enforcement & Compliance</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Regular Reviews:</strong> Annual policy reviews and updates to maintain relevance</li>
                <li><strong>Training Programs:</strong> Mandatory security awareness training covering key policies</li>
                <li><strong>Monitoring & Auditing:</strong> Regular compliance audits and policy violation tracking</li>
                <li><strong>Enforcement Actions:</strong> Documented procedures for policy violations and disciplinary actions</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the role of security policies in overall security program</li>
                    <li>Know key components of acceptable use policies</li>
                    <li>Recognize importance of data classification and change management</li>
                    <li>Understand policy enforcement and compliance monitoring</li>
                </ul>
            </div>
        </div>
    `,

    "Incident Response Program": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.2: Security Program Elements - Incident Response Program</h3>
            <p>An incident response program provides a structured approach to detecting, containing, and recovering from security incidents. It minimizes damage, reduces recovery time, and helps prevent future incidents.</p>
            
            <h4 style="color: #AF7AC5;">Incident Response Lifecycle</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ol style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Preparation:</strong> Establish policies, procedures, tools, and training before incidents occur</li>
                    <li><strong>Detection & Analysis:</strong> Identify potential incidents and analyze their scope and impact</li>
                    <li><strong>Containment:</strong> Limit the spread and impact of the incident (short-term and long-term)</li>
                    <li><strong>Eradication:</strong> Remove the threat and vulnerabilities that enabled the incident</li>
                    <li><strong>Recovery:</strong> Restore systems to normal operation and monitor for residual effects</li>
                    <li><strong>Lessons Learned:</strong> Document findings and improve response capabilities</li>
                </ol>
            </div>
            
            <h4 style="color: #AF7AC5;">Incident Classification System</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Severity Level</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Impact</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Response Time</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px; color: #E74C3C;">Critical (P1)</td>
                    <td style="border: 1px solid #444; padding: 8px;">System down, data breach, major business impact</td>
                    <td style="border: 1px solid #444; padding: 8px;">15 minutes</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px; color: #F39C12;">High (P2)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Significant degradation, security violation</td>
                    <td style="border: 1px solid #444; padding: 8px;">1 hour</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px; color: #2ECC71;">Medium (P3)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Minor impact, potential security issue</td>
                    <td style="border: 1px solid #444; padding: 8px;">4 hours</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px; color: #00A8FF;">Low (P4)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Minimal impact, informational</td>
                    <td style="border: 1px solid #444; padding: 8px;">24 hours</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Computer Security Incident Response Team (CSIRT)</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Core CSIRT Roles:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Incident Manager:</strong> Coordinates response activities and communications</li>
                    <li><strong>Security Analyst:</strong> Technical analysis and containment actions</li>
                    <li><strong>Forensics Specialist:</strong> Evidence collection and preservation</li>
                    <li><strong>Communications Lead:</strong> Internal and external communications</li>
                    <li><strong>Legal Counsel:</strong> Legal implications and regulatory requirements</li>
                    <li><strong>Management Representative:</strong> Business decisions and resource allocation</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Network Incident Response Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Network traffic analysis</span>
Router# <span style="color: #DCDCAA;">show ip interface brief</span>
Router# <span style="color: #DCDCAA;">show logging | include error</span>
Router# <span style="color: #DCDCAA;">show access-lists</span>

<span style="color: #6A9955;"># Switch security verification</span>
Switch# <span style="color: #DCDCAA;">show port-security</span>
Switch# <span style="color: #DCDCAA;">show mac address-table</span>
Switch# <span style="color: #DCDCAA;">show spanning-tree root</span>

<span style="color: #6A9955;"># Evidence preservation</span>
Device# <span style="color: #DCDCAA;">show tech-support | redirect flash:evidence.txt</span>
Device# <span style="color: #DCDCAA;">show running-config | redirect tftp://server/config-backup.txt</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Communication & Documentation</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Initial Alert:</strong> Immediate notification to CSIRT and management</li>
                <li><strong>Status Updates:</strong> Regular progress reports to stakeholders</li>
                <li><strong>External Communications:</strong> Law enforcement, customers, regulatory bodies</li>
                <li><strong>Incident Documentation:</strong> Detailed timeline, actions taken, evidence collected</li>
                <li><strong>Post-Incident Report:</strong> Root cause analysis and improvement recommendations</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the incident response lifecycle phases</li>
                    <li>Know the importance of preparation and team roles</li>
                    <li>Recognize network commands useful for incident response</li>
                    <li>Understand incident classification and escalation procedures</li>
                </ul>
            </div>
        </div>
    `,

    "Security Monitoring & Auditing": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.2: Security Program Elements - Security Monitoring & Auditing</h3>
            <p>Security monitoring and auditing provide continuous oversight of security controls, ensuring they remain effective and identifying potential threats. This includes real-time monitoring, vulnerability assessments, and compliance audits.</p>
            
            <h4 style="color: #AF7AC5;">Security Operations Center (SOC) Functions</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>24/7 Monitoring:</strong> Continuous surveillance of security events and alerts</li>
                    <li><strong>Log Analysis:</strong> Centralized collection and analysis of security logs from all systems</li>
                    <li><strong>Threat Detection:</strong> Identification of suspicious activities and potential security incidents</li>
                    <li><strong>Incident Triage:</strong> Initial assessment and classification of security events</li>
                    <li><strong>Response Coordination:</strong> Coordination of incident response activities across teams</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Security Information and Event Management (SIEM)</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>SIEM Capabilities:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Log Aggregation:</strong> Centralized collection from firewalls, servers, applications, endpoints</li>
                    <li><strong>Real-time Analysis:</strong> Correlation rules to identify patterns and anomalies</li>
                    <li><strong>Alerting:</strong> Automated notifications for security events and policy violations</li>
                    <li><strong>Reporting:</strong> Compliance reports and security metrics dashboards</li>
                    <li><strong>Forensics:</strong> Historical data analysis for incident investigation</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Network Device Logging Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure syslog on Cisco devices</span>
Router(config)# <span style="color: #DCDCAA;">logging host 192.168.1.100</span>
Router(config)# <span style="color: #DCDCAA;">logging trap informational</span>
Router(config)# <span style="color: #DCDCAA;">logging facility local0</span>
Router(config)# <span style="color: #DCDCAA;">logging source-interface loopback0</span>

<span style="color: #6A9955;"># Enable specific security logging</span>
Router(config)# <span style="color: #DCDCAA;">logging console warnings</span>
Router(config)# <span style="color: #DCDCAA;">logging monitor informational</span>
Router(config)# <span style="color: #DCDCAA;">access-list 100 permit tcp any any log</span>

<span style="color: #6A9955;"># SNMP monitoring setup</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server community public RO</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server host 192.168.1.100 version 2c public</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Vulnerability Assessment Program</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Assessment Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Frequency</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Scope</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Network Vulnerability Scan</td>
                    <td style="border: 1px solid #444; padding: 8px;">Weekly</td>
                    <td style="border: 1px solid #444; padding: 8px;">All network devices and services</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Web Application Scan</td>
                    <td style="border: 1px solid #444; padding: 8px;">Monthly</td>
                    <td style="border: 1px solid #444; padding: 8px;">Public-facing web applications</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Configuration Audit</td>
                    <td style="border: 1px solid #444; padding: 8px;">Quarterly</td>
                    <td style="border: 1px solid #444; padding: 8px;">Security configuration baselines</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Penetration Testing</td>
                    <td style="border: 1px solid #444; padding: 8px;">Annually</td>
                    <td style="border: 1px solid #444; padding: 8px;">Comprehensive security assessment</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Security Metrics & KPIs</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Mean Time to Detection (MTTD):</strong> Average time to identify security incidents</li>
                <li><strong>Mean Time to Response (MTTR):</strong> Average time to respond to incidents</li>
                <li><strong>Security Event Volume:</strong> Number of security events processed per day</li>
                <li><strong>Vulnerability Metrics:</strong> Number of critical/high vulnerabilities, remediation time</li>
                <li><strong>Compliance Score:</strong> Percentage of systems meeting security configuration baselines</li>
                <li><strong>User Training Metrics:</strong> Security awareness training completion rates, phishing test results</li>
            </ul>
            
            <h4 style="color: #AF7AC5;">Compliance Auditing</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Audit Types:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Internal Audits:</strong> Regular self-assessments of security controls and procedures</li>
                    <li><strong>External Audits:</strong> Third-party assessments for compliance certification</li>
                    <li><strong>Regulatory Audits:</strong> Government or industry regulator examinations</li>
                    <li><strong>Vendor Audits:</strong> Security assessments of third-party service providers</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the role of SIEM in security monitoring</li>
                    <li>Know how to configure logging on network devices</li>
                    <li>Recognize importance of vulnerability assessments</li>
                    <li>Understand security metrics and their business value</li>
                </ul>
            </div>
        </div>
    `,

    "Compliance & Governance": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.2: Security Program Elements - Compliance & Governance</h3>
            <p>Compliance and governance ensure organizations meet regulatory requirements and maintain effective security oversight. This includes understanding regulatory frameworks, risk management, and third-party security assessments.</p>
            
            <h4 style="color: #AF7AC5;">Key Regulatory Frameworks</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>SOX (Sarbanes-Oxley):</strong> Financial reporting controls and data integrity requirements</li>
                    <li><strong>HIPAA:</strong> Healthcare data privacy and security requirements</li>
                    <li><strong>PCI-DSS:</strong> Payment card industry data security standards</li>
                    <li><strong>GDPR:</strong> European Union data protection and privacy regulation</li>
                    <li><strong>ISO 27001:</strong> International standard for information security management systems</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">PCI-DSS Requirements Overview</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Requirement</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Description</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Network Impact</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">1. Firewall Protection</td>
                    <td style="border: 1px solid #444; padding: 8px;">Install and maintain firewall configuration</td>
                    <td style="border: 1px solid #444; padding: 8px;">Network segmentation, access controls</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">2. Default Passwords</td>
                    <td style="border: 1px solid #444; padding: 8px;">Do not use vendor-supplied defaults</td>
                    <td style="border: 1px solid #444; padding: 8px;">Router/switch password policies</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">3. Protect Cardholder Data</td>
                    <td style="border: 1px solid #444; padding: 8px;">Protect stored cardholder data</td>
                    <td style="border: 1px solid #444; padding: 8px;">Encryption, secure storage</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">4. Encrypt Transmission</td>
                    <td style="border: 1px solid #444; padding: 8px;">Encrypt cardholder data across networks</td>
                    <td style="border: 1px solid #444; padding: 8px;">VPN, TLS/SSL implementation</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Risk Management Framework</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Risk Assessment Process:</strong></p>
                <ol style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Asset Identification:</strong> Catalog critical assets and their value</li>
                    <li><strong>Threat Analysis:</strong> Identify potential threats and attack vectors</li>
                    <li><strong>Vulnerability Assessment:</strong> Discover weaknesses in systems and processes</li>
                    <li><strong>Risk Calculation:</strong> Determine likelihood and impact of threats</li>
                    <li><strong>Risk Treatment:</strong> Accept, mitigate, transfer, or avoid risks</li>
                    <li><strong>Monitoring:</strong> Continuously monitor risk levels and controls</li>
                </ol>
            </div>
            
            <h4 style="color: #AF7AC5;">Governance Structure</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Key Governance Bodies:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Security Steering Committee:</strong> Executive oversight and strategic direction</li>
                    <li><strong>Risk Committee:</strong> Risk assessment and treatment decisions</li>
                    <li><strong>Architecture Review Board:</strong> Technical security architecture approval</li>
                    <li><strong>Change Advisory Board:</strong> Change management and security impact assessment</li>
                    <li><strong>Data Governance Committee:</strong> Data classification and handling policies</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Third-Party Risk Management</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Vendor Security Assessments:</strong> Security questionnaires and due diligence</li>
                <li><strong>Contract Security Requirements:</strong> Security clauses and SLA requirements</li>
                <li><strong>Ongoing Monitoring:</strong> Regular vendor security posture reviews</li>
                <li><strong>Supply Chain Security:</strong> Security requirements for suppliers and partners</li>
                <li><strong>Data Processing Agreements:</strong> GDPR and privacy compliance for data processors</li>
            </ul>
            
            <h4 style="color: #AF7AC5;">Compliance Monitoring & Reporting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Network compliance verification commands</span>
Router# <span style="color: #DCDCAA;">show running-config | include password</span>
Router# <span style="color: #DCDCAA;">show ip access-lists</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa</span>

<span style="color: #6A9955;"># Configuration baseline validation</span>
Switch# <span style="color: #DCDCAA;">show port-security</span>
Switch# <span style="color: #DCDCAA;">show spanning-tree summary</span>
Switch# <span style="color: #DCDCAA;">show vlan brief</span>

<span style="color: #6A9955;"># Security logging verification</span>
Device# <span style="color: #DCDCAA;">show logging | include security</span>
Device# <span style="color: #DCDCAA;">show snmp host</span>
</code>
            </pre>
            
            <h4 style="color: #AF7AC5;">Audit Evidence & Documentation</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Policy Documentation:</strong> Current security policies and procedures</li>
                <li><strong>Configuration Standards:</strong> Security baseline configurations</li>
                <li><strong>Training Records:</strong> Security awareness training completion</li>
                <li><strong>Incident Reports:</strong> Security incident documentation and response</li>
                <li><strong>Vulnerability Assessments:</strong> Regular security testing results</li>
                <li><strong>Access Reviews:</strong> Periodic user access certifications</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand major compliance frameworks (PCI-DSS, HIPAA, SOX)</li>
                    <li>Know the importance of risk management in security programs</li>
                    <li>Recognize governance structures and their roles</li>
                    <li>Understand network security compliance requirements</li>
                </ul>
            </div>
        </div>
    `,

    // 5.7 Layer 2 Security Features (Port Security, DHCP Snooping, ARP Inspection combined)
    "Port Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.7: Port Security - MAC Address-Based Access Control</h3>
            <p>Port Security restricts input to an interface by limiting and identifying MAC addresses. It prevents unauthorized devices from connecting to switch ports and provides configurable violation actions to maintain network security.</p>
            
            <h4 style="color: #AF7AC5;">Port Security Fundamentals</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>MAC Address Limiting:</strong> Restrict the number of devices that can connect to a port</li>
                    <li><strong>Unauthorized Device Prevention:</strong> Block unknown MAC addresses from accessing the network</li>
                    <li><strong>CAM Table Protection:</strong> Prevent MAC flooding attacks that overflow switch memory</li>
                    <li><strong>Security Violation Actions:</strong> Configurable responses to security breaches</li>
                    <li><strong>Access Port Requirement:</strong> Only works on access ports, not trunk ports</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Complete Port Security Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Basic port security setup</span>
Switch(config)# <span style="color: #DCDCAA;">interface FastEthernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport mode access</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport access vlan 10</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security</span>

<span style="color: #6A9955;">! Configure maximum MAC addresses (default: 1)</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security maximum 3</span>

<span style="color: #6A9955;">! Configure MAC address learning methods</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security mac-address sticky</span>

<span style="color: #6A9955;">! Static MAC address configuration</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security mac-address 0023.5566.4321</span>

<span style="color: #6A9955;">! Violation action configuration</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security violation restrict</span>

<span style="color: #6A9955;">! Aging configuration</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security aging time 120</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security aging type inactivity</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">MAC Address Learning Methods</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Method</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Description</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Persistence</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Static</td>
                    <td style="border: 1px solid #444; padding: 8px;">Manually configured MAC addresses</td>
                    <td style="border: 1px solid #444; padding: 8px;">Saved in running-config</td>
                    <td style="border: 1px solid #444; padding: 8px;">Known devices, servers</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Dynamic</td>
                    <td style="border: 1px solid #444; padding: 8px;">Learned automatically from traffic</td>
                    <td style="border: 1px solid #444; padding: 8px;">Lost on switch reload</td>
                    <td style="border: 1px solid #444; padding: 8px;">Temporary connections</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Sticky</td>
                    <td style="border: 1px solid #444; padding: 8px;">Learned and converted to static</td>
                    <td style="border: 1px solid #444; padding: 8px;">Saved in running-config</td>
                    <td style="border: 1px solid #444; padding: 8px;">User workstations</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Port Security Violation Actions</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Violation Mode</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Action Taken</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Traffic Forwarded</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">SNMP Trap</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Syslog Message</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Protect</td>
                    <td style="border: 1px solid #444; padding: 8px;">Drops violating frames silently</td>
                    <td style="border: 1px solid #444; padding: 8px;">Authorized only</td>
                    <td style="border: 1px solid #444; padding: 8px;">No</td>
                    <td style="border: 1px solid #444; padding: 8px;">No</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Restrict</td>
                    <td style="border: 1px solid #444; padding: 8px;">Drops frames and logs violations</td>
                    <td style="border: 1px solid #444; padding: 8px;">Authorized only</td>
                    <td style="border: 1px solid #444; padding: 8px;">Yes</td>
                    <td style="border: 1px solid #444; padding: 8px;">Yes</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Shutdown (Default)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Places port in err-disable state</td>
                    <td style="border: 1px solid #444; padding: 8px;">None</td>
                    <td style="border: 1px solid #444; padding: 8px;">Yes</td>
                    <td style="border: 1px solid #444; padding: 8px;">Yes</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Advanced Port Security Features</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Aging configuration options</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security aging time 1440</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security aging type absolute</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security aging static</span>

<span style="color: #6A9955;">! Configure for voice and data (IP phone scenario)</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport voice vlan 200</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security maximum 3</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security maximum 2 vlan access</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport port-security maximum 1 vlan voice</span>

<span style="color: #6A9955;">! Error recovery configuration</span>
Switch(config)# <span style="color: #DCDCAA;">errdisable recovery cause psecure-violation</span>
Switch(config)# <span style="color: #DCDCAA;">errdisable recovery interval 300</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Port Security Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! View port security configuration</span>
Switch# <span style="color: #DCDCAA;">show port-security</span>
Switch# <span style="color: #DCDCAA;">show port-security interface fastethernet0/1</span>

<span style="color: #6A9955;">! View secure MAC addresses</span>
Switch# <span style="color: #DCDCAA;">show port-security address</span>
Switch# <span style="color: #DCDCAA;">show mac address-table secure</span>

<span style="color: #6A9955;">! Check violation statistics</span>
Switch# <span style="color: #DCDCAA;">show port-security interface fastethernet0/1 violation</span>

<span style="color: #6A9955;">! View error-disabled interfaces</span>
Switch# <span style="color: #DCDCAA;">show interfaces status err-disabled</span>

<span style="color: #6A9955;">! Clear violation counters</span>
Switch# <span style="color: #DCDCAA;">clear port-security all</span>
Switch# <span style="color: #DCDCAA;">clear port-security configured interface fastethernet0/1</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Port Security Troubleshooting</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <p><strong>Common Issues and Solutions:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Port stuck in err-disable:</strong> Check violation count, verify MAC addresses, manually recover with shutdown/no shutdown</li>
                    <li><strong>Legitimate users blocked:</strong> Increase maximum MAC count or use aging to remove old entries</li>
                    <li><strong>Sticky MACs not saving:</strong> Ensure "copy running-config startup-config" after sticky learning</li>
                    <li><strong>Voice VLAN issues:</strong> Configure separate maximums for access and voice VLANs</li>
                    <li><strong>MAC table conflicts:</strong> Clear old entries or use aging to automatically remove inactive MACs</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Security Considerations</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Default Action:</strong> Shutdown provides strongest security but requires manual intervention</li>
                    <li><strong>Restrict vs Protect:</strong> Restrict provides logging while Protect offers silent protection</li>
                    <li><strong>Maximum Count:</strong> Set based on legitimate device requirements (PC + phone = 2-3 MACs)</li>
                    <li><strong>Aging Policy:</strong> Use inactivity aging for dynamic environments, absolute for static</li>
                    <li><strong>Recovery Time:</strong> Balance security with operational efficiency for auto-recovery</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the three MAC address learning methods: static, dynamic, sticky</li>
                    <li>Know the differences between violation actions: protect, restrict, shutdown</li>
                    <li>Configure port security with appropriate maximum MAC count</li>
                    <li>Understand aging mechanisms and error-disable recovery</li>
                </ul>
            </div>
        </div>
    `,

    "DHCP Snooping": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.7: DHCP Snooping - Rogue DHCP Server Protection</h3>
            <p>DHCP Snooping is a security feature that acts as a firewall between untrusted hosts and trusted DHCP servers. It validates DHCP messages, builds a binding database of legitimate IP-to-MAC mappings, and prevents rogue DHCP server attacks.</p>
            
            <h4 style="color: #AF7AC5;">DHCP Snooping Operation Principles</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Trusted Ports:</strong> Connect to legitimate DHCP servers, routers, and other switches - DHCP server messages allowed</li>
                    <li><strong>Untrusted Ports:</strong> Connect to client devices and potentially rogue servers - DHCP server messages dropped</li>
                    <li><strong>Binding Database:</strong> Tracks legitimate IP-to-MAC-to-VLAN-to-Port mappings from DHCP transactions</li>
                    <li><strong>Rate Limiting:</strong> Prevents DHCP discover/request flooding attacks from overwhelming the network</li>
                    <li><strong>Option 82 Support:</strong> Adds switch and port information to DHCP requests for enhanced tracking</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Complete DHCP Snooping Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Enable DHCP snooping globally</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping</span>

<span style="color: #6A9955;">! Enable on specific VLANs</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping vlan 10,20,30-50</span>

<span style="color: #6A9955;">! Configure trusted interface (toward DHCP server)</span>
Switch(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">description "Uplink to DHCP Server"</span>
Switch(config-if)# <span style="color: #DCDCAA;">ip dhcp snooping trust</span>

<span style="color: #6A9955;">! Configure rate limiting on untrusted ports</span>
Switch(config)# <span style="color: #DCDCAA;">interface range FastEthernet0/1-24</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">description "Client Access Ports"</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">ip dhcp snooping limit rate 15</span>

<span style="color: #6A9955;">! Handle Option 82 (DHCP relay agent information)</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping information option</span>

<span style="color: #6A9955;">! Configure database storage for binding table</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping database tftp://192.168.1.100/dhcp-snooping.db</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping database write-delay 15</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping database timeout 300</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">DHCP Snooping Binding Database</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <p><strong>Database Entry Components:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>MAC Address:</strong> Client device's hardware address</li>
                    <li><strong>IP Address:</strong> IP address assigned by DHCP server</li>
                    <li><strong>Lease Time:</strong> Duration of the DHCP lease</li>
                    <li><strong>Binding Type:</strong> Dynamic (learned from DHCP) or Static (manually configured)</li>
                    <li><strong>VLAN ID:</strong> VLAN where the binding was learned</li>
                    <li><strong>Interface:</strong> Switch port where the client is connected</li>
                </ul>
                
                <p><strong>Database Storage Options:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Store on TFTP server</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping database tftp://192.168.1.100/binding.db</span>

<span style="color: #6A9955;">! Store on flash memory</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping database flash:binding.db</span>

<span style="color: #6A9955;">! Store on FTP server</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping database ftp://user:pass@192.168.1.100/binding.db</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #AF7AC5;">DHCP Snooping Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! View DHCP snooping global status</span>
Switch# <span style="color: #DCDCAA;">show ip dhcp snooping</span>

<span style="color: #6A9955;">! View binding database entries</span>
Switch# <span style="color: #DCDCAA;">show ip dhcp snooping binding</span>
Switch# <span style="color: #DCDCAA;">show ip dhcp snooping binding vlan 10</span>

<span style="color: #6A9955;">! View trusted and untrusted interfaces</span>
Switch# <span style="color: #DCDCAA;">show ip dhcp snooping trust</span>

<span style="color: #6A9955;">! View DHCP snooping statistics</span>
Switch# <span style="color: #DCDCAA;">show ip dhcp snooping statistics</span>

<span style="color: #6A9955;">! View database status and agent information</span>
Switch# <span style="color: #DCDCAA;">show ip dhcp snooping database</span>

<span style="color: #6A9955;">! Clear statistics and bindings</span>
Switch# <span style="color: #DCDCAA;">clear ip dhcp snooping statistics</span>
Switch# <span style="color: #DCDCAA;">clear ip dhcp snooping binding vlan 10</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Option 82 (DHCP Relay Agent Information)</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Sub-option</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Description</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Information Added</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Circuit ID (1)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Identifies the switch port</td>
                    <td style="border: 1px solid #444; padding: 8px;">Interface name (e.g., Fa0/1)</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Remote ID (2)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Identifies the switch</td>
                    <td style="border: 1px solid #444; padding: 8px;">Switch MAC address</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Advanced DHCP Snooping Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Custom Option 82 circuit ID</span>
Switch(config-if)# <span style="color: #DCDCAA;">ip dhcp snooping information option format remote-id string "SW01-Building-A"</span>

<span style="color: #6A9955;">! Configure static bindings (manual entries)</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping binding 0023.5566.4321 vlan 10 192.168.10.100 interface FastEthernet0/5 expiry 86400</span>

<span style="color: #6A9955;">! Verify Option 82 from server side</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping verify mac-address</span>

<span style="color: #6A9955;">! Configure DHCP snooping for wireless clients</span>
Switch(config-if)# <span style="color: #DCDCAA;">ip dhcp snooping wireless bootp-broadcast enable</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">DHCP Snooping Troubleshooting</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <p><strong>Common Issues and Solutions:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>DHCP clients can't get IP addresses:</strong> Check if server port is trusted, verify VLAN configuration</li>
                    <li><strong>Legitimate DHCP server blocked:</strong> Ensure server interface is configured as trusted</li>
                    <li><strong>Rate limiting drops legitimate requests:</strong> Increase rate limit or remove from trusted ports</li>
                    <li><strong>Option 82 rejected by server:</strong> Configure server to accept or disable Option 82 insertion</li>
                    <li><strong>Binding database not persistent:</strong> Configure database storage to TFTP/flash</li>
                    <li><strong>High CPU due to DHCP processing:</strong> Check for DHCP flooding attacks, verify rate limits</li>
                </ul>
                
                <p><strong>Debug Commands (use with caution):</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
Switch# <span style="color: #DCDCAA;">debug ip dhcp snooping packet</span>
Switch# <span style="color: #DCDCAA;">debug ip dhcp snooping event</span>
Switch# <span style="color: #DCDCAA;">debug ip dhcp snooping agent</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #AF7AC5;">Security Benefits and Attack Prevention</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Rogue DHCP Server Prevention:</strong> Only trusted ports can send DHCP server messages</li>
                    <li><strong>DHCP Starvation Mitigation:</strong> Rate limiting prevents excessive DHCP requests</li>
                    <li><strong>IP-MAC Binding Enforcement:</strong> Creates foundation for Dynamic ARP Inspection</li>
                    <li><strong>Network Visibility:</strong> Option 82 provides detailed client location information</li>
                    <li><strong>Compliance Support:</strong> Audit trail of IP address assignments for security investigations</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand trusted vs. untrusted port concepts and their security implications</li>
                    <li>Know how DHCP snooping prevents rogue DHCP servers from affecting the network</li>
                    <li>Configure rate limiting to prevent DHCP flooding attacks</li>
                    <li>Understand the binding database components and its role in Dynamic ARP Inspection</li>
                    <li>Know the purpose of Option 82 in DHCP relay agent information</li>
                </ul>
            </div>
        </div>
    `,

    "Dynamic ARP Inspection": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.7: Dynamic ARP Inspection - Layer 2 Security Feature</h3>
            <p>Dynamic ARP Inspection (DAI) is a security feature that validates ARP packets in a network. It intercepts, logs, and discards ARP packets with invalid IP-to-MAC address bindings.</p>
            
            <h4 style="color: #AF7AC5;">ARP Spoofing Attack Prevention</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <p><strong>How ARP Spoofing Works:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li>Attacker sends fake ARP replies claiming to own victim's IP address</li>
                    <li>Other devices update their ARP tables with incorrect MAC mapping</li>
                    <li>Traffic intended for victim gets redirected to attacker</li>
                    <li>Enables man-in-the-middle attacks and network disruption</li>
                </ul>
                
                <p><strong>DAI Protection:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li>Validates ARP packets against DHCP snooping binding database</li>
                    <li>Drops ARP packets with mismatched IP-to-MAC bindings</li>
                    <li>Logs security violations for network monitoring</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Complete DAI Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
! PREREQUISITE: DHCP Snooping must be enabled first
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping</span>
Switch(config)# <span style="color: #DCDCAA;">ip dhcp snooping vlan 10,20</span>

! Enable DAI on VLANs
Switch(config)# <span style="color: #DCDCAA;">ip arp inspection vlan 10,20</span>

! Configure trusted interfaces (routers, servers)
Switch(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">ip arp inspection trust</span>

! Rate limiting to prevent DoS
Switch(config-if)# <span style="color: #DCDCAA;">ip arp inspection limit rate 15</span>

! Additional validation checks
Switch(config)# <span style="color: #DCDCAA;">ip arp inspection validate src-mac</span>
Switch(config)# <span style="color: #DCDCAA;">ip arp inspection validate dst-mac</span>
Switch(config)# <span style="color: #DCDCAA;">ip arp inspection validate ip</span>

! Or enable all validations at once
Switch(config)# <span style="color: #DCDCAA;">ip arp inspection validate src-mac dst-mac ip</span>

! Static ARP entries for devices without DHCP
Switch(config)# <span style="color: #DCDCAA;">arp access-list STATIC-HOSTS</span>
Switch(config-arp-nacl)# <span style="color: #DCDCAA;">permit ip host 192.168.1.100 mac host 0023.5566.4321</span>
Switch(config)# <span style="color: #DCDCAA;">ip arp inspection filter STATIC-HOSTS vlan 10</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">DAI Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
! View DAI status
Switch# <span style="color: #DCDCAA;">show ip arp inspection</span>

! View DAI statistics
Switch# <span style="color: #DCDCAA;">show ip arp inspection statistics</span>

! View DAI interfaces
Switch# <span style="color: #DCDCAA;">show ip arp inspection interfaces</span>

! View DAI logs
Switch# <span style="color: #DCDCAA;">show ip arp inspection log</span>

! Clear DAI statistics
Switch# <span style="color: #DCDCAA;">clear ip arp inspection statistics</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">DAI Validation Options</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Validation Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Purpose</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">What It Checks</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">src-mac</td>
                    <td style="border: 1px solid #444; padding: 8px;">Source MAC validation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Sender MAC in Ethernet header matches ARP body</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">dst-mac</td>
                    <td style="border: 1px solid #444; padding: 8px;">Destination MAC validation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Target MAC in ARP body matches Ethernet header</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">ip</td>
                    <td style="border: 1px solid #444; padding: 8px;">IP address validation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Valid IP addresses, no 0.0.0.0, multicast, broadcast</td>
                </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand DAI dependency on DHCP snooping binding table</li>
                    <li>Know how to configure trusted vs. untrusted interfaces</li>
                    <li>Configure additional ARP packet validation options</li>
                    <li>Understand rate limiting to prevent ARP DoS attacks</li>
                </ul>
            </div>
        </div>
    `,

    "802.1X Authentication": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.7: 802.1X Authentication - Port-Based Network Access Control</h3>
            <p>802.1X provides port-based network access control (PNAC) that authenticates devices before granting network access. It uses the Extensible Authentication Protocol (EAP) to provide centralized authentication via RADIUS servers.</p>
            
            <h4 style="color: #AF7AC5;">802.1X Authentication Components</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Supplicant:</strong> Client device requesting network access (PC, laptop, phone)</li>
                    <li><strong>Authenticator:</strong> Network device controlling access (switch or wireless AP)</li>
                    <li><strong>Authentication Server:</strong> RADIUS server that validates credentials</li>
                    <li><strong>EAP:</strong> Extensible Authentication Protocol for credential exchange</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Complete 802.1X Switch Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Enable 802.1X globally</span>
Switch(config)# <span style="color: #DCDCAA;">dot1x system-auth-control</span>

<span style="color: #6A9955;">! Configure RADIUS server</span>
Switch(config)# <span style="color: #DCDCAA;">radius server RADIUS-SERVER</span>
Switch(config-radius-server)# <span style="color: #DCDCAA;">address ipv4 192.168.100.10 auth-port 1812 acct-port 1813</span>
Switch(config-radius-server)# <span style="color: #DCDCAA;">key SecureRadius2024!</span>
Switch(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Switch(config)# <span style="color: #DCDCAA;">aaa authentication dot1x default group radius</span>

<span style="color: #6A9955;">! Configure access port for 802.1X</span>
Switch(config)# <span style="color: #DCDCAA;">interface FastEthernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport mode access</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport access vlan 10</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x port-control auto</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x timeout reauth-period 7200</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x max-req 3</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">802.1X Port Control Modes</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Port Control Mode</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Behavior</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">force-authorized</td>
                    <td style="border: 1px solid #444; padding: 8px;">Always allow access without authentication</td>
                    <td style="border: 1px solid #444; padding: 8px;">Servers, printers, trusted devices</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">force-unauthorized</td>
                    <td style="border: 1px solid #444; padding: 8px;">Always deny access regardless of authentication</td>
                    <td style="border: 1px solid #444; padding: 8px;">Disabled ports, security quarantine</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">auto</td>
                    <td style="border: 1px solid #444; padding: 8px;">Require 802.1X authentication</td>
                    <td style="border: 1px solid #444; padding: 8px;">User workstations, laptops</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Advanced 802.1X Features</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Multiple host support</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x host-mode multi-host</span>

<span style="color: #6A9955;">! Guest VLAN for non-802.1X devices</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x guest-vlan 20</span>

<span style="color: #6A9955;">! Restricted VLAN for failed authentication</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x auth-fail-vlan 30</span>

<span style="color: #6A9955;">! Periodic re-authentication</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x reauthentication</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x timeout reauth-period 3600</span>

<span style="color: #6A9955;">! Critical voice VLAN</span>
Switch(config-if)# <span style="color: #DCDCAA;">dot1x critical vlan 40</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">802.1X Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! View 802.1X status</span>
Switch# <span style="color: #DCDCAA;">show dot1x all</span>
Switch# <span style="color: #DCDCAA;">show dot1x interface fastethernet0/1</span>

<span style="color: #6A9955;">! View authentication sessions</span>
Switch# <span style="color: #DCDCAA;">show authentication sessions</span>
Switch# <span style="color: #DCDCAA;">show authentication sessions interface fastethernet0/1</span>

<span style="color: #6A9955;">! Authentication statistics</span>
Switch# <span style="color: #DCDCAA;">show dot1x statistics</span>

<span style="color: #6A9955;">! Clear authentication sessions</span>
Switch# <span style="color: #DCDCAA;">clear dot1x sessions</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">EAP Authentication Process</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ol style="margin-left: 20px;">
                    <li><strong>Link Detection:</strong> Supplicant connects to authenticator port</li>
                    <li><strong>EAP-Start:</strong> Supplicant sends EAP-Start frame to initiate authentication</li>
                    <li><strong>EAP-Request Identity:</strong> Authenticator requests identity from supplicant</li>
                    <li><strong>EAP-Response Identity:</strong> Supplicant provides username/identity</li>
                    <li><strong>RADIUS Access-Request:</strong> Authenticator forwards credentials to RADIUS server</li>
                    <li><strong>EAP-Challenge:</strong> RADIUS server sends authentication challenge</li>
                    <li><strong>EAP-Response:</strong> Supplicant provides authentication response</li>
                    <li><strong>RADIUS Access-Accept/Reject:</strong> Server accepts or rejects authentication</li>
                    <li><strong>Port Authorization:</strong> Authenticator allows or denies network access</li>
                </ol>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the three 802.1X components: supplicant, authenticator, authentication server</li>
                    <li>Know the difference between port control modes: auto, force-authorized, force-unauthorized</li>
                    <li>Configure basic 802.1X authentication with RADIUS integration</li>
                    <li>Understand guest VLAN and auth-fail VLAN concepts</li>
                </ul>
            </div>
        </div>
    `,

    "Storm Control": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.7: Storm Control - Traffic Storm Prevention</h3>
            <p>Storm Control prevents broadcast, multicast, or unicast traffic storms from disrupting network performance. It monitors traffic rates and takes action when thresholds are exceeded to maintain network stability.</p>
            
            <h4 style="color: #AF7AC5;">Traffic Storm Types</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Broadcast Storms:</strong> Excessive broadcast frames (ARP requests, DHCP discovers, spanning tree BPDUs)</li>
                    <li><strong>Multicast Storms:</strong> Overwhelming multicast traffic (video streaming, routing protocol hellos)</li>
                    <li><strong>Unicast Storms:</strong> Flooding of unknown unicast frames when CAM table is full</li>
                    <li><strong>DLF Flooding:</strong> Destination Learning Failure causing unicast flooding</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Storm Control Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure storm control on interface</span>
Switch(config)# <span style="color: #DCDCAA;">interface FastEthernet0/1</span>

<span style="color: #6A9955;">! Broadcast storm control (percentage of bandwidth)</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control broadcast level 50.00</span>

<span style="color: #6A9955;">! Multicast storm control</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control multicast level 25.00</span>

<span style="color: #6A9955;">! Unicast storm control</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control unicast level 75.00</span>

<span style="color: #6A9955;">! Configure action when threshold exceeded</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control action shutdown</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control action trap</span>

<span style="color: #6A9955;">! Apply to interface range</span>
Switch(config)# <span style="color: #DCDCAA;">interface range FastEthernet0/1-24</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">storm-control broadcast level 50.00</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">storm-control action shutdown</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Storm Control Threshold Options</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Threshold Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Unit</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Range</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Example</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Percentage</td>
                    <td style="border: 1px solid #444; padding: 8px;">% of total bandwidth</td>
                    <td style="border: 1px solid #444; padding: 8px;">0.00 - 100.00</td>
                    <td style="border: 1px solid #444; padding: 8px;">level 50.00 (50%)</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Packets per second</td>
                    <td style="border: 1px solid #444; padding: 8px;">pps</td>
                    <td style="border: 1px solid #444; padding: 8px;">0 - 2,147,483,647</td>
                    <td style="border: 1px solid #444; padding: 8px;">level pps 1000</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Bits per second</td>
                    <td style="border: 1px solid #444; padding: 8px;">bps</td>
                    <td style="border: 1px solid #444; padding: 8px;">0 - max interface speed</td>
                    <td style="border: 1px solid #444; padding: 8px;">level bps 10000000</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Storm Control Actions</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Action: Shutdown port (default)</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control action shutdown</span>

<span style="color: #6A9955;">! Action: Send SNMP trap only</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control action trap</span>

<span style="color: #6A9955;">! Combined actions</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control action shutdown trap</span>

<span style="color: #6A9955;">! Recover from error-disabled state</span>
Switch(config)# <span style="color: #DCDCAA;">errdisable recovery cause storm-control</span>
Switch(config)# <span style="color: #DCDCAA;">errdisable recovery interval 300</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Advanced Storm Control Features</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <h5 style="color: #AF7AC5; margin-bottom: 10px;">Rising and Falling Thresholds:</h5>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure hysteresis to prevent flapping</span>
Switch(config-if)# <span style="color: #DCDCAA;">storm-control broadcast level 80.00 60.00</span>
<span style="color: #6A9955;">! Rising threshold: 80%, Falling threshold: 60%</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #AF7AC5;">Storm Control Verification</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! View storm control configuration</span>
Switch# <span style="color: #DCDCAA;">show storm-control</span>
Switch# <span style="color: #DCDCAA;">show storm-control fastethernet0/1</span>

<span style="color: #6A9955;">! View storm control statistics</span>
Switch# <span style="color: #DCDCAA;">show storm-control statistics</span>

<span style="color: #6A9955;">! Check error-disabled interfaces</span>
Switch# <span style="color: #DCDCAA;">show interfaces status err-disabled</span>

<span style="color: #6A9955;">! Monitor interface utilization</span>
Switch# <span style="color: #DCDCAA;">show interfaces fastethernet0/1 | include rate</span>

<span style="color: #6A9955;">! Clear storm control statistics</span>
Switch# <span style="color: #DCDCAA;">clear storm-control statistics</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Storm Control Best Practices</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Conservative Thresholds:</strong> Start with higher thresholds (60-80%) and adjust based on monitoring</li>
                    <li><strong>Different Traffic Types:</strong> Use lower thresholds for multicast than broadcast traffic</li>
                    <li><strong>Hysteresis:</strong> Configure falling threshold 10-20% below rising threshold</li>
                    <li><strong>Auto-Recovery:</strong> Enable error-disable recovery to automatically restore blocked ports</li>
                    <li><strong>Monitoring:</strong> Implement SNMP traps for early storm detection</li>
                    <li><strong>Testing:</strong> Test storm control thresholds during maintenance windows</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand broadcast, multicast, and unicast storm types</li>
                    <li>Configure storm control thresholds using percentage of bandwidth</li>
                    <li>Know storm control actions: shutdown and trap</li>
                    <li>Configure error-disable recovery for storm control</li>
                </ul>
            </div>
        </div>
    `,

    "VLAN Access Control Lists": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.7: VLAN Access Control Lists - Intra-VLAN Security</h3>
            <p>VLAN Access Control Lists (VACLs) filter traffic within VLANs using access control lists applied to VLAN interfaces. They provide Layer 2 filtering for intra-VLAN communication control and security policy enforcement.</p>
            
            <h4 style="color: #AF7AC5;">VACL Overview and Benefits</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Intra-VLAN Filtering:</strong> Control traffic between devices in the same VLAN</li>
                    <li><strong>Security Segmentation:</strong> Prevent unauthorized communication within VLANs</li>
                    <li><strong>Compliance:</strong> Meet regulatory requirements for network segmentation</li>
                    <li><strong>Microsegmentation:</strong> Implement zero-trust network architecture</li>
                    <li><strong>Layer 2 Protection:</strong> Filter at the VLAN level before routing decisions</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">VACL Configuration Process</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Step 1: Create access control list</span>
Switch(config)# <span style="color: #DCDCAA;">ip access-list extended VLAN10_FILTER</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 192.168.10.0 0.0.0.255 host 192.168.10.100 eq 80</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 192.168.10.0 0.0.0.255 host 192.168.10.100 eq 443</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">deny ip 192.168.10.0 0.0.0.255 192.168.10.0 0.0.0.255</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit ip any any</span>

<span style="color: #6A9955;">! Step 2: Create VLAN access map</span>
Switch(config)# <span style="color: #DCDCAA;">vlan access-map VLAN10_MAP 10</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">match ip address VLAN10_FILTER</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">action forward</span>

<span style="color: #6A9955;">! Step 3: Apply VACL to VLAN</span>
Switch(config)# <span style="color: #DCDCAA;">vlan filter VLAN10_MAP vlan-list 10</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">VACL Action Types</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Action</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Behavior</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">forward</td>
                    <td style="border: 1px solid #444; padding: 8px;">Allow matching traffic to proceed</td>
                    <td style="border: 1px solid #444; padding: 8px;">Permit authorized communication</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">drop</td>
                    <td style="border: 1px solid #444; padding: 8px;">Silently discard matching traffic</td>
                    <td style="border: 1px solid #444; padding: 8px;">Block unauthorized access quietly</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">forward capture</td>
                    <td style="border: 1px solid #444; padding: 8px;">Forward and copy to capture device</td>
                    <td style="border: 1px solid #444; padding: 8px;">Traffic monitoring and analysis</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">redirect</td>
                    <td style="border: 1px solid #444; padding: 8px;">Redirect to specified interface</td>
                    <td style="border: 1px solid #444; padding: 8px;">Traffic inspection appliances</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Complex VACL Example - DMZ Segmentation</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! DMZ VLAN 100 access control</span>
Switch(config)# <span style="color: #DCDCAA;">ip access-list extended DMZ_WEB_ACCESS</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.100.1.10 eq 80</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.100.1.10 eq 443</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.100.1.20 eq 25</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.100.1.20 eq 587</span>

Switch(config)# <span style="color: #DCDCAA;">ip access-list extended DMZ_ADMIN_ACCESS</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 10.1.1.0 0.0.0.255 10.100.1.0 0.0.0.255 eq 22</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 10.1.1.0 0.0.0.255 10.100.1.0 0.0.0.255 eq 3389</span>

Switch(config)# <span style="color: #DCDCAA;">ip access-list extended DMZ_BLOCK_LATERAL</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">deny ip 10.100.1.0 0.0.0.255 10.100.1.0 0.0.0.255</span>

<span style="color: #6A9955;">! Create access maps with priorities</span>
Switch(config)# <span style="color: #DCDCAA;">vlan access-map DMZ_SECURITY 10</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">match ip address DMZ_WEB_ACCESS</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">action forward</span>

Switch(config)# <span style="color: #DCDCAA;">vlan access-map DMZ_SECURITY 20</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">match ip address DMZ_ADMIN_ACCESS</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">action forward</span>

Switch(config)# <span style="color: #DCDCAA;">vlan access-map DMZ_SECURITY 30</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">match ip address DMZ_BLOCK_LATERAL</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">action drop</span>

Switch(config)# <span style="color: #DCDCAA;">vlan access-map DMZ_SECURITY 40</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">action forward</span>

<span style="color: #6A9955;">! Apply to DMZ VLAN</span>
Switch(config)# <span style="color: #DCDCAA;">vlan filter DMZ_SECURITY vlan-list 100</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">VACL with Capture and Redirect</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Traffic monitoring setup</span>
Switch(config)# <span style="color: #DCDCAA;">ip access-list extended MONITOR_TRAFFIC</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any any eq 443</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any any eq 22</span>

<span style="color: #6A9955;">! Redirect suspicious traffic for inspection</span>
Switch(config)# <span style="color: #DCDCAA;">ip access-list extended SUSPICIOUS_TRAFFIC</span>
Switch(config-ext-nacl)# <span style="color: #DCDCAA;">permit ip host 192.168.50.100 any</span>

Switch(config)# <span style="color: #DCDCAA;">vlan access-map SECURITY_MONITOR 10</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">match ip address MONITOR_TRAFFIC</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">action forward capture</span>

Switch(config)# <span style="color: #DCDCAA;">vlan access-map SECURITY_MONITOR 20</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">match ip address SUSPICIOUS_TRAFFIC</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">action redirect GigabitEthernet0/10</span>

Switch(config)# <span style="color: #DCDCAA;">vlan access-map SECURITY_MONITOR 30</span>
Switch(config-access-map)# <span style="color: #DCDCAA;">action forward</span>

Switch(config)# <span style="color: #DCDCAA;">vlan filter SECURITY_MONITOR vlan-list 50</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">VACL Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! View VACL configuration</span>
Switch# <span style="color: #DCDCAA;">show vlan access-map</span>
Switch# <span style="color: #DCDCAA;">show vlan access-map DMZ_SECURITY</span>

<span style="color: #6A9955;">! View VACL application to VLANs</span>
Switch# <span style="color: #DCDCAA;">show vlan filter</span>
Switch# <span style="color: #DCDCAA;">show vlan filter access-map DMZ_SECURITY</span>

<span style="color: #6A9955;">! View access list statistics</span>
Switch# <span style="color: #DCDCAA;">show ip access-lists DMZ_WEB_ACCESS</span>

<span style="color: #6A9955;">! Debug VACL operation (use carefully)</span>
Switch# <span style="color: #DCDCAA;">debug vlan packets</span>
Switch# <span style="color: #DCDCAA;">debug ip packet detail</span>

<span style="color: #6A9955;">! Remove VACL from VLAN</span>
Switch(config)# <span style="color: #DCDCAA;">no vlan filter DMZ_SECURITY vlan-list 100</span>
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand VACL purpose for intra-VLAN traffic filtering</li>
                    <li>Know the three-step VACL configuration process</li>
                    <li>Configure basic VACL with forward and drop actions</li>
                    <li>Understand VACL sequence numbers and priority processing</li>
                </ul>
            </div>
        </div>
    `,

    "Protected Ports": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #9B59B6; border-bottom: 2px solid #9B59B6; padding-bottom: 5px;">5.7: Protected Ports - Layer 2 Port Isolation</h3>
            <p>Protected ports prevent communication between ports on the same switch, even within the same VLAN. This feature provides isolation for security, regulatory compliance, or network design requirements.</p>
            
            <h4 style="color: #AF7AC5;">Protected Ports Concept</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Isolation Rule:</strong> Protected ports cannot communicate with other protected ports</li>
                    <li><strong>Normal Communication:</strong> Protected ports can communicate with non-protected ports</li>
                    <li><strong>VLAN Scope:</strong> Protection works within the same VLAN and across VLANs</li>
                    <li><strong>Unidirectional:</strong> Protection applies to both unicast and broadcast traffic</li>
                    <li><strong>Hardware Level:</strong> Implemented in switch ASIC for line-rate performance</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Protected Ports Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure individual protected ports</span>
Switch(config)# <span style="color: #DCDCAA;">interface FastEthernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport protected</span>

Switch(config)# <span style="color: #DCDCAA;">interface FastEthernet0/2</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport protected</span>

<span style="color: #6A9955;">! Configure multiple ports as protected</span>
Switch(config)# <span style="color: #DCDCAA;">interface range FastEthernet0/10-20</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">switchport protected</span>

<span style="color: #6A9955;">! Remove protection from port</span>
Switch(config)# <span style="color: #DCDCAA;">interface FastEthernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">no switchport protected</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Use Cases for Protected Ports</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Use Case</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Description</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #AF7AC5;">Benefit</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Guest Network Isolation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prevent guest devices from communicating with each other</td>
                    <td style="border: 1px solid #444; padding: 8px;">Enhanced security, privacy protection</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">DMZ Server Isolation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Isolate DMZ servers from each other</td>
                    <td style="border: 1px solid #444; padding: 8px;">Limit lateral movement in breaches</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Shared Infrastructure</td>
                    <td style="border: 1px solid #444; padding: 8px;">Separate different tenants or departments</td>
                    <td style="border: 1px solid #444; padding: 8px;">Multi-tenancy, compliance</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">IoT Device Security</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prevent IoT devices from peer communication</td>
                    <td style="border: 1px solid #444; padding: 8px;">Reduce attack surface</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Point-of-Sale Systems</td>
                    <td style="border: 1px solid #444; padding: 8px;">Isolate POS terminals from each other</td>
                    <td style="border: 1px solid #444; padding: 8px;">PCI DSS compliance</td>
                </tr>
            </table>
            
            <h4 style="color: #AF7AC5;">Protected Ports Example Scenario</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Guest network configuration with isolation</span>
Switch(config)# <span style="color: #DCDCAA;">vlan 100</span>
Switch(config-vlan)# <span style="color: #DCDCAA;">name GUEST_NETWORK</span>

<span style="color: #6A9955;">! Configure guest access ports with protection</span>
Switch(config)# <span style="color: #DCDCAA;">interface range FastEthernet0/1-10</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">description Guest Access Ports</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">switchport mode access</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">switchport access vlan 100</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">switchport protected</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">spanning-tree portfast</span>

<span style="color: #6A9955;">! Gateway/server port (NOT protected)</span>
Switch(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Switch(config-if)# <span style="color: #DCDCAA;">description Gateway to Internet</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport mode access</span>
Switch(config-if)# <span style="color: #DCDCAA;">switchport access vlan 100</span>
<span style="color: #6A9955;">! Note: No "switchport protected" - guests can reach gateway</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Protected Ports with Private VLANs</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <p><strong>Enhanced Isolation with Private VLANs:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Combine protected ports with private VLANs for maximum isolation</span>
Switch(config)# <span style="color: #DCDCAA;">vlan 200</span>
Switch(config-vlan)# <span style="color: #DCDCAA;">private-vlan community</span>

Switch(config)# <span style="color: #DCDCAA;">interface range FastEthernet0/11-20</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">switchport mode private-vlan host</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">switchport private-vlan host-association 100 200</span>
Switch(config-if-range)# <span style="color: #DCDCAA;">switchport protected</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #AF7AC5;">Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! View protected port configuration</span>
Switch# <span style="color: #DCDCAA;">show interfaces switchport</span>
Switch# <span style="color: #DCDCAA;">show interfaces FastEthernet0/1 switchport</span>

<span style="color: #6A9955;">! Check interface status</span>
Switch# <span style="color: #DCDCAA;">show interfaces status</span>

<span style="color: #6A9955;">! Verify VLAN assignments</span>
Switch# <span style="color: #DCDCAA;">show vlan brief</span>

<span style="color: #6A9955;">! Test connectivity between protected ports</span>
Switch# <span style="color: #DCDCAA;">ping 192.168.100.10 source 192.168.100.20</span>

<span style="color: #6A9955;">! View MAC address table for VLAN</span>
Switch# <span style="color: #DCDCAA;">show mac address-table vlan 100</span>
</code>
</pre>
            
            <h4 style="color: #AF7AC5;">Protected Ports Limitations</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Switch-Local:</strong> Protection only applies within the same switch</li>
                    <li><strong>No Trunk Ports:</strong> Cannot be applied to trunk or dynamic ports</li>
                    <li><strong>Broadcast Impact:</strong> Still receive broadcasts from non-protected ports</li>
                    <li><strong>Layer 2 Only:</strong> Does not provide Layer 3 routing isolation</li>
                    <li><strong>Limited Scalability:</strong> Consider Private VLANs for larger deployments</li>
                </ul>
            </div>
            
            <h4 style="color: #AF7AC5;">Best Practices</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9B59B6;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Document Configuration:</strong> Clearly label which ports are protected and why</li>
                    <li><strong>Test Thoroughly:</strong> Verify isolation works as expected in all scenarios</li>
                    <li><strong>Consider Private VLANs:</strong> For complex isolation requirements</li>
                    <li><strong>Monitor Traffic:</strong> Use SPAN ports to monitor isolated traffic patterns</li>
                    <li><strong>Regular Audits:</strong> Periodically review protected port configurations</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand that protected ports cannot communicate with other protected ports</li>
                    <li>Know that protected ports can still communicate with non-protected ports</li>
                    <li>Configure protected ports using "switchport protected" command</li>
                    <li>Identify use cases for port isolation (guest networks, DMZ, compliance)</li>
                </ul>
            </div>
        </div>
    `,

    // 5.3 Access Control
    "Local User Authentication": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.3: Configure and Verify Device Access Control - Local User Authentication</h3>
            <p>Local user authentication is the foundation of device access control. It provides secure, role-based access using locally stored user credentials with appropriate privilege levels.</p>
            
            <h4 style="color: #58D4FF;">Local User Database Configuration</h4>
            <p>Create local user accounts with appropriate privilege levels for role-based access control:</p>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create users with different privilege levels</span>
Router(config)# <span style="color: #DCDCAA;">username admin privilege 15 secret Adm1n@2024!</span>
Router(config)# <span style="color: #DCDCAA;">username operator privilege 7 secret 0per@t0r!</span>
Router(config)# <span style="color: #DCDCAA;">username readonly privilege 1 secret R3ad0nly#</span>
Router(config)# <span style="color: #DCDCAA;">username backup privilege 15 secret B@ckup2024!</span>

<span style="color: #6A9955;"># Enable password encryption service</span>
Router(config)# <span style="color: #DCDCAA;">service password-encryption</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Privilege Level Structure</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Privilege Level</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Access Rights</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Common Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Level 0</td>
                    <td style="border: 1px solid #444; padding: 8px;">Logout, enable, exit, help, logout</td>
                    <td style="border: 1px solid #444; padding: 8px;">Restricted/disabled accounts</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Level 1</td>
                    <td style="border: 1px solid #444; padding: 8px;">User EXEC mode (show commands, ping, traceroute)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Read-only operators, monitoring staff</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Levels 2-14</td>
                    <td style="border: 1px solid #444; padding: 8px;">Custom command sets (configurable)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Specialized roles (limited config access)</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Level 15</td>
                    <td style="border: 1px solid #444; padding: 8px;">Full privileged EXEC mode (all commands)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Network administrators, full access</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Password Security Best Practices</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Use 'secret' instead of 'password':</strong> Provides MD5 hashing vs. weak Type 7 encryption</li>
                    <li><strong>Minimum 8 characters:</strong> Mix uppercase, lowercase, numbers, special characters</li>
                    <li><strong>Avoid dictionary words:</strong> Use passphrases or random character combinations</li>
                    <li><strong>Regular rotation:</strong> Change passwords every 60-90 days for admin accounts</li>
                    <li><strong>Unique passwords:</strong> Different passwords for each privilege level</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Display local users and privilege levels</span>
Router# <span style="color: #DCDCAA;">show running-config | include username</span>
Router# <span style="color: #DCDCAA;">show privilege</span>

<span style="color: #6A9955;"># Test authentication</span>
Router# <span style="color: #DCDCAA;">show users</span>
Router# <span style="color: #DCDCAA;">show sessions</span>
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand privilege levels 0, 1, and 15 and their access rights</li>
                    <li>Know the difference between username secret and username password</li>
                    <li>Configure role-based access using privilege levels</li>
                    <li>Verify user authentication and current privilege level</li>
                </ul>
            </div>
        </div>
    `,

    "Line Security Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.3: Configure and Verify Device Access Control - Line Security Configuration</h3>
            <p>Line security configuration protects console, VTY (virtual terminal), and auxiliary access points. Proper line security prevents unauthorized physical and remote access to network devices.</p>
            
            <h4 style="color: #58D4FF;">Console Line Security</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <p><strong>Console Port Hardening:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
Router(config)# <span style="color: #DCDCAA;">line console 0</span>
Router(config-line)# <span style="color: #DCDCAA;">login local</span>
Router(config-line)# <span style="color: #DCDCAA;">exec-timeout 10 0</span>
Router(config-line)# <span style="color: #DCDCAA;">logging synchronous</span>
Router(config-line)# <span style="color: #DCDCAA;">privilege level 1</span>
Router(config-line)# <span style="color: #DCDCAA;">no exec</span>  <span style="color: #6A9955;"># Disable if needed</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #58D4FF;">VTY Lines Security (SSH/Telnet)</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure VTY lines for SSH only</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">login local</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input ssh</span>
Router(config-line)# <span style="color: #DCDCAA;">access-class 10 in</span>
Router(config-line)# <span style="color: #DCDCAA;">exec-timeout 15 0</span>
Router(config-line)# <span style="color: #DCDCAA;">session-timeout 30</span>
Router(config-line)# <span style="color: #DCDCAA;">privilege level 1</span>

<span style="color: #6A9955;"># Create access list for VTY access control</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 192.168.1.0 0.0.0.255</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 10.0.0.0 0.255.255.255</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 deny any log</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Auxiliary Line Security</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Secure auxiliary port (often disabled)</span>
Router(config)# <span style="color: #DCDCAA;">line aux 0</span>
Router(config-line)# <span style="color: #DCDCAA;">no exec</span>
Router(config-line)# <span style="color: #DCDCAA;">exec-timeout 0 1</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input none</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Line Security Parameters</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Parameter</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Purpose</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Security Benefit</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">login local</td>
                    <td style="border: 1px solid #444; padding: 8px;">Require username/password authentication</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prevents anonymous access</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">exec-timeout</td>
                    <td style="border: 1px solid #444; padding: 8px;">Automatic session timeout</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prevents idle session hijacking</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">transport input ssh</td>
                    <td style="border: 1px solid #444; padding: 8px;">Allow only SSH connections</td>
                    <td style="border: 1px solid #444; padding: 8px;">Blocks insecure Telnet</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">access-class</td>
                    <td style="border: 1px solid #444; padding: 8px;">IP-based access control</td>
                    <td style="border: 1px solid #444; padding: 8px;">Restricts source networks</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">logging synchronous</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prevent log message interruption</td>
                    <td style="border: 1px solid #444; padding: 8px;">Improves CLI usability</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify line configurations</span>
Router# <span style="color: #DCDCAA;">show line</span>
Router# <span style="color: #DCDCAA;">show running-config | section line</span>

<span style="color: #6A9955;"># Check active sessions</span>
Router# <span style="color: #DCDCAA;">show users</span>
Router# <span style="color: #DCDCAA;">show sessions</span>

<span style="color: #6A9955;"># Monitor access attempts</span>
Router# <span style="color: #DCDCAA;">show logging | include %SYS-5-CONFIG_I</span>
Router# <span style="color: #DCDCAA;">show ip access-lists 10</span>
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure console, VTY, and auxiliary line security</li>
                    <li>Understand exec-timeout and session-timeout parameters</li>
                    <li>Implement transport input restrictions (SSH only)</li>
                    <li>Use access-class for IP-based line access control</li>
                </ul>
            </div>
        </div>
    `,

    "SSH Configuration & Management": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.3: Configure and Verify Device Access Control - SSH Configuration & Management</h3>
            <p>SSH (Secure Shell) provides encrypted remote access to network devices, replacing insecure Telnet. Proper SSH configuration includes version 2, strong encryption, and security hardening.</p>
            
            <h4 style="color: #58D4FF;">SSH Prerequisites and Basic Setup</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Set hostname and domain name (required for SSH)</span>
Router(config)# <span style="color: #DCDCAA;">hostname R1</span>
Router(config)# <span style="color: #DCDCAA;">ip domain-name company.local</span>

<span style="color: #6A9955;"># Generate RSA key pair for SSH</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa general-keys modulus 2048</span>

<span style="color: #6A9955;"># Configure SSH parameters</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh version 2</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh time-out 60</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh authentication-retries 3</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">SSH Security Hardening</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <p><strong>Advanced SSH Security Configuration:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Disable SSH version 1 (security vulnerability)</span>
Router(config)# <span style="color: #DCDCAA;">no ip ssh version 1</span>

<span style="color: #6A9955;"># Set source interface for SSH (management VLAN)</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh source-interface loopback0</span>

<span style="color: #6A9955;"># Configure VTY lines for SSH only</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">transport input ssh</span>
Router(config-line)# <span style="color: #DCDCAA;">transport output ssh</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #58D4FF;">RSA Key Management</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Key Size</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Security Level</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Recommendation</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">512 bits</td>
                    <td style="border: 1px solid #444; padding: 8px; color: #f87171;">Weak</td>
                    <td style="border: 1px solid #444; padding: 8px;">Not recommended</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">1024 bits</td>
                    <td style="border: 1px solid #444; padding: 8px; color: #f59e0b;">Moderate</td>
                    <td style="border: 1px solid #444; padding: 8px;">Minimum acceptable</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">2048 bits</td>
                    <td style="border: 1px solid #444; padding: 8px; color: #10b981;">Strong</td>
                    <td style="border: 1px solid #444; padding: 8px;">Current standard</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">4096 bits</td>
                    <td style="border: 1px solid #444; padding: 8px; color: #10b981;">Very Strong</td>
                    <td style="border: 1px solid #444; padding: 8px;">High security environments</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">SSH Access Control</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create access list for SSH source control</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard SSH_MGMT</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 192.168.100.0 0.0.0.255</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit host 10.1.1.50</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">deny any log</span>

<span style="color: #6A9955;"># Apply to VTY lines</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">access-class SSH_MGMT in</span>

<span style="color: #6A9955;"># Optional: Limit concurrent SSH sessions</span>
Router(config-line)# <span style="color: #DCDCAA;">session-limit 4</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">SSH Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify SSH configuration</span>
Router# <span style="color: #DCDCAA;">show ip ssh</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey rsa</span>
Router# <span style="color: #DCDCAA;">show running-config | include ssh</span>

<span style="color: #6A9955;"># Monitor SSH sessions</span>
Router# <span style="color: #DCDCAA;">show ssh</span>
Router# <span style="color: #DCDCAA;">show users</span>

<span style="color: #6A9955;"># Debug SSH connections (use carefully)</span>
Router# <span style="color: #DCDCAA;">debug ip ssh</span>
Router# <span style="color: #DCDCAA;">show logging | include SSH</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Common SSH Issues and Solutions</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="list-style-type: square; margin-left: 20px; color: #E0E0E0;">
                    <li><strong>SSH connection refused:</strong> Check if SSH is enabled, VTY lines configured, and access-list permits source</li>
                    <li><strong>Authentication failures:</strong> Verify local users exist, passwords correct, and AAA configuration</li>
                    <li><strong>Key generation fails:</strong> Ensure hostname and domain-name are configured</li>
                    <li><strong>SSH version mismatch:</strong> Force SSHv2 only for security compliance</li>
                    <li><strong>Connection timeouts:</strong> Adjust ip ssh time-out and line exec-timeout values</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure SSH version 2 with proper prerequisites</li>
                    <li>Generate and manage RSA key pairs (2048-bit minimum)</li>
                    <li>Disable Telnet and use SSH only for remote access</li>
                    <li>Verify SSH configuration and troubleshoot common issues</li>
                </ul>
            </div>
        </div>
    `,

    "Enable Password Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.3: Configure and Verify Device Access Control - Enable Password Security</h3>
            <p>Enable password security controls access to privileged EXEC mode. Understanding the differences between enable password and enable secret is critical for proper device security implementation.</p>
            
            <h4 style="color: #58D4FF;">Enable Secret vs Enable Password</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Command</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Encryption</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Security Level</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Recommendation</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">enable secret</td>
                    <td style="border: 1px solid #444; padding: 8px;">MD5 Hash (Type 5)</td>
                    <td style="border: 1px solid #444; padding: 8px; color: #10b981;">Strong</td>
                    <td style="border: 1px solid #444; padding: 8px;">Always use this</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">enable password</td>
                    <td style="border: 1px solid #444; padding: 8px;">Type 7 (Weak)</td>
                    <td style="border: 1px solid #444; padding: 8px; color: #f87171;">Weak</td>
                    <td style="border: 1px solid #444; padding: 8px;">Deprecated - avoid</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Enable Secret Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure enable secret (recommended)</span>
Router(config)# <span style="color: #DCDCAA;">enable secret class</span>
Router(config)# <span style="color: #DCDCAA;">enable secret 5 $1$mERr$hx5rVt7rPNoS4wqbXKX7m0</span>

<span style="color: #6A9955;"># Remove insecure enable password if present</span>
Router(config)# <span style="color: #DCDCAA;">no enable password</span>

<span style="color: #6A9955;"># Enable password encryption service</span>
Router(config)# <span style="color: #DCDCAA;">service password-encryption</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Privilege Level Enable Passwords</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <p><strong>Multiple Privilege Level Passwords:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Set different enable passwords for privilege levels</span>
Router(config)# <span style="color: #DCDCAA;">enable secret level 15 Adm1n@2024!</span>
Router(config)# <span style="color: #DCDCAA;">enable secret level 7 0per@t0r!</span>
Router(config)# <span style="color: #DCDCAA;">enable secret level 1 B@s1c!</span>

<span style="color: #6A9955;"># Configure custom privilege levels</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 7 configure terminal</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 7 show running-config</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #58D4FF;">Password Security Policies</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Enable Password Best Practices:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Complexity:</strong> Minimum 8 characters with mixed case, numbers, symbols</li>
                    <li><strong>Uniqueness:</strong> Different from local user passwords</li>
                    <li><strong>Regular Changes:</strong> Rotate every 60-90 days</li>
                    <li><strong>Documentation:</strong> Secure storage in password management system</li>
                    <li><strong>Emergency Access:</strong> Maintain secure backup access method</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Password Recovery and Security</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Disable password recovery (security hardening)</span>
Router(config)# <span style="color: #DCDCAA;">no service password-recovery</span>

<span style="color: #6A9955;"># Set security banner</span>
Router(config)# <span style="color: #DCDCAA;">banner login ^</span>
<span style="color: #DCDCAA;">UNAUTHORIZED ACCESS PROHIBITED</span>
<span style="color: #DCDCAA;">This system is for authorized users only.</span>
<span style="color: #DCDCAA;">^</span>

<span style="color: #6A9955;"># Configure login failure rate</span>
Router(config)# <span style="color: #DCDCAA;">security authentication failure rate 3 log</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify enable passwords</span>
Router# <span style="color: #DCDCAA;">show running-config | include enable</span>
Router# <span style="color: #DCDCAA;">show privilege</span>

<span style="color: #6A9955;"># Test privilege escalation</span>
Router> <span style="color: #DCDCAA;">enable</span>
Password: 
Router# <span style="color: #DCDCAA;">enable 7</span>
Password: 

<span style="color: #6A9955;"># Check password encryption status</span>
Router# <span style="color: #DCDCAA;">show running-config | include service password</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Common Security Issues</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="list-style-type: square; margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Type 7 Password Exposure:</strong> Easily reversible - always use enable secret</li>
                    <li><strong>Default Passwords:</strong> Change immediately after device deployment</li>
                    <li><strong>Shared Passwords:</strong> Use unique passwords per privilege level</li>
                    <li><strong>Password Recovery Risk:</strong> Consider disabling on production devices</li>
                    <li><strong>EXEC Timeout:</strong> Configure automatic logout for idle sessions</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand enable secret vs enable password differences</li>
                    <li>Configure privilege level-specific enable passwords</li>
                    <li>Implement password security best practices</li>
                    <li>Verify enable password configuration and test access</li>
                </ul>
            </div>
        </div>
    `,

    "Access Control & Authorization": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.3: Configure and Verify Device Access Control - Access Control & Authorization</h3>
            <p>Access control and authorization implement role-based command access, privilege level management, and command authorization. This ensures users can only execute commands appropriate for their role.</p>
            
            <h4 style="color: #58D4FF;">Privilege Level Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create custom privilege levels</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 5 ping</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 5 traceroute</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 5 show ip route</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 5 show ip interface brief</span>

<span style="color: #6A9955;"># Configuration mode privileges</span>
Router(config)# <span style="color: #DCDCAA;">privilege configure level 10 interface</span>
Router(config)# <span style="color: #DCDCAA;">privilege configure level 10 router</span>
Router(config)# <span style="color: #DCDCAA;">privilege configure level 12 access-list</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Role-Based Access Control Matrix</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Role</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Privilege Level</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Allowed Commands</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Restrictions</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Network Admin</td>
                    <td style="border: 1px solid #444; padding: 8px;">15</td>
                    <td style="border: 1px solid #444; padding: 8px;">All commands</td>
                    <td style="border: 1px solid #444; padding: 8px;">None</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Security Analyst</td>
                    <td style="border: 1px solid #444; padding: 8px;">12</td>
                    <td style="border: 1px solid #444; padding: 8px;">Show, ACLs, security config</td>
                    <td style="border: 1px solid #444; padding: 8px;">No routing changes</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Network Operator</td>
                    <td style="border: 1px solid #444; padding: 8px;">7</td>
                    <td style="border: 1px solid #444; padding: 8px;">Show, ping, traceroute, basic config</td>
                    <td style="border: 1px solid #444; padding: 8px;">No critical configuration</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Monitor User</td>
                    <td style="border: 1px solid #444; padding: 8px;">5</td>
                    <td style="border: 1px solid #444; padding: 8px;">Show commands, ping, traceroute</td>
                    <td style="border: 1px solid #444; padding: 8px;">No configuration access</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Read-Only</td>
                    <td style="border: 1px solid #444; padding: 8px;">1</td>
                    <td style="border: 1px solid #444; padding: 8px;">Basic show commands</td>
                    <td style="border: 1px solid #444; padding: 8px;">No privileged commands</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">User Account with Privilege Assignment</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <p><strong>Create Users with Specific Roles:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create role-based user accounts</span>
Router(config)# <span style="color: #DCDCAA;">username netadmin privilege 15 secret Adm1n@2024!</span>
Router(config)# <span style="color: #DCDCAA;">username security privilege 12 secret S3cur1ty!</span>
Router(config)# <span style="color: #DCDCAA;">username operator privilege 7 secret 0per@t0r!</span>
Router(config)# <span style="color: #DCDCAA;">username monitor privilege 5 secret M0n1t0r!</span>
Router(config)# <span style="color: #DCDCAA;">username readonly privilege 1 secret R3@d0nly!</span>

<span style="color: #6A9955;"># Set enable passwords for each level</span>
Router(config)# <span style="color: #DCDCAA;">enable secret level 15 L3v3l15!</span>
Router(config)# <span style="color: #DCDCAA;">enable secret level 12 L3v3l12!</span>
Router(config)# <span style="color: #DCDCAA;">enable secret level 7 L3v3l7!</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #58D4FF;">Command Authorization Verification</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Test command authorization</span>
Router# <span style="color: #DCDCAA;">show privilege</span>
Current privilege level is 15

Router# <span style="color: #DCDCAA;">enable 7</span>
Password: 
Router# <span style="color: #DCDCAA;">show privilege</span>
Current privilege level is 7

<span style="color: #6A9955;"># Verify available commands at current level</span>
Router# <span style="color: #DCDCAA;">?</span>
<span style="color: #6A9955;"># Shows commands available at current privilege level</span>

<span style="color: #6A9955;"># Display privilege level assignments</span>
Router# <span style="color: #DCDCAA;">show running-config | include privilege</span>
Router# <span style="color: #DCDCAA;">show parser dump privileges</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Access Control Lists for Management</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create management access control</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard MGMT_ACCESS</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">remark Allow network management subnet</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 192.168.100.0 0.0.0.255</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">remark Allow admin workstation</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit host 10.1.1.100</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">remark Deny all others</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">deny any log</span>

<span style="color: #6A9955;"># Apply to VTY lines</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">access-class MGMT_ACCESS in</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Audit and Logging</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Command Accounting and Logging:</strong></p>
                <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable command logging</span>
Router(config)# <span style="color: #DCDCAA;">archive</span>
Router(config-archive)# <span style="color: #DCDCAA;">log config</span>
Router(config-archive-log-cfg)# <span style="color: #DCDCAA;">logging enable</span>
Router(config-archive-log-cfg)# <span style="color: #DCDCAA;">hidekeys</span>

<span style="color: #6A9955;"># Monitor login attempts</span>
Router# <span style="color: #DCDCAA;">show logging | include LOGIN</span>
Router# <span style="color: #DCDCAA;">show users</span>
Router# <span style="color: #DCDCAA;">show sessions</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #58D4FF;">Troubleshooting Access Control</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Common Issues and Solutions:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Command not available:</strong> Check current privilege level and command assignments</li>
                    <li><strong>Authentication failures:</strong> Verify username/password configuration and enable secrets</li>
                    <li><strong>Access denied:</strong> Check access-class configuration and source IP</li>
                    <li><strong>Privilege escalation fails:</strong> Verify enable secret for target privilege level</li>
                    <li><strong>Unexpected permissions:</strong> Review privilege level command assignments</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure custom privilege levels and command assignments</li>
                    <li>Implement role-based access control with appropriate restrictions</li>
                    <li>Use access-class for IP-based management access control</li>
                    <li>Verify privilege levels and troubleshoot access issues</li>
                </ul>
            </div>
        </div>
    `,

    // 5.4 Password Policy Elements
    "Password Complexity Requirements": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.4.a: Password Complexity Requirements</h3>
            <p>Comprehensive password policy elements form the foundation of organizational security. Modern password policies must balance security with usability while addressing current threat landscapes.</p>
            
            <h4 style="color: #58D68D;">Industry Standard Requirements</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Minimum Length:</strong> 8-12 characters (enterprise: 14+ characters recommended)</li>
                    <li><strong>Character Mix:</strong> Uppercase, lowercase, numbers, special characters (!@#$%^&*)</li>
                    <li><strong>Dictionary Prevention:</strong> Avoid common words, names, patterns</li>
                    <li><strong>Personal Information:</strong> No names, birthdates, addresses, phone numbers</li>
                    <li><strong>Pattern Avoidance:</strong> No sequential (123), keyboard (qwerty), or repeated patterns</li>
                    <li><strong>Password History:</strong> Prevent reuse of last 12-24 passwords</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Cisco IOS Password Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Set global minimum password length</span>
Router(config)# <span style="color: #DCDCAA;">security passwords min-length 8</span>

<span style="color: #6A9955;">! Enable password encryption for all passwords</span>
Router(config)# <span style="color: #DCDCAA;">service password-encryption</span>

<span style="color: #6A9955;">! Set maximum login attempts before lockout</span>
Router(config)# <span style="color: #DCDCAA;">security authentication failure rate 3 log</span>

<span style="color: #6A9955;">! Advanced password policy (newer IOS versions)</span>
Router(config)# <span style="color: #DCDCAA;">aaa password-policy policy1</span>
Router(config-password-policy)# <span style="color: #DCDCAA;">min-length 10</span>
Router(config-password-policy)# <span style="color: #DCDCAA;">max-length 128</span>
Router(config-password-policy)# <span style="color: #DCDCAA;">lower-case 1</span>
Router(config-password-policy)# <span style="color: #DCDCAA;">upper-case 1</span>
Router(config-password-policy)# <span style="color: #DCDCAA;">numeric-count 1</span>
Router(config-password-policy)# <span style="color: #DCDCAA;">special-case 1</span>
Router(config-password-policy)# <span style="color: #DCDCAA;">char-changes 4</span>
</code>
</pre>
            
            <h4 style="color: #58D68D;">Password Lifecycle Management</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Policy Element</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Best Practice</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Implementation</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Password Expiration</td>
                    <td style="border: 1px solid #444; padding: 8px;">60-90 days for privileged accounts</td>
                    <td style="border: 1px solid #444; padding: 8px;">AAA servers, Active Directory policies</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Password History</td>
                    <td style="border: 1px solid #444; padding: 8px;">Remember last 12-24 passwords</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prevents immediate password reuse</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Account Lockout</td>
                    <td style="border: 1px solid #444; padding: 8px;">3-5 failed attempts, 15-30 min lockout</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prevents brute force attacks</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Password Recovery</td>
                    <td style="border: 1px solid #444; padding: 8px;">Secure reset process with identity verification</td>
                    <td style="border: 1px solid #444; padding: 8px;">Self-service portals, admin procedures</td>
                </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Know Cisco IOS password complexity commands and syntax</li>
                    <li>Understand minimum length and character requirements</li>
                    <li>Be familiar with service password-encryption function</li>
                </ul>
            </div>
        </div>
    `,

    "Multi-Factor Authentication": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.4.b: Multi-Factor Authentication</h3>
            <p>MFA significantly improves security by requiring multiple authentication factors. This approach addresses the vulnerabilities of single-factor authentication and provides defense against various attack vectors.</p>
            
            <h4 style="color: #58D68D;">Authentication Factors</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Something You Know:</strong> Passwords, PINs, security questions, passphrases</li>
                    <li><strong>Something You Have:</strong> Smart cards, tokens, mobile phones (SMS/app), certificates</li>
                    <li><strong>Something You Are:</strong> Biometrics (fingerprint, facial recognition, retina, voice)</li>
                    <li><strong>Somewhere You Are:</strong> Location-based authentication (GPS, IP geolocation, network location)</li>
                    <li><strong>Something You Do:</strong> Behavioral biometrics (typing patterns, mouse movements)</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">MFA Implementation Types</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">MFA Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Technology</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Security Level</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">SMS-based</td>
                    <td style="border: 1px solid #444; padding: 8px;">Text message codes</td>
                    <td style="border: 1px solid #444; padding: 8px;">Medium</td>
                    <td style="border: 1px solid #444; padding: 8px;">Consumer applications</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">App-based</td>
                    <td style="border: 1px solid #444; padding: 8px;">TOTP/HOTP (Google Auth, MS Auth)</td>
                    <td style="border: 1px solid #444; padding: 8px;">High</td>
                    <td style="border: 1px solid #444; padding: 8px;">Enterprise systems</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Hardware Token</td>
                    <td style="border: 1px solid #444; padding: 8px;">RSA SecurID, YubiKey</td>
                    <td style="border: 1px solid #444; padding: 8px;">Very High</td>
                    <td style="border: 1px solid #444; padding: 8px;">High-security environments</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Push Notifications</td>
                    <td style="border: 1px solid #444; padding: 8px;">Mobile app push approval</td>
                    <td style="border: 1px solid #444; padding: 8px;">High</td>
                    <td style="border: 1px solid #444; padding: 8px;">User-friendly corporate</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Cisco MFA Integration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Enable AAA for MFA support</span>
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Router(config)# <span style="color: #DCDCAA;">aaa authentication login default group tacacs+ local</span>

<span style="color: #6A9955;">! Configure RADIUS for MFA server integration</span>
Router(config)# <span style="color: #DCDCAA;">radius server MFA-SERVER</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">address ipv4 10.1.1.100 auth-port 1812</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">key cisco123</span>

<span style="color: #6A9955;">! Apply MFA to VTY lines</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 15</span>
Router(config-line)# <span style="color: #DCDCAA;">login authentication default</span>
Router(config-line)# <span style="color: #DCDCAA;">authorization exec default</span>
</code>
</pre>
            
            <h4 style="color: #58D68D;">MFA Security Benefits</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Phishing Protection:</strong> Even if password is compromised, second factor prevents access</li>
                    <li><strong>Credential Theft Mitigation:</strong> Stolen passwords alone cannot provide access</li>
                    <li><strong>Insider Threat Reduction:</strong> Multiple factors make unauthorized access more difficult</li>
                    <li><strong>Compliance Requirements:</strong> Many standards (PCI DSS, HIPAA) require MFA</li>
                    <li><strong>Remote Access Security:</strong> Essential for VPN and cloud service access</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the benefits of MFA over single-factor authentication</li>
                    <li>Know the different authentication factor categories</li>
                    <li>Recognize AAA integration requirements for MFA</li>
                </ul>
            </div>
        </div>
    `,

    "Certificate-Based Authentication": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.4.c: Certificate-Based Authentication</h3>
            <p>Digital certificates provide strong, scalable authentication without traditional passwords. PKI infrastructure enables automated, secure device and user authentication across enterprise networks.</p>
            
            <h4 style="color: #58D68D;">PKI Infrastructure Components</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Certificate Authority (CA):</strong> Issues, validates, and revokes digital certificates</li>
                    <li><strong>Registration Authority (RA):</strong> Verifies identity before certificate issuance</li>
                    <li><strong>Certificate Repository:</strong> Stores and distributes public certificates</li>
                    <li><strong>Certificate Revocation List (CRL):</strong> Lists revoked certificates</li>
                    <li><strong>OCSP Responder:</strong> Real-time certificate status checking</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Certificate Types and Use Cases</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Certificate Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Purpose</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Implementation</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Device Certificates</td>
                    <td style="border: 1px solid #444; padding: 8px;">Network device authentication</td>
                    <td style="border: 1px solid #444; padding: 8px;">Router-to-router, switch management</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">User Certificates</td>
                    <td style="border: 1px solid #444; padding: 8px;">User authentication and digital signing</td>
                    <td style="border: 1px solid #444; padding: 8px;">Smart cards, software certificates</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Server Certificates</td>
                    <td style="border: 1px solid #444; padding: 8px;">Web server SSL/TLS authentication</td>
                    <td style="border: 1px solid #444; padding: 8px;">HTTPS, secure web services</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Root Certificates</td>
                    <td style="border: 1px solid #444; padding: 8px;">Trust anchor for certificate chain</td>
                    <td style="border: 1px solid #444; padding: 8px;">CA root certificate distribution</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Cisco Certificate Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure PKI trustpoint</span>
Router(config)# <span style="color: #DCDCAA;">crypto pki trustpoint COMPANY-CA</span>
Router(config-ca-trustpoint)# <span style="color: #DCDCAA;">enrollment url http://ca.company.com</span>
Router(config-ca-trustpoint)# <span style="color: #DCDCAA;">subject-name CN=Router1,O=Company,C=US</span>
Router(config-ca-trustpoint)# <span style="color: #DCDCAA;">revocation-check crl</span>

<span style="color: #6A9955;">! Generate RSA key pair</span>
Router(config)# <span style="color: #DCDCAA;">crypto key generate rsa general-keys label COMPANY-CA modulus 2048</span>

<span style="color: #6A9955;">! Enroll for certificate</span>
Router# <span style="color: #DCDCAA;">crypto pki enroll COMPANY-CA</span>

<span style="color: #6A9955;">! Verify certificate installation</span>
Router# <span style="color: #DCDCAA;">show crypto pki certificates</span>
Router# <span style="color: #DCDCAA;">show crypto pki trustpoints</span>
</code>
</pre>
            
            <h4 style="color: #58D68D;">Certificate Lifecycle Management</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Certificate Lifecycle Phases:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Key Generation:</strong> Create public/private key pair with appropriate strength</li>
                    <li><strong>Certificate Request:</strong> Submit Certificate Signing Request (CSR) to CA</li>
                    <li><strong>Identity Verification:</strong> CA validates identity before issuance</li>
                    <li><strong>Certificate Issuance:</strong> CA signs and delivers certificate</li>
                    <li><strong>Certificate Installation:</strong> Deploy certificate to target systems</li>
                    <li><strong>Certificate Renewal:</strong> Replace before expiration</li>
                    <li><strong>Certificate Revocation:</strong> Invalidate compromised certificates</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Certificate Authentication Benefits</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>No Password Required:</strong> Eliminates password-related vulnerabilities</li>
                    <li><strong>Strong Cryptography:</strong> RSA/ECC keys provide robust security</li>
                    <li><strong>Scalable Deployment:</strong> Automated enrollment and renewal</li>
                    <li><strong>Non-Repudiation:</strong> Digital signatures prove identity and data integrity</li>
                    <li><strong>Centralized Management:</strong> CA provides centralized trust and control</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand PKI components: CA, RA, certificates, CRL</li>
                    <li>Know certificate types and their use cases</li>
                    <li>Recognize crypto pki commands for certificate management</li>
                </ul>
            </div>
        </div>
    `,

    "Password Management Systems": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.4.d: Password Management Systems</h3>
            <p>Enterprise password management solutions provide secure storage, automated rotation, and policy enforcement. These systems address password fatigue while maintaining security standards across organizations.</p>
            
            <h4 style="color: #58D68D;">Enterprise Password Vault Features</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Centralized Storage:</strong> Encrypted vault for all organizational passwords</li>
                    <li><strong>Access Control:</strong> Role-based permissions and approval workflows</li>
                    <li><strong>Automated Rotation:</strong> Scheduled password changes for service accounts</li>
                    <li><strong>Session Recording:</strong> Audit trails for privileged access sessions</li>
                    <li><strong>Integration APIs:</strong> Connect with Active Directory, LDAP, databases</li>
                    <li><strong>Emergency Access:</strong> Break-glass procedures for critical situations</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Password Management Architecture</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Component</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Function</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Technology</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Password Vault</td>
                    <td style="border: 1px solid #444; padding: 8px;">Secure password storage and retrieval</td>
                    <td style="border: 1px solid #444; padding: 8px;">AES-256 encryption, HSM integration</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Policy Engine</td>
                    <td style="border: 1px solid #444; padding: 8px;">Enforce password complexity and rotation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Rule-based automation</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Access Gateway</td>
                    <td style="border: 1px solid #444; padding: 8px;">Controlled access to target systems</td>
                    <td style="border: 1px solid #444; padding: 8px;">RDP, SSH, web portal proxying</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Audit Engine</td>
                    <td style="border: 1px solid #444; padding: 8px;">Log all access and administrative actions</td>
                    <td style="border: 1px solid #444; padding: 8px;">SIEM integration, compliance reports</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Network Device Integration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Configure for external password management</span>
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Router(config)# <span style="color: #DCDCAA;">aaa authentication login default group radius local</span>

<span style="color: #6A9955;">! RADIUS server for password vault integration</span>
Router(config)# <span style="color: #DCDCAA;">radius server VAULT-SERVER</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">address ipv4 10.1.1.200 auth-port 1812</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">key VaultSecret123</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">timeout 10</span>

<span style="color: #6A9955;">! Enable accounting for session tracking</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting exec default start-stop group radius</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting commands 15 default start-stop group radius</span>
</code>
</pre>
            
            <h4 style="color: #58D68D;">Password Rotation Strategies</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Automated Rotation Benefits:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Reduced Exposure Window:</strong> Frequent changes limit credential theft impact</li>
                    <li><strong>Compliance Adherence:</strong> Automatic enforcement of rotation policies</li>
                    <li><strong>Service Account Management:</strong> Safe rotation without service disruption</li>
                    <li><strong>Emergency Rotation:</strong> Rapid password changes during security incidents</li>
                    <li><strong>Credential Reconciliation:</strong> Verify successful password changes</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Popular Enterprise Solutions</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Solution</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Strengths</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">CyberArk PAM</td>
                    <td style="border: 1px solid #444; padding: 8px;">Comprehensive privileged access management</td>
                    <td style="border: 1px solid #444; padding: 8px;">Large enterprise environments</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">HashiCorp Vault</td>
                    <td style="border: 1px solid #444; padding: 8px;">API-driven, cloud-native architecture</td>
                    <td style="border: 1px solid #444; padding: 8px;">DevOps and cloud environments</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">BeyondTrust PAM</td>
                    <td style="border: 1px solid #444; padding: 8px;">Session management and analytics</td>
                    <td style="border: 1px solid #444; padding: 8px;">Security-focused organizations</td>
                </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the benefits of centralized password management</li>
                    <li>Know how AAA integrates with password management systems</li>
                    <li>Recognize the importance of automated password rotation</li>
                </ul>
            </div>
        </div>
    `,

    "Biometric Authentication": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.4.e: Biometric Authentication</h3>
            <p>Biometric factors provide the highest level of authentication assurance based on unique physical characteristics. Implementation requires careful consideration of accuracy, privacy, and technical requirements.</p>
            
            <h4 style="color: #58D68D;">Biometric Factor Types</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Fingerprint:</strong> Ridge patterns and minutiae points for identification</li>
                    <li><strong>Facial Recognition:</strong> Facial geometry, distance between features</li>
                    <li><strong>Iris Recognition:</strong> Unique patterns in the colored portion of the eye</li>
                    <li><strong>Retina Scan:</strong> Blood vessel patterns in the back of the eye</li>
                    <li><strong>Voice Recognition:</strong> Speech patterns and vocal characteristics</li>
                    <li><strong>Palm Print:</strong> Palm ridge patterns and geometry</li>
                    <li><strong>Behavioral Biometrics:</strong> Typing rhythm, mouse movement patterns</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Biometric Accuracy Metrics</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Biometric Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">FAR (%)</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">FRR (%)</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Use Cases</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Fingerprint</td>
                    <td style="border: 1px solid #444; padding: 8px;">0.001-0.1</td>
                    <td style="border: 1px solid #444; padding: 8px;">0.1-3</td>
                    <td style="border: 1px solid #444; padding: 8px;">Workstation login, mobile devices</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Facial Recognition</td>
                    <td style="border: 1px solid #444; padding: 8px;">0.1-1</td>
                    <td style="border: 1px solid #444; padding: 8px;">1-5</td>
                    <td style="border: 1px solid #444; padding: 8px;">Physical access, mobile authentication</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Iris Recognition</td>
                    <td style="border: 1px solid #444; padding: 8px;">0.0001</td>
                    <td style="border: 1px solid #444; padding: 8px;">0.1-1</td>
                    <td style="border: 1px solid #444; padding: 8px;">High-security facilities, airports</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Voice Recognition</td>
                    <td style="border: 1px solid #444; padding: 8px;">1-5</td>
                    <td style="border: 1px solid #444; padding: 8px;">2-10</td>
                    <td style="border: 1px solid #444; padding: 8px;">Phone-based authentication</td>
                </tr>
            </table>
            <p style="font-size: 0.9em; font-style: italic; color: #B0B0B0;">FAR = False Acceptance Rate, FRR = False Rejection Rate</p>
            
            <h4 style="color: #58D68D;">Implementation Considerations</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Technical Requirements:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Enrollment Process:</strong> Initial biometric template creation and storage</li>
                    <li><strong>Template Protection:</strong> Encrypted storage of biometric templates</li>
                    <li><strong>Sensor Quality:</strong> High-resolution sensors for accurate capture</li>
                    <li><strong>Environmental Factors:</strong> Lighting, temperature, humidity considerations</li>
                    <li><strong>Liveness Detection:</strong> Prevention of spoofing attacks</li>
                    <li><strong>Backup Authentication:</strong> Alternative methods for biometric failures</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Privacy and Legal Considerations</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Data Protection:</strong> GDPR, CCPA compliance for biometric data</li>
                    <li><strong>Consent Requirements:</strong> Explicit user consent for biometric collection</li>
                    <li><strong>Data Retention:</strong> Policies for biometric template lifecycle</li>
                    <li><strong>Right to Erasure:</strong> Ability to delete biometric data upon request</li>
                    <li><strong>Vendor Security:</strong> Third-party biometric service provider vetting</li>
                    <li><strong>Breach Notification:</strong> Special requirements for biometric data breaches</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Network Integration Methods</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! AAA integration for biometric authentication</span>
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Router(config)# <span style="color: #DCDCAA;">aaa authentication login BIOMETRIC group radius local</span>

<span style="color: #6A9955;">! RADIUS server for biometric system integration</span>
Router(config)# <span style="color: #DCDCAA;">radius server BIOMETRIC-AUTH</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">address ipv4 10.1.1.300 auth-port 1812</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">key BiometricKey456</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">timeout 15</span>

<span style="color: #6A9955;">! Apply to physical console access</span>
Router(config)# <span style="color: #DCDCAA;">line console 0</span>
Router(config-line)# <span style="color: #DCDCAA;">login authentication BIOMETRIC</span>
</code>
</pre>
            
            <h4 style="color: #58D68D;">Biometric Security Benefits</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Non-Transferable:</strong> Cannot be shared or stolen like passwords</li>
                    <li><strong>Always Available:</strong> No need to remember or carry authentication tokens</li>
                    <li><strong>Difficult to Replicate:</strong> High-quality sensors detect spoofing attempts</li>
                    <li><strong>Audit Trail:</strong> Strong non-repudiation for critical access</li>
                    <li><strong>User Experience:</strong> Fast, convenient authentication process</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand biometric accuracy metrics: FAR and FRR</li>
                    <li>Know different biometric types and their appropriate use cases</li>
                    <li>Recognize privacy and legal considerations for biometric data</li>
                </ul>
            </div>
        </div>
    `,

    // 5.5.a IPsec Fundamentals
    "IPsec Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">
                5.5.a: IPsec Fundamentals
            </h3>
            <p>IPsec (Internet Protocol Security) is a comprehensive framework providing confidentiality, integrity, authentication, and anti-replay protection for IP communications. It operates at the network layer (Layer 3) to secure IP traffic between endpoints.</p>
            
            <h4 style="color: #F5B041;">IPsec Protocol Suite Components</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Protocol</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Function</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">IP Protocol #</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">ESP (Encapsulating Security Payload)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Encryption + Authentication + Integrity</td><td style="padding: 8px; border-bottom: 1px solid #444;">50</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">AH (Authentication Header)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Authentication + Integrity (No Encryption)</td><td style="padding: 8px; border-bottom: 1px solid #444;">51</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">IKE (Internet Key Exchange)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Key negotiation and management</td><td style="padding: 8px; border-bottom: 1px solid #444;">UDP 500/4500</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Security Associations (SA)</h4>
            <p>A Security Association is a unidirectional logical connection that defines IPsec parameters. Each IPsec session requires two SAs - one for each direction of communication.</p>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>SPI (Security Parameter Index):</strong> Unique identifier for each SA</li>
                    <li><strong>Destination IP Address:</strong> Receiving endpoint of the SA</li>
                    <li><strong>Security Protocol:</strong> AH or ESP specification</li>
                    <li><strong>Encryption Algorithm:</strong> AES, 3DES (encryption cipher)</li>
                    <li><strong>Authentication Algorithm:</strong> MD5, SHA (integrity verification)</li>
                    <li><strong>Lifetime:</strong> Duration before SA renegotiation required</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">IKE (Internet Key Exchange) Process</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>IKE Phase 1 (ISAKMP SA):</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li>Establishes secure authenticated channel between peers</li>
                    <li>Negotiates IKE policy (encryption, hash, DH group, authentication)</li>
                    <li>Exchanges identity information and authenticates peers</li>
                    <li>Creates ISAKMP SA for protecting Phase 2 negotiations</li>
                </ul>
                
                <p><strong>IKE Phase 2 (IPsec SA):</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li>Negotiates IPsec transform sets (ESP/AH, encryption, authentication)</li>
                    <li>Establishes IPsec SAs for actual data encryption</li>
                    <li>Optionally implements Perfect Forward Secrecy (PFS)</li>
                    <li>Defines interesting traffic (what to encrypt)</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">IPsec Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Display active crypto sessions</span>
Router# <span style="color: #DCDCAA;">show crypto session</span>

<span style="color: #6A9955;"># Show IKE Phase 1 SAs</span>
Router# <span style="color: #DCDCAA;">show crypto isakmp sa</span>

<span style="color: #6A9955;"># Show IPsec Phase 2 SAs</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa</span>

<span style="color: #6A9955;"># Display crypto maps configuration</span>
Router# <span style="color: #DCDCAA;">show crypto map</span>

<span style="color: #6A9955;"># Monitor IKE negotiations</span>
Router# <span style="color: #DCDCAA;">debug crypto isakmp</span>
Router# <span style="color: #DCDCAA;">debug crypto ipsec</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Common IPsec Algorithms</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Category</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Algorithm</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Key Length</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Recommendation</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Encryption</td><td style="padding: 8px; border-bottom: 1px solid #444;">AES-256</td><td style="padding: 8px; border-bottom: 1px solid #444;">256-bit</td><td style="padding: 8px; border-bottom: 1px solid #444;">Preferred (strongest)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Encryption</td><td style="padding: 8px; border-bottom: 1px solid #444;">3DES</td><td style="padding: 8px; border-bottom: 1px solid #444;">168-bit</td><td style="padding: 8px; border-bottom: 1px solid #444;">Legacy (avoid if possible)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Authentication</td><td style="padding: 8px; border-bottom: 1px solid #444;">SHA-256</td><td style="padding: 8px; border-bottom: 1px solid #444;">256-bit</td><td style="padding: 8px; border-bottom: 1px solid #444;">Preferred</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Authentication</td><td style="padding: 8px; border-bottom: 1px solid #444;">MD5</td><td style="padding: 8px; border-bottom: 1px solid #444;">128-bit</td><td style="padding: 8px; border-bottom: 1px solid #444;">Deprecated (insecure)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">DH Group</td><td style="padding: 8px; border-bottom: 1px solid #444;">Group 14 (2048-bit)</td><td style="padding: 8px; border-bottom: 1px solid #444;">2048-bit</td><td style="padding: 8px; border-bottom: 1px solid #444;">Current standard</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand ESP vs AH protocol differences and use cases</li>
                    <li>Know IKE Phase 1 establishes ISAKMP SA, Phase 2 creates IPsec SAs</li>
                    <li>Identify IP protocol numbers: ESP (50), AH (51), IKE (UDP 500/4500)</li>
                    <li>Understand Security Association components and unidirectional nature</li>
                    <li>Recognize modern encryption standards (AES) vs deprecated (3DES, MD5)</li>
                </ul>
            </div>
        </div>
    `,
    
    // 5.5.b Site-to-Site VPNs
    "Site-to-Site VPNs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">
                5.5.b: Site-to-Site VPNs
            </h3>
            <p>Site-to-Site VPNs establish permanent encrypted tunnels connecting entire networks across public infrastructure. They provide transparent connectivity, making remote networks appear as if they're directly connected to the local network.</p>
            
            <h4 style="color: #F5B041;">Site-to-Site VPN Characteristics</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Always-On Connectivity:</strong> Permanent tunnel established between gateways</li>
                    <li><strong>Network-to-Network:</strong> Connects entire subnets, not individual hosts</li>
                    <li><strong>Transparent to End Users:</strong> No client software or configuration required</li>
                    <li><strong>Gateway-Based:</strong> Routers/firewalls handle all encryption/decryption</li>
                    <li><strong>Tunnel Mode IPsec:</strong> Entire original packet encrypted and encapsulated</li>
                    <li><strong>Scalable:</strong> Support multiple simultaneous connections</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Basic Site-to-Site VPN Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Step 1: Define IKE Phase 1 Policy</span>
Router(config)# <span style="color: #DCDCAA;">crypto isakmp policy 10</span>
Router(config-isakmp)# <span style="color: #DCDCAA;">encryption aes 256</span>
Router(config-isakmp)# <span style="color: #DCDCAA;">hash sha256</span>
Router(config-isakmp)# <span style="color: #DCDCAA;">authentication pre-share</span>
Router(config-isakmp)# <span style="color: #DCDCAA;">group 14</span>
Router(config-isakmp)# <span style="color: #DCDCAA;">lifetime 86400</span>

<span style="color: #6A9955;"># Step 2: Define pre-shared key</span>
Router(config)# <span style="color: #DCDCAA;">crypto isakmp key 0 MySecureKey123 address 203.0.113.10</span>

<span style="color: #6A9955;"># Step 3: Create IPsec transform set</span>
Router(config)# <span style="color: #DCDCAA;">crypto ipsec transform-set MYSET esp-aes 256 esp-sha256-hmac</span>
Router(cfg-crypto-trans)# <span style="color: #DCDCAA;">mode tunnel</span>

<span style="color: #6A9955;"># Step 4: Define interesting traffic (ACL)</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended VPN_TRAFFIC</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit ip 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255</span>

<span style="color: #6A9955;"># Step 5: Create crypto map</span>
Router(config)# <span style="color: #DCDCAA;">crypto map SITEMAP 10 ipsec-isakmp</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">set peer 203.0.113.10</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">set transform-set MYSET</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">match address VPN_TRAFFIC</span>

<span style="color: #6A9955;"># Step 6: Apply crypto map to interface</span>
Router(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">crypto map SITEMAP</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Site-to-Site VPN Deployment Scenarios</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Scenario</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Use Case</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Benefits</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Branch-to-HQ</td><td style="padding: 8px; border-bottom: 1px solid #444;">Connect remote offices to headquarters</td><td style="padding: 8px; border-bottom: 1px solid #444;">Centralized resources, secure file sharing</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Hub-and-Spoke</td><td style="padding: 8px; border-bottom: 1px solid #444;">Multiple branches through central hub</td><td style="padding: 8px; border-bottom: 1px solid #444;">Simplified management, reduced costs</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Full Mesh</td><td style="padding: 8px; border-bottom: 1px solid #444;">Direct connectivity between all sites</td><td style="padding: 8px; border-bottom: 1px solid #444;">Optimal routing, redundancy</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Extranet</td><td style="padding: 8px; border-bottom: 1px solid #444;">Secure partner/vendor access</td><td style="padding: 8px; border-bottom: 1px solid #444;">Controlled external collaboration</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Cloud Integration</td><td style="padding: 8px; border-bottom: 1px solid #444;">On-premises to cloud connectivity</td><td style="padding: 8px; border-bottom: 1px solid #444;">Hybrid cloud deployment</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Advanced Configuration Options</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Perfect Forward Secrecy (PFS)</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">set pfs group14</span>

<span style="color: #6A9955;"># SA Lifetime configuration</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">set security-association lifetime seconds 3600</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">set security-association lifetime kilobytes 4608000</span>

<span style="color: #6A9955;"># Dead Peer Detection (DPD)</span>
Router(config)# <span style="color: #DCDCAA;">crypto isakmp keepalive 10 3</span>

<span style="color: #6A9955;"># Backup peer configuration</span>
Router(config)# <span style="color: #DCDCAA;">crypto map SITEMAP 20 ipsec-isakmp</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">set peer 203.0.113.20</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">set transform-set MYSET</span>
Router(config-crypto-map)# <span style="color: #DCDCAA;">match address VPN_TRAFFIC</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Verification and Monitoring</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify tunnel status</span>
Router# <span style="color: #DCDCAA;">show crypto session detail</span>
Router# <span style="color: #DCDCAA;">show crypto isakmp sa detail</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa peer 203.0.113.10</span>

<span style="color: #6A9955;"># Monitor tunnel statistics</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa | include pkts</span>
Router# <span style="color: #DCDCAA;">show crypto engine connections active</span>

<span style="color: #6A9955;"># Test connectivity through tunnel</span>
Router# <span style="color: #DCDCAA;">ping 192.168.20.10 source 192.168.10.10</span>
Router# <span style="color: #DCDCAA;">traceroute 192.168.20.10 source 192.168.10.10</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Common Implementation Challenges</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>NAT Issues:</strong> ESP protocol can't be NATed; use NAT-T (UDP 4500)</li>
                    <li><strong>Routing:</strong> Ensure proper routes exist for encrypted traffic</li>
                    <li><strong>MTU Problems:</strong> Account for IPsec overhead (up to 73 bytes)</li>
                    <li><strong>Firewall Rules:</strong> Allow UDP 500/4500 and ESP (protocol 50)</li>
                    <li><strong>Split Tunneling:</strong> Define interesting traffic carefully</li>
                    <li><strong>Backup Connectivity:</strong> Configure redundant paths and failover</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand site-to-site VPN provides network-to-network connectivity</li>
                    <li>Know configuration steps: IKE policy, pre-shared key, transform set, crypto map</li>
                    <li>Recognize tunnel mode IPsec is used for site-to-site implementations</li>
                    <li>Identify verification commands and their output interpretation</li>
                    <li>Understand NAT traversal necessity for ESP through NAT devices</li>
                </ul>
            </div>
        </div>
    `,

    // 5.5.c Remote Access VPNs  
    "Remote Access VPNs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">
                5.5.c: Remote Access VPNs
            </h3>
            <p>Remote Access VPNs provide secure connectivity for individual users connecting from remote locations to corporate networks. They establish dynamic, on-demand encrypted tunnels initiated by client software on user devices.</p>
            
            <h4 style="color: #F5B041;">Remote Access VPN Characteristics</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Client-Initiated:</strong> User manually connects using VPN client software</li>
                    <li><strong>Dynamic Tunnels:</strong> Tunnels established on-demand when needed</li>
                    <li><strong>User Authentication:</strong> Individual user credentials required</li>
                    <li><strong>Scalable:</strong> Supports hundreds or thousands of concurrent users</li>
                    <li><strong>Policy-Based:</strong> Different access policies per user or group</li>
                    <li><strong>Mobile-Friendly:</strong> Designed for laptops, tablets, smartphones</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Remote Access VPN Technologies</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Technology</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Protocol</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Advantages</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Use Cases</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">SSL VPN</td><td style="padding: 8px; border-bottom: 1px solid #444;">SSL/TLS</td><td style="padding: 8px; border-bottom: 1px solid #444;">Clientless, web-based access</td><td style="padding: 8px; border-bottom: 1px solid #444;">Web applications, limited access</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">IPsec VPN</td><td style="padding: 8px; border-bottom: 1px solid #444;">IPsec/IKE</td><td style="padding: 8px; border-bottom: 1px solid #444;">Strong security, full network access</td><td style="padding: 8px; border-bottom: 1px solid #444;">Corporate users, sensitive data</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">L2TP/IPsec</td><td style="padding: 8px; border-bottom: 1px solid #444;">L2TP + IPsec</td><td style="padding: 8px; border-bottom: 1px solid #444;">Built into most OS, standardized</td><td style="padding: 8px; border-bottom: 1px solid #444;">Legacy systems, SOHO users</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">PPTP</td><td style="padding: 8px; border-bottom: 1px solid #444;">PPP + GRE</td><td style="padding: 8px; border-bottom: 1px solid #444;">Simple setup, legacy support</td><td style="padding: 8px; border-bottom: 1px solid #444;">Deprecated (security issues)</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Cisco AnyConnect SSL VPN Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable SSL VPN on ASA Firewall</span>
ASA(config)# <span style="color: #DCDCAA;">webvpn</span>
ASA(config-webvpn)# <span style="color: #DCDCAA;">enable outside</span>
ASA(config-webvpn)# <span style="color: #DCDCAA;">anyconnect image disk0:/anyconnect-win-4.9.0-webdeploy-k9.pkg</span>
ASA(config-webvpn)# <span style="color: #DCDCAA;">anyconnect enable</span>
ASA(config-webvpn)# <span style="color: #DCDCAA;">tunnel-group-list enable</span>

<span style="color: #6A9955;"># Configure IP pool for remote clients</span>
ASA(config)# <span style="color: #DCDCAA;">ip local pool VPN_POOL 192.168.100.1-192.168.100.100 mask 255.255.255.0</span>

<span style="color: #6A9955;"># Create group policy</span>
ASA(config)# <span style="color: #DCDCAA;">group-policy REMOTE_USERS internal</span>
ASA(config-group-policy)# <span style="color: #DCDCAA;">vpn-tunnel-protocol ssl-client</span>
ASA(config-group-policy)# <span style="color: #DCDCAA;">split-tunnel-policy tunnelspecified</span>
ASA(config-group-policy)# <span style="color: #DCDCAA;">split-tunnel-network-list SPLIT_TUNNEL_ACL</span>
ASA(config-group-policy)# <span style="color: #DCDCAA;">address-pools value VPN_POOL</span>

<span style="color: #6A9955;"># Configure local user</span>
ASA(config)# <span style="color: #DCDCAA;">username jdoe password P@ssw0rd123</span>
ASA(config)# <span style="color: #DCDCAA;">username jdoe attributes</span>
ASA(config-username)# <span style="color: #DCDCAA;">vpn-group-policy REMOTE_USERS</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Remote Access Authentication Methods</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Authentication Type</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Method</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Security Level</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Username/Password</td><td style="padding: 8px; border-bottom: 1px solid #444;">Local or RADIUS/LDAP</td><td style="padding: 8px; border-bottom: 1px solid #444;">Basic</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Two-Factor</td><td style="padding: 8px; border-bottom: 1px solid #444;">Password + Token/SMS</td><td style="padding: 8px; border-bottom: 1px solid #444;">Enhanced</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Digital Certificates</td><td style="padding: 8px; border-bottom: 1px solid #444;">X.509 PKI certificates</td><td style="padding: 8px; border-bottom: 1px solid #444;">High</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Smart Cards</td><td style="padding: 8px; border-bottom: 1px solid #444;">Hardware-based certificates</td><td style="padding: 8px; border-bottom: 1px solid #444;">Highest</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Split Tunneling Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Define split tunnel ACL (traffic to encrypt)</span>
ASA(config)# <span style="color: #DCDCAA;">access-list SPLIT_TUNNEL_ACL standard permit 10.0.0.0 255.0.0.0</span>
ASA(config)# <span style="color: #DCDCAA;">access-list SPLIT_TUNNEL_ACL standard permit 172.16.0.0 255.240.0.0</span>
ASA(config)# <span style="color: #DCDCAA;">access-list SPLIT_TUNNEL_ACL standard permit 192.168.0.0 255.255.0.0</span>

<span style="color: #6A9955;"># Apply to group policy</span>
ASA(config)# <span style="color: #DCDCAA;">group-policy REMOTE_USERS attributes</span>
ASA(config-group-policy)# <span style="color: #DCDCAA;">split-tunnel-policy tunnelspecified</span>
ASA(config-group-policy)# <span style="color: #DCDCAA;">split-tunnel-network-list value SPLIT_TUNNEL_ACL</span>

<span style="color: #6A9955;"># DNS configuration for split tunneling</span>
ASA(config-group-policy)# <span style="color: #DCDCAA;">dns-server value 10.0.0.10 8.8.8.8</span>
ASA(config-group-policy)# <span style="color: #DCDCAA;">split-dns value company.com</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Remote Access VPN Benefits and Considerations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Benefits:</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li>Secure remote workforce enablement</li>
                    <li>Cost-effective alternative to dedicated lines</li>
                    <li>Centralized security policy enforcement</li>
                    <li>Audit trail and logging capabilities</li>
                    <li>Scalable to thousands of users</li>
                </ul>
                
                <p><strong>Security Considerations:</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li>Endpoint security and compliance checking</li>
                    <li>Strong authentication and authorization</li>
                    <li>Session monitoring and timeout policies</li>
                    <li>Data loss prevention (DLP) integration</li>
                    <li>Regular security updates and patches</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Monitoring and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Monitor active VPN sessions</span>
ASA# <span style="color: #DCDCAA;">show vpn-sessiondb anyconnect</span>
ASA# <span style="color: #DCDCAA;">show vpn-sessiondb detail anyconnect</span>

<span style="color: #6A9955;"># View SSL VPN statistics</span>
ASA# <span style="color: #DCDCAA;">show webvpn stats</span>
ASA# <span style="color: #DCDCAA;">show ssl</span>

<span style="color: #6A9955;"># Debug VPN connections</span>
ASA# <span style="color: #DCDCAA;">debug webvpn anyconnect</span>
ASA# <span style="color: #DCDCAA;">debug ssl openssl-level 3</span>

<span style="color: #6A9955;"># Clear VPN sessions</span>
ASA# <span style="color: #DCDCAA;">vpn-sessiondb logoff anyconnect name jdoe</span>
ASA# <span style="color: #DCDCAA;">vpn-sessiondb logoff anyconnect all</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand remote access VPNs are client-initiated, on-demand connections</li>
                    <li>Know SSL VPN vs IPsec VPN differences and use cases</li>
                    <li>Recognize split tunneling concept and its security implications</li>
                    <li>Understand authentication methods from basic to multi-factor</li>
                    <li>Identify benefits of remote access VPNs for modern workforce</li>
                </ul>
            </div>
        </div>
    `,

    // 5.5.d VPN Tunnel Modes
    "VPN Tunnel Modes": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">
                5.5.d: VPN Tunnel Modes
            </h3>
            <p>IPsec operates in two distinct modes that determine how packets are encapsulated and protected. Understanding the differences between Transport and Tunnel modes is crucial for proper VPN implementation and troubleshooting.</p>
            
            <h4 style="color: #F5B041;">Transport Mode</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Packet Structure in Transport Mode:</strong></p>
                <div style="font-family: monospace; background-color: #1a1a1a; padding: 10px; border-radius: 5px; margin: 10px 0;">
                    [Original IP Header] [IPsec Header (ESP/AH)] [Original Payload]
                </div>
                
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Encryption Scope:</strong> Only the data payload is encrypted</li>
                    <li><strong>IP Header:</strong> Original IP header remains intact and visible</li>
                    <li><strong>Overhead:</strong> Minimal - only IPsec headers added</li>
                    <li><strong>NAT Compatibility:</strong> Poor - IP header checksum issues</li>
                    <li><strong>Topology Hiding:</strong> None - original source/destination visible</li>
                    <li><strong>Use Cases:</strong> Host-to-host communication, end-to-end security</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Tunnel Mode</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Packet Structure in Tunnel Mode:</strong></p>
                <div style="font-family: monospace; background-color: #1a1a1a; padding: 10px; border-radius: 5px; margin: 10px 0;">
                    [New IP Header] [IPsec Header (ESP/AH)] [Original IP Header] [Original Payload]
                </div>
                
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Encryption Scope:</strong> Entire original IP packet encrypted</li>
                    <li><strong>IP Header:</strong> New IP header added, original header encrypted</li>
                    <li><strong>Overhead:</strong> Higher - complete packet encapsulation</li>
                    <li><strong>NAT Compatibility:</strong> Good - new outer header can be NATed</li>
                    <li><strong>Topology Hiding:</strong> Complete - internal addresses hidden</li>
                    <li><strong>Use Cases:</strong> Site-to-site VPNs, gateway-to-gateway</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Mode Comparison Table</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Characteristic</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Transport Mode</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Tunnel Mode</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Encryption Coverage</td><td style="padding: 8px; border-bottom: 1px solid #444;">Payload only</td><td style="padding: 8px; border-bottom: 1px solid #444;">Entire original packet</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">IP Header Handling</td><td style="padding: 8px; border-bottom: 1px solid #444;">Original preserved</td><td style="padding: 8px; border-bottom: 1px solid #444;">New header added</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Overhead</td><td style="padding: 8px; border-bottom: 1px solid #444;">~23-43 bytes</td><td style="padding: 8px; border-bottom: 1px solid #444;">~43-73 bytes</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">NAT Traversal</td><td style="padding: 8px; border-bottom: 1px solid #444;">Problematic</td><td style="padding: 8px; border-bottom: 1px solid #444;">Supported</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Address Hiding</td><td style="padding: 8px; border-bottom: 1px solid #444;">None</td><td style="padding: 8px; border-bottom: 1px solid #444;">Complete</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Primary Use</td><td style="padding: 8px; border-bottom: 1px solid #444;">Host-to-host</td><td style="padding: 8px; border-bottom: 1px solid #444;">Site-to-site</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Configuration Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Transport Mode Configuration</span>
Router(config)# <span style="color: #DCDCAA;">crypto ipsec transform-set TRANSPORT_SET esp-aes esp-sha-hmac</span>
Router(cfg-crypto-trans)# <span style="color: #DCDCAA;">mode transport</span>

<span style="color: #6A9955;"># Tunnel Mode Configuration (default)</span>
Router(config)# <span style="color: #DCDCAA;">crypto ipsec transform-set TUNNEL_SET esp-aes esp-sha-hmac</span>
Router(cfg-crypto-trans)# <span style="color: #DCDCAA;">mode tunnel</span>

<span style="color: #6A9955;"># Verify transform set configuration</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec transform-set</span>

Transform set TRANSPORT_SET: { esp-aes esp-sha-hmac  }
   will negotiate = { Transport,  },
   
Transform set TUNNEL_SET: { esp-aes esp-sha-hmac  }
   will negotiate = { Tunnel,  },
</code>
            </pre>
            
            <h4 style="color: #F5B041;">When to Use Each Mode</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Use Transport Mode When:</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li>Endpoints are the actual communicating hosts</li>
                    <li>No network address translation involved</li>
                    <li>Bandwidth efficiency is critical</li>
                    <li>Direct host-to-host communication required</li>
                    <li>L2TP over IPsec implementations</li>
                </ul>
                
                <p><strong>Use Tunnel Mode When:</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li>Connecting entire networks (site-to-site)</li>
                    <li>Network topology must be hidden</li>
                    <li>NAT devices are in the path</li>
                    <li>Remote access VPN implementations</li>
                    <li>Security gateways protecting multiple hosts</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">ESP Header Structure Differences</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Transport Mode ESP Header Placement</span>
Original:    [IP Header] [TCP Header] [Data]
Transport:   [IP Header] [ESP Header] [TCP Header] [Data] [ESP Trailer]

<span style="color: #6A9955;"># Tunnel Mode ESP Header Placement</span>
Original:    [IP Header] [TCP Header] [Data]
Tunnel:      [New IP] [ESP Header] [Original IP] [TCP Header] [Data] [ESP Trailer]

<span style="color: #6A9955;"># ESP Header Components</span>
- SPI (Security Parameter Index): 4 bytes
- Sequence Number: 4 bytes
- Initialization Vector: Variable (typically 16 bytes for AES)
- Payload Data: Variable
- Padding: Variable (0-255 bytes)
- Pad Length: 1 byte
- Next Header: 1 byte
- Authentication Data: Variable (12 bytes for SHA-1)
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Performance Considerations</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Factor</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Transport Mode</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Tunnel Mode</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Bandwidth Efficiency</td><td style="padding: 8px; border-bottom: 1px solid #444;">Higher (less overhead)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Lower (more overhead)</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Processing Overhead</td><td style="padding: 8px; border-bottom: 1px solid #444;">Lower</td><td style="padding: 8px; border-bottom: 1px solid #444;">Higher</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">MTU Considerations</td><td style="padding: 8px; border-bottom: 1px solid #444;">23-43 byte reduction</td><td style="padding: 8px; border-bottom: 1px solid #444;">43-73 byte reduction</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Fragmentation Risk</td><td style="padding: 8px; border-bottom: 1px solid #444;">Lower</td><td style="padding: 8px; border-bottom: 1px solid #444;">Higher</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand Transport mode encrypts payload only, Tunnel mode encrypts entire packet</li>
                    <li>Know Transport mode preserves original IP header, Tunnel mode adds new header</li>
                    <li>Recognize Tunnel mode is default and used for site-to-site VPNs</li>
                    <li>Understand overhead differences and performance implications</li>
                    <li>Know when to use each mode based on deployment scenario</li>
                </ul>
            </div>
        </div>
    `,

    // 5.5.e VPN Implementation & Troubleshooting
    "VPN Implementation & Troubleshooting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">
                5.5.e: VPN Implementation & Troubleshooting
            </h3>
            <p>Successful VPN deployment requires systematic planning, proper configuration, and comprehensive troubleshooting skills. This section covers best practices, common issues, and diagnostic techniques for enterprise VPN implementations.</p>
            
            <h4 style="color: #F5B041;">VPN Implementation Planning</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Phase 1: Requirements Analysis</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li>Identify sites and users requiring VPN access</li>
                    <li>Determine bandwidth requirements and growth projections</li>
                    <li>Define security policies and compliance requirements</li>
                    <li>Assess existing network infrastructure and constraints</li>
                    <li>Plan IP addressing and routing for VPN networks</li>
                </ul>
                
                <p><strong>Phase 2: Design and Architecture</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li>Choose appropriate VPN topology (hub-spoke, full mesh, hybrid)</li>
                    <li>Select VPN technologies (IPsec, SSL, hybrid deployments)</li>
                    <li>Design redundancy and failover mechanisms</li>
                    <li>Plan authentication and authorization infrastructure</li>
                    <li>Design monitoring and management framework</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Common VPN Issues and Solutions</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Issue</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Symptoms</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Common Causes</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #F5B041; font-weight: bold;">Resolution</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Phase 1 Failure</td><td style="padding: 8px; border-bottom: 1px solid #444;">No ISAKMP SA established</td><td style="padding: 8px; border-bottom: 1px solid #444;">Pre-shared key mismatch, policy mismatch</td><td style="padding: 8px; border-bottom: 1px solid #444;">Verify keys and IKE policies</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Phase 2 Failure</td><td style="padding: 8px; border-bottom: 1px solid #444;">ISAKMP SA exists, no IPsec SA</td><td style="padding: 8px; border-bottom: 1px solid #444;">Transform set mismatch, ACL issues</td><td style="padding: 8px; border-bottom: 1px solid #444;">Check transform sets and crypto ACLs</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Intermittent Connectivity</td><td style="padding: 8px; border-bottom: 1px solid #444;">Tunnel drops periodically</td><td style="padding: 8px; border-bottom: 1px solid #444;">DPD issues, NAT-T problems</td><td style="padding: 8px; border-bottom: 1px solid #444;">Configure DPD, check NAT-T</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Poor Performance</td><td style="padding: 8px; border-bottom: 1px solid #444;">Slow data transfer</td><td style="padding: 8px; border-bottom: 1px solid #444;">MTU issues, hardware limitations</td><td style="padding: 8px; border-bottom: 1px solid #444;">Adjust MTU, check hardware specs</td></tr>
                </table>
            </div>
            
            <h4 style="color: #F5B041;">Systematic Troubleshooting Process</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Step 1: Verify basic connectivity</span>
Router# <span style="color: #DCDCAA;">ping 203.0.113.10</span>
Router# <span style="color: #DCDCAA;">traceroute 203.0.113.10</span>

<span style="color: #6A9955;"># Step 2: Check IKE Phase 1 status</span>
Router# <span style="color: #DCDCAA;">show crypto isakmp sa</span>
Router# <span style="color: #DCDCAA;">show crypto isakmp policy</span>

<span style="color: #6A9955;"># Step 3: Verify IPsec Phase 2 status</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa</span>
Router# <span style="color: #DCDCAA;">show crypto map</span>

<span style="color: #6A9955;"># Step 4: Check interesting traffic definition</span>
Router# <span style="color: #DCDCAA;">show access-lists</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa | include pkts</span>

<span style="color: #6A9955;"># Step 5: Monitor real-time activity</span>
Router# <span style="color: #DCDCAA;">debug crypto isakmp</span>
Router# <span style="color: #DCDCAA;">debug crypto ipsec</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Advanced Debugging Techniques</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Detailed IKE debugging</span>
Router# <span style="color: #DCDCAA;">debug crypto isakmp detail</span>
Router# <span style="color: #DCDCAA;">debug crypto isakmp error</span>

<span style="color: #6A9955;"># ESP packet debugging</span>
Router# <span style="color: #DCDCAA;">debug crypto ipsec esp</span>
Router# <span style="color: #DCDCAA;">debug crypto ipsec events</span>

<span style="color: #6A9955;"># Engine-level debugging</span>
Router# <span style="color: #DCDCAA;">debug crypto engine</span>
Router# <span style="color: #DCDCAA;">show crypto engine connections active</span>

<span style="color: #6A9955;"># Clear and reset VPN sessions</span>
Router# <span style="color: #DCDCAA;">clear crypto sa</span>
Router# <span style="color: #DCDCAA;">clear crypto isakmp</span>
Router# <span style="color: #DCDCAA;">clear crypto session</span>
</code>
            </pre>
            
            <h4 style="color: #F5B041;">Performance Monitoring and Optimization</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <p><strong>Key Performance Metrics:</strong></p>
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Throughput:</strong> Actual vs theoretical bandwidth utilization</li>
                    <li><strong>Latency:</strong> Round-trip time with encryption overhead</li>
                    <li><strong>Packet Loss:</strong> Drops due to MTU or processing issues</li>
                    <li><strong>CPU Utilization:</strong> Encryption/decryption processing load</li>
                    <li><strong>Memory Usage:</strong> SA storage and buffer allocation</li>
                    <li><strong>Tunnel Availability:</strong> Uptime and reconnection frequency</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Best Practices for VPN Deployment</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Security:</strong> Use strong encryption (AES-256) and authentication (SHA-256)</li>
                    <li><strong>Redundancy:</strong> Implement backup tunnels and automatic failover</li>
                    <li><strong>Monitoring:</strong> Deploy comprehensive logging and alerting systems</li>
                    <li><strong>Documentation:</strong> Maintain detailed configuration and topology records</li>
                    <li><strong>Testing:</strong> Regular connectivity and failover testing procedures</li>
                    <li><strong>Updates:</strong> Keep VPN software and firmware current</li>
                    <li><strong>Scalability:</strong> Plan for growth in users and bandwidth requirements</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">VPN Management Tools</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Comprehensive VPN status display</span>
Router# <span style="color: #DCDCAA;">show crypto session detail</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa peer 203.0.113.10 detail</span>

<span style="color: #6A9955;"># Statistics and counters</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa | include pkts</span>
Router# <span style="color: #DCDCAA;">show crypto ipsec sa | include current</span>

<span style="color: #6A9955;"># Hardware acceleration status</span>
Router# <span style="color: #DCDCAA;">show crypto engine accelerator statistic</span>
Router# <span style="color: #DCDCAA;">show crypto eli</span>

<span style="color: #6A9955;"># Configuration validation</span>
Router# <span style="color: #DCDCAA;">show running-config | section crypto</span>
Router# <span style="color: #DCDCAA;">show crypto key mypubkey</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand systematic troubleshooting approach for VPN issues</li>
                    <li>Know key show and debug commands for VPN diagnosis</li>
                    <li>Recognize common VPN problems and their typical solutions</li>
                    <li>Understand performance factors affecting VPN operations</li>
                    <li>Know best practices for secure and reliable VPN deployment</li>
                </ul>
            </div>
        </div>
    `,
    // 5.6.a Standard ACLs
    "Standard ACLs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">
                5.6.a: Standard ACLs
            </h3>
            <p>Standard Access Control Lists filter traffic based solely on source IP addresses. They are the simplest form of ACLs and provide basic traffic filtering capabilities for network security and traffic control.</p>
            
            <h4 style="color: #EC7063;">Standard ACL Characteristics</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Filtering Criteria:</strong> Source IP address only (no destination, protocol, or port filtering)</li>
                    <li><strong>Number Ranges:</strong> 1-99 and 1300-1999 for numbered standard ACLs</li>
                    <li><strong>Processing Order:</strong> First match wins - entries processed sequentially</li>
                    <li><strong>Implicit Deny:</strong> Every ACL ends with an implicit "deny any"</li>
                    <li><strong>Placement Rule:</strong> Deploy as close to destination as possible</li>
                    <li><strong>Wildcard Masks:</strong> Inverse of subnet mask to define address ranges</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Numbered Standard ACL Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create numbered standard ACL</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit 192.168.1.0 0.0.0.255</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 deny 192.168.2.10 0.0.0.0</span>
Router(config)# <span style="color: #DCDCAA;">access-list 10 permit any</span>

<span style="color: #6A9955;"># Alternative syntax for single hosts</span>
Router(config)# <span style="color: #DCDCAA;">access-list 20 permit host 10.1.1.5</span>
Router(config)# <span style="color: #DCDCAA;">access-list 20 deny host 10.1.1.10</span>
Router(config)# <span style="color: #DCDCAA;">access-list 20 permit 10.1.1.0 0.0.0.255</span>

<span style="color: #6A9955;"># Apply ACL to interface</span>
Router(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Router(config-if)# <span style="color: #DCDCAA;">ip access-group 10 out</span>
Router(config-if)# <span style="color: #DCDCAA;">ip access-group 20 in</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Named Standard ACL Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create named standard ACL</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard BRANCH_FILTER</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 10.1.0.0 0.0.255.255</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 172.16.0.0 0.0.255.255</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">deny any</span>

<span style="color: #6A9955;"># Management access ACL</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard MGMT_ACCESS</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit host 192.168.10.5</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 192.168.10.0 0.0.0.15</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">deny any log</span>

<span style="color: #6A9955;"># Apply named ACL</span>
Router(config)# <span style="color: #DCDCAA;">interface FastEthernet0/0</span>
Router(config-if)# <span style="color: #DCDCAA;">ip access-group BRANCH_FILTER in</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Wildcard Mask Examples</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">Network</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">Subnet Mask</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">Wildcard Mask</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">ACL Entry</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Single Host</td><td style="padding: 8px; border-bottom: 1px solid #444;">255.255.255.255</td><td style="padding: 8px; border-bottom: 1px solid #444;">0.0.0.0</td><td style="padding: 8px; border-bottom: 1px solid #444;">permit host 10.1.1.5</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">/24 Network</td><td style="padding: 8px; border-bottom: 1px solid #444;">255.255.255.0</td><td style="padding: 8px; border-bottom: 1px solid #444;">0.0.0.255</td><td style="padding: 8px; border-bottom: 1px solid #444;">permit 192.168.1.0 0.0.0.255</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">/16 Network</td><td style="padding: 8px; border-bottom: 1px solid #444;">255.255.0.0</td><td style="padding: 8px; border-bottom: 1px solid #444;">0.0.255.255</td><td style="padding: 8px; border-bottom: 1px solid #444;">permit 172.16.0.0 0.0.255.255</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Any Address</td><td style="padding: 8px; border-bottom: 1px solid #444;">0.0.0.0</td><td style="padding: 8px; border-bottom: 1px solid #444;">255.255.255.255</td><td style="padding: 8px; border-bottom: 1px solid #444;">permit any</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Odd Addresses</td><td style="padding: 8px; border-bottom: 1px solid #444;">N/A</td><td style="padding: 8px; border-bottom: 1px solid #444;">0.0.0.0</td><td style="padding: 8px; border-bottom: 1px solid #444;">permit 10.1.1.1 0.0.0.0</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Range 10-20</td><td style="padding: 8px; border-bottom: 1px solid #444;">N/A</td><td style="padding: 8px; border-bottom: 1px solid #444;">0.0.0.15</td><td style="padding: 8px; border-bottom: 1px solid #444;">permit 192.168.1.16 0.0.0.15</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Standard ACL Applications</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># VTY access control</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard VTY_ACCESS</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 192.168.100.0 0.0.0.255</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit host 10.1.1.100</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">deny any log</span>

Router(config)# <span style="color: #DCDCAA;">line vty 0 4</span>
Router(config-line)# <span style="color: #DCDCAA;">access-class VTY_ACCESS in</span>

<span style="color: #6A9955;"># NAT source definition</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard NAT_INSIDE</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 192.168.0.0 0.0.255.255</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 10.0.0.0 0.255.255.255</span>

Router(config)# <span style="color: #DCDCAA;">ip nat inside source list NAT_INSIDE interface GigabitEthernet0/1 overload</span>

<span style="color: #6A9955;"># SNMP access control</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard SNMP_MGMT</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 192.168.1.100</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">permit 192.168.1.101</span>

Router(config)# <span style="color: #DCDCAA;">snmp-server community public ro SNMP_MGMT</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Display ACL configuration</span>
Router# <span style="color: #DCDCAA;">show access-lists</span>
Router# <span style="color: #DCDCAA;">show access-lists 10</span>
Router# <span style="color: #DCDCAA;">show access-lists BRANCH_FILTER</span>

<span style="color: #6A9955;"># Show interface ACL assignments</span>
Router# <span style="color: #DCDCAA;">show ip interface GigabitEthernet0/1</span>
Router# <span style="color: #DCDCAA;">show ip interface brief | include access</span>

<span style="color: #6A9955;"># View ACL statistics and hit counts</span>
Router# <span style="color: #DCDCAA;">show access-lists | include matches</span>

<span style="color: #6A9955;"># Clear ACL statistics</span>
Router# <span style="color: #DCDCAA;">clear access-list counters</span>
Router# <span style="color: #DCDCAA;">clear access-list counters 10</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Common Standard ACL Mistakes</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Incorrect Placement:</strong> Standard ACLs too close to source block too much traffic</li>
                    <li><strong>Wrong Wildcard Mask:</strong> Using subnet mask instead of wildcard mask</li>
                    <li><strong>Order Problems:</strong> More specific entries must come before general entries</li>
                    <li><strong>Missing Permit Any:</strong> Forgetting explicit permit can block all traffic</li>
                    <li><strong>Interface Direction:</strong> Applying ACL in wrong direction (in vs out)</li>
                    <li><strong>Overlapping Entries:</strong> Redundant or conflicting ACL entries</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand standard ACLs filter only on source IP address</li>
                    <li>Know number ranges: 1-99 and 1300-1999 for standard ACLs</li>
                    <li>Remember placement rule: standard ACLs close to destination</li>
                    <li>Master wildcard mask calculations and common patterns</li>
                    <li>Know applications: VTY access, NAT, SNMP community strings</li>
                </ul>
            </div>
        </div>
    `,

    // 5.6.b Extended ACLs
    "Extended ACLs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">
                5.6.b: Extended ACLs
            </h3>
            <p>Extended Access Control Lists provide granular traffic filtering based on multiple criteria including source/destination IP addresses, protocol types, and port numbers. They offer the most comprehensive ACL filtering capabilities.</p>
            
            <h4 style="color: #EC7063;">Extended ACL Characteristics</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Multi-Criteria Filtering:</strong> Source IP, destination IP, protocol, and port numbers</li>
                    <li><strong>Number Ranges:</strong> 100-199 and 2000-2699 for numbered extended ACLs</li>
                    <li><strong>Protocol Support:</strong> IP, TCP, UDP, ICMP, and other protocols</li>
                    <li><strong>Port Granularity:</strong> Specific ports, ranges, or well-known service names</li>
                    <li><strong>Placement Rule:</strong> Deploy as close to source as possible</li>
                    <li><strong>Processing Efficiency:</strong> More specific filtering reduces network traffic early</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Basic Extended ACL Syntax</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Extended ACL Syntax Structure</span>
<span style="color: #C586C0;">access-list</span> <span style="color: #9CDCFE;">number</span> <span style="color: #DCDCAA;">{permit|deny}</span> <span style="color: #F5B041;">protocol</span> 
    <span style="color: #58D68D;">source</span> <span style="color: #58D68D;">source-wildcard</span> 
    <span style="color: #AF7AC5;">destination</span> <span style="color: #AF7AC5;">destination-wildcard</span> 
    <span style="color: #F39C12;">[operator port]</span> <span style="color: #64748b;">[options]</span>

<span style="color: #6A9955;"># Named Extended ACL Syntax</span>
<span style="color: #C586C0;">ip access-list extended</span> <span style="color: #9CDCFE;">name</span>
<span style="color: #DCDCAA;">{permit|deny}</span> <span style="color: #F5B041;">protocol</span> <span style="color: #58D68D;">source</span> <span style="color: #AF7AC5;">destination</span> <span style="color: #F39C12;">[options]</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Common Extended ACL Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Allow HTTP and HTTPS to web server</span>
Router(config)# <span style="color: #DCDCAA;">access-list 100 permit tcp 192.168.1.0 0.0.0.255 host 10.0.0.10 eq 80</span>
Router(config)# <span style="color: #DCDCAA;">access-list 100 permit tcp 192.168.1.0 0.0.0.255 host 10.0.0.10 eq 443</span>

<span style="color: #6A9955;"># Allow SSH from management subnet</span>
Router(config)# <span style="color: #DCDCAA;">access-list 101 permit tcp 192.168.100.0 0.0.0.255 any eq 22</span>

<span style="color: #6A9955;"># Allow ICMP ping and traceroute</span>
Router(config)# <span style="color: #DCDCAA;">access-list 102 permit icmp any any echo</span>
Router(config)# <span style="color: #DCDCAA;">access-list 102 permit icmp any any echo-reply</span>
Router(config)# <span style="color: #DCDCAA;">access-list 102 permit icmp any any time-exceeded</span>
Router(config)# <span style="color: #DCDCAA;">access-list 102 permit icmp any any unreachable</span>

<span style="color: #6A9955;"># Deny specific protocol, permit everything else</span>
Router(config)# <span style="color: #DCDCAA;">access-list 103 deny tcp any any eq 23</span>
Router(config)# <span style="color: #DCDCAA;">access-list 103 permit ip any any</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Named Extended ACL Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Comprehensive web server access ACL</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended WEB_SERVER_ACCESS</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow HTTP from internal networks</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 192.168.0.0 0.0.255.255 host 10.0.0.10 eq www</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 10.0.0.0 0.255.255.255 host 10.0.0.10 eq www</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow HTTPS from anywhere</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.10 eq 443</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow return traffic</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp host 10.0.0.10 any established</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Deny all other traffic</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">deny ip any any log</span>

<span style="color: #6A9955;"># Database server access control</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended DB_ACCESS</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 192.168.10.0 0.0.0.255 host 10.0.0.20 eq 3306</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 192.168.20.0 0.0.0.255 host 10.0.0.20 eq 1521</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp host 10.0.0.20 192.168.10.0 0.0.0.255 established</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">deny ip any host 10.0.0.20 log</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Port Operators and Ranges</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">Operator</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">Function</td><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">Example</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">eq</td><td style="padding: 8px; border-bottom: 1px solid #444;">Equal to (specific port)</td><td style="padding: 8px; border-bottom: 1px solid #444;">eq 80, eq www</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">neq</td><td style="padding: 8px; border-bottom: 1px solid #444;">Not equal to</td><td style="padding: 8px; border-bottom: 1px solid #444;">neq 23</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">lt</td><td style="padding: 8px; border-bottom: 1px solid #444;">Less than</td><td style="padding: 8px; border-bottom: 1px solid #444;">lt 1024</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">gt</td><td style="padding: 8px; border-bottom: 1px solid #444;">Greater than</td><td style="padding: 8px; border-bottom: 1px solid #444;">gt 1023</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">range</td><td style="padding: 8px; border-bottom: 1px solid #444;">Port range</td><td style="padding: 8px; border-bottom: 1px solid #444;">range 20 21</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Time-Based Extended ACLs</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Define time ranges</span>
Router(config)# <span style="color: #DCDCAA;">time-range BUSINESS_HOURS</span>
Router(config-time-range)# <span style="color: #DCDCAA;">periodic weekdays 8:00 to 18:00</span>

Router(config)# <span style="color: #DCDCAA;">time-range MAINTENANCE_WINDOW</span>
Router(config-time-range)# <span style="color: #DCDCAA;">periodic saturday 2:00 to 6:00</span>
Router(config-time-range)# <span style="color: #DCDCAA;">periodic sunday 2:00 to 6:00</span>

<span style="color: #6A9955;"># Apply time ranges to ACL entries</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended TIME_BASED_ACCESS</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 192.168.1.0 0.0.0.255 any eq 80 time-range BUSINESS_HOURS</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp 192.168.100.0 0.0.0.255 any eq 22 time-range MAINTENANCE_WINDOW</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">deny ip any any log</span>

<span style="color: #6A9955;"># Verify time-range status</span>
Router# <span style="color: #DCDCAA;">show time-range</span>
Router# <span style="color: #DCDCAA;">show access-lists TIME_BASED_ACCESS</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Common Extended ACL Patterns</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Email server access (SMTP, POP3, IMAP)</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended MAIL_SERVER</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.25 eq 25</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.25 eq 110</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.25 eq 143</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.25 eq 993</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.25 eq 995</span>

<span style="color: #6A9955;"># DNS server access</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended DNS_ACCESS</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit udp any host 10.0.0.53 eq 53</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.53 eq 53</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit udp host 10.0.0.53 any eq 53</span>

<span style="color: #6A9955;"># FTP access with data port range</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended FTP_ACCESS</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.21 eq 21</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp any host 10.0.0.21 range 1024 65535</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">permit tcp host 10.0.0.21 any established</span>
</code>
            </pre>
            
            <h4 style="color: #EC7063;">Advanced Extended ACL Features</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ul style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Established Keyword:</strong> Permits TCP traffic that is part of existing connections</li>
                    <li><strong>Log Keyword:</strong> Generates log messages for matched packets</li>
                    <li><strong>Fragments:</strong> Handles fragmented packets differently</li>
                    <li><strong>Precedence/DSCP:</strong> Filters based on QoS markings</li>
                    <li><strong>Object Groups:</strong> Groups of IPs, ports, or protocols for easier management</li>
                    <li><strong>Reflexive ACLs:</strong> Dynamic entries based on outbound traffic</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Extended ACL Verification</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Display ACL configuration and statistics</span>
Router# <span style="color: #DCDCAA;">show access-lists 100</span>
Router# <span style="color: #DCDCAA;">show access-lists WEB_SERVER_ACCESS</span>

<span style="color: #6A9955;"># View ACL with hit counts</span>
Router# <span style="color: #DCDCAA;">show access-lists | include permit|deny|matches</span>

<span style="color: #6A9955;"># Check interface ACL assignments</span>
Router# <span style="color: #DCDCAA;">show ip interface GigabitEthernet0/1 | include access list</span>

<span style="color: #6A9955;"># Monitor ACL logging</span>
Router# <span style="color: #DCDCAA;">show logging | include %SEC</span>
Router# <span style="color: #DCDCAA;">terminal monitor</span>

<span style="color: #6A9955;"># Test ACL with packet tracer</span>
Router# <span style="color: #DCDCAA;">debug ip packet 101 detail</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand extended ACLs filter on multiple criteria: source, destination, protocol, ports</li>
                    <li>Know number ranges: 100-199 and 2000-2699 for extended ACLs</li>
                    <li>Remember placement rule: extended ACLs close to source</li>
                    <li>Master port operators: eq, neq, lt, gt, range</li>
                    <li>Understand established keyword for return traffic</li>
                    <li>Know common service ports and protocol numbers</li>
                </ul>
            </div>
        </div>
    `,

    // 5.7 Layer 2 Security Features
    "Layer 2 Security": `
        <div style="font-family: 'Inter', sans-serif; color: #3498DB; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">5.7: Configure Layer 2 Security Features</h3>
            <h4 style="color: #5DADE2;">Port Security</h4>
            <p>Restricts port access based on MAC addresses. It can statically or dynamically learn allowed MACs. If a violation occurs, the port can be set to <strong>protect</strong> (drop violating traffic), <strong>restrict</strong> (drop traffic and send log), or <strong>shutdown</strong> (disable the port).</p>
            <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security mac-address sticky
Switch(config-if)# switchport port-security violation shutdown
</code>
</pre>
            <h4 style="color: #5DADE2;">DHCP Snooping</h4>
            <p>Prevents rogue DHCP servers. You configure switch ports as <strong>trusted</strong> (towards legit servers) or <strong>untrusted</strong> (towards clients). Snooping drops DHCP server messages from untrusted ports.</p>
            <h4 style="color: #5DADE2;">ARP Inspection</h4>
            <p>Prevents ARP spoofing/poisoning. It uses the DHCP Snooping binding table to verify that an ARP packet's sender MAC and IP address match. If they don't, the packet is dropped.</p>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #5DADE2; margin-bottom: 5px;">Study Resources:</h5>
                
                
            </div>
        </div>
    `,

    // 5.8 AAA Concepts
    "AAA Concepts": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.8: Compare Authentication, Authorization, and Accounting Concepts</h3>
            <p>AAA (Authentication, Authorization, and Accounting) is a comprehensive security framework that provides centralized access control, permission management, and activity monitoring for network resources.</p>
            
            <h4 style="color: #58D4FF;">AAA Framework Components</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #2a2a2a;">
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">AAA Component</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Key Question</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Function</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Examples</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px;"><strong>Authentication</strong></td>
                        <td style="border: 1px solid #444; padding: 8px;">Who are you?</td>
                        <td style="border: 1px solid #444; padding: 8px;">Verify user identity</td>
                        <td style="border: 1px solid #444; padding: 8px;">Username/password, certificates, biometrics</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="border: 1px solid #444; padding: 8px;"><strong>Authorization</strong></td>
                        <td style="border: 1px solid #444; padding: 8px;">What can you do?</td>
                        <td style="border: 1px solid #444; padding: 8px;">Grant permissions</td>
                        <td style="border: 1px solid #444; padding: 8px;">Command privilege levels, VLAN access, QoS policies</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px;"><strong>Accounting</strong></td>
                        <td style="border: 1px solid #444; padding: 8px;">What did you do?</td>
                        <td style="border: 1px solid #444; padding: 8px;">Log and monitor activity</td>
                        <td style="border: 1px solid #444; padding: 8px;">Login times, commands executed, data transferred</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">Authentication Methods</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Local Authentication:</strong> Username/password stored locally on device</li>
                    <li><strong>RADIUS:</strong> Remote Authentication Dial-In User Service - UDP ports 1812/1813</li>
                    <li><strong>TACACS+:</strong> Terminal Access Controller Access-Control System Plus - TCP port 49</li>
                    <li><strong>LDAP:</strong> Lightweight Directory Access Protocol - TCP port 389/636 (LDAPS)</li>
                    <li><strong>Kerberos:</strong> Ticket-based authentication system - UDP port 88</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">RADIUS vs. TACACS+ Comparison</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Feature</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">RADIUS</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">TACACS+</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Transport Protocol</td>
                    <td style="border: 1px solid #444; padding: 8px;">UDP</td>
                    <td style="border: 1px solid #444; padding: 8px;">TCP</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Port Numbers</td>
                    <td style="border: 1px solid #444; padding: 8px;">1812 (auth), 1813 (acct)</td>
                    <td style="border: 1px solid #444; padding: 8px;">49</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">AAA Separation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Authentication + Authorization combined</td>
                    <td style="border: 1px solid #444; padding: 8px;">Authentication, Authorization, Accounting separate</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Encryption</td>
                    <td style="border: 1px solid #444; padding: 8px;">Password only</td>
                    <td style="border: 1px solid #444; padding: 8px;">Entire packet</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Vendor Support</td>
                    <td style="border: 1px solid #444; padding: 8px;">Industry standard</td>
                    <td style="border: 1px solid #444; padding: 8px;">Cisco proprietary</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Command Authorization</td>
                    <td style="border: 1px solid #444; padding: 8px;">Limited granularity</td>
                    <td style="border: 1px solid #444; padding: 8px;">Per-command authorization</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Basic AAA Configuration on Cisco Devices</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
! Enable AAA globally
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>

! Configure RADIUS server
Router(config)# <span style="color: #DCDCAA;">radius server RAD-SERVER</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">address ipv4 10.1.1.100 auth-port 1812 acct-port 1813</span>
Router(config-radius-server)# <span style="color: #DCDCAA;">key RadiusSecretKey123</span>

! Configure TACACS+ server
Router(config)# <span style="color: #DCDCAA;">tacacs server TAC-SERVER</span>
Router(config-server-tacacs)# <span style="color: #DCDCAA;">address ipv4 10.1.1.101</span>
Router(config-server-tacacs)# <span style="color: #DCDCAA;">key TacacsSecretKey456</span>

! Create server groups
Router(config)# <span style="color: #DCDCAA;">aaa group server radius RADIUS-GROUP</span>
Router(config-sg-radius)# <span style="color: #DCDCAA;">server name RAD-SERVER</span>

Router(config)# <span style="color: #DCDCAA;">aaa group server tacacs+ TACACS-GROUP</span>
Router(config-sg-tacacs+)# <span style="color: #DCDCAA;">server name TAC-SERVER</span>

! Configure authentication methods
Router(config)# <span style="color: #DCDCAA;">aaa authentication login default group TACACS-GROUP local</span>
Router(config)# <span style="color: #DCDCAA;">aaa authentication enable default group TACACS-GROUP enable</span>

! Configure authorization
Router(config)# <span style="color: #DCDCAA;">aaa authorization exec default group TACACS-GROUP local</span>
Router(config)# <span style="color: #DCDCAA;">aaa authorization commands 15 default group TACACS-GROUP local</span>

! Configure accounting
Router(config)# <span style="color: #DCDCAA;">aaa accounting exec default start-stop group TACACS-GROUP</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting commands 15 default start-stop group TACACS-GROUP</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Authorization Privilege Levels</h4>
            <ul style="list-style-type: square; margin-left: 20px;">
                <li><strong>Level 0:</strong> Logout command only</li>
                <li><strong>Level 1:</strong> User EXEC mode (show commands, ping, telnet)</li>
                <li><strong>Levels 2-14:</strong> Custom privilege levels with specific command authorization</li>
                <li><strong>Level 15:</strong> Full privileged EXEC mode (all commands)</li>
            </ul>
            
            <h4 style="color: #58D4FF;">Accounting Information Collected</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Session Information:</strong> Login/logout times, session duration</li>
                    <li><strong>Command History:</strong> All commands executed with timestamps</li>
                    <li><strong>Resource Usage:</strong> Network resources accessed, data transferred</li>
                    <li><strong>Connection Details:</strong> Source IP addresses, connection methods</li>
                    <li><strong>Failure Events:</strong> Failed authentication attempts, policy violations</li>
                </ul>
            </div>
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #AF7AC5; margin-bottom: 5px;">Study Resources:</h5>
                <em style="font-size: 0.9em;"><a href="https://www.cisco.com/c/en/us/support/docs/security-vpn/remote-authentication-dial-user-service-radius/13838-10.html" target="_blank" style="color: #C39BD3;">Read: AAA Overview</a></em><br>
                <em style="font-size: 0.9em;"><a href="https://www.youtube.com/watch?v=W-Lq232K4aM" target="_blank" style="color: #C39BD3;">Watch: AAA on Cisco Routers (Jeremy's IT Lab)</a></em>
            </div>
        </div>
    `,

    // 5.9 Wireless Security Protocols
    "Wireless Security Protocols": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.9: Describe Wireless Security Protocols (WPA, WPA2, and WPA3)</h3>
            <p>Wireless security has evolved significantly from the early, insecure protocols to modern, robust encryption standards. Understanding this evolution is crucial for CCNA exam success.</p>
            
            <h4 style="color: #58D4FF;">Wireless Security Evolution Timeline</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #2a2a2a;">
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Protocol</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Year</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Encryption</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Security Level</th>
                        <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Status</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px;">WEP</td>
                        <td style="border: 1px solid #444; padding: 8px;">1997</td>
                        <td style="border: 1px solid #444; padding: 8px;">RC4 (40/104-bit)</td>
                        <td style="border: 1px solid #444; padding: 8px; color: #f87171;">Broken</td>
                        <td style="border: 1px solid #444; padding: 8px; color: #f87171;">Deprecated</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="border: 1px solid #444; padding: 8px;">WPA</td>
                        <td style="border: 1px solid #444; padding: 8px;">2003</td>
                        <td style="border: 1px solid #444; padding: 8px;">TKIP/RC4</td>
                        <td style="border: 1px solid #444; padding: 8px; color: #f59e0b;">Weak</td>
                        <td style="border: 1px solid #444; padding: 8px; color: #f59e0b;">Legacy</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #444; padding: 8px;">WPA2</td>
                        <td style="border: 1px solid #444; padding: 8px;">2004</td>
                        <td style="border: 1px solid #444; padding: 8px;">AES-CCMP</td>
                        <td style="border: 1px solid #444; padding: 8px; color: #10b981;">Strong</td>
                        <td style="border: 1px solid #444; padding: 8px; color: #10b981;">Current Standard</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="border: 1px solid #444; padding: 8px;">WPA3</td>
                        <td style="border: 1px solid #444; padding: 8px;">2018</td>
                        <td style="border: 1px solid #444; padding: 8px;">AES-GCMP</td>
                        <td style="border: 1px solid #444; padding: 8px; color: #3b82f6;">Very Strong</td>
                        <td style="border: 1px solid #444; padding: 8px; color: #3b82f6;">Latest Standard</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #58D4FF;">WEP (Wired Equivalent Privacy) - Legacy</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f87171;">
                <p><strong>❌ NEVER USE - Fundamentally Broken</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Weak Encryption:</strong> RC4 stream cipher with static keys</li>
                    <li><strong>IV Collision:</strong> 24-bit initialization vector causes key reuse</li>
                    <li><strong>No Integrity:</strong> CRC-32 checksum easily forged</li>
                    <li><strong>Authentication:</strong> Open System or Shared Key (both insecure)</li>
                    <li><strong>Cracking Time:</strong> Can be broken in minutes with tools like Aircrack-ng</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">WPA (Wi-Fi Protected Access) - Interim Solution</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>⚠️ Legacy - Not Recommended</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>TKIP (Temporal Key Integrity Protocol):</strong> Dynamic key generation</li>
                    <li><strong>MIC (Message Integrity Check):</strong> Michael algorithm for integrity</li>
                    <li><strong>Key Management:</strong> 4-way handshake for key exchange</li>
                    <li><strong>Vulnerabilities:</strong> TKIP can be compromised, MIC key recovery attacks</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">WPA2 (Wi-Fi Protected Access 2) - Current Standard</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>✅ Current Industry Standard</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>AES-CCMP:</strong> Advanced Encryption Standard with Counter Mode CBC-MAC Protocol</li>
                    <li><strong>Strong Encryption:</strong> 128-bit AES encryption (vs. RC4 in WEP/WPA)</li>
                    <li><strong>Authentication Modes:</strong>
                        <ul style="margin-left: 20px;">
                            <li><strong>Personal (PSK):</strong> Pre-Shared Key for home/small office</li>
                            <li><strong>Enterprise (802.1X):</strong> RADIUS authentication for business</li>
                        </ul>
                    </li>
                    <li><strong>Key Management:</strong> Robust 4-way handshake with PTK/GTK</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">WPA3 (Wi-Fi Protected Access 3) - Latest Standard</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>🔒 Most Secure - Future Standard</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>SAE (Simultaneous Authentication of Equals):</strong> Replaces PSK with Dragonfly handshake</li>
                    <li><strong>Forward Secrecy:</strong> Each session uses unique encryption keys</li>
                    <li><strong>Brute Force Protection:</strong> SAE prevents offline dictionary attacks</li>
                    <li><strong>Enhanced Encryption:</strong> 192-bit security suite for enterprise</li>
                    <li><strong>WPA3-Personal:</strong> Stronger individual encryption even on open networks</li>
                    <li><strong>WPA3-Enterprise:</strong> Suite-B cryptographic standards</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Authentication Methods Comparison</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Authentication Type</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">WPA2</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">WPA3</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Use Case</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Personal/PSK</td>
                    <td style="border: 1px solid #444; padding: 8px;">Pre-Shared Key</td>
                    <td style="border: 1px solid #444; padding: 8px;">SAE (Dragonfly)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Home, Small Office</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Enterprise</td>
                    <td style="border: 1px solid #444; padding: 8px;">802.1X/EAP</td>
                    <td style="border: 1px solid #444; padding: 8px;">802.1X/EAP + Suite-B</td>
                    <td style="border: 1px solid #444; padding: 8px;">Corporate Networks</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Open/Enhanced</td>
                    <td style="border: 1px solid #444; padding: 8px;">N/A</td>
                    <td style="border: 1px solid #444; padding: 8px;">OWE (Opportunistic Wireless Encryption)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Public Hotspots</td>
                </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand why WEP should never be used (broken encryption)</li>
                    <li>Know the differences between WPA, WPA2, and WPA3</li>
                    <li>Understand Personal vs. Enterprise authentication modes</li>
                    <li>Know that WPA2 uses AES-CCMP, WPA3 uses SAE</li>
                    <li>Recognize that WPA3 prevents offline dictionary attacks</li>
                </ul>
            </div>
        </div>
    `,

    // 5.10 WLAN Configuration with WPA2 PSK
    "WPA2 PSK Configuration": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.10: Configure and Verify WLAN within GUI using WPA2 PSK</h3>
            <p>WPA2 with Pre-Shared Key (PSK) is the most common wireless security configuration for small to medium environments. This configuration is typically performed through a GUI interface on wireless controllers or standalone access points.</p>
            
            <h4 style="color: #58D68D;">WPA2-PSK Overview</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Encryption:</strong> AES-CCMP (Advanced Encryption Standard - Counter Mode CBC-MAC Protocol)</li>
                    <li><strong>Key Length:</strong> 256-bit encryption keys derived from PSK</li>
                    <li><strong>Authentication:</strong> 4-way handshake using Pre-Shared Key</li>
                    <li><strong>Use Case:</strong> Home networks, small offices, guest networks</li>
                    <li><strong>Limitation:</strong> All devices share the same key (no individual user authentication)</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Wireless LAN Controller (WLC) GUI Configuration</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <p><strong>Step-by-Step WLC Configuration:</strong></p>
                <ol style="margin-left: 20px;">
                    <li><strong>Access WLC GUI:</strong> Navigate to https://[WLC-IP] and login</li>
                    <li><strong>Create WLAN:</strong> WLANs → Create New</li>
                    <li><strong>Basic Settings:</strong>
                        <ul style="margin-left: 20px;">
                            <li>WLAN ID: 1-512 (unique identifier)</li>
                            <li>Profile Name: Internal reference name</li>
                            <li>SSID: Network name broadcast to clients</li>
                        </ul>
                    </li>
                    <li><strong>Security Configuration:</strong>
                        <ul style="margin-left: 20px;">
                            <li>Layer 2 Security: WPA+WPA2</li>
                            <li>WPA/WPA2 Parameters: WPA2 Policy - Enable</li>
                            <li>WPA/WPA2 Encryption: AES</li>
                            <li>Key Management: PSK</li>
                        </ul>
                    </li>
                    <li><strong>Apply and Enable WLAN</strong></li>
                </ol>
            </div>
            
            <h4 style="color: #58D68D;">GUI Configuration Examples</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <p><strong>Cisco WLC WLAN Security Tab Configuration:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<strong>Layer 2 Security Tab:</strong>
├── Layer 2 Security: [WPA+WPA2] ✓
├── WPA+WPA2 Parameters:
│   ├── WPA Policy: [ ] Disable
│   ├── WPA2 Policy: [✓] Enable  
│   ├── WPA/WPA2 Encryption:
│   │   ├── TKIP: [ ] 
│   │   └── AES: [✓] Enable
│   └── Auth Key Management:
│       ├── 802.1X: [ ]
│       ├── PSK: [✓] Enable
│       └── CCKM: [ ]
└── WPA/WPA2 Passphrase: [●●●●●●●●●●●●]
</code>
</pre>
            </div>
            
            <h4 style="color: #58D68D;">PSK Best Practices</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Parameter</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Recommendation</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Security Impact</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">PSK Length</td>
                    <td style="border: 1px solid #444; padding: 8px;">12-63 characters (longer is better)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Prevents brute force attacks</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Character Mix</td>
                    <td style="border: 1px solid #444; padding: 8px;">Upper, lower, numbers, symbols</td>
                    <td style="border: 1px solid #444; padding: 8px;">Increases key space</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Key Rotation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Change every 90 days</td>
                    <td style="border: 1px solid #444; padding: 8px;">Limits exposure if compromised</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">SSID Broadcast</td>
                    <td style="border: 1px solid #444; padding: 8px;">Enable (hiding SSID is security by obscurity)</td>
                    <td style="border: 1px solid #444; padding: 8px;">Proper authentication is real security</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Common WLC/AP Platforms GUI</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Cisco WLC (Wireless LAN Controller):</strong> Centralized management for multiple APs</li>
                    <li><strong>Cisco Meraki:</strong> Cloud-managed wireless with dashboard GUI</li>
                    <li><strong>Cisco Aironet APs:</strong> Standalone AP web interface configuration</li>
                    <li><strong>Cisco DNA Center:</strong> Intent-based networking GUI for wireless</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">WPA2-PSK 4-Way Handshake Process</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<strong>WPA2-PSK Authentication Flow:</strong>

1. <span style="color: #58D68D;">Association:</span> Client associates with AP (Open System Authentication)
2. <span style="color: #58D68D;">Message 1:</span> AP → Client: ANonce (AP Nonce)
3. <span style="color: #58D68D;">Message 2:</span> Client → AP: SNonce + MIC (Client Nonce + Message Integrity Check)
4. <span style="color: #58D68D;">Message 3:</span> AP → Client: GTK + MIC (Group Temporal Key)
5. <span style="color: #58D68D;">Message 4:</span> Client → AP: ACK + MIC (Acknowledgment)

<strong>Key Derivation:</strong>
PTK = PRF(PSK + ANonce + SNonce + AP_MAC + Client_MAC)
GTK = Generated by AP for multicast/broadcast traffic
</code>
</pre>
            
            <h4 style="color: #58D68D;">Verification Commands and Monitoring</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<strong>WLC CLI Verification Commands:</strong>
(Cisco Controller) > <span style="color: #DCDCAA;">show wlan summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show client summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show client detail &lt;client-mac&gt;</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show ap summary</span>

<strong>AP CLI Verification Commands:</strong>
AP# <span style="color: #DCDCAA;">show dot11 associations</span>
AP# <span style="color: #DCDCAA;">show interfaces dot11radio 0</span>
AP# <span style="color: #DCDCAA;">show running-config | include wpa</span>
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand WPA2-PSK configuration through GUI interfaces</li>
                    <li>Know the 4-way handshake process for WPA2 authentication</li>
                    <li>Configure proper PSK security settings (AES encryption)</li>
                    <li>Understand difference between PSK and Enterprise (802.1X) modes</li>
                    <li>Know verification commands for wireless client connectivity</li>
                </ul>
            </div>
        </div>
    `,
    
    "Wireless Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.9: Describe Wireless Security Protocols (WPA, WPA2, and WPA3)</h3>
            <p>This content has been moved to "Wireless Security Protocols" for better organization. Please refer to that section for comprehensive wireless security information.</p>
        </div>
    `,
    
    "WPA2 PSK": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.10: Configure and Verify WLAN using WPA2 PSK</h3>
            <p>This content has been moved to "WPA2 PSK Configuration" for better organization. Please refer to that section for comprehensive WPA2 PSK configuration information.</p>
        </div>
    `,

    // 5.6 Access Control Lists - Named ACLs
    "Named ACLs": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #00A8FF; border-bottom: 2px solid #00A8FF; padding-bottom: 5px;">5.6: Access Control Lists - Named ACLs</h3>
            <p>Named ACLs provide significant advantages over numbered ACLs, including descriptive names, easier management, and the ability to insert and delete specific entries. They are essential for large-scale network deployments where ACL maintenance is critical.</p>
            
            <h4 style="color: #58D4FF;">Named ACL Advantages</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #00A8FF;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Descriptive Names:</strong> Use meaningful names instead of numbers (e.g., "BLOCK_SOCIAL_MEDIA" vs "101")</li>
                    <li><strong>Sequence Numbers:</strong> Each entry has a sequence number for easy insertion/deletion</li>
                    <li><strong>Unlimited Entries:</strong> No limit on number of entries (compared to numbered ACL limits)</li>
                    <li><strong>Easy Modification:</strong> Insert entries at specific positions without recreating entire ACL</li>
                    <li><strong>Self-Documenting:</strong> Names provide immediate understanding of ACL purpose</li>
                    <li><strong>Remark Support:</strong> Add comments to document complex entries</li>
                </ul>
            </div>
            
            <h4 style="color: #58D4FF;">Named Standard ACL Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Create named standard ACL</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list standard ALLOW_MANAGEMENT</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">remark Allow network management subnet</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">10 permit 192.168.100.0 0.0.0.255</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">remark Allow admin workstation</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">20 permit host 10.1.1.100</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">remark Deny all other traffic</span>
Router(config-std-nacl)# <span style="color: #DCDCAA;">30 deny any log</span>

<span style="color: #6A9955;">! Apply to interface</span>
Router(config)# <span style="color: #DCDCAA;">interface GigabitEthernet0/1</span>
Router(config-if)# <span style="color: #DCDCAA;">ip access-group ALLOW_MANAGEMENT in</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Named Extended ACL Configuration</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Create named extended ACL</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended BLOCK_SOCIAL_MEDIA</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Block Facebook</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">10 deny tcp any host 31.13.64.0 0.0.63.255</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Block Twitter</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">20 deny tcp any host 199.16.156.0 0.0.3.255</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow HTTPS for business use</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">30 permit tcp 192.168.1.0 0.0.0.255 any eq 443</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow HTTP for business use</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">40 permit tcp 192.168.1.0 0.0.0.255 any eq 80</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Deny all other traffic</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">50 deny ip any any log</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Sequence Number Management</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Sequence Number Operations:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Insert entry at specific sequence number</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended BLOCK_SOCIAL_MEDIA</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">15 deny tcp any host 157.240.0.0 0.0.255.255</span>

<span style="color: #6A9955;">! Delete specific entry by sequence number</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">no 20</span>

<span style="color: #6A9955;">! Resequence ACL entries (start at 10, increment by 10)</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list resequence BLOCK_SOCIAL_MEDIA 10 10</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #58D4FF;">Named ACL Best Practices</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Practice</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Description</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D4FF;">Example</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Descriptive Names</td>
                    <td style="border: 1px solid #444; padding: 8px;">Use names that describe the ACL purpose</td>
                    <td style="border: 1px solid #444; padding: 8px;">BLOCK_P2P, ALLOW_VPN_USERS</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Sequence Gaps</td>
                    <td style="border: 1px solid #444; padding: 8px;">Leave gaps between sequence numbers</td>
                    <td style="border: 1px solid #444; padding: 8px;">10, 20, 30 instead of 1, 2, 3</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Documentation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Use remark statements for complex entries</td>
                    <td style="border: 1px solid #444; padding: 8px;">remark Allow database access</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Logical Grouping</td>
                    <td style="border: 1px solid #444; padding: 8px;">Group related entries together</td>
                    <td style="border: 1px solid #444; padding: 8px;">10-50: Permits, 60-90: Denies</td>
                </tr>
            </table>
            
            <h4 style="color: #58D4FF;">Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Display named ACL with sequence numbers</span>
Router# <span style="color: #DCDCAA;">show access-lists BLOCK_SOCIAL_MEDIA</span>

<span style="color: #6A9955;">! Show all named ACLs</span>
Router# <span style="color: #DCDCAA;">show ip access-lists</span>

<span style="color: #6A9955;">! Display ACL hit counters</span>
Router# <span style="color: #DCDCAA;">show access-lists ALLOW_MANAGEMENT | include matches</span>

<span style="color: #6A9955;">! Clear ACL counters</span>
Router# <span style="color: #DCDCAA;">clear access-list counters BLOCK_SOCIAL_MEDIA</span>

<span style="color: #6A9955;">! Test ACL matching (simulation)</span>
Router# <span style="color: #DCDCAA;">test access-list ALLOW_MANAGEMENT 192.168.100.50</span>
</code>
</pre>
            
            <h4 style="color: #58D4FF;">Migration from Numbered to Named ACLs</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Migration Process:</strong></p>
                <ol style="margin-left: 20px;">
                    <li><strong>Document Current ACL:</strong> Copy existing numbered ACL configuration</li>
                    <li><strong>Create Named ACL:</strong> Build equivalent named ACL with sequence numbers</li>
                    <li><strong>Add Remarks:</strong> Document purpose of each entry</li>
                    <li><strong>Test in Lab:</strong> Verify functionality before production deployment</li>
                    <li><strong>Replace During Maintenance:</strong> Remove numbered ACL and apply named ACL</li>
                    <li><strong>Verify Operation:</strong> Confirm traffic flow and log entries</li>
                </ol>
            </div>
            
            <h4 style="color: #58D4FF;">Real-World Example: Branch Office Security</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Branch office security ACL</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended BRANCH_SECURITY</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark === MANAGEMENT ACCESS ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">10 permit tcp 192.168.100.0 0.0.0.255 any eq 22 log</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">20 permit tcp 192.168.100.0 0.0.0.255 any eq 443 log</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark === BUSINESS APPLICATIONS ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">30 permit tcp 192.168.1.0 0.0.0.255 10.0.1.100 eq 1433</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">40 permit tcp 192.168.1.0 0.0.0.255 10.0.1.200 eq 80</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark === SECURITY RESTRICTIONS ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">50 deny tcp any any eq 21 log</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">60 deny tcp any any eq 23 log</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark === DEFAULT PERMIT ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">70 permit ip any any</span>
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure named standard and extended ACLs with sequence numbers</li>
                    <li>Use descriptive names and remark statements for documentation</li>
                    <li>Insert and delete specific ACL entries using sequence numbers</li>
                    <li>Verify named ACL operation and troubleshoot common issues</li>
                    <li>Understand advantages of named ACLs over numbered ACLs</li>
                </ul>
            </div>
        </div>
    `,

    // 5.6 Access Control Lists - ACL Troubleshooting
    "ACL Troubleshooting": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #2ECC71; border-bottom: 2px solid #2ECC71; padding-bottom: 5px;">5.6: Access Control Lists - ACL Troubleshooting</h3>
            <p>ACL troubleshooting requires a systematic approach to identify and resolve access control issues. Understanding common problems, verification commands, and debugging techniques is essential for maintaining network security and connectivity.</p>
            
            <h4 style="color: #58D68D;">Common ACL Issues</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2ECC71;">
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Implicit Deny All:</strong> Forgetting the invisible "deny any" at the end of every ACL</li>
                    <li><strong>Incorrect Wildcard Masks:</strong> Using subnet masks instead of wildcard masks</li>
                    <li><strong>Wrong Direction:</strong> Applying ACL to wrong interface direction (in vs out)</li>
                    <li><strong>Order of Entries:</strong> More specific rules placed after general rules</li>
                    <li><strong>Standard ACL Placement:</strong> Standard ACLs too close to source, blocking legitimate traffic</li>
                    <li><strong>Missing ACL Application:</strong> ACL created but not applied to interface</li>
                    <li><strong>Typos in Names:</strong> Misspelled ACL names in application commands</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Systematic Troubleshooting Methodology</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <ol style="margin-left: 20px; color: #E0E0E0;">
                    <li><strong>Define the Problem:</strong> Identify which traffic is being blocked or incorrectly permitted</li>
                    <li><strong>Gather Information:</strong> Document source, destination, protocol, and expected behavior</li>
                    <li><strong>Analyze ACL Logic:</strong> Examine ACL rules and their order of evaluation</li>
                    <li><strong>Verify ACL Application:</strong> Confirm ACLs are applied to correct interfaces and directions</li>
                    <li><strong>Test Step by Step:</strong> Isolate each ACL entry to identify the problematic rule</li>
                    <li><strong>Implement Solution:</strong> Modify ACL rules or placement as needed</li>
                    <li><strong>Verify Resolution:</strong> Test to confirm the issue is resolved</li>
                </ol>
            </div>
            
            <h4 style="color: #58D68D;">Essential Verification Commands</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Display all ACLs with hit counters</span>
Router# <span style="color: #DCDCAA;">show access-lists</span>

<span style="color: #6A9955;">! Show ACL applied to specific interface</span>
Router# <span style="color: #DCDCAA;">show ip interface GigabitEthernet0/1</span>

<span style="color: #6A9955;">! Display specific ACL with line numbers</span>
Router# <span style="color: #DCDCAA;">show access-lists 101</span>
Router# <span style="color: #DCDCAA;">show ip access-lists BLOCK_TRAFFIC</span>

<span style="color: #6A9955;">! Test ACL matching for specific traffic</span>
Router# <span style="color: #DCDCAA;">test access-list 101 192.168.1.10 tcp any 80</span>

<span style="color: #6A9955;">! Clear ACL hit counters for clean testing</span>
Router# <span style="color: #DCDCAA;">clear access-list counters</span>
Router# <span style="color: #DCDCAA;">clear access-list counters 101</span>

<span style="color: #6A9955;">! Display interface summary with ACLs</span>
Router# <span style="color: #DCDCAA;">show ip interface brief | include access</span>
</code>
</pre>
            
            <h4 style="color: #58D68D;">Debug Commands and Logging</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Enable ACL logging for troubleshooting (use carefully in production)</span>
Router(config)# <span style="color: #DCDCAA;">access-list 101 deny tcp any any eq 80 log</span>

<span style="color: #6A9955;">! View logged ACL hits</span>
Router# <span style="color: #DCDCAA;">show logging | include access</span>

<span style="color: #6A9955;">! Debug IP packets (EXTREME CAUTION - CPU intensive)</span>
Router# <span style="color: #DCDCAA;">debug ip packet 105 detail</span>

<span style="color: #6A9955;">! Monitor real-time ACL hits</span>
Router# <span style="color: #DCDCAA;">show access-lists 101 | include matches</span>

<span style="color: #6A9955;">! Turn off debugging</span>
Router# <span style="color: #DCDCAA;">no debug all</span>
Router# <span style="color: #DCDCAA;">undebug all</span>
</code>
</pre>
            
            <h4 style="color: #58D68D;">Troubleshooting Scenarios</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Problem</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Symptoms</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #58D68D;">Solution</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">All Traffic Blocked</td>
                    <td style="border: 1px solid #444; padding: 8px;">No connectivity after ACL implementation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Add explicit permit statement before implicit deny</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Wrong Traffic Blocked</td>
                    <td style="border: 1px solid #444; padding: 8px;">Legitimate traffic denied, unwanted permitted</td>
                    <td style="border: 1px solid #444; padding: 8px;">Check wildcard masks and entry order</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">No ACL Effect</td>
                    <td style="border: 1px solid #444; padding: 8px;">ACL configured but traffic not filtered</td>
                    <td style="border: 1px solid #444; padding: 8px;">Verify ACL is applied to interface and direction</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Partial Functionality</td>
                    <td style="border: 1px solid #444; padding: 8px;">Some traffic works, other doesn't</td>
                    <td style="border: 1px solid #444; padding: 8px;">Examine ACL entry order and overlapping rules</td>
                </tr>
            </table>
            
            <h4 style="color: #58D68D;">Common Wildcard Mask Errors</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f39c12;">
                <p><strong>Wildcard vs Subnet Mask Confusion:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 10px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! WRONG - Using subnet mask (will not work)</span>
<span style="color: #f87171;">access-list 101 permit ip 192.168.1.0 255.255.255.0 any</span>

<span style="color: #6A9955;">! CORRECT - Using wildcard mask</span>
<span style="color: #10b981;">access-list 101 permit ip 192.168.1.0 0.0.0.255 any</span>

<span style="color: #6A9955;">! Quick conversion: Wildcard = 255.255.255.255 - Subnet Mask</span>
<span style="color: #6A9955;">! /24 = 255.255.255.0, so wildcard = 0.0.0.255</span>
<span style="color: #6A9955;">! /30 = 255.255.255.252, so wildcard = 0.0.0.3</span>
</code>
</pre>
            </div>
            
            <h4 style="color: #58D68D;">ACL Placement Troubleshooting</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #e74c3c;">
                <p><strong>Standard ACL Placement Issues:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Too Close to Source:</strong> Standard ACL blocks all traffic from source to any destination</li>
                    <li><strong>Solution:</strong> Place standard ACLs as close to destination as possible</li>
                </ul>
                
                <p><strong>Extended ACL Placement Issues:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Too Far from Source:</strong> Unwanted traffic consumes bandwidth before being blocked</li>
                    <li><strong>Solution:</strong> Place extended ACLs as close to source as possible</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Real-World Troubleshooting Example</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Problem: Web traffic from 192.168.1.0/24 is blocked</span>
<span style="color: #6A9955;">! Step 1: Check current ACL</span>
Router# <span style="color: #DCDCAA;">show access-lists 101</span>
Standard IP access list 101
    10 deny   192.168.1.0, wildcard bits 0.0.0.255 (15 matches)
    20 permit any (0 matches)

<span style="color: #6A9955;">! Step 2: Check ACL application</span>
Router# <span style="color: #DCDCAA;">show ip interface GigabitEthernet0/1 | include access</span>
  Outgoing access list is 101

<span style="color: #6A9955;">! Problem identified: Order issue - deny before permit</span>
<span style="color: #6A9955;">! Solution: Fix ACL order</span>
Router(config)# <span style="color: #DCDCAA;">no access-list 101</span>
Router(config)# <span style="color: #DCDCAA;">access-list 101 permit tcp 192.168.1.0 0.0.0.255 any eq 80</span>
Router(config)# <span style="color: #DCDCAA;">access-list 101 permit tcp 192.168.1.0 0.0.0.255 any eq 443</span>
Router(config)# <span style="color: #DCDCAA;">access-list 101 deny ip any any log</span>
</code>
</pre>
            
            <h4 style="color: #58D68D;">Performance Impact Troubleshooting</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9333ea;">
                <p><strong>Performance Considerations:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Long ACLs:</strong> Each packet checks every rule until match - order matters</li>
                    <li><strong>Logging Overhead:</strong> Excessive logging can impact router performance</li>
                    <li><strong>CPU Impact:</strong> Debug commands and detailed logging consume CPU cycles</li>
                    <li><strong>Optimization:</strong> Place most frequently matched rules at the top</li>
                </ul>
            </div>
            
            <h4 style="color: #58D68D;">Best Practices for ACL Troubleshooting</h4>
            <ol style="margin-left: 20px;">
                <li><strong>Document Changes:</strong> Keep records of all ACL modifications</li>
                <li><strong>Test in Lab:</strong> Verify changes in test environment before production</li>
                <li><strong>Use Hit Counters:</strong> Monitor which rules are being triggered</li>
                <li><strong>Implement Gradually:</strong> Add rules incrementally and test each addition</li>
                <li><strong>Plan Rollback:</strong> Have a quick method to remove problematic ACLs</li>
                <li><strong>Monitor Logs:</strong> Regular review of ACL logs for unusual patterns</li>
                <li><strong>Backup Configs:</strong> Save working configurations before making changes</li>
            </ol>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Use show commands to verify ACL configuration and application</li>
                    <li>Identify common ACL issues: implicit deny, order, wildcard masks</li>
                    <li>Understand standard vs extended ACL placement principles</li>
                    <li>Use hit counters and logging to troubleshoot ACL problems</li>
                    <li>Apply systematic troubleshooting methodology for ACL issues</li>
                </ul>
            </div>
        </div>
    `,

    // 5.6 Access Control Lists - ACL Best Practices
    "ACL Best Practices": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #F39C12; border-bottom: 2px solid #F39C12; padding-bottom: 5px;">5.6: Access Control Lists - ACL Best Practices</h3>
            <p>ACL best practices ensure optimal security, performance, and maintainability in enterprise networks. Following established guidelines reduces errors, improves troubleshooting, and enhances overall network security posture.</p>
            
            <h4 style="color: #F5B041;">ACL Placement Rules</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #F39C12;">
                <p><strong>Standard ACL Placement:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Close to Destination:</strong> Place standard ACLs as close to destination as possible</li>
                    <li><strong>Reason:</strong> Standard ACLs only filter by source IP, blocking too early affects all destinations</li>
                    <li><strong>Example:</strong> Block specific users from accessing server - place ACL on server's access switch</li>
                </ul>
                
                <p><strong>Extended ACL Placement:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Close to Source:</strong> Place extended ACLs as close to source as possible</li>
                    <li><strong>Reason:</strong> Extended ACLs can be granular, blocking unwanted traffic early saves bandwidth</li>
                    <li><strong>Example:</strong> Block P2P traffic - place ACL on user access switches</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">ACL Design Principles</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Principle</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Description</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Implementation</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Least Privilege</td>
                    <td style="border: 1px solid #444; padding: 8px;">Allow only necessary traffic</td>
                    <td style="border: 1px solid #444; padding: 8px;">Start with deny all, add specific permits</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Specific to General</td>
                    <td style="border: 1px solid #444; padding: 8px;">Most specific rules first</td>
                    <td style="border: 1px solid #444; padding: 8px;">Host entries before subnet entries</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Performance Optimization</td>
                    <td style="border: 1px solid #444; padding: 8px;">Frequently matched rules at top</td>
                    <td style="border: 1px solid #444; padding: 8px;">Monitor hit counters and reorder</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Documentation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Clear naming and comments</td>
                    <td style="border: 1px solid #444; padding: 8px;">Use remark statements and descriptive names</td>
                </tr>
            </table>
            
            <h4 style="color: #F5B041;">Security Best Practices</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #e74c3c;">
                <p><strong>Defense in Depth Strategy:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Multiple ACL Layers:</strong> Implement ACLs at network perimeter, distribution, and access layers</li>
                    <li><strong>Deny Dangerous Protocols:</strong> Block insecure protocols like Telnet, HTTP for management</li>
                    <li><strong>Anti-Spoofing:</strong> Prevent RFC 1918 private addresses from entering from Internet</li>
                    <li><strong>Management Protection:</strong> Restrict administrative access to specific networks</li>
                    <li><strong>Logging Strategy:</strong> Log security violations for monitoring and forensics</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Recommended ACL Template Structure</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Enterprise ACL Template</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended ENTERPRISE_SECURITY</span>
<span style="color: #6A9955;">! === SECTION 1: EXPLICIT SECURITY PERMITS ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow established connections</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">10 permit tcp any any established</span>

<span style="color: #6A9955;">! === SECTION 2: MANAGEMENT TRAFFIC ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow SSH from management network</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">20 permit tcp 192.168.100.0 0.0.0.255 any eq 22</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow HTTPS from management network</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">30 permit tcp 192.168.100.0 0.0.0.255 any eq 443</span>

<span style="color: #6A9955;">! === SECTION 3: BUSINESS APPLICATIONS ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Allow web browsing</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">40 permit tcp 192.168.1.0 0.0.0.255 any eq 80</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">50 permit tcp 192.168.1.0 0.0.0.255 any eq 443</span>

<span style="color: #6A9955;">! === SECTION 4: SECURITY DENIALS ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Deny insecure protocols</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">60 deny tcp any any eq 23 log</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">70 deny tcp any any eq 21 log</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Deny P2P applications</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">80 deny tcp any any range 6881 6999 log</span>

<span style="color: #6A9955;">! === SECTION 5: DEFAULT ACTION ===</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">remark Implicit deny all (logged for monitoring)</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">90 deny ip any any log</span>
</code>
</pre>
            
            <h4 style="color: #F5B041;">Performance Optimization Strategies</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>ACL Performance Guidelines:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Rule Ordering:</strong> Place most frequently matched rules at the beginning</li>
                    <li><strong>Hit Counter Analysis:</strong> Regularly review and reorder based on hit statistics</li>
                    <li><strong>Minimize Logging:</strong> Use logging sparingly to avoid CPU overhead</li>
                    <li><strong>Combine Rules:</strong> Use object groups or CIDR notation to reduce ACL length</li>
                    <li><strong>Hardware Acceleration:</strong> Leverage TCAM capabilities in modern switches</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Management and Maintenance</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! ACL Management Commands</span>
<span style="color: #6A9955;">! Regular monitoring and maintenance</span>
Router# <span style="color: #DCDCAA;">show access-lists | include matches</span>
Router# <span style="color: #DCDCAA;">show ip access-lists summary</span>

<span style="color: #6A9955;">! Performance analysis</span>
Router# <span style="color: #DCDCAA;">show access-lists 101 | begin permit</span>

<span style="color: #6A9955;">! Clean testing</span>
Router# <span style="color: #DCDCAA;">clear access-list counters</span>

<span style="color: #6A9955;">! Configuration backup before changes</span>
Router# <span style="color: #DCDCAA;">copy running-config tftp://server/backup-config.txt</span>
</code>
</pre>
            
            <h4 style="color: #F5B041;">Common Anti-Patterns to Avoid</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #2a2a2a;">
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Anti-Pattern</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Problem</th>
                    <th style="border: 1px solid #444; padding: 8px; color: #F5B041;">Better Approach</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">Permit Any Any</td>
                    <td style="border: 1px solid #444; padding: 8px;">Defeats purpose of ACL security</td>
                    <td style="border: 1px solid #444; padding: 8px;">Explicit permits for required traffic only</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Single Massive ACL</td>
                    <td style="border: 1px solid #444; padding: 8px;">Difficult to manage and troubleshoot</td>
                    <td style="border: 1px solid #444; padding: 8px;">Multiple focused ACLs per function</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #444; padding: 8px;">No Documentation</td>
                    <td style="border: 1px solid #444; padding: 8px;">Unmaintainable over time</td>
                    <td style="border: 1px solid #444; padding: 8px;">Comprehensive remarks and naming</td>
                </tr>
                <tr style="background-color: #1e1e1e;">
                    <td style="border: 1px solid #444; padding: 8px;">Production Testing</td>
                    <td style="border: 1px solid #444; padding: 8px;">Risk of service disruption</td>
                    <td style="border: 1px solid #444; padding: 8px;">Lab testing and staged deployment</td>
                </tr>
            </table>
            
            <h4 style="color: #F5B041;">Change Management Process</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>ACL Change Workflow:</strong></p>
                <ol style="margin-left: 20px;">
                    <li><strong>Requirements Analysis:</strong> Document business justification and security impact</li>
                    <li><strong>Design and Review:</strong> Create ACL design with peer review process</li>
                    <li><strong>Lab Testing:</strong> Validate functionality in test environment</li>
                    <li><strong>Change Approval:</strong> Follow organizational change management procedures</li>
                    <li><strong>Scheduled Implementation:</strong> Deploy during maintenance windows</li>
                    <li><strong>Verification:</strong> Confirm expected behavior and monitor for issues</li>
                    <li><strong>Documentation Update:</strong> Update network documentation and procedures</li>
                </ol>
            </div>
            
            <h4 style="color: #F5B041;">Compliance and Auditing</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9333ea;">
                <p><strong>ACL Compliance Requirements:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Regular Reviews:</strong> Quarterly review of all ACLs for relevance and accuracy</li>
                    <li><strong>Unused Rule Cleanup:</strong> Remove ACL entries with zero hit counts after analysis</li>
                    <li><strong>Security Standards:</strong> Ensure ACLs meet organizational security policies</li>
                    <li><strong>Audit Logging:</strong> Maintain logs of all ACL changes and approvals</li>
                    <li><strong>Emergency Procedures:</strong> Document rapid ACL modification procedures for incidents</li>
                </ul>
            </div>
            
            <h4 style="color: #F5B041;">Real-World Implementation Example</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;">! Enterprise Branch Office ACL Example</span>
Router(config)# <span style="color: #DCDCAA;">ip access-list extended BRANCH_INTERNET_FILTER</span>
<span style="color: #6A9955;">! High-frequency traffic first (80% of traffic)</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">10 permit tcp any any eq 443</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">20 permit tcp any any eq 80</span>
<span style="color: #6A9955;">! Business applications</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">30 permit tcp any 10.0.1.0 0.0.0.255 eq 1433</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">40 permit tcp any any eq 25 log</span>
<span style="color: #6A9955;">! Security restrictions with logging</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">50 deny tcp any any eq 135 log</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">60 deny tcp any any eq 139 log</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">70 deny tcp any any eq 445 log</span>
<span style="color: #6A9955;">! Monitor unusual traffic</span>
Router(config-ext-nacl)# <span style="color: #DCDCAA;">80 deny ip any any log</span>
</code>
</pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand ACL placement rules: standard close to destination, extended close to source</li>
                    <li>Apply security principles: least privilege, specific to general rule ordering</li>
                    <li>Use proper documentation with remark statements and descriptive names</li>
                    <li>Consider performance implications of ACL design and rule ordering</li>
                    <li>Follow change management best practices for ACL modifications</li>
                </ul>
            </div>
        </div>
    `,

    // 5.8 AAA Concepts
    "Authentication Methods": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.8.a: Authentication Methods</h3>
            <p>Authentication is the process of verifying the identity of a user, device, or system before granting access to network resources. Modern networks employ multiple authentication methods to ensure secure access control.</p>
            
            <h4 style="color: #EC7063;">Local Authentication</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Username/Password:</strong> Most basic form of authentication stored locally on the device.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure local users</span>
Router(config)# <span style="color: #DCDCAA;">username admin privilege 15 secret cisco123</span>
Router(config)# <span style="color: #DCDCAA;">username operator privilege 1 secret operator123</span>
Router(config)# <span style="color: #DCDCAA;">username guest privilege 0 secret guest123</span>

<span style="color: #6A9955;"># Enable local authentication</span>
Router(config)# <span style="color: #DCDCAA;">line vty 0 4</span>
Router(config-line)# <span style="color: #9CDCFE;">login local</span>
Router(config-line)# <span style="color: #C586C0;">transport input ssh</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Privilege Levels:</strong> 0-15 (0=user, 1=user, 15=admin)</li>
                    <li><strong>Secret vs Password:</strong> Use secret for MD5 hashing</li>
                    <li><strong>Local Database:</strong> Stored in device configuration</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Multi-Factor Authentication (MFA)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Three Authentication Factors:</strong></p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Factor Type</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Description</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Examples</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Something You Know</td>
                        <td style="padding: 12px; border: 1px solid #444;">Knowledge-based factors</td>
                        <td style="padding: 12px; border: 1px solid #444;">Passwords, PINs, security questions</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Something You Have</td>
                        <td style="padding: 12px; border: 1px solid #444;">Possession-based factors</td>
                        <td style="padding: 12px; border: 1px solid #444;">Smart cards, tokens, mobile phone</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Something You Are</td>
                        <td style="padding: 12px; border: 1px solid #444;">Inherence-based factors</td>
                        <td style="padding: 12px; border: 1px solid #444;">Fingerprint, retina scan, voice</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Certificate-Based Authentication</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Digital Certificates:</strong> Using PKI for strong authentication without passwords.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure certificate authentication</span>
Router(config)# <span style="color: #DCDCAA;">crypto pki trustpoint COMPANY-CA</span>
Router(config-ca-trustpoint)# <span style="color: #9CDCFE;">enrollment url http://ca.company.com</span>
Router(config-ca-trustpoint)# <span style="color: #9CDCFE;">subject-name CN=router1.company.com</span>
Router(config-ca-trustpoint)# <span style="color: #C586C0;">rsakeypair ROUTER-KEY</span>

<span style="color: #6A9955;"># Enable certificate-based SSH</span>
Router(config)# <span style="color: #DCDCAA;">ip ssh pubkey-chain</span>
Router(config-ssh-pubkey)# <span style="color: #9CDCFE;">username admin</span>
Router(config-ssh-pubkey-user)# <span style="color: #C586C0;">key-string</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>PKI Components:</strong> CA, certificates, private/public keys</li>
                    <li><strong>X.509 Standard:</strong> Digital certificate format</li>
                    <li><strong>Certificate Validation:</strong> Chain of trust verification</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Token-Based Authentication</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>RSA SecurID and Similar Systems:</strong> Time-synchronized tokens for enhanced security.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Hardware Tokens:</strong> Physical devices generating time-based codes</li>
                    <li><strong>Software Tokens:</strong> Mobile apps generating OTP codes</li>
                    <li><strong>TOTP/HOTP:</strong> Time-based and counter-based algorithms</li>
                    <li><strong>Integration:</strong> Works with RADIUS/TACACS+ servers</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Biometric Authentication</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Physical Characteristics:</strong> Unique biological traits for identification.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Fingerprint Scanning:</strong> Most common biometric method</li>
                    <li><strong>Retinal/Iris Scanning:</strong> High-accuracy eye-based identification</li>
                    <li><strong>Voice Recognition:</strong> Audio pattern matching</li>
                    <li><strong>Facial Recognition:</strong> Computer vision-based identification</li>
                    <li><strong>Limitations:</strong> Hardware requirements, false positives/negatives</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Authentication Flow Examples</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify authentication status</span>
Router# <span style="color: #DCDCAA;">show users</span>
Router# <span style="color: #DCDCAA;">show login</span>
Router# <span style="color: #DCDCAA;">show crypto pki certificates</span>

<span style="color: #6A9955;"># Authentication debugging</span>
Router# <span style="color: #DCDCAA;">debug aaa authentication</span>
Router# <span style="color: #DCDCAA;">debug radius</span>
Router# <span style="color: #DCDCAA;">debug tacacs</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand different authentication factors and MFA concepts</li>
                    <li>Configure local user authentication with privilege levels</li>
                    <li>Know the difference between password and secret commands</li>
                    <li>Understand certificate-based authentication principles</li>
                    <li>Compare authentication methods: local vs remote (AAA servers)</li>
                </ul>
            </div>
        </div>
    `,

    "Authorization Models": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.8.b: Authorization Models</h3>
            <p>Authorization determines what authenticated users are allowed to do within the network. Authorization models define how permissions are granted, managed, and enforced across network infrastructure.</p>
            
            <h4 style="color: #EC7063;">Role-Based Access Control (RBAC)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Role-Based Permissions:</strong> Users are assigned roles, and roles are granted specific permissions.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure privilege levels (Cisco RBAC)</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 5 show running-config</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 5 show interfaces</span>
Router(config)# <span style="color: #DCDCAA;">privilege exec level 10 configure terminal</span>
Router(config)# <span style="color: #DCDCAA;">privilege configure level 10 interface</span>

<span style="color: #6A9955;"># Assign privilege level to user</span>
Router(config)# <span style="color: #DCDCAA;">username network-tech privilege 5 secret tech123</span>
Router(config)# <span style="color: #DCDCAA;">username network-admin privilege 10 secret admin123</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Privilege Level</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Access Rights</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Typical Role</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">0</td>
                        <td style="padding: 12px; border: 1px solid #444;">Very limited access</td>
                        <td style="padding: 12px; border: 1px solid #444;">Guest/Restricted</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">1</td>
                        <td style="padding: 12px; border: 1px solid #444;">Basic show commands</td>
                        <td style="padding: 12px; border: 1px solid #444;">Read-only User</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">5-14</td>
                        <td style="padding: 12px; border: 1px solid #444;">Custom command sets</td>
                        <td style="padding: 12px; border: 1px solid #444;">Specialized Technician</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">15</td>
                        <td style="padding: 12px; border: 1px solid #444;">Full administrative access</td>
                        <td style="padding: 12px; border: 1px solid #444;">Administrator</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Attribute-Based Access Control (ABAC)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Dynamic Authorization:</strong> Access decisions based on multiple attributes and policies.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>User Attributes:</strong> Department, clearance level, job function</li>
                    <li><strong>Resource Attributes:</strong> Classification level, data type, location</li>
                    <li><strong>Environmental Attributes:</strong> Time of day, location, device type</li>
                    <li><strong>Action Attributes:</strong> Read, write, execute, delete operations</li>
                </ul>
                <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                    <p style="color: #10b981; font-weight: bold;">Example ABAC Policy:</p>
                    <p style="font-family: monospace; color: #9CDCFE;">"Allow if (user.department == 'Finance' AND resource.classification == 'Internal' AND time.hour >= 9 AND time.hour <= 17)"</p>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Discretionary Access Control (DAC)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Owner-Based Control:</strong> Resource owners control access permissions.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Ownership Principle:</strong> Creator/owner sets access permissions</li>
                    <li><strong>Flexibility:</strong> Easy to grant/revoke access on demand</li>
                    <li><strong>File System Example:</strong> Unix/Linux file permissions (rwx)</li>
                    <li><strong>Network Example:</strong> Share-level permissions on network drives</li>
                    <li><strong>Weakness:</strong> Difficult to maintain consistency across large organizations</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Mandatory Access Control (MAC)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>System-Enforced Security:</strong> Central authority controls all access based on security labels.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Classification Level</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Access Rules</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Example Use</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Top Secret</td>
                        <td style="padding: 12px; border: 1px solid #444;">Can access all lower levels</td>
                        <td style="padding: 12px; border: 1px solid #444;">Executive management</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Secret</td>
                        <td style="padding: 12px; border: 1px solid #444;">Can access Confidential and Unclassified</td>
                        <td style="padding: 12px; border: 1px solid #444;">Department heads</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Confidential</td>
                        <td style="padding: 12px; border: 1px solid #444;">Can access Unclassified only</td>
                        <td style="padding: 12px; border: 1px solid #444;">Team leads</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Unclassified</td>
                        <td style="padding: 12px; border: 1px solid #444;">Limited to own level</td>
                        <td style="padding: 12px; border: 1px solid #444;">General employees</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Network Authorization Implementation</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>TACACS+ Authorization:</strong> Granular command authorization on network devices.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure command authorization</span>
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Router(config)# <span style="color: #DCDCAA;">aaa authorization commands 15 default group tacacs+ local</span>
Router(config)# <span style="color: #DCDCAA;">aaa authorization exec default group tacacs+ local</span>

<span style="color: #6A9955;"># Configure TACACS+ server</span>
Router(config)# <span style="color: #DCDCAA;">tacacs server TACACS-SRV</span>
Router(config-server-tacacs)# <span style="color: #9CDCFE;">address ipv4 192.168.1.100</span>
Router(config-server-tacacs)# <span style="color: #C586C0;">key SecretKey123</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Command Authorization:</strong> Per-command access control</li>
                    <li><strong>Attribute-Value Pairs:</strong> Detailed authorization parameters</li>
                    <li><strong>Failover Support:</strong> Local authorization if server unavailable</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Authorization Verification</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Check authorization configuration</span>
Router# <span style="color: #DCDCAA;">show aaa authorization</span>
Router# <span style="color: #DCDCAA;">show privilege</span>
Router# <span style="color: #DCDCAA;">show users detail</span>

<span style="color: #6A9955;"># Debug authorization</span>
Router# <span style="color: #DCDCAA;">debug aaa authorization</span>
Router# <span style="color: #DCDCAA;">debug tacacs authorization</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the four main authorization models: RBAC, ABAC, DAC, MAC</li>
                    <li>Configure Cisco privilege levels for role-based access control</li>
                    <li>Know how TACACS+ provides granular authorization capabilities</li>
                    <li>Understand the principle of least privilege in authorization design</li>
                    <li>Compare local vs remote authorization methods and their use cases</li>
                </ul>
            </div>
        </div>
    `,

    "Accounting & Logging": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.8.c: Accounting & Logging</h3>
            <p>Accounting is the third pillar of AAA, providing detailed tracking of user activities, resource usage, and security events. Comprehensive logging enables audit trails, forensic analysis, and compliance reporting.</p>
            
            <h4 style="color: #EC7063;">AAA Accounting Fundamentals</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Accounting Records:</strong> Detailed logs of user sessions and command executions.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure AAA accounting</span>
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting exec default start-stop group tacacs+</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting commands 15 default start-stop group tacacs+</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting network default start-stop group radius</span>

<span style="color: #6A9955;"># Configure TACACS+ for accounting</span>
Router(config)# <span style="color: #DCDCAA;">tacacs server ACCOUNTING-SRV</span>
Router(config-server-tacacs)# <span style="color: #9CDCFE;">address ipv4 192.168.1.101</span>
Router(config-server-tacacs)# <span style="color: #C586C0;">key AccountingKey123</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Accounting Type</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Purpose</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Information Tracked</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">EXEC Accounting</td>
                        <td style="padding: 12px; border: 1px solid #444;">Track user sessions</td>
                        <td style="padding: 12px; border: 1px solid #444;">Login time, duration, source IP</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Command Accounting</td>
                        <td style="padding: 12px; border: 1px solid #444;">Track executed commands</td>
                        <td style="padding: 12px; border: 1px solid #444;">Command text, timestamp, user</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Network Accounting</td>
                        <td style="padding: 12px; border: 1px solid #444;">Track network access</td>
                        <td style="padding: 12px; border: 1px solid #444;">Bytes transferred, session duration</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Syslog Configuration</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Centralized Logging:</strong> Collecting and centralizing log data from network devices.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure syslog server</span>
Router(config)# <span style="color: #DCDCAA;">logging host 192.168.1.200</span>
Router(config)# <span style="color: #DCDCAA;">logging trap informational</span>
Router(config)# <span style="color: #DCDCAA;">logging facility local0</span>
Router(config)# <span style="color: #DCDCAA;">logging source-interface loopback0</span>

<span style="color: #6A9955;"># Configure local logging</span>
Router(config)# <span style="color: #DCDCAA;">logging buffered 32768 debugging</span>
Router(config)# <span style="color: #DCDCAA;">logging console warnings</span>
Router(config)# <span style="color: #C586C0;">service timestamps log datetime msec</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Severity Level</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Number</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Description</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Emergency</td>
                        <td style="padding: 12px; border: 1px solid #444;">0</td>
                        <td style="padding: 12px; border: 1px solid #444;">System unusable</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Alert</td>
                        <td style="padding: 12px; border: 1px solid #444;">1</td>
                        <td style="padding: 12px; border: 1px solid #444;">Immediate action needed</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Critical</td>
                        <td style="padding: 12px; border: 1px solid #444;">2</td>
                        <td style="padding: 12px; border: 1px solid #444;">Critical conditions</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Error</td>
                        <td style="padding: 12px; border: 1px solid #444;">3</td>
                        <td style="padding: 12px; border: 1px solid #444;">Error conditions</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Warning</td>
                        <td style="padding: 12px; border: 1px solid #444;">4</td>
                        <td style="padding: 12px; border: 1px solid #444;">Warning conditions</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Notification</td>
                        <td style="padding: 12px; border: 1px solid #444;">5</td>
                        <td style="padding: 12px; border: 1px solid #444;">Normal but significant</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Informational</td>
                        <td style="padding: 12px; border: 1px solid #444;">6</td>
                        <td style="padding: 12px; border: 1px solid #444;">Informational messages</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Debug</td>
                        <td style="padding: 12px; border: 1px solid #444;">7</td>
                        <td style="padding: 12px; border: 1px solid #444;">Debug-level messages</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">SNMP Logging Integration</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>SNMP Traps:</strong> Real-time notification system for critical events.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure SNMP traps for logging</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server host 192.168.1.250 version 2c public</span>
Router(config)# <span style="color: #DCDCAA;">snmp-server enable traps snmp authentication linkdown linkup</span>
Router(config)# <span style="color: #C586C0;">snmp-server enable traps config</span>

<span style="color: #6A9955;"># Configure logging to trigger SNMP traps</span>
Router(config)# <span style="color: #DCDCAA;">logging history size 500</span>
Router(config)# <span style="color: #DCDCAA;">logging history warnings</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Real-time Alerts:</strong> Immediate notification of critical events</li>
                    <li><strong>Integration:</strong> Works with network monitoring systems</li>
                    <li><strong>Filtering:</strong> Configure specific trap types and thresholds</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Security Event Logging</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Security Information and Event Management (SIEM):</strong> Comprehensive security logging and analysis.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Authentication Events:</strong> Successful/failed logins, privilege escalations</li>
                    <li><strong>Access Control Events:</strong> ACL hits, firewall blocks, policy violations</li>
                    <li><strong>Configuration Changes:</strong> Device configuration modifications with timestamps</li>
                    <li><strong>Network Anomalies:</strong> Unusual traffic patterns, potential intrusions</li>
                    <li><strong>System Events:</strong> Interface status changes, hardware failures</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Log Retention and Compliance</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Regulatory Requirements:</strong> Meeting compliance standards for log retention and audit trails.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Compliance Standard</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Retention Period</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Key Requirements</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">PCI DSS</td>
                        <td style="padding: 12px; border: 1px solid #444;">1 year minimum</td>
                        <td style="padding: 12px; border: 1px solid #444;">Payment card data access logs</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">SOX</td>
                        <td style="padding: 12px; border: 1px solid #444;">7 years</td>
                        <td style="padding: 12px; border: 1px solid #444;">Financial system access logs</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">HIPAA</td>
                        <td style="padding: 12px; border: 1px solid #444;">6 years</td>
                        <td style="padding: 12px; border: 1px solid #444;">Healthcare data access logs</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">GDPR</td>
                        <td style="padding: 12px; border: 1px solid #444;">Varies</td>
                        <td style="padding: 12px; border: 1px solid #444;">Personal data processing logs</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Logging Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify accounting configuration</span>
Router# <span style="color: #DCDCAA;">show aaa accounting</span>
Router# <span style="color: #DCDCAA;">show logging</span>
Router# <span style="color: #DCDCAA;">show logging history</span>

<span style="color: #6A9955;"># Check syslog configuration</span>
Router# <span style="color: #DCDCAA;">show logging hosts</span>
Router# <span style="color: #DCDCAA;">show snmp host</span>

<span style="color: #6A9955;"># Debug accounting</span>
Router# <span style="color: #DCDCAA;">debug aaa accounting</span>
Router# <span style="color: #DCDCAA;">debug tacacs accounting</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure AAA accounting for exec sessions and command tracking</li>
                    <li>Understand syslog severity levels and proper configuration</li>
                    <li>Know the difference between start-stop and stop-only accounting</li>
                    <li>Configure centralized logging with appropriate severity filtering</li>
                    <li>Understand compliance requirements for log retention and audit trails</li>
                </ul>
            </div>
        </div>
    `,

    "AAA Protocols & Servers": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.8.d: AAA Protocols & Servers</h3>
            <p>AAA protocols provide standardized communication between network devices and centralized authentication servers. RADIUS and TACACS+ are the primary protocols used for implementing enterprise-scale AAA services.</p>
            
            <h4 style="color: #EC7063;">RADIUS Protocol</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Remote Authentication Dial-In User Service:</strong> Industry-standard AAA protocol using UDP transport.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure RADIUS server</span>
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Router(config)# <span style="color: #DCDCAA;">radius server RADIUS-SRV</span>
Router(config-radius-server)# <span style="color: #9CDCFE;">address ipv4 192.168.1.150 auth-port 1812 acct-port 1813</span>
Router(config-radius-server)# <span style="color: #C586C0;">key RadiusSecretKey123</span>
Router(config-radius-server)# <span style="color: #9CDCFE;">timeout 5</span>
Router(config-radius-server)# <span style="color: #9CDCFE;">retransmit 3</span>

<span style="color: #6A9955;"># Configure AAA methods for RADIUS</span>
Router(config)# <span style="color: #DCDCAA;">aaa authentication login default group radius local</span>
Router(config)# <span style="color: #DCDCAA;">aaa authorization exec default group radius local</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting exec default start-stop group radius</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">RADIUS Characteristic</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Details</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Transport Protocol</td>
                        <td style="padding: 12px; border: 1px solid #444;">UDP (Auth: 1812, Acct: 1813)</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">Password only, shared secret</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">AAA Functions</td>
                        <td style="padding: 12px; border: 1px solid #444;">Combined Authentication/Authorization</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Packet Size</td>
                        <td style="padding: 12px; border: 1px solid #444;">Limited to 4096 bytes</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Multivendor Support</td>
                        <td style="padding: 12px; border: 1px solid #444;">Excellent (RFC standard)</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">TACACS+ Protocol</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Terminal Access Controller Access-Control System Plus:</strong> Cisco-developed AAA protocol with enhanced security and granular control.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure TACACS+ server</span>
Router(config)# <span style="color: #DCDCAA;">aaa new-model</span>
Router(config)# <span style="color: #DCDCAA;">tacacs server TACACS-SRV</span>
Router(config-server-tacacs)# <span style="color: #9CDCFE;">address ipv4 192.168.1.160</span>
Router(config-server-tacacs)# <span style="color: #C586C0;">key TacacsSecretKey123</span>
Router(config-server-tacacs)# <span style="color: #9CDCFE;">timeout 10</span>
Router(config-server-tacacs)# <span style="color: #9CDCFE;">single-connection</span>

<span style="color: #6A9955;"># Configure AAA methods for TACACS+</span>
Router(config)# <span style="color: #DCDCAA;">aaa authentication login default group tacacs+ local</span>
Router(config)# <span style="color: #DCDCAA;">aaa authorization exec default group tacacs+ local</span>
Router(config)# <span style="color: #DCDCAA;">aaa authorization commands 15 default group tacacs+ local</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting exec default start-stop group tacacs+</span>
Router(config)# <span style="color: #DCDCAA;">aaa accounting commands 15 default start-stop group tacacs+</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">TACACS+ Characteristic</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Details</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Transport Protocol</td>
                        <td style="padding: 12px; border: 1px solid #444;">TCP Port 49 (reliable)</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">Entire packet encrypted</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">AAA Functions</td>
                        <td style="padding: 12px; border: 1px solid #444;">Separate A, A, A processes</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Granularity</td>
                        <td style="padding: 12px; border: 1px solid #444;">Per-command authorization</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Vendor</td>
                        <td style="padding: 12px; border: 1px solid #444;">Cisco proprietary</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">RADIUS vs TACACS+ Comparison</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Feature</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">RADIUS</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">TACACS+</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444; font-weight: bold;">Protocol</td>
                        <td style="padding: 12px; border: 1px solid #444;">UDP (connectionless)</td>
                        <td style="padding: 12px; border: 1px solid #444;">TCP (connection-oriented)</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444; font-weight: bold;">Security</td>
                        <td style="padding: 12px; border: 1px solid #444;">Password encryption only</td>
                        <td style="padding: 12px; border: 1px solid #444;">Full packet encryption</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444; font-weight: bold;">AAA Separation</td>
                        <td style="padding: 12px; border: 1px solid #444;">Auth/Author combined</td>
                        <td style="padding: 12px; border: 1px solid #444;">Separate AAA functions</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444; font-weight: bold;">Authorization</td>
                        <td style="padding: 12px; border: 1px solid #444;">Limited granularity</td>
                        <td style="padding: 12px; border: 1px solid #444;">Per-command control</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444; font-weight: bold;">Bandwidth</td>
                        <td style="padding: 12px; border: 1px solid #444;">Lower overhead</td>
                        <td style="padding: 12px; border: 1px solid #444;">Higher overhead</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444; font-weight: bold;">Best Use Case</td>
                        <td style="padding: 12px; border: 1px solid #444;">Network access, VPN</td>
                        <td style="padding: 12px; border: 1px solid #444;">Device administration</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">AAA Server Implementation</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Popular AAA Server Solutions:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Cisco ISE (Identity Services Engine):</strong> Comprehensive AAA with policy enforcement</li>
                    <li><strong>Microsoft NPS (Network Policy Server):</strong> Windows-based RADIUS server</li>
                    <li><strong>FreeRADIUS:</strong> Open-source RADIUS server implementation</li>
                    <li><strong>Cisco ACS (Access Control Server):</strong> Legacy AAA solution (replaced by ISE)</li>
                    <li><strong>Aruba ClearPass:</strong> Enterprise network access control platform</li>
                </ul>
                
                <p style="margin-top: 15px;"><strong>High Availability Considerations:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure multiple AAA servers for redundancy</span>
Router(config)# <span style="color: #DCDCAA;">aaa group server radius RADIUS-GROUP</span>
Router(config-sg-radius)# <span style="color: #9CDCFE;">server name RADIUS-PRIMARY</span>
Router(config-sg-radius)# <span style="color: #9CDCFE;">server name RADIUS-SECONDARY</span>
Router(config-sg-radius)# <span style="color: #C586C0;">deadtime 10</span>

Router(config)# <span style="color: #DCDCAA;">aaa authentication login default group RADIUS-GROUP local</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Troubleshooting AAA Protocols</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Common Issues and Verification Commands:</strong></p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify AAA server connectivity</span>
Router# <span style="color: #DCDCAA;">show aaa servers</span>
Router# <span style="color: #DCDCAA;">show radius server-group all</span>
Router# <span style="color: #DCDCAA;">show tacacs</span>

<span style="color: #6A9955;"># Test AAA server communication</span>
Router# <span style="color: #DCDCAA;">test aaa group radius username testuser password testpass</span>
Router# <span style="color: #DCDCAA;">test aaa group tacacs+ username testuser password testpass</span>

<span style="color: #6A9955;"># Debug AAA protocols</span>
Router# <span style="color: #DCDCAA;">debug radius</span>
Router# <span style="color: #DCDCAA;">debug tacacs authentication</span>
Router# <span style="color: #DCDCAA;">debug aaa authentication</span>
Router# <span style="color: #DCDCAA;">debug aaa authorization</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Connectivity Issues:</strong> Network reachability, firewall rules, port blocks</li>
                    <li><strong>Authentication Failures:</strong> Wrong shared keys, user credentials, time sync</li>
                    <li><strong>Authorization Problems:</strong> Missing attributes, policy misconfigurations</li>
                    <li><strong>Performance Issues:</strong> Timeout values, server load, network latency</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Compare RADIUS and TACACS+ protocols: transport, encryption, AAA separation</li>
                    <li>Configure basic RADIUS and TACACS+ server settings with authentication</li>
                    <li>Understand when to use RADIUS vs TACACS+ based on requirements</li>
                    <li>Know standard port numbers: RADIUS (1812/1813), TACACS+ (49)</li>
                    <li>Configure AAA server groups for redundancy and failover</li>
                </ul>
            </div>
        </div>
    `,

    // 5.9 Wireless Security Protocols
    "WEP & Legacy Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.9.a: WEP & Legacy Security</h3>
            <p>Wired Equivalent Privacy (WEP) was the first security protocol for wireless networks, designed to provide the same level of security as wired networks. However, fundamental flaws in its implementation make it extremely vulnerable to attacks.</p>
            
            <h4 style="color: #EC7063;">WEP Overview and Vulnerabilities</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Critical Security Flaws:</strong> WEP has multiple vulnerabilities that make it unsuitable for modern use.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">WEP Characteristic</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Details</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Vulnerability</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Key Length</td>
                        <td style="padding: 12px; border: 1px solid #444;">40-bit or 104-bit</td>
                        <td style="padding: 12px; border: 1px solid #444;">Insufficient key strength</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">RC4 stream cipher</td>
                        <td style="padding: 12px; border: 1px solid #444;">Weak IV implementation</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Authentication</td>
                        <td style="padding: 12px; border: 1px solid #444;">Shared key or Open</td>
                        <td style="padding: 12px; border: 1px solid #444;">No mutual authentication</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Integrity</td>
                        <td style="padding: 12px; border: 1px solid #444;">CRC-32 checksum</td>
                        <td style="padding: 12px; border: 1px solid #444;">Linear, easily forged</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Key Management</td>
                        <td style="padding: 12px; border: 1px solid #444;">Static pre-shared</td>
                        <td style="padding: 12px; border: 1px solid #444;">No key rotation</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">WEP Attack Methods</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Common WEP Exploitation Techniques:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>IV Collision Attacks:</strong> Repeated IV values reveal keystream patterns</li>
                    <li><strong>Fluhrer-Mantin-Shamir (FMS) Attack:</strong> Statistical analysis of weak IVs</li>
                    <li><strong>Chopchop Attack:</strong> Packet decryption without knowing the key</li>
                    <li><strong>Fragmentation Attack:</strong> Obtaining keystream from small packets</li>
                    <li><strong>Caffe Latte Attack:</strong> Targeting client-side vulnerabilities</li>
                </ul>
                <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                    <p style="color: #f59e0b; font-weight: bold;">Attack Timeline:</p>
                    <ul style="list-style-type: none; margin-left: 10px; color: #B0B0B0;">
                        <li>• WEP can typically be cracked in <strong>minutes</strong> with sufficient traffic</li>
                        <li>• 40-bit WEP: Crackable in seconds with modern tools</li>
                        <li>• 104-bit WEP: Crackable in minutes with packet injection</li>
                    </ul>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Legacy Wireless Security Methods</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Pre-WPA Security Measures:</strong> Early wireless security implementations and their limitations.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>MAC Address Filtering:</strong> Allow only specific device MAC addresses
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Easily bypassed with MAC spoofing</li>
                            <li>Administrative overhead for large networks</li>
                            <li>No actual encryption of data</li>
                        </ul>
                    </li>
                    <li><strong>SSID Hiding:</strong> Not broadcasting network name
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Security through obscurity (ineffective)</li>
                            <li>SSID still transmitted in probe requests</li>
                            <li>Easily discovered with wireless scanners</li>
                        </ul>
                    </li>
                    <li><strong>Disable DHCP:</strong> Manual IP configuration requirement
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Minor inconvenience for attackers</li>
                            <li>No protection against determined intruders</li>
                            <li>Operational complexity for legitimate users</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">WEP Configuration Example</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Historical Configuration:</strong> For educational purposes only - never use in production.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Legacy WEP configuration (DEPRECATED - DO NOT USE)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption wep 40 1234567890</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption wep 128 1234567890123456789012345678</span>
Router(config-if)# <span style="color: #C586C0;">authentication open</span>

<span style="color: #6A9955;"># WEP with shared key authentication (even less secure)</span>
Router(config-if)# <span style="color: #C586C0;">authentication shared</span>

<span style="color: #6A9955;"># View WEP configuration (for troubleshooting legacy networks)</span>
Router# <span style="color: #DCDCAA;">show dot11 associations</span>
Router# <span style="color: #DCDCAA;">show interfaces dot11radio0</span>
</code>
                </pre>
                <div style="background-color: #771d1d; padding: 10px; border-radius: 5px; margin: 10px 0; border: 2px solid #ef4444;">
                    <p style="color: #ff6b6b; font-weight: bold; margin: 0;">⚠️ SECURITY WARNING:</p>
                    <p style="color: #E0E0E0; margin: 5px 0 0 0;">WEP is completely insecure and should NEVER be used in production environments. This configuration is shown for historical context and legacy network troubleshooting only.</p>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Migration from WEP</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Secure Migration Strategy:</strong> Moving from WEP to modern security protocols.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Migration Step</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Action Required</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Security Benefit</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Assessment</td>
                        <td style="padding: 12px; border: 1px solid #444;">Inventory WEP-enabled devices</td>
                        <td style="padding: 12px; border: 1px solid #444;">Identify security risks</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Hardware Check</td>
                        <td style="padding: 12px; border: 1px solid #444;">Verify WPA2/WPA3 capability</td>
                        <td style="padding: 12px; border: 1px solid #444;">Ensure upgrade compatibility</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Implementation</td>
                        <td style="padding: 12px; border: 1px solid #444;">Configure WPA2/WPA3</td>
                        <td style="padding: 12px; border: 1px solid #444;">Strong encryption and authentication</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Testing</td>
                        <td style="padding: 12px; border: 1px solid #444;">Verify connectivity and security</td>
                        <td style="padding: 12px; border: 1px solid #444;">Confirm proper operation</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Documentation</td>
                        <td style="padding: 12px; border: 1px solid #444;">Update security policies</td>
                        <td style="padding: 12px; border: 1px solid #444;">Compliance and standards</td>
                    </tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand why WEP is completely insecure and unsuitable for modern use</li>
                    <li>Know the main WEP vulnerabilities: weak IVs, static keys, poor integrity</li>
                    <li>Recognize that MAC filtering and SSID hiding are not security measures</li>
                    <li>Understand the importance of migrating legacy wireless networks to WPA2/WPA3</li>
                    <li>Know that WEP can be cracked in minutes with readily available tools</li>
                </ul>
            </div>
        </div>
    `,

    "WPA & WPA2 Fundamentals": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.9.b: WPA & WPA2 Fundamentals</h3>
            <p>Wi-Fi Protected Access (WPA) and WPA2 were developed to address the critical security flaws in WEP. WPA2 remains the most widely deployed wireless security protocol, providing strong encryption and authentication mechanisms.</p>
            
            <h4 style="color: #EC7063;">WPA (Wi-Fi Protected Access)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Interim Solution:</strong> WPA was designed as a quick fix for WEP's vulnerabilities while maintaining backward compatibility.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">WPA Feature</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Implementation</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Improvement over WEP</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">TKIP (RC4 based)</td>
                        <td style="padding: 12px; border: 1px solid #444;">Dynamic key generation</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Key Management</td>
                        <td style="padding: 12px; border: 1px solid #444;">4-way handshake</td>
                        <td style="padding: 12px; border: 1px solid #444;">Mutual authentication</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Integrity</td>
                        <td style="padding: 12px; border: 1px solid #444;">Michael MIC</td>
                        <td style="padding: 12px; border: 1px solid #444;">Cryptographic integrity</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">IV Length</td>
                        <td style="padding: 12px; border: 1px solid #444;">48-bit IV</td>
                        <td style="padding: 12px; border: 1px solid #444;">Prevents IV reuse</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">WPA2 (802.11i Standard)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Full Security Implementation:</strong> WPA2 provides enterprise-grade security with AES encryption and robust authentication.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure WPA2-PSK (Personal)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption mode ciphers aes-ccmp</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid COMPANY-WIFI</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication open</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 2</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">wpa-psk ascii MySecurePassword123!</span>

<span style="color: #6A9955;"># Configure WPA2-Enterprise (802.1X)</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 2</span>
Router(config-if-ssid)# <span style="color: #9CDCFE;">authentication network-eap RADIUS-SRV</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">accounting RADIUS-SRV</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">WPA2 Component</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Technology</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Security Benefit</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">AES-CCMP</td>
                        <td style="padding: 12px; border: 1px solid #444;">Military-grade encryption</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Authentication</td>
                        <td style="padding: 12px; border: 1px solid #444;">PSK or 802.1X</td>
                        <td style="padding: 12px; border: 1px solid #444;">Strong authentication methods</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Key Management</td>
                        <td style="padding: 12px; border: 1px solid #444;">4-way handshake</td>
                        <td style="padding: 12px; border: 1px solid #444;">Secure key derivation</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Integrity</td>
                        <td style="padding: 12px; border: 1px solid #444;">Built into AES-CCMP</td>
                        <td style="padding: 12px; border: 1px solid #444;">Integrated auth & encryption</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">WPA2 Authentication Modes</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Personal vs Enterprise:</strong> Two deployment modes for different organizational needs.</p>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: #f59e0b; font-weight: bold;">WPA2-Personal (PSK):</p>
                    <ul style="list-style-type: square; margin-left: 20px;">
                        <li><strong>Pre-Shared Key:</strong> Same passphrase for all users</li>
                        <li><strong>Deployment:</strong> Small office/home office (SOHO) environments</li>
                        <li><strong>Key Length:</strong> 8-63 characters or 64 hex digits</li>
                        <li><strong>Limitations:</strong> Key distribution, no per-user authentication</li>
                    </ul>
                </div>
                
                <div>
                    <p style="color: #f59e0b; font-weight: bold;">WPA2-Enterprise (802.1X):</p>
                    <ul style="list-style-type: square; margin-left: 20px;">
                        <li><strong>Individual Authentication:</strong> Unique credentials per user</li>
                        <li><strong>RADIUS Integration:</strong> Centralized authentication server</li>
                        <li><strong>EAP Methods:</strong> Multiple authentication protocols</li>
                        <li><strong>Dynamic Keys:</strong> Per-session encryption keys</li>
                    </ul>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">4-Way Handshake Process</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Key Exchange Protocol:</strong> Secure establishment of encryption keys between client and access point.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Step</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Direction</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Purpose</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Message 1</td>
                        <td style="padding: 12px; border: 1px solid #444;">AP → Client</td>
                        <td style="padding: 12px; border: 1px solid #444;">Send ANonce (AP nonce)</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Message 2</td>
                        <td style="padding: 12px; border: 1px solid #444;">Client → AP</td>
                        <td style="padding: 12px; border: 1px solid #444;">Send SNonce, prove PSK knowledge</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Message 3</td>
                        <td style="padding: 12px; border: 1px solid #444;">AP → Client</td>
                        <td style="padding: 12px; border: 1px solid #444;">Send GTK (Group Temporal Key)</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Message 4</td>
                        <td style="padding: 12px; border: 1px solid #444;">Client → AP</td>
                        <td style="padding: 12px; border: 1px solid #444;">Acknowledge completion</td>
                    </tr>
                </table>
                <p><strong>Key Derivation:</strong> PTK (Pairwise Transient Key) = PRF(PMK + ANonce + SNonce + MAC addresses)</p>
            </div>
            
            <h4 style="color: #EC7063;">WPA2 Vulnerabilities and Attacks</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Known Attack Vectors:</strong> While WPA2 is much more secure than WEP, some vulnerabilities exist.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>KRACK (Key Reinstallation Attack):</strong> 
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Exploits 4-way handshake implementation flaws</li>
                            <li>Forces key reuse by replaying handshake messages</li>
                            <li>Mitigated by firmware/driver updates</li>
                        </ul>
                    </li>
                    <li><strong>Dictionary/Brute Force Attacks:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Target weak PSK passphrases</li>
                            <li>Capture handshake for offline analysis</li>
                            <li>Mitigated by strong, complex passwords</li>
                        </ul>
                    </li>
                    <li><strong>Evil Twin Attacks:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Rogue access points with same SSID</li>
                            <li>Social engineering for credential harvesting</li>
                            <li>Mitigated by certificate-based authentication</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">WPA2 Best Practices</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Security Hardening Recommendations:</strong></p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Strong PSK:</strong> Minimum 12 characters, complex passwords</li>
                    <li><strong>Enterprise Mode:</strong> Use 802.1X for organizational deployments</li>
                    <li><strong>Regular Updates:</strong> Keep firmware and drivers current</li>
                    <li><strong>Network Segmentation:</strong> Separate guest and corporate traffic</li>
                    <li><strong>Monitoring:</strong> Implement wireless intrusion detection</li>
                </ul>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em; margin-top: 15px;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify WPA2 configuration</span>
Router# <span style="color: #DCDCAA;">show dot11 associations</span>
Router# <span style="color: #DCDCAA;">show interfaces dot11radio0</span>
Router# <span style="color: #DCDCAA;">show dot11 network-map</span>

<span style="color: #6A9955;"># Monitor wireless security</span>
Router# <span style="color: #DCDCAA;">show dot11 statistics</span>
Router# <span style="color: #DCDCAA;">show logging | include dot11</span>
</code>
                </pre>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the difference between WPA (TKIP) and WPA2 (AES-CCMP)</li>
                    <li>Know WPA2-Personal (PSK) vs WPA2-Enterprise (802.1X) authentication modes</li>
                    <li>Understand the 4-way handshake process for key establishment</li>
                    <li>Configure basic WPA2-PSK on wireless access points</li>
                    <li>Recognize WPA2 vulnerabilities like KRACK and mitigation strategies</li>
                </ul>
            </div>
        </div>
    `,

    "WPA3 Security Enhancements": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.9.c: WPA3 Security Enhancements</h3>
            <p>WPA3 represents the latest generation of wireless security, introducing significant enhancements to address modern threats and vulnerabilities. It provides stronger encryption, improved authentication, and better protection against brute-force attacks.</p>
            
            <h4 style="color: #EC7063;">WPA3-Personal Enhancements</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Simultaneous Authentication of Equals (SAE):</strong> Replaces PSK with a more secure handshake mechanism.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">WPA3 Feature</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Technology</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Security Benefit</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Authentication</td>
                        <td style="padding: 12px; border: 1px solid #444;">SAE (Dragonfly)</td>
                        <td style="padding: 12px; border: 1px solid #444;">Forward secrecy, offline attack protection</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">AES-128 minimum</td>
                        <td style="padding: 12px; border: 1px solid #444;">Stronger baseline encryption</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Password Security</td>
                        <td style="padding: 12px; border: 1px solid #444;">Natural password element</td>
                        <td style="padding: 12px; border: 1px solid #444;">Brute-force attack resistance</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Perfect Forward Secrecy</td>
                        <td style="padding: 12px; border: 1px solid #444;">Ephemeral keys</td>
                        <td style="padding: 12px; border: 1px solid #444;">Past session protection</td>
                    </tr>
                </table>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure WPA3-Personal (SAE)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption mode ciphers aes-ccmp aes-gcmp-256</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid COMPANY-WPA3</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication open</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 3</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">wpa-psk ascii MySecureWPA3Password!</span>

<span style="color: #6A9955;"># Configure WPA3/WPA2 transition mode</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 2 wpa version 3</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">WPA3-Enterprise Enhancements</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>192-bit Security Suite:</strong> Enhanced security for sensitive government and enterprise environments.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Security Component</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">WPA3-Enterprise</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">192-bit Suite</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">AES-128 CCMP/GCMP</td>
                        <td style="padding: 12px; border: 1px solid #444;">AES-256 GCMP</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Key Derivation</td>
                        <td style="padding: 12px; border: 1px solid #444;">HMAC-SHA256</td>
                        <td style="padding: 12px; border: 1px solid #444;">HMAC-SHA384</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Key Exchange</td>
                        <td style="padding: 12px; border: 1px solid #444;">ECDH P-256</td>
                        <td style="padding: 12px; border: 1px solid #444;">ECDH P-384</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Digital Signatures</td>
                        <td style="padding: 12px; border: 1px solid #444;">ECDSA P-256</td>
                        <td style="padding: 12px; border: 1px solid #444;">ECDSA P-384</td>
                    </tr>
                </table>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure WPA3-Enterprise with 192-bit security</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 3</span>
Router(config-if-ssid)# <span style="color: #9CDCFE;">authentication network-eap RADIUS-SRV</span>
Router(config-if-ssid)# <span style="color: #9CDCFE;">encryption mode ciphers aes-gcmp-256</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">pmf required</span>

<span style="color: #6A9955;"># Configure Management Frame Protection (required for WPA3)</span>
Router(config-if)# <span style="color: #C586C0;">protection-frame management</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">WPA3 Key Security Features</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <div style="margin-bottom: 20px;">
                    <p style="color: #f59e0b; font-weight: bold;">Forward Secrecy:</p>
                    <ul style="list-style-type: square; margin-left: 20px;">
                        <li>Each session uses unique encryption keys</li>
                        <li>Compromised keys don't affect past or future sessions</li>
                        <li>Protects against retroactive decryption attacks</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: #f59e0b; font-weight: bold;">Natural Password Element:</p>
                    <ul style="list-style-type: square; margin-left: 20px;">
                        <li>Resistant to offline dictionary attacks</li>
                        <li>Makes password cracking computationally expensive</li>
                        <li>No more passive handshake capture vulnerabilities</li>
                    </ul>
                </div>
                
                <div>
                    <p style="color: #f59e0b; font-weight: bold;">Protected Management Frames (PMF):</p>
                    <ul style="list-style-type: square; margin-left: 20px;">
                        <li>Mandatory encryption of management frames</li>
                        <li>Prevents deauthentication and disassociation attacks</li>
                        <li>Protects against evil twin and rogue AP attacks</li>
                    </ul>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Wi-Fi Enhanced Open</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Opportunistic Wireless Encryption (OWE):</strong> Encryption for open networks without authentication.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Public Network Security:</strong> Encrypts traffic on open hotspots</li>
                    <li><strong>Invisible to Users:</strong> No passwords or configuration required</li>
                    <li><strong>Protection Against:</strong> Passive eavesdropping and traffic analysis</li>
                    <li><strong>Use Cases:</strong> Coffee shops, airports, public venues</li>
                </ul>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em; margin-top: 15px;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure Wi-Fi Enhanced Open (OWE)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid PUBLIC-ENHANCED</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication open</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management owe</span>
Router(config-if-ssid)# <span style="color: #9CDCFE;">encryption mode ciphers aes-ccmp</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">WPA3 Migration and Compatibility</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Transition Strategies:</strong> Managing the migration from WPA2 to WPA3 in enterprise environments.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Migration Phase</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Configuration</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Client Support</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">WPA2 Only</td>
                        <td style="padding: 12px; border: 1px solid #444;">Legacy configuration</td>
                        <td style="padding: 12px; border: 1px solid #444;">All existing devices</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Transition Mode</td>
                        <td style="padding: 12px; border: 1px solid #444;">WPA2/WPA3 mixed</td>
                        <td style="padding: 12px; border: 1px solid #444;">Both WPA2 and WPA3 clients</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">WPA3 Only</td>
                        <td style="padding: 12px; border: 1px solid #444;">Pure WPA3 deployment</td>
                        <td style="padding: 12px; border: 1px solid #444;">WPA3-capable devices only</td>
                    </tr>
                </table>
                
                <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                    <p style="color: #ef4444; font-weight: bold;">Compatibility Considerations:</p>
                    <ul style="list-style-type: none; margin-left: 10px; color: #B0B0B0;">
                        <li>• <strong>Device Support:</strong> Check client device WPA3 capability</li>
                        <li>• <strong>Driver Updates:</strong> Ensure latest wireless drivers installed</li>
                        <li>• <strong>Infrastructure:</strong> Verify AP and controller WPA3 support</li>
                        <li>• <strong>Performance:</strong> Monitor for any connectivity issues</li>
                    </ul>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">WPA3 Verification and Troubleshooting</h4>
            <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify WPA3 configuration and status</span>
Router# <span style="color: #DCDCAA;">show dot11 associations detail</span>
Router# <span style="color: #DCDCAA;">show interfaces dot11radio0</span>
Router# <span style="color: #DCDCAA;">show dot11 network-map</span>

<span style="color: #6A9955;"># Check WPA3 encryption status</span>
Router# <span style="color: #DCDCAA;">show dot11 statistics client-traffic</span>
Router# <span style="color: #DCDCAA;">show crypto engine connections active</span>

<span style="color: #6A9955;"># Debug WPA3 authentication issues</span>
Router# <span style="color: #DCDCAA;">debug dot11 aaa authenticator process</span>
Router# <span style="color: #DCDCAA;">debug dot11 mgmt interface dot11radio0</span>
</code>
            </pre>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand WPA3's key improvements: SAE, forward secrecy, stronger encryption</li>
                    <li>Know the difference between WPA3-Personal and WPA3-Enterprise modes</li>
                    <li>Understand Wi-Fi Enhanced Open (OWE) for public network security</li>
                    <li>Know that Protected Management Frames (PMF) are mandatory in WPA3</li>
                    <li>Understand WPA3 migration strategies and transition mode configuration</li>
                </ul>
            </div>
        </div>
    `,

    "Wireless Encryption Methods": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.9.d: Wireless Encryption Methods</h3>
            <p>Wireless encryption methods provide data confidentiality and integrity for wireless communications. Understanding the evolution from weak legacy encryption to modern robust algorithms is essential for implementing secure wireless networks.</p>
            
            <h4 style="color: #EC7063;">RC4 Stream Cipher (Legacy)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Rivest Cipher 4:</strong> Stream cipher used in WEP and WPA-TKIP, now considered cryptographically broken.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">RC4 Characteristic</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Implementation</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Vulnerability</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Algorithm Type</td>
                        <td style="padding: 12px; border: 1px solid #444;">Symmetric stream cipher</td>
                        <td style="padding: 12px; border: 1px solid #444;">Keystream predictability</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Key Size</td>
                        <td style="padding: 12px; border: 1px solid #444;">40-2048 bits (typically 128)</td>
                        <td style="padding: 12px; border: 1px solid #444;">Weak key schedules</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">IV Usage</td>
                        <td style="padding: 12px; border: 1px solid #444;">Concatenated with key</td>
                        <td style="padding: 12px; border: 1px solid #444;">IV reuse attacks</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Performance</td>
                        <td style="padding: 12px; border: 1px solid #444;">Fast, low CPU overhead</td>
                        <td style="padding: 12px; border: 1px solid #444;">Security compromised for speed</td>
                    </tr>
                </table>
                <div style="background-color: #771d1d; padding: 10px; border-radius: 5px; margin: 10px 0; border: 2px solid #ef4444;">
                    <p style="color: #ff6b6b; font-weight: bold; margin: 0;">⚠️ DEPRECATED:</p>
                    <p style="color: #E0E0E0; margin: 5px 0 0 0;">RC4 should not be used in new implementations. Legacy systems using RC4 should be migrated to AES immediately.</p>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">TKIP (Temporal Key Integrity Protocol)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>WPA Enhancement:</strong> Improved RC4 implementation with dynamic key generation and integrity checking.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># TKIP configuration (legacy WPA support)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption mode ciphers tkip</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid LEGACY-WPA</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">wpa-psk ascii LegacyPassword123</span>

<span style="color: #6A9955;"># Mixed mode: TKIP + AES for compatibility</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption mode ciphers aes-ccmp tkip</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Key Mixing:</strong> Combines base key with IV for unique per-packet keys</li>
                    <li><strong>Sequence Counter:</strong> 48-bit counter prevents replay attacks</li>
                    <li><strong>Michael MIC:</strong> Message Integrity Check for data authentication</li>
                    <li><strong>Key Rotation:</strong> Regular automatic key updates</li>
                    <li><strong>Legacy Support:</strong> Allows older hardware to use WPA</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">AES-CCMP (Advanced Encryption Standard)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>WPA2 Standard Encryption:</strong> Counter Mode with CBC-MAC Protocol providing both confidentiality and authenticity.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># AES-CCMP configuration (WPA2 standard)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption mode ciphers aes-ccmp</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid SECURE-WPA2</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 2</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">wpa-psk ascii SecurePassword123!</span>

<span style="color: #6A9955;"># Verify AES encryption status</span>
Router# <span style="color: #DCDCAA;">show dot11 associations detail</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">AES-CCMP Feature</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Technology</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981; font-weight: bold;">Security Benefit</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">AES Counter Mode</td>
                        <td style="padding: 12px; border: 1px solid #444;">Military-grade confidentiality</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Authentication</td>
                        <td style="padding: 12px; border: 1px solid #444;">CBC-MAC</td>
                        <td style="padding: 12px; border: 1px solid #444;">Strong data authenticity</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Key Size</td>
                        <td style="padding: 12px; border: 1px solid #444;">128-bit minimum</td>
                        <td style="padding: 12px; border: 1px solid #444;">Computationally secure</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Block Size</td>
                        <td style="padding: 12px; border: 1px solid #444;">128-bit blocks</td>
                        <td style="padding: 12px; border: 1px solid #444;">Efficient processing</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">AES-GCMP (Galois/Counter Mode)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>WPA3 Enhanced Encryption:</strong> Advanced AES mode providing authenticated encryption with better performance.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># AES-GCMP configuration (WPA3)</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption mode ciphers aes-gcmp-128</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid ULTRA-SECURE-WPA3</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 3</span>

<span style="color: #6A9955;"># AES-GCMP-256 for highest security (WPA3-Enterprise 192-bit)</span>
Router(config-if)# <span style="color: #9CDCFE;">encryption mode ciphers aes-gcmp-256</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">pmf required</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Authenticated Encryption:</strong> Single algorithm provides both confidentiality and authenticity</li>
                    <li><strong>Performance:</strong> More efficient than CCMP, especially with hardware acceleration</li>
                    <li><strong>Parallelization:</strong> Better suited for multi-core processing</li>
                    <li><strong>Key Sizes:</strong> Supports 128-bit and 256-bit keys</li>
                    <li><strong>Future-Proof:</strong> Designed for high-speed wireless standards</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Encryption Method Comparison</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Method</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Algorithm</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Key Size</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Security Level</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Status</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">WEP</td>
                        <td style="padding: 12px; border: 1px solid #444;">RC4</td>
                        <td style="padding: 12px; border: 1px solid #444;">40/104-bit</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444;">Broken</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444;">Deprecated</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">WPA-TKIP</td>
                        <td style="padding: 12px; border: 1px solid #444;">RC4 Enhanced</td>
                        <td style="padding: 12px; border: 1px solid #444;">128-bit</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b;">Weak</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b;">Legacy Only</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">WPA2-CCMP</td>
                        <td style="padding: 12px; border: 1px solid #444;">AES-CCMP</td>
                        <td style="padding: 12px; border: 1px solid #444;">128-bit</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981;">Strong</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #10b981;">Current Standard</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">WPA3-GCMP</td>
                        <td style="padding: 12px; border: 1px solid #444;">AES-GCMP</td>
                        <td style="padding: 12px; border: 1px solid #444;">128/256-bit</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6;">Very Strong</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6;">Next Generation</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Hardware and Performance Considerations</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Encryption Performance Impact:</strong> Different methods have varying computational requirements.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Hardware Acceleration:</strong> Modern chips include dedicated AES engines</li>
                    <li><strong>CPU Overhead:</strong> Software encryption consumes processing power</li>
                    <li><strong>Throughput Impact:</strong> Encryption can reduce wireless speeds</li>
                    <li><strong>Battery Life:</strong> More complex encryption drains mobile device batteries faster</li>
                    <li><strong>Legacy Device Support:</strong> Older hardware may not support newer encryption methods</li>
                </ul>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em; margin-top: 15px;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Monitor encryption performance</span>
Router# <span style="color: #DCDCAA;">show interfaces dot11radio0 | include packets</span>
Router# <span style="color: #DCDCAA;">show processes cpu | include Crypto</span>
Router# <span style="color: #DCDCAA;">show crypto engine accelerator statistic</span>

<span style="color: #6A9955;"># Check encryption cipher in use</span>
Router# <span style="color: #DCDCAA;">show dot11 associations | include Cipher</span>
</code>
                </pre>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the evolution from RC4 (WEP/TKIP) to AES (CCMP/GCMP)</li>
                    <li>Know that AES-CCMP is the WPA2 standard and AES-GCMP is used in WPA3</li>
                    <li>Understand that TKIP is legacy and should only be used for compatibility</li>
                    <li>Know the security levels: WEP < WPA-TKIP < WPA2-CCMP < WPA3-GCMP</li>
                    <li>Configure appropriate encryption methods based on security requirements</li>
                </ul>
            </div>
        </div>
    `,

    "Wireless Security Threats": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.9.e: Wireless Security Threats</h3>
            <p>Wireless networks face unique security challenges due to the broadcast nature of radio communications. Understanding various attack vectors and threat methods is essential for implementing comprehensive wireless security defenses.</p>
            
            <h4 style="color: #EC7063;">Eavesdropping and Traffic Analysis</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Passive Attacks:</strong> Attackers intercept wireless transmissions without actively participating in the network.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Threat Type</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Method</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Countermeasure</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Packet Sniffing</td>
                        <td style="padding: 12px; border: 1px solid #444;">Capture all wireless transmissions</td>
                        <td style="padding: 12px; border: 1px solid #444;">Strong encryption (WPA3)</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Traffic Analysis</td>
                        <td style="padding: 12px; border: 1px solid #444;">Analyze communication patterns</td>
                        <td style="padding: 12px; border: 1px solid #444;">VPN tunneling</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Credential Harvesting</td>
                        <td style="padding: 12px; border: 1px solid #444;">Extract authentication data</td>
                        <td style="padding: 12px; border: 1px solid #444;">Certificate-based auth</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Metadata Collection</td>
                        <td style="padding: 12px; border: 1px solid #444;">Track device movements/behavior</td>
                        <td style="padding: 12px; border: 1px solid #444;">MAC randomization</td>
                    </tr>
                </table>
                <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                    <p style="color: #ef4444; font-weight: bold;">Common Eavesdropping Tools:</p>
                    <ul style="list-style-type: none; margin-left: 10px; color: #B0B0B0;">
                        <li>• <strong>Wireshark:</strong> Network protocol analyzer</li>
                        <li>• <strong>Aircrack-ng:</strong> Wireless security auditing suite</li>
                        <li>• <strong>Kismet:</strong> Wireless network detector and sniffer</li>
                        <li>• <strong>OmniPeek:</strong> Commercial wireless analyzer</li>
                    </ul>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Rogue Access Points and Evil Twins</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Unauthorized Infrastructure:</strong> Malicious access points deployed to intercept or disrupt wireless communications.</p>
                <div style="margin-bottom: 20px;">
                    <p style="color: #f59e0b; font-weight: bold;">Rogue Access Points:</p>
                    <ul style="list-style-type: square; margin-left: 20px;">
                        <li><strong>Employee-Installed:</strong> Unauthorized APs connected to corporate network</li>
                        <li><strong>Malicious:</strong> Attacker-controlled APs for network infiltration</li>
                        <li><strong>Bridging:</strong> Creating wireless bridge to wired network</li>
                        <li><strong>Detection:</strong> Wireless intrusion detection systems (WIDS)</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: #f59e0b; font-weight: bold;">Evil Twin Attacks:</p>
                    <ul style="list-style-type: square; margin-left: 20px;">
                        <li><strong>SSID Spoofing:</strong> Mimicking legitimate network names</li>
                        <li><strong>Stronger Signal:</strong> Broadcasting higher power to attract clients</li>
                        <li><strong>Captive Portals:</strong> Fake login pages to harvest credentials</li>
                        <li><strong>Man-in-the-Middle:</strong> Intercepting and modifying traffic</li>
                    </ul>
                </div>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure rogue AP detection</span>
Router(config)# <span style="color: #DCDCAA;">wlan security rogue detection</span>
Router(config)# <span style="color: #DCDCAA;">wlan security rogue auto-contain</span>

<span style="color: #6A9955;"># Monitor for rogue APs</span>
Router# <span style="color: #DCDCAA;">show wlan rogue ap summary</span>
Router# <span style="color: #DCDCAA;">show wlan rogue adhoc summary</span>
Router# <span style="color: #DCDCAA;">show ap dot11 monitor</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Denial of Service Attacks</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Wireless-Specific DoS:</strong> Attacks targeting the wireless medium and 802.11 protocol vulnerabilities.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">DoS Attack Type</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Mechanism</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Defense</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Deauthentication Flood</td>
                        <td style="padding: 12px; border: 1px solid #444;">Spoofed deauth frames</td>
                        <td style="padding: 12px; border: 1px solid #444;">Protected Management Frames</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">RF Jamming</td>
                        <td style="padding: 12px; border: 1px solid #444;">Noise generation on frequency</td>
                        <td style="padding: 12px; border: 1px solid #444;">Spectrum monitoring</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Beacon Flooding</td>
                        <td style="padding: 12px; border: 1px solid #444;">Excessive fake APs</td>
                        <td style="padding: 12px; border: 1px solid #444;">Rate limiting</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">CTS/RTS Flood</td>
                        <td style="padding: 12px; border: 1px solid #444;">Abuse medium access control</td>
                        <td style="padding: 12px; border: 1px solid #444;">Frame validation</td>
                    </tr>
                </table>
                
                <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                    <p style="color: #9f7aea; font-weight: bold;">DoS Attack Tools:</p>
                    <ul style="list-style-type: none; margin-left: 10px; color: #B0B0B0;">
                        <li>• <strong>Aireplay-ng:</strong> Packet injection and replay attacks</li>
                        <li>• <strong>MDK3:</strong> Wireless DoS attack tool</li>
                        <li>• <strong>Scapy:</strong> Packet manipulation and injection</li>
                        <li>• <strong>WiFi-Pumpkin:</strong> Rogue AP framework</li>
                    </ul>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">WPS and Configuration Attacks</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Wi-Fi Protected Setup Vulnerabilities:</strong> Attacks targeting convenience features and misconfigurations.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>WPS PIN Brute Force:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>8-digit PIN reduced to 11,000 possibilities</li>
                            <li>Can be cracked in hours with Reaver tool</li>
                            <li>Mitigation: Disable WPS entirely</li>
                        </ul>
                    </li>
                    <li><strong>WPS Push Button Attack:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Physical access to router required</li>
                            <li>Brief vulnerability window during pairing</li>
                            <li>Mitigation: Secure physical access</li>
                        </ul>
                    </li>
                    <li><strong>Default Credentials:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Unchanged default passwords on devices</li>
                            <li>Predictable password patterns</li>
                            <li>Mitigation: Strong, unique passwords</li>
                        </ul>
                    </li>
                </ul>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em; margin-top: 15px;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Disable WPS to prevent attacks</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #C586C0;">no wps enable</span>
Router(config-if)# <span style="color: #C586C0;">no wps pin</span>

<span style="color: #6A9955;"># Verify WPS status</span>
Router# <span style="color: #DCDCAA;">show wps summary</span>
Router# <span style="color: #DCDCAA;">show dot11 wps</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Social Engineering and Physical Attacks</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Human and Physical Vectors:</strong> Attacks targeting people and physical infrastructure rather than technical vulnerabilities.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>WiFi Pineapple:</strong> Hardware for creating convincing fake hotspots</li>
                    <li><strong>Captive Portal Spoofing:</strong> Fake login pages at coffee shops, hotels</li>
                    <li><strong>Shoulder Surfing:</strong> Observing password entry in public spaces</li>
                    <li><strong>Physical Access:</strong> Unauthorized router configuration changes</li>
                    <li><strong>USB Drops:</strong> Malicious devices disguised as WiFi adapters</li>
                    <li><strong>Wardriving:</strong> Mapping and cataloging wireless networks</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Advanced Persistent Threats (APTs)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Sophisticated Long-term Attacks:</strong> Advanced adversaries using wireless networks for persistent access.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">APT Technique</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Wireless Application</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Detection Method</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Lateral Movement</td>
                        <td style="padding: 12px; border: 1px solid #444;">Compromise wireless clients</td>
                        <td style="padding: 12px; border: 1px solid #444;">Behavioral analysis</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Data Exfiltration</td>
                        <td style="padding: 12px; border: 1px solid #444;">Covert wireless channels</td>
                        <td style="padding: 12px; border: 1px solid #444;">Traffic pattern analysis</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Persistence</td>
                        <td style="padding: 12px; border: 1px solid #444;">Rogue AP implants</td>
                        <td style="padding: 12px; border: 1px solid #444;">Regular security scans</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Command & Control</td>
                        <td style="padding: 12px; border: 1px solid #444;">Hidden wireless networks</td>
                        <td style="padding: 12px; border: 1px solid #444;">Spectrum monitoring</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Wireless Threat Detection and Prevention</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Comprehensive Security Measures:</strong> Multi-layered approach to wireless threat defense.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enable wireless intrusion detection</span>
Router(config)# <span style="color: #DCDCAA;">wlan security wids</span>
Router(config)# <span style="color: #DCDCAA;">wlan security rogue detection</span>
Router(config)# <span style="color: #DCDCAA;">wlan security rogue auto-contain</span>

<span style="color: #6A9955;"># Configure wireless security policies</span>
Router(config)# <span style="color: #DCDCAA;">wlan security policy deny-inter-user-traffic</span>
Router(config)# <span style="color: #DCDCAA;">wlan security policy max-associations 50</span>

<span style="color: #6A9955;"># Monitor wireless threats</span>
Router# <span style="color: #DCDCAA;">show wlan security summary</span>
Router# <span style="color: #DCDCAA;">show wlan rogue ap detailed</span>
Router# <span style="color: #DCDCAA;">show ap dot11 monitor summary</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px; margin-top: 15px;">
                    <li><strong>Network Segmentation:</strong> Isolate wireless traffic from critical systems</li>
                    <li><strong>Regular Auditing:</strong> Periodic wireless security assessments</li>
                    <li><strong>User Education:</strong> Training on wireless security best practices</li>
                    <li><strong>Incident Response:</strong> Procedures for wireless security breaches</li>
                    <li><strong>Continuous Monitoring:</strong> 24/7 wireless threat detection</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand major wireless threats: eavesdropping, rogue APs, DoS attacks</li>
                    <li>Know the vulnerabilities of WPS and why it should be disabled</li>
                    <li>Understand how evil twin attacks work and their countermeasures</li>
                    <li>Recognize the importance of Protected Management Frames (PMF)</li>
                    <li>Know basic wireless threat detection and prevention methods</li>
                </ul>
            </div>
        </div>
    `,

    "WPA3 & Enterprise Config": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.10.b: WPA3 & Enterprise Config</h3>
            <p>WPA3 and Enterprise wireless configurations provide the highest level of security for modern wireless networks. These implementations offer enhanced encryption, individual user authentication, and centralized policy management through RADIUS integration.</p>
            
            <h4 style="color: #EC7063;">WPA3-Personal Configuration</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Simultaneous Authentication of Equals (SAE):</strong> Enhanced security with forward secrecy and brute-force resistance.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure WPA3-Personal on Cisco WLC</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security wpa akm sae enable WLAN-ID</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security wpa wpa3 enable WLAN-ID</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config wlan security passphrase MySecureWPA3Pass! WLAN-ID</span>

<span style="color: #6A9955;"># Enable transition mode for WPA2/WPA3 compatibility</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security wpa akm psk enable WLAN-ID</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security wpa akm sae enable WLAN-ID</span>
(Cisco Controller) > <span style="color: #C586C0;">config wlan security pmf enable WLAN-ID</span>

<span style="color: #6A9955;"># CLI configuration on autonomous AP</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid CORPORATE-WPA3</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 3</span>
Router(config-if-ssid)# <span style="color: #9CDCFE;">encryption mode ciphers aes-gcmp-128</span>
Router(config-if-ssid)# <span style="color: #DCDCAA;">wpa-psk ascii MySecureWPA3Pass!</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">WPA3 Feature</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Configuration</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Security Benefit</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">SAE Authentication</td>
                        <td style="padding: 12px; border: 1px solid #444;">akm sae enable</td>
                        <td style="padding: 12px; border: 1px solid #444;">Forward secrecy, offline attack protection</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">AES-GCMP Encryption</td>
                        <td style="padding: 12px; border: 1px solid #444;">ciphers aes-gcmp-128</td>
                        <td style="padding: 12px; border: 1px solid #444;">Enhanced encryption performance</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">PMF (Required)</td>
                        <td style="padding: 12px; border: 1px solid #444;">pmf enable</td>
                        <td style="padding: 12px; border: 1px solid #444;">Management frame protection</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">WPA3-Enterprise Configuration</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>802.1X with Enhanced Security:</strong> Individual user authentication with 192-bit security suite option.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure WPA3-Enterprise on Cisco WLC</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security wpa akm 802.1x enable WLAN-ID</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security wpa wpa3 enable WLAN-ID</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config wlan radius auth add WLAN-ID 1 192.168.1.100 1812 RadiusKey123</span>
(Cisco Controller) > <span style="color: #C586C0;">config wlan security pmf enable WLAN-ID</span>

<span style="color: #6A9955;"># Configure 192-bit security suite (highest security)</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security wpa3 192bit enable WLAN-ID</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config wlan security cipher aes-gcmp-256 enable WLAN-ID</span>

<span style="color: #6A9955;"># Autonomous AP Enterprise configuration</span>
Router(config)# <span style="color: #DCDCAA;">interface dot11radio0</span>
Router(config-if)# <span style="color: #9CDCFE;">ssid ENTERPRISE-WPA3</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication open eap EAP-RADIUS</span>
Router(config-if-ssid)# <span style="color: #C586C0;">authentication key-management wpa version 3</span>
Router(config-if-ssid)# <span style="color: #9CDCFE;">authentication network-eap EAP-RADIUS</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Individual User Authentication:</strong> Unique credentials per user</li>
                    <li><strong>Dynamic VLAN Assignment:</strong> User-based network segmentation</li>
                    <li><strong>Certificate-Based Auth:</strong> EAP-TLS with digital certificates</li>
                    <li><strong>Centralized Policy:</strong> RADIUS attribute-based authorization</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">RADIUS Server Integration</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Enterprise Authentication Infrastructure:</strong> Configuring wireless controllers to work with RADIUS servers.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure RADIUS authentication server</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config radius auth add 1 192.168.1.100 1812 SharedSecret123</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config radius auth timeout 1 5</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config radius auth retransmit timeout 1 3</span>

<span style="color: #6A9955;"># Configure RADIUS accounting server</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config radius acct add 1 192.168.1.100 1813 AcctSecret123</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config radius acct enable</span>

<span style="color: #6A9955;"># Configure fallback and redundancy</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config radius auth add 2 192.168.1.101 1812 SharedSecret123</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config radius fallback-test username testuser password testpass</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">EAP Method</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Authentication Type</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Use Case</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">EAP-TLS</td>
                        <td style="padding: 12px; border: 1px solid #444;">Certificate-based</td>
                        <td style="padding: 12px; border: 1px solid #444;">Highest security, PKI required</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">PEAP-MSCHAPv2</td>
                        <td style="padding: 12px; border: 1px solid #444;">Username/Password</td>
                        <td style="padding: 12px; border: 1px solid #444;">Windows domain integration</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">EAP-TTLS</td>
                        <td style="padding: 12px; border: 1px solid #444;">Tunneled authentication</td>
                        <td style="padding: 12px; border: 1px solid #444;">Mixed environment support</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">EAP-FAST</td>
                        <td style="padding: 12px; border: 1px solid #444;">Cisco proprietary</td>
                        <td style="padding: 12px; border: 1px solid #444;">Legacy device support</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Advanced Enterprise Features</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Enterprise-Grade Wireless Security:</strong> Advanced features for large-scale deployments.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Dynamic VLAN Assignment:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>RADIUS returns VLAN attributes</li>
                            <li>User-based network segmentation</li>
                            <li>Automatic VLAN tagging based on credentials</li>
                        </ul>
                    </li>
                    <li><strong>Identity-Based Networking:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>User identity drives network access</li>
                            <li>Role-based access control policies</li>
                            <li>Integration with Active Directory</li>
                        </ul>
                    </li>
                    <li><strong>Certificate Provisioning:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Automated certificate deployment</li>
                            <li>SCEP (Simple Certificate Enrollment Protocol)</li>
                            <li>Certificate lifecycle management</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">WPA3 Migration Strategy</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Phased Deployment Approach:</strong> Systematic migration from WPA2 to WPA3 in enterprise environments.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Phase</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Configuration</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #ef4444; font-weight: bold;">Client Support</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Assessment</td>
                        <td style="padding: 12px; border: 1px solid #444;">Inventory WPA3 capability</td>
                        <td style="padding: 12px; border: 1px solid #444;">Identify compatible devices</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Transition</td>
                        <td style="padding: 12px; border: 1px solid #444;">WPA2/WPA3 mixed mode</td>
                        <td style="padding: 12px; border: 1px solid #444;">Both protocol support</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Pure WPA3</td>
                        <td style="padding: 12px; border: 1px solid #444;">WPA3-only deployment</td>
                        <td style="padding: 12px; border: 1px solid #444;">WPA3-capable devices only</td>
                    </tr>
                </table>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em; margin-top: 15px;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Verify WPA3 configuration and client connections</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show wlan summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show client summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show client detail &lt;client-mac&gt;</span>

<span style="color: #6A9955;"># Monitor WPA3 authentication</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show radius summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show radius statistics</span>
(Cisco Controller) > <span style="color: #DCDCAA;">debug radius enable</span>
</code>
                </pre>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure WPA3-Personal and WPA3-Enterprise on wireless controllers</li>
                    <li>Understand RADIUS integration for 802.1X authentication</li>
                    <li>Know the different EAP methods and their use cases</li>
                    <li>Configure transition mode for WPA2/WPA3 compatibility</li>
                    <li>Understand 192-bit security suite for high-security environments</li>
                </ul>
            </div>
        </div>
    `,

    "Guest Network Security": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.10.c: Guest Network Security</h3>
            <p>Guest networks provide internet access to visitors while protecting the corporate network infrastructure. Proper guest network implementation requires network isolation, bandwidth controls, and time-based access restrictions.</p>
            
            <h4 style="color: #EC7063;">Guest Network Architecture</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Network Segmentation:</strong> Isolating guest traffic from corporate resources while providing internet connectivity.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure guest WLAN on Cisco WLC</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan create 5 Guest-WiFi Guest-WiFi</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan interface 5 guest-interface</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config wlan security wpa disable 5</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config wlan security web-auth enable 5</span>

<span style="color: #6A9955;"># Configure guest interface and VLAN</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config interface create guest-interface 100 192.168.100.1 255.255.255.0 192.168.100.1</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config interface vlan guest-interface 100</span>
(Cisco Controller) > <span style="color: #C586C0;">config interface dhcp guest-interface primary 192.168.100.1</span>

<span style="color: #6A9955;"># Enable guest network isolation</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan peer-to-peer-blocking enable 5</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan layer2 acl guest-isolation 5</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Design Element</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Implementation</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Security Benefit</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">VLAN Separation</td>
                        <td style="padding: 12px; border: 1px solid #444;">Dedicated guest VLAN</td>
                        <td style="padding: 12px; border: 1px solid #444;">Network segmentation</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Client Isolation</td>
                        <td style="padding: 12px; border: 1px solid #444;">Peer-to-peer blocking</td>
                        <td style="padding: 12px; border: 1px solid #444;">Guest-to-guest protection</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Firewall Rules</td>
                        <td style="padding: 12px; border: 1px solid #444;">ACLs blocking corporate access</td>
                        <td style="padding: 12px; border: 1px solid #444;">Corporate network protection</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Internet Gateway</td>
                        <td style="padding: 12px; border: 1px solid #444;">Separate internet path</td>
                        <td style="padding: 12px; border: 1px solid #444;">Traffic isolation</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Web Authentication Portal</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Captive Portal:</strong> User authentication and terms acceptance before internet access.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure web authentication</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security web-auth enable 5</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan security web-auth server-precedence 5 local radius ldap</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config wlan session-timeout 5 1800</span>

<span style="color: #6A9955;"># Configure custom web portal</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config custom-web login_page</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config custom-web logout_page</span>
(Cisco Controller) > <span style="color: #C586C0;">config network web-auth port 8443</span>

<span style="color: #6A9955;"># Set up guest user accounts</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config local-user add guest_user guest_pass guest</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config local-user lifetime guest_user 24</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Authentication Methods:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Local user database for temporary accounts</li>
                            <li>RADIUS integration for sponsored access</li>
                            <li>Social media login (Facebook, Google)</li>
                            <li>Self-registration with email verification</li>
                        </ul>
                    </li>
                    <li><strong>Portal Customization:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Company branding and logos</li>
                            <li>Terms and conditions acceptance</li>
                            <li>Custom welcome messages</li>
                            <li>Multi-language support</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Guest Access Controls</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Bandwidth and Time Restrictions:</strong> Controlling guest network usage and access duration.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure bandwidth limits</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config qos rate-limit guest-class 2048 1024</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan qos 5 bronze</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config qos average-data-rate upstream guest-class 1024</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config qos average-data-rate downstream guest-class 2048</span>

<span style="color: #6A9955;"># Configure time-based access</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan session-timeout 5 3600</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan idle-timeout 5 300</span>
(Cisco Controller) > <span style="color: #C586C0;">config time-range guest-hours start 08:00 end 18:00</span>

<span style="color: #6A9955;"># Configure device limits</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan max-clients 5 100</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan max-clients-per-radio 5 25</span>
</code>
                </pre>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Control Type</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Configuration</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Purpose</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Bandwidth Limiting</td>
                        <td style="padding: 12px; border: 1px solid #444;">QoS rate limiting</td>
                        <td style="padding: 12px; border: 1px solid #444;">Prevent network congestion</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Session Timeout</td>
                        <td style="padding: 12px; border: 1px solid #444;">Automatic disconnection</td>
                        <td style="padding: 12px; border: 1px solid #444;">Limit access duration</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Client Limits</td>
                        <td style="padding: 12px; border: 1px solid #444;">Maximum concurrent users</td>
                        <td style="padding: 12px; border: 1px solid #444;">Prevent overutilization</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Time Windows</td>
                        <td style="padding: 12px; border: 1px solid #444;">Access hour restrictions</td>
                        <td style="padding: 12px; border: 1px solid #444;">Business hour control</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Guest Network ACLs</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Access Control Lists:</strong> Restricting guest network traffic to approved destinations only.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Create guest ACL on wireless controller</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config acl create guest-acl</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config acl rule add guest-acl 1</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config acl rule action guest-acl 1 deny</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config acl rule source guest-acl 1 any</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config acl rule destination guest-acl 1 192.168.1.0 255.255.255.0</span>

<span style="color: #6A9955;"># Allow internet access</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config acl rule add guest-acl 2</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config acl rule action guest-acl 2 permit</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config acl rule source guest-acl 2 any</span>
(Cisco Controller) > <span style="color: #9CDCFE;">config acl rule destination guest-acl 2 any</span>

<span style="color: #6A9955;"># Apply ACL to guest WLAN</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan acl 5 guest-acl</span>
</code>
                </pre>
                <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                    <p style="color: #9f7aea; font-weight: bold;">Common Guest ACL Rules:</p>
                    <ul style="list-style-type: none; margin-left: 10px; color: #B0B0B0;">
                        <li>• <strong>Block RFC 1918:</strong> Deny access to private IP ranges</li>
                        <li>• <strong>Block Multicast:</strong> Prevent discovery protocols</li>
                        <li>• <strong>Allow DNS/DHCP:</strong> Essential services only</li>
                        <li>• <strong>Allow HTTP/HTTPS:</strong> Web browsing access</li>
                        <li>• <strong>Block File Sharing:</strong> P2P and file transfer protocols</li>
                    </ul>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Guest Network Monitoring</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Security Monitoring:</strong> Tracking guest network usage and identifying potential security issues.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Usage Analytics:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Bandwidth utilization per guest</li>
                            <li>Most accessed websites and services</li>
                            <li>Peak usage times and patterns</li>
                            <li>Guest device types and OS</li>
                        </ul>
                    </li>
                    <li><strong>Security Monitoring:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Blocked connection attempts</li>
                            <li>Malware detection and blocking</li>
                            <li>Suspicious traffic patterns</li>
                            <li>Guest network policy violations</li>
                        </ul>
                    </li>
                </ul>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em; margin-top: 15px;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Monitor guest network usage</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show wlan 5</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show client summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show interface detailed guest-interface</span>

<span style="color: #6A9955;"># Check guest authentication status</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show web-auth summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show local-user summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show acl detailed guest-acl</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Guest Network Best Practices</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Security Recommendations:</strong> Implementing comprehensive guest network security.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Network Isolation:</strong> Complete separation from corporate networks</li>
                    <li><strong>Regular Auditing:</strong> Periodic review of guest access policies</li>
                    <li><strong>Logging and Monitoring:</strong> Comprehensive activity tracking</li>
                    <li><strong>Incident Response:</strong> Procedures for guest network security events</li>
                    <li><strong>Legal Compliance:</strong> Terms of use and privacy policies</li>
                    <li><strong>Regular Updates:</strong> Keep guest portal software current</li>
                </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Configure guest WLANs with proper VLAN separation</li>
                    <li>Implement web authentication portals for guest access</li>
                    <li>Apply ACLs to restrict guest network traffic appropriately</li>
                    <li>Configure bandwidth limits and session timeouts</li>
                    <li>Understand client isolation and peer-to-peer blocking</li>
                </ul>
            </div>
        </div>
    `,

    "WLAN Security Policies": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.10.d: WLAN Security Policies</h3>
            <p>WLAN security policies define comprehensive rules and procedures for wireless network security management. These policies encompass technical controls, user guidelines, and organizational procedures to maintain secure wireless operations.</p>
            
            <h4 style="color: #EC7063;">Wireless Security Policy Framework</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Policy Components:</strong> Essential elements of a comprehensive wireless security policy.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Policy Area</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Key Requirements</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Implementation</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Access Control</td>
                        <td style="padding: 12px; border: 1px solid #444;">Strong authentication, authorization</td>
                        <td style="padding: 12px; border: 1px solid #444;">WPA3, 802.1X, certificate-based</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Encryption Standards</td>
                        <td style="padding: 12px; border: 1px solid #444;">Minimum encryption requirements</td>
                        <td style="padding: 12px; border: 1px solid #444;">AES-CCMP minimum, GCMP preferred</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Network Segmentation</td>
                        <td style="padding: 12px; border: 1px solid #444;">Isolation of wireless traffic</td>
                        <td style="padding: 12px; border: 1px solid #444;">VLANs, firewall rules, ACLs</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Monitoring & Auditing</td>
                        <td style="padding: 12px; border: 1px solid #444;">Continuous security monitoring</td>
                        <td style="padding: 12px; border: 1px solid #444;">WIDS, logging, regular audits</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Incident Response</td>
                        <td style="padding: 12px; border: 1px solid #444;">Security event procedures</td>
                        <td style="padding: 12px; border: 1px solid #444;">Detection, containment, recovery</td>
                    </tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Technical Security Controls</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Configuration Standards:</strong> Technical implementation of wireless security policies.</p>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Enforce minimum security standards</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config network rf-profile create SECURE-PROFILE</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config network rf-profile 802.11a min-client-level SECURE-PROFILE -70</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config network rf-profile 802.11a coverage SECURE-PROFILE 15</span>

<span style="color: #6A9955;"># Configure security monitoring</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wps security rogue auto-contain enable</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wps security rogue detection enable</span>
(Cisco Controller) > <span style="color: #C586C0;">config advanced 802.11a monitor mode enable</span>

<span style="color: #6A9955;"># Implement MAC filtering policy</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config macfilter add 00:11:22:33:44:55 0 description "Approved Device"</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wlan mac-filtering enable 1</span>
</code>
                </pre>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Mandatory Encryption:</strong> Disable open networks, require WPA2/WPA3</li>
                    <li><strong>Strong Passwords:</strong> Minimum complexity requirements for PSK</li>
                    <li><strong>Certificate Validation:</strong> Proper PKI implementation for enterprise</li>
                    <li><strong>Management Frame Protection:</strong> PMF enabled for all WPA3 networks</li>
                    <li><strong>Regular Key Rotation:</strong> Automated key refresh policies</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Access Control Policies</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>User and Device Management:</strong> Controlling who and what can access wireless networks.</p>
                <div style="margin-bottom: 20px;">
                    <p style="color: #f59e0b; font-weight: bold;">User Access Policies:</p>
                    <ul style="list-style-type: square; margin-left: 20px;">
                        <li><strong>Employee Networks:</strong> Corporate device-only access with 802.1X</li>
                        <li><strong>BYOD Networks:</strong> Personal device access with NAC integration</li>
                        <li><strong>Guest Networks:</strong> Sponsored or self-service registration</li>
                        <li><strong>Contractor Access:</strong> Time-limited access with sponsorship</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: #f59e0b; font-weight: bold;">Device Classification Policies:</p>
                    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                        <tr style="background-color: #2a2a2a;">
                            <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Device Type</td>
                            <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Network Access</td>
                            <td style="padding: 12px; border: 1px solid #444; color: #f59e0b; font-weight: bold;">Security Requirements</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #444;">Corporate Laptops</td>
                            <td style="padding: 12px; border: 1px solid #444;">Full corporate network</td>
                            <td style="padding: 12px; border: 1px solid #444;">Certificate-based 802.1X</td>
                        </tr>
                        <tr style="background-color: #1e1e1e;">
                            <td style="padding: 12px; border: 1px solid #444;">Personal Devices</td>
                            <td style="padding: 12px; border: 1px solid #444;">Limited corporate access</td>
                            <td style="padding: 12px; border: 1px solid #444;">NAC compliance check</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #444;">IoT Devices</td>
                            <td style="padding: 12px; border: 1px solid #444;">Isolated IoT network</td>
                            <td style="padding: 12px; border: 1px solid #444;">MAC authentication</td>
                        </tr>
                        <tr style="background-color: #1e1e1e;">
                            <td style="padding: 12px; border: 1px solid #444;">Guest Devices</td>
                            <td style="padding: 12px; border: 1px solid #444;">Internet only</td>
                            <td style="padding: 12px; border: 1px solid #444;">Web authentication portal</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Compliance and Regulatory Requirements</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #9f7aea;">
                <p><strong>Regulatory Compliance:</strong> Meeting industry standards and legal requirements for wireless security.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Standard</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Wireless Requirements</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #9f7aea; font-weight: bold;">Implementation</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">PCI DSS</td>
                        <td style="padding: 12px; border: 1px solid #444;">Strong encryption, network isolation</td>
                        <td style="padding: 12px; border: 1px solid #444;">WPA2/WPA3, separate VLAN</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">HIPAA</td>
                        <td style="padding: 12px; border: 1px solid #444;">PHI protection, access controls</td>
                        <td style="padding: 12px; border: 1px solid #444;">Enterprise authentication, encryption</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">SOX</td>
                        <td style="padding: 12px; border: 1px solid #444;">Financial data security</td>
                        <td style="padding: 12px; border: 1px solid #444;">Audit trails, access logging</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">GDPR</td>
                        <td style="padding: 12px; border: 1px solid #444;">Personal data protection</td>
                        <td style="padding: 12px; border: 1px solid #444;">Data encryption, user consent</td>
                    </tr>
                </table>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em; margin-top: 15px;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Configure audit logging for compliance</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config logging syslog host 192.168.1.200</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config logging syslog level informational</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config logging buffered informational</span>

<span style="color: #6A9955;"># Enable detailed authentication logging</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config logging 802.11-events enable</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config logging client-events enable</span>
(Cisco Controller) > <span style="color: #C586C0;">config logging security-events enable</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Incident Response Procedures</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Security Incident Management:</strong> Procedures for responding to wireless security events.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Rogue AP Detection:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Automatic detection and alerting</li>
                            <li>Physical location identification</li>
                            <li>Immediate containment actions</li>
                            <li>Investigation and remediation</li>
                        </ul>
                    </li>
                    <li><strong>Security Breach Response:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Immediate network isolation</li>
                            <li>Forensic data collection</li>
                            <li>Stakeholder notification</li>
                            <li>Recovery and lessons learned</li>
                        </ul>
                    </li>
                    <li><strong>Performance Issues:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>RF interference investigation</li>
                            <li>Capacity planning adjustments</li>
                            <li>Configuration optimization</li>
                            <li>Hardware replacement procedures</li>
                        </ul>
                    </li>
                </ul>
                
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em; margin-top: 15px;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Emergency containment commands</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config wps security rogue auto-contain enable</span>
(Cisco Controller) > <span style="color: #DCDCAA;">config client deauthenticate &lt;mac-address&gt;</span>
(Cisco Controller) > <span style="color: #C586C0;">config ap disable &lt;ap-name&gt;</span>

<span style="color: #6A9955;"># Incident investigation commands</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show rogue ap summary</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show security events</span>
(Cisco Controller) > <span style="color: #DCDCAA;">show logging last 100</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Policy Enforcement and Monitoring</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Continuous Compliance:</strong> Automated monitoring and enforcement of wireless security policies.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Automated Policy Enforcement:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Configuration templates and standardization</li>
                            <li>Automated compliance checking</li>
                            <li>Policy violation alerting</li>
                            <li>Remediation workflows</li>
                        </ul>
                    </li>
                    <li><strong>Regular Security Assessments:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Quarterly wireless security audits</li>
                            <li>Penetration testing of wireless networks</li>
                            <li>Policy effectiveness reviews</li>
                            <li>User awareness training</li>
                        </ul>
                    </li>
                    <li><strong>Metrics and Reporting:</strong>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Security event dashboards</li>
                            <li>Compliance status reporting</li>
                            <li>Trend analysis and forecasting</li>
                            <li>Management reporting</li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">User Training and Awareness</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Security Education:</strong> Ensuring users understand and follow wireless security policies.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #2a2a2a;">
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Training Area</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Key Topics</td>
                        <td style="padding: 12px; border: 1px solid #444; color: #3b82f6; font-weight: bold;">Frequency</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Wireless Security Basics</td>
                        <td style="padding: 12px; border: 1px solid #444;">WPA3, password security, rogue APs</td>
                        <td style="padding: 12px; border: 1px solid #444;">Annual mandatory</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">BYOD Policies</td>
                        <td style="padding: 12px; border: 1px solid #444;">Device registration, acceptable use</td>
                        <td style="padding: 12px; border: 1px solid #444;">Device enrollment</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #444;">Public WiFi Safety</td>
                        <td style="padding: 12px; border: 1px solid #444;">VPN usage, evil twins, data protection</td>
                        <td style="padding: 12px; border: 1px solid #444;">Quarterly reminders</td>
                    </tr>
                    <tr style="background-color: #1e1e1e;">
                        <td style="padding: 12px; border: 1px solid #444;">Incident Reporting</td>
                        <td style="padding: 12px; border: 1px solid #444;">Suspicious activity, contact procedures</td>
                        <td style="padding: 12px; border: 1px solid #444;">New hire orientation</td>
                    </tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the components of comprehensive wireless security policies</li>
                    <li>Know how to implement technical controls to enforce security policies</li>
                    <li>Understand compliance requirements for different industry standards</li>
                    <li>Know basic incident response procedures for wireless security events</li>
                    <li>Understand the importance of user training and policy enforcement</li>
                </ul>
            </div>
        </div>
    `,

    // 5.1 Firewall Types
    "Firewall Types": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.1.f: Firewall Types and Architectures</h3>
            <p>Firewalls are critical network security devices that control traffic flow between network segments. Understanding different firewall types and their capabilities is essential for designing secure network architectures.</p>
            
            <h4 style="color: #EC7063;">Stateless Packet Filtering Firewalls</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
                <p><strong>Operation:</strong> Examine individual packets against static rules without considering connection state.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Filtering Criteria:</strong> Source/destination IP, port numbers, protocol type</li>
                    <li><strong>Performance:</strong> Fast processing due to simple rule evaluation</li>
                    <li><strong>Limitations:</strong> Cannot track connection state or detect sophisticated attacks</li>
                    <li><strong>Use Case:</strong> Basic perimeter filtering, high-speed environments</li>
                </ul>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Example stateless ACL rules</span>
<span style="color: #DCDCAA;">permit tcp any any eq 80</span>
<span style="color: #DCDCAA;">permit tcp any any eq 443</span>
<span style="color: #C586C0;">deny ip any any</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Stateful Inspection Firewalls</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
                <p><strong>Operation:</strong> Track connection state and context, maintaining session tables for ongoing connections.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Connection Tracking:</strong> Monitors TCP handshakes, session establishment</li>
                    <li><strong>Dynamic Rules:</strong> Automatically allows return traffic for established connections</li>
                    <li><strong>Enhanced Security:</strong> Prevents session hijacking and connection-based attacks</li>
                    <li><strong>Memory Usage:</strong> Requires state tables for active connections</li>
                </ul>
                <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                    <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                        <tr style="background-color: #1e1e1e;"><td style="padding: 8px; border-bottom: 1px solid #444; color: #10b981; font-weight: bold;">Connection State</td><td style="padding: 8px; border-bottom: 1px solid #444;">Action</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #444;">NEW</td><td style="padding: 8px; border-bottom: 1px solid #444;">Evaluate against security policy</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #444;">ESTABLISHED</td><td style="padding: 8px; border-bottom: 1px solid #444;">Allow based on existing session</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #444;">RELATED</td><td style="padding: 8px; border-bottom: 1px solid #444;">Allow if related to established connection</td></tr>
                        <tr><td style="padding: 8px;">INVALID</td><td style="padding: 8px;">Drop malformed or suspicious packets</td></tr>
                    </table>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Next-Generation Firewalls (NGFW)</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ef4444;">
                <p><strong>Advanced Features:</strong> Combine traditional firewall capabilities with application-layer inspection and threat intelligence.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>Application Control:</strong> Identify and control applications regardless of port/protocol</li>
                    <li><strong>Deep Packet Inspection:</strong> Analyze packet content beyond headers</li>
                    <li><strong>Intrusion Prevention:</strong> Built-in IPS capabilities with signature matching</li>
                    <li><strong>Threat Intelligence:</strong> Real-time updates on emerging threats and IOCs</li>
                    <li><strong>User Identity:</strong> Integration with directory services for user-based policies</li>
                    <li><strong>SSL Inspection:</strong> Decrypt and inspect encrypted traffic</li>
                </ul>
            </div>
            
            <h4 style="color: #EC7063;">Firewall Deployment Models</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #1e1e1e;"><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">Deployment Type</td><td style="padding: 8px; border-bottom: 1px solid #444;">Description</td><td style="padding: 8px; border-bottom: 1px solid #444;">Use Case</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Network Firewall</td><td style="padding: 8px; border-bottom: 1px solid #444;">Perimeter protection between networks</td><td style="padding: 8px; border-bottom: 1px solid #444;">Internet edge, DMZ segmentation</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Host-based Firewall</td><td style="padding: 8px; border-bottom: 1px solid #444;">Software firewall on individual devices</td><td style="padding: 8px; border-bottom: 1px solid #444;">Endpoint protection, servers</td></tr>
                    <tr><td style="padding: 8px;">Cloud Firewall</td><td style="padding: 8px;">Virtual firewall services in cloud</td><td style="padding: 8px;">Cloud workload protection, FWaaS</td></tr>
                </table>
            </div>
            
            <h4 style="color: #EC7063;">Firewall Selection Criteria</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #3b82f6;">Performance Requirements:</strong> Throughput, concurrent connections, latency</li>
                <li><strong style="color: #10b981;">Security Features:</strong> IPS, application control, threat intelligence</li>
                <li><strong style="color: #f59e0b;">Management:</strong> Centralized management, automation, reporting</li>
                <li><strong style="color: #ef4444;">Integration:</strong> SIEM compatibility, API support, vendor ecosystem</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand the differences between stateless and stateful firewalls</li>
                    <li>Know the advanced features of next-generation firewalls</li>
                    <li>Identify appropriate firewall types for different security requirements</li>
                    <li>Understand firewall deployment models and use cases</li>
                </ul>
            </div>
        </div>
    `,

    // 5.1 Cryptography Basics
    "Cryptography Basics": `
        <div style="font-family: 'Inter', sans-serif; color: #E0E0E0;">
            <h3 style="color: #E74C3C; border-bottom: 2px solid #E74C3C; padding-bottom: 5px;">5.1.g: Cryptography Fundamentals</h3>
            <p>Cryptography provides the mathematical foundation for secure communications and data protection. Understanding encryption methods, key management, and hashing is essential for implementing secure network solutions.</p>
            
            <h4 style="color: #EC7063;">Symmetric Encryption</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #6366f1;">
                <p><strong>Concept:</strong> Same key used for both encryption and decryption. Fast and efficient for large amounts of data.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>AES (Advanced Encryption Standard):</strong> Most widely used, 128/192/256-bit keys</li>
                    <li><strong>DES/3DES:</strong> Legacy algorithms, being phased out due to weak key lengths</li>
                    <li><strong>Key Distribution Challenge:</strong> Secure key exchange between parties</li>
                    <li><strong>Performance:</strong> Very fast encryption/decryption operations</li>
                </ul>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Symmetric encryption example</span>
<span style="color: #DCDCAA;">Plaintext:</span> <span style="color: #CE9178;">"Hello World"</span>
<span style="color: #DCDCAA;">Key:</span>      <span style="color: #CE9178;">256-bit AES key</span>
<span style="color: #DCDCAA;">Ciphertext:</span> <span style="color: #CE9178;">U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y=</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Asymmetric Encryption</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #8b5cf6;">
                <p><strong>Concept:</strong> Uses mathematically related key pairs (public/private). Solves key distribution problem but computationally intensive.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>RSA:</strong> Most common, based on prime factorization, 2048+ bit keys recommended</li>
                    <li><strong>ECC (Elliptic Curve):</strong> Smaller keys with equivalent security, more efficient</li>
                    <li><strong>Key Pairs:</strong> Public key for encryption, private key for decryption</li>
                    <li><strong>Digital Signatures:</strong> Private key signs, public key verifies</li>
                </ul>
                <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                    <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                        <tr style="background-color: #1e1e1e;"><td style="padding: 8px; border-bottom: 1px solid #444; color: #8b5cf6; font-weight: bold;">Operation</td><td style="padding: 8px; border-bottom: 1px solid #444;">Key Used</td><td style="padding: 8px; border-bottom: 1px solid #444;">Purpose</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Encryption</td><td style="padding: 8px; border-bottom: 1px solid #444;">Recipient's Public Key</td><td style="padding: 8px; border-bottom: 1px solid #444;">Confidentiality</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Decryption</td><td style="padding: 8px; border-bottom: 1px solid #444;">Recipient's Private Key</td><td style="padding: 8px; border-bottom: 1px solid #444;">Access encrypted data</td></tr>
                        <tr><td style="padding: 8px; border-bottom: 1px solid #444;">Digital Signature</td><td style="padding: 8px; border-bottom: 1px solid #444;">Sender's Private Key</td><td style="padding: 8px; border-bottom: 1px solid #444;">Authentication, non-repudiation</td></tr>
                        <tr><td style="padding: 8px;">Signature Verification</td><td style="padding: 8px;">Sender's Public Key</td><td style="padding: 8px;">Verify authenticity</td></tr>
                    </table>
                </div>
            </div>
            
            <h4 style="color: #EC7063;">Hashing Algorithms</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                <p><strong>Purpose:</strong> Create fixed-length digest of variable-length input. Used for integrity verification and password storage.</p>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li><strong>SHA-256:</strong> Secure Hash Algorithm, 256-bit output, widely trusted</li>
                    <li><strong>SHA-1:</strong> Deprecated due to collision vulnerabilities</li>
                    <li><strong>MD5:</strong> Cryptographically broken, only for non-security applications</li>
                    <li><strong>Properties:</strong> One-way function, avalanche effect, collision resistance</li>
                </ul>
                <pre style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; font-size: 0.9em;">
<code style="color: #9CDCFE;">
<span style="color: #6A9955;"># Hash function examples</span>
<span style="color: #DCDCAA;">Input:</span>  <span style="color: #CE9178;">"password123"</span>
<span style="color: #DCDCAA;">MD5:</span>    <span style="color: #CE9178;">482c811da5d5b4bc6d497ffa98491e38</span>
<span style="color: #DCDCAA;">SHA-256:</span> <span style="color: #CE9178;">ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f</span>
</code>
                </pre>
            </div>
            
            <h4 style="color: #EC7063;">Hybrid Cryptography</h4>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #EC7063;">
                <p><strong>Best of Both Worlds:</strong> Combines symmetric and asymmetric encryption to achieve both security and performance.</p>
                <ol style="margin-left: 20px;">
                    <li>Generate random symmetric key (session key)</li>
                    <li>Encrypt data with symmetric algorithm (fast)</li>
                    <li>Encrypt session key with recipient's public key</li>
                    <li>Send encrypted data + encrypted session key</li>
                    <li>Recipient decrypts session key with private key</li>
                    <li>Use session key to decrypt the actual data</li>
                </ol>
                <p><strong>Examples:</strong> TLS/SSL, IPsec, PGP encryption</p>
            </div>
            
            <h4 style="color: #EC7063;">Key Management Principles</h4>
            <ul style="margin-left: 20px; color: #B0B0B0;">
                <li><strong style="color: #3b82f6;">Key Generation:</strong> Use cryptographically secure random number generators</li>
                <li><strong style="color: #10b981;">Key Distribution:</strong> Secure channels for symmetric key exchange</li>
                <li><strong style="color: #f59e0b;">Key Storage:</strong> Hardware Security Modules (HSMs), secure key stores</li>
                <li><strong style="color: #ef4444;">Key Rotation:</strong> Regular key updates, key lifecycle management</li>
                <li><strong style="color: #8b5cf6;">Key Escrow:</strong> Backup keys for data recovery scenarios</li>
            </ul>
            
            <h4 style="color: #EC7063;">Common Cryptographic Applications</h4>
            <div style="background-color: #2D2D2D; padding: 15px; border-radius: 8px; border: 1px solid #444; margin: 10px 0;">
                <table style="width: 100%; color: #E0E0E0; border-collapse: collapse;">
                    <tr style="background-color: #1e1e1e;"><td style="padding: 8px; border-bottom: 1px solid #444; color: #EC7063; font-weight: bold;">Application</td><td style="padding: 8px; border-bottom: 1px solid #444;">Encryption Type</td><td style="padding: 8px; border-bottom: 1px solid #444;">Purpose</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">HTTPS/TLS</td><td style="padding: 8px; border-bottom: 1px solid #444;">Hybrid (RSA + AES)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Web security</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">IPsec VPN</td><td style="padding: 8px; border-bottom: 1px solid #444;">Hybrid (DH + AES)</td><td style="padding: 8px; border-bottom: 1px solid #444;">Network tunnels</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid #444;">SSH</td><td style="padding: 8px; border-bottom: 1px solid #444;">Asymmetric + Symmetric</td><td style="padding: 8px; border-bottom: 1px solid #444;">Secure remote access</td></tr>
                    <tr><td style="padding: 8px;">File Integrity</td><td style="padding: 8px;">Hashing (SHA-256)</td><td style="padding: 8px;">Change detection</td></tr>
                </table>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; border-top: 1px solid #444;">
                <h5 style="color: #00CFFF; margin-bottom: 5px;">CCNA Exam Focus:</h5>
                <ul style="margin-left: 20px; color: #B0B0B0;">
                    <li>Understand differences between symmetric and asymmetric encryption</li>
                    <li>Know common algorithms: AES, RSA, SHA-256</li>
                    <li>Understand the purpose and properties of hash functions</li>
                    <li>Recognize how hybrid cryptography combines both methods</li>
                    <li>Understand basic key management principles</li>
                </ul>
            </div>
        </div>
    `
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SECTION5_DETAILS = SECTION5_DETAILS;
}
