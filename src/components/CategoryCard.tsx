// src/components/CategoryCard.tsx
import Image from "next/image";

interface CategoryCardProps {
  category: {
    node: {
      id: string;
      title: string;
      handle: string;
      image?: {
        altText?: string;
        url?: string;
      };
    };
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { title, handle, image } = category.node;

  return (
    <div className="group bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
      {/* Image Container with fixed height & hover zoom */}
      <div className="relative w-full h-48 md:h-60 overflow-hidden">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.altText || title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500">
          Explore our {title} collection
        </p>
        {/* Optionally, add a link to the dynamic category page here */}
      </div>
    </div>
  );
}
