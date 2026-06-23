import EDISystemPage from "@/components/pages/EDISystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "EDI System | BlueCare Systems",
  description:
    "EDI electrodeionization systems for ultra-pure water in pharmaceuticals, power generation, and semiconductor manufacturing. Continuous deionization without chemical regeneration.",
};

export default function EDISystemRoute() {
  return (
    <>
      <Header />
      <EDISystemPage />
      <Footer />
    </>
  );
}
