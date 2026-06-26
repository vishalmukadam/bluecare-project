"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Floating bubbles/particles component for hero
function FloatingBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const bubbles = useRef(
    Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.3 + 0.05,
      drift: (Math.random() - 0.5) * 0.2,
    }))
  );

  useEffect(() => {
    let running = true;

    const animate = () => {
      if (!running) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      bubbles.current.forEach((bubble) => {
        bubble.y -= bubble.speed;
        bubble.x += bubble.drift;

        if (bubble.y < -5) {
          bubble.y = 105;
          bubble.x = Math.random() * 100;
        }
        if (bubble.x < -5) bubble.x = 105;
        if (bubble.x > 105) bubble.x = -5;

        const px = (bubble.x / 100) * canvas.offsetWidth;
        const py = (bubble.y / 100) * canvas.offsetHeight;

        ctx.beginPath();
        ctx.arc(px, py, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(32, 176, 224, ${bubble.opacity})`;
        ctx.fill();

        // Add subtle glow
        ctx.beginPath();
        ctx.arc(px, py, bubble.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(32, 176, 224, ${bubble.opacity * 0.3})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-video-poster.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay - light bluish tint to let water show through */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D5C]/55 via-[#0E5A7A]/35 to-[#20B0E0]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D5C]/40 via-transparent to-[#0A3D5C]/20" />

      {/* Animated dot pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ zIndex: 1 }}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Floating bubbles animation */}
      <FloatingBubbles />

      {/* Floating decorative orbs */}
      <div className="absolute top-[30%] right-1/4 w-72 h-72 bg-[#20B0E0]/8 rounded-full blur-3xl animate-pulse" style={{ zIndex: 1 }} />
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-[#8CC63F]/6 rounded-full blur-3xl animate-pulse" style={{ zIndex: 1, animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/6 w-40 h-40 bg-[#0E84B8]/10 rounded-full blur-3xl animate-pulse" style={{ zIndex: 1, animationDelay: "2s" }} />

      {/* Decorative diagonal line pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ zIndex: 1 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="heroDiag" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="#20B0E0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroDiag)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Eco Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#8CC63F]/15 border border-[#8CC63F]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8CC63F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8CC63F]" />
            </span>
            <span className="text-[#8CC63F] text-sm font-semibold tracking-wide">
              Sustainability in Action
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-[0_2px_8px_rgba(10,30,50,0.6)]"
          >
            Clean water matters.
            <br />
            <span className="bg-gradient-to-r from-[#20B0E0] via-[#3EC4E8] to-[#8CC63F] bg-clip-text text-transparent">
              Innovating wastewater
            </span>
            <br />
            for a sustainable future.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-[#C8E0EC] mb-10 max-w-xl leading-relaxed drop-shadow-[0_1px_4px_rgba(10,30,50,0.5)]"
          >
            Zero Liquid Discharge systems, advanced water recycling, and
            sustainable treatment solutions for industries that care about
            tomorrow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() =>
                document
                  .querySelector("#solutions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#0E84B8]/30 h-auto group"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="border-2 border-[#20B0E0]/60 text-[#20B0E0] hover:bg-[#20B0E0]/15 hover:border-[#20B0E0] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 h-auto bg-transparent backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
          </motion.div>
        </div>

        {/* Trust Indicators - Compact Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {[
            { icon: "🛡️", text: "ISO 9001:2015 Certified" },
            { icon: "🌿", text: "Eco-Focused Solutions" },
            { icon: "⚡", text: "24/7 After-Sales Support" },
            { icon: "🏆", text: "100+ Projects Delivered" },
          ].map((badge, i) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-white/90 text-sm font-medium hover:bg-white/15 transition-all duration-300"
            >
              <span className="text-base">{badge.icon}</span>
              {badge.text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#20B0E0] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade - softer transition to next section (brand green stats strip) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#8CC63F]/85 via-[#8CC63F]/40 to-transparent z-[2]" />
    </section>
  );
}
