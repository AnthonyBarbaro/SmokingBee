// app/product/[handle]/page.tsx
import { getProductByHandle } from "@/lib/shopify";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

interface Props {
  params: {
    handle: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const firstImage = product?.images?.edges?.[0]?.node;

  return (
    <section className="bg-dark text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gold mb-4">{product.title}</h1>

        {firstImage?.url && (
          <div className="relative w-full h-80 mb-6">
            <Image
              src={firstImage.url}
              alt={firstImage.altText || product.title}
              fill
              className="object-contain"
            />
          </div>
        )}

        <p className="mb-4">{product.description}</p>

        {/* We assume the first variant is the "default" */}
        <AddToCartButton product={product} />
      </div>
    </section>
  );
}
