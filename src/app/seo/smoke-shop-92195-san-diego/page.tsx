import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92195 | College Area",
    description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
    keywords: "smoke shop 92195, college area, hookah, glass bongs, e-liquids",
    openGraph: {
      title: "Smoke Shop 92195 | College Area",
      description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
      url: "https://thesmokingbee.com/smoke-shop-92195-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92195 | College Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92195 | College Area",
      description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92195_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92195 | College Area</title>
        <meta name="description" content="College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids." />
        <meta name="keywords" content="smoke shop 92195, college area, hookah, glass bongs, e-liquids" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92195 | College Area" />
        <meta property="og:description" content="College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92195-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92195 | College Area" />
        <meta name="twitter:description" content="College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Near 92195, we offer a range of hookah essentials, vibrant e-liquids, and high-quality glass bongs to elevate your sessions. Explore delta-8 tinctures or pick up rolling supplies on your way to class. Our friendly vibe and rotating stock mean there’s always a new flavor or accessory to try.
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
