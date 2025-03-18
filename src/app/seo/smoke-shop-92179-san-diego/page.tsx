import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92179 | Skyline & Jamacha",
    description: "In 92179? The Smoking Bee has rolling papers, premium hookah tobacco, and best kratom deals in Skyline area.",
    keywords: "smoke shop 92179, skyline, hookah tobacco, kratom near me",
    openGraph: {
      title: "Smoke Shop 92179 | Skyline & Jamacha",
      description: "In 92179? The Smoking Bee has rolling papers, premium hookah tobacco, and best kratom deals in Skyline area.",
      url: "https://thesmokingbee.com/smoke-shop-92179-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92179 | Skyline & Jamacha"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92179 | Skyline & Jamacha",
      description: "In 92179? The Smoking Bee has rolling papers, premium hookah tobacco, and best kratom deals in Skyline area.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92179_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92179 | Skyline & Jamacha</title>
        <meta name="description" content="In 92179? The Smoking Bee has rolling papers, premium hookah tobacco, and best kratom deals in Skyline area." />
        <meta name="keywords" content="smoke shop 92179, skyline, hookah tobacco, kratom near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92179 | Skyline & Jamacha" />
        <meta property="og:description" content="In 92179? The Smoking Bee has rolling papers, premium hookah tobacco, and best kratom deals in Skyline area." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92179-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92179 | Skyline & Jamacha" />
        <meta name="twitter:description" content="In 92179? The Smoking Bee has rolling papers, premium hookah tobacco, and best kratom deals in Skyline area." />
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
