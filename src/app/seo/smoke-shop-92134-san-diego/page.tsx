import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92134 | Near Naval Base",
    description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
    keywords: "smoke shop 92134, naval base, vapes, rolling papers, glass pipes",
    openGraph: {
      title: "Smoke Shop 92134 | Near Naval Base",
      description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92134-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92134 | Near Naval Base"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92134 | Near Naval Base",
      description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92134_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92134 | Near Naval Base</title>
        <meta name="description" content="Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92134, naval base, vapes, rolling papers, glass pipes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92134 | Near Naval Base" />
        <meta property="og:description" content="Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92134-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92134 | Near Naval Base" />
        <meta name="twitter:description" content="Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Near 92134’s naval base? We offer high-quality glass, vapes, and everything you need for a satisfying session. Our store features top-tier rolling papers, Delta-8 gummies, and discreet portable devices. Whether you’re active duty or a local resident, count on The Smoking Bee for top-notch service.
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
