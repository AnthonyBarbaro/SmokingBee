import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92136 | Barrio Logan / Naval Station",
    description: "Find top-tier hookah, Delta-8, and vapes in 92136 at The Smoking Bee, serving Barrio Logan and naval communities.",
    keywords: "smoke shop 92136, barrio logan, hookah near me, delta-8 92136",
    openGraph: {
      title: "Smoke Shop 92136 | Barrio Logan / Naval Station",
      description: "Find top-tier hookah, Delta-8, and vapes in 92136 at The Smoking Bee, serving Barrio Logan and naval communities.",
      url: "https://thesmokingbee.com/smoke-shop-92136-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92136 | Barrio Logan / Naval Station"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92136 | Barrio Logan / Naval Station",
      description: "Find top-tier hookah, Delta-8, and vapes in 92136 at The Smoking Bee, serving Barrio Logan and naval communities.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92136_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92136 | Barrio Logan / Naval Station</title>
        <meta name="description" content="Find top-tier hookah, Delta-8, and vapes in 92136 at The Smoking Bee, serving Barrio Logan and naval communities." />
        <meta name="keywords" content="smoke shop 92136, barrio logan, hookah near me, delta-8 92136" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92136 | Barrio Logan / Naval Station" />
        <meta property="og:description" content="Find top-tier hookah, Delta-8, and vapes in 92136 at The Smoking Bee, serving Barrio Logan and naval communities." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92136-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92136 | Barrio Logan / Naval Station" />
        <meta name="twitter:description" content="Find top-tier hookah, Delta-8, and vapes in 92136 at The Smoking Bee, serving Barrio Logan and naval communities." />
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
