import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92167 | Loma Portal’s Best",
    description: "In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers.",
    keywords: "smoke shop 92167, loma portal, premium kratom, vape pens near me",
    openGraph: {
      title: "Smoke Shop 92167 | Loma Portal’s Best",
      description: "In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers.",
      url: "https://thesmokingbee.com/smoke-shop-92167-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92167 | Loma Portal’s Best"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92167 | Loma Portal’s Best",
      description: "In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92167_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92167 | Loma Portal’s Best</title>
        <meta name="description" content="In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers." />
        <meta name="keywords" content="smoke shop 92167, loma portal, premium kratom, vape pens near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92167 | Loma Portal’s Best" />
        <meta property="og:description" content="In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92167-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92167 | Loma Portal’s Best" />
        <meta name="twitter:description" content="In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers." />
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
