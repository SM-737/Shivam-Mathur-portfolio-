import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1117] border-t border-[#21262d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-[#e6edf3] font-bold text-lg mb-3 gradient-text">
              Shivam Mathur
            </h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              LATTICE Developer at Anduril Industries. Aerospace Engineer. Researcher in hypersonic systems, robotics, and defense technology.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#e6edf3] font-semibold text-sm mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {[
                ["About", "/about"],
                ["Experience", "/experience"],
                ["Projects", "/projects"],
                ["Publications", "/publications"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#8b949e] hover:text-[#00d4ff] text-sm transition-colors py-1"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#e6edf3] font-semibold text-sm mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:sm0181196@gmail.com"
                className="flex items-center gap-2 text-[#8b949e] hover:text-[#00d4ff] text-sm transition-colors"
              >
                <Mail size={14} />
                sm0181196@gmail.com
              </a>
              <a
                href="tel:+971567951630"
                className="flex items-center gap-2 text-[#8b949e] hover:text-[#00d4ff] text-sm transition-colors"
              >
                <Phone size={14} />
                +971 56 795 1630
              </a>
              <a
                href="https://arc.aiaa.org/doi/10.2514/6.2025-105040"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8b949e] hover:text-[#00d4ff] text-sm transition-colors"
              >
                <ExternalLink size={14} />
                AIAA Publication
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#21262d] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8b949e] text-xs">
            © {currentYear} Shivam Mathur. All rights reserved.
          </p>
          <p className="text-[#8b949e] text-xs font-mono">
            Built with Next.js 14 · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
