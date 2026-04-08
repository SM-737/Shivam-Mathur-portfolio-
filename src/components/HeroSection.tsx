"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Shield, Cpu } from "lucide-react";
import Link from "next/link";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions, Engine } from "@tsparticles/engine";

function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: ["#00d4ff", "#4facfe", "#0066cc"] },
      links: {
        color: "#00d4ff",
        distance: 140,
        enable: true,
        opacity: 0.18,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: { density: { enable: true, width: 900, height: 900 }, value: 90 },
      opacity: { value: { min: 0.15, max: 0.55 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  const particlesLoaded = useCallback(async () => {}, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particlesOptions}
      className="absolute inset-0"
    />
  );
}

const roles = [
  "LATTICE Developer",
  "Aerospace Engineer",
  "Defense Researcher",
  "Robotics Founder",
  "Hypersonic Systems",
];

function TypewriterRole({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting">("typing");

  useEffect(() => {
    setDisplayed("");
    setPhase("typing");
  }, [text]);

  useEffect(() => {
    if (phase === "typing") {
      if (displayed.length < text.length) {
        const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        setPhase("waiting");
      }
    }
  }, [displayed, text, phase]);

  return (
    <span className="text-xl sm:text-2xl text-[#4facfe] font-mono font-medium">
      {displayed}
      <span className="animate-cursor-blink border-r-2 border-[#00d4ff] ml-0.5">&nbsp;</span>
    </span>
  );
}

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e1a]">
      {/* tsParticles interactive background */}
      <ParticleBackground />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4facfe]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          <span className="text-[#00d4ff] text-sm font-mono">
            LATTICE Developer · Anduril Industries
          </span>
        </motion.div>

        {/* Name with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#e6edf3] mb-4 tracking-tight"
        >
          <span className="glitch-text" data-text="Shivam">Shivam</span>{" "}
          <span className="gradient-text">Mathur</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <TypewriterRole text={roles[roleIdx]} />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-[#8b949e] text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Engineering next-generation defense systems, hypersonic platforms, and autonomous robotics.
          Bridging cutting-edge research with operational technology at the frontier of aerospace and AI.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-7 py-3.5 bg-[#00d4ff] text-[#0a0e1a] font-semibold rounded-lg hover:bg-[#4facfe] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00d4ff]/30"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-7 py-3.5 border border-[#00d4ff]/40 text-[#00d4ff] font-semibold rounded-lg hover:border-[#00d4ff] hover:bg-[#00d4ff]/8 transition-all duration-300 backdrop-blur-sm"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { icon: Zap, label: "Years Research", value: "7+" },
            { icon: Shield, label: "Defense Projects", value: "6+" },
            { icon: Cpu, label: "Publications", value: "2" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center p-4 glass-card hover:border-[#00d4ff]/30 transition-colors">
              <div className="flex items-center justify-center mb-1">
                <Icon size={16} className="text-[#00d4ff] mr-1" />
                <span className="text-2xl font-bold text-[#e6edf3]">{value}</span>
              </div>
              <p className="text-[#8b949e] text-xs">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8b949e]"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#00d4ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
