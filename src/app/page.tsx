// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
// import AnimatedProductSection from "@/components/AnimatedProductSection";
import CTASection from "@/components/CTASection";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";


import { getCollections, getAllProductHandles } from "@/lib/shopify";
import path from "path";
import fsPromises from "fs/promises";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Smoking Bee | La Mesa's Premier Smoke Shop",
  description:
    "Looking for the best smoke shop in La Mesa, San Diego, Chula Vista & El Cajon? The Smoking Bee offers premium vapes, glass pipes, Puffco accessories & expert service.",
  keywords:
    "The Smoking Bee, smoke shop near me, smoke shop La Mesa, best smoke shop San Diego, vapes, glass pipes, smoking accessories, head shop near me, premium glassware, Puffco Peak Pro, Puffco Proxy, dab rigs, rolling papers, bongs, hookahs",
  robots: "index, follow",
  openGraph: {
    title: "The Smoking Bee | La Mesa's Premier Smoke Shop",
    description:
      "Looking for the best smoke shop in La Mesa, San Diego, Chula Vista & El Cajon? The Smoking Bee offers premium vapes, glass pipes, Puffco accessories & expert service. Shop now!",
    url: "https://thesmokingbee.com",
    images: ["https://thesmokingbee.com/images/about/1.JPG"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Smoking Bee | La Mesa's Premier Smoke Shop",
    description:
      "Looking for the best smoke shop in La Mesa, San Diego, Chula Vista & El Cajon? The Smoking Bee offers premium vapes, glass pipes, Puffco accessories & expert service. Shop now!",
    images: ["https://thesmokingbee.com/images/about/1.JPG"],
  },
  authors: [{ name: "The Smoking Bee" }],
};

export default async function HomePage() {
  // 1) Fetch collections and product handles
  const [collections, productHandles] = await Promise.all([
    getCollections(),           // returns Array<{ node: { handle: string, … } }>
    getAllProductHandles(),     // returns Array<string>
  ]);

  // 2) Static routes
  const staticPaths = ["/", "/shop", "/about", "/contact", "/locations"];

  // 3) SEO slugs from seoPages.json
  let seoSlugs: string[] = [];
  try {
    const raw = await fsPromises.readFile(
      path.join(process.cwd(), "seoPages.json"),
      "utf8"
    );
    seoSlugs = Object.keys(JSON.parse(raw) as Record<string, unknown>);
  } catch {
    // no seoPages.json → skip
  }

  // 4) Build allPaths
  const allPaths = [
    ...staticPaths,
    ...seoSlugs.map((s) => `/${s}`),
    ...productHandles.map((h) => `/product/${h}`),
    ...collections.map((c) => `/shop/${c.node.handle}`),
  ];

  return (
    <>
      {/* Breadcrumb JSON‑LD */}
      <BreadcrumbClientWrapper crumbs={[{ name: "Home", path: "/" }]} />
      <h1 className="sr-only">Premium Smoke Shop in La Mesa, CA</h1>
      {/* Your page content */}
      <HeroSection />

      <AnimatedCategorySection categories={collections} />
      {/* <AnimatedProductSection products={products} /> */}
      <GeoMapWrapper />
      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>
      <CTASection />

      {/* HIDDEN HTML SITEMAP for HTML‑only crawlers */}
      <nav
        aria-hidden="true"
        style={{ display: "none", opacity: 0, height: 0, width: 0 }}
      >
        <ul>
          {allPaths.map((p) => (
            <li key={p}>
              <a href={`https://thesmokingbee.com${p}`}>{p}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
