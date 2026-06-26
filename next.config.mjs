/** @type {import('next').NextConfig} */

// Where the site is served from.
//   • GitHub project page → "/etimad-ai-web"  (current setup)
//   • Custom domain etimad.ai (served at root) → set to ""  and restore public/CNAME
const BASE_PATH = "/etimad-ai-web";

const nextConfig = {
  reactStrictMode: true,
  // Static HTML export — required for GitHub Pages (no Node server).
  output: "export",
  // GitHub Pages can't run Next's image optimizer.
  images: { unoptimized: true },
  // Emit /path/index.html so Pages routing works without a server.
  trailingSlash: true,
  // Serve assets and routes under the project subpath.
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH || undefined,
  // Expose to client code (used for asset URLs like the favicon).
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
};

export default nextConfig;
