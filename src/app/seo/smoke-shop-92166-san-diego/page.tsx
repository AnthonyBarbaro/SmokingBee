import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92166 | Roseville/Fleetridge",
    description: "Near 92166 in Point Loma’s Roseville area? Check out The Smoking Bee for top-tier smoking accessories.",
    keywords: "smoke shop 92166, roseville, point loma, best accessories near me",
    openGraph: {
      title: "Smoke Shop 92166 | Roseville/Fleetridge",
      description: "Near 92166 in Point Loma’s Roseville area? Check out The Smoking Bee for top-tier smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-92166-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92166 | Roseville/Fleetridge"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92166 | Roseville/Fleetridge",
      description: "Near 92166 in Point Loma’s Roseville area? Check out The Smoking Bee for top-tier smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92166_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92166 | Roseville/Fleetridge</title>
        <meta name="description" content="Near 92166 in Point Loma’s Roseville area? Check out The Smoking Bee for top-tier smoking accessories." />
        <meta name="keywords" content="smoke shop 92166, roseville, point loma, best accessories near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92166 | Roseville/Fleetridge" />
        <meta property="og:description" content="Near 92166 in Point Loma’s Roseville area? Check out The Smoking Bee for top-tier smoking accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92166-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92166 | Roseville/Fleetridge" />
        <meta name="twitter:description" content="Near 92166 in Point Loma’s Roseville area? Check out The Smoking Bee for top-tier smoking accessories." />
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
