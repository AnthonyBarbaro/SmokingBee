import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92127 | Rancho Bernardo",
    description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
    keywords: "smoke shop 92127, rancho bernardo, vapes, smoking accessories, delta-8",
    openGraph: {
      title: "Smoke Shop 92127 | Rancho Bernardo",
      description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
      url: "https://thesmokingbee.com/smoke-shop-92127-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92127 | Rancho Bernardo"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92127 | Rancho Bernardo",
      description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92127_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92127 | Rancho Bernardo</title>
        <meta name="description" content="Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today." />
        <meta name="keywords" content="smoke shop 92127, rancho bernardo, vapes, smoking accessories, delta-8" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92127 | Rancho Bernardo" />
        <meta property="og:description" content="Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92127-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92127 | Rancho Bernardo" />
        <meta name="twitter:description" content="Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            At our 92127 location, find high-quality vapes, Delta-8, and more to enhance your smoking routine. Whether you want a sleek new battery mod or strong pre-roll cones, we’ve got you covered. Stop by after enjoying the local hiking trails for a refreshing pick-me-up or new gear.
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
