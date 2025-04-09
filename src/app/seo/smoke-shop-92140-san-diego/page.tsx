import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92140 | MCRD Area",
    description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
    keywords: "smoke shop 92140, MCRD, vape products, glass pipes, rolling trays",
    openGraph: {
      title: "Smoke Shop 92140 | MCRD Area",
      description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92140-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92140 | MCRD Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92140 | MCRD Area",
      description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92140_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92140 | MCRD Area</title>
        <meta name="description" content="Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92140, MCRD, vape products, glass pipes, rolling trays" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92140 | MCRD Area" />
        <meta property="og:description" content="Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92140-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92140 | MCRD Area" />
        <meta name="twitter:description" content="Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Close to MCRD, our selection features quality vape gear and an array of glassware for every taste. Stock up on rolling trays, unique wraps, or local glass art. Whether you’re stationed nearby or just passing through, we strive to make every visit welcoming and informative.
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
