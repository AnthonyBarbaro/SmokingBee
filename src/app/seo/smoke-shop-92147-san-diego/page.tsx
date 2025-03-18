import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92147 | Point Loma Naval Area",
    description: "Point Loma (92147) smokers find premium Delta-8, rolling trays, and more at The Smoking Bee.",
    keywords: "smoke shop 92147, point loma, delta-8 near me, rolling trays 92147",
    openGraph: {
      title: "Smoke Shop 92147 | Point Loma Naval Area",
      description: "Point Loma (92147) smokers find premium Delta-8, rolling trays, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92147-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92147 | Point Loma Naval Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92147 | Point Loma Naval Area",
      description: "Point Loma (92147) smokers find premium Delta-8, rolling trays, and more at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92147_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92147 | Point Loma Naval Area</title>
        <meta name="description" content="Point Loma (92147) smokers find premium Delta-8, rolling trays, and more at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92147, point loma, delta-8 near me, rolling trays 92147" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92147 | Point Loma Naval Area" />
        <meta property="og:description" content="Point Loma (92147) smokers find premium Delta-8, rolling trays, and more at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92147-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92147 | Point Loma Naval Area" />
        <meta name="twitter:description" content="Point Loma (92147) smokers find premium Delta-8, rolling trays, and more at The Smoking Bee." />
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
