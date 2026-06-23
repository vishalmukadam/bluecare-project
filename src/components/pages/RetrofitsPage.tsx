"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  RefreshCw,
  ChevronRight,
  Phone,
  Mail,
  ArrowLeft,
  Droplets,
  Shield,
  Users,
  CheckCircle,
  Zap,
  Building2,
  TrendingUp,
  Settings,
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
  { value: "50+", label: "Retrofit Projects", icon: <RefreshCw className="w-5 h-5" />, color: "#20B0E0" },
  { value: "30%", label: "Avg. Energy Savings", icon: <Zap className="w-5 h-5" />, color: "#8CC63F" },
  { value: "100+", label: "Plants Upgraded", icon: <Building2 className="w-5 h-5" />, color: "#0E84B8" },
  { value: "99%", label: "Compliance Rate", icon: <Shield className="w-5 h-5" />, color: "#E0B040" },
];

/* ─────────────────────── Service Checklist ─────────────────────── */

const serviceChecklist = [
  { text: "Capacity Enhancement", desc: "increase throughput and output", color: "#20B0E0" },
  { text: "Technology Upgradation", desc: "replace obsolete technology with modern efficient systems", color: "#8CC63F" },
  { text: "Compliance Upgradation", desc: "meet new regulatory requirements", color: "#0E84B8" },
  { text: "Energy Optimization", desc: "reduce energy consumption and operating costs", color: "#E0B040" },
  { text: "System Integration", desc: "seamlessly add new systems to existing infrastructure", color: "#20B0E0" },
];

/* ─────────────────────── Component ─────────────────────── */

export default function RetrofitsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE]">
      {/* ─── Minimal Hero Banner ─── */}
      <section className="relative h-[250px] overflow-hidden mt-20 bg-white">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #E0B040 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Decorative blurred circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E0B040] rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 opacity-[0.06]" />
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
            <Link href="/" className="hover:text-[#E0B040] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#3C4D57]/60">Capabilities & Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E0B040] font-medium">Retrofits & Plant Upgradation</span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl font-bold text-[#142A33] leading-tight"
          >
            Retrofits &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B040] to-[#20B0E0]">
              Plant Upgradation
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

      {/* ─── About Retrofits Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0B040]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
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
                  <source srcSet="/retrofits-content.avif" type="image/avif" />
                  <source srcSet="/retrofits-content.webp" type="image/webp" />
                  <img
                    src="/retrofits-content.png"
                    alt="Retrofit and plant upgrade work by BlueCare"
                    className="w-full h-auto object-cover"
                  />
                </picture>
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D5C]/30 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-xl shadow-xl p-4 border border-[#E2E8F0]/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E0B040] to-[#20B0E0] flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#142A33]">50+</p>
                    <p className="text-xs text-[#3C4D57]">Retrofit Projects</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#E0B040]/20 rounded-2xl -z-10" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
            >
              <div className="inline-flex items-center gap-2 bg-[#E0B040]/10 rounded-full px-4 py-1.5 mb-5">
                <Droplets className="w-4 h-4 text-[#E0B040]" />
                <span className="text-[#0E84B8] text-sm font-semibold">About Our Retrofits</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-6 leading-tight">
                Upgrade & Optimize Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0B040] to-[#20B0E0]">
                  Existing Systems
                </span>
              </h2>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                Industries and public entities are dealing with aging equipment and infrastructure
                across the globe. Technology and efficiency of pumps, membranes and energy recovery
                devices have evolved. Bluecare can help identify areas in an existing system that
                can be modified and improved upon to achieve a reduction in{" "}
                <strong className="text-[#142A33]">energy consumption</strong>,{" "}
                <strong className="text-[#142A33]">increased output</strong> and{" "}
                <strong className="text-[#142A33]">ease of operation</strong>.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                As production expands or regulations change there is often a need to increase
                wastewater treatment, produce more high purity water for consumption or reuse more
                water within facility. Bluecare has the experience to evaluate the current plant
                operating parameters and design additional systems to add on to existing equipment
                in order to meet the goals of the client.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-8">
                These are specialized approaches we take to an operating plant where we involve our{" "}
                <strong className="text-[#142A33]">process and mechanical engineers</strong> as well
                as our <strong className="text-[#142A33]">field service technicians</strong> and{" "}
                <strong className="text-[#142A33]">project managers</strong> to ensure we are taking
                all aspects of the process into account and work together to plan how to
                successfully integrate a new design.
              </p>

              {/* Service Checklist */}
              <div className="space-y-3 mb-8">
                {serviceChecklist.map((item, i) => (
                  <motion.div
                    key={item.text}
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    custom={i + 2}
                    className="flex items-start gap-3 bg-white rounded-xl p-3 border border-[#E2E8F0]/60 shadow-sm"
                  >
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: item.color }}
                    />
                    <div>
                      <p className="font-semibold text-[#142A33]">{item.text}</p>
                      <p className="text-sm text-[#3C4D57]/70">{item.desc}</p>
                    </div>
                  </motion.div>
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

      {/* ─── Stats Section ─── */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="text-center p-6 rounded-xl bg-[#F8FAFE] border border-[#E2E8F0]/60"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${stat.color}12`, color: stat.color }}
                >
                  {stat.icon}
                </div>
                <p
                  className="text-3xl md:text-4xl font-black mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-[#3C4D57]/70 font-medium">{stat.label}</p>
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
            backgroundImage: "radial-gradient(circle, #E0B040 1px, transparent 1px)",
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
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E0B040] via-[#20B0E0] to-[#8CC63F]" />
            {/* Blurred circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E0B040]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20B0E0]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E0B040] to-[#20B0E0] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Plant Upgrade?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Let our team of engineers and field service technicians evaluate your current
                systems and design the optimal retrofit solution for improved performance.
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
                  <span>info@bluecare.in</span>
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
