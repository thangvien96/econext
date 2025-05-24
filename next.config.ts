import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://storage.zoffice.vn/webform/storage-shop/**'),
      new URL('http://alluneed.in/**')
    ],
  },
};

export default nextConfig;
