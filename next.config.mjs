/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      ppr: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.goat.com',
          port: '',
          
        },
      ],
    },
  }
  export default nextConfig;