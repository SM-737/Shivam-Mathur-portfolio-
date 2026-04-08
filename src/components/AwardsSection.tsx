"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";
import AmbientParticles from "./AmbientParticles";

const featuredAwards = [
  {
    title: "2nd Place — FIRST Robotics",
    subtitle: "Robot Game Among 193 Nations",
    icon: Trophy,
    tier: "gold",
    year: "2024",
    org: "FIRST Robotics International",
    detail: "Competed against 193 nations in Athens, Greece",
  },
  {
    title: "NASA Space Apps — Global Finalist",
    subtitle: "Project ZEUS",
    icon: Trophy,
    tier: "gold",
    year: "2022",
    org: "NASA",
    detail: "Top global finalists from 150+ competing countries",
  },
  {
    title: "1st Place — AWS Category",
    subtitle: "International Space Challenge",
    icon: Trophy,
    tier: "gold",
    year: "2021",
    org: "International Space Challenge",
    detail: "Cloud-connected autonomous lunar rover architecture",
  },
];

const secondaryAwards = [
  {
    title: "International Excellence Award",
    subtitle: "FIRST Robotics Competition",
    icon: Star,
    tier: "silver",
    year: "2024",
    org: "FIRST Global",
  },
  {
    title: "Innovation Award",
    subtitle: "FIRST Robotics Competition",
    icon: Star,
    tier: "silver",
    year: "2024",
    org: "FIRST Global",
  },
  {
    title: "UAE National Space Week Hackathon",
    subtitle: "Runners Up",
    icon: Medal,
    tier: "silver",
    year: "",
    org: "UAE Space Agency",
  },
  {
    title: "IAAC Bronze Award",
    subtitle: "International Aerospace Community",
    icon: Medal,
    tier: "bronze",
    year: "",
    org: "IAAC",
  },
  {
    title: "Planetary Defence Program Recognition",
    subtitle: "Asteroid Redirection",
    icon: Award,
    tier: "bronze",
    year: "",
    org: "AMEX & AIP",
  },
  {
    title: "Viper House Cup",
    subtitle: "Raffles World Academy",
    icon: Trophy,
    tier: "bronze",
    year: "2023",
    org: "RWA",
  },
  {
    title: "Performance League Title — Football",
    subtitle: "RWA Stallions",
    icon: Star,
    tier: "bronze",
    year: "",
    org: "Raffles World Academy",
  },
  {
    title: "Innoventures Education Award",
    subtitle: "Academic Excellence",
    icon: Award,
    tier: "bronze",
    year: "",
    org: "Innoventures Education",
  },
];

const tierConfig = {
  gold: {
    border: "border-[#ffd700]/40",
    bg: "bg-[#ffd700]/5",
    glow: "rgba(255,215,0,0.2)",
    iconColor: "#ffd700",
    badge: "bg-[#ffd700]/15 text-[#ffd700] border-[#ffd700]/30",
    label: "Gold",
  },
  silver: {
    border: "border-[#c0c0c0]/30",
    bg: "bg-[#c0c0c0]/5",
    glow: "rgba(192,192,192,0.1)",
    iconColor: "#c0c0c0",
    badge: "bg-[#c0c0c0]/10 text-[#c0c0c0] border-[#c0c0c0]/25",
    label: "Silver",
  },
  bronze: {
    border: "border-[#cd7f32]/25",
    bg: "bg-[#cd7f32]/5",
    glow: "rgba(205,127,50,0.08)",
    iconColor: "#cd7f32",
    badge: "bg-[#cd7f32]/10 text-[#cd7f32] border-[#cd7f32]/25",
    label: "Bronze",
  },
};

export default function AwardsSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0a0e1a]" id="awards">
      <AmbientParticles id="awards-particles" density={20} opacity={0.15} speed={0.25} color={["#00d4ff", "#ffd700"]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Recognition</span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Awards & Honors</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        {/* Featured awards — gold tier podium */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-5 h-5 rounded bg-[#ffd700]/15 border border-[#ffd700]/30 flex items-center justify-center">
              <Trophy size={11} className="text-[#ffd700]" />
            </div>
            <h3 className="text-[#e6edf3] font-semibold text-sm tracking-wide">Top Achievements</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#ffd700]/20 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredAwards.map((award, i) => {
              const cfg = tierConfig[award.tier as keyof typeof tierConfig];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className={`glass-card p-6 border ${cfg.border} ${cfg.bg} relative overflow-hidden group`}
                  style={{ boxShadow: `0 0 30px ${cfg.glow}` }}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div
                      className="absolute top-0 right-0 w-0 h-0"
                      style={{
                        borderStyle: "solid",
                        borderWidth: "0 40px 40px 0",
                        borderColor: `transparent ${cfg.iconColor}18 transparent transparent`,
                      }}
                    />
                  </div>

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${cfg.iconColor}15`,
                      border: `1px solid ${cfg.iconColor}35`,
                    }}
                  >
                    <award.icon size={22} style={{ color: cfg.iconColor }} />
                  </div>

                  <h3 className="text-[#e6edf3] font-bold text-base mb-1 group-hover:text-[#00d4ff] transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-[#8b949e] text-sm mb-1">{award.subtitle}</p>
                  <p className="text-[#8b949e] text-xs mb-3 opacity-70">{award.detail}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#8b949e] text-xs font-mono">{award.org}</span>
                    {award.year && (
                      <span className={`px-2 py-0.5 rounded text-xs font-mono border ${cfg.badge}`}>
                        {award.year}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Secondary awards */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-5 h-5 rounded bg-[#c0c0c0]/10 border border-[#c0c0c0]/25 flex items-center justify-center">
              <Medal size={11} className="text-[#c0c0c0]" />
            </div>
            <h3 className="text-[#e6edf3] font-semibold text-sm tracking-wide">Additional Recognition</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#c0c0c0]/15 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {secondaryAwards.map((award, i) => {
              const cfg = tierConfig[award.tier as keyof typeof tierConfig];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className={`glass-card p-4 border ${cfg.border} hover:border-[#00d4ff]/30 transition-all duration-300 group`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      backgroundColor: `${cfg.iconColor}12`,
                      border: `1px solid ${cfg.iconColor}25`,
                    }}
                  >
                    <award.icon size={15} style={{ color: cfg.iconColor }} />
                  </div>
                  <h3 className="text-[#e6edf3] font-semibold text-xs mb-1 group-hover:text-[#00d4ff] transition-colors leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-[#8b949e] text-[10px]">{award.subtitle}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#8b949e] text-[10px] font-mono opacity-70">{award.org}</span>
                    {award.year && (
                      <span className="text-[#8b949e] text-[10px] font-mono">{award.year}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
