import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92141 | Kearny Mesa / Spectrum",
    description: "Kearny Mesa’s #1 shop for Delta-8, vape refills, and glass bongs. Check out The Smoking Bee at 92141.",
    keywords: "smoke shop 92141, kearny mesa, delta-8 near me, vape refills",
    openGraph: {
      title: "Smoke Shop 92141 | Kearny Mesa / Spectrum",
      description: "Kearny Mesa’s #1 shop for Delta-8, vape refills, and glass bongs. Check out The Smoking Bee at 92141.",
      url: "https://thesmokingbee.com/smoke-shop-92141-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92141 | Kearny Mesa / Spectrum"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92141 | Kearny Mesa / Spectrum",
      description: "Kearny Mesa’s #1 shop for Delta-8, vape refills, and glass bongs. Check out The Smoking Bee at 92141.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92141_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92141 | Kearny Mesa / Spectrum</title>
        <meta name="description" content="Kearny Mesa’s #1 shop for Delta-8, vape refills, and glass bongs. Check out The Smoking Bee at 92141." />
        <meta name="keywords" content="smoke shop 92141, kearny mesa, delta-8 near me, vape refills" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92141 | Kearny Mesa / Spectrum" />
        <meta property="og:description" content="Kearny Mesa’s #1 shop for Delta-8, vape refills, and glass bongs. Check out The Smoking Bee at 92141." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92141-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92141 | Kearny Mesa / Spectrum" />
        <meta name="twitter:description" content="Kearny Mesa’s #1 shop for Delta-8, vape refills, and glass bongs. Check out The Smoking Bee at 92141." />
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
