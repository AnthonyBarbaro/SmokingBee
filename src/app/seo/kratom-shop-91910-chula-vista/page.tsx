import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Kratom Shop 91910 | Chula Vista’s Premium Kratom",
    description: "Looking for kratom near 91910? The Smoking Bee in Chula Vista carries quality kratom, plus vapes and glass accessories.",
    keywords: "kratom shop 91910, chula vista kratom, best kratom near me, vapes 91910",
    openGraph: {
      title: "Kratom Shop 91910 | Chula Vista’s Premium Kratom",
      description: "Looking for kratom near 91910? The Smoking Bee in Chula Vista carries quality kratom, plus vapes and glass accessories.",
      url: "https://thesmokingbee.com/kratom-shop-91910-chula-vista",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Kratom Shop 91910 | Chula Vista’s Premium Kratom"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Kratom Shop 91910 | Chula Vista’s Premium Kratom",
      description: "Looking for kratom near 91910? The Smoking Bee in Chula Vista carries quality kratom, plus vapes and glass accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function kratom_shop_91910_chula_vista_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Kratom Shop 91910 | Chula Vista’s Premium Kratom</title>
        <meta name="description" content="Looking for kratom near 91910? The Smoking Bee in Chula Vista carries quality kratom, plus vapes and glass accessories." />
        <meta name="keywords" content="kratom shop 91910, chula vista kratom, best kratom near me, vapes 91910" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Kratom Shop 91910 | Chula Vista’s Premium Kratom" />
        <meta property="og:description" content="Looking for kratom near 91910? The Smoking Bee in Chula Vista carries quality kratom, plus vapes and glass accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/kratom-shop-91910-chula-vista" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Kratom Shop 91910 | Chula Vista’s Premium Kratom" />
        <meta name="twitter:description" content="Looking for kratom near 91910? The Smoking Bee in Chula Vista carries quality kratom, plus vapes and glass accessories." />
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
