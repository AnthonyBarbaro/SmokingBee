import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92126 | Mira Mesa’s Best Selection",
    description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Visit The Smoking Bee today.",
    keywords: "smoke shop 92126, mira mesa, best delta-8, glass pipes near me",
    openGraph: {
      title: "Smoke Shop 92126 | Mira Mesa’s Best Selection",
      description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Visit The Smoking Bee today.",
      url: "https://thesmokingbee.com/smoke-shop-92126-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92126 | Mira Mesa’s Best Selection"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92126 | Mira Mesa’s Best Selection",
      description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Visit The Smoking Bee today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92126_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92126 | Mira Mesa’s Best Selection</title>
        <meta name="description" content="Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Visit The Smoking Bee today." />
        <meta name="keywords" content="smoke shop 92126, mira mesa, best delta-8, glass pipes near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92126 | Mira Mesa’s Best Selection" />
        <meta property="og:description" content="Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Visit The Smoking Bee today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92126-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92126 | Mira Mesa’s Best Selection" />
        <meta name="twitter:description" content="Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Visit The Smoking Bee today." />
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
