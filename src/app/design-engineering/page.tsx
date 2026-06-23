import DesignEngineeringPage from "@/components/pages/DesignEngineeringPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Design & Engineering | BlueCare Systems",
  description:
    "Professional engineering teams delivering innovative, cost-effective solutions for water and wastewater treatment projects. Chemical, Mechanical, Process, I&C, and Electrical engineering expertise.",
};

export default function DesignEngineeringRoute() {
  return (
    <>
      <Header />
      <DesignEngineeringPage />
      <Footer />
    </>
  );
}
