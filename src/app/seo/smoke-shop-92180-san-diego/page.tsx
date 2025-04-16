import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92180 | Kearny Mesa",
    description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
    keywords: "smoke shop 92180, kearny mesa, e-liquids, rolling trays, glass accessories",
    openGraph: {
      title: "Smoke Shop 92180 | Kearny Mesa",
      description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
      url: "https://thesmokingbee.com/smoke-shop-92180-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92180 | Kearny Mesa"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92180 | Kearny Mesa",
      description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92180_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92180 | Kearny Mesa</title>
        <meta name="description" content="Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa." />
        <meta name="keywords" content="smoke shop 92180, kearny mesa, e-liquids, rolling trays, glass accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92180 | Kearny Mesa" />
        <meta property="og:description" content="Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92180-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92180 | Kearny Mesa" />
        <meta name="twitter:description" content="Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In Kearny Mesa, we specialize in e-liquids, quality trays, and sturdy glass pieces for an upgraded session. Explore advanced vape mods or pick up a fresh coil to keep clouds thick and flavors rich. Our rotating selection of delta-8 edibles ensures there’s always a novel way to relax.
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
