// src/components/CTASection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-800 text-white text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gold mb-6"
      >
        Why Choose The Smoking Bee?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto mb-10 text-lg"
      >
        Proudly serving La Mesa and surrounding areas, The Smoking Bee is your destination for premium glassware, vapes, smoking accessories, and exceptional customer service. Discover why we're La Mesa's favorite smoke shop.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col md:flex-row justify-center gap-4"
      >
        <Link href="/about">
          <button className="bg-gold text-dark font-bold px-8 py-3 rounded hover:bg-yellow-600 transition">
            About Us
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-transparent border-2 border-gold text-gold font-bold px-8 py-3 rounded hover:bg-gold hover:text-dark transition">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
