import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "San Diego's Premier Smoke Shop | The Smoking Bee",
    description: "Discover premium smoking accessories, vapes, and glass pipes at The Smoking Bee, San Diego’s top-rated smoke shop.",
    keywords: "smoke shop San Diego, best smoke shop in San Diego, glass pipes San Diego, head shop San Diego, vapes near me",
    openGraph: {
      title: "San Diego's Premier Smoke Shop | The Smoking Bee",
      description: "Discover premium smoking accessories, vapes, and glass pipes at The Smoking Bee, San Diego’s top-rated smoke shop.",
      url: "https://thesmokingbee.com/smoke-shop-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "San Diego's Premier Smoke Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "San Diego's Premier Smoke Shop | The Smoking Bee",
      description: "Discover premium smoking accessories, vapes, and glass pipes at The Smoking Bee, San Diego’s top-rated smoke shop.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>San Diego's Premier Smoke Shop | The Smoking Bee</title>
        <meta name="description" content="Discover premium smoking accessories, vapes, and glass pipes at The Smoking Bee, San Diego’s top-rated smoke shop." />
        <meta name="keywords" content="smoke shop San Diego, best smoke shop in San Diego, glass pipes San Diego, head shop San Diego, vapes near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="San Diego's Premier Smoke Shop | The Smoking Bee" />
        <meta property="og:description" content="Discover premium smoking accessories, vapes, and glass pipes at The Smoking Bee, San Diego’s top-rated smoke shop." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="San Diego's Premier Smoke Shop | The Smoking Bee" />
        <meta name="twitter:description" content="Discover premium smoking accessories, vapes, and glass pipes at The Smoking Bee, San Diego’s top-rated smoke shop." />
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
