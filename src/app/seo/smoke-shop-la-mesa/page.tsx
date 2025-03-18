import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Smoke Shop in La Mesa | The Smoking Bee",
    description: "Looking for the best smoke shop in La Mesa? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories.",
    keywords: "smoke shop La Mesa, best smoke shop in La Mesa, head shop La Mesa, glass pipes La Mesa, vapes near me",
    openGraph: {
      title: "Best Smoke Shop in La Mesa | The Smoking Bee",
      description: "Looking for the best smoke shop in La Mesa? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Smoke Shop in La Mesa | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Smoke Shop in La Mesa | The Smoking Bee",
      description: "Looking for the best smoke shop in La Mesa? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Best Smoke Shop in La Mesa | The Smoking Bee</title>
        <meta name="description" content="Looking for the best smoke shop in La Mesa? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories." />
        <meta name="keywords" content="smoke shop La Mesa, best smoke shop in La Mesa, head shop La Mesa, glass pipes La Mesa, vapes near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Smoke Shop in La Mesa | The Smoking Bee" />
        <meta property="og:description" content="Looking for the best smoke shop in La Mesa? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-la-mesa" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Smoke Shop in La Mesa | The Smoking Bee" />
        <meta name="twitter:description" content="Looking for the best smoke shop in La Mesa? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories." />
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
