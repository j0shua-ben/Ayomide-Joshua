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
    description: 'A refreshed Shopify experience with stronger product presentation and clearer trust signals for a specialty coffee and tea brand.',
    contribution: 'Store redesign, trust elements, customer reviews, product SEO, Google Merchant Center and Search Console fixes.',
    image: 'https://raw.githubusercontent.com/j0shua-ben/Ayomide-Joshua/main/p.png',
    imageAlt: 'Saint Phillip Street Gourmet Coffee branded coffee product',
    url: 'https://www.saintphillipstreetgourmetcoffee.com/',
    services: ['Shopify redesign', 'Trust elements', 'Product SEO', 'Merchant Center'],
  },
]

const faqs = [
  ['Do you work remotely with clients?', 'Yes. I work remotely and can collaborate with businesses across different countries and time zones. Store reviews, planning, implementation updates and handovers can all be handled online.'],
  ['What languages do you work in?', 'I communicate with clients in English through email, messaging and online meetings. Clear communication and agreed project updates are part of the process.'],
  ['What Shopify services can you help with?', 'I support Shopify store management, storefront design and redesign, product uploads, collections and merchandising, theme customisation, UX improvements, conversion rate optimisation, product SEO and ongoing store support.'],
  ['Can you improve a Shopify store that is already live?', 'Absolutely. I can review an existing store, identify friction in the shopping journey and prioritise improvements to the homepage, collection pages, product pages, cart and mobile experience. A full rebuild is not always necessary.'],
  ['Can you design or redesign my Shopify store from scratch?', 'Yes. I can help structure and design a new Shopify storefront around your products, brand, customers and business goals, then prepare the key pages and shopping journey for launch.'],
  ['Do you offer conversion rate optimisation (CRO)?', 'Yes. CRO work can include a store and customer-journey audit, clearer messaging, stronger product-page content, trust elements, navigation improvements, mobile UX, cart experience and reducing unnecessary checkout friction. Recommendations are based on the store rather than a generic checklist.'],
  ['Can you manage products, collections and store updates?', 'Yes. This can include product uploads, product descriptions, images, variants, pricing, tags, collection organisation, navigation updates, merchandising and routine quality checks.'],
  ['Do you work with Shopify themes and apps?', 'Yes. I can work with existing Shopify themes, make suitable theme customisations and help review app requirements or integrations. The exact scope depends on the theme, app and functionality involved.'],
  ['Can you help with Google Ads and Google Merchant Center?', 'Yes. I can support Google Ads setup and campaign management, as well as product feed and Google Merchant Center troubleshooting. Campaign work should be connected to a sound landing-page and store experience.'],
  ['Do you also work with platforms other than Shopify?', 'Yes. My wider website design work includes Wix website design and redesign. Shopify remains the main focus of my ecommerce management and CRO services.'],
  ['How do you work with clients in different time zones?', 'I agree on communication channels, milestones and response expectations at the start. Most project work is asynchronous, with calls arranged by mutual agreement when a live discussion is useful.'],
  ['How long does a project take?', 'It depends on the size of the store, the number of pages or products involved, the technical requirements and how quickly feedback or access is available. I will agree on a realistic scope and timeline before work begins.'],
  ['How much do your services cost?', 'Pricing depends on the work required, the condition and size of the store, and whether you need a one-off project or ongoing support. Share your store link and goals so I can recommend a suitable scope and quote.'],
  ['What do you need from me to get started?', 'Usually, I need your store URL, a short brief about your goals and the main problems you want solved. If we proceed, you can provide the appropriate Shopify collaborator access and any brand assets or references needed for the work.'],
  ['Is it safe to give you access to my Shopify store?', 'You should invite me through Shopify collaborator access and grant only the permissions needed for the agreed work. You do not need to send your personal password. Access can be reviewed or revoked by the store owner.'],
  ['Will you guarantee more sales or a specific conversion rate?', 'No responsible CRO or marketing specialist can guarantee a specific sales result. I focus on making evidence-informed improvements, explaining the reasoning and checking the work. Results also depend on traffic quality, pricing, product-market fit, fulfilment and other business factors.'],
  ['Can you provide ongoing support after the project?', 'Yes. Ongoing Shopify management and support can be discussed where you need regular store updates, product and collection management, quality checks or continued optimisation.'],
  ['How do we begin?', 'Send your website or Shopify store URL, tell me what you want to achieve and mention any deadlines. I will review the brief and reply with a practical next step.'],
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
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="visual-break" aria-label="Store growth statement">
          <div className="visual-break-image" aria-hidden="true">
            <img src={cases[0].image} alt="" loading="lazy"/>
            <div className="visual-break-shape visual-break-shape-one"></div>
            <div className="visual-break-shape visual-break-shape-two"></div>
            <div className="visual-break-float visual-break-float-one"><span>01</span><b>Better product pages</b></div>
            <div className="visual-break-float visual-break-float-two"><span>02</span><b>Smoother customer journeys</b></div>
          </div>
          <div className="visual-break-copy">
            <p className="visual-kicker">DESIGN WITH A JOB TO DO</p>
            <h2>Make every part of the store <em>earn its place.</em></h2>
            <p>From the first impression to the final click, I bring design, usability and store performance into the same conversation.</p>
            <a className="visual-link" href="#contact">Let's improve your store <span>↗</span></a>
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


        <section className="image-ribbon" aria-label="Ecommerce services">
          <div className="image-ribbon-photo"><img src={cases[1].image} alt="Expedition Nomad's Haven Shopify project" loading="lazy"/></div>
          <div className="image-ribbon-content">
            <span>THOUGHTFUL ECOMMERCE. PRACTICAL EXECUTION.</span>
            <h2>Good stores don't happen by accident.</h2>
            <a href="#work">Explore the projects <b>↗</b></a>
          </div>
          <div className="image-ribbon-photo image-ribbon-photo-last"><img src={cases[2].image} alt="Saint Phillip Street Gourmet Coffee Shopify project" loading="lazy"/></div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="section-heading">
              <h2 className="section-title">Before we work together.<br/><span>What you should know.</span></h2>
              <p>Practical answers about services, remote collaboration, communication, access, timelines, pricing and what to expect when we work together.</p>
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
