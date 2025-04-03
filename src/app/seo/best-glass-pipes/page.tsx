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
    description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
    keywords: "best glass pipes, buy glass pipes, water bongs, premium glassware, smoke shop",
    openGraph: {
      title: "Best Glass Pipes for Sale | The Smoking Bee",
      description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
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
      description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_glass_pipes_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Best Glass Pipes for Sale | The Smoking Bee</title>
        <meta name="description" content="Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware." />
        <meta name="keywords" content="best glass pipes, buy glass pipes, water bongs, premium glassware, smoke shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Glass Pipes for Sale | The Smoking Bee" />
        <meta property="og:description" content="Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-glass-pipes" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Glass Pipes for Sale | The Smoking Bee" />
        <meta name="twitter:description" content="Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Explore our collection of meticulously crafted glass pipes at The Smoking Bee. Whether you prefer simple designs or heady glass art, you’ll find the perfect piece to suit your style. We also carry water bongs, dab rigs, and unique accessories to elevate each session with flawless design and smooth hits.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
