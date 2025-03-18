import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92180 | Kearny Mesa / Aero Drive",
    description: "Check out The Smoking Bee (92180) for top-tier e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
    keywords: "smoke shop 92180, kearny mesa, e-liquids, rolling trays",
    openGraph: {
      title: "Smoke Shop 92180 | Kearny Mesa / Aero Drive",
      description: "Check out The Smoking Bee (92180) for top-tier e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
      url: "https://thesmokingbee.com/smoke-shop-92180-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92180 | Kearny Mesa / Aero Drive"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92180 | Kearny Mesa / Aero Drive",
      description: "Check out The Smoking Bee (92180) for top-tier e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92180_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92180 | Kearny Mesa / Aero Drive</title>
        <meta name="description" content="Check out The Smoking Bee (92180) for top-tier e-liquids, rolling trays, and glass accessories in Kearny Mesa." />
        <meta name="keywords" content="smoke shop 92180, kearny mesa, e-liquids, rolling trays" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92180 | Kearny Mesa / Aero Drive" />
        <meta property="og:description" content="Check out The Smoking Bee (92180) for top-tier e-liquids, rolling trays, and glass accessories in Kearny Mesa." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92180-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92180 | Kearny Mesa / Aero Drive" />
        <meta name="twitter:description" content="Check out The Smoking Bee (92180) for top-tier e-liquids, rolling trays, and glass accessories in Kearny Mesa." />
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
