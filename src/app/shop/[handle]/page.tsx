// src/app/shop/[handle]/page.tsx
import { getCollectionByHandle } from "@/lib/shopify";

export default async function CollectionPage({ params }: any) {
  const { handle } = params;

  // 1. Fetch the collection by handle
  const collection = await getCollectionByHandle(handle);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{collection.title}</h1>
      {/* Optionally display the collection description or hero image */}
      {collection.image?.url && (
        <img
          src={collection.image.url}
          alt={collection.image.altText || collection.title}
          className="mb-6 max-h-80 object-cover w-full rounded"
        />
      )}
      <p className="mb-6 text-gray-700">{collection.description}</p>

      {/* Display all products in this collection */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {collection.products.edges.map((prod: any) => {
          const product = prod.node;
          return (
            <div key={product.id} className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {product.description}
              </p>
              {/* Add image, link to product page, etc. */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
