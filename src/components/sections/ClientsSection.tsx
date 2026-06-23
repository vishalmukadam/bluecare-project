"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ────────────────────────────────────────────
   Client logo data — real company logos
   ──────────────────────────────────────────── */
type ClientLogo = {
  name: string;
  sector: string;
  logo: string;
  /** logo aspect hint so layout is stable while loading */
  aspect?: "wide" | "square";
  /** set true for white/light-coloured logos that need a tinted backdrop to be visible */
  lightLogo?: boolean;
  /** scale multiplier for the logo image (1 = default) */
  logoScale?: number;
};

const clientLogos: ClientLogo[] = [
  { name: "Balaji Amines", sector: "Chemical", logo: "/clients/balaji.svg", aspect: "wide" },
  { name: "Roquette", sector: "Food & Beverage", logo: "/clients/roquette.avif", aspect: "wide" },
  { name: "Bosch", sector: "Power & Energy", logo: "/clients/bosch.png", aspect: "wide", logoScale: 1.4 },
  { name: "Cipla", sector: "Pharmaceutical", logo: "/clients/cipla.avif", aspect: "wide" },
  { name: "Dr. Reddy's", sector: "Pharmaceutical", logo: "/clients/dr-reddys.webp", aspect: "wide" },
  { name: "AB Mauri", sector: "Food & Beverage", logo: "/clients/ab-mauri.avif", aspect: "wide" },
  { name: "Jayshree", sector: "Chemical", logo: "/clients/jayshree.webp", aspect: "wide" },
  { name: "JK Tyre", sector: "Petrochemical", logo: "/clients/jk-tyres.png", aspect: "wide" },
  { name: "Mylan", sector: "Pharmaceutical", logo: "/clients/mylan.avif", aspect: "wide" },
  { name: "Goodrich", sector: "Petrochemical", logo: "/clients/goodrich.avif", aspect: "wide" },
  { name: "Teva", sector: "Pharmaceutical", logo: "/clients/teva-logo.svg", aspect: "wide", logoScale: 0.65 },
  { name: "Virchows", sector: "Pharmaceutical", logo: "/clients/virchows.png", aspect: "wide", logoScale: 0.65 },
  { name: "Hikal", sector: "Pharmaceutical", logo: "/clients/hikal.avif", aspect: "wide" },
  { name: "Ratan", sector: "Chemical", logo: "/clients/ratan.png", aspect: "wide", logoScale: 1.4 },
  { name: "Bain", sector: "Power & Energy", logo: "/clients/bain.webp", aspect: "wide", lightLogo: true },
];

/* Reversed copy of clientLogos for the second marquee row (right to left) */
const reversedLogos: ClientLogo[] = [...clientLogos].reverse();

/* ────────────────────────────────────────────
   Sector colour map (for the small tag pill)
   ──────────────────────────────────────────── */
const sectorColor: Record<string, string> = {
  Pharmaceutical: "#20B0E0",
  Chemical: "#0E84B8",
  "Food & Beverage": "#8CC63F",
  Municipal: "#E0B040",
  "Power & Energy": "#20B0E0",
  Textile: "#0E84B8",
  "Oil & Gas": "#E0B040",
  Agriculture: "#8CC63F",
  Petrochemical: "#0E84B8",
  Biotech: "#20B0E0",
};

/* ────────────────────────────────────────────
   Logo card component — grayscale default, full colour on hover
   ──────────────────────────────────────────── */
function LogoCard({ client }: { client: ClientLogo }) {
  const logoScale = client.logoScale ?? 1;

  return (
    <div
      className="group flex-shrink-0 mx-3 px-6 py-6 bg-white border border-[#E2E8F0]/60 rounded-2xl flex flex-col items-center justify-center min-w-[220px] max-w-[220px] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent cursor-pointer shadow-[0_8px_30px_rgba(32,176,224,0.08)] hover:shadow-[0_14px_36px_rgba(32,176,224,0.18),0_2px_8px_rgba(20,42,51,0.06)]"
      style={{
        transitionProperty: "transform, box-shadow, border-color, filter",
      }}
    >
      {/* Logo image — grayscale default, full colour on hover (anywhere on card) */}
      <div
        className="w-full flex items-center justify-center mb-3 rounded-lg overflow-visible"
        style={{
          height: 56,
          backgroundColor: client.lightLogo ? "#F4F7FA" : "transparent",
        }}
      >
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="max-h-full max-w-full object-contain transition-all duration-500 grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100"
          style={{ transform: `scale(${logoScale})` }}
          loading="lazy"
        />
      </div>

      {/* Company name */}
      <span className="text-[#142A33] font-semibold text-sm tracking-wide transition-colors duration-300 group-hover:text-[#0E84B8]">
        {client.name}
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main section
   ──────────────────────────────────────────── */
export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* ── Decorative water-drop SVG pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waterDropPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M40 8 C40 8, 56 28, 56 40 C56 48.837 48.837 56, 40 56 C31.163 56, 24 48.837, 24 40 C24 28, 40 8, 40 8Z"
                fill="none"
                stroke="#20B0E0"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waterDropPattern)" />
        </svg>
      </div>

      {/* ── Decorative blurred circles ── */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-[#20B0E0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#8CC63F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-4"
          >
            <Handshake className="w-4 h-4 text-[#0E84B8]" />
            <span className="text-[#0E84B8] text-sm font-semibold">
              Trusted Partners
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-2xl sm:text-3xl font-bold text-[#142A33] mb-3"
          >
            Trusted by <span className="text-[#20B0E0]">Industry Leaders</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] leading-relaxed max-w-2xl mx-auto"
          >
            We partner with organizations across diverse sectors to deliver
            reliable, sustainable water treatment solutions.
          </motion.p>
        </motion.div>

        {/* ── Scrolling partner logo ticker — Row 1 (right to left) ── */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          className="relative overflow-hidden mb-5"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Logo row – double for seamless loop */}
          <div className="flex ticker-scroll">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <LogoCard key={`logo-r1-${client.name}-${i}`} client={client} />
            ))}
          </div>
        </motion.div>

        {/* ── Scrolling partner logo ticker — Row 2 (left to right, reversed order) ── */}
        <motion.div
          custom={4}
          variants={fadeUpVariants}
          className="relative overflow-hidden"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Logo row – reversed order, double for seamless loop */}
          <div className="flex ticker-scroll-reverse">
            {[...reversedLogos, ...reversedLogos].map((client, i) => (
              <LogoCard key={`logo-r2-${client.name}-${i}`} client={client} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Marquee keyframe animations (global) ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ticker-scroll {
          animation: tickerScroll 65s linear infinite;
        }
        .ticker-scroll:hover {
          animation-play-state: paused;
        }
        .ticker-scroll-reverse {
          animation: tickerScrollReverse 75s linear infinite;
        }
        .ticker-scroll-reverse:hover {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes tickerScrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}} />
    </section>
  );
}
