import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92164 | Mission Valley Area",
    description: "Mission Valley’s top choice for glass pipes, premium vapes, and hookah supplies. Visit The Smoking Bee at 92164.",
    keywords: "smoke shop 92164, mission valley, glass pipes, hookah near me",
    openGraph: {
      title: "Smoke Shop 92164 | Mission Valley Area",
      description: "Mission Valley’s top choice for glass pipes, premium vapes, and hookah supplies. Visit The Smoking Bee at 92164.",
      url: "https://thesmokingbee.com/smoke-shop-92164-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92164 | Mission Valley Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92164 | Mission Valley Area",
      description: "Mission Valley’s top choice for glass pipes, premium vapes, and hookah supplies. Visit The Smoking Bee at 92164.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92164_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92164 | Mission Valley Area</title>
        <meta name="description" content="Mission Valley’s top choice for glass pipes, premium vapes, and hookah supplies. Visit The Smoking Bee at 92164." />
        <meta name="keywords" content="smoke shop 92164, mission valley, glass pipes, hookah near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92164 | Mission Valley Area" />
        <meta property="og:description" content="Mission Valley’s top choice for glass pipes, premium vapes, and hookah supplies. Visit The Smoking Bee at 92164." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92164-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92164 | Mission Valley Area" />
        <meta name="twitter:description" content="Mission Valley’s top choice for glass pipes, premium vapes, and hookah supplies. Visit The Smoking Bee at 92164." />
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
