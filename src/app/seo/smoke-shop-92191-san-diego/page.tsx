import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92191 | North City",
    description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
    keywords: "smoke shop 92191, north city, glass bongs, e-juices, rolling trays",
    openGraph: {
      title: "Smoke Shop 92191 | North City",
      description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
      url: "https://thesmokingbee.com/smoke-shop-92191-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92191 | North City"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92191 | North City",
      description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92191_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92191 | North City</title>
        <meta name="description" content="North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays." />
        <meta name="keywords" content="smoke shop 92191, north city, glass bongs, e-juices, rolling trays" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92191 | North City" />
        <meta property="og:description" content="North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92191-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92191 | North City" />
        <meta name="twitter:description" content="North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92191, browse our diverse collection of glass bongs, tasty e-juices, and sturdy rolling trays. Our shop prioritizes both style and function, so you can find sleek designs or vibrant printed gear. If you’re exploring delta-8 or advanced vaping mods, ask our staff for a tailored recommendation.
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
