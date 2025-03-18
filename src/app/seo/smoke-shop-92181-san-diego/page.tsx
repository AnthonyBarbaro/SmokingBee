import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92181 | Premium Vapes & Accessories",
    description: "Near 92181? The Smoking Bee offers a huge selection of disposable vapes, glass bongs, and Delta-8 products.",
    keywords: "smoke shop 92181, delta-8 near me, disposable vapes, glass bongs",
    openGraph: {
      title: "Smoke Shop 92181 | Premium Vapes & Accessories",
      description: "Near 92181? The Smoking Bee offers a huge selection of disposable vapes, glass bongs, and Delta-8 products.",
      url: "https://thesmokingbee.com/smoke-shop-92181-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92181 | Premium Vapes & Accessories"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92181 | Premium Vapes & Accessories",
      description: "Near 92181? The Smoking Bee offers a huge selection of disposable vapes, glass bongs, and Delta-8 products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92181_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92181 | Premium Vapes & Accessories</title>
        <meta name="description" content="Near 92181? The Smoking Bee offers a huge selection of disposable vapes, glass bongs, and Delta-8 products." />
        <meta name="keywords" content="smoke shop 92181, delta-8 near me, disposable vapes, glass bongs" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92181 | Premium Vapes & Accessories" />
        <meta property="og:description" content="Near 92181? The Smoking Bee offers a huge selection of disposable vapes, glass bongs, and Delta-8 products." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92181-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92181 | Premium Vapes & Accessories" />
        <meta name="twitter:description" content="Near 92181? The Smoking Bee offers a huge selection of disposable vapes, glass bongs, and Delta-8 products." />
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
