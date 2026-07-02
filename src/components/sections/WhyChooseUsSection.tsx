"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  Cog,
  TrendingUp,
  MapPin,
  Shield,
  Leaf,
  CheckCircle,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const revealVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ── Animated counter (framer-motion) ─────────────────────── */
function AnimatedCounter({
  target,
  suffix,
  inView,
  delay,
}: {
  target: number;
  suffix: string;
  inView: boolean;
  delay: number;
}) {
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v: number) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, target, {
        duration: 2,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      });
      return controls.stop;
    }
  }, [inView, target, delay, motionVal]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v: number) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ── Data ─────────────────────────────────────────────────── */
const miniStats = [
  {
    target: 100,
    suffix: "+",
    label: "Projects",
    color: "#20B0E0",
  },
  {
    target: 15,
    suffix: "+",
    label: "Years",
    color: "#8CC63F",
  },
  {
    target: 98,
    suffix: "%",
    label: "Satisfaction",
    color: "#E0B040",
  },
  {
    target: 24,
    suffix: "/7",
    label: "Support",
    color: "#0E84B8",
  },
];

const rightCards = [
  {
    icon: Cog,
    title: "Custom-Engineered Solutions",
    description:
      "Every project starts with a deep-dive into your water chemistry, flow rates, and compliance needs — delivering tailored designs that outperform off-the-shelf alternatives.",
    color: "#20B0E0",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "100+ successful projects across 8 industries, with consistent on-time delivery and measurable performance improvements that clients can verify.",
    color: "#0E84B8",
  },
  {
    icon: MapPin,
    title: "Global & Domestic Presence",
    description:
      "From major international hubs like Abu Dhabi to India's key industrial regions, our wide network ensures rapid support and seamless project delivery.",
    color: "#8CC63F",
    locations: ["Abu Dhabi", "Mumbai", "Nagpur", "Rajasthan", "Bangalore", "Hyderabad"],
  },
];

const trustItems = [
  {
    icon: Shield,
    label: "ISO 9001:2015",
    color: "#E0B040",
  },
  {
    icon: Leaf,
    label: "ISO 14001:2015",
    color: "#8CC63F",
  },
  {
    icon: CheckCircle,
    label: "CPCB Compliant",
    color: "#20B0E0",
  },
  {
    icon: Headphones,
    label: "24/7 Support",
    color: "#0E84B8",
  },
];

/* ── Animated Water Drop SVG ──────────────────────────────── */
function AnimatedWaterDrop() {
  return (
    <motion.svg
      viewBox="0 0 120 160"
      className="w-32 h-40 lg:w-40 lg:h-52"
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Outer glow */}
      <defs>
        <radialGradient id="dropGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#20B0E0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#20B0E0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dropFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#20B0E0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0E84B8" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Glow circle */}
      <circle cx="60" cy="70" r="58" fill="url(#dropGlow)" />
      {/* Main drop */}
      <motion.path
        d="M60 8 C60 8 18 75 18 100 C18 123 37 142 60 142 C83 142 102 123 102 100 C102 75 60 8 60 8 Z"
        fill="url(#dropFill)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Shine */}
      <ellipse cx="45" cy="72" rx="12" ry="18" fill="white" opacity="0.25" />
      {/* Ripple rings */}
      <motion.ellipse
        cx="60"
        cy="142"
        rx="30"
        ry="6"
        fill="none"
        stroke="#20B0E0"
        strokeWidth="1"
        opacity="0.4"
        animate={{
          rx: [30, 50],
          ry: [6, 10],
          opacity: [0.4, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.ellipse
        cx="60"
        cy="142"
        rx="20"
        ry="4"
        fill="none"
        stroke="#20B0E0"
        strokeWidth="1"
        opacity="0.3"
        animate={{
          rx: [20, 40],
          ry: [4, 8],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
    </motion.svg>
  );
}

/* ── Main Component ───────────────────────────────────────── */
export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-choose-us"
      className="bg-white py-20 lg:py-28 relative overflow-hidden"
      ref={ref}
    >
      {/* ── Decorative background elements ──────────────── */}
      {/* Subtle dot pattern overlay using radial-gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />

      {/* Blurred blue circle top-left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#20B0E0]/8 rounded-full blur-3xl pointer-events-none" />
      {/* Blurred green circle bottom-right */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#8CC63F]/8 rounded-full blur-3xl pointer-events-none" />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Section badge with icon */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-5 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#20B0E0]" />
            <span className="text-[#0E84B8] text-sm font-semibold">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            <span className="text-[#142A33]">Your Trusted Partner for </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #20B0E0 0%, #0E84B8 40%, #8CC63F 100%)",
              }}
            >
              Sustainable Water Solutions
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            With over 15 years of expertise, BlueCare delivers comprehensive
            water and wastewater treatment solutions engineered for performance,
            compliance, and sustainability.
          </motion.p>
        </motion.div>

        {/* ── 2-Column layout ──────────────────────────── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12"
        >
          {/* LEFT: Large feature card */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            className="relative rounded-2xl overflow-hidden green-cta-card p-8 lg:p-10 flex flex-col justify-between min-h-[520px] shadow-xl shadow-[#8CC63F]/25"
          >
            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                opacity: 0.05,
              }}
            />

            {/* Glass morphism overlay */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[1px] pointer-events-none" />

            <div className="relative z-10 flex-1 flex flex-col">
              {/* Animated water drop */}
              <div className="flex justify-center mb-8">
                <AnimatedWaterDrop />
              </div>

              {/* Headline */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-3">
                End-to-End Water Solutions
              </h3>
              <p className="text-[#8BA3B0] text-center leading-relaxed mb-8 max-w-md mx-auto">
                From initial consultation to plant commissioning and beyond —
                BlueCare provides a single source of accountability for your
                entire water treatment lifecycle.
              </p>

              {/* Mini stat badges with animated counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {miniStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    custom={i + 4}
                    variants={revealVariants}
                    className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center group hover:bg-white/[0.1] transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="4"
                          fill={stat.color}
                          opacity="0.7"
                        />
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-white">
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        inView={isInView}
                        delay={i * 0.15}
                      />
                    </div>
                    <div className="text-[#8BA3B0] text-xs mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3 smaller cards stacked */}
          <div className="flex flex-col gap-6">
            {rightCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  custom={i + 4}
                  variants={fadeUpVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: `0 12px 40px ${card.color}18`,
                  }}
                  className="relative bg-[#F8FAFE] border border-[#E2E8F0] rounded-2xl p-6 lg:p-7 transition-all duration-300 group overflow-hidden hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Top accent line (3px, colored) — scales from left on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: card.color }}
                  />

                  {/* Subtle left border accent on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-bl-2xl"
                    style={{ backgroundColor: card.color, opacity: 0.4 }}
                  />

                  <div className="flex items-start gap-5">
                    {/* Icon in colored rounded square */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                      style={{ backgroundColor: `${card.color}15` }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: card.color }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-lg font-semibold text-[#142A33] mb-1.5 group-hover:text-[#0E84B8] transition-colors duration-300"
                      >
                        {card.title}
                      </h4>
                      <p className="text-[#3C4D57] text-sm leading-relaxed mb-3">
                        {card.description}
                      </p>

                      {"locations" in card && card.locations && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {card.locations.map((loc) => (
                            <span
                              key={loc}
                              className="text-[11px] px-2.5 py-0.5 bg-[#8CC63F]/10 text-[#5A9024] rounded-full font-semibold"
                            >
                              {loc}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Learn more → slide-in link */}
                      <div className="overflow-hidden">
                        <span
                          className="inline-flex items-center text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ color: card.color }}
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Bottom trust strip ────────────────────────── */}
        <motion.div
          custom={8}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="rounded-xl p-4 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #8CC63F 0%, #5A9024 50%, #8CC63F 100%)",
          }}
        >
          {/* Dot pattern inside trust strip */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              opacity: 0.04,
            }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  custom={i + 9}
                  variants={revealVariants}
                  className="flex items-center"
                >
                  <div className="flex items-center gap-3 px-6 py-2 group cursor-default">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon
                        className="w-5 h-5 transition-transform duration-300"
                        style={{ color: item.color }}
                      />
                    </div>
                    <span className="text-white font-semibold text-sm whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                  {/* Vertical divider (not after last) */}
                  {i < trustItems.length - 1 && (
                    <div className="hidden sm:block h-8 w-px bg-white/15" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
