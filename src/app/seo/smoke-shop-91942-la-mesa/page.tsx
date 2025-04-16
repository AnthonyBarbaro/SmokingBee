import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 91942 | Top La Mesa Essentials",
    description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
    keywords: "smoke shop 91942, la mesa smoke shop, kratom near 91942, glass pipes",
    openGraph: {
      title: "Smoke Shop 91942 | Top La Mesa Essentials",
      description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
      url: "https://thesmokingbee.com/smoke-shop-91942-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 91942 | Top La Mesa Essentials"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 91942 | Top La Mesa Essentials",
      description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_91942_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 91942 | Top La Mesa Essentials</title>
        <meta name="description" content="In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa." />
        <meta name="keywords" content="smoke shop 91942, la mesa smoke shop, kratom near 91942, glass pipes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 91942 | Top La Mesa Essentials" />
        <meta property="og:description" content="In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-91942-la-mesa" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 91942 | Top La Mesa Essentials" />
        <meta name="twitter:description" content="In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Located near 91942 La Mesa, we pride ourselves on offering top-grade kratom and glassware to meet your smoking needs. Our curated selection includes unique rolling papers and the latest disposable vape flavors. Drop by for friendly advice or to check out new arrivals in store.
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
