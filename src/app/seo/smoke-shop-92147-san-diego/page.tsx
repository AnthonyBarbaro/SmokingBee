import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92147 | Point Loma Naval",
    description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
    keywords: "smoke shop 92147, point loma, delta-8, rolling trays, smoking gear",
    openGraph: {
      title: "Smoke Shop 92147 | Point Loma Naval",
      description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92147-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92147 | Point Loma Naval"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92147 | Point Loma Naval",
      description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92147_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92147 | Point Loma Naval</title>
        <meta name="description" content="Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more." />
        <meta name="keywords" content="smoke shop 92147, point loma, delta-8, rolling trays, smoking gear" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92147 | Point Loma Naval" />
        <meta property="og:description" content="Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92147-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92147 | Point Loma Naval" />
        <meta name="twitter:description" content="Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92147, elevate your smoking setup with our delta-8 products, trays, and carefully selected accessories. We pride ourselves on friendly advice and a laid-back atmosphere, perfect for exploring new hardware or restocking daily essentials. Whether you’re local or just passing through, you’ll find plenty to love.
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
