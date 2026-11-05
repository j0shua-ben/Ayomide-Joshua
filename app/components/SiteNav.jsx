'use client'

import { useEffect, useState } from 'react'

const navItems = [
  ['Services', '#services'],
  ['Process', '#process'],
  ['Expertise', '#expertise'],
  ['Work', '#work'],
  ['About', '#about'],
  ['FAQ', '#faq'],
]

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-inner">
        <a className="brand brand-wordmark" href="#top" onClick={closeMenu} aria-label="Ayomide Joshua home">
          <span className="brand-name"><span>AYOMIDE</span><span>JOSHUA</span></span>
          <span className="brand-underline" aria-hidden="true"></span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span><span></span>
        </button>
      </div>
      <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{label}</a>
        ))}
        <a className="mobile-menu-cta" href="#contact" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
          Start a project <span>↗</span>
        </a>
      </nav>
    </header>
  )
}
