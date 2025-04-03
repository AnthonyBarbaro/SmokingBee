import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92185 | Naval Medical Center",
    description: "Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee.",
    keywords: "smoke shop 92185, naval medical center, bongs, e-juices, delta-8",
    openGraph: {
      title: "Smoke Shop 92185 | Naval Medical Center",
      description: "Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92185-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92185 | Naval Medical Center"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92185 | Naval Medical Center",
      description: "Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92185_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92185 | Naval Medical Center</title>
        <meta name="description" content="Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92185, naval medical center, bongs, e-juices, delta-8" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92185 | Naval Medical Center" />
        <meta property="og:description" content="Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92185-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92185 | Naval Medical Center" />
        <meta name="twitter:description" content="Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Close to Naval Medical Center, we stock bongs, flavorful e-juices, and a variety of Delta-8 products. From strong kratom capsules to pastel rolling trays, we strive to cover all your smoking or vaping needs. Our mission is to offer convenient, high-quality solutions to those balancing busy medical schedules.
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
