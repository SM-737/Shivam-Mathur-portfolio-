"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import AmbientParticles from "./AmbientParticles";

const publications = [
  {
    title:
      "Integrated Ramjet-Scramjet Transition with Detonation Based Augmentation and Structural Acoustic Stability Control",
    journal: "Associazione Italiana di Aeronautica e Astronautica",
    year: "2024",
    type: "Journal Article",
    color: "#00d4ff",
    abstract:
      "This paper presents an integrated approach to ramjet-scramjet transition dynamics with novel detonation-based augmentation for propulsion efficiency. The study addresses structural acoustic stability control at hypersonic flight regimes, providing a framework for sustained hypersonic cruise capability.",
    doi: null,
  },
  {
    title:
      "Universal High Energy Type II Transfer with Precision Stabilized Martian Insertion",
    journal: "AIAA — American Institute of Aeronautics and Astronautics",
    year: "2025",
    type: "Conference Paper",
    color: "#4facfe",
    abstract:
      "This paper presents a universal high-energy orbital transfer methodology for Mars missions, incorporating Type II transfer trajectories with precision stabilized insertion maneuvers. The methodology optimizes Δv requirements while achieving high targeting accuracy for Martian orbital insertion.",
    doi: "https://arc.aiaa.org/doi/10.2514/6.2025-105040",
  },
];

export default function PublicationsSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0d1117]" id="publications">
      <AmbientParticles id="pubs-particles" density={25} opacity={0.15} speed={0.28} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">
            Research Output
          </span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Publications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${pub.color}15`,
                    border: `1px solid ${pub.color}30`,
                  }}
                >
                  <BookOpen size={24} style={{ color: pub.color }} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className="px-2 py-0.5 text-xs font-mono rounded"
                      style={{
                        color: pub.color,
                        backgroundColor: `${pub.color}15`,
                        border: `1px solid ${pub.color}30`,
                      }}
                    >
                      {pub.type}
                    </span>
                    <span className="text-[#8b949e] text-xs font-mono">{pub.year}</span>
                  </div>

                  <h3 className="text-[#e6edf3] font-semibold text-lg leading-snug mb-2">
                    {pub.title}
                  </h3>

                  <p className="font-medium text-sm mb-4" style={{ color: pub.color }}>
                    {pub.journal}
                  </p>

                  <p className="text-[#8b949e] text-sm leading-relaxed mb-4">
                    {pub.abstract}
                  </p>

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#00d4ff] hover:text-[#4facfe] transition-colors border border-[#00d4ff]/30 px-4 py-2 rounded-lg hover:bg-[#00d4ff]/5"
                    >
                      <ExternalLink size={14} />
                      View on AIAA Arc
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: "Publications", value: "2" },
            { label: "Journals", value: "2" },
            { label: "Research Areas", value: "5+" },
            { label: "Ongoing Research", value: "6+" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="glass-card p-4 text-center border border-[#21262d] hover:border-[#00d4ff]/30 transition-colors"
            >
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
