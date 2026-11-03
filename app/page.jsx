'use client'

import { useEffect, useState } from 'react'

const services = [
  ['01', 'Shopify Management', 'Hands-on store management, product updates, merchandising, QA and day-to-day ecommerce support.'],
  ['02', 'Shopify CRO', 'Customer-journey analysis, product-page optimization and conversion-focused improvements built around buying friction.'],
  ['03', 'Store Optimization', 'UX, mobile experience, trust signals, product presentation, speed priorities and ecommerce growth opportunities.'],
]

const expertise = [
  ['Shopify Marketing', 'Store growth support across merchandising, campaigns, product presentation and customer experience.'],
  ['Wix Website Design', 'Conversion-focused website design and redesign for service businesses that need a clearer path to enquiry.'],
  ['Analytics & Tracking', 'GA4, Google Search Console and practical tracking foundations for understanding what visitors actually do.'],
  ['Other Digital Support', 'Additional ecommerce and digital execution where it supports the bigger growth objective.'],
]

const cases = [
  { tag: 'CRO / E-COMMERCE', title: 'Mistfall', text: 'A focused Shopify recovery and CRO roadmap covering product pages, homepage structure, mobile UX, cart and checkout friction.' },
  { tag: 'FRAGRANCE E-COMMERCE', title: 'ScentsAppeal', text: 'Conversion-minded merchandising and premium commercial creative direction for a fragrance ecommerce brand.' },
]

const faqs = [
  ['What kind of Shopify work do you take on?', 'I work across Shopify management, CRO, store optimization, product and merchandising work, UX improvements and ongoing ecommerce support.'],
  ['Do you only work on CRO?', 'No. CRO is the way I think about the store, but the actual work can include management, UX, product pages, merchandising, technical cleanup and other Shopify growth tasks.'],
  ['Can you work with an existing Shopify store?', 'Yes. Most projects start with an existing store, its current customer journey and the biggest opportunities for improvement.'],
  ['How do we start?', 'Send the store link and a short description of what you want to improve. I can then recommend the most useful starting point.'],
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
    const onScroll = () => setScrolled(window.scrollY > 40)
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
            <span className="brand-copy"><strong>Ayomide Joshua</strong><small>Shopify &amp; E-commerce Growth</small></span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#work">Work</a><a href="#services">Services</a><a href="#expertise">Expertise</a><a href="#about">About</a><a href="#faq">FAQ</a>
          </nav>
          <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span></span><span></span></button>
        </div>
        <div className="mobile-menu">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#services" onClick={closeMenu}>Services</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#about" onClick={closeMenu}>About</a><a href="#faq" onClick={closeMenu}>FAQ</a><a className="mobile-menu-cta" href="#contact" onClick={closeMenu}>Start a project <span>↗</span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero hero-simple" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy-block">
              <div className="eyebrow"><span className="eyebrow-line" /><span>Shopify / CRO / E-commerce growth</span></div>
              <h1 id="hero-title" className="hero-title"><span className="title-line">Shopify.</span><span className="title-line title-offset">Built to</span><span className="title-line accent-title">Convert.</span></h1>
              <p className="hero-copy">I help e-commerce brands improve the way their Shopify store looks, works and sells — from day-to-day management to CRO and store optimization.</p>
              <div className="actions hero-actions"><a className="btn btn-primary" href="#contact">Start a project <span>↗</span></a><a className="btn btn-secondary" href="#work">View my work <span>↗</span></a></div>
              <div className="hero-meta"><span><strong>3+</strong> years in ecommerce</span><span><i /> Shopify management + CRO</span></div>
            </div>
            <div className="hero-visual" aria-label="Ayomide Joshua — Shopify and e-commerce growth specialist"><div className="hero-visual-wash" aria-hidden="true" /><img src="/ayomide-headshot.svg" alt="Ayomide Joshua in a navy suit" className="portrait" /></div>
          </div>
        </section>

        <section className="section" id="services"><div className="container"><div className="section-head"><div><div className="kicker">What I do</div><h2>Built around the parts that affect growth.</h2></div><p className="muted">Not just a prettier storefront. The goal is a clearer buying journey, less friction and a store your team can confidently operate.</p></div><div className="services">{services.map(([number, title, description]) => <article className="card" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

        <section className="section section-dark" id="expertise"><div className="container"><div className="section-head"><div><div className="kicker">Other areas of expertise</div><h2>More than one way to support the store.</h2></div><p className="muted">The wider skill set is here when the project needs it — without taking the focus away from Shopify growth.</p></div><div className="expertise-grid">{expertise.map(([title, description], index) => <article className="expertise-item" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

        <section className="section" id="work"><div className="container"><div className="section-head"><div><div className="kicker">Selected work</div><h2>Strategy that gets into the store.</h2></div><p className="muted">A few examples of ecommerce work and growth thinking. Detailed case studies can be expanded as the portfolio grows.</p></div><div className="case-grid">{cases.map((item) => <article className="case" key={item.title}><div><div className="case-tag">{item.tag}</div><h3>{item.title}</h3><p>{item.text}</p></div><div className="case-link">View case study →</div></article>)}</div></div></section>

        <section className="section" id="about"><div className="container about-box"><div><div className="kicker">About</div><h2>An ecommerce specialist who thinks beyond the homepage.</h2><p>I’m Ayomide, a Shopify manager and CRO-focused ecommerce specialist. I work across store operations, customer experience and conversion strategy so brands can improve the storefront without losing sight of the business behind it.</p><p>My approach is practical: understand what is happening, identify the biggest opportunities, then turn them into changes that can actually be implemented.</p></div><div className="about-list"><div><strong>Shopify</strong><span>Store management, customization &amp; optimization</span></div><div><strong>Conversion Rate Optimization</strong><span>Journey, UX, product pages &amp; checkout</span></div><div><strong>E-commerce operations</strong><span>Products, merchandising, QA &amp; ongoing support</span></div></div></div></section>

        <section className="section" id="faq"><div className="container"><div className="section-head"><div><div className="kicker">FAQ</div><h2>Useful answers before we talk.</h2></div><p className="muted">A few of the questions buyers usually want answered before starting a Shopify project.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="section" id="contact"><div className="container"><div className="contact"><div className="kicker">Have a store to improve?</div><h2>Let&apos;s find the opportunities hiding in your customer journey.</h2><p>Tell me what you are working on, where the store is struggling, or simply send the storefront. We can start from there.</p><div className="actions"><a className="btn btn-primary" href="mailto:joshuaben023@gmail.com?subject=Shopify%20Store%20Project">Email me →</a><a className="btn btn-secondary" href="#work">See the work</a></div></div></div></section>
      </main>
      <footer className="footer"><div className="container">© {new Date().getFullYear()} Ayomide Joshua. Shopify &amp; E-commerce Growth.</div></footer>
    </>
  )
}
