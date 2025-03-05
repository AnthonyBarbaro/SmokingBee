// src/components/FloatingCartButton.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function FloatingCartButton() {
  const { totalQuantity, goToCheckout } = useCart();
  const [animate, setAnimate] = useState(false);

  // Animate the button whenever totalQuantity changes
  useEffect(() => {
    if (totalQuantity > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timer);
    }
  }, [totalQuantity]);

  // Optionally hide if no items in cart
  // if (totalQuantity < 1) return null;

  return (
    <button
      onClick={goToCheckout}
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
