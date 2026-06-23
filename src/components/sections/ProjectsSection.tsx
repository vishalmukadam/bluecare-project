"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, MapPin, Calendar, Award } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Pharmaceutical ZLD System",
    category: "Zero Liquid Discharge",
    location: "Maharashtra, India",
    description:
      "Complete ZLD system for a leading pharmaceutical manufacturer, achieving 100% water reuse and recovering valuable salts.",
    capacity: "500 KLD",
    tag: "Certified",
    tagColor: "#E0B040",
  },
  {
    title: "Municipal STP Plant",
    category: "Sewage Treatment",
    location: "Gujarat, India",
    description:
      "Large-scale MBBR-based sewage treatment plant serving a municipal corporation with consistent output quality.",
    capacity: "5 MLD",
    tag: "Ongoing",
    tagColor: "#8CC63F",
  },
  {
    title: "Chemical Industry ETP",
    category: "Effluent Treatment",
    location: "Rajasthan, India",
    description:
      "Advanced effluent treatment plant for a chemical manufacturing unit with complex wastewater characteristics.",
    capacity: "200 KLD",
    tag: "Completed",
    tagColor: "#20B0E0",
  },
  {
    title: "Food Processing Water Recycling",
    category: "Water Recycling",
    location: "Karnataka, India",
    description:
      "Water recycling system for a food processing unit, reducing fresh water consumption by 80% through advanced membrane technology.",
    capacity: "300 KLD",
    tag: "Ongoing",
    tagColor: "#8CC63F",
  },
  {
    title: "Textile Industry ZLD",
    category: "Zero Liquid Discharge",
    location: "Tamil Nadu, India",
    description:
      "Zero liquid discharge system for a textile dyeing unit recovering salts and enabling complete water reuse in the process.",
    capacity: "150 KLD",
    tag: "Completed",
    tagColor: "#20B0E0",
  },
  {
    title: "Petrochemical ETP",
    category: "Effluent Treatment",
    location: "Gujarat, India",
    description:
      "High-capacity effluent treatment plant for a petrochemical complex handling complex hydrocarbon-laden wastewater streams.",
    capacity: "800 KLD",
    tag: "Ongoing",
    tagColor: "#8CC63F",
  },
];

const filterCategories = [
  "All Projects",
  "Zero Liquid Discharge",
  "Sewage Treatment",
  "Effluent Treatment",
  "Water Recycling",
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="case-studies"
      className="py-20 lg:py-28 bg-[#F8FAFE] relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative background elements */}
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0E84B8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />
      {/* Blurred decorative circle - blue top-left */}
      <div
        className="absolute -top-48 -left-48 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "#20B0E0",
          opacity: 0.06,
          filter: "blur(80px)",
        }}
      />
      {/* Blurred decorative circle - green bottom-right */}
      <div
        className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "#8CC63F",
          opacity: 0.06,
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 bg-[#20B0E0]/10 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="w-2 h-2 bg-[#20B0E0] rounded-full" />
            <span className="text-[#0E84B8] text-sm font-semibold">
              Case Studies
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142A33] mb-6"
          >
            Our <span className="text-[#20B0E0]">Project Highlights</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-[#3C4D57] text-lg leading-relaxed"
          >
            Explore our successful projects across diverse industries,
            showcasing our expertise in delivering reliable and sustainable
            water treatment solutions.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
          variants={fadeUpVariants}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#0E84B8] text-white shadow-md shadow-[#0E84B8]/20"
                  : "bg-white text-[#3C4D57] hover:bg-[#20B0E0]/10 border border-[#E2E8F0]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const projectIndex = projects.indexOf(project) + 1;
              const numberBadge = projectIndex.toString().padStart(2, "0");

              return (
                <motion.div
                  key={project.title}
                  layout
                  custom={i}
                  variants={fadeUpVariants}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{
                    y: -6,
                    boxShadow: `0 12px 40px ${project.tagColor}15`,
                  }}
                  className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300 group hover:border-[#E2E8F0]"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${project.tagColor}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                  }}
                >
                  {/* Card Header with gradient */}
                  <div className="bg-gradient-to-r from-[#8CC63F] to-[#5A9024] p-6 relative overflow-hidden">
                    {/* Dot pattern in header */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #20B0E0 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>

                    {/* Project number badge */}
                    <div className="absolute top-3 right-4 text-white text-4xl font-black opacity-15 group-hover:opacity-40 transition-opacity duration-300 select-none">
                      {numberBadge}
                    </div>

                    {/* Gradient overlay on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#5A9024]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#20B0E0] text-sm font-medium">
                          {project.category}
                        </span>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${project.tagColor}20`,
                            color: project.tagColor,
                          }}
                        >
                          {project.tag}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-[#8BA3B0] text-sm">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.capacity}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-[#3C4D57] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <button
                      onClick={() =>
                        document
                          .querySelector("#contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="inline-flex items-center text-[#0E84B8] text-sm font-medium group/btn transition-all duration-200"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
