"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions, Engine } from "@tsparticles/engine";

interface AmbientParticlesProps {
  id?: string;
  density?: number;
  opacity?: number;
  speed?: number;
  color?: string | string[];
  linked?: boolean;
}

export default function AmbientParticles({
  id = "ambient-particles",
  density = 40,
  opacity = 0.25,
  speed = 0.4,
  color = ["#00d4ff", "#4facfe"],
  linked = false,
}: AmbientParticlesProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 40,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: { enable: true },
      },
      modes: {
        grab: { distance: 100, links: { opacity: 0.3 } },
      },
    },
    particles: {
      color: { value: color },
      links: linked
        ? { color: "#00d4ff", distance: 120, enable: true, opacity: 0.1, width: 0.8 }
        : { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed,
        straight: false,
      },
      number: { density: { enable: true, width: 1200, height: 1200 }, value: density },
      opacity: { value: { min: opacity * 0.4, max: opacity } },
      shape: { type: "circle" },
      size: { value: { min: 0.8, max: 2.5 } },
    },
    detectRetina: true,
  };

  const loaded = useCallback(async () => {}, []);

  if (!init) return null;

  return (
    <Particles
      id={id}
      particlesLoaded={loaded}
      options={options}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
