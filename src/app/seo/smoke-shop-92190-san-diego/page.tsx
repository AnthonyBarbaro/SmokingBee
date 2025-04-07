import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92190 | Central Coast SD",
    description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
    keywords: "smoke shop 92190, central coast, delta-8 edibles, vape devices, smoking shop",
    openGraph: {
      title: "Smoke Shop 92190 | Central Coast SD",
      description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
      url: "https://thesmokingbee.com/smoke-shop-92190-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92190 | Central Coast SD"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92190 | Central Coast SD",
      description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92190_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92190 | Central Coast SD</title>
        <meta name="description" content="Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking." />
        <meta name="keywords" content="smoke shop 92190, central coast, delta-8 edibles, vape devices, smoking shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92190 | Central Coast SD" />
        <meta property="og:description" content="Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92190-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92190 | Central Coast SD" />
        <meta name="twitter:description" content="Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We bring the central coast high-quality vape gear, potent Delta-8 edibles, and a variety of smoking accessories. Whether you need quick disposable pods or a showpiece glass bong, we’ve got you covered. Explore new brand drops or consult with us on building your ideal smoking toolkit.
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
