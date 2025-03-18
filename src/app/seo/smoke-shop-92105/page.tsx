import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92105 | San Diego's Best in City Heights",
    description: "City Heights top smoke shop! Find premium rolling papers, kratom, and more in the 92105 zip code area.",
    keywords: "smoke shop 92105, city heights smoke shop, best rolling papers 92105, kratom near me",
    openGraph: {
      title: "Smoke Shop 92105 | San Diego's Best in City Heights",
      description: "City Heights top smoke shop! Find premium rolling papers, kratom, and more in the 92105 zip code area.",
      url: "https://thesmokingbee.com/smoke-shop-92105",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92105 | San Diego's Best in City Heights"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92105 | San Diego's Best in City Heights",
      description: "City Heights top smoke shop! Find premium rolling papers, kratom, and more in the 92105 zip code area.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92105_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92105 | San Diego's Best in City Heights</title>
        <meta name="description" content="City Heights top smoke shop! Find premium rolling papers, kratom, and more in the 92105 zip code area." />
        <meta name="keywords" content="smoke shop 92105, city heights smoke shop, best rolling papers 92105, kratom near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92105 | San Diego's Best in City Heights" />
        <meta property="og:description" content="City Heights top smoke shop! Find premium rolling papers, kratom, and more in the 92105 zip code area." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92105" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92105 | San Diego's Best in City Heights" />
        <meta name="twitter:description" content="City Heights top smoke shop! Find premium rolling papers, kratom, and more in the 92105 zip code area." />
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
