import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ComparisonSection } from '../components/landing/ComparisonSection'
import { BrowserMock } from '../components/product/BrowserMock'
import { CONTACT } from '../constants/site'
import { getProductDetail } from '../constants/products'
import { fadeUp, staggerContainer } from '../motion/variants'
import homePage from '../assets/homePage.png'
import engineeringSetupPage from '../assets/engineeringSetupPage.png'
import qcInspectionHeader from '../assets/qcInspectionHeader.png'
import qcInspectionPage from '../assets/qcInspectionPage.png'
import resultPageHeader from '../assets/resultPageHeader.png'
import resultPage from '../assets/resultPage.png'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const data = slug ? getProductDetail(slug) : null

  if (!data) {
    return (
      <div className="section product-missing">
        <div className="section__inner section__narrow">
          <h1>Product not found</h1>
          <p>This product does not exist or the link is outdated.</p>
          <Link to="/products" className="btn btn--primary">
            Back to products
          </Link>
        </div>
      </div>
    )
  }

  const { catalog, detail } = data

  if (catalog.status === 'coming-soon' || !detail) {
    return (
      <article className="product-page product-page--soon">
        <header className="product-hero">
          <div className="section__inner product-hero__grid">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p className="eyebrow" variants={fadeUp}>
                {catalog.name}
              </motion.p>
              <motion.h1 className="product-hero__title" variants={fadeUp}>
                Coming soon
              </motion.h1>
              <motion.p className="product-hero__lead" variants={fadeUp}>
                {catalog.tagline}
              </motion.p>
              <motion.p variants={fadeUp}>
                <a
                  href={`mailto:${CONTACT.email}?subject=Waitlist%20-%20${encodeURIComponent(catalog.name)}`}
                  className="btn btn--primary"
                >
                  Join the waitlist
                </a>
                <Link to="/products" className="btn btn--ghost product-hero__back">
                  ← All products
                </Link>
              </motion.p>
            </motion.div>
            <motion.div
              className="product-hero__image product-hero__image--dim"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={catalog.heroImage} alt="" width={960} height={640} loading="eager" />
            </motion.div>
          </div>
        </header>
      </article>
    )
  }

  const d = detail
  const isQcx = catalog.name === 'QCX'
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <article className="product-page">
      <header className="product-hero">
        <div className="section__inner product-hero__grid">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p className="eyebrow" variants={fadeUp}>
              Product · {catalog.name}
            </motion.p>
            <motion.h1 className="product-hero__title" variants={fadeUp}>
              {catalog.tagline}
            </motion.h1>
            <motion.p className="product-hero__lead" variants={fadeUp}>
              {catalog.cardSummary}
            </motion.p>
            <motion.p variants={fadeUp}>
              <a
                href={`mailto:${CONTACT.email}?subject=Enquiry%20-%20${encodeURIComponent(catalog.name)}`}
                className="btn btn--primary"
              >
                Talk to us about {catalog.name}
              </a>
              <Link to="/products" className="btn btn--ghost product-hero__back">
                ← All products
              </Link>
            </motion.p>
          </motion.div>
          <motion.div
            className="product-hero__image"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={catalog.heroImage}
              alt="Laptop showing analytics and web workspace"
              width={960}
              height={640}
              loading="eager"
            />
          </motion.div>
        </div>
      </header>

      {isQcx ? (
        <section className="qcx-feature-suite" aria-labelledby="qcx-feature-story-heading">
          <div className="section__inner">
            <motion.div
              className="section__header qcx-feature-suite__header"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow">QCX Product Features</p>
              <h2 id="qcx-feature-story-heading" className="section__title">
               
              </h2>
            </motion.div>

            <div className="qcx-stage-list">
              <motion.article
                className="qcx-stage-card"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="qcx-stage-card__copy">
                  <motion.h3 variants={itemVariants} className="qcx-stage-card__title">
                    From Engineering Definition to Automatic QC Judgment — One Integrated QC Database
                  </motion.h3>
                  <motion.p variants={itemVariants} className="qcx-stage-card__lead">
                    Digitize inspection planning, drawing mark-ups, data capture Bluetooth technology, USB type,
                    manual cosmetic, and ECN control in one paperless quality control platform.
                  </motion.p>
                  <motion.div variants={itemVariants} className="qcx-stage-card__group">
                    <p className="qcx-stage-card__group-title">One Platform. Complete Quality Flow.</p>
                    <p className="qcx-stage-card__group-text">
                      Engineering Setup → Inspection Plan → Drawing Mark-Up → QC Execution → Auto Judgment → Reports
                    </p>
                  </motion.div>
                  <motion.ul variants={itemVariants} className="qcx-stage-card__list">
                    <li>Role-based modules</li>
                    <li>Professional, auditable system</li>
                    <li>Not Excel, not paper, not ad-hoc</li>
                  </motion.ul>
                </div>

                <motion.div className="qcx-stage-card__media" variants={imageVariants} whileHover={{ scale: 1.06 }}>
                  <img src={homePage} alt="QCX home page workflow preview" loading="lazy" />
                </motion.div>
              </motion.article>

              <motion.article
                className="qcx-stage-card qcx-stage-card--reverse"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="qcx-stage-card__copy">
                  <motion.h3 variants={itemVariants} className="qcx-stage-card__title">
                    Quality consistency starts with engineering discipline
                  </motion.h3>
                  <motion.p variants={itemVariants} className="qcx-stage-card__group-title">
                    Flexible Data Entry from Shop Floor
                  </motion.p>
                  <motion.p variants={itemVariants} className="qcx-stage-card__group-text">
                    Description Supports multiple inspection methods for real production environments.
                  </motion.p>
                  <motion.div variants={itemVariants} className="qcx-stage-card__group">
                    <p className="qcx-stage-card__group-title">Supported methods</p>
                    <ul className="qcx-stage-card__sublist">
                      <li>Bluetooth caliper & micrometer</li>
                      <li>Manual numeric entry</li>
                      <li>Go / No-Go & form-fit jig result</li>
                      <li>Cosmetic / visual inspection (OK / NG)</li>
                    </ul>
                  </motion.div>
                  <motion.ul variants={itemVariants} className="qcx-stage-card__list">
                    <li>Centralized master control by Engineering</li>
                  </motion.ul>
                </div>

                <motion.div className="qcx-stage-card__media" variants={imageVariants} whileHover={{ scale: 1.06 }}>
                  <img src={engineeringSetupPage} alt="Engineering setup page in QCX" loading="lazy" />
                </motion.div>
              </motion.article>

              <motion.article
                className="qcx-stage-card"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="qcx-stage-card__copy">
                  <motion.h3 variants={itemVariants} className="qcx-stage-card__title">
                    Part & Process Master Setup Inspection Plan
                  </motion.h3>
                  <motion.ul variants={itemVariants} className="qcx-stage-card__list">
                    <li>Supports structured ECN workflow</li>
                    <li>Prevents uncontrolled inspection changes</li>
                  </motion.ul>
                  <motion.div variants={itemVariants} className="qcx-stage-card__group">
                    <p className="qcx-stage-card__group-text">
                      Upload approved drawings (PDF) and linked directly to the inspection plan to use later for inspection point mark-up and reference
                    </p>
                  </motion.div>
                  <motion.div variants={itemVariants} className="qcx-stage-card__group">
                    <p className="qcx-stage-card__group-title">Engineers define each inspection point with:</p>
                    <ul className="qcx-stage-card__sublist">
                      <li>Location : Mark up</li>
                      <li>Feature : Length /Width/Hole to Hole</li>
                      <li>Inspection type : Dimension/ Functional/Cosmetic</li>
                      <li>Equipment :Caliper/Micrometer/Jig / Go-No-Go</li>
                      <li>Nominal and tolerance. Auto in USL, LSL QC screen</li>
                    </ul>
                  </motion.div>
                </div>
                <motion.div
                  className="qcx-stage-card__media qcx-stage-card__media--combined"
                  variants={imageVariants}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className="qcx-stage-card__combined-grid">
                    <div className="qcx-stage-card__combined-item">
                      <img src={qcInspectionHeader} alt="Inspection plan header flow in QCX" loading="lazy" />
                    </div>
                    <div className="qcx-stage-card__combined-item">
                      <img src={qcInspectionPage} alt="QC inspection point definition page" loading="lazy" />
                    </div>
                  </div>
                </motion.div>
              </motion.article>

              <motion.article
                className="qcx-stage-card qcx-stage-card--reverse"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="qcx-stage-card__copy">
                  <motion.h3 variants={itemVariants} className="qcx-stage-card__title">
                    QC Data entry and Inspection Result
                  </motion.h3>
                  <motion.p variants={itemVariants} className="qcx-stage-card__group-title">
                    Flexible Data Entry from Shop Floor
                  </motion.p>
                  <motion.p variants={itemVariants} className="qcx-stage-card__group-text">
                    Description Supports multiple inspection methods for real production environments.
                  </motion.p>
                  <motion.div variants={itemVariants} className="qcx-stage-card__group">
                    <p className="qcx-stage-card__group-title">Supported methods</p>
                    <ul className="qcx-stage-card__sublist">
                      <li>Bluetooth caliper & micrometer direct data transfer. No typo errors.</li>
                      <li>Manual numeric entry for pin gage or non Bluetooth or USB technology</li>
                      <li>Go / No-Go & form-fit jig result</li>
                      <li>Cosmetic / visual inspection (OK / NG)</li>
                    </ul>
                  </motion.div>
                  <motion.ul variants={itemVariants} className="qcx-stage-card__list">
                    <li>Drawing Upload & Mark-Up</li>
                    <li>Visual Quality Definition — No Interpretation</li>
                  </motion.ul>
                </div>
                <motion.div
                  className="qcx-stage-card__media qcx-stage-card__media--combined"
                  variants={imageVariants}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className="qcx-stage-card__combined-grid">
                    <div className="qcx-stage-card__combined-item">
                      <img src={resultPageHeader} alt="QC data entry header in QCX" loading="lazy" />
                    </div>
                    <div className="qcx-stage-card__combined-item">
                      <img src={resultPage} alt="QC result page with drawing mark-up" loading="lazy" />
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section product-context" aria-labelledby="what-heading">
        <div className="section__inner product-context__grid">
          <div>
            <h2 id="what-heading" className="section__title">
              {d.whatItIs.title}
            </h2>
            <p className="section__lead product-context__lead">{d.whatItIs.lead}</p>
            <ul className="product-context__bullets">
              {d.whatItIs.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="product-context__aside">
            <h3 className="product-context__aside-title">{d.audience.title}</h3>
            <ul className="product-audience">
              {d.audience.items.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ComparisonSection />

      <section className="section product-site-visual" aria-labelledby="structure-heading">
        <div className="section__inner product-site-visual__grid">
          <div>
            <p className="eyebrow">On the web</p>
            <h2 id="structure-heading" className="section__title">
              {d.pageStructure.title}
            </h2>
            <p className="section__lead">{d.pageStructure.description}</p>
            <p className="site-preview-caption">{d.sitePreview.caption}</p>
          </div>
          <BrowserMock urlBar={d.sitePreview.urlBar}>
            <ul className="browser-mock__sitemap">
              {d.pageStructure.pages.map((p) => (
                <li key={p.name}>
                  <span className="browser-mock__page-name">{p.name}</span>
                  <span className="browser-mock__page-purpose">{p.purpose}</span>
                </li>
              ))}
            </ul>
          </BrowserMock>
        </div>
      </section>

      <section className="section product-journeys" aria-labelledby="journeys-heading">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Experience</p>
            <h2 id="journeys-heading" className="section__title">
              {d.visitorJourneys.title}
            </h2>
          </div>
          <motion.ul
            className="journey-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {d.visitorJourneys.journeys.map((j) => (
              <motion.li key={j.title} className="journey-card" variants={fadeUp}>
                <h3 className="journey-card__title">{j.title}</h3>
                <p className="journey-card__text">{j.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section product-split" aria-labelledby="ops-heading">
        <div className="section__inner product-split__grid">
          <div>
            <h2 id="ops-heading" className="section__title">
              {d.editorExperience.title}
            </h2>
            <ul className="product-split__list">
              {d.editorExperience.items.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section__title">{d.techQuality.title}</h2>
            <ul className="product-split__list">
              {d.techQuality.items.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="included-heading">
        <div className="section__inner section__narrow">
          <h2 id="included-heading" className="section__title">
            Delivery package for {catalog.name}
          </h2>
          <p className="section__lead">
            Everything below ships as part of the product — tier choice changes depth (locales, templates, SLAs), not
            ambiguity.
          </p>
          <motion.ul
            className="checklist checklist--two-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {d.included.map((line) => (
              <motion.li key={line} variants={fadeUp} className="checklist__item">
                <span className="checklist__tick" aria-hidden>
                  ✓
                </span>
                {line}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section tiers-section" aria-labelledby="tiers-heading">
        <div className="section__inner">
          <div className="section__header">
            <p className="eyebrow">Sizing {catalog.name}</p>
            <h2 id="tiers-heading" className="section__title">
              Pick the footprint for this website
            </h2>
          </div>
          <div className="tiers">
            {d.tiers.map((tier, index) => (
              <motion.article
                key={tier.id}
                className={`tier-card${tier.highlighted ? ' tier-card--highlight' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
              >
                {tier.highlighted ? <span className="tier-card__ribbon">Most popular</span> : null}
                <h3 className="tier-card__name">{tier.name}</h3>
                <p className="tier-card__blurb">{tier.blurb}</p>
                <p className="tier-card__price">{tier.priceHint}</p>
                <ul className="tier-card__features">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sla-section" aria-labelledby="sla-heading">
        <div className="section__inner sla-grid">
          <div>
            <h2 id="sla-heading" className="section__title">
              Operations & trust
            </h2>
            <p className="section__lead">
              Procurement-friendly boundaries for hosting, support, and releases on {catalog.name}.
            </p>
          </div>
          <ul className="sla-list">
            {d.slaPoints.map(({ title: t, detail }) => (
              <li key={t}>
                <strong>{t}</strong>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="cta-heading">
        <motion.div
          className="section__inner cta-band__inner"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="cta-heading" className="cta-band__title">
            Want {catalog.name} on your domain?
          </h2>
          <p className="cta-band__text">
            Email us your regions, languages, and must-have pages — we will reply with a scoped offer tied to this
            product.
          </p>
          <div className="cta-band__actions">
            <a
              href={`mailto:${CONTACT.email}?subject=Proposal%20-%20${encodeURIComponent(catalog.name)}`}
              className="btn btn--primary btn--lg"
            >
              {CONTACT.email}
            </a>
            <p className="cta-band__meta">
              {CONTACT.phone} · {CONTACT.hours}
            </p>
          </div>
        </motion.div>
      </section>
    </article>
  )
}
