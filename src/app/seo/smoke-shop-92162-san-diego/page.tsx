import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92162 | Normal Heights",
    description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
    keywords: "smoke shop 92162, normal heights, glass bongs, kratom, vapes",
    openGraph: {
      title: "Smoke Shop 92162 | Normal Heights",
      description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
      url: "https://thesmokingbee.com/smoke-shop-92162-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92162 | Normal Heights"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92162 | Normal Heights",
      description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92162_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92162 | Normal Heights</title>
        <meta name="description" content="In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights." />
        <meta name="keywords" content="smoke shop 92162, normal heights, glass bongs, kratom, vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92162 | Normal Heights" />
        <meta property="og:description" content="In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92162-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92162 | Normal Heights" />
        <meta name="twitter:description" content="In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Close to Normal Heights, we provide an assortment of kratom strains, bongs, and vapes for every preference. Stop by for quick rolling papers or take time to explore our advanced accessories and local glass. Our staff loves sharing new product arrivals and tips for getting the most out of each session.
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
