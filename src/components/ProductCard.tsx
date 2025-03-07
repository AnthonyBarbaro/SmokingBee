"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

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
  const pnode = product.node;
  const { title, description, handle, images } = pnode;
  const firstImage = images?.edges[0]?.node;

  // If you prefer direct routing instead of a Link wrapper,
  // you can do onClick => router.push(...) logic:
  // const router = useRouter();

  return (
    <Link href={`/product/${handle}`} className="relative group bg-white rounded-lg shadow-lg hover:shadow-xl transition border border-gray-200 overflow-hidden">
      {/* Card Container
          - We wrap the whole card with <Link> so clicking anywhere navigates.
          - We'll place the plus button absolutely so it doesn't block the entire card click. 
      */}
      
      {/* Product Image */}
      <div className="relative w-full h-48 md:h-64">
        {firstImage?.url ? (
          <Image
            src={firstImage.url}
            alt={firstImage.altText || title}
            fill
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

      {/* Circular “+” Icon in top-right for Add to Cart */}
      <div 
        className="absolute top-3 right-3"
        onClick={(e) => e.stopPropagation()} 
        /* Stop the Link from firing when clicking the plus */
      >
        <PlusAddToCart product={pnode} />
      </div>
    </Link>
  );
}

/** 
 * A small custom component for the gold plus. 
 * We wrap the usual AddToCartButton logic in a circle button.
 */
function PlusAddToCart({ product }: { product: any }) {
  return (
    <div className="bg-gold w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition">
      <AddToCartButton product={product} plusIcon />
    </div>
  );
}
