import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { COMPANY, CONTACT } from '../../constants/site'
import { fadeUp, staggerContainer } from '../../motion/variants'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80'

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__grid">
        <motion.div
          className="hero__copy"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Websites as a product
          </motion.p>
          <motion.h1 id="hero-heading" className="hero__title" variants={fadeUp}>
            Enterprise websites you can buy — not endless agency scope.
          </motion.h1>
          <motion.p className="hero__lead" variants={fadeUp}>
            {COMPANY.tagline} Pick the site type that fits: flagship corporate, campaign landings, or both — each is a
            defined product with clear pages, delivery, and ownership.
          </motion.p>
          <motion.div className="hero__actions" variants={fadeUp}>
            <Link to="/products" className="btn btn--primary">
              All products
            </Link>
            <a href={`mailto:${CONTACT.email}`} className="btn btn--ghost hero__contact">
              Contact sales
            </a>
          </motion.div>
          <motion.ul className="hero__stats" variants={fadeUp}>
            <li>
              <strong>2 live SKUs</strong>
              <span>corporate & campaign sites</span>
            </li>
            <li>
              <strong>4–8 weeks</strong>
              <span>typical first launch</span>
            </li>
            <li>
              <strong>One vendor</strong>
              <span>design, build, host, handover</span>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__frame">
            <img
              src={HERO_IMAGE}
              alt="Bright open office with collaborative workspace"
              width={800}
              height={560}
              loading="eager"
              fetchPriority="high"
            />
            <motion.div
              className="hero__floating-card"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <span className="hero__floating-label">Product line</span>
              <span className="hero__floating-value">Website A & B</span>
              <span className="hero__floating-sub">Browse the catalog</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
