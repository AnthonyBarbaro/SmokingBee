import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92145 | Miramar Air Base",
    description: "Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee.",
    keywords: "smoke shop 92145, miramar, hookah, glass bongs, disposable vapes",
    openGraph: {
      title: "Smoke Shop 92145 | Miramar Air Base",
      description: "Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92145-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92145 | Miramar Air Base"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92145 | Miramar Air Base",
      description: "Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92145_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92145 | Miramar Air Base</title>
        <meta name="description" content="Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92145, miramar, hookah, glass bongs, disposable vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92145 | Miramar Air Base" />
        <meta property="og:description" content="Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92145-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92145 | Miramar Air Base" />
        <meta name="twitter:description" content="Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Close to Miramar, our inventory includes popular hookah flavors, top glass bongs, and convenient disposables. Swing by to restock on coils, pick out a novelty lighter, or sample new delta-8 edibles. Our staff is here to make sure you get the ultimate smoking experience, every time.
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
