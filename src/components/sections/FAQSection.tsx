"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Droplets,
  Clock,
  Wrench,
  RefreshCw,
  Building2,
  Shield,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const faqIcons = [Droplets, Clock, Wrench, RefreshCw, Building2, Shield];

const faqs = [
  {
    question: "What is Zero Liquid Discharge (ZLD)?",
    answer:
      "ZLD is an advanced water treatment process that eliminates all wastewater discharge from a facility. Through a combination of reverse osmosis, evaporation, and crystallization, ZLD systems recover virtually 100% of water for reuse while producing solid byproducts that can often be sold or safely disposed of.",
  },
  {
    question: "How long does it take to install a wastewater treatment plant?",
    answer:
      "Installation timelines vary based on plant capacity and complexity. A standard package system can be installed in 8-12 weeks, while larger custom-engineered plants may take 6-9 months. Our team provides detailed project timelines during the proposal phase.",
  },
  {
    question: "Do you provide after-sales support and maintenance?",
    answer:
      "Yes, we offer comprehensive after-sales support including 24/7 remote monitoring, scheduled maintenance visits, emergency troubleshooting, and spare parts supply. Our field service teams are available for rapid response across India.",
  },
  {
    question: "Can you upgrade or retrofit existing treatment plants?",
    answer:
      "Absolutely. We specialize in retrofitting existing plants with modern technologies to improve efficiency, increase capacity, and ensure compliance with updated environmental regulations. Our team conducts a thorough audit before recommending the optimal upgrade path.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including pharmaceuticals, chemicals & petrochemicals, food & beverage, textile & dyeing, power & energy, oil & gas, municipal corporations, and agriculture. Each solution is customized to meet the specific wastewater characteristics of the industry.",
  },
  {
    question: "Are your systems compliant with CPCB/SPCB norms?",
    answer:
      "Yes, all our treatment systems are designed to meet or exceed Central Pollution Control Board (CPCB) and State Pollution Control Board (SPCB) discharge norms. We also ensure compliance with industry-specific standards such as FDA, GMP, and ISO requirements.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const IconComponent = faqIcons[index % faqIcons.length];

  return (
    <motion.div
      custom={index + 3}
      variants={fadeUpVariants}
      className="relative rounded-xl overflow-hidden transition-all duration-300"
    >
      {/* Left-side gradient accent bar when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-0 bottom-0 w-[3px] z-10 origin-top"
            style={{
              background: "linear-gradient(to bottom, #20B0E0, #8CC63F)",
            }}
          />
        )}
      </AnimatePresence>

      <div
        className={`border transition-all duration-300 rounded-xl ${
          isOpen
            ? "border-[#20B0E0]/30 bg-white shadow-md shadow-[#20B0E0]/5"
            : "border-[#E2E8F0] bg-white hover:border-[#20B0E0]/20 hover:shadow-sm"
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-[#F8FAFE]/60 transition-colors duration-200"
          aria-expanded={isOpen}
        >
          {/* Category Icon */}
          <div
            className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-gradient-to-br from-[#20B0E0] to-[#8CC63F] shadow-md shadow-[#20B0E0]/20"
                : "bg-[#20B0E0]/10 group-hover:bg-[#20B0E0]/20"
            }`}
          >
            <IconComponent
              className={`w-5 h-5 transition-colors duration-300 ${
                isOpen ? "text-white" : "text-[#20B0E0]"
              }`}
            />
          </div>

          {/* Q indicator + question */}
          <span className="text-[#142A33] font-semibold text-base md:text-lg pr-4 flex-1">
            <span
              className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold mr-2 transition-all duration-300 ${
                isOpen
                  ? "bg-[#20B0E0] text-white"
                  : "bg-[#20B0E0]/10 text-[#20B0E0]"
              }`}
            >
              Q
            </span>
            {question}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <ChevronDown
              className={`w-5 h-5 transition-colors duration-300 ${
                isOpen ? "text-[#20B0E0]" : "text-[#3C4D57]"
              }`}
            />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="px-5 md:px-6 pb-5 md:pb-6 pt-4 border-t border-[#E2E8F0]/60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(32,176,224,0.03), rgba(140,198,63,0.03), rgba(248,250,254,0.5))",
                }}
              >
                <div className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#8CC63F]/10 text-[#8CC63F] text-xs font-bold shrink-0 mt-0.5">
                    A
                  </span>
                  <p className="text-[#3C4D57] leading-relaxed">{answer}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 bg-[#F8FAFE] overflow-hidden"
      ref={ref}
    >
      {/* Decorative water drop SVG pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 8 C40 8 58 32 58 44 C58 54 50 62 40 62 C30 62 22 54 22 44 C22 32 40 8 40 8Z' fill='none' stroke='%2320B0E0' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blurred decorative circle - blue top-right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#20B0E0] rounded-full opacity-[0.06] blur-3xl pointer-events-none" />
      {/* Blurred decorative circle - green bottom-left */}
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#8CC63F] rounded-full opacity-[0.05] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-[#0E84B8]" />
            <span className="text-[#0E84B8] text-sm font-semibold">FAQ</span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            Frequently Asked{" "}
            <span className="text-[#20B0E0]">Questions</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Get answers to common questions about our water treatment solutions,
            services, and processes.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              index={i}
            />
          ))}
        </motion.div>

        {/* Still have questions? CTA Card */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <motion.div
            custom={faqs.length + 3}
            variants={fadeUpVariants}
            className="relative rounded-2xl overflow-hidden p-8 md:p-10 text-center"
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #20B0E0, #0E84B8, #142A33)",
              }}
            />

            {/* Decorative pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='2' fill='white'/%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Blurred accent circles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8CC63F] rounded-full opacity-20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#20B0E0] rounded-full opacity-20 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-white/80 text-base md:text-lg mb-6 max-w-lg mx-auto leading-relaxed">
                Our water treatment experts are ready to help you find the right
                solution for your specific needs.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#0E84B8] font-semibold px-7 py-3.5 rounded-full hover:bg-[#F8FAFE] transition-all duration-300 shadow-lg hover:shadow-xl hover:gap-3 group"
              >
                Talk to Our Experts
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
