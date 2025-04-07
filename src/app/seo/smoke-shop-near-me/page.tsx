import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Find a Smoke Shop Near You | The Smoking Bee",
    description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
    keywords: "smoke shop near me, head shop near me, best smoke shop, premium glass, vapes",
    openGraph: {
      title: "Find a Smoke Shop Near You | The Smoking Bee",
      description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-near-me",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Find a Smoke Shop Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find a Smoke Shop Near You | The Smoking Bee",
      description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_near_me_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Find a Smoke Shop Near You | The Smoking Bee</title>
        <meta name="description" content="Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego." />
        <meta name="keywords" content="smoke shop near me, head shop near me, best smoke shop, premium glass, vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Find a Smoke Shop Near You | The Smoking Bee" />
        <meta property="og:description" content="Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-near-me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Find a Smoke Shop Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Wherever you are in San Diego, The Smoking Bee is just around the corner with quality vapes, glass, and more. Our friendly team can guide you through our wide selection of cutting-edge Delta-8 or classic rolling papers. Experience convenience and variety under one roof, no matter your smoking style.
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
