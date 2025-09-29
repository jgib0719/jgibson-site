# CCNA Study Guide - Backend API & Deployment Tools

This folder contains the backend API and deployment tools for anonymous progress tracking in the CCNA Study Guide. The client-side functionality is integrated directly into the website structure.

## 📁 Contents

- `server.js` - Express.js API server for progress tracking
- `package.json` - Node.js dependencies and scripts  
- `scripts/init-database.js` - Database initialization script
- `README.md` - This documentation

## 🚀 Backend Deployment

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Initialize the database:**
   ```bash
   npm run init-db
   ```

3. **Start the server:**
   ```bash
   # Production
   npm start
   
   # Development (with auto-reload)
   npm run dev
   ```

4. **Verify installation:**
   ```bash
   curl http://localhost:3000/health
   ```

## 📊 API Endpoints

### Progress Management

#### Save Progress
```http
POST /api/progress/save
Content-Type: application/json

{
    "userId": "user_abc123...",
    "sectionNumber": 1,
    "topicTitle": "OSI Model",
    "completed": true
}
```

#### Load Progress
```http
GET /api/progress/{userId}
```

**Response:**
```json
{
    "1": {
        "OSI Model": true,
        "TCP/IP Protocol Suite": true
    },
    "2": {
        "Ethernet Standards": true
    }
}
```

#### Clear All Progress
```http
DELETE /api/progress/{userId}
```

### System Endpoints

#### Health Check
```http
GET /health
```

#### Anonymous Statistics
```http
GET /api/stats
```

## 🔒 Privacy & Security

### Anonymous User IDs
- Format: `user_` + UUID v4
- No personal information collected
- Generated client-side using crypto-secure random

### Data Retention
- **No expiration** - Progress stored permanently
- Users can delete their own data via API
- Only anonymous completion data stored

### Security Features
- Rate limiting (100 requests/15 minutes per IP)
- Input validation and sanitization
- CORS protection
- Security headers via Helmet
- SQL injection prevention

## 🗄️ Database Schema

### Progress Table
```sql
CREATE TABLE progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    section_number INTEGER CHECK(section_number BETWEEN 1 AND 6),
    topic_title TEXT NOT NULL,
    completed BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, section_number, topic_title)
);
```

### API Stats Table
```sql
CREATE TABLE api_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    endpoint TEXT NOT NULL,
    method TEXT NOT NULL,
    status_code INTEGER NOT NULL,
    response_time_ms INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Configuration

### Environment Variables

```bash
# Server configuration
PORT=3000                          # Server port (default: 3000)
NODE_ENV=production               # Environment mode

# Database
DB_PATH=./data/progress.db        # SQLite database path

# Security
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

### Development Setup

```bash
# Install development dependencies
npm install

# Initialize database with test data
NODE_ENV=development npm run init-db

# Start development server with auto-reload
npm run dev
```

## 📈 Monitoring

### API Statistics
The system automatically tracks:
- Request counts by endpoint
- Response times
- Status codes
- Error rates

Access via: `GET /api/stats`

### Logs
Server logs include:
- Request timestamps and IPs
- Database operations
- Error messages
- Performance metrics

## 🛠️ Client-Side Integration

The client-side progress tracking is automatically integrated into the website. The following files are already included in `/public_html/guide/js/`:

- `anonymous-progress-tracker.js` - Anonymous progress tracking with offline support
- `hybrid-progress-tracker.js` - Hybrid localStorage + database progress tracking  

**No additional client setup required** - the website will automatically use hybrid progress tracking when the backend API is available, and gracefully fall back to localStorage-only mode when offline.

### Automatic Features
- UUID v4 anonymous user identification
- Offline sync queue with localStorage persistence  
- Automatic server/local progress merging
- Periodic sync every 5 minutes
- Retry logic with exponential backoff

## 🔍 Troubleshooting

### Common Issues

1. **Database locked error:**
   ```bash
   # Stop the server and reinitialize
   npm run init-db
   ```

2. **CORS errors:**
   - Check `ALLOWED_ORIGINS` environment variable
   - Verify frontend URL matches allowed origins

3. **Rate limiting:**
   - Default: 100 requests per 15 minutes per IP
   - Adjust in `server.js` if needed for development

### Database Management

```bash
# Backup database
cp data/progress.db data/progress.backup.db

# Reset database
npm run init-db

# Check database size
ls -lh data/progress.db
```

## 📝 API Response Examples

### Successful Save
```json
{
    "success": true,
    "id": 123,
    "message": "Progress saved for topic: OSI Model"
}
```

### Error Response
```json
{
    "error": "Invalid section number. Must be integer between 1 and 6"
}
```

### Statistics Response
```json
{
    "timestamp": "2025-09-29T10:30:00.000Z",
    "sections": [
        {
            "section_number": 1,
            "unique_users": 45,
            "total_completions": 234,
            "completion_rate": 0.85
        }
    ]
}
```

## 🎯 Performance Notes

- SQLite handles ~100,000 concurrent reads efficiently
- Indexed queries for optimal performance
- Rate limiting prevents abuse
- Automatic connection pooling

## 📜 License

MIT License - See LICENSE file for details.