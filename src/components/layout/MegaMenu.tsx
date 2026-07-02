"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  ArrowRight,
  ChevronDown,
  Leaf,
} from "lucide-react";

/* ─────────────────────── Types ─────────────────────── */

interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
  highlight?: boolean;
}

/* ─────────────────────── Solutions Data ─────────────────────── */

const solutionsData: MegaMenuColumn[] = [
  {
    title: "Water Treatment",
    items: [
      {
        label: "Filtration Plant",
        href: "/filtration-plant",
        description: "Multi-grade & sand filtration systems",
      },
      {
        label: "Softener System",
        href: "/softener-system",
        description: "Ion exchange water softening",
      },
      {
        label: "RO System",
        href: "/ro-system",
        description: "Reverse osmosis purification",
      },
      {
        label: "Desalination System",
        href: "/desalination",
        description: "Seawater & brackish water desalination",
      },
      {
        label: "EDI System",
        href: "/edi-system",
        description: "Electrodeionization for ultra-pure water",
      },
    ],
  },
  {
    title: "Wastewater Treatment",
    highlight: true,
    items: [
      {
        label: "Sewage Treatment Plant",
        href: "/sewage-treatment",
        description: "MBBR, MBR & SBR technologies",
      },
      {
        label: "Effluent Treatment Plant",
        href: "/effluent-treatment",
        description: "Chemical & biological ETP solutions",
      },
      {
        label: "Bluecare Aspiratory System",
        href: "/aspiratory-system",
        description: "Aeration & gas scrubbing",
      },
      {
        label: "Ceramic MBR System",
        href: "/ceramic-mbr",
        description: "Advanced membrane bioreactor",
      },
      {
        label: "Sludge Dewatering System",
        href: "/sludge-dewatering",
        description: "Centrifuge & belt press systems",
      },
      {
        label: "Paddle Dryer System",
        href: "/paddle-dryer",
        description: "Efficient sludge drying technology",
      },
    ],
  },
  {
    title: "Water Recycling",
    items: [
      {
        label: "UF System",
        href: "/uf-system",
        description: "Ultrafiltration membrane systems",
      },
      {
        label: "Multi Stage RO System",
        href: "/multi-stage-ro",
        description: "High-recovery multistage reverse osmosis",
      },
      {
        label: "IDT Disc Type RO System",
        href: "/idt-ro",
        description: "Innovative disc-tube RO technology",
      },
      {
        label: "Second Stage IDT RO System",
        href: "/second-stage-idt-ro",
        description: "High-pressure RO for reject recovery",
      },
      {
        label: "Hybrid IDT RO System",
        href: "/hybrid-idt-ro",
        description: "Combined SPRO + IDT RO hybrid process",
      },
    ],
  },
  {
    title: "ZLD System",
    highlight: true,
    items: [
      {
        label: "ZLD System",
        href: "/zld-system",
        description: "Zero liquid discharge turnkey solutions",
      },
      {
        label: "MEE System",
        href: "/mee-system",
        description: "Multi-effect evaporator for concentration",
      },
      {
        label: "MVRE System",
        href: "/mvre-system",
        description: "Mechanical vapor recompression evaporator",
      },
      {
        label: "ATFD System",
        href: "/atfd-system",
        description: "Agitated thin film dryer for solids",
      },
    ],
  },
];

/* ─────────────────────── Capabilities & Services Data (simple flat list) ─────────────────────── */

interface SimpleMenuItem {
  label: string;
  href: string;
}

const capabilitiesItems: SimpleMenuItem[] = [
  { label: "Design & Engineering", href: "/design-engineering" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Field Service & Troubleshooting", href: "/field-service" },
  { label: "Retrofits & Plant Upgradation", href: "/retrofits" },
];

/* ─────────────────── Desktop Solutions Mega Menu ────────────────── */

export function DesktopSolutionsMenu({
  isOpen,
  onClose,
  onNavigate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="absolute top-full left-0 right-0 h-4" />
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-[94vw] max-w-[1200px] bg-white rounded-2xl shadow-[0_25px_60px_rgba(20,42,51,0.18)] border border-[#E2E8F0]/60 overflow-hidden z-[60]"
          >
            <div className="h-1 bg-gradient-to-r from-[#20B0E0] via-[#0E84B8] to-[#8CC63F]" />

            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#20B0E0] to-[#0E84B8] flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#142A33]">Our Solutions</h3>
                    <p className="text-xs text-[#3C4D57]">
                      Comprehensive water & wastewater treatment portfolio
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-[#3C4D57] hover:text-[#0E84B8] p-1.5 rounded-lg hover:bg-[#F8FAFE] transition-colors"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
                {solutionsData.map((column, colIndex) => (
                  <div key={column.title} className="relative">
                    <div
                      className={`flex items-center gap-2.5 pb-3 mb-3 border-b-2 ${
                        column.highlight ? "border-[#20B0E0]" : "border-[#E2E8F0]"
                      }`}
                    >
                      <h4 className="text-sm font-bold text-[#142A33] tracking-wide uppercase">
                        {column.title}
                      </h4>
                    </div>

                    <ul className="space-y-0.5">
                      {column.items.map((item) => (
                        <li key={item.label}>
                          <button
                            onClick={() => {
                              onNavigate(item.href);
                              onClose();
                            }}
                            className="group w-full text-left flex items-start gap-2.5 px-2.5 py-2 rounded-lg hover:bg-[#F8FAFE] transition-all duration-150"
                          >
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-medium text-[#142A33] group-hover:text-[#0E84B8] transition-colors block">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="text-[11px] text-[#3C4D57]/70 group-hover:text-[#3C4D57] transition-colors block mt-0.5 leading-snug">
                                  {item.description}
                                </span>
                              )}
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-[#0E84B8] mt-1 flex-shrink-0 transition-all duration-200 group-hover:translate-x-0.5" />
                          </button>
                        </li>
                      ))}
                    </ul>

                    {colIndex < solutionsData.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-[#E2E8F0]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F8FAFE] to-[#F1F5F9] border-t border-[#E2E8F0] px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-[#3C4D57] flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#8CC63F]" />
                <span>
                  All our systems are designed for maximum water recovery and minimal
                  environmental impact
                </span>
              </p>
              <button
                onClick={() => {
                  onNavigate("#contact");
                  onClose();
                }}
                className="flex items-center gap-2 text-sm font-semibold text-[#0E84B8] hover:text-[#0B6E9A] transition-colors group"
              >
                Get Custom Solution
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────── Desktop Capabilities & Services Simple Dropdown ────────────────── */

export function DesktopCapabilitiesMenu({
  isOpen,
  onClose,
  onNavigate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible bridge */}
          <div className="absolute top-full left-0 right-0 h-4" />

          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 min-w-[260px] bg-white rounded-xl shadow-[0_12px_40px_rgba(20,42,51,0.16)] border border-[#E2E8F0]/80 overflow-hidden z-[60]"
          >
            {/* Top accent */}
            <div className="h-0.5 bg-gradient-to-r from-[#8CC63F] via-[#0E84B8] to-[#20B0E0]" />

            <div className="py-2">
              {capabilitiesItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.href);
                    onClose();
                  }}
                  className="group w-full text-left px-5 py-3 text-[15px] font-medium text-[#142A33] hover:text-[#0E84B8] hover:bg-[#F8FAFE] transition-all duration-150 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-[#0E84B8] transition-all duration-200 group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ──────────────── Mobile Accordion Mega Menu (reusable for Solutions) ──────────────── */

function MobileAccordionMenu({
  data,
  onNavigate,
  accentColor = "blue",
}: {
  data: MegaMenuColumn[];
  onNavigate: (href: string) => void;
  accentColor?: "blue" | "green";
}) {
  const [expandedCol, setExpandedCol] = useState<string | null>(null);

  const toggleColumn = (title: string) => {
    setExpandedCol(expandedCol === title ? null : title);
  };

  const isBlue = accentColor === "blue";

  return (
    <div className="w-full max-w-md mx-auto">
      {data.map((column) => (
        <div key={column.title} className="border-b border-[#E2E8F0]">
          <button
            onClick={() => toggleColumn(column.title)}
            className="w-full flex items-center justify-between py-3 text-left group"
          >
            <div className="flex items-center gap-3">
              <span
                className={`text-sm font-semibold ${
                  expandedCol === column.title
                    ? isBlue
                      ? "text-[#0E84B8]"
                      : "text-[#8CC63F]"
                    : "text-[#142A33]"
                } group-hover:text-[#0E84B8] transition-colors`}
              >
                {column.title}
              </span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-[#3C4D57]/60 transition-transform duration-200 ${
                expandedCol === column.title
                  ? `rotate-180 ${isBlue ? "text-[#0E84B8]" : "text-[#8CC63F]"}`
                  : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {expandedCol === column.title && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-3 pl-11 space-y-0.5">
                  {column.items.map((item, itemIndex) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.03 }}
                      onClick={() => onNavigate(item.href)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-[#F8FAFE] transition-colors group"
                    >
                      <div className="flex-1">
                        <span className="text-sm font-medium text-[#142A33] group-hover:text-[#0E84B8] transition-colors block">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="text-[11px] text-[#3C4D57]/70 group-hover:text-[#3C4D57] transition-colors block leading-tight mt-0.5">
                            {item.description}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-[#0E84B8] transition-all group-hover:translate-x-0.5" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ──────────────── Mobile Solutions Accordion ──────────────── */

export function MobileSolutionsMenu({
  onNavigate,
}: {
  onNavigate: (href: string) => void;
}) {
  return (
    <div className="w-full max-w-md mx-auto">
      <MobileAccordionMenu data={solutionsData} onNavigate={onNavigate} accentColor="blue" />
      <div className="mt-3">
        <button
          onClick={() => onNavigate("#contact")}
          className="w-full flex items-center justify-center gap-2 bg-[#0E84B8] hover:bg-[#0B6E9A] text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          Get Custom Solution
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ──────────────── Mobile Capabilities Simple List ──────────────── */

export function MobileCapabilitiesMenu({
  onNavigate,
}: {
  onNavigate: (href: string) => void;
}) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-1">
        {capabilitiesItems.map((item, i) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => onNavigate(item.href)}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-left hover:bg-[#F8FAFE] transition-colors group"
          >
            <span className="text-sm font-medium text-[#142A33] group-hover:text-[#0E84B8] transition-colors">
              {item.label}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-[#0E84B8] transition-all group-hover:translate-x-0.5" />
          </motion.button>
        ))}
      </div>

      <div className="mt-3">
        <button
          onClick={() => onNavigate("#contact")}
          className="w-full flex items-center justify-center gap-2 bg-[#8CC63F] hover:bg-[#7AB335] text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          Discuss Your Requirements
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
