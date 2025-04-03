import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92128 | Carmel Mountain",
    description: "In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee.",
    keywords: "smoke shop 92128, carmel mountain, glass bongs, rolling papers, accessories",
    openGraph: {
      title: "Smoke Shop 92128 | Carmel Mountain",
      description: "In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92128-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92128 | Carmel Mountain"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92128 | Carmel Mountain",
      description: "In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92128_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92128 | Carmel Mountain</title>
        <meta name="description" content="In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92128, carmel mountain, glass bongs, rolling papers, accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92128 | Carmel Mountain" />
        <meta property="og:description" content="In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92128-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92128 | Carmel Mountain" />
        <meta name="twitter:description" content="In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Residents of Carmel Mountain can rely on us for a variety of bongs, rolling papers, and unique accessories. Ask about Delta-8 edibles or check out our stash boxes to keep everything organized. Enjoy personalized advice from our staff, whether you’re new to the scene or a seasoned smoker.
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
