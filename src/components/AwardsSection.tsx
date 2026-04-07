"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";
import AmbientParticles from "./AmbientParticles";

const awards = [
  {
    title: "2nd Place — FIRST Robotics",
    subtitle: "Among 193 Nations",
    icon: Trophy,
    color: "#00d4ff",
    year: "2024",
  },
  {
    title: "International Excellence Award",
    subtitle: "FIRST Robotics Competition",
    icon: Star,
    color: "#4facfe",
    year: "2024",
  },
  {
    title: "Innovation Award",
    subtitle: "FIRST Robotics Competition",
    icon: Star,
    color: "#4facfe",
    year: "2024",
  },
  {
    title: "NASA Space Apps — Global Finalist",
    subtitle: "Project ZEUS",
    icon: Trophy,
    color: "#00d4ff",
    year: "2022",
  },
  {
    title: "1st Place — AWS Category",
    subtitle: "International Space Challenge",
    icon: Trophy,
    color: "#00d4ff",
    year: "2021",
  },
  {
    title: "IAAC Bronze Award",
    subtitle: "International Aerospace Community",
    icon: Medal,
    color: "#4facfe",
    year: "",
  },
  {
    title: "UAE National Space Week Hackathon",
    subtitle: "Runners Up",
    icon: Medal,
    color: "#0066cc",
    year: "",
  },
  {
    title: "Planetary Defence & Asteroid Redirection Program",
    subtitle: "AMEX & AIP Recognition",
    icon: Star,
    color: "#0066cc",
    year: "",
  },
];

export default function AwardsSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0a0e1a]" id="awards">
      <AmbientParticles id="awards-particles" density={20} opacity={0.15} speed={0.25} color={["#00d4ff", "#ffd700"]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">
            Recognition
          </span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Awards & Honors</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-card p-5 hover:border-[#00d4ff]/30 transition-all duration-300 group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{
                  backgroundColor: `${award.color}15`,
                  border: `1px solid ${award.color}30`,
                }}
              >
                <award.icon size={18} style={{ color: award.color }} />
              </div>
              <h3 className="text-[#e6edf3] font-semibold text-sm mb-1 group-hover:text-[#00d4ff] transition-colors">
                {award.title}
              </h3>
              <p className="text-[#8b949e] text-xs">{award.subtitle}</p>
              {award.year && (
                <p className="text-[#8b949e] text-xs font-mono mt-1">{award.year}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
