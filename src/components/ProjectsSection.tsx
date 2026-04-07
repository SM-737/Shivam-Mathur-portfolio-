"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Bot, Rocket, Target, Navigation } from "lucide-react";

const projects = [
  {
    id: "qresar",
    icon: Shield,
    title: "Project QRESAR",
    subtitle: "Quantum Radar Early Sensing and Ranging",
    role: "Research Lead",
    status: "Active",
    color: "#00d4ff",
    description:
      "Research into quantum radar technology for stealth detection and precision targeting. Exploring quantum entanglement-based radar systems that offer immunity to jamming and enhanced target discrimination.",
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
    description:
      "Developing acoustic vibration suppression systems for hypersonic vehicles operating above Mach 5. Addresses structural resonance and thermal-acoustic coupling that threatens vehicle integrity at extreme velocities.",
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
    description:
      "Soft robotic exoskeleton designed to augment human physical capability in demanding environments. Combines compliant actuators, bio-inspired control, and real-time sensor fusion for natural motion assistance.",
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
    description:
      "Comprehensive research on hypersonic propulsion systems, focusing on ramjet-scramjet transition dynamics, detonation-based augmentation, and structural acoustic stability. Published in AIAA and Italian Aeronautics Journal.",
    tags: ["Hypersonics", "Scramjet", "Propulsion", "AIAA Published"],
  },
  {
    id: "aam-missile",
    icon: Target,
    title: "AAM Missile Deterrence",
    subtitle: "Sensor-Fused Dead Reckoning RWR System",
    role: "Research Lead",
    status: "Active",
    color: "#0066cc",
    description:
      "Developing an advanced radar warning receiver (RWR) system for USAF/NATO platforms using sensor-fused dead reckoning to track and counter air-to-air missile threats with high precision under jamming conditions.",
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
    description:
      "Guidance, Navigation, and Control system using extended Kalman filter algorithms for precision trajectory management of rockets at Mach 4+ velocities. Handles sensor noise, atmospheric disturbances, and thrust vectoring.",
    tags: ["GNC", "Kalman Filter", "Rocketry", "Control Theory", "MATLAB"],
  },
];

const statusColors: Record<string, string> = {
  Active: "#00d4ff",
  Ongoing: "#4facfe",
  Development: "#0066cc",
};

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-[#0a0e1a]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">
            Research & Development
          </span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-[#00d4ff]/30 hover:shadow-lg hover:shadow-[#00d4ff]/5 transition-all duration-300 flex flex-col"
            >
              {/* Icon + status */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  <project.icon size={22} style={{ color: project.color }} />
                </div>
                <span
                  className="px-2 py-0.5 text-xs font-mono rounded"
                  style={{
                    color: statusColors[project.status] || project.color,
                    backgroundColor: `${statusColors[project.status] || project.color}15`,
                    border: `1px solid ${statusColors[project.status] || project.color}30`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-1 group-hover:text-[#00d4ff] transition-colors"
                style={{ color: "#e6edf3" }}
              >
                {project.title}
              </h3>
              <p className="text-xs font-mono mb-1" style={{ color: project.color }}>
                {project.subtitle}
              </p>
              <p className="text-[#8b949e] text-xs mb-3">Role: {project.role}</p>

              <p className="text-[#8b949e] text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#0d1117] text-[#8b949e] text-xs rounded border border-[#21262d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
