import SewageTreatmentPage from "@/components/pages/SewageTreatmentPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Sewage Treatment Plant | BlueCare Systems",
  description:
    "Sewage Treatment Plants designed to treat domestic and institutional wastewater. MBBR, SBR, MBR, and ASP technologies for reliable, efficient treatment.",
};

export default function SewageTreatmentRoute() {
  return (
    <>
      <Header />
      <SewageTreatmentPage />
      <Footer />
    </>
  );
}
