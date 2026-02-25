import Link from 'next/link'
import { siteData } from '@/lib/data'

export default function Hero() {
  const { hero } = siteData

  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__description">{hero.description}</p>
          <a
            href={hero.ctaLink}
            className="hero__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.ctaText}
          </a>
        </div>

        <div className="hero__right">
          <img src="/assets/images/hero1.png" alt={hero.title} className="hero__right-image" />
        </div>
      </div>
    </section>
  )
}
