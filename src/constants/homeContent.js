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
    'We built our platform to bridge the gap between physical measurement and digital certainly. By integrating directly with Blue tooth and USB measurement equipment, we provide a single source of truth from incoming (IQC) to Outgoing Quality control (OQC)',
    'Our mission is to empower manufacturing teams with real time, automated data that ensure every part shipped is a part perfected. With us, you are not just buying software, you are securing your reputation and streamlining your path to ZERO- DEFECT production',
  ],
}

/** Home: typical agency / internal rebuild vs productized delivery. */
export const SYSTEM_COMPARISON = {
  existingLabel: 'The old way (paper-based)',
  oursLabel: 'QCX Software Advantage',
  rows: [
    {
      id: 'dataTransfer',
      dimension: 'Data Transfer',
      existing: 'Manual entry data',
      ours: 'Bluetooth /USB direct data transfer',
    },
    {
      id: 'inspectionResult',
      dimension: 'Inspection Result',
      existing: 'Manual Judge pass / fail',
      ours: 'Automated Certainly. System judge result against pre-set tolerances, removing human bias',
    },
    {
      id: 'ecn',
      dimension: 'ECN & Revision Control',
      existing: 'Avoid outdated paper drawings or SOP mistake',
      ours: 'Total compliances. Centralized digital control',
    },
    {
      id: 'storage',
      dimension: 'Storage of records',
      existing: 'Manual filing, handling, management effort, traceability, version control, retrieval control. Handwritten readable and analysis typing interpretation',
      ours: 'Real time, traceability, cost and paperless saving. Analysis speed and accuracy',
    },
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
