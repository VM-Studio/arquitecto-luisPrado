'use client'

import Image from 'next/image'
import { siteData } from '@/lib/data'

export default function WhatsAppButton() {
  const whatsappNumber = siteData.contact.whatsapp
  const whatsappMessage = '¡Hola! Me gustaría consultar sobre sus servicios de arquitectura.'
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <button 
      onClick={handleClick}
      className="whatsapp-float-button"
      aria-label="Contactar por WhatsApp"
    >
      <Image 
        src="/assets/images/wap.png" 
        alt="WhatsApp" 
        width={60} 
        height={60}
        priority
      />
    </button>
  )
}
