import FieldServicePage from "@/components/pages/FieldServicePage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Field Service & Troubleshooting | BlueCare Systems",
  description:
    "BlueCare field services department provides plant start-up, commissioning, warranty service, troubleshooting, repairs, spare parts, and membrane cleaning. Experienced engineers and technicians dispatched worldwide.",
};

export default function FieldServiceRoute() {
  return (
    <>
      <Header />
      <FieldServicePage />
      <Footer />
    </>
  );
}
