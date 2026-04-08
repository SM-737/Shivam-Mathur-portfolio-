"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import AmbientParticles from "./AmbientParticles";

const experiences = [
  {
    title: "LATTICE Developer",
    company: "Anduril Industries",
    period: "01/2026 – Present",
    location: "Remote",
    type: "Full-time",
    color: "#00d4ff",
    accentBg: "rgba(0,212,255,0.08)",
    logo: "⚡",
    description:
      "Developing next-generation unified Command & Control (C2) systems on the LATTICE platform. Contributing to software architecture for autonomous defense systems and sensor fusion pipelines enabling multi-domain operations.",
    bullets: [
      "Building software for autonomous defense C2 systems",
      "Sensor fusion pipeline architecture for multi-domain ops",
      "Contributing to Anduril's LATTICE software platform",
    ],
    tags: ["LATTICE", "C2 Systems", "Defense Tech", "Systems Engineering"],
  },
  {
    title: "Team Lead",
    company: "AI Grand Prix",
    period: "02/2026 – Present",
    location: "International",
    type: "Competition",
    color: "#4facfe",
    accentBg: "rgba(79,172,254,0.08)",
    logo: "🤖",
    description:
      "Leading team in international AI competition focused on intelligent systems and machine learning applications in advanced operational contexts.",
    bullets: [
      "Leading cross-functional international team",
      "AI/ML system design for operational applications",
    ],
    tags: ["AI", "Leadership", "Machine Learning"],
  },
  {
    title: "Founder & Director",
    company: "Baxter Dynamics",
    period: "08/2025 – Present",
    location: "Wollongong, Australia",
    type: "Founder",
    color: "#4facfe",
    accentBg: "rgba(79,172,254,0.08)",
    logo: "🦾",
    description:
      "Founded the robotics association at University of Wollongong. Building collaborative research projects in autonomous systems, soft robotics, and aerospace-adjacent mechanical design.",
    bullets: [
      "Founded UOW robotics association from scratch",
      "Leading autonomous systems and soft robotics research",
      "Competing in national and international robotics competitions",
    ],
    tags: ["Robotics", "Leadership", "R&D", "UOW"],
  },
  {
    title: "Founder & Director",
    company: "Innoventures Aerospace Society",
    period: "12/2022 – Present",
    location: "Dubai, UAE",
    type: "Founder",
    color: "#0066cc",
    accentBg: "rgba(0,102,204,0.08)",
    logo: "🚀",
    description:
      "Founded and lead an aerospace society focused on drones, fixed-wing aircraft, and rocketry. Active in regional and AIAA student competitions. Collaborated with the National Association of Rocketry.",
    bullets: [
      "Founded student aerospace society in Dubai",
      "AIAA student competition participation",
      "Drone, aircraft, and rocketry workshops",
    ],
    tags: ["Aerospace", "Drones", "Rocketry", "Leadership"],
  },
  {
    title: "Research Team Member",
    company: "NASA STMD / NIAC",
    period: "04/2017 – Present",
    location: "Remote / USA",
    type: "Research",
    color: "#00d4ff",
    accentBg: "rgba(0,212,255,0.08)",
    logo: "🛸",
    description:
      "Contributed to multiple NASA-affiliated research projects including VOS (Venus Observatory Satellite), DSE (Deep Space Exploration), MSL/EV (Mars Surface Lander / Exploration Vehicle), AREE (Automaton Rover for Extreme Environments), and RARC.",
    bullets: [
      "Venus Observatory Satellite (VOS) research",
      "Mars Surface Lander / Exploration Vehicle (MSL/EV)",
      "Automaton Rover for Extreme Environments (AREE)",
      "Robotic Assembly Research Concept (RARC)",
    ],
    tags: ["NASA", "Mars", "Venus", "Space Systems", "NIAC"],
  },
  {
    title: "Mechanical & Electrical Team",
    company: "FIRST Robotics UAE",
    period: "07/2024 – 09/2024",
    location: "Athens, Greece",
    type: "Competition",
    color: "#4facfe",
    accentBg: "rgba(79,172,254,0.08)",
    logo: "🏆",
    description:
      "Designed and built competition robot mechanisms and electrical systems. Team achieved 2nd place among 193 nations, earning the International Excellence Award, Social Media Challenge Award, and International Enthusiasm Award.",
    bullets: [
      "2nd place robot game — 193 competing nations",
      "International Excellence Award recipient",
      "Lead mechanical and electrical systems design",
    ],
    tags: ["Robotics", "Mechanical Design", "Electrical Systems", "FIRST"],
  },
  {
    title: "Team Lead",
    company: "NASA Space Apps Challenge",
    period: "08/2022 – 10/2022",
    location: "UAE",
    type: "Competition",
    color: "#0066cc",
    accentBg: "rgba(0,102,204,0.08)",
    logo: "🌙",
    description:
      "Led Project ZEUS to global finalist standing in NASA's international hackathon. ZEUS (Zero-Electricity Utilization System) — concept for in-situ resource utilization on Venus leveraging atmospheric chemistry.",
    bullets: [
      "Global finalist — 150+ competing countries",
      "Project ZEUS: zero-electricity Venus ISRU concept",
      "Led team design and presentation",
    ],
    tags: ["NASA", "Hackathon", "Project ZEUS", "Venus ISRU"],
  },
  {
    title: "Robotics & Payload Lead",
    company: "International Space Challenge",
    period: "09/2020 – 11/2021",
    location: "International",
    type: "Competition",
    color: "#0066cc",
    accentBg: "rgba(0,102,204,0.08)",
    logo: "🌕",
    description:
      "Led robotics and payload systems design for a volatile-extracting lunar rover concept. Secured 1st place in AWS category for cloud-connected autonomy architecture.",
    bullets: [
      "1st Place — AWS category",
      "Lunar volatile extraction rover design",
      "Cloud-connected autonomous architecture",
    ],
    tags: ["Robotics", "Payload", "AWS", "Lunar Rover"],
  },
  {
    title: "Speaker",
    company: "IAF GLEX 2021",
    period: "06/2021",
    location: "Moscow, Russia",
    type: "Conference",
    color: "#4facfe",
    accentBg: "rgba(79,172,254,0.08)",
    logo: "🎤",
    description:
      "Presented the MSL/EV Mars surface exploration concept at the International Astronautical Federation Global Space Exploration Conference in Moscow.",
    bullets: [
      "Presented to international astronautics community",
      "MSL/EV: Mars Surface Lander / Exploration Vehicle concept",
      "IAF GLEX 2021 — Moscow, Russia",
    ],
    tags: ["IAF", "GLEX", "Mars", "Public Speaking"],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.06, 0.4), duration: 0.5 }}
      className="relative pl-10 md:pl-16"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: Math.min(index * 0.06, 0.4) + 0.1, type: "spring" }}
        className="absolute left-[-5px] md:left-[19px] top-5 w-3.5 h-3.5 rounded-full border-2 z-10"
        style={{
          borderColor: exp.color,
          backgroundColor: "#0a0e1a",
          boxShadow: `0 0 10px ${exp.color}70, 0 0 20px ${exp.color}30`,
        }}
      />

      {/* Card */}
      <div
        className="glass-card overflow-hidden transition-all duration-300 hover:border-[#00d4ff]/30 hover:shadow-lg"
        style={{ ["--hover-shadow" as string]: `0 8px 30px ${exp.color}15` }}
      >
        {/* Card header — always visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full p-5 text-left"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              {/* Logo */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 mt-0.5"
                style={{ backgroundColor: exp.accentBg, border: `1px solid ${exp.color}30` }}
              >
                {exp.logo}
              </div>
              <div>
                <h3 className="text-[#e6edf3] font-semibold text-base leading-tight">{exp.title}</h3>
                <p className="font-semibold text-sm mt-0.5" style={{ color: exp.color }}>
                  {exp.company}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-1.5">
                  <span className="flex items-center gap-1 text-[#8b949e] text-xs">
                    <Calendar size={11} />
                    <span className="font-mono">{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#8b949e] text-xs">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{
                      color: exp.color,
                      backgroundColor: exp.accentBg,
                      border: `1px solid ${exp.color}30`,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0 mt-1"
            >
              <ChevronDown size={16} className="text-[#8b949e]" />
            </motion.div>
          </div>
        </button>

        {/* Expandable body */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 space-y-4">
                {/* Divider */}
                <div className="h-px" style={{ background: `linear-gradient(90deg, ${exp.color}40, transparent)` }} />

                {/* Description */}
                <p className="text-[#8b949e] text-sm leading-relaxed">{exp.description}</p>

                {/* Bullet points */}
                <ul className="space-y-1.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#8b949e]">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: exp.color }} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#0d1117] text-[#8b949e] text-xs rounded border border-[#21262d] hover:border-[#00d4ff]/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0a0e1a]" id="experience">
      <AmbientParticles id="experience-particles" density={25} opacity={0.15} speed={0.3} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Career</span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
          <p className="text-[#8b949e] mt-3 text-sm">Click any card to expand details</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/60 via-[#00d4ff]/20 to-transparent" />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: "Years of Research", value: "7+", icon: "🔬" },
            { label: "Organizations Founded", value: "3", icon: "🏢" },
            { label: "Competition Awards", value: "5+", icon: "🏆" },
            { label: "NASA Projects", value: "5", icon: "🚀" },
          ].map(({ label, value, icon }) => (
            <div key={label} className="glass-card p-4 text-center hover:border-[#00d4ff]/30 transition-colors group">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">{value}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
