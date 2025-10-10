# CCNA Quiz Engine - jgibson.site

## Quiz System Overview

The CCNA Study Hub features a comprehensive quiz engine supporting both Cisco official and Wiley question sets. The quiz system provides adaptive testing with progress tracking, image support, and detailed explanations.

### Quiz Architecture

#### Core Components

- **`ccna-quiz-engine.js`** - Main quiz functionality and navigation
- **`questions.json`** - Cisco official questions database
- **`wiley_questions.json`** - Wiley practice questions database
- **`images/questions/`** - Visual question assets (diagrams, topologies)

### Quiz Engine Functions

#### Quiz Navigation

- `loadQuizData()` - Fetch questions from JSON endpoints
- `showQuizSetup(category)` - Display size selection interface  
- `startQuiz(size)` - Initialize quiz with question count
- `loadQuestion(index)` - Display current question
- `submitAnswer()` - Process answer selection
- `showResults()` - Display final score and statistics

#### Progress Management  

- `saveQuizProgress()` - Auto-save current state
- `loadQuizProgress()` - Resume saved quiz
- `updateQuizHistory()` - Track completion statistics
- `getBestScore(category, size)` - Retrieve high scores

### Question Data Structure

#### JSON Schema

```json
{
  "number": 1,
  "question": "Question text with HTML formatting support", 
  "options": [
    "A) First option",
    "B) Second option", 
    "C) Third option",
    "D) Fourth option"
  ],
  "answer": ["A"],
  "explanation": "Detailed explanation with technical reasoning",
  "image": "q1.png"
}
```

#### Multi-Answer Questions

```json
{
  "number": 25,
  "question": "Select all valid VLAN ranges:",
  "options": [
    "A) 1-1005",
    "B) 1006-4094", 
    "C) 4095-8191",
    "D) 1-4094"
  ],
  "answer": ["A", "B"],
  "explanation": "Standard VLANs (1-1005) and Extended VLANs (1006-4094) are valid ranges"
}
```

### Quiz Categories

#### Cisco Official Questions

- **Source:** `public_html/quiz/questions.json`
- **Focus:** Exam-aligned content following CCNA 200-301 objectives
- **Format:** Single and multi-select questions
- **Images:** Network diagrams, configuration screenshots

#### Wiley Practice Questions  

- **Source:** `public_html/quiz/wiley_questions.json`
- **Focus:** Supplemental practice with varied difficulty
- **Format:** Comprehensive explanations and detailed rationales
- **Coverage:** Extended topics beyond core exam objectives

### Quiz Workflow

#### Initial Page Load (`index.html`)

1. **Quiz Engine Initialization:**
   - Load `ccna-quiz-engine.js`
   - Configure quiz entry buttons
   - Set up category selection (Cisco/Wiley)
   - Initialize progress tracking integration

2. **Question Loading Sequence:**
   - Fetch JSON question data
   - Randomize question order
   - Validate image assets
   - Cache questions for offline access

#### Quiz Session Management

1. **Setup Phase:**
   - Category selection (Cisco vs Wiley)
   - Quiz size selection (10, 25, 50, 100 questions)
   - Difficulty filtering (if applicable)
   - Resume previous session option

2. **Active Quiz Phase:**
   - Question display with proper formatting
   - Image loading and display
   - Answer selection validation
   - Progress indicator updates
   - Auto-save functionality

3. **Results Phase:**
   - Score calculation and display
   - Detailed answer review
   - Performance analytics
   - Retake options

### Quiz Content Management

#### Adding New Questions

1. **Edit Question Files:**

   ```bash
   # Cisco questions
   public_html/quiz/questions.json
   
   # Wiley questions  
   public_html/quiz/wiley_questions.json
   ```

2. **Add Question Images:**

   ```bash
   public_html/quiz/images/questions/
   ├── q117.png
   ├── q119.jpeg
   ├── q120.png
   └── [question_number].[ext]
   ```

3. **Question Validation:**
   - Ensure proper JSON syntax
   - Validate answer arrays match option letters
   - Verify image file paths exist
   - Test question rendering in quiz engine

#### Image Asset Guidelines

**Supported Formats:**

- PNG (preferred for diagrams)
- JPEG (for photographs)
- GIF (for animated concepts)

**Naming Convention:**

- `q[number].[ext]` - Question number + extension
- `q97_inter-vlan_routing.png` - Descriptive names for complex topics

**Image Optimization:**

- Compress images for web delivery
- Maintain readability at modal display size
- Use consistent aspect ratios
- Ensure accessibility with alt text

### Quiz API Integration

#### Progress Endpoints

```javascript
// Quiz completion tracking
POST /api/v1/quiz/completion
{
  "category": "cisco|wiley",
  "score": 85,
  "total_questions": 50,
  "time_taken": 1800,
  "completed_at": "2024-03-15T10:30:00Z"
}

// Quiz statistics
GET /api/v1/quiz/stats
Response: {
  "total_attempts": 15,
  "best_score": 92,
  "average_score": 78,
  "cisco_stats": {...},
  "wiley_stats": {...}
}
```

#### Database Schema

```sql
CREATE TABLE quiz_attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    category TEXT NOT NULL,           -- 'cisco' or 'wiley'
    score INTEGER NOT NULL,           -- Percentage score
    total_questions INTEGER NOT NULL,
    correct_answers INTEGER NOT NULL,
    time_taken INTEGER,               -- Seconds
    completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    question_details TEXT             -- JSON array of Q&A details
);

CREATE TABLE quiz_questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    question_number INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    options TEXT NOT NULL,            -- JSON array
    correct_answers TEXT NOT NULL,    -- JSON array
    explanation TEXT,
    image_path TEXT,
    difficulty_level INTEGER DEFAULT 1,
    topic_tags TEXT,                  -- JSON array
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(category, question_number)
);
```

### Quiz Engine Configuration

#### Global Settings

```javascript
// Quiz configuration in ccna-study-guide-config.js
const QUIZ_CONFIG = {
  categories: {
    cisco: {
      name: "Cisco Official",
      source: "/quiz/questions.json",
      maxQuestions: 100
    },
    wiley: {
      name: "Wiley Practice", 
      source: "/quiz/wiley_questions.json",
      maxQuestions: 200
    }
  },
  sizes: [10, 25, 50, 100],
  timeLimit: null,  // No time limit by default
  randomize: true,
  showExplanations: true
};
```

#### Quiz State Management

```javascript
// Quiz session state
const quizState = {
  category: "cisco",
  size: 50,
  currentQuestion: 0,
  questions: [],
  answers: [],
  startTime: Date.now(),
  score: 0,
  completed: false
};
```

### Error Handling and Validation

#### Question Data Validation

```javascript
function validateQuestion(question) {
  const required = ['number', 'question', 'options', 'answer'];
  const missing = required.filter(field => !question[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  // Validate answer format
  if (!Array.isArray(question.answer)) {
    throw new Error('Answer must be an array');
  }
  
  // Validate options format
  if (!Array.isArray(question.options) || question.options.length < 2) {
    throw new Error('Must have at least 2 options');
  }
}
```

#### Image Loading Error Handling

```javascript
function loadQuestionImage(imagePath) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => {
      console.warn(`Failed to load image: ${imagePath}`);
      resolve(null); // Continue without image
    };
    img.src = `/quiz/images/questions/${imagePath}`;
  });
}
```

### Quiz Analytics and Reporting

#### Performance Metrics

- **Completion Rate:** Percentage of started quizzes completed
- **Average Score:** Mean score across all attempts
- **Time Analysis:** Average time per question
- **Topic Performance:** Scores by CCNA section/topic
- **Question Difficulty:** Success rates per question

#### Export Capabilities

```javascript
// Export quiz results
function exportQuizResults(format = 'json') {
  const results = {
    user_id: getCurrentUserId(),
    attempts: getAllAttempts(),
    summary: getPerformanceSummary(),
    exported_at: new Date().toISOString()
  };
  
  if (format === 'csv') {
    return convertToCSV(results);
  }
  
  return JSON.stringify(results, null, 2);
}
```

### Quiz Accessibility Features

#### Keyboard Navigation

- **Tab navigation** through quiz options
- **Enter/Space** to select answers
- **Arrow keys** for option navigation
- **Escape** to exit quiz modal

#### Screen Reader Support

- **ARIA labels** for all interactive elements
- **Question numbering** announced properly
- **Score announcements** after completion
- **Image alt text** for all visual questions

#### Visual Accessibility

- **High contrast** text and backgrounds
- **Scalable fonts** for readability
- **Focus indicators** for keyboard users
- **Color-blind friendly** result indicators

## Development Standards

### Code Quality Requirements

- **ES6+ JavaScript** with modern syntax
- **Error handling** for all async operations
- **Input validation** for all user interactions
- **Performance optimization** for large question sets
- **Cross-browser compatibility** testing

### Testing Requirements

- **Unit tests** for core quiz functions
- **Integration tests** for API endpoints
- **Manual testing** across device types
- **Accessibility testing** with screen readers
- **Performance testing** with large datasets

### Documentation Requirements

- **Function documentation** with JSDoc format
- **API endpoint documentation** with examples
- **Question format documentation** with schemas
- **Deployment guide** for quiz updates
- **Troubleshooting guide** for common issues
