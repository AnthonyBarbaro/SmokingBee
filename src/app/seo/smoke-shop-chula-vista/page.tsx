import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Best Smoke Shop in Chula Vista | The Smoking Bee",
    description: "Explore the top smoke shop in Chula Vista! The Smoking Bee has premium glass pipes, vapes, kratom, and rolling accessories.",
    keywords: "smoke shop Chula Vista, best smoke shop Chula Vista, kratom near me, rolling papers Chula Vista, vapes Chula Vista",
    openGraph: {
      title: "Best Smoke Shop in Chula Vista | The Smoking Bee",
      description: "Explore the top smoke shop in Chula Vista! The Smoking Bee has premium glass pipes, vapes, kratom, and rolling accessories.",
      url: "https://thesmokingbee.com/smoke-shop-chula-vista",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Smoke Shop in Chula Vista | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Smoke Shop in Chula Vista | The Smoking Bee",
      description: "Explore the top smoke shop in Chula Vista! The Smoking Bee has premium glass pipes, vapes, kratom, and rolling accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_chula_vista_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Best Smoke Shop in Chula Vista | The Smoking Bee</title>
        <meta name="description" content="Explore the top smoke shop in Chula Vista! The Smoking Bee has premium glass pipes, vapes, kratom, and rolling accessories." />
        <meta name="keywords" content="smoke shop Chula Vista, best smoke shop Chula Vista, kratom near me, rolling papers Chula Vista, vapes Chula Vista" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Best Smoke Shop in Chula Vista | The Smoking Bee" />
        <meta property="og:description" content="Explore the top smoke shop in Chula Vista! The Smoking Bee has premium glass pipes, vapes, kratom, and rolling accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-chula-vista" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Best Smoke Shop in Chula Vista | The Smoking Bee" />
        <meta name="twitter:description" content="Explore the top smoke shop in Chula Vista! The Smoking Bee has premium glass pipes, vapes, kratom, and rolling accessories." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={categories} />
      <GeoMap />

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
