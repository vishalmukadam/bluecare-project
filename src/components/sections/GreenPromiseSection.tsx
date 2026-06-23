"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, ArrowRight } from "lucide-react";

export default function GreenPromiseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleActionClick = () => {
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <section ref={ref} className="py-16 bg-[#F8FAFE] border-t border-slate-100 relative overflow-hidden">
      {/* Faint pattern overlay matching the homepage design */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#8CC63F]/10 via-[#20B0E0]/5 to-[#0E84B8]/5 border border-[#8CC63F]/20 p-6 md:p-8"
        >
          {/* Glass light reflection effect */}
          <div className="absolute inset-0 bg-white/40 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* Green Leaf Icon Container */}
            <div className="w-14 h-14 rounded-full bg-[#8CC63F] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#8CC63F]/30">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            
            {/* Message Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[#142A33] font-bold text-xl mb-2">Our Green Promise</h3>
              <p className="text-[#3C4D57] text-sm leading-relaxed">
                We commit to making every solution more sustainable than the last. Track our environmental impact and goals.
              </p>
            </div>
            
            {/* Action button */}
            <button
              onClick={handleActionClick}
              className="inline-flex items-center gap-2 bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#0E84B8]/30 group flex-shrink-0 cursor-pointer"
            >
              Learn About Our Goals
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
