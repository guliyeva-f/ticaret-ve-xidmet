/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'your-api-domain.com' }],
    formats: ['image/avif', 'image/webp'],
  }
};

export default nextConfig;
