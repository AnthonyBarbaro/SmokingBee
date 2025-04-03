import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92171 | Grantville Area",
    description: "Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke.",
    keywords: "smoke shop 92171, grantville, kratom, vape mods, rolling papers",
    openGraph: {
      title: "Smoke Shop 92171 | Grantville Area",
      description: "Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke.",
      url: "https://thesmokingbee.com/smoke-shop-92171-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92171 | Grantville Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92171 | Grantville Area",
      description: "Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92171_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92171 | Grantville Area</title>
        <meta name="description" content="Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke." />
        <meta name="keywords" content="smoke shop 92171, grantville, kratom, vape mods, rolling papers" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92171 | Grantville Area" />
        <meta property="og:description" content="Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92171-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92171 | Grantville Area" />
        <meta name="twitter:description" content="Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92171, we offer potent kratom, advanced vape mods, and rolling essentials to upgrade your sessions. Explore specialty glass options, or choose from an array of delta-8 gummies for a smoother experience. Our friendly staff is here to give suggestions that fit your routine and preferences.
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
