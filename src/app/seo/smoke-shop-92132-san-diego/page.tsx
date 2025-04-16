import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92132 | Central San Diego",
    description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
    keywords: "smoke shop 92132, central san diego, glass pipes, delta-8, smoking supplies",
    openGraph: {
      title: "Smoke Shop 92132 | Central San Diego",
      description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
      url: "https://thesmokingbee.com/smoke-shop-92132-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92132 | Central San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92132 | Central San Diego",
      description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92132_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92132 | Central San Diego</title>
        <meta name="description" content="Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD." />
        <meta name="keywords" content="smoke shop 92132, central san diego, glass pipes, delta-8, smoking supplies" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92132 | Central San Diego" />
        <meta property="og:description" content="Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92132-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92132 | Central San Diego" />
        <meta name="twitter:description" content="Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Conveniently located in central San Diego, we offer a full range of pipes, Delta-8, and accessories. From discreet vape pods to robust glass bongs, there’s something for everyone. Come experience friendly service, fair pricing, and a welcoming space that keeps customers returning.
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
