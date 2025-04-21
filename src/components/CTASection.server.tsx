// src/components/CTASection.server.tsx
import Link from "next/link";

export default function CTASectionServer() {
  return (
    <section className="py-16 bg-gray-800 text-white text-center px-6">
      <h2 className="text-4xl font-bold text-gold mb-6">
        Why Choose The Smoking Bee?
      </h2>
      <p className="max-w-3xl mx-auto mb-10 text-lg">
        Proudly serving La Mesa and surrounding areas, The Smoking Bee is your
        destination for premium glassware, vapes, smoking accessories, and
        exceptional customer service. Discover why we&apos;re La Mesa&apos;s
        favorite smoke shop.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
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
      </div>
    </section>
  );
}
