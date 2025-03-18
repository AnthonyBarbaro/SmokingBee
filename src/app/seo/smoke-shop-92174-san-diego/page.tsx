import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92174 | Southeastern SD",
    description: "In Southeastern SD (92174)? The Smoking Bee has disposable vapes, glass bongs, and premium smoking gear.",
    keywords: "smoke shop 92174, southeastern san diego, disposable vapes, glass bongs",
    openGraph: {
      title: "Smoke Shop 92174 | Southeastern SD",
      description: "In Southeastern SD (92174)? The Smoking Bee has disposable vapes, glass bongs, and premium smoking gear.",
      url: "https://thesmokingbee.com/smoke-shop-92174-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92174 | Southeastern SD"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92174 | Southeastern SD",
      description: "In Southeastern SD (92174)? The Smoking Bee has disposable vapes, glass bongs, and premium smoking gear.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92174_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92174 | Southeastern SD</title>
        <meta name="description" content="In Southeastern SD (92174)? The Smoking Bee has disposable vapes, glass bongs, and premium smoking gear." />
        <meta name="keywords" content="smoke shop 92174, southeastern san diego, disposable vapes, glass bongs" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92174 | Southeastern SD" />
        <meta property="og:description" content="In Southeastern SD (92174)? The Smoking Bee has disposable vapes, glass bongs, and premium smoking gear." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92174-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92174 | Southeastern SD" />
        <meta name="twitter:description" content="In Southeastern SD (92174)? The Smoking Bee has disposable vapes, glass bongs, and premium smoking gear." />
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
