"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const avatarGradients = [
  "from-[#20B0E0] to-[#0E84B8]",
  "from-[#8CC63F] to-[#5A9A20]",
  "from-[#E0B040] to-[#C8960A]",
  "from-[#0E84B8] to-[#8CC63F]",
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Plant Manager, PharmaCorp India",
    quote:
      "BlueCare's ZLD system has been a game-changer for our facility. We achieved 100% water reuse and significantly reduced our environmental footprint. Their team was professional and responsive throughout.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Environmental Consultant",
    quote:
      "I've recommended BlueCare to multiple clients for their wastewater treatment needs. Their technical expertise and commitment to sustainability set them apart in the industry.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Director, ChemPro Industries",
    quote:
      "The retrofit of our existing ETP by BlueCare resulted in 40% energy savings and improved compliance. Their after-sales support is exceptional. Truly a trusted partner.",
    rating: 5,
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Head of Operations, FoodTech Solutions",
    quote:
      "BlueCare delivered our water recycling system on time and within budget. The water quality exceeds our requirements and their monitoring system gives us complete peace of mind.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  // Auto-rotation: every 5 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Get the next 3 testimonial indices for mini preview cards
  const getNextThree = (currentIndex: number) => {
    const indices: number[] = [];
    for (let i = 1; i <= 3; i++) {
      indices.push((currentIndex + i) % testimonials.length);
    }
    return indices;
  };

  const miniCards = getNextThree(current);

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-28 overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFE 100%)",
      }}
    >
      {/* Decorative blurred circles */}
      <div className="absolute top-20 -left-32 w-80 h-80 bg-[#20B0E0] rounded-full opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[#8CC63F] rounded-full opacity-[0.05] blur-3xl pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #20B0E0 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="w-2 h-2 bg-[#20B0E0] rounded-full" />
            <span className="text-[#0E84B8] text-sm font-semibold">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            What Our <span className="text-[#20B0E0]">Clients Say</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Trusted by industry leaders across India for reliable, sustainable,
            and cost-effective water treatment solutions.
          </motion.p>

          {/* Google Rating Badge */}
          <motion.div
            custom={2.5}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2.5 bg-white border border-[#E2E8F0] rounded-full px-5 py-2 mt-5 shadow-sm"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4
                      ? "text-[#E0B040] fill-[#E0B040]"
                      : "text-[#E0B040] fill-[#E0B040]/70"
                  }`}
                />
              ))}
            </div>
            <span className="text-[#142A33] font-bold text-sm">4.9</span>
            <span className="text-[#3C4D57] text-sm">/5</span>
            <div className="w-px h-4 bg-[#E2E8F0]" />
            <span className="text-[#3C4D57] text-xs font-medium">
              Google Rating
            </span>
          </motion.div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            className="relative rounded-2xl p-8 md:p-12 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 p-[2px]">
              <div
                className="w-full h-full rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #20B0E0, #0E84B8, #8CC63F)",
                }}
              />
            </div>

            {/* Card background */}
            <div className="absolute inset-[2px] rounded-2xl bg-[#F8FAFE] group-hover:bg-white transition-colors duration-300 -z-10" />

            {/* Static border when not hovered */}
            <div className="absolute inset-0 rounded-2xl border border-[#E2E8F0] group-hover:border-transparent transition-all duration-300 -z-10" />

            {/* Large decorative quote marks */}
            <div className="absolute top-4 right-6 md:top-6 md:right-10 pointer-events-none select-none">
              <span
                className="text-[#20B0E0] opacity-[0.07] font-serif leading-none"
                style={{ fontSize: "200px" }}
              >
                &ldquo;
              </span>
            </div>
            <div className="absolute bottom-4 left-6 md:bottom-6 md:left-10 pointer-events-none select-none">
              <span
                className="text-[#8CC63F] opacity-[0.07] font-serif leading-none"
                style={{ fontSize: "200px" }}
              >
                &rdquo;
              </span>
            </div>

            {/* Quote icon */}
            <div className="absolute -top-5 left-8 md:left-12 w-10 h-10 bg-[#20B0E0] rounded-full flex items-center justify-center shadow-lg shadow-[#20B0E0]/20">
              <Quote className="w-5 h-5 text-white" />
            </div>

            <div className="min-h-[200px] flex flex-col justify-center relative z-10">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#E0B040] fill-[#E0B040]"
                    />
                  )
                )}
              </div>

              {/* Quote text */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-[#142A33] text-lg md:text-xl leading-relaxed mb-6 italic"
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>

              {/* Author */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${
                      avatarGradients[current % avatarGradients.length]
                    } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}
                  >
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#142A33] font-semibold">
                      {testimonials[current].name}
                    </p>
                    <p className="text-[#3C4D57] text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E2E8F0] relative z-10">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-[#20B0E0] w-8"
                        : "bg-[#E2E8F0] hover:bg-[#20B0E0]/40 w-2.5"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:bg-[#20B0E0]/10 hover:border-[#20B0E0]/30 transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-[#3C4D57]" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:bg-[#20B0E0]/10 hover:border-[#20B0E0]/30 transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-[#3C4D57]" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Mini testimonial preview cards */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            className="mt-6 grid grid-cols-3 gap-3 md:gap-4"
          >
            {miniCards.map((idx, i) => (
              <button
                key={`mini-${idx}-${current}`}
                onClick={() => setCurrent(idx)}
                className="group/mini bg-white border border-[#E2E8F0] rounded-xl p-3 md:p-4 text-left hover:border-[#20B0E0]/30 hover:shadow-md hover:shadow-[#20B0E0]/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 md:gap-3">
                  <div
                    className={`w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br ${
                      avatarGradients[idx % avatarGradients.length]
                    } rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shrink-0`}
                  >
                    {testimonials[idx].name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#142A33] font-semibold text-xs md:text-sm truncate group-hover/mini:text-[#0E84B8] transition-colors duration-200">
                      {testimonials[idx].name}
                    </p>
                    <p className="text-[#3C4D57] text-[10px] md:text-xs truncate">
                      {testimonials[idx].role}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
