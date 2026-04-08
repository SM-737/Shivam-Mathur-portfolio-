import ExperienceSection from "@/components/ExperienceSection";
import AwardsSection from "@/components/AwardsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Shivam Mathur",
  description: "Professional experience and achievements of Shivam Mathur",
};

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <div className="bg-[#0a0e1a] py-16 px-4 text-center border-b border-[#21262d]">
        <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Career</span>
        <h1 className="text-5xl font-bold text-[#e6edf3] mt-3 mb-4">Experience</h1>
        <p className="text-[#8b949e] max-w-2xl mx-auto">
          From NASA research at age 12 to LATTICE development at Anduril — a decade of aerospace and defense work.
        </p>
      </div>
      <ExperienceSection />
      <AwardsSection />
    </div>
  );
}
