const isGithubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  output: 'export',
  basePath: isGithubPages ? '/my-portfolio' : '',
  assetPrefix: isGithubPages ? '/my-portfolio/' : '',
};
