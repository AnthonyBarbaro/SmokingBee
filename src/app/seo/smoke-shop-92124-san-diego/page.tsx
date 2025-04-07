import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92124 | Tierrasanta",
    description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
    keywords: "smoke shop 92124, tierrasanta, bongs, vape pens, kratom",
    openGraph: {
      title: "Smoke Shop 92124 | Tierrasanta",
      description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
      url: "https://thesmokingbee.com/smoke-shop-92124-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92124 | Tierrasanta"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92124 | Tierrasanta",
      description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92124_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92124 | Tierrasanta</title>
        <meta name="description" content="Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop." />
        <meta name="keywords" content="smoke shop 92124, tierrasanta, bongs, vape pens, kratom" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92124 | Tierrasanta" />
        <meta property="og:description" content="Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92124-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92124 | Tierrasanta" />
        <meta name="twitter:description" content="Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            At The Smoking Bee Tierrasanta, discover an array of vape pens, bongs, and kratom tailored to your lifestyle. Whether you’re after a portable device or a new water pipe for home, we offer trusted brands and local artistry. Elevate your daily routine or weekend unwind with high-quality options.
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
