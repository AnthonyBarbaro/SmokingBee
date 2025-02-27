// src/components/CategoryCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

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
    <Link href={`/shop/${handle}`} prefetch={false}>
      <div className="cursor-pointer bg-white text-dark rounded shadow hover:shadow-lg transition p-4">
        <div className="relative w-full h-40 mb-3 bg-white-100">
          {image?.url && (
            <Image
              src={image.url}
              alt={image.altText || title}
              fill
              /* Use object-contain so the entire image is visible, not cropped */
              className="object-contain rounded"
            />
          )}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Explore our {title} collection</p>
      </div>
    </Link>
  );
}
