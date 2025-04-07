import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92187 | Southeastern San Diego",
    description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
    keywords: "smoke shop 92187, disposable vapes, delta-8, glass pieces, smoking shop",
    openGraph: {
      title: "Smoke Shop 92187 | Southeastern San Diego",
      description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
      url: "https://thesmokingbee.com/smoke-shop-92187-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92187 | Southeastern San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92187 | Southeastern San Diego",
      description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92187_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92187 | Southeastern San Diego</title>
        <meta name="description" content="In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers." />
        <meta name="keywords" content="smoke shop 92187, disposable vapes, delta-8, glass pieces, smoking shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92187 | Southeastern San Diego" />
        <meta property="og:description" content="In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92187-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92187 | Southeastern San Diego" />
        <meta name="twitter:description" content="In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our Southeastern San Diego shop offers a wide selection of Delta-8, disposables, and glass to suit every taste. Searching for unique water pipe designs or simple, travel-friendly solutions? We keep our inventory fresh so you can explore something different every time you stop by.
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
