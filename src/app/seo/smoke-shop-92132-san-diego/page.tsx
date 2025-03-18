import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92132 | Central San Diego",
    description: "Your go-to in central San Diego for glass pipes, Delta-8, and top-tier smoking supplies at 92132.",
    keywords: "smoke shop 92132, central san diego, glass pipes, delta-8 near me",
    openGraph: {
      title: "Smoke Shop 92132 | Central San Diego",
      description: "Your go-to in central San Diego for glass pipes, Delta-8, and top-tier smoking supplies at 92132.",
      url: "https://thesmokingbee.com/smoke-shop-92132-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92132 | Central San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92132 | Central San Diego",
      description: "Your go-to in central San Diego for glass pipes, Delta-8, and top-tier smoking supplies at 92132.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92132_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92132 | Central San Diego</title>
        <meta name="description" content="Your go-to in central San Diego for glass pipes, Delta-8, and top-tier smoking supplies at 92132." />
        <meta name="keywords" content="smoke shop 92132, central san diego, glass pipes, delta-8 near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92132 | Central San Diego" />
        <meta property="og:description" content="Your go-to in central San Diego for glass pipes, Delta-8, and top-tier smoking supplies at 92132." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92132-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92132 | Central San Diego" />
        <meta name="twitter:description" content="Your go-to in central San Diego for glass pipes, Delta-8, and top-tier smoking supplies at 92132." />
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
