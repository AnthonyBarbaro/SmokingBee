//src/app/product/[handle]/ProductPageClient.tsx
"use client";

import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductPageClient({ product }: { product: any }) {
  const firstImage = product?.images?.edges?.[0]?.node;
  const hasVariants = product?.variants?.edges?.length > 0;
  const price = product?.variants?.edges?.[0]?.node?.price?.amount ?? "N/A";
  const currency = product?.variants?.edges?.[0]?.node?.price?.currencyCode ?? "USD";

  return (
    <section className="bg-dark text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gold mb-4">{product.title}</h1>

        {/* Product Image */}
        {firstImage ? (
          <div className="relative w-full h-[500px] mb-6">
            <Image
              src={firstImage.url}
              alt={firstImage.altText || product.title}
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-[500px] bg-gray-700 flex items-center justify-center text-gray-300 rounded-lg">
            No Image Available
          </div>
        )}

        {/* Product Price & Stock */}
        <p className="mb-4 text-lg font-bold">
          Price: {currency} ${price}
        </p>

        {/* Add to Cart Button (Hide if Out of Stock) */}
        {hasVariants ? (
          <div className="mt-6 flex justify-end">
            <AddToCartButton product={product} />
          </div>
        ) : (
          <p className="text-lg text-red-500 font-semibold">Out of Stock</p>
        )}
      </div>
    </section>
  );
}
