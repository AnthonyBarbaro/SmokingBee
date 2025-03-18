import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92159 | Near Allied Gardens",
    description: "Allied Gardens (92159) is covered by The Smoking Bee for vapes, glass bongs, and rolling trays.",
    keywords: "smoke shop 92159, allied gardens, best vapes, rolling trays near me",
    openGraph: {
      title: "Smoke Shop 92159 | Near Allied Gardens",
      description: "Allied Gardens (92159) is covered by The Smoking Bee for vapes, glass bongs, and rolling trays.",
      url: "https://thesmokingbee.com/smoke-shop-92159-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92159 | Near Allied Gardens"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92159 | Near Allied Gardens",
      description: "Allied Gardens (92159) is covered by The Smoking Bee for vapes, glass bongs, and rolling trays.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92159_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92159 | Near Allied Gardens</title>
        <meta name="description" content="Allied Gardens (92159) is covered by The Smoking Bee for vapes, glass bongs, and rolling trays." />
        <meta name="keywords" content="smoke shop 92159, allied gardens, best vapes, rolling trays near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92159 | Near Allied Gardens" />
        <meta property="og:description" content="Allied Gardens (92159) is covered by The Smoking Bee for vapes, glass bongs, and rolling trays." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92159-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92159 | Near Allied Gardens" />
        <meta name="twitter:description" content="Allied Gardens (92159) is covered by The Smoking Bee for vapes, glass bongs, and rolling trays." />
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
