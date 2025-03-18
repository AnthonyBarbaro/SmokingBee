import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92101 | Downtown San Diego",
    description: "Downtown San Diego's best smoke shop for vaporizers, rolling papers, and Delta-8 products. Visit The Smoking Bee at 92101.",
    keywords: "smoke shop 92101, downtown san diego smoke shop, delta-8 92101, vapes near me",
    openGraph: {
      title: "Smoke Shop 92101 | Downtown San Diego",
      description: "Downtown San Diego's best smoke shop for vaporizers, rolling papers, and Delta-8 products. Visit The Smoking Bee at 92101.",
      url: "https://thesmokingbee.com/smoke-shop-92101-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92101 | Downtown San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92101 | Downtown San Diego",
      description: "Downtown San Diego's best smoke shop for vaporizers, rolling papers, and Delta-8 products. Visit The Smoking Bee at 92101.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92101_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92101 | Downtown San Diego</title>
        <meta name="description" content="Downtown San Diego's best smoke shop for vaporizers, rolling papers, and Delta-8 products. Visit The Smoking Bee at 92101." />
        <meta name="keywords" content="smoke shop 92101, downtown san diego smoke shop, delta-8 92101, vapes near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92101 | Downtown San Diego" />
        <meta property="og:description" content="Downtown San Diego's best smoke shop for vaporizers, rolling papers, and Delta-8 products. Visit The Smoking Bee at 92101." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92101-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92101 | Downtown San Diego" />
        <meta name="twitter:description" content="Downtown San Diego's best smoke shop for vaporizers, rolling papers, and Delta-8 products. Visit The Smoking Bee at 92101." />
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
