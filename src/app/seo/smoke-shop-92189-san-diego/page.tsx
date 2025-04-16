import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92189 | Skyline Hills",
    description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
    keywords: "smoke shop 92189, skyline hills, rolling papers, kratom, vape mods",
    openGraph: {
      title: "Smoke Shop 92189 | Skyline Hills",
      description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
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
      description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92189_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92189 | Skyline Hills</title>
        <meta name="description" content="Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods." />
        <meta name="keywords" content="smoke shop 92189, skyline hills, rolling papers, kratom, vape mods" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92189 | Skyline Hills" />
        <meta property="og:description" content="Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92189-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92189 | Skyline Hills" />
        <meta name="twitter:description" content="Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Check out our 92189 shop for robust vape mods, fresh kratom, and the rolling papers you need for a perfect roll. Discover delta-8 edibles to spice up your usual routine or opt for new glass attachments. We’re here to help you adapt your setup for maximum flavor and comfort.
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
