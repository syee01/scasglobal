import { ComparisonSection } from '../components/landing/ComparisonSection'
import { MainSection } from '../components/landing/MainSection'
import { CompantIntroSection } from '../components/landing/CompantIntroSection'
import { TestimonialsSection } from '../components/landing/TestimonialsSection'

export default function LandingPage() {
  return (
    <>
      <MainSection />
      <CompantIntroSection />
      <ComparisonSection />
      <TestimonialsSection />
    </>
  )
}
