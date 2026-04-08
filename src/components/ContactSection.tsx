"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import AmbientParticles from "./AmbientParticles";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivam-mathur-b4b7b6248/",
    IconComponent: LinkedInIcon,
    color: "#0077b5",
    description: "Professional network",
  },
  {
    label: "AIAA Publication",
    href: "https://arc.aiaa.org/doi/10.2514/6.2025-105040",
    IconComponent: ({ size }: { size?: number }) => <ExternalLink size={size} />,
    color: "#00d4ff",
    description: "Research paper",
  },
  {
    label: "GitHub",
    href: "https://github.com/SM-737",
    IconComponent: GitHubIcon,
    color: "#e6edf3",
    description: "Open-source projects",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden py-24 bg-[#0d1117]" id="contact">
      <AmbientParticles id="contact-particles" density={30} opacity={0.15} speed={0.3} linked={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-4xl font-bold text-[#e6edf3] mt-2">Contact</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-transparent mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#8b949e] leading-relaxed text-lg">
              Interested in collaboration, research partnerships, or defense technology discussions?
              I am always open to connecting with fellow engineers, researchers, and industry professionals.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "sm0181196@gmail.com",
                  href: "mailto:sm0181196@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+971 56 795 1630",
                  href: "tel:+971567951630",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Dubai, UAE / Wollongong, Australia",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="glass-card p-4 flex items-center gap-4 group hover:border-[#00d4ff]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00d4ff]/15 transition-colors">
                    <Icon size={18} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="text-[#8b949e] text-xs">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[#e6edf3] hover:text-[#00d4ff] transition-colors font-medium text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#e6edf3] font-medium text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-[#e6edf3] font-semibold text-sm mb-3 uppercase tracking-wider">Connect</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map(({ label, href, IconComponent, color, description }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex flex-col items-center text-center gap-2 hover:border-[#00d4ff]/30 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30`, color }}
                    >
                      <IconComponent size={18} />
                    </motion.div>
                    <p className="text-[#e6edf3] text-xs font-medium group-hover:text-[#00d4ff] transition-colors">{label}</p>
                    <p className="text-[#8b949e] text-[10px]">{description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-card p-4 border border-[#00ff88]/20 bg-[#00ff88]/3"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-[#e6edf3] text-sm font-semibold">Available for Collaboration</p>
                  <p className="text-[#8b949e] text-xs mt-0.5">Open to research partnerships and defense tech discussions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === "sent" ? (
              <div className="glass-card p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle size={56} className="text-[#00d4ff] mb-4" />
                </motion.div>
                <h3 className="text-[#e6edf3] font-semibold text-xl mb-2">Message Sent!</h3>
                <p className="text-[#8b949e]">Thank you for reaching out. I will get back to you shortly.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-[#00d4ff] hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : status === "error" ? (
              <div className="glass-card p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <AlertCircle size={56} className="text-red-400 mb-4" />
                <h3 className="text-[#e6edf3] font-semibold text-xl mb-2">Delivery Failed</h3>
                <p className="text-[#8b949e]">
                  Something went wrong. Please email me directly at{" "}
                  <a href="mailto:sm0181196@gmail.com" className="text-[#00d4ff] hover:underline">
                    sm0181196@gmail.com
                  </a>.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-[#00d4ff] hover:underline text-sm"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-[#8b949e] text-xs mb-2 uppercase tracking-wider">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={form[name as keyof FormState]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full bg-[#0a0e1a] border border-[#21262d] rounded-lg px-4 py-3 text-[#e6edf3] text-sm placeholder-[#8b949e] focus:outline-none focus:border-[#00d4ff] transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[#8b949e] text-xs mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="w-full bg-[#0a0e1a] border border-[#21262d] rounded-lg px-4 py-3 text-[#e6edf3] text-sm placeholder-[#8b949e] focus:outline-none focus:border-[#00d4ff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#8b949e] text-xs mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={5}
                    className="w-full bg-[#0a0e1a] border border-[#21262d] rounded-lg px-4 py-3 text-[#e6edf3] text-sm placeholder-[#8b949e] focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#00d4ff] text-[#0a0e1a] font-semibold rounded-lg hover:bg-[#4facfe] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#00d4ff]/25 hover:scale-[1.02]"
                >
                  {status === "sending" ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
