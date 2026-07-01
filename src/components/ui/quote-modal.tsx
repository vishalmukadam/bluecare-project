"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, Zap, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
}

const serviceOptions = [
  "Potable Water",
  "Water Recycling",
  "Wastewater Treatment",
  "ZLD Systems",
  "Design & Engineering",
  "Manufacturing",
  "Field Service",
  "Retrofits",
  "Other",
];

export default function QuoteModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    capacity: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Show floating button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearFieldError = useCallback((field: keyof FormErrors) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const validate = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please provide a valid email address.";
      }
    }
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }
    return newErrors;
  }, [formData]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name in errors) {
        clearFieldError(name as keyof FormErrors);
      }
    },
    [errors, clearFieldError]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setErrors({});
      setIsSubmitting(true);

      try {
        const res = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();

        if (!res.ok) {
          if (data.errors) {
            setErrors(data.errors);
          }
          toast.error(data.error || "Something went wrong. Please try again.");
          return;
        }

        toast.success("Quote request submitted! We'll respond within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          capacity: "",
          message: "",
        });
        setErrors({});
        setIsOpen(false);
      } catch {
        toast.error("Network error. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validate]
  );

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setErrors({});
  }, []);

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {isVisible && !isOpen && (
          <motion.button
            initial={{ opacity: 0, x: -40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={openModal}
            className="fixed bottom-24 left-6 z-40 flex items-center gap-2 bg-[#0E84B8] hover:bg-[#0B6E9A] text-white rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            aria-label="Request a Quote"
          >
            <span className="relative">
              <FileText className="w-5 h-5" />
              <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
            </span>
            <span className="text-sm font-semibold">Get Quote</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal overlay + content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient accent bar at top */}
              <div
                className="h-[3px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #20B0E0, #0E84B8, #8CC63F)",
                }}
              />

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-5 pb-3">
                <h2 className="text-xl font-bold text-[#142A33]">
                  Request a Quote
                </h2>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#3C4D57] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="px-6 pb-6 space-y-4 max-h-[70vh] overflow-y-auto"
              >
                {/* Full Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="quote-name"
                    className="text-sm font-medium text-[#3C4D57]"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="quote-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={
                      errors.name
                        ? "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-200"
                        : ""
                    }
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="quote-email"
                    className="text-sm font-medium text-[#3C4D57]"
                  >
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="quote-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={
                      errors.email
                        ? "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-200"
                        : ""
                    }
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="quote-phone"
                    className="text-sm font-medium text-[#3C4D57]"
                  >
                    Phone
                  </Label>
                  <Input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9699878877"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="quote-company"
                    className="text-sm font-medium text-[#3C4D57]"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="quote-company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Service Interested In */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="quote-service"
                    className="text-sm font-medium text-[#3C4D57]"
                  >
                    Service Interested In <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="quote-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-[#0E84B8] focus-visible:ring-[#0E84B8]/50 focus-visible:ring-[3px] ${
                      errors.service
                        ? "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-200"
                        : "border-[#E2E8F0]"
                    } ${!formData.service ? "text-muted-foreground" : "text-[#142A33]"}`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Estimated Capacity */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="quote-capacity"
                    className="text-sm font-medium text-[#3C4D57]"
                  >
                    Estimated Capacity
                  </Label>
                  <Input
                    id="quote-capacity"
                    name="capacity"
                    type="text"
                    placeholder="e.g., 500 KLD, 5 MLD"
                    value={formData.capacity}
                    onChange={handleChange}
                  />
                </div>

                {/* Message/Requirements */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="quote-message"
                    className="text-sm font-medium text-[#3C4D57]"
                  >
                    Message / Requirements
                  </Label>
                  <Textarea
                    id="quote-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your water treatment requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0E84B8] hover:bg-[#0B6E9A] text-white font-semibold h-11 rounded-lg shadow-md transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Quote Request →"
                  )}
                </Button>

                {/* Response time badge */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <div className="flex items-center gap-1.5 bg-[#8CC63F]/10 border border-[#8CC63F]/20 rounded-full px-3 py-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#8CC63F]" />
                    <span className="text-xs font-medium text-[#8CC63F]">
                      We respond within 24 hours
                    </span>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
