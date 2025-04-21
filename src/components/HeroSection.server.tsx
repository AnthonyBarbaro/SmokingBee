// src/components/HeroSection.server.tsx
import Image from "next/image";
import Link from "next/link";

interface HeroSectionServerProps {
  currentImage: string;
}

export default function HeroSectionServer({ currentImage }: HeroSectionServerProps) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={currentImage}
          alt="Premium smoke shop in La Mesa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>
      <div className="relative z-10 px-4 max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Premium Smoke Shop in La Mesa, CA
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover premium glass, puffco, and smoking accessories in La Mesa. Friendly staff, expert advice, and quality products every time.
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
