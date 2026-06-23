import PaddleDryerPage from "@/components/pages/PaddleDryerPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Paddle Dryer System | BlueCare Systems",
  description: "High-performance Paddle Dryer Systems for efficient sludge drying. Indirect heat transfer technology with low operational costs and compact design.",
};

export default function PaddleDryerRoute() {
  return (
    <>
      <Header />
      <PaddleDryerPage />
      <Footer />
    </>
  );
}
