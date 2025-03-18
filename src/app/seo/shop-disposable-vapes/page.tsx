import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Shop Disposable Vapes | The Smoking Bee",
    description: "Find the best disposable vapes at The Smoking Bee. We carry top vape brands with a wide selection of flavors.",
    keywords: "shop disposable vapes, best disposable vapes, buy vapes online, vape shop near me",
    openGraph: {
      title: "Shop Disposable Vapes | The Smoking Bee",
      description: "Find the best disposable vapes at The Smoking Bee. We carry top vape brands with a wide selection of flavors.",
      url: "https://thesmokingbee.com/shop-disposable-vapes",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Shop Disposable Vapes | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Shop Disposable Vapes | The Smoking Bee",
      description: "Find the best disposable vapes at The Smoking Bee. We carry top vape brands with a wide selection of flavors.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function shop_disposable_vapes_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Shop Disposable Vapes | The Smoking Bee</title>
        <meta name="description" content="Find the best disposable vapes at The Smoking Bee. We carry top vape brands with a wide selection of flavors." />
        <meta name="keywords" content="shop disposable vapes, best disposable vapes, buy vapes online, vape shop near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Shop Disposable Vapes | The Smoking Bee" />
        <meta property="og:description" content="Find the best disposable vapes at The Smoking Bee. We carry top vape brands with a wide selection of flavors." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/shop-disposable-vapes" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Shop Disposable Vapes | The Smoking Bee" />
        <meta name="twitter:description" content="Find the best disposable vapes at The Smoking Bee. We carry top vape brands with a wide selection of flavors." />
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
