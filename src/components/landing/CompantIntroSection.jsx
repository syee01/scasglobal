import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HOME_PRODUCT_TEASER } from '../../constants/homeContent'
import { fadeUp, staggerContainer } from '../../motion/variants'
import { BrowserMock } from '../product/BrowserMock'

export function CompantIntroSection() {
  const { sitePreview, pageExamples, included } = HOME_PRODUCT_TEASER

  return (
    <section className="section product-teaser" aria-labelledby="teaser-heading">
      <div className="section__inner product-teaser__grid product-teaser__grid--wide">
        <div className="product-teaser__copy">
          <p className="eyebrow">About us</p>
          <h2 id="teaser-heading" className="section__title">
            Built for Quality and Compliance Teams
          </h2>
          <p className="section__lead product-teaser__lead">
            Engineer for Precision, Built For Compliance. At SCAS Global Digital, we believe that Quality
            Control should not be a bottleneck or a source of human error. We were founded by engineers who
            are tired of the "paper trail" - lost inspection sheets, manual data entry mistakes, and the
            constant risk of using obsolete ECN revisions.
          </p>

          <motion.ul
            className="checklist checklist--center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {included.map((line) => (
              <motion.li key={line} variants={fadeUp} className="checklist__item">
                <span className="checklist__tick" aria-hidden>
                  ✓
                </span>
                {line}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="product-teaser__actions"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Link to="/products" className="btn btn--primary">
              Product catalog
            </Link>
          </motion.div>
        </div>

        <BrowserMock urlBar={sitePreview.urlBar} className="product-teaser__mock">
          <p className="browser-mock__intro">
            Illustrative mix of what our web products cover — each product has its own template library and pricing
            tiers on the detail page.
          </p>
          <ul className="browser-mock__sitemap">
            {pageExamples.map((p) => (
              <li key={p.name}>
                <span className="browser-mock__page-name">{p.name}</span>
                <span className="browser-mock__page-purpose">{p.purpose}</span>
              </li>
            ))}
          </ul>
          <p className="browser-mock__footnote">{sitePreview.caption}</p>
        </BrowserMock>
      </div>
    </section>
  )
}
