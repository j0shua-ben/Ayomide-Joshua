'use client'

import { useEffect, useState } from 'react'

const services = [
  ['01','Shopify Management','Hands-on store management, product updates, merchandising, QA and day-to-day ecommerce support.'],
  ['02','Shopify CRO','Customer-journey analysis, product-page optimization and conversion-focused improvements designed around real buying friction.'],
  ['03','Store Optimization','UX, mobile experience, trust signals, product presentation, speed priorities and ecommerce growth opportunities.'],
]

const cases = [
  { tag:'CRO / E-COMMERCE', title:'Mistfall', text:'A focused Shopify recovery and CRO roadmap covering product pages, homepage structure, mobile UX, cart and checkout friction.' },
  { tag:'FRAGRANCE E-COMMERCE', title:'ScentsAppeal', text:'Conversion-minded merchandising and premium commercial creative direction for a fragrance ecommerce brand.' },
]

export default function Home(){
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const onMove = (event) => {
      root.style.setProperty('--mx', `${(event.clientX / window.innerWidth - .5) * 2}`)
      root.style.setProperty('--my', `${(event.clientY / window.innerHeight - .5) * 2}`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <>
    <header className={`nav ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ayomide Joshua home">
          <img src="/aj-logo.svg" alt="AJ — Ayomide Joshua" />
          <span><strong>Ayomide Joshua</strong><small>Shopify & E-commerce Growth</small></span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span>
        </button>
      </div>
      <div className="mobile-menu">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#results" onClick={closeMenu}>Results</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a className="mobile-menu-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <span>↗</span></a>
      </div>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid-lines" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-one" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-two" aria-hidden="true"></div>
        <div className="hero-orbit orbit-one" aria-hidden="true"></div>
        <div className="hero-orbit orbit-two" aria-hidden="true"></div>

        <div className="container hero-inner">
          <div className="hero-copy-block">
            <div className="eyebrow"><span className="eyebrow-line"></span> Shopify growth / CRO</div>
            <h1 id="hero-title">Shopify growth.<br /><span>Built to convert.</span></h1>
            <p className="hero-copy">I help e-commerce brands improve their Shopify stores, remove buying friction and make better use of the traffic they already have.</p>

            <div className="actions hero-actions">
              <a className="btn btn-primary" href="#contact">Start a project <span>↗</span></a>
              <a className="btn btn-secondary" href="#work"><span className="play-mark">↗</span> View my work</a>
            </div>

            <div className="hero-proof" aria-label="Experience and specialization">
              <div className="proof-item"><strong>3+ Years</strong><span>E-commerce experience</span></div>
              <div className="proof-item"><strong>Shopify</strong><span>Management & optimization</span></div>
              <div className="proof-item"><strong>CRO-first</strong><span>Conversion-led thinking</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ayomide Joshua — Shopify and e-commerce growth specialist">
            <div className="hero-word" aria-hidden="true">AJ</div>
            <div className="hero-frame">
              <div className="frame-topline"><span>AYOMIDE JOSHUA</span><span>01 / GROWTH</span></div>
              <div className="portrait-wrap">
                <img src="/ayomide-headshot.svg" alt="Ayomide Joshua in a navy suit" className="portrait" />
                <div className="portrait-shade" aria-hidden="true"></div>
              </div>
              <div className="frame-caption"><span>SHOPIFY</span><span>CRO / E-COMMERCE</span></div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-dot"></span> Conversion focused</div>
            <div className="floating-chip chip-bottom">Store optimization <span>↗</span></div>
          </div>
        </div>

        <div className="hero-bottom container" aria-hidden="true">
          <span>Scroll to explore</span><span className="scroll-line"></span><span>AJ / 2026</span>
        </div>
      </section>

      <section className="section" id="services"><div className="container">
        <div className="section-head"><div><div className="kicker">What I do</div><h2>Built around the parts that affect growth.</h2></div><p className="muted">Not just a prettier storefront. The goal is a clearer buying journey, less friction and a store your team can confidently operate.</p></div>
        <div className="services">{services.map(([n,t,d])=><article className="card" key={n}><span className="card-number">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div></section>

      <section className="section" id="work"><div className="container">
        <div className="section-head"><div><div className="kicker">Selected work</div><h2>Strategy that gets into the store.</h2></div><p className="muted">A few examples of ecommerce work and growth thinking. Detailed case studies can be expanded as the portfolio grows.</p></div>
        <div className="case-grid">{cases.map((c)=><article className="case" key={c.title}><div><div className="case-tag">{c.tag}</div><h3>{c.title}</h3><p>{c.text}</p></div><div className="case-link">View case study →</div></article>)}</div>
      </div></section>

      <section className="section" id="results"><div className="container results-strip">
        <div><div className="kicker">The CRO mindset</div><h2>Less guessing. More clarity.</h2></div>
        <p className="muted">Every recommendation should connect back to a customer, a friction point or a business outcome. That is how the portfolio should feel — and how the work should be done.</p>
      </div></section>

      <section className="section" id="about"><div className="container about-box">
        <div><div className="kicker">About</div><h2>An ecommerce specialist who thinks beyond the homepage.</h2><p>I’m Ayomide, a Shopify manager and CRO-focused ecommerce specialist. I work across store operations, customer experience and conversion strategy so brands can improve the storefront without losing sight of the business behind it.</p><p>My approach is practical: understand what is happening, identify the biggest opportunities, then turn them into changes that can actually be implemented.</p></div>
        <div className="about-list"><div><strong>Shopify</strong><span>Store management, customization & optimization</span></div><div><strong>Conversion Rate Optimization</strong><span>Journey, UX, product pages & checkout</span></div><div><strong>E-commerce operations</strong><span>Products, merchandising, QA & ongoing support</span></div></div>
      </div></section>

      <section className="section" id="contact"><div className="container"><div className="contact"><div className="kicker">Have a store to improve?</div><h2>Let&apos;s find the opportunities hiding in your customer journey.</h2><p>Tell me what you are working on, where the store is struggling, or simply send the storefront. We can start from there.</p><div className="actions"><a className="btn btn-primary" href="mailto:joshuaben023@gmail.com?subject=Shopify%20Store%20Project">Email me →</a><a className="btn btn-secondary" href="#work">See the work</a></div></div></div></section>
    </main>
    <footer className="footer"><div className="container">© {new Date().getFullYear()} Ayomide Joshua. Shopify & E-commerce Growth.</div></footer>
  </>
}
