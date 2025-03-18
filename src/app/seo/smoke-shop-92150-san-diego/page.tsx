import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92150 | Rancho Santa Fe Area",
    description: "Smokers near Rancho Santa Fe (92150) love The Smoking Bee’s premium accessories and Delta-8 products.",
    keywords: "smoke shop 92150, rancho santa fe, premium delta-8, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92150 | Rancho Santa Fe Area",
      description: "Smokers near Rancho Santa Fe (92150) love The Smoking Bee’s premium accessories and Delta-8 products.",
      url: "https://thesmokingbee.com/smoke-shop-92150-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92150 | Rancho Santa Fe Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92150 | Rancho Santa Fe Area",
      description: "Smokers near Rancho Santa Fe (92150) love The Smoking Bee’s premium accessories and Delta-8 products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92150_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92150 | Rancho Santa Fe Area</title>
        <meta name="description" content="Smokers near Rancho Santa Fe (92150) love The Smoking Bee’s premium accessories and Delta-8 products." />
        <meta name="keywords" content="smoke shop 92150, rancho santa fe, premium delta-8, smoking accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92150 | Rancho Santa Fe Area" />
        <meta property="og:description" content="Smokers near Rancho Santa Fe (92150) love The Smoking Bee’s premium accessories and Delta-8 products." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92150-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92150 | Rancho Santa Fe Area" />
        <meta name="twitter:description" content="Smokers near Rancho Santa Fe (92150) love The Smoking Bee’s premium accessories and Delta-8 products." />
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
