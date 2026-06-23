"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Filter,
  Zap,
  Droplets,
  Thermometer,
  Wind,
  Atom,
  Beaker,
  Radiation,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const technologies = [
  {
    icon: Filter,
    title: "Reverse Osmosis (RO)",
    description:
      "High-pressure membrane filtration for desalination and pure water production, removing up to 99% of dissolved impurities.",
    tag: "Filtration",
    color: "#20B0E0",
    badge: "Featured" as const,
  },
  {
    icon: Atom,
    title: "Ultrafiltration (UF)",
    description:
      "Low-pressure membrane process removing suspended solids, bacteria, and viruses for pretreatment and product water.",
    tag: "Membrane",
    color: "#0E84B8",
    badge: null,
  },
  {
    icon: Droplets,
    title: "Electrodeionization (EDI)",
    description:
      "Continuous electrochemical deionization producing ultra-pure water without chemical regeneration.",
    tag: "Deionization",
    color: "#8CC63F",
    badge: null,
  },
  {
    icon: Zap,
    title: "MBBR / MBR",
    description:
      "Moving Bed Biofilm Reactor and Membrane Bioreactor systems for efficient biological wastewater treatment.",
    tag: "Biological",
    color: "#20B0E0",
    badge: "Popular" as const,
  },
  {
    icon: Thermometer,
    title: "Evaporators & Crystallizers",
    description:
      "Thermal concentration and solidification for ZLD applications, recovering valuable salts and chemicals.",
    tag: "Thermal",
    color: "#E0B040",
    badge: null,
  },
  {
    icon: Wind,
    title: "DAF Systems",
    description:
      "Dissolved Air Flotation for effective removal of oils, grease, and suspended solids from industrial wastewater.",
    tag: "Separation",
    color: "#0E84B8",
    badge: null,
  },
  {
    icon: Beaker,
    title: "Chemical Treatment",
    description:
      "pH correction, coagulation, flocculation, and advanced oxidation for specific contaminant removal.",
    tag: "Chemical",
    color: "#8CC63F",
    badge: null,
  },
  {
    icon: Radiation,
    title: "UV / Ozonation",
    description:
      "Advanced disinfection and oxidation technologies for pathogen control and organic contaminant destruction.",
    tag: "Disinfection",
    color: "#20B0E0",
    badge: null,
  },
];

const quickFacts = [
  { label: "99.9% Salt Rejection", sublabel: "RO", color: "#20B0E0" },
  { label: "0 Chemicals", sublabel: "EDI", color: "#8CC63F" },
  { label: "100% Reuse", sublabel: "ZLD", color: "#E0B040" },
  { label: "Low Energy", sublabel: "UF", color: "#0E84B8" },
  { label: "Compact Design", sublabel: "MBR", color: "#20B0E0" },
];

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="technologies"
      className="py-20 lg:py-28 bg-[#F8FAFE] relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 14px,
            #20B0E0 14px,
            #20B0E0 15px
          )`,
        }}
      />

      {/* Blurred decorative circles */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#20B0E0]/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8CC63F]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
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
              Technologies
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            Water Treatment{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#20B0E0]">Technologies</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#20B0E0]/10 rounded-full" />
            </span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            We leverage cutting-edge technologies to deliver efficient, reliable,
            and sustainable water treatment solutions across all industrial
            sectors.
          </motion.p>
        </motion.div>

        {/* Technology cards grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              custom={i + 3}
              variants={fadeUpVariants}
              whileHover={{
                y: -8,
                boxShadow: `0 16px 48px ${tech.color}20`,
              }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 transition-all duration-300 group hover:border-transparent relative overflow-hidden"
              style={{
                // Dynamic hover border color via CSS custom property
                ["--tech-color" as string]: tech.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${tech.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
              }}
            >
              {/* Top accent line — uses tech color */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:h-1"
                style={{ backgroundColor: tech.color }}
              />

              {/* Background glow on hover — uses tech color */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tech.color}08 0%, transparent 70%)`,
                }}
              />

              {/* Featured / Popular badge */}
              {tech.badge && (
                <div
                  className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor:
                      tech.badge === "Featured"
                        ? `${tech.color}15`
                        : `${tech.color}15`,
                    color: tech.color,
                    border: `1px solid ${tech.color}25`,
                  }}
                >
                  {tech.badge === "Featured" ? (
                    <Star className="w-3 h-3 fill-current" />
                  ) : (
                    <TrendingUp className="w-3 h-3" />
                  )}
                  {tech.badge}
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  {/* Icon box — uses tech color for background */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-md"
                    style={{
                      backgroundColor: `${tech.color}12`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = tech.color;
                      e.currentTarget.style.boxShadow = `0 4px 14px ${tech.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${tech.color}12`;
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <tech.icon
                      className="w-6 h-6 transition-colors duration-300 group-hover:text-white"
                      style={{ color: tech.color }}
                    />
                  </div>
                  {/* Tag badge — uses tech color */}
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: `${tech.color}10`,
                      color: tech.color,
                    }}
                  >
                    {tech.tag}
                  </span>
                </div>
                <h3 className="text-[#142A33] font-bold text-lg mb-2 group-hover:text-[#0E84B8] transition-colors">
                  {tech.title}
                </h3>
                <p className="text-[#3C4D57] text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* "Learn more →" link — slides in on hover */}
                <div className="mt-3 overflow-hidden">
                  <span
                    className="inline-flex items-center text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: tech.color }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison strip — quick fact badges */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <motion.div
            custom={technologies.length + 3}
            variants={fadeUpVariants}
            className="flex items-center justify-center"
          >
            <div className="flex items-center gap-2 overflow-x-auto pb-2 px-1 scrollbar-none">
              {quickFacts.map((fact, i) => (
                <div
                  key={fact.sublabel}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border shrink-0"
                  style={{
                    backgroundColor: `${fact.color}08`,
                    borderColor: `${fact.color}20`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: fact.color }}
                  />
                  <span
                    className="text-sm font-semibold whitespace-nowrap"
                    style={{ color: fact.color }}
                  >
                    {fact.label}
                  </span>
                  <span className="text-xs text-[#3C4D57]/60 font-medium">
                    ({fact.sublabel})
                  </span>
                  {i < quickFacts.length - 1 && (
                    <span className="text-[#E2E8F0] ml-1 hidden sm:inline">|</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <motion.div
            custom={technologies.length + 4}
            variants={fadeUpVariants}
          >
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0E84B8]/20 group"
            >
              Discuss Your Requirements
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
