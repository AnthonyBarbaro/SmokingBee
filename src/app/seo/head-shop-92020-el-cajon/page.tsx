import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Head Shop 92020 | El Cajon’s Best Smoking Accessories",
    description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Serving the 92020 zip code area with premium smoking accessories.",
    keywords: "head shop 92020, el cajon smoke shop, rolling trays 92020, best glass pipes",
    openGraph: {
      title: "Head Shop 92020 | El Cajon’s Best Smoking Accessories",
      description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Serving the 92020 zip code area with premium smoking accessories.",
      url: "https://thesmokingbee.com/head-shop-92020-el-cajon",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Head Shop 92020 | El Cajon’s Best Smoking Accessories"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Head Shop 92020 | El Cajon’s Best Smoking Accessories",
      description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Serving the 92020 zip code area with premium smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function head_shop_92020_el_cajon_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  return (
    <>
      <Head>
        <title>Head Shop 92020 | El Cajon’s Best Smoking Accessories</title>
        <meta name="description" content="El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Serving the 92020 zip code area with premium smoking accessories." />
        <meta name="keywords" content="head shop 92020, el cajon smoke shop, rolling trays 92020, best glass pipes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Head Shop 92020 | El Cajon’s Best Smoking Accessories" />
        <meta property="og:description" content="El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Serving the 92020 zip code area with premium smoking accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/head-shop-92020-el-cajon" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Head Shop 92020 | El Cajon’s Best Smoking Accessories" />
        <meta name="twitter:description" content="El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Serving the 92020 zip code area with premium smoking accessories." />
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
