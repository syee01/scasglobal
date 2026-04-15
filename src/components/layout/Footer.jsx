import { Link } from 'react-router-dom'
import { COMPANY, CONTACT } from '../../constants/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand">{COMPANY.name}</p>
            <p className="site-footer__tagline">{COMPANY.tagline}</p>
            <Link to="/products" className="site-footer__link">
              Browse website products →
            </Link>
          </div>

          <div className="site-footer__contact">
            <h2 className="site-footer__heading">Contact</h2>
            <address className="site-footer__address">
              <p>{CONTACT.addressLine1}</p>
              <p>{CONTACT.addressLine2}</p>
              <p>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
              <p>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
              </p>
              <p className="site-footer__hours">{CONTACT.hours}</p>
            </address>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p className="site-footer__disclaimer">
            Legal disclaimer: The motion video and selected illustrative images used on this website are
            AI-generated conceptual visuals for presentation purposes only and do not represent actual client
            facilities, products, measurements, or outcomes.
          </p>
          <p className="site-footer__copyright">© {year} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
