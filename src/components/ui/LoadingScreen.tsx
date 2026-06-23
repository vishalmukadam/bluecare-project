"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MIN_DISPLAY_MS = 1800;

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let progressTimer: ReturnType<typeof setInterval> | null = null;

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      window.setTimeout(() => {
        setProgress(100);
        window.setTimeout(() => setIsLoading(false), 500);
      }, remaining);
    };

    progressTimer = setInterval(() => {
      setProgress((current) => {
        if (current >= 92) return current;
        return current + Math.random() * 8 + 2;
      });
    }, 180);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      if (progressTimer) clearInterval(progressTimer);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="loading-screen fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#F8FAFE]"
          aria-live="polite"
          aria-busy="true"
          aria-label="Page loading"
        >
          {/* Ambient background orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="loading-orb loading-orb-1" />
            <div className="loading-orb loading-orb-2" />
            <div className="loading-orb loading-orb-3" />
          </div>

          {/* Ripple rings */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="loading-ripple"
                style={{ animationDelay: `${i * 0.9}s` }}
              />
            ))}
          </div>

          {/* 3D logo stage */}
          <div className="loading-scene relative mb-10">
            <div className="loading-logo-3d">
              <div className="loading-logo-shadow" aria-hidden="true" />
              <div className="loading-logo-panel">
                <div className="loading-logo-shine" aria-hidden="true" />
                <Image
                  src="/bluecare-logo.png"
                  alt="BlueCare Systems"
                  width={220}
                  height={62}
                  priority
                  className="relative z-10 h-14 w-auto object-contain sm:h-16"
                />
              </div>
            </div>
          </div>

          {/* Loading label + progress */}
          <div className="relative z-10 flex w-56 flex-col items-center gap-4 sm:w-64">
            <p className="text-sm font-medium tracking-wide text-[#3C4D57]">
              Loading
              <span className="loading-dots" aria-hidden="true">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </p>

            <div
              className="h-1 w-full overflow-hidden rounded-full bg-[#E2E8F0]"
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <motion.div
                className="loading-progress-bar h-full rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
