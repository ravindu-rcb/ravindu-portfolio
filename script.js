/* ========================================
   Modern Portfolio JavaScript
   Ravindu Chamara Balasooriya Portfolio
   ======================================== */

// DOM Elements
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const projectModal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const toast = document.getElementById('toast');
const commandPalette = document.getElementById('commandPalette');
const commandPaletteOverlay = document.getElementById('commandPaletteOverlay');
const commandPaletteClose = document.getElementById('commandPaletteClose');
const commandPaletteInput = document.getElementById('commandPaletteInput');
const commandPaletteList = document.getElementById('commandPaletteList');
const cvDownload = document.getElementById('cvDownload');
const skillsGrid = document.getElementById('skillsGrid');
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const copyButtons = document.querySelectorAll('.copy-btn');
const projectSearch = document.getElementById('projectSearch');
const projectFilterChips = document.querySelectorAll('.filter-chip');
const cursorIndicator = document.querySelector('.cursor-indicator');

// Embedded Projects Data (Fallback for file:// protocol)
const EMBEDDED_PROJECTS = [
    {
        "id": "cocoguard",
        "title": "Mobile-Based Coconut Mite Detection System (CocoGuard)",
        "category": "Research",
        "shortDescription": "Lightweight real-time mobile application using deep learning and image super-resolution to detect coconut mite infestations from field-captured images.",
        "impactBullets": [
            "Evaluated multiple CNN architectures (MobileNetV2, ResNet50, Custom CNN, Vision Transformer) and selected MobileNetV2 for optimal mobile efficiency",
            "Integrated Real-ESRGAN super-resolution for enhanced image quality, improving detection accuracy in field conditions",
            "Research paper published at IcoDSA Conference, contributing to agricultural technology solutions"
        ],
        "technologies": ["React Native", "Expo Go", "Flask", "Python", "TensorFlow", "MobileNetV2", "ResNet50", "Vision Transformer", "Real-ESRGAN"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": true
    },
    {
        "id": "social-media-platform",
        "title": "Social Media Platform",
        "category": "Full-Stack",
        "shortDescription": "Collaborative platform connecting employees, employers, businesses, and consultants for job opportunities, course listings, and consultant services.",
        "impactBullets": [
            "Enabled seamless job search and posting functionality, connecting job seekers with employers efficiently",
            "Integrated course management system allowing businesses to post and users to discover educational opportunities",
            "Built consultant service marketplace, facilitating connections between businesses and service providers"
        ],
        "technologies": ["React", "Tailwind CSS", "Ant Design", "Node.js", "MongoDB"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "gym-social-platform",
        "title": "Gym Social Media Platform",
        "category": "Full-Stack",
        "shortDescription": "Social platform for fitness enthusiasts to share posts, videos, workout status, and meal plans within a connected community.",
        "impactBullets": [
            "Enabled video sharing and workout status tracking, fostering community engagement among fitness enthusiasts",
            "Implemented meal plan sharing functionality, helping users exchange nutrition strategies",
            "Built real-time social feed with post interactions, creating an active fitness community"
        ],
        "technologies": ["React", "Bootstrap", "Spring Boot", "MySQL"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "hospital-management",
        "title": "Hospital Management System",
        "category": "Full-Stack",
        "shortDescription": "Comprehensive system designed to improve efficiency of healthcare institutions through streamlined operations and patient management.",
        "impactBullets": [
            "Streamlined patient registration and medical records management, reducing administrative overhead",
            "Implemented appointment scheduling system, improving patient access and reducing waiting times",
            "Automated billing and invoicing processes, enhancing financial management and accuracy"
        ],
        "technologies": ["React", "Bootstrap", "Node.js", "MongoDB"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "freelancing-app",
        "title": "Freelancing App",
        "category": "Mobile",
        "shortDescription": "Mobile application connecting freelancers with clients, facilitating project collaboration and comprehensive freelancing work management.",
        "impactBullets": [
            "Enabled project posting and bidding system, connecting freelancers with clients efficiently",
            "Implemented real-time messaging and contract management, streamlining collaboration workflows",
            "Integrated Firebase services for authentication and data synchronization, ensuring secure and reliable operations"
        ],
        "technologies": ["Kotlin", "Firebase Authentication", "Firebase Realtime Database"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "event-photography",
        "title": "Event Photography Management System",
        "category": "Full-Stack",
        "shortDescription": "Streamlined system for event photography services, managing clients, scheduling, photo galleries, and invoicing in one platform.",
        "impactBullets": [
            "Automated client management and event scheduling, reducing manual coordination efforts",
            "Centralized photo gallery organization, improving client access and delivery workflows",
            "Integrated invoicing system, streamlining billing processes and payment tracking"
        ],
        "technologies": ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "selenium-testing",
        "title": "Automated Web Application Testing using Selenium",
        "category": "QA",
        "shortDescription": "Comprehensive QA project combining manual and automated testing methodologies with Selenium WebDriver and Selenium IDE for thorough test coverage.",
        "impactBullets": [
            "Created detailed test cases covering key UI interactions, ensuring comprehensive application quality",
            "Developed automated test scripts using Selenium WebDriver, reducing manual testing time and improving consistency",
            "Implemented defect reporting with severity and priority levels, facilitating efficient bug resolution"
        ],
        "technologies": ["Selenium WebDriver", "Selenium IDE", "Manual Testing", "Test Case Design", "Defect Reporting"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "cloud-student-records",
        "title": "Cloud-Based Student Records Hosting System",
        "category": "Cloud",
        "shortDescription": "Scalable and highly available AWS infrastructure with load balancing, auto-scaling, and secure access, following Well-Architected Framework best practices.",
        "impactBullets": [
            "Designed scalable architecture with auto-scaling groups, ensuring optimal performance under varying loads",
            "Implemented load balancing and VPC security, providing high availability and secure access",
            "Followed AWS Well-Architected Framework principles, ensuring cost-effective and reliable infrastructure"
        ],
        "technologies": ["AWS EC2", "S3", "RDS MySQL", "Load Balancer", "Auto Scaling Group", "VPC", "Security Groups", "Route 53"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "concurrent-chat",
        "title": "Concurrent Chat Server and Client Program",
        "category": "Systems",
        "shortDescription": "C-based concurrent chat system with user registration, one-on-one messaging, waiting room functionality, and DNS configuration for server resolution.",
        "impactBullets": [
            "Implemented concurrent multi-client support using socket programming, enabling real-time communication",
            "Developed user registration and waiting room system, managing client connections efficiently",
            "Configured DNS records for seamless server resolution, demonstrating systems-level networking expertise"
        ],
        "technologies": ["C", "Socket Programming", "DNS", "CentOS", "VMware"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "ui-ux-redesign",
        "title": "UI/UX Redesign",
        "category": "UI-UX",
        "shortDescription": "Redesigned old webpage UI using Figma, creating modern and intuitive user experience with improved user flows and visual design.",
        "impactBullets": [
            "Transformed outdated interface into modern, intuitive design, improving user engagement and satisfaction",
            "Enhanced user flows and navigation patterns, reducing cognitive load and improving task completion rates",
            "Created comprehensive design system and prototypes, facilitating smooth handoff to development teams"
        ],
        "technologies": ["Figma", "UI/UX", "Prototyping"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    },
    {
        "id": "qa-test-cases",
        "title": "QA Test Case Development",
        "category": "QA",
        "shortDescription": "Developed comprehensive test cases for Event Photography Management System, ensuring functionality, reliability, and user experience across various scenarios.",
        "impactBullets": [
            "Created detailed test scenarios covering all system functionalities, ensuring comprehensive quality coverage",
            "Validated user experience across different user roles and workflows, identifying and resolving usability issues",
            "Established reliable testing framework, enabling ongoing quality assurance and regression testing"
        ],
        "technologies": ["Test Case Design", "QA", "Functional Testing"],
        "links": {
            "github": null,
            "demo": null,
            "paper": null
        },
        "featured": false
    }
];

// Skills Data
const skills = {
    all: [
        // Programming
        { name: 'C', category: 'programming' },
        { name: 'C++', category: 'programming' },
        { name: 'Java', category: 'programming' },
        { name: 'Python', category: 'programming' },
        { name: 'PHP', category: 'programming' },
        { name: 'JavaScript', category: 'programming' },
        { name: 'HTML', category: 'programming' },
        { name: 'CSS', category: 'programming' },
        // Frameworks
        { name: 'Laravel', category: 'frameworks' },
        { name: 'React', category: 'frameworks' },
        { name: 'Node.js', category: 'frameworks' },
        { name: 'Express', category: 'frameworks' },
        { name: 'Spring Boot', category: 'frameworks' },
        { name: 'Tailwind CSS', category: 'frameworks' },
        { name: 'Bootstrap', category: 'frameworks' },
        // Databases
        { name: 'MySQL', category: 'databases' },
        { name: 'MongoDB', category: 'databases' },
        // { name: 'Oracle', category: 'databases' },
        { name: 'Firebase', category: 'databases' },
        // Tools
        { name: 'Git', category: 'tools' },
        { name: 'GitHub', category: 'tools' },
        { name: 'Postman', category: 'tools' },
        { name: 'Figma', category: 'tools' },
        { name: 'UML/draw.io', category: 'tools' },
        { name: 'VS Code', category: 'tools' },
        { name: 'IntelliJ', category: 'tools' },
        { name: 'Eclipse', category: 'tools' },
        { name: 'Android Studio', category: 'tools' },
        { name: 'MySQL Workbench', category: 'tools' },
        { name: 'XAMPP', category: 'tools' },
        { name: 'Power BI', category: 'tools' },
        // Cloud
        { name: 'AWS', category: 'cloud' },
        { name: 'Azure', category: 'cloud' },
        // Other
        // { name: 'OOP', category: 'other' },
        // { name: 'DSA', category: 'other' },
        { name: 'MVC', category: 'other' },
        { name: 'REST API', category: 'other' },
        { name: 'Selenium WebDriver', category: 'other' },
        { name: 'Selenium IDE', category: 'other' },
        { name: 'Machine Learning', category: 'other' }
    ]
};

// Navigation sections for command palette
const navigationSections = [
    { name: 'Home', id: 'hero', desc: 'Return to the top' },
    { name: 'About', id: 'about', desc: 'Learn about me' },
    { name: 'Skills', id: 'skills', desc: 'View my technical skills' },
    { name: 'Experience', id: 'experience', desc: 'My work experience' },
    { name: 'Projects', id: 'projects', desc: 'Browse my projects' },
    { name: 'Education', id: 'education', desc: 'Education and certifications' },
    { name: 'Contact', id: 'contact', desc: 'Get in touch' }
];

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Scroll Spy
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// Mobile Menu Toggle
function initMobileMenu() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Back to Top Button
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.highlight-card, .skill-chip, .project-card, .education-card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Skills Filter
function initSkillsFilter() {
    function renderSkills(category = 'all') {
        skillsGrid.innerHTML = '';
        const filteredSkills = category === 'all' 
            ? skills.all 
            : skills.all.filter(skill => skill.category === category);
        
        filteredSkills.forEach(skill => {
            const chip = document.createElement('div');
            chip.className = 'skill-chip';
            chip.innerHTML = `<span class="skill-name">${skill.name}</span>`;
            skillsGrid.appendChild(chip);
        });
        
        // Re-observe for animations
        setTimeout(() => {
            const chips = skillsGrid.querySelectorAll('.skill-chip');
            chips.forEach(chip => {
                chip.style.opacity = '0';
                chip.style.transform = 'translateY(20px)';
                chip.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
            initScrollAnimations();
        }, 100);
    }
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            const category = btn.getAttribute('data-category');
            renderSkills(category);
        });
    });
    
    renderSkills('all');
}

// Cursor Indicator
function initCursorIndicator() {
    if (!cursorIndicator) return;
    if (window.matchMedia('(pointer: coarse)').matches) {
        cursorIndicator.style.display = 'none';
        return;
    }

    let hideTimeout;

    const showIndicator = () => {
        cursorIndicator.classList.add('is-visible');
        cursorIndicator.classList.remove('is-hidden');
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            cursorIndicator.classList.add('is-hidden');
        }, 1500);
    };

    document.addEventListener('mousemove', (event) => {
        cursorIndicator.style.left = `${event.clientX}px`;
        cursorIndicator.style.top = `${event.clientY}px`;
        showIndicator();
    });

    document.addEventListener('mousedown', () => {
        cursorIndicator.classList.add('is-active');
    });

    document.addEventListener('mouseup', () => {
        cursorIndicator.classList.remove('is-active');
    });

    document.addEventListener('mouseleave', () => {
        cursorIndicator.classList.add('is-hidden');
    });
}

// Store projects globally for modal
let allProjects = [];
let currentCategory = 'all';
let currentSearchTerm = '';

// Load and Render Projects
function renderProjects(projects) {
    projectsGrid.innerHTML = '';
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = '<p class="projects-empty">No projects found for this filter.</p>';
        return;
    }
    
    // Sort: featured first, then by title
    const sortedProjects = [...projects].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.title.localeCompare(b.title);
    });
    
    sortedProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        if (project.featured) card.classList.add('project-card-featured');
        
        const categoryClass = project.category.toLowerCase().replace(/\s+/g, '-');
        
        card.innerHTML = `
            ${project.featured ? '<span class="project-featured-badge">Featured</span>' : ''}
            <div class="project-card-header">
                <span class="project-category project-category-${categoryClass}">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
            </div>
            <p class="project-summary">${project.shortDescription}</p>
            <div class="project-tech">
                ${project.technologies.slice(0, 6).map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
                ${project.technologies.length > 6 ? `<span class="project-tech-tag project-tech-more">+${project.technologies.length - 6}</span>` : ''}
            </div>
            <div class="project-actions">
                <button class="btn btn-primary" onclick="openProjectModal('${project.id}')">Details</button>
                ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>` : ''}
                ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Demo</a>` : ''}
                ${project.links.paper ? `<a href="${project.links.paper}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Paper</a>` : ''}
            </div>
        `;
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        projectsGrid.appendChild(card);
        
        // Stagger animation
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 75);
        } else {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Filter and Search Projects
function filterAndSearchProjects() {
    let filtered = [...allProjects];
    
    // Category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(project => project.category === currentCategory);
    }
    
    // Search filter
    if (currentSearchTerm.trim()) {
        const searchLower = currentSearchTerm.toLowerCase();
        filtered = filtered.filter(project => {
            const titleMatch = project.title.toLowerCase().includes(searchLower);
            const techMatch = project.technologies.some(tech => tech.toLowerCase().includes(searchLower));
            const categoryMatch = project.category.toLowerCase().includes(searchLower);
            const descMatch = project.shortDescription.toLowerCase().includes(searchLower);
            return titleMatch || techMatch || categoryMatch || descMatch;
        });
    }
    
    renderProjects(filtered);
}

async function initProjects() {
    let projectsLoaded = false;
    
    // Try to fetch from data.json first
    try {
        const response = await fetch('data.json');
        if (response.ok) {
            const data = await response.json();
            if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
                allProjects = data.projects;
                projectsLoaded = true;
            }
        }
    } catch (error) {
        // Fetch failed (likely file:// protocol), use fallback
        console.log('Fetch failed, using embedded projects data');
    }
    
    // Use embedded data as fallback if fetch failed
    if (!projectsLoaded) {
        allProjects = EMBEDDED_PROJECTS;
        projectsLoaded = true;
    }
    
    // Render projects if we have data
    if (projectsLoaded && allProjects.length > 0) {
        filterAndSearchProjects();
        
        // Setup search
        if (projectSearch) {
            projectSearch.addEventListener('input', (e) => {
                currentSearchTerm = e.target.value;
                filterAndSearchProjects();
            });
        }
        
        // Setup category filters
        if (projectFilterChips.length > 0) {
            projectFilterChips.forEach(chip => {
                chip.addEventListener('click', () => {
                    projectFilterChips.forEach(c => {
                        c.classList.remove('active');
                        c.setAttribute('aria-selected', 'false');
                    });
                    chip.classList.add('active');
                    chip.setAttribute('aria-selected', 'true');
                    currentCategory = chip.getAttribute('data-category');
                    filterAndSearchProjects();
                });
            });
        }
    } else {
        // Only show error if we truly have no data
        console.error('No projects data available');
        if (projectsGrid) {
            projectsGrid.innerHTML = '<p class="projects-empty">No projects found for this filter.</p>';
        }
    }
}

// Project Modal
window.openProjectModal = function(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;
    
    modalTitle.textContent = project.title;
    
    const categoryClass = project.category.toLowerCase().replace(/\s+/g, '-');
    const linksHTML = [];
    if (project.links.github) linksHTML.push(`<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">GitHub</a>`);
    if (project.links.demo) linksHTML.push(`<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Live Demo</a>`);
    if (project.links.paper) linksHTML.push(`<a href="${project.links.paper}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Research Paper</a>`);
    
    modalBody.innerHTML = `
        <div class="modal-project-header">
            <span class="project-category project-category-${categoryClass}">${project.category}</span>
        </div>
        <p class="modal-project-description">${project.shortDescription}</p>
        <h3>Impact</h3>
        <ul class="modal-impact-list">
            ${project.impactBullets.map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>
        <h3>Technologies</h3>
        <div class="project-tech" style="margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
        </div>
        ${linksHTML.length > 0 ? `<div class="modal-project-links">${linksHTML.join('')}</div>` : ''}
    `;
    
    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    const firstFocusable = modalClose;
    firstFocusable.focus();
};

function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

modalOverlay.addEventListener('click', closeProjectModal);
modalClose.addEventListener('click', closeProjectModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// Contact Form
function initContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            showToast('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(formData.email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show success toast
        showToast('Thanks! I\'ll get back to you.', 'success');
        
        // Open mailto as fallback
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:ravindubalasooriya.rcb@gmail.com?subject=${subject}&body=${body}`;
        
        // Reset form
        contactForm.reset();
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Toast Notification
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Copy Email Functionality
function initCopyButtons() {
    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const text = btn.getAttribute('data-text');
            try {
                await navigator.clipboard.writeText(text);
                const originalText = btn.innerHTML;
                btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Copied!';
                btn.classList.add('copied');
                showToast('Email copied to clipboard!', 'success');
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                showToast('Failed to copy. Please try again.', 'error');
            }
        });
    });
}

// Command Palette
function initCommandPalette() {
    let selectedIndex = -1;
    
    function renderCommandPaletteItems(searchTerm = '') {
        commandPaletteList.innerHTML = '';
        const filtered = navigationSections.filter(section =>
            section.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            section.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        selectedIndex = -1;
        
        filtered.forEach((section, index) => {
            const item = document.createElement('div');
            item.className = 'command-palette-item';
            item.setAttribute('role', 'option');
            item.innerHTML = `
                <div class="command-palette-item-name">${section.name}</div>
                <div class="command-palette-item-desc">${section.desc}</div>
            `;
            item.addEventListener('click', () => {
                navigateToSection(section.id);
            });
            commandPaletteList.appendChild(item);
        });
    }
    
    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeCommandPalette();
        }
    }
    
    function openCommandPalette() {
        commandPalette.classList.add('active');
        commandPalette.setAttribute('aria-hidden', 'false');
        commandPaletteInput.value = '';
        commandPaletteInput.focus();
        renderCommandPaletteItems();
        document.body.style.overflow = 'hidden';
    }
    
    function closeCommandPalette() {
        commandPalette.classList.remove('active');
        commandPalette.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        selectedIndex = -1;
    }
    
    // Keyboard shortcut (Ctrl+K or Cmd+K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (commandPalette.classList.contains('active')) {
                closeCommandPalette();
            } else {
                openCommandPalette();
            }
        }
        
        if (e.key === 'Escape' && commandPalette.classList.contains('active')) {
            closeCommandPalette();
        }
        
        if (commandPalette.classList.contains('active')) {
            const items = commandPaletteList.querySelectorAll('.command-palette-item');
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % items.length;
                updateSelection(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = selectedIndex <= 0 ? items.length - 1 : selectedIndex - 1;
                updateSelection(items);
            } else if (e.key === 'Enter' && selectedIndex >= 0) {
                e.preventDefault();
                items[selectedIndex].click();
            }
        }
    });
    
    function updateSelection(items) {
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }
    
    commandPaletteInput.addEventListener('input', (e) => {
        renderCommandPaletteItems(e.target.value);
    });
    
    commandPaletteOverlay.addEventListener('click', closeCommandPalette);
    commandPaletteClose.addEventListener('click', closeCommandPalette);
}

// CV Download Fallback
function initCVDownload() {
    cvDownload.addEventListener('click', (e) => {
        // Check if file exists (basic check)
        fetch(cvDownload.href, { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    e.preventDefault();
                    showToast('CV file not found. Please contact me directly.', 'error');
                }
            })
            .catch(() => {
                // File doesn't exist or CORS issue, show toast but don't prevent default
                // (let browser handle it naturally)
            });
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Everything
function init() {
    initTheme();
    initScrollSpy();
    initMobileMenu();
    initBackToTop();
    initScrollAnimations();
    initSkillsFilter();
    initProjects();
    initContactForm();
    initCopyButtons();
    initCommandPalette();
    initCVDownload();
    initSmoothScroll();
    initCursorIndicator();
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

// Run on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
