"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplets, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DesktopSolutionsMenu,
  DesktopCapabilitiesMenu,
  MobileSolutionsMenu,
  MobileCapabilitiesMenu,
} from "@/components/layout/MegaMenu";

/* ─────────────────────── Nav Items ─────────────────────── */

interface NavItem {
  label: string;
  href: string;
  megaMenu?: "solutions" | "capabilities";
}

const navItems: NavItem[] = [
  { label: "About", href: "/about-us" },
  { label: "Solutions", href: "#solutions", megaMenu: "solutions" },
  { label: "Application", href: "/applications" },
  { label: "Capabilities & Services", href: "#services", megaMenu: "capabilities" },
  { label: "Gallery", href: "/gallery" },
];

/* ─────────────────────── Header ─────────────────────── */

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [footerInView, setFooterInView] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Hide header while the footer is on screen (avoids duplicate logo + nav)
  useEffect(() => {
    const footerEl = document.querySelector("[data-site-footer]");
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "solutions", "applications", "services", "gallery", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on scroll
  useEffect(() => {
    const handleScroll = () => setOpenMegaMenu(null);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setOpenMegaMenu(null);
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

  // Hover handlers with delay for mouse travel
  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setOpenMegaMenu(null);
    }, 200);
  }, []);

  const handleMegaMenuEnter = useCallback((key: string) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setOpenMegaMenu(key);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    };
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!openMegaMenu) return;
      const target = e.target as Node;
      const isInsideMenu = Object.values(menuRefs.current).some(
        (ref) => ref && ref.contains(target)
      );
      if (!isInsideMenu) setOpenMegaMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMegaMenu]);

  // Close menus when footer enters view
  useEffect(() => {
    if (footerInView) {
      setOpenMegaMenu(null);
      setIsMobileMenuOpen(false);
    }
  }, [footerInView]);

  const isMegaMenuOpen = openMegaMenu !== null;
  const isVisibleHeader =
    !footerInView || isMobileMenuOpen || openMegaMenu !== null;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisibleHeader ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-[0_2px_20px_rgba(32,176,224,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-3 group"
            >
              <Image
                src="/bluecare-logo.png"
                alt="BlueCare Systems"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href || currentPath === item.href;
                const isMegaItem = !!item.megaMenu;
                const isThisMenuOpen = openMegaMenu === item.megaMenu;

                if (isMegaItem) {
                  return (
                    <div
                      key={item.href}
                      className={item.megaMenu === "solutions" ? "" : "relative"}
                      ref={(el) => {
                        menuRefs.current[item.megaMenu!] = el;
                      }}
                      onMouseEnter={() => handleMegaMenuEnter(item.megaMenu!)}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <button
                        onClick={() =>
                          setOpenMegaMenu(isThisMenuOpen ? null : item.megaMenu!)
                        }
                        className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                          isThisMenuOpen
                            ? "text-[#0E84B8]"
                            : isActive
                              ? "text-[#0E84B8]"
                              : "text-[#3C4D57] hover:text-[#0E84B8]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isThisMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                        {(isActive || isThisMenuOpen) && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#20B0E0] rounded-full"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>

                      {/* Solutions Mega Menu */}
                      {item.megaMenu === "solutions" && (
                        <DesktopSolutionsMenu
                          isOpen={isThisMenuOpen}
                          onClose={() => setOpenMegaMenu(null)}
                          onNavigate={handleNavClick}
                        />
                      )}

                      {/* Capabilities & Services Mega Menu */}
                      {item.megaMenu === "capabilities" && (
                        <DesktopCapabilitiesMenu
                          isOpen={isThisMenuOpen}
                          onClose={() => setOpenMegaMenu(null)}
                          onNavigate={handleNavClick}
                        />
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      isActive
                        ? "text-[#0E84B8]"
                        : "text-[#3C4D57] hover:text-[#0E84B8]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#20B0E0] rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Reach Us Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Droplets className="w-4 h-4 mr-2" />
                Reach Us
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md transition-colors text-[#142A33]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg lg:hidden overflow-y-auto flex flex-col"
          >
            {/* Mobile Header: Logo and Close Button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0]/80">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
                className="flex items-center gap-3"
              >
                <Image
                  src="/bluecare-logo.png"
                  alt="BlueCare Systems"
                  width={150}
                  height={42}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#142A33] hover:text-[#0E84B8] p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 px-6 py-6 space-y-3 overflow-y-auto">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href || currentPath === item.href;
                const isMega = !!item.megaMenu;
                const isExpanded = mobileExpandedMenu === item.megaMenu;

                if (isMega) {
                  return (
                    <div key={item.href} className="border-b border-[#E2E8F0] pb-2">
                      <button
                        onClick={() =>
                          setMobileExpandedMenu(isExpanded ? null : item.megaMenu!)
                        }
                        className={`w-full flex items-center justify-between py-3 text-left font-bold text-lg transition-colors ${
                          isExpanded || isActive
                            ? "text-[#0E84B8]"
                            : "text-[#142A33] hover:text-[#0E84B8]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden mt-1"
                          >
                            <div className="py-2 pl-2">
                              {item.megaMenu === "solutions" ? (
                                <MobileSolutionsMenu onNavigate={handleNavClick} />
                              ) : (
                                <MobileCapabilitiesMenu onNavigate={handleNavClick} />
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={item.href} className="border-b border-[#E2E8F0] pb-2">
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full text-left py-3 font-bold text-lg transition-colors ${
                        isActive
                          ? "text-[#0E84B8]"
                          : "text-[#142A33] hover:text-[#0E84B8]"
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              })}

              {/* Reach Us Button at the end */}
              <div className="pt-6">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-[#0E84B8] hover:bg-[#0B6E9A] text-white py-6 rounded-lg font-semibold text-base shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Droplets className="w-5 h-5" />
                  Reach Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
