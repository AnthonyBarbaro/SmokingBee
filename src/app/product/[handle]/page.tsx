// src/app/product/[handle]/page.tsx
export const dynamic = "force-dynamic";
import Head from "next/head";
import { getProductByHandle } from "@/lib/shopify";
import ProductPageClient from "./ProductPageClient";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold text-gold mb-4">Product Not Found</h1>
        <p className="text-gray-600">We couldn’t find the product you’re looking for.</p>
      </div>
    );
  }

  return (
    <main>
      <Head>
        <link rel="canonical" href={`https://thesmokingbee.com/product/${handle}`} />
      </Head>
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
