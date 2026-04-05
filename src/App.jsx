import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PRODUCT_SLUGS } from './constants/products'
import { SiteLayout } from './components/layout/SiteLayout'
import LandingPage from './pages/LandingPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductsCatalogPage from './pages/ProductsCatalogPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="products" element={<ProductsCatalogPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          <Route
            path="product"
            element={<Navigate to={`/products/${PRODUCT_SLUGS.WEBSITE_A}`} replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
