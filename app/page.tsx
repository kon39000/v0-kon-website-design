import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServiceSection } from "@/components/service-section"
import { WorksSection } from "@/components/works-section"
import { ContactCTASection } from "@/components/contact-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WorksSection />
      <ContactCTASection />
      <Footer />
    </main>
  )
}
