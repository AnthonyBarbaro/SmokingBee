import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92136 | Barrio Logan",
    description: "Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now.",
    keywords: "smoke shop 92136, barrio logan, hookah, delta-8, vapes",
    openGraph: {
      title: "Smoke Shop 92136 | Barrio Logan",
      description: "Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now.",
      url: "https://thesmokingbee.com/smoke-shop-92136-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92136 | Barrio Logan"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92136 | Barrio Logan",
      description: "Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92136_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92136 | Barrio Logan</title>
        <meta name="description" content="Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now." />
        <meta name="keywords" content="smoke shop 92136, barrio logan, hookah, delta-8, vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92136 | Barrio Logan" />
        <meta property="og:description" content="Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92136-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92136 | Barrio Logan" />
        <meta name="twitter:description" content="Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In the vibrant Barrio Logan, we bring you hookah essentials, Delta-8, and flavorful vape products. Grab a new rolling tray, peruse glass pieces from local blowers, or try our extensive lineup of wraps. We strive to make each visit inspiring, whether you’re new or a longtime friend.
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
