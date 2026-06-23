import ZldSystemPage from "@/components/pages/ZldSystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "ZLD System - Zero Liquid Discharge | BlueCare Systems",
  description:
    "Zero Liquid Discharge systems by BlueCare. Comprehensive ZLD solutions including primary treatment, RO, evaporation, and ATFD for maximum water recovery and environmental compliance.",
};

export default function ZldSystemRoute() {
  return (
    <>
      <Header />
      <ZldSystemPage />
      <Footer />
    </>
  );
}
