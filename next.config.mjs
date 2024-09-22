// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/{repo-name}' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{repo-name}' : '',
    images: {
      unoptimized: true,
    },
    // This is important for GitHub Pages
    trailingSlash: true,
  }
  
  module.exports = nextConfig