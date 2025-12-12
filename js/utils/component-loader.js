// ===============================================
// COMPONENT LOADER MODULE
// ===============================================

export class ComponentLoader {
    /**
     * Load an HTML component from a file
     * @param {string} path - Path to the component file
     * @returns {Promise<string>} - HTML content
     */
    static async loadComponent(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${path}`);
            }
            return await response.text();
        } catch (error) {
            console.error(`Error loading component from ${path}:`, error);
            return '';
        }
    }

    /**
     * Load and inject a component into a target element
     * @param {string} path - Path to the component file
     * @param {string} targetSelector - CSS selector for target element
     * @returns {Promise<void>}
     */
    static async injectComponent(path, targetSelector) {
        const html = await this.loadComponent(path);
        const target = document.querySelector(targetSelector);
        
        if (target && html) {
            target.innerHTML = html;
        } else if (!target) {
            console.error(`Target element not found: ${targetSelector}`);
        }
    }

    /**
     * Load multiple components in parallel
     * @param {Array<{path: string, target: string}>} components
     * @returns {Promise<void>}
     */
    static async loadComponents(components) {
        const promises = components.map(({ path, target }) => 
            this.injectComponent(path, target)
        );
        await Promise.all(promises);
    }
}
