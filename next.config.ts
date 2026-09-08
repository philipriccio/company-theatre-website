import type { NextConfig } from "next";

const retiredJackpotTwinsPosters = [
  "poster-5x8-web.jpg",
  "poster-portrait.jpg",
  "poster-web-1200x630.jpg",
  "poster-web-1800x1200.jpg",
  "poster-web-1800x750.jpg",
  "poster-web-800x800.jpg",
];

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  images: { 
    unoptimized: true 
  },
  async redirects() {
    return retiredJackpotTwinsPosters.map((filename) => ({
      source: `/images/jackpot-twins/${filename}`,
      destination: "/images/jackpot-twins/title-card.png",
      permanent: true,
    }));
  },
};

export default nextConfig;
