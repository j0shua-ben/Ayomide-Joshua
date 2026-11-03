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
  return <>
    <header className="nav"><div className="container nav-inner">
      <a className="brand" href="#top">AYOMIDE<span>.</span></a>
      <nav className="nav-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#about">About</a></nav>
      <a className="nav-cta" href="#contact">Let's talk</a>
    </div></header>

    <main id="top">
      <section className="hero"><div className="container">
        <div className="eyebrow"><span className="dot"/> Shopify & E-commerce Growth</div>
        <h1>I help ecommerce brands turn <em>more traffic into customers.</em></h1>
        <p className="hero-copy">Shopify management, conversion rate optimization and store improvement for brands that want a sharper customer journey and a better-performing storefront.</p>
        <div className="actions"><a className="btn btn-primary" href="#contact">Start a conversation →</a><a className="btn btn-secondary" href="#work">See selected work</a></div>
        <div className="stats"><div className="stat"><strong>5+ yrs</strong><span>ecommerce & Shopify experience</span></div><div className="stat"><strong>CRO-first</strong><span>strategy built around conversion friction</span></div><div className="stat"><strong>End-to-end</strong><span>strategy, implementation & ongoing support</span></div></div>
      </div></section>

      <section className="section" id="services"><div className="container">
        <div className="section-head"><div><div className="kicker">What I do</div><h2>Built around the parts that affect growth.</h2></div><p className="muted">Not just a prettier storefront. The goal is a clearer buying journey, less friction and a store your team can confidently operate.</p></div>
        <div className="services">{services.map(([n,t,d])=><article className="card" key={n}><span className="card-number">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div></section>

      <section className="section" id="work"><div className="container">
        <div className="section-head"><div><div className="kicker">Selected work</div><h2>Strategy that gets into the store.</h2></div><p className="muted">A few examples of ecommerce work and growth thinking. Detailed case studies can be expanded as the portfolio grows.</p></div>
        <div className="case-grid">{cases.map((c)=><article className="case" key={c.title}><div><div className="case-tag">{c.tag}</div><h3>{c.title}</h3><p>{c.text}</p></div><div className="case-link">View case study →</div></article>)}</div>
      </div></section>

      <section className="section" id="process"><div className="container">
        <div className="section-head"><div><div className="kicker">How I work</div><h2>Find the friction. Fix the journey. Improve the store.</h2></div></div>
        <div className="process">{[['01','Diagnose','Understand the store, customer journey, traffic and conversion friction.'],['02','Prioritize','Separate high-impact opportunities from cosmetic changes.'],['03','Implement','Turn recommendations into practical Shopify improvements.'],['04','Improve','Review performance and identify the next conversion opportunities.']].map(([n,t,d])=><div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div></section>

      <section className="section" id="about"><div className="container about-box">
        <div><div className="kicker">About</div><h2>An ecommerce specialist who thinks beyond the homepage.</h2><p>I’m Ayomide, a Shopify manager and CRO-focused ecommerce specialist. I work across store operations, customer experience and conversion strategy so brands can improve the storefront without losing sight of the business behind it.</p><p>My approach is practical: understand what is happening, identify the biggest opportunities, then turn them into changes that can actually be implemented.</p></div>
        <div className="about-list"><div><strong>Shopify</strong><span>Store management, customization & optimization</span></div><div><strong>Conversion Rate Optimization</strong><span>Journey, UX, product pages & checkout</span></div><div><strong>E-commerce operations</strong><span>Products, merchandising, QA & ongoing support</span></div></div>
      </div></section>

      <section className="section" id="contact"><div className="container"><div className="contact"><div className="kicker">Have a store to improve?</div><h2>Let's find the opportunities hiding in your customer journey.</h2><p>Tell me what you are working on, where the store is struggling, or simply send the storefront. We can start from there.</p><div className="actions"><a className="btn btn-primary" href="mailto:joshuaben023@gmail.com?subject=Shopify%20Store%20Project">Email me →</a><a className="btn btn-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div></section>
    </main>
    <footer className="footer"><div className="container">© {new Date().getFullYear()} Ayomide Joshua. Shopify & E-commerce Growth.</div></footer>
  </>
}
