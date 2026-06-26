/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export — required for GitHub Pages (no Node server).
  output: "export",
  // GitHub Pages can't run Next's image optimizer.
  images: { unoptimized: true },
  // Emit /path/index.html so Pages routing works without a server.
  trailingSlash: true,
};

export default nextConfig;
