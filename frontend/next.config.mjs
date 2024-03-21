/* eslint-disable quotes */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "down-br.img.susercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.ltwebstatic.com",
      },
    ],
  },
};

export default nextConfig;
