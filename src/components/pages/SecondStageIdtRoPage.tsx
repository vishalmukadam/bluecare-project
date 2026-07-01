"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Recycle,
  ChevronRight,
  Phone,
  Mail,
  ArrowLeft,
  Droplets,
  Shield,
  CheckCircle,
  Award,
  Gauge,
  Layers,
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





/* ─────────────────────── Key Features ─────────────────────── */

const keyFeatures = [
  { title: "Designed for First Stage RO Concentrate", color: "#20B0E0" },
  { title: "IDT Membrane Modules with High-Turbulence Flow Channels", color: "#0E84B8" },
  { title: "Operation at Elevated Pressures for High-TDS Streams", color: "#8CC63F" },
  { title: "Superior Resistance to Fouling and Scaling", color: "#E0B040" },
  { title: "Automated CIP (Clean-in-Place) System", color: "#20B0E0" },
  { title: "Modular Skid-Mounted Construction", color: "#0E84B8" },
  { title: "Advanced Instrumentation and Process Control", color: "#8CC63F" },
  { title: "High-Recovery Operation with Optimized Energy Utilization", color: "#E0B040" },
];

/* ─────────────────────── Advantages ─────────────────────── */

const advantages = [
  { title: "Recovers additional water from RO reject streams", color: "#20B0E0" },
  { title: "Reduces concentrate volume significantly", color: "#8CC63F" },
  { title: "Handles higher salinity than conventional RO systems", color: "#0E84B8" },
  { title: "Minimizes scaling through high cross-flow velocity", color: "#E0B040" },
  { title: "Reduces load on downstream evaporators and crystallizers", color: "#20B0E0" },
  { title: "Improves overall plant water recovery", color: "#8CC63F" },
];

/* ─────────────────────── Applications ─────────────────────── */

const applications = [
  "Treatment of First Stage RO reject",
  "Recovery of industrial wastewater concentrate",
  "ZLD and wastewater recycling plants",
  "Textile and dyeing industry effluents",
  "Chemical and pharmaceutical wastewater",
  "Power plant wastewater treatment",
  "Landfill leachate concentration",
  "High-TDS industrial process streams",
];

/* ─────────────────────── Why Choose Us ─────────────────────── */

const whyChooseUs = [
  { title: "Specialized design for high-concentration RO reject streams", color: "#20B0E0" },
  { title: "Optimized recovery with controlled scaling management", color: "#8CC63F" },
  { title: "Proven disc-tube membrane technology for difficult wastewater", color: "#0E84B8" },
  { title: "Reduced burden on MEE, MVRE, and ATFD systems", color: "#E0B040" },
  { title: "Robust performance under variable feed conditions", color: "#20B0E0" },
  { title: "Complete engineering, commissioning, and lifecycle support", color: "#8CC63F" },
  { title: "Customized solutions tailored to specific wastewater characteristics", color: "#0E84B8" },
];

/* ─────────────────────── Component ─────────────────────── */

export default function SecondStageIdtRoPage() {
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
            <span className="text-[#3C4D57]/60">Water Recycling</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#20B0E0] font-medium">2nd Stage IDT RO System</span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl font-bold text-[#142A33] leading-tight"
          >
            2nd Stage{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">IDT</span>{" "}RO System
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

      {/* ─── About / Technology Overview Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
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
                <picture>
                  <source srcSet="/second-stage-idt-ro-content.avif" type="image/avif" />
                  <source srcSet="/second-stage-idt-ro-content.webp" type="image/webp" />
                  <img
                    src="/second-stage-idt-ro-content.png"
                    alt="Second Stage IDT RO membrane system for water recycling"
                    width={1024}
                    height={1024}
                    className="w-full h-auto object-cover"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D5C]/30 to-transparent" />
              </div>
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
                <Recycle className="w-4 h-4 text-[#20B0E0]" />
                <span className="text-[#0E84B8] text-sm font-semibold">Technology Overview</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-6 leading-tight">
                High-Pressure Recovery for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                  Maximum Water Reuse
                </span>
              </h2>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                The Second Stage IDT RO System is a high-pressure membrane treatment system
                designed to process the concentrate (reject) generated from a primary RO or
                First Stage IDT RO system. It enables additional water recovery from
                high-salinity streams, significantly reducing reject volume and improving
                overall plant efficiency.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                Second Stage IDT RO systems are commonly used in industrial wastewater
                recycling and{" "}
                <strong className="text-[#142A33]">Zero Liquid Discharge (ZLD)</strong>{" "}
                applications where maximizing water recovery is critical before sending the
                final concentrate to evaporation systems.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                The Second Stage IDT RO receives concentrate from the First Stage RO and
                operates at higher osmotic pressure conditions. Using{" "}
                <strong className="text-[#142A33]">BLUECARE&apos;s membrane technology</strong>{" "}
                with open-channel flow paths, the system effectively handles elevated TDS,
                silica, COD, and scaling tendencies while maintaining stable operation.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-8">
                The recovered permeate can typically be reused within the process or blended
                with first-stage permeate, while the concentrated reject is directed to
                further treatment stages or thermal systems.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Key Features Section ─── */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-5">
              <Layers className="w-4 h-4 text-[#20B0E0]" />
              <span className="text-[#0E84B8] text-sm font-semibold">Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4 leading-tight">
              Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                High-Performance Recovery
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {keyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="flex items-start gap-3 bg-[#F8FAFE] rounded-xl p-4 border border-[#E2E8F0]/60"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <CheckCircle className="w-4 h-4" style={{ color: feature.color }} />
                </div>
                <span className="text-[#142A33] text-base font-medium">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Advantages & Benefits Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#F8FAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Advantages */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
            >
              <div className="inline-flex items-center gap-2 bg-[#8CC63F]/10 rounded-full px-4 py-1.5 mb-5">
                <Shield className="w-4 h-4 text-[#8CC63F]" />
                <span className="text-[#6BA830] text-sm font-semibold">Advantages</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#142A33] mb-6">
                System Advantages
              </h3>
              <div className="space-y-3">
                {advantages.map((adv) => (
                  <div key={adv.title} className="flex items-start gap-3 group">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${adv.color}15` }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: adv.color }} />
                    </div>
                    <span className="text-[#3C4D57] text-base group-hover:text-[#142A33] transition-colors">
                      {adv.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
            >
              <div className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-5">
                <Droplets className="w-4 h-4 text-[#20B0E0]" />
                <span className="text-[#0E84B8] text-sm font-semibold">Benefits</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#142A33] mb-6">
                Key Benefits
              </h3>
              <div className="space-y-3">
                {[
                  "Increased overall recovery of the water treatment plant",
                  "Lower thermal evaporation costs",
                  "Reduced wastewater disposal requirements",
                  "Enhanced sustainability through water reuse",
                  "Lower freshwater consumption",
                  "Reduced operating costs in ZLD systems",
                ].map((benefit, idx) => (
                  <div key={benefit} className="flex items-start gap-3 group">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${["#20B0E0", "#8CC63F", "#0E84B8", "#E0B040"][idx % 4]}15` }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: ["#20B0E0", "#8CC63F", "#0E84B8", "#E0B040"][idx % 4] }} />
                    </div>
                    <span className="text-[#3C4D57] text-base group-hover:text-[#142A33] transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Applications Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#0E84B8]/10 rounded-full px-4 py-1.5 mb-5">
              <Recycle className="w-4 h-4 text-[#0E84B8]" />
              <span className="text-[#0E84B8] text-sm font-semibold">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4 leading-tight">
              Where Second Stage IDT RO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                Makes an Impact
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {applications.map((app, i) => (
              <motion.div
                key={app}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="flex items-center gap-3 bg-[#F8FAFE] rounded-xl p-4 border border-[#E2E8F0]/60 hover:border-[#20B0E0]/30 transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#20B0E0] to-[#8CC63F] flex-shrink-0" />
                <span className="text-[#142A33] text-sm font-medium">{app}</span>
              </motion.div>
            ))}
          </div>

          {/* Typical Operating Range */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="green-cta-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#20B0E0] via-[#0E84B8] to-[#8CC63F]" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#20B0E0]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">Typical Operating Range</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Feed TDS", value: "15,000 – 70,000+ mg/L" },
                    { label: "Operating Pressure", value: "35 – 90 bar" },
                    { label: "Feed Source", value: "First Stage RO/IDT RO Concentrate" },
                    { label: "Membrane Type", value: "IDT RO" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#20B0E0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Droplets className="w-3 h-3 text-[#20B0E0]" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-white font-semibold text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Choose Us Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#F8FAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#8CC63F]/10 rounded-full px-4 py-1.5 mb-5">
              <Award className="w-4 h-4 text-[#8CC63F]" />
              <span className="text-[#6BA830] text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4 leading-tight">
              Why Choose Our Second Stage{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                IDT RO Systems
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-[#E2E8F0]/60 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}12`, color: item.color }}
                >
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-[#142A33] text-sm font-medium leading-relaxed">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section id="contact-section" className="py-20 relative overflow-hidden">
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#20B0E0] via-[#0E84B8] to-[#8CC63F]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#20B0E0]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8CC63F]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#20B0E0] to-[#0E84B8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Recycle className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Second Stage IDT RO System?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Let our team design and deliver a high-pressure IDT RO system tailored to
                your RO reject characteristics, maximizing water recovery before thermal
                evaporation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact">
                  <Button className="bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                    Request a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919699878877">
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
                  <Mail className="w-4 h-4" />
                  <span>sales@bluecare.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 9699878877</span>
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
