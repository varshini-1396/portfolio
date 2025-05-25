// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Particles.js configuration
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#8A2BE2'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#8A2BE2',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
});

// Observe progress bar and other animated elements
document.addEventListener('DOMContentLoaded', function() {
    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        observer.observe(progressContainer);
    }
    
   
    
    
    // Resume download (simulated)
    const downloadResume = document.getElementById('downloadResume');
    if (downloadResume) {
        downloadResume.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Resume download started!');
            // In a real application, you would redirect to an actual file
        });
    }
    
    // Typing animation for the hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Project hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add a parallax effect to the hero section
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero');
    if (parallax) {
        let scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Experience section functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle experience item clicks
    const experienceContents = document.querySelectorAll('.experience-content');
    experienceContents.forEach(item => {
        item.addEventListener('click', function() {
            const details = this.querySelector('.experience-details');
            details.classList.toggle('expanded');
        });
    });

    // Animate experience items on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const experienceTimelineItems = document.querySelectorAll('.experience-item');
    experienceTimelineItems.forEach(item => {
        experienceObserver.observe(item);
    });
});

// EmailJS Initialization
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("CoRkb1qOpxlcCZOIh");  // Replace with your EmailJS Public Key

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

// Contact Form Handler
function handleContactFormSubmit(e) {
    e.preventDefault();

    // Get form fields
    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const subject = document.querySelector('input[placeholder="Subject"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();

    // Validate fields
    let isValid = true;
    let errorMessage = '';

    if (!name) {
        isValid = false;
        errorMessage = 'Please enter your name';
    }
    if (!email) {
        isValid = false;
        errorMessage = 'Please enter your email';
    } else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }
    if (!subject) {
        isValid = false;
        errorMessage = 'Please enter a subject';
    }
    if (!message) {
        isValid = false;
        errorMessage = 'Please enter your message';
    }

    if (!isValid) {
        showNotification(errorMessage, 'error');
        return;
    }

    // Show loading state
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Prepare form data
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send email
    emailjs.send("service_5rzwhh9", "template_nj17tp5", formData)
        .then(() => {
            console.log('Email Sent Successfully');
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            e.target.reset();
        })
        .catch(err => {
            console.error('Email Error:', err);
            showNotification('Failed to send message. Please try again.', 'error');
        })
        .finally(() => {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification function
function showNotification(message, type = 'success') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    // Add icon based on type
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    notification.appendChild(icon);
    
    // Add message
    const messageText = document.createElement('span');
    messageText.textContent = message;
    notification.appendChild(messageText);
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Education Modal Functions
function openEducationModal(institution) {
    const modal = document.getElementById('educationModal');
    modal.style.display = 'block';
    
    // Update modal content based on institution
    if (institution === 'iiitdm') {
        document.getElementById('coursesContent').querySelector('h3').textContent = 'Courses at IIITDM Kancheepuram (B.Tech CSE)';
        document.getElementById('rolesContent').querySelector('h3').textContent = 'Roles & Responsibilities at IIITDM Kancheepuram (B.Tech CSE)';
        document.getElementById('gradesContent').querySelector('h3').textContent = 'Academic Performance (B.Tech CSE)';
        
        // Show all tabs for IIITDM
        document.getElementById('coursesContent').style.display = 'block';
        document.getElementById('rolesContent').style.display = 'none';
        document.getElementById('gradesContent').style.display = 'none';
        document.querySelector('.modal-nav').style.display = 'flex';
        
        // Hide high school content if it exists
        const highSchoolContent = document.getElementById('highSchoolContent');
        if (highSchoolContent) {
            highSchoolContent.style.display = 'none';
        }
        
        // Reset to courses tab
        switchTab('courses');
    } else if (institution === 'viswasanthi') {
        // Hide all tab contents and navigation for high school
        document.getElementById('coursesContent').style.display = 'none';
        document.getElementById('rolesContent').style.display = 'none';
        document.getElementById('gradesContent').style.display = 'none';
        document.querySelector('.modal-nav').style.display = 'none';
        
        // Create and show high school content
        const modalBody = document.querySelector('.modal-body');
        let highSchoolContent = document.getElementById('highSchoolContent');
        
        if (!highSchoolContent) {
            highSchoolContent = document.createElement('div');
            highSchoolContent.id = 'highSchoolContent';
            highSchoolContent.className = 'tab-content active';
            highSchoolContent.innerHTML = `
                <h3>High School Education at Sri Viswasanthi Educational Institutions</h3>
                <div class="high-school-info">
                    <div class="info-section">
                        <h4>Academic Focus</h4>
                        <ul>
                            <li>Mathematics (Advanced)</li>
                            <li>Physics</li>
                            <li>Computer Science</li>
                            <li>English</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h4>Academic Performance</h4>
                        <p>Board Examination: 97.2%</p>
                        <p>JEE Mains Percentile: 98.53</p>
                    </div>
                    <div class="info-section">
                        <h4>Achievements & Activities</h4>
                        <ul>
                            <li>School First in Mathematics</li>
                            <li>Active participant in Science Exhibitions</li>
                            <li>Member of School Science Club</li>
                            <li>Participated in District Level Mathematics Olympiad</li>
                        </ul>
                    </div>
                </div>
            `;
            modalBody.appendChild(highSchoolContent);
        }
        
        // Ensure high school content is visible
        highSchoolContent.style.display = 'block';
        highSchoolContent.classList.add('active');
    }
}

function closeEducationModal() {
    const modal = document.getElementById('educationModal');
    modal.style.display = 'none';
    
    // Hide high school content
    const highSchoolContent = document.getElementById('highSchoolContent');
    if (highSchoolContent) {
        highSchoolContent.style.display = 'none';
    }
}

function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let content of tabContents) {
        content.style.display = 'none';
        content.classList.remove('active');
    }
    
    // Remove active class from all nav buttons
    const navButtons = document.getElementsByClassName('nav-btn');
    for (let btn of navButtons) {
        btn.classList.remove('active');
    }
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName + 'Content');
    if (selectedTab) {
        selectedTab.style.display = 'block';
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    const clickedButton = document.querySelector(`.nav-btn[onclick="switchTab('${tabName}')"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('educationModal');
    if (event.target == modal) {
        closeEducationModal();
    }
}