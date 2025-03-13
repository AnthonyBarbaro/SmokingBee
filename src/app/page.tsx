// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
//import AnimatedProductSection from "@/components/AnimatedProductSection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>The Smoking Bee | La Mesa's Premier Smoke Shop</title>
        <meta
          name="description"
          content="Looking for the best smoke shop near you? The Smoking Bee, also known as Smoking Bee, offers premium vapes, glass pipes, Puffco, and smoking accessories in La Mesa & San Diego."
        />
        <meta
          name="keywords"
          content="The Smoking Bee, Smoking Bee, smoke shop near me, smoke shop La Mesa, best smoke shop San Diego, vapes, glass pipes, smoking accessories, head shop near me, premium glassware, Puffco Peak Pro, Puffco Proxy, dab rigs, rolling papers, bongs, hookahs"
        />
        <meta name="author" content="The Smoking Bee" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="The Smoking Bee - La Mesa's Best Smoke Shop" />
        <meta
          property="og:description"
          content="Visit The Smoking Bee, the best smoke shop in La Mesa & San Diego, offering premium vapes, glass pipes, and accessories."
        />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="The Smoking Bee | La Mesa's Best Smoke Shop" />
        <meta
          name="twitter:description"
          content="Find high-quality smoking accessories, glassware, and vapes at The Smoking Bee. The best smoke shop in La Mesa and San Diego!"
        />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      <HeroSection />

      {/* Animated Categories */}
      <AnimatedCategorySection categories={categories} />

      {/* Animated Products 
      <AnimatedProductSection products={products} />
      */}
      {/* Google Map Section */}
      <GeoMap />
      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      {/* About & Contact CTA Section */}
      <CTASection />

    </>
  );
}
