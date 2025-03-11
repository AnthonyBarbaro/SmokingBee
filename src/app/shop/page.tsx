// src/app/shop/page.tsx

import { getCollections, getAllProducts } from "@/lib/shopify";
import ShopPageClient from "./ShopPageClient"; // We'll create this below

export default async function ShopPage() {
  // 1. Server fetch categories and products
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  // 2. Pass data as props to the client component
  return (
    <div className="min-h-screen bg-white text-gray-900 py-10 px-6 text-center">
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
