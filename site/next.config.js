/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Builds plain HTML files into /out so GitHub Pages can host the site.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
