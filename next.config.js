/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'open.spotifycdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Exclude data folder from serverless functions
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'fs': 'fs',
        'path': 'path',
      });
    }
    
    return config;
  },
  // Exclude data folder from build
  experimental: {
    ...nextConfig.experimental,
    outputFileTracingExcludes: {
      '*': [
        'data/**/*',
        'public/uploads/**/*',
      ],
    },
  },
};

module.exports = nextConfig; 