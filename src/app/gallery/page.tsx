import GalleryPage from "@/components/pages/GalleryPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Gallery | BlueCare Systems",
  description:
    "Explore our portfolio of water treatment installations, manufacturing facilities, and field operations across India.",
};

export default function GalleryRoute() {
  return (
    <>
      <Header />
      <GalleryPage />
      <Footer />
    </>
  );
}
