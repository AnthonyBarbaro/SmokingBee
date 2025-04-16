import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92150 | Rancho Santa Fe",
    description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
    keywords: "smoke shop 92150, rancho santa fe, delta-8, smoking accessories, vapes",
    openGraph: {
      title: "Smoke Shop 92150 | Rancho Santa Fe",
      description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92150-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92150 | Rancho Santa Fe"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92150 | Rancho Santa Fe",
      description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92150_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92150 | Rancho Santa Fe</title>
        <meta name="description" content="Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92150, rancho santa fe, delta-8, smoking accessories, vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92150 | Rancho Santa Fe" />
        <meta property="og:description" content="Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92150-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92150 | Rancho Santa Fe" />
        <meta name="twitter:description" content="Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Enhance your Rancho Santa Fe sessions with our top-tier delta-8, vapes, and must-have accessories. Try a fresh e-liquid flavor or browse our decorative rolling trays. Our knowledgeable staff loves helping folks discover new ways to customize their smoking experience in a refined, comfortable setting.
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
