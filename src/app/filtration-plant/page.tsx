import FiltrationPlantPage from "@/components/pages/FiltrationPlantPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Filtration Plant | BlueCare Systems",
  description:
    "Industrial filtration systems removing turbidity, suspended solids, and organic contaminants. Pressure Sand Filters, Multimedia Filters, Activated Carbon Filters, and specialized iron removal systems.",
};

export default function FiltrationPlantRoute() {
  return (
    <>
      <Header />
      <FiltrationPlantPage />
      <Footer />
    </>
  );
}
