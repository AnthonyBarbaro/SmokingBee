// src/app/product/[handle]/page.tsx
export const dynamic = "force-dynamic";
import { getProductByHandle } from "@/lib/shopify";
import ProductPageClient from "./ProductPageClient";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";
import { Metadata } from "next";
export const metadataBase = new URL("https://thesmokingbee.com");

export async function generateMetadata({ params }: { params: { handle: string } }): Promise<Metadata> {
  const product = await getProductByHandle(params.handle);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} | The Smoking Bee`,
    description: product.description.slice(0, 155),
    alternates: {
      canonical: `/product/${params.handle}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://thesmokingbee.com/product/${params.handle}`,
      images: product.images.edges.map(
        ({ node }: { node: { url: string } }) => ({ url: node.url })
      ),      
    
    },
  };
}
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
