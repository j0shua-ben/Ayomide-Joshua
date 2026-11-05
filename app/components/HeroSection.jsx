'use client'

import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowMark} aria-hidden="true" />
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

          <div className={styles.bottomLine} aria-hidden="true">
            <span>STRATEGY / EXPERIENCE / CONVERSION</span>
            <span className={styles.scrollCue}><i /> SCROLL TO EXPLORE</span>
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
