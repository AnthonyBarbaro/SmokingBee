// src/app/shop/page.tsx
import Head from "next/head"
import { getCollections, getAllProducts } from "@/lib/shopify";
import ShopPageClient from "./ShopPageClient";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";


export default async function ShopPage() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-10 px-6 text-center">
      <Head>
        <link rel="canonical" href="https://thesmokingbee.com/shop" />
      </Head>
      {/* ✅ Client-rendered breadcrumb schema */}
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
        ]}
      />

      <h2 className="text-2xl font-semibold text-red-600 mb-6">
        Our Online Shop is Coming Soon!
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Stay tuned for our full selection of premium products available for online purchase.
      </p>
      <ShopPageClient categories={categories} products={products} />
    </div>
  );
}
