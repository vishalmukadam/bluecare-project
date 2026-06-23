import CeramicMBRPage from "@/components/pages/CeramicMBRPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Ceramic MBR System | BlueCare Systems",
  description: "Advanced Ceramic Membrane Bioreactor systems combining biological degradation with ceramic membrane filtration for superior wastewater treatment.",
};

export default function CeramicMBRRoute() {
  return (
    <>
      <Header />
      <CeramicMBRPage />
      <Footer />
    </>
  );
}
