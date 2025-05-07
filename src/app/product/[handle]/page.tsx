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
  return {
    alternates: {
      canonical: `https://thesmokingbee.com/product/${handle}`,
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
