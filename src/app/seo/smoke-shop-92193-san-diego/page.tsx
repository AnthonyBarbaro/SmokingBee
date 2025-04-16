import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92193 | MCAS Miramar Region",
    description: "In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee.",
    keywords: "smoke shop 92193, mcas miramar, delta-8 carts, glass pipes, premium shop",
    openGraph: {
      title: "Smoke Shop 92193 | MCAS Miramar Region",
      description: "In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92193-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92193 | MCAS Miramar Region"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92193 | MCAS Miramar Region",
      description: "In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92193_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92193 | MCAS Miramar Region</title>
        <meta name="description" content="In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92193, mcas miramar, delta-8 carts, glass pipes, premium shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92193 | MCAS Miramar Region" />
        <meta property="og:description" content="In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92193-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92193 | MCAS Miramar Region" />
        <meta name="twitter:description" content="In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our 92193 location features potent Delta-8 carts, quality glass, and everything you need for a superior smoke. Swing by before or after duty to browse new vape gear, or pick up a fresh water pipe for smoother sessions. We’re proud to serve local personnel and enthusiasts with respect and quality.
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
