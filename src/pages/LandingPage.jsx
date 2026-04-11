import { MainSection } from '../components/landing/MainSection'
import { CompantIntroSection } from '../components/landing/CompantIntroSection'
import { MissionVisionSection } from '../components/landing/MissionVisionSection'
import { TestimonialsSection } from '../components/landing/TestimonialsSection'
import { EnquirySection } from '../components/landing/EnquirySection'

export default function LandingPage() {
  return (
    <>
      <MainSection />
      <CompantIntroSection />
      <MissionVisionSection />
      <TestimonialsSection />
      <EnquirySection />
    </>
  )
}
