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
    <ShopPageClient categories={categories} products={products} />
  );
}
