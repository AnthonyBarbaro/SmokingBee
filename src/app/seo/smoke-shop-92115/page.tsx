import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92115 | Near SDSU",
    description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
    keywords: "smoke shop 92115, sdsu, glass bongs, vapes near me, delta-8",
    openGraph: {
      title: "Smoke Shop 92115 | Near SDSU",
      description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
      url: "https://thesmokingbee.com/smoke-shop-92115",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92115 | Near SDSU"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92115 | Near SDSU",
      description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function smoke_shop_92115_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Smoke Shop 92115 | Near SDSU</title>
        <meta name="description" content="The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals." />
        <meta name="keywords" content="smoke shop 92115, sdsu, glass bongs, vapes near me, delta-8" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92115 | Near SDSU" />
        <meta property="og:description" content="The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92115" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92115 | Near SDSU" />
        <meta name="twitter:description" content="The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Just minutes from SDSU, we bring premium bongs, vape flavors, and kratom to the 92115 community. Grab a snack nearby and stop in to browse our new arrivals, from sleek handheld pipes to top-rated Delta-8 edibles. Whether you’re a seasoned enthusiast or curious beginner, we have you covered.
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
