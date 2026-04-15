import qcxImage from '../assets/QCX.png'

/**
 * Product catalog: sellable website product (QCX).
 */

export const PRODUCT_SLUGS = {
  WEBSITE_A: 'website-a',
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
    tagline: 'Precision Quality Control, Automated and Connected',
    cardSummary:
      'QCX is the packaged corporate flagship-marketing-led story, proof and conversion paths your team can operate day-today. It is designed for teams that need direct data acquisition, precise engineering control and full digital traceability without building from scratch',
    heroImage: qcxImage,
  },
]

/**
 * Rich detail for QCX — what the “website” actually is for buyers.
 */
export const WEBSITE_A_DETAIL = {
  slug: PRODUCT_SLUGS.WEBSITE_A,
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

export function getCatalogItemBySlug(slug) {
  return PRODUCT_CATALOG.find((p) => p.slug === slug) ?? null
}

export function getProductDetail(slug) {
  if (slug !== PRODUCT_SLUGS.WEBSITE_A) return null
  const catalog = getCatalogItemBySlug(slug)
  return catalog ? { catalog, detail: WEBSITE_A_DETAIL } : null
}
