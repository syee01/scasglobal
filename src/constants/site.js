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
  phone: '+1 (555) 010-2048',
  addressLine1: '88 Marina Bay Business District',
  addressLine2: 'Singapore 018956',
  hours: 'Mon–Fri, 9:00–18:00 (SGT)',
}

/** Flat primary navigation — product SKUs live under /products only. */
export const PRIMARY_NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products', end: true },
]
