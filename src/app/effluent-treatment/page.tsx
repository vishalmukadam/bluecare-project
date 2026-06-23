import EffluentTreatmentPage from "@/components/pages/EffluentTreatmentPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Effluent Treatment Plant | BlueCare Systems",
  description:
    "Effluent Treatment Plants engineered to treat industrial wastewater. Chemical, biological, and tertiary treatment for pharmaceuticals, textiles, and more.",
};

export default function EffluentTreatmentRoute() {
  return (
    <>
      <Header />
      <EffluentTreatmentPage />
      <Footer />
    </>
  );
}
