"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Droplets,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  Send,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PresenceStrip from "../sections/PresenceStrip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  solutions: [
    { label: "Water Treatment", href: "#solutions" },
    { label: "Water Recycling", href: "#solutions" },
    { label: "Waste Water Treatment", href: "#solutions" },
    { label: "ZLD Systems", href: "#solutions" },
  ],
  services: [
    { label: "Design & Engineering", href: "#services" },
    { label: "Manufacturing", href: "#services" },
    { label: "Field Service", href: "#services" },
    { label: "Retrofits & Upgradation", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Applications", href: "/applications" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/bluecare-system-pvt-ltd", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

/* ── SVG Water Molecule Icon ─────────────────────────────────── */
function WaterMoleculeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Central oxygen */}
      <circle cx="40" cy="30" r="10" fill="#20B0E0" opacity="0.25" />
      <circle cx="40" cy="30" r="6" fill="#20B0E0" opacity="0.5" />
      {/* Hydrogen left */}
      <circle cx="18" cy="14" r="7" fill="#8CC63F" opacity="0.2" />
      <circle cx="18" cy="14" r="4" fill="#8CC63F" opacity="0.45" />
      {/* Hydrogen right */}
      <circle cx="62" cy="14" r="7" fill="#8CC63F" opacity="0.2" />
      <circle cx="62" cy="14" r="4" fill="#8CC63F" opacity="0.45" />
      {/* Bonds */}
      <line
        x1="34"
        y1="25"
        x2="22"
        y2="18"
        stroke="#20B0E0"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <line
        x1="46"
        y1="25"
        x2="58"
        y2="18"
        stroke="#20B0E0"
        strokeWidth="1.5"
        opacity="0.35"
      />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  /* ── Scroll detection for back-to-top ──────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    // If href starts with /, it's a page route (not an anchor)
    if (href.startsWith("/") && !href.startsWith("/#")) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      } else {
        alert(data.errors?.email || data.error || "Subscription failed. Please try again.");
      }
    } catch {
      alert("Network error. Please try again later.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer
      ref={footerRef}
      data-site-footer
      className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F5F5F5 0%, #EFEFEF 50%, #E8E8E8 100%)" }}>
      {/* ── 1. Decorative gradient top border ──────────────────── */}
      <div
        className="h-[3px] w-full"
        style={{
          background:
            "linear-gradient(90deg, #20B0E0, #0E84B8, #8CC63F)",
        }}
      />

      {/* ── 2. Subtle dot pattern background overlay ───────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, #0E84B8 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── 6. Newsletter Section with gradient bg ─────────────── */}
      <div className="relative border-b border-[#D4D4D4]/80">
        {/* Gradient background for newsletter */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(135deg, rgba(32,176,224,0.06) 0%, rgba(140,198,63,0.05) 50%, rgba(14,132,184,0.04) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-lg">
              <h3 className="text-2xl font-bold text-[#142A33] mb-2">
                Stay Updated with{" "}
                <span className="text-[#5A9024]">BlueCare</span>
              </h3>
              <p className="text-[#3C4D57] text-sm leading-relaxed">
                Subscribe to our newsletter for the latest insights on water
                treatment technologies, sustainability practices, and industry
                updates.
              </p>
            </div>
            <div className="w-full lg:w-auto lg:min-w-[420px]">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-white border border-[#8CC63F]/40 rounded-xl px-5 py-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#5A9024] shrink-0" />
                  <div>
                    <p className="text-[#142A33] font-medium text-sm">
                      Successfully subscribed!
                    </p>
                    <p className="text-[#3C4D57] text-xs">
                      You&apos;ll receive our next newsletter.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-slate-300 text-[#142A33] placeholder-slate-400 focus:border-[#20B0E0] focus:ring-[#20B0E0]/20 h-12"
                  />
                  <Button
                    type="submit"
                    disabled={subscribing}
                    className="bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-6 h-12 rounded-lg font-medium transition-all duration-200 shrink-0"
                  >
                    {subscribing ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer ───────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/">
                <Image
                  src="/bluecare-logo.png"
                  alt="BlueCare Systems"
                  width={240}
                  height={68}
                  className="h-16 w-auto"
                  unoptimized
                />
              </Link>
            </div>

            {/* 7. Decorative water molecule illustration */}
            <div className="relative mb-6 max-w-sm">
              <p className="text-[#3C4D57] text-sm leading-relaxed pr-16">
                Bluecare Systems Pvt. Ltd. delivers sustainable and innovative
                wastewater and environmental solutions with an experienced team.
                We focus on pollution prevention, resource recovery, and
                efficient water management.
              </p>
              <WaterMoleculeIcon className="absolute -right-1 top-1/2 -translate-y-1/2 w-14 h-14 opacity-70" />
            </div>

            <div className="space-y-3">
              <a
                href="mailto:bluecare@bluecare.in"
                className="flex items-center gap-3 text-[#3C4D57] hover:text-[#0E84B8] transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                bluecare@bluecare.in
              </a>
              <a
                href="mailto:sales@bluecare.in"
                className="flex items-center gap-3 text-[#3C4D57] hover:text-[#0E84B8] transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                sales@bluecare.in
              </a>
              <a
                href="tel:+919699878877"
                className="flex items-center gap-3 text-[#3C4D57] hover:text-[#0E84B8] transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +91 9699878877
              </a>
              <a
                href="tel:+918696753800"
                className="flex items-center gap-3 text-[#3C4D57] hover:text-[#0E84B8] transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +91 8696753800
              </a>
              <div className="flex items-start gap-3 text-[#3C4D57] text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="max-w-[320px]">Plot No: H1-378,378-A&B, 381-B, Growth Centre, RIICO Industrial Area, Hamirgarh-311025, Dist-Bhilwara, RAJASTHAN</span>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-[#0E84B8] font-semibold text-sm uppercase tracking-wider mb-5">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-[#3C4D57] hover:text-[#0E84B8] transition-colors duration-200 text-sm group"
                  >
                    {link.label}
                    {/* 5. Hover underline slide-in from left */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#0E84B8] to-[#8CC63F] transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-[#0E84B8] font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-[#3C4D57] hover:text-[#0E84B8] transition-colors duration-200 text-sm group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#0E84B8] to-[#8CC63F] transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#0E84B8] font-semibold text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-[#3C4D57] hover:text-[#0E84B8] transition-colors duration-200 text-sm group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#0E84B8] to-[#8CC63F] transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>

            {/* 3. Social Links with hover ring/ripple effect */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="relative w-9 h-9 rounded-full bg-slate-200/80 text-[#0E84B8] flex items-center justify-center hover:bg-[#20B0E0] hover:text-white transition-all duration-300 group"
                >
                  {/* Ripple ring on hover */}
                  <span className="absolute inset-0 rounded-full border-2 border-[#20B0E0] scale-100 opacity-0 group-hover:animate-[ripple_0.6s_ease-out]" />
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Regional/Operational Presence Strip */}
      <PresenceStrip />

      {/* ── Bottom Bar ────────────────────────────────────────── */}
      <div className="relative border-t border-[#D4D4D4]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#3C4D57] text-sm">
            <span>
              © {new Date().getFullYear()} BlueCare Systems Pvt. Ltd. All
              rights reserved.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-[#3C4D57] text-sm">
            {/* 4. Made with water drop for sustainable future */}
            <span className="flex items-center gap-1.5 text-[#5A9024] text-xs italic">
              Made with <Droplets className="w-3.5 h-3.5 text-[#8CC63F] inline" /> for a sustainable future
            </span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#0E84B8] transition-colors">
                Privacy Policy
              </a>
              <span className="text-slate-400">•</span>
              <a href="#" className="hover:text-[#0E84B8] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 8. Back to Top (scroll-aware) ──────────────────────── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#0E84B8] hover:bg-[#0B6E9A] text-white rounded-full shadow-lg shadow-[#0E84B8]/30 flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Inline keyframes for ripple effect ─────────────────── */}
      <style jsx global>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
}
