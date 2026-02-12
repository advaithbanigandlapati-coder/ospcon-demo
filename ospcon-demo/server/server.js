const express = require('express'); // server.js
const bcrypt = require('bcryptjs');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..')));

// Session configuration
app.use(session({
    secret: 'ospcon-demo-secret-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// In-memory user database (for demo - use real DB in production)
const users = {
    'admin': {
        username: 'admin',
        password: bcrypt.hashSync('admin123', 10),
        role: 'admin',
        name: 'Admin User'
    },
    'demo': {
        username: 'demo',
        password: bcrypt.hashSync('demo123', 10),
        role: 'user',
        name: 'Demo User'
    },
    'user': {
        username: 'user',
        password: bcrypt.hashSync('user123', 10),
        role: 'user',
        name: 'Regular User'
    }
};

// Login endpoint
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Username and password required' 
        });
    }
    
    const user = users[username.toLowerCase()];
    
    if (!user) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid credentials' 
        });
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid credentials' 
        });
    }
    
    // Create session
    req.session.user = {
        username: user.username,
        role: user.role,
        name: user.name
    };
    
    res.json({ 
        success: true, 
        user: {
            username: user.username,
            role: user.role,
            name: user.name
        }
    });
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ 
                success: false, 
                message: 'Logout failed' 
            });
        }
        res.json({ success: true, message: 'Logged out successfully' });
    });
});

// Check session endpoint
app.get('/api/session', (req, res) => {
    if (req.session.user) {
        res.json({ 
            success: true, 
            user: req.session.user 
        });
    } else {
        res.status(401).json({ 
            success: false, 
            message: 'Not authenticated' 
        });
    }
});

// AI Chat endpoint (simple responses for demo)
app.post('/api/chat', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ 
            success: false, 
            message: 'Not authenticated' 
        });
    }
    
    const { message } = req.body;
    
    // Simple AI responses (you can connect to real AI API here)
    const responses = {
        'hello': 'Hello! I\'m your OSPCON AI assistant. How can I help you today?',
        'hi': 'Hi there! I\'m here to help with your AI platform needs.',
        'help': 'I can help you with:\n- Managing AI agents\n- Monitoring workflows\n- Analyzing data\n- Troubleshooting issues\n\nWhat would you like to know?',
        'agents': 'You currently have 24 active AI agents running. Your RAG System and NL2SQL Builder are performing exceptionally well with 99%+ success rates.',
        'performance': 'Your platform is performing excellently:\n- 99.2% success rate\n- 247ms average response time\n- 847K requests processed\n- All systems operational',
        'default': 'I understand you\'re asking about that. As your AI assistant, I\'m here to help manage your OSPCON platform. Could you be more specific about what you need?'
    };
    
    const lowerMessage = message.toLowerCase();
    let response = responses.default;
    
    // Simple keyword matching
    for (const [key, value] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            response = value;
            break;
        }
    }
    
    res.json({ 
        success: true, 
        message: response,
        timestamp: new Date().toISOString()
    });
});

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════╗
║   OSPCON Platform Server Running! 🚀      ║
╠═══════════════════════════════════════════╣
║                                           ║
║   URL: http://localhost:${PORT}              ║
║                                           ║
║   Demo Credentials:                       ║
║   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ║
║   Admin: admin / admin123                 ║
║   User:  demo / demo123                   ║
║         user / user123                    ║
║                                           ║
╚═══════════════════════════════════════════╝
    `);
});
