import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "La Mesa's #1 Head Shop | The Smoking Bee",
    description: "The Smoking Bee is the leading head shop in La Mesa, offering glass bongs, rolling trays, and premium smoking accessories.",
    keywords: "head shop La Mesa, best head shop La Mesa, glass bongs La Mesa, smoking accessories La Mesa, smoke shop near me",
    openGraph: {
      title: "La Mesa's #1 Head Shop | The Smoking Bee",
      description: "The Smoking Bee is the leading head shop in La Mesa, offering glass bongs, rolling trays, and premium smoking accessories.",
      url: "https://thesmokingbee.com/head-shop-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "La Mesa's #1 Head Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "La Mesa's #1 Head Shop | The Smoking Bee",
      description: "The Smoking Bee is the leading head shop in La Mesa, offering glass bongs, rolling trays, and premium smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function head_shop_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>La Mesa's #1 Head Shop | The Smoking Bee</title>
        <meta name="description" content="The Smoking Bee is the leading head shop in La Mesa, offering glass bongs, rolling trays, and premium smoking accessories." />
        <meta name="keywords" content="head shop La Mesa, best head shop La Mesa, glass bongs La Mesa, smoking accessories La Mesa, smoke shop near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="La Mesa's #1 Head Shop | The Smoking Bee" />
        <meta property="og:description" content="The Smoking Bee is the leading head shop in La Mesa, offering glass bongs, rolling trays, and premium smoking accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/head-shop-la-mesa" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="La Mesa's #1 Head Shop | The Smoking Bee" />
        <meta name="twitter:description" content="The Smoking Bee is the leading head shop in La Mesa, offering glass bongs, rolling trays, and premium smoking accessories." />
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
