import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92137 | Clairemont/Bay Park",
    description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
    keywords: "smoke shop 92137, bay park, rolling papers, glass bongs, kratom",
    openGraph: {
      title: "Smoke Shop 92137 | Clairemont/Bay Park",
      description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
      url: "https://thesmokingbee.com/smoke-shop-92137-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92137 | Clairemont/Bay Park"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92137 | Clairemont/Bay Park",
      description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92137_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92137 | Clairemont/Bay Park</title>
        <meta name="description" content="Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today." />
        <meta name="keywords" content="smoke shop 92137, bay park, rolling papers, glass bongs, kratom" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92137 | Clairemont/Bay Park" />
        <meta property="og:description" content="Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92137-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92137 | Clairemont/Bay Park" />
        <meta name="twitter:description" content="Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Serving Clairemont and Bay Park with a wide range of premium bongs, rolling papers, and high-quality kratom. Our inventory includes discreet vaporizers, artisan pipes, and popular Delta-8 lines. Swing by after exploring the bay to stock up on all your smoking essentials in one go.
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
