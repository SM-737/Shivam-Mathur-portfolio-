"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import AmbientParticles from "./AmbientParticles";

const experiences = [
  {
    title: "LATTICE Developer",
    company: "Anduril Industries",
    period: "01/2026 – Present",
    location: "Remote",
    type: "Full-time",
    color: "#00d4ff",
    description:
      "Developing next-generation unified Command & Control (C2) systems on the LATTICE platform. Contributing to software architecture for autonomous defense systems and sensor fusion pipelines.",
    tags: ["LATTICE", "C2 Systems", "Defense Tech", "Systems Engineering"],
  },
  {
    title: "Founder & Director",
    company: "Baxter Dynamics",
    period: "08/2025 – Present",
    location: "Wollongong, Australia",
    type: "Founder",
    color: "#4facfe",
    description:
      "Founded the robotics association at University of Wollongong. Building collaborative research projects in autonomous systems, soft robotics, and aerospace-adjacent mechanical design.",
    tags: ["Robotics", "Leadership", "R&D", "UOW"],
  },
  {
    title: "Team Lead",
    company: "AI Grand Prix",
    period: "02/2026 – Present",
    location: "International",
    type: "Competition",
    color: "#4facfe",
    description:
      "Leading team in international AI competition focused on intelligent systems and machine learning applications.",
    tags: ["AI", "Leadership", "Machine Learning"],
  },
  {
    title: "Founder & Director",
    company: "Innoventures Aerospace Society",
    period: "12/2022 – Present",
    location: "Dubai, UAE",
    type: "Founder",
    color: "#0066cc",
    description:
      "Founded and lead an aerospace society focused on drones, fixed-wing aircraft, and rocketry. Organized workshops, competitions, and research initiatives to inspire young engineers in the UAE.",
    tags: ["Aerospace", "Drones", "Rocketry", "Leadership"],
  },
  {
    title: "Research Team Member",
    company: "NASA STMD / NIAC",
    period: "04/2017 – Present",
    location: "Remote / USA",
    type: "Research",
    color: "#00d4ff",
    description:
      "Contributed to multiple NASA-affiliated research projects including VOS (Venus Operations Study), DSE (Deep Space Exploration), MSL/EV (Mars Surface Laboratory / Electric Vehicle), AREE (Automaton Rover for Extreme Environments), and RARC (Robotic Asteroid Redirect Concept).",
    tags: ["NASA", "Mars", "Venus", "Space Systems", "NIAC"],
  },
  {
    title: "Mechanical & Electrical Team",
    company: "FIRST Robotics UAE",
    period: "07/2024 – 09/2024",
    location: "UAE",
    type: "Competition",
    color: "#4facfe",
    description:
      "Designed and built competition robot mechanisms and electrical systems. Team achieved 2nd place among 193 nations, earning the International Excellence Award and Innovation Award.",
    tags: ["Robotics", "Mechanical Design", "Electrical Systems", "FIRST"],
  },
  {
    title: "Team Lead",
    company: "NASA Space Apps Challenge",
    period: "08/2022 – 10/2022",
    location: "UAE",
    type: "Competition",
    color: "#0066cc",
    description:
      "Led Project ZEUS to global finalist standing in NASA's international hackathon. Developed an innovative space technology solution that competed against teams from 150+ countries.",
    tags: ["NASA", "Hackathon", "Project ZEUS", "Space Tech"],
  },
  {
    title: "Robotics & Payload Lead",
    company: "International Space Challenge",
    period: "09/2020 – 11/2021",
    location: "International",
    type: "Competition",
    color: "#0066cc",
    description:
      "Led robotics and payload systems design in international space engineering challenge. Team achieved 1st place in the AWS category.",
    tags: ["Robotics", "Payload", "AWS", "Space Challenge"],
  },
  {
    title: "Speaker",
    company: "IAF GLEX 2021",
    period: "06/2021",
    location: "Russia",
    type: "Conference",
    color: "#4facfe",
    description:
      "Presented the MSL/EV Mars surface exploration concept at the International Astronautical Federation Global Space Exploration Conference in Russia.",
    tags: ["IAF", "GLEX", "Mars", "Public Speaking"],
  },
];

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
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">
            Career
          </span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/60 via-[#00d4ff]/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="relative pl-8 md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[-5px] md:left-[19px] top-6 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: exp.color,
                    backgroundColor: "#0a0e1a",
                    boxShadow: `0 0 8px ${exp.color}60`,
                  }}
                />

                {/* Card */}
                <div className="glass-card p-6 hover:border-[#00d4ff]/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} style={{ color: exp.color }} />
                        <h3 className="text-[#e6edf3] font-semibold text-lg">{exp.title}</h3>
                      </div>
                      <p className="font-semibold mt-0.5" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <div className="flex items-center gap-1 text-[#8b949e] text-xs">
                        <Calendar size={12} />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#8b949e] text-xs">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded text-xs font-mono"
                        style={{
                          color: exp.color,
                          backgroundColor: `${exp.color}15`,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#8b949e] text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#161b22] text-[#8b949e] text-xs rounded border border-[#21262d] group-hover:border-[#00d4ff]/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
