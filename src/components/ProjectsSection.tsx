"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Bot, Rocket, Target, Navigation, ExternalLink, ChevronRight } from "lucide-react";
import AmbientParticles from "./AmbientParticles";

const projects = [
  {
    id: "qresar",
    icon: Shield,
    title: "Project QRESAR",
    subtitle: "Quantum Radar Early Sensing and Ranging",
    role: "Research Lead",
    status: "Active",
    color: "#00d4ff",
    category: "Defense",
    gradient: "from-[#00d4ff]/20 via-[#0d1f3c] to-[#0a0e1a]",
    description:
      "Research into quantum radar technology for stealth detection and precision targeting. Exploring quantum entanglement-based radar systems that offer immunity to jamming and enhanced target discrimination beyond classical radar limits.",
    highlights: ["Quantum entanglement radar", "Stealth target discrimination", "Jam-resistant detection"],
    tags: ["Quantum Physics", "Radar Systems", "Defense", "Signal Processing"],
  },
  {
    id: "haven",
    icon: Zap,
    title: "Project HAVEN",
    subtitle: "Hypersonic Acoustic Vibration Elimination Network",
    role: "Research Lead",
    status: "Active",
    color: "#4facfe",
    category: "Hypersonics",
    gradient: "from-[#4facfe]/20 via-[#0d1f3c] to-[#0a0e1a]",
    description:
      "Developing acoustic vibration suppression systems for hypersonic vehicles operating above Mach 5. Addresses structural resonance and thermal-acoustic coupling that threatens vehicle integrity at extreme velocities.",
    highlights: ["Mach 5+ operation", "Thermal-acoustic coupling", "Structural resonance control"],
    tags: ["Hypersonics", "Vibration Control", "Structural Dynamics", "Acoustics"],
  },
  {
    id: "arise",
    icon: Bot,
    title: "ARISE",
    subtitle: "Adaptive Robotic Interface for Support and Endurance",
    role: "Research Lead",
    status: "Active",
    color: "#00d4ff",
    category: "Robotics",
    gradient: "from-[#00d4ff]/15 via-[#0a1a2e] to-[#0a0e1a]",
    description:
      "Soft robotic exoskeleton designed to augment human physical capability in demanding environments. Combines compliant actuators, bio-inspired control, and real-time sensor fusion for natural motion assistance.",
    highlights: ["Compliant soft actuators", "Bio-inspired control", "Real-time sensor fusion"],
    tags: ["Soft Robotics", "Exoskeleton", "Bio-inspired", "Human Augmentation"],
  },
  {
    id: "hypersonic-aircraft",
    icon: Rocket,
    title: "Hypersonic Aircraft Research",
    subtitle: "Thrust, Engine & Intake Optimization",
    role: "Research Lead",
    status: "Ongoing",
    color: "#4facfe",
    category: "Hypersonics",
    gradient: "from-[#ff6b35]/15 via-[#0d1f3c] to-[#0a0e1a]",
    description:
      "Comprehensive research on hypersonic propulsion systems, focusing on ramjet-scramjet transition dynamics, detonation-based augmentation, and structural acoustic stability. Published in AIAA and Italian Aeronautics Journal.",
    highlights: ["AIAA Published 2025", "Ramjet-Scramjet transition", "Detonation augmentation"],
    tags: ["Hypersonics", "Scramjet", "Propulsion", "AIAA Published"],
    published: true,
  },
  {
    id: "aam-missile",
    icon: Target,
    title: "AAM Missile Deterrence",
    subtitle: "Sensor-Fused Dead Reckoning RWR System",
    role: "Research Lead",
    status: "Active",
    color: "#0066cc",
    category: "Defense",
    gradient: "from-[#0066cc]/20 via-[#0d1f3c] to-[#0a0e1a]",
    description:
      "Developing an advanced radar warning receiver (RWR) system for USAF/NATO platforms using sensor-fused dead reckoning to track and counter air-to-air missile threats with high precision under jamming conditions.",
    highlights: ["USAF/NATO platforms", "Electronic warfare", "Dead reckoning tracking"],
    tags: ["Defense", "USAF", "NATO", "Sensor Fusion", "Electronic Warfare"],
  },
  {
    id: "gnc",
    icon: Navigation,
    title: "GNC Control System",
    subtitle: "Kalman Filter Guidance for High-Speed Rockets",
    role: "Research Lead",
    status: "Development",
    color: "#0066cc",
    category: "Space",
    gradient: "from-[#6b35ff]/15 via-[#0d1f3c] to-[#0a0e1a]",
    description:
      "Guidance, Navigation, and Control system using extended Kalman filter algorithms for precision trajectory management of rockets at Mach 4+ velocities. Handles sensor noise, atmospheric disturbances, and thrust vectoring.",
    highlights: ["Mach 4+ guidance", "Extended Kalman filter", "Thrust vector control"],
    tags: ["GNC", "Kalman Filter", "Rocketry", "Control Theory", "MATLAB"],
  },
];

const categories = ["All", "Defense", "Hypersonics", "Robotics", "Space"];

const statusColors: Record<string, string> = {
  Active: "#00d4ff",
  Ongoing: "#4facfe",
  Development: "#0066cc",
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative overflow-hidden py-24 bg-[#0a0e1a]" id="projects">
      <AmbientParticles id="projects-particles" density={35} opacity={0.2} speed={0.35} linked={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Research & Development</span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#00d4ff] text-[#0a0e1a] shadow-lg shadow-[#00d4ff]/25"
                  : "glass-card text-[#8b949e] hover:text-[#e6edf3] hover:border-[#00d4ff]/30"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({projects.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="glass-card flex flex-col overflow-hidden group cursor-default"
              >
                {/* Project visual thumbnail */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
                >
                  {/* Background grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `
                        linear-gradient(${project.color} 1px, transparent 1px),
                        linear-gradient(90deg, ${project.color} 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Animated scanning line */}
                  <motion.div
                    animate={hoveredId === project.id ? { y: ["-100%", "300%"] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-px opacity-40"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                  />

                  {/* Large icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={hoveredId === project.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <project.icon
                        size={52}
                        style={{ color: project.color, opacity: 0.4 }}
                      />
                    </motion.div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l opacity-60" style={{ borderColor: project.color }} />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t border-r opacity-60" style={{ borderColor: project.color }} />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l opacity-60" style={{ borderColor: project.color }} />

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2 py-0.5 text-xs font-mono rounded"
                      style={{
                        color: statusColors[project.status] || project.color,
                        backgroundColor: `${statusColors[project.status] || project.color}20`,
                        border: `1px solid ${statusColors[project.status] || project.color}40`,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Published badge */}
                  {project.published && (
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 text-xs font-mono rounded bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/40 flex items-center gap-1">
                        <ExternalLink size={10} />
                        AIAA Published
                      </span>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Category pill */}
                  <span className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: project.color }}>
                    {project.category}
                  </span>

                  <h3
                    className="text-base font-bold mb-0.5 group-hover:text-[#00d4ff] transition-colors duration-300"
                    style={{ color: "#e6edf3" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono mb-1" style={{ color: project.color }}>
                    {project.subtitle}
                  </p>
                  <p className="text-[#8b949e] text-xs mb-3">Role: {project.role}</p>

                  <p className="text-[#8b949e] text-sm leading-relaxed mb-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-[#8b949e]">
                        <ChevronRight size={10} style={{ color: project.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 bg-[#0d1117] text-[#8b949e] text-[10px] rounded border border-[#21262d] group-hover:border-[#00d4ff]/15 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
