import SecondStageIdtRoPage from "@/components/pages/SecondStageIdtRoPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Second Stage IDT RO System | BlueCare Systems",
  description:
    "Second Stage IDT RO System — high-pressure membrane treatment for RO reject concentration, maximizing water recovery in ZLD and wastewater recycling applications.",
};

export default function SecondStageIdtRoRoute() {
  return (
    <>
      <Header />
      <SecondStageIdtRoPage />
      <Footer />
    </>
  );
}
