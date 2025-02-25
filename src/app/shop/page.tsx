import { getAllProducts } from "@/lib/shopify";

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <div key={product.node.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{product.node.title}</h3>
            <p className="text-sm text-gray-400">{product.node.description}</p>
            <button className="mt-4 bg-gold text-dark font-bold px-4 py-2 rounded hover:bg-yellow-400 transition">
              View Product
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
