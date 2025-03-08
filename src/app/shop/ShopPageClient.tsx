"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

const heroImages = [
  "/images/about/23.JPG",
  "/images/about/1.JPG",
  "/images/about/12.JPG",
  "/images/about/16.JPG",
  "/images/about/4.JPG",
];

// 1) This hook decides how many items to show at once
function useItemsPerSlide() {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(1);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerSlide;
}

export default function ShopPageClient({ categories, products }: any) {
  // Hero auto-rotation index
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredCategories = categories.slice(0, 5);
  const featuredProducts = products.slice(0, 6);

  // 2) For the rotating categories:
  const [catIndex, setCatIndex] = useState(0);

  // We'll increment catIndex every 4 seconds
  useEffect(() => {
    const catInterval = setInterval(() => {
      setCatIndex((prev) => (prev + 1) % featuredCategories.length);
    }, 4000);
    return () => clearInterval(catInterval);
  }, [featuredCategories]);

  // 3) Determine how many items to show at once
  const itemsPerSlide = useItemsPerSlide();

  // 4) Build an array of "visible" categories
  //    We move forward by 1 each rotation, but show as many as itemsPerSlide
  function getVisibleCategories() {
    const visible: any[] = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const idx = (catIndex + i) % featuredCategories.length;
      visible.push(featuredCategories[idx]);
    }
    return visible;
  }
  const visibleCats = getVisibleCategories();

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* ========== Hero Banner ========== */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[heroIndex]}
              alt="Shop Hero"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-55"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 px-4 max-w-3xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            Welcome to Our Shop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg md:text-xl"
          >
            Discover premium products, curated just for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="inline-block border-2 border-gold text-gold px-6 py-2 mt-6 rounded-full text-lg font-bold hover:bg-gold hover:text-dark transition"
          >
            Premium Selections
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* ========== Featured Category Carousel ========== */}
        <section className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold text-gold mb-2">
              Featured Categories
            </h2>
            <p className="text-gray-600">
              Auto-rotating selection of our top categories
            </p>
          </motion.div>

          {/* The "slide" container */}
          <motion.div
            key={catIndex} // re-render on index change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {visibleCats.map((cat: any) => (
              <CategoryCard key={cat.node.id} category={cat} />
            ))}
          </motion.div>
        </section>

        {/* ========== Featured Products (horizontal slider) ========== */}
        <section className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold text-gold mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600">
              A curated selection of our best-selling items
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1"
          >
            {featuredProducts.map((product: any) => (
              <div
                key={product.node.id}
                className="snap-start flex-shrink-0 w-64"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </motion.div>
        </section>

        {/* ========== All Products Grid ========== */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold text-gold mb-2">All Products</h2>
            <p className="text-gray-600">Browse our entire product catalog.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {products.map((product: any) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </motion.div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gold text-dark text-center py-8 mt-10">
        <h3 className="text-2xl font-bold mb-2">Need Help Finding Something?</h3>
        <p className="mb-4">
          Our team is here to assist! Check out our contact page or drop by the store.
        </p>
        <Link href="/contact">
          <button className="bg-dark text-gold font-bold px-6 py-3 rounded hover:bg-gray-800 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
