import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92153 | Otay Mesa",
    description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
    keywords: "smoke shop 92153, otay mesa, rolling papers, disposable vapes, glass",
    openGraph: {
      title: "Smoke Shop 92153 | Otay Mesa",
      description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92153-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92153 | Otay Mesa"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92153 | Otay Mesa",
      description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92153_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92153 | Otay Mesa</title>
        <meta name="description" content="Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more." />
        <meta name="keywords" content="smoke shop 92153, otay mesa, rolling papers, disposable vapes, glass" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92153 | Otay Mesa" />
        <meta property="og:description" content="Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92153-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92153 | Otay Mesa" />
        <meta name="twitter:description" content="Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We carry popular rolling papers, disposable vapes, and reliable glass for the 92153 Otay Mesa community. Pick up a quick on-the-go vape or delve into our artisan pipe collection. Our rotating selection of delta-8 ensures there’s always something new to try for a personalized experience.
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
