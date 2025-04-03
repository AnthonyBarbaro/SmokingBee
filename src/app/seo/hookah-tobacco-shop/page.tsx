import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Hookah & Tobacco Shop | The Smoking Bee",
    description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
    keywords: "hookah shop, tobacco store, shisha flavors, hookah accessories, smoke shop",
    openGraph: {
      title: "Best Hookah & Tobacco Shop | The Smoking Bee",
      description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
      url: "https://thesmokingbee.com/hookah-tobacco-shop",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Hookah & Tobacco Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Hookah & Tobacco Shop | The Smoking Bee",
      description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function hookah_tobacco_shop_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Best Hookah & Tobacco Shop | The Smoking Bee</title>
        <meta name="description" content="Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories." />
        <meta name="keywords" content="hookah shop, tobacco store, shisha flavors, hookah accessories, smoke shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Hookah & Tobacco Shop | The Smoking Bee" />
        <meta property="og:description" content="Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/hookah-tobacco-shop" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Hookah & Tobacco Shop | The Smoking Bee" />
        <meta name="twitter:description" content="Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            From smooth shisha flavors to reliable hookah accessories, The Smoking Bee elevates your hookah sessions with premium picks. Discover popular brands, coals, hoses, and creative flavor mixes for an enhanced communal experience. Our knowledgeable team can even suggest the ideal bowl setup for optimal clouds.
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
