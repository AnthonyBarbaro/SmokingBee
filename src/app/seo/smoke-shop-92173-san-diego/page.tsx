import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92173 | San Ysidro Border Area",
    description: "San Ysidro smokers (92173) choose The Smoking Bee for top-tier vape pens, Delta-8, and more.",
    keywords: "smoke shop 92173, san ysidro, best vape pens, delta-8 near border",
    openGraph: {
      title: "Smoke Shop 92173 | San Ysidro Border Area",
      description: "San Ysidro smokers (92173) choose The Smoking Bee for top-tier vape pens, Delta-8, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92173-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92173 | San Ysidro Border Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92173 | San Ysidro Border Area",
      description: "San Ysidro smokers (92173) choose The Smoking Bee for top-tier vape pens, Delta-8, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92173_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92173 | San Ysidro Border Area</title>
        <meta name="description" content="San Ysidro smokers (92173) choose The Smoking Bee for top-tier vape pens, Delta-8, and more." />
        <meta name="keywords" content="smoke shop 92173, san ysidro, best vape pens, delta-8 near border" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92173 | San Ysidro Border Area" />
        <meta property="og:description" content="San Ysidro smokers (92173) choose The Smoking Bee for top-tier vape pens, Delta-8, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92173-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92173 | San Ysidro Border Area" />
        <meta name="twitter:description" content="San Ysidro smokers (92173) choose The Smoking Bee for top-tier vape pens, Delta-8, and more." />
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
