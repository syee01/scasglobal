import { motion } from 'framer-motion'
import { MISSION_VISION } from '../../constants/homeContent'
import { fadeUp, staggerContainer } from '../../motion/variants'

function IconMission(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" role="presentation" aria-hidden {...props}>
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}

function IconVision(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" role="presentation" aria-hidden {...props}>
      <path
        d="M16 8c-4.5 0-8 4.8-8 8s3.5 8 8 8 8-4.8 8-8-3.5-8-8-8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  )
}

const cardHover = {
  y: -6,
  transition: { type: 'spring', stiffness: 420, damping: 28 },
}

export function MissionVisionSection() {
  const { sectionEyebrow, beliefTitle, beliefParagraphs, mission, vision } = MISSION_VISION

  return (
    <section className="section mission-vision" aria-labelledby="mission-vision-heading">
      <div className="section__inner">
        <motion.div
          className="section__header mission-vision__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mission-vision__eyebrow">{sectionEyebrow}</p>
          <h2 id="mission-vision-heading" className="section__title">
            {beliefTitle}
          </h2>
        </motion.div>

        <motion.div
          className="mission-vision__belief"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {beliefParagraphs.map((text, i) => (
            <motion.p key={i} className="mission-vision__belief-text" variants={fadeUp}>
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mission-vision__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.article
            className="mission-vision__card mission-vision__card--mission"
            variants={fadeUp}
            whileHover={cardHover}
            aria-labelledby="mission-title"
          >
            <div className="mission-vision__card-glow mission-vision__card-glow--mission" aria-hidden />
            <div className="mission-vision__card-top">
              <span className="mission-vision__icon-wrap mission-vision__icon-wrap--mission">
                <IconMission className="mission-vision__icon" />
              </span>
              <h3 id="mission-title" className="mission-vision__label">
                Mission
              </h3>
            </div>
            <p className="mission-vision__text">{mission}</p>
          </motion.article>

          <div className="mission-vision__bridge" aria-hidden>
            <span className="mission-vision__bridge-line" />
          </div>

          <motion.article
            className="mission-vision__card mission-vision__card--vision"
            variants={fadeUp}
            whileHover={cardHover}
            aria-labelledby="vision-title"
          >
            <div className="mission-vision__card-glow mission-vision__card-glow--vision" aria-hidden />
            <div className="mission-vision__card-top">
              <span className="mission-vision__icon-wrap mission-vision__icon-wrap--vision">
                <IconVision className="mission-vision__icon" />
              </span>
              <h3 id="vision-title" className="mission-vision__label">
                Vision
              </h3>
            </div>
            <p className="mission-vision__text">{vision}</p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
