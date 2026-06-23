import MeeSystemPage from "@/components/pages/MeeSystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "MEE System - Multi Effect Evaporator | BlueCare Systems",
  description: "Multi Effect Evaporator systems by BlueCare. Efficient thermal evaporation technology for wastewater concentration in ZLD applications with optimized steam consumption.",
};

export default function MeeSystemRoute() {
  return (
    <>
      <Header />
      <MeeSystemPage />
      <Footer />
    </>
  );
}
