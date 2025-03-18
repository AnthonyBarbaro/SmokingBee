/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**", // ✅ Allows all Shopify images
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com", // ✅ Allows Google Maps Static API
        pathname: "/maps/api/**"
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/:slug",
        destination: "/seo/:slug"
      }
    ];
  },
};

module.exports = nextConfig;
