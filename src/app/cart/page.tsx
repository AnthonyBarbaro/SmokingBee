"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { lines, removeLine, updateLine, totalQuantity, goToCheckout } = useCart();

  // If cart is empty
  if (lines.length < 1) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link
          href="/shop"
          className="bg-gold text-dark font-bold py-3 px-6 rounded hover:bg-yellow-500 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const cartTotal = lines.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleCheckout() {
    const confirmed = confirm(
      "You’ll be redirected to our secure Shopify checkout. Continue?"
    );
    if (confirmed) {
      goToCheckout();
    }
  }

  function formatPrice(amount: number) {
    return `$${amount.toFixed(2)}`;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-8 py-16 text-center">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      
      <div className="w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg overflow-hidden p-6">
        <table className="w-full text-left">
          <thead className="text-gray-700 uppercase text-sm border-b border-gray-300">
            <tr className="bg-gray-200">
              <th className="py-3 px-4 font-medium">Product</th>
              <th className="py-3 px-4 font-medium text-center">Price</th>
              <th className="py-3 px-4 font-medium text-center">Quantity</th>
              <th className="py-3 px-4 font-medium text-center">Total</th>
              <th className="py-3 px-4 font-medium text-right" />
            </tr>
          </thead>
          <tbody>
            {lines.map((item) => {
              const lineTotal = item.price * item.quantity;
              return (
                <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-200 transition-colors">
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <Image src={item.image} alt={item.title} width={60} height={60} className="object-cover rounded" />
                      ) : (
                        <div className="w-[60px] h-[60px] bg-gray-400 rounded flex items-center justify-center text-xs">
                          No Image
                        </div>
                      )}
                      <span className="font-bold text-gray-900">{item.title}</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center">{formatPrice(item.price)}</td>
                  <td className="py-5 px-4 text-center">
                    <div className="inline-flex items-center">
                      <button
                        onClick={() => item.quantity > 1 && updateLine(item.id, item.quantity - 1)}
                        className="bg-gray-400 text-white px-2 py-1 rounded-l hover:bg-gray-500"
                      >
                        -
                      </button>
                      <span className="bg-gray-300 px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateLine(item.id, item.quantity + 1)}
                        className="bg-gray-400 text-white px-2 py-1 rounded-r hover:bg-gray-500"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center">{formatPrice(lineTotal)}</td>
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

      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg text-lg max-w-3xl w-full text-center">
        <p className="text-gray-700 mb-2">Total items: <span className="font-bold text-gray-900">{totalQuantity}</span></p>
        <p className="text-gray-700 mb-4">Cart total: <span className="font-bold text-gray-900">{formatPrice(cartTotal)}</span></p>
        <button
          onClick={handleCheckout}
          className="bg-gold text-dark font-bold py-2 px-6 rounded hover:bg-yellow-500 transition"
        >
          Checkout
        </button>
      </div>

      <p className="text-gray-600 mt-6 text-sm max-w-md">
        Note: You’ll be redirected to our secure Shopify checkout to complete your purchase. 
        You can update your cart at any time before checkout.
      </p>
    </div>
  );
}
