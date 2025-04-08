// src/app/shop/[handle]/page.tsx
import { getCollectionByHandle } from "@/lib/shopify";
import Image from "next/image";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";
import Link from "next/link";

export default async function CollectionPage({ params }: any) {
  const { handle } = params;
  const collection = await getCollectionByHandle(handle);

  if (!collection) {
    return (
      <section className="w-full min-h-screen p-8 bg-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gold mb-4">Collection Not Found</h1>
        <p className="text-gray-800">
          We couldn't find the collection you're looking for.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen p-8 bg-white flex flex-col items-center">
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: collection.title, path: `/shop/${handle}` },
        ]}
      />
      {/* Centered container */}
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl font-bold text-gold mb-6 text-center">
          {collection.title}
        </h1>

        {/* Collection image, if exists */}
        {collection.image?.url && (
          <div className="relative mb-6 h-80 w-full overflow-hidden rounded bg-white flex items-center justify-center">
            <Image
              src={collection.image.url}
              alt={collection.image.altText || collection.title}
              fill
              className="object-contain"
            />
          </div>
        )}

        {/* Description centered */}
        <p className="mb-6 text-gray-800 text-center">
          {collection.description}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {collection.products.edges.map((prod: any) => {
            const product = prod.node;
            return (
              <div
                key={product.id}
                className="bg-white rounded shadow-lg border border-gold p-4 w-full sm:w-auto"
              >
                <h3 className="text-lg font-bold text-gold mb-2 text-center">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-3 text-center">
                  {product.description}
                </p>
                <Link href={`/products/${product.id}`}>
                  <button className="mt-4 bg-gold text-dark font-bold px-4 py-2 rounded hover:bg-yellow-600 transition block mx-auto">
                    View Product
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
