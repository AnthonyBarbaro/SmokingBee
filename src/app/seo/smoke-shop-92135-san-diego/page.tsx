import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92135 | Coronado Naval Area",
    description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
    keywords: "smoke shop 92135, coronado, glass pipes, kratom, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92135 | Coronado Naval Area",
      description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
      url: "https://thesmokingbee.com/smoke-shop-92135-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92135 | Coronado Naval Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92135 | Coronado Naval Area",
      description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92135_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92135 | Coronado Naval Area</title>
        <meta name="description" content="In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs." />
        <meta name="keywords" content="smoke shop 92135, coronado, glass pipes, kratom, smoking accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92135 | Coronado Naval Area" />
        <meta property="og:description" content="In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92135-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92135 | Coronado Naval Area" />
        <meta name="twitter:description" content="In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Stop by near Coronado to browse our top-notch glass pipes and kratom selections, perfect for any smoker. We stock reputable e-liquid brands, plus a variety of Delta-8 cartridges for those seeking a unique alternative. Enjoy local charm while finding everything you need in one friendly stop.
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
