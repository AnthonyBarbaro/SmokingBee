import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Delta-8 Products | The Smoking Bee",
    description: "Looking for Delta-8 THC? The Smoking Bee offers the best Delta-8 edibles, vapes, and tinctures for sale.",
    keywords: "best Delta-8 products, Delta-8 shop, buy Delta-8 online, Delta-8 near me",
    openGraph: {
      title: "Best Delta-8 Products | The Smoking Bee",
      description: "Looking for Delta-8 THC? The Smoking Bee offers the best Delta-8 edibles, vapes, and tinctures for sale.",
      url: "https://thesmokingbee.com/best-delta-8-products",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Delta-8 Products | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Delta-8 Products | The Smoking Bee",
      description: "Looking for Delta-8 THC? The Smoking Bee offers the best Delta-8 edibles, vapes, and tinctures for sale.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_delta_8_products_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Best Delta-8 Products | The Smoking Bee</title>
        <meta name="description" content="Looking for Delta-8 THC? The Smoking Bee offers the best Delta-8 edibles, vapes, and tinctures for sale." />
        <meta name="keywords" content="best Delta-8 products, Delta-8 shop, buy Delta-8 online, Delta-8 near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Delta-8 Products | The Smoking Bee" />
        <meta property="og:description" content="Looking for Delta-8 THC? The Smoking Bee offers the best Delta-8 edibles, vapes, and tinctures for sale." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-delta-8-products" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Delta-8 Products | The Smoking Bee" />
        <meta name="twitter:description" content="Looking for Delta-8 THC? The Smoking Bee offers the best Delta-8 edibles, vapes, and tinctures for sale." />
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
