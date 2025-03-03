// src/components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/about/23.JPG",
  "/images/about/1.JPG",
  "/images/about/12.JPG",
  "/images/about/16.JPG",
  "/images/about/4.JPG"
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Premium smoke shop in La Mesa"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-55"></div>
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 px-4 max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Premium Smoke Shop in La Mesa, CA
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover premium glass, vapes, and smoking accessories in La Mesa. Friendly staff, expert advice, and quality products every time.
        </p>
        <Link href="/shop">
          <button className="bg-gold text-dark font-bold px-6 py-3 rounded hover:bg-yellow-500 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
