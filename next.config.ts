import type { NextConfig } from "next";

const repo = "collections-grid-section";

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
