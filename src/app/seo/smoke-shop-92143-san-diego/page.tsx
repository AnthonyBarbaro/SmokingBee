import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92143 | Border Area",
    description: "Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes.",
    keywords: "smoke shop 92143, border area, vapes, kratom, glass pipes",
    openGraph: {
      title: "Smoke Shop 92143 | Border Area",
      description: "Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes.",
      url: "https://thesmokingbee.com/smoke-shop-92143-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92143 | Border Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92143 | Border Area",
      description: "Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92143_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92143 | Border Area</title>
        <meta name="description" content="Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes." />
        <meta name="keywords" content="smoke shop 92143, border area, vapes, kratom, glass pipes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92143 | Border Area" />
        <meta property="og:description" content="Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92143-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92143 | Border Area" />
        <meta name="twitter:description" content="Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Conveniently located near the border, we supply a variety of glass, kratom, and vape options. Explore new blends of shisha or discover the latest disposable pods for your busy lifestyle. Whether you’re commuting or just exploring, drop in for top-shelf smoking gear and friendly guidance.
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
