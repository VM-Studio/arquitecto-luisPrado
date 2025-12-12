'use client'

import { useState, useEffect } from 'react'
import { siteData } from '@/lib/data'

export default function ContactoPage() {
  const { contactSection, contact } = siteData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    // Animación de entrada para la página
    const sections = document.querySelectorAll('.contacto-page, .contact__container')
    sections.forEach((section) => {
      section.classList.add('visible')
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main>
      <section className="contacto-page">
        <div className="contacto-page__container">
          <div className="contacto-page__header">
            <h1 className="contacto-page__title">Hablemos de tu Proyecto</h1>
            <p className="contacto-page__description">
              Estoy aquí para ayudarte a convertir tus ideas en realidad. Completa el formulario y me pondré en contacto contigo a la brevedad.
            </p>
          </div>

          <div className="contact__container">
            <div className="contact__content">
              <h2 className="contact__title">{contactSection.title}</h2>
              <p className="contact__description">{contactSection.description}</p>
              
              <div className="contact__details">
                <p className="contact__subtitle">Contacto</p>
                <a href={`mailto:${contact.email}`} className="contact__link">
                  {contact.email}
                </a>
                <a href={`mailto:${contact.emailSecondary}`} className="contact__link">
                  {contact.emailSecondary}
                </a>
                <a href={`tel:${contact.phone}`} className="contact__link">
                  {contact.phone}
                </a>
              </div>

              <a href={`https://wa.me/${contact.whatsapp}`} className="contact__cta-button" target="_blank" rel="noopener noreferrer">
                {contactSection.ctaText}
              </a>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__group form__group--full">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form__input"
                />
              </div>

              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form__input"
                />
              </div>
              
              <div className="form__group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form__input"
                />
              </div>

              <div className="form__group form__group--full">
                <textarea
                  name="message"
                  placeholder="Contanos sobre tu proyecto"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form__input form__textarea"
                ></textarea>
              </div>

              <div className="form__group form__group--full">
                <button type="submit" className="form__submit">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
