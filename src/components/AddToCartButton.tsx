// src/components/AddToCartButton.tsx
"use client";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product, plusIcon }: { product: any, plusIcon?: boolean }) {
  const { addToCart } = useCart();
  const variantId = product.variants?.edges[0]?.node?.id;

  async function handleClick(e: React.MouseEvent) {
    e.preventDefault(); // if inside a <Link>, we don't want to follow the link
    await addToCart(variantId, 1);
  }

  if (plusIcon) {
    return (
      <button
        onClick={handleClick}
        className="text-dark font-bold"
      >
        +
      </button>
    );
  }

  // fallback normal button
  return (
    <button onClick={handleClick} className="bg-dark text-white px-4 py-2 rounded">
      Add to Cart
    </button>
  );
}
