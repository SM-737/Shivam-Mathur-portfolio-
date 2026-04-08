import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: { unoptimized: true },
  experimental: {},
};

export default withMDX(nextConfig);
