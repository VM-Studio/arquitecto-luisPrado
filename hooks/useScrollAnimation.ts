'use client'

import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    // Intersection Observer para detectar cuando las secciones entran en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1, // Se activa cuando el 10% de la sección es visible
        rootMargin: '0px 0px -50px 0px' // Offset para activar un poco antes
      }
    )

    // Observar todas las secciones excepto el hero
    const sections = document.querySelectorAll('section:not(.hero)')
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])
}
