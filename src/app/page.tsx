// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
//import AnimatedProductSection from "@/components/AnimatedProductSection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";
import type { Metadata } from "next";
import PopupImageModal from "@/components/PopupImageModal";
// metadata export here
export const metadata: Metadata = {
  title: "The Smoking Bee | La Mesa's Premier Smoke Shop",
  description:
    "Looking for the best smoke shop near you? The Smoking Bee, also known as Smoking Bee, offers premium vapes, glass pipes, Puffco, and smoking accessories in La Mesa & San Diego.",
  keywords:
    "The Smoking Bee, Smoking Bee, smoke shop near me, smoke shop La Mesa, best smoke shop San Diego, vapes, glass pipes, smoking accessories, head shop near me, premium glassware, Puffco Peak Pro, Puffco Proxy, dab rigs, rolling papers, bongs, hookahs",
  openGraph: {
    title: "The Smoking Bee - La Mesa's Best Smoke Shop",
    description:
      "Visit The Smoking Bee, the best smoke shop in La Mesa & San Diego, offering premium vapes, glass pipes, and accessories.",
    images: ["https://thesmokingbee.com/images/about/1.JPG"],
    url: "https://thesmokingbee.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Smoking Bee | La Mesa's Best Smoke Shop",
    description:
      "Find high-quality smoking accessories, glassware, and vapes at The Smoking Bee. The best smoke shop in La Mesa and San Diego!",
    images: ["https://thesmokingbee.com/images/about/1.JPG"],
  },
  authors: [{ name: "The Smoking Bee" }],
};
export default async function HomePage() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      {/* ✅ Breadcrumb JSON-LD */}
      <BreadcrumbClientWrapper
          crumbs={[{ name: "Home", path: "/" }]}
        />
      <HeroSection />
      <PopupImageModal />
      {/* Animated Categories */}
      <AnimatedCategorySection categories={categories} />

      {/* Animated Products 
      <AnimatedProductSection products={products} />
      */}
      {/* Google Map Section */}
      <GeoMapWrapper />
      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      {/* About & Contact CTA Section */}
      <CTASection />

    </>
  );
}
