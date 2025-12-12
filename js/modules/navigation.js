// ===============================================
// NAVIGATION MODULE
// ===============================================

export class Navigation {
    constructor(data) {
        this.data = data;
        this.navMenu = null;
        this.navToggle = null;
    }

    /**
     * Initialize navigation
     */
    init() {
        this.renderNavigation();
        this.setupEventListeners();
        this.setupScrollHighlight();
    }

    /**
     * Render navigation items
     */
    renderNavigation() {
        const navList = document.getElementById('navList');
        if (!navList) return;

        const navItems = this.data.navigation.map(item => {
            const className = item.isCTA ? 'nav__link nav__link--cta' : 'nav__link';
            return `
                <li class="nav__item">
                    <a href="${item.href}" class="${className}">${item.text}</a>
                </li>
            `;
        }).join('');

        navList.innerHTML = navItems;
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        this.navMenu = document.getElementById('navMenu');
        this.navToggle = document.getElementById('navToggle');
        const navLinks = document.querySelectorAll('.nav__link');

        // Toggle menu
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.toggleMenu();
            });
        }

        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu && !this.navMenu.contains(e.target) && 
                this.navToggle && !this.navToggle.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Keyboard support
        if (this.navToggle) {
            this.navToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleMenu();
                }
            });
        }
    }

    /**
     * Toggle mobile menu
     */
    toggleMenu() {
        if (this.navMenu) {
            this.navMenu.classList.toggle('show');
        }
    }

    /**
     * Close mobile menu
     */
    closeMenu() {
        if (this.navMenu) {
            this.navMenu.classList.remove('show');
        }
    }

    /**
     * Setup scroll highlight for active links
     */
    setupScrollHighlight() {
        const sections = document.querySelectorAll('section[id]');
        
        const highlightNavLink = () => {
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
        };

        window.addEventListener('scroll', this.debounce(highlightNavLink, 10));
        highlightNavLink(); // Initial call
    }

    /**
     * Debounce utility
     */
    debounce(func, wait = 10) {
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
}
