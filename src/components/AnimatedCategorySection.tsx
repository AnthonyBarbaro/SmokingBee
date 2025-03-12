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
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for mobile adjustments
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {isMobile ? (
          // ✅ Mobile View: Horizontal Scroll
          <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 px-2">
            {categories.map((category, index) => (
              <motion.div
                key={category.node.id}
                className="snap-start flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        ) : (
          // ✅ Desktop View: Grid Animation
          <motion.div
            key={currentIndex}
            initial={{ x: "33.33%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {visibleCategories.map((category) => (
              <CategoryCard key={category.node.id} category={category} />
            ))}
          </motion.div>
        )}
      </div>

      <Link href="/shop">
        <button className="mt-10 bg-gold text-dark px-8 py-3 rounded font-bold hover:bg-yellow-600 transition">
          View All Categories
        </button>
      </Link>
    </section>
  );
}
