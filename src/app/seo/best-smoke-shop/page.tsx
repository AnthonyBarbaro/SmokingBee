import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Smoke Shop Near You | The Smoking Bee",
    description: "Looking for the best smoke shop? Visit The Smoking Bee for top-quality glass bongs, vapes, and smoking accessories.",
    keywords: "best smoke shop, top smoke shops, head shop near me, best glass pipes, premium smoking accessories",
    openGraph: {
      title: "Best Smoke Shop Near You | The Smoking Bee",
      description: "Looking for the best smoke shop? Visit The Smoking Bee for top-quality glass bongs, vapes, and smoking accessories.",
      url: "https://thesmokingbee.com/best-smoke-shop",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Smoke Shop Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Smoke Shop Near You | The Smoking Bee",
      description: "Looking for the best smoke shop? Visit The Smoking Bee for top-quality glass bongs, vapes, and smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_smoke_shop_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Best Smoke Shop Near You | The Smoking Bee</title>
        <meta name="description" content="Looking for the best smoke shop? Visit The Smoking Bee for top-quality glass bongs, vapes, and smoking accessories." />
        <meta name="keywords" content="best smoke shop, top smoke shops, head shop near me, best glass pipes, premium smoking accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Smoke Shop Near You | The Smoking Bee" />
        <meta property="og:description" content="Looking for the best smoke shop? Visit The Smoking Bee for top-quality glass bongs, vapes, and smoking accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-smoke-shop" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Smoke Shop Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Looking for the best smoke shop? Visit The Smoking Bee for top-quality glass bongs, vapes, and smoking accessories." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={categories} />
      <GeoMap />

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
