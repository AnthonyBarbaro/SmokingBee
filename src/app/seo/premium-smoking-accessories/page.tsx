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
    description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
    keywords: "smoking accessories, rolling trays, grinders, premium bongs, smoke shop",
    openGraph: {
      title: "Premium Smoking Accessories | The Smoking Bee",
      description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
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
      description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function premium_smoking_accessories_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Premium Smoking Accessories | The Smoking Bee</title>
        <meta name="description" content="Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today." />
        <meta name="keywords" content="smoking accessories, rolling trays, grinders, premium bongs, smoke shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Premium Smoking Accessories | The Smoking Bee" />
        <meta property="og:description" content="Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/premium-smoking-accessories" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Premium Smoking Accessories | The Smoking Bee" />
        <meta name="twitter:description" content="Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Upgrade your setup with our premium accessories—designed for durability and style to enhance every smoke. From sturdy metal grinders to sleek glass bongs, The Smoking Bee stocks top brands and unique finds. Let our staff recommend the perfect tray or rolling tool for a streamlined experience.
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
