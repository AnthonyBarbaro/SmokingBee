//src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import AboutSlideshow from "@/components/AboutSlideshow";

export default function AboutPage() {
  return (
    <section className="bg-white text-gray-900 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gold mb-8"
        >
          About The Smoking Bee
        </motion.h1>

        {/* Introduction Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-200 p-6 rounded-lg shadow-lg text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
        >
          <p>
            Located in the heart of La Mesa, The Smoking Bee is your go-to destination 
            for premium smoking accessories. From elegant glass pipes to top-tier vapes, 
            our curated selection and knowledgeable staff ensure you’ll find exactly 
            what you’re looking for, whether you’re a seasoned connoisseur or just beginning 
            your journey.
          </p>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AboutSlideshow />
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-200 p-6 rounded-lg shadow-lg text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-10 mb-10"
        >
          <p>
            We believe in offering more than just products—we provide a welcoming environment 
            and expert guidance. Our team stays updated on the latest trends, ensuring you have 
            access to the newest designs and innovative smoking technologies. Whether you need 
            advice on maintaining your pieces or want to explore new flavors, we’re here to help 
            every step of the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-200 p-6 rounded-lg shadow-lg text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          <p>
            At The Smoking Bee, community is at the heart of what we do. We regularly host events, 
            support local artists, and invite you to join our hive. Stop by, say hello, and discover 
            why we’re La Mesa’s favorite hub for quality, authenticity, and great conversation. 
            Welcome to the family!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
