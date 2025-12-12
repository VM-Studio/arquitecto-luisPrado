'use client'

import Link from 'next/link'
import { siteData, Service } from '@/lib/data'

export default function ServiciosPage() {
  const { servicesSection, services } = siteData

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

          <div className="services__grid">
            {services.map((service: Service) => (
              <article key={service.id} className="service-card">
                <div className="service-card__image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                <div className="service-card__content">
                  <span className="service-card__tag">{service.tag}</span>
                  <h3 className="service-card__title">{service.title}</h3>
                  <ul className="service-card__list">
                    {service.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

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
