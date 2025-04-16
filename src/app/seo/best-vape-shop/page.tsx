import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Best Vape Shop Near You | The Smoking Bee",
    description: "Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop.",
    keywords: "best vape shop, disposable vapes, e-liquids, vape store, vapes near me",
    openGraph: {
      title: "Best Vape Shop Near You | The Smoking Bee",
      description: "Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop.",
      url: "https://thesmokingbee.com/best-vape-shop",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Vape Shop Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Vape Shop Near You | The Smoking Bee",
      description: "Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_vape_shop_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Best Vape Shop Near You | The Smoking Bee</title>
        <meta name="description" content="Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop." />
        <meta name="keywords" content="best vape shop, disposable vapes, e-liquids, vape store, vapes near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Vape Shop Near You | The Smoking Bee" />
        <meta property="og:description" content="Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-vape-shop" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Vape Shop Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            At The Smoking Bee, find your favorite e-liquids, disposables, and more. Whether you’re looking for nicotine salts, classic flavors, or the latest coil setups, our shelves cater to casual and advanced vapers alike. Experience flavorful hits and premium convenience with our top-tier vaping selections.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
