import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Premium Smoking Accessories | The Smoking Bee",
    description: "Find the best smoking accessories, grinders, rolling trays, and glassware at The Smoking Bee. Shop premium quality accessories today.",
    keywords: "smoking accessories, best rolling trays, grinders, bongs, premium smoke shop products",
    openGraph: {
      title: "Premium Smoking Accessories | The Smoking Bee",
      description: "Find the best smoking accessories, grinders, rolling trays, and glassware at The Smoking Bee. Shop premium quality accessories today.",
      url: "https://thesmokingbee.com/premium-smoking-accessories",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Premium Smoking Accessories | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Premium Smoking Accessories | The Smoking Bee",
      description: "Find the best smoking accessories, grinders, rolling trays, and glassware at The Smoking Bee. Shop premium quality accessories today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function premium_smoking_accessories_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Premium Smoking Accessories | The Smoking Bee</title>
        <meta name="description" content="Find the best smoking accessories, grinders, rolling trays, and glassware at The Smoking Bee. Shop premium quality accessories today." />
        <meta name="keywords" content="smoking accessories, best rolling trays, grinders, bongs, premium smoke shop products" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Premium Smoking Accessories | The Smoking Bee" />
        <meta property="og:description" content="Find the best smoking accessories, grinders, rolling trays, and glassware at The Smoking Bee. Shop premium quality accessories today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/premium-smoking-accessories" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Premium Smoking Accessories | The Smoking Bee" />
        <meta name="twitter:description" content="Find the best smoking accessories, grinders, rolling trays, and glassware at The Smoking Bee. Shop premium quality accessories today." />
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
