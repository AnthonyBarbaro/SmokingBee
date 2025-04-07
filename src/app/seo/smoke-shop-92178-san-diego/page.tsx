import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92178 | Coronado Island",
    description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
    keywords: "smoke shop 92178, coronado island, vape juices, glass bongs, smoking shop",
    openGraph: {
      title: "Smoke Shop 92178 | Coronado Island",
      description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92178-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92178 | Coronado Island"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92178 | Coronado Island",
      description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92178_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92178 | Coronado Island</title>
        <meta name="description" content="Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more." />
        <meta name="keywords" content="smoke shop 92178, coronado island, vape juices, glass bongs, smoking shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92178 | Coronado Island" />
        <meta property="og:description" content="Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92178-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92178 | Coronado Island" />
        <meta name="twitter:description" content="Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92178, find everything from smooth vape juices to stylish glass bongs for a premium smoking experience. Unwind with our curated selection of rolling papers, natural wraps, or check out delta-8 edibles for a new spin on relaxation. We make it easy to discover your ideal setup.
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
