'use client'

import { useEffect, useState } from 'react'

const services = [
  ['01', 'Shopify Management', 'Hands-on store management, product updates, merchandising, QA and day-to-day ecommerce support.'],
  ['02', 'Shopify CRO', 'Customer-journey analysis, product-page optimization and conversion-focused improvements built around buying friction.'],
  ['03', 'Store Optimization', 'UX, mobile experience, trust signals, product presentation, speed priorities and ecommerce growth opportunities.'],
]

const cases = [
  { tag: 'CRO / E-COMMERCE', title: 'Mistfall', text: 'A focused Shopify recovery and CRO roadmap covering product pages, homepage structure, mobile UX, cart and checkout friction.' },
  { tag: 'FRAGRANCE E-COMMERCE', title: 'ScentsAppeal', text: 'Conversion-minded merchandising and premium commercial creative direction for a fragrance ecommerce brand.' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const root = document.documentElement

    const onMove = (event) => {
      root.style.setProperty('--mx', `${(event.clientX / window.innerWidth - 0.5) * 2}`)
      root.style.setProperty('--my', `${(event.clientY / window.innerHeight - 0.5) * 2}`)
    }

    const onScroll = () => setScrolled(window.scrollY > 56)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Ayomide Joshua home">
            <span className="brand-mark" aria-hidden="true"><span>A</span><span>J</span></span>
            <span className="brand-copy">
              <strong>Ayomide Joshua</strong>
              <small>Shopify &amp; E-commerce Growth</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </nav>

          <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <span></span><span></span>
          </button>
        </div>

        <div className="mobile-menu">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="mobile-menu-cta" href="#contact" onClick={closeMenu}>Start a project <span>↗</span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-word" aria-hidden="true">CRO</div>
          <div className="hero-word-small" aria-hidden="true">GROWTH</div>

          <div className="container hero-inner">
            <div className="hero-copy-block">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                <span>Shopify / CRO / E-commerce growth</span>
              </div>

              <h1 id="hero-title" className="hero-title">
                <span className="title-line" data-text="Shopify.">Shopify<span className="title-dot">.</span></span>
                <span className="title-line title-offset" data-text="Built to">Built to</span>
                <span className="title-line accent-title" data-text="Convert.">Convert<span className="title-dot">.</span></span>
              </h1>

              <p className="hero-copy">
                I help e-commerce brands make their Shopify stores easier to trust, easier to use and easier to buy from — with CRO at the centre of the growth strategy.
              </p>

              <div className="actions hero-actions">
                <a className="btn btn-primary" href="#contact">Start a project <span>↗</span></a>
                <a className="btn btn-secondary" href="#work"><span className="play-mark">↗</span> View my work</a>
              </div>

              <div className="hero-proof" aria-label="Experience and specialization">
                <div className="proof-item">
                  <strong>3+ Years</strong>
                  <span>E-commerce experience</span>
                </div>
                <div className="proof-item">
                  <strong>Shopify</strong>
                  <span>Management &amp; optimization</span>
                </div>
                <div className="proof-item">
                  <strong>CRO-first</strong>
                  <span>Conversion-led thinking</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Ayomide Joshua — Shopify and e-commerce growth specialist">
              <div className="portrait-stage">
                <div className="portrait-backdrop" aria-hidden="true" />
                <div className="portrait-depth" aria-hidden="true" />
                <div className="portrait-ring ring-one" aria-hidden="true" />
                <div className="portrait-ring ring-two" aria-hidden="true" />
                <img src="/ayomide-headshot.svg" alt="Ayomide Joshua in a navy suit" className="portrait" />

                <div className="visual-tag visual-tag-top">SHOPIFY <span>/</span> CRO</div>
                <div className="visual-tag visual-tag-bottom">AJ <span>01 — GROWTH</span></div>
              </div>

              <div className="floating-chip chip-cro" aria-hidden="true">
                <span>FOCUS</span>
                <strong>CRO</strong>
                <i />
              </div>
            </div>
          </div>

          <div className="hero-bottom container" aria-hidden="true">
            <span>Scroll to explore</span>
            <span className="scroll-line" />
            <span>AJ / 2026</span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <div><div className="kicker">What I do</div><h2>Built around the parts that affect growth.</h2></div>
              <p className="muted">Not just a prettier storefront. The goal is a clearer buying journey, less friction and a store your team can confidently operate.</p>
            </div>
            <div className="services">
              {services.map(([number, title, description]) => (
                <article className="card" key={number}>
                  <span className="card-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="section-head">
              <div><div className="kicker">Selected work</div><h2>Strategy that gets into the store.</h2></div>
              <p className="muted">A few examples of ecommerce work and growth thinking. Detailed case studies can be expanded as the portfolio grows.</p>
            </div>
            <div className="case-grid">
              {cases.map((item) => (
                <article className="case" key={item.title}>
                  <div><div className="case-tag">{item.tag}</div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <div className="case-link">View case study →</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-box">
            <div>
              <div className="kicker">About</div>
              <h2>An ecommerce specialist who thinks beyond the homepage.</h2>
              <p>I’m Ayomide, a Shopify manager and CRO-focused ecommerce specialist. I work across store operations, customer experience and conversion strategy so brands can improve the storefront without losing sight of the business behind it.</p>
              <p>My approach is practical: understand what is happening, identify the biggest opportunities, then turn them into changes that can actually be implemented.</p>
            </div>
            <div className="about-list">
              <div><strong>Shopify</strong><span>Store management, customization &amp; optimization</span></div>
              <div><strong>Conversion Rate Optimization</strong><span>Journey, UX, product pages &amp; checkout</span></div>
              <div><strong>E-commerce operations</strong><span>Products, merchandising, QA &amp; ongoing support</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="contact">
              <div className="kicker">Have a store to improve?</div>
              <h2>Let&apos;s find the opportunities hiding in your customer journey.</h2>
              <p>Tell me what you are working on, where the store is struggling, or simply send the storefront. We can start from there.</p>
              <div className="actions">
                <a className="btn btn-primary" href="mailto:joshuaben023@gmail.com?subject=Shopify%20Store%20Project">Email me →</a>
                <a className="btn btn-secondary" href="#work">See the work</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container">© {new Date().getFullYear()} Ayomide Joshua. Shopify &amp; E-commerce Growth.</div></footer>
    </>
  )
}
