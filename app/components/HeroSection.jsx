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
            <span className={styles.titleLine}>Shopify.</span>
            <span className={styles.titleLine}>Built to</span>
            <span className={styles.titleAccent}>Convert<span className={styles.period}>.</span></span>
          </h1>

          <p className={styles.description}>
            I help ecommerce brands make their Shopify stores easier to trust,
            easier to use and easier to buy from — with conversion at the centre
            of every improvement.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#contact">
              Start a project <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.secondaryAction} href="#work">
              View selected work <span aria-hidden="true">↗</span>
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

      <div className={styles.bottomLine} aria-hidden="true">
        <span>STRATEGY / EXPERIENCE / CONVERSION</span>
        <span className={styles.scrollCue}><i /> SCROLL TO EXPLORE</span>
      </div>
    </section>
  )
}
