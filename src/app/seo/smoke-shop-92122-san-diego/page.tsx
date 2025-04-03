import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92122 | Near UTC",
    description: "In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee.",
    keywords: "smoke shop 92122, utc area, rolling papers, kratom, glass bongs",
    openGraph: {
      title: "Smoke Shop 92122 | Near UTC",
      description: "In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92122-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92122 | Near UTC"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92122 | Near UTC",
      description: "In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92122_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92122 | Near UTC</title>
        <meta name="description" content="In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92122, utc area, rolling papers, kratom, glass bongs" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92122 | Near UTC" />
        <meta property="og:description" content="In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92122-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92122 | Near UTC" />
        <meta name="twitter:description" content="In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Close to UTC, The Smoking Bee offers a curated selection of bongs, kratom, and more for 92122 residents. Browse flavored wraps or pick up a discreet vape device for on-the-go convenience. Our knowledgeable team is happy to recommend the ideal product for your personal preferences.
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
