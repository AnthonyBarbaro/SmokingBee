import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Glass Pipes for Sale | The Smoking Bee",
    description: "Find the best glass pipes for smoking at The Smoking Bee. Browse our premium collection of handcrafted pipes and water bongs.",
    keywords: "best glass pipes, buy glass pipes, water bongs, premium glassware, smoke shop near me",
    openGraph: {
      title: "Best Glass Pipes for Sale | The Smoking Bee",
      description: "Find the best glass pipes for smoking at The Smoking Bee. Browse our premium collection of handcrafted pipes and water bongs.",
      url: "https://thesmokingbee.com/best-glass-pipes",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Glass Pipes for Sale | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Glass Pipes for Sale | The Smoking Bee",
      description: "Find the best glass pipes for smoking at The Smoking Bee. Browse our premium collection of handcrafted pipes and water bongs.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_glass_pipes_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Best Glass Pipes for Sale | The Smoking Bee</title>
        <meta name="description" content="Find the best glass pipes for smoking at The Smoking Bee. Browse our premium collection of handcrafted pipes and water bongs." />
        <meta name="keywords" content="best glass pipes, buy glass pipes, water bongs, premium glassware, smoke shop near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Glass Pipes for Sale | The Smoking Bee" />
        <meta property="og:description" content="Find the best glass pipes for smoking at The Smoking Bee. Browse our premium collection of handcrafted pipes and water bongs." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-glass-pipes" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Glass Pipes for Sale | The Smoking Bee" />
        <meta name="twitter:description" content="Find the best glass pipes for smoking at The Smoking Bee. Browse our premium collection of handcrafted pipes and water bongs." />
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
