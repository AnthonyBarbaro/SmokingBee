"use client";

import { motion } from "framer-motion";
import {
  CTASectionHeading,
  CTASectionCopy,
  CTASectionButtons,
} from "./CTASection.server";

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-800 text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CTASectionHeading />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <CTASectionCopy />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CTASectionButtons />
      </motion.div>
    </section>
  );
}
