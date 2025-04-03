import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Smoke Shop in La Mesa | The Smoking Bee",
    description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
    keywords: "smoke shop la mesa, glass pipes la mesa, delta-8, kratom, best vapes",
    openGraph: {
      title: "Best Smoke Shop in La Mesa | The Smoking Bee",
      description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
      url: "https://thesmokingbee.com/smoke-shop-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Smoke Shop in La Mesa | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Smoke Shop in La Mesa | The Smoking Bee",
      description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Best Smoke Shop in La Mesa | The Smoking Bee</title>
        <meta name="description" content="Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more." />
        <meta name="keywords" content="smoke shop la mesa, glass pipes la mesa, delta-8, kratom, best vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Smoke Shop in La Mesa | The Smoking Bee" />
        <meta property="og:description" content="Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-la-mesa" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Smoke Shop in La Mesa | The Smoking Bee" />
        <meta name="twitter:description" content="Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Located in the heart of La Mesa, The Smoking Bee offers top-tier glass, vapes, and Delta-8. Our friendly staff is ready to help you find the perfect piece, whether you’re seeking local artisan glass or the latest flavored disposables. Conveniently near La Mesa Boulevard, we proudly serve both new and experienced enthusiasts seeking quality smoking accessories.
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
