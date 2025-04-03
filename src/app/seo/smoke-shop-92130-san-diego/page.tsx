import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92130 | Carmel Valley",
    description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today.",
    keywords: "smoke shop 92130, carmel valley, glass bongs, kratom, vapes",
    openGraph: {
      title: "Smoke Shop 92130 | Carmel Valley",
      description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today.",
      url: "https://thesmokingbee.com/smoke-shop-92130-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92130 | Carmel Valley"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92130 | Carmel Valley",
      description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92130_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92130 | Carmel Valley</title>
        <meta name="description" content="Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today." />
        <meta name="keywords" content="smoke shop 92130, carmel valley, glass bongs, kratom, vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92130 | Carmel Valley" />
        <meta property="og:description" content="Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92130-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92130 | Carmel Valley" />
        <meta name="twitter:description" content="Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92130, discover our range of quality kratom, sleek glass bongs, and the latest vape products. Whether you’re just off the 56 freeway or exploring local restaurants, we’re easy to find and ready to serve. Let us introduce you to new flavors or the best Delta-8 deals.
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
