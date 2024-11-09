import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    optimizePackageImports: ["react-icons/*"],
  },
};

export default nextConfig;
