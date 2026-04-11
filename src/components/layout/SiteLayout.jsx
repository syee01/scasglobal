import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { getPageVariant } from '../../utils/pageVariant'

export function SiteLayout() {
  const { pathname, hash } = useLocation()
  const variant = getPageVariant(pathname)

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname, hash])

  return (
    <div className={`site-shell site-shell--${variant}`}>
      <Header key={pathname} variant={variant} />
      <main id="main-content" className={`site-main site-main--${variant}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
