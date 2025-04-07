import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92175 | Encanto / Emerald Hills",
    description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
    keywords: "smoke shop 92175, encanto, hookah flavors, rolling trays, accessories",
    openGraph: {
      title: "Smoke Shop 92175 | Encanto / Emerald Hills",
      description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-92175-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92175 | Encanto / Emerald Hills"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92175 | Encanto / Emerald Hills",
      description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92175_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92175 | Encanto / Emerald Hills</title>
        <meta name="description" content="Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories." />
        <meta name="keywords" content="smoke shop 92175, encanto, hookah flavors, rolling trays, accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92175 | Encanto / Emerald Hills" />
        <meta property="og:description" content="Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92175-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92175 | Encanto / Emerald Hills" />
        <meta name="twitter:description" content="Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We serve the Encanto/Emerald Hills area with flavorful hookah products, reliable trays, and more to enhance your sessions. Explore disposable vapes or check out the latest delta-8 tinctures if you want something different. Our staff is here to keep you informed so you can enjoy the best smoking experience.
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
