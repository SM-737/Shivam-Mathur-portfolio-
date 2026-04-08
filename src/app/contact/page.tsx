import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shivam Mathur",
  description: "Get in touch with Shivam Mathur",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#0a0e1a] py-16 px-4 text-center border-b border-[#21262d]">
        <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Connect</span>
        <h1 className="text-5xl font-bold text-[#e6edf3] mt-3 mb-4">Contact</h1>
        <p className="text-[#8b949e] max-w-2xl mx-auto">
          Open to collaboration, research partnerships, and conversations about aerospace and defense technology.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
