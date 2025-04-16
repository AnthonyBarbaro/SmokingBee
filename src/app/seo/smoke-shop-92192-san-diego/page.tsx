import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92192 | Torrey Pines",
    description: "Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
    keywords: "smoke shop 92192, torrey pines, kratom powders, hookah flavors, vaping gear",
    openGraph: {
      title: "Smoke Shop 92192 | Torrey Pines",
      description: "Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92192-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92192 | Torrey Pines"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92192 | Torrey Pines",
      description: "Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92192_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92192 | Torrey Pines</title>
        <meta name="description" content="Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92192, torrey pines, kratom powders, hookah flavors, vaping gear" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92192 | Torrey Pines" />
        <meta property="og:description" content="Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92192-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92192 | Torrey Pines" />
        <meta name="twitter:description" content="Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Serving Torrey Pines with a variety of premium kratom, hookah blends, and cutting-edge vaping devices. Grab your new glass piece or snag a discreet pen for quick sessions. After a scenic hike, reward yourself with top-tier smoking essentials or relax with our potent delta-8 products.
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
