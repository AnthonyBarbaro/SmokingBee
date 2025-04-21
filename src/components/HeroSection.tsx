// src/components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSectionServer from "./HeroSection.server";

const images = [
  "/images/about/23.JPG",
  "/images/about/1.JPG",
  "/images/about/11.JPG",
  "/images/about/20.JPG",
  "/images/about/16.JPG",
  "/images/about/4.JPG",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSectionServer currentImage={images[index]} />
      </motion.div>
    </AnimatePresence>
  );
}
