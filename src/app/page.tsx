import Image from "next/image";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Smoke shop interior"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 px-6 max-w-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Premium Smoke Shop in La Mesa
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          Discover high-quality glass, vapes, and accessories. Expert service, fast shipping.
        </p>
        <button className="bg-gold text-dark font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
