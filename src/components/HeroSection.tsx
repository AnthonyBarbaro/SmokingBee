// src/components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">
      <Image
        src="/images/about/23.JPG"
        alt="Premium smoke shop in La Mesa"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 px-4 max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Premium Smoke Shop in La Mesa, CA
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover premium glass, vapes, and smoking accessories in La Mesa. Friendly staff, expert advice, and quality products every time.
        </p>
        <Link href="/shop">
          <button className="bg-gold text-dark font-bold px-6 py-3 rounded hover:bg-yellow-500 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
