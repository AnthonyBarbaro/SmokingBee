import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Best Rolling Trays for Sale | The Smoking Bee",
    description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
    keywords: "best rolling trays, rolling trays for sale, premium smoking accessories, head shop",
    openGraph: {
      title: "Best Rolling Trays for Sale | The Smoking Bee",
      description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
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
      description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_rolling_trays_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Best Rolling Trays for Sale | The Smoking Bee</title>
        <meta name="description" content="Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories." />
        <meta name="keywords" content="best rolling trays, rolling trays for sale, premium smoking accessories, head shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Rolling Trays for Sale | The Smoking Bee" />
        <meta property="og:description" content="Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-rolling-trays" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Rolling Trays for Sale | The Smoking Bee" />
        <meta name="twitter:description" content="Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Check out our stylish, functional rolling trays for a cleaner, smoother experience every time. From minimalist metal trays to vibrant art prints, The Smoking Bee has designs to match any preference. Keep your herb organized and your surfaces tidy with the best trays on the market.
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
