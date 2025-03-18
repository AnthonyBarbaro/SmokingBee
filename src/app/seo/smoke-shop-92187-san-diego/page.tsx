import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92187 | Southeastern San Diego",
    description: "In 92187? The Smoking Bee’s got you covered with disposable vapes, premium Delta-8, and glass pieces.",
    keywords: "smoke shop 92187, disposable vapes near me, delta-8, glass pieces",
    openGraph: {
      title: "Smoke Shop 92187 | Southeastern San Diego",
      description: "In 92187? The Smoking Bee’s got you covered with disposable vapes, premium Delta-8, and glass pieces.",
      url: "https://thesmokingbee.com/smoke-shop-92187-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92187 | Southeastern San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92187 | Southeastern San Diego",
      description: "In 92187? The Smoking Bee’s got you covered with disposable vapes, premium Delta-8, and glass pieces.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92187_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92187 | Southeastern San Diego</title>
        <meta name="description" content="In 92187? The Smoking Bee’s got you covered with disposable vapes, premium Delta-8, and glass pieces." />
        <meta name="keywords" content="smoke shop 92187, disposable vapes near me, delta-8, glass pieces" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92187 | Southeastern San Diego" />
        <meta property="og:description" content="In 92187? The Smoking Bee’s got you covered with disposable vapes, premium Delta-8, and glass pieces." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92187-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92187 | Southeastern San Diego" />
        <meta name="twitter:description" content="In 92187? The Smoking Bee’s got you covered with disposable vapes, premium Delta-8, and glass pieces." />
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
