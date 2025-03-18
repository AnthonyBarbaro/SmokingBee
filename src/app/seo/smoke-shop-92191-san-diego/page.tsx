import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92191 | North City",
    description: "North City (92191) smokers love The Smoking Bee’s premium glass bongs, e-juices, and rolling trays.",
    keywords: "smoke shop 92191, north city, premium glass bongs, rolling trays",
    openGraph: {
      title: "Smoke Shop 92191 | North City",
      description: "North City (92191) smokers love The Smoking Bee’s premium glass bongs, e-juices, and rolling trays.",
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
      description: "North City (92191) smokers love The Smoking Bee’s premium glass bongs, e-juices, and rolling trays.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92191_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92191 | North City</title>
        <meta name="description" content="North City (92191) smokers love The Smoking Bee’s premium glass bongs, e-juices, and rolling trays." />
        <meta name="keywords" content="smoke shop 92191, north city, premium glass bongs, rolling trays" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92191 | North City" />
        <meta property="og:description" content="North City (92191) smokers love The Smoking Bee’s premium glass bongs, e-juices, and rolling trays." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92191-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92191 | North City" />
        <meta name="twitter:description" content="North City (92191) smokers love The Smoking Bee’s premium glass bongs, e-juices, and rolling trays." />
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
