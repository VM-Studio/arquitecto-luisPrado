'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import ServicesHome from '@/components/ServicesHome'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesHome />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
