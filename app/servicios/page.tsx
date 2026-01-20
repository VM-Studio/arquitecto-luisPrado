'use client'

import Link from 'next/link'
import { siteData, ServiceCategory } from '@/lib/data'

export default function ServiciosPage() {
  const { servicesSection, serviceCategories } = siteData

  return (
    <main>
      <section className="servicios-page">
        <div className="servicios-page__container">
          <div className="servicios-page__header">
            <h1 className="servicios-page__title">{servicesSection.title}</h1>
            <p className="servicios-page__subtitle">
              Ofrecemos soluciones integrales de arquitectura y construcción, adaptadas a las necesidades específicas de cada proyecto en Córdoba
            </p>
          </div>

          {serviceCategories.map((category: ServiceCategory) => (
            <div key={category.id} className="servicios-page__category">
              <div className="servicios-page__category-header">
                <h2 className="servicios-page__category-title">{category.title}</h2>
                <p className="servicios-page__category-description">
                  {category.description}
                </p>
              </div>

              <div className="servicios-page__services-grid">
                {category.services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/servicios/${service.slug}`}
                    className="servicios-page__service-card"
                  >
                    <div className="servicios-page__service-image">
                      <img
                        src={service.image}
                        alt={service.name}
                      />
                    </div>
                    <div className="servicios-page__service-content">
                      <h3 className="servicios-page__service-title">
                        {service.name}
                      </h3>
                      <p className="servicios-page__service-link">
                        Ver más información
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="servicios-page__cta">
            <h2 className="servicios-page__cta-title">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="servicios-page__cta-description">
              Contáctame hoy para una consulta gratuita y convirtamos tu visión en realidad. Con más de 25 años de experiencia, te acompañaré en cada paso del camino.
            </p>
            <Link href="/contacto" className="servicios-page__cta-button">
              Solicitar Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
