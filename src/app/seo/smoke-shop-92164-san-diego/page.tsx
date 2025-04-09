import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92164 | Mission Valley",
    description: "Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164).",
    keywords: "smoke shop 92164, mission valley, glass pipes, vapes, hookah supplies",
    openGraph: {
      title: "Smoke Shop 92164 | Mission Valley",
      description: "Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164).",
      url: "https://thesmokingbee.com/smoke-shop-92164-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92164 | Mission Valley"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92164 | Mission Valley",
      description: "Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164).",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92164_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92164 | Mission Valley</title>
        <meta name="description" content="Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164)." />
        <meta name="keywords" content="smoke shop 92164, mission valley, glass pipes, vapes, hookah supplies" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92164 | Mission Valley" />
        <meta property="og:description" content="Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164)." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92164-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92164 | Mission Valley" />
        <meta name="twitter:description" content="Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164)." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In the 92164 region, we offer a curated inventory of pipes, vapes, and hookah essentials to satisfy any preference. Explore flavorful e-liquids, high-grade kratom, or the latest delta-8 cartridges. Whether you’re stocking up or searching for something new, we aim to exceed your expectations.
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
