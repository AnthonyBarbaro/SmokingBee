import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92169 | Pacific Beach",
    description: "PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies.",
    keywords: "smoke shop 92169, pacific beach, disposable vapes, glass accessories, hookah",
    openGraph: {
      title: "Smoke Shop 92169 | Pacific Beach",
      description: "PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies.",
      url: "https://thesmokingbee.com/smoke-shop-92169-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92169 | Pacific Beach"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92169 | Pacific Beach",
      description: "PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92169_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92169 | Pacific Beach</title>
        <meta name="description" content="PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies." />
        <meta name="keywords" content="smoke shop 92169, pacific beach, disposable vapes, glass accessories, hookah" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92169 | Pacific Beach" />
        <meta property="og:description" content="PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92169-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92169 | Pacific Beach" />
        <meta name="twitter:description" content="PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Make the most of Pacific Beach living with our top-quality disposables, glass gear, and hookah products. From bright, fruity e-liquids to robust delta-8 edibles, you can find it here. Swing by after catching the sunset on the beach to refresh your collection with the latest arrivals.
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
