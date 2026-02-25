"use client"
import React, { useEffect, useState, useCallback } from 'react'

interface Props {
  images: string[]
}

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0)
  const len = images.length

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + len) % len)
  }, [len])

  const next = useCallback(() => {
    setIndex(i => (i + 1) % len)
  }, [len])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  if (!images || images.length === 0) return null

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <img src={images[index]} alt={`Imagen ${index + 1}`} className="carousel__image" />
      </div>

      <button
        className="carousel__arrow carousel__arrow--left"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        aria-label="Anterior"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        className="carousel__arrow carousel__arrow--right"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        aria-label="Siguiente"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="carousel__indicators">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === index ? 'carousel__dot--active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setIndex(i)
            }}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
