import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92168 | Midway District",
    description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. The Smoking Bee at 92168 has you covered.",
    keywords: "smoke shop 92168, midway district, delta-8, rolling trays near me",
    openGraph: {
      title: "Smoke Shop 92168 | Midway District",
      description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. The Smoking Bee at 92168 has you covered.",
      url: "https://thesmokingbee.com/smoke-shop-92168-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92168 | Midway District"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92168 | Midway District",
      description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. The Smoking Bee at 92168 has you covered.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92168_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92168 | Midway District</title>
        <meta name="description" content="Midway District’s top shop for rolling trays, Delta-8, and glass bongs. The Smoking Bee at 92168 has you covered." />
        <meta name="keywords" content="smoke shop 92168, midway district, delta-8, rolling trays near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92168 | Midway District" />
        <meta property="og:description" content="Midway District’s top shop for rolling trays, Delta-8, and glass bongs. The Smoking Bee at 92168 has you covered." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92168-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92168 | Midway District" />
        <meta name="twitter:description" content="Midway District’s top shop for rolling trays, Delta-8, and glass bongs. The Smoking Bee at 92168 has you covered." />
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
