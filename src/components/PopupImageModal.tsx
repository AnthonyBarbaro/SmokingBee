// src/components/PopupImageModal.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopupImageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // After 3 seconds, open the modal full‑screen and hide the button
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      setIsMinimized(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // If neither is visible, render nothing
  if (!isModalOpen && !isMinimized) return null;

  // Full‑screen modal (no background overlay, just image + close)
  if (isModalOpen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray bg-opacity-40 backdrop-blur-md"
        onClick={() => {
          setIsModalOpen(false);
          setIsMinimized(true);
        }}
      >
        <div
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Red Close button */}
          <button
            onClick={() => {
              setIsModalOpen(false);
              setIsMinimized(true);
            }}
            className="absolute top-2 right-10 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl z-10"
          >
            ×
          </button>

          {/* Promo image */}
          <div className="relative w-[80vw] max-w-md aspect-square">
            <Image
              src="/images/420promo.jpg"     // your promo image
              alt="Special Promo"
              fill
              sizes="80vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  // Minimized red corner button
  return (
    <button
      onClick={() => {
        setIsModalOpen(true);
        setIsMinimized(false);
      }}
      className="fixed bottom-4 left-4 z-50 bg-gold text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition"
    >
      🐝 420 Promo 🐝 
    </button>
  );
}
