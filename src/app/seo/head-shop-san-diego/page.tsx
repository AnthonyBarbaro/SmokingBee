import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "San Diego's Best Head Shop | The Smoking Bee",
    description: "Looking for a head shop in San Diego? The Smoking Bee has the best selection of glass bongs, grinders, rolling trays, and smoking accessories.",
    keywords: "head shop San Diego, best head shop, smoking accessories, premium bongs, smoke shop near me",
    openGraph: {
      title: "San Diego's Best Head Shop | The Smoking Bee",
      description: "Looking for a head shop in San Diego? The Smoking Bee has the best selection of glass bongs, grinders, rolling trays, and smoking accessories.",
      url: "https://thesmokingbee.com/head-shop-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "San Diego's Best Head Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "San Diego's Best Head Shop | The Smoking Bee",
      description: "Looking for a head shop in San Diego? The Smoking Bee has the best selection of glass bongs, grinders, rolling trays, and smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function head_shop_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>San Diego's Best Head Shop | The Smoking Bee</title>
        <meta name="description" content="Looking for a head shop in San Diego? The Smoking Bee has the best selection of glass bongs, grinders, rolling trays, and smoking accessories." />
        <meta name="keywords" content="head shop San Diego, best head shop, smoking accessories, premium bongs, smoke shop near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="San Diego's Best Head Shop | The Smoking Bee" />
        <meta property="og:description" content="Looking for a head shop in San Diego? The Smoking Bee has the best selection of glass bongs, grinders, rolling trays, and smoking accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/head-shop-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="San Diego's Best Head Shop | The Smoking Bee" />
        <meta name="twitter:description" content="Looking for a head shop in San Diego? The Smoking Bee has the best selection of glass bongs, grinders, rolling trays, and smoking accessories." />
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
