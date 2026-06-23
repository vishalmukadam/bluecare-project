import AboutUsPage from "@/components/pages/AboutUsPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us | BlueCare Systems",
  description:
    "Bluecare Systems Pvt. Ltd. — a young, dynamic team providing comprehensive environmental solutions. Learn about our mission, vision, quality policy, and commitment to sustainable water treatment.",
};

export default function AboutUsRoute() {
  return (
    <>
      <Header />
      <AboutUsPage />
      <Footer />
    </>
  );
}
