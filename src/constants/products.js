/**
 * Product catalog: each entry is a sellable website product (QCX & B are both live SKUs).
 */

export const PRODUCT_SLUGS = {
  WEBSITE_A: 'website-a',
  WEBSITE_B: 'website-b',
}

/** @typedef {'available' | 'coming-soon'} ProductStatus */

/**
 * @type {Array<{
 *   id: string
 *   slug: string
 *   name: string
 *   shortLabel: string
 *   status: ProductStatus
 *   tagline: string
 *   cardSummary: string
 *   heroImage: string
 * }>}
 */
export const PRODUCT_CATALOG = [
  {
    id: 'website-a',
    slug: PRODUCT_SLUGS.WEBSITE_A,
    name: 'QCX',
    shortLabel: 'Corporate flagship site',
    status: 'available',
    tagline: 'A complete company website — pages, content model, and launch in one product.',
    cardSummary:
      'Marketing-led corporate site with clear story, proof points, and conversion paths. Built so your team can publish without developers for day-to-day updates.',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'website-b',
    slug: PRODUCT_SLUGS.WEBSITE_B,
    name: 'Website B',
    shortLabel: 'Campaign & landing system',
    status: 'available',
    tagline:
      'A packaged site for launches, demand gen, and always-on campaigns — repeatable landing patterns with governance.',
    cardSummary:
      'Purpose-built for growth and product marketing: fast landings, thank-you flows, resources, and events — same product discipline as QCX, different page library.',
    heroImage:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
  },
]

/**
 * Rich detail for QCX — what the “website” actually is for buyers.
 */
export const WEBSITE_A_DETAIL = {
  slug: PRODUCT_SLUGS.WEBSITE_A,
  /** Plain-language: what you are buying */
  whatItIs: {
    title: 'What QCX is',
    lead:
      'QCX is not a vague “digital project.” It is a finished class of website: a public marketing and trust site that explains who you are, what you sell, and how to engage — with a structure we have already productized.',
    bullets: [
      'Responsive public site (desktop, tablet, phone) under your brand',
      'Editorial workflow: drafts, review, and publish without touching code for routine updates',
      'Hosting, SSL, backups, and release process included in the product boundary',
    ],
  },
  audience: {
    title: 'Who it fits',
    items: [
      {
        title: 'B2B & corporate marketing',
        text: 'Positioning, segments, case-led proof, and gated or open lead capture.',
      },
      {
        title: 'Regional HQ & subsidiaries',
        text: 'One coherent design system; optional locale or microsite patterns as you scale tiers.',
      },
      {
        title: 'Teams tired of endless change orders',
        text: 'Scope is defined around page types and behaviors — not open-ended “whatever you need.”',
      },
    ],
  },
  /** Shown inside a browser chrome mock for context */
  sitePreview: {
    urlBar: 'www.yourcompany.com',
    caption: 'Example structure — final IA is tuned in discovery.',
  },
  pageStructure: {
    title: 'Pages & sections you get',
    description:
      'These are the building blocks of QCX. Copy and media are yours; we implement templates, components, and CMS wiring.',
    pages: [
      { name: 'Home', purpose: 'Positioning, key CTAs, highlights, and trust signals.' },
      { name: 'Solutions / Services', purpose: 'Grouped offers with scannable detail and deep links.' },
      { name: 'About & leadership', purpose: 'Story, milestones, and credibility (team, offices, values).' },
      { name: 'Insights / News', purpose: 'Articles or releases with listing, tags, and article layout.' },
      { name: 'Careers (optional)', purpose: 'Employer story + link-out or embedded list, tier-dependent.' },
      { name: 'Contact & legal', purpose: 'Forms or mailto paths, privacy, terms, accessibility statement.' },
    ],
  },
  visitorJourneys: {
    title: 'What visitors experience',
    journeys: [
      {
        title: 'Discover → trust',
        text: 'Fast first paint, clear hierarchy, and consistent components so scanning feels intentional.',
      },
      {
        title: 'Explore → convert',
        text: 'Repeated CTAs, short forms, and analytics events on the journeys you care about.',
      },
      {
        title: 'Return → recall',
        text: 'Stable URLs, SEO metadata, and shareable pages for campaigns and outbound.',
      },
    ],
  },
  editorExperience: {
    title: 'What your team operates',
    items: [
      'Structured content types (e.g. hero, cards, FAQs) instead of fragile free-form HTML',
      'Preview on staging before publish; rollback-friendly releases when paired with Enterprise tier',
      'Handover: short Loom-style walkthrough + written runbook for editors',
    ],
  },
  techQuality: {
    title: 'Engineering & quality bar',
    items: [
      'Modern JavaScript front-end (e.g. React-based) with component library aligned to design tokens',
      'Performance budget discussed up front; image and font strategy documented',
      'Accessibility-minded patterns; formal audit scope can be added for regulated industries',
    ],
  },
  included: [
    'Discovery workshop & information architecture for QCX',
    'UX/UI design system applied across all included templates',
    'Responsive build and CMS integration (or headless model)',
    'Analytics hooks, SEO foundations, and consent-friendly defaults',
    'Staging, QA checklist, go-live runbook, and editor handover',
  ],
  tiers: [
    {
      id: 'launch',
      name: 'Launch',
      blurb: 'Single brand, one primary locale, lean set of templates.',
      priceHint: 'From USD 12k',
      features: [
        'Up to 8 templates from the QCX library',
        '90-day launch support',
        'Monthly health snapshot',
      ],
    },
    {
      id: 'scale',
      name: 'Scale',
      blurb: 'Multiple locales, more templates, and marketing integrations.',
      priceHint: 'From USD 28k',
      highlighted: true,
      features: [
        'Everything in Launch',
        'Extra templates & localized variants',
        'CRM / MAP event hooks',
        'Quarterly roadmap review',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      blurb: 'Governance, compliance coordination, and operational SLAs.',
      priceHint: 'Custom',
      features: [
        'Dedicated squad & response targets',
        'Security / pen-test coordination',
        'Multi-brand or multi-site rollout patterns',
        'Optional 24/7 coverage',
      ],
    },
  ],
  slaPoints: [
    { title: 'Uptime target', detail: '99.9% on SCAS-managed hosting tiers for QCX' },
    { title: 'Support', detail: 'Business hours included; extended coverage on Enterprise' },
    { title: 'Releases', detail: 'Versioned deploys with documented rollback' },
  ],
}

/**
 * Rich detail for Website B — campaign / landing product (live SKU).
 */
export const WEBSITE_B_DETAIL = {
  slug: PRODUCT_SLUGS.WEBSITE_B,
  whatItIs: {
    title: 'What Website B is',
    lead:
      'Website B is a second productized website: focused on campaign velocity and conversion paths, not a full corporate IA. You get a library of landing and funnel templates, shared design tokens with your brand, and the same hosting and release rigor as QCX.',
    bullets: [
      'Campaign-first pages: launches, paid media destinations, webinars, and partner promos',
      'Reusable blocks and templates so marketing can spin up new landings without bespoke quotes',
      'Hosting, SSL, analytics events, and consent defaults included in the product boundary',
    ],
  },
  audience: {
    title: 'Who it fits',
    items: [
      {
        title: 'Demand gen & performance marketing',
        text: 'Many landings, clear UTMs, thank-you and nurture handoffs, fast iteration.',
      },
      {
        title: 'Product marketing & launches',
        text: 'Release moments, comparison pages, demo request flows, and changelog-style updates.',
      },
      {
        title: 'Teams that already run QCX',
        text: 'Pair flagship story (A) with high-velocity campaign surfaces (B) under one vendor.',
      },
    ],
  },
  sitePreview: {
    urlBar: 'go.yourcompany.com',
    caption: 'Typical use: dedicated campaign host or path — IA finalized in discovery.',
  },
  pageStructure: {
    title: 'Pages & templates you get',
    description:
      'Building blocks for Website B. Copy, creative, and audience segments are yours; we wire templates, forms, and measurement.',
    pages: [
      { name: 'Primary landing', purpose: 'Hero, proof, single CTA, optional social proof strip.' },
      { name: 'Thank you / confirmation', purpose: 'Next-step content, calendar embeds, or asset delivery.' },
      { name: 'Resource / content offer', purpose: 'Gated or open PDF/video pages with form variants.' },
      { name: 'Event & webinar', purpose: 'Agenda, speakers, registration, and replay placeholder.' },
      { name: 'Compare / challenger', purpose: 'Structured comparison tables and objection handling.' },
      { name: 'Legal & campaign footer', purpose: 'Privacy, terms, and disclosure patterns for ads compliance.' },
    ],
  },
  visitorJourneys: {
    title: 'What visitors experience',
    journeys: [
      {
        title: 'Click → land',
        text: 'Sub-second perceived load, message match to ad/creative, mobile-first layouts.',
      },
      {
        title: 'Engage → convert',
        text: 'Short forms, progressive profiling options, and CRM-ready field mapping.',
      },
      {
        title: 'Measure → learn',
        text: 'Event taxonomy agreed up front; optional experimentation hooks on higher tiers.',
      },
    ],
  },
  editorExperience: {
    title: 'What your team operates',
    items: [
      'Clone-and-edit landing patterns instead of one-off HTML dumps',
      'Optional scheduling and sunsetting reminders for time-bound campaigns',
      'Editor handover with naming conventions for UTMs and content slots',
    ],
  },
  techQuality: {
    title: 'Engineering & quality bar',
    items: [
      'Same modern JS stack and component discipline as QCX for brand consistency',
      'Core Web Vitals discussed per template; image CDN and lazy loading defaults',
      'Accessibility patterns for forms and key flows; extended audit available',
    ],
  },
  included: [
    'Discovery workshop focused on campaigns, audiences, and measurement for Website B',
    'UX/UI patterns aligned to your brand (can inherit tokens from QCX if both purchased)',
    'Responsive build, CMS or headless setup, and form integration',
    'Analytics event plan, consent tooling, and QA before each major launch wave',
    'Staging, rollout checklist, and editor training for repeatable landings',
  ],
  tiers: [
    {
      id: 'launch',
      name: 'Launch',
      blurb: 'One primary campaign lane, core template set, single locale.',
      priceHint: 'From USD 9k',
      features: [
        'Up to 6 templates from the Website B library',
        'Two launch waves supported in first 90 days',
        'Monthly conversion snapshot',
      ],
    },
    {
      id: 'scale',
      name: 'Scale',
      blurb: 'Multiple concurrent campaigns, locales, and CRM depth.',
      priceHint: 'From USD 22k',
      highlighted: true,
      features: [
        'Everything in Launch',
        'Expanded template set & locale variants',
        'MAP/CRM custom object hooks & server-side events',
        'Quarterly experimentation review',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      blurb: 'Global programs, governance, and SLAs across A + B.',
      priceHint: 'Custom',
      features: [
        'Dedicated squad & response targets',
        'Security review coordination',
        'Joint roadmap with QCX where both are deployed',
        'Optional 24/7 coverage',
      ],
    },
  ],
  slaPoints: [
    { title: 'Uptime target', detail: '99.9% on SCAS-managed hosting tiers for Website B' },
    { title: 'Support', detail: 'Business hours included; extended coverage on Enterprise' },
    { title: 'Releases', detail: 'Versioned deploys with rollback; hotfix path for campaign emergencies' },
  ],
}

export function getCatalogItemBySlug(slug) {
  return PRODUCT_CATALOG.find((p) => p.slug === slug) ?? null
}

export function getProductDetail(slug) {
  if (slug === PRODUCT_SLUGS.WEBSITE_A) {
    const catalog = getCatalogItemBySlug(slug)
    return catalog ? { catalog, detail: WEBSITE_A_DETAIL } : null
  }
  if (slug === PRODUCT_SLUGS.WEBSITE_B) {
    const catalog = getCatalogItemBySlug(slug)
    return catalog ? { catalog, detail: WEBSITE_B_DETAIL } : null
  }
  return null
}
