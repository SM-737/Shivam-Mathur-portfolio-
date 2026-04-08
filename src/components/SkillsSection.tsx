"use client";

import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Code2, Wrench, Cpu, Users, ChevronRight } from "lucide-react";
import AmbientParticles from "./AmbientParticles";

const radarData = [
  { skill: "Systems Eng.", value: 90 },
  { skill: "Aerospace Design", value: 88 },
  { skill: "CAD Modeling", value: 85 },
  { skill: "Programming", value: 80 },
  { skill: "Robotics", value: 87 },
  { skill: "Space Mission", value: 85 },
  { skill: "Defense Systems", value: 82 },
  { skill: "Research", value: 92 },
];

const skillGroups = [
  {
    icon: Wrench,
    label: "CAD & Design",
    color: "#00d4ff",
    skills: [
      { name: "Fusion 360", level: 90 },
      { name: "Onshape", level: 85 },
      { name: "SolidWorks", level: 82 },
      { name: "AutoCAD", level: 78 },
    ],
  },
  {
    icon: Code2,
    label: "Programming",
    color: "#4facfe",
    skills: [
      { name: "MATLAB", level: 88 },
      { name: "Python", level: 80 },
      { name: "LaTeX", level: 85 },
      { name: "ROS 2", level: 72 },
    ],
  },
  {
    icon: Cpu,
    label: "Defense & Space Systems",
    color: "#0066cc",
    skills: [
      { name: "LATTICE", level: 85 },
      { name: "GOTHAM", level: 75 },
      { name: "Ansys STK", level: 80 },
      { name: "Space Mission Design", level: 88 },
    ],
  },
  {
    icon: Users,
    label: "Leadership & Research",
    color: "#00d4ff",
    skills: [
      { name: "Team Leadership", level: 92 },
      { name: "Research & Analysis", level: 95 },
      { name: "Public Speaking", level: 85 },
      { name: "Problem Solving", level: 90 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-1.5">
          <ChevronRight size={10} style={{ color }} className="opacity-60" aria-hidden="true" />
          <span className="text-[#8b949e] text-xs group-hover:text-[#e6edf3] transition-colors">{name}</span>
        </div>
        <span className="text-[#8b949e] text-[10px] font-mono">{level}%</span>
      </div>
      <div className="w-full bg-[#0a0e1a] rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-1.5 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 6px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0d1117]" id="skills">
      <AmbientParticles id="skills-particles" density={20} opacity={0.12} speed={0.25} linked={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Capabilities</span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        {/* Top: Radar chart + skill bar groups */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mb-8">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-6 glow-effect"
          >
            <h3 className="text-[#e6edf3] font-semibold text-center mb-4 text-sm">Competency Matrix</h3>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                <PolarGrid stroke="#21262d" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "#8b949e", fontSize: 10 }}
                />
                <Radar
                  name="Skill Level"
                  dataKey="value"
                  stroke="#00d4ff"
                  fill="#00d4ff"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#161b22",
                    border: "1px solid #21262d",
                    borderRadius: "8px",
                    color: "#e6edf3",
                    fontSize: "12px",
                  }}
                  formatter={(value) => [`${value}%`, "Proficiency"]}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skill groups with bars */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 hover:border-[#00d4ff]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${group.color}15`, border: `1px solid ${group.color}30` }}
                  >
                    <group.icon size={14} style={{ color: group.color }} />
                  </div>
                  <h4 className="text-[#e6edf3] font-semibold text-sm">{group.label}</h4>
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill, j) => (
                    <SkillBar
                      key={j}
                      name={skill.name}
                      level={skill.level}
                      color={group.color}
                      delay={i * 0.1 + j * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom: Tools/tech pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <h3 className="text-[#e6edf3] font-semibold text-sm mb-4">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "MATLAB", "Python", "LaTeX", "ROS 2", "Fusion 360", "Onshape", "SolidWorks", "AutoCAD",
              "LATTICE", "GOTHAM", "Ansys STK", "ANSYS", "Simulink", "Linux", "Git",
              "Kalman Filter", "GNC Systems", "CFD", "FEA", "UAV Design", "Systems Engineering",
            ].map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.08, borderColor: "#00d4ff" }}
                className="px-3 py-1.5 text-xs text-[#8b949e] rounded-lg border border-[#21262d] bg-[#0a0e1a] hover:text-[#e6edf3] hover:border-[#00d4ff]/40 transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

