// components/FloatingCartButton.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function FloatingCartButton() {
  const { totalQuantity, goToCheckout, toastMessage, clearToast } = useCart();
  const [animate, setAnimate] = useState(false);

  // Animate the cart icon if totalQuantity changes
  useEffect(() => {
    if (totalQuantity > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timer);
    }
  }, [totalQuantity]);

  // If there are no items, optionally hide the button.
  if (totalQuantity < 1) {
    // return null; // uncomment to hide
  }

  // Simple toast auto-hide
  useEffect(() => {
    if (toastMessage) {
      const t = setTimeout(() => {
        clearToast();
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [toastMessage, clearToast]);

  return (
    <>
      {/* Toast message if present */}
      {toastMessage && (
        <div className="fixed bottom-20 right-4 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
          {toastMessage}
        </div>
      )}
      <button
        onClick={goToCheckout}
        className={`
          fixed bottom-4 right-4 z-40
          bg-gold text-dark font-bold
          px-4 py-3 rounded-full
          shadow-lg flex items-center gap-2
          hover:bg-yellow-500 transition-transform
          ${animate ? "scale-110" : ""}
        `}
      >
        <span>🛒</span>
        <span>{totalQuantity}</span>
      </button>
    </>
  );
}
