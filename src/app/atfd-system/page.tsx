import AtfdSystemPage from "@/components/pages/AtfdSystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "ATFD System - Agitated Thin Film Dryer | BlueCare Systems",
  description: "Agitated Thin Film Dryer systems by BlueCare. Final-stage ZLD drying technology converting concentrated effluent into dry solids for complete zero liquid discharge compliance.",
};

export default function AtfdSystemRoute() {
  return (
    <>
      <Header />
      <AtfdSystemPage />
      <Footer />
    </>
  );
}
