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
    <div className="bg-white rounded shadow hover:shadow-lg transition p-4">
      <div className="relative w-full h-40 mb-3">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.altText || title}
            fill
            className="object-cover rounded"
          />
        )}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">Explore our {title} collection</p>
      {/* Link to a dynamic category page (optional) */}
    </div>
  );
}
