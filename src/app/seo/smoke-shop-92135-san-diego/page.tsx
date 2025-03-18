import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92135 | Coronado Naval Base Area",
    description: "Serving 92135 near Coronado with premium glass, kratom, and smoking essentials at The Smoking Bee.",
    keywords: "smoke shop 92135, coronado, best glass pipes, kratom near me",
    openGraph: {
      title: "Smoke Shop 92135 | Coronado Naval Base Area",
      description: "Serving 92135 near Coronado with premium glass, kratom, and smoking essentials at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92135-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92135 | Coronado Naval Base Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92135 | Coronado Naval Base Area",
      description: "Serving 92135 near Coronado with premium glass, kratom, and smoking essentials at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92135_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92135 | Coronado Naval Base Area</title>
        <meta name="description" content="Serving 92135 near Coronado with premium glass, kratom, and smoking essentials at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92135, coronado, best glass pipes, kratom near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92135 | Coronado Naval Base Area" />
        <meta property="og:description" content="Serving 92135 near Coronado with premium glass, kratom, and smoking essentials at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92135-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92135 | Coronado Naval Base Area" />
        <meta name="twitter:description" content="Serving 92135 near Coronado with premium glass, kratom, and smoking essentials at The Smoking Bee." />
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
