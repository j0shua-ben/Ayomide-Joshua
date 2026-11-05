'use client'

import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.shopifyMark} aria-hidden="true">
              <svg viewBox="0 0 32 36" focusable="false">
                <path d="M7 10h18l2.2 23H4.8L7 10Z" fill="currentColor" />
                <path d="M11 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M17.8 17.2c-.6-.5-1.3-.7-2.1-.7-1.1 0-1.8.5-1.8 1.2 0 1.9 4.6 1.1 4.6 4.3 0 1.8-1.5 3-3.6 3-1.4 0-2.6-.4-3.5-1.2l.9-1.5c.8.6 1.6.9 2.5.9 1 0 1.6-.4 1.6-1.1 0-1.8-4.6-1.1-4.6-4.3 0-1.8 1.5-3 3.6-3 1.2 0 2.2.3 3 .9l-.6 1.5Z" fill="#f3eee5" />
              </svg>
            </span>
            Shopify management <span>/</span> CRO <span>/</span> ecommerce growth
          </p>

          <h1 id="hero-title" className={styles.title}>
            <span className={styles.titleLine}>SHOPIFY STORE</span>
            <span className={styles.titleLine}><span>BUILT TO</span> <span className={styles.titleAccent}>SELL</span></span>
          </h1>

          <p className={styles.description}>
            I help ecommerce brands improve their Shopify stores through hands-on
            management, conversion-focused design and practical growth campaigns —
            making the buying journey clearer from first visit to checkout.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#contact">
              Talk about your store <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.secondaryAction} href="#work">
              See the work <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.proof} aria-label="Professional focus">
            <span><strong>5+</strong> years of experience</span>
            <span className={styles.proofDivider} aria-hidden="true" />
            <span>Shopify specialist</span>
            <span className={styles.proofDivider} aria-hidden="true" />
            <span>CRO-led execution</span>
          </div>

        </div>

        <div className={styles.portraitStage} aria-label="Portrait of Ayomide Joshua">
          <img
            className={styles.portrait}
            src="/ayomide-headshot.png"
            alt="Ayomide Joshua"
            fetchPriority="high"
          />
        </div>
      </div>

    </section>
  )
}
