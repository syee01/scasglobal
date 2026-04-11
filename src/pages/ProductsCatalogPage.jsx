import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CATALOG_HERO_IMAGE } from '../constants/catalogAssets'
import { PRODUCT_CATALOG } from '../constants/products'
import { WEBSITE_SIZING_TIERS } from '../constants/homeContent'
import { fadeUp, staggerContainer } from '../motion/variants'

export default function ProductsCatalogPage() {
  return (
    <article className="catalog-page">
      <header className="catalog-hero catalog-hero--split section">
        <div className="section__inner catalog-hero__split">
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
              Each line item below is a defined website: clear page types, editor experience, and delivery boundaries.
              Use <strong>QCX</strong> for your flagship story and <strong>Website B</strong> for high-velocity
              campaign and landing work — or deploy both under one relationship.
            </motion.p>
          </motion.div>
          <motion.div
            className="catalog-hero__figure"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="catalog-hero__figure-frame">
              <img
                src={CATALOG_HERO_IMAGE}
                alt="Design workspace with layout sketches and interface mockups"
                width={720}
                height={540}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </header>

      <section className="section catalog-sizing" aria-labelledby="sizing-heading">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Sizing</p>
            <h2 id="sizing-heading" className="section__title">
              How we size a website engagement
            </h2>
            <p className="section__lead catalog-sizing__lead">
              Both <strong>QCX</strong> and <strong>Website B</strong> use the same Launch / Scale / Enterprise
              ladder. Exact ranges and template counts are on each product page — this is the shared commercial shape.
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
                <h3 className="catalog-sizing__name">{tier.name}</h3>
                <p className="catalog-sizing__summary">{tier.summary}</p>
                <ul className="catalog-sizing__bullets">
                  {tier.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section catalog-grid-section" aria-labelledby="catalog-heading">
        <div className="section__inner">
          <h2 id="catalog-heading" className="section__title catalog-grid-section__title">
            Choose your website product
          </h2>
          <p className="section__lead catalog-grid-section__intro">
            Open a product sheet for full page lists, visitor journeys, and tier detail.
          </p>
          <ul className="catalog-grid">
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
