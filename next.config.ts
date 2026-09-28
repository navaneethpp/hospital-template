import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell Next.js to generate static HTML files
  output: "export",
  
  // 2. Set the base path to match your GitHub repository name
  basePath: "/hospital-template",

  images: {
    // 3. GitHub Pages doesn't support Next.js Image Optimization, so it must be disabled
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  
  // Note: The async headers() function has been completely removed 
  // because GitHub Pages is static and does not support server-side headers.
};

export default nextConfig;
