// src/components/Testimonials.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="relative py-16 px-6 bg-gray-100 overflow-hidden">
      <Image
        src="/images/about/14.JPG"
        alt="Background"
        fill
        className="object-cover opacity-20"
      />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gold mb-10"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["The Smoking Bee has the best selection and amazing customer service. I always find something new to try!", 
          "Hands down my favorite smoke shop in La Mesa. Quality products and friendly staff!"].map((quote, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded shadow-lg text-left"
            >
              <p className="italic mb-4 text-lg">"{quote}"</p>
              <p className="font-semibold text-gold">- {index === 0 ? "Alex R." : "Jordan S."}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
