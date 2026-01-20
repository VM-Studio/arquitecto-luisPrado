'use client'

import { useState } from 'react'
import Image from 'next/image'
import { siteData } from '@/lib/data'

export default function About() {
  const { about } = siteData
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    '/assets/images/p1.png',
    '/assets/images/p2.png',
    '/assets/images/p3.png',
    '/assets/images/p4.png',
    '/assets/images/p5.png'
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="about" id="nosotros">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">{about.title}</h2>
          <p className="about__description">{about.description}</p>
        </div>
        
        <div className="about__carousel">
          <button 
            className="about__carousel-btn about__carousel-btn--prev" 
            onClick={prevImage}
            aria-label="Imagen anterior"
          >
            ←
          </button>
          <div className="about__carousel-image">
            <Image
              src={images[currentImage]}
              alt={`Proyecto ${currentImage + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <button 
            className="about__carousel-btn about__carousel-btn--next" 
            onClick={nextImage}
            aria-label="Siguiente imagen"
          >
            →
          </button>
          <div className="about__carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`about__carousel-dot ${index === currentImage ? 'about__carousel-dot--active' : ''}`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
