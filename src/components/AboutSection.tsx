"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Globe, Award } from "lucide-react";

const education = [
  {
    degree: "B.E. Honours — Mechatronics Engineering (Aerospace)",
    institution: "University of Wollongong",
    period: "2024 – Present",
    location: "Australia",
    highlight: true,
  },
  {
    degree: "MIT Beaverworks Summer Program — Build a CubeSat",
    institution: "Massachusetts Institute of Technology",
    period: "10/2025 – Present",
    location: "Cambridge, MA",
    highlight: true,
  },
  {
    degree: "IBDP — International Baccalaureate",
    institution: "Raffles World Academy Dubai",
    period: "2017 – 2024",
    location: "Dubai, UAE",
    highlight: false,
  },
];

const courses = [
  { title: "Introduction to Aerodynamics", institution: "MIT", period: "12/2024 – 08/2025" },
  { title: "The Science of the Solar System", institution: "Caltech", period: "01/2025 – 05/2025" },
  { title: "Intro to Aerospace Structure and Materials", institution: "TU Delft", period: "09/2024 – 12/2024" },
  { title: "Space Mission Design and Operations", institution: "EPFL", period: "08/2024 – 10/2024" },
  { title: "AI for Intelligence Analysts", institution: "IAIE", period: "02/2026" },
];

const languages = [
  { lang: "English", level: "Native", pct: 100 },
  { lang: "French", level: "Intermediate", pct: 60 },
  { lang: "Spanish", level: "Intermediate", pct: 55 },
];

const certifications = [
  "6 Sigma White Belt",
  "Systems Engineering (NASA JPL)",
  "MBSE / DOORS — IBM",
  "GD&T",
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0d1117]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">
            Background
          </span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={14} className="text-[#00d4ff]" />
                <span className="text-[#8b949e] text-sm">Dubai, UAE / Wollongong, Australia</span>
              </div>
              <p className="text-[#8b949e] leading-relaxed mt-3">
                I am a Mechatronics Engineering student specializing in aerospace systems, 
                currently developing next-generation C2 software as a LATTICE Developer at Anduril Industries.
                With roots in NASA-affiliated research since 2017, I have contributed to Mars exploration 
                concepts, hypersonic aerodynamics, defense deterrence systems, and soft robotics — 
                bridging theoretical research with operational defense applications.
              </p>
              <p className="text-[#8b949e] leading-relaxed mt-3">
                As founder of Baxter Dynamics (robotics association) and Innoventures Aerospace Society, 
                I am passionate about nurturing the next generation of engineers while pushing the boundaries 
                of what is possible in aerospace and autonomous systems.
              </p>
            </motion.div>

            {/* Education timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="flex items-center gap-2 text-[#e6edf3] font-semibold mb-4">
                <GraduationCap size={18} className="text-[#00d4ff]" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={`glass-card p-4 border-l-2 ${
                      edu.highlight ? "border-l-[#00d4ff]" : "border-l-[#21262d]"
                    }`}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <p className="text-[#e6edf3] font-medium text-sm">{edu.degree}</p>
                        <p className="text-[#00d4ff] text-xs mt-1">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#8b949e] text-xs font-mono">{edu.period}</span>
                        <p className="text-[#8b949e] text-xs">{edu.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="flex items-center gap-2 text-[#e6edf3] font-semibold mb-4">
                <Award size={18} className="text-[#00d4ff]" />
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="glass-card px-3 py-2 text-[#8b949e] text-xs border border-[#21262d] hover:border-[#00d4ff]/30 transition-colors"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2 text-[#e6edf3] font-semibold mb-4">
                <GraduationCap size={18} className="text-[#00d4ff]" />
                Advanced Courses
              </h3>
              <div className="space-y-3">
                {courses.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card p-4 flex justify-between items-start gap-3"
                  >
                    <div>
                      <p className="text-[#e6edf3] text-sm font-medium">{c.title}</p>
                      <p className="text-[#00d4ff] text-xs mt-0.5">{c.institution}</p>
                    </div>
                    <span className="text-[#8b949e] text-xs font-mono whitespace-nowrap">{c.period}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="flex items-center gap-2 text-[#e6edf3] font-semibold mb-4">
                <Globe size={18} className="text-[#00d4ff]" />
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((l, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#e6edf3]">{l.lang}</span>
                      <span className="text-[#8b949e]">{l.level}</span>
                    </div>
                    <div className="w-full bg-[#161b22] rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-1.5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#4facfe]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
