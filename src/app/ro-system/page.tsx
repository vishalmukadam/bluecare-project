import ROSystemPage from "@/components/pages/ROSystemPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "RO System | BlueCare Systems",
  description:
    "Reverse osmosis plants with advanced membrane technology for high-quality water purification. High TDS rejection, automated control, scalable configurations for industrial and commercial applications.",
};

export default function ROSystemRoute() {
  return (
    <>
      <Header />
      <ROSystemPage />
      <Footer />
    </>
  );
}
