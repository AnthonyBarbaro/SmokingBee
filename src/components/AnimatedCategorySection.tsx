// src/components/AnimatedCategorySection.tsx
"use client";

import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AnimatedCategorySectionProps {
  categories: any[];
}

export default function AnimatedCategorySection({ categories }: AnimatedCategorySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 5000); // Adjusted interval to 5 seconds for smooth UX

    return () => clearInterval(interval);
  }, [categories.length]);

  const visibleCategories = [
    categories[currentIndex % categories.length],
    categories[(currentIndex + 1) % categories.length],
    categories[(currentIndex + 2) % categories.length],
  ];

  return (
    <section className="py-16 px-6 bg-white text-dark text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gold mb-10"
      >
        Shop by Category
      </motion.h2>

      <div className="max-w-6xl mx-auto overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ x: "33.33%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="grid grid-cols-3 gap-8"
        >
          {visibleCategories.map((category) => (
            <CategoryCard key={category.node.id} category={category} />
          ))}
        </motion.div>
      </div>

      <Link href="/shop">
        <button className="mt-10 bg-gold text-dark px-8 py-3 rounded font-bold hover:bg-yellow-600 transition">
          View All Categories
        </button>
      </Link>
    </section>
  );
}
