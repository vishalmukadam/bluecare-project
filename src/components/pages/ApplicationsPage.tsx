"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Phone,
  Mail,
  ArrowLeft,
  Droplets,
  Shield,
  Users,
  Award,
  Factory,
  Pill,
  Shirt,
  Car,
  ShoppingBag,
  Zap,
  Flame,
  Wine,
  Sprout,
  Trash2,
  Waves,
  FlaskConical,
  X,
  ChevronLeft,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
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



/* ─────────────────────── Industries ─────────────────────── */

const industries = [
  {
    title: "Desalination",
    description: "Seawater & brackish water desalination for coastal industries and municipal water supply.",
    image: "/app-desalination.png",
    icon: <Waves className="w-6 h-6" />,
    color: "#20B0E0",
  },
  {
    title: "Pharma Industry",
    description: "Ultra-pure water systems for pharmaceutical manufacturing, API production, and formulation plants.",
    image: "/app-pharma.png",
    icon: <Pill className="w-6 h-6" />,
    color: "#8CC63F",
  },
  {
    title: "Textile Industry",
    description: "Effluent treatment and water recycling for dyeing, printing, and processing textile units.",
    image: "/app-textile.png",
    icon: <Shirt className="w-6 h-6" />,
    color: "#0E84B8",
  },
  {
    title: "Chemical Industry",
    description: "Comprehensive wastewater treatment and chemical recovery solutions for chemical manufacturing and processing plants.",
    image: "/app-chemical.avif",
    icon: <FlaskConical className="w-6 h-6" />,
    color: "#9B59B6",
  },
  {
    title: "Tannery Industry",
    description: "High-TDS wastewater treatment for leather processing and chrome recovery systems.",
    image: "/app-tannery.png",
    icon: <Factory className="w-6 h-6" />,
    color: "#E0B040",
  },
  {
    title: "Automobile",
    description: "Wastewater treatment for vehicle manufacturing, paint shop effluent, and coolant recovery.",
    image: "/app-automobile.png",
    icon: <Car className="w-6 h-6" />,
    color: "#20B0E0",
  },
  {
    title: "FMCG",
    description: "Water treatment and ETP solutions for food, beverage, and consumer goods manufacturing.",
    image: "/app-fmcg.png",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "#8CC63F",
  },
  {
    title: "Power Industry",
    description: "Cooling water treatment, boiler feed water, and ash pond water management for power plants.",
    image: "/app-power.png",
    icon: <Zap className="w-6 h-6" />,
    color: "#0E84B8",
  },
  {
    title: "Oil & Gas",
    description: "Produced water treatment, refinery effluent, and petrochemical wastewater management.",
    image: "/app-oil-gas.png",
    icon: <Flame className="w-6 h-6" />,
    color: "#E0B040",
  },
  {
    title: "Distillery",
    description: "Spent wash treatment, biomethanation, and ZLD systems for alcohol and spirit manufacturing.",
    image: "/app-distillery.png",
    icon: <Wine className="w-6 h-6" />,
    color: "#20B0E0",
  },
  {
    title: "Agro Industries",
    description: "Wastewater treatment for fertilizer, pesticide, and agricultural processing facilities.",
    image: "/app-agro.png",
    icon: <Sprout className="w-6 h-6" />,
    color: "#8CC63F",
  },
  {
    title: "Leachate Treatment",
    description: "Landfill leachate treatment with advanced oxidation, RO, and evaporation for safe disposal.",
    image: "/app-leachate.png",
    icon: <Trash2 className="w-6 h-6" />,
    color: "#0E84B8",
  },
];

/* ─────────────────────── Component ─────────────────────── */

export default function ApplicationsPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activePhotoIndex === null) return;

    const interval = setInterval(() => {
      setActivePhotoIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return (prevIndex + 1) % industries.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activePhotoIndex]);

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
            <span className="text-[#20B0E0] font-medium">Applications</span>
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
              Applications
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

      {/* ─── Industry Applications Grid ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20B0E0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8CC63F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-5">
              <Droplets className="w-4 h-4 text-[#20B0E0]" />
              <span className="text-[#0E84B8] text-sm font-semibold">Industry Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4 leading-tight">
              Tailored Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                Every Industry
              </span>
            </h2>
            <p className="text-[#3C4D57] text-lg max-w-2xl mx-auto">
              We understand that each industry has unique water treatment challenges.
              Our solutions are engineered to meet specific effluent characteristics,
              regulatory requirements, and operational demands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                variants={cardHover}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0]/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => setActivePhotoIndex(i)}
                >
                  <picture className="w-full h-full">
                    <source srcSet={industry.image.replace(/\.(png|avif|webp)$/, '.avif')} type="image/avif" />
                    <source srcSet={industry.image.replace(/\.(png|avif|webp)$/, '.webp')} type="image/webp" />
                    <img
                      src={industry.image}
                      alt={`${industry.title} - BlueCare Systems`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D5C]/50 to-transparent" />
                  {/* Icon badge */}
                  <div
                    className="absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center shadow-md backdrop-blur-sm"
                    style={{ backgroundColor: `${industry.color}E6`, color: "white" }}
                  >
                    {industry.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#142A33] mb-2 group-hover:text-[#0E84B8] transition-colors duration-200">
                    {industry.title}
                  </h3>
                  <p className="text-[#3C4D57] text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200" style={{ color: industry.color }}>
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── CTA Section ─── */}
      <section id="contact-section" className="py-20 relative overflow-hidden">
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
            {/* Blurred circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#20B0E0]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8CC63F]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#20B0E0] to-[#0E84B8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need an Industry-Specific Solution?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Let our team design and deliver a customized water or wastewater treatment
                system engineered for your industry&apos;s unique requirements and regulatory
                compliance needs.
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

              {/* Quick contact info */}
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

      {/* Lightbox / Slider Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-10 select-none"
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Arrow */}
            <button
              onClick={() => {
                setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + industries.length) % industries.length : 0));
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 cursor-pointer hidden md:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => {
                setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % industries.length : 0));
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 cursor-pointer hidden md:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main content container */}
            <div className="relative max-w-4xl w-full flex flex-col items-center gap-6">
              {/* Slider frame */}
              <div className="relative w-full aspect-video md:aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                {/* Click on image advances to next */}
                <div 
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => {
                    setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % industries.length : 0));
                  }}
                >
                  <motion.img
                    key={activePhotoIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    src={industries[activePhotoIndex].image}
                    alt={industries[activePhotoIndex].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Text overlay - elegant shadow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-white text-xl md:text-3xl font-bold mb-2">
                      {industries[activePhotoIndex].title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
                      {industries[activePhotoIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dots navigation indicator */}
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-full">
                {industries.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activePhotoIndex ? "w-6 bg-[#20B0E0]" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              {/* Autoplay indicator badge */}
              <div className="text-xs text-white/40 flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>Autoplay active (3s)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
