// ===============================================
// LUIS PRADO ARQUITECTO - JAVASCRIPT
// ===============================================

// =============== MOBILE MENU TOGGLE ===============
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Close menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show');
    }
});

// =============== SMOOTH SCROLLING ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Offset for fixed nav
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =============== ACTIVE NAV LINK ON SCROLL ===============
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (link && !link.classList.contains('nav__link--cta')) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.style.fontWeight = '700';
            } else {
                link.style.fontWeight = '500';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// =============== CONTACT FORM HANDLING ===============
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        console.log('Form data:', data);

        // Show success message
        alert('¡Gracias por tu consulta! Te contactaremos pronto.');

        // Reset form
        contactForm.reset();

        // Here you would typically send the data to a server
        // Example:
        // try {
        //     const response = await fetch('/api/contact', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data)
        //     });
        //     
        //     if (response.ok) {
        //         alert('¡Gracias por tu consulta! Te contactaremos pronto.');
        //         contactForm.reset();
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
        // }
    });
}

// =============== SCROLL ANIMATIONS ===============
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

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .about__content, .cta__content');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =============== LAZY LOADING IMAGES ===============
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

// =============== PERFORMANCE OPTIMIZATION ===============
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedHighlight = debounce(highlightNavLink, 10);
window.addEventListener('scroll', debouncedHighlight);

// =============== NAVBAR SHADOW ON SCROLL ===============
function handleNavScroll() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
}

window.addEventListener('scroll', debounce(handleNavScroll, 10));

// =============== ACCESSIBILITY ENHANCEMENTS ===============
// Add keyboard support for mobile menu
if (navToggle) {
    navToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navMenu.classList.toggle('show');
        }
    });
}

// Trap focus in mobile menu when open
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}

if (navMenu) {
    trapFocus(navMenu);
}

// =============== CONSOLE MESSAGE ===============
console.log('%c🏗️ Luis Prado Arquitecto', 'font-size: 20px; font-weight: bold; color: #1a1a1a;');
console.log('%c+25 años de experiencia | +104 obras ejecutadas', 'font-size: 14px; color: #666;');
console.log('%cCórdoba, Argentina', 'font-size: 12px; color: #999;');

// =============== INITIALIZE ===============
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Website loaded successfully');
    
    // Initial nav highlight
    highlightNavLink();
    
    // Initial nav shadow
    handleNavScroll();
});
