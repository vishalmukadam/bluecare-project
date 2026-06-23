"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Phone,
  Mail,
  ArrowLeft,
  Users,
  Shield,
  Award,
  Target,
  Eye,
  CheckCircle,
  Leaf,
  Clock,
  ThumbsUp,
  Headphones,
  BadgeCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─────────────────────── Animation Variants ─────────────────────── */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ─────────────────────── Stats ─────────────────────── */

const stats = [
  { value: "200+", label: "Projects Delivered", icon: <Award className="w-5 h-5" />, color: "#20B0E0" },
  { value: "50+", label: "Expert Professionals", icon: <Users className="w-5 h-5" />, color: "#8CC63F" },
  { value: "15+", label: "Years Experience", icon: <Clock className="w-5 h-5" />, color: "#0E84B8" },
  { value: "98%", label: "Client Satisfaction", icon: <ThumbsUp className="w-5 h-5" />, color: "#E0B040" },
];

/* ─────────────────────── Market Strengths ─────────────────────── */

const marketStrengths = [
  { title: "Contemporary Manufacturing Unit", icon: <Building2 className="w-5 h-5" />, color: "#20B0E0" },
  { title: "Exemplary Quality", icon: <BadgeCheck className="w-5 h-5" />, color: "#8CC63F" },
  { title: "Experienced & Professional Workforce", icon: <Users className="w-5 h-5" />, color: "#0E84B8" },
  { title: "Timely Completion of Projects", icon: <Clock className="w-5 h-5" />, color: "#E0B040" },
  { title: "Splendid After-Sales Service", icon: <Headphones className="w-5 h-5" />, color: "#20B0E0" },
  { title: "Prompt Response to Customer Queries", icon: <Wrench className="w-5 h-5" />, color: "#8CC63F" },
  { title: "Stringent Quality Assurance System", icon: <Shield className="w-5 h-5" />, color: "#0E84B8" },
  { title: "Economical Price of Spares", icon: <Truck className="w-5 h-5" />, color: "#E0B040" },
  { title: "Timely Execution of Orders", icon: <CheckCircle className="w-5 h-5" />, color: "#20B0E0" },
];

/* ─────────────────────── Quality Policy Items ─────────────────────── */

const qualityPolicyItems = [
  {
    title: "Commitment to Excellence",
    description:
      "We are committed to delivering the highest quality in wastewater treatment services. Our goal is to exceed customer expectations through continuous improvement, innovation, and the effective use of advanced technologies.",
    icon: <Award className="w-6 h-6" />,
    color: "#20B0E0",
  },
  {
    title: "Regulatory Compliance",
    description:
      "We adhere strictly to all relevant environmental regulations and standards. Our operations are designed to comply with local, national, and international laws, ensuring the protection of public health and the environment.",
    icon: <Shield className="w-6 h-6" />,
    color: "#8CC63F",
  },
  {
    title: "Environmental Responsibility",
    description:
      "We are dedicated to minimizing our environmental footprint. Through sustainable practices, resource conservation, and pollution prevention, we aim to protect and preserve natural resources for future generations.",
    icon: <Leaf className="w-6 h-6" />,
    color: "#0E84B8",
  },
];

/* ─────────────────────── Component ─────────────────────── */

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE]">
      {/* ─── Minimal Hero Banner ─── */}
      <section className="relative h-[250px] overflow-hidden mt-20 bg-white">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="hidden sm:flex items-center gap-2 text-sm text-[#3C4D57]/60 mb-4"
          >
            <Link href="/" className="hover:text-[#20B0E0] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#20B0E0] font-medium">About Us</span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-5xl font-bold text-[#142A33] leading-tight"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
              BlueCare Systems
            </span>
          </motion.h1>
        </div>

        {/* Bottom curve separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              fill="#F8FAFE"
            />
          </svg>
        </div>
      </section>

      {/* ─── About BlueCare Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20B0E0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8CC63F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <picture className="w-full h-auto">
                  <source srcSet="/about-us-content.avif" type="image/avif" />
                  <source srcSet="/about-us-content.webp" type="image/webp" />
                  <img
                    src="/about-us-content.png"
                    alt="BlueCare Systems team at work in water treatment facility"
                    width={1024}
                    height={1024}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </picture>
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D5C]/30 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-xl shadow-xl p-4 border border-[#E2E8F0]/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#20B0E0] to-[#0E84B8] flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#142A33]">15+</p>
                    <p className="text-xs text-[#3C4D57]">Years of Experience</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#20B0E0]/20 rounded-2xl -z-10" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
            >
              <div className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-5">
                <Building2 className="w-4 h-4 text-[#20B0E0]" />
                <span className="text-[#0E84B8] text-sm font-semibold">About Our Company</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-6 leading-tight">
                Comprehensive Environmental{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                  Solutions Under One Roof
                </span>
              </h2>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                Bluecare Systems Pvt. Ltd. has a young dynamic experienced team with vast
                experience in providing comprehensive and integrated environmental solutions
                under one roof. We especially set great importance to reliable, low maintenance
                systems of high economic efficiency — i.e., sustainable, environmentally
                friendly, and innovative solutions.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                Our main areas of focus are on{" "}
                <strong className="text-[#142A33]">pollution prevention through Recovery/Reuse,
                Resource conservation, waste treatment/disposal, and water management</strong>.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-5">
                Our wide business network and healthy relations with eminent OEM suppliers
                help us deliver quality products to our clients. As a quality-oriented
                organization, we make sure to serve our clients in an ethical and
                cost-effective way.
              </p>

              <p className="text-[#3C4D57] text-lg leading-relaxed mb-0">
                Bluecare Systems Pvt. Ltd. is committed to promoting{" "}
                <strong className="text-[#142A33]">long-term partnerships</strong> with
                customers and suppliers. We are dedicated to working closely with you to
                provide optimal solutions quickly. Through close collaboration with our
                partners and our proactive sourcing capabilities, we provide a broad range
                of products, innovative services, and tailored solutions to meet your
                unique requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ─── Market Strengths Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#8CC63F]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#20B0E0]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#8CC63F]/10 rounded-full px-4 py-1.5 mb-5">
              <Award className="w-4 h-4 text-[#8CC63F]" />
              <span className="text-[#6BA830] text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4 leading-tight">
              Factors That Enable Us to Maintain a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                Privileged Position
              </span>
            </h2>
            <p className="text-[#3C4D57] text-lg max-w-2xl mx-auto">
              Through our established warehouse facilities, we offer unrivalled material
              handling expertise and logistical capabilities to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {marketStrengths.map((item, i) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="group flex items-center gap-4 bg-[#F8FAFE] rounded-xl p-5 border border-[#E2E8F0]/60 hover:border-[#20B0E0]/30 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{ backgroundColor: `${item.color}12`, color: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-[#142A33] text-base font-semibold group-hover:text-[#0E84B8] transition-colors duration-200">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#F8FAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-5">
              <Target className="w-4 h-4 text-[#20B0E0]" />
              <span className="text-[#0E84B8] text-sm font-semibold">Our Purpose</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4 leading-tight">
              Mission &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                Vision
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              className="relative bg-white rounded-2xl p-8 md:p-10 border border-[#E2E8F0]/60 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#20B0E0] to-[#0E84B8]" />
              {/* Decorative blur */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#20B0E0]/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#20B0E0] to-[#0E84B8] flex items-center justify-center shadow-md">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#142A33]">Our Mission</h3>
                </div>

                <p className="text-[#3C4D57] text-lg leading-relaxed">
                  To provide innovative and sustainable wastewater treatment solutions that
                  protect public health, preserve the environment, and promote the
                  responsible use of water resources. We are committed to delivering
                  high-quality services through{" "}
                  <strong className="text-[#142A33]">cutting-edge technology, community
                  engagement, and a dedicated workforce</strong>, ensuring the efficient
                  and safe treatment of wastewater for the benefit of current and future
                  generations.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              className="relative bg-white rounded-2xl p-8 md:p-10 border border-[#E2E8F0]/60 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8CC63F] to-[#6BA830]" />
              {/* Decorative blur */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#8CC63F]/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8CC63F] to-[#6BA830] flex items-center justify-center shadow-md">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#142A33]">Our Vision</h3>
                </div>

                <p className="text-[#3C4D57] text-lg leading-relaxed">
                  To pioneer sustainable solutions in industrial wastewater treatment,
                  ensuring environmental stewardship and operational excellence through{" "}
                  <strong className="text-[#142A33]">innovation, expertise, and
                  commitment to our global community</strong>. We envision a future where
                  every industry has access to efficient, eco-friendly water treatment
                  that protects our planet&apos;s most precious resource.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Quality Policy Section ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#0E84B8]/10 rounded-full px-4 py-1.5 mb-5">
              <Shield className="w-4 h-4 text-[#0E84B8]" />
              <span className="text-[#0E84B8] text-sm font-semibold">Quality Policy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#142A33] mb-4 leading-tight">
              Our Commitment to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B0E0] to-[#8CC63F]">
                Quality & Compliance
              </span>
            </h2>
            <p className="text-[#3C4D57] text-lg max-w-2xl mx-auto">
              Benefit from our expertise in product applications and technical requirements.
              We guarantee the safe, professional, and competent handling of your products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {qualityPolicyItems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                className="relative bg-[#F8FAFE] rounded-2xl p-8 border border-[#E2E8F0]/60 hover:border-[#20B0E0]/30 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: item.color }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md"
                    style={{ backgroundColor: item.color, color: "white" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#142A33] mb-3 group-hover:text-[#0E84B8] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-[#3C4D57] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section id="contact-section" className="py-20 relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="green-cta-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#20B0E0] via-[#0E84B8] to-[#8CC63F]" />
            {/* Blurred circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#20B0E0]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8CC63F]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#20B0E0] to-[#0E84B8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner With BlueCare Systems
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Let our experienced team deliver sustainable, innovative, and
                cost-effective water and wastewater treatment solutions tailored
                to your unique requirements.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact">
                  <Button className="bg-[#0E84B8] hover:bg-[#0B6E9A] text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                    Request a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919987088708">
                  <Button
                    variant="outline"
                    className="border-white/25 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold text-lg transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
                  </Button>
                </a>
              </div>

              {/* Quick contact info */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@bluecare.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 99870 88708</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Back to Home ─── */}
      <div className="py-8 bg-white border-t border-[#E2E8F0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0E84B8] hover:text-[#0B6E9A] font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
