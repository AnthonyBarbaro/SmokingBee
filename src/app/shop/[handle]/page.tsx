// src/app/shop/[handle]/page.tsx
import { getCollectionByHandle } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";

export default async function CollectionPage({ params }: any) {
    if (!params) return null;
  const { handle } = params;

  // 1. Fetch the collection by handle
  const collection = await getCollectionByHandle(handle);

  if (!collection) {
    return (
      <section className="bg-dark text-white min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">Collection not found</h2>
      </section>
    );
  }

  // Extract the products array
  const products = collection.products?.edges || [];

  return (
    <section className="bg-dark text-white min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Collection Title & Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gold mb-4">
            {collection.title}
          </h1>

          {/* Optional hero image */}
          {collection.image?.url && (
            <div className="relative w-full h-[300px] sm:h-[400px] mx-auto mb-6 overflow-hidden rounded-lg shadow-md">
              <Image
                src={collection.image.url}
                alt={collection.image.altText || collection.title}
                fill
                className="object-contain bg-[#222] p-4"
              />
            </div>
          )}

          {/* Collection description */}
          {collection.description && (
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {collection.description}
            </p>
          )}
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <p className="text-center text-lg text-gray-400">
            No products found in this collection.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod: any) => {
              const product = prod.node;
              const firstImg = product.images?.edges[0]?.node;

              return (
                <div
                  key={product.id}
                  className="rounded-lg shadow-md transition p-6 bg-gradient-to-b from-white via-[#faf9f7] to-[#f5f4f1] text-dark flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg bg-gray-100">
                    {firstImg?.url ? (
                      <Image
                        src={firstImg.url}
                        alt={firstImg.altText || product.title}
                        fill
                        className="object-contain hover:scale-105 transition-transform ease-in-out duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-600">No Image</p>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-700 line-clamp-3 flex-grow">
                    {product.description}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    {/* "View Details" => product detail page (requires /product/[handle] route) */}
                    <Link href={`/product/${product.handle}`}>
                      <span className="text-gold font-bold hover:underline">
                        View Details
                      </span>
                    </Link>

                    {/* "Buy Now" => single-product or multi-cart approach */}
                    <button
                      onClick={() => {
                        // Single-product direct link example:
                        // window.location.href = `https://<your-store>.myshopify.com/cart/<variantId>:1`;

                        // or advanced Storefront API logic for multi-item cart:
                        alert("Implement Shopify cart logic here.");
                      }}
                      className="bg-gold text-dark font-bold py-1 px-3 rounded hover:bg-yellow-500 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
