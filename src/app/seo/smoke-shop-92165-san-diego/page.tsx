import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92165 | Kensington",
    description: "Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products.",
    keywords: "smoke shop 92165, kensington, bongs, e-liquids, delta-8",
    openGraph: {
      title: "Smoke Shop 92165 | Kensington",
      description: "Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products.",
      url: "https://thesmokingbee.com/smoke-shop-92165-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92165 | Kensington"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92165 | Kensington",
      description: "Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92165_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92165 | Kensington</title>
        <meta name="description" content="Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products." />
        <meta name="keywords" content="smoke shop 92165, kensington, bongs, e-liquids, delta-8" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92165 | Kensington" />
        <meta property="og:description" content="Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92165-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92165 | Kensington" />
        <meta name="twitter:description" content="Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Check out our top-tier bongs, e-liquids, and Delta-8 in the charming Kensington neighborhood. Sample unique flavors, upgrade to a sturdier grinder, or discover new hemp wraps. Our staff is always ready to share product knowledge, making your choices easier and your sessions more enjoyable.
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
