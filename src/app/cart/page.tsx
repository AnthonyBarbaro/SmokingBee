"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { lines, removeLine, updateLine, totalQuantity, goToCheckout } = useCart();

  // If cart is empty
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

  // We'll compute an overall cart total by summing line item totals
  // (line total = item.price * item.quantity)
  const cartTotal = lines.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleCheckout() {
    const confirmed = confirm(
      "You’ll be redirected to our secure Shopify checkout. Continue?"
    );
    if (confirmed) {
      goToCheckout();
    }
  }

  // A utility to format money
  function formatPrice(amount: number) {
    return `$${amount.toFixed(2)}`;
  }

  return (
    <div className="min-h-screen bg-dark text-white px-8 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {/* Cart Container */}
      <div className="overflow-x-auto bg-gray-800 rounded shadow-lg">
        <table className="w-full text-left">
          <thead className="text-gray-400 uppercase text-sm border-b border-gray-700">
            <tr className="bg-gray-900/60">
              <th className="py-3 px-4 font-medium">Product</th>
              <th className="py-3 px-4 font-medium w-20 text-center">Price</th>
              <th className="py-3 px-4 font-medium w-32 text-center">Quantity</th>
              <th className="py-3 px-4 font-medium w-20 text-center">Total</th>
              <th className="py-3 px-4 font-medium w-16 text-right" />
            </tr>
          </thead>
          <tbody>
            {lines.map((item) => {
              // We'll show line total = item.price * item.quantity
              const lineTotal = item.price * item.quantity;

              return (
                <tr
                  key={item.id}
                  className="border-b border-gray-700 hover:bg-gray-900/30 transition-colors"
                >
                  {/* Product Info */}
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="object-cover rounded"
                        />
                      ) : (
                        <div className="w-[60px] h-[60px] bg-gray-500 rounded flex items-center justify-center text-xs">
                          No Image
                        </div>
                      )}
                      <span className="font-bold text-white">{item.title}</span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-5 px-4 text-center">
                    {formatPrice(item.price)}
                  </td>

                  {/* Quantity with +/- controls */}
                  <td className="py-5 px-4 text-center">
                    <div className="inline-flex items-center">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateLine(item.id, item.quantity - 1);
                          }
                        }}
                        className="bg-gray-600 text-white px-2 py-1 rounded-l hover:bg-gray-500"
                      >
                        -
                      </button>
                      <span className="bg-gray-700 px-4 py-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateLine(item.id, item.quantity + 1)}
                        className="bg-gray-600 text-white px-2 py-1 rounded-r hover:bg-gray-500"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* Line Total */}
                  <td className="py-5 px-4 text-center">
                    {formatPrice(lineTotal)}
                  </td>

                  {/* Remove button */}
                  <td className="py-5 px-4 text-right">
                    <button
                      onClick={() => removeLine(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Cart summary / checkout */}
      <div className="mt-10 bg-gray-800 p-6 rounded shadow-lg flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-lg space-y-2">
          <p>
            <span className="text-gray-300">Total items:</span>{" "}
            <span className="font-bold text-white">{totalQuantity}</span>
          </p>
          <p>
            <span className="text-gray-300">Cart total:</span>{" "}
            <span className="font-bold text-white">{formatPrice(cartTotal)}</span>
          </p>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-gold text-dark font-bold py-2 px-6 rounded hover:bg-yellow-500 transition"
        >
          Checkout
        </button>
      </div>

      <p className="text-gray-400 mt-6 text-sm max-w-md">
        Note: You’ll be redirected to our secure Shopify checkout to complete your purchase. 
        You can update your cart at any time before checkout.
      </p>
    </div>
  );
}
