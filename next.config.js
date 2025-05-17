/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // If your repo name is not username.github.io, uncomment and adjust this:
  // basePath: '/your-repo-name',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
