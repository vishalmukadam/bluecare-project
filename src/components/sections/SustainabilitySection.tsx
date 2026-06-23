"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Leaf, Globe, TrendingUp, Heart, TreePine, Droplets, Recycle, Zap, BarChart3, ArrowRight } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const commitments = [
  {
    icon: Leaf,
    title: "Resource Recovery",
    description: "Recovering valuable resources from wastewater streams, turning waste into wealth while protecting the environment.",
    accent: "#8CC63F",
  },
  {
    icon: Globe,
    title: "Carbon Footprint Reduction",
    description: "Energy-efficient treatment processes designed to minimize carbon emissions and environmental impact.",
    accent: "#20B0E0",
  },
  {
    icon: TrendingUp,
    title: "Circular Economy",
    description: "Promoting circular water economy by enabling 100% water reuse and zero liquid discharge solutions.",
    accent: "#0E84B8",
  },
  {
    icon: Heart,
    title: "Community Health",
    description: "Protecting public health through safe water discharge and treatment of harmful contaminants.",
    accent: "#E0B040",
  },
  {
    icon: TreePine,
    title: "Ecosystem Protection",
    description: "Preventing water pollution to safeguard aquatic ecosystems and biodiversity for future generations.",
    accent: "#8CC63F",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Advanced recycling and reuse systems that significantly reduce fresh water consumption across industries.",
    accent: "#20B0E0",
  },
];

const impactStats = [
  { icon: Recycle, value: 100, suffix: "+", label: "MLD Water Recycled Daily", color: "#8CC63F" },
  { icon: Zap, value: 40, suffix: "%", label: "Energy Savings vs Conventional", color: "#20B0E0" },
  { icon: BarChart3, value: 100, suffix: "%", label: "Water Reuse in ZLD Plants", color: "#0E84B8" },
];

function ImpactCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

function CommitmentCard({ item, index }: { item: typeof commitments[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index + 6}
      variants={fadeUpVariants}
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: `${item.accent}26`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white/85 border border-white/70 rounded-xl p-6 hover:bg-white transition-all duration-300 group overflow-hidden backdrop-blur-sm"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ backgroundColor: item.accent }}
      />

      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top center, ${item.accent}14 0%, transparent 70%)`,
        }}
      />

      {/* Icon container */}
      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
          style={{
            backgroundColor: hovered ? item.accent : `${item.accent}20`,
          }}
        >
          <item.icon
            className="w-6 h-6 transition-colors duration-300"
            style={{ color: hovered ? "#FFFFFF" : item.accent }}
          />
        </div>
      </div>

      <h3 className="relative z-10 text-[#142A33] font-semibold text-lg mb-2">
        {item.title}
      </h3>
      <p className="relative z-10 text-[#3C4D57] text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function SustainabilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sustainability" className="py-20 lg:py-28 relative overflow-hidden" ref={ref} style={{ background: "linear-gradient(135deg, #7AB530 0%, #8CC63F 50%, #A8D85F 100%)" }}>
      {/* Water drop pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="drops" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20,5 C20,5 12,18 12,24 C12,28.4 15.6,32 20,32 C24.4,32 28,28.4 28,24 C28,18 20,5 20,5 Z" fill="#8CC63F" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#drops)" />
        </svg>
      </div>

      {/* Animated wave SVG at top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full h-12 md:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C120 20 240 60 360 40C480 20 600 60 720 40C840 20 960 60 1080 40C1200 20 1320 60 1440 40V80H0V40Z"
            fill="#8CC63F"
            fillOpacity="0.08"
            className="wave-path"
          />
          <path
            d="M0 50C160 30 320 70 480 50C640 30 800 70 960 50C1120 30 1280 70 1440 50V80H0V50Z"
            fill="#20B0E0"
            fillOpacity="0.05"
            className="wave-path-delayed"
          />
        </svg>
        <style jsx>{`
          .wave-path {
            animation: waveMove 8s ease-in-out infinite;
          }
          .wave-path-delayed {
            animation: waveMove 8s ease-in-out infinite;
            animation-delay: -4s;
          }
          @keyframes waveMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(30px); }
          }
        `}</style>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#20B0E0]/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-white/30 border border-white/50 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm"
          >
            <Leaf className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold drop-shadow-sm">
              Sustainability Commitment
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-sm"
          >
            Building a{" "}
            <span className="text-[#142A33]">Greener Future</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-white/90 text-lg leading-relaxed drop-shadow-sm"
          >
            At BlueCare, sustainability isn&apos;t just a goal—it&apos;s our foundation. 
            Every solution we design prioritizes environmental stewardship, resource
            conservation, and long-term ecological balance.
          </motion.p>
        </motion.div>

        {/* Impact Stats Bar */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16"
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i + 2.5}
              variants={fadeUpVariants}
              className="bg-white/85 border border-white/70 rounded-xl p-6 text-center group hover:bg-white transition-all duration-300 backdrop-blur-sm"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#142A33] mb-1">
                <ImpactCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#3C4D57] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitment Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {commitments.map((item, i) => (
            <CommitmentCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
