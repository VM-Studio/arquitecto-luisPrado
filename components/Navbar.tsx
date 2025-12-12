'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteData, NavItem } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link href="/" className="nav__logo">
          <span className="nav__logo-icon">📐</span>
        </Link>

        <button
          className="nav__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav__menu ${isOpen ? 'show' : ''}`}>
          <ul className="nav__list">
            {siteData.navigation.map((item: NavItem, index: number) => (
              <li key={index} className="nav__item">
                {item.isCTA ? (
                  <Link
                    href={item.href}
                    className="nav__link nav__link--cta"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="nav__link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
