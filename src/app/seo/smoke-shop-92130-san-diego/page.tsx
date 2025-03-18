import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92130 | Carmel Valley’s Premier Head Shop",
    description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. The Smoking Bee in 92130 has it all.",
    keywords: "smoke shop 92130, carmel valley, best kratom 92130, glass bongs near me",
    openGraph: {
      title: "Smoke Shop 92130 | Carmel Valley’s Premier Head Shop",
      description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. The Smoking Bee in 92130 has it all.",
      url: "https://thesmokingbee.com/smoke-shop-92130-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92130 | Carmel Valley’s Premier Head Shop"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92130 | Carmel Valley’s Premier Head Shop",
      description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. The Smoking Bee in 92130 has it all.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92130_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92130 | Carmel Valley’s Premier Head Shop</title>
        <meta name="description" content="Carmel Valley’s top spot for glass bongs, vapes, and kratom. The Smoking Bee in 92130 has it all." />
        <meta name="keywords" content="smoke shop 92130, carmel valley, best kratom 92130, glass bongs near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92130 | Carmel Valley’s Premier Head Shop" />
        <meta property="og:description" content="Carmel Valley’s top spot for glass bongs, vapes, and kratom. The Smoking Bee in 92130 has it all." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92130-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92130 | Carmel Valley’s Premier Head Shop" />
        <meta name="twitter:description" content="Carmel Valley’s top spot for glass bongs, vapes, and kratom. The Smoking Bee in 92130 has it all." />
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
