/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/TLF-Nexus-Group' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/TLF-Nexus-Group' : '',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
}
  
module.exports = nextConfig