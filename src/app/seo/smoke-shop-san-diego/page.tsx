import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
    description: "The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today.",
    keywords: "smoke shop san diego, best smoke shop, glass pipes, delta-8, smoking accessories",
    openGraph: {
      title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
      description: "The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today.",
      url: "https://thesmokingbee.com/smoke-shop-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "San Diego’s Premier Smoke Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
      description: "The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>San Diego’s Premier Smoke Shop | The Smoking Bee</title>
        <meta name="description" content="The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today." />
        <meta name="keywords" content="smoke shop san diego, best smoke shop, glass pipes, delta-8, smoking accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="San Diego’s Premier Smoke Shop | The Smoking Bee" />
        <meta property="og:description" content="The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="San Diego’s Premier Smoke Shop | The Smoking Bee" />
        <meta name="twitter:description" content="The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In vibrant San Diego, The Smoking Bee curates a wide range of glass pipes, potent Delta-8, and premium vape brands. Stop by to explore local glass blowers’ art or discover new rolling options. Located within easy reach of downtown, we’re dedicated to elevating each customer’s smoking experience with quality and expertise.
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
