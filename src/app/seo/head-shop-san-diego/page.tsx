import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "San Diego’s Best Head Shop | The Smoking Bee",
    description: "Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more.",
    keywords: "head shop san diego, premium bongs, grinders, rolling trays, smoking accessories",
    openGraph: {
      title: "San Diego’s Best Head Shop | The Smoking Bee",
      description: "Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more.",
      url: "https://thesmokingbee.com/head-shop-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "San Diego’s Best Head Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "San Diego’s Best Head Shop | The Smoking Bee",
      description: "Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function head_shop_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>San Diego’s Best Head Shop | The Smoking Bee</title>
        <meta name="description" content="Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more." />
        <meta name="keywords" content="head shop san diego, premium bongs, grinders, rolling trays, smoking accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="San Diego’s Best Head Shop | The Smoking Bee" />
        <meta property="og:description" content="Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/head-shop-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="San Diego’s Best Head Shop | The Smoking Bee" />
        <meta name="twitter:description" content="Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our San Diego shop is packed with premium bongs, grinders, and rolling trays—perfect for every enthusiast. Enjoy a wide variety of local glass and accessories, each selected for quality and performance. Whether you’re a casual user or a collector, come see why we’re a top head shop in the city.
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
