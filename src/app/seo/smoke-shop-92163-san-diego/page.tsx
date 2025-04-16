import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92163 | University Heights / Hillcrest",
    description: "Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights.",
    keywords: "smoke shop 92163, hillcrest, delta-8, rolling papers, vape gear",
    openGraph: {
      title: "Smoke Shop 92163 | University Heights / Hillcrest",
      description: "Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights.",
      url: "https://thesmokingbee.com/smoke-shop-92163-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92163 | University Heights / Hillcrest"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92163 | University Heights / Hillcrest",
      description: "Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92163_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92163 | University Heights / Hillcrest</title>
        <meta name="description" content="Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights." />
        <meta name="keywords" content="smoke shop 92163, hillcrest, delta-8, rolling papers, vape gear" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92163 | University Heights / Hillcrest" />
        <meta property="og:description" content="Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92163-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92163 | University Heights / Hillcrest" />
        <meta name="twitter:description" content="Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We’re proud to supply the Hillcrest/University Heights area with the latest Delta-8 products and top vape accessories. Find high-quality rolling papers, chic glass pieces, or unique flavors to keep things interesting. Our friendly atmosphere makes it easy to browse, learn, and upgrade your smoking habits.
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
