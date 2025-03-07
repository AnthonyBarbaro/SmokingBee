// src/components/FloatingCartButton.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // for client-side navigation

export default function FloatingCartButton() {
  const { totalQuantity } = useCart(); 
  // removed `goToCheckout` so we don't checkout immediately
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  // Animate the button whenever totalQuantity changes
  useEffect(() => {
    if (totalQuantity > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timer);
    }
  }, [totalQuantity]);

  // Optionally hide if no items in cart?
  // if (totalQuantity < 1) return null;

  // Go to the cart page instead
  function handleClick() {
    router.push("/cart");
  }

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-4 right-4 z-50
        bg-gold text-dark font-bold
        px-4 py-3 rounded-full
        shadow-lg flex items-center gap-2
        hover:bg-yellow-500 transition
        ${animate ? "scale-110" : ""}
      `}
    >
      🛒 {totalQuantity}
    </button>
  );
}
