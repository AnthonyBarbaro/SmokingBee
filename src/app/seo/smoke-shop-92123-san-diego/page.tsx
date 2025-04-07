import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92123 | Serra Mesa’s Best",
    description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
    keywords: "smoke shop 92123, serra mesa, glass pipes, vapes, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92123 | Serra Mesa’s Best",
      description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92123-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92123 | Serra Mesa’s Best"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92123 | Serra Mesa’s Best",
      description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92123_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92123 | Serra Mesa’s Best</title>
        <meta name="description" content="Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more." />
        <meta name="keywords" content="smoke shop 92123, serra mesa, glass pipes, vapes, smoking accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92123 | Serra Mesa’s Best" />
        <meta property="og:description" content="Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92123-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92123 | Serra Mesa’s Best" />
        <meta name="twitter:description" content="Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Stop by in Serra Mesa for all your smoking essentials—glass, vapes, and top-notch accessories are on hand. From unique ashcatchers to flavored rolling papers, The Smoking Bee covers every angle. Our staff can point you to the right Delta-8 edible or the sturdiest water pipe for smooth hits.
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
