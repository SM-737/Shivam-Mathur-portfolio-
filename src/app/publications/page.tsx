import PublicationsSection from "@/components/PublicationsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications | Shivam Mathur",
  description: "Research publications by Shivam Mathur",
};

export default function PublicationsPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#0a0e1a] py-16 px-4 text-center border-b border-[#21262d]">
        <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Research</span>
        <h1 className="text-5xl font-bold text-[#e6edf3] mt-3 mb-4">Publications</h1>
        <p className="text-[#8b949e] max-w-2xl mx-auto">
          Peer-reviewed research contributions to aerospace engineering and space systems.
        </p>
      </div>
      <PublicationsSection />
    </div>
  );
}
