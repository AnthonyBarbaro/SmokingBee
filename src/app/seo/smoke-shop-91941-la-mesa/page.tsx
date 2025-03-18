import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 91941 | La Mesa's Best Head Shop",
    description: "Looking for a smoke shop near 91941? The Smoking Bee in La Mesa offers top-tier vapes, glass, and smoking accessories.",
    keywords: "smoke shop 91941, la mesa smoke shop, best head shop 91941, vapes near 91941",
    openGraph: {
      title: "Smoke Shop 91941 | La Mesa's Best Head Shop",
      description: "Looking for a smoke shop near 91941? The Smoking Bee in La Mesa offers top-tier vapes, glass, and smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-91941-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 91941 | La Mesa's Best Head Shop"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 91941 | La Mesa's Best Head Shop",
      description: "Looking for a smoke shop near 91941? The Smoking Bee in La Mesa offers top-tier vapes, glass, and smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_91941_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 91941 | La Mesa's Best Head Shop</title>
        <meta name="description" content="Looking for a smoke shop near 91941? The Smoking Bee in La Mesa offers top-tier vapes, glass, and smoking accessories." />
        <meta name="keywords" content="smoke shop 91941, la mesa smoke shop, best head shop 91941, vapes near 91941" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 91941 | La Mesa's Best Head Shop" />
        <meta property="og:description" content="Looking for a smoke shop near 91941? The Smoking Bee in La Mesa offers top-tier vapes, glass, and smoking accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-91941-la-mesa" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 91941 | La Mesa's Best Head Shop" />
        <meta name="twitter:description" content="Looking for a smoke shop near 91941? The Smoking Bee in La Mesa offers top-tier vapes, glass, and smoking accessories." />
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
