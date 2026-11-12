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
    image: 'https://raw.githubusercontent.com/j0shua-ben/Ayomide-Joshua/main/f.png',
    imageAlt: 'Evaness recycled and biodegradable refuse sack packaging',
    url: 'https://evaness-biodegradable.co.uk/',
    services: ['Shopify Redesign', 'CRO', 'Google Ads'],
  },
  {
    number: '02',
    tag: 'PREMIUM FOOD & BEVERAGE',
    title: "Expedition Nomad's Haven",
    text: 'A premium storefront experience for a Belgian hot chocolate brand. My contribution included Shopify redesign, conversion-focused improvements and Google Ads setup and campaign management.',
    image: '/images/pp.PNG',
    imageAlt: "Expedition Nomad's Haven Belgian milk chocolate flakes and hot chocolate",
    url: 'https://expeditionnomadshaven.co.uk/',
    services: ['Shopify Redesign', 'CRO', 'Google Ads'],
  },
  {
    number: '03',
    tag: 'SPECIALTY COFFEE & TEA',
    title: 'Saint Phillip Street Gourmet Coffee',
    text: 'A refreshed Shopify storefront for a specialty coffee and tea brand. My work covered store redesign, trust-building elements including badges and customer reviews, product SEO optimization, and Google Merchant Center and Search Console fixes.',
    image: 'https://raw.githubusercontent.com/j0shua-ben/Ayomide-Joshua/main/p.png',
    imageAlt: 'Saint Phillip Street Gourmet Coffee branded coffee bag',
    url: 'https://www.saintphillipstreetgourmetcoffee.com/',
    services: ['Shopify Redesign', 'Trust Elements', 'Product SEO', 'Google Merchant Center', 'Search Console'],
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
                
                <h2 className="growth-heading unified-section-title"><span className="growth-heading-line">TURN VISITS</span><span className="growth-heading-line title-accent">INTO SALES</span></h2>
                <p className="growth-lede">A store performs when its storefront, buying journey and customer acquisition work together. I bring those pieces into one practical growth plan — from the first impression to the final click.</p>
                <a className="growth-link" href="#services">See how I improve stores <span>↗</span></a>
              </div>

              <div className="growth-visual" aria-label="Illustration of an ecommerce storefront, customer journey and advertising dashboard">
                <div className="growth-orbit growth-orbit-one" />
                <div className="growth-orbit growth-orbit-two" />
                <div className="growth-store-window growth-tower-store">
                  <div className="growth-window-bar"><span /><span /><span /><b>tower28beauty.com</b></div>
                  <div className="growth-store-content">
                    <div className="tower-store-track">
                      <div className="tower-store-announcement">FREE MINI POUCH ON YOUR FIRST ORDER&nbsp; ✦ &nbsp; FREE U.S. SHIPPING ON $30+</div>
                      <header className="tower-store-header">
                        <div className="tower-store-brand">TOWER <b>28</b></div>
                        <nav>SHOP&nbsp;&nbsp; SKINCARE&nbsp;&nbsp; MAKEUP&nbsp;&nbsp; ABOUT</nav>
                        <div className="tower-store-tools">⌕ &nbsp; ♡ &nbsp; BAG (0)</div>
                      </header>
                      <div className="tower-store-hero">
                        <div className="tower-store-hero-copy">
                          <span>GOOD SKIN. GOOD MOOD.</span>
                          <h3>Meet your skin's<br/>new SOS.</h3>
                          <p>High-performance skincare and makeup made for sensitive skin.</p>
                          <b>SHOP BESTSELLERS&nbsp; ↗</b>
                        </div>
                        <div className="tower-store-hero-image">
                          <img src="https://www.tower28beauty.com/cdn/shop/files/01-SOS_STARTER_SET_PACKSHOT-US.png?v=1793216468&width=1000" alt="Tower 28 SOS Stressed Skin Starter Set" />
                        </div>
                      </div>
                      <div className="tower-store-section-heading"><div><small>THE GOOD STUFF</small><strong>Shop bestsellers</strong></div><span>SHOP ALL&nbsp; ↗</span></div>
                      <div className="tower-store-products">
                        <article><div className="tower-store-product-image tower-set"><img src="https://www.tower28beauty.com/cdn/shop/files/01-SOS_STARTER_SET_PACKSHOT-US.png?v=1793216468&width=700" alt="SOS Stressed Skin Mini Starter Gift Set"/></div><b>SOS Stressed Skin Mini Starter Gift Set</b><span>$28.00 <s>$38.00</s></span></article>
                        <article><div className="tower-store-product-image"><img src="https://www.tower28beauty.com/cdn/shop/files/SOS_20Spray_20_E2_80_94_C2_A01_20oz.webp?v=1774574385&width=700" alt="Tower 28 SOS Rescue Spray"/></div><b>SOS Rescue Spray</b><span>$28.00</span></article>
                        <article><div className="tower-store-product-image tower-set"><img src="https://www.tower28beauty.com/cdn/shop/files/01-SOS_STARTER_SET_PACKSHOT-US.png?v=1793216468&width=700" alt="Tower 28 skincare collection"/></div><b>Everyday SOS essentials</b><span>SHOP THE SET&nbsp; ↗</span></article>
                      </div>
                      <div className="tower-store-values"><span>MADE FOR SENSITIVE SKIN</span><i>✦</i><span>DERM-APPROVED FORMULAS</span><i>✦</i><span>BORN IN LOS ANGELES</span></div>
                      <div className="tower-store-story"><small>GOOD SKIN IS FOR EVERYONE</small><strong>High-performance beauty.<br/>Made for real life.</strong><span>Explore the Tower 28 routine&nbsp; ↗</span></div>
                    </div>
                  </div>
                </div>
                <div className="growth-mobile-window tower-mobile-window">
                  <div className="tower-mobile-product-page">
                    <div className="tower-mobile-product-header"><span>☰</span><b>TOWER <em>28</em></b><span>♡</span></div>
                    <div className="tower-mobile-product-image">
                      <img src="https://www.tower28beauty.com/cdn/shop/files/SOS_20Spray_20_E2_80_94_C2_A01_20oz.webp?v=1774574385&width=600" alt="Tower 28 SOS Rescue Spray product"/>
                    </div>
                    <div className="tower-mobile-product-info">
                      <h3>SOS Rescue Spray</h3>
                      <p>Daily hypochlorous acid facial spray</p>
                      <strong>$28.00</strong>
                      <div className="tower-mobile-product-options"><span>4 fl oz / 120 mL</span><span>★★★★★</span></div>
                      <div className="tower-mobile-add">ADD TO BAG</div>
                    </div>
                  </div>
                </div>
                <div className="growth-ads-card">
                  <div className="growth-ads-head"><span className="growth-google-mark">G</span><b>CAMPAIGN OVERVIEW</b><i>↗</i></div>
                  <div className="growth-ads-title">Reach the right audience.</div>
                  <div className="growth-ads-bars"><span /><span /><span /><span /><span /><span /><span /></div>
                </div>
              </div>
            </div>

            <div className="growth-pillars">
              <article className="growth-pillar">
                <div className="growth-pillar-top"><span className="growth-pillar-icon">↗</span></div>
                <h3>Build a store customers trust.</h3>
                <p>Create a polished, intuitive Shopify experience that makes your brand credible and helps visitors find what they need.</p>
                <div className="growth-pillar-rule"><span /></div>
              </article>
              <article className="growth-pillar">
                <div className="growth-pillar-top"><span className="growth-pillar-icon">↗</span></div>
                <h3>Turn more browsers into buyers.</h3>
                <p>Improve product pages, strengthen trust signals and remove friction from the buying journey so more visitors complete their purchase.</p>
                <div className="growth-pillar-rule"><span /></div>
              </article>
              <article className="growth-pillar">
                <div className="growth-pillar-top"><span className="growth-pillar-icon">↗</span></div>
                <h3>Bring the right people to your store.</h3>
                <p>Build and manage Google Ads campaigns that connect your products with relevant shoppers and support sustainable growth.</p>
                <div className="growth-pillar-rule"><span /></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services"><div className="container"><div className="section-head services-section-head"><div className="services-heading-wrap"><h2 className="unified-section-title"><span className="services-title-left">Shopify Store</span><span className="services-title-right title-accent">Built for Growth</span></h2></div><p className="muted">I manage and optimize Shopify stores to make every part of the customer journey work harder — from storefront experience and product pages to conversion improvements and ongoing store operations.</p></div><div className="services">{services.map(([number, title, description]) => <article className="card service-card" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-card-orbit" aria-hidden="true" /></article>)}</div></div></section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-head work-section-head">
              
              <h2 className="work-headline unified-section-title"><span>Real stores.</span><span className="title-accent">Real impact.</span></h2>
              <p className="muted">A closer look at Shopify stores I’ve helped improve through thoughtful redesign, conversion-focused changes and customer acquisition.</p>
            </div>
            <div className="work-list">
              {cases.map((item) => (
                <article className="work-project" key={item.title}>
                  <a className="work-project-visual" href={item.url} target="_blank" rel="noreferrer" aria-label={`Visit ${item.title} live store`}>
                    <div className="work-image-frame">
                      <img src={item.image} alt={item.imageAlt} loading="lazy" />
                    </div>
                    <span className="work-visual-link">VIEW LIVE STORE ↗</span>
                  </a>
                  <div className="work-project-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="work-project-services">{item.services.map((service) => <span key={service}>{service}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-process" id="process"><div className="container"><div className="section-head"><div><h2 className="unified-section-title">A clear process. <span className="title-accent">Thoughtful execution.</span></h2></div><p className="muted">The work stays practical: understand what is happening, choose what matters, then make the store better.</p></div><div className="process-grid">{process.map(([number, title, description]) => <article key={number}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

        <section className="section section-dark" id="expertise"><div className="container"><div className="section-head"><div><h2 className="unified-section-title">More ways to <span className="title-accent">support your store.</span></h2></div><p className="muted">The wider skill set is here when the project needs it — without taking the focus away from Shopify growth.</p></div><div className="expertise-grid">{expertise.map(([title, description], index) => <article className="expertise-item" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>



        <section className="section" id="about"><div className="container about-box"><div><h2 className="unified-section-title">An ecommerce specialist who thinks <span className="title-accent">beyond the homepage.</span></h2><p>I’m Ayomide, a Shopify manager and CRO-focused ecommerce specialist. I work across store operations, customer experience and conversion strategy so brands can improve the storefront without losing sight of the business behind it.</p><p>My approach is practical: understand what is happening, identify the biggest opportunities, then turn them into changes that can actually be implemented.</p></div><div className="about-list"><div><strong>Shopify</strong><span>Store management, customization &amp; optimization</span></div><div><strong>Conversion Rate Optimization</strong><span>Journey, UX, product pages &amp; checkout</span></div><div><strong>Google Ads</strong><span>Campaign setup, management &amp; optimization</span></div><div><strong>E-commerce operations</strong><span>Products, merchandising, QA &amp; ongoing support</span></div></div></div></section>

        <section className="section" id="faq"><div className="container"><div className="section-head"><div><h2 className="unified-section-title">Useful answers <span className="title-accent">before we talk.</span></h2></div><p className="muted">A few of the questions buyers usually want answered before starting a Shopify project.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

        <section className="section" id="contact"><div className="container"><div className="contact"><h2 className="unified-section-title">Let&apos;s find the <span className="title-accent">opportunities</span> in your customer journey.</h2><p>Tell me what you are working on, where the store is struggling, or simply send the storefront. We can start from there.</p><div className="actions"><a className="btn btn-primary" href="mailto:joshuaben023@gmail.com?subject=Shopify%20Store%20Project">Email me →</a><a className="btn btn-secondary" href="#work">See the work</a></div></div></div></section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="footer-wordmark" href="#top" aria-label="Ayomide Joshua — back to top"><span>AYOMIDE</span><span>JOSHUA</span></a>
              <p>Thoughtful Shopify management and conversion-focused ecommerce growth.</p>
            </div>
            <div className="footer-column">
              <a href="#services">Services</a>
              <a href="#work">Selected work</a>
              <a href="#process">My process</a>
              <a href="#about">About</a>
            </div>
            <div className="footer-column">
              <a href="mailto:joshuaben023@gmail.com">Email me ↗</a>
              <a href="#contact">Start a project</a>
            </div>
            <a className="footer-back-top" href="#top">BACK TO TOP <span>↑</span></a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Ayomide Joshua. All rights reserved.</span>
            <span>SHOPIFY · E-COMMERCE · CRO</span>
          </div>
        </div>
      </footer>
    </>
  )
}
