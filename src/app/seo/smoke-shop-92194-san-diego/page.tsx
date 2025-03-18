import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92194 | East Mira Mesa",
    description: "East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee.",
    keywords: "smoke shop 92194, east mira mesa, disposable vapes, kratom near me",
    openGraph: {
      title: "Smoke Shop 92194 | East Mira Mesa",
      description: "East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92194-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92194 | East Mira Mesa"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92194 | East Mira Mesa",
      description: "East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92194_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92194 | East Mira Mesa</title>
        <meta name="description" content="East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92194, east mira mesa, disposable vapes, kratom near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92194 | East Mira Mesa" />
        <meta property="og:description" content="East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92194-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92194 | East Mira Mesa" />
        <meta name="twitter:description" content="East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee." />
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
