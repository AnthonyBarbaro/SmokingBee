import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92101 | Downtown San Diego",
    description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
    keywords: "smoke shop 92101, downtown san diego, delta-8, rolling papers",
    openGraph: {
      title: "Smoke Shop 92101 | Downtown San Diego",
      description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
      url: "https://thesmokingbee.com/smoke-shop-92101-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92101 | Downtown San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92101 | Downtown San Diego",
      description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92101_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92101 | Downtown San Diego</title>
        <meta name="description" content="Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits." />
        <meta name="keywords" content="smoke shop 92101, downtown san diego, delta-8, rolling papers" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92101 | Downtown San Diego" />
        <meta property="og:description" content="Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92101-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92101 | Downtown San Diego" />
        <meta name="twitter:description" content="Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Conveniently near downtown, our 92101 location stocks Delta-8, rolling papers, and everything else for a premium session. Explore local glass artistry, specialty blunt wraps, and advanced vape gear all under one roof. Perfect for city dwellers and visitors alike craving top-tier smoking products.
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
