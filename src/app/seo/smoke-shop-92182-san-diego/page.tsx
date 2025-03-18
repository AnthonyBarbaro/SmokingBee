import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92182 | SDSU Area",
    description: "SDSU students in 92182 rely on The Smoking Bee for top-shelf rolling papers, kratom, and vape pods.",
    keywords: "smoke shop 92182, sdsu, top-shelf rolling papers, vape pods",
    openGraph: {
      title: "Smoke Shop 92182 | SDSU Area",
      description: "SDSU students in 92182 rely on The Smoking Bee for top-shelf rolling papers, kratom, and vape pods.",
      url: "https://thesmokingbee.com/smoke-shop-92182-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92182 | SDSU Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92182 | SDSU Area",
      description: "SDSU students in 92182 rely on The Smoking Bee for top-shelf rolling papers, kratom, and vape pods.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92182_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Smoke Shop 92182 | SDSU Area</title>
        <meta name="description" content="SDSU students in 92182 rely on The Smoking Bee for top-shelf rolling papers, kratom, and vape pods." />
        <meta name="keywords" content="smoke shop 92182, sdsu, top-shelf rolling papers, vape pods" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92182 | SDSU Area" />
        <meta property="og:description" content="SDSU students in 92182 rely on The Smoking Bee for top-shelf rolling papers, kratom, and vape pods." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92182-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92182 | SDSU Area" />
        <meta name="twitter:description" content="SDSU students in 92182 rely on The Smoking Bee for top-shelf rolling papers, kratom, and vape pods." />
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
