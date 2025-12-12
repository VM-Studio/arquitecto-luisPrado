// ===============================================
// CONTENT RENDERER MODULE
// ===============================================

export class ContentRenderer {
    constructor(data) {
        this.data = data;
    }

    /**
     * Render all dynamic content
     */
    renderAll() {
        this.renderHero();
        this.renderAbout();
        this.renderServices();
        this.renderCTA();
        this.renderContact();
        this.renderFooter();
    }

    /**
     * Render hero section content
     */
    renderHero() {
        const { hero } = this.data;
        
        this.setTextContent('heroTitle', hero.title);
        this.setTextContent('heroDescription', hero.description);
        this.setTextContent('heroButton', hero.ctaText);
        this.setImageSrc('heroMainImage', hero.mainImage, 'Luis Prado Arquitecto');
        this.setImageSrc('heroBackgroundImage', hero.backgroundImage, 'Background');
    }

    /**
     * Render about section content
     */
    renderAbout() {
        const { about } = this.data;
        
        this.setTextContent('aboutTitle', about.title);
        this.setTextContent('aboutDescription', about.description);
        this.setImageSrc('aboutImage', about.image, 'Profesionalismo y compromiso');
    }

    /**
     * Render services section
     */
    renderServices() {
        const servicesGrid = document.getElementById('servicesGrid');
        if (!servicesGrid) return;

        const servicesHTML = this.data.services.map(service => `
            <article class="service-card">
                <div class="service-card__image">
                    <img src="${service.image}" alt="${service.title}" />
                </div>
                <div class="service-card__content">
                    <span class="service-card__tag">${service.tag}</span>
                    <h3 class="service-card__title">${service.title}</h3>
                    <ul class="service-card__list">
                        ${service.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </article>
        `).join('');

        servicesGrid.innerHTML = servicesHTML;
    }

    /**
     * Render CTA section content
     */
    renderCTA() {
        const { cta } = this.data;
        
        this.setTextContent('ctaTitle', cta.title);
        this.setTextContent('ctaDescription', cta.description);
        this.setTextContent('ctaBadge', cta.badge);
        this.setTextContent('ctaBottomTitle', cta.bottomTitle);
        this.setTextContent('ctaButton', cta.ctaText);
        this.setImageSrc('ctaImage', cta.image, 'Proyectos exitosos');
    }

    /**
     * Render contact section content
     */
    renderContact() {
        const { contactSection, contact } = this.data;
        
        this.setTextContent('contactTitle', contactSection.title);
        this.setTextContent('contactDescription', contactSection.description);
        this.setTextContent('contactCTA', contactSection.ctaText);
        
        const emailLink = document.getElementById('contactEmail');
        const emailSecondaryLink = document.getElementById('contactEmailSecondary');
        
        if (emailLink) {
            emailLink.href = `mailto:${contact.email}`;
            emailLink.textContent = contact.email;
        }
        
        if (emailSecondaryLink) {
            emailSecondaryLink.href = `mailto:${contact.emailSecondary}`;
            emailSecondaryLink.textContent = contact.emailSecondary;
        }
    }

    /**
     * Render footer content
     */
    renderFooter() {
        const { footer, contact, social } = this.data;
        
        this.setTextContent('footerName', this.data.name);
        this.setTextContent('footerTagline', this.data.title);
        this.setTextContent('footerCopyright', footer.copyright);
        this.setImageSrc('footerLogo', footer.logo, 'Luis Prado Arquitecto');
        
        this.renderSocialLinks(social);
        this.renderCertifications(footer.certifications);
    }

    /**
     * Render social links
     */
    renderSocialLinks(social) {
        const socialContainer = document.getElementById('footerSocial');
        if (!socialContainer) return;

        const socialHTML = `
            <a href="mailto:${this.data.contact.email}" class="footer__social-link" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            </a>
            <a href="${social.whatsapp}" class="footer__social-link" aria-label="WhatsApp" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
            </a>
            <a href="${social.instagram}" class="footer__social-link" aria-label="Instagram" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            </a>
        `;

        socialContainer.innerHTML = socialHTML;
    }

    /**
     * Render certifications
     */
    renderCertifications(certifications) {
        const certsContainer = document.getElementById('footerCertifications');
        if (!certsContainer) return;

        const certsHTML = certifications.map(cert => `
            <img src="${cert}" alt="Certificación" />
        `).join('');

        certsContainer.innerHTML = certsHTML;
    }

    /**
     * Helper: Set text content safely
     */
    setTextContent(elementId, content) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = content;
        }
    }

    /**
     * Helper: Set image src safely
     */
    setImageSrc(elementId, src, alt) {
        const element = document.getElementById(elementId);
        if (element) {
            element.src = src;
            if (alt) element.alt = alt;
        }
    }
}
