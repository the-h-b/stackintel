import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  webpack: (config, { isServer }) => {
    // Fix for ChunkLoadError
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    // Handle SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
};

export default nextConfig;
