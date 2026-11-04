'use client'

import { useEffect, useState } from 'react'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const [portraitAvailable, setPortraitAvailable] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    let frame = 0
    const onPointerMove = (event) => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2
        const y = (event.clientY / window.innerHeight - 0.5) * 2
        root.style.setProperty('--hero-pointer-x', x.toFixed(3))
        root.style.setProperty('--hero-pointer-y', y.toFixed(3))
      })
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

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
          {portraitAvailable && (
            <img
              className={styles.portrait}
              src="/ayomide-headshot.png"
              alt="Ayomide Joshua"
              fetchPriority="high"
              onError={() => setPortraitAvailable(false)}
            />
          )}
          <div className={styles.portraitCaption} aria-hidden="true">
            <span>AYOMIDE JOSHUA</span>
            <span>SHOPIFY / CRO</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomLine} aria-hidden="true">
        <span>STRATEGY / EXPERIENCE / CONVERSION</span>
        <span className={styles.scrollCue}><i /> SCROLL TO EXPLORE</span>
      </div>
    </section>
  )
}
