// src/components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    node: {
      id: string;
      title: string;
      description: string;
      handle: string;
      variants?: {
        edges: Array<{ node: { id: string } }>;
      };
      images?: {
        edges: Array<{ node: { url?: string; altText?: string } }>;
      };
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, description, handle, images, variants } = product.node;
  const firstImage = images?.edges[0]?.node;
  const variantId = variants?.edges[0]?.node.id;

  return (
    <div className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition p-4 border border-gray-200">
      {/* Product Image */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-t-lg">
        {firstImage?.url ? (
          <Image
            src={firstImage.url}
            alt={firstImage.altText || title}
            width={500}
            height={500}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center px-4 pb-4">
        <Link href={`/product/${handle}`}>
          <button className="bg-gold text-dark font-bold px-4 py-2 rounded hover:bg-yellow-500 transition">
            View Details
          </button>
        </Link>
        {variantId ? (
          <button
            onClick={() => {
              window.location.href = `https://your-shop.myshopify.com/cart/${variantId}:1`;
            }}
            className="bg-dark text-white font-bold px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            Add to Cart
          </button>
        ) : (
          <button className="bg-gray-500 text-white font-bold px-4 py-2 rounded cursor-not-allowed" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
}