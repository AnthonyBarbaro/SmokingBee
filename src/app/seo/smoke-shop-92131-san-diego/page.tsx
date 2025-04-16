import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92131 | Scripps Ranch",
    description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
    keywords: "smoke shop 92131, scripps ranch, rolling trays, vape, delta-8",
    openGraph: {
      title: "Smoke Shop 92131 | Scripps Ranch",
      description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
      url: "https://thesmokingbee.com/smoke-shop-92131-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92131 | Scripps Ranch"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92131 | Scripps Ranch",
      description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92131_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92131 | Scripps Ranch</title>
        <meta name="description" content="Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8." />
        <meta name="keywords" content="smoke shop 92131, scripps ranch, rolling trays, vape, delta-8" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92131 | Scripps Ranch" />
        <meta property="og:description" content="Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92131-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92131 | Scripps Ranch" />
        <meta name="twitter:description" content="Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We bring top-tier rolling trays, Delta-8, and more to Scripps Ranch, ensuring you have a one-stop shop. Check out our carefully curated glass section for unique pieces you won’t find elsewhere. Need suggestions? Our staff can recommend the best setup for a smooth, flavorful session.
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
