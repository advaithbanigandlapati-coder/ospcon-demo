// ===== DASHBOARD FUNCTIONALITY Dashboard.js=====

function showDashboard() {
    const mainContent = document.getElementById('main-content');
    const dashboard = document.getElementById('dashboard');
    const nav = document.getElementById('nav');
    
    mainContent.style.display = 'none';
    nav.style.display = 'none';
    dashboard.style.display = 'block';
    
    loadDashboard();
}

function hideDashboard() {
    const mainContent = document.getElementById('main-content');
    const dashboard = document.getElementById('dashboard');
    const nav = document.getElementById('nav');
    
    mainContent.style.display = 'block';
    nav.style.display = 'block';
    dashboard.style.display = 'none';
}

function logout() {
    localStorage.removeItem('ospcon_user');
    hideDashboard();
}

function loadDashboard() {
    const user = JSON.parse(localStorage.getItem('ospcon_user')) || { username: 'Demo User' };
    
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = `
        <div class="dashboard-container">
            <!-- Sidebar -->
            <div class="dashboard-sidebar">
                <div class="dashboard-logo">
                    <div class="logo-circle">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" fill="url(#logoGradient3)"/>
                            <path d="M50 20 L35 40 L50 35 L65 40 Z" fill="white"/>
                            <path d="M50 35 L50 80" stroke="white" stroke-width="3"/>
                            <defs>
                                <linearGradient id="logoGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#607ea2"/>
                                    <stop offset="100%" style="stop-color:#8197ac"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="dashboard-logo-text">
                        <span class="logo-title">OSPCON</span>
                        <span class="logo-subtitle">AI Platform</span>
                    </div>
                </div>
                
                <div class="sidebar-nav">
                    <a href="#" class="sidebar-link active" data-tab="overview">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                        </svg>
                        <span>Overview</span>
                    </a>
                    <a href="#" class="sidebar-link" data-tab="chat">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        <span>AI Chat</span>
                        <span style="margin-left: auto; background: linear-gradient(135deg, #10b981, #3b82f6); padding: 2px 8px; border-radius: 10px; font-size: 0.7rem;">NEW</span>
                    </a>
                    <a href="#" class="sidebar-link" data-tab="agents">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                        <span>AI Agents</span>
                    </a>
                    <a href="#" class="sidebar-link" data-tab="analytics">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="12" y1="20" x2="12" y2="10"/>
                            <line x1="18" y1="20" x2="18" y2="4"/>
                            <line x1="6" y1="20" x2="6" y2="16"/>
                        </svg>
                        <span>Analytics</span>
                    </a>
                    <a href="#" class="sidebar-link" data-tab="workflows">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                            <path d="M6 9v6M18 15v-6a6 6 0 0 0-6-6H9"/>
                        </svg>
                        <span>Workflows</span>
                    </a>
                    <a href="#" class="sidebar-link" data-tab="data">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <ellipse cx="12" cy="5" rx="9" ry="3"/>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                        </svg>
                        <span>Data Sources</span>
                    </a>
                    <a href="#" class="sidebar-link" data-tab="settings">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 1v6m0 6v6M1 12h6m6 0h6m-2.636-5.364l-4.243 4.243m4.243 0l-4.243 4.243"/>
                        </svg>
                        <span>Settings</span>
                    </a>
                </div>
                
                <div class="sidebar-footer">
                    <div class="user-profile">
                        <div class="user-avatar">${user.username.charAt(0).toUpperCase()}</div>
                        <div class="user-info">
                            <div class="user-name">${user.username}</div>
                            <div class="user-role">Administrator</div>
                        </div>
                    </div>
                    <button class="logout-btn" onclick="logout()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                            <polyline points="16 17 21 12 16 7"/>
                            <line x1="21" y1="12" x2="9" y2="12"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- Main Dashboard Content -->
            <div class="dashboard-main">
                <div class="dashboard-header">
                    <div class="header-left">
                        <h1 class="dashboard-title">Dashboard</h1>
                        <p class="dashboard-subtitle">Welcome back, ${user.username}</p>
                    </div>
                    <div class="header-right">
                        <div class="header-date">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                </div>
                
                <div id="dashboard-content" class="dashboard-content">
                    <!-- Content will be loaded here -->
                </div>
            </div>
        </div>
    `;
    
    // Add dashboard styles
    addDashboardStyles();
    
    // Initialize sidebar navigation
    initSidebarNav();
    
    // Load default tab
    loadTab('overview');
}

function addDashboardStyles() {
    if (document.getElementById('dashboard-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'dashboard-styles';
    style.textContent = `
        .dashboard-container {
            display: flex;
            height: 100vh;
            background: #0a0e1a;
        }
        
        .dashboard-sidebar {
            width: 280px;
            background: rgba(26, 30, 46, 0.8);
            backdrop-filter: blur(20px);
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            flex-direction: column;
            padding: 2rem 0;
        }
        
        .dashboard-logo {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0 2rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .dashboard-logo .logo-circle {
            width: 45px;
            height: 45px;
        }
        
        .dashboard-logo-text {
            display: flex;
            flex-direction: column;
        }
        
        .logo-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #607ea2 0%, #8197ac 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .logo-subtitle {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
        }
        
        .sidebar-nav {
            flex: 1;
            padding: 2rem 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .sidebar-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .sidebar-link svg {
            width: 20px;
            height: 20px;
            stroke-width: 2px;
        }
        
        .sidebar-link:hover {
            color: rgba(255, 255, 255, 0.9);
            background: rgba(255, 255, 255, 0.05);
        }
        
        .sidebar-link.active {
            color: #ffffff;
            background: linear-gradient(135deg, #607ea2 0%, #8197ac 100%);
            box-shadow: 0 4px 15px rgba(96, 126, 162, 0.3);
        }
        
        .sidebar-footer {
            padding: 1.5rem 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .user-profile {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #607ea2 0%, #8197ac 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: white;
        }
        
        .user-info {
            display: flex;
            flex-direction: column;
        }
        
        .user-name {
            font-weight: 600;
            color: white;
            font-size: 0.95rem;
        }
        
        .user-role {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.5);
        }
        
        .logout-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.6);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .logout-btn svg {
            width: 20px;
            height: 20px;
        }
        
        .logout-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }
        
        .dashboard-main {
            flex: 1;
            overflow-y: auto;
            padding: 2rem 3rem;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 3rem;
        }
        
        .dashboard-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, #ffffff 0%, #8197ac 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .dashboard-subtitle {
            color: rgba(255, 255, 255, 0.6);
            font-size: 1.1rem;
        }
        
        .header-date {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.95rem;
        }
        
        .dashboard-content {
            animation: fadeIn 0.5s ease-out;
        }
        
        .stat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 1.5rem;
            transition: all 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(96, 126, 162, 0.3);
        }
        
        .stat-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 1rem;
        }
        
        .stat-label {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
        }
        
        .stat-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .stat-icon svg {
            width: 20px;
            height: 20px;
            stroke-width: 2px;
        }
        
        .stat-value {
            font-family: 'Montserrat', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .stat-change {
            font-size: 0.85rem;
            font-weight: 600;
        }
        
        .stat-change.positive {
            color: #10b981;
        }
        
        .stat-change.negative {
            color: #ef4444;
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .content-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 1.5rem;
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        
        .card-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.3rem;
            font-weight: 700;
        }
        
        .card-action {
            color: #8197ac;
            font-size: 0.9rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .card-action:hover {
            color: #ffffff;
        }
        
        .table-container {
            overflow-x: auto;
        }
        
        .data-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .data-table th {
            text-align: left;
            padding: 1rem;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .data-table td {
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .data-table tr:hover td {
            background: rgba(255, 255, 255, 0.02);
        }
        
        .status-badge {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }
        
        .status-active {
            background: rgba(16, 185, 129, 0.1);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .status-pending {
            background: rgba(251, 191, 36, 0.1);
            color: #fbbf24;
            border: 1px solid rgba(251, 191, 36, 0.2);
        }
        
        .status-inactive {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .agent-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .agent-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            transition: all 0.3s ease;
        }
        
        .agent-item:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(96, 126, 162, 0.3);
        }
        
        .agent-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .agent-icon {
            width: 45px;
            height: 45px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
        }
        
        .agent-details h4 {
            font-weight: 600;
            margin-bottom: 0.2rem;
        }
        
        .agent-details p {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
        }
        
        .chart-placeholder {
            width: 100%;
            height: 300px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.3);
        }
    `;
    document.head.appendChild(style);
}

function initSidebarNav() {
    const links = document.querySelectorAll('.sidebar-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.getAttribute('data-tab');
            
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            loadTab(tab);
        });
    });
}

function loadTab(tabName) {
    const content = document.getElementById('dashboard-content');
    
    const tabs = {
        overview: getOverviewContent(),
        chat: getChatContent(),
        agents: getAgentsContent(),
        analytics: getAnalyticsContent(),
        workflows: getWorkflowsContent(),
        data: getDataSourcesContent(),
        settings: getSettingsContent()
    };
    
    content.innerHTML = tabs[tabName] || tabs.overview;
}

function getOverviewContent() {
    return `
        <div class="stat-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-label">Active Agents</div>
                    <div class="stat-icon" style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                    </div>
                </div>
                <div class="stat-value">24</div>
                <div class="stat-change positive">↑ 12% from last month</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-label">Total Requests</div>
                    <div class="stat-icon" style="background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                        </svg>
                    </div>
                </div>
                <div class="stat-value">847K</div>
                <div class="stat-change positive">↑ 23% from last month</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-label">Success Rate</div>
                    <div class="stat-icon" style="background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    </div>
                </div>
                <div class="stat-value">99.2%</div>
                <div class="stat-change positive">↑ 1.2% from last month</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-label">Avg Response Time</div>
                    <div class="stat-icon" style="background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white">
                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                    </div>
                </div>
                <div class="stat-value">247ms</div>
                <div class="stat-change positive">↓ 15% from last month</div>
            </div>
        </div>
        
        <div class="content-grid">
            <div class="content-card">
                <div class="card-header">
                    <h3 class="card-title">Recent Activity</h3>
                    <span class="card-action">View All →</span>
                </div>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Agent</th>
                                <th>Action</th>
                                <th>Status</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RAG System</td>
                                <td>Document processed</td>
                                <td><span class="status-badge status-active">Success</span></td>
                                <td>2 min ago</td>
                            </tr>
                            <tr>
                                <td>NL2SQL Builder</td>
                                <td>Query executed</td>
                                <td><span class="status-badge status-active">Success</span></td>
                                <td>15 min ago</td>
                            </tr>
                            <tr>
                                <td>Workflow Automator</td>
                                <td>Workflow triggered</td>
                                <td><span class="status-badge status-active">Success</span></td>
                                <td>1 hour ago</td>
                            </tr>
                            <tr>
                                <td>Data Processor</td>
                                <td>Batch job completed</td>
                                <td><span class="status-badge status-active">Success</span></td>
                                <td>3 hours ago</td>
                            </tr>
                            <tr>
                                <td>Analytics Engine</td>
                                <td>Report generated</td>
                                <td><span class="status-badge status-pending">Processing</span></td>
                                <td>5 hours ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="content-card">
                <div class="card-header">
                    <h3 class="card-title">System Health</h3>
                </div>
                <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                    <div>
                        <div style="display: flex; justify-between; margin-bottom: 0.5rem;">
                            <span style="color: rgba(255, 255, 255, 0.7);">CPU Usage</span>
                            <span style="font-weight: 600;">42%</span>
                        </div>
                        <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; overflow: hidden;">
                            <div style="width: 42%; height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-between; margin-bottom: 0.5rem;">
                            <span style="color: rgba(255, 255, 255, 0.7);">Memory</span>
                            <span style="font-weight: 600;">68%</span>
                        </div>
                        <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; overflow: hidden;">
                            <div style="width: 68%; height: 100%; background: linear-gradient(90deg, #10b981, #3b82f6);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-between; margin-bottom: 0.5rem;">
                            <span style="color: rgba(255, 255, 255, 0.7);">Storage</span>
                            <span style="font-weight: 600;">34%</span>
                        </div>
                        <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; overflow: hidden;">
                            <div style="width: 34%; height: 100%; background: linear-gradient(90deg, #8b5cf6, #ec4899);"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-between; margin-bottom: 0.5rem;">
                            <span style="color: rgba(255, 255, 255, 0.7);">Network</span>
                            <span style="font-weight: 600;">21%</span>
                        </div>
                        <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; overflow: hidden;">
                            <div style="width: 21%; height: 100%; background: linear-gradient(90deg, #f59e0b, #ef4444);"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">Performance Trends</h3>
                <span class="card-action">Last 30 Days</span>
            </div>
            <div class="chart-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width: 48px; height: 48px; opacity: 0.3;">
                    <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
                <span style="margin-left: 1rem;">Chart visualization placeholder</span>
            </div>
        </div>
    `;
}

function getChatContent() {
    setTimeout(() => {
        initializeChat();
    }, 100);
    
    return `
        <div class="content-card" style="height: calc(100vh - 200px); display: flex; flex-direction: column;">
            <div class="card-header" style="flex-shrink: 0;">
                <h3 class="card-title">AI Assistant</h3>
                <span class="status-badge status-active">Online</span>
            </div>
            
            <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                <div class="chat-message ai-message">
                    <div class="message-avatar">🤖</div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">OSPCON AI</span>
                            <span class="message-time">Just now</span>
                        </div>
                        <div class="message-text">
                            Hello! I'm your OSPCON AI assistant. I can help you with:
                            <br>• Managing AI agents and workflows
                            <br>• Monitoring system performance
                            <br>• Analyzing data and metrics
                            <br>• Troubleshooting issues
                            <br><br>How can I assist you today?
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="flex-shrink: 0; padding: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <form id="chat-form" style="display: flex; gap: 1rem;">
                    <input 
                        type="text" 
                        id="chat-input" 
                        placeholder="Type your message..." 
                        style="flex: 1; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; font-size: 1rem;"
                        autocomplete="off"
                    >
                    <button type="submit" class="btn btn-primary" style="padding: 1rem 2rem;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width: 20px; height: 20px;">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Send
                    </button>
                </form>
                <div style="margin-top: 0.75rem; font-size: 0.85rem; color: rgba(255,255,255,0.5);">
                    💡 Try asking: "What's my system performance?" or "Show me agent status"
                </div>
            </div>
        </div>
        
        <style>
            .chat-message {
                display: flex;
                gap: 1rem;
                animation: slideIn 0.3s ease-out;
            }
            
            .chat-message.user-message {
                flex-direction: row-reverse;
            }
            
            .message-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: linear-gradient(135deg, #607ea2, #8197ac);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.3rem;
                flex-shrink: 0;
            }
            
            .user-message .message-avatar {
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            }
            
            .message-content {
                flex: 1;
                max-width: 80%;
            }
            
            .user-message .message-content {
                text-align: right;
            }
            
            .message-header {
                display: flex;
                gap: 1rem;
                margin-bottom: 0.5rem;
                font-size: 0.85rem;
            }
            
            .user-message .message-header {
                flex-direction: row-reverse;
            }
            
            .message-sender {
                font-weight: 600;
                color: #8197ac;
            }
            
            .message-time {
                color: rgba(255,255,255,0.4);
            }
            
            .message-text {
                padding: 1rem 1.5rem;
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 12px;
                line-height: 1.6;
            }
            
            .user-message .message-text {
                background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
                border-color: rgba(96, 126, 162, 0.3);
            }
            
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            #chat-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            #chat-messages::-webkit-scrollbar-thumb {
                background: rgba(96, 126, 162, 0.5);
                border-radius: 3px;
            }
        </style>
    `;
}

function initializeChat() {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatForm) return;
    
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addChatMessage(message, 'user');
        chatInput.value = '';
        
        // Show typing indicator
        const typingId = showTypingIndicator();
        
        try {
            // Send to backend
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message })
            });
            
            const data = await response.json();
            
            // Remove typing indicator
            removeTypingIndicator(typingId);
            
            if (data.success) {
                // Add AI response
                setTimeout(() => {
                    addChatMessage(data.message, 'ai');
                }, 300);
            } else {
                addChatMessage('Sorry, I encountered an error. Please try again.', 'ai');
            }
        } catch (error) {
            removeTypingIndicator(typingId);
            addChatMessage('Unable to connect to AI service. Please check your connection.', 'ai');
        }
    });
}

function addChatMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    const avatar = sender === 'ai' ? '🤖' : '👤';
    const senderName = sender === 'ai' ? 'OSPCON AI' : 'You';
    const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <div class="message-header">
                <span class="message-sender">${senderName}</span>
                <span class="message-time">${time}</span>
            </div>
            <div class="message-text">${text.replace(/\n/g, '<br>')}</div>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    const typingId = 'typing-' + Date.now();
    typingDiv.id = typingId;
    typingDiv.className = 'chat-message ai-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="message-text" style="padding: 1rem;">
                <span style="display: inline-flex; gap: 0.3rem;">
                    <span style="animation: pulse 1s infinite; animation-delay: 0s;">●</span>
                    <span style="animation: pulse 1s infinite; animation-delay: 0.2s;">●</span>
                    <span style="animation: pulse 1s infinite; animation-delay: 0.4s;">●</span>
                </span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingId;
}

function removeTypingIndicator(typingId) {
    const typingDiv = document.getElementById(typingId);
    if (typingDiv) {
        typingDiv.remove();
    }
}

function getAgentsContent() {
    return `
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">AI Agents</h3>
                <button class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">+ New Agent</button>
            </div>
            <div class="agent-list">
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);">🤖</div>
                        <div class="agent-details">
                            <h4>RAG Document Processor</h4>
                            <p>Processes and indexes documents for semantic search</p>
                        </div>
                    </div>
                    <span class="status-badge status-active">Active</span>
                </div>
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);">💬</div>
                        <div class="agent-details">
                            <h4>NL2SQL Builder</h4>
                            <p>Converts natural language to SQL queries</p>
                        </div>
                    </div>
                    <span class="status-badge status-active">Active</span>
                </div>
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);">⚡</div>
                        <div class="agent-details">
                            <h4>Workflow Automator</h4>
                            <p>Automates complex business workflows</p>
                        </div>
                    </div>
                    <span class="status-badge status-active">Active</span>
                </div>
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);">📊</div>
                        <div class="agent-details">
                            <h4>Analytics Engine</h4>
                            <p>Generates insights from data patterns</p>
                        </div>
                    </div>
                    <span class="status-badge status-pending">Training</span>
                </div>
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);">🔍</div>
                        <div class="agent-details">
                            <h4>Data Validator</h4>
                            <p>Validates and cleanses incoming data</p>
                        </div>
                    </div>
                    <span class="status-badge status-active">Active</span>
                </div>
            </div>
        </div>
    `;
}

function getAnalyticsContent() {
    return `
        <div class="stat-grid">
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-label">Total Queries</div>
                </div>
                <div class="stat-value">1.2M</div>
                <div class="stat-change positive">↑ 18% this month</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-label">Processing Time</div>
                </div>
                <div class="stat-value">1.8s</div>
                <div class="stat-change positive">↓ 12% improvement</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-label">Cost Savings</div>
                </div>
                <div class="stat-value">$47K</div>
                <div class="stat-change positive">↑ 24% this quarter</div>
            </div>
            <div class="stat-card">
                <div class="stat-header">
                    <div class="stat-label">Accuracy Rate</div>
                </div>
                <div class="stat-value">98.7%</div>
                <div class="stat-change positive">↑ 2.1% improvement</div>
            </div>
        </div>
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">Performance Analytics</h3>
            </div>
            <div class="chart-placeholder" style="height: 400px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width: 48px; height: 48px; opacity: 0.3;">
                    <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
                <span style="margin-left: 1rem;">Analytics visualization</span>
            </div>
        </div>
    `;
}

function getWorkflowsContent() {
    return `
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">Active Workflows</h3>
                <button class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">+ Create Workflow</button>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Workflow Name</th>
                            <th>Trigger</th>
                            <th>Status</th>
                            <th>Last Run</th>
                            <th>Success Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Customer Onboarding</td>
                            <td>New User Signup</td>
                            <td><span class="status-badge status-active">Active</span></td>
                            <td>10 min ago</td>
                            <td>99.8%</td>
                        </tr>
                        <tr>
                            <td>Data Processing Pipeline</td>
                            <td>Schedule (Hourly)</td>
                            <td><span class="status-badge status-active">Active</span></td>
                            <td>45 min ago</td>
                            <td>98.2%</td>
                        </tr>
                        <tr>
                            <td>Report Generation</td>
                            <td>Manual Trigger</td>
                            <td><span class="status-badge status-pending">Running</span></td>
                            <td>2 hours ago</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Email Notifications</td>
                            <td>Event-based</td>
                            <td><span class="status-badge status-active">Active</span></td>
                            <td>5 min ago</td>
                            <td>99.5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getDataSourcesContent() {
    return `
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">Connected Data Sources</h3>
                <button class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">+ Add Source</button>
            </div>
            <div class="agent-list">
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);">🗄️</div>
                        <div class="agent-details">
                            <h4>PostgreSQL Database</h4>
                            <p>Primary application database • 2.4M records</p>
                        </div>
                    </div>
                    <span class="status-badge status-active">Connected</span>
                </div>
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);">☁️</div>
                        <div class="agent-details">
                            <h4>AWS S3 Bucket</h4>
                            <p>Document storage • 847GB</p>
                        </div>
                    </div>
                    <span class="status-badge status-active">Connected</span>
                </div>
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);">📊</div>
                        <div class="agent-details">
                            <h4>Google Analytics</h4>
                            <p>Web analytics data • Real-time sync</p>
                        </div>
                    </div>
                    <span class="status-badge status-active">Connected</span>
                </div>
                <div class="agent-item">
                    <div class="agent-info">
                        <div class="agent-icon" style="background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);">🔗</div>
                        <div class="agent-details">
                            <h4>Salesforce CRM</h4>
                            <p>Customer data • Last sync 5 min ago</p>
                        </div>
                    </div>
                    <span class="status-badge status-active">Connected</span>
                </div>
            </div>
        </div>
    `;
}

function getSettingsContent() {
    return `
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">Account Settings</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 2rem;">
                <div>
                    <h4 style="margin-bottom: 1rem; font-weight: 600;">Profile Information</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" value="Demo User" style="width: 100%; padding: 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white;">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" value="demo@ospcon.ai" style="width: 100%; padding: 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white;">
                        </div>
                    </div>
                </div>
                <div>
                    <h4 style="margin-bottom: 1rem; font-weight: 600;">Preferences</h4>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <label style="display: flex; align-items: center; gap: 1rem; cursor: pointer;">
                            <input type="checkbox" checked>
                            <span>Enable email notifications</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 1rem; cursor: pointer;">
                            <input type="checkbox" checked>
                            <span>Auto-save dashboard configuration</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 1rem; cursor: pointer;">
                            <input type="checkbox">
                            <span>Enable dark mode (always on)</span>
                        </label>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    `;
}
