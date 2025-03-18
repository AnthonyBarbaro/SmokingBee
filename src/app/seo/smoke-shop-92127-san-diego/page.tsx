import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92127 | Rancho Bernardo’s Finest",
    description: "Looking for a smoke shop in 92127? The Smoking Bee serves Rancho Bernardo with premium vapes and accessories.",
    keywords: "smoke shop 92127, rancho bernardo smoke shop, best vapes 92127",
    openGraph: {
      title: "Smoke Shop 92127 | Rancho Bernardo’s Finest",
      description: "Looking for a smoke shop in 92127? The Smoking Bee serves Rancho Bernardo with premium vapes and accessories.",
      url: "https://thesmokingbee.com/smoke-shop-92127-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92127 | Rancho Bernardo’s Finest"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92127 | Rancho Bernardo’s Finest",
      description: "Looking for a smoke shop in 92127? The Smoking Bee serves Rancho Bernardo with premium vapes and accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92127_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92127 | Rancho Bernardo’s Finest</title>
        <meta name="description" content="Looking for a smoke shop in 92127? The Smoking Bee serves Rancho Bernardo with premium vapes and accessories." />
        <meta name="keywords" content="smoke shop 92127, rancho bernardo smoke shop, best vapes 92127" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92127 | Rancho Bernardo’s Finest" />
        <meta property="og:description" content="Looking for a smoke shop in 92127? The Smoking Bee serves Rancho Bernardo with premium vapes and accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92127-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92127 | Rancho Bernardo’s Finest" />
        <meta name="twitter:description" content="Looking for a smoke shop in 92127? The Smoking Bee serves Rancho Bernardo with premium vapes and accessories." />
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
