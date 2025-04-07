import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92121 | Sorrento Valley",
    description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
    keywords: "smoke shop 92121, sorrento valley, delta-8, glass pipes, vapes",
    openGraph: {
      title: "Smoke Shop 92121 | Sorrento Valley",
      description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
      url: "https://thesmokingbee.com/smoke-shop-92121-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92121 | Sorrento Valley"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92121 | Sorrento Valley",
      description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92121_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92121 | Sorrento Valley</title>
        <meta name="description" content="Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience." />
        <meta name="keywords" content="smoke shop 92121, sorrento valley, delta-8, glass pipes, vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92121 | Sorrento Valley" />
        <meta property="og:description" content="Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92121-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92121 | Sorrento Valley" />
        <meta name="twitter:description" content="Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In Sorrento Valley (92121), our shelves are stocked with high-quality glass and potent Delta-8 for a satisfying session. Check out new arrivals or ask about recommended hardware upgrades for your vape. We’re conveniently located for professionals in the area looking to unwind with premium smoking products.
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
