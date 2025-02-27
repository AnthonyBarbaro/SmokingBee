// components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

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
            price: { amount: string; currencyCode: string };
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
  const { title, description, handle, variants, images } = product.node;
  const variantId = variants?.edges[0]?.node?.id || null;
  const firstImage = images?.edges[0]?.node;
  const { addToCart } = useCart();

  async function handleBuyNow() {
    if (!variantId) {
      alert("No variant found for this product.");
      return;
    }
    await addToCart(variantId, 1);
    // Toast is triggered in the CartContext
  }

  return (
    <div className="bg-white text-dark rounded shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="relative w-full h-40 mb-3">
        {firstImage?.url && (
          <Image
            src={firstImage.url}
            alt={firstImage.altText || title}
            fill
            className="object-cover rounded"
          />
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
        {description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <Link href={`/product/${handle}`}>
          <span className="text-gold font-bold hover:underline">
            View Details
          </span>
        </Link>
        {variantId ? (
          <button
            onClick={handleBuyNow}
            className="bg-gold text-dark font-bold py-1 px-3 rounded hover:bg-yellow-500 transition"
          >
            Buy Now
          </button>
        ) : (
          <div className="text-sm text-red-500">No variant found</div>
        )}
      </div>
    </div>
  );
}
