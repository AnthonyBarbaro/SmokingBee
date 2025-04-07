import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92170 | Naval Base SD",
    description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
    keywords: "smoke shop 92170, naval base, bongs, vapes, delta-8",
    openGraph: {
      title: "Smoke Shop 92170 | Naval Base SD",
      description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
      url: "https://thesmokingbee.com/smoke-shop-92170-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92170 | Naval Base SD"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92170 | Naval Base SD",
      description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92170_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92170 | Naval Base SD</title>
        <meta name="description" content="Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today." />
        <meta name="keywords" content="smoke shop 92170, naval base, bongs, vapes, delta-8" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92170 | Naval Base SD" />
        <meta property="og:description" content="Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92170-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92170 | Naval Base SD" />
        <meta name="twitter:description" content="Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Located near Naval Base SD, we provide a range of bongs, Delta-8, and vape products for convenient shopping. Pick out a unique glass piece or stock up on rolling supplies for your off-duty hours. We pride ourselves on being welcoming to both new smokers and seasoned aficionados.
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
