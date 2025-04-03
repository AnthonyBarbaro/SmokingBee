import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
    description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
    keywords: "smoke shop chula vista, kratom near me, vapes, rolling accessories, glass pipes",
    openGraph: {
      title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
      description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
      url: "https://thesmokingbee.com/smoke-shop-chula-vista",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Top Smoke Shop in Chula Vista | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
      description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_chula_vista_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Top Smoke Shop in Chula Vista | The Smoking Bee</title>
        <meta name="description" content="Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products." />
        <meta name="keywords" content="smoke shop chula vista, kratom near me, vapes, rolling accessories, glass pipes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Top Smoke Shop in Chula Vista | The Smoking Bee" />
        <meta property="og:description" content="Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-chula-vista" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Top Smoke Shop in Chula Vista | The Smoking Bee" />
        <meta name="twitter:description" content="Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Serving Chula Vista with a vast range of glass pipes, kratom, and vapes, The Smoking Bee is your one-stop shop for top-tier smoking needs. Discover our selection of local and popular brand products, from unique rolling trays to flavorful e-liquids. We’re located near major thoroughfares, making it easy to swing by.
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
