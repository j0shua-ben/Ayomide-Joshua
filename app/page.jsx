import SiteNav from './components/SiteNav'
import HeroSection from './components/HeroSection'

const services = [
  ['01', 'Shopify Management', 'Hands-on store management, product updates, merchandising, QA and day-to-day ecommerce support.'],
  ['02', 'Shopify CRO', 'Customer-journey analysis, product-page optimization and conversion-focused improvements built around buying friction.'],
  ['03', 'Store Optimization', 'UX, mobile experience, trust signals, product presentation, speed priorities and ecommerce growth opportunities.'],
]

const expertise = [
  ['Shopify Marketing', 'Store growth support across merchandising, campaigns, product presentation and customer experience.'],
  ['Wix Website Design', 'Conversion-focused website design and redesign for service businesses that need a clearer path to enquiry.'],
  ['Analytics & Tracking', 'GA4, Google Search Console and practical tracking foundations for understanding what visitors actually do.'],
  ['Google Ads', 'Campaign setup, ongoing management and optimization to support relevant traffic and ecommerce growth.'],
]

const process = [
  ['01', 'Understand', 'Start with the store, customer journey, business goal and the friction that matters most.'],
  ['02', 'Prioritize', 'Separate useful opportunities from noise and focus on changes with a clear reason behind them.'],
  ['03', 'Improve', 'Turn the strategy into practical Shopify changes, tests, systems and ongoing optimization.'],
]

const cases = [
  {
    number: '01',
    tag: 'SUSTAINABLE E-COMMERCE',
    title: 'Evaness Biodegradable',
    text: 'A clearer Shopify shopping experience for an everyday essentials brand. My contribution covered storefront redesign, conversion-focused improvements and Google Ads setup and campaign management.',
    image: 'https://evaness-biodegradable.co.uk/cdn/shop/files/Interim_Main_Image.png?v=1789540905&width=1400',
    imageAlt: 'Evaness recycled and biodegradable refuse sack packaging',
    url: 'https://evaness-biodegradable.co.uk/',
    services: ['Shopify Redesign', 'CRO', 'Google Ads'],
  },
  {
    number: '02',
    tag: 'PREMIUM FOOD & BEVERAGE',
    title: "Expedition Nomad's Haven",
    text: 'A premium storefront experience for a Belgian hot chocolate brand. My contribution included Shopify redesign, conversion-focused improvements and Google Ads setup and campaign management.',
    image: 'https://expeditionnomadshaven.co.uk/cdn/shop/files/44-belgian-milk-chocolate-flakes-1kg_jpg..jpg?v=1790171650&width=1200',
    imageAlt: "Expedition Nomad's Haven Belgian milk chocolate flakes and hot chocolate",
    url: 'https://expeditionnomadshaven.co.uk/',
    services: ['Shopify Redesign', 'CRO', 'Google Ads'],
  },
]

const faqs = [
  ['What kind of Shopify work do you take on?', 'I work across Shopify management, CRO, store optimization, product and merchandising work, UX improvements and ongoing ecommerce support.'],
  ['Do you only work on CRO?', 'No. CRO is the way I think about the store, but the actual work can include management, UX, product pages, merchandising, technical cleanup and other Shopify growth tasks.'],
  ['Can you work with an existing Shopify store?', 'Yes. Most projects start with an existing store, its current customer journey and the biggest opportunities for improvement.'],
  ['How do we start?', 'Send the store link and a short description of what you want to improve. I can then recommend the most useful starting point.'],
]

export default function Home() {
  return (
    <>
      <SiteNav />

      <main id="top">
        <HeroSection />

        <section className="section growth-section" id="growth">
          <div className="container">
            <div className="growth-intro">
              <div className="growth-copy">
                <div className="kicker"><span className="growth-kicker-dot" /> 02 / THE E-COMMERCE ADVANTAGE</div>
                <h2 className="growth-heading"><span className="growth-heading-line">TURN VISITS</span><span className="growth-heading-line growth-heading-accent">INTO SALES</span></h2>
                <p className="growth-lede">A store performs when its storefront, buying journey and customer acquisition work together. I bring those pieces into one practical growth plan — from the first impression to the final click.</p>
                <a className="growth-link" href="#services">See how I improve stores <span>↗</span></a>
              </div>

              <div className="growth-visual" aria-label="Illustration of an ecommerce storefront, customer journey and advertising dashboard">
                <div className="growth-orbit growth-orbit-one" />
                <div className="growth-orbit growth-orbit-two" />
                <div className="growth-visual-label">THE BIGGER PICTURE <span>01 — 03</span></div>
                <div className="growth-store-window">
                  <div className="growth-window-bar"><span /><span /><span /><b>YOUR STORE</b></div>
                  <div className="growth-store-content">
                    <div className="growth-store-nav"><strong>brand.</strong><span>SHOP&nbsp;&nbsp; ABOUT&nbsp;&nbsp; CONTACT</span><i> BAG (0)</i></div>
                    <div className="growth-store-hero">
                      <div><small>MADE FOR EVERYDAY</small><strong>A better way<br/>to shop.</strong><em>Discover the collection <b>↗</b></em></div>
                      <div className="growth-product-art" aria-label="Premium skincare bottle product mockup"><div className="growth-product-cap" /><div className="growth-product-bottle"><span className="growth-bottle-highlight" /><span className="growth-bottle-brand">FORME</span><span className="growth-bottle-name">DAILY<br/>SERUM</span><span className="growth-bottle-detail">30 ML / 1.0 FL.OZ</span></div></div>
                    </div>
                    <div className="growth-store-bottom"><span>FEATURED COLLECTION</span><span>01 / 04</span></div>
                  </div>
                </div>
                <div className="growth-mobile-window">
                  <div className="growth-mobile-top"><span /><b>brand.</b><span>☰</span></div>
                  <div className="growth-mobile-art"><div className="growth-mobile-product"><span className="growth-mobile-cap" /><span className="growth-mobile-bottle"><b>FORME</b><i>DAILY<br/>SERUM</i></span></div></div>
                  <div className="growth-mobile-lines"><span /><span /><span /></div>
                  <div className="growth-mobile-button">EXPLORE COLLECTION</div>
                </div>
                <div className="growth-ads-card">
                  <div className="growth-ads-head"><span className="growth-google-mark">G</span><b>CAMPAIGN OVERVIEW</b><i>↗</i></div>
                  <div className="growth-ads-title">Reach the right audience.</div>
                  <div className="growth-ads-bars"><span /><span /><span /><span /><span /><span /><span /></div>
                  <div className="growth-ads-foot"><span>PLAN</span><span>LAUNCH</span><span>OPTIMIZE</span></div>
                </div>
                <div className="growth-visual-note"><span>DESIGN</span><b>×</b><span>CONVERSION</span><b>×</b><span>GROWTH</span></div>
              </div>
            </div>

            <div className="growth-pillars">
              <article className="growth-pillar">
                <div className="growth-pillar-top"><span>01 / BUILD</span><span className="growth-pillar-icon">↗</span></div>
                <h3>Build a store customers trust.</h3>
                <p>Create a polished, intuitive Shopify experience that makes your brand credible and helps visitors find what they need.</p>
                <div className="growth-pillar-rule"><span /></div>
              </article>
              <article className="growth-pillar">
                <div className="growth-pillar-top"><span>02 / OPTIMIZE</span><span className="growth-pillar-icon">↗</span></div>
                <h3>Turn more browsers into buyers.</h3>
                <p>Improve product pages, strengthen trust signals and remove friction from the buying journey so more visitors complete their purchase.</p>
                <div className="growth-pillar-rule"><span /></div>
              </article>
              <article className="growth-pillar">
                <div className="growth-pillar-top"><span>03 / GROW</span><span className="growth-pillar-icon">↗</span></div>
                <h3>Bring the right people to your store.</h3>
                <p>Build and manage Google Ads campaigns that connect your products with relevant shoppers and support sustainable growth.</p>
                <div className="growth-pillar-rule"><span /></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="services"><div className="container"><div className="section-head"><div><div className="kicker">What I do</div><h2>Built around the parts that affect growth.</h2></div><p className="muted">Not just a prettier storefront. The goal is a clearer buying journey, less friction and a store your team can confidently operate.</p></div><div className="services">{services.map(([number, title, description]) => <article className="card" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-head work-section-head">
              <div>
                <div className="kicker">04 / SELECTED WORK</div>
                <h2>Real stores. Thoughtful improvements.</h2>
              </div>
              <p className="muted">A look at two Shopify projects where I contributed to the storefront experience, conversion improvements and customer acquisition.</p>
            </div>
            <div className="work-list">
              {cases.map((item) => (
                <article className="work-project" key={item.title}>
                  <a className="work-project-visual" href={item.url} target="_blank" rel="noreferrer" aria-label={`Visit ${item.title} live store`}>
                    <div className="work-image-frame">
                      <img src={item.image} alt={item.imageAlt} loading="lazy" />
                    </div>
                    <span className="work-visual-index">{item.number} / 02</span>
                    <span className="work-visual-link">VIEW LIVE STORE ↗</span>
                  </a>
                  <div className="work-project-copy">
                    <div className="work-project-meta"><span>{item.number}</span><span>{item.tag}</span></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="work-project-services">{item.services.map((service) => <span key={service}>{service}</span>)}</div>
                    <a className="work-project-link" href={item.url} target="_blank" rel="noreferrer">Explore the live store <span>↗</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-process" id="process"><div className="container"><div className="section-head"><div><div className="kicker">How I work</div><h2>Simple process. Serious attention to the details.</h2></div><p className="muted">The work stays practical: understand what is happening, choose what matters, then make the store better.</p></div><div className="process-grid">{process.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

        <section className="section section-dark" id="expertise"><div className="container"><div className="section-head"><div><div className="kicker">Other areas of expertise</div><h2>More than one way to support the store.</h2></div><p className="muted">The wider skill set is here when the project needs it — without taking the focus away from Shopify growth.</p></div><div className="expertise-grid">{expertise.map(([title, description], index) => <article className="expertise-item" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>



        <section className="section" id="about"><div className="container about-box"><div><div className="kicker">About</div><h2>An ecommerce specialist who thinks beyond the homepage.</h2><p>I’m Ayomide, a Shopify manager and CRO-focused ecommerce specialist. I work across store operations, customer experience and conversion strategy so brands can improve the storefront without losing sight of the business behind it.</p><p>My approach is practical: understand what is happening, identify the biggest opportunities, then turn them into changes that can actually be implemented.</p></div><div className="about-list"><div><strong>Shopify</strong><span>Store management, customization &amp; optimization</span></div><div><strong>Conversion Rate Optimization</strong><span>Journey, UX, product pages &amp; checkout</span></div><div><strong>Google Ads</strong><span>Campaign setup, management &amp; optimization</span></div><div><strong>E-commerce operations</strong><span>Products, merchandising, QA &amp; ongoing support</span></div></div></div></section>

        <section className="section" id="faq"><div className="container"><div className="section-head"><div><div className="kicker">FAQ</div><h2>Useful answers before we talk.</h2></div><p className="muted">A few of the questions buyers usually want answered before starting a Shopify project.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="section" id="contact"><div className="container"><div className="contact"><div className="kicker">Have a store to improve?</div><h2>Let&apos;s find the opportunities hiding in your customer journey.</h2><p>Tell me what you are working on, where the store is struggling, or simply send the storefront. We can start from there.</p><div className="actions"><a className="btn btn-primary" href="mailto:joshuaben023@gmail.com?subject=Shopify%20Store%20Project">Email me →</a><a className="btn btn-secondary" href="#work">See the work</a></div></div></div></section>
      </main>
      <footer className="footer"><div className="container">© {new Date().getFullYear()} Ayomide Joshua. Shopify &amp; E-commerce Growth.</div></footer>
    </>
  )
}
