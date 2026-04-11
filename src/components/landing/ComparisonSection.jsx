import { motion } from 'framer-motion'
import { SYSTEM_COMPARISON } from '../../constants/systemComparison'
import { fadeUp, staggerContainer } from '../../motion/variants'

export function ComparisonSection() {
  const { existingLabel, oursLabel, rows } = SYSTEM_COMPARISON

  return (
    <section className="section comparison" aria-labelledby="comparison-heading">
      <div className="section__inner">
        <motion.div
          className="section__header comparison__header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Comparison
          </motion.p>
          <motion.h2 id="comparison-heading" className="section__title" variants={fadeUp}>
            Traditional delivery vs QCX software
          </motion.h2>
          <motion.p className="section__lead" variants={fadeUp}>
            A concise view of how procurement and delivery differ when the site is scoped as a product — not an open-ended
            rebuild.
          </motion.p>
        </motion.div>

        <div className="comparison__sheet">
          <p id="comparison-scroll-hint" className="comparison__scroll-hint">
            Scroll horizontally to compare all columns
          </p>
          <div
            className="comparison__scroll"
            tabIndex={0}
            role="region"
            aria-label="Comparison table"
            aria-describedby="comparison-scroll-hint"
          >
            <table className="comparison__table">
              <caption className="visually-hidden">
                Comparison of a typical agency website project and SCAS Globals productized websites
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="comparison__th comparison__th--criteria">
                    Feature
                  </th>
                  <th scope="col" className="comparison__th comparison__th--standard">
                    {existingLabel}
                  </th>
                  <th scope="col" className="comparison__th comparison__th--featured">
                    {oursLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <th scope="row" className="comparison__rowhead">
                      {row.dimension}
                    </th>
                    <td className="comparison__cell comparison__cell--baseline">{row.existing}</td>
                    <td className="comparison__cell comparison__cell--ours">{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
