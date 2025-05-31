// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100
  });
  
  // Initialize Particles.js
  initParticles();
  
  // Initialize Typewriter effect
  initTypewriter();
  
  // Set up Navbar scroll effect
  setupNavbar();
  
  // Set up Mobile Menu toggle
  setupMobileMenu();
  
  // Set up Back to Top button
  setupBackToTop();
  
  // Set up smooth scrolling for anchor links
  setupSmoothScrolling();
});

// Initialize Particles.js with bubble/star configuration
function initParticles() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#a855f7"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#a855f7",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

// Typewriter effect for the hero section
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  const strings = [
    'Software Developer',
    'MERN Stack Developer',
    'Open Source Contributor',
    'UI/UX Enthusiast'
  ];
  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 150;

  function type() {
    const currentString = strings[stringIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentString.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 75;
    } else {
      typewriterElement.textContent = currentString.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 150;
    }
    
    if (!isDeleting && charIndex === currentString.length) {
      // Pause at end of typing
      isDeleting = true;
      typingDelay = 1500;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move to next string
      stringIndex++;
      // Reset to first string if we've reached the end
      if (stringIndex === strings.length) {
        stringIndex = 0;
      }
      typingDelay = 500;
    }
    
    setTimeout(type, typingDelay);
  }
  
  // Start the typewriter effect
  if (typewriterElement) {
    setTimeout(type, 1000);
  }
}

// Navbar scroll effect
function setupNavbar() {
  const navbar = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Back to top button
function setupBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('opacity-100');
        backToTopButton.classList.remove('opacity-0');
      } else {
        backToTopButton.classList.remove('opacity-100');
        backToTopButton.classList.add('opacity-0');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      e.preventDefault();
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Offset for fixed header
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Project filter function (if needed in the future)
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    const projectCategory = project.dataset.category;
    
    if (category === 'all' || projectCategory === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Form validation
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('#contact form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form fields
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      // Simple validation
      let isValid = true;
      
      if (!nameInput.value.trim()) {
        markInvalid(nameInput);
        isValid = false;
      } else {
        markValid(nameInput);
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        markInvalid(emailInput);
        isValid = false;
      } else {
        markValid(emailInput);
      }
      
      if (!subjectInput.value.trim()) {
        markInvalid(subjectInput);
        isValid = false;
      } else {
        markValid(subjectInput);
      }
      
      if (!messageInput.value.trim()) {
        markInvalid(messageInput);
        isValid = false;
      } else {
        markValid(messageInput);
      }
      
      if (isValid) {
        // Simulate form submission (in a real app, this would be replaced with actual form submission)
        contactForm.innerHTML = `
          <div class="text-center py-16">
            <i class="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
            <h3 class="text-2xl font-semibold mb-2">Message Sent!</h3>
            <p class="text-gray-300">Thank you for your message. I'll get back to you soon!</p>
          </div>
        `;
      }
    });
  }
});

// Helper functions for form validation
function markInvalid(inputElement) {
  inputElement.classList.add('border-red-500');
  inputElement.classList.remove('border-gray-600');
}

function markValid(inputElement) {
  inputElement.classList.remove('border-red-500');
  inputElement.classList.add('border-gray-600');
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Preload images for better performance
function preloadImages() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      const newImg = new Image();
      newImg.src = src;
    }
  });
}

// Call preloadImages when the page is loaded
window.addEventListener('load', preloadImages);



/* Enhanced Card Animation JavaScript */

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  // Add tilt effect to project cards
  projectCards.forEach(card => {
    // Mouse enter event for cards
    card.addEventListener('mouseenter', function(e) {
      // Add active class for additional styling
      this.classList.add('card-active');
      
      // Subtle 3D tilt effect based on mouse position
      this.addEventListener('mousemove', handleTilt);
    });
    
    // Mouse leave event for cards
    card.addEventListener('mouseleave', function() {
      // Remove active class
      this.classList.remove('card-active');
      
      // Reset card tilt
      this.style.transform = 'translateY(-10px)';
      
      // Remove mousemove event listener
      this.removeEventListener('mousemove', handleTilt);
    });
  });
  
  // Handle card tilt effect
  function handleTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;
    
    // Calculate mouse position relative to card center
    const centerX = cardRect.left + cardWidth / 2;
    const centerY = cardRect.top + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    const rotateX = (mouseY / (cardHeight / 2)) * -5; // Max 5 degrees
    const rotateY = (mouseX / (cardWidth / 2)) * 5; // Max 5 degrees
    
    // Apply transform with translate and rotate
    card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  
  // Initialize the card link hover effect
  const projectLinks = document.querySelectorAll('.project-link');
  
  projectLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      // Scale up icon slightly
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = 'scale(1.2) translateX(3px)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    link.addEventListener('mouseleave', function() {
      // Reset icon
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
  
  // Add scroll-triggered animations for tags
  const projectTags = document.querySelectorAll('.project-card .bg-violet-900\\/30');
  
  const tagObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'tag-appear 0.5s forwards';
        entry.target.style.opacity = '1';
        // Unobserve after animation
        tagObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Set initial state and observe
  projectTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.animationDelay = `${index * 0.1}s`;
    tagObserver.observe(tag);
  });
  
  // Define tag-appear animation
  const tagAppearKeyframes = `
    @keyframes tag-appear {
      0% { transform: translateY(10px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
  `;
  
  // Add keyframes to document
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = tagAppearKeyframes;
  document.head.appendChild(styleSheet);
  
  // Optional: Add animated underline effect on project titles
  const projectTitles = document.querySelectorAll('.project-card h3');
  
  projectTitles.forEach(title => {
    title.addEventListener('mouseenter', function() {
      this.style.color = '#a855f7'; // Violet color on hover
    });
    
    title.addEventListener('mouseleave', function() {
      this.style.color = ''; // Reset to default color
    });
  });
});