import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 91942 | Best in La Mesa",
    description: "Located in 91942? The Smoking Bee is your go-to spot for premium glass, kratom, and smoking essentials in La Mesa.",
    keywords: "smoke shop 91942, la mesa smoke shop, kratom near 91942, best glass pipes",
    openGraph: {
      title: "Smoke Shop 91942 | Best in La Mesa",
      description: "Located in 91942? The Smoking Bee is your go-to spot for premium glass, kratom, and smoking essentials in La Mesa.",
      url: "https://thesmokingbee.com/smoke-shop-91942-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 91942 | Best in La Mesa"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 91942 | Best in La Mesa",
      description: "Located in 91942? The Smoking Bee is your go-to spot for premium glass, kratom, and smoking essentials in La Mesa.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_91942_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 91942 | Best in La Mesa</title>
        <meta name="description" content="Located in 91942? The Smoking Bee is your go-to spot for premium glass, kratom, and smoking essentials in La Mesa." />
        <meta name="keywords" content="smoke shop 91942, la mesa smoke shop, kratom near 91942, best glass pipes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 91942 | Best in La Mesa" />
        <meta property="og:description" content="Located in 91942? The Smoking Bee is your go-to spot for premium glass, kratom, and smoking essentials in La Mesa." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-91942-la-mesa" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 91942 | Best in La Mesa" />
        <meta name="twitter:description" content="Located in 91942? The Smoking Bee is your go-to spot for premium glass, kratom, and smoking essentials in La Mesa." />
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
