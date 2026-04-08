"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, MapPin, Globe, Award, ChevronDown, Briefcase, FlaskConical } from "lucide-react";
import Image from "next/image";
import AmbientParticles from "./AmbientParticles";

const education = [
  {
    degree: "B.E. Honours — Mechatronics Engineering (Aerospace)",
    institution: "University of Wollongong",
    period: "2024 – Present",
    location: "Australia",
    highlight: true,
    notes: ["Calculus 1-2 & Physics", "MATLAB for Engineers", "Statics & Dynamics", "Digital Logic Design"],
  },
  {
    degree: "MIT Beaverworks Summer Program — Build a CubeSat",
    institution: "Massachusetts Institute of Technology",
    period: "10/2025 – Present",
    location: "Cambridge, MA",
    highlight: true,
    notes: [],
  },
  {
    degree: "IBDP — International Baccalaureate",
    institution: "Raffles World Academy Dubai",
    period: "2017 – 2024",
    location: "Dubai, UAE",
    highlight: false,
    notes: ["Captain, Viper House", "Wide Receiver, RWA Stallions Football Team", "Captain, Robotics Team (2023)"],
  },
];

const courses = [
  { title: "Introduction to Aerodynamics", institution: "MIT", period: "12/2024 – 08/2025", icon: "🚀" },
  { title: "The Science of the Solar System", institution: "Caltech", period: "01/2025 – 05/2025", icon: "🪐" },
  { title: "Intro to Aerospace Structure and Materials", institution: "TU Delft", period: "09/2024 – 12/2024", icon: "✈️" },
  { title: "Space Mission Design and Operations", institution: "EPFL", period: "08/2024 – 10/2024", icon: "🛸" },
  { title: "AI for Intelligence Analysts", institution: "IAIE", period: "02/2026", icon: "🤖" },
];

const languages = [
  { lang: "English", level: "Native", pct: 100 },
  { lang: "French", level: "Intermediate", pct: 60 },
  { lang: "Spanish", level: "Intermediate", pct: 55 },
];

const certifications = [
  { name: "Six Sigma White Belt", issuer: "Lean Six Sigma" },
  { name: "Systems Engineering", issuer: "NASA JPL" },
  { name: "MBSE / DOORS", issuer: "IBM" },
  { name: "GD&T", issuer: "ASME" },
];

function ExpandableEduCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card border-l-2 ${edu.highlight ? "border-l-[#00d4ff]" : "border-l-[#21262d]"} overflow-hidden`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 flex justify-between items-start gap-2 text-left"
      >
        <div className="flex-1">
          <p className="text-[#e6edf3] font-medium text-sm">{edu.degree}</p>
          <p className="text-[#00d4ff] text-xs mt-1 font-mono">{edu.institution}</p>
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className="text-[#8b949e] text-xs font-mono">{edu.period}</span>
          <span className="text-[#8b949e] text-xs">{edu.location}</span>
        </div>
        {edu.notes.length > 0 && (
          <motion.div animate={{ rotate: open ? 180 : 0 }} className="ml-1 flex-shrink-0 mt-1">
            <ChevronDown size={14} className="text-[#8b949e]" />
          </motion.div>
        )}
      </button>
      {edu.notes.length > 0 && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 flex flex-wrap gap-1.5">
                {edu.notes.map((note, i) => (
                  <span key={i} className="px-2 py-0.5 bg-[#0d1117] text-[#8b949e] text-xs rounded border border-[#21262d]">
                    {note}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0d1117]" id="about">
      <AmbientParticles id="about-particles" density={30} opacity={0.18} speed={0.3} linked={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Background</span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        {/* Top row: Profile + Bio + Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#00d4ff]/50" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#00d4ff]/50" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#00d4ff]/50" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#00d4ff]/50" />

            {/* Profile image */}
            <div
              className="w-36 h-36 rounded-2xl overflow-hidden mb-4 border border-[#00d4ff]/30 relative"
              style={{ boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}
            >
              <Image
                src="/profile.svg"
                alt="Shivam Mathur"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-[#e6edf3] font-bold text-lg">Shivam Mathur</h3>
            <p className="text-[#00d4ff] text-sm font-mono mt-1">LATTICE Developer</p>
            <p className="text-[#8b949e] text-xs mt-1">Anduril Industries</p>

            <div className="w-full border-t border-[#21262d] my-4" />

            <div className="flex items-center gap-2 text-[#8b949e] text-xs">
              <MapPin size={12} className="text-[#00d4ff]" />
              Dubai, UAE · Wollongong, AU
            </div>
            <div className="flex items-center gap-2 text-[#8b949e] text-xs mt-2">
              <Briefcase size={12} className="text-[#00d4ff]" />
              Aerospace · Defense · Robotics
            </div>

            <div className="w-full border-t border-[#21262d] my-4" />

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-2 w-full">
              {[
                { label: "NASA Projects", value: "5+" },
                { label: "Awards", value: "11+" },
                { label: "Research Yrs", value: "7+" },
                { label: "Publications", value: "2" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#0a0e1a] rounded-lg p-2 text-center">
                  <div className="text-[#00d4ff] font-bold text-lg">{value}</div>
                  <div className="text-[#8b949e] text-[10px]">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio + Certifications */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-[#e6edf3] font-semibold mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center">
                  <FlaskConical size={12} className="text-[#00d4ff]" />
                </span>
                Profile
              </h3>
              <p className="text-[#8b949e] leading-relaxed text-sm">
                Mechatronics Engineering student specializing in aerospace systems,
                currently developing next-generation C2 software as a LATTICE Developer at Anduril Industries.
                With roots in NASA-affiliated research since 2017, I have contributed to Mars exploration
                concepts, hypersonic aerodynamics, defense deterrence systems, and soft robotics —
                bridging theoretical research with operational defense applications.
              </p>
              <p className="text-[#8b949e] leading-relaxed text-sm mt-3">
                As founder of Baxter Dynamics (robotics association) and Innoventures Aerospace Society,
                I am passionate about nurturing the next generation of engineers while pushing the boundaries
                of what is possible in aerospace and autonomous systems.
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="flex items-center gap-2 text-[#e6edf3] font-semibold mb-4">
                <Award size={16} className="text-[#00d4ff]" />
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-[#0a0e1a] rounded-lg p-3 border border-[#21262d] hover:border-[#00d4ff]/30 transition-colors group"
                  >
                    <p className="text-[#e6edf3] text-xs font-medium group-hover:text-[#00d4ff] transition-colors">{cert.name}</p>
                    <p className="text-[#8b949e] text-[10px] mt-0.5 font-mono">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom row: Education + Courses + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-[#e6edf3] font-semibold mb-4">
              <GraduationCap size={18} className="text-[#00d4ff]" />
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <ExpandableEduCard key={i} edu={edu} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Right: Courses + Languages */}
          <div className="space-y-8">
            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2 text-[#e6edf3] font-semibold mb-4">
                <GraduationCap size={18} className="text-[#00d4ff]" />
                Advanced Courses
              </h3>
              <div className="space-y-2">
                {courses.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="glass-card p-3 flex items-start gap-3 hover:border-[#00d4ff]/25 transition-colors group"
                  >
                    <span className="text-lg flex-shrink-0">{c.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#e6edf3] text-xs font-medium leading-snug">{c.title}</p>
                      <p className="text-[#00d4ff] text-[10px] mt-0.5 font-mono">{c.institution}</p>
                    </div>
                    <span className="text-[#8b949e] text-[10px] font-mono whitespace-nowrap flex-shrink-0">{c.period}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-5"
            >
              <h3 className="flex items-center gap-2 text-[#e6edf3] font-semibold mb-5">
                <Globe size={18} className="text-[#00d4ff]" />
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((l, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[#e6edf3] font-medium">{l.lang}</span>
                      <span className="text-[#8b949e] text-xs">{l.level}</span>
                    </div>
                    <div className="w-full bg-[#161b22] rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
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
