import UFSystemPage from "@/components/pages/UFSystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "UF System | BlueCare Systems",
  description: "Submerged Ultrafiltration (UF) Systems for tertiary wastewater treatment and water recycling. Low-pressure membrane filtration with high solids tolerance.",
};

export default function UFSystemRoute() {
  return (
    <>
      <Header />
      <UFSystemPage />
      <Footer />
    </>
  );
}
