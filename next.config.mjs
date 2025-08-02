/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'utfs.io',
      'images.unsplash.com', // For book covers
      'i.ytimg.com',        // For YouTube thumbnails
      'images.pexels.com',  // For Pexels images
      // Add any other domains you need
    ],
  },
  // You can add other Next.js config options here
};

export default nextConfig;