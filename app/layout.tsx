import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luis Prado - Arquitecto en Córdoba',
  description: 'Arquitecto con más de 25 años de experiencia en Córdoba, Argentina. Especializado en proyectos residenciales, comerciales y ampliaciones.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
