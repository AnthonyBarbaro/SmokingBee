import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "La Mesa’s #1 Head Shop | The Smoking Bee",
    description: "Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop.",
    keywords: "head shop la mesa, glass bongs, rolling trays, smoking accessories, smoke shop",
    openGraph: {
      title: "La Mesa’s #1 Head Shop | The Smoking Bee",
      description: "Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop.",
      url: "https://thesmokingbee.com/head-shop-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "La Mesa’s #1 Head Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "La Mesa’s #1 Head Shop | The Smoking Bee",
      description: "Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function head_shop_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>La Mesa’s #1 Head Shop | The Smoking Bee</title>
        <meta name="description" content="Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop." />
        <meta name="keywords" content="head shop la mesa, glass bongs, rolling trays, smoking accessories, smoke shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="La Mesa’s #1 Head Shop | The Smoking Bee" />
        <meta property="og:description" content="Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/head-shop-la-mesa" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="La Mesa’s #1 Head Shop | The Smoking Bee" />
        <meta name="twitter:description" content="Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Visit our La Mesa location for quality bongs, trays, and more. The Smoking Bee is dedicated to elevating your smoking game with handcrafted glass, modern vape hardware, and premium rolling papers. Located just off major bus routes, we’re an easy stop for local smokers seeking specialty items.
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
