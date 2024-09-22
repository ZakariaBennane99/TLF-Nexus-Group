/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/TLF-Nexus-Group' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/TLF-Nexus-Group/' : '',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    webpack: (config) => {
        config.module.rules.push({
          test: /CNAME/,
          type: 'asset/resource',
          generator: {
            filename: 'static/CNAME'
          }
        });
        return config;
    },
}
  
export default nextConfig;