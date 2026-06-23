import MultiStageROPage from "@/components/pages/MultiStageROPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Multi Stage RO System | BlueCare Systems",
  description: "Multistage Reverse Osmosis systems for progressive salt removal and high water recovery. Industrial water treatment and wastewater recycling solutions.",
};

export default function MultiStageRORoute() {
  return (
    <>
      <Header />
      <MultiStageROPage />
      <Footer />
    </>
  );
}
