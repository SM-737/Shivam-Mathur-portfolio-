import ProjectsSection from "@/components/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Shivam Mathur",
  description: "Research projects and technical work of Shivam Mathur",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#0a0e1a] py-16 px-4 text-center border-b border-[#21262d]">
        <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">R&D</span>
        <h1 className="text-5xl font-bold text-[#e6edf3] mt-3 mb-4">Projects</h1>
        <p className="text-[#8b949e] max-w-2xl mx-auto">
          Research-driven engineering projects spanning quantum radar, hypersonic systems, soft robotics, and defense deterrence.
        </p>
      </div>
      <ProjectsSection />
    </div>
  );
}
