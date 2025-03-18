import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92155 | North Island Naval Air Station",
    description: "Near 92155? The Smoking Bee supplies top-level vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
    keywords: "smoke shop 92155, north island, delta-8 near me, vapes 92155",
    openGraph: {
      title: "Smoke Shop 92155 | North Island Naval Air Station",
      description: "Near 92155? The Smoking Bee supplies top-level vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
      url: "https://thesmokingbee.com/smoke-shop-92155-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92155 | North Island Naval Air Station"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92155 | North Island Naval Air Station",
      description: "Near 92155? The Smoking Bee supplies top-level vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92155_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92155 | North Island Naval Air Station</title>
        <meta name="description" content="Near 92155? The Smoking Bee supplies top-level vapes, Delta-8, and smoking accessories for Naval Air Station communities." />
        <meta name="keywords" content="smoke shop 92155, north island, delta-8 near me, vapes 92155" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92155 | North Island Naval Air Station" />
        <meta property="og:description" content="Near 92155? The Smoking Bee supplies top-level vapes, Delta-8, and smoking accessories for Naval Air Station communities." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92155-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92155 | North Island Naval Air Station" />
        <meta name="twitter:description" content="Near 92155? The Smoking Bee supplies top-level vapes, Delta-8, and smoking accessories for Naval Air Station communities." />
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
