 
import './App.css';
import { EventsSection } from './components/events-section';
import { FeaturedSection } from './components/featured-section';
import { HeroSection } from './components/hero-section';
import { ResourcesSection } from './components/resources-section';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import { WelcomeBanner } from './components/welcome-banner';

function App() {
 
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

export default App;
