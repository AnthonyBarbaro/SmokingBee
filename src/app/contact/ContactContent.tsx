// src/app/contact/ContactContent.tsx
"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <section className="bg-white text-gray-900 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gold mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 mb-10"
        >
          We’d love to hear from you, get in touch!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-start gap-10 text-left"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gold mb-2">Phone</h2>
            <p className="text-lg">(619) 467-7055</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gold mb-2">E-mail</h2>
            <p className="text-lg">info@thesmokingbee.com</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gold mb-2">Work Hours</h2>
            <ul className="text-lg">
              <li>Monday - Sunday: 9:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <ContactForm />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-700 mt-10"
        >
          Or visit us at our La Mesa location for premium smoking accessories.
        </motion.p>
      </div>
    </section>
  );
}
