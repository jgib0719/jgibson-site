-- CCNA Study Platform Database Schema
-- Based on Official Cisco CCNA 200-301 Exam Topics Structure
-- Created: September 19, 2025

-- Core sections table (e.g., 1.0 Network Fundamentals)
CREATE TABLE sections (
    id INTEGER PRIMARY KEY,
    section_number TEXT NOT NULL UNIQUE, -- "1.0", "2.0", "3.0", etc.
    title TEXT NOT NULL,                 -- "Network Fundamentals", "Network Access", etc.
    description TEXT,
    exam_weight_percent INTEGER,         -- 20, 25, 15, etc.
    topic_count INTEGER DEFAULT 0,
    order_index INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subsections for organization (e.g., 1.1, 1.2, 1.3)
CREATE TABLE subsections (
    id INTEGER PRIMARY KEY,
    section_id INTEGER NOT NULL,
    subsection_number TEXT NOT NULL UNIQUE, -- "1.1", "1.2", "1.3", etc.
    title TEXT NOT NULL,                     -- "Explain the role and function of network components"
    description TEXT,
    topic_count INTEGER DEFAULT 0,
    order_index INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (section_id) REFERENCES sections(id)
);

-- Individual topics with Split Horizon content structure
CREATE TABLE topics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subsection_id INTEGER NOT NULL,
    cisco_topic_code TEXT,               -- "1.1.a", "1.1.b", etc.
    topic_key TEXT UNIQUE NOT NULL,      -- Used for progress tracking (existing system)
    title TEXT NOT NULL,                 -- "Routers", "Layer 2 and Layer 3 switches"
    
    -- Split Horizon content sections
    core_principles TEXT,                -- Yellow headers (Functions/Features/Principles)
    examples TEXT,                       -- Green headers (Examples/Applications/Use Cases)
    configuration TEXT,                  -- Yellow headers with code blocks/commands
    special_considerations TEXT,         -- Blue headers (Important notes/considerations)
    exam_tips TEXT,                      -- Blue callout boxes with icons (CCNA Focus)
    
    -- Additional content that doesn't fit standard sections
    additional_content TEXT,             -- Overflow content, diagrams, etc.
    
    -- Metadata
    difficulty_level TEXT CHECK(difficulty_level IN ('beginner', 'intermediate', 'advanced')) DEFAULT 'intermediate',
    cisco_exam_focus BOOLEAN DEFAULT TRUE,  -- All topics are exam-focused by default
    tags TEXT,                           -- JSON array for search/filtering
    order_index INTEGER,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (subsection_id) REFERENCES subsections(id)
);

-- Full-text search support
CREATE VIRTUAL TABLE topics_search USING fts5(
    title, 
    core_principles,
    examples,
    configuration,
    special_considerations,
    exam_tips,
    additional_content,
    tags,
    content=topics
);

-- Insert Section 1.0 Network Fundamentals
INSERT INTO sections (section_number, title, description, exam_weight_percent, order_index) VALUES 
('1.0', 'Network Fundamentals', 'Core networking concepts and components', 20, 1);

-- Insert Section 1 subsections
INSERT INTO subsections (section_id, subsection_number, title, order_index) VALUES 
(1, '1.1', 'Explain the role and function of network components', 1),
(1, '1.2', 'Describe characteristics of network topology architectures', 2),
(1, '1.3', 'Compare physical interface and cabling types', 3),
(1, '1.4', 'Identify interface and cable issues', 4),
(1, '1.5', 'Compare TCP to UDP', 5),
(1, '1.6', 'Configure and verify IPv4 addressing and subnetting', 6),
(1, '1.7', 'Describe the need for private IPv4 addressing', 7),
(1, '1.8', 'Configure and verify IPv6 addressing and prefix', 8),
(1, '1.9', 'Describe IPv6 address types', 9),
(1, '1.10', 'Verify IP parameters for Client OS', 10),
(1, '1.11', 'Describe wireless principles', 11),
(1, '1.12', 'Explain virtualization fundamentals', 12),
(1, '1.13', 'Describe switching concepts', 13);

-- Create indexes for performance
CREATE INDEX idx_topics_subsection ON topics(subsection_id);
CREATE INDEX idx_topics_cisco_code ON topics(cisco_topic_code);
CREATE INDEX idx_topics_key ON topics(topic_key);
CREATE INDEX idx_subsections_section ON subsections(section_id);

-- Triggers to update topic counts
CREATE TRIGGER update_subsection_topic_count 
AFTER INSERT ON topics 
BEGIN
    UPDATE subsections 
    SET topic_count = (SELECT COUNT(*) FROM topics WHERE subsection_id = NEW.subsection_id)
    WHERE id = NEW.subsection_id;
    
    UPDATE sections 
    SET topic_count = (SELECT COUNT(*) FROM topics t JOIN subsections s ON t.subsection_id = s.id WHERE s.section_id = (SELECT section_id FROM subsections WHERE id = NEW.subsection_id))
    WHERE id = (SELECT section_id FROM subsections WHERE id = NEW.subsection_id);
END;

CREATE TRIGGER update_topic_timestamp
AFTER UPDATE ON topics
BEGIN
    UPDATE topics SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;