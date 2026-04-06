import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { COMPANY, CONTACT } from '../../constants/site'
import { fadeUp, staggerContainer } from '../../motion/variants'
import mainImage from '../../assets/main.png'

const HERO_IMAGE = mainImage

export function MainSection() {
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
            Eliminate the Clipboard. Automate the Insight
          </motion.h1>
          <motion.p className="hero__lead" variants={fadeUp}>
            The Integrated QC platform with Real-Time Bluetooth Data ,capture.
            Transform your factory floor with paperless QMS that connects directly to your tools. Move from IQC to OQC with zero manual entry , automated pass/fail judgements and total ECN revision control
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
            <li className="hero__stat-item">
              <span className="hero__stat-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" role="presentation">
                  <path
                    d="M12 3v18m0-18 5 5-5 4m0-9-5 5 5 4m0 0 5 5-5 4m0-9-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <strong>Bluetooth / USB</strong>
                <span>equipment data transfer</span>
              </div>
            </li>
            <li className="hero__stat-item">
              <span className="hero__stat-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" role="presentation">
                  <path
                    d="M7 17h10a4 4 0 0 0 .2-8 5.5 5.5 0 0 0-10.7 1.7A3.8 3.8 0 0 0 7 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M10 14h4M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <strong>Cloud / Local Server</strong>
                <span>supported</span>
              </div>
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
            {/* <motion.div
              className="hero__floating-card"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <span className="hero__floating-label">Product line</span>
              <span className="hero__floating-value">Website A & B</span>
              <span className="hero__floating-sub">Browse the catalog</span>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
