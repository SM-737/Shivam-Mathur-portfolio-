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
import { Code2, Wrench, Cpu, Users } from "lucide-react";

const radarData = [
  { skill: "Systems Engineering", value: 90 },
  { skill: "Aerospace Design", value: 88 },
  { skill: "CAD Modeling", value: 85 },
  { skill: "Programming", value: 80 },
  { skill: "Robotics", value: 87 },
  { skill: "Space Mission Design", value: 85 },
  { skill: "Defense Systems", value: 82 },
  { skill: "Research", value: 92 },
];

const skillGroups = [
  {
    icon: Wrench,
    label: "CAD & Design",
    color: "#00d4ff",
    skills: ["Fusion 360", "Onshape", "SolidWorks", "AutoCAD"],
  },
  {
    icon: Code2,
    label: "Programming",
    color: "#4facfe",
    skills: ["MATLAB", "Python", "LaTeX", "ROS 2"],
  },
  {
    icon: Cpu,
    label: "Defense & Space Systems",
    color: "#0066cc",
    skills: ["LATTICE", "GOTHAM", "Ansys STK", "Space Mission Design"],
  },
  {
    icon: Users,
    label: "Soft Skills",
    color: "#00d4ff",
    skills: ["Team Leadership", "Collaboration", "Problem-Solving", "Creativity"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 bg-[#0d1117]" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">
            Capabilities
          </span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 glow-effect"
          >
            <h3 className="text-[#e6edf3] font-semibold text-center mb-6">Competency Matrix</h3>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                <PolarGrid stroke="#21262d" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "#8b949e", fontSize: 11 }}
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
                  }}
                  formatter={(value) => [`${value}%`, "Proficiency"]}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skill groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 hover:border-[#00d4ff]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <group.icon size={18} style={{ color: group.color }} />
                  <h4 className="text-[#e6edf3] font-semibold text-sm">{group.label}</h4>
                </div>
                <div className="space-y-2">
                  {group.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: group.color }}
                      />
                      <span className="text-[#8b949e] text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
