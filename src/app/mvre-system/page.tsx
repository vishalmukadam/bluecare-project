import MvreSystemPage from "@/components/pages/MvreSystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "MVRE System - Mechanical Vapor Recompression Evaporator | BlueCare Systems",
  description:
    "Mechanical Vapor Recompression Evaporator systems by BlueCare. Energy-efficient evaporation technology for ZLD applications with minimal steam consumption and high water recovery.",
};

export default function MvreSystemRoute() {
  return (
    <>
      <Header />
      <MvreSystemPage />
      <Footer />
    </>
  );
}
