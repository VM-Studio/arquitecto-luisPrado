import { siteData, PortfolioProject } from '@/lib/data'

export default function PortfolioPage() {
  const { portfolio } = siteData

  return (
    <main className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero__container">
          <h1 className="portfolio-hero__title">Portfolio</h1>
          <p className="portfolio-hero__description">
            Más de 104 proyectos ejecutados en Córdoba
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats">
        <div className="portfolio-stats__container">
          <div className="portfolio-stats__item">
            <span className="portfolio-stats__number">+104</span>
            <span className="portfolio-stats__label">Obras Ejecutadas</span>
          </div>
          <div className="portfolio-stats__item">
            <span className="portfolio-stats__number">+25</span>
            <span className="portfolio-stats__label">Años de Experiencia</span>
          </div>
          <div className="portfolio-stats__item">
            <span className="portfolio-stats__number">100%</span>
            <span className="portfolio-stats__label">Clientes Satisfechos</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-projects">
        <div className="portfolio-projects__container">
          <h2 className="portfolio-projects__title">Proyectos Destacados</h2>
          <div className="portfolio-grid">
            {portfolio.map((project: PortfolioProject, index: number) => (
              <article key={project.id} className={`portfolio-item ${index === 0 ? 'portfolio-item--featured' : ''}`}>
                <div className="portfolio-item__image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="portfolio-item__category">{project.category}</div>
                </div>
                <div className="portfolio-item__content">
                  <h3 className="portfolio-item__title">{project.title}</h3>
                  <p className="portfolio-item__location">{project.location}</p>
                  <div className="portfolio-item__specs">
                    {project.specs.rooms && (
                      <span className="portfolio-item__spec">{project.specs.rooms} amb</span>
                    )}
                    <span className="portfolio-item__spec">{project.specs.area}</span>
                    <span className="portfolio-item__spec">{project.specs.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="portfolio-cta__container">
          <h2 className="portfolio-cta__title">¿Tenés un proyecto en mente?</h2>
          <p className="portfolio-cta__description">
            Contactame para una consulta gratuita
          </p>
          <a 
            href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-cta__button"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
