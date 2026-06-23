"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import QuoteModal from "@/components/ui/quote-modal";
import ScrollProgress from "@/components/ui/scroll-progress";
import StatsCounterStrip from "@/components/sections/StatsCounterStrip";
import GreenPromiseSection from "@/components/sections/GreenPromiseSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE]">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Stats Counter Strip: impact section with stat cards */}
        <StatsCounterStrip />

        <AboutSection />

        <ClientsSection />

        <SolutionsSection />

        <ServicesSection />

        <CTASection />

        <ContactSection />

        {/* Relocated Green Promise card just above the footer */}
        <GreenPromiseSection />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />

      {/* Floating Quote Request modal */}
      <QuoteModal />
    </div>
  );
}
