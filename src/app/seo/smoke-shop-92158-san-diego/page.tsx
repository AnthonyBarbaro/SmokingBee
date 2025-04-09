import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92158 | Imperial Beach",
    description: "Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee.",
    keywords: "smoke shop 92158, imperial beach, hookah flavors, glass pipes, best smoke shop",
    openGraph: {
      title: "Smoke Shop 92158 | Imperial Beach",
      description: "Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92158-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92158 | Imperial Beach"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92158 | Imperial Beach",
      description: "Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92158_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92158 | Imperial Beach</title>
        <meta name="description" content="Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92158, imperial beach, hookah flavors, glass pipes, best smoke shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92158 | Imperial Beach" />
        <meta property="og:description" content="Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92158-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92158 | Imperial Beach" />
        <meta name="twitter:description" content="Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Experience our range of hookah flavors and glassware, tailored for the Imperial Beach community. Check out new vape arrivals, try delta-8 edibles, or grab a travel-friendly pipe. Our knowledgeable staff can point you to the right product for a mellow evening by the beach or a lively gathering.
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
