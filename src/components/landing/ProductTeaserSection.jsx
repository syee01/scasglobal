import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BrowserMock } from '../product/BrowserMock'
import { HOME_PRODUCT_TEASER } from '../../constants/homeContent'
import { fadeUp, staggerContainer } from '../../motion/variants'

export function ProductTeaserSection() {
  const { sitePreview, pageExamples, included } = HOME_PRODUCT_TEASER

  return (
    <section className="section product-teaser" aria-labelledby="teaser-heading">
      <div className="section__inner product-teaser__grid product-teaser__grid--wide">
        <div>
          <p className="eyebrow">Our website products</p>
          <h2 id="teaser-heading" className="section__title">
            Packaged sites — scope you can actually sign
          </h2>
          <p className="section__lead">
            Every SKU is a real website class: named templates, editor workflows, hosting, and go-live — not a blank
            statement of work. Compare <strong>Website A</strong> and <strong>Website B</strong> in the catalog and open
            the sheet that matches your job-to-be-done.
          </p>

          <motion.ul
            className="checklist"
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
            Illustrative mix of what our website products cover — each product has its own template library and pricing
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
