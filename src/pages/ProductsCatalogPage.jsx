import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PRODUCT_CATALOG } from '../constants/products'
import { WEBSITE_SIZING_TIERS } from '../constants/homeContent'
import { fadeUp, staggerContainer } from '../motion/variants'

export default function ProductsCatalogPage() {
  return (
    <article className="catalog-page">
      <header className="catalog-hero catalog-hero--split section">
        <div className="section__inner catalog-hero__split catalog-hero__split--text-only">
          <motion.div
            className="catalog-hero__copy"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="eyebrow catalog-hero__eyebrow" variants={fadeUp}>
              Products
            </motion.p>
            <motion.h1 className="catalog-hero__title" variants={fadeUp}>
              Websites you buy as products
            </motion.h1>
            <motion.p className="catalog-hero__lead" variants={fadeUp}>
              Our website products give teams a ready-to-launch digital presence with clear messaging, reusable
              content blocks, and conversion-focused journeys. Each package is built to be scalable and easy to
              operate, so you can launch faster without rebuilding everything from scratch.
            </motion.p>
          </motion.div>
        </div>
      </header>

      <section className="section catalog-sizing" aria-labelledby="sizing-heading">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Tiers</p>
            <h2 id="sizing-heading" className="section__title">
              Digital Quality Control Precision 
            </h2>
            <p className="section__lead catalog-sizing__lead">
              Website packages are structured on a Launch / Scale / Enterprise ladder, so you can match scope,
              support, and rollout complexity to your business stage.
            </p>
          </div>
          <motion.ul
            className="catalog-sizing__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {WEBSITE_SIZING_TIERS.map((tier) => (
              <motion.li
                key={tier.id}
                className={`catalog-sizing__card${tier.highlight ? ' catalog-sizing__card--highlight' : ''}`}
                variants={fadeUp}
              >
                {tier.image ? (
                  <div className="catalog-sizing__media">
                    <img src={tier.image} alt={tier.imageAlt ?? `${tier.name} preview`} loading="lazy" />
                    <div className="catalog-sizing__overlay">
                      <h3 className="catalog-sizing__name">{tier.name}</h3>
                    </div>
                  </div>
                ) : null}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section catalog-grid-section" aria-labelledby="catalog-heading">
        <div className="section__inner">
          <h2 id="catalog-heading" className="section__title catalog-grid-section__title">
            Our website product
          </h2>
          <p className="section__lead catalog-grid-section__intro">
            Open the product sheet for full page lists, visitor journeys, and tier detail.
          </p>
          <ul
            className={`catalog-grid${PRODUCT_CATALOG.length === 1 ? ' catalog-grid--single' : ''}`}
          >
            {PRODUCT_CATALOG.map((product, index) => (
              <motion.li
                key={product.slug}
                className={`catalog-card${product.status === 'coming-soon' ? ' catalog-card--soon' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                <div className="catalog-card__media">
                  <img src={product.heroImage} alt="" width={640} height={360} loading="lazy" />
                  {product.status === 'coming-soon' ? (
                    <span className="catalog-card__badge">Coming soon</span>
                  ) : null}
                </div>
                <div className="catalog-card__body">
                  {product.status === 'coming-soon' ? <span className="catalog-card__badge">Coming soon</span> : null}
                  <p className="catalog-card__label">{product.shortLabel}</p>
                  <h3 className="catalog-card__name">{product.name}</h3>
                  <p className="catalog-card__summary">{product.cardSummary}</p>
                  {product.status === 'available' ? (
                    <Link to={`/products/${product.slug}`} className="catalog-card__cta btn btn--primary btn--sm btn--catalog-card">
                      View {product.name}
                    </Link>
                  ) : (
                    <span className="catalog-card__cta catalog-card__cta--disabled">
                      Details when available
                    </span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}
