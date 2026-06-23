"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  accentColor: string;
}

const stats: StatItem[] = [
  {
    target: 100,
    suffix: "+",
    label: "Businesses Served",
    accentColor: "#20B0E0", // brand-blue
  },
  {
    target: 100,
    suffix: "+",
    label: "Million Liters per Day\nWaste Water Treated",
    accentColor: "#0E84B8", // action-blue
  },
  {
    target: 100,
    suffix: "+",
    label: "Repeated Orders",
    accentColor: "#8CC63F", // brand-green
  },
  {
    target: 100,
    suffix: "+",
    label: "Professionals",
    accentColor: "#E0B040", // gold
  },
  {
    target: 2500,
    suffix: "",
    label: "SQ.M Manufacturing Facility",
    accentColor: "#26B49A", // Teal matching the reference image
  },
];

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

export default function StatsCounterStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative w-full bg-white border-y border-slate-100 overflow-hidden"
    >
      {/* Subtle dot pattern overlay matching the reference image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          opacity: 0.6,
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stat items grid — 5 columns separated by thin vertical lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 py-12 lg:py-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center px-4 py-8 lg:py-4 transition-transform duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Subtle divider between cards (right border on desktop) */}
              {index !== stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-slate-200 pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* Number — large, bold, solid color */}
              <div
                className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-none tracking-tight mb-4"
                style={{ color: stat.accentColor }}
              >
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  inView={inView}
                  delay={0.1 + index * 0.05}
                />
              </div>

              {/* Accent Underline — short, matching color */}
              <div
                className="w-8 h-[2.5px] rounded-full mb-4"
                style={{ backgroundColor: stat.accentColor }}
              />

              {/* Label — muted text, whitespace-pre-line to respect line breaks */}
              <p className="text-xs sm:text-sm font-semibold text-[#576370] whitespace-pre-line leading-relaxed max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
