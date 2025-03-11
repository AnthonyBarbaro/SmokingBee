// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import AnimatedProductSection from "@/components/AnimatedProductSection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>The Smoking Bee | La Mesa's Premier Smoke Shop</title>
        <meta name="description" content="The Smoking Bee is the best smoke shop in La Mesa, CA, offering premium glassware, vapes, and smoking accessories. Visit us today!" />
        <meta name="keywords" content="smoke shop La Mesa, best smoke shop in La Mesa, vapes, glass pipes, smoking accessories, premium glassware, smoke shop near me, puffco" />
        <meta name="author" content="The Smoking Bee" />
        <meta property="og:title" content="The Smoking Bee - La Mesa's Best Smoke Shop" />
        <meta property="og:description" content="Find high-quality glass pipes, vapes, and smoking accessories at The Smoking Bee in La Mesa, CA. Best selection and expert customer service!" />
        <meta property="og:image" content="public/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com" />
        <meta name="twitter:title" content="The Smoking Bee | La Mesa's Best Smoke Shop" />
        <meta name="twitter:description" content="Discover top-quality smoking accessories, glassware, and vapes in La Mesa. Visit The Smoking Bee today!" />
        <meta name="twitter:image" content="public/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
