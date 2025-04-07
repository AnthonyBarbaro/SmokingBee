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
    description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
    keywords: "shop disposable vapes, best disposable vapes, vape shop, vapes near me",
    openGraph: {
      title: "Shop Disposable Vapes | The Smoking Bee",
      description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
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
      description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function shop_disposable_vapes_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Shop Disposable Vapes | The Smoking Bee</title>
        <meta name="description" content="Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience." />
        <meta name="keywords" content="shop disposable vapes, best disposable vapes, vape shop, vapes near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Shop Disposable Vapes | The Smoking Bee" />
        <meta property="og:description" content="Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/shop-disposable-vapes" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Shop Disposable Vapes | The Smoking Bee" />
        <meta name="twitter:description" content="Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Whether you want fruity or classic flavors, our disposable vapes offer simplicity on the go—no maintenance needed. Browse respected brands that prioritize smooth hits and consistent quality. Perfect for travelers or busy schedules, these disposables combine convenience with delicious vapor.
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
