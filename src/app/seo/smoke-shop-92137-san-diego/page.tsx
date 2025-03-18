import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92137 | Clairemont/Bay Park",
    description: "Bay Park’s #1 shop for rolling papers, glass bongs, and kratom. Check out The Smoking Bee at 92137.",
    keywords: "smoke shop 92137, bay park, best bongs, kratom near me",
    openGraph: {
      title: "Smoke Shop 92137 | Clairemont/Bay Park",
      description: "Bay Park’s #1 shop for rolling papers, glass bongs, and kratom. Check out The Smoking Bee at 92137.",
      url: "https://thesmokingbee.com/smoke-shop-92137-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92137 | Clairemont/Bay Park"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92137 | Clairemont/Bay Park",
      description: "Bay Park’s #1 shop for rolling papers, glass bongs, and kratom. Check out The Smoking Bee at 92137.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92137_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92137 | Clairemont/Bay Park</title>
        <meta name="description" content="Bay Park’s #1 shop for rolling papers, glass bongs, and kratom. Check out The Smoking Bee at 92137." />
        <meta name="keywords" content="smoke shop 92137, bay park, best bongs, kratom near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92137 | Clairemont/Bay Park" />
        <meta property="og:description" content="Bay Park’s #1 shop for rolling papers, glass bongs, and kratom. Check out The Smoking Bee at 92137." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92137-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92137 | Clairemont/Bay Park" />
        <meta name="twitter:description" content="Bay Park’s #1 shop for rolling papers, glass bongs, and kratom. Check out The Smoking Bee at 92137." />
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
