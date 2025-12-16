/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'data/**/*',
        'public/uploads/**/*',
      ],
    },
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
  optimizeFonts: false,
};

module.exports = nextConfig;