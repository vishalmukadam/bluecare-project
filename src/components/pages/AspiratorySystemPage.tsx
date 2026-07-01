"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  ArrowLeft,
  Droplets,
  Shield,
  CheckCircle,
  Waves,
  Award,
  Users,
  Zap,
  Wind,
  Wrench,
  Settings,
  ThumbsUp,
  Target,
  Building2,
  Factory,
  FlaskConical,
  Server,
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
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ─────────────────────── Checklist Items (Working Principle) ─────────────────────── */

const workingPrinciples = [
  {
    title: "High Oxygen Transfer Efficiency",
    description: "Fine bubble generation ensures maximum oxygen dissolution.",
    color: "#20B0E0",
  },
  {
    title: "Effective Mixing",
    description: "Simultaneous aeration and mixing prevents sludge settling.",
    color: "#0E84B8",
  },
  {
    title: "Prevention of Sludge Settling",
    description: "Continuous circulation keeps solids in suspension.",
    color: "#8CC63F",
  },
  {
    title: "No Air Blowers Required",
    description: "Mechanical venturi principle eliminates need for separate blowers or compressors.",
    color: "#E0B040",
  },
];





/* ─────────────────────── Key Features ─────────────────────── */

const keyFeatures = [
  {
    title: "Efficient Oxygen Dispersion Without Air Blowers",
    description: "Venturi-based design draws atmospheric air mechanically, eliminating the need for external blowers.",
    icon: <Wind className="w-5 h-5" />,
    color: "#20B0E0",
  },
  {
    title: "Fine Bubble Generation for Improved Oxygen Transfer",
    description: "Produces fine bubbles that maximize surface area contact for superior oxygen dissolution.",
    icon: <Droplets className="w-5 h-5" />,
    color: "#0E84B8",
  },
  {
    title: "Simultaneous Aeration and Mixing",
    description: "Combines oxygen transfer and tank mixing in a single operation, reducing equipment needs.",
    icon: <Zap className="w-5 h-5" />,
    color: "#8CC63F",
  },
  {
    title: "Simple and Robust Mechanical Design",
    description: "Minimal moving parts ensure long service life and reliable, trouble-free operation.",
    icon: <Wrench className="w-5 h-5" />,
    color: "#E0B040",
  },
  {
    title: "Low Maintenance and Easy Operation",
    description: "Requires minimal upkeep compared to conventional aeration systems with blowers and diffusers.",
    icon: <Settings className="w-5 h-5" />,
    color: "#0E84B8",
  },
  {
    title: "Suitable for Continuous and Intermittent Operation",
    description: "Flexible operation modes adapt to varying process demands and treatment schedules.",
    icon: <Target className="w-5 h-5" />,
    color: "#20B0E0",
  },
];

/* ─────────────────────── Advantages ─────────────────────── */

const advantages = [
  {
    title: "No Requirement of Separate Air Blowers or Compressors",
    color: "#20B0E0",
  },
  {
    title: "Lower Capital and Operating Costs",
    color: "#0E84B8",
  },
  {
    title: "Reduced Risk of Clogging Compared to Fine Bubble Diffusers",
    color: "#8CC63F",
  },
  {
    title: "Effective Performance Even in High-Solid Wastewater",
    color: "#E0B040",
  },
  {
    title: "Easy Installation in Existing Tanks and Retrofits",
    color: "#20B0E0",
  },
];

/* ─────────────────────── Applications ─────────────────────── */

const applications = [
  {
    title: "Aeration Tanks in Sewage Treatment Plants (STP)",
    icon: <Building2 className="w-5 h-5" />,
    color: "#20B0E0",
  },
  {
    title: "Biological Treatment Units in Effluent Treatment Plants (ETP)",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "#0E84B8",
  },
  {
    title: "Equalization and Holding Tanks",
    icon: <Factory className="w-5 h-5" />,
    color: "#8CC63F",
  },
  {
    title: "MBBR, ASP, and Aerobic Treatment Systems",
    icon: <Server className="w-5 h-5" />,
    color: "#E0B040",
  },
  {
    title: "Industrial Wastewater with High Organic Load",
    icon: <Droplets className="w-5 h-5" />,
    color: "#0E84B8",
  },
];

/* ─────────────────────── Component ─────────────────────── */

export default function AspiratorySystemPage() {
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
            <span className="text-[#3C4D57]/60">Wastewater Treatment</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#20B0E0] font-medium">Bluecare Aspiratory System</span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl font-bold text-[#142A33] leading-tight"
          >
            Bluecare Aspiratory{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
              System
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

      {/* ─── About Aspiratory System Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20B0E0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8CC63F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={0}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <picture>
                  <source srcSet="/aspiratory-system-content.avif" type="image/avif" />
                  <source srcSet="/aspiratory-system.webp" type="image/webp" />
                  <img
                    src="/aspiratory-system-content.png"
                    alt="Bluecare Aspiratory System for wastewater treatment"
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
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
            >
              <div className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-5">
                <Waves className="w-4 h-4 text-[#20B0E0]" />
                <span className="text-[#0E84B8] text-sm font-semibold">About Aspiratory System</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-6 leading-tight">
                Efficient Oxygen Dispersion for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                  Wastewater Treatment
                </span>
              </h2>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                The Aspirator Aeration System is an efficient oxygen dispersion technology used in
                wastewater treatment plants to introduce and uniformly disperse oxygen into wastewater.
                Unlike conventional diffused aeration systems, aspirator systems utilize a mechanical
                principle to draw atmospheric air and mix it with wastewater, ensuring effective
                oxygen transfer.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-8">
                This system is widely used in{" "}
                <strong className="text-[#142A33]">STPs, ETPs, equalization tanks, aeration tanks</strong>{" "}
                and biological treatment units where reliable aeration and mixing are required.
              </p>

              {/* Working Principle checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {workingPrinciples.map((principle, i) => (
                  <motion.div
                    key={principle.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    custom={i}
                    className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-[#E2E8F0]/60 shadow-sm"
                  >
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: principle.color }}
                    />
                    <div>
                      <p className="font-semibold text-[#142A33] text-sm">{principle.title}</p>
                      <p className="text-[#3C4D57]/70 text-sm">{principle.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Key Features Section ─── */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#20B0E0]/5 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8CC63F]/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#0E84B8]/10 rounded-full px-4 py-1.5 mb-5">
              <Zap className="w-4 h-4 text-[#0E84B8]" />
              <span className="text-[#0E84B8] text-sm font-semibold">Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4">
              What Makes Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                Aspiratory System
              </span>{" "}
              Stand Out
            </h2>
            <p className="text-[#3C4D57] text-lg max-w-2xl mx-auto">
              Engineered for efficiency, reliability, and ease of operation in demanding wastewater treatment environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {keyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="group bg-white rounded-xl p-6 border border-[#E2E8F0]/60 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: feature.color }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: `${feature.color}12`, color: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-[#142A33] font-semibold text-base mb-1.5 group-hover:text-[#0E84B8] transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-[#3C4D57] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Advantages Over Conventional Diffusers Section ─── */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #0E84B8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Decorative blurred circles */}
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
            <div className="inline-flex items-center gap-2 bg-[#8CC63F]/10 rounded-full px-4 py-1.5 mb-5">
              <ThumbsUp className="w-4 h-4 text-[#8CC63F]" />
              <span className="text-[#8CC63F] text-sm font-semibold">Advantages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4">
              Advantages Over{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-[#20B0E0]">
                Conventional Diffusers
              </span>
            </h2>
            <p className="text-[#3C4D57] text-lg max-w-2xl mx-auto">
              Our aspiratory system delivers significant benefits over traditional diffused aeration, reducing costs and complexity.
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            className="max-w-3xl mx-auto green-cta-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#20B0E0] via-[#8CC63F] to-[#E0B040]" />
            {/* Blurred accent circles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#20B0E0]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8CC63F]/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-5">
              {advantages.map((advantage, i) => (
                <motion.div
                  key={advantage.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={i}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: `${advantage.color}20` }}
                  >
                    <CheckCircle className="w-4.5 h-4.5" style={{ color: advantage.color }} />
                  </div>
                  <span className="text-white/90 text-base md:text-lg font-medium group-hover:text-white transition-colors duration-200">
                    {advantage.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Applications Section ─── */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#E0B040]/5 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#20B0E0]/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#E0B040]/10 rounded-full px-4 py-1.5 mb-5">
              <Building2 className="w-4 h-4 text-[#E0B040]" />
              <span className="text-[#E0B040] text-sm font-semibold">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4">
              Where Our Aspiratory System{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B040] to-[#20B0E0]">
                Excels
              </span>
            </h2>
            <p className="text-[#3C4D57] text-lg max-w-2xl mx-auto">
              Trusted across diverse wastewater treatment applications for reliable aeration and mixing performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="group bg-white rounded-xl p-6 border border-[#E2E8F0]/60 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  style={{ backgroundColor: app.color }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: `${app.color}12`, color: app.color }}
                  >
                    {app.icon}
                  </div>
                  <p className="text-[#142A33] font-semibold text-sm md:text-base leading-snug group-hover:text-[#0E84B8] transition-colors duration-200 pt-2">
                    {app.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us Section ─── */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Diagonal line pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 14px, #20B0E0 14px, #20B0E0 15px)`,
          }}
        />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0E84B8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8CC63F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

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
              <Award className="w-4 h-4 text-[#20B0E0]" />
              <span className="text-[#20B0E0] text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                BlueCare Systems
              </span>
            </h2>
            <p className="text-[#3C4D57] text-lg max-w-2xl mx-auto">
              Decades of expertise in wastewater treatment with proven results and dedicated support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Proven Expertise",
                description: "Over 100 aspirator systems installed across India with consistent performance and client satisfaction.",
                icon: <Shield className="w-6 h-6" />,
                color: "#20B0E0",
                stat: "100+",
                statLabel: "Installations",
              },
              {
                title: "Custom Engineering",
                description: "Each system is custom-engineered for your specific wastewater characteristics, tank dimensions, and treatment goals.",
                icon: <Settings className="w-6 h-6" />,
                color: "#8CC63F",
                stat: "95%+",
                statLabel: "Efficiency",
              },
              {
                title: "End-to-End Support",
                description: "From design and manufacturing to commissioning and after-sales service — we support you through the entire lifecycle.",
                icon: <ThumbsUp className="w-6 h-6" />,
                color: "#E0B040",
                stat: "24/7",
                statLabel: "Support",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="group bg-gradient-to-br from-white to-[#F8FAFE] rounded-xl p-8 border border-[#E2E8F0]/60 shadow-sm hover:shadow-md transition-all duration-300 text-center relative overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: item.color }}
                />
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}12`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#142A33] mb-3 group-hover:text-[#0E84B8] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-[#3C4D57] text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <span className="font-bold text-lg" style={{ color: item.color }}>{item.stat}</span>
                  <span className="text-[#3C4D57]/70 text-sm">{item.statLabel}</span>
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
                <Waves className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need an Aspiratory Aeration Solution?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Let our team design and deliver a custom-engineered aspirator aeration system for
                optimal oxygen transfer and mixing in your wastewater treatment plant.
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
