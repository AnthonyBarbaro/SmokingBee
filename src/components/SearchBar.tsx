"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  handle: string;
  image: { url: string; altText?: string } | null;
  price: { amount: string; currencyCode: string } | null;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.trim().length > 0);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => fetchResults(value), 300);
  };

  async function fetchResults(q: string) {
    if (!q) {
      setResults([]);
      return;
    }
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data: Product[] = await res.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  // === Detect click outside ===
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        // Delay closing so user can click if needed
        closeTimerRef.current = setTimeout(() => {
          setIsOpen(false);
          setQuery(""); // optional: clear the input
        }, 1500); // wait 2s before closing
      }
    };

    const cancelClose = () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("focusin", cancelClose); // if user clicks back into input

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("focusin", cancelClose);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for products..."
        className="border-2 border-[#C49A02] rounded px-4 py-2 w-full text-black focus:outline-none focus:ring focus:border-[#C49A02]"
      />

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded shadow max-h-80 overflow-y-auto z-10">
          {results.length > 0 ? (
            results.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.handle}`}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
              >
                {/* Image on the left */}
                <div className="w-[60px] h-[60px] flex-shrink-0 relative">
                  {product.image?.url ? (
                    <Image
                      src={product.image.url}
                      alt={product.image.altText || product.title}
                      fill
                      className="object-cover rounded"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded animate-pulse" />
                  )}
                </div>

                {/* Title */}
                <div className="flex-1 text-black text-base font-medium">
                  {product.title}
                </div>

                {/* Price */}
                {product.price && (
                  <div className="text-right text-gray-700 font-semibold text-sm min-w-[80px] ml-2">
                    ${parseFloat(product.price.amount).toFixed(2)}{" "}
                    {product.price.currencyCode}
                  </div>
                )}
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
