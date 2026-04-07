import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0e1a]">
      <div className="text-center">
        <p className="text-[#00d4ff] font-mono text-sm mb-2">404</p>
        <h1 className="text-4xl font-bold text-[#e6edf3] mb-4">Page Not Found</h1>
        <p className="text-[#8b949e] mb-8">The page you are looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#00d4ff] text-[#0a0e1a] font-semibold rounded-lg hover:bg-[#4facfe] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
