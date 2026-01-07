import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.seremony.id',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '**',
      },
      new URL(`${process.env.API_URL}/images/**`),
      new URL(`${process.env.API_URL}/avatars/**`),
    ],
  },
};

export default nextConfig;
