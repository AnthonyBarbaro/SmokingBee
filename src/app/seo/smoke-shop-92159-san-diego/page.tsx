import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92159 | Allied Gardens",
    description: "Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays.",
    keywords: "smoke shop 92159, allied gardens, vapes, glass bongs, rolling trays",
    openGraph: {
      title: "Smoke Shop 92159 | Allied Gardens",
      description: "Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays.",
      url: "https://thesmokingbee.com/smoke-shop-92159-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92159 | Allied Gardens"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92159 | Allied Gardens",
      description: "Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92159_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92159 | Allied Gardens</title>
        <meta name="description" content="Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays." />
        <meta name="keywords" content="smoke shop 92159, allied gardens, vapes, glass bongs, rolling trays" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92159 | Allied Gardens" />
        <meta property="og:description" content="Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92159-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92159 | Allied Gardens" />
        <meta name="twitter:description" content="Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We supply 92159 with sturdy bongs, flavorful vapes, and the rolling trays you need for a tidy session. Explore top-shelf kratom or look into advanced vape mods for an upgraded experience. With rotating discounts and new shipments, there’s always a reason to check out what’s fresh.
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
