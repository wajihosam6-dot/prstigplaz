import { Suspense } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import RevealObserver from "@/components/ui/RevealObserver";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import AwardsBanner from "@/components/sections/AwardsBanner";
import CollectionsSection from "@/components/sections/CollectionsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import StatsSection from "@/components/sections/StatsSection";
import CraftsmanshipSection from "@/components/sections/CraftsmanshipSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TimelineSection from "@/components/sections/TimelineSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/sections/LocationSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <RevealObserver />
      <ScrollProgressBar />
      <Navigation />

      <main id="main-content">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <AwardsBanner />
        <CollectionsSection />
        <ProductsSection />
        <StatsSection />
        <CraftsmanshipSection />
        <ServicesSection />
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center" style={{ background: "var(--prestige-black)" }}>
              <div className="label-sm text-gold animate-pulse">Loading Experience...</div>
            </div>
          }
        >
          <ExperienceSection />
        </Suspense>
        <TimelineSection />
        <TestimonialsSection />
        <LocationSection />
        <NewsletterSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
