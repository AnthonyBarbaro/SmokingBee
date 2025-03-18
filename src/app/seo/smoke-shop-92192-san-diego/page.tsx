import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92192 | Torrey Pines Area",
    description: "Torrey Pines area (92192) finds top vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
    keywords: "smoke shop 92192, torrey pines, kratom powders, hookah flavors",
    openGraph: {
      title: "Smoke Shop 92192 | Torrey Pines Area",
      description: "Torrey Pines area (92192) finds top vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92192-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92192 | Torrey Pines Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92192 | Torrey Pines Area",
      description: "Torrey Pines area (92192) finds top vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92192_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92192 | Torrey Pines Area</title>
        <meta name="description" content="Torrey Pines area (92192) finds top vaping gear, kratom powders, and hookah flavors at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92192, torrey pines, kratom powders, hookah flavors" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92192 | Torrey Pines Area" />
        <meta property="og:description" content="Torrey Pines area (92192) finds top vaping gear, kratom powders, and hookah flavors at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92192-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92192 | Torrey Pines Area" />
        <meta name="twitter:description" content="Torrey Pines area (92192) finds top vaping gear, kratom powders, and hookah flavors at The Smoking Bee." />
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
