import RetrofitsPage from "@/components/pages/RetrofitsPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Retrofits & Plant Upgradation | BlueCare Systems",
  description:
    "BlueCare helps identify areas in existing water treatment systems that can be modified and improved for reduced energy consumption, increased output, and compliance upgradation. Capacity enhancement, technology upgradation, and system integration.",
};

export default function RetrofitsRoute() {
  return (
    <>
      <Header />
      <RetrofitsPage />
      <Footer />
    </>
  );
}
