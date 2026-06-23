import ApplicationsPage from "@/components/pages/ApplicationsPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Applications | BlueCare Systems",
  description:
    "BlueCare Systems delivers tailored water and wastewater treatment solutions across 11+ industries including Pharma, Textile, Automobile, Power, Oil & Gas, Distillery, and more.",
};

export default function ApplicationsRoute() {
  return (
    <>
      <Header />
      <ApplicationsPage />
      <Footer />
    </>
  );
}
