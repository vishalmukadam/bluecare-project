"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MessageCircle, ArrowRight, Shield, Clock, Award, Droplets, CheckCircle, Star, BadgeCheck, ClipboardList, Zap } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const trustBadges = [
  { icon: Shield, text: "ISO 9001:2015" },
  { icon: Clock, text: "24/7 Support" },
  { icon: Award, text: "100+ Projects" },
  { icon: BadgeCheck, text: "GMP Certified" },
];

const statsData = [
  { icon: CheckCircle, value: 100, suffix: "+", label: "Projects Completed" },
  { icon: Star, value: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: Clock, value: 24, suffix: "/7", label: "Expert Support" },
];

function AnimatedStatCounter({ target, suffix }: { target: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionVal, target, {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
    });

    return () => controls.stop();
  }, [isInView, motionVal, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-20 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Animated gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-20 gradient-animate-border" />
      <style jsx>{`
        .gradient-animate-border {
          background: linear-gradient(90deg, #20B0E0, #8CC63F, #0E84B8, #E0B040, #20B0E0);
          background-size: 200% 100%;
          animation: gradientMove 3s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E84B8] via-[#20B0E0] to-[#8CC63F]" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      {/* Animated wave decoration at top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      {/* Floating decorative bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${30 + i * 20}px`,
              height: `${30 + i * 20}px`,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Decorative water drops */}
      <div className="absolute top-12 left-[10%] opacity-10">
        <Droplets className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-12 right-[10%] opacity-10">
        <Droplets className="w-20 h-20 text-white" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Animated Statistics Counter Row */}
          <motion.div
            custom={-0.5}
            variants={fadeUpVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10"
          >
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-5 py-3 backdrop-blur-sm"
              >
                <stat.icon className="w-5 h-5 text-white/90 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-bold text-lg">
                    <AnimatedStatCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-white/70 text-xs ml-1.5">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">
              Expert Consultation
            </span>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
          >
            Plant Issues Slowing You Down?
            <br />
            <span className="text-[#F8FAFE]/90">We Can Help.</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Connect with our specialists for fast diagnostics and proven
            solutions that minimize downtime and improve plant performance.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center bg-white text-[#0E84B8] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:bg-[#F8FAFE] hover:scale-[1.02] h-auto group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Let&apos;s Talk
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#solutions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm h-auto group"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Glassmorphism CTA Cards */}
          <motion.div
            custom={3.5}
            variants={fadeUpVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto"
          >
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm text-left hover:bg-white/15 transition-colors duration-200 group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                  <ClipboardList className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Free Plant Audit</h4>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Get a complimentary assessment of your water treatment needs
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm text-left hover:bg-white/15 transition-colors duration-200 group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Rapid Response</h4>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Emergency support within 4 hours for critical plant issues
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-default"
              >
                <badge.icon className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 0V10C240 40 480 40 720 10C960 -20 1200 -20 1440 10V40H0V0Z"
            fill="white"
            fillOpacity="0.06"
          />
        </svg>
      </div>
    </section>
  );
}
