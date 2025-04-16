import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WelcomeBanner } from "@/components/welcome-banner"
import { FeaturedSection } from "@/components/featured-section"
import { EventsSection } from "@/components/events-section"
import { ResourcesSection } from "@/components/resources-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WelcomeBanner />
        <FeaturedSection />
        <EventsSection />
        <ResourcesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
