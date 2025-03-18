import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Find Kratom Near You | The Smoking Bee",
    description: "Looking for high-quality kratom? The Smoking Bee offers premium kratom powders and capsules near you.",
    keywords: "kratom shop near me, best kratom store, kratom capsules, kratom powder, kratom La Mesa",
    openGraph: {
      title: "Find Kratom Near You | The Smoking Bee",
      description: "Looking for high-quality kratom? The Smoking Bee offers premium kratom powders and capsules near you.",
      url: "https://thesmokingbee.com/kratom-shop-near-me",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Find Kratom Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Kratom Near You | The Smoking Bee",
      description: "Looking for high-quality kratom? The Smoking Bee offers premium kratom powders and capsules near you.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function kratom_shop_near_me_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Find Kratom Near You | The Smoking Bee</title>
        <meta name="description" content="Looking for high-quality kratom? The Smoking Bee offers premium kratom powders and capsules near you." />
        <meta name="keywords" content="kratom shop near me, best kratom store, kratom capsules, kratom powder, kratom La Mesa" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Find Kratom Near You | The Smoking Bee" />
        <meta property="og:description" content="Looking for high-quality kratom? The Smoking Bee offers premium kratom powders and capsules near you." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/kratom-shop-near-me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Find Kratom Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Looking for high-quality kratom? The Smoking Bee offers premium kratom powders and capsules near you." />
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
