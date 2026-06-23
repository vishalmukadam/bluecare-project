"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Shield,
  Leaf,
  Award,
  Users,
  Target,
  Eye,
  CheckCircle,
  Droplets,
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
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
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

const highlights = [
  {
    icon: Shield,
    title: "ISO 9001:2015 Certified",
    description: "Quality management systems ensuring consistent, reliable service delivery",
    color: "#20B0E0",
    stat: { target: 9001, suffix: "", label: "ISO Standard" },
  },
  {
    icon: Leaf,
    title: "Eco-Focused",
    description: "Pollution prevention and resource recovery at the core of every solution",
    color: "#8CC63F",
    stat: { target: 40, suffix: "%", label: "Resource Recovery" },
  },
  {
    icon: Award,
    title: "OEM Partnerships",
    description: "Strong OEM partnerships enabling best-in-class technology integration",
    color: "#0E84B8",
    stat: { target: 25, suffix: "+", label: "Global Partners" },
  },
  {
    icon: Users,
    title: "100+ Professionals",
    description: "Experienced team dedicated to sustainable water management solutions",
    color: "#E0B040",
    stat: { target: 100, suffix: "+", label: "Team Members" },
  },
];

const visionMission = [
  {
    icon: Target,
    label: "Our Mission",
    text: "To deliver sustainable, innovative, and cost-effective water and wastewater treatment solutions that protect the environment while enabling industrial growth.",
    color: "#20B0E0",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: "To be India's most trusted partner in water sustainability, leading the transition toward zero liquid discharge and circular water economy across all industries.",
    color: "#8CC63F",
  },
];

const capabilities = [
  "End-to-end project delivery",
  "Custom-engineered solutions",
  "24/7 after-sales support",
  "Pan-India service network",
];

const illustrationStats = [
  { target: 100, suffix: "+", label: "Projects", color: "#20B0E0" },
  { target: 15, suffix: "+", label: "Years", color: "#8CC63F" },
  { target: 98, suffix: "%", label: "Satisfaction", color: "#E0B040" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
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
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E84B8]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Decorative corner accent */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-[0.03]">
        <svg viewBox="0 0 128 128" fill="none">
          <path d="M0 0h128v128H0V0zm16 16v96h96V16H16z" fill="#20B0E0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section badge with Droplets icon */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-5 py-2 mb-6"
            >
              <Droplets className="w-4 h-4 text-[#20B0E0]" />
              <span className="text-[#0E84B8] text-sm font-semibold">
                About BlueCare
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              <span className="text-[#142A33]">Your Trusted Partner in </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #20B0E0 0%, #0E84B8 40%, #8CC63F 100%)",
                }}
              >
                Sustainable Wastewater
              </span>
              <span className="text-[#142A33]"> and Environmental Solutions</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUpVariants}
              className="text-[#3C4D57] text-lg leading-relaxed mb-6"
            >
              Bluecare Systems Pvt. Ltd. delivers sustainable and innovative
              wastewater and environmental solutions with an experienced team. We
              focus on pollution prevention, resource recovery, waste treatment,
              and efficient water management.
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUpVariants}
              className="text-[#3C4D57] leading-relaxed mb-8"
            >
              Backed by strong OEM partnerships and ISO 9001:2015 certification,
              we provide reliable, low-maintenance, cost-effective systems and
              build long-term relationships through quality products and tailored
              services.
            </motion.p>

            {/* Capabilities List */}
            <motion.div
              custom={3.5}
              variants={fadeUpVariants}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-5 h-5 bg-[#20B0E0]/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#20B0E0]/20 transition-colors duration-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#20B0E0]" />
                  </div>
                  <span className="text-[#3C4D57] text-sm font-medium">{cap}</span>
                </div>
              ))}
            </motion.div>

            {/* Vision & Mission with accent borders */}
            <div className="space-y-4 mb-8">
              {visionMission.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    custom={i + 4}
                    variants={fadeUpVariants}
                    whileHover={{ x: 4 }}
                    className="relative flex items-start gap-4 bg-gradient-to-r from-[#F8FAFE] to-white border border-[#E2E8F0] rounded-xl p-5 hover:shadow-md transition-all duration-300 group overflow-hidden"
                  >
                    {/* Left accent border */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-l-xl"
                      style={{ backgroundColor: item.color }}
                    />

                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm mb-1 transition-colors duration-300"
                        style={{ color: item.color }}
                      >
                        {item.label}
                      </p>
                      <p className="text-[#3C4D57] text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              custom={6}
              variants={fadeUpVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#solutions")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-7 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0E84B8]/20 group"
              >
                Explore Solutions
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center border-2 border-[#20B0E0] text-[#20B0E0] hover:bg-[#20B0E0]/10 px-7 py-3.5 rounded-lg font-medium transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Highlight Cards with visual illustration */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#20B0E0]/5 via-transparent to-[#8CC63F]/5 rounded-3xl blur-xl" />

            {/* Visual illustration area */}
            <motion.div
              custom={1.5}
              variants={fadeUpVariants}
              className="relative green-cta-card rounded-2xl p-8 mb-6 overflow-hidden shadow-xl shadow-[#8CC63F]/25"
            >
              {/* Background pattern using radial-gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  opacity: 0.05,
                }}
              />

              <div className="relative z-10 flex items-center justify-center py-8">
                {/* Water treatment illustration - stylized */}
                <div className="relative">
                  {/* Central water drop */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="w-28 h-28 bg-gradient-to-br from-[#20B0E0] to-[#0E84B8] rounded-full flex items-center justify-center shadow-lg shadow-[#20B0E0]/30"
                  >
                    <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C12 2 5 11 5 15.5C5 19.09 8.13 22 12 22C15.87 22 19 19.09 19 15.5C19 11 12 2 12 2Z" />
                    </svg>
                  </motion.div>
                  {/* Orbiting icons with staggered reveal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-[#8CC63F] rounded-full flex items-center justify-center shadow-md animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <Leaf className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-4 -right-6 w-10 h-10 bg-[#0E84B8] rounded-full flex items-center justify-center shadow-md animate-bounce"
                    style={{ animationDuration: "4s", animationDelay: "1s" }}
                  >
                    <Shield className="w-4 h-4 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
                    className="absolute -bottom-3 -left-6 w-10 h-10 bg-[#20B0E0] rounded-full flex items-center justify-center shadow-md animate-bounce"
                    style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
                  >
                    <Award className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Stats row with animated counters */}
              <div className="relative z-10 grid grid-cols-3 gap-4 mt-4">
                {illustrationStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    custom={i + 5}
                    variants={revealVariants}
                    className="text-center group cursor-default"
                  >
                    <div className="text-2xl font-bold text-white drop-shadow-sm">
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        inView={isInView}
                        delay={i * 0.2}
                      />
                    </div>
                    <div className="text-white/85 text-xs mt-1 drop-shadow-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    custom={i + 2}
                    variants={fadeUpVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: `0 12px 40px ${item.color}18`,
                    }}
                    className="bg-[#F8FAFE] border border-[#E2E8F0] rounded-xl p-5 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Top accent line — scales from left on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Left border accent on hover */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-bl-xl"
                      style={{ backgroundColor: item.color, opacity: 0.4 }}
                    />

                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                      style={{ backgroundColor: `${item.color}12` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-[#142A33] font-semibold text-base mb-1.5 group-hover:text-[#0E84B8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#3C4D57] text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Stat counter at bottom of card */}
                    <div className="mt-3 pt-3 border-t border-[#E2E8F0]/60">
                      <span
                        className="text-lg font-bold transition-colors duration-300"
                        style={{ color: item.color }}
                      >
                        <AnimatedCounter
                          target={item.stat.target}
                          suffix={item.stat.suffix}
                          inView={isInView}
                          delay={i * 0.15 + 0.5}
                        />
                      </span>
                      <span className="text-[#3C4D57] text-xs ml-1.5">
                        {item.stat.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
