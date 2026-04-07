import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import type { Metadata } from "next";

const posts: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    tags: string[];
    content: string;
  }
> = {
  "hypersonic-propulsion-2025": {
    title: "The Future of Hypersonic Propulsion: Ramjet-Scramjet Transition",
    date: "2025-03-15",
    readTime: "8 min",
    tags: ["Hypersonics", "Propulsion", "Research"],
    content: `
## Overview

Hypersonic flight — sustained atmospheric travel above Mach 5 — demands propulsion systems that fundamentally differ from subsonic and supersonic engines. At these velocities, the inlet air is already highly compressed before entering the combustor, making traditional turbomachinery impractical. Ramjets and scramjets fill this role, but each has a limited operational envelope.

## The Transition Problem

A ramjet operates efficiently between roughly Mach 2 and Mach 5. Beyond that, the slowing of intake air to subsonic speeds in the combustor creates excessive total pressure losses and thermal loads. A scramjet maintains supersonic flow throughout, but cannot generate sufficient thrust below Mach 4-5.

The transition region — typically Mach 4 to Mach 6 — is where neither system is optimal. Dual-mode engines attempt to bridge this gap, but managing the transition without unstart events or combustion instability remains one of aerospace engineering's most challenging problems.

## Detonation-Based Augmentation

Our research introduces a rotating detonation wave as an augmentation mechanism in the transition regime. Unlike deflagration (the standard combustion mode), detonation releases energy in a supersonic shock-driven wave that inherently increases total pressure. This can compensate for the losses incurred during mode transition.

Key advantages:
- Higher thermal efficiency: Humphrey cycle approaches Carnot limits more closely than Brayton cycle combustion
- Compact augmentation: Detonation waves are thinner than deflagration flames, reducing combustor length requirements
- Self-sustaining dynamics: Once initiated, rotating detonation waves can be maintained with minimal ignition energy

## Structural Acoustic Stability

High-frequency pressure oscillations from detonation waves create severe acoustic loading on combustor walls and nozzle structures. Our AIAA-published research addresses this through adaptive acoustic damping — tuned resonators integrated into the combustor liner that absorb specific frequency bands corresponding to detonation wave harmonics.

## Outlook

The ramjet-scramjet transition problem is not merely academic. Solving it is prerequisite to practical hypersonic cruise missiles, orbital access vehicles, and high-speed ISR platforms. Progress in computational tools (high-fidelity CFD for detonation modeling) and additive manufacturing (complex internal cooling geometries) is accelerating the field.
    `,
  },
  "mars-transfer-orbits": {
    title: "Precision Martian Insertion: Beyond Hohmann Transfers",
    date: "2025-02-28",
    readTime: "6 min",
    tags: ["Mars", "Orbital Mechanics", "Space Mission Design"],
    content: `
## The Hohmann Baseline

The Hohmann transfer remains the textbook solution for interplanetary travel — it minimizes delta-v by using two tangential burns to move between circular orbits. For Earth-Mars transfers, a standard Hohmann trajectory requires approximately 5.6 km/s of delta-v from low Earth orbit and takes around 260 days.

But for time-critical missions — crew transfers, rapid resupply, or emergency response — the 260-day transit is unacceptable.

## Type I vs. Type II Transfers

Trajectory designers categorize Mars transfers by transfer angle:
- Type I: Transfer angle less than 180 degrees (short-way trajectories, faster)
- Type II: Transfer angle greater than 180 degrees (long-way, counterintuitive but sometimes advantageous)

Our AIAA 2025 paper explores high-energy Type II transfers that, paradoxically, achieve faster transit times in certain launch windows by leveraging favorable planetary geometry on the outbound leg.

## Precision Stabilized Insertion

Arriving at Mars with high precision requires more than accurate targeting. Martian atmospheric density varies significantly with dust storm activity, solar flux, and seasonal cycles. A purely ballistic aerocapture risks aerobraking at wrong altitudes.

Our methodology introduces a closed-loop insertion controller that:
- Continuously estimates atmospheric density from accelerometer data during aerobraking
- Adjusts bank angle to modulate drag and achieve target periapsis altitude
- Executes a precision circularization burn based on real-time state estimates from an extended Kalman filter

## Results

Simulation results show targeting accuracy of plus or minus 1.5 km in final circular orbit altitude across a range of atmospheric density perturbations — a significant improvement over open-loop aerobraking profiles.

This work has direct relevance to human Mars missions where habitat modules must be delivered to within operational distance of pre-positioned surface assets.
    `,
  },
  "anduril-lattice-c2": {
    title: "Next-Generation C2: The LATTICE Architecture",
    date: "2026-01-20",
    readTime: "5 min",
    tags: ["Defense", "LATTICE", "Autonomous Systems"],
    content: `
## The C2 Problem

Traditional military command and control systems were designed in an era of centralized decision-making and human-in-the-loop control at every level. Against peer adversaries capable of degrading communications, GPS, and sensor networks, these architectures are fragile.

The proliferation of autonomous systems — drones, autonomous vehicles, loitering munitions — further strains legacy C2 infrastructure. Human operators cannot supervise hundreds of simultaneous autonomous actors through traditional interfaces.

## LATTICE's Approach

Anduril's LATTICE platform represents a fundamental rethinking of C2 software architecture. Core principles:

Software-defined over hardware-defined: LATTICE runs on commodity compute infrastructure, not specialized military hardware. This enables rapid updates and avoids long hardware procurement cycles.

Mesh networking: LATTICE nodes communicate peer-to-peer, not through central servers. Loss of any single node does not degrade the network — it routes around failure.

Autonomy as a first-class citizen: The platform natively manages autonomous system task allocation, deconfliction, and retasking. Human operators set objectives; LATTICE coordinates execution.

Common operating picture: All sensors, platforms, and data sources feed into a unified situational awareness layer accessible across the force.

## The Developer Experience

Working on LATTICE involves deeply systems-level thinking. Software must be correct in adversarial conditions — partial data, degraded comms, spoofed sensors. Testing frameworks must simulate realistic operational environments.

The defense-specific requirements push engineering standards significantly higher than typical commercial software development.

## Implications

LATTICE represents a bet that software advantages can be as decisive as platform advantages. A smaller force equipped with superior C2 software can multiply its effectiveness relative to a numerically superior adversary relying on outdated infrastructure.
    `,
  },
  "soft-robotics-exoskeleton": {
    title: "ARISE: Building Soft Robotic Exoskeletons for Extreme Environments",
    date: "2025-11-10",
    readTime: "7 min",
    tags: ["Robotics", "Exoskeleton", "Soft Robotics"],
    content: `
## Why Soft Robotics?

Traditional rigid exoskeletons face a fundamental alignment problem: human joints do not move along fixed axes. As a user moves, misalignment between the exoskeleton's pivot points and the body's instantaneous centers of rotation creates shear forces on the limb — uncomfortable at low loads, potentially injurious at high loads.

Soft robotic actuators — pneumatic artificial muscles, cable-driven systems with compliant elements, or dielectric elastomers — conform to body geometry and follow the wearer's natural kinematics rather than fighting them.

## ARISE Design Philosophy

Project ARISE targets extreme environment use cases: EVA (extravehicular activity) in space, CBRN (chemical, biological, radiological, nuclear) hazmat operations, and heavy industrial environments where operators work in restrictive protective clothing.

Design constraints:
- Operability through thick gloves and suits: All adjustments must be possible with reduced dexterity
- Thermal tolerance: Function between minus 40 degrees C and plus 80 degrees C
- EMI immunity: No performance degradation near high-power radar or communication equipment
- Quick-don/doff: Full donning in under 90 seconds

## Actuator Selection

After evaluating pneumatic artificial muscles, cable-driven architectures, and shape memory alloys, ARISE uses a hybrid approach:

- Primary actuation: Braided pneumatic artificial muscles (PAMs) for high force-to-weight ratio
- Fine control: Series elastic actuators at wrist and finger joints for dexterous manipulation
- Structural compliance: Silicone-based spinal segments that distribute bending across multiple vertebrae rather than concentrating stress at a single point

## Control Architecture

ARISE uses a hierarchical control scheme:
- Intent recognition: Surface EMG sensors detect muscle activation patterns, predicting intended movement 80-120ms before mechanical motion
- Impedance control: Mid-level controller adjusts actuator stiffness based on task context (high stiffness for load-bearing, low stiffness for fine manipulation)
- Safety layer: Hard limits on joint angles, velocities, and forces enforced in hardware-level controllers independent of higher-level software

## Next Steps

Current prototyping focuses on the upper limb assembly. Full-body integration and field trials in simulated hazmat scenarios are planned for 2026.
    `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found | Shivam Mathur" };
  return {
    title: `${post.title} | Shivam Mathur Blog`,
    description: post.content.slice(0, 160),
  };
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-[#e6edf3] mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="text-[#8b949e] mb-2 ml-4 list-disc">
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.trim() === "") return <div key={i} className="mb-3" />;
      return (
        <p key={i} className="text-[#8b949e] leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="pt-16">
      <div className="bg-[#0a0e1a] py-16 px-4 border-b border-[#21262d]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#8b949e] hover:text-[#00d4ff] text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-0.5 bg-[#00d4ff]/10 text-[#00d4ff] text-xs rounded border border-[#00d4ff]/20"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-[#8b949e] text-sm">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} read
            </span>
            <span className="text-[#00d4ff]">Shivam Mathur</span>
          </div>
        </div>
      </div>

      <article className="py-16 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom">{renderContent(post.content)}</div>
        </div>
      </article>
    </div>
  );
}
