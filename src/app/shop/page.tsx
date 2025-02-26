// src/app/shop/page.tsx
import { getCollections, getAllProducts } from "@/lib/shopify";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export default async function ShopPage() {
  // 1. Fetch categories and products from Shopify
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title / Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Our Selection</h1>
        <p className="text-lg text-gray-600">
          Browse through our categories and discover premium products.
        </p>
      </div>

      {/* Categories Grid */}
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {categories.map((category: any) => (
          <CategoryCard key={category.node.id} category={category} />
        ))}
      </div>

      {/* Products Grid */}
      <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.node.id} product={product} />
        ))}
      </div>
    </section>
  );
}
