/** @type {import('next').NextConfig} */
const nextConfig = {
  //setting own loader while loading images
  images: {
    domains: ["images.ctfassets.net"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.ctfassets.net',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
  // },
};

export default nextConfig;
