import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92152 | Silver Strand / Coronado",
    description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
    keywords: "smoke shop 92152, silver strand, glass bongs, hookah flavors, vapes",
    openGraph: {
      title: "Smoke Shop 92152 | Silver Strand / Coronado",
      description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92152-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92152 | Silver Strand / Coronado"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92152 | Silver Strand / Coronado",
      description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92152_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92152 | Silver Strand / Coronado</title>
        <meta name="description" content="Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92152, silver strand, glass bongs, hookah flavors, vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92152 | Silver Strand / Coronado" />
        <meta property="og:description" content="Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92152-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92152 | Silver Strand / Coronado" />
        <meta name="twitter:description" content="Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In the Silver Strand area, choose from our wide variety of bongs, vapes, and hookah selections. We’ve got everything from mild to intense flavors, plus delta-8 products for a modern twist. Relax by the beach, then drop by for fresh supplies or an upgrade to your existing setup.
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
