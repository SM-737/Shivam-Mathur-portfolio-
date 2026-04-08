import Link from "next/link";
import { Mail, Phone, ExternalLink } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1117] border-t border-[#21262d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-[#e6edf3] font-bold text-lg mb-1 gradient-text">
              Shivam Mathur
            </h3>
            <p className="text-[#00d4ff] text-xs font-mono mb-3">LATTICE Developer · Anduril Industries</p>
            <p className="text-[#8b949e] text-sm leading-relaxed max-w-xs">
              Aerospace engineer and researcher specializing in hypersonic systems, robotics, defense technology, and autonomous systems.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/shivam-mathur-b4b7b6248/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-[#21262d] flex items-center justify-center text-[#8b949e] hover:text-[#0077b5] hover:border-[#0077b5]/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/SM-737"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-[#21262d] flex items-center justify-center text-[#8b949e] hover:text-[#e6edf3] hover:border-[#8b949e]/40 transition-all duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://arc.aiaa.org/doi/10.2514/6.2025-105040"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-[#21262d] flex items-center justify-center text-[#8b949e] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all duration-300"
                aria-label="AIAA Publication"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#e6edf3] font-semibold text-sm mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="space-y-1">
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
                  className="block text-[#8b949e] hover:text-[#00d4ff] text-sm transition-colors py-0.5"
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
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
