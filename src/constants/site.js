/**
 * Global marketing copy and contact details for SCAS Globals.
 * Centralized for reuse in header, footer, and meta.
 */
export const COMPANY = {
  name: 'SCAS Globals',
  tagline: 'Websites as a product — launch faster, scale with confidence.',
  description:
    'Enterprise-ready web experiences packaged as clear products: each website has defined pages, delivery, and care.',
}

export const CONTACT = {
  email: 'hello@scasglobals.com',
  phone: '',
  addressLine1: '1171, Badak Moti, Sungai Bakap',
  addressLine2: '14200, Penang, Malaysia',
  hours: 'Mon-Fri, 9:00-18:00 (MYT)',
}

/**
 * Primary navigation — product SKUs live under /products only.
 * Items with `hash` scroll to that id on the home page (`/#enquiry`).
 */
export const PRIMARY_NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products', end: true },
  { to: '/', label: 'Contact', hash: 'enquiry' },
]
