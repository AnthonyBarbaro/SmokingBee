import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92186 | Escondido Area",
    description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
    keywords: "smoke shop 92186, escondido area, rolling trays, glass pipes, kratom",
    openGraph: {
      title: "Smoke Shop 92186 | Escondido Area",
      description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
      url: "https://thesmokingbee.com/smoke-shop-92186-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92186 | Escondido Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92186 | Escondido Area",
      description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92186_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92186 | Escondido Area</title>
        <meta name="description" content="Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products." />
        <meta name="keywords" content="smoke shop 92186, escondido area, rolling trays, glass pipes, kratom" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92186 | Escondido Area" />
        <meta property="og:description" content="Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92186-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92186 | Escondido Area" />
        <meta name="twitter:description" content="Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We serve the greater Escondido region with well-crafted glass, sturdy rolling trays, and high-quality kratom. Looking for delta-8 carts or new vape flavors? Ask our staff for the best picks. We’re here to ensure both casual shoppers and seasoned pros find a product they’ll love.
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
