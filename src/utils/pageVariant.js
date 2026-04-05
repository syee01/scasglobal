/**
 * Maps URL to layout theme for header + main differentiation.
 * @param {string} pathname
 * @returns {'home' | 'product' | 'catalog'}
 */
export function getPageVariant(pathname) {
  if (pathname === '/') return 'home'
  if (pathname === '/products') return 'catalog'
  if (pathname.startsWith('/products/')) return 'product'
  return 'catalog'
}
