import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Glass Bongs for Sale | The Smoking Bee",
    description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today.",
    keywords: "glass bongs for sale, water pipes, dab rigs, head shop, premium bongs",
    openGraph: {
      title: "Glass Bongs for Sale | The Smoking Bee",
      description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today.",
      url: "https://thesmokingbee.com/glass-bongs-for-sale",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Glass Bongs for Sale | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Glass Bongs for Sale | The Smoking Bee",
      description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function glass_bongs_for_sale_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Glass Bongs for Sale | The Smoking Bee</title>
        <meta name="description" content="Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today." />
        <meta name="keywords" content="glass bongs for sale, water pipes, dab rigs, head shop, premium bongs" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Glass Bongs for Sale | The Smoking Bee" />
        <meta property="og:description" content="Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/glass-bongs-for-sale" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Glass Bongs for Sale | The Smoking Bee" />
        <meta name="twitter:description" content="Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Whether you’re into water pipes or dab rigs, The Smoking Bee has a curated selection for the perfect smoking session. Find thick borosilicate glass, intricate designs, and respected artisan brands. With multiple sizes and styles, we’ll help you pick the ideal bong for cool, satisfying hits each time.
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
