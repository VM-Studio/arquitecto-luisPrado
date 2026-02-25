import { siteData } from '@/lib/data'
import ImageCarousel from './ImageCarousel'
import Link from 'next/link'

export default function Portfolio() {
  const { portfolio } = siteData

  // Predefine ampliaciones images for the first card
  const ampliacionImages = Array.from({ length: 7 }, (_, i) => `/assets/images/ampliacion${i + 1}.png`)
  // Predefine refacciones images for the second card
  const refaccionImages = Array.from({ length: 10 }, (_, i) => `/assets/images/refraccion${i + 1}.png`)
  // Predefine obras images for the third card
  const obraImages = Array.from({ length: 14 }, (_, i) => `/assets/images/obra${i + 1}.png`)
  // Predefine pintura images for the fourth card
  const pinturaImages = Array.from({ length: 10 }, (_, i) => `/assets/images/pintura${i + 1}.png`)
  // Predefine casas images for the fifth card (proyectos de viviendas)
  const casaImages = Array.from({ length: 9 }, (_, i) => `/assets/images/casa${i + 4}.png`)

  return (
  <section className="portfolio-section" id="portafolio">
      <div className="portfolio-section__container">
        <header className="portfolio-section__header">
          <h2 className="portfolio-section__title">Portafolio</h2>
        </header>

        <div className="portfolio-grid">
          {portfolio.map((p, idx) => {
            const hasLabel = idx === 0 || idx === 1 || idx === 2 || idx === 3 || idx === 4 || idx === 5
            return (
              <article
                key={p.id}
                className={`portfolio-card ${idx === 0 ? 'portfolio-card--featured' : ''} ${
                  hasLabel ? 'portfolio-card--has-external-label' : ''
                }`}
              >
                {/* External labels above the card when applicable */}
                {idx === 0 && <div className="portfolio-card__external-label">Ampliaciones</div>}
                {idx === 1 && <div className="portfolio-card__external-label">Refacciones</div>}
                {idx === 2 && <div className="portfolio-card__external-label">Obras</div>}
                {idx === 3 && <div className="portfolio-card__external-label">Pintura</div>}
                {idx === 4 && <div className="portfolio-card__external-label">Proyectos de viviendas</div>}
                {idx === 5 && <div className="portfolio-card__external-label">Gas y Electricidad</div>}

                <Link
                  href={
                    idx === 0
                      ? '/servicios/ampliaciones'
                      : idx === 1
                      ? '/servicios/refacciones'
                      : idx === 2
                      ? '/servicios/proyectos-vivienda-locales-comerciales'
                      : idx === 3
                      ? '/servicios/pintura'
                      : idx === 4
                      ? '/servicios/proyectos-vivienda-locales-comerciales'
                      : idx === 5
                      ? '/servicios/instalaciones-gas-electricas'
                      : '#'
                  }
                  className="portfolio-card__media"
                >
                  {idx === 0 ? (
                    // show a small carousel for the featured card
                    <div className="portfolio-card__carousel">
                      <ImageCarousel images={ampliacionImages} />
                    </div>
                  ) : idx === 1 ? (
                    // second card: refacciones carousel
                    <div className="portfolio-card__carousel">
                      <ImageCarousel images={refaccionImages} />
                    </div>
                  ) : idx === 2 ? (
                    // third card: obras carousel
                    <div className="portfolio-card__carousel">
                      <ImageCarousel images={obraImages} />
                    </div>
                  ) : idx === 3 ? (
                    // fourth card: pintura carousel
                    <div className="portfolio-card__carousel">
                      <ImageCarousel images={pinturaImages} />
                    </div>
                  ) : idx === 4 ? (
                    // fifth card: proyectos de viviendas (casa images)
                    <div className="portfolio-card__carousel">
                      <ImageCarousel images={casaImages} />
                    </div>
                  ) : idx === 5 ? (
                    // sixth (last) card: Gas y Electricidad - single image
                    <div className="portfolio-card__carousel">
                      <img className="carousel__image" src="/assets/images/instalaciongas.png" alt="Instalaciones de Gas y Electricidad" loading="lazy" />
                    </div>
                  ) : (
                    <>
                      <img src={p.image} alt={p.title} loading="lazy" />
                      <div className="portfolio-card__overlay">
                        <div className="portfolio-card__meta">
                          <span className="portfolio-card__category">{p.category}</span>
                          <h3 className="portfolio-card__title">{p.title}</h3>
                          <span className="portfolio-card__year">{p.specs?.year ?? ''}</span>
                        </div>
                      </div>
                    </>
                  )}
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
