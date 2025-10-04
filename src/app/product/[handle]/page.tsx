// src/app/product/[handle]/page.tsx
// export const dynamic = "force-dynamic"; // optional

import type { Metadata } from "next";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";
import ProductPageClient from "./ProductPageClient";
import { getProductByHandle } from "@/lib/shopify";

type ProductPageParams = { handle: string };

function trimDescription(raw?: string): string {
  return (raw ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155);
}

/* -------------------- generateMetadata -------------------- */
export async function generateMetadata(
  { params }: { params: Promise<ProductPageParams> }
): Promise<Metadata> {
  const { handle } = await params;

  const product = await getProductByHandle(handle);

  if (!product) {
    const notFound = "The requested product could not be found.";
    const canonical = `https://thesmokingbee.com/product/${handle}`;
    return {
      title: "Product Not Found | The Smoking Bee",
      description: notFound,
      alternates: { canonical },
      openGraph: {
        title: "Product Not Found | The Smoking Bee",
        description: notFound,
        url: canonical,
        type: "website", // keep type-safe with Next's Metadata typings
      },
      twitter: {
        card: "summary",
        title: "Product Not Found | The Smoking Bee",
        description: notFound,
      },
    };
  }

  const canonical = `https://thesmokingbee.com/product/${handle}`;
  const firstImage = product.images?.edges?.[0]?.node?.url ?? "";
  const description = trimDescription(product.description);

  return {
    title: `${product.title} | The Smoking Bee`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${product.title} | The Smoking Bee`,
      description,
      url: canonical,
      type: "website", // use "website" to satisfy typings
      images: firstImage ? [{ url: firstImage }] : [],
    },
    twitter: {
      card: firstImage ? "summary_large_image" : "summary",
      title: `${product.title} | The Smoking Bee`,
      description,
      images: firstImage ? [firstImage] : [],
    },
  };
}

/* -------------------- Page component -------------------- */
export default async function ProductPage(
  { params }: { params: Promise<ProductPageParams> }
) {
  const { handle } = await params;

  const product = await getProductByHandle(handle);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <main>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: product.title, path: `/product/${handle}` },
        ]}
      />
      <ProductPageClient product={product} />
    </main>
  );
}
