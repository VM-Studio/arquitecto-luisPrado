'use client'

import { use } from 'react'
import Link from 'next/link'
import { siteData, ServiceCategory } from '@/lib/data'
import { notFound } from 'next/navigation'

export default function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = use(params)
  const { serviceCategories } = siteData
  
  // Encontrar la categoría basada en el slug
  const category = serviceCategories.find(
    (cat: ServiceCategory) => cat.slug === categoria
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
        </div>
      </section>
    </main>
  )
}
