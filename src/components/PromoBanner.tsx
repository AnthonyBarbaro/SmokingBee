"use client";

import { useState } from "react";
import Link from "next/link";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm sm:text-base px-4 py-3">
      <div className="relative text-center flex flex-col items-center">
        <div className="max-w-3xl">
          <Link href="/review" className="hover:text-yellow-700">
            <div>
              🎉 <strong>25% off</strong> (excluding tobacco products) on all{" "}
              <strong>5-star reviews</strong> for the month of <strong>June</strong>!
            </div>
            <div className="mt-1 text-xs sm:text-sm">
              Must show offer and review at checkout.
            </div>
          </Link>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-4 text-yellow-800 hover:text-red-600 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}
