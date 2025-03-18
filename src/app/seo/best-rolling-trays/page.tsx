import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Rolling Trays for Sale | The Smoking Bee",
    description: "Shop the best rolling trays for smoking at The Smoking Bee. Find premium rolling trays, grinders, and accessories.",
    keywords: "best rolling trays, rolling trays for sale, premium smoking accessories, head shop near me",
    openGraph: {
      title: "Best Rolling Trays for Sale | The Smoking Bee",
      description: "Shop the best rolling trays for smoking at The Smoking Bee. Find premium rolling trays, grinders, and accessories.",
      url: "https://thesmokingbee.com/best-rolling-trays",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Rolling Trays for Sale | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Rolling Trays for Sale | The Smoking Bee",
      description: "Shop the best rolling trays for smoking at The Smoking Bee. Find premium rolling trays, grinders, and accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_rolling_trays_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Best Rolling Trays for Sale | The Smoking Bee</title>
        <meta name="description" content="Shop the best rolling trays for smoking at The Smoking Bee. Find premium rolling trays, grinders, and accessories." />
        <meta name="keywords" content="best rolling trays, rolling trays for sale, premium smoking accessories, head shop near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Rolling Trays for Sale | The Smoking Bee" />
        <meta property="og:description" content="Shop the best rolling trays for smoking at The Smoking Bee. Find premium rolling trays, grinders, and accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-rolling-trays" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Rolling Trays for Sale | The Smoking Bee" />
        <meta name="twitter:description" content="Shop the best rolling trays for smoking at The Smoking Bee. Find premium rolling trays, grinders, and accessories." />
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
