import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92149 | Paradise Valley",
    description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
    keywords: "smoke shop 92149, paradise valley, kratom, glass pipes, vape supplies",
    openGraph: {
      title: "Smoke Shop 92149 | Paradise Valley",
      description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
      url: "https://thesmokingbee.com/smoke-shop-92149-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92149 | Paradise Valley"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92149 | Paradise Valley",
      description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92149_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92149 | Paradise Valley</title>
        <meta name="description" content="In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers." />
        <meta name="keywords" content="smoke shop 92149, paradise valley, kratom, glass pipes, vape supplies" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92149 | Paradise Valley" />
        <meta property="og:description" content="In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92149-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92149 | Paradise Valley" />
        <meta name="twitter:description" content="In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We serve Paradise Valley with a robust selection of kratom, glass, and vape essentials you can trust. Stop by for a quick pick-me-up or to explore more sophisticated rigs. Our rotating inventory means there’s always something new, whether you want a classic favorite or a bold new flavor.
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
