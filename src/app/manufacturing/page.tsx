import ManufacturingPage from "@/components/pages/ManufacturingPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Manufacturing | BlueCare Systems",
  description:
    "20,000 sq.ft manufacturing facility dedicated to efficient fabrication and assembly of water treatment systems, subsystems and components. Structural frame fabrication, pipe welding, panel assembly, mechanical assembly, and system testing.",
};

export default function ManufacturingRoute() {
  return (
    <>
      <Header />
      <ManufacturingPage />
      <Footer />
    </>
  );
}
