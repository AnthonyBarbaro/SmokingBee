// src/components/ProductCard.tsx
import Image from "next/image";

interface ProductCardProps {
  product: {
    node: {
      id: string;
      title: string;
      description: string;
      handle: string;
      images?: { edges: Array<{ node: { url?: string; altText?: string } }> };
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, description, handle } = product.node;

  // Optionally handle product images, e.g., product.node.images?.edges[0]?.node.url
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition p-4">
      {/* Placeholder for product image or first image in array */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      {/* Link to a product detail page or Shopify checkout */}
    </div>
  );
}
