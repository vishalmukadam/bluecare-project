import SludgeDewateringPage from "@/components/pages/SludgeDewateringPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Sludge Dewatering System | BlueCare Systems",
  description: "Sludge dewatering systems including filter press, decanter, screw press, and centrifuge. Reduce sludge volume and disposal costs efficiently.",
};

export default function SludgeDewateringRoute() {
  return (
    <>
      <Header />
      <SludgeDewateringPage />
      <Footer />
    </>
  );
}
