import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
    reactCompiler: true,
  },
};

export default nextConfig;
