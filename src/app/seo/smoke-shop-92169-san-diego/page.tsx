import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92169 | Pacific Beach",
    description: "PB (92169) locals trust The Smoking Bee for the best disposable vapes, glass, and hookah accessories.",
    keywords: "smoke shop 92169, pacific beach, disposable vapes, hookah accessories",
    openGraph: {
      title: "Smoke Shop 92169 | Pacific Beach",
      description: "PB (92169) locals trust The Smoking Bee for the best disposable vapes, glass, and hookah accessories.",
      url: "https://thesmokingbee.com/smoke-shop-92169-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92169 | Pacific Beach"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92169 | Pacific Beach",
      description: "PB (92169) locals trust The Smoking Bee for the best disposable vapes, glass, and hookah accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92169_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92169 | Pacific Beach</title>
        <meta name="description" content="PB (92169) locals trust The Smoking Bee for the best disposable vapes, glass, and hookah accessories." />
        <meta name="keywords" content="smoke shop 92169, pacific beach, disposable vapes, hookah accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92169 | Pacific Beach" />
        <meta property="og:description" content="PB (92169) locals trust The Smoking Bee for the best disposable vapes, glass, and hookah accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92169-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92169 | Pacific Beach" />
        <meta name="twitter:description" content="PB (92169) locals trust The Smoking Bee for the best disposable vapes, glass, and hookah accessories." />
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
