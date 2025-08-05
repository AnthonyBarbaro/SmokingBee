// src/components/DealsPopup.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DealsPopup() {
  const images = [
    "/images/25Flyer.jpg",
    "/images/BogoGlass.png",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [current, setCurrent] = useState(0);

  // auto-open after 3s
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsMinimized(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen && !isMinimized) return null;

  const next = () => setCurrent(i => (i + 1) % images.length);
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);

  if (isOpen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-lg"
        onClick={() => {
          setIsOpen(false);
          setIsMinimized(true);
        }}
      >
        <div
          className="relative w-[90vw] max-w-2xl h-[80vh] bg-gray-900 bg-opacity-95 rounded-2xl p-6 flex flex-col items-center"
          onClick={e => e.stopPropagation()}
        >
          {/* Always-visible CLOSE button */}
          <button
            onClick={() => {
              setIsOpen(false);
              setIsMinimized(true);
            }}
            className="
              absolute top-4 right-4 z-50
              w-10 h-10
              bg-white hover:bg-gray-200
              rounded-full
              flex items-center justify-center
              text-black text-2xl
              shadow-lg
              transition
            "
          >
            ×
          </button>

          {/* IMAGE */}
          <div className="relative flex-1 w-full">
            <Image
              src={images[current]}
              alt={`Deal ${current + 1}`}
              fill
              sizes="90vw"
              className="object-contain rounded-lg shadow-xl"
            />
          </div>

          {/* CONTROLS */}
          <div className="w-full flex items-center justify-between mt-4 px-4">
            <button
              onClick={prev}
              className="
                bg-white bg-opacity-20 hover:bg-opacity-40
                text-white rounded-full
                w-12 h-12 flex items-center justify-center
                text-2xl transition
              "
            >
              ‹
            </button>
            <div className="flex space-x-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`
                    block w-3 h-3 rounded-full transition
                    ${idx === current ? "bg-yellow-400" : "bg-gray-600"}
                  `}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="
                bg-white bg-opacity-20 hover:bg-opacity-40
                text-white rounded-full
                w-12 h-12 flex items-center justify-center
                text-2xl transition
              "
            >
              ›
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Minimized badge
  return (
    <button
      onClick={() => {
        setIsOpen(true);
        setIsMinimized(false);
      }}
      className="
        fixed bottom-6 right-6 z-50
        bg-yellow-500 hover:bg-yellow-600
        text-gray-900
        px-5 py-3 rounded-full
        shadow-2xl flex items-center space-x-2
        transition-transform hover:scale-105
      "
    >
      <span className="text-xl">🔥</span>
      <span className="font-bold">DEALS</span>
      <span className="text-xl">🔥</span>
    </button>
  );
}
