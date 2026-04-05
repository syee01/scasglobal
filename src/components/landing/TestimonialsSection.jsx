import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../constants/homeContent'
import { fadeUp, staggerContainer } from '../../motion/variants'

export function TestimonialsSection() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-heading">
      <div className="section__inner">
        <div className="section__header testimonials__header">
          <p className="eyebrow">What customers say</p>
          <h2 id="testimonials-heading" className="section__title">
            Teams that bought clarity — not another open-ended rebuild.
          </h2>
        </div>

        <motion.ul
          className="testimonials__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.li key={t.id} className="testimonial-card" variants={fadeUp}>
              <blockquote className="testimonial-card__quote">
                <p>“{t.quote}”</p>
              </blockquote>
              <footer className="testimonial-card__footer">
                <span className="testimonial-card__avatar" aria-hidden>
                  {t.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                </span>
                <div>
                  <span className="testimonial-card__name">{t.name}</span>
                  <p className="testimonial-card__meta">
                    {t.role}, {t.company}
                  </p>
                </div>
              </footer>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
