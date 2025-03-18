import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92140 | Marine Corps Depot Area",
    description: "Serving 92140 near MCRD with top-tier vape products, rolling trays, and glass pipes at The Smoking Bee.",
    keywords: "smoke shop 92140, MCRD, best rolling trays, glass pipes 92140",
    openGraph: {
      title: "Smoke Shop 92140 | Marine Corps Depot Area",
      description: "Serving 92140 near MCRD with top-tier vape products, rolling trays, and glass pipes at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92140-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92140 | Marine Corps Depot Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92140 | Marine Corps Depot Area",
      description: "Serving 92140 near MCRD with top-tier vape products, rolling trays, and glass pipes at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92140_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92140 | Marine Corps Depot Area</title>
        <meta name="description" content="Serving 92140 near MCRD with top-tier vape products, rolling trays, and glass pipes at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92140, MCRD, best rolling trays, glass pipes 92140" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92140 | Marine Corps Depot Area" />
        <meta property="og:description" content="Serving 92140 near MCRD with top-tier vape products, rolling trays, and glass pipes at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92140-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92140 | Marine Corps Depot Area" />
        <meta name="twitter:description" content="Serving 92140 near MCRD with top-tier vape products, rolling trays, and glass pipes at The Smoking Bee." />
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
