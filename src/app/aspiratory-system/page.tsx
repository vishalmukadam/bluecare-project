import AspiratorySystemPage from "@/components/pages/AspiratorySystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Bluecare Aspiratory System | BlueCare Systems",
  description: "Aspirator Aeration Systems for efficient oxygen dispersion in wastewater treatment. Venturi-based technology for STP, ETP, and biological treatment units.",
};

export default function AspiratorySystemRoute() {
  return (
    <>
      <Header />
      <AspiratorySystemPage />
      <Footer />
    </>
  );
}
