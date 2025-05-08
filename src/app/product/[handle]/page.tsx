// src/app/product/[handle]/page.tsx
//export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";
import ProductPageClient from "./ProductPageClient";
import { getProductByHandle } from "@/lib/shopify";

export async function generateMetadata(
  { params }: { params: Promise<{ handle: string }> }
): Promise<Metadata> {
  const { handle } = await params;

  /* 1.  Look up the product (you already have this util) */
  const product = await getProductByHandle(handle);

  /* 2.  Fallback in case the handle is invalid */
  if (!product) {
    return {
      title: "Product not found | The Smoking Bee",
      alternates: {
        canonical: `https://thesmokingbee.com/product/${handle}`,
      },
    };
  }

  const firstImage = product.images?.edges?.[0]?.node?.url ?? "";
  const img = product?.images?.edges?.[0]?.node?.url ?? "";
  const description =
    (product.description ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 155);

  /* 3.  Use product.title everywhere you want the real name */
  return {
    title: `${product.title} | The Smoking Bee`,
    description,
    alternates: {
      canonical: `https://thesmokingbee.com/product/${handle}`,
    },
    openGraph: {
      title: `${product.title} | The Smoking Bee`,
      description,
      url: `https://thesmokingbee.com/product/${handle}`,
      type: "website",
      images: firstImage ? [{ url: firstImage }] : [],
    },
    twitter: {
      card: img ? "summary_large_image" : "summary",
      title: `${product.title} | The Smoking Bee`,
      description,
      images: firstImage ? [firstImage] : [],
    },
  };
}

export default async function ProductPage(
  { params }: { params: Promise<{ handle: string }> }
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
