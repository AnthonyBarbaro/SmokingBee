import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92138 | Old Town San Diego",
    description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
    keywords: "smoke shop 92138, old town san diego, vapes, glass pipes, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92138 | Old Town San Diego",
      description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92138-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92138 | Old Town San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92138 | Old Town San Diego",
      description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92138_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92138 | Old Town San Diego</title>
        <meta name="description" content="Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more." />
        <meta name="keywords" content="smoke shop 92138, old town san diego, vapes, glass pipes, smoking accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92138 | Old Town San Diego" />
        <meta property="og:description" content="Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92138-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92138 | Old Town San Diego" />
        <meta name="twitter:description" content="Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Right by Old Town, discover our curated selection of vapes, pipes, and must-have accessories. We carry specialized papers, natural wraps, and local glass creations. After exploring historic Old Town, come in to find new ways to enhance your smoke, from advanced hardware to classic favorites.
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
