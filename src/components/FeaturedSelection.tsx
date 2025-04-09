import Image from "next/image";
import Link from "next/link";

interface FeaturedItem {
  id: string | number;
  title: string;
  image: string;
  desc: string;
  href?: string;
}

interface FeaturedSelectionProps {
  title?: string;
  items: FeaturedItem[];
  buttonText?: string;
  buttonLink?: string;
}

export default function FeaturedSelection({
  title = "Featured Selection",
  items,
  buttonText = "View All Products",
  buttonLink = "/shop",
}: FeaturedSelectionProps) {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-dark mb-8">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href || "#"}
              className="relative bg-dark text-white rounded-lg shadow overflow-hidden group"
            >
              <div className="w-full h-60 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {buttonLink && (
          <Link href={buttonLink}>
            <button className="mt-8 bg-gold text-dark font-bold px-6 py-3 rounded hover:brightness-125 transition">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}
