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
    <section className="bg-white text-gray-900 min-h-screen p-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md">
            {firstImage ? (
              <Image
                src={firstImage.url}
                alt={firstImage.altText || product.title}
                fill
                className="object-contain p-6"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-center">
                No Image Available
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gold">
            {product.title}
          </h1>

          {/* Description */}
          {product.description && (
            <p className="text-base text-gray-700 mb-40">{product.description}</p>
          )}

          {/* Price */}
          <p className="text-3xl font-bold text-black mb-4 flex items-baseline leading-none">
            <span className="text-4xl tracking-tight">
              ${Number(price).toFixed(2).split(".")[0]}
            </span>
            <span className="text-sm font-medium text-black ml-0.5 align-super">
              .{Number(price).toFixed(2).split(".")[1]}
            </span>
            <span className="text-sm font-medium text-black ml-1 align-super">
              {currency}
            </span>
          </p>


          {/* Add to Cart or Out of Stock */}
          {hasVariants ? (
            <AddToCartButton product={product} />
          ) : (
            <p className="text-lg text-red-500 font-semibold">
              Out of Stock
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
