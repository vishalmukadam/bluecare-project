"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Pause,
  Play,
} from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

type Solution = {
  title: string;
  imageBase: string; // path without extension
  alt: string;
  description: string;
  features: string[];
  color: string;
  stat: string;
  statLabel: string;
  number: string;
  href: string;
};

const solutions: Solution[] = [
  {
    title: "Potable & Process Water",
    imageBase: "/solutions/potable-and-process-water",
    alt: "Potable and process water treatment system",
    description:
      "High-performance water treatment systems engineered to meet diverse industrial and commercial requirements. Advanced filtration, softening, RO, and EDI technologies ensuring consistent water quality.",
    features: [
      "Multi-stage filtration",
      "RO & EDI systems",
      "Water softening",
      "Quality compliance",
    ],
    color: "#20B0E0",
    stat: "99.9%",
    statLabel: "Purity Rate",
    number: "01",
    href: "/filtration-plant",
  },
  {
    title: "Advanced Wastewater Treatment & Compliance",
    imageBase: "/solutions/advanced-wastewater-treatment-and-compliance",
    alt: "Advanced wastewater treatment and compliance system",
    description:
      "Comprehensive wastewater treatment plants designed for industrial and municipal applications. Biological, chemical, and physical treatment processes tailored to your needs.",
    features: [
      "Biological treatment",
      "Chemical processing",
      "Sludge management",
      "Effluent treatment",
    ],
    color: "#0E84B8",
    stat: "100+",
    statLabel: "MLD Capacity",
    number: "02",
    href: "#contact",
  },
  {
    title: "Water Recycling & Resource Recovery",
    imageBase: "/solutions/water-recycling-and-resource-recovery",
    alt: "Water recycling and resource recovery system",
    description:
      "Advanced water recycling solutions that recover and reuse wastewater, reducing fresh water consumption and environmental impact while ensuring compliance with discharge norms.",
    features: [
      "Tertiary treatment",
      "Membrane filtration",
      "UV disinfection",
      "Water reuse systems",
    ],
    color: "#8CC63F",
    stat: "80%",
    statLabel: "Water Saved",
    number: "03",
    href: "#contact",
  },
  {
    title: "Zero Liquid Discharge (ZLD) Solutions",
    imageBase: "/solutions/zero-liquid-discharge-zld-solutions",
    alt: "Zero Liquid Discharge ZLD solution system",
    description:
      "Zero Liquid Discharge systems that eliminate wastewater discharge completely. Recover valuable resources while achieving 100% water reuse for maximum sustainability.",
    features: [
      "Evaporation systems",
      "Crystallization",
      "Resource recovery",
      "100% water reuse",
    ],
    color: "#E0B040",
    stat: "100%",
    statLabel: "Water Reuse",
    number: "04",
    href: "#contact",
  },
];

const AUTOPLAY_MS = 5000;
const TRANSITION_MS = 600;

export default function SolutionsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const total = solutions.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Autoplay — normal advance every 5s, pause on hover for 6s before moving next
  useEffect(() => {
    if (paused) return;
    const intervalTime = hovered ? 6000 : AUTOPLAY_MS;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, intervalTime);
    return () => clearInterval(id);
  }, [paused, hovered, total]);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  return (
    <section
      id="solutions"
      className="py-20 lg:py-28 bg-[#F8FAFE] relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorative elements — dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />

      {/* Blurred decorative circles */}
      <div className="absolute top-0 left-0 w-[384px] h-[384px] bg-[#20B0E0] rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 opacity-[0.07]" />
      <div className="absolute bottom-0 right-0 w-[384px] h-[384px] bg-[#8CC63F] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-[0.07]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-5 py-2 mb-4"
          >
            <span className="w-2 h-2 bg-[#20B0E0] rounded-full animate-pulse" />
            <span className="text-[#0E84B8] text-sm font-semibold">
              Our Solutions
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            Comprehensive{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#20B0E0]">Water Treatment</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#20B0E0]/10 rounded-full" />
            </span>{" "}
            Solutions
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Bluecare delivers high-performance water treatment systems engineered
            to meet diverse industrial and commercial requirements. Our solutions
            ensure consistent water quality through advanced technologies.
          </motion.p>
        </motion.div>

        {/* Slider — one full-width slide at a time on all screen sizes */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
          variants={fadeUpVariants}
          className="relative"
        >
          {/* Carousel viewport */}
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              {solutions.map((solution) => {
                const isAnchor = solution.href.startsWith("#");
                return (
                  <div
                    key={solution.title}
                    className="shrink-0 w-full"
                    style={{ flexBasis: "100%" }}
                  >
                    <SolutionCard solution={solution} isAnchor={isAnchor} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev button */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous solution"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#0E84B8] hover:bg-[#0E84B8] hover:text-white hover:border-[#0E84B8] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {solutions.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to solution ${i + 1}: ${s.title}`}
                  aria-current={index === i}
                  className="group/dot p-1.5"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      index === i
                        ? "w-8 h-2.5"
                        : "w-2.5 h-2.5 bg-[#CBD5E1] group-hover/dot:bg-[#94A3B8]"
                    }`}
                    style={
                      index === i
                        ? { backgroundColor: s.color }
                        : undefined
                    }
                  />
                </button>
              ))}
            </div>

            {/* Next button */}
            <button
              type="button"
              onClick={next}
              aria-label="Next solution"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#0E84B8] hover:bg-[#0E84B8] hover:text-white hover:border-[#0E84B8] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Play / Pause toggle */}
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
              className="ml-2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#0E84B8] hover:bg-[#0E84B8] hover:text-white hover:border-[#0E84B8] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {paused ? (
                <Play className="w-4 h-4" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Autoplay progress hint */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#3C4D57]/60">
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full ${
                paused ? "bg-[#CBD5E1]" : "bg-[#8CC63F] animate-pulse"
              }`}
            />
            <span>
              {paused
                ? "Autoplay paused"
                : `Auto-advances every ${hovered ? 6 : AUTOPLAY_MS / 1000}s${
                    hovered ? " (hover pause)" : ""
                  }`}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- Solution Card ----------------------------- */

function SolutionCard({
  solution,
  isAnchor,
}: {
  solution: Solution;
  isAnchor: boolean;
}) {
  const handleAnchorClick = () => {
    if (!isAnchor) return;
    document
      .querySelector(solution.href)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article
      className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all duration-300 flex flex-col sm:flex-row min-h-[360px] sm:min-h-[400px] lg:min-h-[460px]"
      style={{
        boxShadow: "0 4px 12px rgba(20, 42, 51, 0.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 20px 48px ${solution.color}22, 0 8px 16px rgba(20, 42, 51, 0.08)`;
        e.currentTarget.style.borderColor = `${solution.color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(20, 42, 51, 0.05)";
        e.currentTarget.style.borderColor = "#E2E8F0";
      }}
    >
      {/* Left: Media (photo) — 45% on desktop, full width on mobile */}
      <div className="relative shrink-0 overflow-hidden bg-[#E2E8F0] w-full sm:w-[45%] h-[220px] sm:h-auto">
        {/* Color accent stripe on the left edge of the photo */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 z-10"
          style={{ backgroundColor: solution.color }}
        />
        <picture>
          <source
            srcSet={`${solution.imageBase}.avif`}
            type="image/avif"
          />
          <source
            srcSet={`${solution.imageBase}.webp`}
            type="image/webp"
          />
          {/* WebP fallback (AVIF served first via <source>) */}
          <img
            src={`${solution.imageBase}.webp`}
            alt={solution.alt}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </picture>


        {/* Number badge overlay (top-right of photo) */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center">
          <span
            className="text-sm font-black"
            style={{ color: solution.color }}
          >
            {solution.number}
          </span>
        </div>
      </div>

      {/* Right: Content — 55% on desktop */}
      <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-w-0">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#142A33] group-hover:text-[#0E84B8] transition-colors duration-300 leading-snug">
          {solution.title}
        </h3>

        {/* Color underline */}
        <div
          className="h-1 w-16 rounded-full mt-3 mb-4 transition-all duration-300 group-hover:w-24"
          style={{ backgroundColor: solution.color }}
        />

        {/* Description */}
        <p className="text-[#3C4D57] text-sm sm:text-base leading-relaxed">
          {solution.description}
        </p>

        {/* Features */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
          {solution.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-[#3C4D57]"
            >
              <CheckCircle
                className="w-4 h-4 shrink-0"
                style={{ color: solution.color }}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Learn more link */}
        <div className="mt-6">
          {isAnchor ? (
            <button
              onClick={handleAnchorClick}
              className="inline-flex items-center text-sm font-semibold transition-all duration-200 hover:gap-2 group/btn"
              style={{ color: solution.color }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </button>
          ) : (
            <Link
              href={solution.href}
              className="inline-flex items-center text-sm font-semibold transition-all duration-200 hover:gap-2 group/btn"
              style={{ color: solution.color }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
