import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92177 | Linda Vista",
    description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
    keywords: "smoke shop 92177, linda vista, delta-8, disposable vapes, water pipes",
    openGraph: {
      title: "Smoke Shop 92177 | Linda Vista",
      description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
      url: "https://thesmokingbee.com/smoke-shop-92177-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92177 | Linda Vista"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92177 | Linda Vista",
      description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92177_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92177 | Linda Vista</title>
        <meta name="description" content="Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177." />
        <meta name="keywords" content="smoke shop 92177, linda vista, delta-8, disposable vapes, water pipes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92177 | Linda Vista" />
        <meta property="og:description" content="Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92177-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92177 | Linda Vista" />
        <meta name="twitter:description" content="Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Discover our broad Delta-8 offerings, water pipes, and disposables in the Linda Vista neighborhood. Pick up a quick travel-friendly device or browse statement glass pieces for your home setup. We constantly update our selection so you can enjoy fresh flavors and modern hardware any time you visit.
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
