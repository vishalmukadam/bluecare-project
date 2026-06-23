import DesalinationPage from "@/components/pages/DesalinationPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Desalination System | BlueCare Systems",
  description: "RO-based desalination systems for seawater, brackish water, and saline wastewater treatment. High salt rejection with energy recovery for sustainable water supply.",
};

export default function DesalinationRoute() {
  return (
    <>
      <Header />
      <DesalinationPage />
      <Footer />
    </>
  );
}
