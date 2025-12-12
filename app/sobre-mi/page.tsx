import Link from 'next/link'
import { siteData } from '@/lib/data'

export default function SobreMiPage() {
  const { sobreMi } = siteData

  return (
    <main>
      <section className="sobre-mi-page">
        <div className="sobre-mi-page__container">
          <div className="sobre-mi-page__content">
            <h1 className="sobre-mi-page__title">{sobreMi.title}</h1>
            
            <div className="sobre-mi-page__text">
              {sobreMi.paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <Link href={sobreMi.ctaLink} className="sobre-mi-page__button">
              {sobreMi.ctaText}
            </Link>
          </div>
          
          <div className="sobre-mi-page__image">
            <img
              src={sobreMi.image}
              alt="Luis Prado Arquitecto"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
