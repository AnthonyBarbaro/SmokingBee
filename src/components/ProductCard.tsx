"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductCardProps {
  product: {
    node: {
      id: string;
      title: string;
      description: string;
      handle: string;
      variants?: {
        edges: Array<{
          node: {
            id: string;
            price?: {
              amount: string;
              currencyCode: string;
            };
          };
        }>;
      };
      images?: {
        edges: Array<{ node: { url?: string; altText?: string } }>;
      };
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const pnode = product.node;
  const { title, description, handle, images, variants } = pnode;
  const firstImage = images?.edges[0]?.node;
  const firstVariant = variants?.edges[0]?.node;

  return (
    <Link
      href={`/product/${handle}`}
      className="relative group bg-white rounded-lg shadow-lg hover:shadow-xl transition border border-gray-200 overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative w-full h-48 md:h-64">
        {firstImage?.url ? (
          <Image
            src={firstImage.url}
            alt={firstImage.altText || title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300 p-4"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-dark mb-1">{title}</h3>
        {firstVariant?.price?.amount && (
          <p className="text-lg text-gold font-semibold mb-2">
            ${parseFloat(firstVariant.price.amount).toFixed(2)}
          </p>
        )}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {description}
        </p>
      </div>

      {/* Circular “+” Icon in top-right for Add to Cart */}
      <div
        className="absolute top-3 right-3"
        onClick={(e) => e.stopPropagation()}
      >
        <PlusAddToCart product={pnode} />
      </div>
    </Link>
  );
}

/**
 * A small custom component for the gold plus.
 */
function PlusAddToCart({ product }: { product: any }) {
  return (
    <div className="bg-gold w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition">
      <AddToCartButton product={product} plusIcon />
    </div>
  );
}
