import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92189 | Skyline Hills",
    description: "Skyline Hills (92189) chooses The Smoking Bee for top-tier rolling papers, kratom, and vape mods.",
    keywords: "smoke shop 92189, skyline hills, rolling papers, kratom near me",
    openGraph: {
      title: "Smoke Shop 92189 | Skyline Hills",
      description: "Skyline Hills (92189) chooses The Smoking Bee for top-tier rolling papers, kratom, and vape mods.",
      url: "https://thesmokingbee.com/smoke-shop-92189-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92189 | Skyline Hills"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92189 | Skyline Hills",
      description: "Skyline Hills (92189) chooses The Smoking Bee for top-tier rolling papers, kratom, and vape mods.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92189_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92189 | Skyline Hills</title>
        <meta name="description" content="Skyline Hills (92189) chooses The Smoking Bee for top-tier rolling papers, kratom, and vape mods." />
        <meta name="keywords" content="smoke shop 92189, skyline hills, rolling papers, kratom near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92189 | Skyline Hills" />
        <meta property="og:description" content="Skyline Hills (92189) chooses The Smoking Bee for top-tier rolling papers, kratom, and vape mods." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92189-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92189 | Skyline Hills" />
        <meta name="twitter:description" content="Skyline Hills (92189) chooses The Smoking Bee for top-tier rolling papers, kratom, and vape mods." />
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
