import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', 
  reactStrictMode: true, 
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
      module: false,
    };
    return config;
  },
};

export default nextConfig;
