"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, ArrowRight, Users } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  yearsLabel: string;
  quote: string;
  initials: string;
  gradient: string;
  hoverGradient: string;
  accentColor: string;
  accentShadow: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rajesh Kumar",
    role: "Founder & Managing Director",
    experience: "20+",
    yearsLabel: "20+ Years",
    quote:
      "Clean water is not just business—it's our responsibility to future generations.",
    initials: "RK",
    gradient: "linear-gradient(135deg, #20B0E0, #0E84B8)",
    hoverGradient: "linear-gradient(135deg, #3BC4F0, #1A9ED0)",
    accentColor: "#20B0E0",
    accentShadow: "0 12px 32px rgba(32,176,224,0.18)",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    experience: "15+",
    yearsLabel: "15+ Years",
    quote:
      "Innovation in water technology is the key to sustainable industrial growth.",
    initials: "PS",
    gradient: "linear-gradient(135deg, #8CC63F, #5A9A20)",
    hoverGradient: "linear-gradient(135deg, #A2D860, #72B630)",
    accentColor: "#8CC63F",
    accentShadow: "0 12px 32px rgba(140,198,63,0.18)",
  },
  {
    name: "Amit Patel",
    role: "VP Operations",
    experience: "18+",
    yearsLabel: "18+ Years",
    quote:
      "Every project we deliver is a promise kept to our clients and the environment.",
    initials: "AP",
    gradient: "linear-gradient(135deg, #E0B040, #C8960A)",
    hoverGradient: "linear-gradient(135deg, #F0C860, #DAA620)",
    accentColor: "#E0B040",
    accentShadow: "0 12px 32px rgba(224,176,64,0.18)",
  },
  {
    name: "Dr. Meera Iyer",
    role: "Head of R&D",
    experience: "12+",
    yearsLabel: "12+ Years",
    quote:
      "Research-driven solutions ensure our clients stay ahead of compliance and efficiency goals.",
    initials: "MI",
    gradient: "linear-gradient(135deg, #0E84B8, #8CC63F)",
    hoverGradient: "linear-gradient(135deg, #1A9ED0, #A2D860)",
    accentColor: "#0E84B8",
    accentShadow: "0 12px 32px rgba(14,132,184,0.18)",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
      className="bg-white py-20 lg:py-28 relative overflow-hidden"
      ref={ref}
    >
      {/* ── Decorative background ──────────────────────────── */}
      {/* Dot pattern: radial-gradient #20B0E0 at 3% opacity, 24px spacing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />
      {/* Blurred blue circle top-right (384px, 5% opacity) */}
      <div className="absolute -top-48 -right-48 w-[384px] h-[384px] bg-[#20B0E0]/5 rounded-full blur-3xl pointer-events-none" />
      {/* Blurred green circle bottom-left (384px, 5% opacity) */}
      <div className="absolute -bottom-48 -left-48 w-[384px] h-[384px] bg-[#8CC63F]/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Content ─────────────────────────────────────────── */}
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
            className="inline-flex items-center gap-2 bg-[#E0B040]/10 rounded-full px-5 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-[#E0B040] rounded-full" />
            <span className="text-[#E0B040] text-sm font-semibold">
              Our Team
            </span>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] leading-tight mb-6"
          >
            Meet the{" "}
            <span className="text-[#E0B040]">Experts</span> Behind BlueCare
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Our experienced leadership team brings decades of expertise in water
            treatment, process engineering, and environmental science — driving
            innovation and excellence in every project we deliver.
          </motion.p>
        </motion.div>

        {/* ── Team members grid (2x2 desktop, 1-col mobile) ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i + 3}
              variants={fadeUpVariants}
              whileHover={{
                y: -8,
                boxShadow: member.accentShadow,
              }}
              className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-transparent overflow-hidden"
            >
              {/* Top accent line (3px) with per-member accent color */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: member.accentColor }}
              />

              <div className="flex items-start gap-5">
                {/* Avatar circle with gradient initials */}
                <div className="shrink-0 relative">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                    style={{ background: member.gradient }}
                  >
                    {member.initials}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#142A33] mb-1 group-hover:text-[#0E84B8] transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-[#0E84B8] font-medium text-sm mb-3">
                    {member.role}
                  </p>

                  {/* Experience badge */}
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1 mb-4"
                    style={{
                      backgroundColor: `${member.accentColor}12`,
                      color: member.accentColor,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: member.accentColor }}
                    />
                    {member.yearsLabel}
                  </span>

                  {/* Quote */}
                  <p className="text-[#3C4D57] text-sm italic leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* LinkedIn icon button */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                <button
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                  className="w-9 h-9 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#3C4D57] hover:bg-[#0E84B8] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom "Join Our Team" CTA strip ──────────────── */}
        <motion.div
          custom={8}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 relative rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #8CC63F 0%, #5A9024 40%, #0E84B8 100%)",
          }}
        >
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.06,
            }}
          />
          {/* Blurred accent circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#8CC63F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#20B0E0]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 lg:px-10 lg:py-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#8CC63F]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Join Our Team
                </h3>
                <p className="text-[#8BA3B0] text-sm">
                  Be part of a team shaping the future of water treatment.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#8CC63F] hover:bg-[#7AB530] text-[#142A33] font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shrink-0"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
