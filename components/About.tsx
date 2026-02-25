'use client'

import { useState } from 'react'
import Image from 'next/image'
import { siteData } from '@/lib/data'

export default function About() {
  const { about } = siteData
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    '/assets/images/casa1.png',
    '/assets/images/casa2.png',
    '/assets/images/casa3.png',
    '/assets/images/casa4.png',
    '/assets/images/casa5.png',
    '/assets/images/casa6.png',
    '/assets/images/casa7.png',
    '/assets/images/casa8.png',
    '/assets/images/casa9.png',
    '/assets/images/casa10.png',
    '/assets/images/casa11.png',
    '/assets/images/casa12.png'
  ]

  const nextImage = () => {
    setCurrentImage((prev) => {
      const next = (prev + 1) % images.length
      console.log('Next image:', next)
      return next
    })
  }

  const prevImage = () => {
    setCurrentImage((prev) => {
      const previous = (prev - 1 + images.length) % images.length
      console.log('Previous image:', previous)
      return previous
    })
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
            type="button"
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
            type="button"
            className="about__carousel-btn about__carousel-btn--next" 
            onClick={nextImage}
            aria-label="Siguiente imagen"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
