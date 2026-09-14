/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All portfolio/work images live under /public/projects and /public/about —
    // no remote hosts needed. Add remotePatterns here if you later host images elsewhere.
    unoptimized: false,
  },
};

export default nextConfig;
