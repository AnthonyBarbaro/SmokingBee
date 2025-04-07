import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92173 | San Ysidro",
    description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
    keywords: "smoke shop 92173, san ysidro, vape pens, delta-8, smoking shop",
    openGraph: {
      title: "Smoke Shop 92173 | San Ysidro",
      description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
      url: "https://thesmokingbee.com/smoke-shop-92173-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92173 | San Ysidro"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92173 | San Ysidro",
      description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92173_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92173 | San Ysidro</title>
        <meta name="description" content="San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products." />
        <meta name="keywords" content="smoke shop 92173, san ysidro, vape pens, delta-8, smoking shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92173 | San Ysidro" />
        <meta property="og:description" content="San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92173-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92173 | San Ysidro" />
        <meta name="twitter:description" content="San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We pride ourselves on serving 92173 with a hand-picked assortment of vape pens and Delta-8 products. From flavorful pods to potent cartridges, find the perfect match for your style. Our approachable staff can recommend new glass pieces or the best rolling paper to maximize your enjoyment.
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
