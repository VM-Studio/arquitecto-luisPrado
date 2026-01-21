import { siteData, Service } from '@/lib/data'
import Link from 'next/link'

export default function Services() {
  const { services, servicesSection } = siteData

  return (
    <section className="services" id="servicios">
      <div className="services__header">
        <h2 className="services__title">{servicesSection.title}</h2>
      </div>
      <div className="services__grid">
        {services.map((service: Service) => {
          // Mapear el tag al slug correcto de la URL
          const categorySlug = service.tag === "Arquitectura" 
            ? "arquitectura" 
            : "construccion"
          const categoryUrl = `/servicios/categoria/${categorySlug}`
          
          return (
            <Link 
              key={service.id} 
              href={categoryUrl}
              className="service-card"
            >
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
            </Link>
          )
        })}
      </div>
    </section>
  )
}
