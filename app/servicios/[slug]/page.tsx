import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteData, ServiceDetail } from '@/lib/data'
import { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  let service: ServiceDetail | undefined
  
  for (const category of siteData.serviceCategories) {
    const found = category.services.find(s => s.slug === params.slug)
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
  // Buscar el servicio por slug
  let service: ServiceDetail | undefined
  let relatedServices: ServiceDetail[] = []
  
  for (const category of siteData.serviceCategories) {
    const found = category.services.find(s => s.slug === params.slug)
    if (found) {
      service = found
      relatedServices = category.services.filter(s => s.slug !== params.slug)
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
      {/* Hero Section */}
      <section className="service-landing__hero">
        <div className="service-landing__hero-container">
          <div className="service-landing__hero-content">
            <h1 className="service-landing__hero-title">{service.heroTitle}</h1>
            <p className="service-landing__hero-description">
              {service.heroDescription}
            </p>
            <div className="service-landing__hero-cta">
              <a 
                href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Solicitar Presupuesto Gratuito
              </a>
              <a 
                href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Consultar por WhatsApp
              </a>
            </div>
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
            ¿Qué incluye nuestro servicio de {service.name}?
          </h2>
          <div className="service-landing__features-grid">
            {service.features.map((feature, index) => (
              <div key={index} className="service-landing__feature-card">
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
            ¿Por qué elegirnos para tu proyecto?
          </h2>
          <div className="service-landing__benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="service-landing__benefit-card">
                <p className="service-landing__benefit-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {categoryServices && (
        <section className="service-landing__related">
          <div className="service-landing__container">
            <h2 className="service-landing__section-title">
              Otros servicios de {categoryServices.name}
            </h2>
            <div className="service-landing__related-grid">
              {categoryServices.services
                .filter(s => s.slug !== service!.slug)
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
                    <p className="service-landing__related-link">
                      Ver más →
                    </p>
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
              ¿Listo para comenzar tu proyecto de {service.name}?
            </h2>
            <p className="service-landing__cta-description">
              Contáctame hoy para una consulta gratuita. Con más de 25 años de 
              experiencia y +104 obras ejecutadas, te garantizo un servicio 
              profesional de calidad.
            </p>
            <div className="service-landing__cta-buttons">
              <a 
                href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
              >
                Solicitar Consulta Gratuita
              </a>
              <Link href="/portfolio" className="btn btn--secondary btn--large">
                Ver Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="service-landing__contact-info">
        <div className="service-landing__container">
          <div className="service-landing__contact-grid">
            <div className="service-landing__contact-item">
              <h3>📧 Email</h3>
              <p>{siteData.contact.email}</p>
            </div>
            <div className="service-landing__contact-item">
              <h3>📱 Teléfono</h3>
              <p>{siteData.contact.phone}</p>
            </div>
            <div className="service-landing__contact-item">
              <h3>📍 Ubicación</h3>
              <p>{siteData.location}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
