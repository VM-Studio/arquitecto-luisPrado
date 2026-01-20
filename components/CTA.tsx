import { siteData } from '@/lib/data'

export default function CTA() {
  const { cta } = siteData

  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">{cta.title}</h2>
          <p className="cta__description">{cta.description}</p>
          <div className="cta__badge">
            <span className="cta__badge-text">{cta.badge}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
