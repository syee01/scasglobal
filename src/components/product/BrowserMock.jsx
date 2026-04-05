import { motion } from 'framer-motion'

/**
 * Lightweight “browser chrome” to show that the product is an actual website.
 */
export function BrowserMock({ urlBar, children, className = '' }) {
  return (
    <motion.div
      className={`browser-mock ${className}`.trim()}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
    >
      <div className="browser-mock__chrome" aria-hidden>
        <span className="browser-mock__dots">
          <span />
          <span />
          <span />
        </span>
        <div className="browser-mock__url">{urlBar}</div>
      </div>
      <div className="browser-mock__body">{children}</div>
    </motion.div>
  )
}
