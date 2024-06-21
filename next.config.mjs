/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
    return[
      {
        source: '/',
        destination: '/beranda',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dsqgejrzn/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
