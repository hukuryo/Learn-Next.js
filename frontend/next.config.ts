import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons/*"],
    authInterrupts: true,
  },
};

export default nextConfig;
