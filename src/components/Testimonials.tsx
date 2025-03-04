// src/components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const reviews = [
  { text: "The Smoking Bee has the best selection and amazing customer service. I always find something new to try!", author: "Alex R." },
  { text: "Hands down my favorite smoke shop in La Mesa. Quality products and friendly staff!", author: "Jordan S." },
  { text: "Great prices and an amazing variety of smoking accessories!", author: "Samantha W." },
  { text: "I love the friendly atmosphere and the knowledgeable staff!", author: "Chris M." },
  { text: "Best smoke shop in town! They always have the latest products.", author: "Lisa K." },
  { text: "My go-to place for quality glassware and vapes.", author: "David P." }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 px-6 bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/14.JPG"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gold mb-10"
        >
          Customer Reviews & Testimonials
        </motion.h2>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-white p-8 rounded shadow-lg text-left border-l-4 border-gold relative"
        >
          <p className="italic text-gray-700 mb-4 text-lg">"{reviews[currentIndex].text}"</p>
          <p className="font-semibold text-gold">- {reviews[currentIndex].author}</p>
          <div className="absolute bottom-4 right-4 text-yellow-500 flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl">⭐</span>
            ))}
          </div>
        </motion.div>
        <p className="mt-12 text-gray-600 text-sm">
          Rated as the #1 Smoke Shop in La Mesa for premium glass, vapes, and accessories!
        </p>
      </div>
    </section>
  );
}