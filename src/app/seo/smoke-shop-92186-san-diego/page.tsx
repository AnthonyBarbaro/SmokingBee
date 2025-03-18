import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92186 | Escondido Vicinity",
    description: "Close to Escondido at 92186? The Smoking Bee supplies best rolling trays, glass pipes, and kratom.",
    keywords: "smoke shop 92186, escondido area, rolling trays near me, best kratom",
    openGraph: {
      title: "Smoke Shop 92186 | Escondido Vicinity",
      description: "Close to Escondido at 92186? The Smoking Bee supplies best rolling trays, glass pipes, and kratom.",
      url: "https://thesmokingbee.com/smoke-shop-92186-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92186 | Escondido Vicinity"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92186 | Escondido Vicinity",
      description: "Close to Escondido at 92186? The Smoking Bee supplies best rolling trays, glass pipes, and kratom.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92186_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92186 | Escondido Vicinity</title>
        <meta name="description" content="Close to Escondido at 92186? The Smoking Bee supplies best rolling trays, glass pipes, and kratom." />
        <meta name="keywords" content="smoke shop 92186, escondido area, rolling trays near me, best kratom" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92186 | Escondido Vicinity" />
        <meta property="og:description" content="Close to Escondido at 92186? The Smoking Bee supplies best rolling trays, glass pipes, and kratom." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92186-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92186 | Escondido Vicinity" />
        <meta name="twitter:description" content="Close to Escondido at 92186? The Smoking Bee supplies best rolling trays, glass pipes, and kratom." />
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
