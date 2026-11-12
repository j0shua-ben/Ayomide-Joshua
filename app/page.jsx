import SiteNav from './components/SiteNav'
import HeroSection from './components/HeroSection'

const services = [
  ['Shopify Management', 'Reliable day-to-day store management, product operations, merchandising, quality checks and ongoing improvements.'],
  ['Conversion Optimization', 'Customer-journey reviews, product-page improvements, trust-building and friction reduction across the buying experience.'],
  ['Store Design & Optimization', 'Thoughtful storefront design, mobile usability, product presentation, speed priorities and technical cleanup.'],
  ['Ecommerce Growth', 'Google Ads setup and management, product visibility and practical acquisition support connected to store performance.'],
]

const process = [
  ['Understand the business', 'Review the store, audience, products and customer journey to understand what is helping or holding back the buying experience.'],
  ['Find the right priorities', 'Separate high-value improvements from distractions and agree on the changes that matter most.'],
  ['Make the improvements', 'Implement, check and refine the work across design, store operations and conversion experience.'],
]

const expertise = [
  ['Shopify & ecommerce operations', 'Store management, product uploads, merchandising, collections, quality assurance and ongoing support.'],
  ['Conversion rate optimization', 'UX reviews, product-page structure, trust signals, cart experience and checkout friction.'],
  ['Google Ads & product visibility', 'Campaign setup and management, Google Merchant Center and Search Console foundations.'],
  ['Website design', 'Wix website design and redesign for service businesses that need a clearer customer journey.'],
]

const cases = [
  {
    number: '01',
    title: 'Evaness Biodegradable',
    category: 'Sustainable everyday essentials',
    description: 'A more considered Shopify shopping experience for a brand focused on biodegradable and recycled everyday products.',
    contribution: 'Shopify redesign, conversion-focused improvements, Google Ads setup and campaign management.',
    image: 'https://raw.githubusercontent.com/j0shua-ben/Ayomide-Joshua/main/f.png',
    imageAlt: 'Evaness biodegradable and recycled refuse sack product packaging',
    url: 'https://evaness-biodegradable.co.uk/',
    services: ['Shopify redesign', 'CRO', 'Google Ads'],
  },
  {
    number: '02',
    title: "Expedition Nomad's Haven",
    category: 'Premium food & beverage',
    description: 'A refined storefront for a Belgian hot chocolate brand, designed to make product discovery and the shopping journey feel clearer.',
    contribution: 'Shopify redesign, conversion-focused improvements, Google Ads setup and campaign management.',
    image: '/images/pp.PNG',
    imageAlt: "Expedition Nomad's Haven Belgian hot chocolate product",
    url: 'https://expeditionnomadshaven.co.uk/',
    services: ['Shopify redesign', 'CRO', 'Google Ads'],
  },
  {
    number: '03',
    title: 'Saint Phillip Street Gourmet Coffee',
    category: 'Specialty coffee & tea',
    description: 'A refreshed Shopify experience with stronger product presentation and clearer trust signals for a specialty coffee and tea brand.',
    contribution: 'Store redesign, trust elements, customer reviews, product SEO, Google Merchant Center and Search Console fixes.',
    image: 'https://raw.githubusercontent.com/j0shua-ben/Ayomide-Joshua/main/p.png',
    imageAlt: 'Saint Phillip Street Gourmet Coffee branded coffee product',
    url: 'https://www.saintphillipstreetgourmetcoffee.com/',
    services: ['Shopify redesign', 'Trust elements', 'Product SEO', 'Merchant Center'],
  },
]

const faqs = [
  ['What kind of Shopify work do you take on?', 'I work across Shopify management, CRO, storefront design, product and merchandising work, UX improvements and ongoing ecommerce support.'],
  ['Can you improve an existing Shopify store?', 'Yes. Most projects begin with the existing store, its customer journey and the improvements that will make the biggest practical difference.'],
  ['Do you manage Google Ads as well?', 'Yes. I support Google Ads setup and campaign management, with attention to the product feed, landing experience and the quality of the store behind the campaign.'],
  ['How do we get started?', 'Send me your store link and a short description of what you want to improve. I can then suggest a useful starting point.'],
]

function StorefrontDemo() {
  return (
    <section className="section demo-section" id="storefront">
      <div className="container">
        <div className="demo-intro">
          <div>
            <h2 className="section-title">Good design should make <span>shopping feel effortless.</span></h2>
          </div>
          <p>This interactive storefront concept shows how product presentation, clear information and a considered mobile experience work together. It is a design demonstration, separate from the client projects above.</p>
        </div>

        <div className="demo-stage">
          <div className="demo-orbit demo-orbit-a" aria-hidden="true" />
          <div className="demo-orbit demo-orbit-b" aria-hidden="true" />
          <div className="demo-desktop">
            <div className="browser-chrome"><span /><span /><span /><b>storefront concept</b></div>
            <div className="demo-scroll-viewport">
              <div className="demo-store-page">
                <div className="demo-announcement">GOOD SKIN. GOOD MOOD. &nbsp; FREE SHIPPING ON ORDERS OVER $30</div>
                <header className="demo-store-nav">
                  <strong>TOWER <i>28</i></strong>
                  <nav>SHOP &nbsp;&nbsp; SKINCARE &nbsp;&nbsp; MAKEUP &nbsp;&nbsp; ABOUT</nav>
                  <span>SEARCH &nbsp; BAG (0)</span>
                </header>
                <div className="demo-store-hero">
                  <div>
                    <p>SKINCARE THAT GETS YOU</p>
                    <h3>Meet your skin's<br/>new SOS.</h3>
                    <span>High-performance skincare and makeup made for sensitive skin.</span>
                    <b>SHOP BESTSELLERS ↗</b>
                  </div>
                  <img src="https://www.tower28beauty.com/cdn/shop/files/01-SOS_STARTER_SET_PACKSHOT-US.png?v=1793216468&width=1000" alt="Tower 28 SOS skincare starter set" />
                </div>
                <div className="demo-products-head"><h4>Shop bestsellers</h4><span>EXPLORE THE COLLECTION ↗</span></div>
                <div className="demo-product-grid">
                  <article><img src="https://www.tower28beauty.com/cdn/shop/files/01-SOS_STARTER_SET_PACKSHOT-US.png?v=1793216468&width=700" alt="Tower 28 SOS skincare starter set"/><b>SOS Stressed Skin Starter Set</b><span>$28.00</span></article>
                  <article><img src="https://www.tower28beauty.com/cdn/shop/files/SOS_20Spray_20_E2_80_94_C2_A01_20oz.webp?v=1774574385&width=700" alt="Tower 28 SOS Rescue Spray"/><b>SOS Rescue Spray</b><span>$28.00</span></article>
                  <article><img src="https://www.tower28beauty.com/cdn/shop/files/01-SOS_STARTER_SET_PACKSHOT-US.png?v=1793216468&width=700" alt="Tower 28 skincare collection"/><b>Everyday SOS essentials</b><span>SHOP THE SET</span></article>
                </div>
                <div className="demo-editorial">
                  <p>MADE FOR SENSITIVE SKIN</p>
                  <h4>High-performance beauty.<br/>Made for real life.</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="demo-phone">
            <div className="phone-top"><span>9:41</span><b>TOWER <i>28</i></b><span>♡</span></div>
            <div className="phone-product-image"><img src="https://www.tower28beauty.com/cdn/shop/files/SOS_20Spray_20_E2_80_94_C2_A01_20oz.webp?v=1774574385&width=600" alt="Tower 28 SOS Rescue Spray product"/></div>
            <div className="phone-product-copy">
              <h3>SOS Rescue Spray</h3>
              <p>Daily hypochlorous acid facial spray</p>
              <strong>$28.00</strong>
              <span>4 fl oz / 120 mL</span>
              <b>ADD TO BAG</b>
            </div>
          </div>
        </div>
        <p className="demo-disclaimer">Storefront concept using Tower 28 product imagery for visual demonstration. Not represented as a client project.</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <HeroSection />

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading work-heading">
              <h2 className="section-title">Real stores.<br/><span>Considered improvements.</span></h2>
              <p>Selected Shopify projects shaped around better storefront experiences, clearer product journeys and practical ecommerce growth.</p>
            </div>
            <div className="case-list">
              {cases.map((item, index) => (
                <article className={`case-study case-study-${index + 1}`} key={item.title}>
                  <a className="case-image" href={item.url} target="_blank" rel="noreferrer" aria-label={`Visit ${item.title} live store`}>
                    <img src={item.image} alt={item.imageAlt} loading="lazy"/>
                    <span>View live store ↗</span>
                  </a>
                  <div className="case-copy">
                    <p className="case-category">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p className="case-description">{item.description}</p>
                    <div className="case-contribution"><strong>My contribution</strong><p>{item.contribution}</p></div>
                    <div className="case-services">{item.services.map((service) => <span key={service}>{service}</span>)}</div>
                    <a className="text-link" href={item.url} target="_blank" rel="noreferrer">Explore the live store <span>↗</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <StorefrontDemo />

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">One store.<br/><span>Every detail working harder.</span></h2>
              <p>I bring store operations, conversion thinking and design together, so the customer experience feels connected from the first visit to checkout.</p>
            </div>
            <div className="service-grid">
              {services.map(([title, description], index) => (
                <article className="service-card" key={title}>
                  <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">A practical process.<br/><span>Work that moves forward.</span></h2>
              <p>Clear thinking before implementation. Every change should have a reason, a purpose and a place in the customer journey.</p>
            </div>
            <div className="process-grid">
              {process.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container expertise-layout">
            <div className="expertise-lead">
              <h2 className="section-title">The wider skill set.<br/><span>One connected experience.</span></h2>
              <p>Shopify remains the centre of my work. These complementary skills help me support the wider customer and business journey.</p>
            </div>
            <div className="expertise-list">
              {expertise.map(([title, description]) => (
                <article key={title}><h3>{title}</h3><p>{description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div><h2 className="section-title">I look beyond the storefront.<br/><span>I look at how it works.</span></h2></div>
            <div className="about-copy">
              <p className="about-intro">I'm Ayomide, a Shopify manager and conversion-focused ecommerce specialist.</p>
              <p>I work across store operations, customer experience and conversion strategy to help brands make their online stores clearer, more useful and easier to buy from.</p>
              <p>My approach is hands-on and practical: understand what is happening, identify the improvements that matter and turn them into work that can be implemented and maintained.</p>
              <a className="text-link" href="#contact">Talk about your store <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="section-heading">
              <h2 className="section-title">Good questions.<br/><span>Clear answers.</span></h2>
              <p>A few things you may want to know before starting a project.</p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <h2 className="section-title">Have a store to improve?<br/><span>Let's make it work harder.</span></h2>
              <p>Tell me what you're building, where your store needs attention or simply share the storefront. We can work out the most useful next step.</p>
              <div className="contact-actions">
                <a className="button button-dark" href="mailto:joshuaben023@gmail.com?subject=Shopify%20Store%20Project">Start a conversation ↗</a>
                <a className="button button-outline" href="#work">Explore selected work</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-main">
            <a className="footer-wordmark" href="#top"><span>AYOMIDE</span><span>JOSHUA</span></a>
            <p>Shopify management, conversion optimization and thoughtful ecommerce growth.</p>
            <div className="footer-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
            <a className="footer-top" href="#top">Back to top ↑</a>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Ayomide Joshua. All rights reserved.</span><a href="mailto:joshuaben023@gmail.com">joshuaben023@gmail.com</a></div>
        </div>
      </footer>
    </>
  )
}
