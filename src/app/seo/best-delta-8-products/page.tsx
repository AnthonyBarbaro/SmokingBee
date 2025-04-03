import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Delta-8 Products | The Smoking Bee",
    description: "Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8.",
    keywords: "best delta-8 products, delta-8 edibles, delta-8 vapes, delta-8 near me",
    openGraph: {
      title: "Best Delta-8 Products | The Smoking Bee",
      description: "Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8.",
      url: "https://thesmokingbee.com/best-delta-8-products",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Delta-8 Products | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Delta-8 Products | The Smoking Bee",
      description: "Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function best_delta_8_products_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Best Delta-8 Products | The Smoking Bee</title>
        <meta name="description" content="Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8." />
        <meta name="keywords" content="best delta-8 products, delta-8 edibles, delta-8 vapes, delta-8 near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Delta-8 Products | The Smoking Bee" />
        <meta property="og:description" content="Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/best-delta-8-products" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Delta-8 Products | The Smoking Bee" />
        <meta name="twitter:description" content="Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our Delta-8 lineup includes edibles, cartridges, and more. Count on The Smoking Bee for potency and purity, sourced from reputable brands to ensure consistent results. Whether you’re curious about new gummies or prefer convenient vape pens, our staff can guide you to the perfect Delta-8 experience.
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
