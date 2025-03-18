import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92131 | Scripps Ranch’s Choice",
    description: "Scripps Ranch (92131) smokers love The Smoking Bee for premium rolling trays, vape products, and more.",
    keywords: "smoke shop 92131, scripps ranch, best rolling trays, vape near me",
    openGraph: {
      title: "Smoke Shop 92131 | Scripps Ranch’s Choice",
      description: "Scripps Ranch (92131) smokers love The Smoking Bee for premium rolling trays, vape products, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92131-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92131 | Scripps Ranch’s Choice"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92131 | Scripps Ranch’s Choice",
      description: "Scripps Ranch (92131) smokers love The Smoking Bee for premium rolling trays, vape products, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92131_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92131 | Scripps Ranch’s Choice</title>
        <meta name="description" content="Scripps Ranch (92131) smokers love The Smoking Bee for premium rolling trays, vape products, and more." />
        <meta name="keywords" content="smoke shop 92131, scripps ranch, best rolling trays, vape near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92131 | Scripps Ranch’s Choice" />
        <meta property="og:description" content="Scripps Ranch (92131) smokers love The Smoking Bee for premium rolling trays, vape products, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92131-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92131 | Scripps Ranch’s Choice" />
        <meta name="twitter:description" content="Scripps Ranch (92131) smokers love The Smoking Bee for premium rolling trays, vape products, and more." />
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
