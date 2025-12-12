// ===============================================
// PORTFOLIO RENDERER MODULE
// ===============================================

export class PortfolioRenderer {
    static renderPortfolio(portfolioData) {
        const portfolioGrid = document.getElementById('portfolioGrid');
        if (!portfolioGrid) return;

        portfolioGrid.innerHTML = '';

        portfolioData.forEach(project => {
            const card = this.createProjectCard(project);
            portfolioGrid.appendChild(card);
        });
    }

    static createProjectCard(project) {
        const card = document.createElement('article');
        card.className = 'portfolio-card';
        card.setAttribute('data-category', project.category);

        // Build specs HTML
        const specsHTML = [];
        if (project.specs.rooms) {
            specsHTML.push(`<span class="portfolio-card__spec">${project.specs.rooms}</span>`);
        }
        if (project.specs.area) {
            specsHTML.push(`<span class="portfolio-card__spec">${project.specs.area}</span>`);
        }
        if (project.specs.year) {
            specsHTML.push(`<span class="portfolio-card__spec">Año ${project.specs.year}</span>`);
        }

        card.innerHTML = `
            <div class="portfolio-card__image-container">
                <img src="${project.image}" alt="${project.title}" class="portfolio-card__image" loading="lazy">
                <span class="portfolio-card__category">${project.category}</span>
            </div>
            <div class="portfolio-card__content">
                <h3 class="portfolio-card__title">${project.title}</h3>
                <p class="portfolio-card__location">${project.location}</p>
                <p class="portfolio-card__description">${project.description}</p>
                <div class="portfolio-card__specs">
                    ${specsHTML.join('')}
                </div>
            </div>
        `;

        return card;
    }
}
