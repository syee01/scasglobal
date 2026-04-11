import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { COMPANY, PRIMARY_NAV } from '../../constants/site'

function navLinkClass({ isActive }) {
  return `nav-pro__link${isActive ? ' nav-pro__link--active' : ''}`
}

/**
 * @param {{ variant?: 'home' | 'product' | 'catalog' }} props
 */
export function Header({ variant = 'catalog' }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const linkList = (
    <>
      {PRIMARY_NAV.map((item) => {
        const { label, to, end, hash } = item
        if (hash) {
          const active = location.pathname === '/' && location.hash === `#${hash}`
          return (
            <li key={label}>
              <Link
                to={{ pathname: '/', hash }}
                className={`nav-pro__link${active ? ' nav-pro__link--active' : ''}`}
                onClick={() => {
                  setMobileOpen(false)
                  if (location.pathname === '/' && location.hash === `#${hash}`) {
                    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {label}
              </Link>
            </li>
          )
        }
        return (
          <li key={to}>
            <NavLink to={to} end={end} className={navLinkClass} onClick={() => setMobileOpen(false)}>
              {label}
            </NavLink>
          </li>
        )
      })}
    </>
  )

  return (
    <header className={`site-header site-header--variant-${variant}`}>
      <div className="site-header__inner site-header__inner--pro">
        <Link to="/" className="site-logo" onClick={() => setMobileOpen(false)}>
          <span className="site-logo__mark" aria-hidden />
          <span className="site-logo__text">{COMPANY.name}</span>
        </Link>

        <nav className="site-nav site-nav--desktop nav-pro" aria-label="Primary">
          <ul className="nav-pro__list">{linkList}</ul>
        </nav>

        <button
          type="button"
          className={`site-nav__toggle site-nav__toggle--variant-${variant}`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="visually-hidden">Menu</span>
          <span className={`burger${mobileOpen ? ' burger--open' : ''}`} aria-hidden />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            className={`site-nav-mobile site-nav-mobile--pro site-nav-mobile--variant-${variant}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile primary">
              <ul className="nav-pro__list nav-pro__list--stack">{linkList}</ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
