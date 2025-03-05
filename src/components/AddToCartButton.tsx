// src/components/AddToCartButton.tsx
"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  // We'll assume the first variant is the default
  const variantId = product.variants?.edges?.[0]?.node?.id;

  async function handleAddToCart() {
    if (!variantId) {
      alert("No variant available for this product!");
      return;
    }
    await addToCart(variantId, 1);
    // Optionally show a toast: "Added to cart!"
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
