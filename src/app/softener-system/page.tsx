import SoftenerSystemPage from "@/components/pages/SoftenerSystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Softener System | BlueCare Systems",
  description:
    "Water softener systems using ion-exchange technology to reduce hardness. Automatic resin regeneration, high-capacity resin beds, and fully automated control valves for industrial applications.",
};

export default function SoftenerSystemRoute() {
  return (
    <>
      <Header />
      <SoftenerSystemPage />
      <Footer />
    </>
  );
}
