import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Glass Bongs for Sale | The Smoking Bee",
    description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Find the perfect smoking setup for your needs.",
    keywords: "glass bongs for sale, water pipes, dab rigs, best bongs near me, head shop for bongs",
    openGraph: {
      title: "Glass Bongs for Sale | The Smoking Bee",
      description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Find the perfect smoking setup for your needs.",
      url: "https://thesmokingbee.com/glass-bongs-for-sale",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Glass Bongs for Sale | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Glass Bongs for Sale | The Smoking Bee",
      description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Find the perfect smoking setup for your needs.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function glass_bongs_for_sale_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Glass Bongs for Sale | The Smoking Bee</title>
        <meta name="description" content="Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Find the perfect smoking setup for your needs." />
        <meta name="keywords" content="glass bongs for sale, water pipes, dab rigs, best bongs near me, head shop for bongs" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Glass Bongs for Sale | The Smoking Bee" />
        <meta property="og:description" content="Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Find the perfect smoking setup for your needs." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/glass-bongs-for-sale" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Glass Bongs for Sale | The Smoking Bee" />
        <meta name="twitter:description" content="Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Find the perfect smoking setup for your needs." />
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
