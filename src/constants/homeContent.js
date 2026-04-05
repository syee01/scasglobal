/**
 * Home page copy that speaks to the full website product line, not a single SKU.
 */
export const HOME_PRODUCT_TEASER = {
  sitePreview: {
    urlBar: 'www.yourcompany.com',
    caption: 'Illustrative structure — each product (A & B) has its own template library and detail page.',
  },
  pageExamples: [
    { name: 'Brand & story', purpose: 'Home, about, and trust — typical of a flagship corporate build.' },
    { name: 'Offers & proof', purpose: 'Solutions, cases, and insights your buyers actually read.' },
    { name: 'Campaign landings', purpose: 'Launches, events, and paid destinations with fast iteration.' },
    { name: 'Convert & comply', purpose: 'Forms, consent, and legal patterns wired for measurement.' },
  ],
  included: [
    'Discovery, IA, and a fixed template library per product — no mystery scope',
    'Design system and responsive front-end on a modern JavaScript stack',
    'CMS or headless setup so marketing can publish routine updates',
    'Staging, QA, analytics hooks, and a documented go-live',
  ],
}

export const TESTIMONIALS = [
  {
    id: '1',
    quote:
      'We finally had a website conversation that ended with a statement of work we could sign. Delivery matched what was on the page.',
    name: 'Elena Vásquez',
    role: 'VP Marketing',
    company: 'Northline Industrial',
  },
  {
    id: '2',
    quote:
      'Procurement cared about boundaries; our team cared about speed. SCAS Globals packaged both — flagship site plus campaign landings without two agencies.',
    name: 'James Okonkwo',
    role: 'Head of Digital',
    company: 'Kitebridge Financial',
  },
  {
    id: '3',
    quote:
      'Editors use the CMS daily without opening tickets for typos and hero swaps. That alone paid back the first quarter.',
    name: 'Mei Lin',
    role: 'Communications Director',
    company: 'Harborlight Bio',
  },
]

/** Shared sizing story for the catalog page (applies to Website A & B; exact $ on each SKU page). */
export const WEBSITE_SIZING_TIERS = [
  {
    id: 'launch',
    name: 'Launch',
    summary: 'Lean footprint — one primary locale, core templates, fast time-to-value.',
    bullets: ['Ideal for first flagship or first campaign lane', '90-day hypercare typical', 'From low five figures USD (varies by SKU)'],
  },
  {
    id: 'scale',
    name: 'Scale',
    summary: 'More templates, locales, and integrations as you add regions or always-on campaigns.',
    bullets: ['CRM / MAP hooks and event taxonomy', 'Extra template packs per product', 'Quarterly roadmap reviews'],
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    summary: 'Governance, security coordination, and SLAs for global or regulated programs.',
    bullets: ['Dedicated squad & response targets', 'Multi-brand or paired A + B rollouts', 'Custom commercial — talk to us'],
  },
]
