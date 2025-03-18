import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92134 | Near Naval Base",
    description: "Located near 92134? The Smoking Bee has the best smoking accessories, vapes, and rolling papers.",
    keywords: "smoke shop 92134, naval base, best vapes, rolling papers near me",
    openGraph: {
      title: "Smoke Shop 92134 | Near Naval Base",
      description: "Located near 92134? The Smoking Bee has the best smoking accessories, vapes, and rolling papers.",
      url: "https://thesmokingbee.com/smoke-shop-92134-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92134 | Near Naval Base"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92134 | Near Naval Base",
      description: "Located near 92134? The Smoking Bee has the best smoking accessories, vapes, and rolling papers.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92134_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92134 | Near Naval Base</title>
        <meta name="description" content="Located near 92134? The Smoking Bee has the best smoking accessories, vapes, and rolling papers." />
        <meta name="keywords" content="smoke shop 92134, naval base, best vapes, rolling papers near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92134 | Near Naval Base" />
        <meta property="og:description" content="Located near 92134? The Smoking Bee has the best smoking accessories, vapes, and rolling papers." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92134-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92134 | Near Naval Base" />
        <meta name="twitter:description" content="Located near 92134? The Smoking Bee has the best smoking accessories, vapes, and rolling papers." />
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
