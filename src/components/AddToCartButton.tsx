// app/product/[handle]/AddToCartButton.tsx
"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  // just pick the first variant for the example
  const variantId = product.variants?.edges?.[0]?.node?.id;

  async function handleAddToCart() {
    if (!variantId) return alert("No variant available.");
    await addToCart(variantId, 1);
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-gold text-dark font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
    >
      Add to Cart
    </button>
  );
}
