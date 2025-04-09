import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
    description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
    keywords: "smoke shop 92184, serra mesa, vaping mods, kratom capsules, smoking shop",
    openGraph: {
      title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
      description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
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
      description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92184_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92184 | Serra Mesa / Mission Heights</title>
        <meta name="description" content="Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92184, serra mesa, vaping mods, kratom capsules, smoking shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92184 | Serra Mesa / Mission Heights" />
        <meta property="og:description" content="Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92184-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92184 | Serra Mesa / Mission Heights" />
        <meta name="twitter:description" content="Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            At our 92184 location, discover advanced vaping mods, quality kratom, and other smoking essentials. Whether you want intense vapor production or simpler gear, we have solutions for both. Pair your new mod with a tasty e-liquid or see our top picks in delta-8 edibles for a complete experience.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
