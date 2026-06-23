"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardCheck,
  Ruler,
  Factory,
  Truck,
  Wrench,
  BarChart3,
  ArrowRight,
  Award,
  ChevronRight,
} from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const steps = [
  {
    icon: ClipboardCheck,
    title: "Consultation & Assessment",
    description:
      "We begin with a thorough analysis of your water quality, treatment requirements, and site conditions to understand your unique needs.",
    color: "#20B0E0",
    duration: "1-2 Weeks",
  },
  {
    icon: Ruler,
    title: "Design & Engineering",
    description:
      "Our engineers develop customized process designs, P&IDs, and detailed engineering drawings using cutting-edge simulation tools.",
    color: "#0E84B8",
    duration: "2-4 Weeks",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Equipment is fabricated at our 2500 SQ.M facility with stringent quality control and testing before dispatch to your site.",
    color: "#8CC63F",
    duration: "4-8 Weeks",
  },
  {
    icon: Truck,
    title: "Delivery & Installation",
    description:
      "Skid-mounted systems are delivered and installed by our experienced field team with minimal disruption to your operations.",
    color: "#E0B040",
    duration: "1-2 Weeks",
  },
  {
    icon: Wrench,
    title: "Commissioning & Training",
    description:
      "Complete system commissioning with operator training ensures your team can run the plant efficiently from day one.",
    color: "#20B0E0",
    duration: "1 Week",
  },
  {
    icon: BarChart3,
    title: "Ongoing Support",
    description:
      "24/7 remote monitoring, scheduled maintenance, and rapid troubleshooting keep your plant performing at its best.",
    color: "#0E84B8",
    duration: "Continuous",
  },
];

const statsMetrics = [
  {
    icon: ClipboardCheck,
    value: "6-Step Proven Methodology",
    color: "#20B0E0",
  },
  {
    icon: Award,
    value: "100+ Projects Delivered",
    color: "#8CC63F",
  },
  {
    icon: BarChart3,
    value: "98% On-Time Completion",
    color: "#E0B040",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 lg:py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* 1. Decorative background - diagonal line pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(32,176,224,0.03) 14px, rgba(32,176,224,0.03) 15px)",
        }}
      />

      {/* 1. Decorative background - larger blurred circles */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#20B0E0]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#8CC63F]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-5 py-2 mb-4"
          >
            <span className="w-2 h-2 bg-[#20B0E0] rounded-full animate-pulse" />
            <span className="text-[#0E84B8] text-sm font-semibold">
              Our Process
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            How We <span className="text-[#20B0E0]">Deliver Results</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Our proven 6-step process ensures consistent quality, on-time
            delivery, and optimal performance for every water treatment project.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* 2. Connecting line - desktop (static base) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(8.33%+24px)] right-[calc(8.33%+24px)] h-[2px]">
            <div className="w-full h-full bg-gray-200 rounded-full" />
            {/* 2. Animated progress line overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#20B0E0] via-[#8CC63F] to-[#0E84B8] rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          {/* Connecting line - mobile/tablet */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[28px] w-[2px]">
            <div className="w-full h-full bg-gray-200 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#20B0E0] via-[#8CC63F] to-[#0E84B8] rounded-full origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i + 3}
                variants={fadeUpVariants}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                <div
                  className="bg-[#F8FAFE] border border-[#E2E8F0] rounded-xl p-6 text-center transition-all duration-300 hover:border-[#20B0E0]/30 relative overflow-hidden"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 30px ${step.color}20`;
                    e.currentTarget.style.borderColor = `${step.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                    style={{ backgroundColor: step.color }}
                  />

                  {/* 3. Subtle gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top center, ${step.color}10, transparent 70%)`,
                    }}
                  />

                  {/* Step Number with circle */}
                  <div className="relative inline-flex mb-4">
                    {/* 3. Animated ring around icon circle on hover */}
                    <div
                      className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-[1.2]"
                      style={{ borderColor: `${step.color}30` }}
                    />
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto relative z-10 transition-all duration-300 group-hover:scale-110 shadow-sm"
                      style={{ backgroundColor: `${step.color}12` }}
                    >
                      <step.icon
                        className="w-7 h-7"
                        style={{ color: step.color }}
                      />
                    </div>
                    {/* 3. Step number badge with pulse/glow on hover */}
                    <span
                      className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold z-20 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110"
                      style={{
                        backgroundColor: step.color,
                        boxShadow: undefined,
                      }}
                    >
                      {i + 1}
                      {/* Pulse ring on hover */}
                      <span
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping"
                        style={{ backgroundColor: step.color }}
                      />
                    </span>
                  </div>

                  <h3 className="text-[#142A33] font-bold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#3C4D57] text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <div
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: `${step.color}10`, color: step.color }}
                  >
                    <ClockIcon className="w-3 h-3" />
                    {step.duration}
                  </div>
                </div>

                {/* 5. Animated chevron arrow connectors - desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[48px] -right-3 z-20 items-center justify-center">
                    <motion.div
                      animate={
                        isInView
                          ? { opacity: [0.3, 0.6, 0.3], x: [0, 2, 0] }
                          : { opacity: 0.3 }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    >
                      <ChevronRight
                        className="w-4 h-4"
                        style={{ color: `${step.color}80` }}
                      />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. Process stats strip */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.div
            custom={10}
            variants={fadeUpVariants}
            className="relative rounded-xl overflow-hidden"
          >
            {/* Gradient background */}
            <div className="bg-gradient-to-r from-[#F1F5F9] via-[#F8FAFE] to-[#F1F5F9] p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 relative">
                {/* Left fade gradient */}
                <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F1F5F9] to-transparent z-10 pointer-events-none" />

                {statsMetrics.map((metric, idx) => (
                  <div
                    key={metric.value}
                    className="flex items-center gap-3 relative"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${metric.color}12` }}
                    >
                      <metric.icon
                        className="w-5 h-5"
                        style={{ color: metric.color }}
                      />
                    </div>
                    <span className="text-[#142A33] font-semibold text-sm md:text-base whitespace-nowrap">
                      {metric.value}
                    </span>
                    {/* Vertical divider */}
                    {idx < statsMetrics.length - 1 && (
                      <div className="hidden sm:block absolute -right-4 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 w-px h-8 bg-[#CBD5E1]" />
                    )}
                  </div>
                ))}

                {/* Right fade gradient */}
                <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F1F5F9] to-transparent z-10 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-14"
        >
          <motion.div custom={11} variants={fadeUpVariants}>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0E84B8]/20 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Simple clock icon component
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}
