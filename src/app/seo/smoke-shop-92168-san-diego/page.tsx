import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92168 | Midway District",
    description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168.",
    keywords: "smoke shop 92168, midway district, delta-8, rolling trays, glass bongs",
    openGraph: {
      title: "Smoke Shop 92168 | Midway District",
      description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168.",
      url: "https://thesmokingbee.com/smoke-shop-92168-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92168 | Midway District"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92168 | Midway District",
      description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92168_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92168 | Midway District</title>
        <meta name="description" content="Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168." />
        <meta name="keywords" content="smoke shop 92168, midway district, delta-8, rolling trays, glass bongs" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92168 | Midway District" />
        <meta property="og:description" content="Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92168-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92168 | Midway District" />
        <meta name="twitter:description" content="Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Find everything you need to roll and relax at our 92168 location, including Delta-8 and premium glass. Whether you want a discreet vape pen or a bold water pipe, we have a variety of options. Stop by and let us help you elevate your smoking experience in the Midway District.
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
