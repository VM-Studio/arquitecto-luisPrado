'use client'

import Link from 'next/link'
import { siteData, ServiceCategory } from '@/lib/data'

export default function ServiciosPage() {
  const { servicesSection, serviceCategories } = siteData

  return (
    <main>
      <section className="servicios-categories">
        <div className="servicios-categories__container">
          <div className="servicios-categories__header">
            <h1 className="servicios-categories__title">Soluciones integrales para tu proyecto en Córdoba</h1>
          </div>

          <div className="servicios-categories__grid">
            {serviceCategories.map((category: ServiceCategory, index: number) => (
              <Link
                key={category.id}
                href={`/servicios/categoria/${category.slug}`}
                className="servicios-categories__card"
              >
                <div className="servicios-categories__card-icon">
                  <span className="servicios-categories__card-icon-text">
                    {index === 0 ? '01' : '02'}
                  </span>
                </div>
                <div className="servicios-categories__card-content">
                  <h2 className="servicios-categories__card-title">{category.title}</h2>
                  <p className="servicios-categories__card-description">
                    {category.description}
                  </p>
                  <div className="servicios-categories__card-count">
                    {category.services.length} servicios disponibles
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="servicios-page__cta">
            <h2 className="servicios-page__cta-title">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="servicios-page__cta-description">
              Contáctame hoy para una consulta gratuita y convirtamos tu visión en realidad. Con más de 25 años de experiencia, te acompañaré en cada paso del camino.
            </p>
            <a 
              href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
              className="servicios-page__cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Consulta Gratuita
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
