-- CCNA Study Platform Database Schema
-- Based on Official Cisco CCNA 200-301 Exam Topics Structure
-- Created: September 19, 2025
-- SQLite Version (without FTS5)

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
    title TEXT NOT NULL,                    -- "Network Components", "Topology Architectures", etc.
    description TEXT,
    topic_count INTEGER DEFAULT 0,
    order_index INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (section_id) REFERENCES sections(id)
);

-- Individual topics (the actual study content)
CREATE TABLE topics (
    id INTEGER PRIMARY KEY,
    subsection_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,          -- URL-friendly identifier
    description TEXT,
    
    -- Split Horizon content sections
    principles_content TEXT,            -- Core concepts and theory
    examples_content TEXT,             -- Real-world examples and scenarios  
    configuration_content TEXT,        -- Commands, configs, step-by-step guides
    tips_content TEXT,                 -- Exam tips, best practices, gotchas
    
    -- Visual and metadata
    visual_diagram TEXT,               -- SVG or image reference
    difficulty_level TEXT DEFAULT 'intermediate', -- beginner, intermediate, advanced
    estimated_time_minutes INTEGER DEFAULT 15,
    
    -- Organization
    order_index INTEGER,
    tags TEXT,                         -- Comma-separated tags for filtering
    
    -- Tracking
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (subsection_id) REFERENCES subsections(id)
);

-- User progress tracking
CREATE TABLE user_progress (
    id INTEGER PRIMARY KEY,
    user_id TEXT NOT NULL,             -- Browser fingerprint or user identifier
    topic_id INTEGER NOT NULL,
    
    -- Progress metrics
    completed BOOLEAN DEFAULT FALSE,
    mastery_level INTEGER DEFAULT 0,   -- 0-100 percentage
    time_spent_minutes INTEGER DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    last_reviewed TIMESTAMP,
    
    -- Study session data
    notes TEXT,                        -- User's personal notes
    bookmarked BOOLEAN DEFAULT FALSE,
    difficulty_rating INTEGER,        -- User's subjective difficulty (1-5)
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (topic_id) REFERENCES topics(id),
    UNIQUE(user_id, topic_id)
);

-- Quiz questions and answers
CREATE TABLE quiz_questions (
    id INTEGER PRIMARY KEY,
    topic_id INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    question_type TEXT DEFAULT 'multiple_choice', -- multiple_choice, true_false, fill_blank
    
    -- Options for multiple choice (JSON array)
    options TEXT,                      -- ["Option A", "Option B", "Option C", "Option D"]
    correct_answer TEXT NOT NULL,     -- "A" or ["A", "C"] for multiple correct
    explanation TEXT,
    
    -- Metadata
    difficulty_level TEXT DEFAULT 'intermediate',
    estimated_time_seconds INTEGER DEFAULT 60,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (topic_id) REFERENCES topics(id)
);

-- Quiz attempts and results
CREATE TABLE quiz_attempts (
    id INTEGER PRIMARY KEY,
    user_id TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    user_answer TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    time_taken_seconds INTEGER,
    attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (question_id) REFERENCES quiz_questions(id)
);

-- Study sessions for analytics
CREATE TABLE study_sessions (
    id INTEGER PRIMARY KEY,
    user_id TEXT NOT NULL,
    session_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session_end TIMESTAMP,
    topics_studied INTEGER DEFAULT 0,
    total_time_minutes INTEGER DEFAULT 0,
    device_type TEXT,                  -- desktop, mobile, tablet
    browser TEXT
);

-- Indexes for performance
CREATE INDEX idx_sections_number ON sections(section_number);
CREATE INDEX idx_subsections_number ON subsections(subsection_number);
CREATE INDEX idx_subsections_section ON subsections(section_id);
CREATE INDEX idx_topics_subsection ON topics(subsection_id);
CREATE INDEX idx_topics_slug ON topics(slug);
CREATE INDEX idx_progress_user_topic ON user_progress(user_id, topic_id);
CREATE INDEX idx_progress_topic ON user_progress(topic_id);
CREATE INDEX idx_quiz_topic ON quiz_questions(topic_id);
CREATE INDEX idx_attempts_user ON quiz_attempts(user_id);
CREATE INDEX idx_attempts_question ON quiz_attempts(question_id);

-- Initial data: Official Cisco CCNA 200-301 Section Structure
INSERT INTO sections (section_number, title, description, exam_weight_percent, order_index) VALUES
('1.0', 'Network Fundamentals', 'Core networking concepts, components, topologies, and protocols', 20, 1),
('2.0', 'Network Access', 'VLANs, switching, wireless architectures, and physical connections', 25, 2),
('3.0', 'IP Connectivity', 'Routing concepts, OSPF, first-hop redundancy protocols', 25, 3),
('4.0', 'IP Services', 'DHCP, DNS, NAT, NTP, QoS, and network services', 15, 4),
('5.0', 'Security Fundamentals', 'Device access control, security concepts, wireless security', 15, 5),
('6.0', 'Automation and Programmability', 'Network automation, APIs, configuration management', 10, 6);