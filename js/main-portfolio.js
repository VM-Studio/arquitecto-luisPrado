// ===============================================
// MAIN PORTFOLIO PAGE SCRIPT
// ===============================================

import { ComponentLoader } from './utils/component-loader.js';
import { Navigation } from './modules/navigation.js';
import { PortfolioRenderer } from './modules/portfolio-renderer.js';
import { Animations } from './modules/animations.js';
import { siteData } from '../data/site-data.js';

class PortfolioApp {
    constructor() {
        this.init();
    }

    async init() {
        console.log('🏗️ Initializing Portfolio page...');
        
        try {
            // Load components
            await this.loadComponents();
            
            // Render portfolio
            this.renderPortfolio();
            
            // Initialize modules
            this.initializeModules();
            
            console.log('✅ Portfolio page loaded successfully!');
        } catch (error) {
            console.error('❌ Error loading portfolio page:', error);
        }
    }

    async loadComponents() {
        console.log('📦 Loading components...');
        
        const components = [
            { path: 'components/nav.html', target: '#nav-placeholder' },
            { path: 'sections/portfolio.html', target: '#portfolio-placeholder' },
            { path: 'components/footer.html', target: '#footer-placeholder' }
        ];

        await ComponentLoader.loadComponents(components);
    }

    renderPortfolio() {
        console.log('🎨 Rendering portfolio...');
        PortfolioRenderer.renderPortfolio(siteData.portfolio);
    }

    initializeModules() {
        console.log('⚙️ Initializing modules...');
        const navigation = new Navigation(siteData);
        navigation.init();
        Animations.init();
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new PortfolioApp());
} else {
    new PortfolioApp();
}
