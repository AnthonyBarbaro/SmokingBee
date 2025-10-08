// src/app/product/[handle]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";
import ProductPageClient from "./ProductPageClient";
import { getProductByHandle, getAllProducts } from "@/lib/shopify";

// ❶ Pre-render the route and revalidate (ISR)
export const dynamic = "force-static";   // force SSG
export const revalidate = 86400;         // 24 hours

type Params = { handle: string };

function trim(raw?: string) {
  return (raw ?? "").replace(/\s+/g, " ").trim().slice(0, 155);
}

// ❷ Generate all product paths so Next can bake head tags
export async function generateStaticParams(): Promise<Params[]> {
  const all = await getAllProducts();
  const edges = Array.isArray(all) ? all : (all as any)?.edges ?? [];
  return edges
    .map((e: any) => e?.node?.handle)
    .filter(Boolean)
    .map((handle: string) => ({ handle }));
}

// ❸ Metadata API (typed); now it’s evaluated at build → literal tags
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  const canonical = `https://thesmokingbee.com/product/${handle}`;

  if (!product) {
    const desc = "The requested product could not be found.";
    return {
      title: "Product Not Found | The Smoking Bee",
      description: desc,
      alternates: { canonical },
      openGraph: { title: "Product Not Found | The Smoking Bee", description: desc, url: canonical, type: "website" },
      twitter: { card: "summary", title: "Product Not Found | The Smoking Bee", description: desc },
    };
  }

  const image = product.images?.edges?.[0]?.node?.url ?? "";
  const description = trim(product.description);

  return {
    title: `${product.title} | The Smoking Bee`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${product.title} | The Smoking Bee`,
      description,
      url: canonical,
      type: "website",              // keep typesafe here
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: `${product.title} | The Smoking Bee`,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) notFound();

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
