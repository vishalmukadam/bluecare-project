import HybridIDTROPage from "@/components/pages/HybridIDTROPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Hybrid IDT RO System | BlueCare Systems",
  description: "Hybrid IDT RO systems combining spiral-wound and disc-tube membrane technologies for maximum water recovery in ZLD and industrial wastewater recycling.",
};

export default function HybridIDTRORoute() {
  return (
    <>
      <Header />
      <HybridIDTROPage />
      <Footer />
    </>
  );
}
