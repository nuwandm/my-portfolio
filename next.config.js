/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: "export",
  assetPrefix: isGitHubPages ? "/my-portfolio/" : "",
  basePath: isGitHubPages ? "/my-portfolio" : "",
  trailingSlash: true, 
};

module.exports = nextConfig;
