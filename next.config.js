/** @type {import('next').NextConfig} */

const {
  i18n
} = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  generateEtags: false,
  i18n,
  webpack5: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
      },
    };
    config.module = {
      ...config.module,
      exprContextCritical: false,
    };
    return config;
  },
};

module.exports = nextConfig;