"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, BadgeCheck, FileCheck, Star, Globe } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent service delivery and continuous improvement.",
    color: "#20B0E0",
  },
  {
    icon: BadgeCheck,
    title: "ISO 14001:2015",
    description: "Environmental Management System certification demonstrating our commitment to environmental stewardship.",
    color: "#8CC63F",
  },
  {
    icon: FileCheck,
    title: "CPCB Compliance",
    description: "All treatment systems designed to meet Central Pollution Control Board discharge norms and standards.",
    color: "#0E84B8",
  },
  {
    icon: Award,
    title: "GMP Certified",
    description: "Good Manufacturing Practice compliance for pharmaceutical-grade water treatment systems.",
    color: "#E0B040",
  },
  {
    icon: Globe,
    title: "OEM Authorizations",
    description: "Authorized partnerships with leading global OEMs for best-in-class technology integration.",
    color: "#20B0E0",
  },
  {
    icon: Star,
    title: "Industry Recognition",
    description: "Recognized by industry bodies for excellence in water treatment innovation and sustainability.",
    color: "#8CC63F",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 lg:py-28 relative overflow-hidden" ref={ref} style={{ background: "linear-gradient(135deg, #A8D85F 0%, #8CC63F 50%, #7AB530 100%)" }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="certGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M50 0L0 0 0 50" fill="none" stroke="#20B0E0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#certGrid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#20B0E0]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-white/30 border border-white/50 rounded-full px-5 py-2 mb-4 backdrop-blur-sm"
          >
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold drop-shadow-sm">
              Certifications & Compliance
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-sm"
          >
            Certified <span className="text-[#142A33]">Excellence</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-white/90 text-lg leading-relaxed drop-shadow-sm"
          >
            Our commitment to quality, environmental responsibility, and industry
            standards is backed by internationally recognized certifications and
            compliance frameworks.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              custom={i + 3}
              variants={fadeUpVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/85 border border-white/70 rounded-xl p-6 hover:bg-white transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
            >
              {/* Accent line top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                style={{ backgroundColor: cert.color }}
              />

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${cert.color}20` }}
              >
                <cert.icon className="w-7 h-7" style={{ color: cert.color }} />
              </div>
              <h3 className="text-[#142A33] font-bold text-lg mb-2">
                {cert.title}
              </h3>
              <p className="text-[#3C4D57] text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Verified badge */}
              <div className="mt-4 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cert.color }} />
                <span className="text-xs font-medium" style={{ color: cert.color }}>Verified</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 text-center"
        >
          <motion.div
            custom={9}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-6 bg-white/85 border border-white/70 rounded-full px-8 py-4 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#E0B040]" />
              <span className="text-[#142A33] text-sm font-medium">ISO Certified</span>
            </div>
            <div className="w-px h-5 bg-[#3C4D57]/20" />
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-[#8CC63F]" />
              <span className="text-[#142A33] text-sm font-medium">CPCB Compliant</span>
            </div>
            <div className="w-px h-5 bg-[#3C4D57]/20 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#20B0E0]" />
              <span className="text-[#142A33] text-sm font-medium">GMP Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
