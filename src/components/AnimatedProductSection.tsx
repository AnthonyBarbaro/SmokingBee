// src/components/AnimatedProductSection.tsx
"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

interface AnimatedProductSectionProps {
  products: any[];
}

export default function AnimatedProductSection({ products }: AnimatedProductSectionProps) {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gold mb-10"
      >
        Featured Products
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.slice(0, 3).map((product, index) => (
          <motion.div
            key={product.node.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      <Link href="/shop">
        <button className="mt-10 bg-gold text-dark px-8 py-3 rounded font-bold hover:bg-yellow-600 transition">
          Browse All Products
        </button>
      </Link>
    </section>
  );
}
