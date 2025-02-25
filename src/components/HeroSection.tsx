import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Smoke shop background"
        fill
        className="object-cover brightness-50"
        priority
      />
      {/* Overlay Content */}
      <div className="relative z-10 px-4 max-w-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Discover Your Next Favorite Piece
        </h1>
        <p className="text-lg md:text-xl mb-6">
          The Smoking Bee offers premium smoking accessories for every taste.
        </p>
        <button className="bg-gold text-dark font-bold px-6 py-3 rounded hover:brightness-125 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
