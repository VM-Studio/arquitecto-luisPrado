import { siteData, PortfolioProject } from '@/lib/data'

export default function PortfolioPage() {
  const { portfolio } = siteData
  const [featuredProject, ...otherProjects] = portfolio

  return (
    <main className="portfolio-page">
      <section className="portfolio-header">
        <div className="portfolio-header__container">
          <h1 className="portfolio-header__title">Portfolio</h1>
          <p className="portfolio-header__description">
            Proyectos arquitectónicos realizados en Córdoba
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="portfolio-featured-section">
        <div className="portfolio-featured-section__container">
          <article className="portfolio-featured">
            <div className="portfolio-featured__image">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
              />
            </div>
            <div className="portfolio-featured__content">
              <h2 className="portfolio-featured__title">{featuredProject.title}</h2>
              <p className="portfolio-featured__subtitle">{featuredProject.description}</p>
              <button className="portfolio-featured__button">Contáctame</button>
            </div>
          </article>
          
          {/* Small Cards Below Featured */}
          <div className="portfolio-featured__grid">
            <div className="portfolio-featured__card">
              <img src={featuredProject.image} alt="Gallery 1" />
            </div>
            <div className="portfolio-featured__card">
              <img src={featuredProject.image} alt="Gallery 2" />
            </div>
            <div className="portfolio-featured__card">
              <img src={featuredProject.image} alt="Gallery 3" />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="portfolio-grid-section__container">
          <div className="portfolio-grid">
            {otherProjects.map((project: PortfolioProject) => (
              <article key={project.id} className="portfolio-card">
                <div className="portfolio-card__image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="portfolio-card__overlay">
                    <span className="portfolio-card__category">{project.category}</span>
                  </div>
                </div>
                <div className="portfolio-card__content">
                  <h3 className="portfolio-card__title">{project.title}</h3>
                  <p className="portfolio-card__location">{project.location}</p>
                  <p className="portfolio-card__description">{project.description}</p>
                  <div className="portfolio-card__specs">
                    {project.specs.rooms && (
                      <span className="portfolio-card__spec">
                        <span className="portfolio-card__spec-label">Ambientes:</span> {project.specs.rooms}
                      </span>
                    )}
                    <span className="portfolio-card__spec">
                      <span className="portfolio-card__spec-label">Área:</span> {project.specs.area}
                    </span>
                    <span className="portfolio-card__spec">
                      <span className="portfolio-card__spec-label">Año:</span> {project.specs.year}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
