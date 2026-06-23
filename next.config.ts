import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    ".space-z.ai",
    "0.0.0.0",
    "localhost",
    "192.168.0.92",
    "192.168.0.92:3000",
    "preview-chat-bfd095f3-e81c-480d-9c6a-7fb269c76d9a.space-z.ai",
  ],
  // Optimize dev server memory usage
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-icons",
      "recharts",
    ],
    // Reduce memory usage during build
    workerThreads: false,
    cpus: 1,
  },
  // Use webpack in dev for better memory management
  // Turbopack can consume excessive memory with many pages
};

export default nextConfig;
