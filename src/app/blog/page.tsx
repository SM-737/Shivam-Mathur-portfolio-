import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Shivam Mathur",
  description: "Technical articles and insights by Shivam Mathur",
};

const posts = [
  {
    slug: "hypersonic-propulsion-2025",
    title: "The Future of Hypersonic Propulsion: Ramjet-Scramjet Transition",
    excerpt:
      "An in-depth exploration of the thermodynamic and structural challenges at the ramjet-to-scramjet transition point, and how detonation-based augmentation can extend the operational envelope beyond Mach 6.",
    date: "2025-03-15",
    readTime: "8 min",
    tags: ["Hypersonics", "Propulsion", "Research"],
  },
  {
    slug: "mars-transfer-orbits",
    title: "Precision Martian Insertion: Beyond Hohmann Transfers",
    excerpt:
      "Exploring high-energy Type II transfer trajectories for Mars missions that optimize delta-v budgets while achieving precision orbital insertion — key insights from our AIAA 2025 paper.",
    date: "2025-02-28",
    readTime: "6 min",
    tags: ["Mars", "Orbital Mechanics", "Space Mission Design"],
  },
  {
    slug: "anduril-lattice-c2",
    title: "Next-Generation C2: The LATTICE Architecture",
    excerpt:
      "How Anduril Industries' LATTICE platform is redefining command and control for autonomous systems — a look at the software-defined approach to modern defense infrastructure.",
    date: "2026-01-20",
    readTime: "5 min",
    tags: ["Defense", "LATTICE", "Autonomous Systems"],
  },
  {
    slug: "soft-robotics-exoskeleton",
    title: "ARISE: Building Soft Robotic Exoskeletons for Extreme Environments",
    excerpt:
      "Designing compliant actuator systems for wearable robotics that must operate reliably under thermal and mechanical stress — design philosophy and material selection for Project ARISE.",
    date: "2025-11-10",
    readTime: "7 min",
    tags: ["Robotics", "Exoskeleton", "Soft Robotics"],
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#0a0e1a] py-16 px-4 text-center border-b border-[#21262d]">
        <span className="text-[#00d4ff] font-mono text-sm tracking-widest uppercase">Insights</span>
        <h1 className="text-5xl font-bold text-[#e6edf3] mt-3 mb-4">Blog</h1>
        <p className="text-[#8b949e] max-w-2xl mx-auto">
          Technical articles on aerospace engineering, defense systems, and emerging technology.
        </p>
      </div>

      <section className="py-24 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass-card p-8 hover:border-[#00d4ff]/30 transition-all duration-300 group"
              >
                <div className="flex flex-wrap gap-2 mb-3">
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

                <h2 className="text-xl font-bold text-[#e6edf3] mb-3 group-hover:text-[#00d4ff] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-[#8b949e] leading-relaxed mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-[#8b949e] text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime} read
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-[#00d4ff] text-sm hover:underline"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
