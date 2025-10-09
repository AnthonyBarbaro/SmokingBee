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
        pathname: "/maps/api/**",
      },
    ],
  },

  // ✅ Add your cache-control headers
  async headers() {
    return [
      // 🟢 Prevent caching of HTML pages
      {
        source:
          "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
        headers: [
          {
            key: "Cache-Control",
            // 🔹 Vercel supports stale-while-revalidate
            value:
              "public, max-age=0, must-revalidate, stale-while-revalidate=60",
          },
        ],
      },

      // 🟢 Cache JS/CSS chunks and images for a year (immutable)
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ✅ Keep your rewrites
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/:slug",
        destination: "/seo/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
