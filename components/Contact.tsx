'use client'

import { useState } from 'react'
import { siteData } from '@/lib/data'

export default function Contact() {
  const { contactSection, contact } = siteData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

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
    <section className="contact" id="contacto">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">{contactSection.title}</h2>
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
    </section>
  )
}
