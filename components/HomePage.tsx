'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function HomePage() {
  useScrollAnimation()

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}
