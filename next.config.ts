import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Gom server và phần node_modules cần thiết vào .next/standalone để image Docker gọn nhẹ.
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
