import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  i18n: {
    locales: ['en', 'uz', 'ru', 'kz'],
    defaultLocale: 'en',
  }
};

export default nextConfig;
