import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../motion/variants'
import motionVideo from '../../assets/motion.mp4'

export function MainSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__background" aria-hidden="true">
        <video
          className="hero__background-video"
          src={motionVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="hero__background-overlay" />
      </div>
      <div className="hero__grid">
        <motion.div
          className="hero__copy"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Web-based QMS for manufacturers
          </motion.p>
          <motion.h1 id="hero-heading" className="hero__title" variants={fadeUp}>
            Eliminate the Clipboard. Automate the Insight
          </motion.h1>
          <motion.p className="hero__lead" variants={fadeUp}>
            The integrated QC platform with real-time Bluetooth data capture. Transform your factory floor with
            paperless QMS that connects directly to your tools. Move from IQC to OQC with zero manual entry,
            automated pass/fail judgements, and total ECN revision control
          </motion.p>
          <motion.div className="hero__actions" variants={fadeUp}>
            <Link to="/products" className="btn btn--primary">
              View products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
