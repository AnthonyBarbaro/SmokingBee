import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
    description: "Serra Mesa smokers at 92184 get premium vaping mods, kratom capsules, and more from The Smoking Bee.",
    keywords: "smoke shop 92184, serra mesa, vaping mods, kratom capsules",
    openGraph: {
      title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
      description: "Serra Mesa smokers at 92184 get premium vaping mods, kratom capsules, and more from The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92184-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92184 | Serra Mesa / Mission Heights"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
      description: "Serra Mesa smokers at 92184 get premium vaping mods, kratom capsules, and more from The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92184_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92184 | Serra Mesa / Mission Heights</title>
        <meta name="description" content="Serra Mesa smokers at 92184 get premium vaping mods, kratom capsules, and more from The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92184, serra mesa, vaping mods, kratom capsules" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92184 | Serra Mesa / Mission Heights" />
        <meta property="og:description" content="Serra Mesa smokers at 92184 get premium vaping mods, kratom capsules, and more from The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92184-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92184 | Serra Mesa / Mission Heights" />
        <meta name="twitter:description" content="Serra Mesa smokers at 92184 get premium vaping mods, kratom capsules, and more from The Smoking Bee." />
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
