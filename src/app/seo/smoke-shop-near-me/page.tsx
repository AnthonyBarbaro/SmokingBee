import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Find a Smoke Shop Near You | The Smoking Bee",
    description: "Searching for a smoke shop near you? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories in San Diego.",
    keywords: "smoke shop near me, head shop near me, best smoke shop, glass pipes, vapes near me",
    openGraph: {
      title: "Find a Smoke Shop Near You | The Smoking Bee",
      description: "Searching for a smoke shop near you? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories in San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-near-me",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Find a Smoke Shop Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find a Smoke Shop Near You | The Smoking Bee",
      description: "Searching for a smoke shop near you? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories in San Diego.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_near_me_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Find a Smoke Shop Near You | The Smoking Bee</title>
        <meta name="description" content="Searching for a smoke shop near you? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories in San Diego." />
        <meta name="keywords" content="smoke shop near me, head shop near me, best smoke shop, glass pipes, vapes near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Find a Smoke Shop Near You | The Smoking Bee" />
        <meta property="og:description" content="Searching for a smoke shop near you? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories in San Diego." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-near-me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Find a Smoke Shop Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Searching for a smoke shop near you? The Smoking Bee offers premium vapes, glass pipes, and smoking accessories in San Diego." />
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
