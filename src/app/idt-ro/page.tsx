import IDTROPage from "@/components/pages/IDTROPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Bluecare IDT Disc Type RO System | BlueCare Systems",
  description: "IDT Disc Type RO systems for high-TDS wastewater treatment and maximum water recovery. Open-channel disc-tube membrane technology for ZLD applications.",
};

export default function IDTRORoute() {
  return (
    <>
      <Header />
      <IDTROPage />
      <Footer />
    </>
  );
}
