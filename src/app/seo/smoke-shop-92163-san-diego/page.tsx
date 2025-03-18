import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92163 | University Heights / Hillcrest",
    description: "Serving 92163 with the best rolling papers, Delta-8, and vape gear in Hillcrest/University Heights.",
    keywords: "smoke shop 92163, hillcrest, delta-8 92163, rolling papers near me",
    openGraph: {
      title: "Smoke Shop 92163 | University Heights / Hillcrest",
      description: "Serving 92163 with the best rolling papers, Delta-8, and vape gear in Hillcrest/University Heights.",
      url: "https://thesmokingbee.com/smoke-shop-92163-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92163 | University Heights / Hillcrest"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92163 | University Heights / Hillcrest",
      description: "Serving 92163 with the best rolling papers, Delta-8, and vape gear in Hillcrest/University Heights.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92163_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92163 | University Heights / Hillcrest</title>
        <meta name="description" content="Serving 92163 with the best rolling papers, Delta-8, and vape gear in Hillcrest/University Heights." />
        <meta name="keywords" content="smoke shop 92163, hillcrest, delta-8 92163, rolling papers near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92163 | University Heights / Hillcrest" />
        <meta property="og:description" content="Serving 92163 with the best rolling papers, Delta-8, and vape gear in Hillcrest/University Heights." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92163-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92163 | University Heights / Hillcrest" />
        <meta name="twitter:description" content="Serving 92163 with the best rolling papers, Delta-8, and vape gear in Hillcrest/University Heights." />
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
