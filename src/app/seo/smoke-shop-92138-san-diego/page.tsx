import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92138 | Near Old Town San Diego",
    description: "Get top-quality smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass, and more.",
    keywords: "smoke shop 92138, old town san diego, best vapes, glass near me",
    openGraph: {
      title: "Smoke Shop 92138 | Near Old Town San Diego",
      description: "Get top-quality smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92138-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92138 | Near Old Town San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92138 | Near Old Town San Diego",
      description: "Get top-quality smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92138_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92138 | Near Old Town San Diego</title>
        <meta name="description" content="Get top-quality smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass, and more." />
        <meta name="keywords" content="smoke shop 92138, old town san diego, best vapes, glass near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92138 | Near Old Town San Diego" />
        <meta property="og:description" content="Get top-quality smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92138-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92138 | Near Old Town San Diego" />
        <meta name="twitter:description" content="Get top-quality smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass, and more." />
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
