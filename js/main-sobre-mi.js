// ================================================
// MAIN SOBRE MI - LUIS PRADO ARQUITECTO
// ================================================

// ================================================
// PAGE INITIALIZATION
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    initSobreMiPage();
});

// ================================================
// SOBRE MI PAGE INITIALIZATION
// ================================================

async function initSobreMiPage() {
    try {
        // Load components
        await loadComponent('components/nav.html', 'nav-container');
        await loadComponent('sections/sobre-mi-page.html', 'sobre-mi-container');
        await loadComponent('components/footer.html', 'footer-container');
        
        console.log('Sobre Mi page initialized successfully');
    } catch (error) {
        console.error('Error initializing Sobre Mi page:', error);
    }
}

// ================================================
// COMPONENT LOADER
// ================================================

async function loadComponent(componentPath, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container ${containerId} not found`);
        return;
    }
    
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}`);
        }
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}
