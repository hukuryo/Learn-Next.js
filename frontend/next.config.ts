import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    optimizePackageImports: ["icon-library"],
  },
};

export default nextConfig;
