import { siteData } from '@/lib/data'

export default function About() {
  const { about } = siteData

  return (
    <section className="about" id="nosotros">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">{about.title}</h2>
          <p className="about__description">{about.description}</p>
        </div>
        <div className="about__image">
          <img
            src={about.image}
            alt="Sobre nosotros"
          />
        </div>
      </div>
    </section>
  )
}
