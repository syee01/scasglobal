import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { getPageVariant } from '../../utils/pageVariant'

export function SiteLayout() {
  const { pathname } = useLocation()
  const variant = getPageVariant(pathname)

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
