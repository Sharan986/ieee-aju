import HeroSection from "./components/HeroSection";
import OrganizersSection from "./components/OrganizersSection";
import WelcomeMessage from "./components/WelcomeMessage";
import AboutSnippet from "./components/AboutSnippet";
import KeyDatesCard from "./components/KeyDatesCard";
import SponsorsStrip from "./components/SponsorsStrip";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OrganizersSection />
      <WelcomeMessage />

      {/* About + Key Dates side by side */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <AboutSnippet />
            </div>
            <div>
              <KeyDatesCard />
            </div>
          </div>
        </div>
      </section>

      <SponsorsStrip />
      <ContactSection />
    </>
  );
}