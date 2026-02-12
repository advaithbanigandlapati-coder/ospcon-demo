// ===== NAVIGATION main.js=====
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.about-card, .service-card, .solution-item, .contact-grid');
    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
});

// ===== LOGIN MODAL =====
function showLogin() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLogin() {
    const modal = document.getElementById('login-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const submitBtn = event.target.querySelector('button[type="submit"]');
    
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in...';
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Store user info
            localStorage.setItem('ospcon_user', JSON.stringify(data.user));
            
            // Close modal
            closeLogin();
            
            // Show dashboard
            showDashboard();
        } else {
            alert(data.message || 'Login failed. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Sign In';
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Unable to connect to server. Please make sure the server is running.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign In';
    }
}

function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// ===== KINETIC CURSOR EFFECT (SUBTLE) =====
let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
let speed = 0.1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const distX = mouseX - ballX;
    const distY = mouseY - ballY;
    
    ballX += distX * speed;
    ballY += distY * speed;
    
    // Update gradient orbs position slightly based on mouse
    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.02;
        orb.style.transform = `translate(${ballX * factor}px, ${ballY * factor}px)`;
    });
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// ===== CHECK LOGIN STATUS ON LOAD =====
window.addEventListener('load', () => {
    const user = JSON.parse(localStorage.getItem('ospcon_user'));
    if (user) {
        // User is already logged in, could show a "Go to Dashboard" button
        console.log('User logged in:', user.username);
    }
});
