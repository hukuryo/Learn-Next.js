import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    viewTransition: true,
    nodeMiddleware: true,
  },
};

export default nextConfig;
