// src/app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { lines, removeLine, totalQuantity, goToCheckout } = useCart();

  if (lines.length < 1) {
    return (
      <div className="min-h-screen bg-dark text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Your cart is empty</h1>
        <Link
          href="/shop"
          className="bg-gold text-dark font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {lines.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded"
          >
            <div>
              <p className="font-bold">{item.title}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeLine(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <p className="text-lg">Total items: {totalQuantity}</p>
        <button
          onClick={goToCheckout}
          className="bg-gold text-dark font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
