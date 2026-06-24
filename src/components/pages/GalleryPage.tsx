"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  ChevronRight,
  Phone,
  Mail,
  Filter,
  Recycle,
  Droplets,
  Zap,
  Factory,
  Wrench,
  X,
  ChevronLeft,
  Maximize2,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─────────────────────── Animation Variants ─────────────────────── */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const cardHover = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ─────────────────────── Gallery Data ─────────────────────── */



interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "RO Plant Installation", category: "Water Treatment", description: "State-of-the-art reverse osmosis system installation at a pharmaceutical facility." },
  { id: 2, title: "Water Recycling System", category: "Recycling", description: "Advanced membrane-based water recycling unit for a food processing plant." },
  { id: 3, title: "ZLD Crystallizer Unit", category: "ZLD", description: "Zero Liquid Discharge crystallizer producing reusable salts from industrial effluent." },
  { id: 4, title: "Effluent Treatment Plant", category: "Water Treatment", description: "Full-scale ETP with biological and chemical treatment stages for a chemical industry." },
  { id: 5, title: "Manufacturing Workshop", category: "Services", description: "Our 2500 SQ.M manufacturing facility with skid-mounted system assembly line." },
  { id: 6, title: "Field Service Team", category: "Services", description: "Expert field service team performing commissioning and operator training on-site." },
  { id: 7, title: "UF System Installation", category: "Water Treatment", description: "Ultrafiltration membrane system installation for municipal water supply project." },
  { id: 8, title: "Effluent Recycling Plant", category: "Recycling", description: "Zero-discharge effluent recycling system for a textile processing unit." },
  { id: 9, title: "Industrial RO Skid", category: "Water Treatment", description: "Custom-engineered reverse osmosis skid for high-purity process water." },
  { id: 10, title: "Membrane Bioreactor", category: "Recycling", description: "MBR-based sewage treatment plant with water reuse capabilities." },
  { id: 11, title: "Thermal Evaporator", category: "ZLD", description: "Mechanical vapor recompression evaporator for concentrated effluent treatment." },
  { id: 12, title: "Installation & Commissioning", category: "Services", description: "On-site installation and commissioning of a multi-stage treatment system." },
  { id: 13, title: "Plant Upgrade Project", category: "Services", description: "Capacity upgrade and modernization of an existing water treatment facility." },
];

/* ─────────────────────── Component ─────────────────────── */

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  // Fade scale variants for slider
  const fadeScaleVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE]">
      {/* ─── Minimal Hero Banner ─── */}
      <section className="relative h-[250px] overflow-hidden mt-20 bg-white">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="hidden sm:flex items-center gap-2 text-sm text-[#3C4D57]/60 mb-4"
          >
            <Link href="/" className="hover:text-[#20B0E0] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#20B0E0] font-medium">Gallery</span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl font-bold text-[#142A33] leading-tight"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
              Gallery
            </span>
          </motion.h1>
        </div>

        {/* Bottom curve separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              fill="#F8FAFE"
            />
          </svg>
        </div>
      </section>

      {/* ─── Gallery Slider Section ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20B0E0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8CC63F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/5 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={fadeScaleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full cursor-pointer"
                onClick={() => openLightbox(currentIndex)}
              >
                <picture className="w-full h-full">
                  <source
                    srcSet={`/gallery/avif/${galleryItems[currentIndex].id}.avif`}
                    type="image/avif"
                  />
                  <img
                    src={`/gallery/webp/${galleryItems[currentIndex].id}.webp`}
                    alt={galleryItems[currentIndex].title}
                    className="w-full h-full object-cover select-none"
                  />
                </picture>
                {/* Subtle inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Chevrons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]"
                      : "w-2 bg-white/50 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="green-cta-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#20B0E0] via-[#0E84B8] to-[#8CC63F]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#20B0E0]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8CC63F]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#20B0E0] to-[#0E84B8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to See More?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Contact us to schedule a visit to our manufacturing facility or
                discuss how we can help with your water treatment requirements.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact">
                  <Button className="bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                    Request a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919987088708">
                  <Button
                    variant="outline"
                    className="border-white/25 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold text-lg transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>bluecare@bluecare.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 99870 88708</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Image */}
              <picture className="w-full h-full">
                <source
                  srcSet={`/gallery/avif/${galleryItems[lightboxIndex].id}.avif`}
                  type="image/avif"
                />
                <img
                  src={`/gallery/webp/${galleryItems[lightboxIndex].id}.webp`}
                  alt={`Lightbox image ${galleryItems[lightboxIndex].id}`}
                  className="w-full h-full object-contain"
                />
              </picture>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors border border-white/10"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all border border-white/10 text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all border border-white/10 text-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Pagination counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold">
                {lightboxIndex + 1} / {galleryItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Back to Home ─── */}
      <div className="py-8 bg-white border-t border-[#E2E8F0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0E84B8] hover:text-[#0B6E9A] font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
