// src/components/CTASection.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import CTASectionServer from "./CTASection.server";

export default function CTASection() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CTASectionServer />
      </motion.div>
    </AnimatePresence>
  );
}
