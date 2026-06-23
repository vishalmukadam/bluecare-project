import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import QuoteModal from "@/components/ui/quote-modal";

export const metadata = {
  title: "Sustainability | BlueCare Systems",
  description: "At BlueCare, sustainability is our foundation. Explore our Resource Recovery, Carbon Footprint Reduction, and circular water economy commitments.",
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE]">
      <Header />
      <main className="flex-1 pt-20">
        <SustainabilitySection />
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal />
    </div>
  );
}
