import Image from "next/image";

export default function FeaturedSelection() {
  const items = [
    {
      id: 1,
      title: "Glass Pipe",
      image: "/images/featured1.jpg",
      desc: "Premium glass craftsmanship.",
    },
    {
      id: 2,
      title: "Vape Starter Kit",
      image: "/images/featured2.jpg",
      desc: "Everything you need to start vaping.",
    },
    {
      id: 3,
      title: "CBD Gummies",
      image: "/images/featured3.jpg",
      desc: "Tasty & effective relaxation.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-dark mb-8">Featured Selection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative bg-dark text-white rounded-lg shadow overflow-hidden group"
            >
              <div className="w-full h-60 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-gold text-dark font-bold px-6 py-3 rounded hover:brightness-125 transition">
          View All Products
        </button>
      </div>
    </section>
  );
}
