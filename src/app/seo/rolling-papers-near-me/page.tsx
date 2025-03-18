import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Find Rolling Papers Near You | The Smoking Bee",
    description: "Need rolling papers? Visit The Smoking Bee for the best selection of rolling papers, cones, and wraps for smoking.",
    keywords: "rolling papers near me, best rolling papers, buy rolling papers, smoke shop near me",
    openGraph: {
      title: "Find Rolling Papers Near You | The Smoking Bee",
      description: "Need rolling papers? Visit The Smoking Bee for the best selection of rolling papers, cones, and wraps for smoking.",
      url: "https://thesmokingbee.com/rolling-papers-near-me",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Find Rolling Papers Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Rolling Papers Near You | The Smoking Bee",
      description: "Need rolling papers? Visit The Smoking Bee for the best selection of rolling papers, cones, and wraps for smoking.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function rolling_papers_near_me_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Find Rolling Papers Near You | The Smoking Bee</title>
        <meta name="description" content="Need rolling papers? Visit The Smoking Bee for the best selection of rolling papers, cones, and wraps for smoking." />
        <meta name="keywords" content="rolling papers near me, best rolling papers, buy rolling papers, smoke shop near me" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Find Rolling Papers Near You | The Smoking Bee" />
        <meta property="og:description" content="Need rolling papers? Visit The Smoking Bee for the best selection of rolling papers, cones, and wraps for smoking." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/rolling-papers-near-me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Find Rolling Papers Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Need rolling papers? Visit The Smoking Bee for the best selection of rolling papers, cones, and wraps for smoking." />
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
