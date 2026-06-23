"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Filter,
  Recycle,
  Droplets,
  Zap,
  Factory,
  Wrench,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const categories = ["All", "Water Treatment", "Recycling", "ZLD", "Services"];

const galleryItems = [
  {
    title: "RO Plant Installation",
    category: "Water Treatment",
    description: "State-of-the-art reverse osmosis system installation at a pharmaceutical facility.",
    icon: Filter,
    gradient: "from-[#20B0E0] to-[#0E84B8]",
    image: "/gallery-ro-plant.png",
  },
  {
    title: "Water Recycling System",
    category: "Recycling",
    description: "Advanced membrane-based water recycling unit for a food processing plant.",
    icon: Recycle,
    gradient: "from-[#8CC63F] to-[#6BA030]",
    image: "/gallery-recycling.png",
  },
  {
    title: "ZLD Crystallizer Unit",
    category: "ZLD",
    description: "Zero Liquid Discharge crystallizer producing reusable salts from industrial effluent.",
    icon: Zap,
    gradient: "from-[#E0B040] to-[#C89830]",
    image: "/gallery-zld.png",
  },
  {
    title: "Effluent Treatment Plant",
    category: "Water Treatment",
    description: "Full-scale ETP with biological and chemical treatment stages for a chemical industry.",
    icon: Droplets,
    gradient: "from-[#0E84B8] to-[#0A6A96]",
    image: "/gallery-etp.png",
  },
  {
    title: "Manufacturing Workshop",
    category: "Services",
    description: "Our 2500 SQ.M manufacturing facility with skid-mounted system assembly line.",
    icon: Factory,
    gradient: "from-[#8CC63F] to-[#5A9024]",
    image: "/gallery-workshop.png",
  },
  {
    title: "Field Service Team",
    category: "Services",
    description: "Expert field service team performing commissioning and operator training on-site.",
    icon: Wrench,
    gradient: "from-[#20B0E0] to-[#8CC63F]",
    image: "/gallery-field-service.png",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8FAFE]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="w-2 h-2 bg-[#20B0E0] rounded-full" />
            <span className="text-[#0E84B8] text-sm font-semibold">Gallery</span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            Our <span className="text-[#20B0E0]">Work</span> in Action
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Explore our portfolio of water treatment installations, manufacturing
            facilities, and field operations across India.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              custom={i + 2.5}
              variants={fadeUpVariants}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-[#20B0E0] text-white shadow-md"
                  : "bg-white border border-[#E2E8F0] text-[#3C4D57] hover:border-[#20B0E0]/30 hover:bg-[#20B0E0]/5"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i + 3}
              variants={fadeUpVariants}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#20B0E0]/30 hover:shadow-[0_12px_40px_rgba(32,176,224,0.12)]">
                {/* Image with gradient fallback */}
                <div className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#142A33] font-semibold text-lg mb-1 group-hover:text-[#0E84B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#3C4D57] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header */}
              <div className={`relative h-64 md:h-80 bg-gradient-to-br ${filteredItems[lightboxIndex].gradient} flex items-center justify-center overflow-hidden`}>
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              {/* Lightbox Content */}
              <div className="p-6 md:p-8">
                <span className="text-[#20B0E0] text-sm font-medium">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-[#142A33] text-2xl font-bold mt-1 mb-3">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-[#3C4D57] leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E2E8F0]">
                  <button
                    onClick={prevImage}
                    className="flex items-center gap-2 text-[#0E84B8] font-medium text-sm hover:gap-3 transition-all duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  <span className="text-[#3C4D57] text-sm">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="flex items-center gap-2 text-[#0E84B8] font-medium text-sm hover:gap-3 transition-all duration-200"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
