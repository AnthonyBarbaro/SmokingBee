import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92142 | Residential SD Area",
    description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
    keywords: "smoke shop 92142, glass pipes, rolling papers, vapes, san diego",
    openGraph: {
      title: "Smoke Shop 92142 | Residential SD Area",
      description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-92142-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92142 | Residential SD Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92142 | Residential SD Area",
      description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92142_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92142 | Residential SD Area</title>
        <meta name="description" content="Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego." />
        <meta name="keywords" content="smoke shop 92142, glass pipes, rolling papers, vapes, san diego" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92142 | Residential SD Area" />
        <meta property="og:description" content="Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92142-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92142 | Residential SD Area" />
        <meta name="twitter:description" content="Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            For the 92142 community, we provide carefully curated smoking essentials, from papers to vapes. Whether you want a sleek new device or a sturdy pipe for home use, we have options. Chat with us about delta-8, new e-liquids, or advanced accessories to personalize your setup.
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
