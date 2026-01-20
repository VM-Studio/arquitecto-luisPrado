'use client'

import Link from 'next/link'
import { siteData, ServiceCategory } from '@/lib/data'
import { notFound } from 'next/navigation'

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const { serviceCategories } = siteData
  
  // Encontrar la categoría basada en el slug
  const category = serviceCategories.find(
    (cat: ServiceCategory) => cat.title.toLowerCase() === params.categoria.toLowerCase()
  )

  if (!category) {
    notFound()
  }

  return (
    <main>
      <section className="servicios-page">
        <div className="servicios-page__container">
          {/* Botón Volver */}
          <div className="servicios-page__back">
            <Link href="/servicios" className="servicios-page__back-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Volver a Servicios
            </Link>
          </div>

          <div className="servicios-page__header">
            <h1 className="servicios-page__title">{category.title}</h1>
            <p className="servicios-page__subtitle">
              {category.description}
            </p>
          </div>

          <div className="servicios-page__category">
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
