"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Factory,
  Building2,
  Pill,
  FlaskConical,
  Wheat,
  Zap,
  Shirt,
  Fuel,
  Droplets,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const applications = [
  {
    icon: Factory,
    title: "Chemical & Petrochemical",
    description:
      "Specialized treatment for complex chemical effluents, heavy metals, and organic compounds with advanced oxidation processes.",
    accent: "#0E84B8",
    tag: "Chemical",
    number: "01",
  },
  {
    icon: Pill,
    title: "Pharmaceutical",
    description:
      "Ultra-pure water systems and effluent treatment meeting stringent FDA and GMP compliance standards.",
    accent: "#20B0E0",
    tag: "Pharma",
    number: "02",
  },
  {
    icon: FlaskConical,
    title: "Food & Beverage",
    description:
      "High-BOD wastewater treatment with biogas recovery and water recycling for sustainable food processing.",
    accent: "#8CC63F",
    tag: "F&B",
    number: "03",
  },
  {
    icon: Building2,
    title: "Municipal",
    description:
      "Large-scale sewage treatment plants and drinking water purification systems for urban communities.",
    accent: "#0E84B8",
    tag: "Municipal",
    number: "04",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description:
      "Irrigation water treatment and nutrient recovery systems for sustainable agricultural practices.",
    accent: "#8CC63F",
    tag: "Agri",
    number: "05",
  },
  {
    icon: Zap,
    title: "Power & Energy",
    description:
      "Cooling water treatment, boiler feed water, and condensate polishing for power generation plants.",
    accent: "#E0B040",
    tag: "Energy",
    number: "06",
  },
  {
    icon: Shirt,
    title: "Textile & Dyeing",
    description:
      "Color removal, BOD/COD reduction, and water recycling solutions for textile manufacturing units.",
    accent: "#20B0E0",
    tag: "Textile",
    number: "07",
  },
  {
    icon: Fuel,
    title: "Oil & Gas",
    description:
      "Produced water treatment, oily wastewater separation, and desalination for upstream and downstream operations.",
    accent: "#0E84B8",
    tag: "Oil & Gas",
    number: "08",
  },
];

const stats = [
  {
    icon: Building2,
    value: "8+",
    label: "Industries Served",
    color: "#0E84B8",
  },
  {
    icon: Droplets,
    value: "100+",
    label: "MLD Treated Daily",
    color: "#20B0E0",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Compliance Rate",
    color: "#8CC63F",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support",
    color: "#E0B040",
  },
];

export default function ApplicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="applications"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0E84B8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative blurred circle - top left (blue) */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #20B0E0 0%, transparent 70%)",
        }}
      />
      {/* Decorative blurred circle - bottom right (green) */}
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8CC63F 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="w-2 h-2 bg-[#20B0E0] rounded-full" />
            <span className="text-[#0E84B8] text-sm font-semibold">
              Applications
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            Serving{" "}
            <span className="text-[#20B0E0]">Diverse Industries</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Our solutions are trusted across a wide range of industrial sectors,
            each with unique water treatment challenges. We tailor our approach
            to deliver optimal results for every application.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {applications.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.title}
                custom={i + 3}
                variants={fadeUpVariants}
                whileHover={{
                  y: -8,
                  boxShadow: `0 16px 48px ${app.accent}20`,
                }}
                className="relative bg-[#F8FAFE] border border-[#E2E8F0] rounded-xl p-6 transition-all duration-300 group hover:border-transparent overflow-hidden"
              >
                {/* Top accent line - visible on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: app.accent }}
                />

                {/* Radial gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                  style={{
                    background: `radial-gradient(ellipse at top center, ${app.accent}10 0%, transparent 70%)`,
                  }}
                />

                {/* Card number badge - top right */}
                <div
                  className="absolute top-3 right-3 text-xs font-bold opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ color: app.accent }}
                >
                  {app.number}
                </div>

                {/* Icon container - default state (light bg, colored icon) */}
                <div
                  className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90"
                  style={{ backgroundColor: `${app.accent}12` }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors duration-300"
                    style={{ color: app.accent }}
                  />
                </div>

                {/* Icon container - hover state (solid bg, white icon) */}
                <div
                  className="absolute top-6 left-6 w-12 h-12 rounded-lg flex items-center justify-center mb-4 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  style={{ backgroundColor: app.accent }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-[#142A33] font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-[#0E84B8] z-[1]">
                  {app.title}
                </h3>

                {/* Description */}
                <p className="relative text-[#3C4D57] text-sm leading-relaxed z-[1]">
                  {app.description}
                </p>

                {/* Tag badge - bottom right */}
                <div className="absolute bottom-3 right-3 z-[1]">
                  <span
                    className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${app.accent}15`,
                      color: app.accent,
                    }}
                  >
                    {app.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Horizontal scrolling stats strip */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={11}
          variants={fadeUpVariants}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-r from-[#F1F5F9] via-[#F8FAFE] to-[#F1F5F9] rounded-2xl border border-[#E2E8F0] overflow-hidden relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F1F5F9] to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F1F5F9] to-transparent z-10 pointer-events-none" />

            <div className="flex items-center justify-around py-6 px-4 gap-4 flex-wrap sm:flex-nowrap">
              {stats.map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    custom={12 + i}
                    variants={fadeUpVariants}
                    className="flex items-center gap-3 text-center sm:text-left"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <StatIcon
                        className="w-5 h-5"
                        style={{ color: stat.color }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-xl font-bold"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[#3C4D57] text-xs font-medium">
                        {stat.label}
                      </div>
                    </div>
                    {/* Separator between items (not after last) */}
                    {i < stats.length - 1 && (
                      <div className="hidden sm:block w-px h-10 bg-[#E2E8F0] ml-4" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
