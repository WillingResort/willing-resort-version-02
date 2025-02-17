import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Static export configuration
  reactStrictMode: true,  // Enable React Strict Mode for development
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
      module: false,
    };
    return config;
  },
};

export default nextConfig;
