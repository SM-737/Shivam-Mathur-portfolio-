import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Shivam Mathur",
  description: "Background, education, and skills of Shivam Mathur",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#0a0e1a] py-16 px-4 text-center border-b border-[#21262d]">
        <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Profile</span>
        <h1 className="text-5xl font-bold text-[#e6edf3] mt-3 mb-4">About</h1>
        <p className="text-[#8b949e] max-w-2xl mx-auto">
          Aerospace engineer, defense researcher, and technology founder building at the intersection of hypersonics, robotics, and autonomous systems.
        </p>
      </div>
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
