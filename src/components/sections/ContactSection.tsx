"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 99870 88708",
    subDetail: "Mon-Sat, 9am-6pm IST",
    accentColor: "#20B0E0",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "bluecare@bluecare.in",
    subDetail: "We respond within 24 hours",
    accentColor: "#8CC63F",
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formFocused, setFormFocused] = useState(false);

  const validate = useCallback((form: HTMLFormElement): FormErrors => {
    const newErrors: FormErrors = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name) newErrors.name = "Full name is required";
    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!service) newErrors.service = "Please select a service";
    if (!message) newErrors.message = "Message is required";
    else if (message.length < 10) newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json().catch(() => null);
        const errorMsg = result?.error || "Failed to submit form. Please try again.";
        throw new Error(errorMsg);
      }

      toast.success("Message sent successfully! We'll get back to you within 24 hours.", {
        duration: 5000,
      });
      form.reset();
      setErrors({});
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearFieldError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Contact Us
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            Get in <span className="text-[#20B0E0]">Touch</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Have a project in mind or need expert consultation? Our team is
            ready to help you find the perfect water treatment solution.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                custom={i + 3}
                variants={fadeUpVariants}
                whileHover={{ x: 5 }}
                className="group flex items-start gap-4 bg-[#F8FAFE] border border-[#E2E8F0] rounded-xl p-5 transition-all duration-300 hover:border-transparent hover:shadow-md relative overflow-hidden"
              >
                {/* Left accent border on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
                  style={{ backgroundColor: info.accentColor }}
                />
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: info.accentColor }}
                >
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[#142A33] font-semibold mb-1">
                    {info.title}
                  </h4>
                  <p className="text-[#0E84B8] font-medium text-sm">
                    {info.detail}
                  </p>
                  <p className="text-[#3C4D57] text-xs mt-0.5">
                    {info.subDetail}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder with grid overlay */}
            <motion.div
              custom={7}
              variants={fadeUpVariants}
              className="bg-gradient-to-br from-[#7AB530] to-[#5A9024] rounded-xl p-6 relative overflow-hidden h-48 shadow-lg shadow-[#8CC63F]/20"
            >
              {/* Simulated map grid */}
              <div className="absolute inset-0">
                {/* Major grid lines */}
                <div
                  className="w-full h-full opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#20B0E0 1px, transparent 1px), linear-gradient(90deg, #20B0E0 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Minor grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#20B0E0 0.5px, transparent 0.5px), linear-gradient(90deg, #20B0E0 0.5px, transparent 0.5px)",
                    backgroundSize: "10px 10px",
                  }}
                />
                {/* Road-like diagonal lines */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, transparent 48%, #20B0E0 49%, #20B0E0 51%, transparent 52%), linear-gradient(-30deg, transparent 48%, #8CC63F 49%, #8CC63F 51%, transparent 52%)",
                    backgroundSize: "120px 120px",
                  }}
                />
                {/* Dot pattern for landmarks */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #20B0E0 1.5px, transparent 1.5px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5A9024]/50" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="relative">
                  <MapPin className="w-8 h-8 text-white mb-2" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#E0F5B5] rounded-full animate-pulse" />
                </div>
                <p className="text-white font-medium drop-shadow-sm">BlueCare Systems Pvt. Ltd.</p>
                <p className="text-white/85 text-sm drop-shadow-sm max-w-[250px]">Plot No: H-378/378-AB, Growth Centre, Riico Industrial Area, Hamirgarh-311025, Dist-Bhilwara, RAJASTHAN</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.div
              custom={5}
              variants={fadeUpVariants}
              className={`relative rounded-xl transition-all duration-500 ${
                formFocused
                  ? "ring-2 ring-transparent bg-gradient-to-br from-[#20B0E0]/5 via-[#F8FAFE] to-[#8CC63F]/5"
                  : "bg-[#F8FAFE]"
              }`}
              onFocus={() => setFormFocused(true)}
              onBlur={() => setFormFocused(false)}
            >
              {/* Animated gradient border */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
                  formFocused ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: "linear-gradient(135deg, #20B0E0, #8CC63F, #0E84B8, #E0B040, #20B0E0)",
                  backgroundSize: "300% 300%",
                  animation: formFocused ? "gradientShift 4s ease infinite" : "none",
                  padding: "2px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <div className="relative bg-[#F8FAFE] rounded-xl p-8">
                {/* Quick Response Guarantee Badge */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#142A33]">Send us a message</h3>
                  <div className="inline-flex items-center gap-1.5 bg-[#8CC63F]/10 border border-[#8CC63F]/20 rounded-full px-3 py-1 text-xs font-semibold text-[#6B9F2A]">
                    <Zap className="w-3.5 h-3.5" />
                    We respond within 24 hours
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="contact-name" className="block text-sm font-medium text-[#142A33] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        name="name"
                        required
                        placeholder="Your name"
                        onChange={() => clearFieldError("name")}
                        className={`bg-white transition-colors ${
                          errors.name
                            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                            : "border-[#E2E8F0] focus:border-[#20B0E0] focus:ring-[#20B0E0]/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span className="inline-block w-1 h-1 bg-red-500 rounded-full" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="block text-sm font-medium text-[#142A33] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        onChange={() => clearFieldError("email")}
                        className={`bg-white transition-colors ${
                          errors.email
                            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                            : "border-[#E2E8F0] focus:border-[#20B0E0] focus:ring-[#20B0E0]/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span className="inline-block w-1 h-1 bg-red-500 rounded-full" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="contact-phone" className="block text-sm font-medium text-[#142A33] mb-1.5">
                        Phone Number
                      </Label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 99870 88708"
                        className="bg-white border-[#E2E8F0] focus:border-[#20B0E0] focus:ring-[#20B0E0]/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-company" className="block text-sm font-medium text-[#142A33] mb-1.5">
                        Company
                      </Label>
                      <Input
                        id="contact-company"
                        name="company"
                        placeholder="Your company"
                        className="bg-white border-[#E2E8F0] focus:border-[#20B0E0] focus:ring-[#20B0E0]/20"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-service" className="block text-sm font-medium text-[#142A33] mb-1.5">
                      Service Interested In <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      onChange={() => clearFieldError("service")}
                      className={`w-full h-10 rounded-md border bg-white px-3 py-2 text-sm text-[#3C4D57] focus:outline-none focus:ring-2 transition-colors ${
                        errors.service
                          ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                          : "border-[#E2E8F0] focus:ring-[#20B0E0]/20 focus:border-[#20B0E0]"
                      }`}
                    >
                      <option value="">Select a service...</option>
                      <option value="water-treatment">Potable & Process Water</option>
                      <option value="water-recycling">Water Recycling</option>
                      <option value="waste-water-treatment">Waste Water Treatment</option>
                      <option value="zld-systems">ZLD Systems</option>
                      <option value="design-engineering">Design & Engineering</option>
                      <option value="manufacturing">Manufacturing & Equipment</option>
                      <option value="field-service">Field Service / Troubleshooting</option>
                      <option value="retrofits">Retrofits & Plant Upgradation</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-red-500 rounded-full" />
                        {errors.service}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="block text-sm font-medium text-[#142A33] mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project or requirements..."
                      onChange={() => clearFieldError("message")}
                      className={`bg-white transition-colors resize-none ${
                        errors.message
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-[#E2E8F0] focus:border-[#20B0E0] focus:ring-[#20B0E0]/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-red-500 rounded-full" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0E84B8] hover:bg-[#0B6E9A] text-white py-3.5 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg h-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Keyframes for gradient border animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
