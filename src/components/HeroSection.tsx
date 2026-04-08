"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Shield, Cpu, Rocket, Award, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

const tickerItems = [
  "LATTICE · Anduril Industries",
  "NASA STMD / NIAC Research",
  "AIAA Published · 2025",
  "FIRST Robotics · 2nd / 193 Nations",
  "MIT Beaverworks · CubeSat",
  "Hypersonic Propulsion · Mach 5+",
  "NASA Space Apps · Global Finalist",
  "Quantum Radar · Project QRESAR",
  "University of Wollongong · B.E. Mechatronics",
  "IAF GLEX 2021 · Moscow Speaker",
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

function OrbitalRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-[340px] h-[340px] rounded-full"
        style={{ border: "1px solid rgba(0,212,255,0.25)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00d4ff]"
          style={{ boxShadow: "0 0 12px #00d4ff, 0 0 24px rgba(0,212,255,0.5)" }}
        />
      </motion.div>
      {/* Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[420px] h-[420px] rounded-full"
        style={{ border: "1px solid rgba(79,172,254,0.15)" }}
      >
        <div
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4facfe]"
          style={{ boxShadow: "0 0 8px #4facfe" }}
        />
      </motion.div>
      {/* Ring 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{ border: "1px dashed rgba(0,102,204,0.2)" }}
      >
        <div
          className="absolute bottom-[15%] left-[8%] w-2 h-2 rounded-full bg-[#0066cc]"
          style={{ boxShadow: "0 0 8px #0066cc" }}
        />
      </motion.div>
    </div>
  );
}

function FloatingBadge({
  icon: Icon,
  label,
  value,
  delay,
  x,
  y,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
  x: string;
  y: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute glass-card px-3 py-2 flex items-center gap-2 border border-[#00d4ff]/20"
      style={{ left: x, top: y }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 + delay, ease: "easeInOut" }}
        className="flex items-center gap-2"
      >
        <Icon size={14} className="text-[#00d4ff]" />
        <div>
          <p className="text-[#e6edf3] text-xs font-bold">{value}</p>
          <p className="text-[#8b949e] text-[10px]">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TechTicker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden border-t border-b border-[#00d4ff]/10 py-3 bg-[#0a0e1a]/80 backdrop-blur-sm">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-xs font-mono text-[#8b949e]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] opacity-70 flex-shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const profileRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = profileRef.current?.getBoundingClientRect();
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 20);
      mouseY.set((e.clientY - centerY) / 20);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0e1a]">
      {/* tsParticles interactive background */}
      <ParticleBackground />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00d4ff]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#4facfe]/4 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

            {/* Left: Text Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6 backdrop-blur-sm w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-[#00d4ff] text-sm font-mono">
                  LATTICE Developer · Anduril Industries
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e6edf3] mb-4 tracking-tight leading-none"
              >
                <span className="glitch-text" data-text="Shivam">Shivam</span>
                <br />
                <span className="gradient-text">Mathur</span>
              </motion.h1>

              {/* Typewriter role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="h-9 flex items-center mb-6"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
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
                className="text-[#8b949e] text-base lg:text-lg max-w-xl mb-8 leading-relaxed"
              >
                Engineering next-generation defense systems, hypersonic platforms, and autonomous robotics.
                Bridging cutting-edge research with operational technology at the frontier of aerospace and AI.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="flex flex-wrap gap-4 mb-10"
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
                  className="flex items-center gap-2 px-7 py-3.5 border border-[#00d4ff]/40 text-[#00d4ff] font-semibold rounded-lg hover:border-[#00d4ff] hover:bg-[#00d4ff]/8 transition-all duration-300 backdrop-blur-sm"
                >
                  Get in Touch
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-3 gap-4 max-w-sm"
              >
                {[
                  { icon: Zap, label: "Years Research", value: "7+" },
                  { icon: Shield, label: "Defense Projects", value: "6+" },
                  { icon: Cpu, label: "Publications", value: "2" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="glass-card p-3 text-center group hover:border-[#00d4ff]/40 transition-all duration-300">
                    <Icon size={14} className="text-[#00d4ff] mx-auto mb-1" />
                    <div className="text-xl font-bold text-[#e6edf3] group-hover:text-[#00d4ff] transition-colors">{value}</div>
                    <p className="text-[#8b949e] text-[10px] leading-tight">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Profile Visual */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <motion.div
                ref={profileRef}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
                style={{ rotateX: springY, rotateY: springX }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                {/* Orbital rings */}
                <OrbitalRings />

                {/* Profile image */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-[#00d4ff]/40"
                  style={{ boxShadow: "0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(0,212,255,0.08)" }}
                >
                  <Image
                    src="/profile.svg"
                    alt="Shivam Mathur"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  {/* Overlay shimmer */}
                  <div className="absolute inset-0 shimmer opacity-30 rounded-full" />
                </motion.div>

                {/* Floating badges */}
                <FloatingBadge icon={Rocket} label="Hypersonics" value="Mach 5+" delay={1.0} x="-15%" y="10%" />
                <FloatingBadge icon={Award} label="Nations" value="193rd" delay={1.2} x="75%" y="65%" />
                <FloatingBadge icon={Globe} label="NASA Projects" value="5+" delay={1.4} x="-20%" y="68%" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="relative z-10">
        <TechTicker />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8b949e]"
      >
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
