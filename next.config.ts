import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow unicornstudio-react (uses canvas + browser APIs) to be client-only
  transpilePackages: ["unicornstudio-react"],

  // Playwright must run as a Node.js external package (not bundled)
  // This prevents Next.js from trying to bundle the Chromium binary
  serverExternalPackages: ["playwright", "playwright-core"],

  // Suppress TS errors during builds (dev safety net)
  typescript: {
    ignoreBuildErrors: false,
  },

  // Enable React strict mode for better DX
  reactStrictMode: true,

  // Image domains if needed later
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.unicorn.studio" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default nextConfig;
