"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Filter,
  ChevronRight,
  Phone,
  Mail,
  ArrowLeft,
  Droplets,
  Shield,
  CheckCircle,
  Waves,
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

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ─────────────────────── Stats ─────────────────────── */

const stats = [
  { value: "500+", label: "Filtration Systems Installed", icon: <Filter className="w-5 h-5" />, color: "#20B0E0" },
  { value: "99.9%", label: "Turbidity Removal", icon: <Droplets className="w-5 h-5" />, color: "#8CC63F" },
  { value: "50+", label: "MLD Water Treated", icon: <Waves className="w-5 h-5" />, color: "#0E84B8" },
  { value: "98%", label: "Client Satisfaction", icon: <Shield className="w-5 h-5" />, color: "#E0B040" },
];

/* ─────────────────────── Filtration Solutions ─────────────────────── */

const filtrationSolutions = [
  {
    title: "Pressure Sand Filters (PSF)",
    description: "Removes large sediments and reduces turbidity.",
    color: "#20B0E0",
  },
  {
    title: "Multimedia Filters (MMF)",
    description: "Enhanced removal of fine particles using layered media.",
    color: "#0E84B8",
  },
  {
    title: "Activated Carbon Filters (ACF)",
    description: "Eliminates chlorine, odors, color, and organic contaminants.",
    color: "#8CC63F",
  },
  {
    title: "Specialized Filters",
    description: "Iron & manganese removal systems for well water or high-iron sources.",
    color: "#E0B040",
  },
];

/* ─────────────────────── Component ─────────────────────── */

export default function FiltrationPlantPage() {
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
            <span className="text-[#3C4D57]/60">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#3C4D57]/60">Water Treatment</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#20B0E0] font-medium">Filtration Plant</span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl font-bold text-[#142A33] leading-tight"
          >
            Filtration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
              Plant
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

      {/* ─── About Filtration Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20B0E0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8CC63F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/filtration-plant.webp"
                  alt="Industrial filtration plant system by BlueCare"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#20B0E0]/20 rounded-2xl -z-10" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
            >
              <div className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-5">
                <Droplets className="w-4 h-4 text-[#20B0E0]" />
                <span className="text-[#0E84B8] text-sm font-semibold">About Our Filtration</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-6 leading-tight">
                Essential First Step in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                  Water Treatment
                </span>
              </h2>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                Filtration is the essential first step in any water treatment process. Our industrial
                filtration systems remove turbidity, suspended solids, organic contaminants, silt, and
                particles to protect downstream equipment and improve overall water quality.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-8">
                Filtration safeguards sensitive equipment like{" "}
                <strong className="text-[#142A33]">RO membranes and ion exchangers</strong> and
                significantly extends their life — a best practice reflected across leading water
                treatment offerings.
              </p>

              {/* Core Filtration Solutions checklist */}
              <div className="space-y-3 mb-8">
                {filtrationSolutions.map((solution) => (
                  <div
                    key={solution.title}
                    className="flex items-start gap-3 group"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200"
                      style={{ backgroundColor: `${solution.color}15` }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: solution.color }} />
                    </div>
                    <div>
                      <span className="text-[#142A33] text-base font-semibold group-hover:text-[#0E84B8] transition-colors duration-200">
                        {solution.title}
                      </span>
                      <span className="text-[#3C4D57] text-base"> — {solution.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#E2E8F0]/60 shadow-sm"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}12`, color: stat.color }}
                    >
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#142A33]">{stat.value}</p>
                      <p className="text-xs text-[#3C4D57]/70">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
                <Filter className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Filtration Solution?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Let our team design and deliver the perfect filtration system to protect your
                downstream equipment and improve overall water quality.
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
    </div>
  );
}
