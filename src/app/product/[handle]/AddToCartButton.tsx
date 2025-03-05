"use client"; // <--- Required so we can use window & onClick

interface AddToCartButtonProps {
  variantId: string;
}

export default function AddToCartButton({ variantId }: AddToCartButtonProps) {
  function handleAddToCart() {
    // Replace "your-shop.myshopify.com" with your real Shopify subdomain!
    window.location.href = `https://kffp4v-ny.myshopify.com/cart/${variantId}:1`;
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-gold text-dark font-bold px-6 py-3 rounded hover:bg-yellow-500 transition"
    >
      Add to Cart
    </button>
  );
}
