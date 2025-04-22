// src/components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSectionServer from "./HeroSection.server";
import { useMemo } from "react";
const defaultImages = [
  "/images/about/23.JPG",
  "/images/about/1.JPG",
  "/images/about/11.JPG",
  "/images/about/20.JPG",
  "/images/about/16.JPG",
  "/images/about/4.JPG",
];

interface HeroSectionProps {
  tagline?: string;
  imageSrc?: string; // optional: user-supplied image
}

export default function HeroSection({ tagline, imageSrc }: HeroSectionProps) {
  // Create an image list that starts with imageSrc (if provided) and includes the rest of the default images (but only once)
  const slideshowImages = useMemo(() => {
    return imageSrc
      ? [imageSrc, ...defaultImages.filter((img) => img !== imageSrc)]
      : defaultImages;
  }, [imageSrc]);
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideshowImages]);

  const currentImage = slideshowImages[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSectionServer currentImage={currentImage} tagline={tagline} />
      </motion.div>
    </AnimatePresence>
  );
}
