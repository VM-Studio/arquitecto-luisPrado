import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteData, ServiceDetail } from '@/lib/data'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  let service: ServiceDetail | undefined
  
  for (const category of siteData.serviceCategories) {
    const found = category.services.find(s => s.slug === slug)
    if (found) {
      service = found
      break
    }
  }

  if (!service) {
    return {
      title: 'Servicio no encontrado',
      description: 'El servicio que buscas no está disponible'
    }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    }
  }
}

// Generar todas las páginas estáticas en build time
export function generateStaticParams() {
  const slugs: { slug: string }[] = []
  
  siteData.serviceCategories.forEach(category => {
    category.services.forEach(service => {
      slugs.push({ slug: service.slug })
    })
  })
  
  return slugs
}

export default function ServiceLandingPage({ params }: PageProps) {
  const { slug } = use(params)
  
  // Buscar el servicio por slug
  let service: ServiceDetail | undefined
  let relatedServices: ServiceDetail[] = []
  
  for (const category of siteData.serviceCategories) {
    const found = category.services.find(s => s.slug === slug)
    if (found) {
      service = found
      relatedServices = category.services.filter(s => s.slug !== slug)
      break
    }
  }

  if (!service) {
    notFound()
  }

  // Determinar qué servicios mostrar según la categoría
  const categoryServices = siteData.serviceCategories.find(
    cat => cat.id === service!.category
  )

  return (
    <main className="service-landing">
      {/* Botón Volver */}
      <div className="service-landing__back-container">
        <Link href={`/servicios/categoria/${service.category}`} className="service-landing__back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver
        </Link>
      </div>

      {/* Hero Section */}
      <section className="service-landing__hero">
        <div className="service-landing__hero-container">
          <div className="service-landing__hero-content">
            <h1 className="service-landing__hero-title">{service.heroTitle}</h1>
            <p className="service-landing__hero-description">
              {service.heroDescription}
            </p>
            <a 
              href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-landing__hero-button"
            >
              Solicitar Asesoría
            </a>
          </div>
          <div className="service-landing__hero-image">
            <img src={service.image} alt={service.heroTitle} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-landing__features">
        <div className="service-landing__container">
          <h2 className="service-landing__section-title">
            ¿Qué incluye?
          </h2>
          <div className="service-landing__features-grid">
            {service.features.map((feature, index) => (
              <div key={index} className="service-landing__feature-item">
                <span className="service-landing__feature-check">✓</span>
                <p className="service-landing__feature-text">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-landing__benefits">
        <div className="service-landing__container">
          <h2 className="service-landing__section-title">
            Beneficios
          </h2>
          <div className="service-landing__benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="service-landing__benefit-item">
                <span className="service-landing__benefit-icon">✓</span>
                <p className="service-landing__benefit-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {categoryServices && categoryServices.services.length > 1 && (
        <section className="service-landing__related">
          <div className="service-landing__container">
            <h2 className="service-landing__section-title">
              Otros servicios
            </h2>
            <div className="service-landing__related-grid">
              {categoryServices.services
                .filter(s => s.slug !== service!.slug)
                .slice(0, 3)
                .map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    href={`/servicios/${relatedService.slug}`}
                    className="service-landing__related-card"
                  >
                    <div className="service-landing__related-image">
                      <img src={relatedService.image} alt={relatedService.name} />
                    </div>
                    <h3 className="service-landing__related-title">
                      {relatedService.name}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="service-landing__cta">
        <div className="service-landing__container">
          <div className="service-landing__cta-content">
            <h2 className="service-landing__cta-title">
              ¿Listo para comenzar?
            </h2>
            <p className="service-landing__cta-description">
              Contactame para una consulta gratuita
            </p>
            <a 
              href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-landing__cta-button"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
