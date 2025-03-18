import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Vape Shop Near You | The Smoking Bee",
    description: "Discover the best vape shop with top-quality disposable vapes, e-liquids, and accessories. The Smoking Bee delivers premium vape products.",
    keywords: "best vape shop, vape shop near me, disposable vapes, e-liquid store, premium vape store",
    openGraph: {
      title: "Best Vape Shop Near You | The Smoking Bee",
      description: "Discover the best vape shop with top-quality disposable vapes, e-liquids, and accessories. The Smoking Bee delivers premium vape products.",
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
      description: "Discover the best vape shop with top-quality disposable vapes, e-liquids, and accessories. The Smoking Bee delivers premium vape products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_vape_shop_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Best Vape Shop Near You | The Smoking Bee</title>
        <meta name="description" content="Discover the best vape shop with top-quality disposable vapes, e-liquids, and accessories. The Smoking Bee delivers premium vape products." />
        <meta name="keywords" content="best vape shop, vape shop near me, disposable vapes, e-liquid store, premium vape store" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Vape Shop Near You | The Smoking Bee" />
        <meta property="og:description" content="Discover the best vape shop with top-quality disposable vapes, e-liquids, and accessories. The Smoking Bee delivers premium vape products." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-vape-shop" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Vape Shop Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Discover the best vape shop with top-quality disposable vapes, e-liquids, and accessories. The Smoking Bee delivers premium vape products." />
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
