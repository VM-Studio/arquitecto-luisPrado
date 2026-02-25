import Link from 'next/link'
import { siteData, ServiceCategory } from '@/lib/data'

export default function ServicesHome() {
  const { serviceCategories, servicesSection } = siteData

  return (
    <section className="servicios-categories" id="servicios-home">
      <div className="servicios-categories__container">
        <div className="servicios-categories__header">
          <h2 className="servicios-categories__title">{servicesSection.title}</h2>
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
                <h3 className="servicios-categories__card-title">{category.title}</h3>
                <p className="servicios-categories__card-description">{category.description}</p>
                <div className="servicios-categories__card-count">
                  {category.services.length} servicios disponibles
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
