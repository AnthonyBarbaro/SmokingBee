// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import AnimatedProductSection from "@/components/AnimatedProductSection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <HeroSection />

      {/* Animated Categories */}
      <AnimatedCategorySection categories={categories} />

      {/* Animated Products */}
      <AnimatedProductSection products={products} />

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      {/* About & Contact CTA Section */}
      <CTASection />
    </>
  );
}
