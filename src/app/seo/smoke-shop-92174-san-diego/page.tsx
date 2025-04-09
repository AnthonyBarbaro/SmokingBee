import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92174 | Southeastern SD",
    description: "Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee.",
    keywords: "smoke shop 92174, southeastern san diego, disposable vapes, glass bongs",
    openGraph: {
      title: "Smoke Shop 92174 | Southeastern SD",
      description: "Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92174-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92174 | Southeastern SD"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92174 | Southeastern SD",
      description: "Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92174_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92174 | Southeastern SD</title>
        <meta name="description" content="Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92174, southeastern san diego, disposable vapes, glass bongs" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92174 | Southeastern SD" />
        <meta property="og:description" content="Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92174-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92174 | Southeastern SD" />
        <meta name="twitter:description" content="Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            From glass bongs to on-the-go disposables, we bring Southeastern SD a well-rounded selection of products. Curious about delta-8 or unique rolling tray art? Let our staff help you pick out the best items for your lifestyle. We focus on quality brands to ensure you never leave disappointed.
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
