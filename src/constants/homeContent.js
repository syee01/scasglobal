import errorFreeData from '../assets/errorFreeData.png'
import automatedPass from '../assets/automatedPass.png'
import traceableRecords from '../assets/traceableRecords.png'

/**
 * Home page copy for the QCX website product.
 */
export const HOME_PRODUCT_TEASER = {
  sitePreview: {
    urlBar: 'www.scasglobals.com',
    caption: 'Illustrative structure — see the product page for the full template library and detail.',
  },
  pageExamples: [
    { name: 'Brand & story', purpose: 'Home, about, and trust — typical of a flagship corporate build.' },
    { name: 'Offers & proof', purpose: 'Solutions, cases, and insights your buyers actually read.' },
    { name: 'Campaign landings', purpose: 'Launches, events, and paid destinations with fast iteration.' },
    { name: 'Convert & comply', purpose: 'Forms, consent, and legal patterns wired for measurement.' },
  ],
  included: [
    'We built our platform to bridge physical measurement and digital certainty. By integrating directly with Bluetooth and USB measurement equipment, we provide a single source of truth from incoming (IQC) to outgoing quality control (OQC).',
    'We empower manufacturing teams with real-time, automated data so every shipment is backed by traceable inspection records—supporting your path toward zero-defect production and stronger ISO-aligned documentation.',
  ],
}

export const MISSION_VISION = {
  sectionEyebrow: 'Purpose',
  beliefTitle: 'Empowering Quality Through Connection and Insight',
  beliefParagraphs: [
    "As SCAS Global Digital, we believe quality is not just a standard — it's a living connection between people, processes, and technology. Our QC software bridges these elements by delivering real-time automated data, enabling manufacturing teams to make insight-driven decisions that enhance precision, efficiency, and trust.",
    'Through seamless integration and intelligent analytics, we transform data into actionable insight — empowering every connection to produce measurable quality.',
  ],
  mission:
    'To empower businesses with intelligent quality software solutions that connect insight, precision and performance.',
  vision:
    'To be the trusted global partner in digital quality transformation, inspiring sustainable growth through technology and human connection.',
}

export const ENQUIRY = {
  eyebrow: 'Contact',
  title: 'Send an Enquiry',
  lead: 'Share your details and we will respond by email.',
  labels: {
    name: 'Name',
    email: 'Email',
    contact: 'Contact number',
    country: 'Country code',
    phone: 'Phone number',
    company: 'Company',
    comment: 'Comment',
  },
  submit: 'Submit enquiry',
  success:
    'Your email app should open with a draft. If it does not, reach us at hello@scasglobals.com.',
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
      'Procurement cared about boundaries; our team cared about speed. SCAS Globals delivered a flagship site with a scope we could actually sign.',
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

/** Shared sizing story for the catalog page (exact $ on the product page). */
export const WEBSITE_SIZING_TIERS = [
  {
    id: 'launch',
    name: 'Error-Free Data',
    summary: 'Lean footprint — one primary locale, core templates, fast time-to-value.',
    bullets: [],
    image: errorFreeData,
    imageAlt: 'Error-free quality data dashboard',
  },
  {
    id: 'scale',
    name: 'Automated Pass/Fail Judgement',
    summary: 'More templates, locales, and integrations as you add regions or always-on campaigns.',
    bullets: [],
    image: automatedPass,
    imageAlt: 'Automated pass fail judgement screen',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Traceable Records',
    summary: 'Governance, security coordination, and SLAs for global or regulated programs.',
    bullets: [],
    image: traceableRecords,
    imageAlt: 'Enterprise quality reporting and analytics',
  },
]
