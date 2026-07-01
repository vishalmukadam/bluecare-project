"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  ChevronRight,
  Phone,
  Mail,
  ArrowLeft,
  Droplets,
  Shield,
  Users,
  CheckCircle,
  Wrench,
  Cog,
  Zap,
  Cpu,
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





/* ─────────────────────── Capabilities ─────────────────────── */

const capabilities = [
  {
    title: "Structural Frame Fabrication / Welding",
    description: "Precision fabrication and welding of structural steel frames for water treatment skids and plant infrastructure.",
    icon: <Wrench className="w-6 h-6" />,
    color: "#20B0E0",
  },
  {
    title: "Pipe Fabrication and Welding",
    description: "Expert pipe fabrication with certified welding procedures for all process piping requirements.",
    icon: <Droplets className="w-6 h-6" />,
    color: "#0E84B8",
  },
  {
    title: "Electrical, Instrumentation & Control Panel Assembly",
    description: "Complete electrical and I&C panel assembly, wiring, and integration for automated plant operations.",
    icon: <Cpu className="w-6 h-6" />,
    color: "#8CC63F",
  },
  {
    title: "Mechanical Assembly",
    description: "Skilled mechanical assembly of pumps, valves, membranes, and treatment system components.",
    icon: <Cog className="w-6 h-6" />,
    color: "#E0B040",
  },
  {
    title: "System Testing",
    description: "Comprehensive functional testing and quality assurance before dispatch to ensure reliable performance.",
    icon: <Zap className="w-6 h-6" />,
    color: "#0E84B8",
  },
];

/* ─────────────────────── Component ─────────────────────── */

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE]">
      {/* ─── Minimal Hero Banner ─── */}
      <section className="relative h-[250px] overflow-hidden mt-20 bg-white">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #8CC63F 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Decorative blurred circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8CC63F] rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 opacity-[0.06]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#20B0E0] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-[0.06]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="hidden sm:flex items-center gap-2 text-sm text-[#3C4D57]/60 mb-4 flex-wrap justify-center"
          >
            <Link href="/" className="hover:text-[#8CC63F] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#3C4D57]/60">Capabilities & Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#8CC63F] font-medium">Manufacturing & Equipment Supply</span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl font-bold text-[#142A33] leading-tight"
          >
            Manufacturing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-[#20B0E0]">
              Excellence
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

      {/* ─── About Manufacturing Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8CC63F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#20B0E0]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

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
                  <source srcSet="/manufacturing-content.avif" type="image/avif" />
                  <source srcSet="/manufacturing-content.webp" type="image/webp" />
                  <img
                    src="/manufacturing-content.png"
                    alt="BlueCare manufacturing facility - fabrication and assembly of water treatment systems"
                    width={1024}
                    height={1024}
                    className="w-full h-auto object-cover"
                  />
                </picture>
                {/* Gradient overlay on image */}
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
              <div className="inline-flex items-center gap-2 bg-[#8CC63F]/10 rounded-full px-4 py-1.5 mb-5">
                <Factory className="w-4 h-4 text-[#8CC63F]" />
                <span className="text-[#0E84B8] text-sm font-semibold">About Our Manufacturing</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-6 leading-tight">
                Precision Fabrication &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-[#20B0E0]">
                  Assembly Excellence
                </span>
              </h2>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                The manufacturing and fabrication area at our Rajasthan headquarters covers
                approximately <strong className="text-[#142A33]">20,000 square feet</strong> and is
                dedicated to efficient fabrication and assembly of systems, subsystems and components,
                as well as performing functional tests.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-8">
                In addition to our facility, we have numerous{" "}
                <strong className="text-[#142A33]">qualified and approved subcontractor facilities
                worldwide</strong>. This network enables us to scale production capacity to meet
                project demands of any size while maintaining our rigorous quality standards.
              </p>

              {/* Capabilities checklist */}
              <div className="space-y-3 mb-8">
                {capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className="flex items-start gap-3 group"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200"
                      style={{ backgroundColor: `${cap.color}15` }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: cap.color }} />
                    </div>
                    <span className="text-[#3C4D57] text-base group-hover:text-[#142A33] transition-colors duration-200">
                      {cap.title}
                    </span>
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
            backgroundImage: "radial-gradient(circle, #8CC63F 1px, transparent 1px)",
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8CC63F] via-[#20B0E0] to-[#0E84B8]" />
            {/* Blurred circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8CC63F]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20B0E0]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8CC63F] to-[#5A9A20] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Factory className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Manufacturing Expertise?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Let our manufacturing team build and deliver reliable, high-quality water treatment
                systems tailored to your project specifications.
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
