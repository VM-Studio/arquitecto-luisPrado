// ===============================================
// MAIN APPLICATION SCRIPT - LUIS PRADO ARQUITECTO
// ===============================================

import { ComponentLoader } from './utils/component-loader.js';
import { Navigation } from './modules/navigation.js';
import { ContentRenderer } from './modules/content-renderer.js';
import { FormHandler } from './modules/form-handler.js';
import { Animations } from './modules/animations.js';
import { siteData } from '../data/site-data.js';

/**
 * Main Application Class
 */
class App {
    constructor() {
        this.data = siteData;
        this.navigation = null;
        this.contentRenderer = null;
        this.formHandler = null;
        this.animations = null;
    }

    /**
     * Initialize the application
     */
    async init() {
        console.log('🏗️ Initializing Luis Prado Arquitecto website...');

        try {
            // Step 1: Load all components and sections
            await this.loadComponents();
            
            // Step 2: Render dynamic content
            this.renderContent();
            
            // Step 3: Initialize modules
            this.initializeModules();
            
            console.log('✅ Website loaded successfully!');
        } catch (error) {
            console.error('❌ Error initializing application:', error);
        }
    }

    /**
     * Load all HTML components and sections
     */
    async loadComponents() {
        const components = [
            // Components
            { path: 'components/nav.html', target: '#nav-placeholder' },
            { path: 'components/footer.html', target: '#footer-placeholder' },
            
            // Sections
            { path: 'sections/hero.html', target: '#hero-placeholder' },
            { path: 'sections/about.html', target: '#about-placeholder' },
            { path: 'sections/services.html', target: '#services-placeholder' },
            { path: 'sections/cta.html', target: '#cta-placeholder' },
            { path: 'sections/contact.html', target: '#contact-placeholder' }
        ];

        await ComponentLoader.loadComponents(components);
    }

    /**
     * Render all dynamic content
     */
    renderContent() {
        this.contentRenderer = new ContentRenderer(this.data);
        this.contentRenderer.renderAll();
    }

    /**
     * Initialize all modules
     */
    initializeModules() {
        // Navigation
        this.navigation = new Navigation(this.data);
        this.navigation.init();

        // Form Handler
        this.formHandler = new FormHandler();
        this.formHandler.init();

        // Animations
        this.animations = new Animations();
        this.animations.init();

        // Navbar shadow on scroll
        this.setupNavbarScroll();
    }

    /**
     * Setup navbar shadow effect on scroll
     */
    setupNavbarScroll() {
        const handleNavScroll = () => {
            const nav = document.querySelector('.nav');
            if (nav) {
                if (window.scrollY > 50) {
                    nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }
            }
        };

        const debounce = (func, wait = 10) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        };

        window.addEventListener('scroll', debounce(handleNavScroll, 10));
        handleNavScroll(); // Initial call
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new App();
        app.init();
    });
} else {
    const app = new App();
    app.init();
}

// Console branding
console.log('%c🏗️ Luis Prado Arquitecto', 'font-size: 20px; font-weight: bold; color: #1a1a1a;');
console.log('%c+25 años de experiencia | +104 obras ejecutadas', 'font-size: 14px; color: #666;');
console.log('%cCórdoba, Argentina', 'font-size: 12px; color: #999;');
